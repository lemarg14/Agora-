/* ============================================================
   COURS : Bien manger — les fondations
   Le Restaurant — Nutrition & Cuisine · 8 séances de 15-20 min
   Énergie, macronutriments, micronutriments, étiquettes,
   repères du Programme national nutrition santé (PNNS),
   régimes et idées reçues, sucre / sel / alcool, organisation
   au quotidien. Repères : ANSES, Santé publique France
   (mangerbouger.fr), OMS. Information générale qui ne
   remplace pas l'avis d'un médecin ou d'un diététicien.
   ============================================================ */
AGORA.registerCourse({
  id: "nutrition-bases",
  faculty: "nutrition",
  title: "Bien manger — les fondations",
  subtitle: "Comprendre ce que l’on mange et composer des repas équilibrés, sans régime",
  color: "#6f8f2a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre l’alimentation sans dogme : l’énergie et les besoins, les glucides, protéines et lipides, les vitamines et minéraux, lire une étiquette et le Nutri-Score, les repères officiels pour composer ses repas, démêler les régimes à la mode, le sucre, le sel et l’alcool, puis s’organiser au quotidien. Ce cours donne des repères généraux : pour une maladie, une grossesse, un trouble alimentaire ou un objectif particulier, l’avis d’un médecin ou d’un diététicien est indispensable.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "L’énergie et les besoins",
      minutes: 15,
      objectives: ["Comprendre d’où vient et où va l’énergie", "Savoir ce qui fait varier les besoins"],
      steps: [
        {
          type: "lesson",
          title: "Les calories, sans obsession",
          slides: [
            {
              title: "Qu’est-ce qu’une calorie ?",
              body:
                "<p>Une <b>kilocalorie</b> (kcal, souvent appelée « calorie ») est une unité d’énergie. Les aliments en apportent, le corps en dépense.</p><table class='t'><tr><th>Nutriment</th><th>Énergie</th></tr><tr><td>Glucides</td><td>4 kcal par gramme</td></tr><tr><td>Protéines</td><td>4 kcal par gramme</td></tr><tr><td>Lipides (graisses)</td><td>9 kcal par gramme</td></tr><tr><td>Alcool</td><td>7 kcal par gramme</td></tr></table><p>Les graisses sont donc les plus « denses » en énergie, et l’alcool apporte beaucoup d’énergie sans nutriments utiles.</p>",
            },
            {
              title: "Où part l’énergie",
              body:
                "<ul><li>Le <b>métabolisme de base</b> : faire fonctionner le cœur, le cerveau, les organes au repos. C’est la plus grosse part, environ <b>60 à 70 %</b> de la dépense.</li><li>La <b>digestion</b> : environ 10 % (un peu plus pour les protéines).</li><li>L’<b>activité physique</b> : sport, mais aussi marche, escaliers, travail physique, gestes du quotidien. C’est la part la plus variable d’une personne à l’autre.</li></ul><p>Repère très général : un adulte dépense souvent entre <b>1 800 et 3 000 kcal par jour</b>, selon son sexe, son âge, sa taille, sa masse musculaire et son activité.</p>",
            },
            {
              title: "La balance énergétique",
              body:
                "<ul><li>Apports supérieurs aux dépenses sur la durée : le corps <b>stocke</b> (surtout sous forme de graisse).</li><li>Apports inférieurs : il <b>puise</b> dans ses réserves.</li><li>Mais le corps n’est pas une calculatrice : l’appétit, le sommeil, le stress, les hormones, certains médicaments et la qualité des aliments influencent les apports et les dépenses.</li><li>Les étiquettes et les applications donnent des <b>estimations</b>, avec une marge d’erreur importante.</li></ul>",
            },
            {
              title: "La qualité compte autant que la quantité",
              body:
                "<p>500 kcal de soda et 500 kcal d’un repas avec légumes, féculents complets et protéines n’ont pas le même effet sur la <b>satiété</b>, la santé et l’énergie de la journée.</p><ul><li>Les aliments riches en <b>fibres</b> et en <b>protéines</b> rassasient davantage.</li><li>Les aliments très <b>transformés</b>, faciles à manger vite, poussent souvent à manger plus.</li><li>Pour la plupart des gens, apprendre à composer de bons repas est plus utile et plus durable que compter les calories.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Glucides et protéines", back: "4 kcal par gramme" },
            { front: "Lipides", back: "9 kcal par gramme" },
            { front: "Alcool", back: "7 kcal par gramme, sans nutriments utiles" },
            { front: "Métabolisme de base", back: "Environ 60 à 70 % de la dépense : faire fonctionner le corps au repos" },
            { front: "Part la plus variable de la dépense", back: "L’activité physique (sport et mouvements du quotidien)" },
            { front: "Ce qui rassasie le plus", back: "Les fibres et les protéines" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel nutriment apporte le plus d’énergie par gramme ?", options: ["Les protéines", "Les lipides", "Les glucides"], answer: 1, explain: "9 kcal/g contre 4 pour les deux autres." },
            { q: "Quelle est la plus grande part de la dépense d’énergie ?", options: ["Le sport", "Le métabolisme de base", "La digestion"], answer: 1, explain: "Le corps dépense beaucoup simplement pour fonctionner." },
            { q: "Un aliment de 300 kcal contient 10 g de lipides. Combien de kcal viennent des lipides ?", options: ["40", "90", "10"], answer: 1, explain: "10 × 9 = 90 kcal." },
            { q: "Pourquoi un repas riche en fibres et en protéines est-il intéressant ?", options: ["Il rassasie davantage", "Il n’apporte aucune calorie", "Il se digère instantanément"], answer: 0, explain: "La satiété aide à réguler les apports naturellement." },
          ],
        },
        {
          type: "case",
          title: "Le grignotage liquide",
          story:
            "Hugo ne comprend pas pourquoi il prend du poids : il mange « normalement ». En notant sa journée, il découvre qu’il boit 1,5 litre de soda et 2 cafés sucrés au lait aromatisé, en plus de ses repas.",
          question: "Qu’apprend-il ?",
          options: [
            "Les boissons ne comptent pas",
            "Les boissons sucrées apportent beaucoup d’énergie (environ 600 kcal pour 1,5 L de soda classique) sans rassasier ; les remplacer par de l’eau ou des versions sans sucre ajouté a souvent un effet important",
            "Il doit arrêter de manger le midi",
          ],
          answer: 1,
          explain:
            "Les calories liquides passent inaperçues car elles ne déclenchent presque pas de satiété. C’est souvent le premier levier à regarder.",
        },
        {
          type: "fiche",
          title: "Énergie",
          points: [
            "kcal : <b>glucides et protéines 4</b>, <b>lipides 9</b>, <b>alcool 7</b> par gramme.",
            "Dépense : <b>métabolisme de base</b> (60-70 %), digestion (~10 %), <b>activité</b> (la plus variable).",
            "Balance énergétique sur la durée, mais influencée par l’appétit, le sommeil, le stress ; les chiffres sont des estimations.",
            "<b>Qualité</b> : fibres et protéines rassasient ; boissons sucrées et ultra-transformés poussent à manger plus.",
          ],
          retenir: "Composer de bons repas est plus durable que compter chaque calorie.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Glucides, protéines, lipides",
      minutes: 17,
      objectives: ["Connaître le rôle et les sources des macronutriments", "Connaître les repères de répartition"],
      steps: [
        {
          type: "lesson",
          title: "Les trois familles",
          slides: [
            {
              title: "Les glucides",
              body:
                "<ul><li>Le <b>carburant</b> principal du cerveau et des muscles à l’effort.</li><li><b>Glucides complexes</b> (amidon) : pain, pâtes, riz, pommes de terre, légumineuses. Les versions <b>complètes</b> apportent plus de fibres, de vitamines et de minéraux.</li><li><b>Sucres</b> : naturellement présents dans les fruits et le lait, ou <b>ajoutés</b> (sucre, sirops, sodas, confiseries) : ce sont les sucres ajoutés qu’il faut limiter.</li><li><b>Fibres</b> : non digérées, elles nourrissent le microbiote intestinal, rassasient et régulent le transit. Repère : <b>30 g par jour</b> ; la plupart des Français en mangent moins.</li></ul>",
            },
            {
              title: "Les protéines",
              body:
                "<ul><li>Elles construisent et réparent les <b>muscles</b>, la peau, les os, les anticorps, les enzymes.</li><li>Sources <b>animales</b> : viande, poisson, œufs, produits laitiers.</li><li>Sources <b>végétales</b> : légumineuses (lentilles, pois chiches, haricots), tofu, céréales, fruits à coque. Associer légumineuses et céréales (riz-lentilles, semoule-pois chiches) donne un bon équilibre.</li><li>Repère pour un adulte : environ <b>0,8 g par kg</b> de poids et par jour au minimum ; davantage pour les sportifs de force (autour de 1,6 g/kg) et les personnes âgées.</li></ul>",
            },
            {
              title: "Les lipides",
              body:
                "<ul><li>Indispensables : énergie, membranes des cellules, hormones, absorption des vitamines A, D, E, K.</li><li><b>À privilégier</b> : les acides gras insaturés : huiles de colza et d’olive, noix, amandes, poissons gras (sardine, maquereau, saumon), riches en <b>oméga-3</b>.</li><li><b>À limiter</b> : les graisses saturées en excès (charcuterie, fromages en grande quantité, beurre, viennoiseries, produits frits).</li><li>Les acides gras <b>trans</b> industriels sont à éviter ; leur usage est aujourd’hui fortement limité en Europe.</li></ul>",
            },
            {
              title: "La répartition conseillée",
              body:
                "<p>Repères de l’ANSES pour un adulte, en part de l’énergie totale :</p><table class='t'><tr><th>Nutriment</th><th>Part de l’énergie</th></tr><tr><td>Glucides</td><td>40 à 55 %</td></tr><tr><td>Lipides</td><td>35 à 40 %</td></tr><tr><td>Protéines</td><td>10 à 20 %</td></tr></table><p>Ces fourchettes sont larges : il n’existe pas une seule bonne répartition. La qualité des sources (complètes, insaturées, peu transformées) compte davantage que le pourcentage exact.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel nutriment principal ?",
          instruction: "Quel est le nutriment majoritaire de chaque aliment ?",
          categories: ["Glucides", "Protéines", "Lipides"],
          items: [
            { text: "Riz", cat: 0, why: "Riche en amidon." },
            { text: "Blanc de poulet", cat: 1, why: "Protéines animales." },
            { text: "Huile d’olive", cat: 2, why: "100 % lipides." },
            { text: "Pain complet", cat: 0, why: "Glucides complexes et fibres." },
            { text: "Noix", cat: 2, why: "Riches en bonnes graisses (et en protéines)." },
            { text: "Œufs", cat: 1, why: "Protéines (et lipides du jaune)." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Glucides complexes", back: "Amidon : pain, pâtes, riz, pommes de terre, légumineuses" },
            { front: "Fibres", back: "Repère : 30 g par jour ; rassasient, nourrissent le microbiote" },
            { front: "Protéines (adulte)", back: "Au moins 0,8 g/kg/jour ; plus pour sportifs de force et seniors" },
            { front: "Association végétale", back: "Légumineuses + céréales : riz-lentilles, semoule-pois chiches" },
            { front: "Bonnes graisses", back: "Huiles de colza et d’olive, noix, poissons gras (oméga-3)" },
            { front: "Répartition ANSES", back: "Glucides 40-55 %, lipides 35-40 %, protéines 10-20 %" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel sucre faut-il surtout limiter ?", options: ["Le sucre naturellement présent dans une pomme", "Les sucres ajoutés (sodas, confiseries, sirops)", "L’amidon du pain"], answer: 1, explain: "Les fruits apportent aussi fibres, vitamines et eau." },
            { q: "Quelle huile est riche en oméga-3 ?", options: ["L’huile de colza", "L’huile de palme", "Le beurre"], answer: 0, explain: "Colza et noix sont de bonnes sources végétales." },
            { q: "Les lipides représentent combien de l’énergie selon l’ANSES ?", options: ["5 à 10 %", "35 à 40 %", "70 %"], answer: 1, explain: "Ils ne sont pas l’ennemi : c’est leur qualité qui compte." },
            { q: "Une personne de 70 kg a besoin au minimum d’environ…", options: ["20 g de protéines par jour", "56 g de protéines par jour", "300 g"], answer: 1, explain: "70 × 0,8 = 56 g." },
          ],
        },
        {
          type: "case",
          title: "La chasse au gras",
          story:
            "Sofia a supprimé toutes les matières grasses : plus d’huile, plus de noix, yaourts 0 %. Elle a souvent faim, grignote des biscuits « allégés » et se sent fatiguée.",
          question: "Que lui conseiller ?",
          options: [
            "Supprimer aussi les glucides",
            "Réintroduire des graisses de qualité (une à deux cuillères d’huile de colza ou d’olive par repas, une petite poignée de noix par jour, poisson gras), qui rassasient, et réduire les produits allégés transformés",
            "Ne manger que des fruits",
          ],
          answer: 1,
          explain:
            "Les lipides sont indispensables et participent à la satiété. Les produits « allégés » remplacent souvent le gras par du sucre ou des additifs.",
        },
        {
          type: "fiche",
          title: "Macronutriments",
          points: [
            "<b>Glucides</b> : carburant ; privilégier les <b>complets</b>, limiter les <b>sucres ajoutés</b> ; <b>30 g de fibres</b> par jour.",
            "<b>Protéines</b> : animales et végétales (légumineuses + céréales) ; ≥ <b>0,8 g/kg</b>/jour.",
            "<b>Lipides</b> : indispensables ; privilégier <b>colza, olive, noix, poissons gras</b> ; limiter saturés en excès.",
            "ANSES : glucides <b>40-55 %</b>, lipides <b>35-40 %</b>, protéines <b>10-20 %</b>.",
          ],
          retenir: "Aucun nutriment n’est l’ennemi : c’est la qualité des sources qui fait la différence.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Vitamines, minéraux et eau",
      minutes: 15,
      objectives: ["Connaître le rôle des principaux micronutriments", "Savoir quand une supplémentation est utile"],
      steps: [
        {
          type: "lesson",
          title: "Les petits nutriments essentiels",
          slides: [
            {
              title: "Les vitamines et minéraux clés",
              body:
                "<table class='t'><tr><th>Nutriment</th><th>Rôle</th><th>Sources</th></tr><tr><td><b>Fer</b></td><td>Transport de l’oxygène</td><td>Viande rouge, boudin, légumineuses, épinards (moins bien absorbé)</td></tr><tr><td><b>Calcium</b></td><td>Os, muscles</td><td>Produits laitiers, eaux minérales calciques, amandes, choux</td></tr><tr><td><b>Vitamine D</b></td><td>Os, immunité</td><td>Soleil, poissons gras, œufs</td></tr><tr><td><b>Vitamine C</b></td><td>Immunité, absorption du fer</td><td>Agrumes, kiwi, poivron, choux</td></tr><tr><td><b>Vitamine B12</b></td><td>Nerfs, globules rouges</td><td>Uniquement produits animaux</td></tr><tr><td><b>Iode</b></td><td>Thyroïde</td><td>Poissons, fruits de mer, sel iodé</td></tr></table>",
            },
            {
              title: "Les carences les plus fréquentes",
              body:
                "<ul><li><b>Vitamine D</b> : une grande partie de la population en France a des apports insuffisants, surtout en hiver ; une supplémentation est souvent proposée par le médecin.</li><li><b>Fer</b> : surtout chez les femmes qui ont leurs règles et les femmes enceintes. Associer les sources végétales de fer à de la vitamine C améliore l’absorption.</li><li><b>Vitamine B12</b> : une alimentation <b>végétalienne</b> (sans aucun produit animal) impose une supplémentation en B12.</li><li><b>Folates</b> (vitamine B9) : la supplémentation est recommandée avant et au début d’une grossesse.</li></ul><p>Une prise de sang prescrite par un médecin permet de vérifier une suspicion de carence.</p>",
            },
            {
              title: "Les compléments alimentaires",
              body:
                "<ul><li>Pour une personne en bonne santé avec une alimentation variée, la plupart des compléments n’apportent <b>pas de bénéfice démontré</b>.</li><li>Ils peuvent être utiles dans des cas précis : vitamine D, B12 pour les végétaliens, fer en cas de carence confirmée, folates pour la grossesse.</li><li>Plus n’est pas mieux : certains, à forte dose (vitamine A, D, fer), peuvent être <b>nocifs</b>.</li><li>Méfiance envers les promesses spectaculaires (« détox », « brûle-graisse », « booste l’immunité »).</li></ul>",
            },
            {
              title: "L’eau",
              body:
                "<ul><li>L’eau est la seule boisson indispensable. Les besoins varient selon la chaleur, l’activité et la taille ; les aliments (fruits, légumes, soupes) en apportent aussi une partie.</li><li>Repère pratique : boire régulièrement dans la journée, et davantage en cas de chaleur ou d’effort.</li><li>Une urine claire est un bon indicateur d’hydratation.</li><li>L’eau du robinet est contrôlée en France et peut être bue sans problème dans la grande majorité des cas.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fer végétal + vitamine C", back: "La vitamine C améliore l’absorption du fer" },
            { front: "Vitamine B12", back: "Uniquement dans les produits animaux : supplémenter si végétalien" },
            { front: "Vitamine D", back: "Soleil et poissons gras ; apports souvent insuffisants en hiver" },
            { front: "Folates (B9)", back: "Supplémentation recommandée avant et en début de grossesse" },
            { front: "Compléments pour tous ?", back: "Non : utiles dans des cas précis, parfois nocifs à forte dose" },
            { front: "Indicateur d’hydratation", back: "Une urine claire" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une personne végétalienne doit obligatoirement…", options: ["prendre de la vitamine B12", "prendre de la vitamine C", "boire du lait"], answer: 0, explain: "La B12 n’est présente que dans les produits animaux." },
            { q: "Pour mieux absorber le fer des lentilles, on peut ajouter…", options: ["du thé au repas", "un aliment riche en vitamine C (poivron, agrume)", "du lait"], answer: 1, explain: "Le thé et le café en mangeant réduisent l’absorption." },
            { q: "Les compléments multivitaminés pour une personne en bonne santé qui mange varié…", options: ["sont indispensables", "n’apportent en général pas de bénéfice démontré", "remplacent les fruits et légumes"], answer: 1, explain: "L’alimentation variée suffit dans la plupart des cas." },
            { q: "Quelle vitamine est souvent insuffisante en hiver en France ?", options: ["Vitamine D", "Vitamine C", "Vitamine K"], answer: 0, explain: "Faute d’ensoleillement suffisant." },
          ],
        },
        {
          type: "case",
          title: "La fatigue de Sofia",
          story:
            "Sofia, végétarienne, est très fatiguée depuis plusieurs mois et essoufflée dans les escaliers. Une amie lui conseille d’acheter un complément « énergie » vendu en ligne.",
          question: "Quelle est la meilleure démarche ?",
          options: [
            "Acheter le complément le plus dosé",
            "Consulter un médecin qui pourra prescrire une prise de sang (fer, ferritine notamment) ; en attendant, associer légumineuses et vitamine C, et éviter thé et café pendant les repas",
            "Manger plus de sucre pour avoir de l’énergie",
          ],
          answer: 1,
          explain:
            "Une fatigue durable a de nombreuses causes possibles : seule une consultation permet de les identifier. Se supplémenter « au hasard » peut masquer un problème ou être nocif.",
        },
        {
          type: "fiche",
          title: "Micronutriments",
          points: [
            "Clés : <b>fer</b>, <b>calcium</b>, <b>vitamine D</b>, vitamine C, <b>B12</b>, iode.",
            "Carences fréquentes : <b>vitamine D</b> (hiver), <b>fer</b> (femmes) ; <b>B12</b> obligatoire si végétalien ; <b>folates</b> pour la grossesse.",
            "Compléments : utiles dans des <b>cas précis</b>, parfois nocifs à forte dose ; méfiance envers les promesses.",
            "<b>Eau</b> : seule boisson indispensable ; urine claire = bon repère.",
          ],
          retenir: "Une alimentation variée couvre l’essentiel ; les compléments se discutent avec un médecin, au cas par cas.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Lire une étiquette",
      minutes: 15,
      objectives: ["Décrypter la liste des ingrédients et le tableau nutritionnel", "Utiliser le Nutri-Score à bon escient"],
      steps: [
        {
          type: "lesson",
          title: "Ce que dit l’emballage",
          slides: [
            {
              title: "La liste des ingrédients",
              body:
                "<ul><li>Les ingrédients sont classés par <b>ordre décroissant</b> de quantité : le premier est le plus présent.</li><li>Une liste <b>courte</b>, avec des ingrédients reconnaissables, indique en général un produit peu transformé.</li><li>Le sucre peut se cacher sous plusieurs noms : sirop de glucose, dextrose, maltodextrine, sirop d’agave, jus de fruit concentré…</li><li>Les <b>allergènes</b> majeurs (gluten, lait, œufs, arachides, fruits à coque, etc.) sont mis en évidence, souvent en gras.</li></ul>",
            },
            {
              title: "Le tableau nutritionnel",
              body:
                "<ul><li>Les valeurs sont données <b>pour 100 g</b> (ou 100 ml), ce qui permet de comparer deux produits.</li><li>Parfois aussi par portion : vérifier la taille de la portion indiquée (souvent plus petite que ce qu’on mange réellement).</li><li>À regarder : énergie, matières grasses dont <b>acides gras saturés</b>, glucides dont <b>sucres</b>, <b>fibres</b>, protéines, <b>sel</b>.</li><li>Repères pour 100 g : beaucoup de sucres au-delà de 22,5 g, peu en dessous de 5 g ; beaucoup de sel au-delà de 1,5 g, peu en dessous de 0,3 g (repères britanniques souvent utilisés).</li></ul>",
            },
            {
              title: "Le Nutri-Score",
              body:
                "<ul><li>Logo de <b>A</b> (vert) à <b>E</b> (rouge) qui résume la qualité nutritionnelle d’un produit, pour 100 g.</li><li>Il pénalise sucres, sel, graisses saturées et énergie ; il valorise fibres, protéines, fruits, légumes, légumineuses et certaines huiles.</li><li>Son calcul a été <b>mis à jour</b> récemment pour mieux distinguer céréales complètes, sodas sucrés ou édulcorés, et huiles.</li><li>Il sert à <b>comparer des produits d’un même rayon</b> (deux céréales du petit-déjeuner), pas à décider si un aliment est « autorisé » ou « interdit ».</li><li>Il reste volontaire pour les marques en France.</li></ul>",
            },
            {
              title: "Les aliments ultra-transformés",
              body:
                "<ul><li>La classification <b>NOVA</b> distingue les aliments bruts, les ingrédients culinaires, les aliments transformés et les <b>ultra-transformés</b> (fabriqués avec des ingrédients industriels : arômes, émulsifiants, sirops, protéines isolées…).</li><li>De nombreuses études associent une forte consommation d’ultra-transformés à un risque plus élevé de maladies chroniques.</li><li>Un produit peut avoir un bon Nutri-Score et être ultra-transformé : les deux informations se complètent.</li><li>Les allégations (« riche en fibres », « source de protéines ») sont réglementées ; les mentions comme « naturel » ou « artisanal » le sont beaucoup moins.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Peu ou beaucoup ?",
          instruction: "D’après les repères pour 100 g, ce produit contient-il peu ou beaucoup de sucres ou de sel ?",
          categories: ["Peu", "Beaucoup"],
          items: [
            { text: "Céréales : 28 g de sucres pour 100 g", cat: 1, why: "Plus de 22,5 g." },
            { text: "Yaourt nature : 4 g de sucres pour 100 g", cat: 0, why: "Moins de 5 g (sucre du lait)." },
            { text: "Chips : 1,6 g de sel pour 100 g", cat: 1, why: "Plus de 1,5 g." },
            { text: "Pain complet : 1,0 g de sel pour 100 g", cat: 1, why: "Entre les deux : modéré, mais le pain est une source importante de sel." },
            { text: "Flocons d’avoine : 1 g de sucres pour 100 g", cat: 0, why: "Très peu." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Ordre des ingrédients", back: "Décroissant : le premier est le plus présent" },
            { front: "Comparer deux produits", back: "Utiliser les valeurs pour 100 g" },
            { front: "Noms cachés du sucre", back: "Sirop de glucose, dextrose, maltodextrine, jus concentré…" },
            { front: "Nutri-Score", back: "A à E ; pour comparer des produits d’un même rayon" },
            { front: "NOVA", back: "Classe les aliments selon leur degré de transformation" },
            { front: "Bon Nutri-Score et ultra-transformé ?", back: "C’est possible : les deux informations se complètent" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Dans un biscuit, le premier ingrédient est « sucre ». Cela signifie…", options: ["qu’il en contient très peu", "que c’est l’ingrédient le plus présent", "rien de particulier"], answer: 1, explain: "Ordre décroissant de quantité." },
            { q: "Le Nutri-Score sert surtout à…", options: ["interdire certains aliments", "comparer des produits similaires", "calculer ses calories"], answer: 1, explain: "Deux pizzas, deux céréales, deux plats préparés." },
            { q: "« Maltodextrine » est…", options: ["une vitamine", "une forme de sucre", "une fibre"], answer: 1, explain: "Un glucide issu de l’amidon." },
            { q: "Pourquoi regarder les valeurs pour 100 g plutôt que par portion ?", options: ["Les portions varient d’un produit à l’autre", "C’est obligatoire", "Pour manger 100 g"], answer: 0, explain: "On compare sur une base identique." },
          ],
        },
        {
          type: "case",
          title: "Les céréales « fitness »",
          story:
            "Noa achète des céréales avec une silhouette sportive sur la boîte et la mention « riches en fibres ». En lisant l’étiquette : sucre en 2e position, 24 g de sucres pour 100 g, Nutri-Score C. À côté, des flocons d’avoine : Nutri-Score A, 1 g de sucres.",
          question: "Que retenir ?",
          options: [
            "Les céréales « fitness » sont forcément meilleures",
            "Le marketing de l’emballage ne remplace pas la lecture de l’étiquette ; les flocons d’avoine (avec un fruit) sont un meilleur choix au quotidien",
            "Il faut supprimer le petit-déjeuner",
          ],
          answer: 1,
          explain:
            "Les images et allégations attirent l’œil ; la liste d’ingrédients, le tableau pour 100 g et le Nutri-Score permettent de comparer objectivement.",
        },
        {
          type: "fiche",
          title: "Étiquettes",
          points: [
            "Ingrédients par <b>ordre décroissant</b> ; liste courte = souvent moins transformé ; sucres cachés ; allergènes en évidence.",
            "Tableau <b>pour 100 g</b> : sucres (beaucoup > 22,5 g, peu < 5 g), sel (beaucoup > 1,5 g, peu < 0,3 g).",
            "<b>Nutri-Score</b> A-E : comparer dans un même rayon ; calcul mis à jour récemment.",
            "<b>NOVA</b> : limiter les ultra-transformés ; méfiance envers le marketing de l’emballage.",
          ],
          retenir: "Retourne le paquet : la vérité est à l’arrière, pas sur la photo de devant.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Composer ses repas",
      minutes: 17,
      objectives: ["Connaître les repères officiels de consommation", "Composer une assiette équilibrée"],
      steps: [
        {
          type: "lesson",
          title: "Les repères du PNNS",
          slides: [
            {
              title: "À augmenter",
              body:
                "<p>Repères du Programme national nutrition santé (Santé publique France, mangerbouger.fr) :</p><ul><li><b>Fruits et légumes</b> : au moins <b>5 portions par jour</b> (une portion ≈ 80 à 100 g, soit le poing), frais, surgelés ou en conserve.</li><li><b>Légumineuses</b> (lentilles, pois chiches, haricots) : au moins <b>2 fois par semaine</b>.</li><li><b>Fruits à coque</b> non salés : une <b>petite poignée par jour</b>.</li><li><b>Féculents complets</b> : au moins une fois par jour.</li><li><b>Activité physique</b> : au moins 30 minutes par jour d’activité modérée.</li></ul>",
            },
            {
              title: "À consommer en quantité adaptée",
              body:
                "<ul><li><b>Produits laitiers</b> : <b>2 par jour</b> pour les adultes (lait, yaourt, fromage).</li><li><b>Poisson</b> : <b>2 fois par semaine</b>, dont un poisson gras (sardine, maquereau, hareng, saumon).</li><li><b>Viande</b> : privilégier la volaille ; limiter les autres viandes (porc, bœuf, veau, agneau…) à <b>500 g par semaine</b>.</li><li><b>Matières grasses</b> : privilégier huiles de colza, de noix et d’olive.</li><li><b>Eau</b> : la seule boisson indispensable.</li></ul>",
            },
            {
              title: "À limiter",
              body:
                "<ul><li><b>Charcuterie</b> : 150 g maximum par semaine.</li><li><b>Boissons sucrées</b>, aliments gras, sucrés, salés et ultra-transformés.</li><li><b>Sel</b> : réduire, y compris celui des produits industriels.</li><li><b>Alcool</b> : pas plus de 10 verres standard par semaine, pas plus de 2 par jour, et des jours sans (séance 7).</li><li><b>Temps assis</b> : se lever et bouger régulièrement.</li></ul>",
            },
            {
              title: "L’assiette équilibrée",
              body:
                "<div class='tiers'><div><b>½ assiette : légumes</b><span>Crus ou cuits, variés, de saison.</span></div><div><b>¼ : féculents</b><span>De préférence complets : riz complet, pâtes complètes, pain complet, pommes de terre, légumineuses.</span></div><div><b>¼ : protéines</b><span>Volaille, poisson, œufs, légumineuses, tofu.</span></div></div><p>Plus : une cuillère d’huile de qualité, de l’eau, un fruit ou un laitage selon l’appétit. Un modèle simple, qui fonctionne au restaurant comme à la maison. Les sportifs et les personnes très actives augmentent la part de féculents.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Augmenter, adapter ou limiter ?",
          instruction: "Selon les repères du PNNS, dans quelle catégorie se trouve chaque aliment ?",
          categories: ["À augmenter", "Quantité adaptée", "À limiter"],
          items: [
            { text: "Lentilles et pois chiches", cat: 0, why: "Au moins 2 fois par semaine." },
            { text: "Saucisson et jambon", cat: 2, why: "Charcuterie : 150 g max par semaine." },
            { text: "Yaourts et fromage", cat: 1, why: "2 produits laitiers par jour." },
            { text: "Une poignée de noix", cat: 0, why: "Une petite poignée par jour." },
            { text: "Steak de bœuf", cat: 1, why: "Viandes hors volaille : 500 g max par semaine." },
            { text: "Soda sucré", cat: 2, why: "Boissons sucrées à limiter." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fruits et légumes", back: "Au moins 5 portions par jour (≈ un poing chacune)" },
            { front: "Légumineuses", back: "Au moins 2 fois par semaine" },
            { front: "Poisson", back: "2 fois par semaine, dont 1 poisson gras" },
            { front: "Viandes hors volaille", back: "500 g maximum par semaine" },
            { front: "Charcuterie", back: "150 g maximum par semaine" },
            { front: "Assiette équilibrée", back: "½ légumes, ¼ féculents (complets), ¼ protéines" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Les légumes surgelés comptent-ils dans les 5 portions ?", options: ["Non, seulement les frais", "Oui, frais, surgelés ou en conserve", "Seulement bio"], answer: 1, explain: "Les surgelés nature sont pratiques et nutritifs." },
            { q: "Combien de produits laitiers par jour pour un adulte selon le PNNS ?", options: ["0", "2", "5"], answer: 1, explain: "Repère actualisé." },
            { q: "Dans l’assiette équilibrée, la moitié est occupée par…", options: ["la viande", "les légumes", "les féculents"], answer: 1, explain: "½ légumes, ¼ féculents, ¼ protéines." },
            { q: "Le poisson gras est intéressant pour…", options: ["ses oméga-3", "son sucre", "ses fibres"], answer: 0, explain: "Sardine, maquereau, hareng, saumon." },
          ],
        },
        {
          type: "case",
          title: "La semaine de Karim",
          story:
            "Karim mange presque chaque midi un sandwich jambon-beurre et chaque soir des pâtes à la sauce industrielle avec des saucisses. Il mange rarement des légumes et jamais de légumineuses.",
          question: "Quels changements prioriser ?",
          options: [
            "Supprimer tous les féculents",
            "Ajouter des légumes à chaque repas (crudités, poêlée surgelée), remplacer une partie de la charcuterie par des œufs, du poulet ou des légumineuses, passer aux pâtes complètes, et viser 2 repas de poisson par semaine",
            "Ne manger qu’une fois par jour",
          ],
          answer: 1,
          explain:
            "On progresse par petits changements concrets, en ajoutant ce qui manque (légumes, légumineuses, poisson) plutôt qu’en interdisant.",
        },
        {
          type: "fiche",
          title: "Composer ses repas",
          points: [
            "Augmenter : <b>5 fruits et légumes</b>, <b>légumineuses 2×/semaine</b>, <b>fruits à coque</b> une poignée/jour, féculents complets.",
            "Adapter : <b>2 laitages/jour</b>, <b>poisson 2×/semaine</b> (1 gras), viandes hors volaille <b>≤ 500 g/semaine</b>, huiles colza/noix/olive.",
            "Limiter : <b>charcuterie ≤ 150 g/semaine</b>, boissons sucrées, sel, alcool, ultra-transformés.",
            "Assiette : <b>½ légumes, ¼ féculents, ¼ protéines</b>.",
          ],
          retenir: "Commence par ajouter ce qui manque — légumes, légumineuses, poisson — plutôt que par interdire.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Régimes et idées reçues",
      minutes: 16,
      objectives: ["Évaluer les régimes à la mode avec un regard critique", "Démêler les idées reçues les plus courantes"],
      steps: [
        {
          type: "lesson",
          title: "Ce que disent vraiment les études",
          slides: [
            {
              title: "Les régimes restrictifs",
              body:
                "<ul><li>Les régimes très restrictifs font souvent perdre du poids <b>à court terme</b>, mais la majorité des personnes le reprennent dans les années qui suivent.</li><li>Ils peuvent entraîner fatigue, carences, perte de muscle, obsession de la nourriture et effet « yo-yo ».</li><li>L’ANSES a souligné les risques des régimes amaigrissants pratiqués sans suivi.</li><li>Ce qui marche le mieux sur la durée : des changements <b>que l’on peut tenir toute sa vie</b>, adaptés à ses goûts et à son mode de vie, avec de l’activité physique.</li></ul>",
            },
            {
              title: "Les régimes à la mode",
              body:
                "<table class='t'><tr><th>Régime</th><th>Ce qu’on en sait</th></tr><tr><td><b>Jeûne intermittent</b></td><td>Peut aider certaines personnes à manger moins ; les études ne montrent pas d’avantage clair par rapport à une réduction classique des apports</td></tr><tr><td><b>Low carb / cétogène</b></td><td>Perte rapide au début (en partie de l’eau) ; à long terme, résultats proches des autres approches ; difficile à tenir</td></tr><tr><td><b>Végétarien</b></td><td>Bien construit, compatible avec une bonne santé ; attention au fer et à la B12 (obligatoire si végétalien)</td></tr><tr><td><b>Méditerranéen</b></td><td>L’un des modèles les mieux étudiés et associé à une meilleure santé cardiovasculaire</td></tr><tr><td><b>« Détox »</b></td><td>Pas de fondement scientifique : le foie et les reins éliminent déjà les déchets</td></tr></table>",
            },
            {
              title: "Les idées reçues",
              body:
                "<ul><li>« <b>Manger le soir fait grossir</b> » : c’est surtout la quantité et la qualité sur la journée qui comptent ; un repas léger le soir peut toutefois améliorer le sommeil.</li><li>« <b>Le pain fait grossir</b> » : aucun aliment ne fait grossir seul ; le pain complet est une bonne source de fibres.</li><li>« <b>Le sucre du fruit est aussi mauvais que celui du soda</b> » : non, le fruit apporte fibres, vitamines, eau et rassasie.</li><li>« <b>Il faut manger 5 fois par jour pour relancer le métabolisme</b> » : le nombre de repas a peu d’effet sur la dépense ; on adapte à son appétit et à son rythme.</li><li>« <b>Le gluten est mauvais pour tout le monde</b> » : seules les personnes cœliaques ou sensibles doivent l’éviter, sur avis médical.</li></ul>",
            },
            {
              title: "Les signaux à prendre au sérieux",
              body:
                "<ul><li>Si la nourriture devient une source d’<b>angoisse</b>, de culpabilité, de restrictions sévères, de crises où l’on perd le contrôle, ou de comportements pour « compenser » ce que l’on a mangé, il est important d’en parler à un <b>médecin</b>.</li><li>Les troubles des conduites alimentaires sont fréquents, touchent tous les âges et tous les genres, et se soignent mieux lorsqu’ils sont pris en charge tôt.</li><li>Pour une perte de poids importante, une maladie (diabète, cholestérol, maladie rénale…) ou une grossesse, un suivi par un <b>médecin</b> ou un <b>diététicien-nutritionniste</b> est recommandé.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Mythe ou réalité ?",
          instruction: "Cette affirmation est-elle soutenue par les connaissances actuelles ?",
          categories: ["Plutôt vrai", "Mythe"],
          items: [
            { text: "Les cures « détox » nettoient le foie", cat: 1, why: "Le foie et les reins s’en chargent déjà." },
            { text: "Un régime végétalien impose une supplémentation en B12", cat: 0, why: "La B12 n’existe que dans les produits animaux." },
            { text: "Manger un fruit équivaut à boire un soda", cat: 1, why: "Fibres, vitamines, satiété." },
            { text: "Les régimes très restrictifs sont souvent suivis d’une reprise de poids", cat: 0, why: "Effet yo-yo fréquent." },
            { text: "Le régime méditerranéen est associé à une meilleure santé du cœur", cat: 0, why: "Modèle très étudié." },
            { text: "Il faut manger 6 petits repas pour relancer le métabolisme", cat: 1, why: "Le nombre de repas a peu d’effet." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Régime très restrictif", back: "Perte rapide, reprise fréquente (effet yo-yo), risques de carences" },
            { front: "Jeûne intermittent", back: "Pas d’avantage clair par rapport à une réduction classique des apports" },
            { front: "Régime méditerranéen", back: "Légumes, légumineuses, huile d’olive, poisson : très bien étudié" },
            { front: "« Détox »", back: "Pas de fondement : le foie et les reins éliminent déjà" },
            { front: "Gluten", back: "À éviter seulement en cas de maladie cœliaque ou sensibilité, sur avis médical" },
            { front: "Ce qui marche sur la durée", back: "Des changements qu’on peut tenir toute sa vie + activité physique" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’est-ce qui prédit le mieux le succès à long terme ?", options: ["Le régime le plus strict", "Des changements que l’on peut maintenir durablement", "Une cure détox"], answer: 1, explain: "La durabilité prime sur la rapidité." },
            { q: "Le régime cétogène fait perdre vite au début car…", options: ["il brûle magiquement la graisse", "une partie de la perte est de l’eau liée aux réserves de glucides", "il accélère le métabolisme de 50 %"], answer: 1, explain: "À long terme, les résultats sont proches des autres approches." },
            { q: "Une personne non cœliaque qui supprime le gluten…", options: ["améliore forcément sa santé", "n’a pas de bénéfice démontré", "doit consulter en urgence"], answer: 1, explain: "Les produits sans gluten ne sont pas plus sains en soi." },
            { q: "Si manger devient une source d’angoisse et de culpabilité permanente…", options: ["il faut un régime plus strict", "il est important d’en parler à un médecin", "c’est normal"], answer: 1, explain: "Une prise en charge précoce aide beaucoup." },
          ],
        },
        {
          type: "case",
          title: "Le régime du mois",
          story:
            "Sofia enchaîne les régimes vus sur les réseaux sociaux : jus détox en janvier, cétogène en mars, jeûne en mai. À chaque fois, elle perd quelques kilos, puis les reprend avec quelques-uns de plus.",
          question: "Que lui proposer ?",
          options: [
            "Essayer un régime encore plus strict",
            "Arrêter la succession de régimes, construire des habitudes durables (assiette équilibrée, légumes, protéines, fibres, activité physique) et, si elle le souhaite, se faire accompagner par un médecin ou un diététicien",
            "Ne plus manger le soir",
          ],
          answer: 1,
          explain:
            "L’alternance de régimes restrictifs favorise l’effet yo-yo. Des habitudes progressives et tenables sont la seule stratégie qui fonctionne sur la durée.",
        },
        {
          type: "fiche",
          title: "Régimes et idées reçues",
          points: [
            "Régimes <b>très restrictifs</b> : reprise fréquente (yo-yo), carences, rapport difficile à la nourriture.",
            "Jeûne intermittent, low carb : <b>pas d’avantage clair</b> à long terme ; <b>méditerranéen</b> très bien étudié ; <b>détox</b> : sans fondement.",
            "Mythes : manger le soir, le pain, le sucre des fruits, 6 repas, le gluten pour tous.",
            "Angoisse, crises, compensations, maladie, grossesse : <b>en parler à un médecin</b>.",
          ],
          retenir: "Le meilleur « régime » est celui que tu pourrais suivre toute ta vie sans y penser.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Sucre, sel et alcool",
      minutes: 15,
      objectives: ["Connaître les repères pour le sucre, le sel et l’alcool", "Savoir où ils se cachent et comment réduire"],
      steps: [
        {
          type: "lesson",
          title: "Les trois à surveiller",
          slides: [
            {
              title: "Le sucre",
              body:
                "<ul><li>L’OMS recommande de limiter les <b>sucres libres</b> (ajoutés, plus ceux des jus de fruits et du miel) à moins de <b>10 %</b> de l’énergie, idéalement moins de 5 %, soit environ <b>25 à 50 g par jour</b> pour un adulte.</li><li>Une canette de soda de 33 cl contient environ <b>35 g de sucre</b> : à elle seule, presque la limite.</li><li>Sources fréquentes : sodas, jus, céréales sucrées, biscuits, yaourts aromatisés, sauces (ketchup), plats préparés.</li><li>Réduire progressivement : le goût s’habitue en quelques semaines.</li></ul>",
            },
            {
              title: "Le sel",
              body:
                "<ul><li>L’OMS recommande moins de <b>5 g de sel par jour</b> ; les Français en consomment en moyenne nettement plus (environ 8 g).</li><li>Un excès de sel augmente la <b>tension artérielle</b>, facteur de risque des maladies cardiovasculaires.</li><li>La majorité du sel vient des produits <b>transformés</b> : pain, charcuterie, fromages, plats préparés, soupes industrielles, biscuits apéritifs.</li><li>Astuces : goûter avant de saler, cuisiner avec des herbes, épices, ail, citron ; choisir du sel iodé quand on sale.</li></ul>",
            },
            {
              title: "L’alcool",
              body:
                "<ul><li>Repères de Santé publique France pour limiter les risques : <b>maximum 10 verres standard par semaine</b>, <b>pas plus de 2 par jour</b>, et <b>des jours sans alcool</b> dans la semaine.</li><li>Un <b>verre standard</b> contient environ 10 g d’alcool pur : 25 cl de bière à 5°, 10 cl de vin, 3 cl d’alcool fort.</li><li>Le risque existe dès le premier verre pour certains cancers : il n’y a pas de consommation « bénéfique » pour la santé.</li><li><b>Zéro alcool</b> pendant la grossesse, et ne pas conduire après avoir bu.</li><li>Besoin d’aide pour réduire : Alcool Info Service (0 980 980 930, gratuit) ou son médecin.</li></ul>",
            },
            {
              title: "Les édulcorants",
              body:
                "<ul><li>Les boissons « zéro » ou « light » ne contiennent pas de sucre, mais des <b>édulcorants</b>.</li><li>Elles sont préférables aux sodas sucrés pour réduire le sucre, mais l’OMS ne les recommande pas pour contrôler le poids à long terme, et elles entretiennent le goût du sucré.</li><li>L’objectif idéal : revenir progressivement vers l’<b>eau</b> (plate, gazeuse, aromatisée avec citron ou menthe), le thé ou le café peu ou pas sucrés.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Sucres libres (OMS)", back: "< 10 % de l’énergie, idéalement < 5 % (≈ 25-50 g/jour)" },
            { front: "Canette de soda (33 cl)", back: "≈ 35 g de sucre" },
            { front: "Sel (OMS)", back: "< 5 g par jour ; les Français en mangent environ 8 g" },
            { front: "Principale source de sel", back: "Les produits transformés : pain, charcuterie, fromages, plats préparés" },
            { front: "Repères alcool", back: "Max 10 verres/semaine, 2 par jour, des jours sans" },
            { front: "Verre standard", back: "≈ 10 g d’alcool : 25 cl de bière à 5°, 10 cl de vin, 3 cl d’alcool fort" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "D’où vient la majorité du sel que nous consommons ?", options: ["De la salière", "Des produits transformés", "De l’eau du robinet"], answer: 1, explain: "Pain, charcuterie, fromages, plats préparés." },
            { q: "Un verre de vin (10 cl) et une bière de 25 cl à 5° contiennent…", options: ["la même quantité d’alcool environ", "beaucoup plus pour la bière", "aucun alcool"], answer: 0, explain: "Environ 10 g chacun : un verre standard." },
            { q: "Combien de jours sans alcool conseillés ?", options: ["Aucun", "Plusieurs jours sans alcool chaque semaine", "Un par an"], answer: 1, explain: "Les repères incluent des jours sans." },
            { q: "Les boissons « zéro sucre » sont…", options: ["meilleures que les sodas sucrés, mais l’eau reste l’idéal", "parfaites pour maigrir selon l’OMS", "plus sucrées que les sodas"], answer: 0, explain: "Elles entretiennent le goût du sucré." },
          ],
        },
        {
          type: "case",
          title: "Les afterworks",
          story:
            "Hugo boit 3 bières de 50 cl à 5° trois soirs par semaine avec ses collègues, plus du vin le week-end. Il pense qu’il « boit raisonnablement ».",
          question: "Qu’en dire ?",
          options: [
            "C’est une consommation sans risque",
            "Une bière de 50 cl à 5° représente 2 verres standard : 3 bières = 6 verres par soir, soit 18 verres par semaine avant le week-end, bien au-delà des repères (10 par semaine, 2 par jour) ; réduire, alterner avec des boissons sans alcool, et se faire aider si c’est difficile",
            "Il doit passer au vin uniquement",
          ],
          answer: 1,
          explain:
            "Les grands verres et les pintes trompent sur la quantité. Compter en verres standard rend la consommation visible.",
        },
        {
          type: "fiche",
          title: "Sucre, sel, alcool",
          points: [
            "<b>Sucres libres</b> < 10 % (idéal < 5 %), ≈ 25-50 g/jour ; une canette ≈ 35 g.",
            "<b>Sel</b> < 5 g/jour (OMS) ; surtout dans les produits transformés ; herbes, épices, citron, sel iodé.",
            "<b>Alcool</b> : ≤ 10 verres/semaine, ≤ 2/jour, des jours sans ; zéro pendant la grossesse et avant de conduire.",
            "Édulcorants : mieux que le sucre, mais viser l’<b>eau</b>.",
          ],
          retenir: "Le sucre, le sel et l’alcool se cachent surtout dans les produits tout prêts et les grands verres.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Bien manger au quotidien",
      minutes: 16,
      objectives: ["Organiser ses courses et ses repas", "Bien manger avec un petit budget et peu de temps"],
      steps: [
        {
          type: "lesson",
          title: "De la théorie à la cuisine",
          slides: [
            {
              title: "Les courses",
              body:
                "<ul><li>Faire une <b>liste</b> à partir des repas prévus pour la semaine.</li><li>Ne pas faire les courses le ventre vide.</li><li>Le « placard de base » : riz, pâtes complètes, lentilles, pois chiches en conserve, flocons d’avoine, conserves de poisson (sardines, thon, maquereau), tomates concassées, œufs, huile de colza et d’olive, épices.</li><li>Les <b>surgelés nature</b> (légumes, poisson) sont nutritifs, pratiques et limitent le gaspillage.</li></ul>",
            },
            {
              title: "Bien manger sans se ruiner",
              body:
                "<ul><li>Les <b>légumineuses</b> sont parmi les protéines les moins chères.</li><li><b>Fruits et légumes de saison</b>, en vrac ou au marché en fin de matinée.</li><li><b>Œufs</b> et <b>conserves de poisson gras</b> : protéines et oméga-3 à petit prix.</li><li>Cuisiner en plus grande quantité et congeler des portions.</li><li>Les produits bruts sont presque toujours moins chers au kilo que les plats préparés.</li></ul>",
            },
            {
              title: "Le batch cooking",
              body:
                "<p>Préparer en 1 h 30 à 2 h le week-end une partie des repas de la semaine :</p><ol><li>Cuire une grande quantité de <b>féculents</b> (riz, quinoa, pommes de terre au four).</li><li>Rôtir une plaque de <b>légumes</b> variés.</li><li>Préparer une <b>protéine</b> (poulet, lentilles, œufs durs, pois chiches rôtis).</li><li>Une ou deux <b>sauces</b> (vinaigrette, yaourt-citron-herbes).</li><li>Assembler chaque jour différemment : bols, salades complètes, wraps, poêlées.</li></ol><p>Conservation : 3 à 4 jours au réfrigérateur dans des boîtes fermées, le reste au congélateur.</p>",
            },
            {
              title: "Manger dehors et écouter sa faim",
              body:
                "<ul><li>Au restaurant ou à la cantine : appliquer l’<b>assiette équilibrée</b> (demander plus de légumes, choisir une protéine grillée, une eau).</li><li>Sandwich : pain complet, une protéine, des crudités, plutôt qu’un sandwich + chips + soda.</li><li><b>Manger lentement</b>, sans écran si possible : le signal de satiété arrive après environ 20 minutes.</li><li>Distinguer la <b>faim</b> physique de l’envie de manger liée à l’ennui, au stress ou à l’habitude.</li><li>Le Restaurant du campus accueillera bientôt des cours de cuisine pour mettre tout cela en pratique.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Placard de base", back: "Riz, pâtes complètes, légumineuses, avoine, conserves de poisson, œufs, huiles, épices" },
            { front: "Surgelés nature", back: "Nutritifs, pratiques, anti-gaspillage" },
            { front: "Protéine la moins chère", back: "Les légumineuses (et les œufs)" },
            { front: "Batch cooking", back: "Féculents + légumes rôtis + protéine + sauces, assemblés chaque jour" },
            { front: "Conservation des préparations", back: "3-4 jours au réfrigérateur, le reste au congélateur" },
            { front: "Satiété", back: "Le signal arrive après environ 20 minutes : manger lentement" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Les légumes surgelés nature sont…", options: ["moins nutritifs que tout", "nutritifs et pratiques", "interdits"], answer: 1, explain: "Surgelés peu après la récolte." },
            { q: "Combien de temps se conservent des plats préparés à l’avance au réfrigérateur ?", options: ["3 à 4 jours", "3 semaines", "1 heure"], answer: 0, explain: "Le reste se congèle." },
            { q: "Pourquoi manger lentement ?", options: ["Le signal de satiété met environ 20 minutes à arriver", "Pour que le repas refroidisse", "Ça n’a aucun intérêt"], answer: 0, explain: "On mange naturellement des quantités plus adaptées." },
            { q: "Quelle protéine est la plus économique ?", options: ["Le filet de bœuf", "Les lentilles", "Le saumon frais"], answer: 1, explain: "Et riches en fibres." },
          ],
        },
        {
          type: "case",
          title: "La semaine chargée",
          story:
            "Noa rentre tard tous les soirs et commande à manger 4 fois par semaine. Il dépense beaucoup et mange peu de légumes. Il a 2 heures de libre le dimanche.",
          question: "Quelle organisation lui proposer ?",
          options: [
            "Continuer à commander, c’est plus simple",
            "Une session de batch cooking le dimanche (riz complet, plaque de légumes rôtis, poulet ou lentilles, deux sauces), un placard de base pour les soirs imprévus (œufs, conserves de poisson, surgelés), et garder une commande par semaine pour le plaisir",
            "Sauter le dîner",
          ],
          answer: 1,
          explain:
            "Préparer à l’avance supprime la question « qu’est-ce que je mange ce soir ? », qui mène souvent à la commande. Garder un repas plaisir rend l’organisation tenable.",
        },
        {
          type: "fiche",
          title: "Au quotidien",
          points: [
            "Courses : <b>liste</b>, pas le ventre vide, <b>placard de base</b>, surgelés nature.",
            "Budget : <b>légumineuses</b>, œufs, <b>conserves de poisson gras</b>, saison, cuisiner en grande quantité.",
            "<b>Batch cooking</b> : féculents + légumes rôtis + protéine + sauces ; 3-4 jours au frais.",
            "Dehors : <b>assiette équilibrée</b> ; manger <b>lentement</b> ; distinguer faim et envie.",
          ],
          retenir: "Bien manger se décide au moment des courses et du dimanche : quand c’est prêt, c’est facile.",
        },
      ],
    },
  ],
});
