/* ============================================================
   COURS : L’art de la parole — les fondations de l’éloquence
   Académie d’Éloquence · 8 séances de 15 à 20 minutes
   Rhétorique antique, préparer un discours, voix et corps,
   figures de style, argumenter et repérer les sophismes,
   débattre, enrichir son vocabulaire, situations concrètes
   (pitch, réunion, entretien, vidéo, improvisation).
   ============================================================ */
AGORA.registerCourse({
  id: "eloquence-bases",
  faculty: "eloquence",
  title: "L’art de la parole — les fondations de l’éloquence",
  subtitle: "Convaincre, captiver et débattre : de la rhétorique antique au pitch",
  color: "#b8336a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour parler mieux en public et convaincre : les leçons de la rhétorique antique, construire un discours, maîtriser sa voix, son corps et son trac, utiliser les figures de style, argumenter solidement et repérer les pièges, débattre avec calme, enrichir son vocabulaire, et s’entraîner sur des situations réelles : pitch, réunion, entretien, vidéo et improvisation.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Les leçons des Anciens",
      minutes: 15,
      objectives: ["Connaître les trois leviers de la persuasion selon Aristote", "Découvrir les cinq étapes de la rhétorique classique"],
      steps: [
        {
          type: "lesson",
          title: "La rhétorique, un art de 2 500 ans",
          slides: [
            {
              title: "Pourquoi la rhétorique est née",
              body:
                "<ul><li>La <b>rhétorique</b> est l’art de bien parler pour convaincre. Elle naît en Grèce au Ve siècle avant J.-C., quand les citoyens doivent plaider eux-mêmes leurs causes devant des tribunaux et prendre la parole à l’assemblée.</li><li><b>Démosthène</b>, l’un des plus grands orateurs athéniens, aurait travaillé sa diction avec des cailloux dans la bouche pour vaincre un défaut d’élocution : l’éloquence s’apprend.</li><li>À Rome, <b>Cicéron</b> et <b>Quintilien</b> en font une discipline d’éducation complète.</li><li>Aujourd’hui : plaidoiries, discours politiques, pitchs, réunions, vidéos, entretiens… les mêmes principes s’appliquent.</li></ul>",
            },
            {
              title: "Ethos, pathos, logos",
              body:
                "<p>Pour <b>Aristote</b>, on persuade par trois moyens :</p><div class='tiers'><div><b>Ethos</b><span>La crédibilité de l’orateur : compétence, honnêteté, bienveillance. On écoute quelqu’un en qui on a confiance.</span></div><div><b>Pathos</b><span>Les émotions suscitées chez le public : enthousiasme, indignation, espoir, peur.</span></div><div><b>Logos</b><span>La logique des arguments : faits, chiffres, raisonnements, exemples.</span></div></div><p>Un bon discours combine les trois. Trop de logos ennuie, trop de pathos manipule, sans ethos personne n’écoute.</p>",
            },
            {
              title: "Les cinq étapes de Cicéron",
              body:
                "<table class='t'><tr><th>Étape</th><th>Sens</th><th>Aujourd’hui</th></tr><tr><td><b>Inventio</b></td><td>Trouver les idées et les arguments</td><td>Recherche, brainstorming</td></tr><tr><td><b>Dispositio</b></td><td>Les organiser</td><td>Le plan</td></tr><tr><td><b>Elocutio</b></td><td>Choisir les mots et le style</td><td>L’écriture, les formules</td></tr><tr><td><b>Memoria</b></td><td>Mémoriser</td><td>Répéter, se libérer des notes</td></tr><tr><td><b>Actio</b></td><td>Prononcer le discours</td><td>Voix, regard, gestes</td></tr></table>",
            },
            {
              title: "Les trois genres de discours",
              body:
                "<ul><li><b>Judiciaire</b> : accuser ou défendre, sur des faits passés (plaidoirie, mais aussi expliquer un incident à un client).</li><li><b>Délibératif</b> : conseiller ou déconseiller une décision future (réunion, assemblée, pitch à un investisseur).</li><li><b>Épidictique</b> : louer ou blâmer, au présent (discours de mariage, hommage, remerciements, discours d’inauguration).</li></ul><p>Savoir dans quel genre on parle aide à choisir le ton et les arguments.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Ethos, pathos ou logos ?",
          instruction: "Quel levier de persuasion chaque phrase utilise-t-elle surtout ?",
          categories: ["Ethos (crédibilité)", "Pathos (émotion)", "Logos (logique)"],
          items: [
            { text: "« Après 10 ans dans la logistique, je peux vous dire que… »", cat: 0, why: "L’orateur établit sa compétence." },
            { text: "« Imaginez le visage de vos enfants quand… »", cat: 1, why: "Appel à l’émotion." },
            { text: "« Nos ventes ont progressé de 32 % en un an. »", cat: 2, why: "Un fait chiffré." },
            { text: "« Si les coûts baissent et que le prix reste stable, la marge augmente. »", cat: 2, why: "Raisonnement." },
            { text: "« Je me suis trompé l’an dernier, et voici ce que j’en ai appris. »", cat: 0, why: "L’honnêteté renforce la confiance." },
            { text: "« C’est une injustice qui révolte chacun d’entre nous ! »", cat: 1, why: "Indignation." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Rhétorique", back: "L’art de bien parler pour convaincre" },
            { front: "Ethos", back: "La crédibilité de l’orateur" },
            { front: "Pathos", back: "Les émotions suscitées chez le public" },
            { front: "Logos", back: "La logique des arguments" },
            { front: "Les 5 étapes", back: "Inventio, dispositio, elocutio, memoria, actio" },
            { front: "Genre délibératif", back: "Conseiller une décision future : réunion, pitch" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qui a distingué ethos, pathos et logos ?", options: ["Aristote", "Napoléon", "Molière"], answer: 0, explain: "Dans sa Rhétorique." },
            { q: "L’« actio », c’est…", options: ["trouver les idées", "prononcer le discours (voix, gestes, regard)", "écrire le plan"], answer: 1, explain: "La performance orale." },
            { q: "Un discours de remerciements lors d’un départ en retraite est…", options: ["judiciaire", "délibératif", "épidictique"], answer: 2, explain: "Il loue au présent." },
            { q: "Que se passe-t-il si un discours n’a que du pathos ?", options: ["Il risque d’être perçu comme manipulateur", "Il est parfait", "Il est trop logique"], answer: 0, explain: "L’émotion doit s’appuyer sur des faits et sur la confiance." },
          ],
        },
        {
          type: "case",
          title: "Le pitch sans confiance",
          story:
            "Noa présente un projet à un investisseur : tableaux de chiffres pendant 15 minutes, sans dire qui il est ni pourquoi ce projet lui tient à cœur. L’investisseur décroche au bout de 5 minutes.",
          question: "Qu’a-t-il négligé ?",
          options: [
            "Il n’avait pas assez de chiffres",
            "L’ethos (son parcours, ses résultats, pourquoi lui) et le pathos (le problème réel du client, la vision) : les chiffres (logos) convainquent mieux quand l’auditoire a confiance et se sent concerné",
            "Il aurait dû parler plus vite",
          ],
          answer: 1,
          explain:
            "Commencer par une histoire courte et crédible, puis appuyer avec des chiffres choisis, rend le logos bien plus efficace.",
        },
        {
          type: "fiche",
          title: "Les Anciens",
          points: [
            "Rhétorique : née en Grèce ; <b>Démosthène</b>, <b>Cicéron</b>, <b>Quintilien</b> ; l’éloquence s’apprend.",
            "<b>Ethos</b> (crédibilité), <b>pathos</b> (émotion), <b>logos</b> (logique) : les combiner.",
            "5 étapes : <b>inventio, dispositio, elocutio, memoria, actio</b>.",
            "3 genres : <b>judiciaire</b> (passé), <b>délibératif</b> (futur), <b>épidictique</b> (présent).",
          ],
          retenir: "On convainc avec sa crédibilité, les émotions qu’on suscite et la solidité de ses arguments : les trois ensemble.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Construire son discours",
      minutes: 16,
      objectives: ["Définir un message clair adapté à son public", "Structurer un discours avec une accroche et une conclusion fortes"],
      steps: [
        {
          type: "lesson",
          title: "De l’idée au plan",
          slides: [
            {
              title: "Trois questions avant d’écrire",
              body:
                "<ol><li><b>Qui</b> est mon public ? Ce qu’il sait déjà, ce qui l’intéresse, ce qui l’inquiète.</li><li><b>Que</b> veux-je qu’il fasse, pense ou ressente à la fin ? (acheter, voter, retenir une idée, passer à l’action).</li><li>Quel est mon <b>message en une phrase</b> ? Si on ne peut pas le résumer en une phrase, le public ne le retiendra pas.</li></ol><p>Exemple : « Notre solution de stockage à Caen permet aux commerçants de libérer de la place et de livrer plus vite. »</p>",
            },
            {
              title: "Les plans qui marchent",
              body:
                "<table class='t'><tr><th>Plan</th><th>Quand l’utiliser</th></tr><tr><td><b>Problème → cause → solution</b></td><td>Pitch, proposition commerciale</td></tr><tr><td><b>Passé → présent → futur</b></td><td>Bilan, vœux, histoire d’entreprise</td></tr><tr><td><b>Thèse → antithèse → synthèse</b></td><td>Réflexion, débat d’idées</td></tr><tr><td><b>Situation → complication → résolution</b></td><td>Raconter une histoire</td></tr><tr><td><b>Trois points</b></td><td>Presque tout : le cerveau retient bien les listes de trois</td></tr></table>",
            },
            {
              title: "L’accroche",
              body:
                "<p>Les 30 premières secondes décident de l’attention. Évite « Bonjour, je vais vous parler de… ». Essaie plutôt :</p><ul><li>une <b>question</b> : « Combien de temps perdez-vous chaque semaine à chercher un document ? »</li><li>un <b>chiffre</b> surprenant ;</li><li>une <b>anecdote</b> courte et personnelle ;</li><li>une <b>image</b> ou un objet montré ;</li><li>une <b>citation</b> pertinente (pas trop connue ni trop longue).</li></ul>",
            },
            {
              title: "La conclusion",
              body:
                "<ul><li><b>Résumer</b> le message en une phrase (on peut reprendre l’accroche : effet de boucle).</li><li>Donner un <b>appel à l’action</b> clair : « Testez-le gratuitement cette semaine », « Votez pour ce projet ».</li><li>Finir sur une phrase <b>préparée mot à mot</b>, puis se taire et laisser un silence.</li><li>Éviter « Voilà, c’est tout… » ou « Je crois que j’ai fini » qui affaiblissent tout le discours.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel plan ?",
          instruction: "Quel plan convient le mieux à chaque prise de parole ?",
          categories: ["Problème → solution", "Passé → présent → futur", "Thèse → antithèse → synthèse"],
          items: [
            { text: "Présenter ton offre de stockage à un commerçant débordé", cat: 0, why: "Partir de son problème." },
            { text: "Discours pour les 5 ans de l’entreprise", cat: 1, why: "Récit chronologique." },
            { text: "Exposé : « Le télétravail est-il bénéfique ? »", cat: 2, why: "Question qui appelle une réflexion nuancée." },
            { text: "Pitch d’une application qui fait gagner du temps", cat: 0, why: "Montrer le problème puis la solution." },
            { text: "Vœux de nouvelle année à l’équipe", cat: 1, why: "Bilan et perspectives." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Avant d’écrire", back: "Qui est mon public ? Que doit-il faire ? Quel message en une phrase ?" },
            { front: "Plan problème → solution", back: "Idéal pour un pitch ou une proposition commerciale" },
            { front: "Règle de trois", back: "Le public retient bien trois idées" },
            { front: "Accroche efficace", back: "Question, chiffre surprenant, anecdote, objet, citation" },
            { front: "Effet de boucle", back: "Reprendre l’accroche dans la conclusion" },
            { front: "Fin du discours", back: "Message + appel à l’action + phrase préparée + silence" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle accroche est la plus efficace ?", options: ["« Bonjour, je vais vous parler de notre entreprise. »", "« Saviez-vous qu’un commerçant passe en moyenne plusieurs heures par semaine à gérer son stock ? »", "« Bon, alors, euh… »"], answer: 1, explain: "Une question chiffrée qui concerne le public." },
            { q: "Pourquoi formuler son message en une phrase ?", options: ["Pour que le public puisse le retenir", "Pour parler moins longtemps", "Ce n’est pas utile"], answer: 0, explain: "Si l’orateur ne peut pas le résumer, le public non plus." },
            { q: "Comment finir un discours ?", options: ["« Voilà, je crois que c’est tout. »", "Une phrase préparée, un appel à l’action, puis un silence", "En s’excusant d’avoir été long"], answer: 1, explain: "La fin est ce que le public retient le plus." },
            { q: "Combien d’idées principales viser dans un discours court ?", options: ["Une dizaine", "Environ trois", "Une seule phrase sans idée"], answer: 1, explain: "Règle de trois." },
          ],
        },
        {
          type: "case",
          title: "La présentation catalogue",
          story:
            "Sofia doit présenter sa marque en 3 minutes devant des commerçants. Elle prévoit de lister ses 25 produits, un par un, dans l’ordre du catalogue.",
          question: "Comment l’améliorer ?",
          options: [
            "Lister encore plus de produits",
            "Partir du problème des commerçants, présenter 3 produits phares qui y répondent avec un exemple concret, et finir par une offre claire (échantillon, remise de lancement) ; le catalogue complet peut être remis sur papier",
            "Lire le catalogue plus vite",
          ],
          answer: 1,
          explain:
            "À l’oral, moins c’est plus : un message, trois preuves, un appel à l’action.",
        },
        {
          type: "fiche",
          title: "Construire",
          points: [
            "Trois questions : <b>public</b>, <b>objectif</b>, <b>message en une phrase</b>.",
            "Plans : <b>problème → solution</b>, passé → présent → futur, thèse → antithèse → synthèse, récit, <b>règle de trois</b>.",
            "<b>Accroche</b> : question, chiffre, anecdote, objet, citation.",
            "<b>Conclusion</b> : résumé, <b>appel à l’action</b>, phrase préparée, silence.",
          ],
          retenir: "Un bon discours tient en une phrase, se démontre en trois points et se termine par une action.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "La voix, le corps et le trac",
      minutes: 16,
      objectives: ["Utiliser sa voix et son corps pour captiver", "Gérer le trac"],
      steps: [
        {
          type: "lesson",
          title: "L’actio : on écoute aussi avec les yeux",
          slides: [
            {
              title: "Le corps",
              body:
                "<ul><li><b>Ancrage</b> : pieds à largeur de hanches, poids réparti, sans se balancer.</li><li><b>Regard</b> : balayer la salle et poser le regard 2 à 3 secondes sur une personne, puis une autre, dans différentes zones.</li><li><b>Gestes</b> : mains visibles, au-dessus de la ceinture, gestes ouverts qui accompagnent les idées (énumérer sur les doigts, montrer une taille, ouvrir les bras).</li><li>À éviter : bras croisés, mains dans les poches, jouer avec un stylo, tourner le dos au public pour lire l’écran.</li><li><b>Sourire</b> au début et quand c’est approprié : il détend l’orateur et le public.</li></ul>",
            },
            {
              title: "La voix",
              body:
                "<ul><li><b>Volume</b> : parler pour le dernier rang.</li><li><b>Débit</b> : sous le stress, on accélère. Un rythme d’environ 130 à 160 mots par minute est confortable ; ralentir sur les idées importantes.</li><li><b>Pauses</b> : la pause est l’outil le plus puissant de l’orateur. Avant une idée clé, après une question, après un chiffre.</li><li><b>Intonation</b> : varier la hauteur et l’intensité pour éviter la monotonie.</li><li><b>Articulation</b> : ouvrir la bouche, finir ses phrases sans baisser la voix.</li><li>Remplacer les « euh » par un <b>silence</b> : il paraît bien plus assuré.</li></ul>",
            },
            {
              title: "Les exercices",
              body:
                "<ul><li><b>Respiration abdominale</b> : inspirer par le nez en gonflant le ventre (4 secondes), expirer lentement par la bouche (6 à 8 secondes).</li><li><b>Virelangues</b> pour l’articulation : « Les chaussettes de l’archiduchesse sont-elles sèches, archi-sèches ? », « Un chasseur sachant chasser doit savoir chasser sans son chien ».</li><li>Lire un texte à voix haute avec un <b>crayon entre les dents</b>, puis sans : la diction s’améliore.</li><li>Se <b>filmer</b> et se regarder (sans se juger durement) : c’est le moyen le plus rapide de progresser.</li></ul>",
            },
            {
              title: "Le trac",
              body:
                "<ul><li>Le trac est <b>normal</b> : c’est une réaction d’alerte (cœur rapide, mains moites) qui donne aussi de l’énergie. Même les grands orateurs le ressentent.</li><li>Le public perçoit beaucoup moins notre stress que nous ne l’imaginons.</li><li>Avant : bien connaître son <b>début</b> par cœur, répéter à voix haute (pas seulement dans sa tête), arriver en avance, respirer lentement.</li><li>Pendant : chercher des visages bienveillants, boire une gorgée d’eau, faire une pause si l’on perd le fil.</li><li>Changer l’interprétation : « je suis excité » plutôt que « je suis stressé » aide souvent.</li><li>Un trac paralysant et durable qui empêche de vivre normalement peut se travailler avec un professionnel.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Ça aide ou ça dessert ?",
          instruction: "Ce comportement renforce-t-il ou affaiblit-il l’orateur ?",
          categories: ["Renforce", "Affaiblit"],
          items: [
            { text: "Faire une pause de 2 secondes avant le chiffre clé", cat: 0, why: "La pause crée l’attente." },
            { text: "Lire ses diapositives dos au public", cat: 1, why: "Perte du contact visuel." },
            { text: "Remplacer les « euh » par un silence", cat: 0, why: "Paraît plus assuré." },
            { text: "Se balancer d’un pied sur l’autre", cat: 1, why: "Trahit la nervosité, distrait." },
            { text: "Regarder différentes personnes quelques secondes", cat: 0, why: "Chacun se sent concerné." },
            { text: "Accélérer pour finir plus vite", cat: 1, why: "Le public décroche." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Ancrage", back: "Pieds à largeur de hanches, poids réparti, pas de balancement" },
            { front: "Regard", back: "2 à 3 secondes par personne, dans différentes zones de la salle" },
            { front: "Débit confortable", back: "Environ 130-160 mots par minute ; ralentir sur l’essentiel" },
            { front: "Remplacer les « euh »", back: "Par un silence" },
            { front: "Respiration anti-trac", back: "Inspirer 4 s par le nez (ventre), expirer 6-8 s par la bouche" },
            { front: "Le trac", back: "Normal, donne de l’énergie, moins visible qu’on ne le croit" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est l’outil le plus puissant de l’orateur selon de nombreux coachs ?", options: ["Le volume maximum", "La pause", "Les diapositives"], answer: 1, explain: "Elle souligne, laisse réfléchir et donne de l’assurance." },
            { q: "Que faire de ses mains ?", options: ["Les garder dans les poches", "Les garder visibles et accompagner les idées", "Les croiser"], answer: 1, explain: "Gestes ouverts au-dessus de la ceinture." },
            { q: "Pour gérer le trac, il est utile de…", options: ["connaître son début par cœur et répéter à voix haute", "improviser complètement", "éviter de respirer"], answer: 0, explain: "Le début est le moment le plus stressant." },
            { q: "Pourquoi se filmer ?", options: ["Pour voir ses tics et progresser vite", "Pour publier immédiatement", "Ce n’est pas utile"], answer: 0, explain: "On découvre ce que voit le public." },
          ],
        },
        {
          type: "case",
          title: "La première prise de parole",
          story:
            "Karim doit présenter les résultats de son équipe devant 30 personnes. Il a la voix qui tremble, parle très vite, regarde ses notes et dit « euh » toutes les deux phrases.",
          question: "Quels conseils prioritaires lui donner ?",
          options: [
            "Parler encore plus vite pour finir rapidement",
            "Répéter plusieurs fois à voix haute, apprendre la première minute par cœur, respirer lentement avant, ralentir volontairement, remplacer les « euh » par des pauses, et lever les yeux vers quelques visages bienveillants",
            "Refuser toute prise de parole à l’avenir",
          ],
          answer: 1,
          explain:
            "La répétition à voix haute est l’antidote principal du trac : on ne craint plus ce qu’on a déjà fait plusieurs fois.",
        },
        {
          type: "fiche",
          title: "Voix, corps, trac",
          points: [
            "Corps : <b>ancrage</b>, <b>regard</b> 2-3 s par personne, gestes ouverts, sourire.",
            "Voix : volume, <b>débit</b> 130-160 mots/min, <b>pauses</b>, intonation, articulation ; silence plutôt que « euh ».",
            "Exercices : <b>respiration</b> 4/6-8, virelangues, crayon entre les dents, se <b>filmer</b>.",
            "Trac : normal ; début par cœur, <b>répéter à voix haute</b>, respirer, visages bienveillants.",
          ],
          retenir: "Ralentis, respire, regarde : un orateur posé paraît sûr de lui, même s’il a le trac.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Les figures de style",
      minutes: 16,
      objectives: ["Reconnaître les figures de style les plus efficaces à l’oral", "Les utiliser pour rendre ses phrases mémorables"],
      steps: [
        {
          type: "lesson",
          title: "Les formules qui marquent",
          slides: [
            {
              title: "La répétition qui fait vibrer",
              body:
                "<ul><li><b>Anaphore</b> : répéter les mêmes mots en début de phrase. Le célèbre « I have a dream » de Martin Luther King (1963) en est l’exemple le plus connu. Ex. : « Nous voulons des commerces vivants. Nous voulons des rues animées. Nous voulons un quartier où l’on a envie de rester. »</li><li><b>Gradation</b> : enchaîner des termes de plus en plus forts. « C’est une idée, un projet, une ambition. »</li><li><b>Rythme ternaire</b> : trois éléments qui sonnent bien ensemble. « Venu, vu, vaincu » (« Veni, vidi, vici », attribué à César).</li></ul>",
            },
            {
              title: "Les images",
              body:
                "<ul><li><b>Comparaison</b> : rapprocher deux réalités avec un outil (comme, tel, pareil à). « Une entreprise sans trésorerie est comme une voiture sans essence. »</li><li><b>Métaphore</b> : la même chose sans outil de comparaison. « La trésorerie est le carburant de l’entreprise. »</li><li><b>Hypotypose</b> : décrire une scène de façon si vivante que le public la voit. « Il est 7 heures, le camion arrive, les cartons s’empilent dans l’allée… »</li><li>Les images rendent concret ce qui est abstrait et restent en mémoire bien plus longtemps que les chiffres seuls.</li></ul>",
            },
            {
              title: "Les oppositions",
              body:
                "<ul><li><b>Antithèse</b> : opposer deux idées. « Il faut manger pour vivre et non vivre pour manger » (Molière, <i>L’Avare</i>).</li><li><b>Chiasme</b> : structure en miroir A-B-B-A. « Il faut manger pour vivre et non vivre pour manger » est aussi un chiasme ; autre exemple : « Ne demandez pas ce que votre pays peut faire pour vous, demandez ce que vous pouvez faire pour votre pays » (J. F. Kennedy, 1961).</li><li><b>Oxymore</b> : associer deux mots contraires. « Cette obscure clarté » (Corneille), « un silence assourdissant ».</li></ul>",
            },
            {
              title: "Les figures du débat",
              body:
                "<ul><li><b>Question rhétorique</b> : une question dont la réponse est évidente, pour faire réfléchir. « Qui ici veut payer plus pour moins de service ? »</li><li><b>Prétérition</b> : dire qu’on ne va pas parler de quelque chose… tout en en parlant. « Je ne parlerai pas des retards répétés de ce fournisseur… »</li><li><b>Litote</b> : dire moins pour suggérer plus. « Ce n’est pas mauvais » pour « c’est très bon » ; « Va, je ne te hais point » (Corneille, <i>Le Cid</i>).</li><li><b>Hyperbole</b> : exagérer pour frapper. « Je vous l’ai dit mille fois. »</li></ul><p>Bien dosées, les figures rendent un discours vivant ; trop nombreuses, elles sonnent artificielles.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle figure ?",
          instruction: "Identifie la figure de style principale.",
          categories: ["Anaphore", "Métaphore", "Antithèse / chiasme"],
          items: [
            { text: "« Nous innoverons. Nous recruterons. Nous grandirons. »", cat: 0, why: "Répétition de « Nous » en début de phrase." },
            { text: "« Ce client est une mine d’or. »", cat: 1, why: "Image sans outil de comparaison." },
            { text: "« Petit prix, grande qualité. »", cat: 2, why: "Opposition petit / grand." },
            { text: "« Le temps, c’est de l’argent. »", cat: 1, why: "Image." },
            { text: "« Un pour tous, tous pour un. »", cat: 2, why: "Structure en miroir (chiasme)." },
            { text: "« Chaque jour, nous livrons. Chaque jour, nous apprenons. »", cat: 0, why: "Répétition de « Chaque jour »." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Anaphore", back: "Répétition en début de phrases : « Nous voulons… Nous voulons… »" },
            { front: "Métaphore", back: "Image sans outil de comparaison : « la trésorerie est le carburant »" },
            { front: "Antithèse", back: "Opposition de deux idées" },
            { front: "Chiasme", back: "Structure en miroir A-B-B-A" },
            { front: "Prétérition", back: "Dire qu’on ne parlera pas de quelque chose en en parlant" },
            { front: "Litote", back: "Dire moins pour suggérer plus : « Ce n’est pas mauvais »" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "« Il faut manger pour vivre et non vivre pour manger » est…", options: ["un chiasme", "une litote", "une hyperbole"], answer: 0, explain: "Structure en miroir (et antithèse)." },
            { q: "« Je ne dirai rien de ses erreurs passées… » est une…", options: ["métaphore", "prétérition", "comparaison"], answer: 1, explain: "On en parle tout en prétendant ne pas le faire." },
            { q: "Quelle différence entre comparaison et métaphore ?", options: ["Aucune", "La comparaison utilise un outil (comme, tel…)", "La métaphore est toujours drôle"], answer: 1, explain: "« Comme un lion » / « C’est un lion »." },
            { q: "« Un silence assourdissant » est…", options: ["un oxymore", "une anaphore", "une gradation"], answer: 0, explain: "Deux termes contradictoires associés." },
          ],
        },
        {
          type: "type",
          title: "À toi d’écrire",
          instruction: "Écris le nom de la figure de style (sans article).",
          items: [
            { prompt: "« Nous voulons… Nous voulons… Nous voulons… »", answer: ["anaphore"] },
            { prompt: "« Cette obscure clarté »", answer: ["oxymore", "oxymoron"] },
            { prompt: "« Je vous l’ai dit mille fois ! »", answer: ["hyperbole"] },
            { prompt: "« Va, je ne te hais point »", answer: ["litote"] },
          ],
        },
        {
          type: "case",
          title: "Le slogan de la marque",
          story:
            "Noa cherche une phrase de conclusion pour présenter son service de livraison locale aux commerçants de Caen. Sa version actuelle : « Nous livrons rapidement et nous sommes fiables. »",
          question: "Quelle version est la plus mémorable ?",
          options: [
            "« Nous livrons rapidement et nous sommes fiables, je pense. »",
            "« Vous vendez, nous livrons. Vous grandissez, nous suivons. » (parallélisme et rythme, qui place le client au centre)",
            "« Nous sommes une entreprise qui propose des services de livraison. »",
          ],
          answer: 1,
          explain:
            "Le parallélisme et le rythme rendent une phrase facile à retenir et à répéter.",
        },
        {
          type: "fiche",
          title: "Figures de style",
          points: [
            "Répétition : <b>anaphore</b>, <b>gradation</b>, <b>rythme ternaire</b>.",
            "Images : <b>comparaison</b>, <b>métaphore</b>, <b>hypotypose</b>.",
            "Oppositions : <b>antithèse</b>, <b>chiasme</b>, <b>oxymore</b>.",
            "Débat : <b>question rhétorique</b>, <b>prétérition</b>, <b>litote</b>, <b>hyperbole</b> ; doser.",
          ],
          retenir: "Une image et une phrase bien rythmée restent en mémoire bien plus longtemps qu’un argument plat.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Argumenter et repérer les pièges",
      minutes: 17,
      objectives: ["Construire un argument solide", "Reconnaître les sophismes les plus courants"],
      steps: [
        {
          type: "lesson",
          title: "La force des arguments",
          slides: [
            {
              title: "Un argument complet",
              body:
                "<p>Un argument solide a trois parties :</p><ol><li>une <b>affirmation</b> (la thèse) : « Nous devrions ouvrir un deuxième entrepôt. »</li><li>une <b>raison</b> : « parce que nos délais de livraison s’allongent… »</li><li>une <b>preuve</b> : « … de 2 à 4 jours en six mois, et 15 % des clients s’en plaignent. »</li></ol><p>Sans preuve, c’est une opinion ; sans raison, c’est une affirmation gratuite.</p>",
            },
            {
              title: "Les types d’arguments",
              body:
                "<table class='t'><tr><th>Type</th><th>Exemple</th></tr><tr><td><b>Faits et chiffres</b></td><td>« Le délai est passé de 2 à 4 jours. »</td></tr><tr><td><b>Exemple</b></td><td>« Notre concurrent a ouvert un deuxième site et doublé ses ventes. »</td></tr><tr><td><b>Autorité</b></td><td>« Selon l’Insee… », « Selon une étude de… »</td></tr><tr><td><b>Analogie</b></td><td>« Comme un restaurant qui ajoute une salle quand il refuse des clients… »</td></tr><tr><td><b>Conséquences</b></td><td>« Si nous ne faisons rien, nous perdrons nos meilleurs clients. »</td></tr><tr><td><b>Valeurs</b></td><td>« Nous nous sommes engagés à servir vite et bien. »</td></tr></table>",
            },
            {
              title: "Anticiper les objections",
              body:
                "<ul><li>Lister à l’avance les <b>trois objections</b> les plus probables.</li><li>Les traiter <b>avant</b> qu’on ne les pose : « Vous allez me dire que cela coûte cher. C’est vrai, et voici pourquoi c’est rentable… »</li><li>La <b>concession</b> renforce la crédibilité (ethos) : reconnaître une limite montre qu’on est honnête.</li><li>Préparer des réponses courtes, avec un fait ou un exemple.</li></ul>",
            },
            {
              title: "Les sophismes à repérer",
              body:
                "<table class='t'><tr><th>Sophisme</th><th>Principe</th></tr><tr><td><b>Attaque personnelle</b> (ad hominem)</td><td>S’en prendre à la personne au lieu de l’argument</td></tr><tr><td><b>Homme de paille</b></td><td>Déformer la position adverse pour la réfuter plus facilement</td></tr><tr><td><b>Faux dilemme</b></td><td>Présenter deux options comme les seules possibles</td></tr><tr><td><b>Pente glissante</b></td><td>Prétendre qu’une petite mesure mènera forcément à une catastrophe</td></tr><tr><td><b>Appel à la popularité</b></td><td>« Tout le monde le fait, donc c’est bien »</td></tr><tr><td><b>Généralisation hâtive</b></td><td>Conclure à partir d’un ou deux cas</td></tr><tr><td><b>Corrélation = causalité</b></td><td>Deux choses arrivent ensemble, donc l’une cause l’autre</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel sophisme ?",
          instruction: "Identifie le sophisme utilisé.",
          categories: ["Attaque personnelle", "Faux dilemme", "Généralisation hâtive"],
          items: [
            { text: "« Tu n’as même pas de diplôme, ton idée ne vaut rien. »", cat: 0, why: "On attaque la personne, pas l’idée." },
            { text: "« Soit on baisse les prix de 30 %, soit on ferme. »", cat: 1, why: "D’autres options existent." },
            { text: "« Deux clients se sont plaints, donc tout le monde déteste ce produit. »", cat: 2, why: "Deux cas ne font pas une règle." },
            { text: "« Vous êtes avec nous ou contre nous. »", cat: 1, why: "Deux camps seulement." },
            { text: "« Il est jeune, il ne peut pas comprendre. »", cat: 0, why: "Argument sur la personne." },
            { text: "« J’ai rencontré un Normand impoli : les Normands sont impolis. »", cat: 2, why: "Un seul cas." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Argument complet", back: "Affirmation + raison + preuve" },
            { front: "Concession", back: "Reconnaître une limite pour gagner en crédibilité" },
            { front: "Homme de paille", back: "Déformer la position adverse pour la réfuter facilement" },
            { front: "Pente glissante", back: "« Si on accepte ça, demain ce sera la catastrophe »" },
            { front: "Corrélation ≠ causalité", back: "Deux phénomènes simultanés ne prouvent pas un lien de cause" },
            { front: "Appel à la popularité", back: "« Tout le monde le fait, donc c’est bien »" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "« Mon adversaire veut supprimer toute aide aux entreprises ! » alors qu’il propose d’en réduire une seule. C’est…", options: ["un homme de paille", "une concession", "un argument d’autorité"], answer: 0, explain: "La position est déformée." },
            { q: "« Les ventes de glaces et les noyades augmentent ensemble, donc les glaces causent les noyades. » C’est…", options: ["une confusion entre corrélation et causalité", "un argument solide", "une litote"], answer: 0, explain: "La chaleur explique les deux." },
            { q: "Un argument sans preuve est…", options: ["une opinion", "une démonstration", "un fait"], answer: 0, explain: "Il faut des faits, des exemples ou des sources." },
            { q: "Pourquoi traiter une objection avant qu’on ne la pose ?", options: ["Pour montrer qu’on a réfléchi et désamorcer la critique", "Pour gagner du temps uniquement", "C’est interdit"], answer: 0, explain: "Cela renforce l’ethos." },
          ],
        },
        {
          type: "case",
          title: "La négociation fournisseur",
          story:
            "Un fournisseur dit à Noa : « Tous nos clients acceptent cette hausse de 15 %. Et puis, soit vous l’acceptez, soit vous trouvez un autre fournisseur, mais vous ne trouverez pas mieux. »",
          question: "Quels procédés reconnaître, et comment répondre ?",
          options: [
            "Accepter immédiatement",
            "Il y a un appel à la popularité (« tous nos clients ») et un faux dilemme (accepter ou partir) ; Noa peut demander des justifications chiffrées, proposer d’autres options (engagement de volume, hausse étalée, remise sur paiement rapide) et comparer avec d’autres devis",
            "Insulter le fournisseur",
          ],
          answer: 1,
          explain:
            "Nommer intérieurement le procédé permet de ne pas se laisser enfermer, et de ramener la discussion sur des faits et des options.",
        },
        {
          type: "fiche",
          title: "Argumenter",
          points: [
            "Argument = <b>affirmation + raison + preuve</b>.",
            "Types : <b>faits</b>, <b>exemples</b>, <b>autorité</b>, <b>analogie</b>, <b>conséquences</b>, <b>valeurs</b>.",
            "<b>Anticiper</b> 3 objections ; la <b>concession</b> renforce la crédibilité.",
            "Sophismes : <b>ad hominem</b>, <b>homme de paille</b>, <b>faux dilemme</b>, pente glissante, popularité, généralisation, corrélation/causalité.",
          ],
          retenir: "Un argument sans preuve est une opinion ; un argument qui attaque la personne n’est plus un argument.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Débattre",
      minutes: 16,
      objectives: ["Écouter et répondre avec méthode", "Garder son calme et gérer les interruptions"],
      steps: [
        {
          type: "lesson",
          title: "L’art du débat",
          slides: [
            {
              title: "D’abord écouter",
              body:
                "<ul><li>Un bon débatteur <b>écoute</b> pour comprendre, pas seulement pour répondre.</li><li><b>Reformuler</b> la position adverse avant d’y répondre : « Si je vous comprends bien, vous pensez que… » Cela montre de la considération et évite les malentendus.</li><li>Noter les <b>mots clés</b> de l’adversaire pour lui répondre précisément.</li><li>Identifier le <b>vrai désaccord</b> : porte-t-il sur les faits, sur les valeurs, ou sur les moyens ?</li></ul>",
            },
            {
              title: "Répondre avec méthode",
              body:
                "<ol><li><b>Concéder</b> ce qui est juste : « Vous avez raison sur un point : … »</li><li><b>Réfuter</b> le reste avec un fait ou un exemple : « … mais les chiffres montrent que… »</li><li><b>Relancer</b> avec son propre argument et une question : « Alors, comment expliquez-vous que… ? »</li></ol><p>Le schéma « <b>certes… mais…</b> » est l’outil de base du débat : il montre qu’on est juste avant d’être ferme.</p>",
            },
            {
              title: "Rester calme",
              body:
                "<ul><li>Face à une attaque personnelle : ne pas répondre sur le même ton, <b>revenir au fond</b> : « Je préfère qu’on parle du projet. »</li><li><b>Interruption</b> : « Je vous ai écouté jusqu’au bout, permettez-moi de finir ma phrase », d’une voix calme et posée.</li><li>Question piège : prendre une seconde, reformuler, ou dire honnêtement « je n’ai pas le chiffre exact, je vous le transmettrai ».</li><li>Le public juge aussi l’<b>attitude</b> : celui qui s’énerve perd souvent, même avec de bons arguments.</li></ul>",
            },
            {
              title: "Les formats de débat",
              body:
                "<ul><li><b>Concours d’éloquence</b> : en France, de nombreuses universités et écoles organisent des concours (le documentaire <i>À voix haute</i>, sur le concours Eloquentia, a popularisé le genre).</li><li><b>Débat parlementaire</b> (format anglo-saxon) : deux équipes, « gouvernement » et « opposition », temps de parole stricts, sujet parfois donné au dernier moment.</li><li><b>Débat contradictoire</b> : défendre une position tirée au sort, même opposée à ses convictions. C’est le meilleur entraînement pour comprendre l’autre camp.</li><li>En entreprise : réunions de décision, négociations, comités : les mêmes règles s’appliquent.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Débat constructif ou destructif ?",
          instruction: "Ce comportement fait-il avancer le débat ?",
          categories: ["Constructif", "Destructif"],
          items: [
            { text: "« Si je vous comprends bien, vous craignez que… »", cat: 0, why: "Reformulation." },
            { text: "« De toute façon, vous n’y connaissez rien. »", cat: 1, why: "Attaque personnelle." },
            { text: "« Vous avez raison sur le coût, mais regardons les bénéfices sur trois ans. »", cat: 0, why: "Concession + réfutation." },
            { text: "Couper la parole à chaque phrase", cat: 1, why: "Empêche l’échange." },
            { text: "« Je n’ai pas ce chiffre, je vous l’enverrai demain. »", cat: 0, why: "Honnêteté, crédibilité." },
            { text: "Hausser le ton pour couvrir la voix de l’autre", cat: 1, why: "Le public retient l’agressivité." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Reformuler", back: "« Si je vous comprends bien, vous pensez que… »" },
            { front: "Concéder, réfuter, relancer", back: "La méthode de réponse en trois temps" },
            { front: "« Certes… mais… »", back: "L’outil de base du débat" },
            { front: "Face à une attaque personnelle", back: "Ne pas répondre sur le même ton, revenir au fond" },
            { front: "Interruption", back: "« Je vous ai écouté, permettez-moi de finir », d’une voix calme" },
            { front: "Débat contradictoire", back: "Défendre une position tirée au sort pour comprendre l’autre camp" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi reformuler la position adverse ?", options: ["Pour montrer qu’on a compris et éviter les malentendus", "Pour gagner du temps", "Pour se moquer"], answer: 0, explain: "Et cela apaise l’échange." },
            { q: "On vous pose une question dont vous ignorez la réponse. Vous…", options: ["inventez un chiffre", "reconnaissez ne pas l’avoir et proposez de la transmettre", "changez de sujet brutalement"], answer: 1, explain: "Inventer détruit l’ethos s’il est découvert." },
            { q: "Quel est le premier temps de la réponse « concéder, réfuter, relancer » ?", options: ["Attaquer", "Reconnaître ce qui est juste chez l’autre", "Se taire"], answer: 1, explain: "Concéder renforce la crédibilité." },
            { q: "Défendre une position opposée à ses idées en débat permet…", options: ["de mieux comprendre les arguments adverses", "de changer obligatoirement d’avis", "rien"], answer: 0, explain: "C’est un excellent exercice." },
          ],
        },
        {
          type: "case",
          title: "La réunion qui dérape",
          story:
            "Pendant une réunion entre associés, son associé propose de ralentir les dépenses publicitaires. Noa, agacé, répond : « Tu veux toujours tout freiner ! » La discussion tourne au conflit.",
          question: "Comment Noa aurait-il pu répondre ?",
          options: [
            "Hausser encore le ton",
            "Reformuler (« Tu crains que la pub ne soit pas rentable en ce moment, c’est ça ? »), concéder un point (« C’est vrai que le coût par vente a augmenté ce mois-ci »), puis argumenter avec des chiffres et proposer un test limité dans le temps",
            "Quitter la réunion",
          ],
          answer: 1,
          explain:
            "Reformuler et concéder transforment un affrontement en recherche commune de solution, sans renoncer à défendre son point de vue.",
        },
        {
          type: "fiche",
          title: "Débattre",
          points: [
            "<b>Écouter</b> pour comprendre ; <b>reformuler</b> ; identifier le vrai désaccord (faits, valeurs, moyens).",
            "Répondre : <b>concéder, réfuter, relancer</b> ; « <b>certes… mais…</b> ».",
            "Calme : revenir au fond, gérer les <b>interruptions</b>, reconnaître ce qu’on ignore.",
            "Formats : concours d’éloquence, débat parlementaire, <b>débat contradictoire</b>.",
          ],
          retenir: "Dans un débat, le public donne souvent raison à celui qui reste calme et juste, pas à celui qui parle le plus fort.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Enrichir son vocabulaire",
      minutes: 17,
      objectives: ["Remplacer les mots vagues par des mots précis", "Utiliser les connecteurs logiques et les bons registres"],
      steps: [
        {
          type: "lesson",
          title: "Le mot juste",
          slides: [
            {
              title: "Chasser les mots vagues",
              body:
                "<p>Certains verbes passe-partout affaiblissent un discours. Remplace-les par un verbe précis :</p><table class='t'><tr><th>Vague</th><th>Précis</th></tr><tr><td>faire un projet</td><td><b>mener</b>, <b>conduire</b>, <b>réaliser</b> un projet</td></tr><tr><td>faire une erreur</td><td><b>commettre</b> une erreur</td></tr><tr><td>dire son avis</td><td><b>exprimer</b>, <b>formuler</b>, <b>donner</b> son avis</td></tr><tr><td>mettre en place</td><td><b>instaurer</b>, <b>déployer</b>, <b>organiser</b></td></tr><tr><td>avoir un problème</td><td><b>rencontrer</b>, <b>se heurter à</b> une difficulté</td></tr><tr><td>une chose importante</td><td>un <b>enjeu</b>, un <b>élément décisif</b>, un <b>atout</b></td></tr></table>",
            },
            {
              title: "Les connecteurs logiques",
              body:
                "<table class='t'><tr><th>Pour…</th><th>Connecteurs</th></tr><tr><td>Ajouter</td><td>de plus, en outre, par ailleurs</td></tr><tr><td>Opposer</td><td>cependant, toutefois, néanmoins, en revanche</td></tr><tr><td>Expliquer la cause</td><td>car, en effet, puisque, étant donné que</td></tr><tr><td>Tirer une conséquence</td><td>donc, par conséquent, c’est pourquoi, ainsi</td></tr><tr><td>Concéder</td><td>certes, bien que, même si, il est vrai que</td></tr><tr><td>Illustrer</td><td>par exemple, notamment, ainsi</td></tr><tr><td>Conclure</td><td>en somme, finalement, en définitive</td></tr></table><p>Ils guident l’auditeur dans le raisonnement : à l’oral, c’est encore plus important qu’à l’écrit.</p>",
            },
            {
              title: "Les registres de langue",
              body:
                "<table class='t'><tr><th>Familier</th><th>Courant</th><th>Soutenu</th></tr><tr><td>bosser</td><td>travailler</td><td>œuvrer</td></tr><tr><td>un truc</td><td>une chose</td><td>un élément, un objet</td></tr><tr><td>c’est galère</td><td>c’est difficile</td><td>c’est ardu</td></tr><tr><td>se planter</td><td>se tromper</td><td>commettre une erreur</td></tr><tr><td>kiffer</td><td>aimer</td><td>apprécier</td></tr></table><p>Aucun registre n’est « mauvais » : il faut l’<b>adapter</b> à la situation. Le registre courant convient à la plupart des prises de parole professionnelles ; le soutenu, utilisé avec mesure, donne de la solennité.</p>",
            },
            {
              title: "Agrandir son vocabulaire",
              body:
                "<ul><li><b>Lire</b> régulièrement : romans, essais, presse de qualité.</li><li>Tenir un <b>carnet de mots</b> : noter un mot nouveau, sa définition et une phrase d’exemple ; le réutiliser dans la semaine.</li><li>Connaître les <b>racines</b> grecques et latines : « chrono » (temps), « graphie » (écriture), « bio » (vie), « -cide » (qui tue), « omni » (tout), « philo » (qui aime).</li><li>Utiliser un <b>dictionnaire des synonymes</b> pour éviter les répétitions.</li><li>Écouter des orateurs variés et noter les formules qui frappent.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel registre ?",
          instruction: "À quel registre appartient chaque mot ?",
          categories: ["Familier", "Courant", "Soutenu"],
          items: [
            { text: "bouquin", cat: 0, why: "Familier pour « livre »." },
            { text: "livre", cat: 1, why: "Courant." },
            { text: "ouvrage", cat: 2, why: "Soutenu." },
            { text: "bagnole", cat: 0, why: "Familier pour « voiture »." },
            { text: "demeure", cat: 2, why: "Soutenu pour « maison »." },
            { text: "travail", cat: 1, why: "Courant." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "faire une erreur →", back: "commettre une erreur" },
            { front: "mettre en place →", back: "instaurer, déployer, organiser" },
            { front: "Connecteurs d’opposition", back: "cependant, toutefois, néanmoins, en revanche" },
            { front: "Connecteurs de conséquence", back: "donc, par conséquent, c’est pourquoi" },
            { front: "Racine « chrono »", back: "le temps : chronologie, chronomètre" },
            { front: "Carnet de mots", back: "Mot + définition + phrase d’exemple, à réutiliser dans la semaine" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel connecteur exprime une conséquence ?", options: ["cependant", "par conséquent", "certes"], answer: 1, explain: "Cependant : opposition ; certes : concession." },
            { q: "Quel verbe précis remplace « faire » dans « faire un discours » ?", options: ["prononcer", "mettre", "avoir"], answer: 0, explain: "On prononce un discours." },
            { q: "« Omniprésent » signifie…", options: ["présent partout", "jamais présent", "présent le matin"], answer: 0, explain: "« Omni » = tout." },
            { q: "En entretien d’embauche, quel registre privilégier ?", options: ["Familier", "Courant, avec une touche soutenue", "Argotique"], answer: 1, explain: "Adapter le registre à la situation." },
          ],
        },
        {
          type: "type",
          title: "Trouve le mot précis",
          instruction: "Remplace le verbe vague par un verbe plus précis (un seul mot).",
          items: [
            { prompt: "« faire une erreur » → ___ une erreur", answer: ["commettre"] },
            { prompt: "« dire son opinion » → ___ son opinion", answer: ["exprimer", "formuler", "donner", "émettre", "emettre", "partager"] },
            { prompt: "« faire un discours » → ___ un discours", answer: ["prononcer", "tenir"] },
            { prompt: "« avoir un problème » → ___ une difficulté", answer: ["rencontrer", "affronter", "surmonter"] },
            { prompt: "Synonyme soutenu de « difficile » (commence par « ar »)", answer: ["ardu", "ardue"] },
          ],
        },
        {
          type: "case",
          title: "L’e-mail au partenaire",
          story:
            "Karim écrit à un futur partenaire : « On a fait plein de trucs cette année, c’était galère mais on a mis en place des choses importantes et donc on veut faire un partenariat. »",
          question: "Quelle version est la plus convaincante ?",
          options: [
            "La garder telle quelle, c’est naturel",
            "« Cette année, nous avons mené plusieurs projets exigeants et instauré trois processus qui ont réduit nos délais de 30 %. C’est pourquoi nous souhaitons vous proposer un partenariat. »",
            "« Bonjour, partenariat ? Merci. »",
          ],
          answer: 1,
          explain:
            "Des verbes précis, un chiffre et un connecteur logique transforment une phrase vague en argument crédible.",
        },
        {
          type: "fiche",
          title: "Vocabulaire",
          points: [
            "Remplacer les verbes vagues : <b>mener</b>, <b>commettre</b>, <b>exprimer</b>, <b>instaurer</b>, <b>rencontrer</b>.",
            "<b>Connecteurs</b> : ajouter, opposer, expliquer, conclure ; essentiels à l’oral.",
            "<b>Registres</b> familier / courant / soutenu : s’adapter à la situation.",
            "Progresser : <b>lire</b>, <b>carnet de mots</b>, <b>racines</b> grecques et latines, synonymes.",
          ],
          retenir: "Un mot précis vaut mieux que trois mots vagues : il montre que tu sais exactement ce que tu penses.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Situations réelles",
      minutes: 17,
      objectives: ["Appliquer l’éloquence au pitch, à la réunion, à l’entretien et à la vidéo", "Improviser avec une structure simple"],
      steps: [
        {
          type: "lesson",
          title: "Parler dans la vraie vie",
          slides: [
            {
              title: "Le pitch de 60 secondes",
              body:
                "<ol><li><b>Accroche</b> : le problème du client, en une phrase.</li><li><b>Solution</b> : ce que tu proposes, simplement.</li><li><b>Preuve</b> : un chiffre, un client, un résultat.</li><li><b>Différence</b> : pourquoi toi plutôt qu’un autre.</li><li><b>Appel à l’action</b> : la prochaine étape concrète.</li></ol><p>Exemple : « Les salons de coiffure perdent des clientes qui n’osent pas parler de leur perte de cheveux. Nous proposons une solution de camouflage capillaire, testée en salon, que vos clientes peuvent appliquer en deux minutes. Plusieurs salons du Calvados l’ont déjà adoptée. Je vous laisse un échantillon : on en reparle la semaine prochaine ? »</p>",
            },
            {
              title: "Improviser : la méthode PREP",
              body:
                "<p>Quand on te demande ton avis sans préparation, structure ta réponse en 4 temps :</p><ul><li><b>P</b>oint : ta position en une phrase.</li><li><b>R</b>aison : pourquoi.</li><li><b>E</b>xemple : un cas concret, un chiffre.</li><li><b>P</b>oint : tu répètes ta position.</li></ul><p>« Je pense qu’il faut d’abord tester sur un seul magasin. Parce que le coût d’une erreur à grande échelle serait élevé. Par exemple, notre dernier lancement national a coûté le double du prévu. Donc commençons par un test. »</p>",
            },
            {
              title: "Réunion et entretien",
              body:
                "<ul><li><b>En réunion</b> : prendre la parole tôt (les premières interventions influencent), être bref, commencer par la conclusion (« Je propose que… »), puis justifier.</li><li><b>En entretien</b> : préparer une présentation de soi de 2 minutes (parcours, réussite clé, pourquoi ce poste), et des histoires concrètes avec la méthode <b>STAR</b> (situation, tâche, action, résultat).</li><li>Dans les deux cas : écouter la question jusqu’au bout, répondre précisément, oser un silence avant de répondre.</li></ul>",
            },
            {
              title: "Parler face caméra",
              body:
                "<ul><li>Regarder l’<b>objectif</b>, pas l’écran : c’est le regard du spectateur.</li><li>Accrocher dans les <b>3 premières secondes</b> (sur les réseaux, l’attention décroche très vite).</li><li>Un peu plus d’<b>énergie</b> qu’en face à face : la caméra « aplatit » l’expression.</li><li>Phrases courtes, une idée par plan, montage dynamique.</li><li>Lumière face au visage, son clair (un micro-cravate change tout), cadrage à hauteur des yeux.</li><li><b>Storytelling</b> : une situation, un obstacle, une transformation : la structure de toutes les bonnes histoires.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Remets le pitch dans l’ordre",
          instruction: "À quelle étape du pitch correspond chaque phrase ?",
          categories: ["Accroche / problème", "Solution / preuve", "Appel à l’action"],
          items: [
            { text: "« Vos clients attendent leurs colis 5 jours. »", cat: 0, why: "Le problème du client." },
            { text: "« Nous livrons dans Caen en 24 heures depuis notre entrepôt. »", cat: 1, why: "La solution." },
            { text: "« 40 commerçants nous font déjà confiance. »", cat: 1, why: "La preuve." },
            { text: "« Testons sur vos 10 prochaines commandes, sans engagement. »", cat: 2, why: "Prochaine étape concrète." },
            { text: "« Combien de ventes perdez-vous à cause des délais ? »", cat: 0, why: "Accroche." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Pitch de 60 secondes", back: "Accroche, solution, preuve, différence, appel à l’action" },
            { front: "PREP", back: "Point, Raison, Exemple, Point : pour improviser" },
            { front: "En réunion", back: "Intervenir tôt, commencer par sa proposition, être bref" },
            { front: "STAR (entretien)", back: "Situation, Tâche, Action, Résultat" },
            { front: "Face caméra", back: "Regarder l’objectif, accrocher en 3 secondes, un peu plus d’énergie" },
            { front: "Storytelling", back: "Situation, obstacle, transformation" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Face caméra, où regarder ?", options: ["L’écran avec son image", "L’objectif de la caméra", "Ses notes"], answer: 1, explain: "C’est le regard du spectateur." },
            { q: "Que signifie le premier « P » de PREP ?", options: ["Politesse", "Point (sa position)", "Pause"], answer: 1, explain: "On commence par dire ce qu’on pense." },
            { q: "En réunion, pour être écouté, il vaut mieux…", options: ["parler en dernier et longtemps", "commencer par sa proposition puis la justifier", "ne rien dire"], answer: 1, explain: "Conclusion d’abord : le message passe même si on est coupé." },
            { q: "Quel élément termine un bon pitch ?", options: ["Un remerciement vague", "Un appel à l’action concret", "La liste des produits"], answer: 1, explain: "La prochaine étape doit être claire." },
          ],
        },
        {
          type: "case",
          title: "La vidéo YouTube",
          story:
            "Noa enregistre sa première vidéo pour sa chaîne. Il commence par : « Salut à tous, bienvenue sur ma chaîne, alors aujourd’hui on va parler d’un sujet un peu… euh… intéressant… » Les statistiques montrent que la majorité des spectateurs quittent la vidéo avant 10 secondes.",
          question: "Comment améliorer l’ouverture ?",
          options: [
            "Rallonger l’introduction",
            "Entrer directement dans le sujet avec une promesse ou une question forte (« J’ai importé un conteneur de Chine : voici les 3 erreurs qui m’ont coûté 4 000 € »), regarder l’objectif, parler avec énergie, et garder les présentations pour plus tard",
            "Couper le son",
          ],
          answer: 1,
          explain:
            "Les premières secondes d’une vidéo jouent le rôle de l’accroche d’un discours, en encore plus court.",
        },
        {
          type: "fiche",
          title: "Situations réelles",
          points: [
            "<b>Pitch</b> : accroche, solution, preuve, différence, <b>appel à l’action</b>.",
            "<b>PREP</b> pour improviser : Point, Raison, Exemple, Point.",
            "<b>Réunion</b> : tôt, bref, proposition d’abord ; <b>entretien</b> : présentation de 2 min et <b>STAR</b>.",
            "<b>Caméra</b> : objectif, 3 secondes, énergie, son et lumière ; <b>storytelling</b>.",
          ],
          retenir: "Dans toutes les situations, la même règle : capter l’attention, dire une chose clairement, et dire ce qu’on attend.",
        },
      ],
    },
  ],
});
