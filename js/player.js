/* ============================================================
   AGORA — lecteur de séance
   Transforme les étapes d'une séance en écrans successifs :
   cours (une diapo par écran) → flashcards → classement →
   quiz (une question par écran) → cas pratique → fiche.
   ============================================================ */
(function () {
  const A = (window.AGORA = window.AGORA || {});
  const LABELS = { slide: "Cours", cards: "Flashcards", sort: "Classement", quiz: "Quiz", case: "Cas pratique", fiche: "Ta fiche" };
  const XP = { session: 100, quiz: 10, case: 20, sort: 5 };

  function flatten(session) {
    const out = [];
    session.steps.forEach((st) => {
      if (st.type === "lesson") st.slides.forEach((slide, i) => out.push({ kind: "slide", step: st, slide, n: i + 1, of: st.slides.length }));
      else if (st.type === "quiz") st.questions.forEach((q, i) => out.push({ kind: "quiz", q, n: i + 1, of: st.questions.length }));
      else out.push({ kind: st.type, step: st });
    });
    return out;
  }
  const fmt = (s) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

  A.renderFiche = function (f, color) {
    return `<article class="fiche" style="--acc:${color || "var(--accent)"}">
      <header><span class="fiche-tag">Fiche</span><h3>${f.title}</h3>${f.courseTitle ? `<small>${f.courseTitle}</small>` : ""}</header>
      <ul>${f.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      ${f.retenir ? `<div class="retenir"><b>À retenir</b><p>${f.retenir}</p></div>` : ""}
    </article>`;
  };

  A.Player = function (root, course, session, hooks) {
    const store = A.store;
    const screens = flatten(session);
    let i = Math.min(store.course(course.id).progress[session.id] || 0, screens.length - 1);
    let gained = 0,
      good = 0,
      asked = 0,
      seconds = 0,
      pending = 0,
      lastActive = Date.now(),
      done = false;
    const awarded = new Set(); // écrans déjà notés (pas de double XP en revenant en arrière)

    root.innerHTML = `
      <div class="player" style="--acc:${course.color}">
        <div class="player-top">
          <button class="icon-btn" data-exit aria-label="Quitter la séance">✕</button>
          <div class="bar"><i></i></div>
          <span class="ptimer" title="Temps passé dans cette séance">0:00</span>
        </div>
        <div class="player-body"></div>
        <div class="player-foot">
          <span class="step-label"></span>
          <div class="foot-actions">
            <button class="btn ghost" data-prev>Retour</button>
            <button class="btn primary" data-next>Continuer</button>
          </div>
        </div>
      </div>`;
    const body = root.querySelector(".player-body");
    const bar = root.querySelector(".bar i");
    const label = root.querySelector(".step-label");
    const nextBtn = root.querySelector("[data-next]");
    const prevBtn = root.querySelector("[data-prev]");
    const timerEl = root.querySelector(".ptimer");

    /* --- chrono : compte seulement si l'onglet est visible et qu'on a bougé dans les 3 dernières minutes --- */
    const touch = () => (lastActive = Date.now());
    root.addEventListener("pointerdown", touch);
    root.addEventListener("keydown", touch);
    root.addEventListener("scroll", touch, true);
    const tick = setInterval(() => {
      if (done || document.visibilityState !== "visible" || Date.now() - lastActive > 180000) return;
      seconds++;
      pending++;
      timerEl.textContent = fmt(seconds);
      if (pending >= 10) flush();
    }, 1000);
    function flush() {
      if (pending) store.addSeconds(pending);
      pending = 0;
    }
    function stop() {
      clearInterval(tick);
      flush();
    }

    root.querySelector("[data-exit]").onclick = () => {
      stop();
      hooks.onExit();
    };
    prevBtn.onclick = () => {
      if (i > 0) {
        i--;
        render();
      }
    };
    nextBtn.onclick = () => {
      if (i < screens.length - 1) {
        i++;
        render();
      } else finish();
    };

    function setNext(enabled, text) {
      nextBtn.disabled = !enabled;
      nextBtn.textContent = text || (i === screens.length - 1 ? "Terminer la séance" : "Continuer");
    }

    function render() {
      const s = screens[i];
      bar.style.width = ((i + 1) / screens.length) * 100 + "%";
      label.textContent = LABELS[s.kind] + (s.of ? ` · ${s.n}/${s.of}` : "") + ` — écran ${i + 1}/${screens.length}`;
      prevBtn.style.visibility = i > 0 ? "visible" : "hidden";
      setNext(true);
      body.innerHTML = "";
      R[s.kind](s);
      body.scrollTop = 0;
      store.setStep(course.id, session.id, i);
    }

    /* --------------------------- écrans --------------------------- */
    const R = {
      slide(s) {
        const sl = s.slide;
        body.innerHTML = `<section class="slide">
          <div class="kicker">${s.step.title} · ${s.n}/${s.of}</div>
          <h2>${sl.title}</h2>
          <div class="prose">${sl.body}</div>
          ${sl.article ? `<blockquote class="article"><p>« ${sl.article.text} »</p><cite>${sl.article.ref}</cite></blockquote>` : ""}
          ${sl.example ? `<div class="example"><b>Exemple</b><p>${sl.example}</p></div>` : ""}
        </section>`;
      },

      cards(s) {
        store.addCards(s.step.cards, { course: course.id });
        body.innerHTML = `<section>
          <div class="kicker">Flashcards</div>
          <h2>Retourne chaque carte</h2>
          <p class="muted">Lis le recto, essaie de répondre dans ta tête, puis clique pour vérifier. Ces cartes rejoignent ton paquet de <b>révision</b>.</p>
          <div class="flip-grid">${s.step.cards
            .map((c) => `<button class="flip"><span class="face front">${c.front}</span><span class="face back">${c.back}</span></button>`)
            .join("")}</div></section>`;
        const all = body.querySelectorAll(".flip");
        let seen = new Set();
        setNext(false, `Retourne les cartes (0/${all.length})`);
        all.forEach((el, k) =>
          el.addEventListener("click", () => {
            el.classList.toggle("on");
            seen.add(k);
            if (seen.size >= all.length) setNext(true);
            else setNext(false, `Retourne les cartes (${seen.size}/${all.length})`);
          })
        );
      },

      sort(s) {
        const st = s.step;
        let k = 0,
          score = 0;
        body.innerHTML = `<section class="sorter">
          <div class="kicker">Classement</div><h2>${st.title}</h2><p class="muted">${st.instruction}</p>
          <div class="sort-stage"></div>
          <div class="sort-bins">${st.categories.map((c, ci) => `<div class="bin" data-bin="${ci}"><b>${c}</b><ul></ul></div>`).join("")}</div>
        </section>`;
        const stage = body.querySelector(".sort-stage");
        setNext(false, `Classe les éléments (0/${st.items.length})`);
        function show() {
          if (k >= st.items.length) {
            stage.innerHTML = `<div class="sort-done">Score : <b>${score}/${st.items.length}</b>${score === st.items.length ? " — parfait." : ""}</div>`;
            setNext(true);
            return;
          }
          const it = st.items[k];
          stage.innerHTML = `<div class="sort-item"><span class="count">${k + 1}/${st.items.length}</span><p>${it.text}</p>
            <div class="sort-choices">${st.categories.map((c, ci) => `<button class="btn choice" data-c="${ci}">${c}</button>`).join("")}</div>
            <div class="feedback"></div></div>`;
          stage.querySelectorAll("[data-c]").forEach((b) =>
            b.addEventListener("click", () => {
              const c = +b.dataset.c,
                ok = c === it.cat;
              stage.querySelectorAll("[data-c]").forEach((x) => {
                x.disabled = true;
                if (+x.dataset.c === it.cat) x.classList.add("right");
              });
              if (!ok) b.classList.add("wrong");
              if (ok) {
                score++;
                gained += XP.sort;
                store.addXP(XP.sort);
              }
              body.querySelector(`[data-bin="${it.cat}"] ul`).insertAdjacentHTML("beforeend", `<li class="${ok ? "" : "miss"}">${it.text}</li>`);
              stage.querySelector(".feedback").innerHTML = `<div class="explain ${ok ? "ok" : "ko"}"><b>${ok ? "Bien vu." : "Pas tout à fait."}</b> ${it.why}</div>
                <button class="btn primary small" data-go>${k + 1 < st.items.length ? "Suivant" : "Voir le score"}</button>`;
              stage.querySelector("[data-go]").onclick = () => {
                k++;
                setNext(false, `Classe les éléments (${k}/${st.items.length})`);
                show();
              };
            })
          );
        }
        show();
      },

      quiz(s) {
        mcq(s.q.q, s.q.options, s.q.answer, s.q.explain, `Quiz · question ${s.n}/${s.of}`, XP.quiz);
      },

      case(s) {
        const st = s.step;
        mcq(st.question, st.options, st.answer, st.explain, "Cas pratique · tu es le juge", XP.case, `<div class="case-story"><h3>${st.title}</h3><p>${st.story}</p></div>`);
      },

      fiche(s) {
        const f = { id: course.id + ":" + session.id, courseId: course.id, courseTitle: course.title, title: s.step.title, points: s.step.points, retenir: s.step.retenir };
        store.saveFiche(f);
        body.innerHTML = `<section>
          <div class="kicker">Ta fiche de révision</div>
          <h2>La séance en une page</h2>
          <p class="muted">Elle est rangée dans <b>Mes fiches</b>. Tu peux l’imprimer ou l’enregistrer en PDF.</p>
          <div class="fiche-wrap printable">${A.renderFiche(f, course.color)}</div>
          <button class="btn ghost" data-print>Imprimer / PDF</button>
        </section>`;
        body.querySelector("[data-print]").onclick = () => window.print();
      },
    };

    /* Mélange les réponses de façon stable (même ordre à chaque passage) pour que
       la bonne réponse ne soit pas toujours à la même place. */
    function shuffled(question, options, answer) {
      let h = 0;
      for (const ch of question) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
      const idx = options.map((_, k) => k);
      for (let k = idx.length - 1; k > 0; k--) {
        h = (h * 1103515245 + 12345) >>> 0;
        const j = h % (k + 1);
        [idx[k], idx[j]] = [idx[j], idx[k]];
      }
      return { options: idx.map((k) => options[k]), answer: idx.indexOf(answer) };
    }

    function mcq(question, rawOptions, rawAnswer, explain, kicker, xp, pre) {
      const { options, answer } = shuffled(question, rawOptions, rawAnswer);
      body.innerHTML = `<section class="mcq">
        <div class="kicker">${kicker}</div>${pre || ""}<h2>${question}</h2>
        <div class="options">${options.map((o, k) => `<button class="btn choice" data-o="${k}"><span class="letter">${"ABCD"[k]}</span>${o}</button>`).join("")}</div>
        <div class="feedback"></div></section>`;
      setNext(false, "Choisis une réponse");
      body.querySelectorAll("[data-o]").forEach((b) =>
        b.addEventListener("click", () => {
          const k = +b.dataset.o,
            ok = k === answer;
          body.querySelectorAll("[data-o]").forEach((x) => {
            x.disabled = true;
            if (+x.dataset.o === answer) x.classList.add("right");
          });
          if (!ok) b.classList.add("wrong");
          const first = !awarded.has(i);
          awarded.add(i);
          if (first) asked++;
          if (ok && first) {
            good++;
            gained += xp;
            store.addXP(xp);
          }
          body.querySelector(".feedback").innerHTML = `<div class="explain ${ok ? "ok" : "ko"}"><b>${ok ? `Exact · +${xp} XP` : "Raté"}</b> ${explain}</div>`;
          setNext(true);
        })
      );
    }

    function finish() {
      done = true;
      stop();
      const first = store.completeSession(course.id, session.id, XP.session);
      if (first) gained += XP.session;
      const next = course.sessions[session.index + 1];
      const goalMin = store.get().dailyGoalMin;
      const todayMin = Math.floor(store.todaySeconds() / 60);
      root.innerHTML = `<div class="player done" style="--acc:${course.color}">
        <div class="done-card">
          <div class="seal">✓</div>
          <div class="kicker">Séance ${session.index + 1} terminée</div>
          <h2>${session.title}</h2>
          <div class="done-stats">
            <div><b>+${gained}</b><span>XP gagnés</span></div>
            <div><b>${asked ? good + "/" + asked : "—"}</b><span>bonnes réponses</span></div>
            <div><b>${fmt(seconds)}</b><span>temps de séance</span></div>
          </div>
          <p class="muted">${
            todayMin >= goalMin
              ? `Objectif du jour atteint (${todayMin} min). Ta série continue — reviens demain.`
              : `Encore ${goalMin - todayMin} min pour l’objectif du jour : une révision de cartes fera l’affaire.`
          }</p>
          <div class="done-actions">
            <button class="btn ghost" data-back>Retour au parcours</button>
            ${next ? `<button class="btn primary" data-next-s>Séance suivante : ${next.title}</button>` : `<button class="btn primary" data-back>Cours terminé — bravo</button>`}
          </div>
        </div></div>`;
      root.querySelectorAll("[data-back]").forEach((b) => (b.onclick = hooks.onExit));
      const ns = root.querySelector("[data-next-s]");
      if (ns) ns.onclick = () => hooks.onNext(next);
    }

    render();
    return { stop };
  };
})();
