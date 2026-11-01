/* ============================================================
   COURS : La mobilité au quotidien
   Complexe sportif · 8 séances de 15 à 20 minutes
   Bouger mieux et avoir moins de raideurs : mobilité vs
   souplesse, bilan, chevilles, hanches, colonne, épaules et
   poignets, routines quotidiennes, travail sur écran.
   Pour un adulte en bonne santé ; ne remplace pas un avis
   médical ou kinésithérapique.
   ============================================================ */
AGORA.registerCourse({
  id: "sport-mobilite",
  faculty: "sport",
  title: "La mobilité au quotidien",
  subtitle: "Moins de raideurs, de meilleurs mouvements, en quelques minutes par jour",
  color: "#1f8a8a",
  level: "Tous niveaux",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour retrouver de l’aisance dans ses mouvements : comprendre la différence entre mobilité et souplesse, faire son bilan, travailler chevilles, hanches, dos, épaules et poignets, construire des routines de 5 à 10 minutes (réveil, bureau, avant le sport, soir) et aménager son poste de travail sur écran. Si une douleur est intense, persiste ou s’accompagne de fourmillements, consulte un professionnel de santé.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Mobilité, souplesse et posture",
      minutes: 15,
      objectives: ["Distinguer mobilité et souplesse", "Comprendre ce que dit la science sur la posture"],
      steps: [
        {
          type: "lesson",
          title: "Bouger mieux",
          slides: [
            {
              title: "Souplesse ou mobilité ?",
              body:
                "<div class='tiers'><div><b>La souplesse</b><span>L’amplitude qu’une articulation peut atteindre de façon <b>passive</b> (par exemple, une jambe tirée par un partenaire).</span></div><div><b>La mobilité</b><span>L’amplitude que tu peux atteindre et <b>contrôler activement</b>, avec tes propres muscles.</span></div><div><b>Pourquoi c’est différent</b><span>On peut être souple sans contrôle (risque d’instabilité) : la mobilité combine amplitude et force.</span></div></div>",
            },
            {
              title: "Pourquoi travailler sa mobilité",
              body:
                "<ul><li>Faire les gestes du quotidien et du sport <b>avec aisance</b> : s’accroupir, lever les bras, se retourner, ramasser un objet.</li><li>Réaliser les exercices de renforcement avec une <b>bonne technique</b> (squat profond, bras au-dessus de la tête).</li><li>Réduire la sensation de <b>raideur</b>, surtout quand on reste assis longtemps.</li><li>Vieillir en gardant son autonomie : se relever du sol est un bon indicateur de santé fonctionnelle.</li></ul>",
            },
            {
              title: "La « bonne posture » : ce que dit la science",
              body:
                "<ul><li>Il n’existe pas <b>une</b> posture parfaite qui protégerait du mal de dos : les études trouvent un lien faible entre la posture et les douleurs.</li><li>Le vrai problème est l’<b>immobilité</b> : rester longtemps dans la même position, quelle qu’elle soit.</li><li>Formule à retenir : <b>« la meilleure posture est la suivante »</b> ; changer souvent de position.</li><li>Le dos est solide : se pencher avec le dos un peu arrondi pour ramasser un objet léger n’est pas dangereux. Pour une charge lourde, on préfère plier les hanches et les genoux.</li></ul>",
            },
            {
              title: "Comment on gagne en amplitude",
              body:
                "<ul><li>Les <b>étirements statiques</b> (tenir 30 à 60 secondes), répétés plusieurs fois par semaine pendant des semaines, augmentent l’amplitude, surtout en améliorant la <b>tolérance</b> à l’étirement.</li><li>Le <b>renforcement en grande amplitude</b> (squat profond, fente profonde, soulevé de terre roumain contrôlé) améliore la mobilité autant que les étirements dans de nombreuses études.</li><li>La <b>régularité</b> prime : 5 à 10 minutes par jour valent mieux qu’une heure par mois.</li><li>Une sensation d’étirement est normale ; une douleur vive ne l’est pas.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Souplesse ou mobilité ?",
          instruction: "Cette situation décrit-elle plutôt la souplesse passive ou la mobilité active ?",
          categories: ["Souplesse (passive)", "Mobilité (active, contrôlée)"],
          items: [
            { text: "Un partenaire pousse ta jambe pour l’étirer", cat: 0, why: "Amplitude obtenue passivement." },
            { text: "Lever la jambe tendue devant toi le plus haut possible et la tenir", cat: 1, why: "Amplitude contrôlée par tes muscles." },
            { text: "Descendre en squat profond et remonter sans perdre l’équilibre", cat: 1, why: "Amplitude + contrôle." },
            { text: "Atteindre ses pieds en tirant dessus avec les mains", cat: 0, why: "Aide des bras." },
            { text: "Lever les bras au-dessus de la tête, dos collé au mur", cat: 1, why: "Contrôle actif." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Souplesse", back: "Amplitude passive (avec aide)" },
            { front: "Mobilité", back: "Amplitude que l’on contrôle activement" },
            { front: "La meilleure posture", back: "C’est la suivante : changer souvent de position" },
            { front: "Posture et mal de dos", back: "Lien faible ; l’immobilité prolongée pose davantage problème" },
            { front: "Étirement statique", back: "30 à 60 s, plusieurs fois par semaine, sur des semaines" },
            { front: "Renforcement en grande amplitude", back: "Améliore aussi la mobilité" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle est la différence entre souplesse et mobilité ?", options: ["Aucune", "La mobilité ajoute le contrôle actif de l’amplitude", "La souplesse est réservée aux danseurs"], answer: 1, explain: "Amplitude + force + contrôle." },
            { q: "Selon les études, quel est le facteur le plus gênant au bureau ?", options: ["S’asseoir un peu voûté", "Rester longtemps immobile dans la même position", "Croiser les jambes"], answer: 1, explain: "Le mouvement régulier compte plus que la position parfaite." },
            { q: "Pour gagner en amplitude, il vaut mieux…", options: ["1 heure d’étirements une fois par mois", "5 à 10 minutes la plupart des jours", "forcer jusqu’à la douleur"], answer: 1, explain: "La régularité prime." },
            { q: "Un squat profond avec charge légère améliore-t-il la mobilité ?", options: ["Non, seuls les étirements comptent", "Oui, le renforcement en grande amplitude améliore aussi la mobilité", "Il la réduit"], answer: 1, explain: "Force et amplitude progressent ensemble." },
          ],
        },
        {
          type: "case",
          title: "La posture parfaite",
          story:
            "Noa a lu qu’il fallait « se tenir droit » pour ne pas avoir mal au dos. Il passe ses journées assis très droit, sans bouger, crispé. Le soir, il a le dos raide.",
          question: "Que lui conseiller ?",
          options: [
            "Se tenir encore plus droit",
            "Changer souvent de position (la meilleure posture est la suivante), se lever toutes les 30 à 60 minutes, et faire quelques minutes de mobilité dans la journée",
            "Ne plus jamais s’asseoir",
          ],
          answer: 1,
          explain:
            "Une posture tenue de façon rigide toute la journée fatigue autant qu’une posture avachie. Le mouvement est le meilleur remède.",
        },
        {
          type: "fiche",
          title: "Mobilité et posture",
          points: [
            "<b>Souplesse</b> = amplitude passive ; <b>mobilité</b> = amplitude <b>contrôlée</b>.",
            "Pas de posture parfaite : <b>la meilleure posture est la suivante</b> ; l’immobilité est le problème.",
            "Gagner en amplitude : <b>étirements 30-60 s</b> réguliers + <b>renforcement en grande amplitude</b>.",
            "<b>5-10 min par jour</b> ; étirement oui, douleur vive non.",
          ],
          retenir: "Ton corps n’a pas besoin d’une posture parfaite : il a besoin de bouger souvent.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Faire son bilan de mobilité",
      minutes: 15,
      objectives: ["Tester sa mobilité avec 6 tests simples", "Identifier ses priorités"],
      steps: [
        {
          type: "lesson",
          title: "6 tests en 10 minutes",
          slides: [
            {
              title: "Tests 1 à 3 : le bas du corps",
              body:
                "<table class='t'><tr><th>Test</th><th>Comment</th><th>Repère</th></tr><tr><td><b>Genou au mur</b> (cheville)</td><td>Face au mur, pied à une certaine distance, avancer le genou pour toucher le mur, talon au sol</td><td>Environ <b>10 cm</b> ou plus entre gros orteil et mur ; comparer gauche et droite</td></tr><tr><td><b>Squat profond</b></td><td>Pieds largeur d’épaules, descendre le plus bas possible</td><td>Cuisses sous la parallèle, talons au sol, dos pas trop arrondi</td></tr><tr><td><b>Toucher ses pieds</b></td><td>Debout, jambes tendues, se pencher en avant</td><td>Atteindre les orteils (arrière des cuisses et dos)</td></tr></table>",
            },
            {
              title: "Tests 4 à 6 : le haut du corps",
              body:
                "<table class='t'><tr><th>Test</th><th>Comment</th><th>Repère</th></tr><tr><td><b>Bras au mur</b></td><td>Dos, fesses et tête contre un mur, lever les bras tendus vers le haut</td><td>Toucher le mur avec les pouces sans cambrer le bas du dos</td></tr><tr><td><b>Rotation assise</b></td><td>Assis, bâton sur les épaules, tourner le buste sans bouger le bassin</td><td>Environ 45° de chaque côté, symétrique</td></tr><tr><td><b>Mains dans le dos</b></td><td>Une main par-dessus l’épaule, l’autre par en dessous, se rapprocher</td><td>Les mains se touchent ou presque ; comparer les côtés</td></tr></table>",
            },
            {
              title: "Interpréter",
              body:
                "<ul><li>Ces repères sont <b>indicatifs</b> : ils servent surtout à se comparer à soi-même dans le temps.</li><li>Une <b>asymétrie</b> nette (un côté beaucoup moins mobile) est souvent plus intéressante qu’un chiffre.</li><li>Une <b>douleur</b> pendant un test, des fourmillements ou un blocage : pas de forçage, avis d’un professionnel de santé.</li><li>Choisis <b>1 ou 2 priorités</b> (par exemple chevilles et haut du dos) plutôt que tout travailler à la fois.</li></ul>",
            },
            {
              title: "Le test qui résume tout : se relever du sol",
              body:
                "<p>Le test « s’asseoir-se relever » : s’asseoir par terre en tailleur puis se relever, <b>sans s’aider</b> des mains ni des genoux si possible.</p><ul><li>Il combine mobilité des chevilles et des hanches, force et équilibre.</li><li>Des études l’associent à la santé fonctionnelle avec l’âge.</li><li>S’entraîner à se relever du sol régulièrement est un excellent exercice en soi.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Test genou au mur", back: "Cheville : environ 10 cm ou plus, talon au sol" },
            { front: "Test bras au mur", back: "Pouces au mur sans cambrer : épaules et haut du dos" },
            { front: "Rotation assise", back: "Environ 45° de chaque côté, sans bouger le bassin" },
            { front: "Ce qui compte le plus", back: "L’évolution dans le temps et les asymétries" },
            { front: "Douleur ou fourmillements au test", back: "Ne pas forcer, consulter" },
            { front: "Test s’asseoir-se relever", back: "Combine mobilité, force et équilibre" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Le test du genou au mur évalue…", options: ["la cheville", "l’épaule", "la nuque"], answer: 0, explain: "La flexion de cheville, essentielle au squat et à la course." },
            { q: "Ta cheville gauche fait 11 cm, la droite 5 cm. Priorité ?", options: ["Ignorer", "Travailler la cheville droite en priorité", "Travailler uniquement la gauche"], answer: 1, explain: "L’asymétrie est une information utile." },
            { q: "Pendant le test des bras au mur, tu dois cambrer fortement pour toucher le mur. Cela indique…", options: ["une bonne mobilité", "un manque de mobilité des épaules ou du haut du dos", "un problème de cheville"], answer: 1, explain: "La cambrure compense." },
            { q: "Combien de priorités choisir ?", options: ["1 ou 2", "Toutes les articulations", "Aucune"], answer: 0, explain: "Pour être régulier et efficace." },
          ],
        },
        {
          type: "case",
          title: "Le squat impossible",
          story:
            "Sofia ne parvient pas à descendre en squat sans que ses talons se soulèvent. Elle pense que ses « jambes sont trop raides » et étire ses ischio-jambiers tous les soirs, sans progrès.",
          question: "Quelle piste vérifier ?",
          options: [
            "Ses épaules",
            "Faire le test du genou au mur : des talons qui se lèvent en squat viennent souvent d’un manque de mobilité de cheville ; c’est elle qu’il faut travailler en priorité",
            "Rien, certaines personnes ne peuvent jamais s’accroupir",
          ],
          answer: 1,
          explain:
            "Tester avant de travailler évite de passer des semaines sur la mauvaise zone.",
        },
        {
          type: "fiche",
          title: "Bilan",
          points: [
            "Bas du corps : <b>genou au mur</b> (≈ 10 cm), <b>squat profond</b>, toucher ses pieds.",
            "Haut du corps : <b>bras au mur</b>, <b>rotation assise</b> (≈ 45°), mains dans le dos.",
            "Repères indicatifs : suivre l’<b>évolution</b> et les <b>asymétries</b> ; douleur = ne pas forcer.",
            "<b>1-2 priorités</b> ; test <b>s’asseoir-se relever</b> comme exercice global.",
          ],
          retenir: "Teste avant de t’étirer : tu sauras exactement quelle articulation travailler.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Chevilles et pieds",
      minutes: 15,
      objectives: ["Améliorer la mobilité des chevilles", "Renforcer pieds et équilibre"],
      steps: [
        {
          type: "lesson",
          title: "La base de tout mouvement",
          slides: [
            {
              title: "Pourquoi les chevilles",
              body:
                "<p>Une cheville raide oblige le genou, la hanche ou le dos à compenser : talons qui se lèvent en squat, genoux qui rentrent, foulée moins fluide. La flexion de cheville est sollicitée pour s’accroupir, monter des escaliers, courir.</p>",
            },
            {
              title: "Les exercices de mobilité",
              body:
                "<ul><li><b>Genou au mur dynamique</b> : en position du test, avancer le genou vers le mur et revenir, 10-15 fois par côté, talon au sol.</li><li><b>Fente de cheville avec charge</b> : pied avant sur une marche, poser l’avant-bras ou un sac sur le genou et pousser doucement vers l’avant.</li><li><b>Étirement du mollet</b> contre un mur : jambe arrière tendue (30-60 s), puis genou fléchi (pour le soléaire).</li><li><b>Squat profond assisté</b> : se tenir à un cadre de porte et rester en bas 30 s à 2 min, talons au sol si possible.</li></ul>",
            },
            {
              title: "Pieds et équilibre",
              body:
                "<ul><li><b>Équilibre sur une jambe</b> : 30 s, puis yeux fermés, puis sur un coussin.</li><li><b>Montées sur pointes</b> lentes, sur une jambe.</li><li><b>Ramasser une serviette avec les orteils</b> ou écarter les orteils : renforce les petits muscles du pied.</li><li>Marcher <b>pieds nus</b> sur des surfaces sûres et variées à la maison.</li></ul>",
            },
            {
              title: "Mini-routine chevilles (5 min)",
              body:
                "<ol><li>Genou au mur dynamique : 2 × 12 par côté.</li><li>Étirement du mollet jambe tendue puis fléchie : 30 s chacun, par côté.</li><li>Squat profond assisté : 1 minute.</li><li>Équilibre sur une jambe : 30 s par côté.</li></ol><p>À faire 4 à 5 fois par semaine, par exemple en se brossant les dents pour l’équilibre.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Cheville raide", back: "Le genou, la hanche ou le dos compensent" },
            { front: "Genou au mur dynamique", back: "Avancer le genou vers le mur, talon au sol, 10-15 fois" },
            { front: "Étirement du soléaire", back: "Mollet contre un mur, genou arrière fléchi" },
            { front: "Squat profond assisté", back: "Se tenir à un cadre de porte, 30 s à 2 min en bas" },
            { front: "Équilibre progressif", back: "Yeux ouverts → yeux fermés → coussin" },
            { front: "Astuce du quotidien", back: "Équilibre sur une jambe en se brossant les dents" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tes talons se lèvent en squat. Quel exercice prioriser ?", options: ["Genou au mur dynamique", "Étirement des épaules", "Rotation du cou"], answer: 0, explain: "Mobilité de la flexion de cheville." },
            { q: "Pour étirer le soléaire (partie basse du mollet), le genou est…", options: ["tendu", "fléchi", "sur le sol"], answer: 1, explain: "Le genou fléchi relâche le gastrocnémien." },
            { q: "Comment rendre l’équilibre sur une jambe plus difficile ?", options: ["Yeux fermés ou sur un coussin", "En se tenant au mur", "Sur deux jambes"], answer: 0, explain: "On réduit les informations visuelles ou la stabilité." },
            { q: "Combien de fois par semaine la mini-routine ?", options: ["4 à 5 fois", "Une fois par mois", "Jamais"], answer: 0, explain: "La régularité fait la différence." },
          ],
        },
        {
          type: "case",
          title: "L’entorse ancienne",
          story:
            "Karim s’est fait une entorse il y a deux ans. Depuis, sa cheville droite est plus raide que la gauche et il a l’impression qu’elle « tourne » facilement en courant.",
          question: "Que peut-il faire ?",
          options: [
            "Rien, c’est définitif",
            "Travailler la mobilité de la cheville droite (genou au mur, étirements) et surtout l’équilibre et le renforcement (pointes sur une jambe, équilibre yeux fermés) ; consulter un kinésithérapeute si l’instabilité persiste",
            "Porter une chevillère en permanence sans autre exercice",
          ],
          answer: 1,
          explain:
            "Après une entorse, le travail d’équilibre (proprioception) réduit le risque de récidive. Mobilité et renforcement vont ensemble.",
        },
        {
          type: "fiche",
          title: "Chevilles et pieds",
          points: [
            "Cheville raide → <b>compensations</b> (talons, genoux, dos).",
            "Mobilité : <b>genou au mur dynamique</b>, fente de cheville, <b>mollet tendu et fléchi</b>, squat profond assisté.",
            "Pieds et équilibre : <b>une jambe</b> (yeux fermés, coussin), pointes, orteils, pieds nus.",
            "Routine <b>5 min</b>, 4-5 fois par semaine.",
          ],
          retenir: "Des chevilles mobiles et stables rendent le squat, la course et les escaliers plus faciles.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Les hanches",
      minutes: 16,
      objectives: ["Libérer des hanches raidies par la position assise", "Combiner étirement et renforcement des hanches"],
      steps: [
        {
          type: "lesson",
          title: "Le carrefour du corps",
          slides: [
            {
              title: "Pourquoi les hanches",
              body:
                "<p>La hanche est une articulation très mobile, qui bouge dans toutes les directions : flexion, extension, rotations, écarts. Assis plusieurs heures par jour, on l’utilise surtout dans une seule position (fléchie à 90°).</p><p>Résultat fréquent : sensation de raideur à l’avant de la hanche, rotations limitées, difficulté à s’accroupir.</p>",
            },
            {
              title: "L’avant de la hanche",
              body:
                "<ul><li><b>Fente d’étirement des fléchisseurs de hanche</b> : un genou au sol (sur un coussin), l’autre pied devant ; serrer le fessier du côté du genou au sol et avancer légèrement le bassin. 30-60 s par côté.</li><li>Lever le bras du côté du genou au sol augmente l’étirement.</li><li>Erreur fréquente : cambrer le bas du dos au lieu d’ouvrir la hanche ; serrer le fessier corrige cela.</li></ul>",
            },
            {
              title: "Rotations et adducteurs",
              body:
                "<ul><li><b>Position 90/90</b> : assis au sol, une jambe pliée devant à 90°, l’autre pliée sur le côté à 90°. Pencher le buste vers la jambe avant, puis basculer les genoux de l’autre côté. Excellent pour les rotations.</li><li><b>Pigeon</b> (version au sol ou sur une table) : étire les fessiers et les rotateurs.</li><li><b>Étirement des adducteurs</b> : à quatre pattes, une jambe tendue sur le côté, reculer le bassin (la « grenouille » à une jambe).</li><li><b>Squat profond</b> tenu, en poussant doucement les genoux vers l’extérieur avec les coudes.</li></ul>",
            },
            {
              title: "Renforcer en amplitude",
              body:
                "<ul><li><b>Cercles de hanche à quatre pattes</b> (CARs) : décrire le plus grand cercle possible avec le genou, lentement, sans bouger le reste du corps.</li><li><b>Fentes profondes</b> et <b>squat bulgare</b> en amplitude complète.</li><li><b>Soulevé de terre roumain</b> sur une jambe, lent et contrôlé.</li><li><b>Pont fessier</b> : il ouvre l’avant de la hanche en renforçant les fessiers.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Assis toute la journée", back: "La hanche reste fléchie à 90° : raideur à l’avant et rotations limitées" },
            { front: "Fente des fléchisseurs de hanche", back: "Genou au sol, serrer le fessier, avancer le bassin sans cambrer" },
            { front: "Position 90/90", back: "Deux jambes pliées à 90° au sol : travaille les rotations" },
            { front: "Pigeon", back: "Étire fessiers et rotateurs de la hanche" },
            { front: "CARs de hanche", back: "Grands cercles lents et contrôlés à quatre pattes" },
            { front: "Pont fessier", back: "Ouvre l’avant de la hanche en renforçant les fessiers" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pendant l’étirement des fléchisseurs de hanche, il faut éviter…", options: ["de serrer le fessier", "de cambrer fortement le bas du dos", "de respirer"], answer: 1, explain: "Serrer le fessier oriente l’étirement vers la hanche." },
            { q: "Quelle position travaille les rotations de hanche ?", options: ["La planche", "La position 90/90", "Les pompes"], answer: 1, explain: "Rotation interne d’un côté, externe de l’autre." },
            { q: "Les CARs sont…", options: ["des étirements passifs", "des rotations articulaires lentes et contrôlées", "des sprints"], answer: 1, explain: "Controlled Articular Rotations." },
            { q: "Pourquoi les hanches se raidissent-elles chez les personnes assises ?", options: ["Elles restent longtemps dans une seule position", "À cause des chaussures", "Ce n’est pas le cas"], answer: 0, explain: "Peu de variété de mouvement." },
          ],
        },
        {
          type: "case",
          title: "Les longues journées de route",
          story:
            "Hugo fait des livraisons et passe 7 heures par jour au volant. Le soir, il a du mal à se redresser complètement en sortant du camion et ses hanches sont raides.",
          question: "Que lui conseiller ?",
          options: [
            "Rester allongé tout le week-end",
            "Profiter des arrêts pour marcher et faire 1 à 2 minutes de mouvements (fente des fléchisseurs de hanche, squat profond assisté, cercles de hanche), et une routine hanches de 10 minutes le soir avec ponts fessiers et position 90/90",
            "Ne plus jamais conduire",
          ],
          answer: 1,
          explain:
            "De courtes pauses de mouvement réparties dans la journée sont très efficaces contre les raideurs liées à la position assise prolongée.",
        },
        {
          type: "fiche",
          title: "Hanches",
          points: [
            "La position assise fige la hanche à 90° : <b>raideur</b> avant, rotations limitées.",
            "Avant : <b>fente des fléchisseurs</b>, fessier serré, sans cambrer.",
            "Rotations : <b>90/90</b>, <b>pigeon</b>, adducteurs, <b>squat profond</b> tenu.",
            "Renforcer : <b>CARs</b>, fentes profondes, squat bulgare, roumain une jambe, <b>pont fessier</b>.",
          ],
          retenir: "Des hanches libres soulagent souvent le bas du dos et les genoux.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "La colonne et le haut du dos",
      minutes: 15,
      objectives: ["Mobiliser la colonne dans toutes les directions", "Soulager nuque et haut du dos"],
      steps: [
        {
          type: "lesson",
          title: "Un dos qui bouge",
          slides: [
            {
              title: "Les trois zones du dos",
              body:
                "<ul><li><b>Cervicale</b> (nuque) : très mobile, sollicitée par les écrans et le téléphone.</li><li><b>Thoracique</b> (haut et milieu du dos) : elle porte les côtes, elle est faite pour <b>tourner</b> et s’étendre, mais se raidit souvent quand on est penché sur un écran.</li><li><b>Lombaire</b> (bas du dos) : plutôt faite pour la stabilité ; quand le haut du dos ou les hanches manquent de mobilité, elle compense.</li></ul>",
            },
            {
              title: "Les mouvements de base",
              body:
                "<ul><li><b>Chat-vache</b> : à quatre pattes, arrondir le dos puis le creuser, lentement, vertèbre par vertèbre (10 fois).</li><li><b>Livre ouvert</b> (open book) : allongé sur le côté, genoux pliés, ouvrir le bras du dessus vers l’arrière en suivant la main du regard (8-10 fois par côté) : rotation thoracique.</li><li><b>Rotation à quatre pattes</b> : une main derrière la tête, tourner le coude vers le plafond.</li><li><b>Extension sur une chaise</b> : assis, mains derrière la tête, s’étendre en arrière au-dessus du dossier.</li></ul>",
            },
            {
              title: "La nuque",
              body:
                "<ul><li><b>Rentrer le menton</b> (« double menton ») : glisser la tête vers l’arrière, 10 fois : contrebalance la tête projetée vers l’écran.</li><li><b>Rotations</b> et <b>inclinaisons</b> lentes de la tête, sans forcer.</li><li><b>Haussements d’épaules</b> et rotations d’épaules vers l’arrière.</li><li>Lever l’écran et le téléphone à hauteur des yeux réduit le temps passé tête penchée.</li></ul>",
            },
            {
              title: "Le mal de dos courant",
              body:
                "<ul><li>La plupart des douleurs du bas du dos sont <b>bénignes</b> et s’améliorent en quelques semaines.</li><li>Les recommandations actuelles conseillent de <b>rester actif</b> (marcher, bouger doucement) plutôt que le repos au lit.</li><li><b>Consulter rapidement</b> si : douleur après un traumatisme, fièvre, perte de poids inexpliquée, douleur qui descend sous le genou avec faiblesse ou engourdissement, troubles urinaires ou anesthésie de la zone du périnée (urgence).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Colonne thoracique", back: "Faite pour tourner et s’étendre ; se raidit devant les écrans" },
            { front: "Bas du dos", back: "Plutôt stabilisateur ; compense quand hanches et haut du dos sont raides" },
            { front: "Chat-vache", back: "Arrondir et creuser le dos à quatre pattes, lentement" },
            { front: "Livre ouvert", back: "Allongé sur le côté, ouvrir le bras vers l’arrière : rotation thoracique" },
            { front: "Rentrer le menton", back: "Glisser la tête vers l’arrière : contre la tête projetée vers l’écran" },
            { front: "Mal de dos banal", back: "Rester actif plutôt que repos au lit" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle partie de la colonne est faite pour tourner ?", options: ["Le bas du dos (lombaires)", "Le haut et le milieu du dos (thoracique)", "Aucune"], answer: 1, explain: "D’où l’importance de la mobiliser." },
            { q: "Un lumbago banal : que conseillent les recommandations ?", options: ["Repos strict au lit une semaine", "Rester actif et bouger doucement", "Courir un marathon"], answer: 1, explain: "Le mouvement accélère la récupération." },
            { q: "Douleur de dos avec engourdissement de la zone du périnée et troubles urinaires :", options: ["c’est banal", "c’est une urgence médicale", "il faut s’étirer"], answer: 1, explain: "Signe d’alerte nécessitant une prise en charge immédiate." },
            { q: "L’exercice « livre ouvert » travaille…", options: ["la rotation du haut du dos", "les mollets", "les poignets"], answer: 0, explain: "Rotation thoracique." },
          ],
        },
        {
          type: "case",
          title: "La nuque du télétravail",
          story:
            "Sofia travaille sur un ordinateur portable posé sur la table de la cuisine, tête penchée 8 heures par jour. En fin de journée, sa nuque et le haut de son dos sont douloureux.",
          question: "Que lui conseiller ?",
          options: [
            "Masser sa nuque une fois par semaine",
            "Surélever l’écran (support ou pile de livres + clavier séparé), se lever toutes les 30-60 minutes, et faire 3-4 minutes de mobilité (rentrer le menton, livre ouvert, chat-vache, rotations d’épaules) plusieurs fois par jour",
            "Travailler allongée dans son lit",
          ],
          answer: 1,
          explain:
            "Un écran à hauteur des yeux et des pauses de mouvement régulières réduisent beaucoup les tensions de la nuque.",
        },
        {
          type: "fiche",
          title: "Colonne",
          points: [
            "Nuque mobile, <b>thoracique faite pour tourner</b>, lombaires stabilisatrices.",
            "Exercices : <b>chat-vache</b>, <b>livre ouvert</b>, rotation à quatre pattes, extension sur chaise.",
            "Nuque : <b>rentrer le menton</b>, rotations lentes, écran à hauteur des yeux.",
            "Mal de dos banal : <b>rester actif</b> ; signes d’alerte (fièvre, déficit, troubles urinaires) : consulter.",
          ],
          retenir: "Un haut du dos mobile protège à la fois la nuque et le bas du dos.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Épaules et poignets",
      minutes: 15,
      objectives: ["Mobiliser et renforcer les épaules", "Prendre soin des poignets et des mains"],
      steps: [
        {
          type: "lesson",
          title: "Les bras en liberté",
          slides: [
            {
              title: "L’épaule, articulation la plus mobile",
              body:
                "<p>L’épaule est l’articulation la plus mobile du corps, mais aussi l’une des moins stables : sa santé dépend des petits muscles qui la contrôlent (la <b>coiffe des rotateurs</b>) et de l’omoplate.</p><p>Avec les bras devant soi toute la journée (clavier, volant, téléphone), on travaille surtout vers l’avant : il faut compenser vers l’arrière et le haut.</p>",
            },
            {
              title: "Mobilité des épaules",
              body:
                "<ul><li><b>Glissements au mur</b> (wall slides) : dos et avant-bras contre le mur, faire glisser les bras vers le haut et redescendre (10 fois).</li><li><b>Passages de bâton</b> : un bâton ou une serviette tenus large, passer les bras tendus de l’avant à l’arrière de la tête, en resserrant progressivement les mains.</li><li><b>Étirement des pectoraux</b> dans un cadre de porte : avant-bras sur le chambranle, avancer doucement (30-60 s).</li><li><b>CARs d’épaule</b> : grands cercles lents avec le bras tendu, le reste du corps immobile.</li></ul>",
            },
            {
              title: "Renforcer les épaules",
              body:
                "<ul><li><b>Rotations externes</b> avec un élastique, coude au corps.</li><li><b>Face pulls</b> à l’élastique (tirer vers le visage en écartant les mains).</li><li><b>Y-T-W</b> allongé sur le ventre.</li><li><b>Suspension</b> à une barre (si disponible) : 20 à 30 secondes, excellente pour l’amplitude et la santé des épaules.</li></ul>",
            },
            {
              title: "Poignets et mains",
              body:
                "<ul><li><b>Cercles de poignets</b> et ouverture-fermeture des mains (tous les jours, surtout avant les pompes).</li><li><b>Étirement des fléchisseurs</b> : à quatre pattes, doigts tournés vers les genoux, reculer doucement le bassin.</li><li><b>Étirement des extenseurs</b> : dos des mains au sol, doigts vers les genoux.</li><li>Au clavier : poignets <b>neutres</b> (ni cassés vers le haut ni vers le bas), avant-bras soutenus ; une souris adaptée si besoin.</li><li>Fourmillements dans les doigts la nuit (pouce, index, majeur) : en parler à un médecin.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Coiffe des rotateurs", back: "Petits muscles qui stabilisent l’épaule" },
            { front: "Glissements au mur", back: "Avant-bras contre le mur, monter et descendre les bras" },
            { front: "Passages de bâton", back: "Bras tendus de l’avant à l’arrière, mains de plus en plus rapprochées" },
            { front: "Pectoraux dans un cadre de porte", back: "Avant-bras sur le chambranle, avancer doucement" },
            { front: "Suspension à une barre", back: "20-30 s : amplitude et santé des épaules" },
            { front: "Poignets au clavier", back: "Neutres, avant-bras soutenus" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi l’épaule demande-t-elle un renforcement spécifique ?", options: ["Elle est très mobile mais peu stable", "Elle ne bouge pas", "Elle est entourée de grands os"], answer: 0, explain: "Sa stabilité dépend des muscles." },
            { q: "Avec un travail sur écran, on compense surtout…", options: ["vers l’avant", "vers l’arrière et le haut", "vers le bas"], answer: 1, explain: "Ouvrir la poitrine, renforcer l’arrière des épaules." },
            { q: "Avant une séance de pompes, il est utile de…", options: ["mobiliser les poignets", "étirer les mollets", "rien faire"], answer: 0, explain: "Les poignets supportent le poids du corps." },
            { q: "Fourmillements nocturnes dans le pouce, l’index et le majeur :", options: ["c’est normal", "en parler à un médecin", "faire plus de pompes"], answer: 1, explain: "Peut évoquer une compression d’un nerf au poignet." },
          ],
        },
        {
          type: "case",
          title: "Les épaules enroulées",
          story:
            "Karim travaille 9 heures par jour sur ordinateur et fait beaucoup de pompes le soir. Ses épaules sont enroulées vers l’avant et il ne peut pas lever les bras au mur sans cambrer.",
          question: "Que lui proposer ?",
          options: [
            "Plus de pompes pour ouvrir les épaules",
            "Étirer les pectoraux dans un cadre de porte, faire des glissements au mur et des passages de bâton, renforcer l’arrière (face pulls, rotations externes, Y-T-W) et équilibrer poussée et tirage",
            "Dormir sur le ventre",
          ],
          answer: 1,
          explain:
            "Ouvrir l’avant et renforcer l’arrière : c’est la combinaison qui améliore la position et la mobilité des épaules.",
        },
        {
          type: "fiche",
          title: "Épaules et poignets",
          points: [
            "Épaule : <b>très mobile, peu stable</b> ; compenser le travail « vers l’avant ».",
            "Mobilité : <b>glissements au mur</b>, <b>passages de bâton</b>, pectoraux au cadre de porte, <b>CARs</b>.",
            "Renforcement : <b>rotations externes</b>, <b>face pulls</b>, <b>Y-T-W</b>, <b>suspension</b>.",
            "Poignets : cercles, étirements, position <b>neutre</b> au clavier ; fourmillements nocturnes = médecin.",
          ],
          retenir: "Ouvre l’avant, renforce l’arrière : tes épaules te remercieront.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Les routines du quotidien",
      minutes: 15,
      objectives: ["Construire des routines de 5 à 10 minutes", "Intégrer la mobilité dans sa journée"],
      steps: [
        {
          type: "lesson",
          title: "5 minutes, plusieurs fois par jour",
          slides: [
            {
              title: "La routine du réveil (5 min)",
              body:
                "<ol><li>Chat-vache : 8 fois.</li><li>Cercles de hanche à quatre pattes : 5 par côté.</li><li>Fente des fléchisseurs de hanche : 30 s par côté.</li><li>Livre ouvert : 6 par côté.</li><li>Squat profond assisté : 30 à 60 s.</li><li>Rotations d’épaules et rentrer le menton : 10 fois.</li></ol><p>Avec une respiration lente : elle aide aussi à bien démarrer la journée.</p>",
            },
            {
              title: "Les pauses au bureau (2 min)",
              body:
                "<ul><li>Toutes les <b>30 à 60 minutes</b> : se lever, marcher quelques pas.</li><li>Debout : rotations du buste, cercles de bras, extension en arrière mains sur les hanches.</li><li>Assis : rentrer le menton, haussements d’épaules, rotation assise, cercles de poignets.</li><li>Astuces : téléphoner debout, prendre les escaliers, poser sa bouteille d’eau loin du bureau, régler un rappel discret.</li></ul>",
            },
            {
              title: "Avant le sport et le soir",
              body:
                "<ul><li><b>Avant le sport</b> (5-8 min) : mobilité <b>dynamique</b> ciblée sur la séance (chevilles et hanches avant la course, épaules et poignets avant les pompes), CARs, puis échauffement spécifique.</li><li><b>Le soir</b> (5-10 min) : étirements <b>statiques</b> doux sur les zones prioritaires (30-60 s), position 90/90, pigeon, pectoraux au cadre de porte, respiration lente. Cela peut aider à se détendre avant le coucher.</li></ul>",
            },
            {
              title: "Tenir dans la durée",
              body:
                "<ul><li><b>Accrocher</b> la routine à une habitude existante : après le café du matin, avant la douche, pendant un épisode de série.</li><li>Commencer petit : <b>2 minutes</b> par jour qu’on fait vraiment valent mieux qu’un plan de 30 minutes abandonné.</li><li>Refaire le <b>bilan</b> toutes les 4 à 6 semaines pour voir les progrès.</li><li>Varier : ajouter une séance de yoga ou de Pilates par semaine si l’on aime.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel moment pour quel exercice ?",
          instruction: "À quel moment placer chaque pratique ?",
          categories: ["Avant le sport (dynamique)", "Le soir (statique, détente)", "Pause au bureau"],
          items: [
            { text: "Genou au mur dynamique avant un footing", cat: 0, why: "Préparer la cheville." },
            { text: "Étirement du pigeon 60 s par côté avec respiration lente", cat: 1, why: "Statique, relâchement." },
            { text: "Se lever et faire 10 cercles de bras", cat: 2, why: "Casser l’immobilité." },
            { text: "CARs d’épaule avant les pompes", cat: 0, why: "Mobilité active ciblée." },
            { text: "Rentrer le menton 10 fois devant l’écran", cat: 2, why: "Contre la tête en avant." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Routine du réveil", back: "5 min : chat-vache, hanches, livre ouvert, squat profond, épaules" },
            { front: "Pause bureau", back: "Toutes les 30-60 min, 2 min de mouvement" },
            { front: "Avant le sport", back: "Mobilité dynamique ciblée sur la séance" },
            { front: "Le soir", back: "Étirements statiques doux et respiration lente" },
            { front: "Accrocher une habitude", back: "Faire la routine juste après une habitude existante" },
            { front: "Commencer petit", back: "2 minutes par jour réellement faites" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "À quelle fréquence se lever au bureau ?", options: ["Toutes les 30 à 60 minutes", "Une fois par jour", "Jamais"], answer: 0, explain: "Pour casser l’immobilité." },
            { q: "Avant une course, tu privilégies…", options: ["des étirements statiques longs", "une mobilité dynamique des chevilles et des hanches", "rien"], answer: 1, explain: "Préparer sans relâcher excessivement." },
            { q: "Quelle stratégie aide le plus à tenir une routine ?", options: ["L’accrocher à une habitude existante et commencer petit", "Prévoir 1 heure par jour dès le début", "Attendre d’avoir le temps"], answer: 0, explain: "La facilité favorise la régularité." },
            { q: "Les étirements statiques du soir servent surtout…", options: ["à gagner en amplitude et se détendre", "à sprinter plus vite le lendemain", "à rien"], answer: 0, explain: "Amplitude sur le long terme et relâchement." },
          ],
        },
        {
          type: "case",
          title: "La routine abandonnée",
          story:
            "Noa a téléchargé un programme de mobilité de 45 minutes par jour. Il le fait deux fois la première semaine, puis plus du tout.",
          question: "Que lui conseiller ?",
          options: [
            "Recommencer le même programme avec plus de volonté",
            "Une routine de 5 minutes accrochée au café du matin, plus des pauses de 2 minutes au bureau ; refaire le bilan dans 4 à 6 semaines, puis allonger si l’habitude est installée",
            "Abandonner la mobilité",
          ],
          answer: 1,
          explain:
            "Une petite routine quotidienne réellement faite produit plus de résultats qu’un programme ambitieux abandonné.",
        },
        {
          type: "fiche",
          title: "Routines",
          points: [
            "<b>Réveil</b> 5 min : chat-vache, hanches, fente, livre ouvert, squat profond, épaules.",
            "<b>Bureau</b> : se lever toutes les <b>30-60 min</b>, 2 min de mouvement.",
            "<b>Avant le sport</b> : dynamique ciblé ; <b>soir</b> : statique doux + respiration.",
            "Accrocher à une <b>habitude existante</b>, commencer par <b>2 min</b>, bilan toutes les 4-6 semaines.",
          ],
          retenir: "La mobilité ne demande pas de temps libre : elle se glisse dans les minutes que tu as déjà.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Travailler sur écran sans douleur",
      minutes: 15,
      objectives: ["Aménager son poste de travail", "Construire son plan de mobilité sur 4 semaines"],
      steps: [
        {
          type: "lesson",
          title: "Le poste de travail",
          slides: [
            {
              title: "Les réglages essentiels",
              body:
                "<table class='t'><tr><th>Élément</th><th>Réglage</th></tr><tr><td>Écran</td><td>Haut de l’écran environ à hauteur des yeux, à une longueur de bras</td></tr><tr><td>Siège</td><td>Pieds à plat au sol (ou sur un repose-pieds), cuisses à peu près horizontales</td></tr><tr><td>Clavier et souris</td><td>Proches, coudes près du corps, poignets neutres</td></tr><tr><td>Ordinateur portable</td><td>Sur un support, avec un clavier et une souris séparés</td></tr><tr><td>Lumière</td><td>Éviter les reflets : écran perpendiculaire aux fenêtres</td></tr></table><p>Ces réglages réduisent les contraintes, mais <b>bouger régulièrement</b> reste le plus important.</p>",
            },
            {
              title: "Alterner les positions",
              body:
                "<ul><li>Alterner <b>assis et debout</b> si possible (bureau réglable, ou tâches debout : téléphone, lecture).</li><li>Rester debout toute la journée n’est pas mieux que rester assis toute la journée : c’est l’<b>alternance</b> qui compte.</li><li>Réunions debout ou en marchant quand c’est possible.</li><li>Pour les yeux : la règle <b>20-20-20</b> (toutes les 20 minutes, regarder à environ 6 mètres pendant 20 secondes).</li></ul>",
            },
            {
              title: "Le plan de 4 semaines",
              body:
                "<table class='t'><tr><th>Semaine</th><th>Objectif</th></tr><tr><td>1</td><td>Faire le <b>bilan</b>, régler le poste, installer la routine du réveil (5 min) et 3 pauses de mouvement par jour</td></tr><tr><td>2</td><td>Ajouter la routine du soir (5 min) sur les <b>2 priorités</b> du bilan</td></tr><tr><td>3</td><td>Ajouter du <b>renforcement en amplitude</b> 2 fois par semaine (squat profond, fentes, glissements au mur, Y-T-W)</td></tr><tr><td>4</td><td>Consolider et refaire le <b>bilan</b> ; ajuster les priorités</td></tr></table>",
            },
            {
              title: "Quand consulter",
              body:
                "<ul><li>Une douleur qui <b>persiste</b> plus de quelques semaines malgré les pauses et les exercices.</li><li>Des <b>fourmillements</b>, un engourdissement ou une faiblesse dans un bras ou une jambe.</li><li>Une douleur qui <b>réveille la nuit</b> ou s’accompagne de fièvre ou de perte de poids.</li><li>Un kinésithérapeute peut proposer un bilan personnalisé ; en entreprise, la <b>médecine du travail</b> peut aussi conseiller l’aménagement du poste.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Hauteur de l’écran", back: "Haut de l’écran environ à hauteur des yeux, à une longueur de bras" },
            { front: "Ordinateur portable", back: "Support + clavier et souris séparés" },
            { front: "Assis ou debout ?", back: "Alterner : aucune position n’est bonne toute la journée" },
            { front: "Règle 20-20-20", back: "Toutes les 20 min, regarder à 6 m pendant 20 s" },
            { front: "Plan de 4 semaines", back: "Bilan et réveil → soir → renforcement → nouveau bilan" },
            { front: "Médecine du travail", back: "Peut conseiller l’aménagement du poste" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Où placer le haut de l’écran ?", options: ["Au niveau du nombril", "Environ à hauteur des yeux", "Au-dessus de la tête"], answer: 1, explain: "Pour garder la tête droite." },
            { q: "Un bureau debout utilisé toute la journée sans s’asseoir…", options: ["est la solution parfaite", "n’est pas mieux : c’est l’alternance qui compte", "est obligatoire"], answer: 1, explain: "Varier les positions." },
            { q: "La règle 20-20-20 concerne…", options: ["les yeux", "les genoux", "le sommeil"], answer: 0, explain: "Repos visuel régulier." },
            { q: "Engourdissement et faiblesse dans un bras malgré les exercices :", options: ["continuer seul", "consulter un professionnel", "ignorer"], answer: 1, explain: "Signe qui nécessite un avis médical." },
          ],
        },
        {
          type: "case",
          title: "Le bureau de Noa",
          story:
            "Noa travaille sur un ordinateur portable posé à plat sur son bureau, sur une chaise trop basse, de 9 h à 19 h presque sans se lever. Il a mal à la nuque et le dos raide le soir.",
          question: "Quel plan lui proposer ?",
          options: [
            "Acheter un fauteuil très cher et ne rien changer d’autre",
            "Surélever l’écran avec un support et utiliser clavier et souris séparés, régler la chaise (pieds à plat), se lever toutes les 30-60 min, faire la routine du réveil et du soir, et suivre le plan de 4 semaines avec un bilan au début et à la fin",
            "Travailler depuis son canapé",
          ],
          answer: 1,
          explain:
            "Le réglage du poste réduit les contraintes ; le mouvement régulier fait le reste. Les deux ensemble donnent les meilleurs résultats.",
        },
        {
          type: "fiche",
          title: "Écran et plan",
          points: [
            "Poste : écran à hauteur des yeux, <b>pieds à plat</b>, poignets neutres, <b>portable sur support</b> + clavier séparé.",
            "<b>Alterner</b> assis / debout ; règle <b>20-20-20</b> pour les yeux.",
            "Plan 4 semaines : <b>bilan + réveil</b> → <b>soir</b> → <b>renforcement</b> → <b>nouveau bilan</b>.",
            "Consulter si douleur persistante, <b>fourmillements</b>, faiblesse, douleur nocturne.",
          ],
          retenir: "Un poste bien réglé limite les contraintes ; bouger souvent fait disparaître la plupart des raideurs.",
        },
      ],
    },
  ],
});
