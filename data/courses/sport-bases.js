/* ============================================================
   COURS : S'entraîner — les fondations
   Complexe sportif · 8 séances de 15 à 20 minutes
   Les bases scientifiques et pratiques de l'entraînement pour
   un adulte en bonne santé : principes, évaluation,
   renforcement, cardio, mobilité, programmation,
   récupération, prévention des blessures.
   Repères : recommandations de l'OMS (2020) pour les adultes ;
   méta-analyses courantes en sciences du sport. Ce cours ne
   remplace pas un avis médical.
   ============================================================ */
AGORA.registerCourse({
  id: "sport-bases",
  faculty: "sport",
  title: "S’entraîner — les fondations",
  subtitle: "Comprendre comment le corps progresse et construire son propre programme",
  color: "#1f8a8a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour s’entraîner intelligemment : comment le corps progresse, évaluer son niveau, les mouvements de base du renforcement, le cardio et ses zones, l’échauffement et la mobilité, construire un programme de la semaine, récupérer (sommeil, alimentation) et éviter les blessures. Pour un adulte en bonne santé ; en cas de problème de santé, de douleur ou de reprise après une longue pause, demande d’abord l’avis d’un médecin.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment le corps progresse",
      minutes: 16,
      objectives: ["Comprendre le mécanisme d’adaptation à l’entraînement", "Connaître les grands principes et les recommandations de santé"],
      steps: [
        {
          type: "lesson",
          title: "Stress, récupération, adaptation",
          slides: [
            {
              title: "La surcompensation",
              body:
                "<p>Un entraînement est un <b>stress</b> : sur le moment, il fatigue et affaiblit légèrement. Pendant la <b>récupération</b>, le corps répare… et se renforce un peu au-delà de son niveau de départ, pour mieux encaisser la prochaine fois. C’est la <b>surcompensation</b>.</p><ul><li>Trop peu de stress : pas d’adaptation.</li><li>Pas assez de récupération : la fatigue s’accumule, les performances baissent.</li><li>Le bon dosage, répété pendant des semaines : progrès.</li></ul><p>On ne progresse donc pas <i>pendant</i> la séance, mais <b>entre</b> les séances.</p>",
            },
            {
              title: "Les principes de l’entraînement",
              body:
                "<table class='t'><tr><th>Principe</th><th>En pratique</th></tr><tr><td><b>Surcharge progressive</b></td><td>Augmenter peu à peu la difficulté (répétitions, charge, durée)</td></tr><tr><td><b>Spécificité</b></td><td>On progresse dans ce qu’on entraîne : courir pour courir mieux, soulever pour être plus fort</td></tr><tr><td><b>Régularité</b></td><td>3 séances moyennes chaque semaine valent mieux qu’une séance héroïque par mois</td></tr><tr><td><b>Réversibilité</b></td><td>Sans entraînement, les gains se perdent peu à peu</td></tr><tr><td><b>Individualisation</b></td><td>Âge, niveau, sommeil, stress : chacun réagit différemment</td></tr></table>",
            },
            {
              title: "Les recommandations de l’OMS",
              body:
                "<p>Pour un adulte de 18 à 64 ans, l’Organisation mondiale de la santé recommande chaque semaine :</p><ul><li><b>150 à 300 minutes</b> d’activité d’endurance d’intensité <b>modérée</b> (marche rapide, vélo tranquille), <b>ou 75 à 150 minutes</b> d’intensité <b>soutenue</b> (course, sport collectif), ou une combinaison des deux ;</li><li>du <b>renforcement musculaire</b> sollicitant les principaux groupes musculaires au moins <b>2 jours</b> par semaine ;</li><li>et <b>limiter le temps assis</b> : chaque mouvement compte.</li></ul><p>Au-delà de ces minimums, les bénéfices continuent d’augmenter.</p>",
            },
            {
              title: "Les qualités physiques",
              body:
                "<div class='tiers'><div><b>Force et muscles</b><span>Soulever, porter, se relever ; protège les articulations et le dos, et devient essentielle en vieillissant.</span></div><div><b>Endurance</b><span>Le cœur, les poumons, la capacité à durer ; liée à une meilleure santé et longévité.</span></div><div><b>Mobilité</b><span>L’amplitude de mouvement des articulations, nécessaire pour bien exécuter les gestes.</span></div></div><p>Un programme équilibré travaille les trois, avec une priorité selon ton objectif.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel principe ?",
          instruction: "Quel principe de l’entraînement chaque situation illustre-t-elle ?",
          categories: ["Surcharge progressive", "Spécificité", "Réversibilité"],
          items: [
            { text: "Passer de 3 × 8 à 3 × 10 pompes au bout de deux semaines", cat: 0, why: "Augmentation progressive de la difficulté." },
            { text: "Un nageur entraîné s’essouffle vite à la course à pied", cat: 1, why: "L’adaptation est propre à l’activité." },
            { text: "Après 2 mois sans courir, 5 km paraissent bien plus durs", cat: 2, why: "Les gains se perdent." },
            { text: "Ajouter 2,5 kg sur la barre quand toutes les séries sont réussies", cat: 0, why: "Surcharge progressive." },
            { text: "Pour un marathon, on court beaucoup plus qu’on ne soulève", cat: 1, why: "Spécificité de l’objectif." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Surcompensation", back: "Après la récupération, le corps revient un peu plus fort qu’avant" },
            { front: "On progresse…", back: "entre les séances, pendant la récupération" },
            { front: "Surcharge progressive", back: "Augmenter peu à peu la difficulté" },
            { front: "OMS : endurance", back: "150-300 min modérée ou 75-150 min soutenue par semaine" },
            { front: "OMS : renforcement", back: "Au moins 2 jours par semaine, principaux groupes musculaires" },
            { front: "Les 3 qualités de base", back: "Force, endurance, mobilité" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quand le corps devient-il réellement plus fort ?", options: ["Pendant la séance", "Pendant la récupération entre les séances", "Uniquement en dormant après une séance très dure"], answer: 1, explain: "La séance crée le signal, la récupération construit l’adaptation." },
            { q: "Selon l’OMS, combien de minutes d’activité modérée par semaine au minimum ?", options: ["60", "150", "500"], answer: 1, explain: "150 à 300 min modérée, ou 75 à 150 min soutenue." },
            { q: "Quelle approche est la plus efficace ?", options: ["Une très grosse séance par mois", "Trois séances modérées chaque semaine", "S’entraîner à fond tous les jours sans repos"], answer: 1, explain: "La régularité bat l’intensité ponctuelle." },
            { q: "Le renforcement musculaire est recommandé…", options: ["seulement aux bodybuilders", "au moins 2 jours par semaine pour tous les adultes", "jamais après 50 ans"], answer: 1, explain: "Il devient même encore plus important avec l’âge." },
          ],
        },
        {
          type: "case",
          title: "La reprise à fond",
          story:
            "Le 2 janvier, Noa décide de « se remettre au sport ». Il court 10 km le premier jour, fait 200 pompes le deuxième et une séance de HIIT le troisième. Le quatrième jour, il a mal partout et arrête pour trois semaines.",
          question: "Quelle erreur a-t-il commise ?",
          options: [
            "Il n’a pas fait assez d’efforts",
            "Trop de stress d’un coup sans récupération : il fallait commencer bas (2 à 3 séances courtes par semaine), augmenter progressivement et laisser le corps s’adapter",
            "Il aurait dû faire seulement des étirements",
          ],
          answer: 1,
          explain:
            "La surcharge doit être progressive. Commencer en dessous de ses capacités permet de tenir la régularité, qui est le vrai moteur du progrès.",
        },
        {
          type: "fiche",
          title: "Comment le corps progresse",
          points: [
            "<b>Stress → récupération → surcompensation</b> : on progresse entre les séances.",
            "Principes : <b>surcharge progressive</b>, <b>spécificité</b>, <b>régularité</b>, réversibilité, individualisation.",
            "OMS (adultes) : <b>150-300 min</b> modérée ou <b>75-150 min</b> soutenue par semaine + <b>renforcement 2 jours</b> ; moins de temps assis.",
            "Trois qualités : <b>force</b>, <b>endurance</b>, <b>mobilité</b>.",
          ],
          retenir: "Commence plus doucement que tu ne le voudrais, mais ne t’arrête pas : c’est la régularité qui transforme.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Évaluer son niveau et fixer un objectif",
      minutes: 15,
      objectives: ["Mesurer son point de départ avec des tests simples", "Formuler un objectif motivant et suivre ses progrès"],
      steps: [
        {
          type: "lesson",
          title: "Savoir d’où l’on part",
          slides: [
            {
              title: "Avant de commencer",
              body:
                "<ul><li>Si tu as une maladie cardiaque, une hypertension, du diabète, des douleurs dans la poitrine à l’effort, des malaises, ou si tu reprends après des années d’inactivité (surtout après 40-45 ans), fais un <b>bilan médical</b> avant d’intensifier.</li><li>Un médecin du sport peut aussi proposer une épreuve d’effort.</li><li>Pour tous : arrêter immédiatement et consulter en cas de <b>douleur thoracique</b>, d’essoufflement anormal, de palpitations ou de malaise à l’effort.</li></ul>",
            },
            {
              title: "Quelques tests simples",
              body:
                "<table class='t'><tr><th>Qualité</th><th>Test</th></tr><tr><td>Force du haut du corps</td><td>Nombre de <b>pompes</b> correctes d’affilée (sur les genoux si besoin)</td></tr><tr><td>Force des jambes</td><td>Nombre de <b>squats</b> en 1 minute, ou se lever d’une chaise 10 fois chronométré</td></tr><tr><td>Gainage</td><td>Durée de la <b>planche</b> en gardant le dos droit</td></tr><tr><td>Endurance</td><td>Distance parcourue en <b>12 minutes</b> de course ou de marche rapide</td></tr><tr><td>Mobilité</td><td>Toucher le sol jambes tendues ? Squat profond talons au sol ?</td></tr><tr><td>Santé cardio</td><td><b>Fréquence cardiaque au repos</b> le matin au réveil</td></tr></table><p>Note les résultats et refais les tests toutes les <b>6 à 8 semaines</b>.</p>",
            },
            {
              title: "Un objectif qui motive",
              body:
                "<p>Comme en entreprise, un objectif <b>SMART</b> marche mieux qu’un vague « être en forme » :</p><ul><li>« Courir 5 km sans m’arrêter d’ici le 1er mars. »</li><li>« Faire 10 tractions strictes d’ici l’été. »</li><li>« Faire 3 séances de 40 minutes par semaine pendant 3 mois. »</li></ul><p>Combine un objectif de <b>résultat</b> (5 km) et un objectif de <b>comportement</b> (3 séances par semaine) : le second, tu le contrôles entièrement.</p>",
            },
            {
              title: "Suivre ses progrès",
              body:
                "<ul><li>Un <b>carnet d’entraînement</b> (papier ou application) : exercices, séries, répétitions, charges, durée, ressenti.</li><li>Une <b>échelle d’effort perçu</b> de 1 à 10 pour chaque séance.</li><li>Le poids sur la balance est un indicateur limité : il varie de 1 à 2 kg d’un jour à l’autre (eau, repas) et ne distingue pas muscle et graisse. Le tour de taille, les performances et les photos sont souvent plus parlants.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Bilan médical avant de commencer si…", back: "Maladie cardiaque, hypertension, diabète, symptômes à l’effort, longue inactivité après 40-45 ans" },
            { front: "Signes d’arrêt immédiat", back: "Douleur thoracique, essoufflement anormal, palpitations, malaise" },
            { front: "Test d’endurance simple", back: "Distance parcourue en 12 minutes" },
            { front: "Refaire les tests", back: "Toutes les 6 à 8 semaines" },
            { front: "Objectif de comportement", back: "Ce que tu contrôles : « 3 séances par semaine »" },
            { front: "Carnet d’entraînement", back: "Exercices, séries, répétitions, charges, ressenti" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pendant un footing, tu ressens une douleur dans la poitrine. Que fais-tu ?", options: ["Tu ralentis et continues", "Tu t’arrêtes immédiatement et consultes (ou appelles le 15 si elle persiste)", "Tu t’étires"], answer: 1, explain: "Une douleur thoracique à l’effort est un signal d’alerte." },
            { q: "Quel objectif est le mieux formulé ?", options: ["« Me remettre en forme »", "« Courir 5 km sans m’arrêter d’ici le 1er mars »", "« Faire du sport plus souvent »"], answer: 1, explain: "Précis, mesurable, daté." },
            { q: "Pourquoi le poids seul est-il un indicateur limité ?", options: ["Il ne varie jamais", "Il fluctue de jour en jour et ne distingue pas muscle et graisse", "Il est toujours faux"], answer: 1, explain: "Croise-le avec d’autres mesures." },
            { q: "À quelle fréquence refaire ses tests ?", options: ["Tous les jours", "Toutes les 6 à 8 semaines", "Une fois par an"], answer: 1, explain: "Le temps que les adaptations apparaissent." },
          ],
        },
        {
          type: "case",
          title: "L’objectif flou",
          story:
            "Sofia veut « perdre du ventre et être plus en forme ». Elle se pèse tous les matins, se décourage quand le chiffre remonte de 800 g et abandonne au bout de trois semaines.",
          question: "Que lui conseiller ?",
          options: [
            "Se peser deux fois par jour",
            "Faire des tests de départ, fixer un objectif de comportement (3 séances par semaine) et un objectif de performance daté, et suivre plusieurs indicateurs (tour de taille, performances, ressenti) plutôt que le poids quotidien",
            "Arrêter de manger le soir",
          ],
          answer: 1,
          explain:
            "Les fluctuations quotidiennes du poids sont normales. Des objectifs qu’elle contrôle et des progrès visibles en performance entretiennent la motivation.",
        },
        {
          type: "fiche",
          title: "Évaluer et viser",
          points: [
            "<b>Bilan médical</b> si facteurs de risque ou longue inactivité ; arrêt immédiat en cas de <b>douleur thoracique</b> ou malaise.",
            "Tests : <b>pompes</b>, <b>squats</b>, <b>planche</b>, <b>12 minutes</b>, mobilité, FC de repos ; à refaire toutes les <b>6-8 semaines</b>.",
            "Objectif <b>SMART</b> : un de <b>résultat</b> + un de <b>comportement</b>.",
            "<b>Carnet</b> et effort perçu ; le poids seul est un indicateur limité.",
          ],
          retenir: "Mesure ton point de départ : voir ses progrès est le meilleur carburant de la motivation.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Le renforcement musculaire",
      minutes: 18,
      objectives: ["Connaître les mouvements fondamentaux", "Doser séries, répétitions et intensité"],
      steps: [
        {
          type: "lesson",
          title: "Les bases de la musculation",
          slides: [
            {
              title: "Les 6 mouvements fondamentaux",
              body:
                "<table class='t'><tr><th>Mouvement</th><th>Sans matériel</th><th>Avec matériel</th></tr><tr><td><b>Squat</b> (s’accroupir)</td><td>Squat au poids du corps</td><td>Squat avec haltère ou barre</td></tr><tr><td><b>Fente</b></td><td>Fentes avant, arrière</td><td>Fentes avec haltères</td></tr><tr><td><b>Charnière de hanche</b></td><td>Pont fessier, good morning</td><td>Soulevé de terre</td></tr><tr><td><b>Pousser</b></td><td>Pompes, dips sur chaise</td><td>Développé couché, développé militaire</td></tr><tr><td><b>Tirer</b></td><td>Tirage sous une table solide, tractions</td><td>Rowing haltère, tirage à la poulie</td></tr><tr><td><b>Gainage</b></td><td>Planche, gainage latéral</td><td>Porter des charges en marchant</td></tr></table><p>Un programme qui couvre ces 6 mouvements travaille tout le corps.</p>",
            },
            {
              title: "Séries, répétitions, repos",
              body:
                "<ul><li>Une <b>répétition</b> = un mouvement complet ; une <b>série</b> = un enchaînement de répétitions.</li><li>Pour la <b>force</b> : charges lourdes, 3 à 6 répétitions, 2 à 3 minutes de repos.</li><li>Pour le <b>volume musculaire</b> : des séries de 6 à 15 répétitions (et même jusqu’à 30) fonctionnent toutes, <b>à condition de s’approcher de l’échec</b>.</li><li>Repère courant pour progresser : environ <b>10 séries par groupe musculaire et par semaine</b>, réparties en 2 séances ou plus.</li></ul>",
            },
            {
              title: "L’intensité : les répétitions en réserve",
              body:
                "<p>Le plus important n’est pas le nombre de répétitions, mais l’<b>effort</b> fourni. On le mesure avec les <b>répétitions en réserve</b> (RIR) : combien en aurais-tu encore réussi avec une bonne technique ?</p><ul><li><b>RIR 0</b> : impossible d’en faire une de plus (échec).</li><li><b>RIR 1 à 3</b> : zone idéale pour la plupart des séries.</li><li><b>RIR 5 et plus</b> : trop facile pour progresser beaucoup (utile pour l’échauffement ou apprendre la technique).</li></ul><p>Débutant : garde 2 ou 3 répétitions en réserve et soigne la technique.</p>",
            },
            {
              title: "La technique avant la charge",
              body:
                "<ul><li><b>Dos neutre</b> (ni arrondi ni cambré) sur les squats et charnières.</li><li>Genoux dans l’axe des pieds, talons au sol.</li><li>Amplitude <b>complète</b> et contrôlée, sans élan.</li><li>Expirer pendant l’effort, ne pas bloquer la respiration longtemps.</li><li>Se filmer ou demander un retour à un coach les premières semaines.</li></ul><p>Progresser au poids du corps : plus de répétitions, tempo plus lent, version plus difficile (pompes pieds surélevés, squat sur une jambe assisté).</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel mouvement fondamental ?",
          instruction: "Classe chaque exercice dans sa famille de mouvement.",
          categories: ["Pousser", "Tirer", "Jambes (squat / fente / charnière)"],
          items: [
            { text: "Pompes", cat: 0, why: "On pousse le sol." },
            { text: "Tractions", cat: 1, why: "On tire le corps vers la barre." },
            { text: "Pont fessier", cat: 2, why: "Charnière de hanche." },
            { text: "Rowing haltère", cat: 1, why: "On tire la charge vers soi." },
            { text: "Fentes arrière", cat: 2, why: "Mouvement de jambes." },
            { text: "Dips sur une chaise", cat: 0, why: "On pousse." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Les 6 mouvements", back: "Squat, fente, charnière de hanche, pousser, tirer, gainage" },
            { front: "Force", back: "Charges lourdes, 3-6 répétitions, 2-3 min de repos" },
            { front: "Volume musculaire", back: "6 à 15 (voire 30) répétitions, proche de l’échec" },
            { front: "RIR", back: "Répétitions en réserve : idéalement 1 à 3 en fin de série" },
            { front: "Volume hebdomadaire (repère)", back: "Environ 10 séries par groupe musculaire et par semaine" },
            { front: "Progresser sans matériel", back: "Plus de répétitions, tempo lent, version plus difficile" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pour prendre du muscle, qu’est-ce qui compte le plus ?", options: ["Faire exactement 10 répétitions", "S’approcher de l’échec (1 à 3 répétitions en réserve) avec une bonne technique", "Changer d’exercice à chaque séance"], answer: 1, explain: "L’effort réel prime sur le nombre exact." },
            { q: "Le soulevé de terre appartient à la famille…", options: ["pousser", "charnière de hanche", "tirer vertical"], answer: 1, explain: "On plie à la hanche, dos neutre." },
            { q: "RIR 0 signifie…", options: ["aucune répétition faite", "impossible d’en faire une de plus", "repos de 0 seconde"], answer: 1, explain: "C’est l’échec musculaire." },
            { q: "Comment progresser aux pompes sans ajouter de poids ?", options: ["Les faire plus vite avec élan", "Surélever les pieds ou ralentir la descente", "Réduire l’amplitude"], answer: 1, explain: "On augmente la difficulté sans tricher sur la technique." },
          ],
        },
        {
          type: "case",
          title: "Les séances trop faciles",
          story:
            "Depuis 4 mois, Hugo fait chaque soir 3 séries de 15 pompes, toujours les mêmes. Il pourrait en faire 30 d’affilée. Il ne voit plus aucun progrès.",
          question: "Pourquoi stagne-t-il ?",
          options: [
            "Il fait trop de séances",
            "Ses séries sont très loin de l’échec (environ 15 répétitions en réserve) et la difficulté n’augmente plus : il doit appliquer la surcharge progressive (variante plus dure, plus de répétitions proches de l’échec, tempo lent) et ajouter le tirage et les jambes",
            "Les pompes ne font pas de muscle",
          ],
          answer: 1,
          explain:
            "Sans stress suffisant, pas d’adaptation. Et un programme équilibré couvre aussi le tirage, les jambes et le gainage.",
        },
        {
          type: "fiche",
          title: "Renforcement",
          points: [
            "6 mouvements : <b>squat, fente, charnière de hanche, pousser, tirer, gainage</b>.",
            "Force : <b>3-6 rép.</b> lourdes ; volume musculaire : <b>6-15 rép.</b> (jusqu’à 30) proche de l’échec ; ~<b>10 séries/muscle/semaine</b>.",
            "Intensité : <b>1 à 3 répétitions en réserve</b> ; débutant : 2-3 et technique d’abord.",
            "Technique : <b>dos neutre</b>, amplitude complète, pas d’élan ; progresser par variantes plus difficiles.",
          ],
          retenir: "Le muscle répond à l’effort proche de l’échec et à une difficulté qui augmente, pas à la routine.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Le cardio et l’endurance",
      minutes: 17,
      objectives: ["Comprendre les zones d’intensité", "Organiser son entraînement d’endurance"],
      steps: [
        {
          type: "lesson",
          title: "Entraîner le cœur",
          slides: [
            {
              title: "La fréquence cardiaque",
              body:
                "<ul><li><b>FC de repos</b> : mesurée le matin au réveil. Elle baisse souvent avec l’entraînement.</li><li><b>FC maximale</b> : on l’estime avec la formule <b>208 – 0,7 × âge</b> (plus précise que « 220 – âge »), mais l’écart individuel peut dépasser 10 battements.</li><li>Une montre ou une ceinture cardio aide, mais l’<b>effort perçu</b> et le <b>test de la parole</b> suffisent très bien.</li></ul>",
            },
            {
              title: "Les zones d’intensité",
              body:
                "<table class='t'><tr><th>Zone</th><th>Ressenti</th><th>Test de la parole</th><th>Rôle</th></tr><tr><td><b>Endurance fondamentale</b></td><td>Facile, 3-4/10</td><td>On peut tenir une conversation</td><td>Base aérobie, récupération, volume</td></tr><tr><td><b>Seuil</b></td><td>Soutenu, 6-7/10</td><td>Phrases courtes seulement</td><td>Tenir une allure élevée longtemps</td></tr><tr><td><b>Intervalles intenses</b></td><td>Très dur, 8-9/10</td><td>Quelques mots</td><td>VO2max, vitesse</td></tr></table>",
            },
            {
              title: "La règle des 80 / 20",
              body:
                "<p>Les athlètes d’endurance passent environ <b>80 % de leur temps à intensité facile</b> et 20 % à intensité soutenue ou élevée.</p><p>L’erreur la plus fréquente des amateurs : courir <b>toujours au même rythme moyen</b>, un peu trop dur pour bien récupérer, pas assez pour progresser en vitesse. Mieux vaut des séances faciles <b>vraiment faciles</b> et quelques séances dures <b>vraiment dures</b>.</p>",
            },
            {
              title: "Les intervalles et le HIIT",
              body:
                "<ul><li>Le <b>HIIT</b> alterne des efforts très intenses et des récupérations, par exemple <b>30 secondes rapides / 30 secondes lentes</b> × 10, ou <b>4 × 4 minutes</b> à allure soutenue avec 3 minutes de récupération.</li><li>Très efficace pour améliorer la condition cardio en peu de temps.</li><li>Mais exigeant : <b>1 à 2 séances par semaine</b> suffisent, après un échauffement complet, et seulement quand on a déjà une petite base d’endurance.</li><li>Débuter la course : alterner marche et course (ex. 1 min course / 2 min marche), puis augmenter progressivement la part de course.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "FC max estimée", back: "208 – 0,7 × âge (avec une forte variation individuelle)" },
            { front: "Test de la parole", back: "Conversation possible = endurance fondamentale" },
            { front: "Règle des 80 / 20", back: "80 % du temps à intensité facile, 20 % soutenue ou intense" },
            { front: "HIIT", back: "Efforts très intenses alternés avec récupération ; 1-2 fois par semaine" },
            { front: "4 × 4 minutes", back: "4 efforts soutenus de 4 min, 3 min de récupération entre chaque" },
            { front: "Débuter la course", back: "Alterner marche et course, puis augmenter la course" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "FC max estimée pour une personne de 30 ans (208 – 0,7 × âge) ?", options: ["187", "190", "178"], answer: 0, explain: "208 – 21 = 187 battements par minute (estimation)." },
            { q: "Tu peux tenir une conversation en courant : tu es en…", options: ["endurance fondamentale", "zone de seuil", "intervalles intenses"], answer: 0, explain: "C’est la zone facile." },
            { q: "Quelle est l’erreur la plus fréquente des coureurs amateurs ?", options: ["Courir trop lentement", "Toujours courir au même rythme moyen, un peu trop dur", "Faire trop de fractionné"], answer: 1, explain: "D’où la règle des 80 / 20." },
            { q: "Combien de séances de HIIT par semaine suffisent en général ?", options: ["1 à 2", "5 à 6", "Tous les jours"], answer: 0, explain: "Elles demandent beaucoup de récupération." },
          ],
        },
        {
          type: "case",
          title: "Le coureur essoufflé",
          story:
            "Karim court 4 fois par semaine, toujours 8 km « à fond », essoufflé du début à la fin. Il se sent fatigué en permanence et son temps ne s’améliore plus.",
          question: "Que lui conseiller ?",
          options: [
            "Courir encore plus vite",
            "Appliquer le 80 / 20 : 3 sorties vraiment faciles (en pouvant parler) et 1 séance d’intervalles structurée, puis allonger progressivement la sortie longue",
            "Arrêter la course",
          ],
          answer: 1,
          explain:
            "Courir toujours dur empêche de récupérer et de construire la base aérobie. Ralentir la majorité des sorties fait souvent progresser plus vite.",
        },
        {
          type: "fiche",
          title: "Cardio",
          points: [
            "FC de repos ; FC max estimée <b>208 – 0,7 × âge</b> ; effort perçu et <b>test de la parole</b>.",
            "Zones : <b>endurance fondamentale</b> (conversation), <b>seuil</b> (phrases courtes), <b>intervalles</b> (quelques mots).",
            "<b>80 / 20</b> : la plupart des séances vraiment faciles.",
            "<b>HIIT</b> (30/30, 4 × 4 min) 1-2 fois par semaine après échauffement ; débuter en alternant marche et course.",
          ],
          retenir: "Lentement la plupart du temps, vite de temps en temps : c’est ainsi qu’on construit l’endurance.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Échauffement, mobilité et étirements",
      minutes: 15,
      objectives: ["S’échauffer efficacement", "Savoir quand et comment s’étirer"],
      steps: [
        {
          type: "lesson",
          title: "Préparer le corps",
          slides: [
            {
              title: "Un bon échauffement en 4 étapes",
              body:
                "<p>Le modèle <b>RAMP</b> (5 à 15 minutes) :</p><ol><li><b>Élever</b> la température : 3-5 minutes de cardio léger (marche rapide, vélo, corde à sauter).</li><li><b>Activer</b> les muscles qui vont travailler : pont fessier, gainage, rotations d’épaules avec élastique.</li><li><b>Mobiliser</b> les articulations : mouvements dynamiques en amplitude (fentes avec rotation, balancés de jambes, cercles de bras).</li><li><b>Potentialiser</b> : des séries légères de l’exercice principal, en augmentant progressivement la charge ou la vitesse.</li></ol>",
            },
            {
              title: "Étirements statiques ou dynamiques ?",
              body:
                "<ul><li>Les <b>étirements dynamiques</b> (mouvements contrôlés en amplitude) sont adaptés à l’<b>échauffement</b>.</li><li>Les <b>étirements statiques</b> (tenir une position 20 à 60 secondes) juste avant un effort explosif peuvent légèrement réduire la force et la vitesse s’ils sont longs. Mieux vaut les placer <b>après la séance</b> ou dans une séance dédiée.</li><li>Les étirements ne <b>préviennent pas les courbatures</b>, contrairement à une idée reçue.</li><li>Ils améliorent la <b>souplesse</b> si on les pratique régulièrement, plusieurs fois par semaine.</li></ul>",
            },
            {
              title: "La mobilité",
              body:
                "<p>La <b>mobilité</b>, c’est la capacité à <b>contrôler</b> une articulation sur toute son amplitude. Elle conditionne la qualité des mouvements :</p><ul><li><b>Chevilles</b> : nécessaires pour un squat profond, talons au sol.</li><li><b>Hanches</b> : pour les fentes, le squat, la course.</li><li><b>Colonne thoracique</b> (haut du dos) : pour lever les bras sans cambrer.</li><li><b>Épaules</b> : pour pousser et tirer au-dessus de la tête.</li></ul><p>10 minutes de mobilité 3 fois par semaine, ou intégrées à l’échauffement, suffisent souvent à faire une vraie différence.</p>",
            },
            {
              title: "Le retour au calme",
              body:
                "<ul><li>5 minutes d’activité légère pour faire redescendre progressivement le cœur et la respiration.</li><li>Éventuellement des étirements statiques doux ou des exercices de respiration.</li><li>S’hydrater, et noter la séance dans son carnet.</li></ul><p>Le retour au calme améliore surtout le <b>confort</b> ; la vraie récupération se fait avec le sommeil et l’alimentation.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Avant ou après la séance ?",
          instruction: "Où placer chaque exercice ?",
          categories: ["Échauffement (avant)", "Retour au calme / séance dédiée (après)"],
          items: [
            { text: "5 minutes de vélo léger", cat: 0, why: "Élever la température." },
            { text: "Tenir un étirement des ischio-jambiers 45 secondes avant des sprints", cat: 1, why: "Statique long : plutôt après." },
            { text: "Balancés de jambes et fentes dynamiques", cat: 0, why: "Mobilisation dynamique." },
            { text: "Séries légères de squat avant le squat lourd", cat: 0, why: "Potentialisation." },
            { text: "Étirements statiques doux et respiration", cat: 1, why: "Retour au calme." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "RAMP", back: "Élever, Activer, Mobiliser, Potentialiser" },
            { front: "Étirements dynamiques", back: "Mouvements en amplitude : pour l’échauffement" },
            { front: "Étirements statiques longs avant un effort explosif", back: "Peuvent réduire un peu la force : plutôt après" },
            { front: "Étirements et courbatures", back: "Les étirements ne préviennent pas les courbatures" },
            { front: "Mobilité", back: "Contrôler une articulation sur toute son amplitude" },
            { front: "Retour au calme", back: "Améliore le confort ; la récupération vient du sommeil et de l’alimentation" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel type d’étirement privilégier à l’échauffement ?", options: ["Statique de 60 secondes", "Dynamique", "Aucun mouvement"], answer: 1, explain: "Ils préparent sans réduire la performance." },
            { q: "Les étirements après la séance empêchent-ils les courbatures ?", options: ["Oui, complètement", "Non, les études ne montrent pas d’effet notable", "Seulement s’ils durent 10 minutes"], answer: 1, explain: "Idée reçue tenace." },
            { q: "Une mauvaise mobilité de cheville gêne surtout…", options: ["le développé couché", "le squat profond talons au sol", "les tractions"], answer: 1, explain: "La cheville doit fléchir pour descendre." },
            { q: "Quelle est la dernière étape du RAMP ?", options: ["S’étirer", "Potentialiser : séries légères de l’exercice principal", "Boire"], answer: 1, explain: "On monte progressivement vers l’intensité de la séance." },
          ],
        },
        {
          type: "case",
          title: "L’échauffement immobile",
          story:
            "Avant son match de foot du dimanche, Hugo tient des étirements statiques pendant 10 minutes, puis attaque directement le match. À la 5e minute, il ressent une gêne à l’arrière de la cuisse sur un sprint.",
          question: "Que changer ?",
          options: [
            "S’étirer encore plus longtemps",
            "Un échauffement RAMP : cardio léger, activation, mobilité dynamique, puis accélérations progressives et quelques sprints avant le coup d’envoi ; garder les étirements statiques pour après",
            "Ne plus jamais s’échauffer",
          ],
          answer: 1,
          explain:
            "Un échauffement dynamique et progressif prépare muscles et tendons aux sprints. Si la douleur à l’arrière de la cuisse est vive, il faut arrêter et la faire examiner.",
        },
        {
          type: "fiche",
          title: "Échauffement et mobilité",
          points: [
            "Échauffement <b>RAMP</b> (5-15 min) : élever, activer, mobiliser, potentialiser.",
            "<b>Dynamique</b> avant ; <b>statique</b> après ou séance dédiée ; pas d’effet sur les courbatures.",
            "Mobilité : <b>chevilles, hanches, haut du dos, épaules</b>, 10 min plusieurs fois par semaine.",
            "Retour au calme : redescendre doucement, s’hydrater, noter la séance.",
          ],
          retenir: "On s’échauffe en bougeant, pas en restant immobile : le corps se prépare au mouvement par le mouvement.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Construire son programme",
      minutes: 18,
      objectives: ["Organiser une semaine d’entraînement équilibrée", "Faire progresser le programme dans le temps"],
      steps: [
        {
          type: "lesson",
          title: "De la théorie au planning",
          slides: [
            {
              title: "Combien de séances ?",
              body:
                "<table class='t'><tr><th>Disponibilité</th><th>Organisation conseillée</th></tr><tr><td>2 séances / semaine</td><td>2 séances <b>corps entier</b> (renforcement) + marche ou vélo au quotidien</td></tr><tr><td>3 séances</td><td>3 corps entier, ou 2 renforcement + 1 cardio</td></tr><tr><td>4 séances</td><td>2 haut du corps / 2 bas du corps, ou 2 renforcement + 2 cardio</td></tr><tr><td>5 et plus</td><td>Séparer davantage, avec au moins 1 à 2 jours de repos</td></tr></table><p>Pour un débutant, le <b>corps entier</b> 2 à 3 fois par semaine est le plus efficace : chaque muscle est travaillé plusieurs fois.</p>",
            },
            {
              title: "Exemple : 3 séances par semaine",
              body:
                "<p><b>Lundi et vendredi : renforcement corps entier (45 min)</b></p><ul><li>Échauffement RAMP (8 min)</li><li>Squat (ou squat gobelet) 3 × 8-12</li><li>Pompes (ou développé) 3 × 8-12</li><li>Rowing haltère (ou tirage sous table) 3 × 8-12</li><li>Pont fessier ou soulevé de terre roumain 3 × 10-12</li><li>Planche 3 × 30-45 s</li></ul><p><b>Mercredi : cardio (30-40 min)</b> en endurance fondamentale, ou 1 fois sur 2 un 4 × 4 min.</p><p>Et chaque jour : marcher (objectif de pas réaliste, par exemple 7 000 à 10 000).</p>",
            },
            {
              title: "La double progression",
              body:
                "<p>Une méthode simple pour progresser en renforcement :</p><ol><li>Choisis une <b>fourchette</b> de répétitions, par exemple 8 à 12.</li><li>Commence avec une charge qui permet 8 répétitions sur chaque série.</li><li>À chaque séance, essaie d’ajouter <b>une répétition</b>.</li><li>Quand tu réussis <b>12 répétitions sur toutes les séries</b>, augmente la charge (ou passe à une variante plus dure) et redescends à 8.</li></ol><p>Ton carnet te dit exactement quoi faire à la séance suivante.</p>",
            },
            {
              title: "Les semaines allégées",
              body:
                "<ul><li>Toutes les <b>4 à 8 semaines</b>, ou quand la fatigue s’accumule, une <b>semaine allégée</b> (environ moitié moins de séries, même exercices) aide à récupérer et à repartir.</li><li>Change les exercices principaux rarement (toutes les 8 à 12 semaines) : il faut du temps pour progresser sur un mouvement.</li><li>Un bon programme est un programme que tu <b>tiens</b> : choisis des créneaux réalistes et des exercices que tu aimes assez.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Débutant : organisation idéale", back: "Corps entier 2 à 3 fois par semaine" },
            { front: "Double progression", back: "Ajouter des répétitions jusqu’au haut de la fourchette, puis augmenter la charge" },
            { front: "Fourchette classique", back: "8 à 12 répétitions" },
            { front: "Semaine allégée", back: "Toutes les 4 à 8 semaines : environ moitié moins de séries" },
            { front: "Changer d’exercices", back: "Rarement : toutes les 8 à 12 semaines" },
            { front: "Le meilleur programme", back: "Celui que tu tiens dans la durée" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Avec 3 séances par semaine, un débutant devrait plutôt faire…", options: ["un muscle différent par séance", "du corps entier", "uniquement du cardio"], answer: 1, explain: "Chaque muscle est sollicité plusieurs fois par semaine." },
            { q: "Double progression 8-12 : tu réussis 12, 12 et 11 répétitions. Prochaine séance ?", options: ["Augmenter la charge", "Même charge, viser 12 sur toutes les séries", "Diminuer la charge"], answer: 1, explain: "On augmente quand toutes les séries atteignent 12." },
            { q: "À quoi sert une semaine allégée ?", options: ["À perdre ses progrès", "À évacuer la fatigue accumulée pour repartir plus fort", "À changer tous les exercices"], answer: 1, explain: "C’est une récupération planifiée." },
            { q: "Pourquoi éviter de changer d’exercices à chaque séance ?", options: ["C’est interdit", "On ne peut pas mesurer ni appliquer la surcharge progressive", "Les muscles s’ennuient"], answer: 1, explain: "La progression demande de la répétition." },
          ],
        },
        {
          type: "case",
          title: "Le programme copié",
          story:
            "Sofia copie le programme d’un bodybuilder professionnel trouvé sur Internet : 6 séances par semaine de 2 heures, un muscle par jour. Avec son travail, elle tient deux semaines puis abandonne.",
          question: "Quel programme lui conviendrait mieux ?",
          options: [
            "Un programme encore plus intense",
            "3 séances de 45 minutes adaptées à son agenda : 2 corps entier avec double progression et 1 séance de cardio, plus de la marche au quotidien",
            "Ne faire du sport que pendant les vacances",
          ],
          answer: 1,
          explain:
            "Un programme pensé pour un athlète professionnel (temps, récupération, expérience) ne convient pas à une débutante qui travaille. La régularité sur des mois vaut mieux que l’intensité sur deux semaines.",
        },
        {
          type: "fiche",
          title: "Programmer",
          points: [
            "Débutant : <b>corps entier 2-3 fois</b> par semaine ; ajouter cardio et marche quotidienne.",
            "Séance type : échauffement, <b>squat, pousser, tirer, charnière, gainage</b>, 3 × 8-12.",
            "<b>Double progression</b> : répétitions d’abord, puis charge.",
            "<b>Semaine allégée</b> toutes les 4-8 semaines ; garder les exercices 8-12 semaines ; un programme <b>tenable</b>.",
          ],
          retenir: "Un programme simple, suivi et noté pendant des mois bat n’importe quel programme parfait abandonné.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "La récupération",
      minutes: 15,
      objectives: ["Comprendre le rôle du sommeil, de l’alimentation et du repos", "Reconnaître les signes de fatigue excessive"],
      steps: [
        {
          type: "lesson",
          title: "Là où se fait le progrès",
          slides: [
            {
              title: "Le sommeil",
              body:
                "<ul><li>Il est recommandé aux adultes de dormir <b>7 à 9 heures</b> par nuit.</li><li>Pendant le sommeil profond, l’organisme sécrète l’hormone de croissance et répare les tissus.</li><li>Le manque de sommeil réduit la force, l’endurance, la motivation, et augmente le risque de blessure.</li><li>Habitudes utiles : horaires réguliers, chambre fraîche et sombre, écrans réduits avant le coucher, pas de caféine en fin de journée.</li></ul>",
            },
            {
              title: "L’alimentation de base",
              body:
                "<ul><li><b>Protéines</b> : elles fournissent les briques pour réparer et construire le muscle. Pour progresser en musculation, un repère issu des études est d’environ <b>1,6 g par kg de poids et par jour</b>, réparti sur les repas (viande, poisson, œufs, laitages, légumineuses, tofu).</li><li><b>Glucides</b> : le carburant des efforts intenses et longs.</li><li><b>Légumes, fruits</b> : vitamines, minéraux, fibres.</li><li><b>Hydratation</b> : boire régulièrement ; une urine claire est un bon indicateur.</li></ul><p>Pour aller plus loin, le Restaurant du campus accueillera bientôt des cours de nutrition.</p>",
            },
            {
              title: "Les courbatures",
              body:
                "<ul><li>Les <b>courbatures</b> apparaissent 24 à 72 heures après un effort nouveau ou inhabituel, surtout avec des mouvements de freinage (descentes, phases de descente lentes).</li><li>Elles diminuent quand on répète le même exercice : le corps s’adapte.</li><li>Elles ne sont <b>pas</b> un indicateur d’une bonne séance.</li><li>Une activité légère (marche, vélo tranquille) les soulage souvent mieux que le repos total.</li></ul>",
            },
            {
              title: "Trop de fatigue",
              body:
                "<p>Signes que la charge dépasse la récupération :</p><ul><li>performances qui <b>baissent</b> plusieurs séances de suite ;</li><li>fatigue persistante, sommeil perturbé, irritabilité ;</li><li>fréquence cardiaque au repos <b>inhabituellement élevée</b> plusieurs matins de suite ;</li><li>douleurs qui traînent, petites maladies à répétition.</li></ul><p>Réponse : alléger la semaine, dormir plus, vérifier l’alimentation. Si cela persiste malgré le repos, consulter un médecin.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Sommeil recommandé (adulte)", back: "7 à 9 heures par nuit" },
            { front: "Protéines (repère musculation)", back: "Environ 1,6 g par kg et par jour, réparties sur les repas" },
            { front: "Courbatures", back: "24-72 h après un effort inhabituel ; pas un signe de séance réussie" },
            { front: "Soulager les courbatures", back: "Activité légère plutôt que repos total" },
            { front: "Signes de fatigue excessive", back: "Performances en baisse, FC de repos élevée, sommeil perturbé, irritabilité" },
            { front: "Hydratation", back: "Boire régulièrement ; urine claire = bon repère" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pour une personne de 70 kg qui fait de la musculation, un repère d’apport en protéines est d’environ…", options: ["30 g par jour", "110 g par jour", "300 g par jour"], answer: 1, explain: "70 × 1,6 ≈ 112 g, répartis sur la journée." },
            { q: "Pas de courbatures après la séance signifie…", options: ["que la séance était inutile", "rien de particulier : le corps s’est habitué", "qu’il faut doubler la charge"], answer: 1, explain: "Les courbatures ne mesurent pas l’efficacité." },
            { q: "Ta FC au repos est 8 battements plus haute que d’habitude depuis 4 matins et tes performances baissent. Tu…", options: ["t’entraînes plus fort", "allèges la semaine et soignes ton sommeil", "ignores ces signes"], answer: 1, explain: "Signes possibles de fatigue accumulée ou de maladie qui commence." },
            { q: "Pourquoi le sommeil est-il essentiel à la progression ?", options: ["Il n’a pas d’effet", "C’est pendant le sommeil que l’organisme répare et reconstruit", "Il fait perdre du muscle"], answer: 1, explain: "Hormone de croissance et réparation des tissus." },
          ],
        },
        {
          type: "case",
          title: "Les nuits de 5 heures",
          story:
            "Noa s’entraîne 5 fois par semaine mais dort 5 heures par nuit à cause du travail. Ses charges stagnent depuis deux mois et il se blesse légèrement à l’épaule.",
          question: "Quelle est la priorité ?",
          options: [
            "Ajouter une sixième séance",
            "Récupérer : viser au moins 7 heures de sommeil, quitte à passer à 3 séances par semaine bien faites ; vérifier les protéines et faire examiner l’épaule si la douleur persiste",
            "Prendre plus de café avant les séances",
          ],
          answer: 1,
          explain:
            "Sans récupération, l’entraînement crée de la fatigue au lieu de progrès. Moins de séances mieux récupérées donnent souvent de meilleurs résultats.",
        },
        {
          type: "fiche",
          title: "Récupération",
          points: [
            "<b>Sommeil</b> : 7 à 9 h, horaires réguliers, chambre fraîche et sombre.",
            "Alimentation : <b>protéines ≈ 1,6 g/kg/jour</b> pour la musculation, glucides pour l’effort, légumes, <b>hydratation</b>.",
            "<b>Courbatures</b> : normales après un effort nouveau, pas un indicateur de qualité ; activité légère.",
            "Fatigue excessive : <b>performances en baisse</b>, <b>FC de repos élevée</b>, sommeil perturbé → alléger, dormir, consulter si ça persiste.",
          ],
          retenir: "Le muscle se construit au lit et à table autant qu’à la salle.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Prévenir et gérer les blessures",
      minutes: 16,
      objectives: ["Comprendre pourquoi on se blesse", "Réagir correctement à une douleur ou à une blessure"],
      steps: [
        {
          type: "lesson",
          title: "Durer dans le sport",
          slides: [
            {
              title: "Pourquoi on se blesse",
              body:
                "<ul><li>La cause la plus fréquente des blessures de « surcharge » (tendons, os, muscles) est une <b>augmentation trop rapide</b> de la charge : plus de séances, plus de kilomètres, plus de poids d’un coup.</li><li>Les tendons et les os s’adaptent <b>plus lentement</b> que les muscles et le souffle : on se sent capable d’en faire plus avant que les tissus soient prêts.</li><li>Autres facteurs : fatigue, manque de sommeil, technique dégradée en fin de série, reprise après une pause.</li><li>Repère souvent cité : augmenter le volume hebdomadaire <b>progressivement</b> (on parle parfois de 10 % par semaine ; c’est un ordre de grandeur, pas une loi).</li></ul>",
            },
            {
              title: "Inconfort ou douleur ?",
              body:
                "<table class='t'><tr><th>Normal</th><th>Signal d’alerte</th></tr><tr><td>Brûlure musculaire pendant l’effort</td><td>Douleur <b>aiguë</b>, en coup de poignard, ou un « claquement »</td></tr><tr><td>Courbatures diffuses 1 à 3 jours</td><td>Douleur localisée sur un point précis, qui s’aggrave</td></tr><tr><td>Fatigue générale</td><td><b>Gonflement</b>, hématome, articulation instable</td></tr><tr><td>Légère raideur qui disparaît à l’échauffement</td><td>Douleur qui réveille la <b>nuit</b> ou boiterie</td></tr></table><p>Repère pratique : une douleur qui reste <b>légère</b> (2-3/10 au maximum), qui ne s’aggrave pas pendant la séance et qui est revenue à son niveau habituel le lendemain est en général acceptable.</p>",
            },
            {
              title: "Réagir à une blessure : PEACE & LOVE",
              body:
                "<p>Les recommandations récentes pour les lésions des tissus mous (entorse, élongation) :</p><ul><li><b>Les premiers jours (PEACE)</b> : Protéger (éviter les mouvements douloureux 1 à 3 jours), Élever le membre, Éviter les anti-inflammatoires et la glace en excès qui peuvent gêner la cicatrisation, Comprimer, Éduquer (comprendre la blessure, éviter les traitements passifs inutiles).</li><li><b>Ensuite (LOVE)</b> : charger progressivement (Load) selon la douleur, rester Optimiste, faire du cardio sans douleur pour la Vascularisation, et des Exercices de rééducation.</li></ul><p>Le repos total prolongé ralentit souvent la guérison : le mouvement adapté fait partie du traitement.</p>",
            },
            {
              title: "Quand consulter",
              body:
                "<ul><li><b>Appeler le 15</b> : douleur thoracique, malaise, essoufflement anormal, perte de connaissance, traumatisme crânien avec symptômes.</li><li><b>Consulter rapidement</b> : déformation, impossibilité de poser le pied ou d’utiliser le membre, gonflement important, sensation de claquement suivie d’une perte de force, engourdissement.</li><li><b>Consulter si</b> une douleur persiste au-delà d’une à deux semaines malgré l’allègement, ou revient à chaque reprise.</li></ul><p>Un médecin du sport ou un kinésithérapeute peut ensuite guider une reprise progressive.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Normal ou signal d’alerte ?",
          instruction: "Cette sensation est-elle normale ou faut-il s’arrêter et faire examiner ?",
          categories: ["Normal", "S’arrêter / consulter"],
          items: [
            { text: "Brûlure dans les cuisses en fin de série de squats", cat: 0, why: "Fatigue musculaire normale." },
            { text: "Claquement à l’arrière du mollet puis douleur vive", cat: 1, why: "Possible déchirure ou rupture." },
            { text: "Courbatures aux pectoraux 2 jours après les pompes", cat: 0, why: "Courbatures classiques." },
            { text: "Cheville gonflée et impossible de poser le pied", cat: 1, why: "Consulter rapidement." },
            { text: "Douleur au tibia qui augmente à chaque course et réveille la nuit", cat: 1, why: "Possible fracture de fatigue." },
            { text: "Légère raideur matinale qui disparaît après l’échauffement", cat: 0, why: "Souvent bénin." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Première cause de blessure de surcharge", back: "Augmenter la charge trop vite" },
            { front: "Tendons et os", back: "S’adaptent plus lentement que les muscles et le souffle" },
            { front: "Douleur acceptable (repère)", back: "≤ 2-3/10, stable pendant la séance, revenue à la normale le lendemain" },
            { front: "PEACE", back: "Protéger, Élever, Éviter anti-inflammatoires et glace en excès, Comprimer, Éduquer" },
            { front: "LOVE", back: "Charger progressivement, Optimisme, Vascularisation (cardio sans douleur), Exercices" },
            { front: "Appeler le 15", back: "Douleur thoracique, malaise, essoufflement anormal, perte de connaissance" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "La cause la plus fréquente des tendinites et fractures de fatigue est…", options: ["le manque d’étirements", "une augmentation trop rapide de la charge", "le fait de boire trop d’eau"], answer: 1, explain: "Les tissus n’ont pas eu le temps de s’adapter." },
            { q: "Après une entorse légère de cheville, les recommandations actuelles conseillent…", options: ["un repos total d’un mois", "protéger quelques jours puis reprendre progressivement le mouvement", "courir dessus immédiatement"], answer: 1, explain: "PEACE puis LOVE." },
            { q: "Une douleur au tibia qui augmente à chaque sortie et réveille la nuit doit faire…", options: ["continuer à courir", "arrêter la course et consulter", "changer de chaussettes"], answer: 1, explain: "Suspicion de fracture de fatigue." },
            { q: "Pourquoi se sent-on capable d’en faire plus que ce que les tendons supportent ?", options: ["Les tendons s’adaptent plus lentement que le souffle et les muscles", "C’est faux", "Les tendons ne s’adaptent jamais"], answer: 0, explain: "D’où l’importance d’une progression patiente." },
          ],
        },
        {
          type: "case",
          title: "La préparation du semi-marathon",
          story:
            "Karim s’inscrit à un semi-marathon dans 6 semaines. Il passe de 10 à 40 km par semaine dès la première semaine. Au bout de 15 jours, une douleur apparaît sous le genou ; il continue « pour ne pas perdre le rythme ». Elle devient permanente.",
          question: "Qu’aurait-il dû faire ?",
          options: [
            "Courir encore plus pour s’habituer",
            "Augmenter progressivement son volume sur plusieurs mois et choisir une course plus lointaine ; dès la douleur, alléger fortement, ne garder que des sorties sans douleur (ou du vélo) et consulter si la douleur persiste",
            "Prendre des anti-inflammatoires et continuer",
          ],
          answer: 1,
          explain:
            "Quadrupler le volume d’un coup dépasse la capacité d’adaptation des tendons. Écouter une douleur tôt évite souvent plusieurs mois d’arrêt.",
        },
        {
          type: "fiche",
          title: "Blessures",
          points: [
            "Cause n° 1 : <b>charge augmentée trop vite</b> ; tendons et os s’adaptent <b>plus lentement</b>.",
            "Douleur acceptable : <b>≤ 2-3/10</b>, stable, revenue le lendemain ; alerte : aiguë, localisée, gonflement, nocturne, boiterie.",
            "<b>PEACE & LOVE</b> : protéger quelques jours, puis charger progressivement ; éviter le repos total prolongé.",
            "<b>15</b> pour douleur thoracique ou malaise ; consulter si déformation, impossibilité d’appui, douleur qui persiste.",
          ],
          retenir: "Progresse lentement et écoute les douleurs tôt : la meilleure performance, c’est de pouvoir continuer.",
        },
      ],
    },
  ],
});
