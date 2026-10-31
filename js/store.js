/* ============================================================
   POLYMATH ACADEMY — mémoire de progression (localStorage)
   (le nom interne « AGORA » des variables et de la clé de stockage est
   conservé pour ne pas effacer la progression déjà enregistrée)
   Toute la persistance passe par ce fichier : pour synchroniser
   plus tard avec une base (Supabase, etc.), il suffit de
   remplacer load() / save().
   ============================================================ */
(function () {
  const A = (window.AGORA = window.AGORA || {});
  const KEY = "agora.v1";
  const LEITNER = [0, 1, 3, 7, 16, 35]; // jours avant la prochaine révision, par boîte

  A.courses = A.courses || {};
  A.registerCourse = function (course) {
    course.sessions.forEach((s, si) => {
      s.index = si;
      s.steps.forEach((st) => {
        if (st.type === "cards")
          st.cards.forEach((c, ci) => (c.id = course.id + ":" + s.id + ":" + ci));
      });
    });
    A.courses[course.id] = course;
  };

  const pad = (n) => String(n).padStart(2, "0");
  const dayStr = (d) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const today = () => dayStr(new Date());
  const addDays = (s, n) => {
    const [y, m, d] = s.split("-").map(Number);
    return dayStr(new Date(y, m - 1, d + n));
  };
  const diffDays = (a, b) => {
    const [y1, m1, d1] = a.split("-").map(Number);
    const [y2, m2, d2] = b.split("-").map(Number);
    return Math.round((new Date(y2, m2 - 1, d2) - new Date(y1, m1 - 1, d1)) / 86400000);
  };

  const empty = () => ({
    version: 1,
    xp: 0,
    dailyGoalMin: 15,
    streak: { count: 0, last: null },
    days: {},
    courses: {},
    deck: {},
    fiches: {},
  });

  let state;
  const listeners = [];

  function load() {
    try {
      state = Object.assign(empty(), JSON.parse(localStorage.getItem(KEY)) || {});
    } catch (e) {
      state = empty();
    }
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
    listeners.forEach((f) => f(state));
  }

  const LEVELS = [
    [0, "Curieux"],
    [100, "Apprenti"],
    [300, "Initié"],
    [600, "Explorateur"],
    [1000, "Confirmé"],
    [1500, "Expert"],
    [2200, "Érudit"],
    [3000, "Maître"],
    [4000, "Polymathe"],
  ];

  A.store = {
    today,
    get: () => state,
    onChange: (f) => listeners.push(f),

    /* --- temps & série --- */
    addSeconds(s) {
      const t = today();
      state.days[t] = (state.days[t] || 0) + s;
      if (state.days[t] >= state.dailyGoalMin * 60 && state.streak.last !== t) {
        const gap = state.streak.last ? diffDays(state.streak.last, t) : null;
        state.streak.count = gap === 1 ? state.streak.count + 1 : 1;
        state.streak.last = t;
      }
      save();
    },
    todaySeconds: () => state.days[today()] || 0,
    goalSeconds: () => state.dailyGoalMin * 60,
    streak() {
      const s = state.streak;
      if (!s.last) return 0;
      return diffDays(s.last, today()) <= 1 ? s.count : 0;
    },

    /* --- XP & niveau --- */
    addXP(n) {
      state.xp += n;
      save();
    },
    level() {
      let i = 0;
      while (i + 1 < LEVELS.length && state.xp >= LEVELS[i + 1][0]) i++;
      const next = LEVELS[i + 1];
      return {
        name: LEVELS[i][1],
        index: i,
        xp: state.xp,
        nextAt: next ? next[0] : null,
        from: LEVELS[i][0],
      };
    },

    /* --- cours --- */
    course(id) {
      return state.courses[id] || (state.courses[id] = { completed: [], progress: {} });
    },
    setStep(cid, sid, i) {
      this.course(cid).progress[sid] = i;
      save();
    },
    completeSession(cid, sid, xp) {
      const c = this.course(cid);
      const first = !c.completed.includes(sid);
      if (first) {
        c.completed.push(sid);
        state.xp += xp;
      }
      delete c.progress[sid];
      save();
      return first;
    },
    isUnlocked(course, session) {
      if (session.index === 0) return true;
      const prev = course.sessions[session.index - 1];
      return this.course(course.id).completed.includes(prev.id);
    },

    /* --- révision espacée (Leitner) --- */
    addCards(cards, meta) {
      const t = today();
      let changed = false;
      cards.forEach((c) => {
        if (!state.deck[c.id]) {
          state.deck[c.id] = { box: 1, due: t, front: c.front, back: c.back, course: meta && meta.course };
          changed = true;
        }
      });
      if (changed) save();
    },
    dueCards() {
      const t = today();
      return Object.entries(state.deck)
        .filter(([, v]) => v.due <= t)
        .map(([id, v]) => Object.assign({ id }, v));
    },
    deckSize: () => Object.keys(state.deck).length,
    reviewCard(id, ok) {
      const c = state.deck[id];
      if (!c) return;
      c.box = ok ? Math.min(c.box + 1, LEITNER.length - 1) : 1;
      c.due = addDays(today(), ok ? LEITNER[c.box] : 1);
      if (ok) state.xp += 5;
      save();
    },

    /* --- fiches --- */
    saveFiche(f) {
      state.fiches[f.id] = Object.assign({ savedAt: today() }, f);
      save();
    },
    fiches: () => Object.values(state.fiches),

    reset() {
      state = empty();
      save();
    },
  };

  load();
})();
