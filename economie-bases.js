/* ============================================================
   COURS : Économie — les bases
   Faculté d’Économie · 8 séances de 15 à 20 minutes
   Chiffres de conjoncture arrêtés fin octobre 2026 (Insee, BCE,
   Douanes). Les débats entre écoles de pensée sont présentés
   de façon neutre. À METTRE À JOUR : séances 4 à 7 (chiffres).
   ============================================================ */
AGORA.registerCourse({
  id: "economie-bases",
  faculty: "economie",
  title: "Économie — les bases",
  subtitle: "Marchés, croissance, inflation, chômage, commerce mondial",
  color: "#2f6f8f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre comment fonctionne une économie et lire l’actualité sans se perdre : les choix et la rareté, l’offre et la demande, la concurrence, la croissance, l’inflation et la BCE, le chômage, le commerce international, et les grands débats de politique économique. Avec les chiffres réels de la France en 2026.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Penser en économiste",
      minutes: 15,
      objectives: ["Comprendre la rareté, le choix et le coût d’opportunité", "Connaître les acteurs de l’économie et leurs échanges"],
      steps: [
        {
          type: "lesson",
          title: "Les fondamentaux",
          slides: [
            {
              title: "L’économie, c’est la science des choix",
              body:
                "<p>Les ressources (temps, argent, matières premières, travail) sont <b>limitées</b>, alors que les besoins et les envies semblent illimités. C’est la <b>rareté</b>.</p><p>L’économie étudie comment les personnes, les entreprises et les États <b>font des choix</b> face à cette rareté : quoi produire, comment, pour qui, et à quel prix.</p><ul><li>La <b>microéconomie</b> étudie les choix individuels : un consommateur, une entreprise, un marché.</li><li>La <b>macroéconomie</b> étudie l’économie dans son ensemble : croissance, inflation, chômage, commerce extérieur.</li></ul>",
            },
            {
              title: "Le coût d’opportunité",
              body:
                "<p>Tout choix a un coût caché : ce à quoi tu <b>renonces</b> en le faisant. C’est le <b>coût d’opportunité</b>, la meilleure alternative sacrifiée.</p><ul><li>Passer une heure à préparer tes colis toi-même coûte l’heure que tu aurais pu passer à prospecter.</li><li>Investir 10 000 € dans du stock, c’est renoncer à les placer ou à les mettre dans la pub.</li><li>Faire des études, c’est renoncer au salaire qu’on aurait gagné pendant ce temps.</li></ul><p>Un bon raisonnement économique compare toujours une option à la <b>meilleure alternative</b>, pas à « rien ».</p>",
            },
            {
              title: "Raisonner à la marge",
              body:
                "<p>Les décisions se prennent rarement en « tout ou rien », mais <b>une unité de plus ou de moins</b> : une heure de travail en plus, un employé en plus, 100 € de pub en plus.</p><p>La question économique est : <b>ce que rapporte l’unité supplémentaire dépasse-t-il ce qu’elle coûte ?</b></p><p>Exemple : ta campagne publicitaire est rentable en moyenne, mais les derniers 1 000 € dépensés ont peut-être rapporté moins qu’ils n’ont coûté. C’est le raisonnement <b>marginal</b>.</p>",
            },
            {
              title: "Les acteurs et leurs échanges",
              body:
                "<table class='t'><tr><th>Acteur</th><th>Rôle principal</th></tr><tr><td><b>Ménages</b></td><td>Travaillent, consomment, épargnent</td></tr><tr><td><b>Entreprises</b></td><td>Produisent, embauchent, investissent</td></tr><tr><td><b>État et administrations</b></td><td>Prélèvent, redistribuent, fournissent des services publics</td></tr><tr><td><b>Banques</b></td><td>Collectent l’épargne, accordent des crédits, créent de la monnaie en prêtant</td></tr><tr><td><b>Reste du monde</b></td><td>Achète nos exportations, nous vend nos importations</td></tr></table><p>Ces acteurs sont reliés par des <b>flux</b> : les ménages fournissent du travail aux entreprises contre des salaires, qu’ils dépensent en achetant ce que les entreprises produisent. C’est le <b>circuit économique</b>.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Micro ou macro ?",
          instruction: "Chaque question relève-t-elle de la microéconomie ou de la macroéconomie ?",
          categories: ["Microéconomie", "Macroéconomie"],
          items: [
            { text: "À quel prix vendre mes coffrets pour maximiser ma marge ?", cat: 0, why: "Décision d’une entreprise sur un marché." },
            { text: "Pourquoi le chômage a-t-il augmenté en France en 2026 ?", cat: 1, why: "Phénomène à l’échelle du pays." },
            { text: "Comment un consommateur choisit-il entre deux marques de shampoing ?", cat: 0, why: "Choix individuel." },
            { text: "Quel est l’effet d’une hausse des taux de la BCE sur la croissance de la zone euro ?", cat: 1, why: "Agrégats de toute une zone." },
            { text: "Combien de salariés une boulangerie doit-elle embaucher ?", cat: 0, why: "Décision d’une entreprise." },
            { text: "Pourquoi l’inflation française a-t-elle atteint 3,1 % en septembre 2026 ?", cat: 1, why: "Niveau général des prix du pays." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Rareté", back: "Les ressources sont limitées par rapport aux besoins : il faut choisir." },
            { front: "Coût d’opportunité", back: "La valeur de la meilleure alternative à laquelle on renonce en faisant un choix." },
            { front: "Raisonnement marginal", back: "Comparer le gain et le coût d’une unité supplémentaire." },
            { front: "Microéconomie", back: "Étude des choix des consommateurs, des entreprises et des marchés." },
            { front: "Macroéconomie", back: "Étude de l’économie globale : croissance, inflation, chômage, échanges extérieurs." },
            { front: "Circuit économique", back: "Les flux de biens, de travail et d’argent entre ménages, entreprises, État, banques et reste du monde." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu gagnes 40 € de l’heure en prestations. Tu passes 5 heures à faire toi-même ta compta au lieu de payer un comptable 150 €. Quel est le coût d’opportunité de ton choix ?", options: ["0 €, tu n’as rien payé", "200 € de prestations non réalisées", "150 €"], answer: 1, explain: "5 × 40 = 200 € de revenus sacrifiés, plus que les 150 € du comptable (si tu avais effectivement des clients à servir)." },
            { q: "Ta pub rapporte en moyenne 3 € par euro dépensé. Faut-il forcément augmenter le budget ?", options: ["Oui, toujours", "Pas forcément : il faut regarder ce que rapportent les euros supplémentaires"], answer: 1, explain: "C’est le raisonnement marginal : les rendements baissent souvent quand on augmente le budget." },
            { q: "Quel acteur crée de la monnaie en accordant des crédits ?", options: ["Les ménages", "Les banques", "Les entreprises"], answer: 1, explain: "Un crédit accordé crée un dépôt sur le compte de l’emprunteur : c’est de la monnaie nouvelle." },
            { q: "« Le prix moyen des produits a augmenté de 3 % dans le pays » relève de…", options: ["la microéconomie", "la macroéconomie"], answer: 1, explain: "C’est l’inflation, un phénomène d’ensemble." },
          ],
        },
        {
          type: "case",
          title: "La sous-traitance du packaging",
          story:
            "Reda passe 10 heures par semaine à emballer les commandes de sa boutique. Un prestataire logistique propose de le faire pour 250 € par semaine. Reda pense que c’est trop cher « puisque lui le fait gratuitement ». Ses heures de prospection lui rapportent en moyenne 50 € de marge par heure.",
          question: "Que dit le raisonnement économique ?",
          options: [
            "Reda a raison : faire soi-même est gratuit",
            "Son temps a un coût d’opportunité de 500 € par semaine (10 h × 50 €) : déléguer à 250 € est plus rentable s’il utilise ces heures pour prospecter",
            "Il faut embaucher un salarié à temps plein",
          ],
          answer: 1,
          explain:
            "Le temps de l’entrepreneur n’est jamais gratuit. Si les 10 heures libérées servent vraiment à prospecter, il gagne 500 € de marge pour 250 € de coût. Le calcul ne tient que s’il réutilise ce temps de façon productive.",
        },
        {
          type: "fiche",
          title: "Penser en économiste",
          points: [
            "<b>Rareté</b> : ressources limitées → obligation de <b>choisir</b>.",
            "<b>Coût d’opportunité</b> : ce à quoi on renonce, comparé à la meilleure alternative.",
            "<b>Raisonnement marginal</b> : ce que rapporte l’unité de plus vs ce qu’elle coûte.",
            "<b>Micro</b> (individus, entreprises, marchés) / <b>macro</b> (croissance, inflation, chômage).",
            "Acteurs : ménages, entreprises, État, banques, reste du monde, reliés par le <b>circuit économique</b>.",
          ],
          retenir: "Rien n’est gratuit : tout choix se paie en alternative sacrifiée.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "L’offre et la demande",
      minutes: 18,
      objectives: ["Comprendre comment se forme un prix sur un marché", "Prévoir l’effet d’un choc sur les prix et les quantités"],
      steps: [
        {
          type: "lesson",
          title: "Le marché",
          slides: [
            {
              title: "La demande",
              body:
                "<p>La <b>demande</b> est la quantité d’un bien que les acheteurs veulent et peuvent acheter, à chaque prix.</p><p>Règle générale : <b>quand le prix monte, la quantité demandée baisse</b>. Certains renoncent, d’autres achètent moins ou se tournent vers un produit de remplacement.</p><p>La demande dépend aussi d’autres facteurs : le <b>revenu</b> des acheteurs, les <b>goûts</b> et la mode, le prix des <b>produits concurrents</b>, la publicité, les anticipations.</p>",
            },
            {
              title: "L’offre",
              body:
                "<p>L’<b>offre</b> est la quantité que les producteurs veulent vendre, à chaque prix.</p><p>Règle générale : <b>quand le prix monte, la quantité offerte augmente</b>. Produire devient plus rentable, de nouveaux vendeurs arrivent.</p><p>L’offre dépend aussi des <b>coûts de production</b> (matières premières, énergie, salaires, transport), de la <b>technologie</b>, du nombre de producteurs, des taxes et des réglementations.</p>",
            },
            {
              title: "Le prix d’équilibre",
              body:
                "<p>Sur un marché libre, le prix tend vers le niveau où <b>la quantité demandée égale la quantité offerte</b> : c’est le <b>prix d’équilibre</b>.</p><ul><li>Si le prix est <b>trop haut</b> : les vendeurs ont trop de stock, ils baissent les prix (<b>excédent</b>).</li><li>Si le prix est <b>trop bas</b> : les acheteurs ne trouvent pas assez de produits, les prix montent (<b>pénurie</b>).</li></ul><p>Le prix joue un rôle de <b>signal</b> : il indique aux producteurs ce qui manque et aux consommateurs ce qui est rare.</p>",
            },
            {
              title: "Quand la demande ou l’offre bouge",
              body:
                "<table class='t'><tr><th>Choc</th><th>Effet sur le prix</th><th>Effet sur la quantité</th></tr><tr><td>La <b>demande augmente</b> (mode, hausse des revenus)</td><td>Hausse</td><td>Hausse</td></tr><tr><td>La <b>demande baisse</b> (fin de mode, crise)</td><td>Baisse</td><td>Baisse</td></tr><tr><td>L’<b>offre augmente</b> (nouveaux producteurs, baisse des coûts)</td><td>Baisse</td><td>Hausse</td></tr><tr><td>L’<b>offre baisse</b> (pénurie de matière, hausse de l’énergie)</td><td>Hausse</td><td>Baisse</td></tr></table>",
              example: "En 2026, la hausse du prix du pétrole a renchéri le transport et la production : l’offre de nombreux produits a été freinée, et les prix ont augmenté.",
            },
            {
              title: "L’élasticité-prix",
              body:
                "<p>L’<b>élasticité-prix</b> mesure à quel point la demande réagit au prix :</p><p><b>Élasticité = variation en % de la quantité ÷ variation en % du prix</b></p><ul><li>Prix +10 %, ventes −20 % → élasticité de −2 : demande <b>élastique</b>. Augmenter le prix fait baisser le chiffre d’affaires.</li><li>Prix +10 %, ventes −2 % → élasticité de −0,2 : demande <b>inélastique</b> (carburant, médicaments, cigarettes). Les acheteurs n’ont pas de substitut facile.</li></ul><p>Pour un produit de niche ou de marque forte, la demande est moins élastique : c’est ce qui permet d’avoir des prix plus élevés.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Que devient le prix ?",
          instruction: "Pour chaque événement, le prix du produit concerné tend-il à monter ou à baisser ?",
          categories: ["Le prix monte", "Le prix baisse"],
          items: [
            { text: "Une influenceuse fait exploser la mode des cils magnétiques", cat: 0, why: "La demande augmente." },
            { text: "Des dizaines de nouveaux vendeurs chinois arrivent sur le même produit", cat: 1, why: "L’offre augmente." },
            { text: "Le prix du fret maritime double", cat: 0, why: "Coûts en hausse : l’offre se réduit." },
            { text: "Une étude révèle un risque pour la santé lié au produit", cat: 1, why: "La demande baisse." },
            { text: "Une nouvelle machine divise par deux le coût de fabrication", cat: 1, why: "L’offre augmente." },
            { text: "Une sécheresse détruit une partie des récoltes de café", cat: 0, why: "L’offre baisse." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Loi de la demande", back: "Quand le prix monte, la quantité demandée baisse (en général)." },
            { front: "Loi de l’offre", back: "Quand le prix monte, la quantité offerte augmente." },
            { front: "Prix d’équilibre", back: "Prix auquel quantité demandée = quantité offerte." },
            { front: "Excédent / pénurie", back: "Prix trop haut → excédent, les prix baissent. Prix trop bas → pénurie, les prix montent." },
            { front: "Élasticité-prix", back: "Variation % des quantités ÷ variation % du prix." },
            { front: "Demande inélastique", back: "Les acheteurs réagissent peu au prix : produits indispensables ou sans substitut." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu augmentes ton prix de 20 % et tes ventes baissent de 10 %. Élasticité ?", options: ["−2", "−0,5", "−10"], answer: 1, explain: "−10 % ÷ 20 % = −0,5 : demande plutôt inélastique." },
            { q: "Avec cette élasticité de −0,5, ton chiffre d’affaires après la hausse…", options: ["augmente", "baisse", "ne change pas"], answer: 0, explain: "Prix × 1,2 et quantités × 0,9 : CA × 1,08, soit +8 %." },
            { q: "Le gouvernement fixe un prix maximum très bas sur un produit. Que risque-t-il de se passer ?", options: ["Une abondance du produit", "Une pénurie : les acheteurs veulent plus, les vendeurs offrent moins", "Rien"], answer: 1, explain: "Un prix plafonné sous l’équilibre crée une pénurie, parfois du marché noir." },
            { q: "Les revenus des ménages augmentent fortement. Pour les voyages, on s’attend à…", options: ["une baisse de la demande", "une hausse de la demande, donc des prix", "une baisse de l’offre"], answer: 1, explain: "Plus de revenu → plus de demande pour les biens de loisir." },
          ],
        },
        {
          type: "case",
          title: "La guerre des prix",
          story:
            "Inès vend un diffuseur de parfum à 39 €. Un concurrent arrive avec un produit similaire à 29 €. Son associé veut s’aligner immédiatement à 29 €. Une étude de ses ventes passées montre qu’une baisse de prix de 10 % ne lui a fait gagner que 3 % de ventes.",
          question: "Que suggère l’analyse ?",
          options: [
            "S’aligner à 29 € : le volume compensera largement",
            "Sa demande semble peu élastique : baisser fortement le prix risque de réduire son chiffre d’affaires et sa marge ; mieux vaut travailler la différenciation (marque, qualité, service)",
            "Monter le prix à 59 € pour se distinguer",
          ],
          answer: 1,
          explain:
            "Élasticité estimée −0,3 (3 % ÷ 10 %) : ses clients achètent pour autre chose que le prix. Une baisse de 26 % du prix entraînerait sans doute bien moins de 26 % de ventes en plus. Il faut cependant surveiller si le concurrent capte ses clients dans la durée.",
        },
        {
          type: "fiche",
          title: "L’offre et la demande",
          points: [
            "<b>Demande</b> : baisse quand le prix monte ; dépend aussi du revenu, des goûts, des substituts.",
            "<b>Offre</b> : augmente quand le prix monte ; dépend des coûts, de la technologie, des producteurs.",
            "<b>Prix d’équilibre</b> : quantité demandée = quantité offerte ; signal pour tous.",
            "Demande ↑ → prix ↑ ; offre ↑ → prix ↓ ; offre ↓ (coûts, pénurie) → prix ↑.",
            "<b>Élasticité-prix</b> = % quantités ÷ % prix ; demande élastique ou inélastique.",
          ],
          retenir: "Le prix n’est pas fixé par le vendeur seul : il naît de la rencontre entre ce qu’on veut acheter et ce qu’on peut vendre.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Concurrence et limites du marché",
      minutes: 17,
      objectives: ["Distinguer les structures de marché", "Comprendre pourquoi le marché ne règle pas tout"],
      steps: [
        {
          type: "lesson",
          title: "Les marchés",
          slides: [
            {
              title: "Du plus concurrentiel au moins concurrentiel",
              body:
                "<table class='t'><tr><th>Structure</th><th>Vendeurs</th><th>Exemple</th></tr><tr><td><b>Concurrence parfaite</b> (modèle théorique)</td><td>Très nombreux, produits identiques</td><td>Proche : certaines matières premières agricoles</td></tr><tr><td><b>Concurrence monopolistique</b></td><td>Nombreux, produits différenciés</td><td>Restaurants, cosmétiques, mode</td></tr><tr><td><b>Oligopole</b></td><td>Quelques gros acteurs</td><td>Téléphonie mobile, grande distribution, aéronautique</td></tr><tr><td><b>Monopole</b></td><td>Un seul vendeur</td><td>Distribution d’électricité sur le réseau, brevet exclusif</td></tr></table><p>Moins il y a de concurrence, plus le vendeur a de <b>pouvoir de marché</b> : il peut fixer des prix plus élevés.</p>",
            },
            {
              title: "Se différencier pour échapper à la guerre des prix",
              body:
                "<p>Dans la plupart des marchés de consommation, chaque entreprise cherche à rendre son produit <b>unique</b> aux yeux du client : marque, design, qualité, service, histoire, communauté.</p><p>C’est la <b>concurrence monopolistique</b> : chacun a un petit « monopole » sur sa marque, mais reste en concurrence avec des produits proches.</p><p>Plus la différenciation est forte, moins la demande est sensible au prix (séance 2), et plus la marge peut être élevée.</p>",
            },
            {
              title: "Les règles de la concurrence",
              body:
                "<p>Pour protéger les consommateurs, la loi interdit notamment :</p><ul><li>les <b>ententes</b> : des concurrents qui s’accordent sur les prix ou se répartissent les clients ;</li><li>les <b>abus de position dominante</b> : une entreprise dominante qui écrase ses concurrents par des pratiques déloyales.</li></ul><p>En France, l’<b>Autorité de la concurrence</b> peut infliger des amendes allant jusqu’à <b>10 % du chiffre d’affaires mondial</b>. Au niveau européen, la Commission européenne joue le même rôle pour les grandes affaires.</p>",
            },
            {
              title: "Quand le marché échoue",
              body:
                "<p>Le marché ne donne pas toujours un bon résultat. Les économistes parlent de <b>défaillances du marché</b> :</p><ul><li><b>Externalités</b> : une activité a un effet sur d’autres, sans que le prix en tienne compte. La pollution (négative), la vaccination ou la recherche (positives).</li><li><b>Biens publics</b> : on ne peut empêcher personne d’en profiter (éclairage public, défense nationale) : personne ne veut les payer volontairement.</li><li><b>Asymétrie d’information</b> : le vendeur en sait plus que l’acheteur (voiture d’occasion, assurance).</li><li><b>Pouvoir de marché</b> excessif.</li></ul><p>Ces défaillances justifient, selon les cas et les écoles de pensée, des taxes, des normes, des services publics ou des obligations d’information.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle défaillance ?",
          instruction: "Identifie la défaillance du marché dans chaque situation.",
          categories: ["Externalité", "Bien public", "Asymétrie d’information", "Pouvoir de marché"],
          items: [
            { text: "Une usine rejette des fumées qui nuisent aux riverains", cat: 0, why: "Coût imposé à d’autres, absent du prix." },
            { text: "Un phare guide tous les bateaux, payants ou non", cat: 1, why: "On ne peut exclure personne de son usage." },
            { text: "Un vendeur de voitures d’occasion connaît des défauts que l’acheteur ignore", cat: 2, why: "Le vendeur en sait plus que l’acheteur." },
            { text: "Trois opérateurs se partagent tout le marché et alignent leurs prix", cat: 3, why: "Oligopole avec risque d’entente." },
            { text: "Ton voisin rénove sa façade, ce qui augmente la valeur de ta maison", cat: 0, why: "Externalité positive." },
            { text: "La défense nationale protège tout le pays", cat: 1, why: "Bien public par excellence." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Pouvoir de marché", back: "Capacité d’un vendeur à fixer un prix au-dessus du niveau concurrentiel." },
            { front: "Oligopole", back: "Marché dominé par quelques grandes entreprises." },
            { front: "Concurrence monopolistique", back: "Nombreux vendeurs aux produits différenciés : chaque marque a un petit pouvoir de marché." },
            { front: "Entente", back: "Accord illégal entre concurrents sur les prix ou les clients." },
            { front: "Externalité", back: "Effet d’une activité sur des tiers, non pris en compte dans le prix." },
            { front: "Bien public", back: "Bien dont on ne peut exclure personne et dont l’usage ne prive pas les autres." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Trois distributeurs de matériel professionnel se mettent d’accord pour ne pas descendre sous un certain prix. C’est…", options: ["une saine pratique commerciale", "une entente illégale", "une externalité"], answer: 1, explain: "Sanctionnable par l’Autorité de la concurrence." },
            { q: "Pourquoi une marque forte permet-elle de vendre plus cher ?", options: ["Parce que la loi l’autorise", "Parce que la différenciation rend la demande moins sensible au prix", "Parce qu’elle coûte plus cher à produire"], answer: 1, explain: "C’est le principe de la concurrence monopolistique." },
            { q: "Une taxe carbone vise à corriger…", options: ["un bien public", "une externalité négative", "une asymétrie d’information"], answer: 1, explain: "Elle intègre au prix le coût de la pollution pour la société." },
            { q: "L’obligation d’afficher la composition des cosmétiques corrige…", options: ["une asymétrie d’information", "un monopole", "un bien public"], answer: 0, explain: "Le fabricant connaît la composition, le client non." },
          ],
        },
        {
          type: "case",
          title: "Le monopole local",
          story:
            "Dans une petite ville, Karim est le seul fournisseur de packaging personnalisé pour les commerçants. Il a doublé ses prix en un an sans perdre de clients. Un concurrent régional commence à démarcher ses clients à des prix 30 % inférieurs.",
          question: "Comment l’économie explique-t-elle la situation ?",
          options: [
            "Karim avait un pouvoir de marché temporaire ; ses prix élevés ont attiré un concurrent, et la concurrence pousse maintenant les prix vers le bas",
            "Karim doit porter plainte pour concurrence déloyale",
            "Les prix vont continuer à monter quoi qu’il arrive",
          ],
          answer: 0,
          explain:
            "Des marges élevées sont un signal qui attire de nouveaux entrants. Pour garder ses clients, Karim peut miser sur ce que le concurrent n’offre pas (proximité, délais, service), plutôt que sur le seul prix.",
        },
        {
          type: "fiche",
          title: "Concurrence et limites du marché",
          points: [
            "Structures : <b>concurrence parfaite</b>, <b>monopolistique</b>, <b>oligopole</b>, <b>monopole</b>.",
            "Moins de concurrence = plus de <b>pouvoir de marché</b> ; la <b>différenciation</b> en crée.",
            "Interdits : <b>ententes</b> et <b>abus de position dominante</b> (amendes jusqu’à 10 % du CA mondial).",
            "Défaillances : <b>externalités</b>, <b>biens publics</b>, <b>asymétrie d’information</b>, pouvoir de marché.",
            "Les réponses possibles (taxes, normes, services publics) font débat selon les écoles.",
          ],
          retenir: "Des marges élevées attirent toujours des concurrents : seule la différenciation les protège.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "La croissance et le PIB",
      minutes: 17,
      objectives: ["Comprendre ce que mesure le PIB et ses limites", "Connaître les moteurs de la croissance"],
      steps: [
        {
          type: "lesson",
          title: "La croissance",
          slides: [
            {
              title: "Le PIB",
              body:
                "<p>Le <b>produit intérieur brut</b> mesure la valeur de tout ce qui est produit dans le pays pendant une période. On peut le calculer de trois façons qui donnent le même résultat :</p><ul><li><b>par la production</b> : somme des valeurs ajoutées des entreprises et administrations ;</li><li><b>par les dépenses</b> : consommation + investissement + dépenses publiques + exportations − importations ;</li><li><b>par les revenus</b> : salaires + profits + impôts sur la production.</li></ul><p>En France, il était d’environ <b>3 000 milliards d’euros</b> en 2025.</p>",
            },
            {
              title: "Croissance, nominal et réel",
              body:
                "<ul><li>La <b>croissance économique</b> est l’augmentation du PIB d’une période à l’autre.</li><li>Le PIB <b>nominal</b> (en valeur) inclut la hausse des prix ; le PIB <b>réel</b> (en volume) la retire. Quand on parle de « croissance de 1 % », c’est en volume.</li><li>Une <b>récession</b> est une baisse de l’activité ; on parle souvent de récession technique après deux trimestres consécutifs de baisse du PIB.</li></ul><p>France : croissance de <b>0,9 %</b> en 2025 (Insee), et le gouvernement prévoyait en octobre 2026 environ <b>0,5 %</b> pour 2026 et 1 % pour 2027.</p>",
            },
            {
              title: "Les moteurs de la croissance",
              body:
                "<p>À long terme, un pays produit plus grâce à :</p><div class='tiers'><div><b>Plus de travail</b><span>population active, taux d’emploi, heures travaillées</span></div><div><b>Plus de capital</b><span>machines, infrastructures, outils numériques</span></div><div><b>Plus de productivité</b><span>progrès technique, innovation, formation, organisation</span></div></div><p>La <b>productivité</b> (produire plus avec autant de ressources) est le moteur décisif à long terme : c’est elle qui permet d’augmenter le niveau de vie. Les débats actuels portent beaucoup sur l’intelligence artificielle et son effet possible sur la productivité.</p>",
            },
            {
              title: "À court terme : la demande",
              body:
                "<p>D’un trimestre à l’autre, la croissance dépend surtout des <b>composantes de la demande</b> :</p><ul><li>la <b>consommation des ménages</b> (environ la moitié du PIB) ;</li><li>l’<b>investissement</b> des entreprises et des ménages (logement) ;</li><li>les <b>dépenses publiques</b> ;</li><li>le <b>commerce extérieur</b> : les exportations ajoutent, les importations retranchent ;</li><li>les <b>variations de stocks</b>, souvent volatiles.</li></ul><p>En 2025, le commerce extérieur a soutenu la croissance française, tandis que l’investissement est resté prudent.</p>",
            },
            {
              title: "Ce que le PIB ne mesure pas",
              body:
                "<ul><li>Le <b>travail non payé</b> : tâches domestiques, bénévolat.</li><li>La <b>répartition</b> des richesses : le PIB peut monter alors que beaucoup ne voient pas leur niveau de vie progresser.</li><li>Les <b>dégâts sur l’environnement</b> : une catastrophe qui oblige à reconstruire peut même augmenter le PIB.</li><li>Le <b>bien-être</b>, la santé, le temps libre.</li></ul><p>C’est pourquoi on le complète par d’autres indicateurs : PIB par habitant, revenu disponible, indice de développement humain, empreinte carbone.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "PIB", back: "Valeur de la production d’un pays sur une période : environ 3 000 milliards € en France." },
            { front: "PIB réel", back: "PIB corrigé de la hausse des prix : c’est lui qui mesure la croissance." },
            { front: "Récession technique", back: "Deux trimestres consécutifs de baisse du PIB (convention courante)." },
            { front: "Croissance France 2025", back: "+0,9 % (Insee)." },
            { front: "Productivité", back: "Production par heure ou par travailleur : moteur principal de la croissance à long terme." },
            { front: "Limites du PIB", back: "Ignore le travail non payé, la répartition, l’environnement et le bien-être." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Le PIB nominal augmente de 4 % et les prix de 3 %. Croissance réelle approximative ?", options: ["7 %", "4 %", "1 %"], answer: 2, explain: "Environ 4 % − 3 % = 1 % de croissance en volume." },
            { q: "Quel est le moteur principal de la croissance à long terme ?", options: ["L’inflation", "La productivité", "Les dépenses publiques"], answer: 1, explain: "Produire plus avec autant de ressources permet d’élever durablement le niveau de vie." },
            { q: "Les importations augmentent fortement. Dans le calcul du PIB par les dépenses, cela…", options: ["augmente le PIB", "se retranche : ce qui est produit ailleurs ne compte pas dans notre PIB", "n’a aucun lien"], answer: 1, explain: "PIB = consommation + investissement + dépenses publiques + exportations − importations." },
            { q: "Une inondation oblige à reconstruire des maisons. Le PIB…", options: ["baisse forcément", "peut augmenter avec la reconstruction, alors que la richesse a été détruite", "ne bouge pas"], answer: 1, explain: "C’est l’une des limites connues du PIB." },
          ],
        },
        {
          type: "case",
          title: "Le titre qui fait peur",
          story:
            "Un média titre : « Croissance de 0,2 % seulement : l’économie française est à l’arrêt. » Il s’agit de la croissance d’un trimestre par rapport au trimestre précédent.",
          question: "Comment interpréter ce chiffre ?",
          options: [
            "C’est une croissance annuelle très faible",
            "C’est une variation trimestrielle : sur un an, un rythme régulier de 0,2 % par trimestre correspond à environ 0,8 % ; c’est faible, mais ce n’est pas une récession",
            "C’est forcément une récession",
          ],
          answer: 1,
          explain:
            "Les chiffres du PIB sont publiés chaque trimestre : 0,2 % par trimestre ≈ 0,8 % par an. Pour juger, il faut toujours vérifier la période (trimestre ou année) et comparer à la moyenne habituelle du pays.",
        },
        {
          type: "fiche",
          title: "La croissance",
          points: [
            "<b>PIB</b> = production = dépenses = revenus ; environ 3 000 Md€ en France.",
            "Croissance en <b>volume</b> (réelle) ; <b>récession technique</b> : deux trimestres de baisse.",
            "France : <b>+0,9 %</b> en 2025 ; environ 0,5 % prévu pour 2026.",
            "Long terme : <b>travail</b>, <b>capital</b>, <b>productivité</b>. Court terme : consommation, investissement, dépenses publiques, commerce extérieur, stocks.",
            "Limites : travail non payé, répartition, environnement, bien-être.",
          ],
          retenir: "Un chiffre de croissance se lit toujours avec sa période : trimestre ou année.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "L’inflation, la monnaie et la BCE",
      minutes: 19,
      objectives: ["Comprendre les causes et les effets de l’inflation", "Comprendre comment la BCE agit sur les prix"],
      steps: [
        {
          type: "lesson",
          title: "L’inflation",
          slides: [
            {
              title: "Qu’est-ce que l’inflation ?",
              body:
                "<p>L’<b>inflation</b> est la hausse <b>générale et durable</b> des prix. Elle se mesure en France par l’<b>indice des prix à la consommation</b> (IPC) de l’Insee, à partir d’un panier de biens et services représentatif.</p><ul><li>En <b>septembre 2026</b>, l’inflation sur un an était de <b>3,1 %</b>, son plus haut niveau depuis début 2024.</li><li>La cause principale : l’<b>énergie</b>, en hausse de 21,3 % sur un an (produits pétroliers +36 %), à la suite d’un choc sur le pétrole lié aux tensions au Moyen-Orient.</li><li>L’inflation <b>sous-jacente</b> (hors énergie, produits frais et prix réglementés) n’était que de 1,5 %.</li></ul>",
            },
            {
              title: "Les causes de l’inflation",
              body:
                "<ul><li><b>Inflation par les coûts</b> : le prix de l’énergie, des matières premières ou des salaires monte, les entreprises répercutent. C’est surtout le cas en 2026.</li><li><b>Inflation par la demande</b> : la demande progresse plus vite que la capacité de production (après le Covid, par exemple).</li><li><b>Inflation monétaire</b> : trop de monnaie en circulation par rapport à la production.</li><li><b>Spirale prix-salaires</b> : les salaires s’ajustent sur les prix, puis les prix sur les salaires. C’est ce que les banques centrales craignent le plus.</li></ul>",
            },
            {
              title: "Qui gagne, qui perd ?",
              body:
                "<ul><li><b>Perdants</b> : ceux dont les revenus augmentent moins vite que les prix (salaires non revalorisés, prestations gelées), les épargnants dont le placement rapporte moins que l’inflation, les créanciers.</li><li><b>Gagnants relatifs</b> : les emprunteurs à taux fixe (leur dette « fond » en valeur réelle), les États endettés à court terme.</li></ul><p><b>Taux d’intérêt réel ≈ taux nominal − inflation.</b> Un placement à 2 % avec une inflation de 3 % fait perdre environ 1 % de pouvoir d’achat par an.</p><p>Le contraire, la <b>déflation</b> (baisse générale des prix), est aussi redoutée : chacun reporte ses achats en attendant que les prix baissent, ce qui freine l’économie.</p>",
            },
            {
              title: "La BCE et ses taux",
              body:
                "<p>La <b>Banque centrale européenne</b> a pour mission principale la stabilité des prix : une inflation proche de <b>2 %</b> à moyen terme dans la zone euro.</p><p>Son principal outil : les <b>taux directeurs</b>, auxquels les banques se financent ou placent leur argent auprès d’elle.</p><ul><li><b>Monter les taux</b> → crédits plus chers → moins d’emprunts, d’investissements et de consommation → la demande ralentit → l’inflation baisse (avec un effet sur la croissance).</li><li><b>Baisser les taux</b> → crédits moins chers → soutien à l’activité.</li></ul><p>En 2026, face au choc énergétique, la BCE a <b>relevé</b> ses taux en juin puis en septembre : le taux de dépôt est passé de 2 % à <b>2,5 %</b>, première hausse depuis 2023.</p>",
            },
            {
              title: "Un dilemme",
              body:
                "<p>Une hausse des taux peut freiner l’inflation, mais aussi la <b>croissance</b> et l’<b>emploi</b>, au moment où l’économie ralentit déjà. Et elle ne fait pas baisser directement le prix du pétrole.</p><p>Les économistes débattent :</p><ul><li>certains jugent qu’il faut agir tôt pour éviter que l’inflation ne s’installe dans les salaires et les anticipations ;</li><li>d’autres estiment qu’un choc d’énergie venu de l’extérieur passera de lui-même et qu’il ne faut pas casser la croissance.</li></ul><p>La hausse des taux se répercute aussi sur les crédits immobiliers et sur le coût de la dette publique (cours de Finance d’État).</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel type d’inflation ?",
          instruction: "Identifie la cause principale de la hausse des prix.",
          categories: ["Par les coûts", "Par la demande", "Spirale prix-salaires"],
          items: [
            { text: "Le baril de pétrole dépasse 100 dollars et le prix des transports flambe", cat: 0, why: "Hausse d’un coût de production." },
            { text: "Après un confinement, tout le monde veut voyager en même temps et les prix des vols explosent", cat: 1, why: "Demande soudaine supérieure à l’offre." },
            { text: "Les salaires sont indexés sur les prix, puis les entreprises remontent leurs prix pour couvrir les salaires", cat: 2, why: "Les deux s’entraînent mutuellement." },
            { text: "Le prix de l’aluminium double, renchérissant les canettes et les voitures", cat: 0, why: "Matière première plus chère." },
            { text: "Des aides massives augmentent fortement le pouvoir d’achat alors que la production ne suit pas", cat: 1, why: "Demande dopée plus vite que l’offre." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Inflation", back: "Hausse générale et durable des prix, mesurée par l’IPC de l’Insee." },
            { front: "Inflation France septembre 2026", back: "3,1 % sur un an, tirée par l’énergie (+21,3 %) ; sous-jacente 1,5 %." },
            { front: "Taux réel", back: "Taux nominal − inflation : le vrai rendement ou le vrai coût de l’argent." },
            { front: "Objectif de la BCE", back: "Inflation proche de 2 % à moyen terme dans la zone euro." },
            { front: "Taux de dépôt BCE", back: "2,5 % depuis septembre 2026, après les hausses de juin et septembre." },
            { front: "Déflation", back: "Baisse générale des prix : les achats sont reportés, l’économie ralentit." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ton salaire augmente de 2 % sur l’année et l’inflation est de 3,1 %. Ton pouvoir d’achat…", options: ["augmente", "baisse d’environ 1 %", "ne change pas"], answer: 1, explain: "Salaire réel ≈ 2 % − 3,1 % ≈ −1,1 %." },
            { q: "Pourquoi la BCE monte-t-elle ses taux quand l’inflation est trop haute ?", options: ["Pour enrichir les banques", "Pour renchérir le crédit et ralentir la demande", "Pour faire baisser le pétrole"], answer: 1, explain: "Moins de crédit = moins de dépenses = moins de pression sur les prix." },
            { q: "Tu as emprunté à taux fixe 2 % pour ton local. L’inflation passe à 3 %. Pour toi…", options: ["c’est défavorable", "c’est plutôt favorable : la valeur réelle de ta dette diminue", "c’est sans effet"], answer: 1, explain: "Les emprunteurs à taux fixe sont gagnants relatifs de l’inflation." },
            { q: "Que mesure l’inflation sous-jacente ?", options: ["Seulement l’énergie", "La tendance de fond, hors éléments très volatils (énergie, produits frais, prix réglementés)", "L’inflation de l’année prochaine"], answer: 1, explain: "Elle permet de voir si la hausse des prix se diffuse au-delà du choc." },
          ],
        },
        {
          type: "case",
          title: "Augmenter ses prix ?",
          story:
            "Le transport et l’emballage de Lina ont augmenté de 15 % en 2026 à cause du prix du pétrole. Ses concurrents hésitent à bouger leurs prix. Elle se demande si elle doit tout répercuter sur ses clients.",
          question: "Quelle approche est la plus fine ?",
          options: [
            "Tout répercuter immédiatement : c’est l’inflation, les clients comprendront",
            "Analyser la part de ces coûts dans son prix, l’élasticité de sa demande et la pratique des concurrents ; répercuter partiellement, ou ajuster les frais de port, plutôt que tout augmenter d’un coup",
            "Ne rien changer et absorber toute la hausse",
          ],
          answer: 1,
          explain:
            "Si le transport pèse 10 % de son prix, 15 % de hausse représentent 1,5 % du prix total. Selon l’élasticité de ses clients et la réaction des concurrents, elle peut répercuter tout ou partie. C’est exactement le mécanisme de l’inflation par les coûts, vu d’une entreprise.",
        },
        {
          type: "fiche",
          title: "Inflation et BCE",
          points: [
            "<b>Inflation</b> : hausse générale des prix ; <b>3,1 %</b> en septembre 2026, tirée par l’énergie.",
            "Causes : <b>coûts</b>, <b>demande</b>, monnaie, <b>spirale prix-salaires</b>.",
            "Perdants : revenus et épargne non indexés. Gagnants relatifs : emprunteurs à taux fixe.",
            "<b>Taux réel</b> ≈ taux nominal − inflation.",
            "<b>BCE</b> : objectif 2 % ; taux de dépôt <b>2,5 %</b> depuis septembre 2026 ; dilemme inflation / croissance.",
          ],
          retenir: "L’inflation, c’est ton argent qui perd de la valeur : regarde toujours tes revenus et placements en réel.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "L’emploi et le chômage",
      minutes: 17,
      objectives: ["Savoir comment se mesure le chômage", "Distinguer les types de chômage et les politiques possibles"],
      steps: [
        {
          type: "lesson",
          title: "Le chômage",
          slides: [
            {
              title: "Qui est chômeur ?",
              body:
                "<p>Selon la définition internationale du <b>Bureau international du travail</b> (BIT), utilisée par l’Insee, un chômeur est une personne qui :</p><ol><li>n’a <b>pas travaillé</b>, même une heure, pendant une semaine donnée ;</li><li>est <b>disponible</b> pour travailler dans les deux semaines ;</li><li>a <b>cherché activement</b> un emploi au cours du dernier mois (ou en a trouvé un qui commence plus tard).</li></ol><p><b>Taux de chômage = chômeurs ÷ population active</b> (personnes en emploi + chômeurs). Les étudiants, retraités ou personnes au foyer qui ne cherchent pas d’emploi ne font pas partie de la population active.</p>",
            },
            {
              title: "Les chiffres en 2026",
              body:
                "<table class='t'><tr><td>Taux de chômage (2e trimestre 2026)</td><td><b>8,3 %</b>, plus haut niveau depuis 2020</td></tr><tr><td>Nombre de chômeurs</td><td>2,7 millions</td></tr><tr><td>Jeunes de 15 à 24 ans</td><td><b>21,6 %</b></td></tr><tr><td>Taux d’emploi des 15-64 ans</td><td>69,0 %</td></tr></table><p>Source : Insee. Le chômage remonte depuis 2024, avec le ralentissement de la croissance.</p><p>Attention : les chiffres de <b>France Travail</b> (demandeurs d’emploi inscrits) ne mesurent pas la même chose que le chômage au sens du BIT.</p>",
            },
            {
              title: "Les types de chômage",
              body:
                "<ul><li><b>Frictionnel</b> : le temps de passer d’un emploi à un autre. Il existe même en plein emploi.</li><li><b>Conjoncturel</b> : lié au ralentissement de l’activité. Quand la croissance faiblit, les entreprises embauchent moins.</li><li><b>Structurel</b> : lié au fonctionnement durable de l’économie : compétences qui ne correspondent pas aux besoins des entreprises (inadéquation), mobilité géographique difficile, coût du travail, règles du marché du travail, mutations technologiques.</li></ul><p>En France, des secteurs peinent à recruter alors que le chômage est élevé : c’est le signe d’une part structurelle importante.</p>",
            },
            {
              title: "Les politiques de l’emploi",
              body:
                "<p>Les réponses dépendent du diagnostic, et les économistes ne mettent pas l’accent au même endroit :</p><ul><li><b>Soutenir la demande</b> (relance, investissements publics) contre le chômage conjoncturel.</li><li><b>Former</b> et réorienter les personnes vers les métiers qui recrutent (apprentissage, formation continue).</li><li><b>Baisser le coût du travail</b> (allègements de cotisations sur les bas salaires).</li><li><b>Adapter les règles</b> du marché du travail (contrats, licenciement, assurance chômage), pour faciliter les embauches selon les uns, au risque de plus de précarité selon les autres.</li><li><b>Aider la mobilité</b> (logement, transport).</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel type de chômage ?",
          instruction: "Identifie le type de chômage principal dans chaque situation.",
          categories: ["Frictionnel", "Conjoncturel", "Structurel"],
          items: [
            { text: "Une développeuse quitte son poste et prend 2 mois pour trouver le bon suivant", cat: 0, why: "Transition normale entre deux emplois." },
            { text: "Pendant une récession, un équipementier automobile licencie faute de commandes", cat: 1, why: "Baisse temporaire de l’activité." },
            { text: "Une région perd ses usines textiles et les ouvriers n’ont pas les compétences pour les nouveaux métiers", cat: 2, why: "Inadéquation durable des compétences." },
            { text: "Des restaurants peinent à recruter alors que le chômage est élevé dans la même ville", cat: 2, why: "Décalage entre offre et demande de travail." },
            { text: "La crise de l’énergie fait chuter les commandes d’une usine chimique", cat: 1, why: "Lié au cycle économique." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Chômeur au sens du BIT", back: "Sans emploi, disponible dans les 15 jours, en recherche active." },
            { front: "Taux de chômage", back: "Chômeurs ÷ population active (emplois + chômeurs)." },
            { front: "Chômage France T2 2026", back: "8,3 % ; 21,6 % chez les 15-24 ans (Insee)." },
            { front: "Chômage frictionnel", back: "Temps de transition entre deux emplois." },
            { front: "Chômage conjoncturel", back: "Dû au ralentissement de l’activité." },
            { front: "Chômage structurel", back: "Dû à des causes durables : compétences, mobilité, coût et règles du travail." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Population active 30 millions, chômeurs 2,4 millions. Taux de chômage ?", options: ["2,4 %", "8 %", "12,5 %"], answer: 1, explain: "2,4 ÷ 30 = 8 %." },
            { q: "Une étudiante à temps plein qui ne cherche pas d’emploi est-elle chômeuse ?", options: ["Oui", "Non, elle n’est pas dans la population active"], answer: 1, explain: "Elle est inactive au sens statistique." },
            { q: "Un chômeur découragé arrête de chercher. Le taux de chômage officiel…", options: ["augmente", "baisse, sans que la situation de l’emploi s’améliore", "ne bouge pas"], answer: 1, explain: "C’est pourquoi on regarde aussi le taux d’emploi." },
            { q: "Pourquoi peut-on avoir à la fois du chômage élevé et des entreprises qui ne trouvent pas à recruter ?", options: ["C’est impossible", "À cause d’un chômage structurel : compétences, lieux ou conditions ne correspondent pas", "À cause de l’inflation"], answer: 1, explain: "C’est le problème d’appariement entre offres et demandes d’emploi." },
          ],
        },
        {
          type: "case",
          title: "Les deux titres",
          story:
            "Le même jour, deux médias titrent : « Le chômage baisse ! » (le nombre d’inscrits à France Travail en catégorie A a diminué) et « Le chômage au plus haut depuis 2020 » (taux Insee à 8,3 %).",
          question: "Comment est-ce possible ?",
          options: [
            "L’un des deux médias ment",
            "Ce ne sont pas les mêmes mesures : les inscrits à France Travail dépendent des règles d’inscription et de radiation, alors que l’Insee mesure le chômage au sens du BIT par une enquête",
            "C’est une erreur de l’Insee",
          ],
          answer: 1,
          explain:
            "Les deux chiffres peuvent diverger durablement, notamment quand les règles d’inscription changent. Le taux de l’Insee, au sens du BIT, est la référence pour comparer dans le temps et avec les autres pays.",
        },
        {
          type: "fiche",
          title: "L’emploi et le chômage",
          points: [
            "Chômeur <b>BIT</b> : sans emploi, disponible, en recherche active.",
            "Taux de chômage = chômeurs ÷ <b>population active</b>.",
            "2e trimestre 2026 : <b>8,3 %</b>, jeunes <b>21,6 %</b>, taux d’emploi 69 %.",
            "Types : <b>frictionnel</b>, <b>conjoncturel</b>, <b>structurel</b>.",
            "Politiques : soutien à la demande, formation, coût du travail, règles du marché du travail, mobilité (débattues).",
            "Inscrits France Travail ≠ chômage BIT.",
          ],
          retenir: "Pour juger l’emploi, regarde le taux de chômage et le taux d’emploi ensemble.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Le commerce international",
      minutes: 18,
      objectives: ["Comprendre pourquoi les pays échangent", "Lire la balance commerciale et le débat libre-échange / protectionnisme"],
      steps: [
        {
          type: "lesson",
          title: "Le commerce mondial",
          slides: [
            {
              title: "Pourquoi échanger ?",
              body:
                "<p>Un pays (comme une personne) a intérêt à se <b>spécialiser</b> dans ce qu’il fait relativement le mieux, et à échanger le reste. C’est la théorie de l’<b>avantage comparatif</b> de David Ricardo (1817).</p><p>Exemple : le pays A produit un vêtement en 2 heures et une caisse de vin en 4 heures. Le pays B met 6 heures pour chacun. A est meilleur partout (<b>avantage absolu</b>). Mais :</p><ul><li>pour A, un vin « coûte » 2 vêtements ; pour B, un vin coûte 1 vêtement ;</li><li>B a donc un <b>avantage comparatif</b> dans le vin, A dans les vêtements.</li></ul><p>Si chacun se spécialise et échange, la production totale augmente : les deux peuvent y gagner.</p>",
            },
            {
              title: "La balance commerciale de la France",
              body:
                "<p>La <b>balance commerciale</b> compare les exportations et les importations de biens.</p><ul><li>2025 : déficit de <b>69,2 milliards d’euros</b> (Douanes), en amélioration de 10 milliards sur un an.</li><li>Pire niveau récent : <b>−161,7 milliards</b> en 2022, avec la flambée de l’énergie.</li><li>Points forts à l’export : <b>aéronautique</b>, <b>luxe</b> (cosmétiques, maroquinerie, vins et spiritueux), pharmacie, agroalimentaire.</li><li>Points faibles : <b>énergie</b> (importée), automobile, produits électroniques, textile.</li></ul><p>Les services (tourisme notamment) sont en revanche excédentaires.</p>",
            },
            {
              title: "Libre-échange ou protectionnisme ?",
              body:
                "<p><b>Les arguments en faveur du libre-échange :</b></p><ul><li>prix plus bas et plus de choix pour les consommateurs ;</li><li>accès à de grands marchés pour les entreprises exportatrices ;</li><li>spécialisation et gains de productivité.</li></ul><p><b>Les arguments en faveur de davantage de protection :</b></p><ul><li>protéger des secteurs et des emplois menacés, et des régions entières ;</li><li>préserver la <b>souveraineté</b> sur des produits stratégiques (médicaments, énergie, défense, puces électroniques) ;</li><li>réagir à une concurrence jugée déloyale (subventions massives, normes sociales ou environnementales plus faibles).</li></ul><p>Le débat oppose rarement deux camps purs : la plupart des pays combinent ouverture et protections ciblées.</p>",
            },
            {
              title: "Les droits de douane en pratique",
              body:
                "<ul><li>Un <b>droit de douane</b> est une taxe sur un produit importé. Il est en grande partie payé par l’<b>importateur</b> et ses clients, sous forme de prix plus élevés, même si l’exportateur peut en absorber une part en baissant ses marges.</li><li>En 2025, les États-Unis ont fortement relevé leurs droits de douane. L’accord conclu avec l’Union européenne <b>plafonne à 15 %</b> les droits américains sur la plupart des produits européens ; l’UE supprime en échange la plupart de ses droits sur les produits américains. Le compromis européen pour l’appliquer a été trouvé en mai 2026.</li><li>Effet visible : fin 2025, les exportations françaises vers les États-Unis ont nettement reculé dans les spiritueux, les vins et les cosmétiques.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Libre-échange ou protection ?",
          instruction: "Chaque argument soutient-il plutôt le libre-échange ou la protection ?",
          categories: ["Argument pour le libre-échange", "Argument pour la protection"],
          items: [
            { text: "Les consommateurs paient moins cher leurs produits importés", cat: 0, why: "Gain de pouvoir d’achat." },
            { text: "Il faut produire nos médicaments en Europe en cas de crise", cat: 1, why: "Souveraineté sur un produit stratégique." },
            { text: "Nos entreprises de cosmétiques vendent dans le monde entier", cat: 0, why: "Accès aux marchés étrangers." },
            { text: "Une usine concurrente étrangère reçoit des subventions publiques massives", cat: 1, why: "Concurrence jugée déloyale." },
            { text: "La spécialisation augmente la productivité de chaque pays", cat: 0, why: "Avantage comparatif." },
            { text: "Une région entière dépend d’une industrie menacée par les importations", cat: 1, why: "Protection de l’emploi local." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Avantage comparatif", back: "Se spécialiser dans ce qu’on fait relativement le mieux, même si on n’est meilleur en rien (Ricardo)." },
            { front: "Balance commerciale", back: "Exportations − importations de biens." },
            { front: "Solde commercial France 2025", back: "−69,2 milliards € (Douanes), après −161,7 milliards en 2022." },
            { front: "Points forts de la France à l’export", back: "Aéronautique, luxe, pharmacie, agroalimentaire." },
            { front: "Droit de douane", back: "Taxe sur un produit importé, en grande partie répercutée sur les acheteurs du pays importateur." },
            { front: "Accord UE–États-Unis", back: "Droits américains plafonnés à 15 % sur la plupart des produits européens." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Selon Ricardo, un pays meilleur que tous les autres dans tout a-t-il intérêt à échanger ?", options: ["Non, il doit tout produire lui-même", "Oui, en se spécialisant là où son avantage est le plus grand"], answer: 1, explain: "C’est toute la force de l’avantage comparatif." },
            { q: "Les États-Unis taxent à 15 % un parfum français. Qui paie principalement cette taxe ?", options: ["Le gouvernement français", "L’importateur américain et ses clients, avec une part éventuellement absorbée par le fabricant", "Personne"], answer: 1, explain: "La taxe est perçue à l’entrée aux États-Unis." },
            { q: "Pourquoi le déficit commercial français a-t-il été si élevé en 2022 ?", options: ["À cause du tourisme", "À cause de la flambée des prix de l’énergie importée", "À cause de l’aéronautique"], answer: 1, explain: "La France importe l’essentiel de son pétrole et de son gaz." },
            { q: "Tu importes des accessoires de Chine. Une hausse des droits de douane européens sur ces produits…", options: ["baisse tes coûts", "augmente ton coût d’achat, donc tes prix ou réduit ta marge", "n’a aucun effet"], answer: 1, explain: "Le droit de douane s’ajoute à ton coût de revient." },
          ],
        },
        {
          type: "case",
          title: "Diversifier ses marchés",
          story:
            "Une marque normande de cidre premium réalise 40 % de ses ventes aux États-Unis. Depuis les nouveaux droits de douane, ses ventes américaines ont baissé de 30 %. Le fondateur veut tout miser sur une campagne marketing aux États-Unis pour compenser.",
          question: "Que suggère l’analyse économique ?",
          options: [
            "Investir massivement aux États-Unis : c’est le marché le plus grand",
            "Réduire la dépendance à un seul marché exposé aux décisions politiques, en développant d’autres pays (Europe, Asie, Canada), tout en ajustant prix et marges aux États-Unis",
            "Arrêter totalement l’export",
          ],
          answer: 1,
          explain:
            "Les droits de douane sont un risque politique qu’une entreprise ne contrôle pas. Diversifier ses débouchés réduit ce risque, comme diversifier ses fournisseurs réduit le risque d’approvisionnement.",
        },
        {
          type: "fiche",
          title: "Le commerce international",
          points: [
            "<b>Avantage comparatif</b> (Ricardo) : se spécialiser et échanger fait gagner tout le monde, en théorie.",
            "Balance commerciale France : <b>−69,2 Md€</b> en 2025 (−161,7 Md€ en 2022).",
            "Forces : aéronautique, luxe, pharmacie ; faiblesses : énergie, automobile, électronique.",
            "<b>Libre-échange</b> (prix, débouchés, productivité) vs <b>protection</b> (emplois, souveraineté, concurrence déloyale).",
            "<b>Droits de douane</b> payés surtout côté importateur ; États-Unis : plafond de <b>15 %</b> pour l’UE.",
          ],
          retenir: "Dans le commerce mondial, dépendre d’un seul marché ou d’un seul fournisseur est toujours un risque.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Les grands débats économiques",
      minutes: 17,
      objectives: ["Distinguer politique budgétaire et politique monétaire", "Comprendre les grandes écoles de pensée sans prendre parti"],
      steps: [
        {
          type: "lesson",
          title: "Politiques et écoles de pensée",
          slides: [
            {
              title: "Deux grands leviers",
              body:
                "<table class='t'><tr><th></th><th>Politique budgétaire</th><th>Politique monétaire</th></tr><tr><td>Qui décide</td><td>Gouvernement et Parlement</td><td>Banque centrale (BCE pour la zone euro)</td></tr><tr><td>Outils</td><td>Dépenses publiques, impôts</td><td>Taux directeurs, achats de titres</td></tr><tr><td>Pour relancer</td><td>Dépenser plus, baisser les impôts</td><td>Baisser les taux</td></tr><tr><td>Pour freiner</td><td>Dépenser moins, augmenter les impôts</td><td>Monter les taux</td></tr></table><p>Dans la zone euro, la politique monétaire est <b>commune</b>, mais chaque pays garde sa politique budgétaire, dans le cadre des règles européennes.</p>",
            },
            {
              title: "Le cycle économique",
              body:
                "<p>L’activité ne progresse pas en ligne droite. Elle alterne :</p><ul><li><b>expansion</b> : croissance, embauches, hausse des prix possible ;</li><li><b>ralentissement</b> puis parfois <b>récession</b> : baisse de l’activité, hausse du chômage ;</li><li><b>reprise</b>.</li></ul><p>Une grande question des politiques économiques est de savoir s’il faut <b>amortir</b> ces cycles (relancer en période creuse, freiner en surchauffe) ou laisser le marché s’ajuster.</p>",
            },
            {
              title: "L’approche keynésienne",
              body:
                "<p>Inspirée de John Maynard Keynes (années 1930).</p><ul><li>Les marchés peuvent rester durablement en déséquilibre, avec un chômage élevé.</li><li>En période de crise, l’État doit <b>soutenir la demande</b> (dépenses publiques, baisses d’impôts ciblées), quitte à creuser temporairement le déficit.</li><li>La banque centrale doit aussi soutenir l’activité.</li></ul><p><b>Critiques souvent formulées</b> : risque de déficits permanents, de dette élevée et d’inflation ; difficulté à « freiner » une fois la crise passée.</p>",
            },
            {
              title: "Les approches libérales",
              body:
                "<p>Courants variés (économie classique, monétarisme avec Milton Friedman, économie de l’offre).</p><ul><li>Les marchés s’ajustent mieux que l’État ; il faut surtout de bonnes conditions pour <b>produire</b> et investir : fiscalité modérée, règles simples, concurrence.</li><li>La priorité est la <b>stabilité des prix</b> et la maîtrise des finances publiques.</li><li>Les réformes structurelles (marché du travail, simplification) sont jugées plus efficaces que la relance.</li></ul><p><b>Critiques souvent formulées</b> : risque d’inégalités accrues, de crises financières mal régulées, et de coûts sociaux élevés pendant les ajustements.</p>",
            },
            {
              title: "Lire l’actualité économique",
              body:
                "<ol><li><b>Quelle période</b> ? Variation sur un mois, un trimestre ou un an (« en glissement annuel ») ?</li><li><b>Point ou pour cent</b> ? Un taux de chômage qui passe de 8 % à 8,3 % augmente de <b>0,3 point</b>, soit environ 4 % de chômeurs en plus.</li><li><b>Réel ou nominal</b> ? Corrigé de l’inflation ou non ?</li><li><b>Mesure ou prévision</b> ? Et de qui : Insee, Banque de France, gouvernement, organisme indépendant ?</li><li><b>Quelle école</b> derrière l’analyse ? La même donnée peut être interprétée différemment selon les convictions.</li></ol>",
            },
          ],
        },
        {
          type: "sort",
          title: "Budgétaire ou monétaire ?",
          instruction: "Classe chaque mesure.",
          categories: ["Politique budgétaire", "Politique monétaire"],
          items: [
            { text: "La BCE relève son taux de dépôt à 2,5 %", cat: 1, why: "Décision de la banque centrale sur les taux." },
            { text: "Le gouvernement gèle certaines prestations sociales", cat: 0, why: "Décision sur les dépenses publiques." },
            { text: "Une baisse de l’impôt sur les sociétés", cat: 0, why: "Décision fiscale." },
            { text: "La banque centrale achète massivement des obligations", cat: 1, why: "Outil monétaire non conventionnel." },
            { text: "Un grand plan d’investissement public dans les transports", cat: 0, why: "Dépense publique." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Politique budgétaire", back: "Action par les dépenses publiques et les impôts : gouvernement et Parlement." },
            { front: "Politique monétaire", back: "Action par les taux et la monnaie : la banque centrale (BCE)." },
            { front: "Approche keynésienne", back: "Soutenir la demande en période de crise, même au prix d’un déficit temporaire." },
            { front: "Approches libérales", back: "Priorité à l’offre, aux marchés, à la stabilité des prix et à la maîtrise des finances publiques." },
            { front: "Point de pourcentage", back: "Écart entre deux taux : de 8 % à 8,3 % = +0,3 point (≈ +4 %)." },
            { front: "Glissement annuel", back: "Variation par rapport au même mois ou trimestre de l’année précédente." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Dans la zone euro, la France peut-elle baisser seule ses taux d’intérêt directeurs ?", options: ["Oui", "Non, c’est la BCE qui décide pour toute la zone"], answer: 1, explain: "La politique monétaire est commune." },
            { q: "Le taux de chômage passe de 7,5 % à 8,3 %. Il augmente de…", options: ["0,8 %", "0,8 point (environ 11 % de chômeurs en plus)", "8,3 points"], answer: 1, explain: "On parle de points entre deux taux ; en relatif, 0,8 ÷ 7,5 ≈ 11 %." },
            { q: "Pendant une forte récession, un économiste keynésien recommandera plutôt…", options: ["une hausse des impôts", "un soutien à la demande par la dépense publique", "une hausse des taux"], answer: 1, explain: "C’est le cœur de l’approche keynésienne." },
            { q: "Quelle affirmation est neutre ?", options: ["« Seule la relance marche »", "« Seules les réformes de l’offre marchent »", "« Les écoles de pensée divergent sur le dosage entre soutien à la demande et réformes de l’offre »"], answer: 2, explain: "Les deux premières sont des positions défendues par des courants différents." },
          ],
        },
        {
          type: "case",
          title: "Que faire en 2026 ?",
          story:
            "La France fait face à la fois à un ralentissement de la croissance (environ 0,5 % prévu), à un chômage en hausse (8,3 %), à une inflation à 3,1 % tirée par l’énergie, et à un déficit public élevé. Deux économistes s’affrontent à la radio.",
          question: "Quelle présentation de leur débat est la plus juste ?",
          options: [
            "L’un a raison, l’autre a tort, et les données le prouvent",
            "Les uns mettent l’accent sur le risque de casser la croissance et l’emploi par trop de rigueur, les autres sur le risque de laisser filer inflation et dette ; la situation combine plusieurs problèmes qui appellent des réponses en partie contradictoires",
            "Il n’y a aucun problème, tous les indicateurs sont normaux",
          ],
          answer: 1,
          explain:
            "Les données montrent les tensions entre objectifs : lutter contre l’inflation (hausse des taux), soutenir l’emploi (relance), réduire le déficit (rigueur). Le choix du dosage est un choix politique, éclairé par l’économie mais pas tranché par elle.",
        },
        {
          type: "fiche",
          title: "Les grands débats",
          points: [
            "<b>Budgétaire</b> (dépenses, impôts) vs <b>monétaire</b> (taux, BCE, commune à la zone euro).",
            "<b>Cycle</b> : expansion, ralentissement, récession, reprise.",
            "<b>Keynésiens</b> : soutenir la demande en crise. <b>Libéraux</b> : priorité à l’offre et à la stabilité.",
            "Chaque approche a ses critiques : déficits et inflation d’un côté, inégalités et coûts sociaux de l’autre.",
            "Lire l’actualité : période, <b>points vs %</b>, réel ou nominal, mesure ou prévision, source.",
          ],
          retenir: "L’économie dit ce que coûte chaque choix ; elle ne choisit pas à ta place.",
        },
      ],
    },
  ],
});
