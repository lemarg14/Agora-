/* ============================================================
   Les facultés du campus.
   status: "open" (cours disponibles) | "soon" (bâtiment en construction)
   style : forme du bâtiment 3D (temple, dome, tower, pagoda, modern, skyscraper)
   ============================================================ */
window.AGORA = window.AGORA || {};
AGORA.faculties = [
  {
    id: "droit",
    name: "Faculté de Droit",
    short: "Droit",
    color: "#a8432f",
    style: "temple",
    status: "open",
    desc: "Comprendre les règles qui encadrent la société : ce qui est interdit, ce que l’on risque, et comment fonctionne la justice.",
    courses: ["droit-penal"],
  },
  {
    id: "economie",
    name: "Faculté d’Économie",
    short: "Économie",
    color: "#2f6f8f",
    style: "dome",
    status: "soon",
    desc: "Offre, demande, inflation, croissance : les mécanismes qui font tourner le monde.",
    courses: [],
  },
  {
    id: "histoire",
    name: "Faculté d’Histoire",
    short: "Histoire",
    color: "#8a6a2f",
    style: "tower",
    status: "soon",
    desc: "Les grandes périodes, les grands tournants, et pourquoi ils comptent encore aujourd’hui.",
    courses: [],
  },
  {
    id: "langues",
    name: "Institut des Langues",
    short: "Langues",
    color: "#6b4f9a",
    style: "pagoda",
    status: "soon",
    desc: "Anglais, espagnol et plus : vocabulaire utile, grammaire sans douleur, mises en situation.",
    courses: [],
  },
  {
    id: "management",
    name: "École de Management",
    short: "Management",
    color: "#2f7d5b",
    style: "modern",
    status: "soon",
    desc: "Recruter, déléguer, motiver, décider : diriger une équipe et une entreprise.",
    courses: [],
  },
  {
    id: "finance",
    name: "École de Finance",
    short: "Finance",
    color: "#1f4f7a",
    style: "skyscraper",
    status: "soon",
    desc: "Lire un bilan, comprendre les marchés, valoriser une entreprise.",
    courses: [],
  },
];
