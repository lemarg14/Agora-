# Polymath Academy — campus 3D d’apprentissage

Un campus 3D où chaque bâtiment est une faculté. Polymath Academy est un service d’apprentissage en ligne : il ne délivre pas de diplôme et n’est pas un établissement d’enseignement supérieur. On choisit un cours, puis on suit un parcours de séances courtes (15 à 20 min par jour) : cours en diapos, flashcards, exercices de classement, quiz, cas pratiques « tu es le juge », et une **fiche de révision** à la fin de chaque séance.

**Facultés** : Droit (ouverte) · Économie · Histoire · Langues · Management · Finance (en construction).
**Premier cours** : *Droit pénal — les bases*, 8 séances.

## Lancer en local

Aucune installation ni build. Ouvre `index.html` dans le navigateur, ou mieux, lance un petit serveur :

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Mettre en ligne (gratuit)

- **GitHub Pages** : Settings → Pages → Deploy from branch → `main` / racine.
- **Vercel** : « Add New Project » → importer le repo → Framework : *Other* → Deploy. Pas de commande de build.

## Structure

```
index.html               page unique
css/style.css            tous les styles (clair/sombre, mobile, impression des fiches)
js/store.js              mémoire de progression (localStorage) + registre des cours
js/campus.js             scène 3D Three.js : bâtiments, caméra, clics
js/player.js             lecteur de séance (cours, cartes, quiz, cas, fiche)
js/app.js                HUD, navigation, révision, mes fiches
data/faculties.js        liste des facultés (nom, couleur, style de bâtiment, statut)
data/courses/*.js        un fichier par cours
tools/build-single.py    génère dist/polymath-academy.html (tout-en-un, pour partager un seul fichier)
```

## Ce que la mémoire suit

Tout est stocké dans le navigateur (`localStorage`, clé `agora.v1`, nom historique conservé) :

- séances terminées et écran en cours (on reprend où on s’est arrêté) ;
- **temps du jour** (compté seulement quand on est actif) et objectif de 15 min ;
- **série** de jours où l’objectif est atteint ;
- **XP et rang** (Curieux → Apprenti → Initié → Explorateur → Confirmé → Expert → Érudit → Maître → Polymathe) ;
- **paquet de révision espacée** (méthode Leitner : 1, 3, 7, 16, 35 jours) ;
- **fiches** sauvegardées, imprimables en PDF.

Pour synchroniser entre appareils plus tard, il suffit de remplacer `load()` / `save()` dans `js/store.js` par des appels à une base (Supabase, Firebase…).

## Ajouter un cours

1. Crée `data/courses/mon-cours.js` :

```js
AGORA.registerCourse({
  id: "mon-cours",
  faculty: "economie",            // id d’une faculté de data/faculties.js
  title: "Titre du cours",
  subtitle: "Une phrase d’accroche",
  color: "#2f6f8f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro: "Présentation du cours.",
  sessions: [
    {
      id: "s1",
      title: "Titre de la séance",
      minutes: 15,
      objectives: ["Objectif 1", "Objectif 2"],
      steps: [
        { type: "lesson", title: "…", slides: [
          { title: "…", body: "<p>HTML autorisé</p>",
            article: { ref: "Source", text: "Citation" },   // optionnel
            example: "Un exemple concret" }                 // optionnel
        ]},
        { type: "cards", cards: [ { front: "Notion", back: "Définition" } ] },
        { type: "sort", title: "…", instruction: "…", categories: ["A", "B"],
          items: [ { text: "…", cat: 0, why: "Explication" } ] },
        { type: "quiz", questions: [
          { q: "Question ?", options: ["A", "B", "C"], answer: 1, explain: "Pourquoi" }
        ]},
        { type: "case", title: "…", story: "…", question: "…",
          options: ["…", "…"], answer: 0, explain: "…" },
        { type: "fiche", title: "…", points: ["…"], retenir: "La phrase clé" }
      ]
    }
  ]
});
```

2. Ajoute `<script src="data/courses/mon-cours.js"></script>` dans `index.html` (après `faculties.js`).
3. Dans `data/faculties.js`, ajoute l’id du cours à `courses` et passe la faculté en `status: "open"`.

## Feuille de route

- [ ] Examen final par cours + « diplôme » imprimable
- [ ] Cours suivants : droit civil, droit du travail, droit des sociétés ; puis économie, finance…
- [ ] Synchro de la progression (compte utilisateur)
- [ ] Mode « promenade » : déplacer un avatar dans le campus et entrer dans les bâtiments
- [ ] Audio des cours (lecture des diapos)

## Avertissement

Contenu pédagogique simplifié, à jour du droit connu fin 2026. Pour une situation réelle : vérifier les textes sur [Légifrance](https://www.legifrance.gouv.fr) et consulter un avocat.
