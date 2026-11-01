/* ============================================================
   COURS : La menuiserie
   École de Construction · 8 séances de 15 à 20 minutes
   Bois et panneaux, assemblages, outillage et sécurité, fenêtres,
   portes, escaliers et garde-corps, parquets, finitions.
   Vérifié au 1er novembre 2026 : garde-corps (1 m, sphère de
   11 cm, NF P01-012), poussières de bois (cancérogènes, VLEP
   1 mg/m³ sur 8 h, Code du travail R4412-149).
   ============================================================ */
AGORA.registerCourse({
  id: "menuiserie",
  faculty: "construction",
  title: "La menuiserie",
  subtitle: "Le bois, les assemblages, les fenêtres, les escaliers et les parquets",
  color: "#c27c0e",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre le travail du bois dans le bâtiment : choisir un bois ou un panneau, assembler, utiliser les outils sans se blesser, poser des fenêtres étanches, concevoir un escalier sûr, poser un parquet et protéger le bois dans le temps.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Le bois, un matériau vivant",
      minutes: 15,
      objectives: ["Distinguer résineux et feuillus", "Comprendre l’humidité et le mouvement du bois"],
      steps: [
        {
          type: "lesson",
          title: "Connaître le bois",
          slides: [
            {
              title: "Résineux et feuillus",
              body:
                "<table class='t'><tr><th>Famille</th><th>Exemples</th><th>Usages typiques</th></tr><tr><td><b>Résineux</b> (bois tendres en général)</td><td>Sapin, épicéa, pin, douglas, mélèze</td><td>Charpente, ossature, lambris, bardage</td></tr><tr><td><b>Feuillus</b> (souvent plus durs)</td><td>Chêne, hêtre, frêne, châtaignier, noyer</td><td>Parquets, escaliers, meubles, menuiseries de qualité</td></tr><tr><td><b>Bois exotiques</b></td><td>Teck, ipé…</td><td>Terrasses, ouvrages très exposés (vérifier l’origine légale)</td></tr></table>",
            },
            {
              title: "Le bois bouge",
              body:
                "<ul><li>Le bois échange de l’humidité avec l’air : il <b>gonfle</b> quand l’air est humide et se <b>rétracte</b> quand il est sec.</li><li>Il bouge surtout en <b>largeur</b>, très peu en longueur.</li><li>Un bois posé trop humide se fend, se tord ou laisse des jours en séchant.</li><li>Pour l’intérieur, on utilise un bois <b>sec</b> et on le laisse s’<b>acclimater</b> quelques jours dans la pièce avant de le poser.</li></ul>",
            },
            {
              title: "Le fil du bois",
              body:
                "<ul><li>Le <b>fil</b> est la direction des fibres. Le bois est très résistant dans le sens du fil, beaucoup moins en travers.</li><li>On scie, on rabote et on ponce de préférence <b>dans le sens du fil</b> pour éviter les arrachements.</li><li>Les <b>nœuds</b> sont des points de faiblesse et de déformation.</li></ul>",
            },
            {
              title: "La durabilité",
              body:
                "<ul><li>Certains bois résistent naturellement aux champignons et aux insectes (chêne, châtaignier, mélèze, douglas pour leur cœur), d’autres non (sapin, épicéa, hêtre).</li><li>On parle de <b>classes d’emploi</b> (de 1, intérieur sec, à 5, contact avec l’eau de mer) : on choisit un bois naturellement durable ou traité pour la classe visée.</li><li>Les labels <b>PEFC</b> et <b>FSC</b> garantissent une gestion durable des forêts.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Résineux ou feuillu ?",
          instruction: "Classe chaque essence.",
          categories: ["Résineux", "Feuillu"],
          items: [
            { text: "Chêne", cat: 1, why: "Feuillu dur et durable." },
            { text: "Sapin", cat: 0, why: "Résineux courant en charpente." },
            { text: "Douglas", cat: 0, why: "Résineux durable pour le bardage." },
            { text: "Hêtre", cat: 1, why: "Feuillu, meubles et escaliers intérieurs." },
            { text: "Pin", cat: 0, why: "Résineux." },
            { text: "Châtaignier", cat: 1, why: "Feuillu durable." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Résineux", back: "Sapin, épicéa, pin, douglas, mélèze : charpente, ossature, bardage." },
            { front: "Feuillus", back: "Chêne, hêtre, frêne… : parquets, escaliers, meubles." },
            { front: "Le bois bouge", back: "Il gonfle à l’humidité et se rétracte au sec, surtout en largeur." },
            { front: "Acclimatation", back: "Laisser le bois quelques jours dans la pièce avant de le poser." },
            { front: "Fil du bois", back: "Direction des fibres : travailler dans son sens." },
            { front: "Classes d’emploi", back: "De 1 (intérieur sec) à 5 (eau de mer) : choisir un bois adapté." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Dans quel sens le bois bouge-t-il le plus avec l’humidité ?", options: ["En longueur", "En largeur", "Il ne bouge pas"], answer: 1, explain: "D’où les jeux prévus dans les parquets et les panneaux." },
            { q: "Tu reçois un parquet en chêne. Avant de le poser…", options: ["Tu le poses tout de suite", "Tu le laisses s’acclimater dans la pièce", "Tu le mouilles"], answer: 1, explain: "Il se met à l’humidité de la pièce." },
            { q: "Pour un bardage extérieur sans traitement, quel bois est le plus adapté ?", options: ["Épicéa non traité", "Mélèze ou douglas (cœur)", "Hêtre"], answer: 1, explain: "Ils sont naturellement plus durables." },
            { q: "Que garantissent les labels PEFC et FSC ?", options: ["Une couleur", "Une gestion durable des forêts", "Une résistance au feu"], answer: 1, explain: "Ils concernent l’origine du bois." },
          ],
        },
        {
          type: "case",
          title: "La tablette fendue",
          story:
            "Inès pose en hiver, dans une pièce chauffée, une belle tablette en chêne massif achetée la veille dans une scierie où elle était stockée dehors. Un mois plus tard, la tablette s’est fendue et tordue.",
          question: "Que s’est-il passé ?",
          options: [
            "Le chêne est un mauvais bois",
            "Le bois était encore humide : en séchant dans la pièce chauffée, il s’est rétracté et déformé ; il fallait un bois sec et le laisser s’acclimater",
            "La tablette était trop lourde",
          ],
          answer: 1,
          explain:
            "Le passage d’un stockage extérieur à un intérieur chauffé fait perdre beaucoup d’humidité au bois. Il faut un bois séché à un taux adapté à l’usage intérieur.",
        },
        {
          type: "fiche",
          title: "Le bois",
          points: [
            "<b>Résineux</b> (charpente, bardage) / <b>feuillus</b> (parquet, escalier, meuble).",
            "Le bois <b>bouge</b> avec l’humidité, surtout en largeur : bois <b>sec</b>, <b>acclimatation</b>.",
            "Travailler dans le sens du <b>fil</b> ; se méfier des nœuds.",
            "<b>Durabilité</b> naturelle ou traitement selon la <b>classe d’emploi</b> ; labels <b>PEFC</b>, <b>FSC</b>.",
          ],
          retenir: "Le bois respire : on construit avec lui, pas contre lui.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Panneaux et bois d’ingénierie",
      minutes: 15,
      objectives: ["Reconnaître les principaux panneaux", "Choisir un panneau selon l’usage et l’humidité"],
      steps: [
        {
          type: "lesson",
          title: "Les panneaux",
          slides: [
            {
              title: "Les panneaux courants",
              body:
                "<table class='t'><tr><th>Panneau</th><th>Fabrication</th><th>Usages</th></tr><tr><td><b>Contreplaqué</b></td><td>Fines feuilles de bois croisées et collées</td><td>Solide et stable : mobilier, coffrages, planchers</td></tr><tr><td><b>OSB</b></td><td>Grandes lamelles orientées et collées</td><td>Contreventement d’ossature, planchers, aménagements bruts</td></tr><tr><td><b>Aggloméré</b> (particules)</td><td>Copeaux collés et pressés</td><td>Meubles en kit, plans de travail mélaminés</td></tr><tr><td><b>MDF</b></td><td>Fibres fines collées et pressées</td><td>Façades à peindre, moulures, usinage précis</td></tr></table>",
            },
            {
              title: "L’humidité, critère clé",
              body:
                "<ul><li>Les panneaux standard craignent l’eau : ils gonflent et se délitent.</li><li>Il existe des versions pour <b>milieu humide</b> (souvent repérées par la mention « hydrofuge », « CTB-H » ou une teinte verte pour certains agglomérés et MDF) et des contreplaqués <b>extérieurs</b>.</li><li>Les chants (tranches) sont les points faibles : on les protège.</li></ul>",
            },
            {
              title: "Le bois d’ingénierie",
              body:
                "<ul><li><b>Lamellé-collé</b> : lamelles de bois collées pour faire de grandes poutres stables, de grandes portées.</li><li><b>Bois massif reconstitué</b> et <b>CLT</b> (panneaux de bois massif contrecollés en couches croisées) : murs et planchers porteurs, jusqu’à des immeubles de plusieurs étages.</li><li><b>Poutres en I</b> (âme en OSB, semelles en bois) : légères et rigides pour les planchers.</li></ul><p>Ces produits stables et calibrés ont relancé la construction bois.</p>",
            },
            {
              title: "Santé et colles",
              body:
                "<ul><li>Les panneaux contiennent des colles qui peuvent émettre des composés organiques volatils (dont du formaldéhyde).</li><li>L’<b>étiquette d’émissions</b> (de A+ à C) obligatoire sur les produits de construction et de décoration renseigne sur ces émissions : privilégier <b>A+</b> pour l’intérieur.</li><li>L’usinage des panneaux produit des poussières fines : aspiration et masque (séance 4).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Contreplaqué", back: "Feuilles de bois croisées et collées : solide et stable." },
            { front: "OSB", back: "Lamelles orientées collées : contreventement, planchers." },
            { front: "MDF", back: "Fibres fines pressées : usinage précis, à peindre." },
            { front: "Aggloméré", back: "Particules collées : meubles en kit, plans mélaminés." },
            { front: "Lamellé-collé", back: "Lamelles collées pour de grandes poutres stables." },
            { front: "Étiquette A+", back: "Faibles émissions de polluants dans l’air intérieur." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel panneau sert souvent de contreventement sur une maison à ossature bois ?", options: ["L’OSB", "Le MDF standard", "Le carton"], answer: 0, explain: "Il rigidifie les murs." },
            { q: "Pour un meuble sous un évier, on choisit…", options: ["Un aggloméré standard", "Un panneau adapté au milieu humide, chants protégés", "Du MDF non traité"], answer: 1, explain: "Les panneaux standard gonflent à l’eau." },
            { q: "Quelle étiquette d’émissions privilégier pour une chambre d’enfant ?", options: ["A+", "C", "Aucune importance"], answer: 0, explain: "A+ = très faibles émissions." },
            { q: "Une grande poutre de 12 m de portée pour un hall sera plutôt…", options: ["en lamellé-collé", "en aggloméré", "en MDF"], answer: 0, explain: "Il permet de grandes portées stables." },
          ],
        },
        {
          type: "case",
          title: "La salle de bains en kit",
          story:
            "Pour équiper la salle de bains de son Airbnb, Mehdi achète des meubles en aggloméré standard non protégés. Au bout de quelques mois, les bas des caissons ont gonflé et s’effritent.",
          question: "Quelle erreur a-t-il commise ?",
          options: [
            "Aucune, c’est l’usure normale",
            "Il a choisi un panneau inadapté aux pièces humides, aux chants non protégés ; il fallait des panneaux hydrofuges ou des matériaux résistants à l’eau",
            "Il aurait dû choisir des meubles plus lourds",
          ],
          answer: 1,
          explain:
            "Dans une salle de bains, l’humidité et les éclaboussures attaquent rapidement les panneaux standard, surtout par les chants et le bas des caissons.",
        },
        {
          type: "fiche",
          title: "Panneaux",
          points: [
            "<b>Contreplaqué</b> (stable), <b>OSB</b> (contreventement), <b>aggloméré</b> (kit), <b>MDF</b> (usinage, peinture).",
            "Milieux humides : panneaux <b>hydrofuges</b> ou extérieurs, chants protégés.",
            "Bois d’ingénierie : <b>lamellé-collé</b>, <b>CLT</b>, poutres en I.",
            "Air intérieur : étiquette <b>A+</b> ; poussières d’usinage à capter.",
          ],
          retenir: "Le bon panneau, c’est celui qui résiste à l’humidité de son usage.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Assembler le bois",
      minutes: 16,
      objectives: ["Connaître les principaux assemblages", "Choisir entre colle, vis et quincaillerie"],
      steps: [
        {
          type: "lesson",
          title: "Les assemblages",
          slides: [
            {
              title: "Les assemblages traditionnels",
              body:
                "<ul><li><b>Tenon et mortaise</b> : une languette (tenon) entre dans un logement (mortaise). Solide, utilisé en charpente, portes, chaises.</li><li><b>Queue d’aronde</b> : formes en trapèze qui s’emboîtent ; typique des tiroirs, résiste à l’arrachement.</li><li><b>Mi-bois</b> : on enlève la moitié de l’épaisseur sur chaque pièce pour les superposer.</li><li><b>Rainure et languette</b> : pour assembler des lames (parquets, lambris).</li></ul>",
            },
            {
              title: "Les assemblages modernes",
              body:
                "<ul><li><b>Tourillons</b> : chevilles en bois collées dans des trous.</li><li><b>Lamelles</b> (biscuits) : petites pastilles collées dans des fentes faites à la lamelleuse.</li><li><b>Vis</b> : rapides et démontables ; on fait un <b>avant-trou</b> dans les bois durs et près des bords pour éviter de fendre.</li><li><b>Quincaillerie</b> : équerres, sabots de charpente, connecteurs métalliques, excentriques pour le mobilier en kit.</li></ul>",
            },
            {
              title: "La colle",
              body:
                "<ul><li>La <b>colle vinylique</b> (« colle blanche ») est la plus courante en intérieur ; il existe des versions résistantes à l’humidité (classes D3, D4).</li><li>Une colle travaille sur des surfaces <b>propres, ajustées</b> et <b>serrées</b> (serre-joints) pendant le temps de prise.</li><li>Le bout du bois (bois de bout) colle mal : on préfère les assemblages où les fibres se recouvrent.</li></ul>",
            },
            {
              title: "Laisser du jeu",
              body:
                "<p>Comme le bois bouge en largeur, un panneau de bois massif emprisonné de tous côtés finit par se fendre.</p><ul><li>Un plateau de table massif est fixé avec des attaches qui lui permettent de glisser.</li><li>Les panneaux de porte traditionnels « flottent » dans des rainures.</li><li>Un parquet garde un jeu en périphérie (séance 7).</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel assemblage ?",
          instruction: "Associe chaque usage à l’assemblage le plus typique.",
          categories: ["Tenon et mortaise", "Queue d’aronde", "Rainure et languette"],
          items: [
            { text: "Pied et traverse d’une chaise", cat: 0, why: "Assemblage robuste en angle." },
            { text: "Coins d’un tiroir", cat: 1, why: "Résiste à l’arrachement quand on tire." },
            { text: "Lames de parquet", cat: 2, why: "Les lames s’emboîtent." },
            { text: "Lambris mural", cat: 2, why: "Lames emboîtées." },
            { text: "Assemblage d’une poutre et d’un poteau en charpente traditionnelle", cat: 0, why: "Classique de la charpente." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Tenon et mortaise", back: "Languette insérée dans un logement : solide, charpente et meubles." },
            { front: "Queue d’aronde", back: "Emboîtement en trapèze qui résiste à l’arrachement (tiroirs)." },
            { front: "Rainure et languette", back: "Emboîtement des lames de parquet et de lambris." },
            { front: "Avant-trou", back: "Perçage avant vissage pour éviter de fendre le bois." },
            { front: "Colle D3 / D4", back: "Colles vinyliques résistant à l’humidité." },
            { front: "Jeu de dilatation", back: "Espace laissé pour que le bois puisse bouger." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi percer un avant-trou avant de visser dans du chêne près d’un bord ?", options: ["Pour éviter de fendre le bois", "Pour aller plus vite", "Pour décorer"], answer: 0, explain: "Le bois dur se fend sous la pression de la vis." },
            { q: "Un plateau de table en bois massif vissé rigidement sur tout son pourtour risque…", options: ["de se fendre en bougeant avec l’humidité", "de rien", "de s’allonger"], answer: 0, explain: "Il faut des fixations qui le laissent glisser." },
            { q: "Pour coller deux pièces, il faut…", options: ["des surfaces propres et ajustées, serrées pendant la prise", "beaucoup de colle et pas de serrage", "chauffer la colle"], answer: 0, explain: "Le serrage assure le contact." },
            { q: "Quel assemblage est typique d’un tiroir de qualité ?", options: ["La queue d’aronde", "Le clou", "Le scotch"], answer: 0, explain: "Il résiste à la traction de l’ouverture." },
          ],
        },
        {
          type: "case",
          title: "L’étagère qui fend",
          story:
            "Romain fixe une étagère en hêtre massif en vissant directement, sans avant-trou, des vis épaisses à 1 cm du bord. Le bois se fend à chaque vis.",
          question: "Comment aurait-il dû faire ?",
          options: [
            "Taper plus fort",
            "Percer des avant-trous adaptés, s’éloigner du bord et éventuellement choisir des vis plus fines ou une quincaillerie adaptée",
            "Mettre de la colle à la place",
          ],
          answer: 1,
          explain:
            "Le hêtre est un bois dur : sans avant-trou, la vis agit comme un coin et fend la pièce, surtout près des bords et des extrémités.",
        },
        {
          type: "fiche",
          title: "Assemblages",
          points: [
            "Traditionnels : <b>tenon-mortaise</b>, <b>queue d’aronde</b>, <b>mi-bois</b>, <b>rainure-languette</b>.",
            "Modernes : <b>tourillons</b>, <b>lamelles</b>, <b>vis</b> (avant-trou), <b>quincaillerie</b>.",
            "Colle : surfaces propres, ajustées, <b>serrées</b> ; D3/D4 pour l’humidité.",
            "Toujours laisser au bois la possibilité de <b>bouger</b>.",
          ],
          retenir: "Un bon assemblage tient sans forcer et laisse le bois respirer.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Outils et sécurité",
      minutes: 16,
      objectives: ["Connaître les principaux outils de menuiserie", "Prévenir les coupures et les risques liés aux poussières"],
      steps: [
        {
          type: "lesson",
          title: "Travailler sans se blesser",
          slides: [
            {
              title: "Les outils",
              body:
                "<div class='tiers'><div><b>Mesurer et tracer</b><span>Mètre, équerre, crayon, trusquin, niveau.</span></div><div><b>Couper et façonner</b><span>Scies (égoïne, circulaire, sauteuse, à onglet), rabot, ciseau à bois, défonceuse.</span></div><div><b>Assembler et finir</b><span>Perceuse-visseuse, serre-joints, ponceuse, maillet.</span></div></div><p>La règle du menuisier : <b>mesurer deux fois, couper une fois</b>.</p>",
            },
            {
              title: "Les machines tranchantes",
              body:
                "<ul><li>Les scies et défonceuses causent des <b>blessures graves</b> aux mains, souvent en une fraction de seconde.</li><li>On garde les <b>protecteurs</b> en place, on utilise un <b>poussoir</b> pour les petites pièces, on bloque la pièce avec des serre-joints.</li><li>On débranche la machine (ou on retire la batterie) avant de changer une lame.</li><li>Le <b>rejet</b> : sur une scie circulaire ou sur table, la pièce peut être violemment projetée vers l’opérateur si elle pince la lame. Couteau diviseur, bonne position sur le côté, pièce bien guidée.</li><li>Pas de gants amples, de manches flottantes ni de bijoux près d’un outil rotatif.</li></ul>",
            },
            {
              title: "Les poussières de bois",
              body:
                "<ul><li>Les <b>poussières de bois</b> sont classées <b>cancérogènes</b> : elles peuvent provoquer des cancers des fosses nasales et des sinus, ainsi que de l’asthme et des allergies.</li><li>Les bois durs comme le chêne et le hêtre sont particulièrement en cause, mais toutes les poussières de bois sont concernées.</li><li>En entreprise, l’exposition est limitée à <b>1 mg/m³ sur 8 heures</b>.</li><li>Prévention : <b>aspiration à la source</b> branchée sur les machines, nettoyage par aspiration (jamais à la soufflette ou au balai), masque adapté (FFP2 ou FFP3), atelier ventilé.</li></ul>",
            },
            {
              title: "Bruit, yeux, incendie",
              body:
                "<ul><li>Les machines dépassent souvent les seuils de bruit nocifs : <b>protections auditives</b>.</li><li>Les copeaux et éclats : <b>lunettes</b>.</li><li>Un atelier bois est un lieu à risque d’<b>incendie</b> : copeaux et chiffons imbibés d’huile (qui peuvent s’enflammer seuls en séchant) sont évacués ou mis dans un récipient métallique fermé ; extincteur à portée.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle protection ?",
          instruction: "Associe chaque risque à la mesure prioritaire.",
          categories: ["Protecteur, poussoir, serre-joint", "Aspiration à la source + masque", "Bouchons d’oreilles ou casque antibruit"],
          items: [
            { text: "Couper une petite pièce à la scie sur table", cat: 0, why: "Garder les mains loin de la lame." },
            { text: "Poncer un parquet en chêne", cat: 1, why: "Poussières de bois dur." },
            { text: "Utiliser une raboteuse toute la journée", cat: 2, why: "Exposition au bruit." },
            { text: "Défoncer un chant de MDF", cat: 1, why: "Poussières très fines." },
            { text: "Couper une planche qui bouge sur les tréteaux", cat: 0, why: "Bloquer la pièce." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Mesurer deux fois, couper une fois", back: "Règle de base du menuisier." },
            { front: "Poussoir", back: "Accessoire qui pousse les petites pièces sans approcher les doigts de la lame." },
            { front: "Rejet", back: "Projection violente de la pièce vers l’opérateur quand elle pince la lame." },
            { front: "Poussières de bois", back: "Cancérogènes (fosses nasales, sinus) ; limite au travail : 1 mg/m³ sur 8 h." },
            { front: "Aspiration à la source", back: "Captage des poussières directement sur la machine." },
            { front: "Chiffons huilés", back: "Peuvent s’enflammer seuls en séchant : récipient métallique fermé." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Avant de changer la lame d’une scie circulaire, il faut…", options: ["L’éteindre seulement", "La débrancher ou retirer la batterie", "La laisser tourner au ralenti"], answer: 1, explain: "Un démarrage accidentel serait catastrophique." },
            { q: "Comment nettoyer l’atelier couvert de poussière ?", options: ["À la soufflette", "Avec un aspirateur adapté", "Au balai à sec"], answer: 1, explain: "La soufflette et le balai remettent la poussière en suspension." },
            { q: "Pourquoi les poussières de bois sont-elles dangereuses ?", options: ["Elles sont classées cancérogènes et provoquent asthme et allergies", "Elles salissent seulement", "Elles sont radioactives"], answer: 0, explain: "Cancers des fosses nasales et des sinus notamment." },
            { q: "Que faire des chiffons imbibés d’huile de lin après usage ?", options: ["Les jeter en boule dans un carton", "Les étaler pour sécher dehors ou les mettre dans un récipient métallique fermé", "Les laisser dans un coin"], answer: 1, explain: "Ils peuvent s’auto-enflammer." },
          ],
        },
        {
          type: "case",
          title: "L’atelier du garage",
          story:
            "Le soir, Yohan fabrique des meubles dans son garage pour les vendre en ligne. Il ponce et scie du chêne sans aspiration, nettoie à la soufflette et retire le protège-lame de sa scie, « il gêne pour voir le trait ».",
          question: "Quels sont les risques et que changer ?",
          options: [
            "Aucun risque, c’est un hobby",
            "Risque de blessure grave à la scie et exposition à des poussières cancérogènes : remettre le protecteur, utiliser un poussoir, brancher une aspiration sur les machines, nettoyer à l’aspirateur, porter masque, lunettes et protections auditives",
            "Il suffit de travailler en journée",
          ],
          answer: 1,
          explain:
            "Les deux risques majeurs de la menuiserie sont réunis. S’il développe une activité commerciale, il devient aussi important de se former et de s’assurer correctement.",
        },
        {
          type: "fiche",
          title: "Outils et sécurité",
          points: [
            "Mesurer deux fois, couper une fois.",
            "Machines : <b>protecteurs</b>, <b>poussoir</b>, pièce bloquée, débrancher avant réglage, attention au <b>rejet</b>.",
            "<b>Poussières de bois cancérogènes</b> : aspiration à la source, nettoyage à l’aspirateur, masque.",
            "Protections <b>auditives</b> et <b>oculaires</b> ; prévenir l’<b>incendie</b> (copeaux, chiffons huilés).",
          ],
          retenir: "Le protecteur gêne parfois : un doigt en moins gêne toujours.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Fenêtres et menuiseries extérieures",
      minutes: 17,
      objectives: ["Comparer les matériaux et les performances des fenêtres", "Comprendre les points clés d’une bonne pose"],
      steps: [
        {
          type: "lesson",
          title: "Les fenêtres",
          slides: [
            {
              title: "Les matériaux",
              body:
                "<table class='t'><tr><th>Matériau</th><th>Atouts</th><th>Limites</th></tr><tr><td><b>Bois</b></td><td>Bon isolant, chaleureux, réparable</td><td>Entretien des finitions</td></tr><tr><td><b>PVC</b></td><td>Bon rapport isolation/prix, peu d’entretien</td><td>Profils plus épais, aspect</td></tr><tr><td><b>Aluminium</b></td><td>Profils fins, grandes baies, durable</td><td>Nécessite une rupture de pont thermique</td></tr><tr><td><b>Mixte bois-alu</b></td><td>Bois à l’intérieur, alu à l’extérieur</td><td>Plus cher</td></tr></table>",
            },
            {
              title: "Lire les performances",
              body:
                "<ul><li><b>Uw</b> : le coefficient de transmission thermique de la fenêtre entière. <b>Plus il est bas, mieux elle isole.</b></li><li><b>Sw</b> : la part de chaleur du soleil qui entre. Élevé, c’est un gain en hiver ; en été il faut des protections solaires.</li><li><b>Classement AEV</b> : étanchéité à l’<b>A</b>ir, à l’<b>E</b>au et résistance au <b>V</b>ent, à adapter à l’exposition.</li><li>Le <b>double vitrage</b> à isolation renforcée est la norme ; le triple vitrage sert surtout en climat froid ou en façade nord.</li></ul>",
            },
            {
              title: "La pose, aussi importante que la fenêtre",
              body:
                "<ul><li>En neuf, on choisit la position de la fenêtre dans le mur (en applique contre l’isolant, en tunnel dans l’épaisseur, en feuillure).</li><li>En rénovation, on peut garder l’ancien dormant en bon état et poser la nouvelle fenêtre dessus (pose en rénovation, moins de travaux mais un peu moins de vitrage), ou tout déposer (dépose totale, meilleur résultat).</li><li>L’étanchéité entre la fenêtre et le mur se fait avec des <b>joints et bandes adaptés</b> (mousse imprégnée, membranes), pas seulement avec du silicone.</li><li>Une fenêtre mal calée ou mal étanchée laisse passer l’air et l’eau, quelle que soit sa qualité.</li></ul>",
            },
            {
              title: "Volets et portes d’entrée",
              body:
                "<ul><li><b>Volets</b> : battants, roulants, coulissants ; ils protègent du soleil d’été, des regards et ajoutent un peu d’isolation la nuit.</li><li><b>Porte d’entrée</b> : on regarde l’isolation, l’étanchéité, et la <b>sécurité</b> (serrure multipoints, résistance à l’effraction certifiée).</li><li>Changer les menuiseries modifie l’aspect de la façade : une <b>déclaration préalable</b> est souvent nécessaire, et le PLU peut imposer matériaux et couleurs.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Uw", back: "Coefficient d’isolation de la fenêtre entière : plus il est bas, mieux c’est." },
            { front: "Sw", back: "Part de la chaleur solaire qui entre par la fenêtre." },
            { front: "AEV", back: "Classement d’étanchéité à l’Air, à l’Eau et de résistance au Vent." },
            { front: "Rupture de pont thermique", back: "Isolant intégré dans les profils aluminium." },
            { front: "Pose en rénovation", back: "Nouvelle fenêtre posée sur l’ancien dormant conservé." },
            { front: "Déclaration préalable", back: "Souvent nécessaire pour changer des fenêtres qui modifient la façade." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Deux fenêtres : Uw = 1,1 et Uw = 1,6. Laquelle isole le mieux ?", options: ["Uw = 1,1", "Uw = 1,6", "Elles sont identiques"], answer: 0, explain: "Plus Uw est bas, moins la chaleur passe." },
            { q: "Une fenêtre haut de gamme mal posée…", options: ["reste parfaite", "peut laisser passer l’air et l’eau", "isole mieux"], answer: 1, explain: "La pose compte autant que le produit." },
            { q: "Avant de remplacer tes fenêtres en façade sur rue, tu vérifies…", options: ["Rien", "Le PLU et la nécessité d’une déclaration préalable", "Le code de la route"], answer: 1, explain: "L’aspect de la façade change." },
            { q: "Pourquoi les fenêtres en aluminium ont-elles une rupture de pont thermique ?", options: ["Pour la couleur", "Parce que l’aluminium conduit très bien la chaleur", "Pour les alléger"], answer: 1, explain: "L’isolant coupe le passage de la chaleur." },
          ],
        },
        {
          type: "case",
          title: "Les nouvelles fenêtres qui coulent",
          story:
            "Clara a fait poser des fenêtres PVC neuves. Après la première tempête, de l’eau coule sous l’appui intérieur de deux fenêtres exposées au vent. Le poseur avait seulement mis un cordon de silicone autour.",
          question: "Quelle est la cause probable et que faire ?",
          options: [
            "Les fenêtres PVC sont toujours perméables",
            "Un défaut de pose et d’étanchéité entre la fenêtre et le mur (pas de bandes ou mousses adaptées, peut-être un classement AEV insuffisant pour l’exposition) : faire intervenir l’entreprise au titre de ses garanties",
            "Mettre des serviettes à chaque tempête",
          ],
          answer: 1,
          explain:
            "Le silicone seul n’assure pas une étanchéité durable. Une entrée d’eau sur des travaux récents relève des garanties de l’entreprise (parfait achèvement, voire décennale).",
        },
        {
          type: "fiche",
          title: "Fenêtres",
          points: [
            "Matériaux : <b>bois</b>, <b>PVC</b>, <b>aluminium</b> (rupture de pont thermique), <b>mixte</b>.",
            "<b>Uw</b> bas = bonne isolation ; <b>Sw</b> = apports solaires ; classement <b>AEV</b> selon l’exposition.",
            "Pose : position dans le mur, <b>rénovation</b> ou <b>dépose totale</b>, joints et bandes d’étanchéité.",
            "Volets, porte d’entrée (sécurité) ; <b>déclaration préalable</b> et PLU.",
          ],
          retenir: "Une fenêtre vaut ce que vaut sa pose.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Portes, escaliers et garde-corps",
      minutes: 17,
      objectives: ["Comprendre les règles de confort d’un escalier", "Connaître les exigences de sécurité des garde-corps"],
      steps: [
        {
          type: "lesson",
          title: "Circuler en sécurité",
          slides: [
            {
              title: "Les portes intérieures",
              body:
                "<ul><li>Une porte s’achète en <b>bloc-porte</b> (porte + huisserie prête à poser) ou seule pour remplacer un vantail.</li><li>On précise le <b>sens d’ouverture</b> (poussant droit ou gauche) et la largeur (une largeur de passage d’au moins 80-90 cm facilite l’accessibilité).</li><li>Porte <b>coulissante</b> : gain de place, isolation phonique plus faible.</li><li>Un détalonnage (espace sous la porte) ou une grille permet à l’air de circuler vers les bouches de VMC.</li></ul>",
            },
            {
              title: "Un escalier confortable",
              body:
                "<ul><li>La <b>hauteur de marche</b> idéale tourne autour de 17 à 18 cm, le <b>giron</b> (profondeur utile de la marche) autour de 25 à 28 cm.</li><li>La <b>formule de Blondel</b> vérifie le confort : 2 × hauteur + giron ≈ <b>60 à 64 cm</b> (la longueur d’un pas).</li><li>Toutes les marches doivent avoir la <b>même hauteur</b> : une seule marche différente fait trébucher.</li><li>L’<b>échappée</b> (hauteur libre au-dessus des marches) doit permettre de passer sans se cogner, généralement autour de 1,90 à 2 m.</li></ul>",
              example: "Hauteur 17,5 cm et giron 27 cm : 2 × 17,5 + 27 = 62 cm. L’escalier est confortable.",
            },
            {
              title: "Les garde-corps",
              body:
                "<ul><li>Un garde-corps est exigé dès qu’on peut chuter de plus d’<b>1 mètre</b> (mezzanine, balcon, palier, escalier ouvert).</li><li>Sur un balcon ou une mezzanine, sa hauteur est d’au moins <b>1 m</b>.</li><li>Ses ouvertures ne doivent pas laisser passer une <b>sphère de 11 cm</b> dans sa partie basse : c’est ce qui empêche un enfant de passer la tête ou le corps.</li><li>On évite les éléments horizontaux qui forment une <b>échelle</b> et permettent à un enfant de grimper.</li><li>Une fenêtre dont l’appui est trop bas doit aussi être protégée.</li></ul>",
              article: { ref: "Norme NF P01-012", text: "Aucune ouverture du remplissage ne doit laisser passer une sphère de 11 cm de diamètre entre le plancher et 80 cm." },
            },
            {
              title: "Main courante et accessibilité",
              body:
                "<ul><li>Une <b>main courante</b> continue, facile à saisir, accompagne la montée.</li><li>Des nez de marche antidérapants et un bon éclairage réduisent les chutes, première cause d’accidents domestiques chez les personnes âgées.</li><li>Dans les lieux recevant du public, des règles d’accessibilité renforcées s’appliquent (contrastes, mains courantes des deux côtés…).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Bloc-porte", back: "Porte livrée avec son huisserie, prête à poser." },
            { front: "Giron", back: "Profondeur utile d’une marche, autour de 25 à 28 cm." },
            { front: "Formule de Blondel", back: "2 × hauteur + giron ≈ 60 à 64 cm." },
            { front: "Échappée", back: "Hauteur libre au-dessus des marches, autour de 1,90 à 2 m." },
            { front: "Garde-corps", back: "Exigé dès 1 m de chute ; au moins 1 m de haut sur un balcon ou une mezzanine." },
            { front: "Sphère de 11 cm", back: "Aucune ouverture basse du garde-corps ne doit la laisser passer." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Marche de 20 cm de haut, giron de 20 cm. Selon Blondel (2h + g), l’escalier est…", options: ["Confortable (60 cm)", "Raide : 60 cm mais marches hautes et giron court, peu confortable et peu sûr", "Impossible"], answer: 1, explain: "La formule ne suffit pas seule : 20 cm de haut et 20 cm de giron donnent un escalier raide." },
            { q: "Ta mezzanine domine le séjour de 2,50 m. Il faut…", options: ["Un garde-corps d’au moins 1 m, sans ouverture laissant passer une sphère de 11 cm en partie basse", "Une simple corde", "Rien si on fait attention"], answer: 0, explain: "La chute dépasse 1 m." },
            { q: "Pourquoi éviter les barres horizontales sur un garde-corps ?", options: ["Elles coûtent cher", "Un enfant peut s’en servir comme échelle pour grimper", "Elles rouillent"], answer: 1, explain: "C’est le risque d’escalade." },
            { q: "Pourquoi toutes les marches doivent-elles avoir la même hauteur ?", options: ["Pour l’esthétique", "Parce qu’une marche différente fait trébucher", "Pour économiser du bois"], answer: 1, explain: "Le pied s’habitue à un rythme." },
          ],
        },
        {
          type: "case",
          title: "La mezzanine de l’appartement",
          story:
            "Pour louer un studio, Adam a fait fabriquer une mezzanine à 2,20 m de haut avec un garde-corps de 80 cm composé de trois lisses horizontales espacées de 25 cm. Un couple avec un enfant de 3 ans souhaite réserver.",
          question: "Que doit faire Adam ?",
          options: [
            "Rien, le garde-corps existe",
            "Mettre le garde-corps en conformité : au moins 1 m de haut, remplissage qui ne laisse pas passer une sphère de 11 cm et sans éléments qui permettent de grimper ; en attendant, ne pas proposer le logement à des familles avec jeunes enfants",
            "Prévenir les parents de bien surveiller",
          ],
          answer: 1,
          explain:
            "Des lisses espacées de 25 cm laissent passer un enfant et lui servent d’échelle. En tant que bailleur, Adam engage sa responsabilité si un accident survient.",
        },
        {
          type: "fiche",
          title: "Portes, escaliers, garde-corps",
          points: [
            "Portes : <b>bloc-porte</b>, sens d’ouverture, largeur de passage, détalonnage pour la ventilation.",
            "Escalier : hauteur ≈ <b>17-18 cm</b>, giron ≈ <b>25-28 cm</b>, <b>Blondel</b> 60-64 cm, marches identiques, échappée suffisante.",
            "Garde-corps dès <b>1 m</b> de chute, hauteur ≥ <b>1 m</b>, <b>sphère de 11 cm</b>, pas d’échelle pour grimper.",
            "Main courante, nez de marche antidérapants, éclairage.",
          ],
          retenir: "Un garde-corps est conçu pour un enfant de trois ans, pas pour un adulte prudent.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Les parquets et sols en bois",
      minutes: 16,
      objectives: ["Distinguer les types de parquets", "Connaître les modes de pose et les règles de base"],
      steps: [
        {
          type: "lesson",
          title: "Les parquets",
          slides: [
            {
              title: "Trois familles",
              body:
                "<table class='t'><tr><th>Type</th><th>Composition</th><th>Durée de vie</th></tr><tr><td><b>Massif</b></td><td>Lames en bois massif</td><td>Très longue, peut être poncé de nombreuses fois</td></tr><tr><td><b>Contrecollé</b></td><td>Couche d’usure en bois noble collée sur un support</td><td>Longue, ponçable selon l’épaisseur de la couche d’usure</td></tr><tr><td><b>Stratifié</b></td><td>Image de bois imprimée sur un panneau de fibres</td><td>Plus courte, ne se ponce pas</td></tr></table><p>Le stratifié n’est pas un vrai parquet : économique, mais irréparable s’il est abîmé en profondeur.</p>",
            },
            {
              title: "Les modes de pose",
              body:
                "<ul><li><b>Pose flottante</b> : les lames sont assemblées entre elles et posées sur une sous-couche, sans être fixées au sol. Rapide, idéale en rénovation.</li><li><b>Pose collée</b> : collée sur la chape ; obligatoire ou recommandée sur plancher chauffant selon les produits, plus stable et moins sonore.</li><li><b>Pose clouée</b> : traditionnelle, sur lambourdes ou sur un plancher bois.</li></ul>",
            },
            {
              title: "Les règles de base",
              body:
                "<ul><li>Un support <b>sec</b>, <b>plan</b> et <b>propre</b> : une chape humide fait gonfler le parquet.</li><li>Une <b>sous-couche</b> adaptée en pose flottante (isolation phonique, barrière à l’humidité sur une dalle).</li><li><b>Acclimatation</b> du parquet dans la pièce avant la pose.</li><li>Un <b>joint de dilatation</b> en périphérie (souvent autour de 8 à 10 mm), caché sous les plinthes : sans lui, le parquet gonfle et se soulève.</li><li>Sur plancher chauffant, on choisit un parquet compatible et on respecte la température de surface prévue.</li></ul>",
            },
            {
              title: "Les terrasses en bois",
              body:
                "<ul><li>Lames en bois naturellement durable ou traité pour l’extérieur, ou en composite.</li><li>Posées sur des <b>lambourdes</b> surélevées pour que l’eau s’écoule et que l’air circule : le bois ne doit jamais stagner dans l’eau.</li><li>Un espace entre les lames laisse passer l’eau et absorbe les mouvements.</li><li>Les vis sont en <b>inox</b> pour éviter les traces noires et la rouille.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Massif, contrecollé ou stratifié ?",
          instruction: "Classe chaque description.",
          categories: ["Massif", "Contrecollé", "Stratifié"],
          items: [
            { text: "Lames entièrement en chêne, ponçables de nombreuses fois", cat: 0, why: "Bois massif." },
            { text: "Couche d’usure de 3 mm de chêne sur un support", cat: 1, why: "Contrecollé." },
            { text: "Image de bois imprimée sur un panneau de fibres", cat: 2, why: "Stratifié." },
            { text: "Ne peut pas être poncé", cat: 2, why: "Il n’y a pas de bois en surface." },
            { text: "Bonne stabilité, souvent compatible plancher chauffant", cat: 1, why: "Sa structure le rend stable." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Parquet massif", back: "Lames de bois massif, ponçables de nombreuses fois." },
            { front: "Contrecollé", back: "Couche d’usure en bois noble sur un support : stable." },
            { front: "Stratifié", back: "Image imprimée sur panneau de fibres : économique, non ponçable." },
            { front: "Pose flottante", back: "Lames assemblées sur sous-couche, non fixées au sol." },
            { front: "Joint de dilatation", back: "Espace de quelques millimètres en périphérie, caché par les plinthes." },
            { front: "Lambourdes", back: "Pièces de bois qui surélèvent une terrasse ou supportent un parquet cloué." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un parquet flottant s’est soulevé au centre de la pièce. Cause probable ?", options: ["Absence de joint de dilatation en périphérie", "Trop de meubles", "Une mauvaise couleur"], answer: 0, explain: "Le bois n’a pas pu se dilater." },
            { q: "Quel revêtement peut être poncé pour retrouver un aspect neuf ?", options: ["Le stratifié", "Le parquet massif ou contrecollé (selon la couche d’usure)", "Le linoléum"], answer: 1, explain: "Le stratifié n’a pas de bois en surface." },
            { q: "Pourquoi surélever une terrasse sur lambourdes ?", options: ["Pour que l’eau s’écoule et que l’air circule sous les lames", "Pour la décoration", "Pour économiser du bois"], answer: 0, explain: "Le bois humide en permanence pourrit." },
            { q: "Avant de poser un parquet sur une chape récente, on vérifie…", options: ["sa couleur", "qu’elle est sèche et plane", "rien"], answer: 1, explain: "L’humidité de la chape fait gonfler le bois." },
          ],
        },
        {
          type: "case",
          title: "Le parquet de la maison neuve",
          story:
            "Pour gagner du temps, l’entreprise de Mathilde propose de poser le parquet massif une semaine après le coulage de la chape, sans mesurer son humidité, et de serrer les lames jusqu’aux murs « pour que ce soit propre ».",
          question: "Que doit exiger Mathilde ?",
          options: [
            "Accepter, ça ira plus vite",
            "Attendre le séchage de la chape (avec une mesure d’humidité), faire acclimater le parquet et laisser un joint de dilatation périphérique caché sous les plinthes",
            "Mettre un tapis par-dessus",
          ],
          answer: 1,
          explain:
            "Une chape encore humide et l’absence de joint de dilatation sont les deux causes classiques de parquets qui gonflent, se soulèvent ou se déforment.",
        },
        {
          type: "fiche",
          title: "Parquets",
          points: [
            "<b>Massif</b> (ponçable longtemps), <b>contrecollé</b> (stable), <b>stratifié</b> (non ponçable).",
            "Pose <b>flottante</b>, <b>collée</b> ou <b>clouée</b>.",
            "Support <b>sec et plan</b>, <b>acclimatation</b>, <b>joint de dilatation</b> en périphérie.",
            "Terrasse : bois durable, <b>lambourdes</b>, espaces entre lames, vis <b>inox</b>.",
          ],
          retenir: "Un parquet a besoin d’un sol sec et d’un peu de place pour respirer.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Finitions et protection du bois",
      minutes: 15,
      objectives: ["Choisir une finition selon l’usage", "Protéger le bois contre l’eau, les insectes et les champignons"],
      steps: [
        {
          type: "lesson",
          title: "Protéger et embellir",
          slides: [
            {
              title: "Les finitions",
              body:
                "<table class='t'><tr><th>Finition</th><th>Principe</th><th>Usage</th></tr><tr><td><b>Vernis</b></td><td>Film dur en surface</td><td>Parquets, meubles très sollicités</td></tr><tr><td><b>Huile</b></td><td>Pénètre le bois, aspect naturel</td><td>Parquets, plans de travail, meubles ; facile à rénover localement</td></tr><tr><td><b>Cire</b></td><td>Aspect satiné, toucher doux</td><td>Meubles, peu résistante à l’eau</td></tr><tr><td><b>Lasure</b></td><td>Protège en laissant voir le veinage, laisse respirer</td><td>Menuiseries et bardages extérieurs</td></tr><tr><td><b>Saturateur</b></td><td>Imprègne et protège de l’eau</td><td>Terrasses, bois extérieurs horizontaux</td></tr><tr><td><b>Peinture</b></td><td>Couvre et colore</td><td>Menuiseries intérieures et extérieures</td></tr></table>",
            },
            {
              title: "Bien préparer",
              body:
                "<ul><li>Une finition ne vaut que par sa préparation : bois <b>sec</b>, <b>propre</b>, <b>poncé</b> dans le sens du fil avec des grains de plus en plus fins.</li><li>On dépoussière soigneusement entre chaque couche.</li><li>On respecte les temps de séchage et les conditions (température, humidité) du fabricant.</li><li>En extérieur, on protège en priorité les <b>bois de bout</b> (extrémités), qui absorbent l’eau.</li></ul>",
            },
            {
              title: "Les ennemis du bois",
              body:
                "<ul><li><b>Champignons</b> : ils se développent quand le bois reste humide (pourriture). La meilleure protection est de garder le bois au sec (conception, ventilation, écoulement de l’eau).</li><li><b>Insectes</b> : capricornes, vrillettes (petits trous, sciure), et dans certaines régions les <b>termites</b>, qui peuvent faire l’objet d’un arrêté préfectoral et d’un diagnostic obligatoire à la vente.</li><li>La <b>mérule</b>, champignon très destructeur, prolifère dans les bois humides et mal ventilés : certaines zones font l’objet d’une déclaration et d’une information obligatoire.</li></ul>",
            },
            {
              title: "L’entretien dans le temps",
              body:
                "<ul><li>Une lasure extérieure s’entretient tous les quelques années selon l’exposition ; un bois exposé plein sud et à la pluie s’use plus vite.</li><li>Un bois extérieur non traité grise naturellement : c’est esthétique, pas forcément un défaut si l’essence est durable.</li><li>Une huile se renouvelle localement sans tout poncer ; un vernis abîmé demande souvent de poncer toute la surface.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle finition ?",
          instruction: "Associe chaque ouvrage à la finition la plus adaptée.",
          categories: ["Vernis ou huile", "Lasure", "Saturateur"],
          items: [
            { text: "Parquet de séjour très fréquenté", cat: 0, why: "Protection de surface ou huile d’imprégnation." },
            { text: "Volets en bois exposés à la pluie", cat: 1, why: "Protège en laissant respirer." },
            { text: "Terrasse en pin traité", cat: 2, why: "Imprégnation des bois horizontaux extérieurs." },
            { text: "Plan de travail en chêne", cat: 0, why: "Huile alimentaire adaptée." },
            { text: "Bardage en douglas qu’on veut garder blond", cat: 1, why: "Lasure extérieure." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Vernis", back: "Film dur en surface, très résistant ; rénovation par ponçage complet." },
            { front: "Huile", back: "Pénètre le bois, aspect naturel, se rénove localement." },
            { front: "Lasure", back: "Protection extérieure qui laisse voir le veinage et laisse respirer le bois." },
            { front: "Saturateur", back: "Imprègne les bois extérieurs horizontaux (terrasses)." },
            { front: "Bois de bout", back: "Extrémités du bois, qui absorbent l’eau : à protéger en priorité." },
            { front: "Mérule", back: "Champignon très destructeur des bois humides et mal ventilés." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "La meilleure protection contre la pourriture du bois est…", options: ["une couche épaisse de peinture", "de garder le bois au sec et ventilé", "de le cirer"], answer: 1, explain: "Les champignons ont besoin d’humidité." },
            { q: "Pourquoi poncer dans le sens du fil ?", options: ["Pour éviter les rayures visibles", "Pour aller plus vite", "Ce n’est pas utile"], answer: 0, explain: "Les rayures en travers restent visibles sous la finition." },
            { q: "Ton plan de travail huilé a une tache. Que faire ?", options: ["Tout poncer et vernir", "Poncer légèrement la zone et réappliquer de l’huile", "Le remplacer"], answer: 1, explain: "L’huile se rénove localement." },
            { q: "Des petits trous ronds et de la sciure apparaissent sur une poutre. Il s’agit probablement…", options: ["d’insectes à bois", "d’humidité", "d’usure normale"], answer: 0, explain: "Il faut faire diagnostiquer et traiter." },
          ],
        },
        {
          type: "case",
          title: "Le bardage qui noircit",
          story:
            "Le bardage en sapin non traité de l’extension de Léon noircit et se tache en bas, là où l’eau de pluie rebondit sur le sol. Les lames touchent presque la terre et il n’a appliqué aucune protection.",
          question: "Que s’est-il passé et que faire ?",
          options: [
            "C’est la pollution, rien à faire",
            "Le sapin non traité n’est pas durable en extérieur, et le bas du bardage reste humide à cause des rejaillissements : remplacer les lames abîmées par un bois adapté (ou traité), surélever le bardage par rapport au sol et le protéger (lasure)",
            "Le peindre en noir",
          ],
          answer: 1,
          explain:
            "Garder une garde au sol, choisir un bois de la bonne classe d’emploi et faciliter le séchage sont les clés de la durabilité du bois en extérieur.",
        },
        {
          type: "fiche",
          title: "Finitions et protection",
          points: [
            "<b>Vernis</b>, <b>huile</b>, <b>cire</b> (intérieur) ; <b>lasure</b>, <b>saturateur</b>, peinture (extérieur).",
            "Préparation : bois sec, propre, <b>poncé dans le sens du fil</b> ; protéger les <b>bois de bout</b>.",
            "Ennemis : <b>champignons</b> (humidité), <b>insectes</b>, <b>termites</b>, <b>mérule</b>.",
            "Entretenir régulièrement ; un bois au sec et ventilé dure des siècles.",
          ],
          retenir: "Un bois qui sèche vite est un bois qui dure.",
        },
      ],
    },
  ],
});
