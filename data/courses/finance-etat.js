/* ============================================================
   COURS : Finance d’État — budget, impôts, déficit, dette
   École de Finance · 8 séances de 15 à 20 minutes
   Chiffres vérifiés fin octobre 2026 (Insee, Eurostat, PLF 2027).
   Les débats politiques sont présentés de façon neutre :
   arguments de chaque camp, sans prendre parti.
   À METTRE À JOUR chaque année (nouveau budget, chiffres Insee).
   ============================================================ */
AGORA.registerCourse({
  id: "finance-etat",
  faculty: "finance",
  title: "Finance d’État — budget, impôts, déficit, dette",
  subtitle: "Comprendre l’argent public et les débats budgétaires",
  color: "#1f4f7a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre l’argent public en France : qui dépense quoi, comment se vote le budget, d’où viennent les impôts, pourquoi la France est en déficit depuis des décennies, comment fonctionne la dette, ce que demande l’Europe, quelles options s’affrontent pour redresser les comptes, et comment lire l’actualité budgétaire sans se faire piéger par les chiffres. Chiffres arrêtés fin octobre 2026.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Qui dépense l’argent public ?",
      minutes: 16,
      objectives: ["Connaître les trois grandes familles d’administrations publiques", "Savoir où va l’argent public"],
      steps: [
        {
          type: "lesson",
          title: "L’argent public",
          slides: [
            {
              title: "Pas seulement l’État",
              body:
                "<p>Quand on parle de « dépenses publiques », on additionne trois grandes familles, appelées ensemble les <b>administrations publiques</b> :</p><div class='tiers'><div><b>L’État</b><span>ministères, armée, police, justice, éducation… et des organismes rattachés</span></div><div><b>La Sécurité sociale</b><span>retraites, santé, famille, chômage</span></div><div><b>Les collectivités locales</b><span>communes, départements, régions</span></div></div><p>Chacune a son propre budget, ses recettes et sa dette.</p>",
            },
            {
              title: "Les ordres de grandeur",
              body:
                "<p>En 2025, selon l’Insee :</p><table class='t'><tr><td>Dépenses publiques</td><td><b>1 714 milliards €</b>, soit <b>57,3 %</b> du PIB</td></tr><tr><td>Recettes publiques</td><td><b>1 562 milliards €</b>, soit 52,2 % du PIB</td></tr><tr><td>Déficit (la différence)</td><td><b>152,5 milliards €</b>, soit 5,1 % du PIB</td></tr></table><p>Le <b>PIB</b> (produit intérieur brut) est la richesse produite en un an dans le pays, environ 3 000 milliards d’euros. On exprime souvent les chiffres publics en <b>% du PIB</b> pour pouvoir comparer d’une année à l’autre et entre pays.</p>",
            },
            {
              title: "Où va l’argent ?",
              body:
                "<ul><li>Le premier bloc, de loin, est la <b>protection sociale</b> : retraites (le plus gros poste), santé, famille, chômage, pauvreté. Elle représente environ la moitié des dépenses publiques.</li><li>Ensuite : <b>éducation</b>, <b>santé</b> hors assurance maladie, <b>sécurité et défense</b>, <b>transports</b> et infrastructures, <b>services généraux</b>.</li><li>Et les <b>intérêts de la dette</b>, en forte hausse (séance 5).</li></ul><p>La France fait partie des pays européens où les dépenses publiques sont les plus élevées par rapport au PIB. C’est le reflet d’un choix de société : beaucoup de services et de protections passent par le public plutôt que par le privé.</p>",
            },
            {
              title: "Fonctionnement, investissement, transferts",
              body:
                "<ul><li><b>Dépenses de fonctionnement</b> : salaires des agents publics, entretien, fournitures.</li><li><b>Dépenses d’investissement</b> : routes, écoles, hôpitaux, équipements militaires. Elles produisent des effets sur des années.</li><li><b>Transferts</b> (prestations sociales, subventions) : de l’argent versé à des ménages ou des entreprises. C’est la plus grosse catégorie.</li></ul><p>Cette distinction compte dans les débats : certains jugent normal d’emprunter pour investir, beaucoup moins pour payer le fonctionnement courant.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Qui paie ?",
          instruction: "Quelle administration publique finance principalement chaque dépense ?",
          categories: ["L’État", "La Sécurité sociale", "Les collectivités locales"],
          items: [
            { text: "Ta pension de retraite de base", cat: 1, why: "Versée par l’assurance vieillesse de la Sécurité sociale." },
            { text: "Le salaire d’un professeur de lycée", cat: 0, why: "Les enseignants sont payés par l’Éducation nationale (État)." },
            { text: "Le remboursement d’une consultation chez le médecin", cat: 1, why: "Assurance maladie." },
            { text: "La construction d’un collège", cat: 2, why: "Les collèges relèvent des départements." },
            { text: "L’achat d’avions de chasse", cat: 0, why: "La défense est une compétence de l’État." },
            { text: "Le ramassage des ordures et l’éclairage public de ta ville", cat: 2, why: "Compétences des communes et intercommunalités." },
            { text: "Les allocations familiales", cat: 1, why: "Branche famille (CAF)." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Administrations publiques", back: "État, Sécurité sociale, collectivités locales (et organismes rattachés)." },
            { front: "PIB", back: "Richesse produite en un an dans le pays : sert de repère pour comparer dépenses, déficit et dette." },
            { front: "Dépenses publiques 2025", back: "1 714 milliards €, 57,3 % du PIB (Insee)." },
            { front: "Premier poste de dépense publique", back: "La protection sociale, en tête les retraites." },
            { front: "Transferts", back: "Argent versé par le public à des ménages ou entreprises : prestations sociales, subventions." },
            { front: "Dépenses d’investissement", back: "Routes, écoles, équipements : effets sur plusieurs années." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Les « dépenses publiques » comprennent…", options: ["seulement le budget de l’État", "l’État, la Sécurité sociale et les collectivités locales", "seulement les salaires des fonctionnaires"], answer: 1, explain: "On additionne toutes les administrations publiques." },
            { q: "Quel est le premier poste des dépenses publiques en France ?", options: ["La défense", "L’éducation", "La protection sociale, et d’abord les retraites"], answer: 2, explain: "La protection sociale pèse environ la moitié des dépenses publiques." },
            { q: "En 2025, les dépenses publiques représentaient environ…", options: ["25 % du PIB", "57 % du PIB", "90 % du PIB"], answer: 1, explain: "57,3 % selon l’Insee." },
            { q: "Pourquoi exprimer les chiffres publics en % du PIB ?", options: ["Pour les rendre plus petits", "Pour comparer dans le temps et entre pays de tailles différentes", "C’est une obligation européenne sans intérêt"], answer: 1, explain: "Un même montant n’a pas le même poids dans une économie qui grandit ou dans un petit pays." },
          ],
        },
        {
          type: "case",
          title: "Le débat au comptoir",
          story:
            "Au café, Marc affirme : « Si l’État arrêtait de payer autant de fonctionnaires, on n’aurait plus de déficit. » Les chiffres 2025 : 1 714 milliards € de dépenses publiques, dont environ la moitié pour la protection sociale, et un déficit de 152,5 milliards €.",
          question: "Que peut-on lui répondre, chiffres à l’appui ?",
          options: [
            "Il a raison : le fonctionnement de l’État représente l’essentiel des dépenses",
            "Le sujet est plus large : la plus grosse part des dépenses publiques est la protection sociale, et l’État n’est qu’une des trois familles d’administrations",
            "Les fonctionnaires sont payés par l’Europe, donc ça ne change rien",
          ],
          answer: 1,
          explain:
            "On peut débattre du nombre d’agents publics, mais le déficit dépend de l’ensemble : retraites, santé, collectivités, intérêts, recettes. Avant de défendre une solution, il faut savoir où va vraiment l’argent.",
        },
        {
          type: "fiche",
          title: "Qui dépense l’argent public ?",
          points: [
            "Trois familles : <b>État</b>, <b>Sécurité sociale</b>, <b>collectivités locales</b>.",
            "2025 : dépenses <b>1 714 Md€</b> (57,3 % du PIB), recettes 1 562 Md€, déficit <b>152,5 Md€</b> (5,1 %).",
            "Premier poste : la <b>protection sociale</b>, en tête les <b>retraites</b>.",
            "Fonctionnement, investissement, <b>transferts</b> (la plus grosse catégorie).",
            "Toujours raisonner en <b>% du PIB</b> pour comparer.",
          ],
          retenir: "Avant de dire où couper, regarde où va l’argent.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Comment se vote le budget",
      minutes: 17,
      objectives: ["Suivre le parcours d’une loi de finances", "Comprendre le rôle du Parlement, du 49.3 et de la Cour des comptes"],
      steps: [
        {
          type: "lesson",
          title: "Le budget",
          slides: [
            {
              title: "Deux lois chaque automne",
              body:
                "<ul><li>La <b>loi de finances</b> (LF) : le budget de l’<b>État</b>. Elle autorise les impôts et fixe les dépenses de chaque ministère.</li><li>La <b>loi de financement de la Sécurité sociale</b> (LFSS) : les objectifs de dépenses de la sécu (dont l’<b>Ondam</b>, l’objectif de dépenses d’assurance maladie) et ses recettes.</li></ul><p>Les collectivités locales votent leurs propres budgets, qui doivent être <b>équilibrés</b> en fonctionnement : elles ne peuvent emprunter que pour investir.</p>",
            },
            {
              title: "Le calendrier",
              body:
                "<ol><li><b>Printemps-été</b> : le gouvernement prépare, arbitre entre ministères.</li><li><b>Début octobre</b> (au plus tard le premier mardi d’octobre) : le projet de loi de finances (<b>PLF</b>) est déposé à l’Assemblée nationale.</li><li><b>Octobre-décembre</b> : examen et amendements à l’Assemblée puis au Sénat. Le Parlement dispose de <b>70 jours</b> au total.</li><li><b>Avant le 31 décembre</b> : adoption, contrôle du Conseil constitutionnel, promulgation.</li><li><b>Au printemps suivant</b> : une loi constate les résultats de l’année écoulée.</li></ol>",
            },
            {
              title: "Les règles qui encadrent le vote",
              body:
                "<ul><li>Les députés et sénateurs ne peuvent pas proposer d’amendement qui <b>augmente une charge publique</b> ou <b>diminue une ressource</b> sans compensation (article 40 de la Constitution).</li><li>Le budget est présenté en <b>missions</b> (grandes politiques) et <b>programmes</b>, avec des objectifs et des indicateurs de performance (loi organique de 2001, dite LOLF).</li><li>Le gouvernement peut engager sa responsabilité avec l’<b>article 49.3</b> : le texte est adopté sans vote, sauf si une motion de censure renverse le gouvernement.</li><li>Si le budget n’est pas voté à temps, une <b>loi spéciale</b> permet de continuer à lever les impôts existants et à payer l’essentiel, en attendant.</li></ul>",
            },
            {
              title: "Les budgets 2026 et 2027",
              body:
                "<p>Sans majorité absolue à l’Assemblée depuis 2022, les budgets sont devenus difficiles à faire adopter.</p><ul><li>Le budget <b>2026</b> n’a été promulgué qu’en <b>février 2026</b>, adopté avec le 49.3. Le budget de la Sécurité sociale 2026 a, lui, été voté grâce à un compromis politique.</li><li>Le projet de budget <b>2027</b>, présenté le 1er octobre 2026 par le gouvernement de Sébastien Lecornu, vise un déficit de <b>5 % du PIB</b> en 2027, avec un effort annoncé de 54 milliards d’euros. Son examen se déroule en pleine préparation de l’élection présidentielle d’avril 2027.</li></ul><p>À suivre : le texte peut encore beaucoup évoluer au Parlement.</p>",
            },
            {
              title: "Les contrôleurs",
              body:
                "<ul><li>La <b>Cour des comptes</b> : vérifie les comptes de l’État et de la Sécurité sociale, évalue les politiques publiques, alerte sur les dérives.</li><li>Le <b>Haut Conseil des finances publiques</b> : donne un avis sur le réalisme des prévisions de croissance et de déficit du gouvernement.</li><li>Les <b>commissions des finances</b> de l’Assemblée et du Sénat : contrôlent l’exécution du budget.</li><li>La <b>Commission européenne</b> : examine les projets de budget des pays de la zone euro (séance 6).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Loi de finances", back: "Le budget de l’État : autorise les impôts et fixe les crédits des ministères." },
            { front: "LFSS", back: "Loi de financement de la Sécurité sociale : objectifs de dépenses (dont l’Ondam) et recettes." },
            { front: "PLF", back: "Projet de loi de finances, déposé au plus tard le premier mardi d’octobre." },
            { front: "Article 40", back: "Les parlementaires ne peuvent pas créer une dépense ou réduire une recette sans compensation." },
            { front: "Article 49.3", back: "Adoption d’un texte sans vote, sauf motion de censure votée." },
            { front: "Loi spéciale", back: "Permet de lever les impôts et de payer l’essentiel si le budget n’est pas adopté à temps." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Combien de jours le Parlement a-t-il pour examiner le projet de loi de finances ?", options: ["30 jours", "70 jours", "6 mois"], answer: 1, explain: "70 jours au total pour les deux chambres." },
            { q: "Un député propose de supprimer une taxe sans prévoir de recette en échange. Son amendement est…", options: ["recevable", "irrecevable (article 40)", "transmis au Conseil d’État"], answer: 1, explain: "L’article 40 interdit de diminuer une ressource publique sans compensation." },
            { q: "Une commune peut-elle emprunter pour payer les salaires de ses agents ?", options: ["Oui", "Non, son budget de fonctionnement doit être équilibré ; l’emprunt sert à investir"], answer: 1, explain: "C’est la « règle d’or » des collectivités locales." },
            { q: "Quel organisme juge si les prévisions de croissance du gouvernement sont réalistes ?", options: ["La Banque de France", "Le Haut Conseil des finances publiques", "Le Conseil d’État"], answer: 1, explain: "Il est rattaché à la Cour des comptes." },
          ],
        },
        {
          type: "case",
          title: "Le 31 décembre approche",
          story:
            "Le 20 décembre, le budget de l’année suivante n’est toujours pas adopté : l’Assemblée n’a pas de majorité et le gouvernement hésite à utiliser le 49.3. Ton cousin s’inquiète : « Au 1er janvier, plus personne ne sera payé, les impôts vont s’arrêter ? »",
          question: "Que se passe-t-il en réalité ?",
          options: [
            "L’État s’arrête comme aux États-Unis (« shutdown ») : fonctionnaires sans salaire",
            "Une loi spéciale permet de continuer à percevoir les impôts existants et à payer les dépenses essentielles en attendant le vrai budget",
            "Le budget de l’année précédente est automatiquement reconduit pour toute l’année",
          ],
          answer: 1,
          explain:
            "La France n’a pas de « shutdown » : la loi spéciale assure la continuité. Mais elle ne permet pas de nouvelles mesures ni de nouveaux investissements : c’est un service minimum en attendant le budget, comme fin 2024.",
        },
        {
          type: "fiche",
          title: "Le vote du budget",
          points: [
            "Deux lois : <b>loi de finances</b> (État) et <b>LFSS</b> (Sécurité sociale). Collectivités : budgets équilibrés en fonctionnement.",
            "PLF déposé début octobre ; <b>70 jours</b> de débat ; adoption avant le 31 décembre.",
            "<b>Article 40</b> : pas de nouvelle dépense ni de recette en moins sans compensation.",
            "<b>49.3</b> : adoption sans vote sauf censure. <b>Loi spéciale</b> si rien n’est voté à temps.",
            "Budget 2026 promulgué en février 2026 ; PLF 2027 : déficit visé à <b>5 %</b>.",
            "Contrôle : <b>Cour des comptes</b>, <b>Haut Conseil des finances publiques</b>, Parlement, Commission européenne.",
          ],
          retenir: "Le budget est voté chaque année, mais il se négocie de plus en plus difficilement.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les impôts et les cotisations",
      minutes: 18,
      objectives: ["Connaître les grands prélèvements et qui les paie", "Distinguer impôt progressif, proportionnel, direct et indirect"],
      steps: [
        {
          type: "lesson",
          title: "Les prélèvements obligatoires",
          slides: [
            {
              title: "Impôts + cotisations",
              body:
                "<p>Les <b>prélèvements obligatoires</b> regroupent les impôts et les cotisations sociales. En 2025, ils représentaient <b>43,6 % du PIB</b> (Insee), l’un des niveaux les plus élevés des pays développés.</p><ul><li>Un <b>impôt</b> finance les dépenses publiques en général, sans contrepartie directe.</li><li>Une <b>cotisation sociale</b> ouvre des droits (retraite, chômage, indemnités maladie) : elle est liée au travail.</li></ul><p>Les <b>cotisations sociales</b> forment le premier bloc des prélèvements, devant la TVA, la CSG et l’impôt sur le revenu.</p>",
            },
            {
              title: "Les grands prélèvements",
              body:
                "<table class='t'><tr><th>Prélèvement</th><th>Sur quoi</th><th>Pour qui</th></tr><tr><td><b>Cotisations sociales</b></td><td>Salaires et revenus d’activité</td><td>Sécurité sociale, chômage</td></tr><tr><td><b>TVA</b></td><td>Consommation</td><td>Première recette de l’État, partagée avec la sécu et les collectivités</td></tr><tr><td><b>CSG</b></td><td>Presque tous les revenus (salaires, retraites, capital)</td><td>Sécurité sociale</td></tr><tr><td><b>Impôt sur le revenu</b></td><td>Revenus des foyers</td><td>État</td></tr><tr><td><b>Impôt sur les sociétés</b></td><td>Bénéfices des entreprises</td><td>État</td></tr><tr><td><b>Impôts locaux</b></td><td>Propriété foncière, activité des entreprises</td><td>Collectivités</td></tr></table>",
            },
            {
              title: "Progressif ou proportionnel ?",
              body:
                "<ul><li>Un impôt <b>progressif</b> prélève un <b>pourcentage plus élevé</b> sur les revenus plus élevés. L’impôt sur le revenu fonctionne par <b>tranches</b> (0 %, 11 %, 30 %, 41 %, 45 %) : chaque taux ne s’applique qu’à la part du revenu qui se trouve dans sa tranche.</li><li>Un impôt <b>proportionnel</b> prélève le <b>même pourcentage</b> pour tous : la CSG sur les salaires, l’impôt sur les sociétés à taux unique au-delà du taux réduit.</li><li>Un impôt sur la consommation comme la TVA est le même taux pour tous, mais il pèse <b>plus lourd</b> en proportion du revenu des ménages modestes, qui consomment presque tout ce qu’ils gagnent.</li></ul>",
              example: "Passer dans la tranche à 30 % ne fait pas payer 30 % sur tout ton revenu : seulement sur la partie qui dépasse le seuil de la tranche. Une augmentation de salaire ne fait jamais baisser le revenu après impôt sur le revenu.",
            },
            {
              title: "Direct ou indirect ?",
              body:
                "<ul><li><b>Direct</b> : payé directement par celui qui le doit (impôt sur le revenu, impôt sur les sociétés, taxe foncière).</li><li><b>Indirect</b> : intégré dans le prix et collecté par une entreprise (TVA, taxes sur les carburants, le tabac, l’alcool).</li></ul><p>Moins d’un foyer fiscal sur deux paie l’impôt sur le revenu, mais <b>tout le monde</b> paie de la TVA et presque tout le monde de la CSG. Dire « la moitié des Français ne paient pas d’impôt » est donc faux.</p>",
            },
            {
              title: "Ce qui change en 2026-2027",
              body:
                "<ul><li>2026 : les prélèvements sociaux sur les revenus du capital (dividendes, intérêts) passent de 17,2 % à <b>18,6 %</b>, portant la « flat tax » à 31,4 %.</li><li>2026 : une surtaxe d’impôt sur les sociétés reconduite pour les très grandes entreprises (au-delà de 1,5 milliard d’euros de chiffre d’affaires).</li><li>Projet 2027 : le gouvernement prévoit notamment plus de recettes de TVA et d’impôt sur le revenu, et une baisse de l’impôt sur les sociétés. Le texte peut changer pendant les débats.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Direct ou indirect ?",
          instruction: "Classe chaque prélèvement.",
          categories: ["Impôt direct", "Impôt indirect"],
          items: [
            { text: "L’impôt sur le revenu", cat: 0, why: "Payé directement par le foyer fiscal." },
            { text: "La TVA sur ton plein de courses", cat: 1, why: "Incluse dans le prix, collectée par le magasin." },
            { text: "La taxe sur les carburants", cat: 1, why: "Intégrée au prix à la pompe." },
            { text: "La taxe foncière", cat: 0, why: "Payée directement par le propriétaire." },
            { text: "L’impôt sur les sociétés", cat: 0, why: "Payé par l’entreprise sur son bénéfice." },
            { text: "Les droits sur le tabac", cat: 1, why: "Inclus dans le prix du paquet." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Prélèvements obligatoires", back: "Impôts + cotisations sociales : 43,6 % du PIB en 2025." },
            { front: "Cotisation sociale", back: "Prélèvement sur le travail qui ouvre des droits (retraite, chômage, maladie)." },
            { front: "Impôt progressif", back: "Taux qui augmente avec le revenu, par tranches (impôt sur le revenu)." },
            { front: "Impôt proportionnel", back: "Même taux pour tous (CSG, IS au taux normal)." },
            { front: "Impôt indirect", back: "Intégré dans le prix et collecté par une entreprise : TVA, carburants, tabac." },
            { front: "Première recette de l’État", back: "La TVA." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ton revenu imposable augmente et une partie passe dans la tranche à 30 %. Que se passe-t-il ?", options: ["Tout ton revenu est taxé à 30 %", "Seule la partie au-dessus du seuil est taxée à 30 %", "Tu paies moins d’impôt"], answer: 1, explain: "C’est le principe du barème par tranches." },
            { q: "« La moitié des Français ne paient pas d’impôts. » Vrai ou faux ?", options: ["Vrai", "Faux : moins d’un foyer sur deux paie l’impôt sur le revenu, mais tout le monde paie la TVA et presque tout le monde la CSG"], answer: 1, explain: "L’impôt sur le revenu n’est qu’une partie des prélèvements." },
            { q: "Quelle est la première recette du budget de l’État ?", options: ["L’impôt sur le revenu", "La TVA", "L’impôt sur les sociétés"], answer: 1, explain: "La TVA rapporte le plus à l’État." },
            { q: "Pourquoi dit-on que la TVA pèse plus lourd sur les ménages modestes ?", options: ["Parce que son taux est plus élevé pour eux", "Parce qu’ils consomment une plus grande part de leur revenu", "Parce qu’ils ne la récupèrent pas"], answer: 1, explain: "Même taux pour tous, mais une part plus importante du revenu y passe." },
          ],
        },
        {
          type: "case",
          title: "La prime qui « fait perdre de l’argent »",
          story:
            "Sarah refuse une augmentation de 200 € brut par mois : « Je vais changer de tranche et payer plus d’impôts, je vais y perdre. »",
          question: "A-t-elle raison ?",
          options: [
            "Oui, changer de tranche fait payer le taux supérieur sur tout le revenu",
            "Non : seule la partie de revenu dans la nouvelle tranche est taxée au taux supérieur ; elle gagnera toujours plus après impôt sur le revenu",
            "Oui, si elle est célibataire",
          ],
          answer: 1,
          explain:
            "Le barème par tranches garantit qu’un euro de revenu en plus ne coûte jamais plus d’un euro d’impôt sur le revenu. Attention seulement aux effets de seuil de certaines aides sociales, qui sont un autre sujet.",
        },
        {
          type: "fiche",
          title: "Impôts et cotisations",
          points: [
            "Prélèvements obligatoires = impôts + <b>cotisations sociales</b> : <b>43,6 %</b> du PIB en 2025.",
            "Grands prélèvements : cotisations, <b>TVA</b> (1re recette de l’État), <b>CSG</b>, impôt sur le revenu, IS, impôts locaux.",
            "<b>Progressif</b> (par tranches) vs <b>proportionnel</b> (même taux).",
            "<b>Direct</b> (payé par le contribuable) vs <b>indirect</b> (dans le prix).",
            "Changer de tranche ne fait jamais perdre d’argent sur l’impôt sur le revenu.",
          ],
          retenir: "Tout le monde paie des impôts : la question est lesquels et combien.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Le déficit public",
      minutes: 17,
      objectives: ["Comprendre ce qu’est un déficit et ses différentes mesures", "Savoir pourquoi la France est en déficit depuis 1975"],
      steps: [
        {
          type: "lesson",
          title: "Le déficit",
          slides: [
            {
              title: "Déficit et dette : la différence",
              body:
                "<ul><li>Le <b>déficit</b> est un <b>flux</b> : sur une année, les dépenses dépassent les recettes. C’est comme dépenser plus que son salaire ce mois-ci.</li><li>La <b>dette</b> est un <b>stock</b> : l’accumulation de tous les déficits passés qui n’ont pas été remboursés. C’est le total de ce que tu dois.</li></ul><p>Chaque déficit s’ajoute à la dette. Pour que la dette baisse en euros, il faudrait un <b>excédent</b>.</p><p>Le dernier budget public en excédent en France remonte à <b>1974</b>.</p>",
            },
            {
              title: "Les chiffres récents",
              body:
                "<table class='t'><tr><th>Année</th><th>Déficit public</th></tr><tr><td>2024</td><td>5,8 % du PIB (169 Md€)</td></tr><tr><td>2025</td><td><b>5,1 %</b> du PIB (152,5 Md€), mieux que prévu grâce aux recettes</td></tr><tr><td>2026 (prévision du gouvernement, octobre 2026)</td><td><b>5,4 %</b>, au lieu de la baisse attendue, en raison notamment d’une croissance plus faible et d’un choc sur les prix de l’énergie</td></tr><tr><td>2027 (objectif du projet de budget)</td><td><b>5 %</b></td></tr></table><p>En 2025, la moyenne de la zone euro était de 2,9 % (Eurostat).</p>",
            },
            {
              title: "Trois façons de mesurer",
              body:
                "<ul><li><b>Solde public</b> : recettes − dépenses. C’est le chiffre officiel (5,1 % en 2025).</li><li><b>Solde primaire</b> : le même, <b>sans les intérêts de la dette</b>. Il dit si l’État dépense plus qu’il ne prélève pour ses politiques actuelles, indépendamment du passé.</li><li><b>Solde structurel</b> : le solde corrigé des effets de la conjoncture. En récession, les recettes baissent et les dépenses sociales montent automatiquement ; le solde structurel retire cet effet pour voir l’effort « réel ».</li></ul>",
            },
            {
              title: "Pourquoi des déficits ?",
              body:
                "<p>Les économistes ne sont pas d’accord sur le poids de chaque cause, mais on cite souvent :</p><ul><li>des <b>dépenses sociales</b> élevées et croissantes (vieillissement de la population, santé) ;</li><li>des <b>baisses d’impôts</b> pas toujours compensées par des économies ;</li><li>les <b>crises</b> (2008-2009, Covid, énergie) pendant lesquelles l’État a soutenu l’économie ;</li><li>une <b>croissance</b> plus faible que prévu, qui réduit les recettes ;</li><li>des <b>intérêts de la dette</b> en hausse depuis 2022.</li></ul><p>Certains jugent un déficit utile en période de crise pour soutenir l’activité (approche dite keynésienne). D’autres estiment qu’un déficit permanent, même hors crise, finit par réduire les marges de manœuvre.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Flux ou stock ?",
          instruction: "Chaque chiffre est-il un déficit (flux annuel) ou une dette (stock accumulé) ?",
          categories: ["Déficit (flux)", "Dette (stock)"],
          items: [
            { text: "152,5 milliards € manquants en 2025", cat: 0, why: "Écart entre recettes et dépenses sur une année." },
            { text: "3 595 milliards € dus à la mi-2026", cat: 1, why: "Total accumulé de ce que doivent les administrations." },
            { text: "5,1 % du PIB en 2025", cat: 0, why: "Le déficit annuel exprimé en % du PIB." },
            { text: "119 % du PIB à la fin juin 2026", cat: 1, why: "Le stock de dette rapporté au PIB." },
            { text: "Le gouvernement vise 5 % en 2027", cat: 0, why: "Objectif de déficit de l’année." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Déficit", back: "Flux : dépenses − recettes sur une année." },
            { front: "Dette", back: "Stock : accumulation des déficits passés non remboursés." },
            { front: "Solde primaire", back: "Solde public hors intérêts de la dette." },
            { front: "Solde structurel", back: "Solde corrigé des effets de la conjoncture." },
            { front: "Déficit public 2025", back: "5,1 % du PIB, 152,5 milliards € (Insee)." },
            { front: "Dernier excédent public", back: "1974." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Si le déficit baisse de 5,8 % à 5,1 % du PIB, la dette…", options: ["baisse", "continue d’augmenter, mais moins vite", "reste stable"], answer: 1, explain: "Tant qu’il y a un déficit, on emprunte encore : la dette en euros augmente." },
            { q: "Le solde primaire exclut…", options: ["les dépenses sociales", "les intérêts de la dette", "les recettes de TVA"], answer: 1, explain: "Il mesure l’équilibre des politiques actuelles, sans le coût du passé." },
            { q: "Pendant une récession, le déficit augmente même sans nouvelle décision. Pourquoi ?", options: ["Parce que les impôts baissent par la loi", "Parce que les recettes baissent et certaines dépenses sociales augmentent automatiquement", "Parce que l’Europe l’exige"], answer: 1, explain: "Ce sont les « stabilisateurs automatiques » ; le solde structurel les neutralise." },
            { q: "En 2025, le déficit de la France comparé à la moyenne de la zone euro était…", options: ["plus faible", "environ le même", "nettement plus élevé (5,1 % contre 2,9 %)"], answer: 2, explain: "Selon Eurostat, la France et la Belgique avaient les plus gros déficits de la zone euro." },
          ],
        },
        {
          type: "case",
          title: "« Le déficit baisse, donc la dette baisse »",
          story:
            "Un responsable politique déclare : « Grâce à nos efforts, le déficit a baissé de 5,8 % à 5,1 % du PIB en 2025 : nous avons commencé à rembourser la dette. » Pourtant, l’Insee indique que la dette est passée de 112,6 % à 115,7 % du PIB sur la même période.",
          question: "Où est l’erreur ?",
          options: [
            "L’Insee s’est trompé",
            "Un déficit plus faible reste un déficit : l’État emprunte encore, donc la dette continue de monter",
            "La dette a baissé en euros mais pas en % du PIB",
          ],
          answer: 1,
          explain:
            "On ne rembourse la dette que si l’on dégage un excédent. Réduire le déficit ralentit la hausse de la dette, sans l’inverser. C’est une confusion fréquente entre flux et stock.",
        },
        {
          type: "fiche",
          title: "Le déficit public",
          points: [
            "<b>Déficit</b> = flux annuel ; <b>dette</b> = stock accumulé.",
            "2024 : <b>5,8 %</b> ; 2025 : <b>5,1 %</b> ; 2026 prévu : <b>5,4 %</b> ; objectif 2027 : <b>5 %</b>.",
            "Zone euro 2025 : 2,9 % en moyenne. Dernier excédent français : <b>1974</b>.",
            "Solde <b>primaire</b> (hors intérêts) et solde <b>structurel</b> (hors conjoncture).",
            "Causes discutées : dépenses sociales, baisses d’impôts non compensées, crises, croissance faible, intérêts.",
          ],
          retenir: "Moins de déficit, ce n’est pas moins de dette : c’est une dette qui monte moins vite.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "La dette publique",
      minutes: 19,
      objectives: ["Comprendre comment l’État emprunte et qui lui prête", "Comprendre le coût de la dette, les taux et les notes"],
      steps: [
        {
          type: "lesson",
          title: "La dette publique",
          slides: [
            {
              title: "Combien ?",
              body:
                "<p>Fin juin 2026, selon l’Insee, la dette publique atteignait <b>3 595,5 milliards d’euros</b>, soit <b>119 % du PIB</b> (115,7 % fin 2025).</p><ul><li>L’<b>État</b> en porte l’essentiel : environ 2 942 milliards.</li><li>La Sécurité sociale : environ 309 milliards.</li><li>Les collectivités locales : environ 275 milliards.</li></ul><p>Le gouvernement prévoit 121,7 % du PIB fin 2027, et une stabilisation puis une baisse seulement à partir de 2029.</p>",
            },
            {
              title: "Comment l’État emprunte",
              body:
                "<p>L’État ne passe pas par une banque comme un particulier : il émet des <b>titres de dette</b> sur les marchés financiers, via l’<b>Agence France Trésor</b>.</p><ul><li>Les <b>OAT</b> (obligations assimilables du Trésor) : de 2 à 50 ans. L’État paie un intérêt chaque année et rembourse à l’échéance.</li><li>Les <b>BTF</b> : titres de moins d’un an.</li></ul><p>En pratique, l’État ne « rembourse » jamais vraiment sa dette : il <b>emprunte de nouveau</b> pour rembourser les titres qui arrivent à échéance. Ajouté au déficit à financer, cela représente des montants records : environ 340 milliards d’euros d’emprunts prévus pour 2027.</p>",
            },
            {
              title: "Qui prête à la France ?",
              body:
                "<ul><li>Des <b>investisseurs étrangers</b> : banques centrales, fonds de pension, assureurs étrangers. Ils détiennent environ la moitié de la dette négociable de l’État.</li><li>Des <b>investisseurs français</b> : assureurs (via l’assurance-vie), banques, fonds.</li><li>La <b>Banque centrale européenne</b> et la Banque de France, qui ont acheté beaucoup de titres entre 2015 et 2022, et réduisent depuis leurs achats.</li></ul><p>Tu es probablement toi-même prêteur indirect : une partie de l’assurance-vie en fonds euros est investie en OAT.</p>",
            },
            {
              title: "Le prix de la dette : les taux",
              body:
                "<ul><li>Le <b>taux à 10 ans</b> de la France était d’environ <b>4,8 %</b> début octobre 2026, contre environ 3,5 % un an plus tôt.</li><li>On le compare au taux allemand : l’écart (le <b>spread</b>) a brièvement dépassé 1,5 point en 2026. Plus il est élevé, plus les marchés jugent la France risquée par rapport à l’Allemagne.</li><li>Les <b>agences de notation</b> évaluent ce risque. Fitch et S&P notent la France <b>A+</b> depuis leurs dégradations de 2025 ; Moody’s a maintenu sa note <b>Aa3</b> le 23 octobre 2026, avec une perspective négative.</li></ul>",
            },
            {
              title: "La charge de la dette et l’effet boule de neige",
              body:
                "<p>La <b>charge de la dette</b> (les intérêts) augmente avec le niveau de la dette et des taux. Dans le budget de l’État, elle passerait d’environ <b>79 milliards</b> en 2026 à <b>91 milliards</b> en 2027 : le <b>premier poste</b> de dépenses de l’État, devant l’éducation (environ 63 milliards) et la défense (environ 53 milliards).</p><p>L’<b>effet boule de neige</b> : si le taux d’intérêt moyen de la dette (r) dépasse la croissance du PIB en valeur (g), le ratio dette/PIB augmente tout seul, sauf si l’État dégage un excédent primaire suffisant.</p><p>Approximation : excédent primaire nécessaire pour stabiliser la dette ≈ (r − g) × dette/PIB. Avec une dette à 120 % du PIB et r supérieur à g d’un point, il faut un excédent primaire d’environ <b>1,2 % du PIB</b>.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Dette publique mi-2026", back: "3 595,5 milliards €, 119 % du PIB (Insee, fin juin 2026)." },
            { front: "OAT", back: "Obligation assimilable du Trésor : titre de dette de l’État de 2 à 50 ans." },
            { front: "Agence France Trésor", back: "Service de l’État qui émet et gère la dette sur les marchés." },
            { front: "Spread", back: "Écart entre le taux d’emprunt d’un pays et celui de l’Allemagne : mesure du risque perçu." },
            { front: "Charge de la dette", back: "Intérêts payés : environ 91 milliards prévus en 2027 pour l’État, son premier poste de dépenses." },
            { front: "Effet boule de neige", back: "Si le taux d’intérêt dépasse la croissance, la dette/PIB augmente même sans nouveau déficit primaire." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment l’État rembourse-t-il une OAT qui arrive à échéance ?", options: ["Avec ses excédents", "En général en empruntant de nouveau (refinancement)", "En imprimant de la monnaie"], answer: 1, explain: "Sans excédent, l’État refinance sa dette par de nouveaux emprunts. Il ne peut pas créer de monnaie : c’est le rôle de la BCE." },
            { q: "Le spread de la France avec l’Allemagne augmente. Cela signifie…", options: ["que la France emprunte moins cher", "que les marchés jugent la France plus risquée par rapport à l’Allemagne", "que l’Allemagne fait défaut"], answer: 1, explain: "Plus le spread est grand, plus la prime de risque exigée est élevée." },
            { q: "Dette 100 % du PIB, taux moyen 3 %, croissance nominale 2 %. Quel excédent primaire faut-il environ pour stabiliser la dette ?", options: ["0 %", "1 % du PIB", "3 % du PIB"], answer: 1, explain: "(3 % − 2 %) × 100 % = 1 % du PIB." },
            { q: "En 2027, le premier poste de dépenses du budget de l’État devrait être…", options: ["l’éducation", "la défense", "la charge de la dette"], answer: 2, explain: "Environ 91 milliards d’euros, devant l’éducation et la défense." },
          ],
        },
        {
          type: "case",
          title: "Rembourser la dette d’un coup ?",
          story:
            "Sur les réseaux, une vidéo virale affirme : « Il suffirait de faire payer les riches pendant un an pour rembourser toute la dette. » La dette est d’environ 3 600 milliards d’euros, et l’ensemble des recettes publiques d’une année d’environ 1 560 milliards.",
          question: "Que penser de cette affirmation ?",
          options: [
            "C’est réaliste : la dette n’est pas si élevée",
            "C’est impossible arithmétiquement : la dette représente plus de deux ans de toutes les recettes publiques. On peut débattre de la répartition de l’effort, mais pas d’un remboursement d’un coup",
            "C’est réaliste si on vend les biens de l’État",
          ],
          answer: 1,
          explain:
            "3 600 ÷ 1 560 ≈ 2,3 ans de toutes les recettes publiques, sans rien dépenser. Le vrai débat porte sur la trajectoire : comment stabiliser puis faire baisser le ratio dette/PIB, et qui contribue à l’effort.",
        },
        {
          type: "fiche",
          title: "La dette publique",
          points: [
            "<b>3 595,5 Md€</b>, <b>119 % du PIB</b> mi-2026 ; prévue à 121,7 % fin 2027.",
            "Émise par l’<b>Agence France Trésor</b> : <b>OAT</b> (long terme) et BTF (court terme) ; refinancée en continu.",
            "Prêteurs : environ la moitié à l’étranger, assureurs, banques, BCE.",
            "Taux à 10 ans ≈ <b>4,8 %</b> (octobre 2026) ; notes : <b>A+</b> (Fitch, S&P), <b>Aa3</b> perspective négative (Moody’s).",
            "Charge de la dette de l’État : <b>79 Md€</b> (2026) → <b>91 Md€</b> (2027), premier poste.",
            "<b>Effet boule de neige</b> si r > g : excédent primaire ≈ (r − g) × dette/PIB.",
          ],
          retenir: "La dette se paie deux fois : en intérêts aujourd’hui, en marges de manœuvre demain.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Les règles européennes",
      minutes: 15,
      objectives: ["Connaître les règles budgétaires de la zone euro", "Comprendre la procédure pour déficit excessif et le rôle de la BCE"],
      steps: [
        {
          type: "lesson",
          title: "L’Europe et les budgets",
          slides: [
            {
              title: "3 % et 60 %",
              body:
                "<p>Depuis le traité de Maastricht (1992), les pays de l’Union européenne s’engagent à respecter deux repères :</p><div class='tiers'><div><b>3 % du PIB</b><span>déficit public maximum</span></div><div><b>60 % du PIB</b><span>dette publique maximum (ou en baisse suffisante)</span></div><div><b>Pacte de stabilité</b><span>le cadre qui organise le contrôle</span></div></div><p>Pourquoi ? Dans une monnaie commune, les dérapages d’un pays peuvent fragiliser l’euro et les autres pays.</p>",
            },
            {
              title: "Les nouvelles règles de 2024",
              body:
                "<p>Le Pacte de stabilité a été réformé en 2024 :</p><ul><li>chaque pays présente un <b>plan budgétaire à moyen terme</b> (4 ans, prolongeable à 7 ans avec des réformes et investissements) ;</li><li>le pilotage se fait surtout sur une <b>trajectoire de dépenses</b> nettes, plus que sur le seul déficit annuel ;</li><li>les pays très endettés doivent réduire leur dette d’un minimum chaque année, à un rythme adapté à leur situation.</li></ul>",
            },
            {
              title: "La procédure pour déficit excessif",
              body:
                "<p>Le 26 juillet 2024, l’Union européenne a placé la France en <b>procédure pour déficit excessif</b>, avec d’autres pays. La France s’est engagée à repasser sous les 3 % de déficit, l’objectif affiché étant <b>2029</b>.</p><ul><li>La Commission surveille chaque budget et peut faire des recommandations.</li><li>Des <b>amendes</b> sont prévues (jusqu’à 0,1 % du PIB par an), mais aucun pays n’a jamais été sanctionné financièrement.</li><li>L’effet le plus concret passe par la <b>crédibilité</b> auprès des marchés et des agences de notation.</li></ul><p>La France avait déjà été en procédure de 2009 à 2018.</p>",
            },
            {
              title: "Le rôle de la BCE",
              body:
                "<ul><li>La <b>Banque centrale européenne</b> fixe les taux directeurs pour toute la zone euro, avec un objectif d’inflation de 2 %.</li><li>Elle n’a pas le droit de financer directement les États (pas de « planche à billets » pour payer les déficits).</li><li>Elle peut acheter des titres de dette sur le marché secondaire et dispose d’un instrument pour limiter des écarts de taux jugés injustifiés, sous conditions, notamment le respect des règles budgétaires.</li></ul><p>Conséquence : un pays de la zone euro ne peut pas compter sur sa banque centrale pour effacer ses dettes. Il dépend de la confiance des investisseurs.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Critères de Maastricht", back: "Déficit public sous 3 % du PIB ; dette sous 60 % ou en baisse suffisante." },
            { front: "Réforme du Pacte (2024)", back: "Plans à moyen terme (4 à 7 ans), pilotage par une trajectoire de dépenses." },
            { front: "Procédure pour déficit excessif", back: "Ouverte contre la France le 26 juillet 2024 ; objectif de repasser sous 3 % en 2029." },
            { front: "Sanctions du Pacte", back: "Amendes possibles jusqu’à 0,1 % du PIB par an, jamais appliquées à ce jour." },
            { front: "BCE", back: "Fixe les taux de la zone euro (objectif d’inflation 2 %) ; ne peut pas financer directement les États." },
            { front: "Pourquoi des règles communes ?", back: "Dans une monnaie partagée, les dérapages d’un pays peuvent affecter tous les autres." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle est la limite de déficit public fixée par les règles européennes ?", options: ["1 % du PIB", "3 % du PIB", "60 % du PIB"], answer: 1, explain: "60 % est la référence pour la dette." },
            { q: "Depuis quand la France est-elle en procédure pour déficit excessif ?", options: ["2009", "Juillet 2024", "2027"], answer: 1, explain: "Ouverte le 26 juillet 2024 (après une précédente procédure de 2009 à 2018)." },
            { q: "La France peut-elle demander à la BCE de financer directement son déficit ?", options: ["Oui, en cas d’urgence", "Non, c’est interdit par les traités"], answer: 1, explain: "Le financement monétaire direct des États est interdit." },
            { q: "Combien de pays ont déjà payé une amende pour déficit excessif ?", options: ["Aucun", "La France et l’Italie", "Tous les pays concernés"], answer: 0, explain: "Les amendes existent mais n’ont jamais été appliquées." },
          ],
        },
        {
          type: "case",
          title: "« Sortons des règles, et le problème disparaît »",
          story:
            "Pendant un débat télévisé, un invité déclare : « Ces règles européennes nous étouffent. Si on les ignorait, on pourrait dépenser librement sans conséquence. »",
          question: "Quelle réponse est la plus juste, quelle que soit son opinion sur les règles ?",
          options: [
            "Il a raison : sans règles européennes, la dette n’aurait plus de coût",
            "On peut défendre l’assouplissement des règles, mais la dette continuerait d’avoir un coût : ce sont les prêteurs qui fixent les taux, pas Bruxelles",
            "Les règles européennes interdisent tout déficit",
          ],
          answer: 1,
          explain:
            "Le débat sur les règles est légitime : certains les jugent trop rigides, notamment pour l’investissement ; d’autres les jugent indispensables à la stabilité de l’euro. Mais même sans elles, la France emprunte sur les marchés, et le taux exigé dépend de la confiance des investisseurs.",
        },
        {
          type: "fiche",
          title: "Les règles européennes",
          points: [
            "Repères : déficit <b>3 %</b>, dette <b>60 %</b> du PIB.",
            "Réforme <b>2024</b> : plans à moyen terme, trajectoire de dépenses.",
            "France en <b>procédure pour déficit excessif</b> depuis le <b>26 juillet 2024</b> ; objectif sous 3 % en <b>2029</b>.",
            "Amendes possibles mais jamais appliquées ; l’enjeu réel est la <b>crédibilité</b>.",
            "<b>BCE</b> : taux de la zone euro, pas de financement direct des États.",
          ],
          retenir: "Les règles fixent un cadre, mais ce sont les prêteurs qui fixent le prix.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Redresser les comptes : les options en débat",
      minutes: 19,
      objectives: ["Connaître les grands leviers pour réduire un déficit", "Comprendre les arguments de chaque camp"],
      steps: [
        {
          type: "lesson",
          title: "Les options",
          slides: [
            {
              title: "Trois grands leviers",
              body:
                "<p>Pour réduire un déficit, il n’existe que trois grands leviers, souvent combinés :</p><div class='tiers'><div><b>Moins dépenser</b><span>baisser ou ralentir des dépenses</span></div><div><b>Plus prélever</b><span>augmenter des impôts ou supprimer des niches</span></div><div><b>Plus de croissance</b><span>plus d’activité = plus de recettes</span></div></div><p>Les désaccords portent sur le <b>dosage</b>, sur <b>qui</b> fait l’effort, et sur le <b>rythme</b>. Ce sont des choix politiques : l’économie éclaire les effets, mais ne tranche pas à elle seule.</p>",
            },
            {
              title: "Le levier des dépenses",
              body:
                "<p><b>Les arguments de ceux qui privilégient la baisse des dépenses :</b></p><ul><li>la France dépense déjà plus que la plupart de ses voisins en % du PIB ;</li><li>les impôts y sont déjà parmi les plus élevés d’Europe, en augmenter d’autres pèserait sur l’activité et l’emploi ;</li><li>des gains d’efficacité seraient possibles (doublons administratifs, fraude, dépenses peu évaluées).</li></ul><p><b>Les objections :</b></p><ul><li>les plus grosses dépenses (retraites, santé) touchent directement des millions de personnes ;</li><li>couper vite peut freiner la croissance et réduire les recettes, ce qui limite le gain ;</li><li>certaines dépenses sont des investissements (éducation, transition écologique, défense) qu’on paierait plus cher plus tard.</li></ul>",
            },
            {
              title: "Le levier des recettes",
              body:
                "<p><b>Les arguments de ceux qui privilégient la hausse des recettes :</b></p><ul><li>de nombreuses baisses d’impôts depuis 2017 n’auraient pas été compensées par des économies ;</li><li>il existe des <b>niches fiscales</b> (réductions et exonérations) coûteuses et parfois peu efficaces ;</li><li>faire contribuer davantage les plus hauts revenus, les grands patrimoines ou les grandes entreprises serait plus juste.</li></ul><p><b>Les objections :</b></p><ul><li>le niveau des prélèvements est déjà très élevé (43,6 % du PIB) ;</li><li>des hausses d’impôts peuvent pousser des contribuables ou des activités à partir, ou décourager l’investissement ;</li><li>le rendement réel de certaines taxes est souvent inférieur aux prévisions.</li></ul>",
            },
            {
              title: "Le levier de la croissance",
              body:
                "<ul><li>Une croissance plus forte augmente les recettes sans hausse de taux et allège le ratio dette/PIB.</li><li>Les moyens proposés varient : réformes du marché du travail, simplification, investissement public, innovation, hausse du taux d’emploi des jeunes et des seniors.</li><li><b>Limite</b> : on ne décrète pas la croissance, et compter uniquement sur elle a souvent conduit à des prévisions trop optimistes.</li></ul><p>Pour 2027, le gouvernement prévoit 1 % de croissance ; la Banque de France prévoit 0,9 % et l’OFCE 0,7 %. Un écart qui suffit à changer le déficit de plusieurs milliards.</p>",
            },
            {
              title: "Le projet de budget 2027 en exemple",
              body:
                "<p>Le projet présenté en octobre 2026 annonce un effort de <b>54 milliards</b> d’euros pour viser 5 % de déficit, en combinant les leviers. Parmi les mesures proposées :</p><ul><li><b>dépenses</b> : gel de certaines prestations (allocations familiales, APL), revalorisation partielle des retraites selon leur montant, gel du point d’indice des fonctionnaires, objectif de dépenses d’assurance maladie limité à +2 % ;</li><li><b>recettes</b> : plus de TVA (dont la TVA sur les abonnements télévisés passant de 10 % à 20 %) et d’impôt sur le revenu, extension de la taxe sur les boissons sucrées, avec en parallèle une baisse de l’impôt sur les sociétés.</li></ul><p>Chaque mesure est contestée par une partie de l’opposition ou des acteurs concernés, et le texte peut fortement évoluer au Parlement.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel levier ?",
          instruction: "Range chaque mesure dans le levier qu’elle actionne.",
          categories: ["Baisse des dépenses", "Hausse des recettes", "Soutien à la croissance"],
          items: [
            { text: "Geler les allocations familiales", cat: 0, why: "La dépense sociale progresse moins vite." },
            { text: "Supprimer une réduction d’impôt (niche fiscale)", cat: 1, why: "Les contribuables concernés paient plus." },
            { text: "Augmenter le taux de TVA sur un service", cat: 1, why: "Recette supplémentaire." },
            { text: "Ne pas remplacer une partie des agents publics qui partent à la retraite", cat: 0, why: "Baisse de la masse salariale publique." },
            { text: "Simplifier les démarches pour créer une entreprise", cat: 2, why: "Vise plus d’activité, donc plus de recettes à terme." },
            { text: "Créer une taxe sur les très grands patrimoines", cat: 1, why: "Nouvelle recette." },
            { text: "Augmenter le taux d’emploi des seniors", cat: 2, why: "Plus d’emplois = plus de cotisations et d’impôts." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Les trois leviers", back: "Baisser les dépenses, augmenter les recettes, soutenir la croissance." },
            { front: "Niche fiscale", back: "Réduction, crédit ou exonération d’impôt accordé à certains contribuables ou activités." },
            { front: "Effet récessif", back: "Une baisse rapide des dépenses ou une hausse d’impôts peut freiner l’activité et réduire les recettes." },
            { front: "Effort de 54 milliards (PLF 2027)", back: "Combinaison d’économies et de recettes nouvelles pour viser 5 % de déficit en 2027." },
            { front: "Prévisions de croissance 2027", back: "Gouvernement 1 %, Banque de France 0,9 %, OFCE 0,7 %." },
            { front: "Ce que l’économie ne tranche pas", back: "Le choix de qui contribue et du rythme : c’est une décision politique." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi une baisse brutale des dépenses publiques ne réduit-elle pas toujours le déficit autant qu’attendu ?", options: ["Parce que les dépenses remontent automatiquement", "Parce qu’elle peut freiner l’activité et donc réduire les recettes", "Parce que l’Europe l’interdit"], answer: 1, explain: "C’est l’effet récessif, dont l’ampleur fait débat entre économistes." },
            { q: "Pourquoi les prévisions de croissance comptent-elles autant dans un budget ?", options: ["Elles n’ont pas d’impact", "Une croissance plus faible réduit les recettes et creuse le déficit", "Elles fixent le taux de TVA"], answer: 1, explain: "Quelques dixièmes de point de croissance représentent plusieurs milliards de recettes." },
            { q: "Supprimer une niche fiscale, c’est…", options: ["baisser une dépense", "augmenter une recette", "soutenir la croissance"], answer: 1, explain: "Les bénéficiaires paient plus d’impôt : c’est une hausse de recettes, même si le taux ne change pas." },
            { q: "Lequel de ces énoncés est neutre ?", options: ["« Seule la baisse des dépenses est sérieuse »", "« Seuls les riches doivent payer »", "« Le dosage entre dépenses et recettes est un choix politique, que l’économie éclaire sans le trancher »"], answer: 2, explain: "Les deux autres sont des positions défendues par des camps différents." },
          ],
        },
        {
          type: "case",
          title: "Construis ton budget",
          story:
            "Tu dois trouver 20 milliards d’euros. Option A : 20 milliards d’économies, surtout sur les prestations sociales. Option B : 20 milliards de hausses d’impôts, surtout sur les ménages aisés et les grandes entreprises. Option C : 10 milliards d’économies et 10 milliards de recettes, réparties plus largement.",
          question: "Quelle analyse est la plus rigoureuse ?",
          options: [
            "A est la seule bonne solution",
            "B est la seule bonne solution",
            "Chaque option a des effets différents sur la croissance, sur les ménages touchés et sur l’acceptabilité politique ; le choix dépend des priorités et des valeurs, et les économistes eux-mêmes divergent sur l’ampleur de ces effets",
          ],
          answer: 2,
          explain:
            "Les partisans de A soulignent le niveau déjà élevé des impôts, ceux de B la justice fiscale et le coût des baisses d’impôts passées, ceux de C la répartition de l’effort. Comprendre ces arguments permet de se faire son propre avis, en connaissance de cause.",
        },
        {
          type: "fiche",
          title: "Redresser les comptes",
          points: [
            "Trois leviers : <b>dépenses</b>, <b>recettes</b>, <b>croissance</b>, presque toujours combinés.",
            "Pour la baisse des dépenses : dépenses déjà élevées, impôts déjà lourds. Contre : effets sociaux et récessifs.",
            "Pour la hausse des recettes : justice fiscale, niches coûteuses, baisses passées non compensées. Contre : niveau déjà élevé, fuite, investissement.",
            "La croissance aide, mais compter dessus seule a souvent déçu.",
            "PLF 2027 : <b>54 Md€</b> d’effort mêlant gels de prestations et hausses de TVA et d’impôt sur le revenu, encore en débat.",
          ],
          retenir: "Les chiffres disent ce que coûte chaque option ; c’est le débat démocratique qui choisit.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Lire l’actualité budgétaire sans se faire piéger",
      minutes: 16,
      objectives: ["Comparer la France à ses voisins avec les bons indicateurs", "Repérer les pièges classiques des chiffres publics"],
      steps: [
        {
          type: "lesson",
          title: "Lire les chiffres",
          slides: [
            {
              title: "La France face à ses voisins (2025)",
              body:
                "<table class='t'><tr><th>Pays</th><th>Dette publique (% du PIB)</th></tr><tr><td>Grèce</td><td>146,1 %</td></tr><tr><td>Italie</td><td>137,1 %</td></tr><tr><td><b>France</b></td><td><b>115,6 %</b></td></tr><tr><td>Belgique</td><td>107,9 %</td></tr><tr><td>Espagne</td><td>100,7 %</td></tr><tr><td>Zone euro</td><td>87,8 %</td></tr><tr><td>Allemagne</td><td>63,5 %</td></tr><tr><td>Pays-Bas</td><td>44,4 %</td></tr></table><p>Source : Eurostat via Insee. Pour le <b>déficit</b> 2025, la France (5,1 %) était juste derrière la Belgique (5,2 %), loin de la moyenne de la zone euro (2,9 %).</p>",
            },
            {
              title: "Piège n°1 : les milliards sans repère",
              body:
                "<p>« La dette a augmenté de 60 milliards en un trimestre » : est-ce beaucoup ? Il faut le rapporter à quelque chose :</p><ul><li>au <b>PIB</b> (environ 3 000 milliards) : 60 milliards ≈ 2 % ;</li><li>au <b>budget</b> concerné ;</li><li>à une <b>période</b> comparable (même trimestre l’an dernier) ;</li><li>à la <b>population</b> : « par habitant », mais attention, une dette publique n’est pas une dette personnelle qu’on te réclame.</li></ul>",
            },
            {
              title: "Piège n°2 : euros courants et inflation",
              body:
                "<ul><li>Avec l’inflation, presque tout augmente en euros chaque année : dépenses, recettes, PIB, dette.</li><li>« Un budget record » ne veut rien dire si l’inflation a été forte : il faut regarder en <b>euros constants</b> (corrigés de l’inflation) ou en <b>% du PIB</b>.</li><li>Même chose pour une « baisse » : une dépense gelée en euros baisse en réalité si les prix augmentent.</li></ul><p>C’est le mécanisme du gel d’une prestation : son montant ne bouge pas, mais son pouvoir d’achat diminue.</p>",
            },
            {
              title: "Piège n°3 : les prévisions et les annonces",
              body:
                "<ul><li>Un <b>objectif</b> n’est pas un <b>résultat</b> : en 2026, le déficit visé n’a pas été tenu (5,4 % prévu à l’automne contre une baisse annoncée).</li><li>Les « économies » annoncées sont souvent calculées par rapport à une <b>tendance</b> (ce qu’on aurait dépensé sans mesure), pas par rapport à l’année précédente : la dépense peut donc continuer à augmenter.</li><li>Compare toujours les <b>prévisions</b> du gouvernement à celles d’organismes indépendants (Haut Conseil des finances publiques, Banque de France, OFCE, Commission européenne).</li></ul>",
            },
            {
              title: "La checklist du lecteur",
              body:
                "<ol><li><b>Quelle administration</b> ? État seul, Sécurité sociale, ou toutes les administrations publiques ?</li><li><b>Flux ou stock</b> ? Déficit ou dette ?</li><li><b>En euros ou en % du PIB</b> ? Courants ou constants ?</li><li><b>Réalisé ou prévu</b> ? Par qui ?</li><li><b>Par rapport à quoi</b> ? L’an dernier, la tendance, les voisins ?</li><li><b>Quelle source</b> ? Insee, Eurostat, Cour des comptes, ministère, parti politique, influenceur ?</li></ol>",
            },
          ],
        },
        {
          type: "sort",
          title: "Fait vérifié ou affirmation à creuser ?",
          instruction: "Classe chaque phrase selon qu’il s’agit d’une donnée mesurée ou d’une affirmation qui demande vérification.",
          categories: ["Donnée mesurée et sourcée", "Affirmation à vérifier"],
          items: [
            { text: "« Selon l’Insee, la dette publique atteignait 119 % du PIB fin juin 2026. »", cat: 0, why: "Chiffre officiel, source et date précises." },
            { text: "« Ce budget fait 30 milliards d’économies. »", cat: 1, why: "Par rapport à quoi ? Une tendance ou l’année précédente ?" },
            { text: "« Le déficit public était de 5,1 % du PIB en 2025 selon l’Insee. »", cat: 0, why: "Résultat constaté, source officielle." },
            { text: "« Grâce à cette réforme, la croissance va doubler. »", cat: 1, why: "Prévision, sans source ni hypothèse." },
            { text: "« La France est le pays le plus endetté d’Europe. »", cat: 1, why: "Faux en % du PIB : la Grèce et l’Italie sont plus endettées." },
            { text: "« Selon Eurostat, la dette de la zone euro était de 87,8 % du PIB en 2025. »", cat: 0, why: "Donnée sourcée et datée." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Dette 2025 : France vs zone euro", back: "115,6 % contre 87,8 % du PIB (Eurostat)." },
            { front: "Pays les plus endettés de la zone euro (2025)", back: "Grèce (146,1 %), Italie (137,1 %), puis France (115,6 %)." },
            { front: "Euros constants", back: "Montants corrigés de l’inflation, pour comparer dans le temps." },
            { front: "Économies « par rapport à la tendance »", back: "Économie calculée par rapport à ce qu’on aurait dépensé sans mesure : la dépense peut quand même augmenter." },
            { front: "Objectif vs résultat", back: "Un objectif de déficit est une prévision ; seul le chiffre de l’Insee constate le résultat." },
            { front: "Sources fiables", back: "Insee, Eurostat, Cour des comptes, Haut Conseil des finances publiques, Banque de France." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "« La France est le pays le plus endetté de la zone euro. » En % du PIB, c’est…", options: ["vrai", "faux : la Grèce et l’Italie le sont davantage", "impossible à vérifier"], answer: 1, explain: "La France est troisième, derrière la Grèce et l’Italie." },
            { q: "Une prestation est gelée en euros alors que l’inflation est de 2 %. Pour ceux qui la touchent…", options: ["rien ne change", "le pouvoir d’achat de la prestation baisse d’environ 2 %", "la prestation augmente"], answer: 1, explain: "C’est pour cela qu’un gel est une économie pour les finances publiques." },
            { q: "Un ministre annonce un budget « record » en milliards d’euros. Première question à poser ?", options: ["Qui l’a voté ?", "Combien cela représente-t-il en % du PIB ou en euros constants ?", "Est-ce que c’est populaire ?"], answer: 1, explain: "Avec l’inflation et la croissance, presque tous les budgets sont « records » en euros courants." },
            { q: "Pour savoir si un objectif de déficit a été tenu, la source de référence est…", options: ["le communiqué du gouvernement de l’année précédente", "l’Insee, qui publie le résultat au printemps suivant", "les réseaux sociaux"], answer: 1, explain: "L’Insee constate le déficit et la dette réels." },
          ],
        },
        {
          type: "case",
          title: "Le graphique choc",
          story:
            "Un post viral montre la dette publique en milliards d’euros depuis 1980, avec une courbe qui monte en flèche, titré : « La dette a été multipliée par 30, la faillite approche. »",
          question: "Comment analyser ce graphique avec rigueur ?",
          options: [
            "Il prouve que la faillite est imminente",
            "Il faut le compléter : en % du PIB et en euros constants la hausse est moins spectaculaire, mais réelle (115,7 % fin 2025 contre une vingtaine de % au début des années 1980) ; le vrai sujet est la trajectoire et le coût des intérêts",
            "La dette en euros ne veut rien dire, donc il n’y a aucun problème",
          ],
          answer: 1,
          explain:
            "Les euros courants exagèrent l’effet visuel, puisque le PIB et les prix ont aussi beaucoup augmenté. En % du PIB, la hausse reste forte et la charge d’intérêts monte : il y a bien un sujet, mais il se discute avec les bons indicateurs, pas avec un graphique alarmiste ni en niant le problème.",
        },
        {
          type: "fiche",
          title: "Lire l’actualité budgétaire",
          points: [
            "Dette 2025 : Grèce 146 %, Italie 137 %, <b>France 115,6 %</b>, zone euro 87,8 %, Allemagne 63,5 %.",
            "Toujours rapporter les milliards au <b>PIB</b>, au budget, à une période ou aux voisins.",
            "Penser à l’<b>inflation</b> : euros courants vs <b>euros constants</b>.",
            "Un <b>objectif</b> n’est pas un <b>résultat</b> ; les économies « par rapport à la tendance » peuvent cacher une hausse.",
            "Checklist : quelle administration, flux ou stock, unité, réalisé ou prévu, comparaison, <b>source</b>.",
          ],
          retenir: "Un chiffre sans unité, sans date et sans source n’est pas une information, c’est un argument.",
        },
      ],
    },
  ],
});
