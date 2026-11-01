/* ============================================================
   COURS : Le renforcement sans matériel
   Complexe sportif · 8 séances de 15 à 20 minutes
   Suite de « S'entraîner — les fondations ». Progresser au
   poids du corps, chez soi ou en voyage : leviers de
   progression, jambes, chaîne arrière, pousser, tirer,
   gainage, formats de séance, programme de 8 semaines.
   Pour un adulte en bonne santé ; ne remplace pas un avis
   médical.
   ============================================================ */
AGORA.registerCourse({
  id: "sport-poids-du-corps",
  faculty: "sport",
  title: "Le renforcement sans matériel",
  subtitle: "Devenir plus fort au poids du corps, chez soi, au bureau ou en voyage",
  color: "#1f8a8a",
  level: "Débutant à intermédiaire",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour se renforcer sans salle ni haltères : comment rendre un exercice plus difficile sans ajouter de poids, des progressions complètes pour les jambes, les fessiers, la poussée, le tirage et le gainage, les formats de séance courts (circuits, EMOM, AMRAP) et un programme de 8 semaines prêt à suivre. Idéal après « S’entraîner — les fondations ».",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Progresser sans charge",
      minutes: 15,
      objectives: ["Connaître les leviers pour rendre un exercice plus difficile", "S’équiper avec ce qu’on a déjà chez soi"],
      steps: [
        {
          type: "lesson",
          title: "Le poids du corps, ça suffit ?",
          slides: [
            {
              title: "Oui, pour longtemps",
              body:
                "<p>Les études montrent que le muscle se développe avec des séries de <b>6 à 30 répétitions</b> environ, à condition de finir <b>proche de l’échec</b>. Le poids du corps permet donc de progresser longtemps.</p><p>La difficulté : quand un exercice devient trop facile (30 pompes et plus), il faut le rendre plus dur <b>sans ajouter de poids</b>. C’est tout l’art de l’entraînement au poids du corps.</p>",
            },
            {
              title: "Les 7 leviers de progression",
              body:
                "<table class='t'><tr><th>Levier</th><th>Exemple</th></tr><tr><td><b>Répétitions</b></td><td>De 8 à 15 squats</td></tr><tr><td><b>Tempo</b></td><td>Descendre en 3 à 4 secondes</td></tr><tr><td><b>Pause</b></td><td>2 secondes en bas du squat</td></tr><tr><td><b>Amplitude</b></td><td>Pompes mains sur des livres pour descendre plus bas</td></tr><tr><td><b>Levier</b></td><td>Pompes pieds surélevés, bras plus loin du corps</td></tr><tr><td><b>Unilatéral</b></td><td>Passer de deux jambes à une jambe</td></tr><tr><td><b>Densité</b></td><td>Même travail avec moins de repos</td></tr></table>",
            },
            {
              title: "Le matériel de la maison",
              body:
                "<ul><li>Une <b>chaise stable</b> ou un banc : montées, squat bulgare, dips (contre un mur).</li><li>Une <b>table solide</b> : rowing inversé dessous (en vérifiant qu’elle ne bascule pas).</li><li>Un <b>sac à dos</b> rempli de livres ou de bouteilles : une charge réglable.</li><li>Une <b>serviette</b> : glisser au sol, résistance pour les tirages.</li><li>Un <b>tapis</b> pour le gainage.</li><li>Investissement utile et peu coûteux : une <b>barre de traction</b> de porte et des <b>élastiques</b> de résistance.</li></ul>",
            },
            {
              title: "La sécurité d’abord",
              body:
                "<ul><li>Tester la <b>stabilité</b> d’une chaise ou d’une table avant de mettre son poids dessus, la caler contre un mur.</li><li>Sol non glissant, chaussures ou pieds nus plutôt que chaussettes.</li><li>Une variante plus difficile seulement quand la précédente est <b>maîtrisée</b> avec une bonne technique.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel levier ?",
          instruction: "Quel levier de progression est utilisé ?",
          categories: ["Tempo / pause", "Levier / unilatéral", "Densité"],
          items: [
            { text: "Descendre les pompes en 4 secondes", cat: 0, why: "Tempo." },
            { text: "Passer du squat au squat bulgare", cat: 1, why: "Unilatéral." },
            { text: "Faire le même circuit en 15 minutes au lieu de 20", cat: 2, why: "Moins de repos, même travail." },
            { text: "Tenir 2 secondes en bas de la fente", cat: 0, why: "Pause." },
            { text: "Pompes avec les pieds sur une chaise", cat: 1, why: "Levier : plus de poids sur les bras." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fourchette efficace pour le muscle", back: "Environ 6 à 30 répétitions, proche de l’échec" },
            { front: "Tempo", back: "Ralentir la descente (3-4 s) pour augmenter la difficulté" },
            { front: "Unilatéral", back: "Travailler sur une jambe ou un bras : double la charge sur le membre" },
            { front: "Densité", back: "Le même travail en moins de temps" },
            { front: "Charge maison", back: "Un sac à dos rempli de livres ou de bouteilles" },
            { front: "Investissement utile", back: "Barre de traction de porte et élastiques" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu fais 35 squats d’affilée facilement. Quelle est la meilleure évolution ?", options: ["Faire 60 squats", "Passer à une variante plus difficile (squat bulgare, tempo lent)", "Arrêter les squats"], answer: 1, explain: "Au-delà de 30 répétitions faciles, on change de difficulté plutôt que de volume." },
            { q: "Ralentir la descente d’une pompe agit sur…", options: ["le tempo", "la densité", "l’amplitude"], answer: 0, explain: "Le muscle travaille plus longtemps." },
            { q: "Avant de faire des dips sur une chaise, tu…", options: ["vérifies qu’elle est stable et calée contre un mur", "prends une chaise à roulettes", "montes dessus pour tester"], answer: 0, explain: "La sécurité d’abord." },
            { q: "Le poids du corps permet-il de prendre du muscle ?", options: ["Non, il faut des haltères", "Oui, si les séries sont proches de l’échec et que la difficulté progresse", "Seulement pour les femmes"], answer: 1, explain: "Le muscle répond à l’effort, pas à l’outil." },
          ],
        },
        {
          type: "case",
          title: "Les 100 pompes",
          story:
            "Hugo fait chaque jour 100 pompes en 10 séries de 10, sans effort particulier. Il ne progresse plus depuis des mois et pense qu’il « faut une salle ».",
          question: "Que lui conseiller ?",
          options: [
            "S’inscrire en salle, c’est la seule solution",
            "Utiliser les leviers : pompes pieds surélevés, tempo lent, pause en bas, puis pompes archer ; des séries plus courtes mais proches de l’échec",
            "Passer à 200 pompes par jour",
          ],
          answer: 1,
          explain:
            "10 séries très loin de l’échec n’apportent plus de stimulus. Une variante plus dure, 3 à 4 séries proches de l’échec, relance la progression.",
        },
        {
          type: "fiche",
          title: "Progresser sans charge",
          points: [
            "Le muscle progresse entre <b>6 et 30 répétitions</b> proches de l’échec.",
            "7 leviers : <b>répétitions, tempo, pause, amplitude, levier, unilatéral, densité</b>.",
            "Maison : chaise, table solide, <b>sac à dos chargé</b>, serviette, tapis ; + barre de traction et élastiques.",
            "Sécurité : stabilité, sol, variante plus dure seulement si la précédente est maîtrisée.",
          ],
          retenir: "Quand un exercice devient facile, ne fais pas plus : fais plus dur.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Les jambes",
      minutes: 17,
      objectives: ["Maîtriser le squat et la fente", "Progresser jusqu’aux exercices sur une jambe"],
      steps: [
        {
          type: "lesson",
          title: "Squats et fentes",
          slides: [
            {
              title: "Le squat bien fait",
              body:
                "<ul><li>Pieds largeur d’épaules, pointes légèrement ouvertes.</li><li>Descendre en poussant les <b>hanches en arrière et en bas</b>, comme pour s’asseoir.</li><li><b>Genoux dans l’axe des pieds</b> (ils peuvent dépasser les orteils, c’est normal).</li><li><b>Talons au sol</b>, poitrine fière, dos neutre.</li><li>Descendre au moins jusqu’à ce que les cuisses soient parallèles au sol, si la mobilité le permet.</li></ul>",
              },
            {
              title: "La progression du squat",
              body:
                "<ol><li><b>Squat sur chaise</b> : s’asseoir et se relever sans les mains.</li><li><b>Squat</b> au poids du corps.</li><li><b>Squat tempo</b> (3 s de descente) ou avec <b>pause</b> en bas.</li><li><b>Squat avec sac à dos</b> chargé tenu contre la poitrine.</li><li><b>Squat bulgare</b> : pied arrière posé sur une chaise.</li><li><b>Squat sur une jambe</b> assisté (en se tenant à un cadre de porte), puis vers une chaise basse, puis le <b>pistol squat</b>.</li></ol>",
            },
            {
              title: "Les fentes",
              body:
                "<ul><li><b>Fente arrière</b> : la plus facile à contrôler et la plus douce pour les genoux.</li><li><b>Fente avant</b>, puis <b>fentes marchées</b>.</li><li><b>Fente latérale</b> : travaille aussi les adducteurs.</li><li>Grand pas, buste droit ou légèrement penché, genou arrière qui frôle le sol.</li></ul><p>Les fentes et le squat bulgare corrigent les déséquilibres entre jambe droite et gauche.</p>",
            },
            {
              title: "Montées et sauts",
              body:
                "<ul><li><b>Montées sur chaise</b> (step-up) : pousser avec la jambe posée sur la chaise, sans s’aider de la jambe au sol.</li><li><b>Chaise contre le mur</b> : tenir la position assise sans siège (exercice isométrique).</li><li><b>Squats sautés</b> : pour l’explosivité, une fois les squats maîtrisés, en réceptionnant en douceur.</li><li><b>Mollets</b> : montées sur pointes de pied sur une marche, sur une jambe pour plus de difficulté.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Remets la progression dans l’ordre",
          instruction: "Classe chaque variante selon sa difficulté.",
          categories: ["Débutant", "Intermédiaire", "Avancé"],
          items: [
            { text: "Squat sur chaise", cat: 0, why: "S’asseoir et se relever." },
            { text: "Squat bulgare", cat: 1, why: "Une jambe, pied arrière sur une chaise." },
            { text: "Pistol squat complet", cat: 2, why: "Une jambe, amplitude complète, sans aide." },
            { text: "Fente arrière", cat: 0, why: "Contrôle facile." },
            { text: "Squat avec sac à dos chargé et pause", cat: 1, why: "Charge + pause." },
            { text: "Squat sur une jambe sans aide jusqu’à une chaise basse", cat: 2, why: "Proche du pistol." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Squat : les hanches…", back: "partent en arrière et en bas, comme pour s’asseoir" },
            { front: "Les genoux dépassent les orteils ?", back: "C’est normal, tant qu’ils restent dans l’axe des pieds" },
            { front: "Squat bulgare", back: "Fente avec le pied arrière posé sur une chaise" },
            { front: "Pistol squat", back: "Squat complet sur une jambe" },
            { front: "Fente la plus douce pour les genoux", back: "La fente arrière" },
            { front: "Chaise contre le mur", back: "Tenir la position assise sans siège (isométrique)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pendant le squat, les talons doivent…", options: ["se lever", "rester au sol", "être tournés vers l’intérieur"], answer: 1, explain: "Talons au sol pour l’équilibre et la puissance." },
            { q: "Quelle variante vient juste avant le pistol squat ?", options: ["Squat sur chaise", "Squat sur une jambe assisté ou vers une chaise basse", "Fente avant"], answer: 1, explain: "On réduit l’aide progressivement." },
            { q: "Pourquoi faire des exercices sur une jambe ?", options: ["Ils sont plus faciles", "Ils doublent la charge sur la jambe et corrigent les déséquilibres", "Ils remplacent le cardio"], answer: 1, explain: "Utile sans charge externe." },
            { q: "Tes genoux rentrent vers l’intérieur en remontant. Tu…", options: ["ignores", "allèges la variante et pousses les genoux dans l’axe des pieds", "accélères"], answer: 1, explain: "La technique d’abord." },
          ],
        },
        {
          type: "case",
          title: "Les genoux sensibles",
          story:
            "Sofia ressent une gêne aux genoux sur les squats profonds et les fentes avant. Elle pense qu’elle doit arrêter de travailler les jambes.",
          question: "Que peut-elle essayer ?",
          options: [
            "Arrêter complètement les jambes",
            "Garder une amplitude sans douleur (squat sur chaise), préférer les fentes arrière, renforcer les fessiers (ponts), progresser doucement, et consulter si la douleur persiste ou augmente",
            "Faire des squats sautés pour renforcer",
          ],
          answer: 1,
          explain:
            "Le renforcement adapté est souvent bénéfique pour les genoux. On choisit les variantes et l’amplitude qui restent confortables, puis on progresse.",
        },
        {
          type: "fiche",
          title: "Les jambes",
          points: [
            "Squat : hanches en arrière, <b>genoux dans l’axe</b>, <b>talons au sol</b>, dos neutre.",
            "Progression : chaise → squat → tempo/pause → sac à dos → <b>bulgare</b> → une jambe assisté → <b>pistol</b>.",
            "Fentes : <b>arrière</b> (la plus douce), avant, marchées, latérales.",
            "Compléments : montées sur chaise, chaise contre le mur, squats sautés, mollets sur une jambe.",
          ],
          retenir: "Le squat bulgare est le meilleur exercice de jambes sans matériel : une chaise suffit.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Fessiers et chaîne arrière",
      minutes: 15,
      objectives: ["Renforcer fessiers et ischio-jambiers sans matériel", "Protéger son dos par le renforcement"],
      steps: [
        {
          type: "lesson",
          title: "L’arrière du corps",
          slides: [
            {
              title: "Pourquoi la chaîne arrière ?",
              body:
                "<p>La <b>chaîne postérieure</b> regroupe les fessiers, les ischio-jambiers (arrière des cuisses) et les muscles du dos. Elle permet de se pencher, soulever, sprinter, sauter.</p><p>Assis toute la journée, on la sollicite peu. La renforcer améliore la posture, les performances en course et aide à prévenir certaines douleurs de dos et de genou.</p>",
            },
            {
              title: "Le pont fessier et ses progressions",
              body:
                "<ol><li><b>Pont fessier</b> : allongé sur le dos, pieds au sol, monter les hanches en serrant les fessiers, sans cambrer le bas du dos.</li><li><b>Pont avec pause</b> de 2 secondes en haut.</li><li><b>Pont sur une jambe</b>.</li><li><b>Hip thrust</b> : le haut du dos sur un canapé, amplitude plus grande ; avec un sac à dos chargé sur les hanches.</li><li><b>Hip thrust sur une jambe</b>.</li></ol>",
            },
            {
              title: "La charnière de hanche",
              body:
                "<ul><li><b>Good morning</b> : debout, mains sur la tête, pencher le buste en poussant les hanches en arrière, dos droit, jambes légèrement fléchies.</li><li><b>Soulevé de terre roumain sur une jambe</b> : pencher le buste en levant la jambe arrière, comme une balance ; tenir un sac pour plus de difficulté.</li></ul><p>Ces mouvements apprennent à plier à la <b>hanche</b> plutôt qu’au dos : le bon geste pour soulever un carton.</p>",
            },
            {
              title: "Ischio-jambiers et dos",
              body:
                "<ul><li><b>Leg curl à la serviette</b> : allongé, pieds sur une serviette (sur sol lisse), en position de pont, ramener les talons vers les fesses en glissant.</li><li><b>Nordic curl assisté</b> : à genoux, pieds bloqués sous un canapé lourd, descendre le buste le plus lentement possible vers l’avant en se rattrapant avec les mains. Très exigeant : peu de répétitions.</li><li><b>Superman</b> et <b>Y-T-W</b> au sol (allongé sur le ventre, lever bras et poitrine) : pour le haut et le bas du dos.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Chaîne postérieure", back: "Fessiers, ischio-jambiers, muscles du dos" },
            { front: "Pont fessier", back: "Monter les hanches en serrant les fessiers, sans cambrer" },
            { front: "Hip thrust", back: "Haut du dos sur un canapé, amplitude plus grande" },
            { front: "Charnière de hanche", back: "Plier à la hanche, dos droit : le geste pour soulever" },
            { front: "Nordic curl", back: "Descente lente du buste, pieds bloqués : très dur pour les ischio-jambiers" },
            { front: "Y-T-W", back: "Allongé sur le ventre, bras en Y, T et W pour le haut du dos" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pendant le pont fessier, il faut éviter…", options: ["de serrer les fessiers", "de cambrer le bas du dos", "de garder les pieds au sol"], answer: 1, explain: "La force vient des hanches, pas des lombaires." },
            { q: "Le soulevé de terre roumain sur une jambe est un mouvement de…", options: ["pousser", "charnière de hanche", "tirage vertical"], answer: 1, explain: "On plie à la hanche." },
            { q: "Pourquoi renforcer la chaîne arrière quand on est assis toute la journée ?", options: ["Elle est peu sollicitée et participe à la posture et à la prévention de douleurs", "Elle ne sert à rien", "Pour grandir"], answer: 0, explain: "Elle porte une grande partie des efforts quotidiens." },
            { q: "Le nordic curl assisté se fait…", options: ["en séries de 30 rapides", "en peu de répétitions, descente très lente", "uniquement debout"], answer: 1, explain: "Exercice excentrique très intense." },
          ],
        },
        {
          type: "case",
          title: "Le dos qui tire",
          story:
            "Karim passe ses journées au bureau. Le soir, il fait uniquement des pompes et des abdos. Il ressent souvent une raideur dans le bas du dos en soulevant des cartons à l’entrepôt.",
          question: "Que lui conseiller ?",
          options: [
            "Faire encore plus d’abdos",
            "Ajouter la chaîne arrière : ponts fessiers puis hip thrust, good morning et soulevé de terre roumain sur une jambe pour apprendre la charnière de hanche, superman ; et consulter si la douleur s’aggrave ou descend dans la jambe",
            "Ne plus jamais soulever de cartons",
          ],
          answer: 1,
          explain:
            "Un programme équilibré travaille l’avant et l’arrière du corps. Apprendre à plier à la hanche rend aussi le port de charges plus sûr au quotidien.",
        },
        {
          type: "fiche",
          title: "Chaîne arrière",
          points: [
            "Chaîne postérieure : <b>fessiers, ischio-jambiers, dos</b> ; sous-utilisée quand on est assis.",
            "Progression : <b>pont</b> → pause → une jambe → <b>hip thrust</b> (canapé, sac) → hip thrust une jambe.",
            "Charnière : <b>good morning</b>, <b>soulevé de terre roumain sur une jambe</b>.",
            "Ischios et dos : <b>leg curl serviette</b>, <b>nordic curl</b> assisté, superman, <b>Y-T-W</b>.",
          ],
          retenir: "Pour chaque exercice qui travaille l’avant du corps, prévois-en un pour l’arrière.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Pousser : pompes, dips, épaules",
      minutes: 17,
      objectives: ["Faire des pompes parfaites", "Progresser jusqu’aux variantes avancées"],
      steps: [
        {
          type: "lesson",
          title: "La poussée",
          slides: [
            {
              title: "La pompe parfaite",
              body:
                "<ul><li>Mains un peu plus larges que les épaules, sous la poitrine.</li><li>Corps <b>gainé en planche</b> : fessiers serrés, pas de hanches qui tombent ni de fesses en l’air.</li><li>Coudes à environ <b>45°</b> du corps (pas collés, pas à 90°).</li><li>Poitrine jusqu’à quelques centimètres du sol, puis pousser jusqu’aux bras tendus.</li></ul>",
            },
            {
              title: "La progression des pompes",
              body:
                "<ol><li><b>Pompes au mur</b>.</li><li><b>Pompes inclinées</b> : mains sur une table, puis sur une chaise (plus c’est bas, plus c’est dur).</li><li><b>Pompes au sol</b> (les pompes sur les genoux sont une alternative, mais les inclinées enseignent mieux le gainage).</li><li><b>Pompes tempo</b> et <b>pompes avec pause</b>.</li><li><b>Pompes déclinées</b> : pieds sur une chaise.</li><li><b>Pompes archer</b> : un bras travaille, l’autre est tendu sur le côté.</li><li>Pompes sur un bras assistées, puis complètes.</li></ol>",
            },
            {
              title: "Les dips",
              body:
                "<ul><li><b>Dips sur chaise</b> (ou sur le bord d’un canapé) : mains derrière soi, descendre en pliant les coudes.</li><li>Garder les épaules <b>basses</b> et loin des oreilles, ne pas descendre plus bas que ce qui est confortable.</li><li>Jambes pliées = plus facile, jambes tendues = plus dur.</li><li>Si les épaules sont sensibles, préférer les pompes serrées (mains rapprochées) pour les triceps.</li></ul>",
            },
            {
              title: "Les épaules",
              body:
                "<ul><li><b>Pompes piquées</b> (pike push-ups) : hanches hautes, corps en V inversé, descendre la tête vers le sol entre les mains : elles travaillent les épaules.</li><li>Puis <b>pompes piquées pieds surélevés</b> sur une chaise.</li><li>Puis, pour les plus avancés, le <b>poirier contre un mur</b> (tenue), et les pompes en poirier.</li><li>Ne pas oublier l’équilibre avec les exercices de <b>tirage</b> (séance suivante) pour la santé des épaules.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Du plus facile au plus difficile",
          instruction: "Classe chaque variante de pompe.",
          categories: ["Débutant", "Intermédiaire", "Avancé"],
          items: [
            { text: "Pompes au mur", cat: 0, why: "Très peu de poids sur les bras." },
            { text: "Pompes mains sur une table", cat: 0, why: "Inclinées." },
            { text: "Pompes au sol avec 2 secondes de pause en bas", cat: 1, why: "Pause." },
            { text: "Pompes pieds sur une chaise", cat: 1, why: "Déclinées." },
            { text: "Pompes archer", cat: 2, why: "Presque un seul bras." },
            { text: "Pompes en poirier contre le mur", cat: 2, why: "Tout le poids sur les épaules." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Coudes pendant les pompes", back: "Environ 45° du corps" },
            { front: "Pompes inclinées", back: "Mains surélevées : plus la surface est basse, plus c’est dur" },
            { front: "Pompes déclinées", back: "Pieds surélevés : plus de poids sur le haut du corps" },
            { front: "Pompes archer", back: "Un bras pousse, l’autre est tendu sur le côté" },
            { front: "Pike push-ups", back: "Hanches hautes, corps en V : travaillent les épaules" },
            { front: "Dips : les épaules…", back: "restent basses, loin des oreilles ; amplitude confortable" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pendant la pompe, les hanches…", options: ["tombent vers le sol", "restent alignées, corps gainé", "montent très haut"], answer: 1, explain: "La pompe est une planche en mouvement." },
            { q: "Tu ne peux pas encore faire de pompe au sol. Meilleure option ?", options: ["Pompes inclinées, mains sur une table", "Pompes déclinées", "Attendre d’être plus fort"], answer: 0, explain: "On réduit le poids sur les bras." },
            { q: "Les pike push-ups travaillent surtout…", options: ["les jambes", "les épaules", "les abdominaux"], answer: 1, explain: "Poussée verticale." },
            { q: "Pourquoi associer les exercices de poussée à du tirage ?", options: ["Pour l’équilibre et la santé des épaules", "Ce n’est pas utile", "Pour aller plus vite"], answer: 0, explain: "Trop de poussée sans tirage déséquilibre l’épaule." },
          ],
        },
        {
          type: "case",
          title: "Les pompes en banane",
          story:
            "Noa fait 30 pompes « rapides » : hanches qui tombent, coudes écartés à 90°, amplitude de 10 cm. Ses épaules commencent à le gêner.",
          question: "Que corriger ?",
          options: [
            "Faire 50 pompes de la même façon",
            "Repasser à une variante qu’il maîtrise (même inclinée), corps gainé, coudes à 45°, amplitude complète et descente contrôlée ; ajouter du tirage ; consulter si la gêne persiste",
            "Ne faire que des dips",
          ],
          answer: 1,
          explain:
            "10 pompes propres valent plus que 30 approximatives, pour le muscle comme pour les articulations.",
        },
        {
          type: "fiche",
          title: "Pousser",
          points: [
            "Pompe : corps <b>gainé</b>, coudes à <b>45°</b>, amplitude complète.",
            "Progression : <b>mur → inclinées → sol → tempo/pause → déclinées → archer → un bras</b>.",
            "<b>Dips sur chaise</b> : épaules basses, amplitude confortable.",
            "Épaules : <b>pike push-ups</b> → pieds surélevés → <b>poirier contre un mur</b> ; équilibrer avec du tirage.",
          ],
          retenir: "Une pompe bien faite est une planche qui bouge : gainage d’abord, nombre ensuite.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Tirer : le défi du sans-matériel",
      minutes: 16,
      objectives: ["Trouver des solutions pour travailler le dos sans machine", "Progresser vers les tractions"],
      steps: [
        {
          type: "lesson",
          title: "Le dos sans salle",
          slides: [
            {
              title: "Pourquoi c’est difficile",
              body:
                "<p>Pousser est facile sans matériel (le sol suffit). <b>Tirer</b> demande un point d’accroche. C’est pourtant essentiel : le dos et les biceps équilibrent les pectoraux et les épaules, et protègent la posture.</p><p>Trois solutions : une <b>table solide</b>, une <b>serviette</b> ou un drap, et la meilleure : une <b>barre de traction</b>.</p>",
            },
            {
              title: "Le rowing inversé sous une table",
              body:
                "<ul><li>Allongé sous une table <b>lourde et stable</b>, saisir le bord, corps gainé, talons au sol.</li><li>Tirer la poitrine vers le bord de la table, puis redescendre lentement.</li><li>Plus le corps est <b>horizontal</b>, plus c’est dur ; genoux pliés = plus facile.</li><li>Vérifier impérativement que la table ne peut pas <b>basculer</b> (essai prudent, table lourde, éventuellement chargée).</li></ul>",
            },
            {
              title: "Les autres options",
              body:
                "<ul><li><b>Tirage à la serviette</b> : une serviette autour d’un poteau solide ou d’une rambarde, se pencher en arrière et tirer.</li><li><b>Rowing avec sac à dos</b> : penché en avant, dos droit, tirer un sac chargé vers la hanche.</li><li><b>Élastiques</b> accrochés à une porte (avec un ancrage prévu pour) : tirages, face pulls.</li><li><b>Superman et Y-T-W</b> au sol : pour l’arrière des épaules et le haut du dos.</li></ul><p>Évite de te suspendre à une porte ou une serviette coincée dans une porte : le risque de chute est réel.</p>",
            },
            {
              title: "Vers la première traction",
              body:
                "<p>Avec une barre de traction (fixée selon la notice) :</p><ol><li><b>Suspension</b> : tenir accroché 20 à 30 secondes.</li><li><b>Tractions scapulaires</b> : bras tendus, descendre puis remonter les épaules.</li><li><b>Négatives</b> : sauter ou monter sur une chaise en position haute, puis descendre le plus lentement possible (3 à 5 secondes).</li><li><b>Tractions assistées</b> avec un élastique ou un pied sur une chaise.</li><li><b>Première traction stricte</b>, puis des séries de 3, 5, 8…</li></ol>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Pourquoi tirer ?", back: "Équilibrer la poussée, protéger épaules et posture" },
            { front: "Rowing inversé", back: "Sous une table lourde et stable ; plus horizontal = plus dur" },
            { front: "Rowing sac à dos", back: "Penché, dos droit, tirer le sac vers la hanche" },
            { front: "Négatives de traction", back: "Partir en haut et descendre en 3 à 5 secondes" },
            { front: "Tractions scapulaires", back: "Bras tendus, abaisser et remonter les épaules" },
            { front: "À éviter", back: "Se suspendre à une porte ou à une serviette coincée dans une porte" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment rendre le rowing inversé plus facile ?", options: ["Corps plus horizontal", "Genoux pliés, corps plus vertical", "Mains plus écartées"], answer: 1, explain: "Moins de poids à tirer." },
            { q: "Quelle étape aide le plus à réussir sa première traction ?", options: ["Les négatives lentes", "Les pompes", "Les squats"], answer: 0, explain: "La phase de descente renforce vite les muscles du tirage." },
            { q: "Avant un rowing inversé sous une table, tu…", options: ["vérifies qu’elle est lourde et ne peut pas basculer", "prends une table pliante légère", "ne vérifies rien"], answer: 0, explain: "Le risque de chute est réel." },
            { q: "Le meilleur investissement pour le tirage à la maison est…", options: ["un tapis", "une barre de traction", "une corde à sauter"], answer: 1, explain: "Elle ouvre toute la progression des tractions." },
          ],
        },
        {
          type: "case",
          title: "Le programme déséquilibré",
          story:
            "Sofia s’entraîne chez elle depuis un an : pompes, dips, squats, abdos. Ses épaules s’enroulent vers l’avant et elle a souvent mal entre les omoplates en fin de journée.",
          question: "Que lui manque-t-il ?",
          options: [
            "Encore plus de pompes",
            "Du tirage : rowing inversé sous une table stable, rowing avec sac à dos, Y-T-W, et idéalement une barre de traction pour progresser vers les tractions ; viser autant de séries de tirage que de poussée",
            "Des étirements uniquement",
          ],
          answer: 1,
          explain:
            "Un programme sans tirage déséquilibre la posture. Une règle simple : au moins autant de séries de tirage que de poussée.",
        },
        {
          type: "fiche",
          title: "Tirer",
          points: [
            "Tirer équilibre la poussée : viser <b>autant de séries de tirage que de poussée</b>.",
            "<b>Rowing inversé</b> sous table lourde et stable ; serviette sur poteau solide ; <b>rowing sac à dos</b> ; élastiques ; Y-T-W.",
            "Éviter de se suspendre à une porte.",
            "Traction : <b>suspension → scapulaires → négatives → assistées → stricte</b>.",
          ],
          retenir: "Une barre de traction est le meilleur achat du sportif à domicile.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Gainage et abdominaux",
      minutes: 15,
      objectives: ["Comprendre le rôle du gainage", "Progresser sur les exercices de gainage"],
      steps: [
        {
          type: "lesson",
          title: "Le centre du corps",
          slides: [
            {
              title: "À quoi sert le gainage",
              body:
                "<p>Le rôle principal des muscles du tronc n’est pas de « plier » le buste, mais de le <b>stabiliser</b> : résister à l’extension (cambrure), à la rotation et à l’inclinaison pendant qu’on porte, pousse, court ou saute.</p><p>D’où l’intérêt des exercices <b>anti-mouvement</b> (planche, dead bug) en plus des exercices classiques.</p>",
            },
            {
              title: "Les exercices clés",
              body:
                "<table class='t'><tr><th>Exercice</th><th>Ce qu’il entraîne</th></tr><tr><td><b>Planche</b></td><td>Résister à la cambrure</td></tr><tr><td><b>Planche latérale</b></td><td>Résister à l’inclinaison</td></tr><tr><td><b>Dead bug</b> (sur le dos, bras et jambe opposés)</td><td>Stabiliser le bas du dos en bougeant</td></tr><tr><td><b>Bird dog</b> (à quatre pattes)</td><td>Stabilité et coordination</td></tr><tr><td><b>Hollow body</b> (« banane » sur le dos)</td><td>Gainage avancé de la gymnastique</td></tr><tr><td><b>Relevés de jambes</b></td><td>Abdominaux bas, flexion de hanche</td></tr></table>",
            },
            {
              title: "Progresser",
              body:
                "<ul><li>Une planche de plus de <b>60 secondes</b> devient peu utile : passe à une variante plus dure plutôt que de tenir 5 minutes.</li><li>Variantes : planche en levant un bras ou une jambe, planche en reculant les mains plus loin, <b>planche RKC</b> (tout serrer au maximum pendant 10 à 20 secondes).</li><li>Planche latérale : genou au sol → jambes tendues → jambe du dessus levée.</li><li>Relevés de jambes : genoux pliés → jambes tendues → suspendu à une barre.</li></ul>",
            },
            {
              title: "Les abdos visibles",
              body:
                "<p>Les « tablettes » dépendent surtout du <b>taux de graisse</b> corporelle, donc de l’alimentation, de l’activité globale et du sommeil, et non du nombre de crunchs.</p><p>On ne peut pas « brûler la graisse » d’une zone précise en la faisant travailler : la perte de graisse est globale.</p><p>Le gainage reste indispensable pour la performance et le dos, quel que soit l’objectif esthétique.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Rôle principal du tronc", back: "Stabiliser : résister à la cambrure, à la rotation et à l’inclinaison" },
            { front: "Dead bug", back: "Sur le dos, bras et jambe opposés qui descendent, bas du dos plaqué" },
            { front: "Bird dog", back: "À quatre pattes, bras et jambe opposés tendus" },
            { front: "Planche au-delà de 60 s", back: "Peu utile : passer à une variante plus dure" },
            { front: "Hollow body", back: "Position « banane » sur le dos, bas du dos au sol" },
            { front: "Perte de graisse localisée", back: "Impossible : la perte de graisse est globale" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu tiens la planche 3 minutes. Meilleure suite ?", options: ["Viser 6 minutes", "Passer à une variante plus difficile", "Arrêter le gainage"], answer: 1, explain: "Même logique que pour les répétitions." },
            { q: "Faire 300 crunchs par jour fait disparaître la graisse du ventre ?", options: ["Oui", "Non : la perte de graisse est globale", "Seulement le matin"], answer: 1, explain: "Pas de perte de graisse localisée." },
            { q: "Pendant le dead bug, le bas du dos doit…", options: ["se cambrer", "rester plaqué au sol", "se soulever"], answer: 1, explain: "C’est tout le principe de l’exercice." },
            { q: "La planche latérale entraîne surtout à résister…", options: ["à l’inclinaison", "à la flexion", "à rien"], answer: 0, explain: "Muscles obliques et stabilisateurs latéraux." },
          ],
        },
        {
          type: "case",
          title: "Les abdos de l’été",
          story:
            "En mai, Hugo veut des abdos visibles pour l’été. Il fait 500 crunchs par jour, mange comme d’habitude, dort 6 heures. Rien ne change, et son cou lui fait mal.",
          question: "Que lui conseiller ?",
          options: [
            "Passer à 1 000 crunchs",
            "Travailler le gainage de façon variée (planche, dead bug, relevés de jambes) 2-3 fois par semaine, et agir sur ce qui fait baisser le taux de graisse : alimentation, activité globale, sommeil",
            "Porter une ceinture de sudation",
          ],
          answer: 1,
          explain:
            "Les crunchs à répétition ne réduisent pas la graisse abdominale. L’apparence des abdominaux se joue surtout en dehors de la séance.",
        },
        {
          type: "fiche",
          title: "Gainage",
          points: [
            "Le tronc <b>stabilise</b> : exercices anti-cambrure, anti-rotation, anti-inclinaison.",
            "Clés : <b>planche</b>, <b>latérale</b>, <b>dead bug</b>, <b>bird dog</b>, <b>hollow body</b>, relevés de jambes.",
            "Au-delà de <b>60 s</b> de planche, passer à une variante plus dure.",
            "Abdos visibles = <b>taux de graisse</b> ; pas de perte de graisse localisée.",
          ],
          retenir: "Le gainage sert à transmettre la force, pas seulement à dessiner des abdos.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Les formats de séance",
      minutes: 15,
      objectives: ["Connaître les formats de séance courts", "Choisir le bon format selon son objectif et son temps"],
      steps: [
        {
          type: "lesson",
          title: "Organiser une séance efficace",
          slides: [
            {
              title: "Séries classiques ou circuit ?",
              body:
                "<ul><li><b>Séries classiques</b> : toutes les séries d’un exercice, avec 1 à 2 minutes de repos, puis l’exercice suivant. Le meilleur format pour <b>progresser en force et en muscle</b>.</li><li><b>Superset</b> : alterner deux exercices qui ne sollicitent pas les mêmes muscles (pompes + rowing inversé) : on gagne du temps sans perdre en qualité.</li><li><b>Circuit</b> : 4 à 6 exercices enchaînés, repos à la fin du tour, 3 à 5 tours. Efficace en peu de temps, avec un effet cardio.</li></ul>",
            },
            {
              title: "EMOM, AMRAP, Tabata",
              body:
                "<table class='t'><tr><th>Format</th><th>Principe</th><th>Exemple</th></tr><tr><td><b>EMOM</b></td><td>Chaque minute, faire un nombre fixé de répétitions, se reposer le reste de la minute</td><td>10 min : minute impaire 10 squats, minute paire 8 pompes</td></tr><tr><td><b>AMRAP</b></td><td>Le plus de tours possible en un temps donné</td><td>12 min : 5 pompes, 10 fentes, 15 secondes de planche</td></tr><tr><td><b>Tabata</b></td><td>20 s d’effort maximal, 10 s de repos, 8 fois (4 min)</td><td>Squats sautés ou burpees</td></tr></table><p>L’AMRAP est idéal pour mesurer ses progrès : refais le même et compte les tours.</p>",
            },
            {
              title: "Une séance de 20 minutes",
              body:
                "<p><b>Échauffement (4 min)</b> : marche sur place, rotations, 10 squats lents, 5 pompes inclinées.</p><p><b>Bloc force en supersets (12 min)</b> :</p><ul><li>A1 : squat bulgare 3 × 8-12 par jambe / A2 : rowing inversé 3 × 8-12</li><li>B1 : pompes (variante adaptée) 3 × 8-15 / B2 : pont fessier une jambe 3 × 10-15</li></ul><p><b>Finisher (4 min)</b> : Tabata en alternant planche et squats sautés (ou squats simples).</p>",
            },
            {
              title: "Glisser le mouvement dans la journée",
              body:
                "<ul><li>Les <b>« snacks » d’exercice</b> : 1 à 2 minutes d’effort plusieurs fois par jour (20 squats, monter deux étages rapidement). Les études montrent qu’ils améliorent déjà la condition physique.</li><li>Au bureau : se lever toutes les 30 à 60 minutes, prendre les escaliers.</li><li>En voyage : une séance AMRAP de 15 minutes dans la chambre d’hôtel suffit pour garder le rythme.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel format ?",
          instruction: "Associe chaque objectif au format le plus adapté.",
          categories: ["Séries classiques / supersets", "Circuit / AMRAP", "Tabata"],
          items: [
            { text: "Progresser vers la première traction", cat: 0, why: "Qualité et repos suffisant." },
            { text: "15 minutes dans une chambre d’hôtel pour garder la forme", cat: 1, why: "Efficace et mesurable." },
            { text: "Un finisher de 4 minutes très intense", cat: 2, why: "20/10 × 8." },
            { text: "Développer la force des jambes avec le squat bulgare", cat: 0, why: "Séries proches de l’échec, bien récupérées." },
            { text: "Mesurer ses progrès en comptant les tours", cat: 1, why: "C’est le principe de l’AMRAP." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Superset", back: "Deux exercices de muscles différents en alternance" },
            { front: "EMOM", back: "Every Minute On the Minute : X répétitions chaque minute" },
            { front: "AMRAP", back: "As Many Rounds As Possible : le plus de tours en un temps donné" },
            { front: "Tabata", back: "20 s d’effort, 10 s de repos, 8 fois (4 minutes)" },
            { front: "Format pour la force", back: "Séries classiques ou supersets, avec repos suffisant" },
            { front: "« Snacks » d’exercice", back: "1-2 minutes d’effort plusieurs fois par jour" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Le meilleur format pour gagner en force est…", options: ["le Tabata", "les séries classiques avec repos suffisant", "le circuit sans repos"], answer: 1, explain: "La fatigue cardio réduit la qualité des séries." },
            { q: "Un Tabata dure…", options: ["4 minutes", "20 minutes", "1 heure"], answer: 0, explain: "8 × (20 s + 10 s)." },
            { q: "Pompes + rowing inversé en alternance, c’est…", options: ["un superset", "un EMOM", "une planche"], answer: 0, explain: "Muscles opposés, gain de temps." },
            { q: "Comment suivre ses progrès avec un AMRAP ?", options: ["Le refaire et compter les tours", "Changer d’exercices à chaque fois", "Impossible"], answer: 0, explain: "Même AMRAP, plus de tours = progrès." },
          ],
        },
        {
          type: "case",
          title: "Les séances de 15 minutes",
          story:
            "Noa n’a que 15 à 20 minutes le soir. Il pense que « ça ne sert à rien » et préfère ne rien faire plutôt qu’une petite séance.",
          question: "Que lui répondre ?",
          options: [
            "Il a raison, en dessous d’une heure c’est inutile",
            "15 à 20 minutes 3 à 4 fois par semaine suffisent à progresser : supersets pour la force (squat bulgare + rowing, pompes + pont) et un court finisher, ou un AMRAP mesurable ; et des « snacks » d’exercice dans la journée",
            "Il doit attendre d’avoir plus de temps",
          ],
          answer: 1,
          explain:
            "La régularité compte plus que la durée. Des séances courtes et denses, bien répétées, donnent de vrais résultats.",
        },
        {
          type: "fiche",
          title: "Formats de séance",
          points: [
            "<b>Séries classiques / supersets</b> : le meilleur pour la force et le muscle.",
            "<b>Circuit</b>, <b>AMRAP</b> (mesurable), <b>EMOM</b> : efficaces en peu de temps.",
            "<b>Tabata</b> : 20 s / 10 s × 8, en finisher.",
            "Séance de 20 min : échauffement, 2 supersets, finisher ; « snacks » d’exercice dans la journée.",
          ],
          retenir: "Pas le temps pour une heure ? 20 minutes bien construites, trois fois par semaine, font la différence.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Ton programme de 8 semaines",
      minutes: 17,
      objectives: ["Suivre un programme complet et progressif", "Adapter le programme à ses contraintes"],
      steps: [
        {
          type: "lesson",
          title: "Le plan",
          slides: [
            {
              title: "Les deux séances (A et B)",
              body:
                "<p>3 séances par semaine, en alternant A et B (A-B-A, puis B-A-B la semaine suivante), avec un jour de repos entre deux séances.</p><table class='t'><tr><th>Séance A</th><th>Séance B</th></tr><tr><td>Squat (variante adaptée) 3 × 8-15</td><td>Squat bulgare 3 × 8-12 / jambe</td></tr><tr><td>Pompes (variante adaptée) 3 × 8-15</td><td>Pike push-ups 3 × 6-12</td></tr><tr><td>Rowing inversé ou sac à dos 3 × 8-15</td><td>Négatives ou tractions assistées 3 × 3-6</td></tr><tr><td>Pont fessier (variante) 3 × 10-15</td><td>Soulevé de terre roumain une jambe 3 × 8-12</td></tr><tr><td>Planche 3 × 30-45 s</td><td>Dead bug 3 × 8 / côté + planche latérale</td></tr></table>",
            },
            {
              title: "Les 8 semaines",
              body:
                "<table class='t'><tr><th>Semaines</th><th>Objectif</th></tr><tr><td>1-2</td><td><b>Apprendre</b> : variantes faciles, 2 à 3 répétitions en réserve, technique parfaite. Faire les tests de départ.</td></tr><tr><td>3-6</td><td><b>Progresser</b> : double progression (ajouter des répétitions jusqu’au haut de la fourchette, puis variante plus dure), 1 à 2 répétitions en réserve.</td></tr><tr><td>7</td><td><b>Alléger</b> : 2 séries au lieu de 3.</td></tr><tr><td>8</td><td><b>Tester</b> : refaire les tests (pompes max, planche, squats en 1 min, AMRAP de référence) et comparer.</td></tr></table>",
            },
            {
              title: "Adapter le programme",
              body:
                "<ul><li><b>Genoux sensibles</b> : squat sur chaise, fentes arrière, plus de ponts et de hip thrust.</li><li><b>Épaules sensibles</b> : pompes inclinées, pas de dips, plus de tirage et de Y-T-W.</li><li><b>Bas du dos sensible</b> : bird dog, dead bug, ponts ; charnière de hanche apprise lentement.</li><li><b>Peu de temps</b> : faire les exercices en supersets (20-25 minutes).</li><li><b>Voyage</b> : remplacer le tirage par du rowing avec sac à dos ou de la serviette sur un poteau solide.</li></ul><p>Toute douleur qui augmente ou persiste : alléger et consulter un professionnel.</p>",
            },
            {
              title: "Après les 8 semaines",
              body:
                "<ul><li>Recommencer un cycle avec les nouvelles variantes atteintes.</li><li>Ajouter des objectifs de compétences : première traction, pistol squat, poirier contre un mur.</li><li>Combiner avec du cardio (voir le cours « S’entraîner — les fondations ») et de la marche quotidienne.</li><li>Garder le carnet : c’est lui qui dit quand passer à la variante suivante.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Organisation", back: "3 séances par semaine, A et B en alternance, 1 jour de repos entre deux" },
            { front: "Semaines 1-2", back: "Apprendre : variantes faciles, technique, tests de départ" },
            { front: "Semaines 3-6", back: "Progresser : double progression, 1-2 répétitions en réserve" },
            { front: "Semaine 7", back: "Alléger : 2 séries au lieu de 3" },
            { front: "Semaine 8", back: "Refaire les tests et comparer" },
            { front: "Épaules sensibles", back: "Pompes inclinées, pas de dips, plus de tirage et de Y-T-W" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Semaine 4, tu réussis 15 pompes inclinées sur toutes les séries (fourchette 8-15). Tu…", options: ["restes sur la même variante", "passes à une surface plus basse ou aux pompes au sol, et repars vers 8", "doubles les séries"], answer: 1, explain: "Double progression." },
            { q: "À quoi sert la semaine 7 ?", options: ["À tester son maximum", "À alléger pour récupérer avant les tests", "À arrêter"], answer: 1, explain: "Pour arriver frais aux tests de la semaine 8." },
            { q: "En voyage, sans table solide, tu remplaces le rowing inversé par…", options: ["rien", "un rowing avec sac à dos chargé", "des pompes"], answer: 1, explain: "On garde un exercice de tirage." },
            { q: "Combien de séances par semaine prévoit le programme ?", options: ["1", "3", "7"], answer: 1, explain: "Avec un jour de repos entre deux séances." },
          ],
        },
        {
          type: "case",
          title: "Le bilan de la semaine 8",
          story:
            "Sofia termine les 8 semaines : elle est passée de 3 pompes inclinées sur une table à 12 pompes au sol, de 20 à 55 secondes de planche, et fait 2 négatives de traction de 5 secondes. Elle se demande quoi faire ensuite.",
          question: "Quelle est la meilleure suite ?",
          options: [
            "Arrêter, l’objectif est atteint",
            "Relancer un cycle de 8 semaines avec ses nouvelles variantes et un objectif de compétence (première traction stricte), en gardant le carnet et en ajoutant du cardio",
            "Recommencer exactement les mêmes variantes qu’en semaine 1",
          ],
          answer: 1,
          explain:
            "Chaque cycle part du niveau atteint. Fixer une compétence à débloquer (traction, pistol squat) entretient la motivation sur le long terme.",
        },
        {
          type: "fiche",
          title: "Programme de 8 semaines",
          points: [
            "<b>3 séances</b> par semaine, <b>A / B</b> en alternance ; chaque séance : jambes, poussée, tirage, chaîne arrière, gainage.",
            "S1-2 <b>apprendre</b>, S3-6 <b>progresser</b> (double progression), S7 <b>alléger</b>, S8 <b>tester</b>.",
            "Adapter selon <b>genoux, épaules, dos</b>, temps disponible et voyage ; consulter si une douleur persiste.",
            "Ensuite : nouveau cycle + <b>objectif de compétence</b> + cardio et marche.",
          ],
          retenir: "Huit semaines régulières et notées suffisent pour voir de vrais progrès : la suite, c’est de recommencer un cran plus haut.",
        },
      ],
    },
  ],
});
