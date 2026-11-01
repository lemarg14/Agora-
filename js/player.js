/* ============================================================
   POLYMATH ACADEMY — lecteur de séance
   Transforme les étapes d'une séance en écrans successifs :
   cours (une diapo par écran) → flashcards → classement →
   quiz (une question par écran) → cas pratique → fiche.
   ============================================================ */
(function () {
  const A = (window.AGORA = window.AGORA || {});
  const LABELS = { slide: "Cours", cards: "Flashcards", sort: "Classement", quiz: "Quiz", case: "Cas pratique", fiche: "Ta fiche", type: "À toi d’écrire" };
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
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

  /* ---------- Prononciation (synthèse vocale du navigateur, gratuite) ---------- */
  A.canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;
  let voices = [];
  const loadVoices = () => (voices = A.canSpeak ? window.speechSynthesis.getVoices() : []);
  if (A.canSpeak) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  A.speak = function (text, lang, rate) {
    if (!A.canSpeak || !text) return;
    const clean = String(text).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = lang || "en-GB";
    const base = u.lang.slice(0, 2);
    const v = voices.find((x) => x.lang === u.lang) || voices.find((x) => x.lang && x.lang.slice(0, 2) === base);
    if (v) u.voice = v;
    u.rate = rate || 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };
  const sayBtn = (t, slow) => (A.canSpeak ? `<span class="say-btn" role="button" tabindex="0" data-say="${esc(t)}"${slow ? ' data-slow="1"' : ""} title="Écouter">🔊</span>` : "");

  /* ---------- Cyrillique : translittération à la française ---------- */
  const CYR = { а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "io", ж: "j", з: "z", и: "i", й: "ï", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "ou", ф: "f", х: "kh", ц: "ts", ч: "tch", ш: "ch", щ: "chtch", ъ: "", ы: "y", ь: "'", э: "è", ю: "iou", я: "ia" };
  const HAS_CYR = /[\u0400-\u04FF]/;
  A.translit = (t) =>
    String(t).replace(/[\u0400-\u04FF]/g, (ch) => {
      const lo = ch.toLowerCase(),
        r = CYR[lo];
      if (r === undefined) return ch;
      return ch !== lo && r ? r[0].toUpperCase() + r.slice(1) : r;
    });
  // forme « squelette » commune au cyrillique et à ses translittérations (fr / en)
  const ruKey = (t) =>
    t
      .replace(/[\u0400-\u04FF]/g, (ch) => (CYR[ch] !== undefined ? CYR[ch] : ch))
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/'/g, "")
      .replace(/shch|chtch|sch|tch|sh|ch|ts|tz/g, "c")
      .replace(/zh/g, "j")
      .replace(/kh/g, "h")
      .replace(/ou/g, "u")
      .replace(/w/g, "v")
      .replace(/y/g, "i")
      .replace(/ie/g, "e")
      .replace(/([a-z])\1+/g, "$1");

  /* ---------- Comparaison tolérante des réponses écrites ---------- */
  const norm = (t) =>
    String(t)
      .toLowerCase()
      .replace(/[’‘`´]/g, "'")
      .replace(/[ʿʾ]/g, "")
      .replace(/ł/g, "l")
      .replace(/ø/g, "o")
      .replace(/[\u064B-\u0652\u0670\u0640]/g, "")
      .replace(/[أإآٱ]/g, "ا")
      .replace(/ى/g, "ي")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,!?;:«»"()¿¡؟،]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  function lev(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++)
      for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  // 2 = exact, 1 = presque (une faute de frappe), 0 = faux
  A.checkAnswer = function (given, answers, lang) {
    const ru = lang && lang.startsWith("ru");
    const n = (t) => (ru ? ruKey(norm(t)) : norm(t));
    const g = n(given);
    if (!g) return 0;
    const list = (Array.isArray(answers) ? answers : [answers]).map(n);
    if (list.includes(g)) return 2;
    if (list.some((a) => a.length >= 5 && lev(a, g) <= 1)) return 1;
    return 0;
  };

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
    const lang = course.lang;
    // tout élément [data-say] (ou .say) se prononce au clic
    root.addEventListener("click", (e) => {
      const el = e.target.closest("[data-say], .say");
      if (!el || !lang) return;
      e.stopPropagation();
      e.preventDefault();
      A.speak(el.dataset.say || el.textContent, lang, el.dataset.slow ? 0.6 : 0.9);
    }, true);
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
          ${
            sl.say
              ? `<ul class="say-list">${sl.say
                  .map((w) => `<li>${lang ? sayBtn(w.say || w.t) : ""}<b${/[\u0600-\u06FF]/.test(w.t) ? ' class="ar" dir="rtl"' : ""}>${w.t}</b>${w.ph || HAS_CYR.test(w.t) ? `<span class="ph">${w.ph || A.translit(w.t)}</span>` : ""}<span class="fr">${w.fr || ""}</span></li>`)
                  .join("")}</ul>`
              : ""
          }
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
            .map((c) => `<button class="flip"><span class="face front">${c.front}${HAS_CYR.test(c.front) ? `<small class="tr">${A.translit(c.front)}</small>` : ""}${lang && c.say !== false ? sayBtn(c.say || c.front) : ""}</span><span class="face back">${c.back}</span></button>`)
            .join("")}</div></section>`;
        const all = body.querySelectorAll(".flip");
        let seen = new Set();
        setNext(false, `Retourne les cartes (0/${all.length})`);
        all.forEach((el, k) =>
          el.addEventListener("click", (e) => {
            if (e.target.closest("[data-say]")) return;
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
        const listen = s.q.say && lang;
        const pre = listen
          ? `<div class="listen"><button class="btn primary big-say" data-say="${esc(s.q.say)}">🔊 Écouter</button><button class="btn ghost small" data-say="${esc(s.q.say)}" data-slow="1">🐢 Plus lentement</button></div>`
          : "";
        mcq(s.q.q, s.q.options, s.q.answer, s.q.explain, listen ? `Écoute · question ${s.n}/${s.of}` : `Quiz · question ${s.n}/${s.of}`, XP.quiz, pre);
        if (listen) setTimeout(() => A.speak(s.q.say, lang), 300);
      },

      // Exercice d’écriture : traduire, compléter, conjuguer
      type(s) {
        const st = s.step;
        let k = 0,
          score = 0;
        body.innerHTML = `<section class="typer">
          <div class="kicker">À toi d’écrire</div><h2>${st.title}</h2><p class="muted">${st.instruction || "Écris ta réponse puis valide."}</p>
          <div class="type-stage"></div></section>`;
        const stage = body.querySelector(".type-stage");
        setNext(false, `Réponds (0/${st.items.length})`);
        function show() {
          if (k >= st.items.length) {
            stage.innerHTML = `<div class="sort-done">Score : <b>${score}/${st.items.length}</b>${score === st.items.length ? " — parfait." : ""}</div>`;
            setNext(true);
            return;
          }
          const it = st.items[k];
          const answers = Array.isArray(it.answer) ? it.answer : [it.answer];
          stage.innerHTML = `<div class="type-item"><span class="count">${k + 1}/${st.items.length}</span>
            <p class="prompt">${it.prompt}${it.say && lang ? sayBtn(it.say) : ""}</p>
            ${it.hint ? `<p class="hint">Indice : ${it.hint}</p>` : ""}
            <form class="type-form"><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ta réponse…" />
            <button class="btn primary" type="submit">Valider</button></form>
            <button class="btn ghost small" data-skip>Je ne sais pas</button>
            <div class="feedback"></div></div>`;
          const form = stage.querySelector("form"),
            inp = form.querySelector("input");
          setTimeout(() => inp.focus(), 50);
          let answered = false;
          function reveal(res) {
            if (answered) return;
            answered = true;
            inp.disabled = true;
            form.querySelector("button").disabled = true;
            stage.querySelector("[data-skip]").remove();
            const okk = res > 0;
            const key = i + ":" + k;
            const first = !awarded.has(key);
            awarded.add(key);
            if (first) asked++;
            if (okk) {
              score++;
              if (first) {
                good++;
                gained += XP.quiz;
                store.addXP(XP.quiz);
              }
            }
            inp.classList.add(okk ? "ok" : "ko");
            const expected = answers[0];
            // ce qu’on fait entendre : la forme dans la langue étudiée (pas une translittération)
            const isAr = /[\u0600-\u06FF\u0400-\u04FF]/;
            const spoken = it.say || answers.find((x) => isAr.test(x)) || (lang && lang.startsWith("ar") ? null : expected);
            const shown = HAS_CYR.test(expected) ? `${expected}</b> <i class="tr">(${A.translit(expected)})</i><b>` : expected;
            stage.querySelector(".feedback").innerHTML = `<div class="explain ${okk ? "ok" : "ko"}"><b>${
              res === 2 ? `Exact · +${XP.quiz} XP` : res === 1 ? `Presque · +${XP.quiz} XP` : "Pas tout à fait"
            }</b> ${res === 2 ? "" : `Réponse attendue : <b>${shown}</b>${lang && spoken ? sayBtn(spoken) : ""}. `}${it.explain || ""}</div>
              <button class="btn primary small" data-go>${k + 1 < st.items.length ? "Suivant" : "Voir le score"}</button>`;
            if (lang && spoken && st.speak !== false) A.speak(spoken, lang);
            stage.querySelector("[data-go]").onclick = () => {
              k++;
              setNext(false, `Réponds (${k}/${st.items.length})`);
              show();
            };
          }
          form.onsubmit = (e) => {
            e.preventDefault();
            if (!inp.value.trim()) return inp.focus();
            reveal(A.checkAnswer(inp.value, answers, lang));
          };
          stage.querySelector("[data-skip]").onclick = () => reveal(0);
        }
        show();
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
