/* ============================================================
   COURS : Courir son premier 10 km
   Complexe sportif · 8 séances de 15 à 20 minutes
   De zéro (ou presque) à la ligne d'arrivée d'un 10 km en
   12 semaines : préparation, technique, allures, plan en deux
   phases, renforcement et blessures du coureur, alimentation
   et hydratation, jour de course.
   Pour un adulte en bonne santé ; ne remplace pas un avis
   médical.
   ============================================================ */
AGORA.registerCourse({
  id: "sport-10km",
  faculty: "sport",
  title: "Courir son premier 10 km",
  subtitle: "Un plan de 12 semaines pour passer de la marche à la ligne d’arrivée",
  color: "#1f8a8a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour préparer et réussir ton premier 10 km : t’équiper, courir avec une technique économique, comprendre les allures, suivre un plan de 12 semaines (d’abord courir 30 minutes sans s’arrêter, puis aller jusqu’à 10 km), renforcer les zones fragiles du coureur, bien manger et boire, et gérer le jour de la course. Si tu as un problème de santé ou si tu n’as pas fait de sport depuis longtemps, fais d’abord un bilan médical.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Se préparer à courir",
      minutes: 15,
      objectives: ["S’équiper sans se ruiner", "Fixer un objectif réaliste et choisir sa course"],
      steps: [
        {
          type: "lesson",
          title: "Avant le premier footing",
          slides: [
            {
              title: "Le point de départ",
              body:
                "<ul><li><b>Tu ne peux pas encore courir 10 minutes</b> d’affilée : compte environ <b>12 semaines</b> pour un 10 km (6 semaines pour courir 30 minutes, puis 6 semaines pour aller jusqu’à 10 km).</li><li><b>Tu cours déjà 30 minutes</b> sans t’arrêter : 6 à 8 semaines suffisent.</li><li>Bilan médical conseillé avant de commencer si tu as des facteurs de risque (cœur, tension, diabète, tabac, longue inactivité après 40 ans). Pour une course officielle, l’organisateur peut demander un certificat médical ou un questionnaire de santé : vérifie le règlement.</li></ul>",
            },
            {
              title: "Les chaussures",
              body:
                "<ul><li>Le critère le plus fiable pour choisir est le <b>confort</b> ressenti en magasin (essayer plusieurs modèles, courir quelques pas).</li><li>Prendre une demi-pointure à une pointure de plus que la chaussure de ville : le pied gonfle en courant.</li><li>Pas besoin du modèle le plus cher ni d’une technologie précise : les études ne montrent pas qu’un type de chaussure prévient clairement les blessures.</li><li>Changer de modèle radicalement (par exemple vers des chaussures très minimalistes) demande une transition <b>progressive</b>.</li><li>Une paire dure en général plusieurs centaines de kilomètres.</li></ul>",
            },
            {
              title: "Le reste de l’équipement",
              body:
                "<ul><li>Vêtements <b>techniques</b> (qui évacuent la transpiration) plutôt que coton ; s’habiller comme s’il faisait 10 °C de plus que la température réelle.</li><li>Chaussettes de sport sans couture épaisse, pour éviter les ampoules.</li><li>De nuit : vêtements <b>réfléchissants</b> et lampe frontale.</li><li>Une montre ou une application pour suivre durée et distance : utile, pas indispensable.</li></ul>",
            },
            {
              title: "Choisir sa course",
              body:
                "<ul><li>Choisir un 10 km situé <b>12 à 16 semaines</b> plus tard : une date précise motive.</li><li>Un parcours plat est plus facile pour un premier 10 km.</li><li>S’inscrire tôt : cela engage, et certaines courses affichent complet.</li><li>Objectif du premier 10 km : <b>finir en bon état</b>, en courant tout le long. Le chrono viendra au deuxième.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "De zéro au 10 km", back: "Environ 12 semaines" },
            { front: "Si tu cours déjà 30 min", back: "6 à 8 semaines pour un 10 km" },
            { front: "Choisir ses chaussures", back: "Le confort d’abord ; une demi à une pointure de plus" },
            { front: "S’habiller pour courir", back: "Comme s’il faisait 10 °C de plus ; tissus techniques" },
            { front: "Course de nuit", back: "Réfléchissants et lampe frontale" },
            { front: "Objectif du premier 10 km", back: "Finir en bon état, en courant tout le long" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est le meilleur critère pour choisir ses chaussures de course ?", options: ["Le prix le plus élevé", "Le confort ressenti en les essayant", "La couleur"], answer: 1, explain: "C’est le critère le mieux soutenu par les études." },
            { q: "Il fait 8 °C. Comment t’habilles-tu pour courir ?", options: ["Comme pour 8 °C : doudoune", "Comme s’il faisait environ 18 °C", "En short et débardeur quoi qu’il arrive"], answer: 1, explain: "On se réchauffe vite en courant." },
            { q: "Tu ne peux pas encore courir 10 minutes. Combien de temps pour préparer un 10 km ?", options: ["2 semaines", "Environ 12 semaines", "2 ans"], answer: 1, explain: "6 semaines pour 30 minutes, puis 6 semaines pour 10 km." },
            { q: "Pour un premier 10 km, l’objectif conseillé est…", options: ["battre un record", "finir en bon état en courant tout le long", "partir le plus vite possible"], answer: 1, explain: "Le chrono viendra ensuite." },
          ],
        },
        {
          type: "case",
          title: "Les chaussures à 200 €",
          story:
            "Hugo achète les chaussures les plus chères du magasin, très différentes de ses baskets habituelles, après avoir lu qu’elles « préviennent toutes les blessures ». Elles lui serrent les orteils, mais « elles vont se faire ».",
          question: "Qu’aurait-il dû faire ?",
          options: [
            "Rien, le prix garantit la qualité",
            "Essayer plusieurs modèles et choisir celui qui est le plus confortable, avec de la place pour les orteils ; aucune chaussure n’empêche à elle seule les blessures, c’est la progression de l’entraînement qui compte le plus",
            "Courir pieds nus dès le premier jour",
          ],
          answer: 1,
          explain:
            "Une chaussure qui serre au magasin serrera encore plus après 5 km. Le confort et une progression raisonnable comptent plus que la technologie.",
        },
        {
          type: "fiche",
          title: "Se préparer",
          points: [
            "Durée : <b>12 semaines</b> en partant de zéro, <b>6-8</b> si tu cours déjà 30 min ; bilan médical si facteurs de risque.",
            "Chaussures : <b>confort</b>, une demi à une pointure de plus, transition progressive si changement radical.",
            "Tenue technique (+10 °C), chaussettes de sport, <b>réfléchissants</b> de nuit.",
            "Course choisie <b>12-16 semaines</b> plus tard, plutôt plate ; objectif : <b>finir en bon état</b>.",
          ],
          retenir: "Une date de course dans 3 mois et des chaussures confortables : c’est tout ce qu’il faut pour commencer.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "La technique de course",
      minutes: 15,
      objectives: ["Courir de façon économique et détendue", "Gérer sa respiration et ses parcours"],
      steps: [
        {
          type: "lesson",
          title: "Courir mieux, pas plus fort",
          slides: [
            {
              title: "Les principes simples",
              body:
                "<ul><li><b>Posture</b> : grand, regard vers l’horizon, légère inclinaison vers l’avant depuis les chevilles.</li><li><b>Épaules relâchées</b>, bras pliés à environ 90°, qui balancent d’avant en arrière (pas en travers du corps).</li><li><b>Pied qui atterrit sous le corps</b>, pas loin devant (pas de « freinage » à chaque foulée).</li><li><b>Foulée légère</b> : on doit s’entendre courir le moins possible.</li></ul><p>Pas besoin de forcer une attaque sur l’avant du pied : la plupart des coureurs atterrissent sur le talon ou le milieu du pied, et c’est normal.</p>",
            },
            {
              title: "La cadence",
              body:
                "<ul><li>La <b>cadence</b> est le nombre de pas par minute.</li><li>Augmenter légèrement sa cadence (<b>+5 à 10 %</b>) avec des pas plus courts réduit l’impact sur les genoux et les hanches et l’habitude d’allonger la foulée trop loin devant.</li><li>Inutile de viser un chiffre magique (le célèbre « 180 pas par minute ») : il dépend de la taille et de la vitesse.</li><li>Astuce : courir sur une musique au rythme légèrement plus rapide, ou compter ses pas sur 30 secondes.</li></ul>",
            },
            {
              title: "La respiration",
              body:
                "<ul><li>Respirer par la <b>bouche et le nez</b> : à l’effort, le nez seul ne suffit pas.</li><li>Respirer <b>avec le ventre</b> plutôt qu’en gonflant seulement le haut de la poitrine.</li><li>Un <b>point de côté</b> ? Ralentir, expirer longuement, appuyer sur la zone, et éviter de manger copieusement dans les 2 heures avant de courir.</li><li>Essoufflé au point de ne plus pouvoir parler en endurance ? Tu cours trop vite : ralentis ou marche.</li></ul>",
            },
            {
              title: "Où courir",
              body:
                "<ul><li>Alterner les <b>surfaces</b> (chemins, parcs, piste, route) varie les contraintes sur le corps.</li><li>Les côtes renforcent, mais les descentes rapides sollicitent beaucoup les cuisses et les genoux : les aborder doucement au début.</li><li>Sécurité : courir face aux voitures sur la route, garder un écouteur libre ou le volume bas, prévenir quelqu’un de son parcours en zone isolée.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Posture de course", back: "Grand, regard à l’horizon, légère inclinaison depuis les chevilles" },
            { front: "Atterrissage du pied", back: "Sous le corps, pas loin devant ; talon ou milieu du pied, c’est normal" },
            { front: "Cadence", back: "Pas par minute ; +5 à 10 % avec des pas plus courts réduit l’impact" },
            { front: "Le mythe des 180", back: "Pas de cadence magique : elle dépend de la taille et de la vitesse" },
            { front: "Point de côté", back: "Ralentir, expirer longuement, appuyer ; repas léger avant" },
            { front: "Sur la route", back: "Courir face aux voitures" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Faut-il absolument atterrir sur l’avant du pied ?", options: ["Oui, toujours", "Non, l’important est que le pied atterrisse sous le corps", "Seulement en descente"], answer: 1, explain: "La plupart des coureurs atterrissent talon ou milieu du pied." },
            { q: "Augmenter légèrement sa cadence permet…", options: ["de réduire l’impact sur les articulations", "de se fatiguer plus vite", "rien du tout"], answer: 0, explain: "Pas plus courts, moins de freinage." },
            { q: "Les bras doivent balancer…", options: ["en travers du corps", "d’avant en arrière, épaules relâchées", "tendus le long du corps"], answer: 1, explain: "Ils accompagnent le mouvement sans le perturber." },
            { q: "Sur une route sans trottoir, tu cours…", options: ["dans le même sens que les voitures", "face aux voitures", "au milieu"], answer: 1, explain: "Pour voir arriver les véhicules." },
          ],
        },
        {
          type: "case",
          title: "La grande foulée",
          story:
            "Sofia veut « aller plus loin à chaque pas » et lance ses jambes loin devant elle. Elle atterrit talon en avant, jambe tendue, et sent des chocs dans les genoux.",
          question: "Que corriger ?",
          options: [
            "Allonger encore plus la foulée",
            "Raccourcir légèrement les pas et augmenter un peu la cadence, pour que le pied atterrisse sous le corps, genou légèrement fléchi ; courir plus lentement au début",
            "Courir uniquement sur la pointe des pieds",
          ],
          answer: 1,
          explain:
            "Une foulée trop longue freine à chaque pas et transmet plus de choc. Des pas un peu plus courts et plus fréquents sont plus économiques.",
        },
        {
          type: "fiche",
          title: "Technique",
          points: [
            "Posture <b>grande</b>, regard loin, <b>épaules relâchées</b>, bras d’avant en arrière.",
            "Pied qui atterrit <b>sous le corps</b> ; pas de technique d’attaque imposée.",
            "<b>Cadence</b> +5-10 % si foulée trop longue ; pas de chiffre magique.",
            "Respirer bouche + nez, avec le ventre ; varier les surfaces ; face aux voitures.",
          ],
          retenir: "Des pas un peu plus courts, des épaules détendues et une allure où tu peux parler : la base d’une course sans douleur.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les allures",
      minutes: 16,
      objectives: ["Distinguer les différentes allures d’entraînement", "Estimer son allure et son temps sur 10 km"],
      steps: [
        {
          type: "lesson",
          title: "Courir à la bonne vitesse",
          slides: [
            {
              title: "Les quatre allures du plan",
              body:
                "<table class='t'><tr><th>Allure</th><th>Ressenti</th><th>Rôle</th></tr><tr><td><b>Footing facile</b></td><td>Conversation possible (3-4/10)</td><td>La base : 70 à 80 % du temps</td></tr><tr><td><b>Sortie longue</b></td><td>Facile aussi, mais plus longue</td><td>Habituer le corps à la durée</td></tr><tr><td><b>Allure 10 km</b></td><td>Soutenue, phrases courtes (6-7/10)</td><td>Apprendre le rythme de la course</td></tr><tr><td><b>Fractionné</b></td><td>Dur, quelques mots (8/10)</td><td>Améliorer la vitesse et le cœur</td></tr></table>",
            },
            {
              title: "Lire son allure",
              body:
                "<ul><li>L’<b>allure</b> s’exprime en minutes par kilomètre : 6:00 min/km = 10 km/h.</li><li>Repères : 7:30 min/km = 8 km/h ; 6:00 = 10 km/h ; 5:00 = 12 km/h.</li><li>Temps sur 10 km = allure × 10 : à 6:00 min/km, 60 minutes.</li><li>Le vent, les côtes et la chaleur ralentissent : en footing, fie-toi d’abord au <b>ressenti</b> plutôt qu’à la montre.</li></ul>",
            },
            {
              title: "Estimer son temps sur 10 km",
              body:
                "<ul><li>Après quelques semaines, un test : courir <b>2 km</b> le plus régulièrement et le plus vite possible (après échauffement).</li><li>Ton allure sur 10 km sera environ <b>20 à 30 secondes par km plus lente</b> que sur ce test.</li><li>Exemple : 2 km en 11 min (5:30/km) → allure 10 km vers 5:55-6:00/km, soit environ <b>1 heure</b>.</li><li>Pour un premier 10 km, beaucoup de débutants terminent entre 55 minutes et 1 h 15 : il n’y a pas de « bon » temps.</li></ul>",
            },
            {
              title: "Le fractionné du débutant",
              body:
                "<ul><li>Il commence seulement quand tu cours <b>30 minutes</b> sans t’arrêter.</li><li><b>1 séance par semaine</b> maximum au début, toujours après 10-15 minutes de footing facile.</li><li>Exemples : 6 × 1 minute vite / 1 minute 30 lente ; 5 × 3 minutes à allure 10 km / 2 minutes lente.</li><li>On finit par 10 minutes de footing facile.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Footing facile", back: "Conversation possible ; 70 à 80 % du temps de course" },
            { front: "6:00 min/km", back: "10 km/h ; 10 km en 1 heure" },
            { front: "5:00 min/km", back: "12 km/h ; 10 km en 50 minutes" },
            { front: "Estimer l’allure 10 km", back: "Allure du test de 2 km + 20 à 30 s par km" },
            { front: "Début du fractionné", back: "Quand on court 30 minutes sans s’arrêter ; 1 fois par semaine" },
            { front: "Footing : se fier…", back: "au ressenti plutôt qu’à la montre" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "À 7:30 min/km, combien de temps pour 10 km ?", options: ["1 h 15", "1 h", "50 min"], answer: 0, explain: "7,5 × 10 = 75 minutes." },
            { q: "Quelle part du temps de course doit être facile ?", options: ["10 %", "Environ 70 à 80 %", "0 %"], answer: 1, explain: "C’est la base aérobie." },
            { q: "Test de 2 km en 12 minutes (6:00/km). Allure 10 km estimée ?", options: ["5:00/km", "Environ 6:20-6:30/km", "8:00/km"], answer: 1, explain: "On ajoute 20 à 30 s par km." },
            { q: "Quand commencer le fractionné ?", options: ["Dès la première semaine", "Quand on court 30 minutes sans s’arrêter", "Jamais"], answer: 1, explain: "D’abord construire la base." },
          ],
        },
        {
          type: "case",
          title: "La montre qui commande",
          story:
            "Karim a décidé de courir tous ses footings à 5:30 min/km « parce que c’est son objectif ». Dans les côtes et par vent fort, il se met dans le rouge à chaque sortie.",
          question: "Que changer ?",
          options: [
            "Rien, il faut tenir l’allure coûte que coûte",
            "Courir les footings au ressenti (pouvoir parler), quelle que soit l’allure affichée, et garder l’allure objectif pour les séances spécifiques sur terrain plat",
            "Ne courir que dans les descentes",
          ],
          answer: 1,
          explain:
            "L’effort réel varie avec le terrain et la météo. Le ressenti garde les footings faciles, la montre sert pour les séances d’allure.",
        },
        {
          type: "fiche",
          title: "Allures",
          points: [
            "4 allures : <b>footing facile</b> (70-80 %), <b>sortie longue</b>, <b>allure 10 km</b>, <b>fractionné</b>.",
            "Allure en <b>min/km</b> ; 6:00 = 10 km/h = 1 h sur 10 km.",
            "Estimer : test de <b>2 km</b> + 20-30 s/km.",
            "Fractionné : après 30 min de course continue, <b>1 fois par semaine</b>, encadré de footing facile.",
          ],
          retenir: "Facile la plupart du temps, au ressenti ; la montre sert pour les séances d’allure.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Phase 1 : courir 30 minutes (semaines 1 à 6)",
      minutes: 15,
      objectives: ["Suivre la progression marche-course", "Savoir quand avancer ou répéter une semaine"],
      steps: [
        {
          type: "lesson",
          title: "De la marche à 30 minutes de course",
          slides: [
            {
              title: "Le principe",
              body:
                "<ul><li><b>3 sorties par semaine</b>, avec au moins un jour de repos entre deux (par exemple lundi, mercredi, samedi).</li><li>Chaque sortie : <b>5 minutes de marche rapide</b> pour s’échauffer, le bloc du jour, 5 minutes de marche pour récupérer.</li><li>La course se fait <b>très lentement</b>, à peine plus vite que la marche si besoin : l’objectif est la durée, pas la vitesse.</li></ul>",
            },
            {
              title: "Le plan semaine par semaine",
              body:
                "<table class='t'><tr><th>Semaine</th><th>Bloc (3 fois dans la semaine)</th></tr><tr><td>1</td><td>8 × (1 min course + 1 min 30 marche)</td></tr><tr><td>2</td><td>6 × (2 min course + 1 min 30 marche)</td></tr><tr><td>3</td><td>5 × (3 min course + 1 min 30 marche)</td></tr><tr><td>4</td><td>4 × (5 min course + 1 min 30 marche)</td></tr><tr><td>5</td><td>3 × (8 min course + 1 min 30 marche)</td></tr><tr><td>6</td><td>2 × (12 min course + 2 min marche), puis 25 à 30 min continues en fin de semaine</td></tr></table>",
            },
            {
              title: "Avancer ou répéter ?",
              body:
                "<ul><li>Tu as terminé les 3 sorties de la semaine <b>sans douleur</b> et en pouvant parler pendant les phases de course : passe à la semaine suivante.</li><li>Une sortie a été très difficile ou tu as dû t’arrêter : <b>répète la semaine</b>. C’est normal et fréquent.</li><li>Une douleur qui augmente ou boite le lendemain : 2 à 3 jours de repos ou de vélo, puis reprendre une semaine en arrière ; consulter si elle persiste.</li></ul>",
            },
            {
              title: "En complément",
              body:
                "<ul><li><b>Marcher</b> les autres jours : cela développe l’endurance sans stresser les articulations.</li><li><b>1 à 2 séances courtes de renforcement</b> par semaine (squats, fentes, montées sur pointes, gainage, voir la séance 6).</li><li>Noter chaque sortie dans un carnet : durée, ressenti, douleurs éventuelles.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fréquence de la phase 1", back: "3 sorties par semaine, 1 jour de repos entre deux" },
            { front: "Semaine 1", back: "8 × (1 min course + 1 min 30 marche)" },
            { front: "Semaine 4", back: "4 × (5 min course + 1 min 30 marche)" },
            { front: "Semaine 6", back: "2 × 12 min, puis 25-30 min continues" },
            { front: "Répéter une semaine", back: "Si une sortie a été très difficile : c’est normal" },
            { front: "Vitesse en phase 1", back: "Très lente : la durée compte, pas la vitesse" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "En semaine 3, tu as dû t’arrêter pendant deux blocs de course. Tu…", options: ["passes à la semaine 4 quand même", "répètes la semaine 3", "arrêtes le plan"], answer: 1, explain: "Répéter une semaine fait partie du plan." },
            { q: "À quelle vitesse courir en phase 1 ?", options: ["Le plus vite possible", "Très lentement, en pouvant parler", "À l’allure 10 km"], answer: 1, explain: "On construit la durée." },
            { q: "Combien de sorties par semaine ?", options: ["1", "3", "7"], answer: 1, explain: "Avec un jour de repos entre deux." },
            { q: "Douleur au tibia qui fait boiter le lendemain : tu…", options: ["cours quand même", "fais 2-3 jours de repos ou de vélo puis reprends une semaine en arrière, et consultes si elle persiste", "doubles les séances"], answer: 1, explain: "Écouter tôt évite une blessure longue." },
          ],
        },
        {
          type: "case",
          title: "Trop pressé",
          story:
            "Après la semaine 1, Noa se sent bien et saute directement à la semaine 4. La troisième sortie, il a une douleur sur le devant du tibia qui persiste en marchant.",
          question: "Que s’est-il passé et que faire ?",
          options: [
            "Rien de grave, il doit continuer",
            "Le souffle a suivi, mais pas les os et les tendons : il faut arrêter la course quelques jours (vélo ou marche si sans douleur), reprendre à la semaine 2 ou 3 et consulter si la douleur persiste",
            "Il doit courir plus vite pour la faire passer",
          ],
          answer: 1,
          explain:
            "Les tissus s’adaptent plus lentement que le cœur et les poumons. La progression du plan sert justement à leur laisser le temps.",
        },
        {
          type: "fiche",
          title: "Phase 1",
          points: [
            "<b>3 sorties/semaine</b>, échauffement et retour au calme en marche, course <b>très lente</b>.",
            "S1 8 × 1 min · S2 6 × 2 min · S3 5 × 3 min · S4 4 × 5 min · S5 3 × 8 min · S6 2 × 12 min puis <b>25-30 min continues</b>.",
            "Avancer si sans douleur ; sinon <b>répéter</b> la semaine.",
            "Marche les autres jours, <b>renforcement</b> 1-2 fois, carnet.",
          ],
          retenir: "Répéter une semaine n’est pas un échec : c’est le plan qui s’adapte à ton corps.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Phase 2 : de 30 minutes à 10 km (semaines 7 à 12)",
      minutes: 16,
      objectives: ["Suivre la deuxième phase du plan", "Comprendre le rôle de chaque type de sortie"],
      steps: [
        {
          type: "lesson",
          title: "Vers la distance",
          slides: [
            {
              title: "Trois sorties différentes",
              body:
                "<ul><li><b>Footing facile</b> (mardi par exemple) : 30 à 40 minutes en pouvant parler.</li><li><b>Séance de qualité</b> (jeudi) : fractionné ou allure 10 km, encadré de footing.</li><li><b>Sortie longue</b> (dimanche) : la plus longue de la semaine, toujours facile ; elle augmente de 5 minutes environ chaque semaine.</li></ul><p>Toujours au moins un jour sans course entre deux sorties.</p>",
            },
            {
              title: "Le plan",
              body:
                "<table class='t'><tr><th>Sem.</th><th>Footing</th><th>Qualité</th><th>Sortie longue</th></tr><tr><td>7</td><td>30 min</td><td>30 min avec 6 × 1 min vite / 1 min 30 lent</td><td>35 min</td></tr><tr><td>8</td><td>30 min</td><td>35 min avec 5 × 2 min vite / 1 min 30 lent</td><td>40 min</td></tr><tr><td>9</td><td>35 min</td><td>40 min avec 4 × 4 min allure 10 km / 2 min lent</td><td>45 min</td></tr><tr><td>10</td><td>30 min (allégée)</td><td>35 min avec 6 × 2 min vite</td><td>40 min</td></tr><tr><td>11</td><td>35 min</td><td>45 min avec 2 × 10 min allure 10 km / 3 min lent</td><td>55 à 60 min (≈ 9-10 km)</td></tr><tr><td>12</td><td>25 min</td><td>25 min avec 3 × 3 min allure 10 km</td><td><b>Course !</b></td></tr></table>",
            },
            {
              title: "Pourquoi ces séances",
              body:
                "<ul><li>La <b>sortie longue</b> habitue muscles, tendons et mental à la durée. Si tu peux courir environ 55-60 minutes en footing facile, tu peux finir un 10 km.</li><li>Le <b>fractionné court</b> améliore le cœur et rend l’allure de course plus confortable.</li><li>Les blocs à <b>allure 10 km</b> apprennent le rythme exact du jour J.</li><li>La <b>semaine 10 allégée</b> permet d’assimiler le travail.</li></ul>",
            },
            {
              title: "Les règles d’or",
              body:
                "<ul><li>Ne jamais rattraper une séance manquée en doublant la suivante : on continue le plan.</li><li>Malade avec de la fièvre : pas de course. Retour progressif ensuite.</li><li>Une séance de qualité ratée par fatigue ? La remplacer par un footing facile.</li><li>La sortie longue se court <b>lentement</b> : c’est la durée qui compte.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Les 3 sorties de la phase 2", back: "Footing facile, séance de qualité, sortie longue" },
            { front: "Sortie longue", back: "La plus longue, toujours facile ; +5 min environ par semaine" },
            { front: "Semaine 10", back: "Semaine allégée pour assimiler" },
            { front: "Semaine 11", back: "Sortie longue de 55-60 min (≈ 9-10 km)" },
            { front: "Séance manquée", back: "Ne pas la rattraper : continuer le plan" },
            { front: "Fièvre", back: "Pas de course ; retour progressif" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "À quelle allure court-on la sortie longue ?", options: ["À l’allure 10 km", "Lentement, en pouvant parler", "Le plus vite possible"], answer: 1, explain: "La durée compte, pas la vitesse." },
            { q: "Tu as manqué la séance du jeudi. Tu…", options: ["fais deux séances le vendredi", "continues le plan avec la sortie suivante", "abandonnes"], answer: 1, explain: "Pas de rattrapage." },
            { q: "À quoi servent les blocs à allure 10 km ?", options: ["À apprendre le rythme de la course", "À récupérer", "À rien"], answer: 0, explain: "Le corps et le mental mémorisent l’allure." },
            { q: "Pourquoi une semaine allégée en semaine 10 ?", options: ["Pour assimiler le travail avant les dernières semaines", "Pour perdre sa forme", "Par hasard"], answer: 0, explain: "La surcompensation a besoin de récupération." },
          ],
        },
        {
          type: "case",
          title: "La sortie longue à fond",
          story:
            "Sofia transforme chaque sortie longue en course contre la montre, en essayant de battre son temps de la semaine précédente. En semaine 11, elle est épuisée et sa motivation s’effondre.",
          question: "Que lui conseiller ?",
          options: [
            "Courir encore plus vite pour s’habituer",
            "Courir la sortie longue lentement, en conversation, en ne regardant que la durée ; garder l’intensité pour la séance de qualité du jeudi",
            "Supprimer la sortie longue",
          ],
          answer: 1,
          explain:
            "Chaque séance a un rôle. Si toutes les sorties sont dures, aucune n’est vraiment efficace et la fatigue s’accumule.",
        },
        {
          type: "fiche",
          title: "Phase 2",
          points: [
            "3 sorties : <b>footing facile</b>, <b>qualité</b> (fractionné / allure 10 km), <b>sortie longue</b> lente.",
            "Sortie longue : 35 → 40 → 45 → 40 → <b>55-60 min</b> ; semaine 10 <b>allégée</b> ; semaine 12 : course.",
            "Pas de rattrapage, pas de course avec de la fièvre, qualité ratée = footing facile.",
          ],
          retenir: "Si tu tiens 55-60 minutes en footing facile, tu as dans les jambes de quoi finir ton 10 km.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Renforcement et blessures du coureur",
      minutes: 16,
      objectives: ["Renforcer les zones qui protègent le coureur", "Reconnaître les blessures fréquentes"],
      steps: [
        {
          type: "lesson",
          title: "Durer jusqu’au jour J",
          slides: [
            {
              title: "Pourquoi se renforcer",
              body:
                "<p>À chaque foulée, le corps encaisse un choc de l’ordre de <b>2 à 3 fois le poids du corps</b>. Des muscles plus forts absorbent mieux ces contraintes. Le renforcement fait aussi partie des stratégies qui aident à réduire certaines blessures.</p><p>2 séances de <b>15 à 20 minutes</b> par semaine suffisent, idéalement les jours de footing facile ou sans course.</p>",
            },
            {
              title: "La séance du coureur",
              body:
                "<table class='t'><tr><th>Exercice</th><th>Séries</th><th>Pour</th></tr><tr><td>Montées sur pointes de pieds, sur une jambe</td><td>3 × 12-15 / jambe</td><td>Mollets et tendon d’Achille</td></tr><tr><td>Squat bulgare ou fente arrière</td><td>3 × 8-12 / jambe</td><td>Cuisses et fessiers</td></tr><tr><td>Pont fessier sur une jambe</td><td>3 × 10-15 / jambe</td><td>Fessiers, stabilité du bassin</td></tr><tr><td>Planche latérale</td><td>3 × 20-40 s / côté</td><td>Stabilité latérale</td></tr><tr><td>Équilibre sur une jambe (yeux ouverts puis fermés)</td><td>3 × 30 s / jambe</td><td>Chevilles</td></tr></table>",
            },
            {
              title: "Les blessures fréquentes",
              body:
                "<table class='t'><tr><th>Blessure</th><th>Où</th></tr><tr><td><b>Syndrome de stress tibial</b> (« périostite »)</td><td>Bord interne du tibia, douleur diffuse</td></tr><tr><td><b>Syndrome fémoro-patellaire</b></td><td>Devant ou autour de la rotule, surtout en descente et escaliers</td></tr><tr><td><b>Syndrome de l’essuie-glace</b> (bandelette ilio-tibiale)</td><td>Côté externe du genou</td></tr><tr><td><b>Tendinopathie d’Achille</b></td><td>Arrière de la cheville, raideur le matin</td></tr><tr><td><b>Fracture de fatigue</b></td><td>Douleur très localisée sur un os, qui s’aggrave, parfois la nuit</td></tr></table><p>Cause commune : une augmentation trop rapide du volume ou de l’intensité.</p>",
            },
            {
              title: "Que faire en cas de douleur",
              body:
                "<ul><li>Douleur légère (≤ 3/10), stable, revenue à la normale le lendemain : on peut continuer en surveillant.</li><li>Douleur qui augmente pendant la course, qui fait boiter ou qui persiste le lendemain : <b>réduire</b> ou remplacer la course par du vélo ou de la natation sans douleur.</li><li>Douleur très localisée sur un os, douleur nocturne, gonflement : <b>arrêter</b> et consulter (suspicion de fracture de fatigue).</li><li>Un kinésithérapeute ou un médecin du sport peut adapter le plan plutôt que de tout arrêter.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle blessure ?",
          instruction: "Associe chaque description à la blessure la plus probable.",
          categories: ["Stress tibial", "Tendinopathie d’Achille", "Essuie-glace"],
          items: [
            { text: "Douleur diffuse le long du bord interne du tibia", cat: 0, why: "Typique du syndrome de stress tibial." },
            { text: "Raideur à l’arrière de la cheville au réveil", cat: 1, why: "Tendon d’Achille." },
            { text: "Douleur sur le côté externe du genou après 20 minutes de course", cat: 2, why: "Bandelette ilio-tibiale." },
            { text: "Tendon épaissi et douloureux au-dessus du talon", cat: 1, why: "Tendinopathie d’Achille." },
            { text: "Douleur au tibia apparue en augmentant brutalement le kilométrage", cat: 0, why: "Surcharge osseuse." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Choc à chaque foulée", back: "Environ 2 à 3 fois le poids du corps" },
            { front: "Renforcement du coureur", back: "2 séances de 15-20 min par semaine" },
            { front: "Montées sur pointes sur une jambe", back: "Mollets et tendon d’Achille" },
            { front: "Syndrome fémoro-patellaire", back: "Douleur autour de la rotule, surtout en descente et escaliers" },
            { front: "Signe d’une fracture de fatigue", back: "Douleur très localisée sur un os, qui s’aggrave, parfois la nuit" },
            { front: "Cause commune des blessures", back: "Augmentation trop rapide du volume ou de l’intensité" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Combien de séances de renforcement par semaine pour un coureur débutant ?", options: ["Aucune", "2 séances de 15-20 min", "Tous les jours 1 heure"], answer: 1, explain: "Court et régulier." },
            { q: "Douleur précise sur un point du tibia, qui réveille la nuit. Tu…", options: ["continues doucement", "arrêtes de courir et consultes", "fais du fractionné"], answer: 1, explain: "Suspicion de fracture de fatigue." },
            { q: "Quel exercice protège le tendon d’Achille ?", options: ["Les montées sur pointes de pieds", "Les pompes", "Le gainage frontal"], answer: 0, explain: "Il renforce mollets et tendon." },
            { q: "La cause la plus fréquente des blessures du coureur débutant est…", options: ["les mauvaises chaussettes", "une progression trop rapide", "la pluie"], answer: 1, explain: "D’où un plan progressif." },
          ],
        },
        {
          type: "case",
          title: "Le genou externe",
          story:
            "En semaine 9, Karim ressent une douleur sur le côté externe du genou au bout de 25 minutes à chaque sortie. Il prend des anti-inflammatoires et continue le plan sans rien changer.",
          question: "Que lui conseiller ?",
          options: [
            "Continuer avec les médicaments",
            "Réduire la durée des sorties sous le seuil de douleur (ou remplacer une sortie par du vélo), renforcer fessiers et hanches, éviter les longues descentes, et consulter un kinésithérapeute si la douleur persiste",
            "Courir plus vite pour finir avant la douleur",
          ],
          answer: 1,
          explain:
            "Masquer la douleur n’enlève pas la cause. Adapter la charge et renforcer permet souvent de continuer à se préparer.",
        },
        {
          type: "fiche",
          title: "Renforcement et blessures",
          points: [
            "<b>2 × 15-20 min</b>/semaine : montées sur pointes, squat bulgare, pont une jambe, planche latérale, équilibre.",
            "Blessures fréquentes : <b>stress tibial</b>, <b>fémoro-patellaire</b>, <b>essuie-glace</b>, <b>Achille</b>, <b>fracture de fatigue</b>.",
            "Douleur ≤ 3/10 stable : continuer ; qui augmente : réduire / vélo ; osseuse, nocturne : <b>arrêter et consulter</b>.",
          ],
          retenir: "Deux petites séances de renforcement par semaine sont la meilleure assurance du coureur.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Manger et boire pour courir",
      minutes: 15,
      objectives: ["Savoir quoi manger avant et après la course", "S’hydrater sans excès"],
      steps: [
        {
          type: "lesson",
          title: "Le carburant du coureur",
          slides: [
            {
              title: "Au quotidien",
              body:
                "<ul><li>Une alimentation <b>équilibrée</b> suffit pour un 10 km : féculents (pâtes, riz, pain, pommes de terre), protéines, légumes et fruits.</li><li>Les <b>glucides</b> sont le carburant principal des efforts soutenus : ne pas les supprimer si l’on court régulièrement.</li><li>Pas besoin de compléments ou de boissons spéciales pour des sorties de moins d’une heure.</li></ul>",
            },
            {
              title: "Avant de courir",
              body:
                "<ul><li>Un repas complet <b>2 à 3 heures</b> avant, plutôt léger en graisses et en fibres (moins de risque de troubles digestifs).</li><li>Une petite collation possible <b>30 à 60 minutes</b> avant : une banane, une compote, une tranche de pain avec du miel.</li><li>Le matin tôt : une collation légère suffit, ou courir à jeun en footing facile si l’on est habitué.</li><li><b>Rien de nouveau le jour de la course</b> : tester ses repas d’avant-course pendant les sorties longues.</li></ul>",
            },
            {
              title: "S’hydrater",
              body:
                "<ul><li>Boire régulièrement dans la journée ; une urine claire est un bon repère.</li><li>Pour moins d’une heure de course par temps tempéré, boire <b>avant et après</b> suffit en général.</li><li>Par forte chaleur, ou au-delà d’une heure : emporter de l’eau, boire selon la soif.</li><li>Boire de grandes quantités d’eau « par précaution » est inutile et peut même être dangereux à l’extrême (hyponatrémie, surtout sur les longues courses).</li></ul>",
            },
            {
              title: "Après la course",
              body:
                "<ul><li>Dans les heures qui suivent, un repas avec des <b>glucides</b> et des <b>protéines</b> (par exemple riz, poulet, légumes ; ou un laitage et des fruits).</li><li>Boire pour compenser la sueur.</li><li>Un sommeil de qualité reste la meilleure récupération.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Carburant des efforts soutenus", back: "Les glucides" },
            { front: "Repas avant de courir", back: "2 à 3 h avant, léger en graisses et en fibres" },
            { front: "Collation avant", back: "30-60 min avant : banane, compote, pain et miel" },
            { front: "Règle du jour de course", back: "Rien de nouveau : tester pendant les sorties longues" },
            { front: "Hydratation < 1 h par temps tempéré", back: "Boire avant et après suffit en général" },
            { front: "Après la course", back: "Glucides + protéines, boire, bien dormir" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu cours à 18 h. Ton dernier repas complet idéal est vers…", options: ["17 h 45", "15 h - 16 h", "8 h du matin"], answer: 1, explain: "2 à 3 heures avant." },
            { q: "Pour un footing de 40 min par 15 °C, faut-il emporter une boisson ?", options: ["Oui, obligatoirement 1 litre", "En général non : boire avant et après suffit", "Une boisson énergétique est indispensable"], answer: 1, explain: "Sauf chaleur ou besoin personnel." },
            { q: "Le jour de la course, tu…", options: ["testes un nouveau gel énergétique", "manges ce que tu as déjà testé à l’entraînement", "ne manges rien depuis la veille"], answer: 1, explain: "Pas de surprise digestive." },
            { q: "Après une sortie longue, un bon repas contient…", options: ["seulement des légumes", "des glucides et des protéines", "rien, pour maigrir"], answer: 1, explain: "Pour recharger et réparer." },
          ],
        },
        {
          type: "case",
          title: "Le petit-déjeuner du jour J",
          story:
            "Le matin de la course, Hugo mange un grand plat de pâtes à la crème une heure avant le départ et avale un gel énergétique qu’il n’a jamais essayé. Au 4e kilomètre, il a des crampes d’estomac.",
          question: "Qu’aurait-il dû faire ?",
          options: [
            "Manger encore plus pour avoir de l’énergie",
            "Prendre 2 à 3 h avant un petit-déjeuner habituel, léger et testé pendant les sorties longues (pain, confiture, banane), et ne rien utiliser de nouveau le jour de la course",
            "Courir sans avoir mangé depuis la veille au midi",
          ],
          answer: 1,
          explain:
            "Pour un 10 km, les réserves sont suffisantes : l’enjeu est surtout d’éviter les troubles digestifs.",
        },
        {
          type: "fiche",
          title: "Alimentation et hydratation",
          points: [
            "Quotidien <b>équilibré</b> avec des <b>glucides</b> ; pas de compléments nécessaires.",
            "Repas <b>2-3 h avant</b>, collation 30-60 min avant ; <b>rien de nouveau</b> le jour J.",
            "Moins d’1 h tempéré : boire <b>avant et après</b> ; chaleur ou > 1 h : boire selon la soif ; pas d’excès.",
            "Après : <b>glucides + protéines</b>, eau, sommeil.",
          ],
          retenir: "Le jour de la course, mange et bois exactement comme lors de tes meilleures sorties longues.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Le jour de la course",
      minutes: 16,
      objectives: ["Préparer la dernière semaine et la veille", "Gérer son allure pendant la course"],
      steps: [
        {
          type: "lesson",
          title: "Ton premier 10 km",
          slides: [
            {
              title: "La dernière semaine",
              body:
                "<ul><li>On ne gagne plus rien en forme dans les derniers jours : on <b>réduit</b> le volume (environ moitié), on garde quelques minutes à allure 10 km pour rester vif.</li><li>Dernière sortie 2 jours avant la course : 20 à 25 minutes faciles avec 3 accélérations.</li><li>Repérer le parcours, l’heure de départ, le retrait des dossards.</li><li>Dormir correctement toute la semaine : la nuit de la veille compte moins que les précédentes.</li></ul>",
            },
            {
              title: "La veille et le matin",
              body:
                "<ul><li>Préparer ses affaires : dossard et épingles, tenue <b>testée</b> (rien de neuf), chaussures habituelles, montre chargée, vêtement chaud jetable pour l’attente.</li><li>Dîner habituel, riche en féculents, sans excès.</li><li>Le matin : petit-déjeuner testé 2 à 3 h avant, arriver <b>45 à 60 minutes</b> avant le départ (toilettes, consigne).</li><li>Échauffement : 10 minutes de footing très lent et 3 ou 4 accélérations progressives.</li></ul>",
            },
            {
              title: "La stratégie de course",
              body:
                "<ul><li>L’erreur classique : <b>partir trop vite</b>, porté par l’ambiance, puis s’effondrer après 5 km.</li><li>Les 2 premiers kilomètres : 5 à 10 secondes par km <b>plus lentement</b> que l’allure prévue.</li><li>Du 3e au 8e kilomètre : allure prévue, régulière.</li><li>Les 2 derniers : accélérer si tu te sens bien.</li><li>Finir plus vite qu’on n’a commencé (le <b>« negative split »</b>) est la façon la plus efficace et la plus agréable de courir.</li><li>Ravitaillement (souvent vers le 5e km) : boire quelques gorgées en marchant si besoin, c’est permis.</li></ul>",
            },
            {
              title: "Après l’arrivée",
              body:
                "<ul><li>Continuer à marcher quelques minutes, boire, manger un peu (ravitaillement d’arrivée).</li><li>Se couvrir rapidement pour ne pas prendre froid.</li><li>Les jours suivants : 2 à 3 jours de récupération (marche, vélo léger), puis un footing facile.</li><li>Noter son temps et ses sensations, puis choisir le prochain objectif : améliorer son chrono, un semi-marathon, un trail…</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Dernière semaine", back: "Volume réduit de moitié, quelques minutes à allure course" },
            { front: "Arriver sur place", back: "45 à 60 minutes avant le départ" },
            { front: "Échauffement d’avant-course", back: "10 min de footing très lent + 3-4 accélérations" },
            { front: "Premiers kilomètres", back: "5 à 10 s/km plus lent que l’allure prévue" },
            { front: "Negative split", back: "Courir la deuxième moitié plus vite que la première" },
            { front: "Après la course", back: "Marcher, boire, manger, se couvrir ; 2-3 jours de récupération" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Trois jours avant la course, tu…", options: ["fais ta plus longue sortie", "réduis le volume et restes vif avec quelques minutes à allure course", "ne bouges plus du tout"], answer: 1, explain: "L’affûtage." },
            { q: "L’erreur la plus fréquente sur un premier 10 km est…", options: ["partir trop vite", "partir trop lentement", "trop s’échauffer"], answer: 0, explain: "L’ambiance pousse à accélérer." },
            { q: "Tu peux marcher au ravitaillement pour boire ?", options: ["Non, c’est interdit", "Oui, c’est permis et parfois utile", "Seulement les élites"], answer: 1, explain: "Quelques secondes de marche ne changent pas grand-chose." },
            { q: "Une tenue achetée la veille au village de la course : tu la portes ?", options: ["Oui, elle est neuve", "Non : rien de neuf le jour de la course", "Seulement les chaussures"], answer: 1, explain: "Risque d’irritations ou d’ampoules." },
          ],
        },
        {
          type: "case",
          title: "Le départ euphorique",
          story:
            "Sofia vise 1 h (6:00/km). Portée par la foule, elle passe le 1er kilomètre en 5:10 et le 3e en 5:20. Au 6e kilomètre, elle est obligée de marcher et finit en 1 h 08, déçue.",
          question: "Quelle stratégie aurait été meilleure ?",
          options: [
            "Partir encore plus vite pour avoir de l’avance",
            "Partir légèrement plus lentement que l’objectif (6:05-6:10 sur les 2 premiers km), tenir 6:00 jusqu’au 8e, puis accélérer : elle aurait probablement fini sous l’heure en se sentant bien",
            "Marcher les 5 premiers kilomètres",
          ],
          answer: 1,
          explain:
            "L’énergie gaspillée au début se paie au double à la fin. Une course régulière ou en « negative split » est presque toujours plus rapide.",
        },
        {
          type: "fiche",
          title: "Jour de course",
          points: [
            "Dernière semaine : <b>volume divisé par deux</b>, rester vif, dormir.",
            "Veille : affaires prêtes, <b>rien de neuf</b> ; matin : petit-déjeuner testé, arriver <b>45-60 min</b> avant, échauffement 10 min.",
            "Course : 2 premiers km <b>un peu plus lents</b>, allure régulière, accélérer à la fin (<b>negative split</b>).",
            "Après : marcher, boire, manger, se couvrir ; 2-3 jours de récupération ; noter et choisir le prochain objectif.",
          ],
          retenir: "Pars plus lentement que tu ne le voudrais : la course commence vraiment au 7e kilomètre.",
        },
      ],
    },
  ],
});
