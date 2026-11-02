/* ============================================================
   POLYMATH ACADEMY — serveur de comptes (Google Apps Script)
   Stockage : le Google Sheet « Polymath Academy — Comptes ».

   Comptes v2 :
   - inscription : pseudo + e-mail + mot de passe, validée par un
     code à 6 chiffres envoyé par e-mail ;
   - connexion : e-mail + mot de passe (blocage après 5 échecs) ;
   - mot de passe oublié : code par e-mail puis nouveau mot de passe ;
   - gestion du compte : pseudo, mot de passe, e-mail, appareils
     connectés, suppression du compte.
   Les comptes créés avant (connexion par code) restent valides :
   leur propriétaire définit un mot de passe via « mot de passe
   oublié ».

   Les mots de passe ne sont jamais stockés : seulement une
   empreinte (HMAC-SHA-256 itéré, sel propre à chaque compte).

   Installation / mise à jour :
   1. Ouvrir le Sheet > Extensions > Apps Script, remplacer le code
      par ce fichier, enregistrer.
   2. (Première installation seulement) exécuter « setup ».
   3. Déployer > Gérer les déploiements > crayon > Version :
      « Nouvelle version » > Déployer. L’URL /exec ne change pas.
   ============================================================ */

const SHEET_ID = "1Dqax1BzRrUu0eWNI6HR9bxjOur3HDiw5nPxYeKLreCY";
const APP_NAME = "Polymath Academy";
const CODE_TTL_MIN = 15;       // validité d’un code
const MAX_CODES_PER_HOUR = 4;  // anti-abus par adresse
const MAX_ATTEMPTS = 5;        // essais par code
const MAX_FAILS = 5;           // mots de passe faux avant blocage
const LOCK_MIN = 15;           // durée du blocage
const PW_ITER = 400;           // itérations de l’empreinte
const CHUNK = 45000;           // une cellule accepte 50 000 caractères
const DATA_COL = 8;            // colonne H : début des données de progression

const USERS = "Utilisateurs", CODES = "Codes", SESSIONS = "Sessions", PROFILES = "Profils";
const HEADERS = {
  [USERS]: ["E-mail", "Inscrit le", "Dernière synchro", "XP", "Rang", "Séances terminées", "Taille (car.)", "Données →"],
  [CODES]: ["E-mail", "Empreinte du code", "Expire le", "Essais", "Créé le"],
  [SESSIONS]: ["Empreinte du jeton", "E-mail", "Créée le", "Dernière utilisation", "Appareil"],
  [PROFILES]: ["E-mail", "Pseudo", "Empreinte du mot de passe", "Sel", "Vérifié", "Créé le", "Dernière connexion", "Échecs", "Bloqué jusqu’à"],
};
// colonnes de l’onglet Profils (index 0)
const P = { email: 0, pseudo: 1, pw: 2, salt: 3, verified: 4, created: 5, lastLogin: 6, fails: 7, lockUntil: 8 };
const RANKS = [[0, "Curieux"], [100, "Apprenti"], [300, "Initié"], [600, "Explorateur"], [1000, "Confirmé"], [1500, "Expert"], [2200, "Érudit"], [3000, "Maître"], [4000, "Polymathe"]];

/* ---------------------- installation ---------------------- */
function setup() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  Object.keys(HEADERS).forEach((name) => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, HEADERS[name].length).setValues([HEADERS[name]]).setFontWeight("bold");
    sh.setFrozenRows(1);
  });
  salt_();
  MailApp.getRemainingDailyQuota(); // déclenche l’autorisation d’envoi d’e-mails
  return "OK";
}

/* ------------------------- routes ------------------------- */
function doGet() {
  return json_({ ok: true, app: APP_NAME, version: 2 });
}

const ROUTES = {
  signup: signup_,
  verifySignup: verifySignup_,
  resendSignup: resendSignup_,
  login: login_,
  requestReset: requestReset_,
  resetPassword: resetPassword_,
  me: me_,
  updateProfile: updateProfile_,
  changePassword: changePassword_,
  requestEmailChange: requestEmailChange_,
  confirmEmailChange: confirmEmailChange_,
  logoutOthers: logoutOthers_,
  deleteAccount: deleteAccount_,
  pull: pull_,
  push: push_,
  logout: logout_,
  // anciennes routes (connexion par code), gardées pour compatibilité
  requestCode: (b) => requestCode_(b),
  verify: (b) => verify_(b),
};

function doPost(e) {
  let body = {};
  try {
    body = JSON.parse((e.postData && e.postData.contents) || "{}");
  } catch (err) {
    return json_({ ok: false, error: "bad_request" });
  }
  const fn = ROUTES[body.action];
  if (!fn) return json_({ ok: false, error: "unknown_action" });
  try {
    return json_(fn(body));
  } catch (err) {
    return json_({ ok: false, error: "server", detail: String(err) });
  }
}

/* ----------------------- inscription ---------------------- */
function signup_(b) {
  const email = normEmail_(b.email);
  if (!email) return { ok: false, error: "bad_email" };
  const pseudo = normPseudo_(b.pseudo);
  if (!pseudo) return { ok: false, error: "bad_pseudo" };
  const pwErr = checkPassword_(b.password);
  if (pwErr) return { ok: false, error: pwErr };
  return withLock_(() => {
    const p = findProfile_(email);
    if (p && p.r[P.verified] === true && p.r[P.pw]) return { ok: false, error: "exists" };
    const salt = Utilities.getUuid();
    const row = [email, pseudo, pwHash_(b.password, salt), salt, false, new Date(), "", 0, 0];
    if (p) sheet_(PROFILES).getRange(p.row, 1, 1, row.length).setValues([row]);
    else sheet_(PROFILES).appendRow(row);
    const sent = sendCode_(email, "signup", "Bienvenue ! Voici ton code pour activer ton compte");
    if (!sent.ok) return sent;
    return { ok: true };
  });
}

function resendSignup_(b) {
  const email = normEmail_(b.email);
  if (!email) return { ok: false, error: "bad_email" };
  return withLock_(() => {
    const p = findProfile_(email);
    if (!p || p.r[P.verified] === true) return { ok: false, error: "no_code" };
    return sendCode_(email, "signup", "Voici ton code pour activer ton compte");
  });
}

function verifySignup_(b) {
  const email = normEmail_(b.email);
  if (!email) return { ok: false, error: "bad_email" };
  return withLock_(() => {
    const p = findProfile_(email);
    if (!p) return { ok: false, error: "no_code" };
    const c = checkCode_(email, "signup", b.code);
    if (!c.ok) return c;
    const sh = sheet_(PROFILES);
    sh.getRange(p.row, P.verified + 1).setValue(true);
    sh.getRange(p.row, P.lastLogin + 1).setValue(new Date());
    ensureUser_(email);
    return openSession_(email, b.device);
  });
}

/* ------------------------ connexion ----------------------- */
function login_(b) {
  const email = normEmail_(b.email);
  if (!email || !b.password) return { ok: false, error: "bad_login" };
  return withLock_(() => {
    const p = findProfile_(email);
    if (!p) return { ok: false, error: findUser_(email) ? "no_password" : "bad_login" };
    if (!p.r[P.pw]) return { ok: false, error: "no_password" };
    if (p.r[P.verified] !== true) return { ok: false, error: "not_verified" };
    const sh = sheet_(PROFILES);
    const now = Date.now();
    if (Number(p.r[P.lockUntil]) > now) return { ok: false, error: "locked", minutes: Math.ceil((Number(p.r[P.lockUntil]) - now) / 60000) };
    if (pwHash_(b.password, p.r[P.salt]) !== p.r[P.pw]) {
      const fails = Number(p.r[P.fails] || 0) + 1;
      sh.getRange(p.row, P.fails + 1).setValue(fails >= MAX_FAILS ? 0 : fails);
      if (fails >= MAX_FAILS) {
        sh.getRange(p.row, P.lockUntil + 1).setValue(now + LOCK_MIN * 60000);
        return { ok: false, error: "locked", minutes: LOCK_MIN };
      }
      return { ok: false, error: "bad_login" };
    }
    sh.getRange(p.row, P.fails + 1, 1, 2).setValues([[0, 0]]);
    sh.getRange(p.row, P.lastLogin + 1).setValue(new Date());
    ensureUser_(email);
    return openSession_(email, b.device);
  });
}

function requestReset_(b) {
  const email = normEmail_(b.email);
  if (!email) return { ok: false, error: "bad_email" };
  return withLock_(() => {
    // même réponse que l’adresse existe ou non (pas de fuite d’information)
    if (!findProfile_(email) && !findUser_(email)) return { ok: true };
    return sendCode_(email, "reset", "Voici ton code pour choisir un nouveau mot de passe");
  });
}

function resetPassword_(b) {
  const email = normEmail_(b.email);
  if (!email) return { ok: false, error: "bad_email" };
  const pwErr = checkPassword_(b.password);
  if (pwErr) return { ok: false, error: pwErr };
  return withLock_(() => {
    const c = checkCode_(email, "reset", b.code);
    if (!c.ok) return c;
    const salt = Utilities.getUuid();
    const p = findProfile_(email);
    const sh = sheet_(PROFILES);
    if (p) {
      sh.getRange(p.row, P.pw + 1, 1, 3).setValues([[pwHash_(b.password, salt), salt, true]]);
      sh.getRange(p.row, P.lastLogin + 1, 1, 3).setValues([[new Date(), 0, 0]]);
    } else {
      // ancien compte (connexion par code) : on crée son profil
      const pseudo = normPseudo_(b.pseudo) || email.split("@")[0].slice(0, 24);
      sh.appendRow([email, pseudo, pwHash_(b.password, salt), salt, true, new Date(), new Date(), 0, 0]);
    }
    ensureUser_(email);
    deleteRows_(sheet_(SESSIONS), (r) => r[1] === email); // déconnecte partout
    return openSession_(email, b.device);
  });
}

function logout_(b) {
  return withLock_(() => {
    const h = hash_(String(b.token || ""));
    deleteRows_(sheet_(SESSIONS), (r) => r[0] === h);
    return { ok: true };
  });
}

/* --------------------- gestion du compte ------------------ */
function me_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  const p = findProfile_(s.email);
  const u = findUser_(s.email);
  const sessions = values_(sheet_(SESSIONS)).filter((r) => r[1] === s.email);
  const devices = sessions.map((r) => ({ device: String(r[4] || "Appareil inconnu"), last: date_(r[3]), current: r[0] === s.hash }));
  const created = p ? p.r[P.created] : u ? sheet_(USERS).getRange(u.row, 2).getValue() : "";
  return {
    ok: true,
    email: s.email,
    pseudo: p ? String(p.r[P.pseudo]) : s.email.split("@")[0],
    hasPassword: !!(p && p.r[P.pw]),
    createdAt: date_(created),
    devices,
  };
}

function updateProfile_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  const pseudo = normPseudo_(b.pseudo);
  if (!pseudo) return { ok: false, error: "bad_pseudo" };
  return withLock_(() => {
    const p = findProfile_(s.email);
    if (p) sheet_(PROFILES).getRange(p.row, P.pseudo + 1).setValue(pseudo);
    else sheet_(PROFILES).appendRow([s.email, pseudo, "", "", true, new Date(), new Date(), 0, 0]);
    return { ok: true, pseudo };
  });
}

function changePassword_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  const pwErr = checkPassword_(b.password);
  if (pwErr) return { ok: false, error: pwErr };
  return withLock_(() => {
    const p = findProfile_(s.email);
    if (p && p.r[P.pw] && pwHash_(String(b.current || ""), p.r[P.salt]) !== p.r[P.pw]) return { ok: false, error: "wrong_password" };
    const salt = Utilities.getUuid();
    if (p) sheet_(PROFILES).getRange(p.row, P.pw + 1, 1, 3).setValues([[pwHash_(b.password, salt), salt, true]]);
    else sheet_(PROFILES).appendRow([s.email, s.email.split("@")[0], pwHash_(b.password, salt), salt, true, new Date(), new Date(), 0, 0]);
    // les autres appareils sont déconnectés
    deleteRows_(sheet_(SESSIONS), (r) => r[1] === s.email && r[0] !== s.hash);
    return { ok: true };
  });
}

function requestEmailChange_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  const email = normEmail_(b.newEmail);
  if (!email) return { ok: false, error: "bad_email" };
  if (email === s.email) return { ok: false, error: "same_email" };
  return withLock_(() => {
    const p = findProfile_(s.email);
    if (p && p.r[P.pw] && pwHash_(String(b.password || ""), p.r[P.salt]) !== p.r[P.pw]) return { ok: false, error: "wrong_password" };
    if (findProfile_(email) || findUser_(email)) return { ok: false, error: "exists" };
    return sendCode_(email, "email:" + s.email, "Voici ton code pour confirmer ta nouvelle adresse");
  });
}

function confirmEmailChange_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  const email = normEmail_(b.newEmail);
  if (!email) return { ok: false, error: "bad_email" };
  return withLock_(() => {
    const c = checkCode_(email, "email:" + s.email, b.code);
    if (!c.ok) return c;
    if (findProfile_(email) || findUser_(email)) return { ok: false, error: "exists" };
    const u = findUser_(s.email);
    if (u) sheet_(USERS).getRange(u.row, 1).setValue(email);
    const p = findProfile_(s.email);
    if (p) sheet_(PROFILES).getRange(p.row, 1).setValue(email);
    const sh = sheet_(SESSIONS);
    values_(sh).forEach((r, i) => r[1] === s.email && sh.getRange(i + 2, 2).setValue(email));
    return { ok: true, email };
  });
}

function logoutOthers_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  return withLock_(() => {
    deleteRows_(sheet_(SESSIONS), (r) => r[1] === s.email && r[0] !== s.hash);
    return { ok: true };
  });
}

function deleteAccount_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  return withLock_(() => {
    const p = findProfile_(s.email);
    if (p && p.r[P.pw] && pwHash_(String(b.password || ""), p.r[P.salt]) !== p.r[P.pw]) return { ok: false, error: "wrong_password" };
    deleteRows_(sheet_(SESSIONS), (r) => r[1] === s.email);
    deleteRows_(sheet_(CODES), (r) => r[0] === s.email);
    deleteRows_(sheet_(PROFILES), (r) => r[0] === s.email);
    deleteRows_(sheet_(USERS), (r) => r[0] === s.email);
    return { ok: true };
  });
}

/* --------------------- synchronisation -------------------- */
function pull_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  const d = readData_(s.email);
  return { ok: true, email: s.email, data: d.data, updatedAt: d.updatedAt };
}

function push_(b) {
  const s = session_(b.token);
  if (!s) return { ok: false, error: "auth" };
  const email = s.email;
  const raw = typeof b.data === "string" ? b.data : JSON.stringify(b.data || {});
  if (raw.length > 2000000) return { ok: false, error: "too_big" };
  let parsed = {};
  try { parsed = JSON.parse(raw); } catch (err) { return { ok: false, error: "bad_data" }; }
  return withLock_(() => {
    const sh = sheet_(USERS);
    const u = ensureUser_(email);
    const chunks = [];
    for (let k = 0; k < raw.length; k += CHUNK) chunks.push(raw.slice(k, k + CHUNK));
    const lastCol = sh.getLastColumn();
    if (lastCol >= DATA_COL) sh.getRange(u.row, DATA_COL, 1, lastCol - DATA_COL + 1).clearContent();
    if (chunks.length) sh.getRange(u.row, DATA_COL, 1, chunks.length).setNumberFormat("@").setValues([chunks]);
    const xp = Number(parsed.xp) || 0;
    const done = Object.values(parsed.courses || {}).reduce((n, c) => n + ((c && c.completed) || []).length, 0);
    const now = new Date();
    sh.getRange(u.row, 3, 1, 5).setValues([[now, xp, rank_(xp), done, raw.length]]);
    return { ok: true, updatedAt: now.getTime() };
  });
}

/* ------------- anciennes routes (code e-mail) ------------- */
function requestCode_(b) {
  const email = normEmail_(b.email);
  if (!email) return { ok: false, error: "bad_email" };
  return withLock_(() => sendCode_(email, "login", "Voici ton code de connexion"));
}
function verify_(b) {
  const email = normEmail_(b.email);
  if (!email) return { ok: false, error: "bad_code" };
  return withLock_(() => {
    const c = checkCode_(email, "login", b.code);
    if (!c.ok) return c;
    ensureUser_(email);
    return openSession_(email, b.device);
  });
}

/* ------------------------- codes -------------------------- */
function sendCode_(email, purpose, intro) {
  const sh = sheet_(CODES);
  const now = Date.now();
  const rows = values_(sh);
  const recent = rows.filter((r) => r[0] === email && now - Number(r[4]) < 3600 * 1000).length;
  if (recent >= MAX_CODES_PER_HOUR) return { ok: false, error: "too_many" };
  if (MailApp.getRemainingDailyQuota() < 1) return { ok: false, error: "quota" };
  const code = String(Math.floor(100000 + Math.random() * 900000));
  // on ne garde que l’heure écoulée (sert aussi à limiter les envois)
  deleteRows_(sh, (r) => now - Number(r[4]) > 3600 * 1000);
  sh.appendRow([email, hash_(purpose + ":" + email + ":" + code), now + CODE_TTL_MIN * 60000, 0, now]);
  MailApp.sendEmail({
    to: email,
    subject: "Ton code " + APP_NAME + " : " + code,
    htmlBody:
      "<div style='font-family:Arial,sans-serif;font-size:15px;color:#222'>" +
      "<p>Bonjour,</p><p>" + intro + " sur <b>" + APP_NAME + "</b> :</p>" +
      "<p style='font-size:30px;letter-spacing:6px;font-weight:bold'>" + code + "</p>" +
      "<p>Il est valable " + CODE_TTL_MIN + " minutes. Si tu n’as rien demandé, ignore ce message.</p></div>",
    name: APP_NAME,
  });
  return { ok: true };
}

function checkCode_(email, purpose, code) {
  code = String(code || "").replace(/\D/g, "");
  if (code.length !== 6) return { ok: false, error: "bad_code" };
  const sh = sheet_(CODES);
  const rows = values_(sh);
  const h = hash_(purpose + ":" + email + ":" + code);
  let match = -1, latest = -1;
  rows.forEach((r, i) => {
    if (r[0] !== email) return;
    latest = i;
    if (r[1] === h) match = i;
  });
  if (latest < 0) return { ok: false, error: "no_code" };
  const i = match >= 0 ? match : latest, r = rows[i];
  if (Number(r[2]) < Date.now()) return { ok: false, error: "expired" };
  if (Number(r[3]) >= MAX_ATTEMPTS) return { ok: false, error: "too_many" };
  if (match < 0) {
    sh.getRange(i + 2, 4).setValue(Number(r[3]) + 1);
    return { ok: false, error: "wrong_code", left: Math.max(0, MAX_ATTEMPTS - Number(r[3]) - 1) };
  }
  sh.deleteRow(i + 2);
  return { ok: true };
}

/* ------------------------- outils ------------------------- */
function openSession_(email, device) {
  const token = Utilities.getUuid() + Utilities.getUuid();
  sheet_(SESSIONS).appendRow([hash_(token), email, new Date(), new Date(), String(device || "").slice(0, 60)]);
  const p = findProfile_(email);
  const d = readData_(email);
  return { ok: true, token, email, pseudo: p ? String(p.r[P.pseudo]) : email.split("@")[0], data: d.data, updatedAt: d.updatedAt };
}
function session_(token) {
  if (!token) return null;
  const h = hash_(String(token));
  const sh = sheet_(SESSIONS);
  const rows = values_(sh);
  const i = rows.findIndex((r) => r[0] === h);
  if (i < 0) return null;
  sh.getRange(i + 2, 4).setValue(new Date());
  return { email: rows[i][1], hash: h };
}
function ensureUser_(email) {
  let u = findUser_(email);
  if (!u) {
    sheet_(USERS).appendRow([email, new Date(), "", 0, "Curieux", 0, 0]);
    u = findUser_(email);
  }
  return u;
}
function readData_(email) {
  const u = findUser_(email);
  if (!u) return { data: null, updatedAt: 0 };
  const sh = sheet_(USERS);
  const lastCol = sh.getLastColumn();
  if (lastCol < DATA_COL) return { data: null, updatedAt: 0 };
  const parts = sh.getRange(u.row, DATA_COL, 1, lastCol - DATA_COL + 1).getValues()[0];
  const raw = parts.map(String).join("");
  const upd = sh.getRange(u.row, 3).getValue();
  return { data: raw || null, updatedAt: upd instanceof Date ? upd.getTime() : 0 };
}
function findUser_(email) {
  const rows = values_(sheet_(USERS));
  const i = rows.findIndex((r) => r[0] === email);
  return i < 0 ? null : { row: i + 2 };
}
function findProfile_(email) {
  const rows = values_(sheet_(PROFILES), 9);
  const i = rows.findIndex((r) => r[0] === email);
  return i < 0 ? null : { row: i + 2, r: rows[i] };
}
function checkPassword_(pw) {
  pw = String(pw || "");
  if (pw.length < 8) return "weak_password";
  if (pw.length > 200) return "weak_password";
  return null;
}
function pwHash_(pw, salt) {
  const key = salt_() + "|" + salt;
  let h = String(pw);
  for (let k = 0; k < PW_ITER; k++) h = hex_(Utilities.computeHmacSha256Signature(h + "|" + k, key, Utilities.Charset.UTF_8));
  return h;
}
function normPseudo_(s) {
  s = String(s || "").replace(/[<>"]/g, "").trim().replace(/\s+/g, " ");
  return s.length >= 2 && s.length <= 24 ? s : null;
}
function date_(v) {
  if (v instanceof Date) return v.getTime();
  const n = Number(v);
  return isNaN(n) ? 0 : n;
}
function rank_(xp) {
  let name = RANKS[0][1];
  RANKS.forEach((r) => { if (xp >= r[0]) name = r[1]; });
  return name;
}
function sheet_(name) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, HEADERS[name].length).setValues([HEADERS[name]]).setFontWeight("bold");
    sh.setFrozenRows(1);
  }
  return sh;
}
function values_(sh, cols) {
  const n = sh.getLastRow() - 1;
  if (n < 1) return [];
  const w = Math.max(1, Math.min(cols || 5, sh.getLastColumn()));
  return sh.getRange(2, 1, n, w).getValues().map((r) => r.map((v, k) => (k === 0 ? String(v) : v)));
}
function deleteRows_(sh, pred) {
  const rows = values_(sh);
  for (let i = rows.length - 1; i >= 0; i--) if (pred(rows[i])) sh.deleteRow(i + 2);
}
function normEmail_(e) {
  e = String(e || "").trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && e.length < 200 ? e : null;
}
function salt_() {
  const p = PropertiesService.getScriptProperties();
  let s = p.getProperty("SALT");
  if (!s) {
    s = Utilities.getUuid() + Utilities.getUuid();
    p.setProperty("SALT", s);
  }
  return s;
}
function hex_(bytes) {
  return bytes.map((b) => ((b + 256) % 256).toString(16).padStart(2, "0")).join("");
}
function hash_(s) {
  return hex_(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt_() + "|" + s, Utilities.Charset.UTF_8));
}
function withLock_(fn) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    return fn();
  } finally {
    lock.releaseLock();
  }
}
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
