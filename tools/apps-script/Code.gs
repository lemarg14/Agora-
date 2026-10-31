/* ============================================================
   POLYMATH ACADEMY — serveur de comptes (Google Apps Script)
   Stockage : le Google Sheet « Polymath Academy — Comptes ».
   Connexion par code à 6 chiffres envoyé par e-mail.

   Installation :
   1. Ouvrir le Sheet > Extensions > Apps Script, coller ce fichier.
   2. Exécuter une fois la fonction « setup » (accepter les autorisations).
   3. Déployer > Nouveau déploiement > Application Web
      Exécuter en tant que : Moi · Accès : Tout le monde.
   4. Copier l’URL /exec dans js/config.js (AGORA.ACCOUNT_URL).
   ============================================================ */

const SHEET_ID = "1Dqax1BzRrUu0eWNI6HR9bxjOur3HDiw5nPxYeKLreCY";
const APP_NAME = "Polymath Academy";
const CODE_TTL_MIN = 15;     // validité d’un code
const MAX_CODES_PER_HOUR = 4; // anti-abus par adresse
const MAX_ATTEMPTS = 5;       // essais par code
const CHUNK = 45000;          // une cellule accepte 50 000 caractères
const DATA_COL = 8;           // colonne H : début des données de progression

const USERS = "Utilisateurs", CODES = "Codes", SESSIONS = "Sessions";
const HEADERS = {
  [USERS]: ["E-mail", "Inscrit le", "Dernière synchro", "XP", "Rang", "Séances terminées", "Taille (car.)", "Données →"],
  [CODES]: ["E-mail", "Empreinte du code", "Expire le", "Essais", "Créé le"],
  [SESSIONS]: ["Empreinte du jeton", "E-mail", "Créée le", "Dernière utilisation"],
};
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
  const def = ss.getSheets().filter((s) => !HEADERS[s.getName()]);
  def.forEach((s) => { if (s.getLastRow() === 0 && ss.getSheets().length > 3) ss.deleteSheet(s); });
  salt_();
  MailApp.getRemainingDailyQuota(); // déclenche l’autorisation d’envoi d’e-mails
  return "OK";
}

/* ------------------------- routes ------------------------- */
function doGet() {
  return json_({ ok: true, app: APP_NAME });
}

function doPost(e) {
  let body = {};
  try {
    body = JSON.parse((e.postData && e.postData.contents) || "{}");
  } catch (err) {
    return json_({ ok: false, error: "bad_request" });
  }
  try {
    switch (body.action) {
      case "requestCode": return json_(requestCode_(body));
      case "verify": return json_(verify_(body));
      case "pull": return json_(pull_(body));
      case "push": return json_(push_(body));
      case "logout": return json_(logout_(body));
      default: return json_({ ok: false, error: "unknown_action" });
    }
  } catch (err) {
    return json_({ ok: false, error: "server", detail: String(err) });
  }
}

/* ----------------------- connexion ------------------------ */
function requestCode_(b) {
  const email = normEmail_(b.email);
  if (!email) return { ok: false, error: "bad_email" };
  return withLock_(() => {
    const sh = sheet_(CODES);
    const now = Date.now();
    const rows = values_(sh);
    const recent = rows.filter((r) => r[0] === email && now - Number(r[4]) < 3600 * 1000).length;
    if (recent >= MAX_CODES_PER_HOUR) return { ok: false, error: "too_many" };
    if (MailApp.getRemainingDailyQuota() < 1) return { ok: false, error: "quota" };
    const code = String(Math.floor(100000 + Math.random() * 900000));
    // on retire les anciens codes de cette adresse et les codes expirés
    deleteRows_(sh, (r) => r[0] === email || Number(r[2]) < now);
    sh.appendRow([email, hash_(email + ":" + code), now + CODE_TTL_MIN * 60000, 0, now]);
    MailApp.sendEmail({
      to: email,
      subject: "Ton code " + APP_NAME + " : " + code,
      htmlBody:
        "<div style='font-family:Arial,sans-serif;font-size:15px;color:#222'>" +
        "<p>Bonjour,</p><p>Voici ton code de connexion à <b>" + APP_NAME + "</b> :</p>" +
        "<p style='font-size:30px;letter-spacing:6px;font-weight:bold'>" + code + "</p>" +
        "<p>Il est valable " + CODE_TTL_MIN + " minutes. Si tu n’as rien demandé, ignore ce message.</p></div>",
      name: APP_NAME,
    });
    return { ok: true };
  });
}

function verify_(b) {
  const email = normEmail_(b.email);
  const code = String(b.code || "").replace(/\D/g, "");
  if (!email || code.length !== 6) return { ok: false, error: "bad_code" };
  return withLock_(() => {
    const sh = sheet_(CODES);
    const rows = values_(sh);
    const i = rows.findIndex((r) => r[0] === email);
    if (i < 0) return { ok: false, error: "no_code" };
    const r = rows[i];
    if (Number(r[2]) < Date.now()) return { ok: false, error: "expired" };
    if (Number(r[3]) >= MAX_ATTEMPTS) return { ok: false, error: "too_many" };
    if (r[1] !== hash_(email + ":" + code)) {
      sh.getRange(i + 2, 4).setValue(Number(r[3]) + 1);
      return { ok: false, error: "wrong_code", left: MAX_ATTEMPTS - Number(r[3]) - 1 };
    }
    sh.deleteRow(i + 2);
    // compte créé à la première connexion
    const u = findUser_(email);
    if (!u) sheet_(USERS).appendRow([email, new Date(), "", 0, "Curieux", 0, 0]);
    const token = Utilities.getUuid() + Utilities.getUuid();
    sheet_(SESSIONS).appendRow([hash_(token), email, new Date(), new Date()]);
    const data = readData_(email);
    return { ok: true, token, email, data: data.data, updatedAt: data.updatedAt };
  });
}

function logout_(b) {
  return withLock_(() => {
    const h = hash_(String(b.token || ""));
    deleteRows_(sheet_(SESSIONS), (r) => r[0] === h);
    return { ok: true };
  });
}

/* --------------------- synchronisation -------------------- */
function pull_(b) {
  const email = auth_(b.token);
  if (!email) return { ok: false, error: "auth" };
  const d = readData_(email);
  return { ok: true, email, data: d.data, updatedAt: d.updatedAt };
}

function push_(b) {
  const email = auth_(b.token);
  if (!email) return { ok: false, error: "auth" };
  const raw = typeof b.data === "string" ? b.data : JSON.stringify(b.data || {});
  if (raw.length > 2000000) return { ok: false, error: "too_big" };
  let parsed = {};
  try { parsed = JSON.parse(raw); } catch (err) { return { ok: false, error: "bad_data" }; }
  return withLock_(() => {
    const sh = sheet_(USERS);
    let u = findUser_(email);
    if (!u) {
      sh.appendRow([email, new Date()]);
      u = findUser_(email);
    }
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

/* ------------------------- outils ------------------------- */
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
function auth_(token) {
  if (!token) return null;
  const h = hash_(String(token));
  const sh = sheet_(SESSIONS);
  const rows = values_(sh);
  const i = rows.findIndex((r) => r[0] === h);
  if (i < 0) return null;
  sh.getRange(i + 2, 4).setValue(new Date());
  return rows[i][1];
}
function findUser_(email) {
  const rows = values_(sheet_(USERS));
  const i = rows.findIndex((r) => r[0] === email);
  return i < 0 ? null : { row: i + 2 };
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
function values_(sh) {
  const n = sh.getLastRow() - 1;
  if (n < 1) return [];
  return sh.getRange(2, 1, n, Math.min(5, sh.getLastColumn())).getValues().map((r) => r.map((v, k) => (k === 0 ? String(v) : v)));
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
function hash_(s) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt_() + "|" + s, Utilities.Charset.UTF_8);
  return bytes.map((b) => ((b + 256) % 256).toString(16).padStart(2, "0")).join("");
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
