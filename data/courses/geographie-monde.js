/* ============================================================
   COURS : Comprendre le monde — les bases de la géographie
   Faculté de Géographie · 8 séances de 15 à 20 minutes
   Lire une carte, la Terre physique, climats, population et
   villes, ressources et énergie, mondialisation et routes
   commerciales, États et géopolitique, la France et l'Europe.
   Chiffres vérifiés au 1er novembre 2026 : France 69,1 M
   d'habitants au 1er janvier 2026 (Insee, provisoire) ;
   ONU World Urbanization Prospects 2025 (Jakarta ≈ 42 M,
   Dhaka ≈ 40 M, Tokyo ≈ 33 M ; population mondiale ≈ 8,2 Md) ;
   zone euro à 21 pays depuis l'entrée de la Bulgarie le
   1er janvier 2026. À METTRE À JOUR.
   ============================================================ */
AGORA.registerCourse({
  id: "geographie-monde",
  faculty: "geographie",
  title: "Comprendre le monde — les bases de la géographie",
  subtitle: "Cartes, climats, population, ressources, échanges et puissances",
  color: "#3d6fb6",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour lire le monde : comprendre une carte et ses pièges, la Terre physique (continents, océans, reliefs, plaques), les climats, la population et les villes, les ressources et l’énergie, la mondialisation et les grandes routes du commerce, les États et les rapports de puissance, et enfin la France et l’Europe. Avec des cas concrets, notamment pour qui importe et vend à l’international.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Lire une carte",
      minutes: 16,
      objectives: ["Se repérer avec la latitude, la longitude et l’échelle", "Comprendre les déformations des cartes et les fuseaux horaires"],
      steps: [
        {
          type: "lesson",
          title: "La carte n’est pas le territoire",
          slides: [
            {
              title: "Latitude et longitude",
              body:
                "<ul><li>La <b>latitude</b> mesure la position au nord ou au sud de l’<b>équateur</b> (0°), jusqu’à 90° aux pôles. Les <b>tropiques</b> sont à environ 23,4°, les <b>cercles polaires</b> à environ 66,6°.</li><li>La <b>longitude</b> mesure la position à l’est ou à l’ouest du <b>méridien de Greenwich</b> (0°), jusqu’à 180°.</li><li>Exemple : Caen se situe vers 49° nord et 0,4° ouest ; Paris vers 48,9° nord et 2,3° est.</li><li>Chaque point de la Terre a ainsi des <b>coordonnées</b> uniques, celles qu’utilise le GPS.</li></ul>",
            },
            {
              title: "L’échelle",
              body:
                "<ul><li>L’<b>échelle</b> indique le rapport entre une distance sur la carte et la distance réelle.</li><li>1/25 000 : 1 cm sur la carte = 250 m sur le terrain (cartes de randonnée).</li><li>1/1 000 000 : 1 cm = 10 km (carte d’un pays).</li><li>« Grande échelle » = beaucoup de détails sur un petit territoire (plan de ville) ; « petite échelle » = grand territoire, peu de détails (planisphère).</li></ul>",
            },
            {
              title: "Les projections déforment",
              body:
                "<p>Impossible d’aplatir une sphère sans la déformer. Chaque <b>projection</b> fait un choix :</p><ul><li><b>Mercator</b> (1569) : conserve les angles (utile pour naviguer) mais <b>agrandit</b> énormément les régions proches des pôles. Le Groenland y paraît aussi grand que l’Afrique, alors que l’Afrique est environ <b>14 fois plus grande</b>.</li><li>Projections à <b>aires égales</b> (Gall-Peters, Equal Earth) : surfaces justes, formes déformées.</li><li>Projections de compromis (Robinson, Winkel) : utilisées dans les atlas.</li></ul><p>Une carte est toujours un <b>choix</b> : centre, projection, couleurs, ce qu’on montre et ce qu’on cache.</p>",
            },
            {
              title: "Les fuseaux horaires",
              body:
                "<ul><li>La Terre tourne de 360° en 24 h, soit <b>15° par heure</b> : d’où environ 24 fuseaux horaires.</li><li>Référence : le temps universel <b>UTC</b>.</li><li>La France métropolitaine est à <b>UTC+1</b> en hiver et <b>UTC+2</b> en été.</li><li>Les frontières des fuseaux suivent souvent des choix politiques : la Chine, immense, n’a qu’un seul fuseau (UTC+8).</li><li>Utile en affaires : quand il est 9 h à Paris en hiver, il est 16 h à Shanghai et 3 h à New York.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Latitude", back: "Position nord-sud par rapport à l’équateur (0° à 90°)" },
            { front: "Longitude", back: "Position est-ouest par rapport au méridien de Greenwich (0° à 180°)" },
            { front: "Échelle 1/25 000", back: "1 cm sur la carte = 250 m sur le terrain" },
            { front: "Projection de Mercator", back: "Conserve les angles, agrandit les régions polaires" },
            { front: "Afrique vs Groenland", back: "L’Afrique est environ 14 fois plus grande" },
            { front: "Heure d’hiver en France", back: "UTC+1 (UTC+2 en été) ; Chine : UTC+8" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "L’équateur correspond à…", options: ["0° de longitude", "0° de latitude", "90° de latitude"], answer: 1, explain: "Le méridien de Greenwich est le 0° de longitude." },
            { q: "Sur une carte au 1/100 000, 3 cm représentent…", options: ["300 m", "3 km", "30 km"], answer: 1, explain: "1 cm = 1 km." },
            { q: "Pourquoi le Groenland paraît-il immense sur beaucoup de cartes ?", options: ["Il l’est vraiment", "La projection de Mercator agrandit les régions proches des pôles", "Une erreur d’impression"], answer: 1, explain: "Mercator déforme les surfaces." },
            { q: "Il est 10 h à Paris en hiver. Quelle heure est-il à Shanghai (UTC+8) ?", options: ["17 h", "3 h", "10 h"], answer: 0, explain: "Paris est à UTC+1 : +7 heures." },
          ],
        },
        {
          type: "case",
          title: "L’appel au fournisseur",
          story:
            "Noa veut appeler son agent de sourcing à Shenzhen (UTC+8) en juillet. Il programme l’appel à 15 h, heure de Paris, « en fin de journée chez eux ».",
          question: "Quelle heure sera-t-il à Shenzhen ?",
          options: [
            "16 h",
            "21 h : en été, Paris est à UTC+2, soit 6 heures de décalage ; mieux vaut appeler le matin à Paris (8 h-10 h = 14 h-16 h à Shenzhen)",
            "9 h du matin",
          ],
          answer: 1,
          explain:
            "Le décalage avec la Chine est de 7 heures en hiver et 6 heures en été, car la Chine ne change pas d’heure.",
        },
        {
          type: "fiche",
          title: "Lire une carte",
          points: [
            "<b>Latitude</b> (équateur, tropiques 23,4°, cercles polaires 66,6°) et <b>longitude</b> (Greenwich).",
            "<b>Échelle</b> : 1/25 000 → 1 cm = 250 m ; grande échelle = détaillée.",
            "<b>Projections</b> : Mercator agrandit les pôles ; Afrique ≈ 14 × Groenland ; une carte est un choix.",
            "<b>Fuseaux</b> : 15° par heure ; France UTC+1 / UTC+2 ; Chine UTC+8 toute l’année.",
          ],
          retenir: "Toute carte déforme : demande-toi toujours ce qu’elle montre, et ce qu’elle agrandit.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "La Terre physique",
      minutes: 16,
      objectives: ["Situer continents, océans et grands reliefs", "Comprendre la tectonique des plaques"],
      steps: [
        {
          type: "lesson",
          title: "Continents, océans, reliefs",
          slides: [
            {
              title: "Continents et océans",
              body:
                "<ul><li>Les océans couvrent environ <b>71 %</b> de la surface de la Terre.</li><li>Cinq océans : <b>Pacifique</b> (le plus grand, plus que toutes les terres réunies), <b>Atlantique</b>, <b>Indien</b>, <b>Austral</b>, <b>Arctique</b>.</li><li>Continents (découpage courant en France) : <b>Asie</b> (le plus grand et le plus peuplé), <b>Afrique</b>, <b>Amérique</b> (du Nord et du Sud), <b>Europe</b>, <b>Océanie</b>, <b>Antarctique</b>.</li><li>La frontière entre Europe et Asie est une convention (souvent l’Oural et le Caucase).</li></ul>",
            },
            {
              title: "Les grands reliefs",
              body:
                "<table class='t'><tr><th>Record</th><th>Lieu</th></tr><tr><td>Plus haut sommet</td><td><b>Everest</b> (8 849 m), Himalaya, entre Népal et Chine</td></tr><tr><td>Plus haut sommet d’Europe occidentale</td><td><b>Mont Blanc</b> (environ 4 800 m, variable avec la glace)</td></tr><tr><td>Plus longs fleuves</td><td><b>Nil</b> et <b>Amazone</b> (environ 6 500-7 000 km, selon les mesures)</td></tr><tr><td>Plus grand désert chaud</td><td><b>Sahara</b></td></tr><tr><td>Fosse la plus profonde</td><td><b>Fosse des Mariannes</b> (près de 11 000 m)</td></tr></table>",
            },
            {
              title: "La tectonique des plaques",
              body:
                "<ul><li>La surface de la Terre est découpée en <b>plaques</b> rigides qui se déplacent de quelques centimètres par an.</li><li>Quand elles s’<b>écartent</b> : dorsales océaniques, nouvel océan (l’Atlantique s’élargit).</li><li>Quand elles se <b>rapprochent</b> : chaînes de montagnes (l’Inde pousse contre l’Asie et forme l’Himalaya), fosses, volcans.</li><li>Quand elles <b>glissent</b> l’une contre l’autre : failles et séismes (faille de San Andreas en Californie).</li></ul>",
            },
            {
              title: "Les risques naturels",
              body:
                "<ul><li>La <b>ceinture de feu du Pacifique</b> concentre une grande partie des volcans actifs et des séismes (Japon, Indonésie, Chili…).</li><li>Les <b>séismes sous-marins</b> peuvent provoquer des <b>tsunamis</b> (océan Indien 2004, Japon 2011).</li><li>Autres risques : cyclones (ouragans, typhons), inondations, glissements de terrain, sécheresses.</li><li>Le <b>risque</b> combine l’aléa (le phénomène) et la vulnérabilité (population, bâtiments, préparation) : un même séisme fait beaucoup plus de victimes là où les constructions ne sont pas adaptées.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Que se passe-t-il entre les plaques ?",
          instruction: "Quel mouvement de plaques explique chaque phénomène ?",
          categories: ["Écartement", "Rapprochement", "Coulissement"],
          items: [
            { text: "L’Atlantique s’élargit chaque année", cat: 0, why: "Dorsale médio-atlantique." },
            { text: "Formation de l’Himalaya", cat: 1, why: "L’Inde contre l’Asie." },
            { text: "La faille de San Andreas en Californie", cat: 2, why: "Deux plaques glissent côte à côte." },
            { text: "Volcans et fosses autour du Pacifique", cat: 1, why: "Subduction." },
            { text: "L’Islande, traversée par une dorsale", cat: 0, why: "Écartement visible à terre." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Part des océans", back: "Environ 71 % de la surface terrestre" },
            { front: "Plus grand océan", back: "Le Pacifique" },
            { front: "Everest", back: "8 849 m, Himalaya" },
            { front: "Tectonique des plaques", back: "Plaques rigides qui bougent de quelques cm par an" },
            { front: "Ceinture de feu", back: "Pourtour du Pacifique : volcans et séismes" },
            { front: "Risque", back: "Aléa × vulnérabilité" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est le plus grand continent ?", options: ["L’Afrique", "L’Asie", "L’Amérique"], answer: 1, explain: "Aussi le plus peuplé." },
            { q: "L’Himalaya s’est formé par…", options: ["l’écartement de deux plaques", "la collision de l’Inde et de l’Asie", "l’érosion"], answer: 1, explain: "Et il continue de s’élever." },
            { q: "Pourquoi un séisme de même force fait-il plus de victimes dans certains pays ?", options: ["La vulnérabilité est plus grande (constructions, préparation)", "Le hasard", "La latitude"], answer: 0, explain: "Le risque dépend aussi de la société." },
            { q: "Quel océan entoure l’Antarctique ?", options: ["L’océan Austral", "L’océan Arctique", "L’océan Indien"], answer: 0, explain: "L’Arctique est au nord." },
          ],
        },
        {
          type: "case",
          title: "Le fournisseur au Japon",
          story:
            "Une PME française dépend d’un fournisseur unique de composants installé au Japon. Après un séisme suivi d’un tsunami, l’usine est arrêtée plusieurs mois.",
          question: "Quelle leçon de géographie économique en tirer ?",
          options: [
            "Rien, c’est imprévisible",
            "Connaître l’exposition de ses fournisseurs aux risques naturels et diversifier ses sources d’approvisionnement entre plusieurs régions",
            "Ne jamais acheter à l’étranger",
          ],
          answer: 1,
          explain:
            "Après le séisme de 2011, de nombreuses chaînes de production mondiales ont été perturbées. La géographie des risques fait partie de la gestion des achats.",
        },
        {
          type: "fiche",
          title: "Terre physique",
          points: [
            "Océans : <b>71 %</b> de la surface ; Pacifique, Atlantique, Indien, Austral, Arctique.",
            "Records : <b>Everest 8 849 m</b>, Nil et Amazone, Sahara, fosse des Mariannes.",
            "<b>Plaques</b> : écartement (océans), rapprochement (montagnes, volcans), coulissement (failles).",
            "<b>Ceinture de feu</b> ; risque = <b>aléa × vulnérabilité</b>.",
          ],
          retenir: "Les montagnes, les volcans et les séismes racontent tous la même histoire : celle des plaques qui bougent.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Climats et changement climatique",
      minutes: 16,
      objectives: ["Comprendre ce qui détermine les climats", "Connaître les grands climats et les enjeux du réchauffement"],
      steps: [
        {
          type: "lesson",
          title: "Pourquoi fait-il chaud ici et froid là-bas",
          slides: [
            {
              title: "Les facteurs du climat",
              body:
                "<ul><li><b>Latitude</b> : près de l’équateur, le soleil arrive plus à la verticale et chauffe davantage.</li><li><b>Océans</b> : ils adoucissent le climat des côtes. Le courant chaud de l’Atlantique Nord rend l’Europe de l’Ouest plus douce que le Canada à la même latitude.</li><li><b>Altitude</b> : la température baisse d’environ 0,6 °C tous les 100 m.</li><li><b>Relief</b> et <b>vents</b> : les montagnes arrêtent les pluies d’un côté et créent des zones sèches de l’autre.</li></ul>",
            },
            {
              title: "Les grands climats",
              body:
                "<table class='t'><tr><th>Climat</th><th>Caractéristiques</th><th>Exemples</th></tr><tr><td>Équatorial</td><td>Chaud et humide toute l’année</td><td>Amazonie, bassin du Congo</td></tr><tr><td>Tropical</td><td>Chaud, saison sèche et saison des pluies (mousson)</td><td>Inde, Afrique de l’Ouest</td></tr><tr><td>Aride</td><td>Très peu de pluies</td><td>Sahara, péninsule arabique</td></tr><tr><td>Méditerranéen</td><td>Étés chauds et secs, hivers doux</td><td>Sud de la France, Espagne</td></tr><tr><td>Océanique</td><td>Doux et humide, faibles écarts</td><td>Normandie, Bretagne, Irlande</td></tr><tr><td>Continental</td><td>Hivers froids, étés chauds</td><td>Pologne, Russie, centre des États-Unis</td></tr><tr><td>Polaire</td><td>Froid toute l’année</td><td>Arctique, Antarctique</td></tr></table>",
            },
            {
              title: "Le changement climatique",
              body:
                "<ul><li>Les gaz à effet de serre émis par les activités humaines (surtout la combustion de charbon, de pétrole et de gaz) réchauffent la planète.</li><li>La température moyenne mondiale a déjà augmenté d’environ <b>1,2 à 1,3 °C</b> par rapport à l’époque préindustrielle sur la dernière décennie ; <b>2024</b> a été la première année civile au-dessus de +1,5 °C.</li><li>Conséquences : vagues de chaleur, sécheresses, pluies intenses, recul des glaciers, hausse du niveau de la mer.</li><li>L’<b>Accord de Paris</b> (2015) vise à limiter le réchauffement nettement sous 2 °C, si possible 1,5 °C.</li></ul>",
            },
            {
              title: "Atténuer et s’adapter",
              body:
                "<ul><li><b>Atténuation</b> : réduire les émissions (énergies bas-carbone, efficacité énergétique, transports, isolation, alimentation).</li><li><b>Adaptation</b> : se préparer aux effets inévitables (gestion de l’eau, végétalisation des villes, protection des côtes, cultures adaptées).</li><li>Les pays les plus vulnérables ne sont pas toujours ceux qui ont le plus émis historiquement : c’est un enjeu majeur des négociations internationales (COP).</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel climat ?",
          instruction: "Associe chaque lieu à son climat dominant.",
          categories: ["Océanique", "Méditerranéen", "Continental"],
          items: [
            { text: "Caen", cat: 0, why: "Doux et humide." },
            { text: "Marseille", cat: 1, why: "Étés chauds et secs." },
            { text: "Varsovie", cat: 2, why: "Hivers froids, étés chauds." },
            { text: "Dublin", cat: 0, why: "Influence atlantique." },
            { text: "Séville", cat: 1, why: "Étés très chauds et secs." },
            { text: "Moscou", cat: 2, why: "Fortes amplitudes thermiques." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Altitude et température", back: "Environ -0,6 °C tous les 100 m" },
            { front: "Courant chaud de l’Atlantique Nord", back: "Adoucit le climat de l’Europe de l’Ouest" },
            { front: "Mousson", back: "Saison des pluies des climats tropicaux (Inde)" },
            { front: "Réchauffement observé", back: "Environ +1,2 à 1,3 °C sur la dernière décennie ; 2024 au-dessus de +1,5 °C" },
            { front: "Accord de Paris (2015)", back: "Nettement sous 2 °C, si possible 1,5 °C" },
            { front: "Atténuation / adaptation", back: "Réduire les émissions / se préparer aux effets" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi fait-il plus doux à Brest qu’à Montréal, pourtant à une latitude proche ?", options: ["L’influence de l’océan et du courant chaud de l’Atlantique Nord", "L’altitude", "Le hasard"], answer: 0, explain: "Les façades océaniques ouest sont adoucies." },
            { q: "À 2 000 m d’altitude, par rapport au niveau de la mer, il fait environ…", options: ["12 °C de moins", "2 °C de moins", "la même température"], answer: 0, explain: "20 × 0,6 °C." },
            { q: "Principale cause du réchauffement actuel ?", options: ["Les volcans", "Les émissions humaines de gaz à effet de serre", "La distance Terre-Soleil"], answer: 1, explain: "Surtout la combustion des énergies fossiles." },
            { q: "Végétaliser une ville pour réduire la chaleur, c’est…", options: ["de l’adaptation", "de l’atténuation uniquement", "inutile"], answer: 0, explain: "On se prépare aux effets." },
          ],
        },
        {
          type: "case",
          title: "Le parfum d’ambiance et la chaleur",
          story:
            "Une marque stocke ses diffuseurs de parfum dans un entrepôt non climatisé du sud de l’Espagne. Pendant une vague de chaleur, des flacons fuient et le parfum s’altère.",
          question: "Quelle réflexion géographique aurait aidé ?",
          options: [
            "Aucune",
            "Prendre en compte le climat (étés très chauds, vagues de chaleur plus fréquentes) dans le choix du lieu de stockage, de l’emballage et des périodes de transport",
            "Vendre uniquement en hiver",
          ],
          answer: 1,
          explain:
            "Climat et logistique sont liés : températures extrêmes, humidité et saisons influencent le stockage, le transport et la conservation des produits.",
        },
        {
          type: "fiche",
          title: "Climats",
          points: [
            "Facteurs : <b>latitude</b>, <b>océans</b> et courants, <b>altitude</b> (-0,6 °C/100 m), relief et vents.",
            "Climats : équatorial, tropical, aride, méditerranéen, <b>océanique</b> (Normandie), continental, polaire.",
            "Réchauffement : <b>+1,2 à 1,3 °C</b> ; 2024 au-dessus de +1,5 °C ; <b>Accord de Paris</b>.",
            "<b>Atténuation</b> et <b>adaptation</b> ; enjeu de justice entre pays.",
          ],
          retenir: "Le climat d’un lieu dépend de sa latitude, de sa distance à l’océan et de son altitude ; et il change.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Population et villes",
      minutes: 16,
      objectives: ["Comprendre la répartition et l’évolution de la population mondiale", "Comprendre l’urbanisation"],
      steps: [
        {
          type: "lesson",
          title: "8,2 milliards d’humains",
          slides: [
            {
              title: "Où vivent les humains",
              body:
                "<ul><li>La population mondiale atteint environ <b>8,2 milliards</b> (ONU).</li><li>Depuis 2023, l’<b>Inde</b> est le pays le plus peuplé, devant la <b>Chine</b> (chacun environ 1,4 milliard).</li><li>Plus de la moitié de l’humanité vit en <b>Asie</b>.</li><li>Les grands foyers de peuplement : Asie de l’Est, Asie du Sud, Europe, et de plus en plus l’Afrique. Les déserts, les hautes montagnes et les régions polaires sont presque vides.</li></ul>",
            },
            {
              title: "La transition démographique",
              body:
                "<ol><li>Natalité et mortalité élevées : population stable.</li><li>La mortalité baisse (hygiène, médecine) mais la natalité reste haute : <b>forte croissance</b>.</li><li>La natalité baisse à son tour (éducation, urbanisation, contraception).</li><li>Natalité et mortalité basses : croissance faible, <b>vieillissement</b>.</li></ol><p>L’Europe, le Japon et la Chine sont en fin de transition (population vieillissante, parfois en baisse). Une grande partie de l’<b>Afrique subsaharienne</b> est encore en forte croissance : l’Afrique pourrait compter environ un quart de l’humanité vers 2050.</p>",
            },
            {
              title: "L’urbanisation",
              body:
                "<ul><li>Selon la nouvelle méthode de l’ONU (2025), les <b>villes</b> abritent environ <b>45 %</b> de la population mondiale, et les villes moyennes une part importante du reste.</li><li>Les plus grandes agglomérations selon ce rapport : <b>Jakarta</b> (environ 42 millions), <b>Dhaka</b> (environ 40 millions), <b>Tokyo</b> (environ 33 millions).</li><li>Les <b>mégapoles</b> concentrent emplois, sièges d’entreprises, universités, mais aussi bidonvilles, pollution et embouteillages.</li><li>Les classements varient beaucoup selon la façon de délimiter une ville.</li></ul>",
            },
            {
              title: "Migrations",
              body:
                "<ul><li>Moins de 4 % de la population mondiale vit dans un autre pays que son pays de naissance.</li><li>Raisons : travail, études, famille, conflits, persécutions, climat.</li><li>Une grande partie des migrations ont lieu <b>entre pays voisins</b> ou à l’intérieur d’un même continent.</li><li>Les migrations internes (des campagnes vers les villes) sont encore plus nombreuses.</li><li>Les <b>transferts d’argent</b> des migrants vers leur pays d’origine dépassent dans plusieurs pays l’aide au développement.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Population mondiale", back: "Environ 8,2 milliards (ONU)" },
            { front: "Pays le plus peuplé", back: "L’Inde depuis 2023, devant la Chine" },
            { front: "Transition démographique", back: "Baisse de la mortalité puis de la natalité : forte croissance puis vieillissement" },
            { front: "Plus grandes villes (ONU 2025)", back: "Jakarta (~42 M), Dhaka (~40 M), Tokyo (~33 M)" },
            { front: "Part urbaine (nouvelle méthode ONU)", back: "Environ 45 % dans les villes" },
            { front: "Afrique vers 2050", back: "Environ un quart de l’humanité" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est le pays le plus peuplé du monde ?", options: ["La Chine", "L’Inde", "Les États-Unis"], answer: 1, explain: "Depuis 2023." },
            { q: "Dans quelle phase de la transition la population croît-elle le plus vite ?", options: ["Quand la mortalité baisse mais que la natalité reste élevée", "Quand natalité et mortalité sont basses", "Avant toute baisse de mortalité"], answer: 0, explain: "Phase 2." },
            { q: "Selon l’ONU (2025), quelle est la plus grande agglomération ?", options: ["Tokyo", "Jakarta", "Paris"], answer: 1, explain: "Avec la nouvelle méthode de délimitation." },
            { q: "La plupart des migrations internationales ont lieu…", options: ["entre continents éloignés", "souvent entre pays voisins ou d’un même continent", "uniquement vers l’Europe"], answer: 1, explain: "Contrairement à une idée reçue." },
          ],
        },
        {
          type: "case",
          title: "Choisir un marché",
          story:
            "Noa hésite à lancer sa marque d’accessoires pour animaux dans un nouveau pays. Il compare un pays européen à la population stable et vieillissante, avec un fort pouvoir d’achat, et un pays africain jeune en forte croissance démographique, avec un pouvoir d’achat plus faible mais une classe moyenne urbaine en expansion.",
          question: "Quelle approche géographique adopter ?",
          options: [
            "Choisir uniquement le pays le plus peuplé",
            "Croiser démographie (taille, âge, croissance), urbanisation, pouvoir d’achat, habitudes de consommation (animaux de compagnie) et logistique ; un marché jeune peut être une opportunité de long terme, un marché riche et vieillissant une opportunité immédiate",
            "Ne jamais s’étendre hors de France",
          ],
          answer: 1,
          explain:
            "La géographie de la population aide à choisir un marché, mais elle doit être croisée avec les revenus, la culture et la logistique.",
        },
        {
          type: "fiche",
          title: "Population et villes",
          points: [
            "≈ <b>8,2 milliards</b> ; <b>Inde</b> 1re devant la Chine ; plus de la moitié en <b>Asie</b>.",
            "<b>Transition démographique</b> : croissance puis <b>vieillissement</b> ; Afrique en forte croissance.",
            "Urbanisation : ≈ <b>45 %</b> dans les villes (ONU 2025) ; <b>Jakarta, Dhaka, Tokyo</b>.",
            "Migrations : moins de 4 % de la population, souvent entre voisins ; transferts d’argent importants.",
          ],
          retenir: "Le centre de gravité démographique du monde est en Asie, et il glisse progressivement vers l’Afrique.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Ressources et énergie",
      minutes: 16,
      objectives: ["Situer les grandes ressources de la planète", "Comprendre les enjeux de l’énergie, de l’eau et des métaux"],
      steps: [
        {
          type: "lesson",
          title: "Ce que la Terre fournit",
          slides: [
            {
              title: "L’énergie",
              body:
                "<ul><li>Les énergies <b>fossiles</b> (pétrole, gaz, charbon) fournissent encore environ <b>80 %</b> de l’énergie primaire mondiale.</li><li><b>Pétrole</b> : les États-Unis sont le premier producteur mondial, devant l’Arabie saoudite et la Russie ; le Moyen-Orient détient une grande partie des réserves.</li><li><b>Charbon</b> : très utilisé en Chine et en Inde pour l’électricité.</li><li><b>Renouvelables</b> (solaire, éolien) : croissance très rapide ; la Chine en installe plus que tout le reste du monde.</li><li>La <b>France</b> produit une grande partie de son électricité avec le <b>nucléaire</b>.</li></ul>",
            },
            {
              title: "Les métaux critiques",
              body:
                "<ul><li>La transition énergétique et le numérique demandent beaucoup de <b>métaux</b> : lithium, cobalt, nickel, cuivre, terres rares.</li><li>La production est concentrée : cobalt en <b>République démocratique du Congo</b>, lithium en Australie, au Chili et en Chine, terres rares en <b>Chine</b>.</li><li>La Chine domine surtout le <b>raffinage</b> de nombreux métaux critiques : c’est un levier stratégique.</li><li>L’Union européenne cherche à diversifier ses approvisionnements et à recycler davantage.</li></ul>",
            },
            {
              title: "L’eau",
              body:
                "<ul><li>Environ <b>97 %</b> de l’eau de la planète est salée ; l’eau douce facilement accessible ne représente qu’une très petite part.</li><li>L’<b>agriculture</b> utilise environ <b>70 %</b> de l’eau douce prélevée dans le monde.</li><li>Les tensions sur l’eau augmentent : sécheresses, nappes surexploitées, fleuves partagés entre plusieurs pays (Nil, Tigre et Euphrate, Mékong).</li><li>Un pays peut « importer de l’eau » indirectement en important des produits agricoles (eau virtuelle).</li></ul>",
            },
            {
              title: "Nourrir le monde",
              body:
                "<ul><li>Grandes puissances agricoles : États-Unis, Brésil, Chine, Inde, Union européenne, Russie et Ukraine (céréales).</li><li>La production mondiale suffirait en calories à nourrir l’humanité ; la faim est d’abord liée à la <b>pauvreté</b>, aux <b>conflits</b> et aux crises climatiques.</li><li>La guerre en Ukraine en 2022 a montré la dépendance de nombreux pays importateurs aux céréales de la mer Noire.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Où est la ressource ?",
          instruction: "Associe chaque ressource au pays qui domine sa production ou sa transformation.",
          categories: ["Chine", "RD Congo", "États-Unis"],
          items: [
            { text: "Raffinage des terres rares", cat: 0, why: "Position dominante." },
            { text: "Extraction du cobalt", cat: 1, why: "Plus de la moitié de la production mondiale." },
            { text: "Premier producteur de pétrole", cat: 2, why: "Grâce au pétrole de schiste." },
            { text: "Installation de panneaux solaires", cat: 0, why: "Premier marché et premier fabricant." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Part des énergies fossiles", back: "Environ 80 % de l’énergie primaire mondiale" },
            { front: "Premier producteur de pétrole", back: "Les États-Unis" },
            { front: "Métaux critiques", back: "Lithium, cobalt, nickel, cuivre, terres rares" },
            { front: "Raffinage des métaux critiques", back: "Largement dominé par la Chine" },
            { front: "Eau douce et agriculture", back: "L’agriculture utilise environ 70 % de l’eau douce prélevée" },
            { front: "Cause principale de la faim", back: "Pauvreté, conflits, crises climatiques plus que la production totale" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle part de l’énergie mondiale provient encore des fossiles ?", options: ["Environ 20 %", "Environ 50 %", "Environ 80 %"], answer: 2, explain: "Malgré la croissance des renouvelables." },
            { q: "Quel pays domine le raffinage des terres rares ?", options: ["La Chine", "La France", "Le Brésil"], answer: 0, explain: "Enjeu stratégique majeur." },
            { q: "Quel secteur utilise le plus d’eau douce ?", options: ["Les ménages", "L’industrie", "L’agriculture"], answer: 2, explain: "Environ 70 % des prélèvements." },
            { q: "L’électricité en France provient principalement…", options: ["du charbon", "du nucléaire", "du pétrole"], answer: 1, explain: "Complété par l’hydraulique et les renouvelables." },
          ],
        },
        {
          type: "case",
          title: "Les plaques NFC",
          story:
            "Les plaques NFC que Noa revend contiennent une petite puce électronique. Un fournisseur l’informe d’une hausse de prix liée à des tensions sur certains métaux et composants.",
          question: "Que peut-il en comprendre ?",
          options: [
            "C’est forcément une excuse du fournisseur",
            "L’électronique dépend de métaux et de composants dont la production est concentrée dans quelques pays ; les tensions géopolitiques ou les restrictions d’exportation peuvent faire varier les prix et les délais. Diversifier et anticiper les stocks réduit le risque",
            "Les puces n’utilisent aucun métal",
          ],
          answer: 1,
          explain:
            "La géographie des ressources a des effets très concrets sur les prix des produits du quotidien.",
        },
        {
          type: "fiche",
          title: "Ressources",
          points: [
            "Énergie : fossiles ≈ <b>80 %</b> ; <b>États-Unis</b> 1er producteur de pétrole ; renouvelables en forte hausse (Chine) ; France : <b>nucléaire</b>.",
            "Métaux critiques : cobalt (<b>RD Congo</b>), lithium, terres rares ; raffinage dominé par la <b>Chine</b>.",
            "Eau : 97 % salée ; agriculture ≈ <b>70 %</b> des prélèvements ; fleuves partagés.",
            "Alimentation : la faim vient surtout de la <b>pauvreté</b> et des <b>conflits</b>.",
          ],
          retenir: "Les ressources sont inégalement réparties : qui les contrôle détient un levier de puissance.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Mondialisation et routes du commerce",
      minutes: 17,
      objectives: ["Comprendre les flux de la mondialisation", "Connaître les routes maritimes et les passages stratégiques"],
      steps: [
        {
          type: "lesson",
          title: "Le monde en conteneurs",
          slides: [
            {
              title: "La mondialisation",
              body:
                "<ul><li>La <b>mondialisation</b> est la mise en relation de plus en plus étroite des territoires par des <b>flux</b> : marchandises, capitaux, personnes, informations.</li><li>Elle s’est accélérée avec le <b>conteneur</b> (années 1950-1960), qui a fait chuter le coût du transport, et avec Internet.</li><li>Les entreprises découpent leur production en <b>chaînes de valeur mondiales</b> : conception en Europe ou aux États-Unis, fabrication en Asie, vente partout.</li><li>La <b>Chine</b> est devenue « l’atelier du monde » et le premier exportateur mondial de marchandises.</li></ul>",
            },
            {
              title: "La mer, autoroute du commerce",
              body:
                "<ul><li>Environ <b>80 %</b> du commerce mondial en volume voyage par la <b>mer</b>.</li><li>Les plus grands porte-conteneurs transportent plus de 20 000 conteneurs « équivalent vingt pieds » (EVP).</li><li>Les plus grands ports à conteneurs sont surtout en <b>Asie</b> : Shanghai (premier mondial), Singapour, Ningbo-Zhoushan, Shenzhen…</li><li>En Europe : Rotterdam, Anvers-Bruges, Hambourg ; en France : Le Havre (le plus proche de Caen) et Marseille-Fos.</li></ul>",
            },
            {
              title: "Les passages stratégiques",
              body:
                "<table class='t'><tr><th>Passage</th><th>Relie</th><th>Enjeu</th></tr><tr><td><b>Détroit de Malacca</b></td><td>Océan Indien et Pacifique</td><td>Route Asie-Europe, très fréquentée</td></tr><tr><td><b>Canal de Suez</b></td><td>Méditerranée et mer Rouge</td><td>Raccourci Asie-Europe</td></tr><tr><td><b>Bab-el-Mandeb</b></td><td>Mer Rouge et océan Indien</td><td>Attaques contre des navires depuis fin 2023</td></tr><tr><td><b>Détroit d’Ormuz</b></td><td>Golfe persique et océan Indien</td><td>Une grande partie du pétrole exporté par voie maritime</td></tr><tr><td><b>Canal de Panama</b></td><td>Atlantique et Pacifique</td><td>Sensible aux sécheresses (niveau d’eau)</td></tr></table><p>Quand Suez ou la mer Rouge sont perturbés, les navires contournent l’Afrique par le cap de Bonne-Espérance : <b>10 à 14 jours</b> de plus et des coûts en hausse.</p>",
            },
            {
              title: "Les limites de la mondialisation",
              body:
                "<ul><li>La crise du <b>Covid</b> (2020-2021) a montré la fragilité des chaînes longues : pénuries, explosion du prix du fret.</li><li>Tensions commerciales : <b>droits de douane</b> entre grandes puissances, sanctions, contrôles des exportations.</li><li>Tendances : <b>relocalisation</b> de certaines productions, rapprochement de fournisseurs (« nearshoring », vers le Maroc, la Turquie, l’Europe de l’Est), diversification (« Chine + 1 » : Vietnam, Inde…).</li><li>Le transport représente aussi une part des émissions de gaz à effet de serre, ce qui pousse à repenser les distances.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel passage ?",
          instruction: "Associe chaque situation au passage stratégique concerné.",
          categories: ["Canal de Suez / mer Rouge", "Détroit d’Ormuz", "Détroit de Malacca"],
          items: [
            { text: "Un conteneur de Shanghai vers Le Havre passe par la mer Rouge", cat: 0, why: "Raccourci Asie-Europe." },
            { text: "Un pétrolier quitte le Golfe persique", cat: 1, why: "Sortie obligatoire du Golfe." },
            { text: "Un navire passe de l’océan Indien vers la mer de Chine, près de Singapour", cat: 2, why: "Détroit de Malacca." },
            { text: "Les navires contournent l’Afrique après des attaques au Yémen", cat: 0, why: "Bab-el-Mandeb, accès sud de la mer Rouge." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Commerce maritime", back: "Environ 80 % du commerce mondial en volume" },
            { front: "Premier port à conteneurs", back: "Shanghai" },
            { front: "Grand port français le plus proche de Caen", back: "Le Havre" },
            { front: "Contournement par le cap de Bonne-Espérance", back: "10 à 14 jours de plus que via Suez" },
            { front: "Chaîne de valeur mondiale", back: "Conception, fabrication et vente réparties entre plusieurs pays" },
            { front: "« Chine + 1 »", back: "Diversifier ses fournisseurs hors de Chine (Vietnam, Inde…)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Par quel mode de transport passe la majorité du commerce mondial en volume ?", options: ["L’avion", "La mer", "Le train"], answer: 1, explain: "Environ 80 %." },
            { q: "Le canal de Suez relie…", options: ["l’Atlantique et le Pacifique", "la Méditerranée et la mer Rouge", "la mer du Nord et la Baltique"], answer: 1, explain: "Panama relie Atlantique et Pacifique." },
            { q: "Pourquoi la mer Rouge est-elle devenue risquée depuis fin 2023 ?", options: ["Attaques contre des navires près du détroit de Bab-el-Mandeb", "Elle s’est asséchée", "Elle a gelé"], answer: 0, explain: "Beaucoup d’armateurs ont contourné l’Afrique." },
            { q: "Qu’est-ce que le « nearshoring » ?", options: ["Produire plus près de ses marchés", "Produire en mer", "Arrêter d’exporter"], answer: 0, explain: "Ex. Maroc, Turquie, Europe de l’Est pour l’Europe." },
          ],
        },
        {
          type: "case",
          title: "Le conteneur de Shenzhen",
          story:
            "Noa importe un conteneur de rangements plastiques depuis Shenzhen. Le transitaire l’informe que le navire ne passera pas par la mer Rouge mais par le cap de Bonne-Espérance, et que le prix du fret a augmenté.",
          question: "Comment adapter sa stratégie ?",
          options: [
            "Annuler toutes les importations",
            "Prévoir 2 semaines de délai supplémentaire dans son planning de stock, intégrer la hausse du fret dans son prix de revient, commander plus tôt pour les périodes fortes, et étudier des fournisseurs plus proches pour certains produits",
            "Demander au transitaire de passer par le canal de Panama",
          ],
          answer: 1,
          explain:
            "Les routes maritimes ont un effet direct sur les délais et les coûts. Un importateur intègre ces risques dans sa trésorerie et son calendrier.",
        },
        {
          type: "fiche",
          title: "Mondialisation",
          points: [
            "Flux de <b>marchandises, capitaux, personnes, informations</b> ; <b>conteneur</b> et Internet ; <b>chaînes de valeur mondiales</b>.",
            "≈ <b>80 %</b> du commerce par la mer ; ports géants en Asie (<b>Shanghai</b>) ; Le Havre pour la Normandie.",
            "Passages : <b>Malacca, Suez, Bab-el-Mandeb, Ormuz, Panama</b> ; contournement = +10-14 jours.",
            "Limites : Covid, droits de douane, sanctions ; <b>relocalisation</b>, <b>nearshoring</b>, « Chine + 1 ».",
          ],
          retenir: "Le prix et le délai d’un produit importé dépendent de quelques détroits à l’autre bout du monde.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "États, frontières et puissances",
      minutes: 16,
      objectives: ["Comprendre l’organisation politique du monde", "Identifier les grandes organisations et les formes de puissance"],
      steps: [
        {
          type: "lesson",
          title: "La géopolitique",
          slides: [
            {
              title: "États et frontières",
              body:
                "<ul><li>L’ONU compte <b>193 États membres</b>. Quelques territoires ont un statut contesté ou une reconnaissance partielle.</li><li>Une <b>frontière</b> sépare deux souverainetés : elle peut suivre un relief, un fleuve, une ligne droite tracée lors de la colonisation, ou résulter d’une guerre.</li><li>Les frontières sont aussi des <b>interfaces</b> : échanges, travailleurs frontaliers, contrebande, contrôles.</li><li>En mer, chaque État côtier dispose d’une <b>zone économique exclusive</b> (ZEE) jusqu’à 200 milles marins (environ 370 km), où il exploite les ressources.</li></ul>",
            },
            {
              title: "Les grandes organisations",
              body:
                "<table class='t'><tr><th>Organisation</th><th>Rôle</th></tr><tr><td><b>ONU</b></td><td>Paix et sécurité, développement ; Conseil de sécurité avec 5 membres permanents (États-Unis, Chine, Russie, France, Royaume-Uni)</td></tr><tr><td><b>Union européenne</b></td><td>27 pays, marché unique, politiques communes</td></tr><tr><td><b>OTAN</b></td><td>Alliance militaire ; 32 membres depuis l’adhésion de la Suède (2024)</td></tr><tr><td><b>OMC</b></td><td>Règles du commerce international</td></tr><tr><td><b>G7 / G20</b></td><td>Forums des grandes économies</td></tr><tr><td><b>BRICS</b></td><td>Brésil, Russie, Inde, Chine, Afrique du Sud, élargi depuis 2024 à d’autres pays</td></tr></table>",
            },
            {
              title: "Les formes de puissance",
              body:
                "<ul><li><b>Économique</b> : taille du PIB, entreprises, monnaie (le dollar reste la principale monnaie des échanges et des réserves).</li><li><b>Militaire</b> : armées, dissuasion nucléaire, bases à l’étranger.</li><li><b>Diplomatique</b> : alliances, siège au Conseil de sécurité.</li><li><b>Technologique</b> : semi-conducteurs, intelligence artificielle, espace.</li><li><b>Soft power</b> : influence par la culture, les universités, le sport, la langue (cinéma américain, culture coréenne, gastronomie française).</li></ul>",
            },
            {
              title: "Un monde multipolaire",
              body:
                "<ul><li>Les <b>États-Unis</b> restent la première puissance (économie, armée, technologie, monnaie).</li><li>La <b>Chine</b> est la deuxième économie et la première puissance industrielle.</li><li>D’autres pôles s’affirment : Union européenne (puissance économique et normative), Inde, Russie, puissances régionales (Turquie, Arabie saoudite, Brésil…).</li><li>Les rivalités portent sur le commerce, les technologies, les ressources, les routes maritimes et les zones d’influence.</li><li>Pour comprendre une crise, on se demande : quels acteurs, quels territoires, quelles ressources, quelles représentations (comment chacun voit la situation) ?</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "États membres de l’ONU", back: "193" },
            { front: "Membres permanents du Conseil de sécurité", back: "États-Unis, Chine, Russie, France, Royaume-Uni" },
            { front: "OTAN", back: "Alliance militaire, 32 membres" },
            { front: "ZEE", back: "Zone économique exclusive jusqu’à 200 milles marins (≈ 370 km)" },
            { front: "Soft power", back: "Influence par la culture, les universités, le sport, la langue" },
            { front: "Analyser une crise", back: "Acteurs, territoires, ressources, représentations" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Combien de membres permanents compte le Conseil de sécurité de l’ONU ?", options: ["5", "15", "27"], answer: 0, explain: "Avec un droit de veto." },
            { q: "Jusqu’où s’étend une zone économique exclusive ?", options: ["12 milles marins", "200 milles marins", "Tout l’océan"], answer: 1, explain: "Environ 370 km." },
            { q: "Le succès mondial de la musique et des séries coréennes illustre…", options: ["le soft power", "la puissance militaire", "la ZEE"], answer: 0, explain: "Influence culturelle." },
            { q: "Combien de pays dans l’Union européenne ?", options: ["25", "27", "32"], answer: 1, explain: "Depuis la sortie du Royaume-Uni en 2020." },
          ],
        },
        {
          type: "case",
          title: "Les droits de douane",
          story:
            "Un fabricant français importe des pièces de Chine pour assembler des produits qu’il vend aux États-Unis. Une hausse des droits de douane américains sur certains produits change brutalement sa rentabilité.",
          question: "Quelle lecture géopolitique faire ?",
          options: [
            "Cela n’a aucun rapport avec la géographie",
            "Les rivalités entre grandes puissances se traduisent par des mesures commerciales qui touchent toute la chaîne de valeur ; suivre l’actualité commerciale, diversifier fournisseurs et marchés, et vérifier l’origine des produits et les règles douanières permet d’anticiper",
            "Il suffit de changer l’étiquette du produit",
          ],
          answer: 1,
          explain:
            "La géopolitique influence directement le commerce. (Modifier l’origine déclarée d’un produit est une fraude douanière.)",
        },
        {
          type: "fiche",
          title: "Géopolitique",
          points: [
            "<b>193</b> États à l’ONU ; frontières = limites et interfaces ; <b>ZEE</b> de 200 milles.",
            "Organisations : <b>ONU</b> (5 permanents), <b>UE</b> (27), <b>OTAN</b> (32), OMC, G7/G20, BRICS élargis.",
            "Puissance : économique, militaire, diplomatique, technologique, <b>soft power</b>.",
            "Monde <b>multipolaire</b> ; analyser : acteurs, territoires, ressources, représentations.",
          ],
          retenir: "Derrière chaque tension internationale, il y a des territoires, des ressources et des représentations.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "La France et l’Europe",
      minutes: 16,
      objectives: ["Connaître les grands traits de la géographie française", "Situer la France dans l’Union européenne"],
      steps: [
        {
          type: "lesson",
          title: "Notre territoire",
          slides: [
            {
              title: "La France en chiffres",
              body:
                "<ul><li>Environ <b>69,1 millions</b> d’habitants au 1er janvier 2026 (Insee, provisoire), dont environ 66,8 millions en métropole.</li><li>Métropole : environ <b>550 000 km²</b>, le plus grand pays de l’Union européenne.</li><li><b>18 régions</b> (13 en métropole, 5 en outre-mer) et <b>101 départements</b>.</li><li>Grâce à ses territoires d’<b>outre-mer</b>, présents dans tous les océans, la France possède la <b>deuxième zone économique exclusive</b> du monde (environ 10 millions de km²), derrière les États-Unis.</li></ul>",
            },
            {
              title: "Les dynamiques du territoire",
              body:
                "<ul><li><b>Paris</b> et l’Île-de-France concentrent environ 18 % de la population et une part bien plus grande de la richesse produite.</li><li>Les grandes <b>métropoles</b> (Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille…) attirent emplois et habitants.</li><li>Les <b>littoraux</b> (Atlantique, Méditerranée) et le Sud gagnent des habitants ; certaines zones rurales et anciennes régions industrielles en perdent.</li><li>La <b>Normandie</b> : façade maritime sur la Manche, axe Seine (Le Havre, Rouen, Paris), agriculture et agroalimentaire, industrie, tourisme de mémoire (plages du Débarquement).</li></ul>",
            },
            {
              title: "L’Union européenne",
              body:
                "<ul><li><b>27 pays</b>, environ 450 millions d’habitants : l’un des plus grands marchés du monde.</li><li><b>Marché unique</b> : libre circulation des marchandises, des services, des capitaux et des personnes.</li><li><b>Zone euro</b> : <b>21 pays</b> depuis l’entrée de la Bulgarie le 1er janvier 2026.</li><li><b>Espace Schengen</b> : pas de contrôle systématique aux frontières intérieures (il inclut aussi des pays hors UE comme la Suisse et la Norvège).</li><li>Pour une entreprise : vendre dans un autre pays de l’UE se fait sans droits de douane, mais avec des règles de TVA et de conformité à connaître.</li></ul>",
            },
            {
              title: "Les voisins et partenaires",
              body:
                "<ul><li>Premiers partenaires commerciaux de la France : <b>Allemagne</b>, Belgique, Italie, Espagne, États-Unis, Chine.</li><li>Le <b>Royaume-Uni</b>, voisin par la Manche, a quitté l’UE en 2020 : les échanges sont soumis à des formalités douanières.</li><li>L’<b>Espagne</b> et le <b>Portugal</b> sont des marchés proches et des bases logistiques vers le sud ; le <b>Benelux</b> concentre de grands ports (Rotterdam, Anvers).</li><li>La France est l’une des premières destinations touristiques au monde.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Dans l’UE, la zone euro, Schengen ?",
          instruction: "Classe chaque pays selon son appartenance.",
          categories: ["UE et zone euro", "UE sans l’euro", "Hors UE"],
          items: [
            { text: "Espagne", cat: 0, why: "Membre de l’UE et de la zone euro." },
            { text: "Pologne", cat: 1, why: "Membre de l’UE, monnaie : le złoty." },
            { text: "Suisse", cat: 2, why: "Hors UE (mais dans Schengen)." },
            { text: "Bulgarie", cat: 0, why: "Dans la zone euro depuis le 1er janvier 2026." },
            { text: "Royaume-Uni", cat: 2, why: "Sorti de l’UE en 2020." },
            { text: "Suède", cat: 1, why: "Membre de l’UE, couronne suédoise." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Population de la France (1er janvier 2026)", back: "Environ 69,1 millions (Insee, provisoire)" },
            { front: "Régions et départements", back: "18 régions (13 + 5 outre-mer), 101 départements" },
            { front: "ZEE française", back: "2e mondiale (≈ 10 millions de km²) grâce aux outre-mer" },
            { front: "Union européenne", back: "27 pays, ≈ 450 millions d’habitants, marché unique" },
            { front: "Zone euro (2026)", back: "21 pays depuis l’entrée de la Bulgarie" },
            { front: "Premier partenaire commercial de la France", back: "L’Allemagne" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi la France a-t-elle la 2e ZEE du monde ?", options: ["Grâce à ses territoires d’outre-mer dans tous les océans", "Grâce à la Méditerranée", "Grâce à la Manche"], answer: 0, explain: "Polynésie, Nouvelle-Calédonie, Réunion…" },
            { q: "Combien de pays utilisent l’euro en 2026 ?", options: ["19", "20", "21"], answer: 2, explain: "Croatie en 2023, Bulgarie en 2026." },
            { q: "Vendre en Belgique depuis la France implique…", options: ["des droits de douane", "pas de droits de douane, mais des règles de TVA à connaître", "un visa"], answer: 1, explain: "Marché unique." },
            { q: "Quel grand port est situé sur l’axe Seine, proche de la Normandie ?", options: ["Le Havre", "Marseille", "Bordeaux"], answer: 0, explain: "Premier port à conteneurs français." },
          ],
        },
        {
          type: "case",
          title: "Vendre en Belgique et au Luxembourg",
          story:
            "Noa veut vendre ses accessoires pour animaux en Belgique et au Luxembourg, puis au Royaume-Uni. Il pense que « c’est pareil partout, c’est l’Europe ».",
          question: "Quelle différence géographique et juridique doit-il intégrer ?",
          options: [
            "Aucune, tout est identique",
            "La Belgique et le Luxembourg sont dans l’UE et la zone euro : pas de douane ni de change, mais des règles de TVA sur la vente à distance ; le Royaume-Uni est hors UE depuis 2020 : formalités douanières, droits éventuels et livres sterling",
            "Il faut un visa pour vendre en Belgique",
          ],
          answer: 1,
          explain:
            "Connaître les appartenances (UE, zone euro, Schengen) évite des surprises de coûts et de délais à l’export.",
        },
        {
          type: "fiche",
          title: "France et Europe",
          points: [
            "France : ≈ <b>69,1 M</b> d’habitants (2026), ≈ 550 000 km² en métropole, <b>18 régions</b>, <b>101 départements</b>, <b>2e ZEE</b> mondiale.",
            "Dynamiques : Paris, métropoles, littoraux et Sud ; Normandie : Manche, axe Seine, agriculture, industrie, tourisme.",
            "UE : <b>27</b> pays, marché unique ; <b>zone euro 21</b> (Bulgarie 2026) ; Schengen.",
            "Partenaires : <b>Allemagne</b> en tête ; Royaume-Uni hors UE depuis 2020.",
          ],
          retenir: "Savoir si un pays est dans l’UE, la zone euro ou Schengen change tout pour voyager, vendre et livrer.",
        },
      ],
    },
  ],
});
