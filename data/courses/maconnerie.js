/* ============================================================
   COURS : La maçonnerie
   École de Construction · 8 séances de 15 à 20 minutes
   Matériaux, mortiers et bétons, murs, enduits, dalles,
   rénovation de l’ancien, fissures, sécurité.
   Dosages et dimensions donnés en valeurs courantes de chantier :
   les prescriptions du fabricant et les DTU priment.
   ============================================================ */
AGORA.registerCourse({
  id: "maconnerie",
  faculty: "construction",
  title: "La maçonnerie",
  subtitle: "Ciment, chaux, blocs et pierre : comprendre et réussir les ouvrages de maçonnerie",
  color: "#c27c0e",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre le métier le plus ancien du bâtiment : les liants et les granulats, les mortiers et bétons, les blocs, la façon de monter un mur droit et solide, les enduits, les dalles et chapes, la rénovation des murs anciens, la lecture des fissures, et la sécurité sur un chantier de maçonnerie.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Les matériaux de base",
      minutes: 15,
      objectives: ["Distinguer liants et granulats", "Comprendre la différence entre ciment et chaux"],
      steps: [
        {
          type: "lesson",
          title: "Liants et granulats",
          slides: [
            {
              title: "La recette de base",
              body:
                "<p>Presque tout en maçonnerie se fabrique avec trois ingrédients :</p><div class='tiers'><div><b>Un liant</b><span>Ciment, chaux ou plâtre : la « colle » qui durcit.</span></div><div><b>Des granulats</b><span>Sable, gravillons, graviers : le « squelette ».</span></div><div><b>De l’eau</b><span>Elle déclenche le durcissement du liant (la <b>prise</b>).</span></div></div>",
            },
            {
              title: "Le ciment",
              body:
                "<ul><li>Fabriqué en cuisant du calcaire et de l’argile, puis en broyant le résultat (le clinker).</li><li>Il durcit vite et devient <b>très résistant</b> et peu perméable.</li><li>C’est le liant des bétons, des mortiers de montage des blocs, des chapes.</li><li>Inconvénient : il est rigide et laisse mal « respirer » les murs anciens. Sa fabrication émet aussi beaucoup de CO₂.</li></ul>",
            },
            {
              title: "La chaux",
              body:
                "<ul><li>Obtenue en cuisant du calcaire, à plus basse température que le ciment.</li><li><b>Chaux aérienne</b> : durcit lentement au contact de l’air. <b>Chaux hydraulique</b> : durcit aussi en présence d’eau, plus vite.</li><li>Elle est plus souple et <b>perméable à la vapeur d’eau</b> : le mur peut sécher.</li><li>C’est le liant traditionnel des murs en pierre et en brique anciens, et le bon choix pour les restaurer.</li></ul>",
            },
            {
              title: "Les granulats",
              body:
                "<ul><li><b>Sable</b> (grains fins) : mortiers, enduits, chapes.</li><li><b>Gravillons et graviers</b> : bétons.</li><li>Le sable doit être <b>propre</b> : la terre ou l’argile mélangées affaiblissent le mortier.</li><li>Le sable de mer non lavé contient du sel qui fait rouiller les armatures et provoque des efflorescences : on ne l’utilise pas.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Ciment ou chaux ?",
          instruction: "Quel liant choisir en priorité ?",
          categories: ["Ciment", "Chaux"],
          items: [
            { text: "Couler les fondations d’une maison neuve", cat: 0, why: "Résistance élevée." },
            { text: "Rejointoyer un mur en pierre du XIXe siècle", cat: 1, why: "Souple et perméable, compatible avec la pierre." },
            { text: "Monter des parpaings", cat: 0, why: "Mortier de ciment classique." },
            { text: "Enduire une longère en moellons", cat: 1, why: "Le mur doit pouvoir sécher." },
            { text: "Réaliser une dalle de garage", cat: 0, why: "Béton de ciment." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Liant", back: "Ciment, chaux ou plâtre : la « colle » qui durcit." },
            { front: "Granulats", back: "Sable, gravillons, graviers : le squelette des mortiers et bétons." },
            { front: "Prise", back: "Durcissement du liant déclenché par l’eau." },
            { front: "Ciment", back: "Liant très résistant et rapide, peu perméable." },
            { front: "Chaux", back: "Liant souple et perméable à la vapeur, idéal pour le bâti ancien." },
            { front: "Sable propre", back: "Sans terre ni sel : la terre affaiblit, le sel abîme." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est le principal avantage de la chaux sur un mur ancien ?", options: ["Elle sèche en 10 minutes", "Elle laisse le mur respirer et sécher", "Elle est imperméable"], answer: 1, explain: "Le mur ancien a besoin d’évacuer son humidité." },
            { q: "Pourquoi éviter le sable de mer non lavé ?", options: ["Il est trop cher", "Son sel fait rouiller les armatures et provoque des efflorescences", "Il est trop fin"], answer: 1, explain: "Le sel est l’ennemi des bétons armés." },
            { q: "Quels sont les trois ingrédients de base d’un mortier ?", options: ["Liant, sable, eau", "Ciment, peinture, eau", "Gravier, colle, plâtre"], answer: 0, explain: "Le mortier n’a pas de gravillons, contrairement au béton." },
            { q: "Pour une dalle de garage très sollicitée, on choisit…", options: ["Un mortier de chaux aérienne", "Un béton de ciment", "Du plâtre"], answer: 1, explain: "Il faut de la résistance." },
          ],
        },
        {
          type: "case",
          title: "La grange en pierre",
          story:
            "Lucas restaure une grange en pierre. Un voisin lui conseille de tout rejointoyer et enduire au ciment, « c’est plus solide et ça dure ».",
          question: "Quel est le meilleur conseil ?",
          options: [
            "Suivre le voisin : le ciment est plus solide",
            "Utiliser plutôt un mortier de chaux : le ciment, rigide et peu perméable, emprisonne l’humidité dans les murs anciens et peut dégrader la pierre",
            "Ne rien faire du tout",
          ],
          answer: 1,
          explain:
            "Sur le bâti ancien, la compatibilité compte plus que la dureté. Un enduit ciment sur un mur en pierre provoque souvent de l’humidité intérieure et des dégradations de la pierre.",
        },
        {
          type: "fiche",
          title: "Les matériaux de base",
          points: [
            "Recette : <b>liant</b> + <b>granulats</b> + <b>eau</b>.",
            "<b>Ciment</b> : résistant, rapide, peu perméable → neuf, béton, blocs.",
            "<b>Chaux</b> : souple, perméable → bâti ancien.",
            "Sable <b>propre</b> : ni terre, ni sel.",
          ],
          retenir: "Sur l’ancien, la chaux ; sur le neuf, le ciment.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Mortiers et bétons",
      minutes: 16,
      objectives: ["Distinguer mortier et béton", "Connaître les proportions courantes et les erreurs à éviter"],
      steps: [
        {
          type: "lesson",
          title: "Préparer et couler",
          slides: [
            {
              title: "Mortier ou béton ?",
              body:
                "<table class='t'><tr><th></th><th>Composition</th><th>Usage</th></tr><tr><td><b>Mortier</b></td><td>Liant + sable + eau</td><td>Coller les blocs, enduire, faire une chape</td></tr><tr><td><b>Béton</b></td><td>Liant + sable + gravillons + eau</td><td>Fondations, dalles, poteaux, poutres</td></tr><tr><td><b>Béton armé</b></td><td>Béton + armatures en acier</td><td>Tout ce qui travaille en flexion ou traction</td></tr></table>",
            },
            {
              title: "Les proportions courantes",
              body:
                "<p>Valeurs courantes de chantier, en volumes (seaux), à adapter aux indications du fabricant :</p><ul><li><b>Béton courant</b> : environ 1 volume de ciment, 2 de sable, 3 de gravillons.</li><li><b>Mortier de montage</b> : environ 1 volume de ciment pour 3 à 4 de sable.</li><li><b>Eau</b> : juste assez pour obtenir une pâte maniable, ni sèche ni liquide.</li></ul><p>Pour les ouvrages importants, on commande du <b>béton prêt à l’emploi</b> livré en toupie, dont la résistance est garantie.</p>",
            },
            {
              title: "L’eau, juste ce qu’il faut",
              body:
                "<ul><li>Trop d’eau rend le mélange facile à couler mais <b>affaiblit</b> le béton ou le mortier durci et augmente les fissures de retrait.</li><li>Pas assez d’eau : mélange impossible à mettre en œuvre, mauvaise adhérence.</li><li>Un mortier qui a commencé sa prise ne se « relance » pas en rajoutant de l’eau : on le jette.</li></ul>",
            },
            {
              title: "La cure du béton",
              body:
                "<ul><li>Le béton durcit progressivement et atteint sa résistance prévue vers <b>28 jours</b>.</li><li>Les premiers jours, il doit rester <b>humide</b> : par temps chaud ou venteux, on l’arrose légèrement ou on le couvre (bâche, produit de cure). Sinon il sèche trop vite et fissure.</li><li>Par temps de gel, on reporte le coulage ou on protège le béton frais.</li><li>On <b>vibre</b> ou on pique le béton coulé pour chasser les bulles d’air et bien enrober les armatures.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Mortier", back: "Liant + sable + eau : montage, enduit, chape." },
            { front: "Béton", back: "Liant + sable + gravillons + eau : fondations, dalles, structures." },
            { front: "Béton courant (volumes)", back: "Environ 1 ciment, 2 sable, 3 gravillons." },
            { front: "Mortier de montage", back: "Environ 1 ciment pour 3 à 4 sable." },
            { front: "Cure", back: "Garder le béton humide les premiers jours pour éviter les fissures." },
            { front: "Vibrer", back: "Chasser l’air du béton frais et bien enrober les armatures." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle est la différence entre un mortier et un béton ?", options: ["Le béton contient des gravillons", "Le mortier contient de l’acier", "Aucune"], answer: 0, explain: "Le mortier n’a que du sable comme granulat." },
            { q: "Ton mortier a commencé à durcir dans l’auge. Que faire ?", options: ["Rajouter de l’eau et remélanger", "Le jeter et en refaire", "L’utiliser quand même"], answer: 1, explain: "Un mortier relancé à l’eau perd sa résistance." },
            { q: "Il fait 32 °C et du vent le jour où tu coules une dalle. Précaution ?", options: ["Aucune", "Protéger et humidifier le béton les premiers jours (cure)", "Ajouter du sel"], answer: 1, explain: "Un séchage trop rapide provoque des fissures." },
            { q: "Pour une grande dalle, mieux vaut souvent…", options: ["Gâcher à la main au seau", "Commander du béton prêt à l’emploi en toupie", "Utiliser du plâtre"], answer: 1, explain: "Résistance garantie et coulage en une fois." },
          ],
        },
        {
          type: "case",
          title: "La terrasse craquelée",
          story:
            "Samir a coulé lui-même une terrasse en béton en juillet. Pour que le béton « coule tout seul », il a ajouté beaucoup d’eau, puis il est parti en week-end sans protéger la dalle. À son retour, elle est couverte de fines fissures.",
          question: "Qu’est-ce qui explique les fissures ?",
          options: [
            "La mauvaise qualité du ciment",
            "Un excès d’eau qui augmente le retrait, et l’absence de cure par forte chaleur : le béton a séché trop vite en surface",
            "Le poids des pots de fleurs",
          ],
          answer: 1,
          explain:
            "L’eau en trop s’évapore en laissant des vides et provoque du retrait. Sans cure, la surface sèche plus vite que le cœur et se fissure. Des joints de fractionnement auraient aussi limité les fissures sur une grande surface.",
        },
        {
          type: "fiche",
          title: "Mortiers et bétons",
          points: [
            "<b>Mortier</b> = liant + sable ; <b>béton</b> = liant + sable + gravillons ; <b>béton armé</b> = béton + acier.",
            "Repères : béton <b>1-2-3</b> (ciment, sable, gravillons) ; mortier <b>1 pour 3 à 4</b>.",
            "Juste assez d’<b>eau</b> ; un mortier qui a pris ne se relance pas.",
            "<b>Cure</b> les premiers jours, pas de coulage sous le gel, <b>vibrer</b>.",
          ],
          retenir: "L’eau en trop, c’est de la résistance en moins.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les blocs et la pierre",
      minutes: 15,
      objectives: ["Connaître les principaux éléments de maçonnerie", "Choisir un bloc selon l’usage"],
      steps: [
        {
          type: "lesson",
          title: "Avec quoi monter un mur",
          slides: [
            {
              title: "Les blocs béton",
              body:
                "<ul><li>Le <b>parpaing</b> (bloc béton creux) est le plus courant ; format habituel : 50 cm de long, 20 cm de haut, en épaisseurs de 10, 15 ou 20 cm. Un parpaing de 20 cm pèse près de 20 kg.</li><li>Il existe des blocs pleins (plus porteurs), des blocs d’angle, des blocs « poteau » et des blocs « linteau » en U qu’on remplit de béton armé.</li><li>Économique et robuste, il isole mal : le mur devra être isolé.</li></ul>",
            },
            {
              title: "Les briques",
              body:
                "<ul><li><b>Brique pleine</b> : traditionnelle, belle en parement, demande beaucoup de main-d’œuvre.</li><li><b>Brique creuse</b> de terre cuite (« brique alvéolaire » ou « monomur » pour les plus épaisses) : meilleure isolation propre, régule l’humidité.</li><li>Les briques modernes sont souvent <b>rectifiées</b> : surfaces très planes, posées avec un joint mince collé, plus rapide.</li></ul>",
            },
            {
              title: "Béton cellulaire et pierre",
              body:
                "<ul><li>Le <b>béton cellulaire</b> : bloc léger, rempli de petites bulles d’air, bon isolant, facile à couper à la scie. Plus fragile aux chocs, il se pose au mortier-colle.</li><li>La <b>pierre</b> : taillée (pierre de taille) ou brute (moellons). Durable et belle, mais lourde, chère et lente à mettre en œuvre. Dans le neuf, on l’utilise surtout en parement ou en restauration.</li></ul>",
            },
            {
              title: "Choisir",
              body:
                "<table class='t'><tr><th>Besoin</th><th>Choix fréquent</th></tr><tr><td>Mur porteur économique avec isolation ajoutée</td><td>Parpaing</td></tr><tr><td>Bonne isolation intégrée</td><td>Brique alvéolaire ou béton cellulaire</td></tr><tr><td>Muret de jardin, soubassement</td><td>Parpaing enduit, pierre, brique pleine</td></tr><tr><td>Cloison légère non porteuse</td><td>Carreaux de plâtre, béton cellulaire fin ou plaques sur ossature</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel élément ?",
          instruction: "Associe chaque description au matériau.",
          categories: ["Parpaing", "Brique", "Béton cellulaire"],
          items: [
            { text: "Bloc béton creux de 50 × 20 × 20 cm", cat: 0, why: "Format courant du parpaing." },
            { text: "Bloc léger rempli de bulles d’air qui se coupe à la scie", cat: 2, why: "C’est sa caractéristique." },
            { text: "Élément en terre cuite à alvéoles", cat: 1, why: "Brique alvéolaire." },
            { text: "Bloc en U qu’on remplit de béton armé au-dessus d’une ouverture", cat: 0, why: "Bloc linteau." },
            { text: "Élément traditionnel en terre cuite pour un parement apparent", cat: 1, why: "Brique pleine." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Parpaing", back: "Bloc béton creux, souvent 50 × 20 × 20 cm, près de 20 kg ; économique, isole peu." },
            { front: "Bloc linteau", back: "Bloc en U rempli de béton armé au-dessus des ouvertures." },
            { front: "Brique alvéolaire", back: "Terre cuite à alvéoles : meilleure isolation propre." },
            { front: "Brique rectifiée", back: "Surfaces très planes, posée à joint mince collé." },
            { front: "Béton cellulaire", back: "Bloc léger, isolant, facile à couper ; posé au mortier-colle." },
            { front: "Moellon", back: "Pierre brute utilisée dans les murs anciens." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est le principal défaut du parpaing ?", options: ["Il est très cher", "Il isole mal", "Il est trop léger"], answer: 1, explain: "Il faut ajouter une isolation." },
            { q: "Quel bloc se pose avec un mortier-colle en joint mince ?", options: ["Le béton cellulaire et la brique rectifiée", "La pierre brute", "Aucun"], answer: 0, explain: "Leurs faces très régulières le permettent." },
            { q: "Un parpaing de 20 cm pèse environ…", options: ["2 kg", "Près de 20 kg", "60 kg"], answer: 1, explain: "D’où l’importance des bonnes postures de manutention." },
            { q: "Au-dessus d’une fenêtre dans un mur en parpaings, on utilise…", options: ["Un bloc linteau rempli de béton armé", "Rien, ça tient", "Du plâtre"], answer: 0, explain: "Il reprend le poids du mur au-dessus." },
          ],
        },
        {
          type: "case",
          title: "L’atelier de Nora",
          story:
            "Nora fait construire un petit atelier non chauffé au fond de son jardin, puis, deux ans plus tard, une extension habitable de sa maison. Elle hésite sur le matériau des murs pour chaque projet.",
          question: "Quel raisonnement est le plus pertinent ?",
          options: [
            "Le même bloc partout, le moins cher",
            "Pour l’atelier non chauffé, le parpaing économique suffit ; pour l’extension habitable, un matériau plus isolant (brique alvéolaire, béton cellulaire) ou un parpaing bien isolé, en vérifiant la cohérence avec la réglementation thermique",
            "De la pierre de taille partout",
          ],
          answer: 1,
          explain:
            "Le bon matériau dépend de l’usage. Pour un local chauffé, l’isolation est centrale ; pour un abri non chauffé, la robustesse et le coût priment.",
        },
        {
          type: "fiche",
          title: "Blocs et pierre",
          points: [
            "<b>Parpaing</b> : économique, robuste, isole peu ; blocs d’angle, poteau, <b>linteau</b>.",
            "<b>Brique</b> : pleine (parement) ou <b>alvéolaire</b> (isolante), souvent <b>rectifiée</b>.",
            "<b>Béton cellulaire</b> : léger, isolant, facile à couper, mortier-colle.",
            "<b>Pierre</b> : taillée ou moellons, surtout en restauration et parement.",
          ],
          retenir: "Le bon bloc dépend de l’usage du bâtiment.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Monter un mur",
      minutes: 17,
      objectives: ["Connaître les étapes et les règles de montage", "Comprendre niveau, aplomb, joints et harpage"],
      steps: [
        {
          type: "lesson",
          title: "Droit, d’aplomb et bien lié",
          slides: [
            {
              title: "Les outils du maçon",
              body:
                "<ul><li><b>Truelle</b> : poser et étaler le mortier.</li><li><b>Niveau à bulle</b> : vérifier l’horizontalité.</li><li><b>Fil à plomb</b> ou niveau vertical : vérifier la verticalité (l’<b>aplomb</b>).</li><li><b>Cordeau</b> tendu entre deux points : aligner les rangs.</li><li><b>Règle</b> de maçon, <b>maillet</b> en caoutchouc, <b>auge</b>, <b>bétonnière</b>.</li></ul>",
            },
            {
              title: "Les étapes",
              body:
                "<ol><li>Partir d’une <b>fondation</b> ou d’une semelle parfaitement de niveau.</li><li>Poser une <b>coupure de capillarité</b> pour bloquer les remontées d’humidité.</li><li>Monter d’abord les <b>angles</b> sur quelques rangs, bien d’aplomb.</li><li>Tendre un <b>cordeau</b> entre les angles et poser les blocs intermédiaires rang par rang.</li><li>Vérifier régulièrement niveau et aplomb.</li><li>Réaliser chaînages et linteaux au fur et à mesure.</li></ol>",
            },
            {
              title: "Les joints et le harpage",
              body:
                "<ul><li>Joints de mortier courants : <b>environ 1 cm</b>, réguliers (moins avec un mortier-colle).</li><li>Les joints verticaux sont <b>décalés</b> d’un rang à l’autre, généralement d’un demi-bloc : c’est l’<b>appareillage</b> (ou « croisement des joints »).</li><li>Dans les angles et aux rencontres de murs, les blocs s’imbriquent alternativement : c’est le <b>harpage</b>. Il solidarise les murs entre eux.</li><li>Des joints verticaux alignés sur plusieurs rangs (« coup de sabre ») créent une ligne de faiblesse où le mur peut fissurer.</li></ul>",
            },
            {
              title: "Ne pas aller trop vite",
              body:
                "<ul><li>On évite de monter un mur trop haut en une seule journée : le mortier frais des rangs du bas doit commencer à durcir.</li><li>Par temps chaud, on humidifie certains blocs avant pose pour qu’ils ne « boivent » pas l’eau du mortier.</li><li>Par temps de gel, on ne maçonne pas.</li><li>Un mur isolé de grande hauteur (muret, clôture) doit être stabilisé par des <b>poteaux</b> ou des <b>contreforts</b> et des chaînages.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Bonne pratique ?",
          instruction: "Classe chaque pratique.",
          categories: ["Bonne pratique", "Erreur"],
          items: [
            { text: "Monter les angles d’abord puis tendre un cordeau", cat: 0, why: "Méthode classique." },
            { text: "Aligner les joints verticaux sur plusieurs rangs", cat: 1, why: "Ligne de faiblesse (coup de sabre)." },
            { text: "Décaler les joints d’un demi-bloc à chaque rang", cat: 0, why: "Appareillage correct." },
            { text: "Maçonner par temps de gel", cat: 1, why: "Le mortier gèle et ne prend pas." },
            { text: "Vérifier l’aplomb régulièrement", cat: 0, why: "Un mur doit être vertical." },
            { text: "Poser la première rangée directement sur un sol en pente", cat: 1, why: "Il faut une base de niveau." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Aplomb", back: "Verticalité d’un mur, vérifiée au fil à plomb ou au niveau." },
            { front: "Cordeau", back: "Fil tendu entre les angles pour aligner un rang." },
            { front: "Appareillage", back: "Décalage des joints verticaux d’un rang à l’autre." },
            { front: "Harpage", back: "Imbrication alternée des blocs dans les angles et rencontres de murs." },
            { front: "Coup de sabre", back: "Joints verticaux alignés : ligne de faiblesse." },
            { front: "Joint courant", back: "Environ 1 cm de mortier, régulier." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Par quoi commence-t-on le montage d’un mur ?", options: ["Le milieu", "Les angles, bien d’aplomb", "Le haut"], answer: 1, explain: "Ils servent de repère pour tendre le cordeau." },
            { q: "Pourquoi décaler les joints verticaux ?", options: ["Pour l’esthétique uniquement", "Pour répartir les efforts et éviter une ligne de fissure", "Pour économiser du mortier"], answer: 1, explain: "C’est l’appareillage." },
            { q: "Avec quoi vérifie-t-on qu’un rang est horizontal ?", options: ["Un niveau à bulle", "Une truelle", "Un maillet"], answer: 0, explain: "Le fil à plomb sert pour la verticale." },
            { q: "Un muret de clôture long et haut sans poteaux risque…", options: ["De rien", "De se fissurer ou de basculer, notamment avec le vent", "De pousser"], answer: 1, explain: "Il faut le raidir par des poteaux et chaînages." },
          ],
        },
        {
          type: "case",
          title: "Le muret de Kevin",
          story:
            "Kevin monte un muret de 1,50 m de haut sur 15 m de long en parpaings, sans fondation, directement sur la terre, sans poteaux. Il veut finir en un samedi.",
          question: "Quels sont les problèmes ?",
          options: [
            "Aucun, un muret c’est simple",
            "Pas de fondation (tassements, gel), pas de poteaux ni de chaînage pour raidir un mur aussi long, et une hauteur trop importante montée d’un coup : risque de fissures ou de basculement ; il faut aussi vérifier si une déclaration préalable est exigée pour les clôtures dans sa commune",
            "Seulement la couleur des parpaings",
          ],
          answer: 1,
          explain:
            "Même un muret a besoin d’une fondation hors gel et d’une structure (poteaux, chaînage haut). Dans certaines communes, les clôtures sont soumises à déclaration préalable.",
        },
        {
          type: "fiche",
          title: "Monter un mur",
          points: [
            "Outils : <b>truelle</b>, <b>niveau</b>, <b>fil à plomb</b>, <b>cordeau</b>, règle, maillet.",
            "Étapes : base de niveau, <b>coupure de capillarité</b>, <b>angles d’abord</b>, cordeau, rang par rang.",
            "Joints ≈ <b>1 cm</b>, <b>décalés</b> (appareillage), <b>harpage</b> aux angles ; pas de <b>coup de sabre</b>.",
            "Pas trop haut d’un coup, pas sous le gel ; raidir les longs murets (poteaux, chaînages).",
          ],
          retenir: "Un mur se joue au premier rang : s’il est faux, tout le reste le sera.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Enduits et finitions de façade",
      minutes: 15,
      objectives: ["Comprendre le rôle d’un enduit", "Connaître les principaux types d’enduits"],
      steps: [
        {
          type: "lesson",
          title: "Protéger le mur",
          slides: [
            {
              title: "À quoi sert un enduit",
              body:
                "<ul><li><b>Protéger</b> le mur de la pluie (imperméabilisation) tout en le laissant évacuer sa vapeur d’eau.</li><li><b>Décorer</b> : teinte et texture de la façade (souvent encadrées par le PLU).</li><li><b>Régulariser</b> les irrégularités de la maçonnerie.</li></ul><p>Un mur en parpaings doit toujours être enduit à l’extérieur : le bloc nu laisse passer l’eau.</p>",
            },
            {
              title: "Les types d’enduits",
              body:
                "<table class='t'><tr><th>Enduit</th><th>Principe</th><th>Usage</th></tr><tr><td><b>Traditionnel en 3 couches</b></td><td>Gobetis (accroche), corps d’enduit, finition</td><td>Toutes maçonneries, savoir-faire important</td></tr><tr><td><b>Monocouche</b></td><td>Enduit industriel prêt à gâcher, souvent projeté, teinté dans la masse</td><td>Blocs béton et briques neufs</td></tr><tr><td><b>Enduit à la chaux</b></td><td>Perméable à la vapeur</td><td>Pierre et bâti ancien</td></tr><tr><td><b>Sur isolant (ITE)</b></td><td>Enduit armé d’un treillis sur panneaux isolants</td><td>Isolation par l’extérieur</td></tr></table>",
            },
            {
              title: "Les finitions",
              body:
                "<ul><li><b>Gratté</b> : surface légèrement rugueuse, très courante.</li><li><b>Taloché</b> : lissé avec une taloche, aspect plus plat.</li><li><b>Écrasé</b>, <b>ribbé</b>, <b>jeté</b> : textures variées.</li></ul><p>Le PLU impose souvent des teintes (nuancier de la commune) : on vérifie avant de choisir.</p>",
            },
            {
              title: "Les règles d’application",
              body:
                "<ul><li>Support propre, dépoussiéré, humidifié si nécessaire.</li><li>Pas d’application en plein soleil, par vent fort, sous la pluie ou par gel.</li><li>Les matériaux différents (bloc et béton d’un poteau) se traitent avec un <b>treillis</b> pour éviter les fissures à la jonction.</li><li>L’enduit s’arrête à quelques centimètres au-dessus du sol pour ne pas « pomper » l’humidité.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Enduit", back: "Protège le mur de la pluie, le décore et régularise sa surface." },
            { front: "Gobetis", back: "Première couche d’accroche d’un enduit traditionnel." },
            { front: "Monocouche", back: "Enduit industriel prêt à gâcher, teinté dans la masse, souvent projeté." },
            { front: "Enduit chaux", back: "Perméable à la vapeur, adapté au bâti ancien." },
            { front: "Treillis", back: "Armature noyée dans l’enduit aux jonctions de matériaux différents." },
            { front: "Nuancier", back: "Teintes autorisées par la commune pour les façades." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Peut-on laisser un mur de parpaings nu à l’extérieur ?", options: ["Oui", "Non, il doit être enduit pour être protégé de la pluie", "Seulement en été"], answer: 1, explain: "Le bloc nu laisse passer l’eau." },
            { q: "Quel enduit pour une maison en pierre ancienne ?", options: ["Un enduit ciment étanche", "Un enduit à la chaux", "Pas d’enduit, jamais"], answer: 1, explain: "Le mur doit pouvoir sécher." },
            { q: "Pourquoi éviter d’enduire en plein soleil ?", options: ["L’enduit sèche trop vite et fissure", "C’est désagréable pour l’ouvrier seulement", "La couleur change"], answer: 0, explain: "Comme le béton, un enduit a besoin de temps." },
            { q: "Avant de choisir la couleur de ta façade, tu vérifies…", options: ["Le PLU et le nuancier de la commune", "La météo", "Rien"], answer: 0, explain: "Les teintes sont souvent encadrées." },
          ],
        },
        {
          type: "case",
          title: "La façade qui fissure",
          story:
            "Sur la maison neuve de Julie, de longues fissures apparaissent dans l’enduit exactement à la jonction entre les murs en parpaings et les poteaux en béton.",
          question: "Quelle est la cause probable ?",
          options: [
            "Un tremblement de terre",
            "Deux matériaux différents qui bougent différemment, sans treillis d’armature à la jonction lors de l’application de l’enduit",
            "Une mauvaise peinture",
          ],
          answer: 1,
          explain:
            "Les jonctions entre matériaux sont les points sensibles d’un enduit. Un treillis noyé dans l’enduit répartit les mouvements. Si l’enduit est récent, les garanties de l’entreprise peuvent jouer.",
        },
        {
          type: "fiche",
          title: "Enduits",
          points: [
            "Rôles : <b>protéger</b>, <b>décorer</b>, <b>régulariser</b>.",
            "Types : <b>traditionnel 3 couches</b>, <b>monocouche</b>, <b>chaux</b>, <b>sur isolant</b>.",
            "Finitions : gratté, taloché, écrasé… ; teintes selon le <b>PLU</b>.",
            "Ni soleil fort, ni vent, ni pluie, ni gel ; <b>treillis</b> aux jonctions.",
          ],
          retenir: "Un enduit doit protéger de la pluie sans empêcher le mur de respirer.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Dalles, chapes et ouvrages extérieurs",
      minutes: 16,
      objectives: ["Distinguer dalle et chape", "Connaître les points clés des ouvrages extérieurs"],
      steps: [
        {
          type: "lesson",
          title: "Sols et extérieurs",
          slides: [
            {
              title: "Dalle et chape",
              body:
                "<table class='t'><tr><th></th><th>Rôle</th><th>Constitution</th></tr><tr><td><b>Dalle</b></td><td>Porter : c’est un élément de structure</td><td>Béton, souvent armé (treillis soudé), 10 cm et plus</td></tr><tr><td><b>Chape</b></td><td>Niveler et préparer le revêtement</td><td>Mortier (ou chape fluide) de quelques centimètres sur la dalle</td></tr></table>",
            },
            {
              title: "Réussir une dalle sur terre-plein",
              body:
                "<ol><li>Décaisser et compacter le sol.</li><li>Étaler un <b>hérisson</b> de cailloux pour drainer et répartir.</li><li>Poser un <b>film polyane</b> contre les remontées d’humidité, et éventuellement un isolant.</li><li>Placer un <b>treillis soudé</b> sur des cales, pour qu’il soit dans l’épaisseur du béton et pas au fond.</li><li>Couler, régler à la règle, puis faire la <b>cure</b>.</li><li>Sur les grandes surfaces, prévoir des <b>joints</b> pour que les fissures de retrait se forment à des endroits choisis.</li></ol>",
            },
            {
              title: "Les murs de soutènement",
              body:
                "<ul><li>Un <b>mur de soutènement</b> retient de la terre : il subit une poussée importante, augmentée par l’eau.</li><li>Il doit être <b>dimensionné</b> (souvent en béton armé ou en blocs à bancher remplis de béton et ferraillés), avec une semelle adaptée.</li><li>Indispensable : un <b>drainage</b> derrière le mur et des <b>barbacanes</b> (trous d’évacuation) pour que l’eau ne s’accumule pas.</li><li>Au-delà de petites hauteurs, une étude par un professionnel est fortement recommandée.</li></ul>",
            },
            {
              title: "Terrasses et clôtures",
              body:
                "<ul><li>Une terrasse a une légère <b>pente</b> (de l’ordre de 1 à 2 %) pour évacuer l’eau loin de la maison.</li><li>Les clôtures et murets peuvent être soumis à <b>déclaration préalable</b> dans certaines communes ou secteurs protégés, et le PLU peut limiter leur hauteur et leur aspect.</li><li>La limite de propriété doit être connue précisément avant de construire un mur de clôture.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Dalle", back: "Élément porteur en béton, souvent armé d’un treillis soudé." },
            { front: "Chape", back: "Couche de mortier qui nivelle avant le revêtement." },
            { front: "Hérisson", back: "Couche de cailloux sous une dalle pour drainer et répartir." },
            { front: "Treillis soudé", back: "Armature en grille, placée sur cales dans l’épaisseur de la dalle." },
            { front: "Barbacane", back: "Trou d’évacuation de l’eau dans un mur de soutènement." },
            { front: "Pente de terrasse", back: "De l’ordre de 1 à 2 % pour évacuer l’eau loin de la maison." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle est la différence entre une dalle et une chape ?", options: ["La dalle porte, la chape nivelle", "Aucune", "La chape porte, la dalle décore"], answer: 0, explain: "La chape est posée sur la dalle." },
            { q: "Pourquoi poser le treillis soudé sur des cales ?", options: ["Pour qu’il soit noyé dans le béton et joue son rôle", "Pour l’esthétique", "Pour économiser du béton"], answer: 0, explain: "Posé au fond, il ne sert presque à rien." },
            { q: "Quel est l’ennemi principal d’un mur de soutènement ?", options: ["Le vent", "L’eau qui s’accumule derrière lui", "Le soleil"], answer: 1, explain: "D’où drainage et barbacanes." },
            { q: "Une terrasse doit avoir…", options: ["Une légère pente vers l’extérieur", "Une pente vers la maison", "Aucune pente"], answer: 0, explain: "L’eau doit s’éloigner des murs." },
          ],
        },
        {
          type: "case",
          title: "Le talus du jardin",
          story:
            "Pour agrandir son jardin en pente, Ahmed veut construire un mur de 1,80 m qui retiendra la terre du talus. Il prévoit des parpaings creux non remplis, sans drainage, « parce que le mur sera épais ».",
          question: "Que doit-il revoir ?",
          options: [
            "Rien, c’est suffisant",
            "Un mur de soutènement de cette hauteur doit être dimensionné (blocs à bancher ferraillés et remplis de béton ou béton armé, semelle adaptée), avec drainage et barbacanes ; une étude par un professionnel est recommandée",
            "Simplement peindre le mur",
          ],
          answer: 1,
          explain:
            "La poussée de la terre, surtout gorgée d’eau, peut renverser un mur mal conçu. Les effondrements de murs de soutènement sont des sinistres graves et coûteux.",
        },
        {
          type: "fiche",
          title: "Dalles et extérieurs",
          points: [
            "<b>Dalle</b> = porte ; <b>chape</b> = nivelle.",
            "Dalle sur terre-plein : compactage, <b>hérisson</b>, <b>polyane</b>, <b>treillis sur cales</b>, cure, joints.",
            "<b>Soutènement</b> : dimensionné, ferraillé, <b>drainage</b> + <b>barbacanes</b>.",
            "Terrasse : pente de <b>1 à 2 %</b> ; clôtures : vérifier PLU et éventuelle <b>déclaration préalable</b>.",
          ],
          retenir: "Derrière un mur qui retient la terre, il faut toujours laisser partir l’eau.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Rénover l’ancien et lire les fissures",
      minutes: 17,
      objectives: ["Comprendre l’humidité dans les murs anciens", "Savoir classer une fissure et quand s’inquiéter"],
      steps: [
        {
          type: "lesson",
          title: "Diagnostiquer avant d’agir",
          slides: [
            {
              title: "L’humidité dans les murs",
              body:
                "<ul><li><b>Remontées capillaires</b> : l’eau du sol monte dans le mur par ses pores (traces en bas des murs, salpêtre, peinture qui cloque).</li><li><b>Infiltrations</b> : pluie qui entre par une façade fissurée, une gouttière percée, un enduit dégradé.</li><li><b>Condensation</b> : vapeur d’eau intérieure qui se dépose sur les parois froides (manque de ventilation, ponts thermiques).</li></ul><p>Chaque cause a son traitement : un diagnostic est indispensable avant d’engager des travaux.</p>",
            },
            {
              title: "Les bons gestes sur le bâti ancien",
              body:
                "<ul><li>Retirer les enduits ciment ou peintures étanches qui emprisonnent l’humidité, et les remplacer par des enduits <b>chaux</b>.</li><li>Éloigner l’eau du pied des murs : <b>drainage</b>, gouttières en bon état, sol extérieur en pente.</li><li>Contre les remontées capillaires, il existe des traitements (injection de produits, drainage, ventilation du bas des murs) à choisir après diagnostic.</li><li>Isoler un mur ancien avec des matériaux <b>perméables</b> à la vapeur (fibre de bois, chanvre, chaux-chanvre) plutôt que de l’enfermer.</li></ul>",
            },
            {
              title: "Classer une fissure",
              body:
                "<table class='t'><tr><th>Type</th><th>Largeur indicative</th><th>Gravité habituelle</th></tr><tr><td><b>Microfissure</b></td><td>Moins de 0,2 mm</td><td>Souvent superficielle (retrait de l’enduit)</td></tr><tr><td><b>Fissure</b></td><td>De 0,2 à 2 mm</td><td>À surveiller</td></tr><tr><td><b>Lézarde</b></td><td>Plus de 2 mm</td><td>Signe possible d’un problème de structure : avis d’un professionnel</td></tr></table><p>La largeur ne suffit pas : on regarde aussi la <b>forme</b> (une fissure en escalier, en biais depuis l’angle d’une ouverture, ou traversant le mur est plus inquiétante), et surtout l’<b>évolution</b>.</p>",
            },
            {
              title: "Surveiller une fissure",
              body:
                "<ul><li>On pose un <b>témoin</b> (jauge graduée collée de part et d’autre, ou simple repère daté) pour suivre l’évolution sur plusieurs mois.</li><li>Une fissure qui s’ouvre ou s’allonge appelle un diagnostic par un professionnel (bureau d’études, expert).</li><li>Après une sécheresse importante, les fissures liées au retrait-gonflement des argiles peuvent relever d’une reconnaissance de <b>catastrophe naturelle</b> : on se renseigne en mairie et auprès de son assureur.</li><li>On ne rebouche pas une fissure active sans traiter sa cause : elle réapparaîtra.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle cause d’humidité ?",
          instruction: "Classe chaque symptôme.",
          categories: ["Remontées capillaires", "Infiltration", "Condensation"],
          items: [
            { text: "Traces horizontales et salpêtre en bas des murs du rez-de-chaussée", cat: 0, why: "L’eau monte du sol." },
            { text: "Tache qui apparaît après chaque pluie sous une gouttière percée", cat: 1, why: "Eau venue de l’extérieur." },
            { text: "Buée et moisissures dans les angles de la chambre en hiver", cat: 2, why: "Vapeur intérieure sur paroi froide." },
            { text: "Humidité du mur côté façade exposée à la pluie, enduit fissuré", cat: 1, why: "Pénétration par la façade." },
            { text: "Moisissures derrière une armoire collée à un mur extérieur", cat: 2, why: "Air immobile et paroi froide." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Remontées capillaires", back: "L’eau du sol monte dans le mur par ses pores." },
            { front: "Condensation", back: "Vapeur intérieure qui se dépose sur une paroi froide." },
            { front: "Microfissure", back: "Moins de 0,2 mm, souvent superficielle." },
            { front: "Lézarde", back: "Plus de 2 mm : possible problème de structure, avis professionnel." },
            { front: "Témoin de fissure", back: "Jauge ou repère pour suivre l’évolution d’une fissure." },
            { front: "Isolant perméable", back: "Fibre de bois, chanvre, chaux-chanvre : adaptés aux murs anciens." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est le critère le plus important pour juger une fissure ?", options: ["Sa couleur", "Son évolution dans le temps, avec sa largeur et sa forme", "Le bruit qu’elle fait"], answer: 1, explain: "Une fissure stable est rarement grave, une fissure qui s’ouvre doit être expertisée." },
            { q: "Des moisissures dans les angles en hiver, surtout dans une chambre peu aérée, viennent souvent…", options: ["de la condensation", "des remontées capillaires", "d’une fuite d’eau chaude"], answer: 0, explain: "Il faut ventiler et traiter les ponts thermiques." },
            { q: "Faut-il reboucher immédiatement une lézarde qui s’agrandit ?", options: ["Oui, au mastic", "Non, il faut d’abord diagnostiquer et traiter la cause", "Oui, avec du plâtre"], answer: 1, explain: "Sinon elle réapparaîtra." },
            { q: "Pour isoler un mur en pierre ancien, on privilégie…", options: ["Un isolant étanche à la vapeur collé directement", "Un isolant perméable à la vapeur", "Une peinture plastique"], answer: 1, explain: "Le mur doit continuer à sécher." },
          ],
        },
        {
          type: "case",
          title: "Après l’été sec",
          story:
            "Après un été très sec, Claire découvre une fissure en escalier qui part de l’angle d’une fenêtre et traverse la façade de sa maison, construite sur un sol argileux. Plusieurs voisins ont le même problème.",
          question: "Que doit-elle faire ?",
          options: [
            "Reboucher et repeindre",
            "Poser un témoin pour suivre l’évolution, faire examiner la fissure par un professionnel, se renseigner en mairie sur une éventuelle demande de reconnaissance de catastrophe naturelle et prévenir son assureur",
            "Vendre la maison rapidement",
          ],
          answer: 1,
          explain:
            "Une fissure en escalier depuis une ouverture, sur sol argileux après une sécheresse, évoque le retrait-gonflement des argiles. Quand plusieurs maisons sont touchées, la commune peut demander une reconnaissance de catastrophe naturelle, condition de l’indemnisation par les assurances.",
        },
        {
          type: "fiche",
          title: "Ancien et fissures",
          points: [
            "Humidité : <b>remontées capillaires</b>, <b>infiltrations</b>, <b>condensation</b> → diagnostic d’abord.",
            "Ancien : enduits <b>chaux</b>, éloigner l’eau, isolants <b>perméables</b>.",
            "Fissures : <b>micro</b> (< 0,2 mm), <b>fissure</b> (0,2-2 mm), <b>lézarde</b> (> 2 mm) ; forme et <b>évolution</b>.",
            "Poser un <b>témoin</b> ; sécheresse et argiles : <b>catastrophe naturelle</b> possible.",
          ],
          retenir: "Une fissure, on la surveille et on en cherche la cause avant de la reboucher.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Sécurité sur un chantier de maçonnerie",
      minutes: 15,
      objectives: ["Connaître les risques propres à la maçonnerie", "Adopter les bons réflexes de prévention"],
      steps: [
        {
          type: "lesson",
          title: "Se protéger",
          slides: [
            {
              title: "Le ciment, un produit agressif",
              body:
                "<ul><li>Le ciment frais est très <b>alcalin</b> : un contact prolongé avec la peau peut provoquer de véritables <b>brûlures chimiques</b>, parfois sans douleur immédiate (genoux dans le béton frais, ciment dans les bottes).</li><li>Il peut aussi provoquer des <b>eczémas</b> (allergie).</li><li>Dans les yeux, c’est une urgence : rincer abondamment à l’eau et consulter.</li><li>Protection : <b>gants</b> adaptés, manches longues, <b>lunettes</b>, bottes, genouillères ; rincer rapidement la peau souillée.</li></ul>",
            },
            {
              title: "La poussière de silice",
              body:
                "<ul><li>Découper, poncer ou meuler du béton, des blocs, de la brique ou de la pierre libère de la poussière contenant de la <b>silice cristalline</b>.</li><li>Respirée régulièrement, elle provoque des maladies pulmonaires graves (silicose) et des cancers.</li><li>Prévention : découpe <b>à l’eau</b> ou avec <b>aspiration</b> à la source, zone ventilée, et <b>masque de protection respiratoire</b> adapté (de type FFP3 pour ces poussières).</li></ul>",
            },
            {
              title: "Manutention et hauteur",
              body:
                "<ul><li>Les blocs, sacs de ciment (souvent 25 à 35 kg) et seaux de mortier sont lourds : les <b>troubles musculo-squelettiques</b> (dos, épaules) sont très fréquents dans le métier.</li><li>Bonnes pratiques : porter près du corps, plier les jambes, utiliser brouettes, diables et engins de levage, limiter le poids des charges, travailler à bonne hauteur.</li><li>Pour monter un mur en hauteur : <b>échafaudage</b> conforme avec garde-corps, jamais d’empilement de parpaings ou de chaise comme support.</li></ul>",
            },
            {
              title: "Tranchées et bétonnière",
              body:
                "<ul><li>Une tranchée peut s’effondrer en quelques secondes : au-delà d’une certaine profondeur (1,30 m est le repère réglementaire courant pour les chantiers), on <b>blinde</b> ou on talute les parois.</li><li>La <b>bétonnière</b> doit être stable, branchée sur une prise protégée par un différentiel 30 mA, et on ne met jamais la pelle ou la main dans la cuve en rotation.</li><li>Le port du <b>casque</b> et des <b>chaussures de sécurité</b> est la base sur un chantier.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel risque, quelle protection ?",
          instruction: "Associe chaque situation à la protection prioritaire.",
          categories: ["Gants, lunettes, rinçage", "Découpe à l’eau ou aspiration + masque", "Échafaudage ou aide à la manutention"],
          items: [
            { text: "Lisser une dalle à genoux dans le béton frais", cat: 0, why: "Brûlures chimiques du ciment." },
            { text: "Couper des parpaings à la disqueuse", cat: 1, why: "Poussière de silice." },
            { text: "Monter le dernier rang d’un mur à 2,50 m", cat: 2, why: "Risque de chute." },
            { text: "Décharger 40 sacs de ciment", cat: 2, why: "Charges lourdes répétées." },
            { text: "Gâcher un mortier qui éclabousse", cat: 0, why: "Projection dans les yeux et sur la peau." },
            { text: "Poncer un mur en pierre", cat: 1, why: "Poussière minérale." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Ciment frais", back: "Très alcalin : brûlures chimiques et eczéma possibles ; gants, lunettes, rinçage." },
            { front: "Silice cristalline", back: "Poussière de découpe des matériaux minéraux : maladies pulmonaires graves." },
            { front: "Masque FFP3", back: "Protection respiratoire adaptée aux poussières de silice." },
            { front: "TMS", back: "Troubles musculo-squelettiques dus aux charges et postures." },
            { front: "Blindage de tranchée", back: "Soutien des parois contre l’effondrement, repère courant à 1,30 m de profondeur." },
            { front: "Bétonnière", back: "Stable, sur prise protégée par un 30 mA, jamais de main dans la cuve en rotation." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi le ciment frais est-il dangereux pour la peau ?", options: ["Il est trop froid", "Il est très alcalin et peut causer des brûlures chimiques", "Il contient du sel"], answer: 1, explain: "Les brûlures peuvent apparaître sans douleur immédiate." },
            { q: "Comment limiter la poussière en coupant des blocs ?", options: ["Couper plus vite", "Découper à l’eau ou avec aspiration, et porter un masque adapté", "Travailler sans protection, dehors"], answer: 1, explain: "La silice est dangereuse même à l’extérieur." },
            { q: "Pour poser le dernier rang d’un mur haut, on utilise…", options: ["Une pile de parpaings", "Un échafaudage conforme avec garde-corps", "Une chaise"], answer: 1, explain: "La chute de hauteur est un risque majeur." },
            { q: "Du mortier gicle dans l’œil d’un ouvrier. Que faire ?", options: ["Frotter", "Rincer abondamment à l’eau et consulter", "Attendre"], answer: 1, explain: "C’est une urgence." },
          ],
        },
        {
          type: "case",
          title: "Le chantier du week-end",
          story:
            "Tom et deux amis construisent un garage le week-end. Ils coupent les blocs à la disqueuse à sec, en tee-shirt, sans masque. Le dimanche, Tom lisse la dalle à genoux dans le béton pendant deux heures, en short. Le soir, ses genoux sont rouges et douloureux.",
          question: "Quelles erreurs ont-ils commises ?",
          options: [
            "Aucune, c’est normal sur un chantier",
            "Découpe à sec sans aspiration ni masque (poussière de silice) et contact prolongé de la peau avec le béton frais (brûlures chimiques) : il fallait découper à l’eau ou avec aspiration, porter un masque adapté, des genouillères étanches, des gants et des vêtements couvrants ; Tom doit rincer et consulter",
            "Ils auraient dû travailler plus vite",
          ],
          answer: 1,
          explain:
            "Les brûlures au ciment peuvent être profondes et apparaître des heures après. La poussière de silice, elle, fait des dégâts invisibles mais durables. Les chantiers entre amis sont souvent ceux où l’on se protège le moins.",
        },
        {
          type: "fiche",
          title: "Sécurité en maçonnerie",
          points: [
            "<b>Ciment</b> : brûlures chimiques, eczéma → gants, lunettes, vêtements couvrants, rinçage.",
            "<b>Silice</b> : découpe à l’eau ou aspirée, masque <b>FFP3</b>.",
            "<b>Manutention</b> : charges lourdes, aides mécaniques, bonnes postures ; <b>échafaudage</b> en hauteur.",
            "<b>Tranchées</b> blindées ou talutées ; <b>bétonnière</b> stable et protégée ; casque et chaussures de sécurité.",
          ],
          retenir: "Le ciment brûle sans prévenir, la poussière tue sans bruit.",
        },
      ],
    },
  ],
});
