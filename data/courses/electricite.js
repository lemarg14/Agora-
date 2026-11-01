/* ============================================================
   COURS : L’électricité du bâtiment
   École de Construction · 8 séances de 15 à 20 minutes
   Objectif : comprendre et lire une installation, connaître les
   règles et travailler en sécurité. Ce n’est PAS un tutoriel de
   travaux sous tension : le cours renvoie vers un électricien
   qualifié pour toute intervention.
   Vérifié au 1er novembre 2026 : NF C 15-100 révisée (août 2024,
   appliquée depuis sept. 2025 en rénovation, avril 2026 en neuf) ;
   diagnostic électricité (> 15 ans, 3 ans vente / 6 ans location).
   À METTRE À JOUR si la norme évolue.
   ============================================================ */
AGORA.registerCourse({
  id: "electricite",
  faculty: "construction",
  title: "L’électricité du bâtiment",
  subtitle: "Comprendre une installation, lire un tableau, connaître les règles et rester en sécurité",
  color: "#c27c0e",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre ce qui se passe derrière les prises : tension, intensité et puissance, le danger électrique, le chemin du courant depuis la rue, le tableau, les circuits et les câbles, les règles pièce par pièce, la sécurité pendant les travaux, et les équipements d’aujourd’hui (recharge de voiture, solaire). Le but : savoir lire une installation, dialoguer avec un électricien et repérer ce qui est dangereux.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Tension, intensité, puissance",
      minutes: 16,
      objectives: ["Comprendre volts, ampères et watts", "Savoir calculer une puissance et une consommation"],
      steps: [
        {
          type: "lesson",
          title: "Les grandeurs de l’électricité",
          slides: [
            {
              title: "L’image de l’eau",
              body:
                "<p>Pour comprendre l’électricité, on la compare souvent à de l’eau dans un tuyau :</p><div class='tiers'><div><b>Tension (volts, V)</b><span>La pression qui pousse l’eau. En France, le réseau domestique est en <b>230 V</b>.</span></div><div><b>Intensité (ampères, A)</b><span>Le débit d’eau qui circule. Plus il y a d’appareils allumés, plus l’intensité augmente.</span></div><div><b>Résistance (ohms, Ω)</b><span>Le rétrécissement du tuyau qui freine le passage.</span></div></div><p>Le courant du réseau est <b>alternatif</b> : il change de sens <b>50 fois par seconde</b> (50 hertz).</p>",
            },
            {
              title: "Deux formules à connaître",
              body:
                "<ul><li><b>Loi d’Ohm</b> : U = R × I (tension = résistance × intensité).</li><li><b>Puissance</b> : P = U × I (watts = volts × ampères).</li></ul><p>Exemple : une bouilloire de 2 000 W branchée sur 230 V tire environ 2 000 ÷ 230 ≈ <b>8,7 A</b>.</p><p>C’est cette intensité qui fait chauffer les câbles. Un câble trop fin pour l’intensité qui le traverse s’échauffe, et peut provoquer un incendie.</p>",
            },
            {
              title: "Puissance et énergie",
              body:
                "<ul><li>La <b>puissance</b> (W ou kW) est ce qu’un appareil consomme à un instant donné.</li><li>L’<b>énergie</b> (kWh) est la puissance multipliée par la durée : c’est ce que tu paies sur ta facture.</li></ul><p>Un radiateur de 1 500 W allumé 4 heures consomme 1,5 kW × 4 h = <b>6 kWh</b>. À 0,20 € le kWh (ordre de grandeur), cela fait 1,20 €.</p><p>L’<b>abonnement</b> (6, 9, 12 kVA…) fixe la puissance maximale que tu peux appeler en même temps : si tu la dépasses, le disjoncteur de branchement coupe.</p>",
              example: "Four (2 500 W) + plaque (4 000 W) + lave-linge (2 000 W) + chauffe-eau (2 400 W) en même temps : près de 11 kW. Avec un abonnement de 9 kVA, ça disjoncte.",
            },
            {
              title: "Conducteurs et isolants",
              body:
                "<ul><li><b>Conducteurs</b> : les métaux (cuivre des câbles, aluminium), l’eau du robinet, le corps humain.</li><li><b>Isolants</b> : plastique, caoutchouc, verre, céramique, bois sec, air.</li></ul><p>Un câble électrique, c’est une âme en cuivre entourée d’isolant. Quand l’isolant est abîmé, le courant peut passer là où il ne devrait pas : dans une carcasse métallique, dans l’eau… ou dans une personne.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Tension (V)", back: "La « pression » qui pousse le courant. Réseau domestique français : 230 V, 50 Hz." },
            { front: "Intensité (A)", back: "Le « débit » de courant ; c’est elle qui fait chauffer les câbles." },
            { front: "P = U × I", back: "Puissance (W) = tension (V) × intensité (A)." },
            { front: "kWh", back: "Énergie consommée : puissance (kW) × durée (h). C’est ce qu’on paie." },
            { front: "Abonnement en kVA", back: "Puissance maximale appelable en même temps ; au-delà, le disjoncteur de branchement coupe." },
            { front: "Conducteur / isolant", back: "Laisse passer le courant (cuivre, eau, corps) / le bloque (plastique, verre, caoutchouc)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un sèche-cheveux de 2 300 W sur 230 V tire environ…", options: ["1 A", "10 A", "100 A"], answer: 1, explain: "2 300 ÷ 230 = 10 A." },
            { q: "Un chauffage d’appoint de 2 000 W fonctionne 3 heures. Il consomme…", options: ["6 kWh", "600 kWh", "0,6 kWh"], answer: 0, explain: "2 kW × 3 h = 6 kWh." },
            { q: "Pourquoi un câble trop fin est-il dangereux ?", options: ["Il casse facilement", "Il s’échauffe quand l’intensité est trop forte, avec un risque d’incendie", "Il consomme plus d’électricité"], answer: 1, explain: "La chaleur dépend de l’intensité et de la section du câble." },
            { q: "Ton disjoncteur général saute dès que le four et le lave-linge tournent ensemble. Cause probable ?", options: ["Une panne du four", "Une puissance appelée supérieure à l’abonnement", "Un problème de Wi-Fi"], answer: 1, explain: "On peut augmenter l’abonnement ou décaler les usages (délestage)." },
          ],
        },
        {
          type: "case",
          title: "La multiprise du bureau",
          story:
            "Dans le local de Yanis, une seule multiprise alimente un radiateur de 2 000 W, une bouilloire de 2 000 W et une imprimante laser. La multiprise est marquée « 16 A max » et elle est tiède au toucher.",
          question: "Que faut-il en penser ?",
          options: [
            "Tout va bien puisque ça fonctionne",
            "Radiateur et bouilloire ensemble dépassent déjà 4 000 W, soit plus de 17 A : la multiprise est surchargée et chauffe ; il faut répartir les appareils sur plusieurs prises murales, et ne jamais brancher un radiateur sur une multiprise",
            "Il suffit d’ajouter une deuxième multiprise branchée sur la première",
          ],
          answer: 1,
          explain:
            "4 000 W ÷ 230 V ≈ 17,4 A, au-delà des 16 A de la multiprise. Une multiprise qui chauffe est un signal d’alerte : c’est une cause classique d’incendie. Brancher des multiprises en cascade aggrave le problème.",
        },
        {
          type: "fiche",
          title: "Tension, intensité, puissance",
          points: [
            "<b>Tension</b> (V) = pression ; <b>intensité</b> (A) = débit ; <b>résistance</b> (Ω) = frein. Réseau : 230 V, 50 Hz.",
            "<b>U = R × I</b> et <b>P = U × I</b> : 2 000 W ≈ 8,7 A.",
            "<b>kWh</b> = kW × heures : c’est l’énergie facturée.",
            "L’<b>abonnement</b> (kVA) limite la puissance appelée en même temps.",
            "L’intensité fait chauffer les câbles : section adaptée, pas de multiprise surchargée.",
          ],
          retenir: "Ce sont les ampères qui chauffent : une multiprise tiède est un avertissement.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Le danger électrique",
      minutes: 15,
      objectives: ["Comprendre les effets du courant sur le corps et le risque d’incendie", "Savoir réagir face à une personne électrisée"],
      steps: [
        {
          type: "lesson",
          title: "Pourquoi l’électricité est dangereuse",
          slides: [
            {
              title: "Électrisation et électrocution",
              body:
                "<ul><li><b>Électrisation</b> : le courant traverse le corps (sensations, contractions, brûlures).</li><li><b>Électrocution</b> : électrisation mortelle.</li></ul><p>Le danger dépend surtout de l’<b>intensité qui traverse le corps</b>, de sa durée et de son trajet (main à main ou main à pied, en passant par le cœur). Quelques dizaines de milliampères peuvent suffire à bloquer la respiration ou à dérégler le cœur : c’est pour cela que les dispositifs de protection coupent à <b>30 mA</b>.</p>",
            },
            {
              title: "Contact direct, contact indirect",
              body:
                "<table class='t'><tr><th>Type</th><th>Situation</th><th>Protection</th></tr><tr><td><b>Contact direct</b></td><td>On touche une partie normalement sous tension (fil dénudé, borne)</td><td>Isolation, capots, travail hors tension</td></tr><tr><td><b>Contact indirect</b></td><td>On touche une masse métallique qui est passée sous tension à cause d’un défaut (carcasse de machine à laver)</td><td>Prise de terre + interrupteur différentiel 30 mA</td></tr></table><p>L’<b>humidité</b> aggrave tout : peau mouillée, sol humide, salle de bains. C’est pourquoi les règles y sont plus strictes.</p>",
            },
            {
              title: "Le risque d’incendie",
              body:
                "<p>Une part importante des incendies domestiques a une origine électrique. Les causes classiques :</p><ul><li>connexions mal serrées qui chauffent (bornes de tableau, dominos) ;</li><li>câbles sous-dimensionnés ou protégés par un disjoncteur trop gros ;</li><li>multiprises en cascade ou surchargées ;</li><li>appareils et chargeurs abîmés ;</li><li>installations anciennes sans protection adaptée.</li></ul>",
            },
            {
              title: "Que faire face à une personne électrisée ?",
              body:
                "<ol><li><b>Ne pas la toucher</b> tant qu’elle est en contact avec le courant : tu serais électrisé à ton tour.</li><li><b>Couper le courant</b> au tableau (ou débrancher l’appareil si c’est sans risque).</li><li>Si impossible, l’éloigner avec un objet <b>sec et isolant</b> (manche en bois, chaise en plastique), sans être soi-même au contact de l’eau.</li><li><b>Appeler les secours</b> : 15 (SAMU), 18 (pompiers) ou 112.</li><li>Si la personne ne respire pas, commencer le massage cardiaque et utiliser un défibrillateur si disponible.</li></ol><p>Même si la personne semble aller bien, un avis médical est nécessaire : les troubles du rythme cardiaque et les brûlures internes peuvent apparaître ensuite.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Contact direct ou indirect ?",
          instruction: "Classe chaque situation.",
          categories: ["Contact direct", "Contact indirect"],
          items: [
            { text: "Toucher un fil dénudé dans une boîte de dérivation ouverte", cat: 0, why: "Partie active touchée directement." },
            { text: "Prendre une décharge en touchant la carcasse d’un lave-linge défectueux", cat: 1, why: "Masse mise sous tension par un défaut." },
            { text: "Mettre un doigt dans une douille d’ampoule allumée", cat: 0, why: "Contact avec une partie sous tension." },
            { text: "Toucher un radiateur métallique dont le câble interne est abîmé", cat: 1, why: "Défaut d’isolement sur une masse." },
            { text: "Glisser un tournevis dans une prise", cat: 0, why: "Contact direct avec les alvéoles." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Électrisation / électrocution", back: "Passage du courant dans le corps / électrisation mortelle." },
            { front: "30 mA", back: "Seuil de déclenchement des différentiels qui protègent les personnes." },
            { front: "Contact direct", back: "Toucher une partie normalement sous tension." },
            { front: "Contact indirect", back: "Toucher une masse métallique mise sous tension par un défaut." },
            { front: "Personne électrisée", back: "Ne pas toucher, couper le courant, appeler le 15/18/112, masser si besoin." },
            { front: "Connexion mal serrée", back: "Elle chauffe et peut provoquer un incendie." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’est-ce qui détermine surtout la gravité d’une électrisation ?", options: ["La couleur du fil", "L’intensité qui traverse le corps, sa durée et son trajet", "La marque de l’appareil"], answer: 1, explain: "Un trajet passant par le cœur est le plus dangereux." },
            { q: "Ton collègue est resté collé à une baladeuse défectueuse. Premier réflexe ?", options: ["Le tirer par le bras", "Couper le courant", "Lui jeter de l’eau"], answer: 1, explain: "Le toucher t’exposerait au même courant." },
            { q: "Quelle protection agit contre les contacts indirects ?", options: ["La prise de terre associée à un différentiel 30 mA", "Une multiprise", "Un variateur"], answer: 0, explain: "La terre évacue le défaut, le différentiel coupe." },
            { q: "Après une électrisation, la personne dit qu’elle va bien. Que faire ?", options: ["Rien", "Demander un avis médical malgré tout", "Lui donner un café"], answer: 1, explain: "Des troubles cardiaques peuvent apparaître plus tard." },
          ],
        },
        {
          type: "case",
          title: "La rallonge dans le jardin",
          story:
            "Pour tailler la haie après la pluie, Mathis branche son taille-haie sur une vieille rallonge dont la gaine est fendue, posée dans l’herbe mouillée. La prise extérieure n’a jamais fait sauter quoi que ce soit.",
          question: "Quelle est la bonne analyse ?",
          options: [
            "Pas de problème, il n’a jamais rien eu",
            "Gaine abîmée + humidité = risque de contact direct ; il faut une rallonge en bon état adaptée à l’extérieur, et vérifier que la prise est protégée par un différentiel 30 mA (bouton test du tableau)",
            "Il suffit de mettre des gants de jardinage",
          ],
          answer: 1,
          explain:
            "L’extérieur humide est l’un des environnements les plus dangereux. Une gaine fendue expose directement les conducteurs. Le différentiel 30 mA est la dernière barrière : on le teste en appuyant sur son bouton « test », idéalement une fois par mois.",
        },
        {
          type: "fiche",
          title: "Le danger électrique",
          points: [
            "Danger lié à l’<b>intensité</b> dans le corps, à sa durée et à son trajet ; protection des personnes à <b>30 mA</b>.",
            "<b>Contact direct</b> (partie active) / <b>indirect</b> (masse en défaut : terre + différentiel).",
            "L’<b>humidité</b> aggrave le risque ; l’électricité est aussi une cause majeure d’<b>incendie</b>.",
            "Personne électrisée : <b>ne pas toucher</b>, <b>couper</b>, appeler le <b>15 / 18 / 112</b>, masser si besoin.",
          ],
          retenir: "Avant de secourir, on coupe : sinon on fait deux victimes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "De la rue à ton logement",
      minutes: 16,
      objectives: ["Suivre le chemin du courant depuis le réseau", "Comprendre la prise de terre et la liaison équipotentielle"],
      steps: [
        {
          type: "lesson",
          title: "Le parcours du courant",
          slides: [
            {
              title: "Du réseau au compteur",
              body:
                "<ol><li>Le réseau public de distribution (géré principalement par <b>Enedis</b>) arrive par un câble souterrain ou aérien.</li><li>Le <b>branchement</b> relie ce réseau au bâtiment.</li><li>Le <b>compteur</b> (Linky dans la plupart des logements) mesure la consommation et permet les relevés à distance.</li><li>Le <b>disjoncteur de branchement</b> (dit « général ») marque la limite : il est réglé selon ton abonnement et sert d’interrupteur général de tout le logement.</li></ol><p>Tout ce qui est <b>avant</b> le disjoncteur de branchement relève du gestionnaire de réseau ; tout ce qui est <b>après</b> relève du propriétaire.</p>",
            },
            {
              title: "La gaine technique logement",
              body:
                "<p>Dans les logements récents, le tableau électrique, le disjoncteur de branchement et l’arrivée des communications (box internet, TV) sont regroupés dans une <b>gaine technique logement (GTL)</b>, un emplacement dédié du sol au plafond, facilement accessible, souvent près de l’entrée.</p><p>Avantages : tout est au même endroit, accessible rapidement en cas d’urgence, et l’installation peut évoluer (ajout de circuits, fibre).</p>",
            },
            {
              title: "La prise de terre",
              body:
                "<ul><li>La <b>prise de terre</b> est un conducteur enterré (piquet, câble en fond de fouille) relié à toutes les prises et à toutes les masses métalliques des appareils par le fil <b>vert et jaune</b>.</li><li>En cas de défaut, elle offre au courant un chemin facile vers le sol, ce qui permet au <b>différentiel</b> de détecter la fuite et de couper.</li><li>Sans terre, le défaut reste sur la carcasse de l’appareil jusqu’à ce que quelqu’un la touche.</li></ul><p>Sa qualité se mesure en ohms : un électricien la contrôle avec un appareil dédié.</p>",
            },
            {
              title: "La liaison équipotentielle",
              body:
                "<p>Dans la salle de bains, on relie entre elles et à la terre les éléments métalliques (canalisations, baignoire métallique, bâti de douche). C’est la <b>liaison équipotentielle</b>.</p><p>Objectif : qu’aucune différence de tension dangereuse ne puisse apparaître entre deux éléments qu’une personne mouillée pourrait toucher en même temps.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Branchement", back: "Liaison entre le réseau public et le bâtiment." },
            { front: "Disjoncteur de branchement", back: "Interrupteur général du logement, réglé selon l’abonnement ; limite entre réseau et installation privée." },
            { front: "Linky", back: "Compteur communicant qui mesure la consommation et permet les relevés à distance." },
            { front: "GTL", back: "Gaine technique logement : regroupe tableau, disjoncteur et communications." },
            { front: "Prise de terre", back: "Conducteur enterré relié par le fil vert-jaune à toutes les prises et masses." },
            { front: "Liaison équipotentielle", back: "Relie à la terre les éléments métalliques de la salle de bains." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qui est responsable de l’installation située après le disjoncteur de branchement ?", options: ["Le gestionnaire de réseau", "Le propriétaire du logement", "La mairie"], answer: 1, explain: "Le disjoncteur de branchement marque la limite." },
            { q: "De quelle couleur est le fil de terre ?", options: ["Bleu", "Vert et jaune", "Rouge"], answer: 1, explain: "Cette couleur lui est strictement réservée." },
            { q: "À quoi sert la prise de terre ?", options: ["À réduire la facture", "À évacuer un courant de défaut vers le sol pour que le différentiel coupe", "À améliorer le Wi-Fi"], answer: 1, explain: "Terre et différentiel fonctionnent ensemble." },
            { q: "Pourquoi relier la baignoire métallique et les tuyaux à la terre ?", options: ["Pour éviter qu’une tension dangereuse apparaisse entre deux éléments touchés en même temps", "Pour chauffer l’eau", "Par esthétique"], answer: 0, explain: "C’est la liaison équipotentielle." },
          ],
        },
        {
          type: "case",
          title: "La vieille maison sans terre",
          story:
            "Léa achète une maison des années 1960. Les prises n’ont que deux trous, sans broche de terre. Le diagnostic électricité signale « absence de prise de terre » et « absence de dispositif différentiel 30 mA ».",
          question: "Que doit-elle prévoir ?",
          options: [
            "Remplacer simplement les prises par des modèles à trois broches",
            "Faire installer par un électricien une prise de terre et des interrupteurs différentiels 30 mA, puis relier les circuits à la terre ; c’est une priorité de sécurité avant d’emménager",
            "Rien, l’installation a tenu 60 ans",
          ],
          answer: 1,
          explain:
            "Une prise à trois broches non reliée à une vraie terre donne une fausse impression de sécurité. Terre et différentiels sont la base de la protection des personnes : ce sont les premiers travaux à prévoir dans une installation ancienne.",
        },
        {
          type: "fiche",
          title: "De la rue au logement",
          points: [
            "Réseau → <b>branchement</b> → <b>compteur</b> (Linky) → <b>disjoncteur de branchement</b> → tableau.",
            "Après le disjoncteur de branchement : responsabilité du <b>propriétaire</b>.",
            "<b>GTL</b> : tout regroupé et accessible.",
            "<b>Prise de terre</b> (fil vert-jaune) + différentiel = protection contre les défauts.",
            "<b>Liaison équipotentielle</b> dans la salle de bains.",
          ],
          retenir: "Une prise à trois broches sans vraie terre ne protège de rien.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Le tableau électrique",
      minutes: 17,
      objectives: ["Reconnaître les éléments d’un tableau", "Comprendre le rôle des différentiels et des disjoncteurs"],
      steps: [
        {
          type: "lesson",
          title: "Lire un tableau",
          slides: [
            {
              title: "L’organisation d’un tableau",
              body:
                "<p>Un tableau moderne est organisé en <b>rangées</b> :</p><ol><li>En tête de chaque rangée, un <b>interrupteur différentiel 30 mA</b>, qui protège les personnes.</li><li>Derrière lui, plusieurs <b>disjoncteurs divisionnaires</b>, un par circuit (éclairage du salon, prises de la chambre, plaque de cuisson…), qui protègent les câbles.</li></ol><p>Chaque disjoncteur est <b>étiqueté</b> : en cas de problème, on sait immédiatement quel circuit couper.</p>",
            },
            {
              title: "Différentiel et disjoncteur : deux rôles",
              body:
                "<table class='t'><tr><th>Appareil</th><th>Ce qu’il surveille</th><th>Ce qu’il protège</th></tr><tr><td><b>Interrupteur différentiel 30 mA</b></td><td>Une fuite de courant (ce qui part ne revient pas entièrement)</td><td>Les <b>personnes</b> (électrisation)</td></tr><tr><td><b>Disjoncteur divisionnaire</b></td><td>Une surcharge ou un court-circuit</td><td>Les <b>câbles</b> (échauffement, incendie)</td></tr></table><p>Il existe plusieurs types de différentiels (AC, A, F…) selon les appareils : certains circuits, comme la plaque de cuisson, le lave-linge ou la recharge de véhicule, exigent un type plus performant que le type AC standard.</p>",
            },
            {
              title: "Surcharge et court-circuit",
              body:
                "<ul><li><b>Surcharge</b> : trop d’appareils sur un même circuit, l’intensité dépasse ce que le câble supporte. Le disjoncteur coupe après un certain temps.</li><li><b>Court-circuit</b> : la phase touche le neutre ou la terre directement (fil abîmé, appareil défectueux). L’intensité devient énorme ; le disjoncteur coupe instantanément.</li></ul><p>Si un disjoncteur saute de façon répétée, on ne le force pas et on ne le remplace pas par un plus gros : on cherche la cause.</p>",
            },
            {
              title: "Les autres éléments",
              body:
                "<ul><li>Un <b>parafoudre</b> protège les appareils des surtensions dues à la foudre ; il est obligatoire dans certaines zones et pour certains bâtiments, recommandé ailleurs.</li><li>Un <b>contacteur heures creuses</b> pilote le chauffe-eau pour qu’il chauffe la nuit.</li><li>Un <b>délesteur</b> coupe temporairement des circuits non prioritaires (chauffage) pour éviter de dépasser l’abonnement.</li></ul><p>Le bouton <b>« test »</b> des différentiels se presse régulièrement (une fois par mois est une bonne habitude) : le différentiel doit couper immédiatement.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel appareil réagit ?",
          instruction: "Classe chaque situation selon l’appareil qui doit couper.",
          categories: ["Interrupteur différentiel 30 mA", "Disjoncteur divisionnaire"],
          items: [
            { text: "Un enfant touche un fil dénudé et le courant passe par son corps vers la terre", cat: 0, why: "Fuite de courant vers la terre." },
            { text: "On branche radiateur, bouilloire et fer à repasser sur le même circuit", cat: 1, why: "Surcharge." },
            { text: "Une perceuse coupe un câble et la phase touche le neutre", cat: 1, why: "Court-circuit." },
            { text: "La carcasse du lave-linge est sous tension à cause d’un défaut", cat: 0, why: "Fuite vers la terre détectée." },
            { text: "Un câble trop sollicité commence à chauffer", cat: 1, why: "Protection du câble." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Interrupteur différentiel 30 mA", back: "Détecte les fuites de courant et protège les personnes." },
            { front: "Disjoncteur divisionnaire", back: "Coupe en cas de surcharge ou de court-circuit et protège les câbles d’un circuit." },
            { front: "Surcharge", back: "Trop d’intensité sur un circuit ; coupure après un certain temps." },
            { front: "Court-circuit", back: "Contact direct entre conducteurs ; intensité énorme, coupure instantanée." },
            { front: "Parafoudre", back: "Protège les appareils des surtensions dues à la foudre." },
            { front: "Bouton test", back: "À presser régulièrement : le différentiel doit couper aussitôt." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel appareil protège les personnes contre l’électrisation ?", options: ["Le disjoncteur divisionnaire", "L’interrupteur différentiel 30 mA", "Le compteur"], answer: 1, explain: "Il détecte le courant qui fuit, par exemple à travers un corps." },
            { q: "Le disjoncteur des prises de la cuisine saute souvent. Bonne réaction ?", options: ["Le remplacer par un modèle plus puissant", "Chercher la cause : appareils trop nombreux sur ce circuit ou appareil défectueux", "Scotcher le levier en position haute"], answer: 1, explain: "Un disjoncteur plus gros ne protégerait plus le câble." },
            { q: "Que se passe-t-il quand on appuie sur le bouton « test » d’un différentiel en bon état ?", options: ["Rien", "Il coupe immédiatement", "Il augmente la puissance"], answer: 1, explain: "C’est la preuve qu’il fonctionne." },
            { q: "Pourquoi étiqueter chaque disjoncteur ?", options: ["Pour décorer", "Pour savoir immédiatement quel circuit couper", "C’est inutile"], answer: 1, explain: "Indispensable en cas d’urgence ou de travaux." },
          ],
        },
        {
          type: "case",
          title: "Le différentiel qui saute la nuit",
          story:
            "Chez Ines, l’interrupteur différentiel de la rangée du bas coupe plusieurs fois par semaine, souvent les nuits de pluie. Sur cette rangée : le congélateur du garage, l’éclairage extérieur et le lave-linge.",
          question: "Que suggère cette situation ?",
          options: [
            "Le différentiel est trop sensible, il faut le shunter",
            "Une fuite de courant liée à l’humidité, probablement sur un équipement extérieur (luminaire, boîte de connexion) ; faire rechercher le défaut par un électricien, en déconnectant les circuits un par un",
            "Il faut débrancher le congélateur définitivement",
          ],
          answer: 1,
          explain:
            "Un différentiel qui coupe signale une vraie fuite. Le lien avec la pluie oriente vers les équipements extérieurs. Shunter ou supprimer un différentiel revient à supprimer la protection des personnes.",
        },
        {
          type: "fiche",
          title: "Le tableau électrique",
          points: [
            "Rangées : un <b>différentiel 30 mA</b> en tête, puis des <b>disjoncteurs divisionnaires</b>, un par circuit, tous <b>étiquetés</b>.",
            "Différentiel = protège les <b>personnes</b> (fuite) ; disjoncteur = protège les <b>câbles</b> (surcharge, court-circuit).",
            "Types de différentiels (AC, A, F…) selon les appareils.",
            "<b>Parafoudre</b>, <b>contacteur heures creuses</b>, <b>délesteur</b>.",
            "Tester le différentiel régulièrement ; ne jamais surcalibrer un disjoncteur.",
          ],
          retenir: "Un disjoncteur qui saute, ce n’est pas une panne : c’est un message.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Circuits, câbles et couleurs",
      minutes: 17,
      objectives: ["Associer section de câble et calibre de disjoncteur", "Reconnaître les conducteurs et les circuits spécialisés"],
      steps: [
        {
          type: "lesson",
          title: "Les circuits d’une installation",
          slides: [
            {
              title: "Les couleurs des fils",
              body:
                "<div class='tiers'><div><b>Vert et jaune</b><span>La <b>terre</b>. Couleur réservée, jamais utilisée pour autre chose.</span></div><div><b>Bleu</b><span>Le <b>neutre</b>.</span></div><div><b>Rouge, marron, noir…</b><span>La <b>phase</b> (le conducteur « sous tension »).</span></div></div><p>Attention : dans une installation ancienne ou mal faite, les couleurs ne sont pas toujours respectées. On ne se fie jamais à une couleur pour décider qu’un fil est sans danger : on <b>vérifie l’absence de tension</b> avec un appareil adapté.</p>",
            },
            {
              title: "Section et calibre : les valeurs courantes",
              body:
                "<table class='t'><tr><th>Usage</th><th>Section du câble</th><th>Disjoncteur</th></tr><tr><td>Éclairage</td><td>1,5 mm²</td><td>16 A (ou 10 A)</td></tr><tr><td>Prises (jusqu’à 8 par circuit)</td><td>1,5 mm²</td><td>16 A</td></tr><tr><td>Prises (jusqu’à 12 par circuit)</td><td>2,5 mm²</td><td>20 A</td></tr><tr><td>Lave-linge, lave-vaisselle, four</td><td>2,5 mm²</td><td>20 A (circuit dédié)</td></tr><tr><td>Plaque de cuisson</td><td>6 mm²</td><td>32 A (circuit dédié)</td></tr></table><p>Règle d’or : le disjoncteur est choisi <b>en fonction du câble</b>, jamais l’inverse. Un 32 A sur un câble de 1,5 mm² laisserait le câble chauffer sans couper.</p>",
            },
            {
              title: "Les circuits spécialisés",
              body:
                "<p>Les gros appareils ont chacun leur <b>circuit dédié</b>, qui part directement du tableau :</p><ul><li>plaque de cuisson, four ;</li><li>lave-linge, sèche-linge, lave-vaisselle ;</li><li>chauffe-eau ;</li><li>congélateur (pour éviter qu’il soit coupé par un défaut sur un autre appareil) ;</li><li>chauffage, VMC, recharge de véhicule électrique.</li></ul><p>Ainsi, chaque appareil puissant dispose de la section de câble adaptée, et une panne sur un circuit n’affecte pas les autres.</p>",
            },
            {
              title: "Passer les câbles",
              body:
                "<ul><li>Les câbles passent dans des <b>gaines</b> (encastrées dans les murs, cloisons, plafonds) ou des <b>goulottes</b> en apparent.</li><li>Les connexions se font dans des <b>boîtes</b> accessibles, avec des bornes de connexion adaptées, jamais noyées dans un mur sans boîte.</li><li>On évite de percer à la verticale ou à l’horizontale des prises et interrupteurs : c’est là que passent généralement les gaines.</li><li>Un <b>détecteur</b> de câbles aide avant de percer, sans garantie absolue.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle section ?",
          instruction: "Associe chaque circuit à la section de câble habituelle.",
          categories: ["1,5 mm²", "2,5 mm²", "6 mm²"],
          items: [
            { text: "Éclairage du couloir", cat: 0, why: "Faible puissance." },
            { text: "Circuit dédié du lave-linge", cat: 1, why: "20 A, circuit spécialisé." },
            { text: "Plaque de cuisson à induction", cat: 2, why: "Forte puissance, 32 A." },
            { text: "Circuit de 10 prises du séjour", cat: 1, why: "Plus de 8 prises : 2,5 mm² sous 20 A." },
            { text: "Circuit de 5 prises d’une chambre", cat: 0, why: "Jusqu’à 8 prises en 1,5 mm² sous 16 A." },
            { text: "Four encastré", cat: 1, why: "Circuit dédié 20 A." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fil vert et jaune", back: "La terre, couleur strictement réservée." },
            { front: "Fil bleu", back: "Le neutre." },
            { front: "1,5 mm² / 16 A", back: "Éclairage, ou jusqu’à 8 prises." },
            { front: "2,5 mm² / 20 A", back: "Jusqu’à 12 prises, ou un gros appareil sur circuit dédié." },
            { front: "6 mm² / 32 A", back: "Plaque de cuisson, circuit dédié." },
            { front: "Règle d’or", back: "On choisit le disjoncteur en fonction du câble, jamais l’inverse." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un ancien propriétaire a mis un disjoncteur 32 A sur un circuit de prises en 1,5 mm². Risque ?", options: ["Aucun", "Le câble peut surchauffer sans que le disjoncteur coupe : risque d’incendie", "Les prises seront plus puissantes"], answer: 1, explain: "Le disjoncteur doit protéger le câble." },
            { q: "Quel est le fil de neutre ?", options: ["Le vert et jaune", "Le bleu", "Le rouge"], answer: 1, explain: "Mais on vérifie toujours l’absence de tension avant de toucher." },
            { q: "Pourquoi un circuit dédié pour le congélateur ?", options: ["Pour qu’il ne soit pas coupé par un défaut sur un autre appareil", "Pour qu’il consomme moins", "Pour la couleur"], answer: 0, explain: "Une coupure prolongée gâcherait son contenu." },
            { q: "Où éviter de percer dans un mur ?", options: ["Au milieu d’un grand mur vide", "À la verticale et à l’horizontale des prises et interrupteurs", "Il n’y a pas de règle"], answer: 1, explain: "C’est le trajet habituel des gaines." },
          ],
        },
        {
          type: "case",
          title: "La cuisine refaite",
          story:
            "Camille fait poser une plaque à induction de 7 200 W et un four. L’installateur de cuisine propose de « repiquer » la plaque et le four sur le circuit de prises existant, en 2,5 mm², « pour gagner du temps ».",
          question: "Que doit faire Camille ?",
          options: [
            "Accepter, 2,5 mm², c’est déjà gros",
            "Refuser : la plaque exige un circuit dédié en 6 mm² sous 32 A et le four un circuit dédié en 2,5 mm² sous 20 A, réalisés par un électricien depuis le tableau",
            "Mettre la plaque sur une multiprise",
          ],
          answer: 1,
          explain:
            "7 200 W ÷ 230 V ≈ 31 A : bien trop pour un circuit de prises. Un repiquage surchargerait le câble. Les circuits spécialisés sont là pour ça.",
        },
        {
          type: "fiche",
          title: "Circuits et câbles",
          points: [
            "Couleurs : <b>vert-jaune</b> = terre, <b>bleu</b> = neutre, autres = phase ; toujours vérifier l’absence de tension.",
            "<b>1,5 mm²</b> / 16 A (éclairage, 8 prises max) ; <b>2,5 mm²</b> / 20 A (12 prises, gros appareils) ; <b>6 mm²</b> / 32 A (plaque).",
            "Disjoncteur choisi <b>selon le câble</b>.",
            "<b>Circuits dédiés</b> pour les gros appareils.",
            "Gaines, boîtes de connexion accessibles ; percer loin des axes des prises.",
          ],
          retenir: "Le câble décide, le disjoncteur obéit.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Pièce par pièce",
      minutes: 16,
      objectives: ["Connaître les principales règles d’équipement des pièces", "Comprendre les zones de sécurité de la salle de bains"],
      steps: [
        {
          type: "lesson",
          title: "Équiper chaque pièce",
          slides: [
            {
              title: "Les minimums de prises",
              body:
                "<table class='t'><tr><th>Pièce</th><th>Prises (minimum courant)</th></tr><tr><td>Séjour</td><td>5, et davantage selon la surface</td></tr><tr><td>Chambre</td><td>3</td></tr><tr><td>Cuisine</td><td>6, dont 4 au-dessus du plan de travail (moins dans les très petites cuisines)</td></tr><tr><td>Autres pièces de plus de 4 m²</td><td>1</td></tr></table><p>Chaque prise de 16 A doit avoir une <b>borne de terre</b> et des <b>éclipses</b> (obturateurs) qui protègent les enfants. Ajoute toujours plus de prises que le minimum : les multiprises sont la première source d’usage dangereux.</p>",
            },
            {
              title: "La cuisine",
              body:
                "<ul><li>Pas de prise <b>au-dessus de l’évier</b> ni de la plaque de cuisson (sauf celle de la hotte, en hauteur).</li><li>Les prises du plan de travail sont décalées de l’évier.</li><li>Circuits dédiés : plaque, four, lave-vaisselle, lave-linge éventuel, congélateur.</li><li>Un éclairage au-dessus du plan de travail améliore la sécurité de découpe.</li></ul>",
            },
            {
              title: "La salle de bains : les volumes",
              body:
                "<p>La salle de bains est découpée en <b>volumes</b> autour de la baignoire ou de la douche :</p><div class='tiers'><div><b>Volume 0</b><span>L’intérieur de la baignoire ou du bac : aucun appareil sauf en très basse tension de sécurité.</span></div><div><b>Volume 1</b><span>Au-dessus, jusqu’à une certaine hauteur : uniquement des appareils spécialement protégés (très basse tension, chauffe-eau adapté…).</span></div><div><b>Volume 2</b><span>Une bande de 60 cm autour : luminaires et appareils de classe adaptée, pas de prise classique.</span></div></div><p>Au-delà, les prises sont permises, protégées par un différentiel 30 mA. La <b>liaison équipotentielle</b> relie les éléments métalliques.</p>",
            },
            {
              title: "L’extérieur",
              body:
                "<ul><li>Les équipements extérieurs doivent avoir un <b>indice de protection (IP)</b> adapté : le premier chiffre indique la protection contre les poussières, le second contre l’eau (IP44 : protégé contre les projections, IP65 : contre les jets).</li><li>Les câbles enterrés sont posés dans des gaines adaptées, à une profondeur suffisante, avec un grillage avertisseur rouge au-dessus.</li><li>Les prises extérieures sont protégées par un différentiel 30 mA.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Prises minimum", back: "Séjour 5+, chambre 3, cuisine 6 dont 4 au-dessus du plan de travail." },
            { front: "Éclipses", back: "Obturateurs qui empêchent d’introduire un objet dans les alvéoles d’une prise." },
            { front: "Volume 0", back: "Intérieur de la baignoire ou du bac : aucun appareil sauf très basse tension." },
            { front: "Volume 2", back: "Bande de 60 cm autour de la baignoire ou de la douche : pas de prise classique." },
            { front: "Indice IP", back: "Protection contre poussières (1er chiffre) et eau (2e chiffre)." },
            { front: "Grillage avertisseur rouge", back: "Posé au-dessus d’un câble électrique enterré pour le signaler." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Peut-on installer une prise classique juste au-dessus de l’évier ?", options: ["Oui", "Non", "Seulement si elle est blanche"], answer: 1, explain: "Eau et électricité ne font pas bon ménage." },
            { q: "Un sèche-serviettes électrique se place dans la salle de bains…", options: ["Dans le volume 0", "Hors des volumes interdits pour son type d’appareil, en respectant les règles du fabricant et de la norme", "N’importe où"], answer: 1, explain: "Chaque appareil a ses volumes autorisés." },
            { q: "Que signifie IP65 sur un projecteur extérieur ?", options: ["Qu’il est protégé contre la poussière et les jets d’eau", "Qu’il consomme 65 W", "Qu’il est fabriqué en 1965"], answer: 0, explain: "Le 6 vise la poussière, le 5 les jets d’eau." },
            { q: "Pourquoi prévoir plus de prises que le minimum ?", options: ["Pour décorer", "Pour éviter les multiprises en cascade, source de surchauffe", "Ce n’est pas utile"], answer: 1, explain: "Les usages électriques augmentent sans cesse." },
          ],
        },
        {
          type: "case",
          title: "Le chargeur au bord de la baignoire",
          story:
            "Pour écouter de la musique dans son bain, Enzo branche son téléphone sur une rallonge posée sur le rebord de la baignoire.",
          question: "Qu’en penser ?",
          options: [
            "Aucun risque, un chargeur, c’est faible",
            "C’est dangereux : un appareil branché sur le secteur ne doit jamais se trouver à portée de la baignoire ; mieux vaut une enceinte sur batterie placée loin de l’eau, ou une installation conçue pour la salle de bains",
            "C’est sans danger si la rallonge est neuve",
          ],
          answer: 1,
          explain:
            "Le chargeur lui-même est raccordé au 230 V. Une chute dans l’eau peut provoquer une électrisation grave. Les volumes de la salle de bains existent précisément pour éviter ce scénario.",
        },
        {
          type: "fiche",
          title: "Pièce par pièce",
          points: [
            "Minimums : séjour 5+, chambre 3, cuisine 6 (dont 4 sur le plan de travail) ; prises avec <b>terre</b> et <b>éclipses</b>.",
            "Cuisine : pas de prise au-dessus de l’évier ni de la plaque.",
            "Salle de bains : <b>volumes 0, 1, 2</b> ; prises classiques hors volumes ; liaison équipotentielle.",
            "Extérieur : indice <b>IP</b> adapté, câbles enterrés en gaine avec grillage rouge, différentiel 30 mA.",
          ],
          retenir: "Plus il y a d’eau près de l’appareil, plus les règles sont strictes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Travailler en sécurité et respecter les règles",
      minutes: 17,
      objectives: ["Connaître les étapes de mise hors tension", "Savoir quand faire appel à un professionnel et quelles attestations existent"],
      steps: [
        {
          type: "lesson",
          title: "Les règles du jeu",
          slides: [
            {
              title: "On ne travaille jamais sous tension",
              body:
                "<p>Avant toute intervention, même pour changer un luminaire :</p><ol><li><b>Couper</b> le circuit concerné au tableau (ou le disjoncteur général en cas de doute).</li><li><b>Empêcher la remise sous tension</b> : prévenir les autres occupants, verrouiller ou signaler le disjoncteur coupé.</li><li><b>Vérifier l’absence de tension</b> avec un appareil adapté (vérificateur d’absence de tension), sur tous les conducteurs.</li></ol><p>Un simple tournevis testeur ne suffit pas à garantir l’absence de tension. Et un interrupteur éteint ne coupe pas forcément la phase.</p>",
            },
            {
              title: "Professionnels : l’habilitation",
              body:
                "<ul><li>En entreprise, toute personne qui travaille sur ou à proximité d’installations électriques doit avoir une <b>habilitation électrique</b>, délivrée par l’employeur après une formation (référence : norme NF C 18-510).</li><li>Les niveaux d’habilitation dépendent des tâches : simple travail à proximité, interventions élémentaires, travaux d’électricien…</li><li>Une entreprise qui fait travailler un salarié non habilité sur une installation électrique engage sa responsabilité.</li></ul>",
            },
            {
              title: "Faire ou faire faire ?",
              body:
                "<p>Un particulier peut légalement réaliser des travaux électriques chez lui, mais il en porte la responsabilité, et son assurance peut contester un sinistre causé par une installation non conforme.</p><table class='t'><tr><th>Plutôt accessible</th><th>Plutôt pour un électricien</th></tr><tr><td>Changer une ampoule, un luminaire, une prise à l’identique, hors tension</td><td>Tableau, nouveaux circuits, salle de bains, extérieur, recharge de véhicule, installation ancienne à remettre en sécurité, tout ce dont tu n’es pas sûr</td></tr></table><p>Le doute est une réponse : <b>en cas de doute, on ne touche pas</b>.</p>",
            },
            {
              title: "Les attestations et diagnostics",
              body:
                "<ul><li><b>Attestation Consuel</b> : obligatoire pour mettre en service une installation neuve, une installation entièrement rénovée ayant nécessité une coupure par le gestionnaire de réseau, ou une installation de production (panneaux solaires).</li><li><b>Diagnostic électricité</b> : obligatoire pour vendre ou louer un logement dont l’installation a <b>plus de 15 ans</b>. Validité : <b>3 ans</b> pour une vente, <b>6 ans</b> pour une location.</li><li>La norme <b>NF C 15-100</b> a été révisée : la nouvelle édition (2024) s’applique depuis septembre 2025 en rénovation et depuis avril 2026 dans le neuf.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Accessible ou pour un pro ?",
          instruction: "Pour un particulier sans formation, classe chaque travail.",
          categories: ["Accessible, hors tension", "À confier à un électricien"],
          items: [
            { text: "Remplacer une ampoule grillée", cat: 0, why: "Geste simple, lampe éteinte." },
            { text: "Ajouter un circuit au tableau pour une plaque de cuisson", cat: 1, why: "Tableau et circuit spécialisé." },
            { text: "Installer une borne de recharge de voiture", cat: 1, why: "Installation spécifique, installateur qualifié." },
            { text: "Remplacer un luminaire au plafond par un modèle équivalent, circuit coupé et vérifié", cat: 0, why: "Accessible avec les bonnes précautions." },
            { text: "Remettre aux normes une installation des années 1970", cat: 1, why: "Diagnostic et travaux complets." },
            { text: "Déplacer une prise dans la salle de bains", cat: 1, why: "Volumes de sécurité à respecter." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Couper, condamner, vérifier", back: "Les trois réflexes avant toute intervention : couper le circuit, empêcher la remise sous tension, vérifier l’absence de tension." },
            { front: "Vérificateur d’absence de tension", back: "Appareil qui confirme qu’un conducteur n’est plus sous tension ; le tournevis testeur ne suffit pas." },
            { front: "Habilitation électrique", back: "Autorisation donnée par l’employeur après formation pour travailler sur ou près d’installations électriques." },
            { front: "Attestation Consuel", back: "Obligatoire pour une installation neuve, entièrement rénovée ou de production avant mise en service." },
            { front: "Diagnostic électricité", back: "Vente ou location si installation de plus de 15 ans ; valable 3 ans (vente) ou 6 ans (location)." },
            { front: "NF C 15-100", back: "Norme des installations électriques basse tension ; nouvelle édition 2024, appliquée depuis 2025-2026." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pour changer une prise, tu as éteint l’interrupteur de la pièce. Est-ce suffisant ?", options: ["Oui", "Non : il faut couper le circuit au tableau et vérifier l’absence de tension", "Oui si tu vas vite"], answer: 1, explain: "L’interrupteur d’éclairage ne coupe pas les prises." },
            { q: "Ton employé doit réarmer des disjoncteurs dans un local technique. Que lui faut-il ?", options: ["Rien", "Une habilitation électrique adaptée délivrée après formation", "Un permis de conduire"], answer: 1, explain: "C’est une obligation de l’employeur." },
            { q: "Tu vends un appartement dont l’installation date de 2005. Diagnostic électricité ?", options: ["Oui, l’installation a plus de 15 ans", "Non", "Seulement si l’acheteur le demande"], answer: 0, explain: "Plus de 15 ans : obligatoire, valable 3 ans pour une vente." },
            { q: "Quand l’attestation Consuel est-elle obligatoire ?", options: ["À chaque changement d’ampoule", "Pour mettre en service une installation neuve, entièrement rénovée ou de production", "Jamais"], answer: 1, explain: "Le gestionnaire de réseau l’exige avant de mettre sous tension." },
          ],
        },
        {
          type: "case",
          title: "Le luminaire du salon",
          story:
            "Karim veut remplacer le lustre du salon. Il éteint l’interrupteur, monte sur une chaise et commence à dévisser les dominos. Sa colocataire, qui ne sait rien, rallume la lumière en passant.",
          question: "Qu’aurait dû faire Karim ?",
          options: [
            "Travailler plus vite",
            "Couper le circuit d’éclairage au tableau, empêcher la remise sous tension (prévenir, signaler le disjoncteur), vérifier l’absence de tension avec un appareil adapté, et utiliser un escabeau stable plutôt qu’une chaise",
            "Porter des chaussures de sport",
          ],
          answer: 1,
          explain:
            "Couper, condamner, vérifier : ces trois étapes évitent exactement ce scénario. La chute depuis une chaise est un second risque à ne pas négliger.",
        },
        {
          type: "fiche",
          title: "Sécurité et règles",
          points: [
            "Jamais sous tension : <b>couper</b>, <b>condamner</b>, <b>vérifier l’absence de tension</b>.",
            "Professionnels : <b>habilitation électrique</b> obligatoire (NF C 18-510).",
            "Particulier : responsable de ses travaux ; tableau, circuits, salle de bains, recharge → <b>électricien</b>.",
            "<b>Consuel</b> (neuf, rénovation totale, production) ; <b>diagnostic</b> si plus de 15 ans (3 ans vente, 6 ans location).",
            "<b>NF C 15-100</b> révisée en 2024, appliquée depuis 2025-2026.",
          ],
          retenir: "En cas de doute, on ne touche pas.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Les équipements d’aujourd’hui",
      minutes: 16,
      objectives: ["Comprendre la recharge de véhicule et l’autoconsommation solaire", "Savoir réduire sa consommation et lire sa facture"],
      steps: [
        {
          type: "lesson",
          title: "La maison électrique moderne",
          slides: [
            {
              title: "Recharger une voiture électrique",
              body:
                "<table class='t'><tr><th>Solution</th><th>Puissance typique</th><th>Pour qui</th></tr><tr><td>Prise domestique classique</td><td>Faible, recharge très lente</td><td>Dépannage occasionnel, pas un usage quotidien</td></tr><tr><td>Prise renforcée</td><td>Environ 3,7 kW</td><td>Petits trajets quotidiens</td></tr><tr><td>Borne murale (wallbox)</td><td>7,4 kW et plus</td><td>Usage régulier, recharge en une nuit</td></tr></table><p>Une borne de plus de 3,7 kW doit être installée par un <b>installateur qualifié IRVE</b>, sur un circuit dédié avec la protection différentielle adaptée. Une recharge quotidienne sur une prise ordinaire fatigue l’installation et peut provoquer un échauffement.</p>",
            },
            {
              title: "Produire son électricité",
              body:
                "<ul><li>Les <b>panneaux photovoltaïques</b> transforment la lumière en électricité.</li><li>En <b>autoconsommation</b>, on consomme d’abord sa propre production ; le surplus peut être revendu au réseau.</li><li>L’installation nécessite une déclaration, un raccordement et une <b>attestation Consuel</b>.</li><li>Pour en profiter, on décale les gros usages vers les heures de production (lave-linge, chauffe-eau, recharge en journée).</li></ul>",
            },
            {
              title: "Consommer moins",
              body:
                "<ul><li><b>Éclairage LED</b> : il consomme beaucoup moins qu’une ampoule à incandescence pour la même lumière.</li><li><b>Veilles</b> : les appareils en veille consomment en permanence ; une multiprise à interrupteur les coupe d’un geste.</li><li><b>Chauffe-eau</b> : le faire chauffer en heures creuses, régler la température raisonnablement.</li><li><b>Pilotage</b> : programmateurs, thermostats et domotique ajustent le chauffage à la présence.</li><li><b>Étiquette énergie</b> : à l’achat, comparer la consommation annuelle des appareils.</li></ul>",
            },
            {
              title: "Lire sa facture",
              body:
                "<ul><li>L’<b>abonnement</b> : part fixe qui dépend de la puissance souscrite (kVA).</li><li>La <b>consommation</b> : nombre de kWh multiplié par le prix du kWh, parfois différent selon les heures (heures pleines / heures creuses) ou les jours.</li><li>Les <b>taxes et contributions</b>.</li></ul><p>Le bon réflexe : vérifier que la puissance souscrite correspond aux usages réels. Trop basse, ça disjoncte ; trop haute, on paie un abonnement inutilement cher.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Prise renforcée", back: "Prise adaptée à la recharge quotidienne d’un véhicule, environ 3,7 kW." },
            { front: "Installateur IRVE", back: "Qualification exigée pour installer une borne de recharge de plus de 3,7 kW." },
            { front: "Autoconsommation", back: "Consommer d’abord l’électricité qu’on produit soi-même (solaire)." },
            { front: "Veille", back: "Consommation permanente des appareils non éteints." },
            { front: "Heures creuses", back: "Plages horaires où le kWh est moins cher dans certaines offres." },
            { front: "Puissance souscrite", back: "Puissance de l’abonnement en kVA : à ajuster aux usages réels." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Sofia achète une voiture électrique et roule 60 km par jour. Quelle solution de recharge à domicile ?", options: ["Une multiprise", "Une prise renforcée ou une borne, installée sur un circuit dédié par un professionnel", "Une rallonge depuis la cuisine"], answer: 1, explain: "La recharge quotidienne sollicite fortement l’installation." },
            { q: "Avec des panneaux solaires en autoconsommation, quand lancer le lave-linge ?", options: ["La nuit", "En journée, pendant la production", "Peu importe"], answer: 1, explain: "On consomme ainsi sa propre production." },
            { q: "Ton abonnement est de 12 kVA mais ta consommation n’appelle jamais plus de 6 kW. Que faire ?", options: ["Rien", "Envisager de baisser la puissance souscrite pour réduire l’abonnement", "Monter à 15 kVA"], answer: 1, explain: "Un abonnement surdimensionné coûte plus cher sans bénéfice." },
            { q: "Quel geste réduit la consommation des appareils en veille ?", options: ["Les débrancher ou utiliser une multiprise à interrupteur", "Les laisser allumés", "Changer de fournisseur"], answer: 0, explain: "La veille consomme en continu." },
          ],
        },
        {
          type: "case",
          title: "La borne pas chère",
          story:
            "Théo trouve en ligne une borne de recharge de 7,4 kW à prix cassé. Son beau-frère, bricoleur, propose de la brancher sur la prise du garage « avec un câble plus gros ». Théo pense que ça lui économisera l’installateur.",
          question: "Qu’en penser ?",
          options: [
            "Bonne idée, c’est la même chose",
            "Une borne de plus de 3,7 kW doit être posée par un installateur qualifié IRVE sur un circuit dédié avec la protection adaptée ; une installation improvisée expose à un échauffement, peut poser problème avec l’assurance et prive des aides éventuelles",
            "Il suffit de mettre un disjoncteur plus gros sur la prise du garage",
          ],
          answer: 1,
          explain:
            "7,4 kW, c’est environ 32 A pendant des heures, chaque nuit. C’est l’un des usages les plus exigeants d’une maison : le circuit doit être conçu pour.",
        },
        {
          type: "fiche",
          title: "Les équipements d’aujourd’hui",
          points: [
            "Recharge : <b>prise renforcée</b> (3,7 kW) ou <b>borne</b> (7,4 kW et plus, installateur <b>IRVE</b>), circuit dédié.",
            "<b>Solaire</b> en autoconsommation : Consuel, décaler les usages en journée.",
            "Économies : <b>LED</b>, couper les <b>veilles</b>, <b>heures creuses</b>, pilotage du chauffage.",
            "Facture : <b>abonnement</b> (kVA) + <b>kWh</b> + taxes ; ajuster la puissance souscrite.",
          ],
          retenir: "Recharger une voiture chaque nuit, c’est un vrai circuit, pas une rallonge.",
        },
      ],
    },
  ],
});
