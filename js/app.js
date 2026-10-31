/* ============================================================
   AGORA — application : HUD, navigation entre vues, révision
   ============================================================ */
(function () {
  const A = window.AGORA;
  const store = A.store;
  const $ = (s) => document.querySelector(s);
  const overlay = $("#overlay"),
    view = $("#view");
  let campus = null,
    player = null;

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
      stage.innerHTML = `<div class="count">${k + 1}/${due.length}</div>
        <button class="flip big"><span class="face front">${c.front}</span><span class="face back">${c.back}</span></button>
        <div class="review-actions" hidden><button class="btn choice wrongish" data-r="0">À revoir</button><button class="btn choice rightish" data-r="1">Je savais</button></div>
        <p class="muted center">Réponds dans ta tête, puis retourne la carte.</p>`;
      const flip = stage.querySelector(".flip"),
        acts = stage.querySelector(".review-actions");
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
  function ficheView(id, back) {
    const f = store.get().fiches[id];
    const c = A.courses[f.courseId];
    open(`${topbar("Retour")}<div class="fiche-wrap printable">${A.renderFiche(f, c && c.color)}</div><button class="btn ghost" data-print>Imprimer / PDF</button>`);
    wire(back);
    view.querySelector("[data-print]").onclick = () => window.print();
  }

  /* ------------------------ démarrage -------------------------- */
  $("#btn-review").onclick = reviewView;
  $("#btn-fiches").onclick = fichesView;
  $("#btn-campus-list").onclick = campusList;

  function campusList() {
    open(
      `${topbar()}<div class="kicker">Plan du campus</div><h1>Les facultés</h1>
      <div class="course-list">${A.faculties
        .map(
          (f) => `<button class="course-card ${f.status === "open" ? "" : "ghost-card"}" data-fac="${f.id}" style="--acc:${f.color}">
          <div><b>${f.name}</b><p>${f.desc}</p></div><span class="cta">${f.status === "open" ? "Entrer →" : "Bientôt"}</span></button>`
        )
        .join("")}</div>`
    );
    wire();
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
    campus = A.createCampus($("#campus"), $("#labels"), A.faculties, { onSelect: openFaculty });
  } else {
    document.body.classList.add("no-3d");
    campusList();
  }
  updateHUD();
  setTimeout(() => $("#hint").classList.add("fade"), 7000);
})();
