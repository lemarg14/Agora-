/* ============================================================
   POLYMATH ACADEMY — comptes et synchronisation
   Compte : pseudo + e-mail + mot de passe (inscription validée par
   un code e-mail). Serveur : Google Apps Script + Google Sheet.
   La progression reste aussi en local : le site marche sans compte,
   et hors connexion. Avec un compte, chaque changement est envoyé
   quelques secondes après, et les appareils sont fusionnés.
   ============================================================ */
(function () {
  const A = window.AGORA;
  const store = A.store;
  const SKEY = "polymath.session";
  const DELAY = 3000;

  let session = null; // { email, token, pseudo }
  try {
    session = JSON.parse(localStorage.getItem(SKEY)) || null;
  } catch (e) {}
  let status = session ? "syncing" : "off"; // off | syncing | synced | error | offline
  let lastSync = 0, timer = null, applying = false, pending = false;
  const listeners = [];
  const emit = () => listeners.forEach((f) => f(api));
  const setStatus = (s) => ((status = s), emit());
  const url = () => A.ACCOUNT_URL;

  function saveSession(s) {
    session = s;
    try {
      if (s) localStorage.setItem(SKEY, JSON.stringify(s));
      else localStorage.removeItem(SKEY);
    } catch (e) {}
  }
  // nom lisible de l’appareil, affiché dans « Appareils connectés »
  function deviceName() {
    const ua = navigator.userAgent || "";
    const os = /iPhone/.test(ua) ? "iPhone" : /iPad/.test(ua) ? "iPad" : /Android/.test(ua) ? "Android" : /Mac OS X/.test(ua) ? "Mac" : /Windows/.test(ua) ? "Windows" : /Linux/.test(ua) ? "Linux" : "Appareil";
    const br = /Edg\//.test(ua) ? "Edge" : /OPR\//.test(ua) ? "Opera" : /Firefox\//.test(ua) ? "Firefox" : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "navigateur";
    return os + " · " + br;
  }

  async function call(action, payload) {
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(Object.assign({ action }, payload || {})),
      redirect: "follow",
    });
    return res.json();
  }
  const payload = () => JSON.stringify(store.get());

  async function push() {
    if (!session) return;
    clearTimeout(timer);
    pending = false;
    setStatus("syncing");
    try {
      const r = await call("push", { token: session.token, data: payload() });
      if (r.ok) {
        lastSync = Date.now();
        setStatus("synced");
      } else if (r.error === "auth") expired();
      else setStatus("error");
    } catch (e) {
      pending = true;
      setStatus(navigator.onLine === false ? "offline" : "error");
    }
  }
  function applyRemote(raw) {
    if (!raw) return;
    try {
      applying = true;
      store.mergeRemote(JSON.parse(raw));
    } catch (e) {
    } finally {
      applying = false;
    }
  }
  async function pull() {
    if (!session) return;
    setStatus("syncing");
    try {
      const r = await call("pull", { token: session.token });
      if (!r.ok) return r.error === "auth" ? expired() : setStatus("error");
      applyRemote(r.data);
      await push(); // renvoie la version fusionnée
    } catch (e) {
      setStatus(navigator.onLine === false ? "offline" : "error");
    }
  }
  function expired() {
    saveSession(null);
    setStatus("off");
  }
  // ouverture de session après inscription, connexion ou réinitialisation
  async function opened(r) {
    if (!r.ok) return r;
    saveSession({ email: r.email, token: r.token, pseudo: r.pseudo || r.email.split("@")[0] });
    applyRemote(r.data);
    await push();
    return r;
  }
  // appel authentifié : déconnecte proprement si la session a expiré
  async function authed(action, data) {
    if (!session) return { ok: false, error: "auth" };
    const r = await call(action, Object.assign({ token: session.token }, data || {}));
    if (!r.ok && r.error === "auth") expired();
    return r;
  }

  store.onChange(() => {
    if (!session || applying) return;
    pending = true;
    clearTimeout(timer);
    timer = setTimeout(push, DELAY);
  });
  // en quittant la page : dernier envoi
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "hidden" || !session || !pending || !navigator.sendBeacon) return;
    const body = JSON.stringify({ action: "push", token: session.token, data: payload() });
    if (navigator.sendBeacon(url(), new Blob([body], { type: "text/plain;charset=utf-8" }))) pending = false;
  });
  window.addEventListener("online", () => session && pull());
  // retour sur l’onglet : récupère ce qui a été fait sur un autre appareil
  window.addEventListener("focus", () => {
    if (session && Date.now() - lastSync > 60000 && status !== "syncing") pull();
  });

  const api = (A.account = {
    get enabled() {
      return !!url();
    },
    get email() {
      return session && session.email;
    },
    get pseudo() {
      return session && (session.pseudo || session.email.split("@")[0]);
    },
    get loggedIn() {
      return !!session;
    },
    get status() {
      return status;
    },
    get lastSync() {
      return lastSync;
    },
    onChange: (f) => listeners.push(f),

    /* --- inscription et connexion --- */
    signup: (pseudo, email, password) => call("signup", { pseudo, email, password }),
    resendSignup: (email) => call("resendSignup", { email }),
    async verifySignup(email, code) {
      return opened(await call("verifySignup", { email, code, device: deviceName() }));
    },
    async login(email, password) {
      return opened(await call("login", { email, password, device: deviceName() }));
    },
    requestReset: (email) => call("requestReset", { email }),
    async resetPassword(email, code, password) {
      return opened(await call("resetPassword", { email, code, password, device: deviceName() }));
    },

    /* --- gestion du compte --- */
    me: () => authed("me"),
    async updateProfile(pseudo) {
      const r = await authed("updateProfile", { pseudo });
      if (r.ok) {
        saveSession(Object.assign({}, session, { pseudo: r.pseudo }));
        emit();
      }
      return r;
    },
    changePassword: (current, password) => authed("changePassword", { current, password }),
    requestEmailChange: (newEmail, password) => authed("requestEmailChange", { newEmail, password }),
    async confirmEmailChange(newEmail, code) {
      const r = await authed("confirmEmailChange", { newEmail, code });
      if (r.ok) {
        saveSession(Object.assign({}, session, { email: r.email }));
        emit();
      }
      return r;
    },
    logoutOthers: () => authed("logoutOthers"),
    async deleteAccount(password) {
      const r = await authed("deleteAccount", { password });
      if (r.ok) {
        clearTimeout(timer);
        pending = false;
        saveSession(null);
        setStatus("off");
      }
      return r;
    },
    async logout() {
      const t = session && session.token;
      if (pending) await push();
      saveSession(null);
      setStatus("off");
      if (t) call("logout", { token: t }).catch(() => {});
    },
    syncNow: () => pull(),
    pushNow: () => push(),
  });

  if (session && url()) pull();
  else if (session) setStatus("error");
})();
