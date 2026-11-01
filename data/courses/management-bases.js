/* ============================================================
   COURS : Manager — les fondations
   École de Management · 8 séances de 15 à 20 minutes
   Pour un dirigeant de petite entreprise ou un premier
   manager : rôle, recrutement, intégration, objectifs,
   délégation, motivation et feedback, conflits, décision.
   Règles de droit du travail vérifiées au 1er novembre 2026
   (période d'essai : C. trav. L1221-19 et s. ; sanctions :
   L1332-1 et s. ; entretien de parcours professionnel :
   loi du 24 octobre 2025). À METTRE À JOUR si elles évoluent.
   ============================================================ */
AGORA.registerCourse({
  id: "management-bases",
  faculty: "management",
  title: "Manager — les fondations",
  subtitle: "Recruter, organiser, déléguer, motiver : diriger une petite équipe",
  color: "#2f7d5b",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour passer de « je fais tout moi-même » à « mon équipe avance sans moi » : le rôle du manager, recruter sans se tromper, intégrer un nouveau salarié, fixer des objectifs clairs, déléguer, motiver et faire des retours, gérer les conflits et les situations difficiles, décider et piloter avec quelques indicateurs. Avec les règles de droit du travail à connaître à chaque étape.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Le rôle du manager",
      minutes: 16,
      objectives: ["Comprendre ce que fait vraiment un manager", "Adapter son style à chaque personne et chaque situation"],
      steps: [
        {
          type: "lesson",
          title: "De « faire » à « faire faire »",
          slides: [
            {
              title: "Le grand changement",
              body:
                "<p>Quand on recrute son premier salarié, le métier change : on n’est plus jugé sur ce qu’on produit soi-même, mais sur <b>ce que l’équipe produit</b>.</p><p>Le piège le plus courant : rester le meilleur « exécutant » de l’entreprise, tout refaire soi-même, et devenir le goulot d’étranglement. L’entreprise ne peut alors pas grandir plus vite que l’agenda du dirigeant.</p>",
            },
            {
              title: "Les trois missions du manager",
              body:
                "<div class='tiers'><div><b>Donner le cap</b><span>Où va-t-on, pourquoi, et qu’est-ce qu’un bon résultat ? Objectifs et priorités.</span></div><div><b>Organiser</b><span>Qui fait quoi, avec quels moyens, à quel rythme ? Rôles, outils, rituels.</span></div><div><b>Faire grandir</b><span>Recruter, former, faire des retours, déléguer de plus en plus.</span></div></div><p>Tout le reste (réunions, tableaux, entretiens) n’est qu’un moyen au service de ces trois missions.</p>",
            },
            {
              title: "Le management situationnel",
              body:
                "<p>Il n’existe pas un bon style de management, mais un style adapté à <b>la personne et à la tâche</b> (modèle de Hersey et Blanchard) :</p><table class='t'><tr><th>La personne est…</th><th>Style</th><th>Concrètement</th></tr><tr><td>Débutante sur la tâche</td><td><b>Directif</b></td><td>Expliquer quoi faire, comment, contrôler souvent</td></tr><tr><td>En progrès, encore hésitante</td><td><b>Persuasif</b></td><td>Expliquer le pourquoi, encourager, corriger</td></tr><tr><td>Compétente mais peu sûre d’elle</td><td><b>Participatif</b></td><td>Décider ensemble, écouter, soutenir</td></tr><tr><td>Compétente et motivée</td><td><b>Délégatif</b></td><td>Fixer l’objectif, laisser faire, faire le point</td></tr></table>",
            },
            {
              title: "Les erreurs classiques du nouveau manager",
              body:
                "<ul><li><b>Le micro-management</b> : tout vérifier, tout corriger. L’équipe cesse de prendre des initiatives.</li><li><b>Le « laisser-faire »</b> : déléguer sans objectif ni point d’étape, puis découvrir les problèmes trop tard.</li><li><b>Vouloir être aimé</b> : éviter les recadrages, ce qui est injuste pour ceux qui travaillent bien.</li><li><b>Ne pas dégager de temps</b> pour manager : le management est un travail à part entière, pas ce qu’on fait « quand on a le temps ».</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel style adopter ?",
          instruction: "Associe chaque situation au style de management le plus adapté.",
          categories: ["Directif", "Participatif", "Délégatif"],
          items: [
            { text: "Un nouveau préparateur de commandes, premier jour", cat: 0, why: "Débutant : on montre et on contrôle." },
            { text: "Une commerciale expérimentée qui gère ses clients depuis 3 ans", cat: 2, why: "Compétente et autonome." },
            { text: "Un salarié compétent qui doute avant de lancer un nouveau process", cat: 1, why: "Il sait faire, il a besoin de soutien." },
            { text: "Une urgence de sécurité dans l’entrepôt", cat: 0, why: "L’urgence impose des consignes claires." },
            { text: "Un associé qui pilote seul la relation client depuis un an", cat: 2, why: "On fixe le cap et on fait le point." },
            { text: "Choisir avec l’équipe la nouvelle organisation des horaires", cat: 1, why: "Ceux qui vivent la décision y participent." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Le changement de métier", back: "Être jugé sur ce que l’équipe produit, pas sur ce que l’on produit soi-même" },
            { front: "Les 3 missions", back: "Donner le cap, organiser, faire grandir" },
            { front: "Style directif", back: "Pour un débutant : quoi, comment, contrôle fréquent" },
            { front: "Style délégatif", back: "Pour une personne compétente et motivée : objectif, autonomie, point d’étape" },
            { front: "Micro-management", back: "Tout vérifier et tout corriger : tue l’initiative" },
            { front: "Le goulot d’étranglement", back: "Le dirigeant qui fait tout lui-même et bloque la croissance" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Selon le management situationnel, le bon style dépend…", options: ["de la personnalité du manager", "de la personne et de la tâche", "de la taille de l’entreprise"], answer: 1, explain: "Le même salarié peut être autonome sur une tâche et débutant sur une autre." },
            { q: "Quelle est la mission « faire grandir » ?", options: ["Augmenter le chiffre d’affaires", "Recruter, former, faire des retours, déléguer", "Ouvrir de nouveaux locaux"], answer: 1, explain: "Faire grandir l’équipe pour qu’elle porte plus de responsabilités." },
            { q: "Déléguer sans objectif ni point d’étape, c’est…", options: ["du management délégatif", "du laisser-faire", "du management participatif"], answer: 1, explain: "Déléguer, c’est fixer un objectif et un rythme de suivi." },
            { q: "Pourquoi éviter un recadrage nécessaire est-il une erreur ?", options: ["C’est illégal", "C’est injuste pour ceux qui travaillent bien, et le problème grossit", "Ce n’est pas une erreur"], answer: 1, explain: "Ne rien dire, c’est accepter." },
          ],
        },
        {
          type: "case",
          title: "Le premier salarié",
          story:
            "Noa vient d’embaucher Léa pour préparer les commandes. Trois semaines plus tard, il refait encore lui-même la moitié des colis « parce que c’est plus rapide ». Léa s’ennuie, Noa travaille jusqu’à 22 h.",
          question: "Que doit-il faire en priorité ?",
          options: [
            "Continuer : il fait mieux et plus vite",
            "Passer en style directif puis persuasif : écrire la procédure, montrer, laisser Léa faire et corriger, avec un point court chaque jour, pour la rendre autonome en quelques semaines",
            "Licencier Léa et faire seul",
          ],
          answer: 1,
          explain:
            "Faire à la place, c’est payer deux fois le même travail et empêcher la personne d’apprendre. Le temps investi à former au début est vite rentabilisé.",
        },
        {
          type: "fiche",
          title: "Le rôle du manager",
          points: [
            "On est jugé sur <b>ce que l’équipe produit</b>, plus sur ce que l’on fait soi-même.",
            "3 missions : <b>donner le cap</b>, <b>organiser</b>, <b>faire grandir</b>.",
            "Management <b>situationnel</b> : directif, persuasif, participatif, délégatif selon la personne et la tâche.",
            "Pièges : <b>micro-management</b>, <b>laisser-faire</b>, éviter les recadrages, ne pas réserver de temps au management.",
          ],
          retenir: "Ton travail n’est plus de faire, mais de faire en sorte que ça se fasse bien sans toi.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Recruter sans se tromper",
      minutes: 18,
      objectives: ["Définir le besoin et mener un entretien structuré", "Respecter les règles légales du recrutement"],
      steps: [
        {
          type: "lesson",
          title: "Un recrutement se prépare",
          slides: [
            {
              title: "D’abord, définir le besoin",
              body:
                "<p>Avant de publier une annonce, écris une <b>fiche de poste</b> :</p><ul><li>les <b>missions</b> concrètes (ce que la personne fera chaque semaine) ;</li><li>les <b>compétences indispensables</b> (3 à 5 maximum) et celles qui sont un plus ;</li><li>les <b>résultats attendus</b> à 3 mois et à 1 an ;</li><li>le contrat, le salaire, les horaires, le lieu.</li></ul><p>Recruter « quelqu’un de motivé pour aider un peu partout » mène presque toujours à une déception des deux côtés.</p>",
            },
            {
              title: "L’entretien structuré",
              body:
                "<ul><li>Pose <b>les mêmes questions</b> à tous les candidats, pour pouvoir les comparer.</li><li>Privilégie les <b>questions comportementales</b> : « Racontez-moi une fois où… ». Le candidat répond avec la méthode <b>STAR</b> : Situation, Tâche, Action, Résultat.</li><li>Ajoute une <b>mise en situation</b> : préparer une commande test, rédiger un mail client, appeler un prospect.</li><li>Note chaque candidat sur une <b>grille</b> juste après l’entretien.</li><li>Demande des <b>références</b> (avec l’accord du candidat).</li></ul><p>Les études montrent que l’entretien structuré prédit beaucoup mieux la réussite que l’entretien « au feeling ».</p>",
            },
            {
              title: "Ce que la loi interdit",
              body:
                "<p>Il est interdit d’écarter un candidat en raison de l’un des <b>plus de 25 critères de discrimination</b> fixés par la loi : origine, sexe, âge, situation de famille, grossesse, religion, apparence physique, lieu de résidence, état de santé, handicap, orientation sexuelle, opinions politiques, activités syndicales, etc.</p><p>Les questions doivent avoir un <b>lien direct avec le poste</b> : « Avez-vous des enfants ? », « Comptez-vous en avoir ? » ou « Quelle est votre religion ? » sont interdites. La discrimination à l’embauche est un délit pénal.</p>",
            },
            {
              title: "L’embauche : les formalités",
              body:
                "<ul><li><b>DPAE</b> (déclaration préalable à l’embauche) à l’URSSAF, <b>avant</b> la prise de poste.</li><li>Un <b>contrat écrit</b> (obligatoire pour un CDD ou un temps partiel ; fortement conseillé pour un CDI).</li><li><b>Période d’essai</b> en CDI, si elle est prévue au contrat : 2 mois maximum pour les ouvriers et employés, 3 mois pour les agents de maîtrise et techniciens, 4 mois pour les cadres ; renouvelable une fois seulement si un accord de branche le permet et si le contrat le prévoit.</li><li>Inscription au registre du personnel, mutuelle d’entreprise, visite d’information et de prévention auprès de la médecine du travail.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Question autorisée ou interdite ?",
          instruction: "En entretien d’embauche, peut-on poser cette question ?",
          categories: ["Autorisée (liée au poste)", "Interdite"],
          items: [
            { text: "« Racontez-moi une fois où vous avez géré un client mécontent. »", cat: 0, why: "Question comportementale liée au poste." },
            { text: "« Avez-vous des enfants ? »", cat: 1, why: "Situation de famille : critère discriminatoire." },
            { text: "« Avez-vous le permis B ? » (poste avec livraisons)", cat: 0, why: "Lien direct avec le poste." },
            { text: "« Quelle est votre religion ? »", cat: 1, why: "Critère discriminatoire." },
            { text: "« Êtes-vous enceinte ? »", cat: 1, why: "Interdit ; la candidate n’a même pas à répondre." },
            { text: "« Quelles sont vos disponibilités pour commencer ? »", cat: 0, why: "Question légitime." },
            { text: "« Où habitez-vous exactement, dans quel quartier ? »", cat: 1, why: "Le lieu de résidence est un critère protégé ; on peut parler du temps de trajet." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fiche de poste", back: "Missions, 3 à 5 compétences indispensables, résultats attendus, conditions" },
            { front: "Entretien structuré", back: "Mêmes questions pour tous, grille de notation, mise en situation" },
            { front: "Méthode STAR", back: "Situation, Tâche, Action, Résultat" },
            { front: "DPAE", back: "Déclaration préalable à l’embauche, à faire avant la prise de poste" },
            { front: "Période d’essai CDI (max.)", back: "2 mois ouvriers/employés, 3 mois agents de maîtrise/techniciens, 4 mois cadres" },
            { front: "Discrimination à l’embauche", back: "Plus de 25 critères interdits ; c’est un délit pénal" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle méthode prédit le mieux la réussite d’un candidat ?", options: ["L’entretien libre « au feeling »", "L’entretien structuré avec mise en situation", "La lecture du CV seul"], answer: 1, explain: "Les mêmes questions et une mise en situation permettent de comparer objectivement." },
            { q: "La DPAE doit être faite…", options: ["dans le mois qui suit l’embauche", "avant la prise de poste", "à la fin de la période d’essai"], answer: 1, explain: "Elle est préalable, sinon c’est du travail dissimulé." },
            { q: "Durée maximale de la période d’essai initiale d’un employé en CDI :", options: ["1 mois", "2 mois", "6 mois"], answer: 1, explain: "2 mois pour les ouvriers et employés." },
            { q: "« Racontez-moi une fois où… » est une question…", options: ["comportementale", "interdite", "inutile"], answer: 0, explain: "Le passé est le meilleur indicateur du comportement futur." },
          ],
        },
        {
          type: "case",
          title: "Le coup de cœur",
          story:
            "Pour un poste de commercial, Hugo reçoit un candidat très sympathique, avec qui il parle foot pendant 40 minutes. Il l’embauche le jour même. Deux mois plus tard, le commercial n’a signé aucun client : il n’aime pas téléphoner.",
          question: "Qu’est-ce qui aurait évité cette erreur ?",
          options: [
            "Rien, c’est la malchance",
            "Une fiche de poste claire (prospection téléphonique), des questions comportementales et une mise en situation : un appel de prospection simulé pendant l’entretien",
            "Recruter uniquement des amis",
          ],
          answer: 1,
          explain:
            "La sympathie n’est pas une compétence. Une simple mise en situation de 10 minutes aurait révélé que le candidat n’était pas à l’aise au téléphone. La période d’essai permet de corriger, mais coûte du temps et de l’argent.",
        },
        {
          type: "fiche",
          title: "Recruter",
          points: [
            "Commencer par la <b>fiche de poste</b> : missions, compétences clés, résultats attendus.",
            "<b>Entretien structuré</b> : mêmes questions, <b>STAR</b>, mise en situation, grille, références.",
            "Interdit : écarter un candidat pour l’un des <b>25+ critères de discrimination</b> ; questions sans lien avec le poste.",
            "Formalités : <b>DPAE avant</b> la prise de poste, contrat écrit, <b>période d’essai</b> 2 / 3 / 4 mois max. en CDI.",
          ],
          retenir: "Recrute sur des preuves (ce que la personne a fait et sait faire), pas sur une impression.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Intégrer un nouveau salarié",
      minutes: 15,
      objectives: ["Organiser les premiers jours et les premières semaines", "Utiliser la période d’essai à bon escient"],
      steps: [
        {
          type: "lesson",
          title: "L’onboarding",
          slides: [
            {
              title: "Pourquoi l’intégration compte",
              body:
                "<p>Une grande partie des départs volontaires a lieu dans les <b>premiers mois</b>. Un salarié mal accueilli (pas de poste prêt, pas de consignes, personne pour répondre) se fait vite une idée de l’entreprise.</p><p>Bien intégrer coûte quelques heures ; rater une intégration coûte un recrutement entier.</p>",
            },
            {
              title: "Avant et pendant le premier jour",
              body:
                "<ul><li><b>Avant</b> : poste de travail, accès, matériel, tenue prêts ; message de bienvenue avec l’horaire et la personne à demander.</li><li><b>Premier jour</b> : accueil par le manager, tour des locaux, présentation de l’équipe, consignes de sécurité, première tâche simple et utile.</li><li>Un <b>référent</b> (ou parrain) : un collègue à qui poser les « petites » questions sans gêne.</li></ul>",
            },
            {
              title: "Le plan 30 / 60 / 90 jours",
              body:
                "<table class='t'><tr><th>Étape</th><th>Objectif</th><th>Exemple (préparateur de commandes)</th></tr><tr><td>30 jours</td><td>Apprendre</td><td>Maîtriser la procédure, préparer 50 commandes / jour avec contrôle</td></tr><tr><td>60 jours</td><td>Contribuer</td><td>80 commandes / jour, moins de 1 % d’erreurs, sans contrôle systématique</td></tr><tr><td>90 jours</td><td>Être autonome</td><td>Gérer les réceptions de stock et proposer une amélioration</td></tr></table><p>Ce plan donne des repères au salarié et des critères objectifs pour la fin de la période d’essai.</p>",
            },
            {
              title: "Les points de suivi",
              body:
                "<ul><li>Un point <b>court chaque jour</b> la première semaine, puis <b>chaque semaine</b>.</li><li>Un <b>bilan formel</b> avant la fin de la période d’essai : ce qui va, ce qui doit progresser, décision.</li><li>Rupture de la période d’essai : possible sans motif à donner, mais en respectant un <b>délai de prévenance</b> (de 24 heures à 1 mois selon l’ancienneté) et jamais pour un motif discriminatoire.</li><li>Rappel : le premier <b>entretien de parcours professionnel</b> doit avoir lieu au cours de la <b>première année</b> (loi du 24 octobre 2025).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Onboarding", back: "L’intégration organisée d’un nouveau salarié" },
            { front: "Référent / parrain", back: "Un collègue désigné pour les questions du quotidien" },
            { front: "Plan 30 / 60 / 90", back: "Apprendre, contribuer, être autonome : des objectifs par étape" },
            { front: "Bilan de fin d’essai", back: "Point formel avant la fin de la période d’essai, basé sur des critères objectifs" },
            { front: "Délai de prévenance", back: "Préavis à respecter pour rompre la période d’essai (24 h à 1 mois)" },
            { front: "1er entretien de parcours professionnel", back: "Au cours de la première année suivant l’embauche" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi soigner l’intégration ?", options: ["C’est une obligation légale détaillée", "Beaucoup de départs ont lieu dans les premiers mois", "Pour remplir l’agenda"], answer: 1, explain: "Une mauvaise première impression coûte un recrutement." },
            { q: "À quoi sert le plan 30 / 60 / 90 jours ?", options: ["À fixer le salaire", "À donner des repères et des critères objectifs pour la fin d’essai", "À planifier les congés"], answer: 1, explain: "Le salarié sait ce qu’on attend de lui, étape par étape." },
            { q: "Pour rompre une période d’essai, l’employeur doit…", options: ["donner un motif écrit détaillé", "respecter un délai de prévenance, sans motif discriminatoire", "verser une indemnité de licenciement"], answer: 1, explain: "Pas besoin de motiver, mais le délai de prévenance s’applique." },
            { q: "Quand a lieu le premier entretien de parcours professionnel ?", options: ["Après 2 ans", "Au cours de la première année", "Jamais pour les TPE"], answer: 1, explain: "Depuis la loi du 24 octobre 2025, puis tous les 4 ans." },
          ],
        },
        {
          type: "case",
          title: "Le premier lundi",
          story:
            "Sarah commence lundi à 9 h. Personne ne l’attend, son ordinateur n’est pas commandé et le manager est en rendez-vous jusqu’à midi. Elle passe la matinée à lire le site internet de l’entreprise. Le jeudi, elle annonce qu’elle a accepté une autre offre.",
          question: "Quelle était la bonne préparation ?",
          options: [
            "Rien : un salarié motivé se débrouille",
            "Préparer poste et accès à l’avance, bloquer la matinée pour l’accueillir, prévoir un référent, une première tâche utile et un plan 30 / 60 / 90",
            "Lui demander de commencer à distance",
          ],
          answer: 1,
          explain:
            "Le premier jour est un message : « on t’attendait » ou « tu déranges ». Quelques heures de préparation évitent de perdre un recrutement entier.",
        },
        {
          type: "fiche",
          title: "Intégrer",
          points: [
            "Préparer <b>avant</b> l’arrivée : poste, accès, matériel, message de bienvenue.",
            "Premier jour : accueil par le manager, sécurité, équipe, <b>référent</b>, première tâche utile.",
            "<b>Plan 30 / 60 / 90 jours</b> : apprendre, contribuer, être autonome.",
            "Points de suivi, <b>bilan avant la fin de l’essai</b> ; rupture avec <b>délai de prévenance</b> ; 1er <b>entretien de parcours professionnel</b> dans l’année.",
          ],
          retenir: "Le recrutement ne se termine pas à la signature : il se termine quand la personne est autonome.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Fixer des objectifs et organiser",
      minutes: 17,
      objectives: ["Formuler des objectifs clairs", "Organiser rôles, priorités et rituels d’équipe"],
      steps: [
        {
          type: "lesson",
          title: "Le cap et l’organisation",
          slides: [
            {
              title: "Des objectifs SMART",
              body:
                "<p>Un bon objectif est :</p><table class='t'><tr><th>Lettre</th><th>Sens</th></tr><tr><td><b>S</b></td><td>Spécifique : précis, sans ambiguïté</td></tr><tr><td><b>M</b></td><td>Mesurable : un chiffre ou un critère vérifiable</td></tr><tr><td><b>A</b></td><td>Atteignable : ambitieux mais réaliste</td></tr><tr><td><b>R</b></td><td>Réaliste et pertinent : utile pour l’entreprise</td></tr><tr><td><b>T</b></td><td>Temporel : avec une échéance</td></tr></table><p>« Améliorer le service client » n’est pas un objectif. « Répondre à 100 % des messages clients en moins de 24 h d’ici le 31 mars » en est un.</p>",
            },
            {
              title: "Prioriser : la matrice d’Eisenhower",
              body:
                "<table class='t'><tr><th></th><th>Urgent</th><th>Pas urgent</th></tr><tr><td><b>Important</b></td><td>Faire tout de suite (une crise, un client bloqué)</td><td><b>Planifier</b> : le cœur du travail du dirigeant (recruter, former, stratégie)</td></tr><tr><td><b>Pas important</b></td><td>Déléguer</td><td>Abandonner</td></tr></table><p>Le piège : passer ses journées dans « urgent » et ne jamais traiter « important mais pas urgent », là où se construit l’entreprise.</p>",
            },
            {
              title: "Clarifier qui fait quoi",
              body:
                "<p>Beaucoup de tensions viennent de rôles flous. La méthode <b>RACI</b> attribue, pour chaque tâche :</p><ul><li><b>R</b>éalise : la personne qui fait ;</li><li><b>A</b>pprouve : <b>une seule</b> personne qui décide et rend des comptes ;</li><li><b>C</b>onsulté : on lui demande son avis avant ;</li><li><b>I</b>nformé : on la prévient après.</li></ul><p>Entre associés, c’est particulièrement utile : « qui a le dernier mot sur les prix ? sur les recrutements ? sur la publicité ? »</p>",
            },
            {
              title: "Les rituels d’équipe",
              body:
                "<ul><li><b>Point d’équipe hebdomadaire</b> (30 min max.) : résultats de la semaine, priorités de la suivante, blocages.</li><li><b>Point individuel</b> (one-to-one) régulier, 15 à 30 min : c’est le temps du salarié (ses difficultés, ses idées, son évolution).</li><li><b>Point quotidien</b> de 10 minutes debout si l’activité est très opérationnelle.</li></ul><p>Un rituel court et régulier vaut mieux qu’une longue réunion improvisée.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "SMART ou pas ?",
          instruction: "Cet objectif est-il SMART ?",
          categories: ["SMART", "Trop flou"],
          items: [
            { text: "Augmenter les ventes", cat: 1, why: "Ni chiffre, ni échéance." },
            { text: "Signer 10 nouveaux clients professionnels d’ici fin juin", cat: 0, why: "Précis, mesurable, daté." },
            { text: "Être plus réactif", cat: 1, why: "Comment le mesurer ?" },
            { text: "Expédier 98 % des commandes en 24 h au 1er trimestre", cat: 0, why: "Chiffré et daté." },
            { text: "Faire de notre mieux sur Instagram", cat: 1, why: "Aucun critère." },
            { text: "Réduire les retours produit à moins de 3 % d’ici septembre", cat: 0, why: "Mesurable et daté." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "SMART", back: "Spécifique, Mesurable, Atteignable, Réaliste, Temporel" },
            { front: "Important mais pas urgent", back: "À planifier : c’est là que se construit l’entreprise" },
            { front: "Urgent mais pas important", back: "À déléguer" },
            { front: "RACI", back: "Réalise, Approuve (une seule personne), Consulté, Informé" },
            { front: "Point hebdomadaire", back: "30 min : résultats, priorités, blocages" },
            { front: "One-to-one", back: "Point individuel régulier : le temps du salarié" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel objectif est SMART ?", options: ["Améliorer la qualité", "Passer le taux d’erreur de colis sous 1 % d’ici le 30 juin", "Faire mieux que l’an dernier"], answer: 1, explain: "Chiffré, précis, daté." },
            { q: "Dans RACI, combien de personnes « approuvent » une tâche ?", options: ["Une seule", "Toute l’équipe", "Au moins deux"], answer: 0, explain: "Une seule personne a le dernier mot, sinon personne ne l’a." },
            { q: "Où le dirigeant devrait-il passer plus de temps ?", options: ["Urgent et pas important", "Important et pas urgent", "Ni urgent ni important"], answer: 1, explain: "Recruter, former, améliorer, préparer." },
            { q: "À quoi sert le point individuel (one-to-one) ?", options: ["À contrôler les horaires", "À donner du temps au salarié : difficultés, idées, évolution", "À remplacer la réunion d’équipe"], answer: 1, explain: "C’est le moment de la relation individuelle." },
          ],
        },
        {
          type: "case",
          title: "Les deux associés",
          story:
            "Noa et son associé changent chacun les prix de la boutique selon leur intuition. Les salariés ne savent plus lequel des deux écouter, et un client a reçu deux devis différents la même semaine.",
          question: "Quelle est la meilleure solution ?",
          options: [
            "Se disputer jusqu’à ce que l’un cède",
            "Faire un RACI des grandes décisions (prix, recrutement, publicité, achats) : une seule personne « approuve » chaque sujet, l’autre est consultée, et l’équipe est informée",
            "Laisser les salariés choisir",
          ],
          answer: 1,
          explain:
            "Être associés ne veut pas dire décider de tout à deux. Répartir clairement le dernier mot par domaine évite les doublons et rassure l’équipe.",
        },
        {
          type: "fiche",
          title: "Objectifs et organisation",
          points: [
            "Objectifs <b>SMART</b> : spécifiques, mesurables, atteignables, réalistes, datés.",
            "<b>Eisenhower</b> : faire, planifier, déléguer, abandonner ; protéger « important mais pas urgent ».",
            "<b>RACI</b> : une seule personne approuve chaque sujet ; utile entre associés.",
            "Rituels : <b>point hebdomadaire</b> court, <b>one-to-one</b> régulier, point quotidien si besoin.",
          ],
          retenir: "Une équipe ne peut atteindre un objectif que si elle sait exactement lequel, et qui décide.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Déléguer",
      minutes: 16,
      objectives: ["Choisir quoi déléguer et à qui", "Déléguer avec le bon niveau d’autonomie et de contrôle"],
      steps: [
        {
          type: "lesson",
          title: "L’art de déléguer",
          slides: [
            {
              title: "Pourquoi on ne délègue pas",
              body:
                "<ul><li>« Je vais plus vite seul. » (Vrai la première fois, faux la dixième.)</li><li>« Personne ne le fera aussi bien. » (À 80 %, c’est souvent suffisant.)</li><li>« Je n’ai pas le temps d’expliquer. » (Donc on n’aura jamais le temps.)</li><li>La peur de perdre le contrôle ou d’être moins indispensable.</li></ul><p>Règle simple : si une tâche revient souvent et qu’une autre personne peut l’apprendre, elle doit être déléguée.</p>",
            },
            {
              title: "Les 5 niveaux de délégation",
              body:
                "<table class='t'><tr><th>Niveau</th><th>Consigne</th></tr><tr><td>1</td><td>« Fais exactement ce que je te dis. »</td></tr><tr><td>2</td><td>« Étudie la question et fais-moi un point ; je décide. »</td></tr><tr><td>3</td><td>« Propose-moi une solution ; je valide. »</td></tr><tr><td>4</td><td>« Décide, et informe-moi de ce que tu as fait. »</td></tr><tr><td>5</td><td>« Décide et agis ; on fait le point régulièrement. »</td></tr></table><p>Dire clairement le niveau évite le classique : « Pourquoi tu as fait ça sans me demander ? » / « Mais tu m’avais dit de m’en occuper ! »</p>",
            },
            {
              title: "Une délégation complète",
              body:
                "<p>Pour déléguer, précise :</p><ol><li>le <b>résultat attendu</b> (pas seulement la tâche) ;</li><li>l’<b>échéance</b> ;</li><li>les <b>moyens</b> : budget, outils, personnes à solliciter ;</li><li>le <b>niveau d’autonomie</b> (1 à 5) ;</li><li>les <b>points d’étape</b>.</li></ol><p>Puis fais reformuler : « Qu’est-ce que tu vas faire en premier ? »</p>",
            },
            {
              title: "Le singe sur l’épaule",
              body:
                "<p>Une image célèbre (William Oncken) : chaque problème est un <b>singe</b>. Quand un salarié vient dire « on a un problème » et que le manager répond « laisse-moi y réfléchir », le singe vient de <b>changer d’épaule</b>.</p><p>La bonne réponse : « Qu’est-ce que tu proposes ? » Le salarié repart avec son singe et une solution à construire. Sinon, le manager finit sa journée couvert de singes, et l’équipe attend.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel niveau de délégation ?",
          instruction: "Quel niveau correspond à chaque consigne ?",
          categories: ["Niveau 1-2 (je décide)", "Niveau 3 (je valide)", "Niveau 4-5 (tu décides)"],
          items: [
            { text: "« Compare trois transporteurs et présente-moi le résultat. »", cat: 0, why: "Étude, le manager décide." },
            { text: "« Choisis le fournisseur d’emballages, tiens-moi au courant. »", cat: 2, why: "Il décide et informe." },
            { text: "« Prépare la campagne et montre-la-moi avant de lancer. »", cat: 1, why: "Il propose, le manager valide." },
            { text: "« Emballe ces colis exactement comme sur la fiche. »", cat: 0, why: "Exécution." },
            { text: "« Gère les petits remboursements clients jusqu’à 50 € comme tu le juges. »", cat: 2, why: "Autonomie dans un cadre." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Déléguer un résultat", back: "Pas seulement une tâche : ce qu’on attend, pour quand, avec quels moyens" },
            { front: "Niveau 3", back: "« Propose-moi une solution, je valide »" },
            { front: "Niveau 5", back: "« Décide et agis, on fait le point régulièrement »" },
            { front: "Faire reformuler", back: "« Qu’est-ce que tu vas faire en premier ? »" },
            { front: "Le singe (Oncken)", back: "Un problème qui change d’épaule quand le manager dit « je m’en occupe »" },
            { front: "« Qu’est-ce que tu proposes ? »", back: "La question qui laisse le singe sur la bonne épaule" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un salarié dit : « Il y a un problème avec le fournisseur. » Meilleure réponse ?", options: ["« Laisse, je m’en occupe. »", "« Qu’est-ce que tu proposes ? »", "« Ce n’est pas mon problème. »"], answer: 1, explain: "Le salarié garde la responsabilité et progresse." },
            { q: "Quel élément manque souvent dans une délégation ratée ?", options: ["Le niveau d’autonomie et les points d’étape", "Le nom de la tâche", "Les félicitations"], answer: 0, explain: "Sans eux, chacun imagine des règles différentes." },
            { q: "« Décide, puis informe-moi » correspond au niveau…", options: ["1", "3", "4"], answer: 2, explain: "Niveau 4." },
            { q: "Quelle tâche déléguer en priorité ?", options: ["Une tâche fréquente qu’une autre personne peut apprendre", "La définition de la stratégie", "Le recrutement de son associé"], answer: 0, explain: "C’est là que le gain de temps est le plus fort." },
          ],
        },
        {
          type: "case",
          title: "La délégation floue",
          story:
            "Noa dit à Karim : « Occupe-toi des réseaux sociaux. » Karim publie trois vidéos humoristiques. Noa les trouve hors sujet, les supprime et reprend les réseaux lui-même. Karim est vexé.",
          question: "Qu’aurait dû préciser Noa ?",
          options: [
            "Rien : Karim aurait dû deviner",
            "Le résultat attendu (ex. 3 posts produits par semaine, ton de la marque), l’échéance, les moyens, le niveau 3 au début (« montre-moi avant de publier ») puis un passage au niveau 4 quand la confiance est là",
            "Qu’il ne faut jamais faire d’humour",
          ],
          answer: 1,
          explain:
            "Une délégation floue produit presque toujours une déception. Commencer à un niveau d’autonomie plus bas, puis l’augmenter, permet de construire la confiance des deux côtés.",
        },
        {
          type: "fiche",
          title: "Déléguer",
          points: [
            "Déléguer en priorité les tâches <b>fréquentes</b> qu’un autre peut apprendre ; viser 80 % de qualité au début.",
            "<b>5 niveaux</b> : exécuter, étudier, proposer, décider et informer, décider et agir.",
            "Délégation complète : <b>résultat</b>, <b>échéance</b>, <b>moyens</b>, <b>niveau</b>, <b>points d’étape</b> ; faire reformuler.",
            "<b>Le singe</b> : répondre « Qu’est-ce que tu proposes ? » au lieu de « je m’en occupe ».",
          ],
          retenir: "Déléguer, ce n’est pas se débarrasser d’une tâche : c’est transférer une responsabilité, avec un cadre.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Motiver et faire des retours",
      minutes: 17,
      objectives: ["Comprendre ce qui motive vraiment", "Donner un feedback utile, positif comme correctif"],
      steps: [
        {
          type: "lesson",
          title: "Motivation et feedback",
          slides: [
            {
              title: "Ce qui motive (et ce qui démotive)",
              body:
                "<p>Le psychologue Frederick Herzberg distingue deux familles :</p><ul><li>Les <b>facteurs d’hygiène</b> : salaire, conditions de travail, horaires, ambiance. S’ils sont mauvais, ils <b>démotivent</b> ; s’ils sont bons, ils ne suffisent pas à motiver.</li><li>Les <b>facteurs de motivation</b> : la réussite, la reconnaissance, l’intérêt du travail, les responsabilités, la progression.</li></ul><p>Les recherches sur la motivation (Deci et Ryan, popularisées par Daniel Pink) ajoutent trois besoins : <b>autonomie</b>, <b>maîtrise</b> (progresser) et <b>sens</b> (savoir à quoi sert son travail).</p>",
            },
            {
              title: "La reconnaissance",
              body:
                "<ul><li>Elle doit être <b>précise</b> : « Ton idée de regrouper les colis par transporteur nous fait gagner 30 minutes par jour » vaut mieux que « Bravo, super boulot ».</li><li>Elle doit être <b>rapide</b> : dire les choses le jour même.</li><li>Elle peut être <b>publique</b> (en réunion) pour une réussite d’équipe, et <b>individuelle</b> pour un effort personnel.</li></ul><p>Un bon équilibre : beaucoup plus de retours positifs que de retours correctifs, mais jamais d’éloges creux.</p>",
            },
            {
              title: "Le feedback SCI",
              body:
                "<p>Pour un retour clair et non blessant, la méthode <b>SCI</b> (Situation, Comportement, Impact) :</p><ul><li><b>Situation</b> : « Ce matin, pendant l’appel avec le client Dupont… »</li><li><b>Comportement</b> (un fait observable, pas un jugement) : « … tu lui as coupé la parole trois fois… »</li><li><b>Impact</b> : « … il m’a rappelé ensuite en disant qu’il ne se sentait pas écouté. »</li></ul><p>Puis on <b>demande</b> : « Comment tu l’as vécu ? Qu’est-ce que tu pourrais faire différemment ? » On critique un comportement, jamais une personne (« tu es impoli »).</p>",
            },
            {
              title: "Le recadrage",
              body:
                "<p>Quand un problème se répète, le retour devient un <b>recadrage</b> :</p><ol><li>En privé, rapidement après les faits.</li><li>Rappeler la règle ou l’attente, puis les faits précis.</li><li>Écouter la version de la personne.</li><li>Fixer clairement ce qui doit changer, et quand on refera le point.</li><li>Garder une trace écrite (date, faits, engagement).</li></ol><p>Si rien ne change, on passe au cadre disciplinaire (séance suivante).</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Fait ou jugement ?",
          instruction: "Cette phrase décrit-elle un comportement observable ou porte-t-elle un jugement sur la personne ?",
          categories: ["Fait observable", "Jugement"],
          items: [
            { text: "« Tu es arrivé à 9 h 40 trois jours cette semaine. »", cat: 0, why: "Factuel et vérifiable." },
            { text: "« Tu n’es pas sérieux. »", cat: 1, why: "Jugement sur la personne." },
            { text: "« Le devis est parti sans la remise négociée. »", cat: 0, why: "Factuel." },
            { text: "« Tu es toujours désorganisé. »", cat: 1, why: "Généralisation et jugement." },
            { text: "« Deux clients ont signalé des colis mal fermés lundi. »", cat: 0, why: "Factuel." },
            { text: "« Tu t’en fiches de l’entreprise. »", cat: 1, why: "Procès d’intention." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Facteurs d’hygiène (Herzberg)", back: "Salaire, conditions : démotivent s’ils sont mauvais, ne suffisent pas à motiver" },
            { front: "Autonomie, maîtrise, sens", back: "Les trois moteurs de la motivation durable" },
            { front: "Reconnaissance efficace", back: "Précise, rapide, sincère" },
            { front: "SCI", back: "Situation, Comportement (fait observable), Impact" },
            { front: "Critiquer…", back: "un comportement, jamais une personne" },
            { front: "Recadrage", back: "En privé, règle + faits, écoute, engagement daté, trace écrite" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Selon Herzberg, une augmentation de salaire…", options: ["motive durablement", "évite la démotivation mais ne suffit pas à motiver", "n’a aucun effet"], answer: 1, explain: "Le salaire est un facteur d’hygiène." },
            { q: "Quelle reconnaissance est la plus efficace ?", options: ["« Super boulot à tous ! »", "« Ta relance des devis en attente a permis de signer 3 clients cette semaine. »", "Une prime en fin d’année sans explication"], answer: 1, explain: "Précise et liée à un résultat." },
            { q: "Dans SCI, le « C » doit être…", options: ["un comportement observable", "un caractère", "une conséquence"], answer: 0, explain: "Un fait, pas un jugement." },
            { q: "Un recadrage se fait…", options: ["devant toute l’équipe pour l’exemple", "en privé, rapidement après les faits", "par message vocal"], answer: 1, explain: "En privé, pour préserver la personne et la relation." },
          ],
        },
        {
          type: "case",
          title: "Les retards de Karim",
          story:
            "Karim arrive régulièrement en retard depuis un mois. Noa n’a rien dit, puis un matin, excédé, lui lance devant l’équipe : « T’es vraiment pas fiable, toi ! » Karim se ferme et l’ambiance se dégrade.",
          question: "Comment aurait-il fallu procéder ?",
          options: [
            "Continuer à ne rien dire",
            "Dès les premiers retards, un échange en privé avec SCI : les dates précises, l’impact (les colis du matin partent en retard), écouter la raison, fixer un engagement et un point de suivi, en gardant une trace",
            "Retenir les retards sur le salaire sans prévenir",
          ],
          answer: 1,
          explain:
            "Attendre laisse le problème grossir, et l’explosion publique abîme la relation. Un retour factuel, privé et rapide règle la plupart des situations. (Les retenues sur salaire pour sanctionner une faute sont d’ailleurs interdites : seules les heures non travaillées peuvent être décomptées.)",
        },
        {
          type: "fiche",
          title: "Motiver et faire des retours",
          points: [
            "Herzberg : <b>hygiène</b> (salaire, conditions) vs <b>motivation</b> (réussite, reconnaissance, responsabilités).",
            "Moteurs durables : <b>autonomie</b>, <b>maîtrise</b>, <b>sens</b>.",
            "Reconnaissance <b>précise, rapide, sincère</b> ; feedback <b>SCI</b> : Situation, Comportement, Impact.",
            "<b>Recadrage</b> : en privé, faits, écoute, engagement daté, trace écrite.",
          ],
          retenir: "Dis les choses tôt, en privé et avec des faits : c’est plus juste et beaucoup plus efficace.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Conflits et situations difficiles",
      minutes: 18,
      objectives: ["Désamorcer et arbitrer un conflit", "Connaître le cadre légal des sanctions"],
      steps: [
        {
          type: "lesson",
          title: "Gérer ce qui coince",
          slides: [
            {
              title: "D’où viennent les conflits",
              body:
                "<ul><li><b>Organisation</b> : rôles flous, objectifs contradictoires, ressources partagées (« qui utilise le camion ? »).</li><li><b>Communication</b> : malentendus, informations qui ne circulent pas.</li><li><b>Valeurs et personnes</b> : façons de travailler différentes, sentiment d’injustice.</li></ul><p>La plupart des conflits « de personnes » sont en réalité des problèmes d’<b>organisation</b>. Clarifier les rôles en règle beaucoup.</p>",
            },
            {
              title: "Arbitrer un conflit entre deux salariés",
              body:
                "<ol><li><b>Ne pas laisser pourrir</b> : un conflit ignoré s’étend à toute l’équipe.</li><li>Écouter chacun <b>séparément</b>, sans prendre parti.</li><li>Réunir les deux personnes : chacun expose <b>les faits</b> et ce dont il a besoin.</li><li>Chercher une <b>solution concrète</b> (règle, répartition, process) plutôt qu’un coupable.</li><li>Formaliser ce qui a été décidé et faire un point quelques semaines plus tard.</li></ol><p>Le manager reste garant du cadre : en cas de harcèlement, d’insultes ou de violence, ce n’est plus un conflit à arbitrer mais une situation à <b>traiter immédiatement</b> (l’employeur a une obligation de sécurité envers ses salariés).</p>",
            },
            {
              title: "Les sanctions disciplinaires",
              body:
                "<p>Quand un salarié commet une faute, l’employeur peut sanctionner, dans un cadre précis :</p><ul><li><b>Délai</b> : une procédure doit être engagée dans les <b>2 mois</b> après que l’employeur a eu connaissance des faits.</li><li>Échelle courante : <b>avertissement</b> (écrit), <b>mise à pied disciplinaire</b>, mutation, rétrogradation, <b>licenciement</b>.</li><li>Pour une sanction autre qu’un avertissement simple, il faut convoquer le salarié à un <b>entretien préalable</b>, où il peut être assisté.</li><li>La sanction doit être <b>proportionnée</b> à la faute, notifiée par écrit et motivée.</li><li><b>Interdit</b> : les amendes et retenues sur salaire en guise de sanction.</li></ul><p>Le règlement intérieur, obligatoire à partir de 50 salariés, fixe l’échelle des sanctions.</p>",
            },
            {
              title: "Les conversations difficiles",
              body:
                "<p>Annoncer une mauvaise nouvelle (refus d’augmentation, fin de période d’essai, changement de poste) :</p><ul><li>Annoncer la décision <b>dès le début</b>, sans long préambule.</li><li>Donner les <b>raisons</b> en une ou deux phrases factuelles.</li><li><b>Laisser réagir</b>, écouter sans se justifier sans fin.</li><li>Parler de <b>la suite</b> : ce qui est possible, les prochaines étapes.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle réponse ?",
          instruction: "Comment traiter chaque situation ?",
          categories: ["Arbitrer / clarifier l’organisation", "Recadrer ou sanctionner", "Agir immédiatement (protection)"],
          items: [
            { text: "Deux salariés se disputent l’utilisation du camion de livraison", cat: 0, why: "Problème d’organisation : planning partagé." },
            { text: "Un salarié refuse de porter ses chaussures de sécurité malgré deux rappels", cat: 1, why: "Faute répétée : sanction possible." },
            { text: "Une salariée signale des propos humiliants répétés d’un collègue", cat: 2, why: "Possible harcèlement : obligation de protéger et d’enquêter." },
            { text: "Deux commerciaux se disputent le même client", cat: 0, why: "Règle d’attribution des clients à fixer." },
            { text: "Un salarié a insulté un client au téléphone", cat: 1, why: "Faute : entretien et sanction proportionnée." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Conflit « de personnes »", back: "Souvent un problème d’organisation déguisé" },
            { front: "Arbitrer", back: "Écouter séparément, puis ensemble ; des faits, une solution, un suivi" },
            { front: "Délai pour sanctionner", back: "2 mois après la connaissance des faits" },
            { front: "Entretien préalable", back: "Obligatoire pour une sanction autre qu’un avertissement simple" },
            { front: "Amendes / retenues sur salaire", back: "Interdites comme sanction" },
            { front: "Mauvaise nouvelle", back: "Décision d’abord, raisons courtes, écoute, suite" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Dans quel délai engager une procédure disciplinaire ?", options: ["2 semaines", "2 mois après la connaissance des faits", "1 an"], answer: 1, explain: "Au-delà, les faits ne peuvent plus être sanctionnés seuls." },
            { q: "Retenir 50 € sur le salaire d’un salarié pour un retard, c’est…", options: ["une sanction normale", "interdit", "obligatoire"], answer: 1, explain: "Les sanctions pécuniaires sont interdites." },
            { q: "Pour arbitrer un conflit, on commence par…", options: ["donner raison au plus ancien", "écouter chacun séparément", "ignorer le problème"], answer: 1, explain: "Comprendre avant de décider." },
            { q: "Pour annoncer une mauvaise nouvelle, il vaut mieux…", options: ["faire un long préambule pour préparer", "annoncer la décision dès le début", "l’envoyer par SMS"], answer: 1, explain: "La personne comprend tout de suite et peut réagir." },
          ],
        },
        {
          type: "case",
          title: "La faute grave… trois mois après",
          story:
            "En faisant l’inventaire, Noa découvre qu’un salarié a vendu du stock à titre personnel. Il en a été informé par un collègue en juin mais n’a pas eu le temps de s’en occuper. Nous sommes en octobre, il veut le licencier pour faute grave.",
          question: "Quel est le problème ?",
          options: [
            "Aucun, il peut sanctionner quand il veut",
            "Le délai de 2 mois pour engager une procédure à partir de la connaissance des faits est probablement dépassé, ce qui fragilise fortement la sanction ; il fallait agir dès juin (entretien préalable, éventuellement mise à pied conservatoire) et se faire conseiller",
            "Il doit d’abord donner un avertissement",
          ],
          answer: 1,
          explain:
            "En droit du travail, le temps compte : le délai de prescription des faits fautifs est de 2 mois (sauf poursuites pénales engagées dans ce délai). Pour une situation grave, consulter rapidement un avocat ou un expert-comptable spécialisé en social est recommandé.",
        },
        {
          type: "fiche",
          title: "Conflits et sanctions",
          points: [
            "Les conflits viennent souvent de l’<b>organisation</b> ; ne jamais les laisser pourrir.",
            "Arbitrer : écoute <b>séparée</b> puis commune, <b>faits</b>, <b>solution</b>, suivi ; harcèlement ou violence : agir <b>immédiatement</b>.",
            "Sanctions : procédure dans les <b>2 mois</b>, <b>entretien préalable</b> (sauf avertissement simple), proportionnalité, écrit ; <b>pas d’amende</b>.",
            "Mauvaise nouvelle : <b>décision d’abord</b>, raisons courtes, écoute, suite.",
          ],
          retenir: "Un conflit se règle tôt et sur des faits ; une sanction se prépare vite et dans les règles.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Décider et piloter",
      minutes: 17,
      objectives: ["Prendre de meilleures décisions", "Piloter l’équipe avec quelques indicateurs et des réunions efficaces"],
      steps: [
        {
          type: "lesson",
          title: "Le dirigeant pilote",
          slides: [
            {
              title: "Une méthode pour décider",
              body:
                "<ol><li><b>Formuler</b> la question : « Faut-il embaucher un deuxième préparateur avant Noël ? »</li><li><b>Réunir les faits</b> : volumes, coûts, délais.</li><li>Lister au moins <b>trois options</b> (dont « ne rien faire » et une option intermédiaire, comme un intérimaire).</li><li>Choisir les <b>critères</b> : coût, risque, réversibilité, délai.</li><li><b>Décider</b>, avec une date, puis <b>communiquer</b> le pourquoi.</li></ol><p>Distingue les décisions <b>réversibles</b> (tester un nouveau transporteur : décide vite) des décisions <b>irréversibles</b> (signer un bail de 9 ans : prends le temps).</p>",
            },
            {
              title: "Les pièges de la décision",
              body:
                "<ul><li><b>Biais de confirmation</b> : ne chercher que les informations qui confirment ce qu’on pense déjà.</li><li><b>Coûts irrécupérables</b> : continuer un projet perdant « parce qu’on y a déjà mis tant d’argent ».</li><li><b>Excès de confiance</b> : sous-estimer délais et coûts (on prévoit presque toujours trop court).</li><li><b>L’effet de groupe</b> : tout le monde approuve le dirigeant. Demande d’abord l’avis des autres, parle en dernier.</li></ul>",
            },
            {
              title: "Le tableau de bord",
              body:
                "<p>Quelques <b>indicateurs</b> (KPI) suivis chaque semaine valent mieux que vingt chiffres jamais regardés :</p><table class='t'><tr><th>Domaine</th><th>Exemple d’indicateur</th></tr><tr><td>Ventes</td><td>Chiffre d’affaires, nombre de commandes, panier moyen</td></tr><tr><td>Rentabilité</td><td>Marge brute, coût d’acquisition client</td></tr><tr><td>Opérations</td><td>Délai d’expédition, taux d’erreur, taux de retour</td></tr><tr><td>Clients</td><td>Avis, réclamations, clients récurrents</td></tr><tr><td>Équipe</td><td>Absences, départs, objectifs atteints</td></tr></table><p>Un bon indicateur a un <b>responsable</b>, une <b>cible</b> et une <b>action</b> prévue s’il dérape.</p>",
            },
            {
              title: "Des réunions qui servent",
              body:
                "<ul><li>Un <b>objectif</b> écrit dans l’invitation : informer, décider, ou trouver des idées.</li><li>Les <b>bonnes personnes</b> seulement, une durée courte, un ordre du jour.</li><li>Finir par un <b>relevé de décisions</b> : qui fait quoi, pour quand.</li></ul><p>Et chaque année, faire le point individuel avec chacun ; rappel légal : l’<b>entretien de parcours professionnel</b> a lieu tous les <b>4 ans</b> (après un premier dans l’année d’embauche), distinct de l’entretien annuel d’évaluation.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Réversible ou irréversible ?",
          instruction: "Cette décision peut-elle être facilement annulée ?",
          categories: ["Réversible : décider vite", "Irréversible : prendre le temps"],
          items: [
            { text: "Tester un nouveau transporteur sur 100 colis", cat: 0, why: "On peut revenir en arrière." },
            { text: "Signer un bail commercial de 9 ans", cat: 1, why: "Engagement long et coûteux." },
            { text: "Changer l’objet d’un e-mail de relance", cat: 0, why: "Test sans risque." },
            { text: "Céder des parts de la société à un investisseur", cat: 1, why: "Difficile à défaire." },
            { text: "Lancer une publicité avec un petit budget test", cat: 0, why: "On coupe si ça ne marche pas." },
            { text: "Embaucher en CDI après la période d’essai", cat: 1, why: "Rompre ensuite un CDI est encadré et coûteux." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Décider en 5 étapes", back: "Question, faits, 3 options, critères, décision communiquée" },
            { front: "Réversible / irréversible", back: "Décider vite quand on peut revenir en arrière, prendre le temps sinon" },
            { front: "Coûts irrécupérables", back: "Continuer un projet perdant à cause de ce qu’on y a déjà mis" },
            { front: "Parler en dernier", back: "Pour éviter que l’équipe s’aligne sur l’avis du chef" },
            { front: "Un bon KPI", back: "Un responsable, une cible, une action prévue s’il dérape" },
            { front: "Relevé de décisions", back: "Qui fait quoi, pour quand : la fin de toute réunion utile" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tester un nouveau fournisseur sur une petite commande est une décision…", options: ["irréversible : à étudier pendant des mois", "réversible : on peut décider vite", "à confier à un avocat"], answer: 1, explain: "Le coût d’une erreur est faible." },
            { q: "« On a déjà mis 20 000 € dans ce projet, on ne peut pas arrêter. » C’est…", options: ["le biais des coûts irrécupérables", "une bonne gestion", "le biais de confirmation"], answer: 0, explain: "Seuls comptent les gains et coûts futurs." },
            { q: "Pour éviter l’effet de groupe en réunion, le dirigeant…", options: ["parle en premier", "parle en dernier", "décide seul sans réunion"], answer: 1, explain: "Les autres donnent leur vrai avis." },
            { q: "Un bon indicateur a…", options: ["un responsable, une cible et une action prévue", "beaucoup de décimales", "un graphique en couleur"], answer: 0, explain: "Sinon c’est un chiffre décoratif." },
          ],
        },
        {
          type: "case",
          title: "Le tableau de bord de l’entrepôt",
          story:
            "Noa suit une trentaine de chiffres dans un tableur qu’il ouvre une fois par mois. Les retours clients ont doublé en trois mois sans que personne ne s’en aperçoive.",
          question: "Que mettre en place ?",
          options: [
            "Ajouter encore plus de chiffres",
            "Choisir 5 à 7 indicateurs clés suivis chaque semaine en réunion (dont le taux de retour), chacun avec un responsable, une cible et une action prévue en cas de dérive",
            "Arrêter de suivre les chiffres",
          ],
          answer: 1,
          explain:
            "Un tableau de bord sert à agir, pas à archiver. Peu d’indicateurs, regardés souvent, avec un responsable pour chacun : c’est ce qui permet de voir un problème au bout de deux semaines plutôt que trois mois.",
        },
        {
          type: "fiche",
          title: "Décider et piloter",
          points: [
            "Décider : <b>question, faits, 3 options, critères, décision communiquée</b> ; vite si <b>réversible</b>, prudemment si <b>irréversible</b>.",
            "Pièges : <b>confirmation</b>, <b>coûts irrécupérables</b>, <b>excès de confiance</b>, <b>effet de groupe</b> (parler en dernier).",
            "<b>5 à 7 KPI</b> suivis chaque semaine, avec <b>responsable, cible, action</b>.",
            "Réunions : objectif, bonnes personnes, <b>relevé de décisions</b> ; <b>entretien de parcours professionnel</b> tous les 4 ans.",
          ],
          retenir: "Peu de chiffres, regardés souvent, et des décisions rapides quand on peut revenir en arrière.",
        },
      ],
    },
  ],
});
