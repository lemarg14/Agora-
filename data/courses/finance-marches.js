/* ============================================================
   COURS : Les marchés financiers
   École de Finance · 8 séances de 15 à 20 minutes
   Fonctionnement des marchés, actions, obligations et taux,
   autres actifs (fonds, devises, matières premières, crypto,
   dérivés), rendement et risque, ce qui fait bouger les cours,
   enveloppes françaises, se protéger des arnaques.
   Chiffres vérifiés au 1er novembre 2026 : Livret A 1,7 %
   depuis le 1er août 2026 (plafond 22 950 €) ; prélèvement
   forfaitaire unique 31,4 % (12,8 % d'impôt + 18,6 % de
   prélèvements sociaux) sur la plupart des revenus du capital
   2026, certains restant à 30 % (assurance-vie notamment).
   À METTRE À JOUR. Cours pédagogique : ce n'est pas un conseil
   en investissement.
   ============================================================ */
AGORA.registerCourse({
  id: "finance-marches",
  faculty: "finance",
  title: "Les marchés financiers",
  subtitle: "Comprendre la Bourse, les actions, les obligations et les risques avant d’investir",
  color: "#1f4f7a",
  level: "Débutant à intermédiaire",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre comment fonctionnent les marchés financiers : à quoi ils servent, les actions, les obligations et les taux d’intérêt, les fonds, devises, matières premières, crypto-actifs et produits dérivés, le lien entre rendement et risque, ce qui fait monter ou baisser les cours, les enveloppes d’investissement françaises et comment se protéger des arnaques. C’est un cours pour comprendre, pas un conseil en investissement : avant toute décision, informe-toi auprès de sources officielles (AMF) ou d’un conseiller agréé.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "À quoi servent les marchés",
      minutes: 16,
      objectives: ["Comprendre le rôle des marchés financiers", "Connaître les acteurs, les places et les indices"],
      steps: [
        {
          type: "lesson",
          title: "La rencontre entre épargne et financement",
          slides: [
            {
              title: "Le rôle des marchés",
              body:
                "<p>Les marchés financiers mettent en relation ceux qui ont de l’<b>épargne</b> et ceux qui ont besoin de <b>financement</b> :</p><ul><li>une <b>entreprise</b> émet des actions (elle vend des parts de son capital) ou des obligations (elle emprunte) pour investir ;</li><li>un <b>État</b> emprunte pour financer son déficit ;</li><li>un <b>épargnant</b> place son argent en espérant un rendement.</li></ul><p>Ils permettent aussi de <b>revendre</b> facilement un placement (la liquidité) et de fixer un <b>prix</b> à chaque instant.</p>",
            },
            {
              title: "Marché primaire, marché secondaire",
              body:
                "<ul><li><b>Marché primaire</b> : création de nouveaux titres. L’argent va directement à l’entreprise ou à l’État (introduction en Bourse, augmentation de capital, émission d’obligations).</li><li><b>Marché secondaire</b> : les investisseurs s’échangent des titres déjà existants. C’est « la Bourse » au quotidien ; l’entreprise ne reçoit pas cet argent, mais le prix reflète sa valeur aux yeux du marché.</li></ul><p>Sans marché secondaire, peu d’investisseurs accepteraient d’acheter au marché primaire : ils ne pourraient pas revendre.</p>",
            },
            {
              title: "Les acteurs",
              body:
                "<table class='t'><tr><th>Acteur</th><th>Rôle</th></tr><tr><td>Particuliers</td><td>Investissent leur épargne, souvent via des fonds</td></tr><tr><td>Investisseurs institutionnels</td><td>Assureurs, fonds de pension, gérants d’actifs : la plus grande partie des volumes</td></tr><tr><td>Banques et courtiers</td><td>Transmettent les ordres, conseillent, accompagnent les émissions</td></tr><tr><td>Places de marché</td><td>Euronext (Paris, Amsterdam…), NYSE et Nasdaq (New York), Londres, Tokyo…</td></tr><tr><td>Régulateurs</td><td><b>AMF</b> en France, ESMA en Europe, SEC aux États-Unis : protègent les investisseurs et surveillent les marchés</td></tr><tr><td>Banques centrales</td><td>BCE, Réserve fédérale (Fed) : fixent les taux directeurs</td></tr></table>",
            },
            {
              title: "Les indices",
              body:
                "<p>Un <b>indice</b> mesure l’évolution d’un panier d’actions :</p><ul><li><b>CAC 40</b> : 40 grandes entreprises cotées à Paris.</li><li><b>Euro Stoxx 50</b> : 50 grandes entreprises de la zone euro.</li><li><b>S&P 500</b> : 500 grandes entreprises américaines ; <b>Nasdaq 100</b> : grandes valeurs, surtout technologiques.</li><li><b>MSCI World</b> : environ 1 400 entreprises de 23 pays développés.</li></ul><p>Les indices servent de <b>baromètre</b> et de <b>référence</b> pour comparer la performance des gérants. Beaucoup de fonds les répliquent simplement (séance 4).</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Marché primaire ou secondaire ?",
          instruction: "L’opération se passe-t-elle sur le marché primaire ou secondaire ?",
          categories: ["Primaire (nouveaux titres)", "Secondaire (échange de titres existants)"],
          items: [
            { text: "Une start-up entre en Bourse et vend de nouvelles actions", cat: 0, why: "Introduction en Bourse." },
            { text: "Tu achètes 10 actions TotalEnergies à un autre investisseur", cat: 1, why: "Échange de titres existants." },
            { text: "L’État français émet de nouvelles obligations (OAT)", cat: 0, why: "Nouvel emprunt." },
            { text: "Un fonds revend ses actions LVMH", cat: 1, why: "Marché secondaire." },
            { text: "Une entreprise lève des fonds par augmentation de capital", cat: 0, why: "Nouvelles actions." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Rôle des marchés", back: "Relier épargne et financement, donner un prix, permettre de revendre" },
            { front: "Marché primaire", back: "Émission de nouveaux titres : l’argent va à l’émetteur" },
            { front: "Marché secondaire", back: "Échange de titres existants entre investisseurs" },
            { front: "AMF", back: "Autorité des marchés financiers : le régulateur français" },
            { front: "CAC 40", back: "Indice des 40 grandes entreprises cotées à Paris" },
            { front: "MSCI World", back: "Indice d’environ 1 400 entreprises de 23 pays développés" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quand tu achètes une action en Bourse à un autre investisseur, l’entreprise…", options: ["reçoit ton argent", "ne reçoit rien : c’est le marché secondaire", "doit te rembourser"], answer: 1, explain: "L’argent va au vendeur." },
            { q: "Quel est le régulateur des marchés financiers en France ?", options: ["La BCE", "L’AMF", "La SEC"], answer: 1, explain: "Autorité des marchés financiers." },
            { q: "Le S&P 500 regroupe…", options: ["500 entreprises françaises", "500 grandes entreprises américaines", "500 cryptomonnaies"], answer: 1, explain: "Indice phare de Wall Street." },
            { q: "Pourquoi le marché secondaire est-il important ?", options: ["Il permet de revendre facilement, ce qui encourage à investir", "Il finance directement les entreprises", "Il n’a aucun intérêt"], answer: 0, explain: "La liquidité attire les investisseurs." },
          ],
        },
        {
          type: "case",
          title: "La levée de fonds",
          story:
            "Une PME française en forte croissance veut construire une usine. Elle hésite entre un prêt bancaire, une émission d’obligations et une introduction en Bourse.",
          question: "Quelle est la différence essentielle entre obligation et action pour l’entreprise ?",
          options: [
            "Aucune différence",
            "Avec des obligations, elle emprunte et devra rembourser avec intérêts ; avec des actions, elle fait entrer de nouveaux associés qui partagent le capital, le pouvoir de vote et les bénéfices, sans remboursement",
            "Les actions doivent être remboursées sous 5 ans",
          ],
          answer: 1,
          explain:
            "Dette (obligation, prêt) ou capital (actions) : c’est le choix de financement fondamental vu dans le cours « Finance d’entreprise ».",
        },
        {
          type: "fiche",
          title: "Rôle des marchés",
          points: [
            "Les marchés relient <b>épargne</b> et <b>financement</b>, fixent des <b>prix</b> et offrent de la <b>liquidité</b>.",
            "<b>Primaire</b> : nouveaux titres ; <b>secondaire</b> : la Bourse au quotidien.",
            "Acteurs : particuliers, <b>institutionnels</b>, banques, places (Euronext, NYSE, Nasdaq), régulateurs (<b>AMF</b>), banques centrales.",
            "Indices : <b>CAC 40</b>, Euro Stoxx 50, <b>S&P 500</b>, Nasdaq 100, <b>MSCI World</b>.",
          ],
          retenir: "La Bourse, c’est d’abord un outil pour financer l’économie ; le prix d’une action reflète ce que le marché pense de son avenir.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Les actions",
      minutes: 17,
      objectives: ["Comprendre ce qu’est une action et ce qui fait sa valeur", "Savoir passer un ordre de Bourse"],
      steps: [
        {
          type: "lesson",
          title: "Devenir copropriétaire d’une entreprise",
          slides: [
            {
              title: "Qu’est-ce qu’une action ?",
              body:
                "<ul><li>Une <b>action</b> est une part du capital d’une société : l’actionnaire en est <b>copropriétaire</b>.</li><li>Droits : voter en assemblée générale, recevoir une part des bénéfices distribués (<b>dividende</b>), être informé.</li><li>Gains possibles : le <b>dividende</b> et la <b>plus-value</b> si le cours monte.</li><li>Risque : le cours peut baisser fortement, et en cas de faillite, l’actionnaire est payé en <b>dernier</b>, souvent rien. On ne peut cependant pas perdre plus que sa mise (sauf avec effet de levier).</li></ul>",
            },
            {
              title: "La valeur d’une entreprise",
              body:
                "<ul><li><b>Capitalisation boursière</b> = cours de l’action × nombre d’actions. C’est la valeur que le marché donne à l’entreprise.</li><li><b>PER</b> (price earnings ratio) = cours ÷ bénéfice par action. Un PER de 15 signifie que l’on paie 15 années de bénéfices actuels.</li><li>Un PER élevé traduit souvent des <b>attentes de forte croissance</b> (technologie) ; un PER faible, une croissance faible ou des inquiétudes.</li><li><b>Rendement du dividende</b> = dividende annuel ÷ cours.</li></ul><p>Ce qui compte pour le prix, ce sont surtout les <b>bénéfices futurs attendus</b>, pas seulement ceux d’aujourd’hui.</p>",
            },
            {
              title: "Passer un ordre",
              body:
                "<ul><li>On achète des actions via un <b>courtier</b> (banque, courtier en ligne) sur un compte-titres ou un PEA (séance 7).</li><li><b>Ordre au marché</b> : exécuté immédiatement au meilleur prix disponible, mais sans garantie de prix.</li><li><b>Ordre à cours limité</b> : on fixe un prix maximum à l’achat (ou minimum à la vente) : pas de mauvaise surprise sur le prix, mais l’ordre peut ne pas être exécuté.</li><li>Les <b>frais</b> (courtage, frais de garde, change pour les actions étrangères) réduisent le rendement : à comparer.</li><li><b>Liquidité</b> : les grandes valeurs s’échangent facilement ; les petites peuvent être difficiles à vendre.</li></ul>",
            },
            {
              title: "Grandes familles d’actions",
              body:
                "<ul><li><b>Valeurs de croissance</b> : entreprises dont les bénéfices progressent vite, souvent sans dividende important, PER élevé.</li><li><b>Valeurs de rendement</b> : entreprises matures qui distribuent des dividendes réguliers.</li><li><b>Cycliques</b> (automobile, construction, matières premières) : très sensibles à la conjoncture.</li><li><b>Défensives</b> (alimentation, santé, énergie de réseau) : plus stables en période de crise.</li><li>Grandes, moyennes et petites capitalisations.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Action", back: "Part du capital : droit de vote, dividende, plus-value possible" },
            { front: "En cas de faillite", back: "L’actionnaire est payé en dernier, souvent rien" },
            { front: "Capitalisation boursière", back: "Cours × nombre d’actions" },
            { front: "PER", back: "Cours ÷ bénéfice par action : combien d’années de bénéfices on paie" },
            { front: "Ordre à cours limité", back: "Prix plafond (achat) ou plancher (vente) : pas de surprise de prix" },
            { front: "Valeurs défensives", back: "Alimentation, santé : plus stables en crise" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une entreprise a 100 millions d’actions à 50 €. Sa capitalisation est de…", options: ["50 millions €", "5 milliards €", "100 millions €"], answer: 1, explain: "100 M × 50 € = 5 Md€." },
            { q: "Action à 60 €, bénéfice par action de 4 €. PER ?", options: ["15", "240", "4"], answer: 0, explain: "60 ÷ 4 = 15." },
            { q: "Un ordre « au marché »…", options: ["garantit le prix", "est exécuté vite, sans garantie de prix", "n’est jamais exécuté"], answer: 1, explain: "Risque en cas de faible liquidité." },
            { q: "Sans effet de levier, combien peut-on perdre au maximum sur une action ?", options: ["Sa mise", "Le double de sa mise", "Une somme illimitée"], answer: 0, explain: "Le cours ne peut pas descendre sous zéro." },
          ],
        },
        {
          type: "case",
          title: "Le PER vertigineux",
          story:
            "Hugo veut acheter une action technologique très médiatisée dont le PER est de 120, parce que « tout le monde en parle et elle a déjà fait +200 % ».",
          question: "Quel risque doit-il comprendre ?",
          options: [
            "Aucun : une action qui a monté continue de monter",
            "Avec un PER de 120, le marché anticipe une croissance exceptionnelle ; si les résultats déçoivent, le cours peut chuter fortement. La hausse passée ne garantit rien, et concentrer son épargne sur une seule action est très risqué",
            "Un PER élevé garantit la sécurité",
          ],
          answer: 1,
          explain:
            "Le prix intègre déjà beaucoup d’optimisme. Comprendre les attentes contenues dans le cours aide à mesurer le risque.",
        },
        {
          type: "fiche",
          title: "Actions",
          points: [
            "Action = <b>part du capital</b> : vote, <b>dividende</b>, <b>plus-value</b> ; payé en dernier en cas de faillite.",
            "<b>Capitalisation</b> = cours × nombre d’actions ; <b>PER</b> = cours ÷ bénéfice par action ; le prix reflète les bénéfices <b>futurs</b>.",
            "Ordres : <b>au marché</b> (rapide) ou <b>à cours limité</b> (prix maîtrisé) ; attention aux <b>frais</b> et à la liquidité.",
            "Familles : croissance, rendement, cycliques, défensives.",
          ],
          retenir: "Acheter une action, c’est acheter une part des bénéfices futurs d’une entreprise, au prix fixé par l’optimisme ou le pessimisme du marché.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les obligations et les taux",
      minutes: 17,
      objectives: ["Comprendre le fonctionnement d’une obligation", "Comprendre le lien entre taux d’intérêt et prix"],
      steps: [
        {
          type: "lesson",
          title: "Prêter à un État ou à une entreprise",
          slides: [
            {
              title: "Qu’est-ce qu’une obligation ?",
              body:
                "<ul><li>Une <b>obligation</b> est un titre de <b>dette</b> : l’investisseur prête de l’argent à un État ou à une entreprise.</li><li>Il reçoit un intérêt régulier, le <b>coupon</b>, puis le remboursement du <b>nominal</b> à l’<b>échéance</b> (maturité).</li><li>Exemple : obligation de 1 000 €, coupon de 3 %, échéance 10 ans : 30 € par an pendant 10 ans, puis 1 000 € remboursés.</li><li>En cas de faillite, les créanciers obligataires passent <b>avant</b> les actionnaires.</li><li>En France, l’État emprunte avec des <b>OAT</b> (obligations assimilables du Trésor).</li></ul>",
            },
            {
              title: "Prix et taux évoluent en sens inverse",
              body:
                "<p>C’est la règle la plus importante :</p><ul><li>Tu détiens une obligation qui rapporte 3 %. Les <b>taux montent</b> : les nouvelles obligations rapportent 4 %. Personne ne voudra de la tienne au même prix : son <b>prix baisse</b>.</li><li>À l’inverse, quand les taux <b>baissent</b>, le prix des obligations existantes <b>monte</b>.</li><li>Plus l’échéance est <b>longue</b>, plus le prix est sensible aux variations de taux.</li></ul><p>En 2022, la forte hausse des taux a fait chuter le prix de nombreuses obligations : même les placements dits « sûrs » peuvent perdre de la valeur s’il faut les revendre avant l’échéance.</p>",
            },
            {
              title: "Le risque de crédit",
              body:
                "<ul><li>Les agences de <b>notation</b> (S&P, Moody’s, Fitch) évaluent la capacité d’un emprunteur à rembourser : de <b>AAA</b> (la meilleure) à <b>D</b> (défaut).</li><li><b>Catégorie investissement</b> : de AAA à BBB- ; <b>haut rendement</b> (« high yield », spéculatif) : en dessous.</li><li>Plus le risque de défaut est élevé, plus l’emprunteur doit payer un taux élevé : la différence avec un emprunt jugé sûr s’appelle le <b>spread</b> (écart de taux).</li><li>Un rendement très élevé signale presque toujours un <b>risque</b> élevé.</li></ul>",
            },
            {
              title: "Les banques centrales",
              body:
                "<ul><li>La <b>Banque centrale européenne</b> (BCE) fixe les <b>taux directeurs</b> de la zone euro ; sa mission principale est la stabilité des prix (objectif d’inflation de 2 % à moyen terme).</li><li>Quand l’inflation est trop forte, elle <b>monte</b> ses taux : le crédit devient plus cher, l’économie ralentit, et les prix des obligations et souvent des actions baissent.</li><li>Quand elle <b>baisse</b> ses taux, le crédit est moins cher, ce qui soutient l’activité et les marchés.</li><li>Aux États-Unis, la <b>Fed</b> joue ce rôle ; ses décisions influencent les marchés du monde entier.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Que fait le prix de l’obligation ?",
          instruction: "Dans chaque situation, le prix d’une obligation existante a tendance à…",
          categories: ["Monter", "Baisser"],
          items: [
            { text: "La BCE baisse ses taux directeurs", cat: 0, why: "Les nouvelles obligations rapportent moins : les anciennes valent plus." },
            { text: "Les taux du marché passent de 2 % à 4 %", cat: 1, why: "Prix et taux en sens inverse." },
            { text: "L’entreprise émettrice est dégradée de BBB à BB", cat: 1, why: "Risque de crédit plus élevé." },
            { text: "L’inflation recule et les taux baissent", cat: 0, why: "Baisse des taux." },
            { text: "Rumeurs de faillite de l’émetteur", cat: 1, why: "Les investisseurs exigent un rendement plus élevé." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Obligation", back: "Titre de dette : coupon régulier puis remboursement du nominal à l’échéance" },
            { front: "OAT", back: "Obligation assimilable du Trésor : emprunt de l’État français" },
            { front: "Règle d’or des obligations", back: "Quand les taux montent, les prix baissent (et inversement)" },
            { front: "Notation", back: "De AAA (meilleure) à D (défaut) ; haut rendement sous BBB-" },
            { front: "Spread", back: "Écart de taux avec un emprunteur jugé sûr : mesure du risque" },
            { front: "BCE", back: "Fixe les taux directeurs ; objectif d’inflation de 2 %" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Obligation de 1 000 €, coupon de 4 %. Combien reçois-tu chaque année ?", options: ["4 €", "40 €", "400 €"], answer: 1, explain: "4 % de 1 000 €." },
            { q: "Les taux d’intérêt montent fortement. Le prix de tes obligations…", options: ["monte", "baisse", "ne bouge jamais"], answer: 1, explain: "Sens inverse." },
            { q: "Une obligation qui offre 12 % de rendement quand l’État emprunte à 3 % signale…", options: ["une aubaine sans risque", "un risque de défaut élevé", "une erreur de calcul"], answer: 1, explain: "Le spread rémunère le risque." },
            { q: "En cas de faillite, qui est remboursé en priorité ?", options: ["Les actionnaires", "Les créanciers obligataires", "Personne"], answer: 1, explain: "La dette passe avant le capital." },
          ],
        },
        {
          type: "case",
          title: "Le fonds obligataire de 2022",
          story:
            "Sofia avait placé une partie de son épargne dans un fonds d’obligations longues en 2021, pensant que « les obligations ne baissent jamais ». En 2022, le fonds perd plus de 15 %.",
          question: "Que s’est-il passé ?",
          options: [
            "Le fonds a été mal géré par malhonnêteté",
            "Face à l’inflation, les banques centrales ont fortement monté leurs taux ; le prix des obligations existantes, surtout à longue échéance, a chuté. Les obligations comportent un risque de taux, en plus du risque de crédit",
            "Les obligations n’ont aucun risque, c’est impossible",
          ],
          answer: 1,
          explain:
            "Une obligation conservée jusqu’à l’échéance par un émetteur solide est remboursée ; mais un fonds obligataire ou une revente anticipée subit les variations de prix.",
        },
        {
          type: "fiche",
          title: "Obligations et taux",
          points: [
            "Obligation = <b>dette</b> : <b>coupon</b> + remboursement du <b>nominal</b> à l’échéance ; OAT pour l’État français.",
            "<b>Taux ↑ → prix ↓</b> (et inversement) ; plus l’échéance est longue, plus c’est sensible.",
            "<b>Notation</b> AAA → D ; <b>spread</b> = prime de risque ; rendement élevé = risque élevé.",
            "<b>BCE</b> (inflation 2 %) et <b>Fed</b> : leurs taux influencent tous les marchés.",
          ],
          retenir: "Quand les taux montent, les obligations existantes perdent de la valeur : « sûr » ne veut pas dire « sans variation ».",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Fonds, devises, matières premières, crypto et dérivés",
      minutes: 18,
      objectives: ["Connaître les autres grandes classes d’actifs", "Mesurer les risques des produits complexes"],
      steps: [
        {
          type: "lesson",
          title: "Au-delà des actions et des obligations",
          slides: [
            {
              title: "Les fonds et les ETF",
              body:
                "<ul><li>Un <b>fonds</b> (OPCVM, SICAV, FCP) regroupe l’argent de nombreux épargnants pour l’investir dans un portefeuille diversifié, géré par une société de gestion.</li><li><b>Gestion active</b> : le gérant choisit les titres pour battre son indice de référence ; frais plus élevés. Sur longue période, une majorité de fonds actifs font <b>moins bien</b> que leur indice après frais.</li><li><b>ETF</b> (tracker, fonds indiciel coté) : il réplique simplement un indice (CAC 40, MSCI World…), s’achète en Bourse comme une action, avec des <b>frais faibles</b>.</li><li>Un seul ETF « monde » peut donner accès à plus d’un millier d’entreprises : une diversification immédiate.</li></ul>",
            },
            {
              title: "Devises et matières premières",
              body:
                "<ul><li>Le <b>marché des changes</b> (forex) est le plus grand marché du monde : on y échange des devises (EUR/USD…). Il sert surtout aux entreprises qui importent ou exportent et aux banques.</li><li>Pour un particulier, spéculer sur les devises avec effet de levier est <b>très risqué</b> (voir ci-dessous).</li><li><b>Matières premières</b> : pétrole, gaz, métaux, produits agricoles ; l’<b>or</b> est souvent vu comme une valeur refuge, mais il ne verse aucun revenu et peut connaître de fortes variations.</li></ul>",
            },
            {
              title: "Les crypto-actifs",
              body:
                "<ul><li><b>Bitcoin</b>, ether et des milliers d’autres jetons : actifs numériques enregistrés sur une <b>blockchain</b>.</li><li>Très <b>volatils</b> : des baisses de 50 à 80 % ont eu lieu à plusieurs reprises ; certains projets ont totalement disparu ou étaient des fraudes.</li><li>Dans l’Union européenne, le règlement <b>MiCA</b> encadre désormais les prestataires (plateformes, émetteurs de stablecoins) : vérifier qu’une plateforme est autorisée sur le site de l’AMF.</li><li>Ne pas investir plus que ce qu’on est prêt à <b>perdre entièrement</b>, et se méfier des promesses de gains garantis.</li></ul>",
            },
            {
              title: "Les produits dérivés et l’effet de levier",
              body:
                "<ul><li>Un <b>dérivé</b> est un contrat dont la valeur dépend d’un autre actif : <b>contrats à terme</b> (futures), <b>options</b>, <b>CFD</b>.</li><li>Ils servent aux entreprises à se <b>couvrir</b> (une compagnie aérienne fixe le prix de son kérosène), mais aussi à spéculer.</li><li>L’<b>effet de levier</b> multiplie gains <b>et</b> pertes : avec un levier de 10, une baisse de 10 % fait perdre toute la mise.</li><li>Les régulateurs européens obligent les plateformes à afficher le <b>pourcentage de comptes de particuliers qui perdent de l’argent</b> sur les CFD : il est généralement de <b>70 à 90 %</b>. Une étude de l’AMF sur le forex avait montré que la grande majorité des particuliers perdaient de l’argent.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel niveau de risque ?",
          instruction: "Classe ces placements du moins risqué au plus risqué (en général).",
          categories: ["Risque faible", "Risque moyen à élevé", "Risque très élevé"],
          items: [
            { text: "Livret A", cat: 0, why: "Capital garanti, disponible." },
            { text: "ETF MSCI World détenu 15 ans", cat: 1, why: "Actions diversifiées : variations fortes à court terme." },
            { text: "CFD sur devises avec levier 30", cat: 2, why: "Effet de levier : pertes rapides." },
            { text: "Une petite cryptomonnaie peu connue", cat: 2, why: "Volatilité extrême, risque de disparition." },
            { text: "Action d’une seule entreprise", cat: 1, why: "Concentration du risque." },
            { text: "Fonds euros d’assurance-vie", cat: 0, why: "Capital généralement garanti par l’assureur." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fonds (OPCVM)", back: "Argent mis en commun, investi dans un portefeuille géré" },
            { front: "ETF", back: "Fonds indiciel coté, frais faibles, diversification immédiate" },
            { front: "Gestion active vs indicielle", back: "Une majorité de fonds actifs font moins bien que leur indice après frais, sur longue période" },
            { front: "Effet de levier", back: "Multiplie gains et pertes : levier 10 = -10 % efface la mise" },
            { front: "CFD particuliers", back: "En général 70 à 90 % des comptes perdent de l’argent (mention obligatoire)" },
            { front: "MiCA", back: "Règlement européen qui encadre les prestataires de crypto-actifs" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un ETF MSCI World permet…", options: ["d’investir dans une seule entreprise", "d’investir dans environ 1 400 entreprises en une seule fois", "de garantir son capital"], answer: 1, explain: "Diversification immédiate." },
            { q: "Avec un levier de 20, une baisse de 5 % du sous-jacent…", options: ["fait perdre 5 %", "efface toute la mise", "n’a aucun effet"], answer: 1, explain: "5 % × 20 = 100 %." },
            { q: "À quoi servent d’abord les dérivés pour une entreprise ?", options: ["À se couvrir contre une variation de prix", "À parier au casino", "À rien"], answer: 0, explain: "Ex. fixer le prix d’une matière première ou d’une devise." },
            { q: "Avant d’utiliser une plateforme crypto, tu vérifies…", options: ["qu’elle est autorisée sur le site de l’AMF", "qu’elle promet 20 % par mois", "qu’un influenceur la recommande"], answer: 0, explain: "Le cadre MiCA impose une autorisation." },
          ],
        },
        {
          type: "case",
          title: "Le compte de trading",
          story:
            "Karim ouvre un compte de trading forex avec 2 000 € et un levier de 30 après avoir vu des vidéos promettant « 5 000 € par mois ». En trois semaines, il a perdu 1 600 €.",
          question: "Qu’aurait-il dû savoir avant ?",
          options: [
            "Il n’a pas eu de chance, il doit déposer plus pour se refaire",
            "Avec un fort effet de levier, de petites variations suffisent à perdre beaucoup ; la majorité des particuliers perdent de l’argent sur ces produits. Il aurait dû comprendre le produit, ne risquer qu’une somme qu’il peut perdre, et se méfier des promesses de gains rapides",
            "Le forex est garanti par l’État",
          ],
          answer: 1,
          explain:
            "« Se refaire » en remettant de l’argent est l’erreur classique. Les promesses de revenus mensuels réguliers sur le trading sont un signal d’alerte.",
        },
        {
          type: "fiche",
          title: "Autres actifs",
          points: [
            "<b>Fonds</b> et <b>ETF</b> : diversification ; ETF = frais faibles ; la gestion active bat rarement son indice après frais.",
            "<b>Forex</b> et <b>matières premières</b> (or : refuge mais sans revenu, volatil).",
            "<b>Crypto-actifs</b> : volatilité extrême ; <b>MiCA</b> ; vérifier l’autorisation AMF ; ne miser que ce qu’on peut perdre.",
            "<b>Dérivés</b> et <b>levier</b> : couverture ou spéculation ; <b>70-90 %</b> des comptes CFD de particuliers perdants.",
          ],
          retenir: "Plus un produit est complexe et promet de gagner vite, plus il fait perdre la majorité de ceux qui l’utilisent.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Rendement, risque et diversification",
      minutes: 17,
      objectives: ["Comprendre le lien entre rendement et risque", "Utiliser la diversification, l’horizon et les intérêts composés"],
      steps: [
        {
          type: "lesson",
          title: "Il n’y a pas de rendement sans risque",
          slides: [
            {
              title: "Le couple rendement-risque",
              body:
                "<ul><li>Pour espérer un rendement plus élevé, il faut accepter un <b>risque</b> plus élevé : des variations plus fortes et la possibilité de pertes.</li><li>La <b>volatilité</b> mesure l’ampleur des variations d’un placement.</li><li>Sur très longues périodes, les <b>actions</b> ont historiquement rapporté davantage que les <b>obligations</b>, elles-mêmes plus que les placements monétaires, mais avec de fortes baisses temporaires (environ -50 % en 2008-2009, plus de -30 % en quelques semaines en mars 2020).</li><li>Les performances passées ne préjugent pas des performances futures.</li></ul>",
            },
            {
              title: "L’inflation, le risque invisible",
              body:
                "<ul><li>L’<b>inflation</b> réduit le pouvoir d’achat de l’argent : avec 2 % d’inflation par an, 1 000 € ne valent plus qu’environ 820 € de pouvoir d’achat au bout de 10 ans.</li><li><b>Rendement réel</b> = rendement affiché − inflation.</li><li>Un placement « sans risque » qui rapporte moins que l’inflation fait perdre du pouvoir d’achat.</li><li>Exemple : le Livret A rapporte <b>1,7 %</b> depuis le 1er août 2026 (net d’impôt), un taux révisé en fonction de l’inflation.</li></ul>",
            },
            {
              title: "La diversification",
              body:
                "<ul><li>Ne pas mettre tous ses œufs dans le même panier : répartir entre <b>classes d’actifs</b> (actions, obligations, monétaire, immobilier), <b>pays</b>, <b>secteurs</b> et <b>entreprises</b>.</li><li>Une entreprise peut faire faillite ; un indice mondial de 1 400 entreprises beaucoup moins.</li><li>La diversification réduit les risques <b>spécifiques</b> (propres à une entreprise), mais pas le risque de marché : en cas de krach, presque tout baisse ensemble à court terme.</li><li>Investir massivement dans l’entreprise qui nous emploie concentre deux risques : l’emploi et l’épargne.</li></ul>",
            },
            {
              title: "L’horizon et les intérêts composés",
              body:
                "<ul><li>Les <b>intérêts composés</b> : les gains produisent à leur tour des gains. À 5 % par an, un capital double en environ <b>14 ans</b> (règle de 72 : 72 ÷ taux ≈ années pour doubler).</li><li>L’<b>horizon</b> : plus on peut attendre longtemps, plus on peut supporter des placements volatils, car on a le temps de traverser les baisses.</li><li>Argent nécessaire dans 1 à 2 ans : placements sans risque. Retraite dans 25 ans : une part d’actions peut se justifier.</li><li>Investir <b>régulièrement</b> (chaque mois) lisse le prix d’achat et évite de chercher le « bon moment ».</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Rendement et risque", back: "Pour espérer plus, il faut accepter plus de variations et de pertes possibles" },
            { front: "Volatilité", back: "Ampleur des variations d’un placement" },
            { front: "Rendement réel", back: "Rendement affiché − inflation" },
            { front: "Diversification", back: "Réduit le risque propre à une entreprise, pas le risque de marché" },
            { front: "Règle de 72", back: "72 ÷ taux annuel ≈ nombre d’années pour doubler" },
            { front: "Investissement régulier", back: "Lisse le prix d’achat, évite de chercher le bon moment" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "À 6 % par an, en combien de temps un capital double-t-il environ ?", options: ["6 ans", "12 ans", "30 ans"], answer: 1, explain: "72 ÷ 6 = 12." },
            { q: "Un placement rapporte 2 % avec une inflation de 3 %. Le rendement réel est…", options: ["+5 %", "-1 %", "+2 %"], answer: 1, explain: "2 − 3 = -1 %." },
            { q: "La diversification protège-t-elle d’un krach mondial à court terme ?", options: ["Totalement", "Non, elle réduit surtout le risque propre à chaque entreprise", "Elle double les pertes"], answer: 1, explain: "En krach, presque tout baisse ensemble." },
            { q: "Tu auras besoin de cet argent dans 1 an pour un apport immobilier. Tu privilégies…", options: ["des actions", "un placement sans risque", "des crypto-actifs"], answer: 1, explain: "Horizon trop court pour la volatilité." },
          ],
        },
        {
          type: "case",
          title: "Tout sur une valeur",
          story:
            "Noa a placé toute son épargne de précaution sur l’action d’une seule entreprise qu’il connaît bien. Six mois plus tard, elle publie de mauvais résultats et chute de 40 %. Il a besoin de cet argent pour réparer sa voiture.",
          question: "Quelles erreurs a-t-il cumulées ?",
          options: [
            "Aucune, c’est la faute du marché",
            "Absence d’épargne de précaution disponible, horizon trop court pour des actions, et concentration sur une seule valeur au lieu de diversifier",
            "Il aurait dû choisir une action plus chère",
          ],
          answer: 1,
          explain:
            "L’ordre classique : d’abord une épargne de précaution sûre et disponible (souvent 3 à 6 mois de dépenses), ensuite seulement des placements à long terme et diversifiés.",
        },
        {
          type: "fiche",
          title: "Rendement et risque",
          points: [
            "Plus de rendement espéré = plus de <b>risque</b> ; actions > obligations > monétaire sur longue période, avec de <b>fortes baisses</b> temporaires.",
            "<b>Rendement réel</b> = rendement − inflation ; Livret A à <b>1,7 %</b> depuis le 1er août 2026.",
            "<b>Diversifier</b> : classes d’actifs, pays, secteurs, entreprises.",
            "<b>Horizon</b> long pour le risque ; <b>intérêts composés</b> (règle de 72) ; investir <b>régulièrement</b>.",
          ],
          retenir: "Le temps et la diversification sont les deux meilleurs alliés de l’investisseur particulier.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Ce qui fait bouger les marchés",
      minutes: 16,
      objectives: ["Identifier les facteurs qui font varier les cours", "Comprendre les bulles, les krachs et les biais des investisseurs"],
      steps: [
        {
          type: "lesson",
          title: "Pourquoi ça monte, pourquoi ça baisse",
          slides: [
            {
              title: "Les grands moteurs",
              body:
                "<table class='t'><tr><th>Facteur</th><th>Effet typique</th></tr><tr><td><b>Résultats des entreprises</b></td><td>Bénéfices meilleurs que prévu → hausse ; déception → baisse</td></tr><tr><td><b>Taux d’intérêt</b></td><td>Hausse des taux → pression sur les actions et les obligations</td></tr><tr><td><b>Inflation</b></td><td>Inflation forte → banques centrales plus restrictives</td></tr><tr><td><b>Croissance économique</b></td><td>Récession → baisse des bénéfices attendus</td></tr><tr><td><b>Géopolitique</b></td><td>Guerres, élections, sanctions, droits de douane → incertitude</td></tr><tr><td><b>Sentiment</b></td><td>Euphorie ou peur, souvent excessives</td></tr></table><p>Les marchés réagissent à l’écart entre la réalité et ce qui était <b>attendu</b>, pas à la nouvelle elle-même.</p>",
            },
            {
              title: "Bulles et krachs",
              body:
                "<ul><li><b>1929</b> : krach de Wall Street, suivi de la Grande Dépression.</li><li><b>2000</b> : éclatement de la <b>bulle Internet</b> ; le Nasdaq perd près de 80 % de 2000 à 2002.</li><li><b>2008</b> : crise des <b>subprimes</b> et faillite de Lehman Brothers ; les actions mondiales perdent environ la moitié de leur valeur.</li><li><b>2020</b> : chute brutale avec le Covid, puis rebond rapide.</li><li>Une bulle se reconnaît souvent à : « cette fois, c’est différent », hausse très rapide, achats à crédit, nouveaux investisseurs attirés par les gains des autres.</li></ul>",
            },
            {
              title: "Les marchés sont-ils prévisibles ?",
              body:
                "<ul><li>L’<b>hypothèse d’efficience</b> des marchés : les prix intègrent rapidement l’information disponible ; il est donc très difficile de battre le marché durablement.</li><li>Prévoir les mouvements de court terme est extrêmement difficile, même pour les professionnels.</li><li>Les meilleurs jours de Bourse surviennent souvent juste après les pires : sortir du marché pendant une baisse fait souvent manquer le rebond.</li><li>D’où l’intérêt de stratégies simples : diversifier, investir régulièrement, garder le cap sur le long terme.</li></ul>",
            },
            {
              title: "Les biais de l’investisseur",
              body:
                "<ul><li><b>Excès de confiance</b> : surestimer sa capacité à choisir les bonnes actions ou le bon moment.</li><li><b>Mimétisme</b> : acheter parce que tout le monde achète (peur de rater le train).</li><li><b>Aversion aux pertes</b> : une perte fait plus mal qu’un gain équivalent ne fait plaisir ; on garde trop longtemps les placements perdants.</li><li><b>Biais de récence</b> : croire que la tendance récente va continuer.</li><li><b>Biais de confirmation</b> : ne lire que ce qui confirme son avis.</li></ul><p>Antidote : une stratégie écrite à l’avance, et des décisions prises à froid.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel biais ?",
          instruction: "Quel biais comportemental illustre chaque situation ?",
          categories: ["Mimétisme", "Aversion aux pertes", "Excès de confiance"],
          items: [
            { text: "Acheter une crypto parce que tous ses amis en parlent", cat: 0, why: "Peur de rater le train." },
            { text: "Garder une action qui a perdu 60 % « en attendant qu’elle remonte »", cat: 1, why: "Refus de constater la perte." },
            { text: "Penser pouvoir anticiper chaque mouvement du CAC 40", cat: 2, why: "Surestimation de ses capacités." },
            { text: "Vendre ses gagnants trop tôt et garder ses perdants", cat: 1, why: "Effet de disposition, lié à l’aversion aux pertes." },
            { text: "Multiplier les achats-ventes, persuadé d’être plus malin que le marché", cat: 2, why: "Excès de confiance." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Les marchés réagissent à…", back: "l’écart entre la réalité et ce qui était attendu" },
            { front: "Bulle Internet", back: "2000 : le Nasdaq perd près de 80 % jusqu’en 2002" },
            { front: "Crise de 2008", back: "Subprimes, Lehman Brothers : actions mondiales divisées par deux environ" },
            { front: "Efficience des marchés", back: "Les prix intègrent vite l’information : difficile de battre le marché" },
            { front: "Sortir pendant une baisse", back: "Fait souvent manquer les meilleurs jours du rebond" },
            { front: "Aversion aux pertes", back: "Une perte fait plus mal qu’un gain équivalent ne fait plaisir" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une entreprise annonce un bénéfice en hausse de 10 %, mais le marché attendait +20 %. Le cours…", options: ["monte forcément", "peut baisser", "ne bouge jamais"], answer: 1, explain: "C’est l’écart avec les attentes qui compte." },
            { q: "Quand la BCE monte fortement ses taux, les actions ont tendance à…", options: ["être sous pression", "monter automatiquement", "ne pas réagir"], answer: 0, explain: "Le crédit plus cher pèse sur l’activité et la valorisation." },
            { q: "« Cette fois, c’est différent » est souvent un signe…", options: ["de bulle", "de prudence", "de krach terminé"], answer: 0, explain: "Phrase classique des périodes d’euphorie." },
            { q: "Pourquoi est-il risqué de sortir du marché pendant une baisse ?", options: ["On manque souvent les meilleurs jours du rebond", "C’est interdit", "Les frais sont gratuits"], answer: 0, explain: "Les meilleurs jours suivent souvent les pires." },
          ],
        },
        {
          type: "case",
          title: "Mars 2020",
          story:
            "En mars 2020, Sofia voit son placement en actions mondiales perdre plus de 30 % en quelques semaines. Paniquée, elle vend tout. Elle attend que « ça se calme » et ne réinvestit qu’en 2021, à un niveau plus élevé qu’avant la crise.",
          question: "Quelle leçon en tirer ?",
          options: [
            "Il faut toujours vendre quand ça baisse",
            "Vendre dans la panique transforme une baisse temporaire en perte définitive et fait souvent manquer le rebond ; avec un horizon long, une stratégie écrite à l’avance aide à garder le cap",
            "Il ne faut jamais investir en actions",
          ],
          answer: 1,
          explain:
            "Les baisses font partie de l’investissement en actions. Ne placer en actions que l’argent dont on n’aura pas besoin avant longtemps permet de les traverser.",
        },
        {
          type: "fiche",
          title: "Ce qui fait bouger les marchés",
          points: [
            "Moteurs : <b>résultats</b>, <b>taux</b>, <b>inflation</b>, croissance, géopolitique, <b>sentiment</b> ; réaction à l’écart avec les <b>attentes</b>.",
            "Krachs : <b>1929</b>, <b>2000</b> (bulle Internet), <b>2008</b> (subprimes), <b>2020</b> (Covid).",
            "Marchés difficiles à prévoir ; les meilleurs jours suivent souvent les pires.",
            "Biais : <b>excès de confiance</b>, <b>mimétisme</b>, <b>aversion aux pertes</b>, récence, confirmation.",
          ],
          retenir: "Le pire ennemi de l’investisseur est souvent lui-même : une stratégie écrite à l’avance protège des décisions de panique.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Investir en France : les enveloppes",
      minutes: 17,
      objectives: ["Connaître les principales enveloppes d’épargne et d’investissement", "Comprendre leur fiscalité dans les grandes lignes"],
      steps: [
        {
          type: "lesson",
          title: "Où placer, avec quelle fiscalité",
          slides: [
            {
              title: "L’épargne de précaution",
              body:
                "<ul><li><b>Livret A</b> : <b>1,7 %</b> net depuis le 1er août 2026, plafond <b>22 950 €</b>, disponible à tout moment, sans impôt.</li><li><b>LDDS</b> : même taux, plafond 12 000 €.</li><li><b>LEP</b> : taux plus élevé, réservé aux revenus modestes.</li><li>Repère courant : garder environ <b>3 à 6 mois de dépenses</b> en épargne de précaution avant d’investir à long terme.</li></ul>",
            },
            {
              title: "Le PEA",
              body:
                "<ul><li><b>Plan d’épargne en actions</b> : pour investir en actions européennes et en fonds ou ETF éligibles (y compris certains ETF « monde » construits pour être éligibles).</li><li>Plafond de versements : <b>150 000 €</b> (PEA classique).</li><li>Après <b>5 ans</b>, les gains sont <b>exonérés d’impôt sur le revenu</b> lors des retraits ; seuls les prélèvements sociaux restent dus.</li><li>Un retrait avant 5 ans entraîne en principe la clôture du plan et la taxation des gains (sauf exceptions).</li><li>L’ouvrir tôt, même avec peu, permet de « prendre date ».</li></ul>",
            },
            {
              title: "Assurance-vie, compte-titres, PER",
              body:
                "<ul><li><b>Assurance-vie</b> : fonds en euros (capital généralement garanti, rendement modeste) et unités de compte (fonds, ETF, risqués). Fiscalité avantageuse après <b>8 ans</b> et avantages pour la transmission.</li><li><b>Compte-titres ordinaire</b> : sans plafond, accès à toutes les actions du monde, mais pas d’avantage fiscal.</li><li><b>PER</b> (plan d’épargne retraite) : versements déductibles du revenu imposable (dans certaines limites), argent en principe bloqué jusqu’à la retraite (sauf cas de déblocage anticipé, dont l’achat de la résidence principale).</li></ul>",
            },
            {
              title: "La fiscalité en bref (2026)",
              body:
                "<ul><li>Hors enveloppe, la plupart des revenus du capital (dividendes, intérêts, plus-values sur compte-titres) sont soumis au <b>prélèvement forfaitaire unique (PFU)</b>, dit « flat tax ».</li><li>Pour les revenus 2026, il passe à <b>31,4 %</b> : 12,8 % d’impôt sur le revenu + <b>18,6 %</b> de prélèvements sociaux (contre 30 % auparavant). Certains revenus, comme ceux de l’assurance-vie, restent soumis à des prélèvements sociaux de 17,2 %.</li><li>On peut opter pour le barème progressif de l’impôt si c’est plus favorable.</li><li>La fiscalité change souvent : vérifier sur impots.gouv.fr ou auprès d’un professionnel avant toute décision.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle enveloppe ?",
          instruction: "Quelle enveloppe correspond le mieux à chaque besoin ?",
          categories: ["Livret A / LDDS", "PEA", "Assurance-vie / PER"],
          items: [
            { text: "Épargne de précaution pour les imprévus", cat: 0, why: "Disponible et sans risque." },
            { text: "Investir en ETF actions européennes ou éligibles sur 10 ans", cat: 1, why: "Exonération d’impôt sur le revenu après 5 ans." },
            { text: "Préparer la retraite en réduisant ses impôts aujourd’hui", cat: 2, why: "Le PER permet de déduire les versements." },
            { text: "Transmettre un capital à ses proches dans de bonnes conditions", cat: 2, why: "Atout de l’assurance-vie." },
            { text: "Mettre de côté pour des vacances dans 6 mois", cat: 0, why: "Horizon court." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Livret A (novembre 2026)", back: "1,7 % net depuis le 1er août 2026, plafond 22 950 €" },
            { front: "Épargne de précaution", back: "Environ 3 à 6 mois de dépenses, disponible et sans risque" },
            { front: "PEA", back: "Plafond 150 000 € ; gains exonérés d’impôt sur le revenu après 5 ans (prélèvements sociaux dus)" },
            { front: "Assurance-vie", back: "Fonds euros + unités de compte ; fiscalité avantageuse après 8 ans" },
            { front: "PER", back: "Versements déductibles, argent bloqué jusqu’à la retraite (sauf exceptions)" },
            { front: "PFU 2026", back: "31,4 % = 12,8 % d’impôt + 18,6 % de prélèvements sociaux" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Après combien d’années les gains d’un PEA sont-ils exonérés d’impôt sur le revenu ?", options: ["2 ans", "5 ans", "8 ans"], answer: 1, explain: "Les prélèvements sociaux restent dus." },
            { q: "Quel est le taux du PFU sur les revenus 2026 de la plupart des placements hors enveloppe ?", options: ["30 %", "31,4 %", "45 %"], answer: 1, explain: "Hausse de la CSG de 1,4 point." },
            { q: "Le fonds en euros de l’assurance-vie est…", options: ["très risqué", "en général garanti en capital, avec un rendement modeste", "un ETF"], answer: 1, explain: "Les unités de compte, elles, sont risquées." },
            { q: "Avant d’investir en actions, que conseille-t-on généralement ?", options: ["Constituer une épargne de précaution", "Emprunter pour investir", "Tout mettre sur un compte-titres"], answer: 0, explain: "Pour ne pas devoir vendre au mauvais moment." },
          ],
        },
        {
          type: "case",
          title: "Le premier investissement de Karim",
          story:
            "Karim, 25 ans, a 8 000 € d’épargne et souhaite « commencer à investir en Bourse ». Ses dépenses mensuelles sont d’environ 1 500 €. Il n’a pas de livret.",
          question: "Quelle démarche est la plus cohérente, dans les grandes lignes ?",
          options: [
            "Tout placer en crypto-actifs",
            "Garder d’abord une épargne de précaution (par exemple 5 000 à 6 000 € sur un livret), puis ouvrir un PEA pour y investir progressivement et régulièrement sur un support diversifié, en comprenant les risques ; se renseigner auprès de sources officielles ou d’un conseiller agréé",
            "Tout mettre sur l’action d’une seule entreprise",
          ],
          answer: 1,
          explain:
            "Ce n’est pas un conseil personnalisé, mais l’ordre logique est souvent : précaution d’abord, puis investissement long terme, diversifié et régulier, dans une enveloppe adaptée.",
        },
        {
          type: "fiche",
          title: "Enveloppes",
          points: [
            "<b>Précaution</b> : Livret A (<b>1,7 %</b>, plafond <b>22 950 €</b>), LDDS, LEP ; 3 à 6 mois de dépenses.",
            "<b>PEA</b> : 150 000 €, exonération d’impôt sur le revenu après <b>5 ans</b>.",
            "<b>Assurance-vie</b> (8 ans, transmission), <b>compte-titres</b> (sans plafond ni avantage), <b>PER</b> (déduction, retraite).",
            "<b>PFU 31,4 %</b> sur la plupart des revenus 2026 du capital ; fiscalité évolutive : vérifier.",
          ],
          retenir: "L’ordre compte : précaution d’abord, puis long terme dans une enveloppe adaptée à l’objectif et à l’horizon.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Se protéger et investir avec méthode",
      minutes: 16,
      objectives: ["Reconnaître les arnaques financières", "Retenir les règles d’un investissement prudent"],
      steps: [
        {
          type: "lesson",
          title: "Garder son argent… et sa tête",
          slides: [
            {
              title: "Les arnaques courantes",
              body:
                "<ul><li><b>Faux placements</b> promettant un rendement élevé et garanti (« 10 % par mois sans risque »).</li><li><b>Usurpation</b> d’identité de banques, d’assureurs ou de régulateurs (faux sites, faux conseillers au téléphone).</li><li><b>Trading et crypto</b> : fausses plateformes, robots de trading « miracles », « formations » vendues par des influenceurs.</li><li><b>Placements atypiques</b> : vin, diamants, forêts, panneaux solaires… avec promesses irréalistes.</li><li>Arnaque au « recouvrement » : on promet aux victimes de récupérer leur argent… contre de nouveaux frais.</li></ul>",
            },
            {
              title: "Les signaux d’alerte",
              body:
                "<ul><li>Rendement <b>élevé et garanti</b> : cela n’existe pas.</li><li><b>Pression</b> pour décider vite (« offre limitée »).</li><li>Contact <b>non sollicité</b> (appel, message, réseau social).</li><li>Société inconnue, siège à l’étranger, coordonnées changeantes.</li><li>Demande de virement vers un compte à l’étranger, de paiement en crypto ou de codes de carte.</li></ul><p>Réflexes : vérifier sur le site de l’<b>AMF</b> (listes noires et registre des acteurs autorisés : ORIAS, REGAFI), ne jamais donner ses identifiants, appeler AMF Épargne Info Service en cas de doute.</p>",
            },
            {
              title: "Les règles de base",
              body:
                "<ol><li>Une <b>épargne de précaution</b> avant tout.</li><li>N’investir que de l’argent dont on n’aura <b>pas besoin</b> avant longtemps.</li><li>Ne jamais investir dans ce que l’on <b>ne comprend pas</b>.</li><li><b>Diversifier</b>.</li><li>Surveiller les <b>frais</b> : 1 % de frais en plus par an pèse lourd sur 20 ans.</li><li>Investir <b>régulièrement</b> plutôt que chercher le bon moment.</li><li>Ne pas <b>emprunter</b> pour spéculer.</li><li>Écrire sa stratégie et s’y tenir, sauf changement de situation personnelle.</li></ol>",
            },
            {
              title: "Se faire conseiller",
              body:
                "<ul><li>Un <b>conseiller en investissements financiers</b> (CIF) doit être enregistré à l’<b>ORIAS</b> ; une banque ou une société de gestion doit être agréée.</li><li>Le conseiller doit évaluer ta situation, tes objectifs, ton expérience et ta tolérance au risque avant de recommander un produit.</li><li>Demander comment il est rémunéré (honoraires ou commissions sur les produits vendus).</li><li>Sources gratuites et neutres : <b>AMF</b>, <b>La finance pour tous</b> (Institut pour l’éducation financière du public), Banque de France.</li></ul><p>Ce cours t’a donné les bases pour comprendre ; une décision d’investissement dépend de ta situation personnelle.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Sérieux ou suspect ?",
          instruction: "Cette proposition est-elle plutôt sérieuse ou suspecte ?",
          categories: ["Plutôt sérieux", "Suspect"],
          items: [
            { text: "« 15 % par mois garantis grâce à notre robot de trading »", cat: 1, why: "Rendement élevé ET garanti : impossible." },
            { text: "Un ETF MSCI World avec 0,2 % de frais annuels, risque de perte indiqué", cat: 0, why: "Produit transparent sur ses risques et ses frais." },
            { text: "Un « conseiller » vous contacte sur WhatsApp et demande un virement vers Chypre", cat: 1, why: "Contact non sollicité, compte à l’étranger." },
            { text: "Un conseiller enregistré à l’ORIAS qui vous questionne sur vos objectifs et votre horizon", cat: 0, why: "Démarche réglementée." },
            { text: "« Dernières places, décidez avant ce soir »", cat: 1, why: "Pression à la décision." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Rendement élevé et garanti", back: "N’existe pas : signal d’arnaque" },
            { front: "Listes noires", back: "Publiées par l’AMF : à consulter avant d’investir" },
            { front: "ORIAS", back: "Registre des intermédiaires (dont conseillers en investissements financiers)" },
            { front: "Effet des frais", back: "1 % de plus par an pèse lourd sur 20 ans" },
            { front: "Règle d’or", back: "Ne jamais investir dans ce qu’on ne comprend pas" },
            { front: "Arnaque au recouvrement", back: "Promettre de récupérer l’argent perdu contre de nouveaux frais" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une plateforme promet 8 % par mois sans risque. Tu…", options: ["investis vite", "vérifies les listes noires de l’AMF et t’abstiens", "empruntes pour investir plus"], answer: 1, explain: "Promesse impossible." },
            { q: "Où vérifier qu’un conseiller financier est enregistré ?", options: ["Sur l’ORIAS", "Sur ses réseaux sociaux", "Nulle part"], answer: 0, explain: "Registre officiel des intermédiaires." },
            { q: "Pourquoi les frais comptent-ils autant ?", options: ["Ils se cumulent chaque année et réduisent l’effet des intérêts composés", "Ils sont remboursés", "Ils n’ont aucun effet"], answer: 0, explain: "Sur 20 ans, l’écart devient important." },
            { q: "Après une arnaque, une société propose de récupérer ton argent moyennant des frais. C’est…", options: ["une aide officielle", "souvent une seconde arnaque", "obligatoire"], answer: 1, explain: "Arnaque au recouvrement." },
          ],
        },
        {
          type: "case",
          title: "L’influenceur",
          story:
            "Hugo suit un influenceur qui affiche des voitures de luxe et vend une « formation trading » à 997 €, avec accès à un groupe privé où il donne des « signaux » d’achat sur une plateforme étrangère.",
          question: "Que doit-il vérifier ?",
          options: [
            "Rien, les voitures prouvent que ça marche",
            "Si la plateforme est autorisée (registres de l’AMF, listes noires), si l’influenceur est enregistré comme conseiller, quels sont les risques réels ; et se rappeler que le revenu de l’influenceur vient souvent de la vente de formations et des commissions des plateformes, pas du trading",
            "Il doit acheter la formation la plus chère",
          ],
          answer: 1,
          explain:
            "La promotion de produits financiers par des influenceurs est encadrée en France depuis 2023. Un train de vie affiché ne prouve rien sur la performance réelle.",
        },
        {
          type: "fiche",
          title: "Se protéger",
          points: [
            "Arnaques : rendements <b>garantis</b>, <b>usurpation</b>, fausses plateformes, placements atypiques, <b>recouvrement</b>.",
            "Alertes : rendement élevé et garanti, <b>pression</b>, contact non sollicité, virement à l’étranger ou en crypto.",
            "Vérifier : <b>listes noires AMF</b>, <b>ORIAS</b>, REGAFI ; AMF Épargne Info Service.",
            "Règles : précaution, horizon, <b>comprendre</b>, diversifier, <b>frais bas</b>, régularité, pas d’emprunt pour spéculer.",
          ],
          retenir: "Si c’est trop beau pour être vrai, c’est que ce n’est pas vrai.",
        },
      ],
    },
  ],
});
