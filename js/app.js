/* ============================================================
   POLYMATH ACADEMY — application : HUD, navigation entre vues, révision
   ============================================================ */
(function () {
  const A = window.AGORA;
  const store = A.store;
  const $ = (s) => document.querySelector(s);
  const overlay = $("#overlay"),
    view = $("#view");
  let campus = null,
    player = null,
    gated = false;

  /* ---------------------------- HUD ---------------------------- */
  function updateHUD() {
    const lv = store.level();
    $("#streak").textContent = store.streak();
    $("#level-name").textContent = lv.name;
    $("#xp").textContent = lv.xp + " XP";
    const sec = store.todaySeconds(),
      goal = store.goalSeconds();
    const pct = Math.min(1, sec / goal);
    $("#daily-arc").style.strokeDashoffset = String(100 - pct * 100);
    $("#daily-min").textContent = Math.floor(sec / 60);
    $("#daily").title = `Aujourd’hui : ${Math.floor(sec / 60)} / ${goal / 60} min`;
    $("#daily").classList.toggle("reached", pct >= 1);
    $("#due-count").textContent = store.dueCards().length;
  }
  store.onChange(updateHUD);

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 2800);
  }

  /* ------------------------- overlay -------------------------- */
  function open(html, cls) {
    overlay.hidden = false;
    overlay.className = cls || "";
    view.innerHTML = html;
    view.scrollTop = 0;
    document.body.classList.add("in-view");
    setTimeout(() => campus && !overlay.hidden && campus.setPaused(true), 900);
  }
  function close() {
    if (gated) return; // pas de sortie sans compte
    if (player) player.stop();
    player = null;
    overlay.hidden = true;
    document.body.classList.remove("in-view");
    if (campus) {
      campus.setPaused(false);
      campus.unfocus();
    }
  }
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden && !player) close();
  });
  const topbar = (backLabel) =>
    `<div class="vh-top">${backLabel ? `<button class="btn ghost small" data-back>← ${backLabel}</button>` : "<span></span>"}<button class="icon-btn" data-close aria-label="Fermer">✕</button></div>`;
  function wire(onBack) {
    const c = view.querySelector("[data-close]");
    if (c) c.onclick = close;
    const b = view.querySelector("[data-back]");
    if (b) b.onclick = onBack || close;
  }

  /* ------------------------- facultés -------------------------- */
  function openFaculty(fac) {
    if (fac.status !== "open") {
      toast(`${fac.name} : en construction. Prochain cours bientôt.`);
      setTimeout(() => campus && overlay.hidden && campus.unfocus(), 2600);
      return;
    }
    const courses = fac.courses.map((id) => A.courses[id]).filter(Boolean);
    open(
      `${topbar("Campus")}
      <div class="hero" style="--acc:${fac.color}">
        <div class="kicker">Bienvenue</div>
        <h1>${fac.name}</h1>
        <p>${fac.desc}</p>
      </div>
      <h3 class="section-title">Cours disponibles</h3>
      <div class="course-list">${courses
        .map((c) => {
          const done = store.course(c.id).completed.length;
          return `<button class="course-card" data-course="${c.id}" style="--acc:${c.color}">
            <div><b>${c.title}</b><p>${c.subtitle}</p><small>${c.sessions.length} séances · ${c.minutesPerSession} · ${c.level}</small></div>
            <div class="mini-progress"><i style="width:${(done / c.sessions.length) * 100}%"></i></div>
            <span class="cta">${done ? (done === c.sessions.length ? "Revoir" : "Continuer") : "Commencer"} →</span>
          </button>`;
        })
        .join("")}
        ${fac.next ? `<div class="course-card ghost-card"><div><b>${fac.next}</b><p>Les prochains cours de la faculté arrivent.</p></div></div>` : ""}
      </div>`
    );
    wire();
    view.querySelectorAll("[data-course]").forEach((b) => (b.onclick = () => courseHome(A.courses[b.dataset.course])));
  }

  /* ------------------------- parcours -------------------------- */
  function courseHome(course) {
    const fac = A.faculties.find((f) => f.id === course.faculty);
    const cs = store.course(course.id);
    const nextS = course.sessions.find((s) => !cs.completed.includes(s.id)) || null;
    const pct = (cs.completed.length / course.sessions.length) * 100;
    const fiches = store.fiches().filter((f) => f.courseId === course.id);
    open(
      `${topbar(fac.short)}
      <div class="hero" style="--acc:${course.color}">
        <div class="kicker">${fac.name} · ${course.level}</div>
        <h1>${course.title}</h1>
        <p>${course.intro}</p>
        <div class="progress-line"><div class="mini-progress big"><i style="width:${pct}%"></i></div><span>${cs.completed.length}/${course.sessions.length} séances</span></div>
        ${
          nextS
            ? `<button class="btn primary big" data-start="${nextS.id}">${cs.progress[nextS.id] ? "Reprendre" : cs.completed.length ? "Séance du jour" : "Commencer"} · ${nextS.index + 1}. ${nextS.title}</button>`
            : `<div class="badge-done">Cours terminé. Garde le rythme avec les révisions.</div>`
        }
      </div>
      <h3 class="section-title">Ton parcours</h3>
      <ol class="path">${course.sessions
        .map((s) => {
          const done = cs.completed.includes(s.id),
            unlocked = store.isUnlocked(course, s);
          const state = done ? "done" : unlocked ? "current" : "locked";
          return `<li class="node ${state}" style="--acc:${course.color}">
            <button ${unlocked ? `data-start="${s.id}"` : "disabled"}>
              <span class="dot">${done ? "✓" : s.index + 1}</span>
              <span class="node-txt"><b>${s.title}</b><small>${s.minutes} min · ${s.objectives.join(" · ")}</small></span>
              <span class="node-state">${done ? "Revoir" : unlocked ? (cs.progress[s.id] ? "Reprendre" : "Ouvrir") : "Verrouillé"}</span>
            </button></li>`;
        })
        .join("")}</ol>
      <h3 class="section-title">Mes fiches de ce cours <small>${fiches.length}/${course.sessions.length}</small></h3>
      ${fiches.length ? `<div class="fiche-grid">${fiches.map((f) => `<button class="fiche-thumb" data-fiche="${f.id}"><b>${f.title}</b><small>${f.retenir || ""}</small></button>`).join("")}</div>` : `<p class="muted">Chaque séance terminée te donne une fiche de révision.</p>`}
      <p class="disclaimer">Contenu pédagogique simplifié. Pour une situation réelle, vérifie les textes sur Légifrance et consulte un avocat.</p>`
    );
    wire(() => openFaculty(fac));
    view.querySelectorAll("[data-start]").forEach((b) => (b.onclick = () => startSession(course, course.sessions.find((s) => s.id === b.dataset.start))));
    view.querySelectorAll("[data-fiche]").forEach((b) => (b.onclick = () => ficheView(b.dataset.fiche, () => courseHome(course))));
  }

  function startSession(course, session) {
    open("", "full");
    player = A.Player(view, course, session, {
      onExit: () => {
        player && player.stop();
        player = null;
        courseHome(course);
      },
      onNext: (next) => startSession(course, next),
    });
  }

  /* ------------------------- révision -------------------------- */
  function reviewView() {
    const due = store.dueCards();
    if (!due.length) {
      open(
        `${topbar()}<div class="empty"><div class="big-ico">🃏</div><h2>Rien à réviser aujourd’hui</h2>
        <p class="muted">${store.deckSize() ? `Ton paquet contient ${store.deckSize()} cartes. Elles reviendront au bon moment (1, 3, 7, 16, 35 jours).` : "Termine une séance pour ajouter tes premières cartes."}</p></div>`
      );
      return wire();
    }
    let k = 0,
      ok = 0;
    open(`${topbar()}<div class="review"><div class="kicker">Révision espacée</div><h2>${due.length} carte${due.length > 1 ? "s" : ""} à revoir</h2><div class="review-stage"></div></div>`);
    wire();
    const stage = view.querySelector(".review-stage");
    function show() {
      if (k >= due.length) {
        stage.innerHTML = `<div class="sort-done">Terminé : <b>${ok}/${due.length}</b> sues. Les cartes ratées reviennent demain.</div>
          <button class="btn primary" data-close2>Retour au campus</button>`;
        stage.querySelector("[data-close2]").onclick = close;
        return;
      }
      const c = due[k];
      const lang = c.course && A.courses[c.course] && A.courses[c.course].lang;
      stage.innerHTML = `<div class="count">${k + 1}/${due.length}</div>
        <button class="flip big"><span class="face front">${c.front}${lang && A.canSpeak ? `<span class="say-btn" role="button" data-say="1" title="Écouter">🔊</span>` : ""}</span><span class="face back">${c.back}</span></button>
        <div class="review-actions" hidden><button class="btn choice wrongish" data-r="0">À revoir</button><button class="btn choice rightish" data-r="1">Je savais</button></div>
        <p class="muted center">Réponds dans ta tête, puis retourne la carte.</p>`;
      const flip = stage.querySelector(".flip"),
        acts = stage.querySelector(".review-actions");
      const sb = stage.querySelector(".say-btn");
      if (sb) sb.addEventListener("click", (e) => (e.stopPropagation(), A.speak(c.front, lang)));
      flip.onclick = () => {
        flip.classList.add("on");
        acts.hidden = false;
      };
      acts.querySelectorAll("[data-r]").forEach(
        (b) =>
          (b.onclick = () => {
            const good = b.dataset.r === "1";
            if (good) ok++;
            store.reviewCard(c.id, good);
            k++;
            show();
          })
      );
    }
    show();
    // la révision compte dans le temps du jour
    const t0 = Date.now();
    const stopTimer = () => {
      const s = Math.round((Date.now() - t0) / 1000);
      if (s > 0) store.addSeconds(Math.min(s, 1800));
    };
    const obs = new MutationObserver(() => {
      if (overlay.hidden || !view.querySelector(".review")) {
        obs.disconnect();
        stopTimer();
      }
    });
    obs.observe(overlay, { attributes: true, childList: true, subtree: true });
  }

  /* --------------------------- fiches -------------------------- */
  function fichesView() {
    const all = store.fiches();
    open(
      `${topbar()}<div class="kicker">Ta bibliothèque</div><h1>Mes fiches</h1>
      ${
        all.length
          ? `<div class="fiche-grid">${all.map((f) => `<button class="fiche-thumb" data-fiche="${f.id}"><span class="fiche-tag">${f.courseTitle || ""}</span><b>${f.title}</b><small>${f.retenir || ""}</small></button>`).join("")}</div>`
          : `<div class="empty"><div class="big-ico">📇</div><p class="muted">Pas encore de fiche. Chaque séance terminée en ajoute une.</p></div>`
      }`
    );
    wire();
    view.querySelectorAll("[data-fiche]").forEach((b) => (b.onclick = () => ficheView(b.dataset.fiche, fichesView)));
  }
  /* ------------------------ bibliothèque ----------------------- */
  function libraryView() {
    const nf = store.fiches().length,
      nd = store.dueCards().length;
    const all = A.faculties.flatMap((f) => f.courses.map((id) => A.courses[id]).filter(Boolean).map((c) => ({ c, f })));
    open(
      `${topbar("Campus")}
      <div class="hero" style="--acc:#b8892f">
        <div class="kicker">Au cœur du campus</div>
        <h1>La Bibliothèque</h1>
        <p>Tes fiches, tes révisions et tout le catalogue des cours, au même endroit.</p>
      </div>
      <div class="course-list">
        <button class="course-card" data-lib="fiches" style="--acc:#b8892f"><div><b>Mes fiches</b><p>${nf ? nf + " fiche" + (nf > 1 ? "s" : "") + " rangée" + (nf > 1 ? "s" : "") : "Chaque séance terminée ajoute sa fiche ici."}</p></div><span class="cta">Ouvrir →</span></button>
        <button class="course-card" data-lib="review" style="--acc:#b8892f"><div><b>Réviser</b><p>${nd ? nd + " carte" + (nd > 1 ? "s" : "") + " à revoir aujourd’hui" : "Rien à revoir pour l’instant."}</p></div><span class="cta">Lancer →</span></button>
      </div>
      <h3 class="section-title">Catalogue · ${all.length} cours</h3>
      <div class="course-list">${all
        .map(({ c, f }) => {
          const done = store.course(c.id).completed.length;
          return `<button class="course-card" data-course="${c.id}" style="--acc:${c.color}">
            <div><b>${c.title}</b><p>${f.short} · ${c.sessions.length} séances · ${c.minutesPerSession}</p></div>
            <div class="mini-progress"><i style="width:${(done / c.sessions.length) * 100}%"></i></div>
            <span class="cta">${done ? (done === c.sessions.length ? "Revoir" : "Continuer") : "Commencer"} →</span>
          </button>`;
        })
        .join("")}</div>`
    );
    wire();
    view.querySelector('[data-lib="fiches"]').onclick = fichesView;
    view.querySelector('[data-lib="review"]').onclick = reviewView;
    view.querySelectorAll("[data-course]").forEach((b) => (b.onclick = () => courseHome(A.courses[b.dataset.course])));
  }

  function ficheView(id, back) {
    const f = store.get().fiches[id];
    const c = A.courses[f.courseId];
    open(`${topbar("Retour")}<div class="fiche-wrap printable">${A.renderFiche(f, c && c.color)}</div><button class="btn ghost" data-print>Imprimer / PDF</button>`);
    wire(back);
    view.querySelector("[data-print]").onclick = () => window.print();
  }

  /* -------------------------- compte --------------------------- */
  const acct = A.account;
  const ERR = {
    bad_email: "Adresse e-mail invalide.",
    bad_pseudo: "Le pseudo doit faire entre 2 et 24 caractères.",
    weak_password: "Le mot de passe doit faire au moins 8 caractères.",
    mismatch: "Les deux mots de passe ne sont pas identiques.",
    exists: "Un compte existe déjà avec cette adresse. Connecte-toi, ou utilise « Mot de passe oublié ».",
    bad_login: "E-mail ou mot de passe incorrect.",
    no_password: "Ce compte a été créé avant les mots de passe : clique sur « Mot de passe oublié » pour en choisir un.",
    not_verified: "Ton adresse n’est pas encore confirmée : termine l’inscription avec le code reçu par e-mail.",
    locked: "Trop d’essais : compte bloqué temporairement.",
    wrong_password: "Mot de passe actuel incorrect.",
    same_email: "C’est déjà ton adresse actuelle.",
    too_many: "Trop de tentatives. Réessaie dans une heure.",
    quota: "Trop d’e-mails envoyés aujourd’hui, réessaie demain.",
    no_code: "Demande d’abord un code.",
    expired: "Ce code a expiré, demandes-en un nouveau.",
    bad_code: "Le code fait 6 chiffres.",
    wrong_code: "Code incorrect.",
    auth: "Ta session a expiré, reconnecte-toi.",
    unknown_action: "Le serveur de comptes doit être mis à jour (voir l’installation dans tools/apps-script/Code.gs).",
  };
  const errMsg = (r) =>
    (ERR[r.error] || "Le serveur ne répond pas, réessaie.") +
    (r.left != null ? ` Il reste ${r.left} essai${r.left > 1 ? "s" : ""}.` : "") +
    (r.error === "locked" && r.minutes ? ` Réessaie dans ${r.minutes} min, ou utilise « Mot de passe oublié ».` : "");
  const esc = (t) => String(t == null ? "" : t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const fmtDate = (t) => (t ? new Date(t).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "—");
  const fmtTime = (t) => (t ? new Date(t).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) : "—");
  const fmtAgo = (t) => {
    if (!t) return "—";
    const m = Math.round((Date.now() - t) / 60000);
    if (m < 2) return "à l’instant";
    if (m < 60) return `il y a ${m} min`;
    if (m < 60 * 24) return `il y a ${Math.round(m / 60)} h`;
    return fmtDate(t);
  };
  function updateAccountChip() {
    const b = $("#btn-account");
    if (!b) return;
    b.hidden = !acct.enabled;
    b.dataset.s = acct.status;
    $("#account-label").textContent = acct.loggedIn ? acct.pseudo : "Se connecter";
  }
  acct.onChange(() => {
    updateAccountChip();
    if (mustLogIn()) gate();
    const live = view.querySelector("[data-acct-live]");
    if (!overlay.hidden && live) live.innerHTML = syncRows();
  });

  // champs de formulaire
  const field = (label, input, help) => `<label class="field"><span>${label}</span>${input}${help ? `<small>${help}</small>` : ""}</label>`;
  const pwInput = (name, auto, ph) =>
    `<div class="pw"><input type="password" name="${name}" autocomplete="${auto}" placeholder="${ph || "••••••••"}" minlength="8" required /><button type="button" class="pw-eye" tabindex="-1" aria-label="Afficher le mot de passe">👁</button></div>`;
  const codeInput = () => `<input class="code" name="code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="••••••" required />`;
  // branche un formulaire : état « en cours », message d’erreur, gestion des pannes réseau
  function bindForm(onSubmit) {
    const f = view.querySelector("form.auth-box"), msg = f.querySelector(".auth-msg"), btn = f.querySelector("button[type=submit]");
    f.querySelectorAll(".pw-eye").forEach((e) => (e.onclick = () => {
      const i = e.previousElementSibling;
      i.type = i.type === "password" ? "text" : "password";
    }));
    const first = f.querySelector("input:not([type=hidden])");
    if (first) setTimeout(() => first.focus(), 60);
    f.onsubmit = async (e) => {
      e.preventDefault();
      const v = Object.fromEntries(new FormData(f).entries());
      msg.className = "auth-msg";
      msg.textContent = "Un instant…";
      btn.disabled = true;
      try {
        const r = await onSubmit(v);
        if (r && !r.ok) {
          msg.className = "auth-msg err";
          msg.textContent = errMsg(r);
        } else msg.textContent = "";
      } catch (err) {
        msg.className = "auth-msg err";
        msg.textContent = errMsg({});
      } finally {
        btn.disabled = false;
      }
    };
    return f;
  }

  /* --- accès au campus réservé aux comptes --- */
  const mustLogIn = () => !!A.REQUIRE_ACCOUNT && acct.enabled && !acct.loggedIn;
  const HKEY = "polymath.hadAccount";
  function gate() {
    if (gated) return;
    gated = true;
    document.body.classList.add("gated");
    let had = false;
    try {
      had = !!localStorage.getItem(HKEY);
    } catch (e) {}
    authView(had ? "login" : "signup");
  }
  function afterAuth(msg) {
    try {
      localStorage.setItem(HKEY, "1");
    } catch (e) {}
    toast(msg);
    if (!gated) return manageView();
    gated = false;
    document.body.classList.remove("gated");
    close();
    if (!campus) campusList();
  }
  function accountView() {
    if (acct.loggedIn) return manageView();
    authView("login");
  }

  /* --- connexion / inscription --- */
  function authView(tab, email) {
    const tabs = `<div class="tabs" role="tablist"><button class="tab ${tab === "login" ? "on" : ""}" data-tab="login">Se connecter</button><button class="tab ${tab === "signup" ? "on" : ""}" data-tab="signup">Créer un compte</button></div>`;
    const intro = gated
      ? `<p class="muted">Crée ton compte pour entrer sur le campus : 15 à 30 minutes par jour, une douzaine de facultés, et ta progression sauvegardée sur tous tes appareils.</p>`
      : `<p class="muted">Avec un compte, ta progression, tes fiches et tes révisions sont sauvegardées en ligne et te suivent sur tous tes appareils.</p>`;
    const kicker = gated ? "Bienvenue à Polymath Academy" : "Mon compte";
    if (tab === "signup") {
      open(`${topbar()}<div class="kicker">${kicker}</div><h1>Créer un compte</h1>${intro}${tabs}
        <form class="auth-box">
          ${field("Pseudo", `<input name="pseudo" autocomplete="nickname" maxlength="24" placeholder="Comment veux-tu t’appeler ?" required />`)}
          ${field("E-mail", `<input type="email" name="email" autocomplete="email" placeholder="ton@email.fr" required value="${esc(email)}" />`)}
          ${field("Mot de passe", pwInput("password", "new-password"), "Au moins 8 caractères.")}
          ${field("Confirme le mot de passe", pwInput("password2", "new-password"))}
          <button class="btn primary big" type="submit">Créer mon compte</button>
          <div class="auth-msg"></div>
          <p class="fine">Tu recevras un code par e-mail pour confirmer ton adresse. La progression déjà faite sur cet appareil sera ajoutée à ton compte.</p>
        </form>`);
      bindForm(async (v) => {
        if (v.password !== v.password2) return { ok: false, error: "mismatch" };
        const em = v.email.trim().toLowerCase();
        const r = await acct.signup(v.pseudo.trim(), em, v.password);
        if (r.ok) signupCodeView(em);
        return r;
      });
    } else {
      open(`${topbar()}<div class="kicker">${kicker}</div><h1>Se connecter</h1>${intro}${tabs}
        <form class="auth-box">
          ${field("E-mail", `<input type="email" name="email" autocomplete="username" placeholder="ton@email.fr" required value="${esc(email)}" />`)}
          ${field("Mot de passe", pwInput("password", "current-password"))}
          <button class="btn primary big" type="submit">Se connecter</button>
          <div class="auth-msg"></div>
          <button type="button" class="link" data-forgot>Mot de passe oublié ?</button>
        </form>`);
      const f = bindForm(async (v) => {
        const r = await acct.login(v.email.trim().toLowerCase(), v.password);
        if (r.ok) afterAuth(`Bon retour, ${acct.pseudo} !`);
        else if (r.error === "not_verified") signupCodeView(v.email.trim().toLowerCase(), true);
        return r;
      });
      view.querySelector("[data-forgot]").onclick = () => forgotView(f.querySelector("[name=email]").value.trim());
    }
    wire();
    view.querySelectorAll("[data-tab]").forEach((b) => (b.onclick = () => authView(b.dataset.tab, view.querySelector("[name=email]").value.trim())));
  }

  function signupCodeView(email, resend) {
    open(`${topbar("Retour")}<div class="kicker">Création du compte</div><h1>Confirme ton adresse</h1>
      <p class="muted">${resend ? "Un nouveau code va être" : "Un code à 6 chiffres vient d’être"} envoyé à <b>${esc(email)}</b>. Pense à regarder dans les spams.</p>
      <form class="auth-box">${codeInput()}<button class="btn primary big" type="submit">Activer mon compte</button><div class="auth-msg"></div>
      <button type="button" class="link" data-resend>Renvoyer un code</button></form>`);
    wire(() => authView("signup", email));
    bindForm(async (v) => {
      const r = await acct.verifySignup(email, v.code);
      if (r.ok) afterAuth(`Bienvenue sur le campus, ${acct.pseudo} !`);
      return r;
    });
    const again = async () => {
      const msg = view.querySelector(".auth-msg");
      const r = await acct.resendSignup(email).catch(() => ({ ok: false }));
      msg.className = "auth-msg" + (r.ok ? "" : " err");
      msg.textContent = r.ok ? "Nouveau code envoyé." : errMsg(r);
    };
    view.querySelector("[data-resend]").onclick = again;
    if (resend) again();
  }

  function forgotView(email) {
    open(`${topbar("Retour")}<div class="kicker">Mot de passe oublié</div><h1>Choisis un nouveau mot de passe</h1>
      <p class="muted">Indique ton adresse : si un compte existe, tu recevras un code pour définir un nouveau mot de passe.</p>
      <form class="auth-box">${field("E-mail", `<input type="email" name="email" autocomplete="email" placeholder="ton@email.fr" required value="${esc(email)}" />`)}
      <button class="btn primary big" type="submit">Recevoir un code</button><div class="auth-msg"></div></form>`);
    wire(() => authView("login", email));
    bindForm(async (v) => {
      const em = v.email.trim().toLowerCase();
      const r = await acct.requestReset(em);
      if (r.ok) resetView(em);
      return r;
    });
  }
  function resetView(email) {
    open(`${topbar("Retour")}<div class="kicker">Mot de passe oublié</div><h1>Nouveau mot de passe</h1>
      <p class="muted">Si un compte existe pour <b>${esc(email)}</b>, un code vient d’y être envoyé (pense aux spams).</p>
      <form class="auth-box">${field("Code reçu", codeInput())}
      ${field("Nouveau mot de passe", pwInput("password", "new-password"), "Au moins 8 caractères. Tes autres appareils seront déconnectés.")}
      ${field("Confirme le mot de passe", pwInput("password2", "new-password"))}
      <button class="btn primary big" type="submit">Enregistrer et me connecter</button><div class="auth-msg"></div></form>`);
    wire(() => forgotView(email));
    bindForm(async (v) => {
      if (v.password !== v.password2) return { ok: false, error: "mismatch" };
      const r = await acct.resetPassword(email, v.code, v.password);
      if (r.ok) afterAuth("Mot de passe enregistré, tu es connecté.");
      return r;
    });
  }

  /* --- gestion du compte --- */
  let meCache = null;
  function syncRows() {
    const label = { synced: "✓ À jour", syncing: "Synchronisation…", error: "Erreur, nouvel essai bientôt", offline: "Hors ligne", off: "—" };
    return `<div class="acct-row"><span>Sauvegarde en ligne</span><b>${label[acct.status] || ""}</b></div>
      <div class="acct-row"><span>Dernière sauvegarde</span><b>${fmtTime(acct.lastSync)}</b></div>`;
  }
  function manageView() {
    if (!acct.loggedIn) return authView("login");
    const st = store.get();
    const lv = store.level();
    const sessionsDone = Object.values(st.courses || {}).reduce((n, c) => n + ((c && c.completed) || []).length, 0);
    const me = meCache && meCache.email === acct.email ? meCache : null;
    const initial = (acct.pseudo || "?").trim().charAt(0).toUpperCase();
    const devices = me
      ? me.devices
          .sort((a, b) => (b.current ? 1 : 0) - (a.current ? 1 : 0) || b.last - a.last)
          .map((d) => `<div class="acct-row"><span>${esc(d.device)}${d.current ? ' <em class="tag">cet appareil</em>' : ""}</span><b>${fmtAgo(d.last)}</b></div>`)
          .join("")
      : `<div class="acct-row"><span class="muted">Chargement…</span></div>`;
    const goals = [10, 15, 20, 30, 45, 60].map((m) => `<option value="${m}" ${st.dailyGoalMin === m ? "selected" : ""}>${m} minutes</option>`).join("");
    open(`${topbar()}<div class="kicker">Gérer mon compte</div>
      <div class="acct-head"><div class="avatar">${esc(initial)}</div><div><h1>${esc(acct.pseudo)}</h1><p class="muted">${esc(acct.email)} · ${lv.name}, ${lv.xp} XP</p></div></div>

      <section class="acct-sec"><h3>Profil</h3>
        <div class="acct-row"><span>Pseudo</span><b>${esc(acct.pseudo)} <button class="link" data-edit-pseudo>Modifier</button></b></div>
        <div class="acct-row"><span>E-mail</span><b>${esc(acct.email)} <button class="link" data-edit-email>Modifier</button></b></div>
        <div class="acct-row"><span>Membre depuis</span><b>${me ? fmtDate(me.createdAt) : "…"}</b></div>
      </section>

      <section class="acct-sec"><h3>Progression</h3>
        <div class="acct-row"><span>Rang</span><b>${lv.name} · ${lv.xp} XP</b></div>
        <div class="acct-row"><span>Séances terminées</span><b>${sessionsDone}</b></div>
        <div class="acct-row"><span>Cartes de révision · fiches</span><b>${store.deckSize()} · ${store.fiches().length}</b></div>
        <div data-acct-live>${syncRows()}</div>
        <div class="acct-actions"><button class="btn ghost small" data-sync>Synchroniser maintenant</button></div>
      </section>

      <section class="acct-sec"><h3>Préférences</h3>
        <div class="acct-row"><span>Objectif quotidien</span><b><select data-goal>${goals}</select></b></div>
      </section>

      <section class="acct-sec"><h3>Sécurité</h3>
        <div class="acct-row"><span>Mot de passe</span><b><button class="link" data-password>${me && !me.hasPassword ? "Définir un mot de passe" : "Changer le mot de passe"}</button></b></div>
        <p class="sub">Appareils connectés</p>
        ${devices}
        <div class="acct-actions"><button class="btn ghost small" data-others ${me && me.devices.length < 2 ? "disabled" : ""}>Déconnecter les autres appareils</button></div>
      </section>

      <section class="acct-sec"><h3>Mes données</h3>
        <p class="muted small">Tes données sont stockées dans un tableur privé du créateur de Polymath Academy et ne sont jamais partagées.</p>
        <div class="acct-actions"><button class="btn ghost small" data-export>Télécharger ma progression</button><button class="btn ghost small" data-reset>Réinitialiser ma progression</button></div>
      </section>

      <section class="acct-sec danger"><h3>Supprimer le compte</h3>
        <p class="muted small">Supprime ton compte et ta sauvegarde en ligne. La progression reste sur cet appareil tant que tu ne la réinitialises pas.</p>
        <div class="acct-actions"><button class="btn danger small" data-delete>Supprimer mon compte</button></div>
      </section>

      <div class="acct-actions"><button class="btn primary" data-logout>Se déconnecter</button></div>`);
    wire();
    const q = (s) => view.querySelector(s);
    q("[data-sync]").onclick = () => acct.syncNow();
    q("[data-goal]").onchange = (e) => {
      store.setDailyGoal(Number(e.target.value));
      toast(`Objectif quotidien : ${e.target.value} minutes.`);
    };
    q("[data-edit-pseudo]").onclick = pseudoView;
    q("[data-edit-email]").onclick = () => emailView();
    q("[data-password]").onclick = () => passwordView(me && !me.hasPassword);
    q("[data-others]").onclick = async () => {
      const r = await acct.logoutOthers().catch(() => ({ ok: false }));
      if (r.ok) {
        toast("Les autres appareils ont été déconnectés.");
        refreshMe();
      } else toast(errMsg(r));
    };
    q("[data-export]").onclick = () => {
      const blob = new Blob([JSON.stringify(store.get(), null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "polymath-progression.json";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => (URL.revokeObjectURL(a.href), a.remove()), 1000);
    };
    q("[data-reset]").onclick = resetProgressView;
    q("[data-delete]").onclick = deleteView;
    q("[data-logout]").onclick = async () => {
      await acct.logout();
      meCache = null;
      toast("Déconnecté. Ta progression reste aussi sur cet appareil.");
      authView("login");
    };
    if (!me) refreshMe();
  }
  async function refreshMe() {
    try {
      const r = await acct.me();
      if (r.ok) {
        meCache = r;
        if (!overlay.hidden && view.querySelector(".acct-head")) manageView();
      } else if (r.error === "auth") authView("login");
    } catch (e) {}
  }
  const subPage = (kicker, title, text, body, label) =>
    open(`${topbar("Mon compte")}<div class="kicker">${kicker}</div><h1>${title}</h1>${text ? `<p class="muted">${text}</p>` : ""}
      <form class="auth-box">${body}<button class="btn primary big" type="submit">${label}</button><div class="auth-msg"></div></form>`);

  function pseudoView() {
    subPage("Profil", "Modifier mon pseudo", "", field("Pseudo", `<input name="pseudo" maxlength="24" required value="${esc(acct.pseudo)}" />`, "Entre 2 et 24 caractères."), "Enregistrer");
    wire(manageView);
    bindForm(async (v) => {
      const r = await acct.updateProfile(v.pseudo.trim());
      if (r.ok) {
        if (meCache) meCache.pseudo = r.pseudo;
        toast("Pseudo mis à jour.");
        manageView();
      }
      return r;
    });
  }
  function passwordView(noCurrent) {
    subPage(
      "Sécurité",
      noCurrent ? "Définir un mot de passe" : "Changer le mot de passe",
      "Tes autres appareils seront déconnectés par sécurité.",
      (noCurrent ? "" : field("Mot de passe actuel", pwInput("current", "current-password"))) +
        field("Nouveau mot de passe", pwInput("password", "new-password"), "Au moins 8 caractères.") +
        field("Confirme le nouveau mot de passe", pwInput("password2", "new-password")),
      "Enregistrer"
    );
    wire(manageView);
    bindForm(async (v) => {
      if (v.password !== v.password2) return { ok: false, error: "mismatch" };
      const r = await acct.changePassword(v.current || "", v.password);
      if (r.ok) {
        meCache = null;
        toast("Mot de passe enregistré.");
        manageView();
      }
      return r;
    });
  }
  function emailView() {
    subPage(
      "Profil",
      "Changer d’adresse e-mail",
      `Adresse actuelle : <b>${esc(acct.email)}</b>. Un code sera envoyé à la nouvelle adresse pour la confirmer.`,
      field("Nouvelle adresse", `<input type="email" name="newEmail" autocomplete="email" placeholder="nouvelle@email.fr" required />`) +
        (meCache && !meCache.hasPassword ? "" : field("Mot de passe", pwInput("password", "current-password"))),
      "Recevoir un code"
    );
    wire(manageView);
    bindForm(async (v) => {
      const em = v.newEmail.trim().toLowerCase();
      const r = await acct.requestEmailChange(em, v.password || "");
      if (r.ok) emailCodeView(em);
      return r;
    });
  }
  function emailCodeView(email) {
    subPage("Profil", "Confirme ta nouvelle adresse", `Un code vient d’être envoyé à <b>${esc(email)}</b>.`, codeInput(), "Confirmer");
    wire(emailView);
    bindForm(async (v) => {
      const r = await acct.confirmEmailChange(email, v.code);
      if (r.ok) {
        meCache = null;
        toast("Adresse e-mail mise à jour.");
        manageView();
      }
      return r;
    });
  }
  function resetProgressView() {
    subPage(
      "Mes données",
      "Réinitialiser ma progression",
      "Tes XP, séances terminées, cartes de révision et fiches seront effacées sur cet appareil et dans ta sauvegarde en ligne. C’est définitif.",
      field("Pour confirmer, écris RÉINITIALISER", `<input name="confirm" autocomplete="off" required />`),
      "Tout effacer"
    );
    wire(manageView);
    view.querySelector("button[type=submit]").classList.replace("primary", "danger");
    bindForm(async (v) => {
      if (v.confirm.trim().toUpperCase().replace("É", "E") !== "REINITIALISER") return { ok: false, error: "confirm" };
      store.reset();
      if (acct.loggedIn) await acct.pushNow();
      toast("Progression réinitialisée.");
      manageView();
      return { ok: true };
    });
    ERR.confirm = "Écris le mot RÉINITIALISER pour confirmer.";
  }
  function deleteView() {
    const needPw = !(meCache && !meCache.hasPassword);
    subPage(
      "Supprimer le compte",
      "Supprimer mon compte",
      "Ton compte, ta sauvegarde en ligne et tes connexions seront supprimés définitivement. Ta progression restera seulement sur cet appareil.",
      (needPw ? field("Mot de passe", pwInput("password", "current-password")) : "") + field("Pour confirmer, écris SUPPRIMER", `<input name="confirm" autocomplete="off" required />`),
      "Supprimer définitivement"
    );
    wire(manageView);
    view.querySelector("button[type=submit]").classList.replace("primary", "danger");
    ERR.confirm_del = "Écris le mot SUPPRIMER pour confirmer.";
    bindForm(async (v) => {
      if (v.confirm.trim().toUpperCase() !== "SUPPRIMER") return { ok: false, error: "confirm_del" };
      const r = await acct.deleteAccount(v.password || "");
      if (r.ok) {
        meCache = null;
        toast("Ton compte a été supprimé.");
        authView("signup");
      }
      return r;
    });
  }

  /* ------------------------ démarrage -------------------------- */
  $("#btn-account").onclick = () => accountView();
  updateAccountChip();
  $("#btn-review").onclick = reviewView;
  $("#btn-fiches").onclick = fichesView;
  $("#btn-campus-list").onclick = campusList;

  function campusList() {
    open(
      `${topbar()}<div class="kicker">Plan du campus</div><h1>Les facultés</h1>
      <div class="course-list"><button class="course-card" data-libcard style="--acc:#b8892f"><div><b>La Bibliothèque</b><p>Fiches, révisions et catalogue de tous les cours.</p></div><span class="cta">Entrer →</span></button>${A.faculties
        .map(
          (f) => `<button class="course-card ${f.status === "open" ? "" : "ghost-card"}" data-fac="${f.id}" style="--acc:${f.color}">
          <div><b>${f.name}</b><p>${f.desc}</p></div><span class="cta">${f.status === "open" ? "Entrer →" : "Bientôt"}</span></button>`
        )
        .join("")}</div>`
    );
    wire();
    view.querySelector("[data-libcard]").onclick = () => {
      campus && campus.focus("__library");
      libraryView();
    };
    view.querySelectorAll("[data-fac]").forEach(
      (b) =>
        (b.onclick = () => {
          const f = A.faculties.find((x) => x.id === b.dataset.fac);
          if (f.status === "open") {
            campus && campus.focus(f.id);
            openFaculty(f);
          } else toast(`${f.name} : en construction.`);
        })
    );
  }

  function webglOK() {
    try {
      const c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
    } catch (e) {
      return false;
    }
  }
  if (window.THREE && webglOK()) {
    campus = A.createCampus($("#campus"), $("#labels"), A.faculties, { onSelect: openFaculty, onLibrary: libraryView });
  } else document.body.classList.add("no-3d");
  if (mustLogIn()) gate();
  else if (!campus) campusList();
  updateHUD();
  setTimeout(() => $("#hint").classList.add("fade"), 15000);
})();
