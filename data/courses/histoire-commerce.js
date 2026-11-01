/* ============================================================
   COURS : L’histoire du commerce — de Sumer à Amazon
   Faculté d’Histoire · 8 séances de 15 à 20 minutes
   Les dates sont celles retenues par l’historiographie courante ;
   pour l’Antiquité, ce sont des ordres de grandeur.
   ============================================================ */
AGORA.registerCourse({
  id: "histoire-commerce",
  faculty: "histoire",
  title: "L’histoire du commerce — de Sumer à Amazon",
  subtitle: "5 000 ans d’échanges, de routes, de monnaies et d’empires marchands",
  color: "#8a6a2f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre comment les humains ont appris à échanger : les premières écritures nées de la comptabilité, les monnaies, les routes de la soie et des épices, les marchands du Moyen Âge, les compagnies des Indes et la traite atlantique, la révolution industrielle, le conteneur, la Chine et l’e-commerce. Et ce que 5 000 ans de commerce apprennent à un entrepreneur d’aujourd’hui.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Les origines : troc, écriture et monnaie",
      minutes: 16,
      objectives: ["Comprendre comment sont nés les échanges, l’écriture comptable et la monnaie", "Connaître les premiers grands peuples marchands"],
      steps: [
        {
          type: "lesson",
          title: "Les origines du commerce",
          slides: [
            {
              title: "Avant la monnaie",
              body:
                "<p>Bien avant les villes, les groupes humains échangeaient déjà : on retrouve de l’<b>obsidienne</b> (une roche volcanique servant à faire des lames) à des centaines de kilomètres de ses gisements, dès la préhistoire.</p><p>On imagine souvent un monde de <b>troc</b> pur (« je te donne une chèvre contre du blé »). En réalité, les historiens et anthropologues pensent que les premiers échanges reposaient beaucoup sur le <b>don</b>, la réciprocité et le <b>crédit</b> entre personnes qui se connaissaient : « je te donne maintenant, tu me rendras plus tard ».</p>",
            },
            {
              title: "L’écriture est née de la comptabilité",
              body:
                "<p>En <b>Mésopotamie</b> (l’Irak actuel), vers <b>3300 avant notre ère</b>, dans la ville d’<b>Uruk</b>, apparaissent les premières tablettes d’argile couvertes de signes.</p><p>Que racontent-elles ? Pas des poèmes : des <b>comptes</b>. Quantités d’orge, de moutons, de bière, rations distribuées, dettes. Les temples et les palais avaient besoin de suivre ce qui entrait et sortait.</p><p>Autrement dit : <b>l’écriture a été inventée en grande partie pour gérer l’économie</b>. Le premier « logiciel de gestion » de l’humanité était une tablette d’argile.</p>",
            },
            {
              title: "Les Phéniciens, premiers grands marchands de la mer",
              body:
                "<p>Entre environ 1200 et 500 avant notre ère, les <b>Phéniciens</b>, installés sur la côte du Liban actuel (Tyr, Sidon, Byblos), dominent le commerce en Méditerranée.</p><ul><li>Ils fondent des comptoirs jusqu’en Espagne et en Afrique du Nord, dont <b>Carthage</b>.</li><li>Ils vendent du bois de cèdre, du verre, et surtout une teinture <b>pourpre</b> très chère tirée d’un coquillage.</li><li>On leur doit un <b>alphabet</b> simple de 22 signes, plus pratique pour les marchands que les écritures compliquées de l’époque. Il est l’ancêtre de l’alphabet grec, puis latin.</li></ul>",
            },
            {
              title: "L’invention de la monnaie",
              body:
                "<p>Les premières pièces de monnaie connues apparaissent en <b>Lydie</b> (dans la Turquie actuelle), vers <b>600 avant notre ère</b>, en <b>électrum</b> (un alliage naturel d’or et d’argent).</p><p>La pièce frappée résout trois problèmes du commerce :</p><div class='tiers'><div><b>Mesurer</b><span>une unité commune pour comparer les prix</span></div><div><b>Échanger</b><span>plus besoin de trouver quelqu’un qui veut exactement ce que tu as</span></div><div><b>Conserver</b><span>garder de la valeur pour plus tard</span></div></div><p>Le poinçon d’un roi garantissait le poids et la pureté du métal : la monnaie repose dès l’origine sur la <b>confiance</b> dans une autorité.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Uruk, vers 3300 av. J.-C.", back: "Premières tablettes écrites, essentiellement des comptes : l’écriture naît de la gestion économique." },
            { front: "Phéniciens", back: "Peuple marchand de la Méditerranée (Tyr, Sidon) : comptoirs, pourpre, alphabet de 22 signes." },
            { front: "Carthage", back: "Comptoir phénicien d’Afrique du Nord devenu une grande puissance commerciale." },
            { front: "Lydie, vers 600 av. J.-C.", back: "Premières pièces de monnaie connues, en électrum." },
            { front: "Trois fonctions de la monnaie", back: "Unité de compte, moyen d’échange, réserve de valeur." },
            { front: "Le mythe du troc", back: "Les premiers échanges reposaient beaucoup sur le don, la réciprocité et le crédit, pas seulement sur le troc." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Que contiennent la plupart des premières tablettes écrites d’Uruk ?", options: ["Des poèmes épiques", "Des comptes économiques", "Des lois religieuses"], answer: 1, explain: "Quantités de céréales, de bétail, rations : l’écriture sert d’abord à compter." },
            { q: "Où sont apparues les premières pièces de monnaie connues ?", options: ["En Égypte", "En Lydie, dans l’actuelle Turquie", "En Chine"], answer: 1, explain: "Vers 600 avant notre ère, en électrum." },
            { q: "Pourquoi l’alphabet phénicien a-t-il eu tant de succès ?", options: ["Il était imposé par la loi", "Avec 22 signes, il était simple et pratique pour les marchands", "Il était secret"], answer: 1, explain: "Un outil simple, adopté puis adapté par les Grecs." },
            { q: "Sur quoi repose dès l’origine la valeur d’une pièce frappée ?", options: ["Sur sa couleur", "Sur la confiance dans l’autorité qui garantit son poids et sa pureté", "Sur sa taille"], answer: 1, explain: "Le poinçon royal était une garantie." },
          ],
        },
        {
          type: "case",
          title: "Le marchand sans monnaie",
          story:
            "Imagine un potier d’une cité antique sans monnaie. Il veut du vin. Le vigneron, lui, n’a pas besoin de poteries : il veut du tissu. Le tisserand veut… du blé.",
          question: "Quel problème la monnaie résout-elle ici ?",
          options: [
            "Elle augmente la quantité de vin produite",
            "Elle supprime la nécessité de trouver quelqu’un qui veut exactement ce que tu proposes au même moment (la « double coïncidence des besoins »)",
            "Elle rend les poteries plus belles",
          ],
          answer: 1,
          explain:
            "Avec une monnaie acceptée par tous, le potier vend ses poteries à qui en veut, puis achète son vin. C’est ce qui permet au commerce de passer de l’échelle d’un village à celle d’un empire.",
        },
        {
          type: "fiche",
          title: "Les origines du commerce",
          points: [
            "Échanges très anciens (obsidienne) ; premiers échanges fondés sur le <b>don</b>, la réciprocité, le <b>crédit</b>.",
            "<b>Uruk, vers 3300 av. J.-C.</b> : l’écriture naît des <b>comptes</b>.",
            "<b>Phéniciens</b> : comptoirs en Méditerranée, Carthage, pourpre, <b>alphabet</b> de 22 signes.",
            "<b>Lydie, vers 600 av. J.-C.</b> : premières pièces de monnaie.",
            "Monnaie = unité de compte, moyen d’échange, réserve de valeur ; elle repose sur la <b>confiance</b>.",
          ],
          retenir: "Le commerce a inventé l’écriture, et la confiance a inventé la monnaie.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Rome, la soie et les épices",
      minutes: 17,
      objectives: ["Comprendre le commerce dans l’Empire romain", "Connaître les routes de la soie et la route maritime des épices"],
      steps: [
        {
          type: "lesson",
          title: "Les grandes routes antiques",
          slides: [
            {
              title: "La Méditerranée romaine",
              body:
                "<p>À son apogée (Ier-IIe siècles), l’<b>Empire romain</b> contrôle tout le pourtour de la Méditerranée, qu’il appelle <i>Mare nostrum</i>, « notre mer ».</p><ul><li>Une <b>monnaie commune</b> (le denier), une langue d’échange, un droit commun et la paix romaine facilitent le commerce.</li><li>Des <b>routes</b> pavées et des ports relient l’empire.</li><li>Rome importe massivement du <b>blé</b> d’Égypte et d’Afrique du Nord pour nourrir sa population, de l’huile d’Espagne, du vin de Gaule et d’Italie.</li></ul><p>On retrouve des milliers d’<b>amphores</b> (jarres de transport) dans les épaves : ce sont les « conteneurs » de l’Antiquité.</p>",
            },
            {
              title: "Les routes de la soie",
              body:
                "<p>Vers le IIe siècle avant notre ère, sous la dynastie chinoise des <b>Han</b>, se développent des itinéraires terrestres reliant la Chine à l’Asie centrale, à la Perse puis à la Méditerranée.</p><ul><li>La Chine exporte surtout de la <b>soie</b>, dont elle garde longtemps le secret de fabrication.</li><li>Dans l’autre sens circulent chevaux, métaux précieux, verre, laine.</li><li>Presque personne ne fait le trajet complet : les marchandises passent de main en main, de caravane en caravane, d’oasis en oasis.</li></ul><p>L’expression « route de la soie » est récente : elle a été popularisée par le géographe allemand Ferdinand von Richthofen en <b>1877</b>.</p>",
            },
            {
              title: "La route maritime des épices",
              body:
                "<p>Le commerce le plus lucratif passe aussi par la mer. Les navigateurs utilisent les <b>moussons</b>, ces vents qui soufflent dans un sens une partie de l’année et dans l’autre sens le reste du temps, pour traverser l’<b>océan Indien</b> entre l’Égypte, l’Arabie et l’Inde.</p><p>On importe à Rome du <b>poivre</b>, de la cannelle, des pierres précieuses et des tissus d’Inde. Ces produits rares valent une fortune une fois arrivés en Méditerranée.</p><p>Ce commerce fait sortir beaucoup d’or et d’argent de l’Empire : certains auteurs romains, comme Pline l’Ancien, s’en plaignent déjà au Ier siècle.</p>",
            },
            {
              title: "Pas seulement des marchandises",
              body:
                "<p>Les routes commerciales transportent bien plus que des produits :</p><ul><li>des <b>idées</b> et des techniques (papier, numération) ;</li><li>des <b>religions</b> : le bouddhisme se diffuse vers la Chine le long des routes de la soie ;</li><li>des <b>langues</b> et des goûts ;</li><li>et des <b>maladies</b> : la peste noire arrive en Europe en 1347 par les routes commerciales de la mer Noire.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle route ?",
          instruction: "Associe chaque produit ou fait à la route commerciale correspondante.",
          categories: ["Routes de la soie (terre)", "Route des épices (océan Indien)", "Méditerranée romaine"],
          items: [
            { text: "Des caravanes traversent les oasis d’Asie centrale avec des rouleaux de soie", cat: 0, why: "Itinéraires terrestres Chine–Méditerranée." },
            { text: "Des navires profitent des vents de mousson pour rejoindre l’Inde", cat: 1, why: "Navigation saisonnière de l’océan Indien." },
            { text: "Des amphores de blé égyptien sont déchargées à Ostie, le port de Rome", cat: 2, why: "Commerce de l’approvisionnement romain." },
            { text: "Du poivre indien arrive en Égypte romaine", cat: 1, why: "Épice venue par l’océan Indien." },
            { text: "Le bouddhisme se diffuse vers la Chine par les marchands d’Asie centrale", cat: 0, why: "Diffusion des idées sur les routes terrestres." },
            { text: "Des tonneaux de vin de Gaule partent vers l’Italie", cat: 2, why: "Commerce intérieur de l’Empire." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Mare nostrum", back: "« Notre mer » : la Méditerranée contrôlée par Rome, espace commercial unifié." },
            { front: "Amphore", back: "Jarre de transport antique : le « conteneur » de l’époque." },
            { front: "Routes de la soie", back: "Itinéraires terrestres entre la Chine des Han et la Méditerranée, à partir du IIe siècle av. J.-C." },
            { front: "Ferdinand von Richthofen, 1877", back: "Géographe qui popularise l’expression « route de la soie »." },
            { front: "Mousson", back: "Vents saisonniers qui permettent de traverser l’océan Indien à l’aller puis au retour." },
            { front: "Peste noire, 1347", back: "Arrivée en Europe par les routes commerciales de la mer Noire." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi l’Empire romain a-t-il favorisé le commerce ?", options: ["Il interdisait les impôts", "Monnaie commune, droit, routes et paix dans tout l’espace méditerranéen", "Il produisait tout lui-même"], answer: 1, explain: "Un grand marché unifié, en quelque sorte." },
            { q: "Sur les routes de la soie, la plupart des marchands…", options: ["faisaient le trajet complet Chine–Rome", "faisaient une partie du trajet, les marchandises passant de main en main", "voyageaient par avion"], answer: 1, explain: "Le commerce fonctionnait par relais successifs." },
            { q: "Qu’est-ce qui permettait de traverser l’océan Indien aller et retour ?", options: ["Les rames", "Les vents de mousson, qui changent de sens selon la saison", "Les courants du Gulf Stream"], answer: 1, explain: "Il fallait attendre la bonne saison pour partir et pour rentrer." },
            { q: "Comment la peste noire est-elle arrivée en Europe en 1347 ?", options: ["Par les routes commerciales de la mer Noire", "Par les Vikings", "Par l’Amérique"], answer: 0, explain: "Les routes du commerce transportent aussi les épidémies." },
          ],
        },
        {
          type: "case",
          title: "Le prix du poivre",
          story:
            "Au Ier siècle, une mesure de poivre achetée en Inde passe par un marchand arabe, un transporteur maritime, un intermédiaire égyptien, un armateur méditerranéen, puis un commerçant romain. Elle arrive à Rome à un prix énorme par rapport au prix de départ.",
          question: "Qu’est-ce qui explique surtout cet écart de prix ?",
          options: [
            "Le poivre pourrit en route",
            "Chaque intermédiaire prend une marge et le transport est long et risqué ; la rareté du produit à l’arrivée permet des prix élevés",
            "Les Romains payaient en coquillages",
          ],
          answer: 1,
          explain:
            "Distance, risques (naufrages, pirates), intermédiaires et rareté : c’est la même logique qu’aujourd’hui quand un produit importé passe par plusieurs intermédiaires. Ceux qui ont ensuite cherché à « supprimer les intermédiaires » en allant chercher les épices à la source ont changé l’histoire (séance 4).",
        },
        {
          type: "fiche",
          title: "Rome, la soie et les épices",
          points: [
            "Rome : <b>Mare nostrum</b>, monnaie et droit communs, blé d’Égypte, vin, huile, <b>amphores</b>.",
            "<b>Routes de la soie</b> (dès le IIe s. av. J.-C., Chine des Han) : relais de caravanes ; expression de <b>1877</b>.",
            "<b>Océan Indien</b> : navigation avec les <b>moussons</b>, poivre et épices vers Rome.",
            "Les routes transportent aussi des idées, des religions et des maladies (<b>peste noire, 1347</b>).",
          ],
          retenir: "Sur une longue route, chaque intermédiaire ajoute sa marge : la valeur est dans l’accès à la source.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les marchands du Moyen Âge",
      minutes: 18,
      objectives: ["Connaître les grands réseaux marchands médiévaux", "Comprendre les innovations financières nées du commerce"],
      steps: [
        {
          type: "lesson",
          title: "Le Moyen Âge marchand",
          slides: [
            {
              title: "Khadija, une femme d’affaires de La Mecque",
              body:
                "<p>À la fin du VIe siècle, <b>La Mecque</b> est une ville de marchands. Chaque année, des caravanes partent vers la Syrie et vers le Yémen chargées de cuir, de parfums, d’épices et de tissus.</p><ul><li><b>Khadija bint Khuwaylid</b> (morte en 619) est l’une des commerçantes les plus prospères de la ville. Veuve, elle gère elle-même sa fortune et finance des caravanes.</li><li>Elle ne voyage pas : elle confie ses marchandises à des agents qui partent vendre et rapportent les bénéfices, partagés selon un accord conclu au départ. C’est l’association entre <b>celui qui apporte le capital</b> et <b>celui qui apporte le travail</b> (appelée plus tard <b>qirad</b> ou <b>moudaraba</b>). Un contrat proche, la <b>commenda</b>, se répandra chez les marchands italiens.</li><li>Elle engage un jeune homme réputé pour son honnêteté, <b>Mahomet</b>, pour conduire une caravane vers la Syrie. Satisfaite, elle lui propose le mariage, vers 595.</li><li>Selon la tradition musulmane, elle est la première personne à croire en sa prophétie et le soutient avec sa fortune.</li></ul><p>Ce que l’on sait d’elle vient surtout des biographies musulmanes écrites plus d’un siècle après sa mort : les détails sont à lire avec cette précaution, mais son rôle de marchande est un trait constant des récits.</p>",
              example: "Le principe du qirad ressemble à une levée de fonds : l’investisseur apporte l’argent, l’entrepreneur son travail ; ils se partagent les bénéfices, et en cas de perte, c’est le capital de l’investisseur qui la supporte.",
            },
            {
              title: "Le monde musulman, carrefour des échanges",
              body:
                "<p>À partir du VIIe siècle, le monde musulman s’étend de l’Espagne à l’Asie centrale. Il se trouve au <b>centre</b> des routes entre l’Europe, l’Afrique, l’Inde et la Chine.</p><ul><li>Des marchands arabes et persans dominent l’océan Indien avec leurs bateaux (les <b>boutres</b>).</li><li>Des villes comme <b>Bagdad</b>, Le Caire ou Damas deviennent de grands centres d’échanges et de savoir.</li><li>Les <b>caravanes transsahariennes</b> relient l’Afrique du Nord à l’Afrique de l’Ouest : sel contre or.</li></ul>",
            },
            {
              title: "L’or de l’Afrique de l’Ouest",
              body:
                "<p>L’<b>Empire du Mali</b> contrôle d’importantes mines d’or. Son souverain <b>Mansa Moussa</b> effectue en <b>1324</b> un pèlerinage vers La Mecque resté célèbre : il traverse Le Caire avec une suite immense et distribue tant d’or que son cours aurait baissé localement pendant des années.</p><p>Cet épisode montre une règle économique simple : quand une marchandise devient abondante d’un coup, sa valeur baisse, même si c’est de l’or.</p><p>Tombouctou devient un grand centre commercial et intellectuel.</p>",
            },
            {
              title: "L’Europe marchande",
              body:
                "<ul><li>Aux XIIe et XIIIe siècles, les <b>foires de Champagne</b> (Troyes, Provins…) réunissent plusieurs fois par an des marchands d’Italie et de Flandre.</li><li>Les cités italiennes, <b>Venise</b> et <b>Gênes</b>, dominent le commerce avec l’Orient. Le Vénitien <b>Marco Polo</b> raconte son voyage en Chine (fin du XIIIe siècle).</li><li>Au nord, la <b>Hanse</b>, une ligue de villes marchandes autour de Lübeck, contrôle le commerce de la mer Baltique et de la mer du Nord : harengs, bois, fourrures, céréales.</li></ul>",
            },
            {
              title: "Les inventions des marchands",
              body:
                "<p>Le commerce lointain pose des problèmes : transporter de l’or est dangereux, il faut faire confiance à des partenaires lointains, suivre des affaires complexes. Les marchands inventent des solutions qui existent encore :</p><ul><li>la <b>lettre de change</b> : un papier qui permet de payer à distance sans transporter de pièces, l’ancêtre du chèque et du virement ;</li><li>les <b>banques</b>, avec les grandes familles italiennes comme les <b>Médicis</b> à Florence (XVe siècle) ;</li><li>la <b>comptabilité en partie double</b> (chaque opération est inscrite au débit d’un compte et au crédit d’un autre), décrite par <b>Luca Pacioli</b> en <b>1494</b> ;</li><li>les <b>sociétés</b> entre associés pour partager les risques d’une expédition.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel réseau ?",
          instruction: "Associe chaque élément au réseau marchand médiéval correspondant.",
          categories: ["Monde musulman et Afrique", "Cités italiennes", "Hanse"],
          items: [
            { text: "Lübeck et le commerce du hareng en Baltique", cat: 2, why: "Cœur de la Hanse." },
            { text: "Khadija finance des caravanes entre La Mecque et la Syrie", cat: 0, why: "Commerce caravanier de l’Arabie, fin du VIe siècle." },
            { text: "Mansa Moussa traverse Le Caire avec des quantités d’or", cat: 0, why: "Empire du Mali, 1324." },
            { text: "Marco Polo raconte la Chine", cat: 1, why: "Marchand vénitien." },
            { text: "Les caravanes échangent du sel contre de l’or à travers le Sahara", cat: 0, why: "Commerce transsaharien." },
            { text: "La famille Médicis développe une grande banque à Florence", cat: 1, why: "Banque italienne du XVe siècle." },
            { text: "Une ligue de villes marchandes de la mer du Nord défend ses privilèges", cat: 2, why: "C’est la définition de la Hanse." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Commerce transsaharien", back: "Caravanes reliant l’Afrique du Nord et l’Afrique de l’Ouest : sel contre or." },
            { front: "Mansa Moussa, 1324", back: "Souverain du Mali dont le pèlerinage chargé d’or est resté célèbre." },
            { front: "Foires de Champagne", back: "Grands rendez-vous marchands des XIIe-XIIIe siècles entre Italiens et Flamands." },
            { front: "Hanse", back: "Ligue de villes marchandes autour de Lübeck, maîtresse de la Baltique et de la mer du Nord." },
            { front: "Lettre de change", back: "Papier permettant de payer à distance sans transporter d’or : ancêtre du chèque." },
            { front: "Partie double (Pacioli, 1494)", back: "Chaque opération au débit d’un compte et au crédit d’un autre : base de la comptabilité moderne." },
            { front: "Khadija (morte en 619)", back: "Femme d’affaires de La Mecque qui finançait des caravanes vers la Syrie ; épouse de Mahomet." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Que s’échangeait principalement sur les routes transsahariennes ?", options: ["Du sel contre de l’or", "Du pétrole contre du blé", "De la soie contre des épices"], answer: 0, explain: "Le sel, vital et rare au sud du Sahara, contre l’or d’Afrique de l’Ouest." },
            { q: "À quoi servait une lettre de change ?", options: ["À écrire à sa famille", "À payer à distance sans transporter de pièces", "À déclarer ses impôts"], answer: 1, explain: "Elle limitait les risques de vol et facilitait les paiements internationaux." },
            { q: "La comptabilité en partie double, encore utilisée aujourd’hui, a été décrite en…", options: ["1066", "1494", "1789"], answer: 1, explain: "Par Luca Pacioli, à Venise." },
            { q: "Comment Khadija faisait-elle commerce sans voyager ?", options: ["Elle vendait par correspondance", "Elle confiait ses marchandises à des agents qui partaient avec les caravanes et partageaient les bénéfices avec elle", "Elle tenait une boutique à Damas"], answer: 1, explain: "C’est l’association entre capital et travail, appelée plus tard qirad ou moudaraba." },
            { q: "Selon les récits, que s’est-il passé après le passage de Mansa Moussa au Caire ?", options: ["L’or est devenu plus rare", "Le cours de l’or a baissé localement, tant il en avait distribué", "Il a fait faillite"], answer: 1, explain: "Une abondance soudaine fait baisser la valeur, même de l’or." },
          ],
        },
        {
          type: "case",
          title: "Le marchand florentin",
          story:
            "En 1450, un marchand de Florence vend du drap à un client de Bruges. Le transport de pièces d’or sur des centaines de kilomètres est risqué (brigands, naufrages). Il doit aussi suivre des dizaines d’opérations avec plusieurs associés.",
          question: "Quelles innovations médiévales l’aident ?",
          options: [
            "Le téléphone et le tableur",
            "La lettre de change pour être payé à distance via une banque, et la comptabilité en partie double pour suivre ses affaires",
            "La carte bancaire",
          ],
          answer: 1,
          explain:
            "Une banque florentine présente à Bruges paie le marchand contre la lettre de change ; sa comptabilité en partie double lui permet de savoir à tout moment ce qu’on lui doit et ce qu’il doit. Les outils financiers modernes descendent directement de ces inventions.",
        },
        {
          type: "fiche",
          title: "Les marchands du Moyen Âge",
          points: [
            "<b>Khadija</b> (La Mecque, fin VIe s.) : finance des caravanes vers la Syrie ; association capital + travail (<b>qirad</b>), ancêtre de la commenda.",
            "Monde musulman au <b>carrefour</b> des échanges : océan Indien, Bagdad, Le Caire.",
            "<b>Commerce transsaharien</b> : sel contre or ; <b>Mansa Moussa</b> (Mali, 1324).",
            "Europe : <b>foires de Champagne</b>, <b>Venise</b> et <b>Gênes</b>, <b>Marco Polo</b>, <b>Hanse</b> au nord.",
            "Inventions : <b>lettre de change</b>, <b>banques</b> (Médicis), <b>partie double</b> (Pacioli, 1494), sociétés entre associés.",
          ],
          retenir: "Les outils de ton entreprise (banque, virement, comptabilité, associés) ont été inventés par des marchands médiévaux.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Les grandes découvertes et les compagnies des Indes",
      minutes: 19,
      objectives: ["Comprendre pourquoi les Européens ont cherché de nouvelles routes", "Connaître les compagnies des Indes et la traite atlantique"],
      steps: [
        {
          type: "lesson",
          title: "Les nouvelles routes océaniques",
          slides: [
            {
              title: "Aller chercher les épices à la source",
              body:
                "<p>Au XVe siècle, les épices d’Asie arrivent en Europe après être passées par de nombreux intermédiaires, notamment dans l’Empire ottoman et à Venise. Les Portugais et les Espagnols veulent les atteindre <b>directement par la mer</b>.</p><ul><li><b>1492</b> : Christophe Colomb, au service de l’Espagne, cherche l’Asie vers l’ouest et atteint l’Amérique.</li><li><b>1498</b> : Vasco de Gama, Portugais, contourne l’Afrique et atteint <b>Calicut</b>, en Inde.</li></ul><p>Le Portugal crée un réseau de comptoirs fortifiés de l’Afrique à l’Asie.</p>",
            },
            {
              title: "Un commerce devenu mondial",
              body:
                "<ul><li>L’<b>échange colombien</b> : des plantes et animaux traversent l’Atlantique. Pomme de terre, maïs, tomate, cacao vers l’Europe ; blé, chevaux, bétail vers l’Amérique. Mais aussi des maladies qui déciment les populations amérindiennes.</li><li>L’<b>argent</b> des mines d’Amérique (Potosí, dans l’actuelle Bolivie) inonde le monde et sert notamment à acheter des produits chinois.</li><li>De <b>1565 à 1815</b>, les <b>galions de Manille</b> relient l’Asie (Philippines) et l’Amérique (Acapulco) : argent américain contre soie et porcelaine chinoises. Pour la première fois, un commerce régulier fait le tour de la planète.</li></ul>",
            },
            {
              title: "Les compagnies des Indes",
              body:
                "<p>Pour financer des expéditions très coûteuses et risquées, on invente de grandes sociétés privées avec privilèges d’État :</p><ul><li><b>1600</b> : la <b>Compagnie anglaise des Indes orientales</b> ;</li><li><b>1602</b> : la <b>VOC</b>, la Compagnie néerlandaise des Indes orientales. Elle émet des <b>actions</b> que l’on peut acheter et revendre à la Bourse d’<b>Amsterdam</b>. On la considère souvent comme la première grande société par actions cotée ;</li><li><b>1664</b> : la Compagnie française des Indes orientales, créée sous l’impulsion de <b>Colbert</b>.</li></ul><p>Ces compagnies ont leurs propres armées et administrent des territoires : la britannique finit par gouverner une grande partie de l’Inde.</p>",
            },
            {
              title: "Le mercantilisme",
              body:
                "<p>Aux XVIe-XVIIIe siècles, les États pensent que la richesse d’un pays se mesure à son stock d’<b>or et d’argent</b>. C’est le <b>mercantilisme</b> :</p><ul><li>il faut <b>exporter plus qu’importer</b> pour faire entrer des métaux précieux ;</li><li>on protège ses industries par des <b>droits de douane</b> ;</li><li>on crée des manufactures (en France, le <b>colbertisme</b>) ;</li><li>les colonies doivent fournir des matières premières et acheter les produits de la métropole.</li></ul>",
            },
            {
              title: "La traite atlantique",
              body:
                "<p>Le commerce atlantique repose en grande partie sur un crime de masse : la <b>traite des Africains réduits en esclavage</b>.</p><ul><li>Du XVIe au XIXe siècle, environ <b>12,5 millions</b> d’Africains sont embarqués de force vers les Amériques ; près de 2 millions meurent pendant la traversée.</li><li>C’est le <b>commerce triangulaire</b> : des navires partent d’Europe (Nantes, Bordeaux, Liverpool…) avec des marchandises, achètent des captifs en Afrique, les vendent en Amérique, et reviennent avec du sucre, du coton, du tabac, du café produits par les esclaves.</li><li>La France abolit l’esclavage en <b>1794</b>, le rétablit en 1802, puis l’abolit définitivement en <b>1848</b>.</li><li>Depuis la <b>loi Taubira de 2001</b>, la France reconnaît la traite et l’esclavage comme <b>crimes contre l’humanité</b>.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "1498, Vasco de Gama", back: "Atteint Calicut en Inde en contournant l’Afrique : route maritime directe vers les épices." },
            { front: "Échange colombien", back: "Circulation de plantes, d’animaux et de maladies entre l’Ancien et le Nouveau Monde après 1492." },
            { front: "Galions de Manille (1565-1815)", back: "Liaison régulière Acapulco–Manille : argent américain contre produits chinois." },
            { front: "VOC, 1602", back: "Compagnie néerlandaise des Indes orientales, actions échangées à la Bourse d’Amsterdam." },
            { front: "Mercantilisme", back: "Doctrine : la richesse d’un pays = son stock de métaux précieux ; exporter plus qu’importer." },
            { front: "Commerce triangulaire", back: "Europe → Afrique (captifs) → Amériques (produits des plantations) → Europe : environ 12,5 millions de déportés." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi les Portugais cherchaient-ils une route maritime vers l’Inde ?", options: ["Pour découvrir l’Amérique", "Pour accéder directement aux épices sans passer par les intermédiaires", "Pour fuir une guerre"], answer: 1, explain: "Supprimer les intermédiaires = capter leurs marges." },
            { q: "Qu’avait de nouveau la VOC en 1602 ?", options: ["Elle était gratuite", "Ses actions pouvaient être achetées et revendues en Bourse", "Elle n’avait pas de bateaux"], answer: 1, explain: "Le financement par actions négociables permet de lever beaucoup de capitaux en partageant les risques." },
            { q: "Selon le mercantilisme, un pays s’enrichit…", options: ["en important beaucoup", "en accumulant de l’or et de l’argent grâce à un excédent commercial", "en supprimant toutes les taxes"], answer: 1, explain: "Une vision que les économistes classiques critiqueront au XVIIIe siècle." },
            { q: "En quelle année la France a-t-elle aboli définitivement l’esclavage ?", options: ["1794", "1848", "1905"], answer: 1, explain: "Après une première abolition en 1794 et un rétablissement par Napoléon en 1802." },
          ],
        },
        {
          type: "case",
          title: "Financer l’impossible",
          story:
            "En 1600, une expédition vers l’Asie coûte une fortune, dure deux ans, et un navire sur plusieurs ne revient pas. Aucun marchand ne peut prendre seul un tel risque, même si un retour réussi rapporte énormément.",
          question: "Quelle solution les Néerlandais trouvent-ils avec la VOC ?",
          options: [
            "Faire payer l’expédition entièrement par le roi",
            "Réunir l’argent de très nombreux investisseurs en actions, partager les profits et les risques, et permettre de revendre ses actions en Bourse",
            "N’envoyer qu’un seul bateau à la fois",
          ],
          answer: 1,
          explain:
            "La société par actions mutualise le risque et lève des capitaux énormes. La possibilité de revendre ses parts en Bourse rend l’investissement plus attractif. C’est l’ancêtre direct des sociétés cotées et des levées de fonds d’aujourd’hui.",
        },
        {
          type: "fiche",
          title: "Grandes découvertes et compagnies",
          points: [
            "<b>1492</b> Colomb en Amérique, <b>1498</b> Vasco de Gama en Inde : accès direct aux épices.",
            "<b>Échange colombien</b>, argent de Potosí, <b>galions de Manille</b> (1565-1815) : premier commerce mondial régulier.",
            "Compagnies des Indes : anglaise (<b>1600</b>), <b>VOC</b> (<b>1602</b>, actions en Bourse), française (<b>1664</b>, Colbert).",
            "<b>Mercantilisme</b> : accumuler l’or, exporter plus qu’importer, protéger ses manufactures.",
            "<b>Traite atlantique</b> : environ 12,5 millions de déportés ; abolition définitive en France en <b>1848</b> ; crime contre l’humanité (loi Taubira, 2001).",
          ],
          retenir: "La mondialisation a commencé au XVIe siècle, avec ses innovations et ses crimes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "L’industrie et la première mondialisation",
      minutes: 18,
      objectives: ["Comprendre comment la révolution industrielle a transformé le commerce", "Connaître la naissance du libre-échange et la première mondialisation"],
      steps: [
        {
          type: "lesson",
          title: "Le XIXe siècle",
          slides: [
            {
              title: "Les penseurs du libre-échange",
              body:
                "<ul><li><b>1776</b> : l’Écossais <b>Adam Smith</b> publie <i>La Richesse des nations</i>. Pour lui, la richesse vient du <b>travail</b> et de la <b>division du travail</b>, pas de l’accumulation d’or. Il critique le mercantilisme et défend la liberté du commerce.</li><li><b>1817</b> : <b>David Ricardo</b> formule la théorie de l’<b>avantage comparatif</b> : chaque pays gagne à se spécialiser et à échanger (voir le cours d’Économie).</li></ul><p>Ces idées inspirent la politique commerciale du Royaume-Uni, première puissance industrielle.</p>",
            },
            {
              title: "La révolution industrielle",
              body:
                "<p>À partir de la fin du XVIIIe siècle, d’abord au Royaume-Uni, la <b>machine à vapeur</b> et les machines textiles permettent de produire en masse.</p><ul><li>Les <b>chemins de fer</b> et les <b>navires à vapeur</b> réduisent fortement le coût et la durée des transports.</li><li>Le <b>télégraphe</b> (câble transatlantique en 1866) transmet les informations et les prix en quelques minutes au lieu de semaines.</li><li>Le <b>canal de Suez</b>, ouvert en <b>1869</b>, raccourcit énormément la route entre l’Europe et l’Asie.</li></ul>",
            },
            {
              title: "Le triomphe du libre-échange",
              body:
                "<ul><li><b>1846</b> : le Royaume-Uni abolit les <b>Corn Laws</b>, qui protégeaient ses producteurs de céréales. Le pain devient moins cher pour les ouvriers.</li><li><b>1860</b> : le traité <b>Cobden-Chevalier</b> entre la France et le Royaume-Uni réduit fortement les droits de douane entre les deux pays. D’autres traités suivent en Europe.</li><li>Une monnaie internationale de fait s’impose : l’<b>étalon-or</b>, avec la livre sterling comme référence.</li></ul><p>Le libre-échange ne fait pas l’unanimité : à partir des années 1880, beaucoup de pays (dont la France avec les tarifs Méline de 1892) reviennent à plus de protection pour leur agriculture et leur industrie.</p>",
            },
            {
              title: "La première mondialisation (1870-1914)",
              body:
                "<p>Entre 1870 et 1914, les échanges, les capitaux et les migrations atteignent des niveaux records. Des historiens parlent de <b>première mondialisation</b>.</p><ul><li>Les produits manufacturés européens se vendent dans le monde entier.</li><li>Des millions d’Européens émigrent vers les Amériques.</li><li>Les capitaux européens financent chemins de fer et mines à l’étranger.</li></ul><p>Cette mondialisation est aussi <b>impériale</b> : les puissances européennes se partagent l’Afrique (conférence de Berlin, 1884-1885) et imposent l’ouverture de marchés par la force, comme lors des <b>guerres de l’opium</b> contre la Chine (1839-1842 et 1856-1860).</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Mercantilisme ou libre-échange ?",
          instruction: "Classe chaque idée ou mesure selon la doctrine qu’elle illustre.",
          categories: ["Mercantilisme / protection", "Libre-échange"],
          items: [
            { text: "La richesse d’un pays, c’est son stock d’or", cat: 0, why: "Idée centrale du mercantilisme." },
            { text: "Abolition des Corn Laws en 1846", cat: 1, why: "Suppression d’une protection agricole." },
            { text: "Traité Cobden-Chevalier de 1860", cat: 1, why: "Baisse des droits de douane franco-britanniques." },
            { text: "Créer des manufactures d’État et taxer les importations concurrentes", cat: 0, why: "Colbertisme." },
            { text: "La richesse vient du travail et de la division du travail (Adam Smith)", cat: 1, why: "Critique du mercantilisme." },
            { text: "Les tarifs Méline de 1892 protègent l’agriculture française", cat: 0, why: "Retour au protectionnisme." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Adam Smith, 1776", back: "La Richesse des nations : la richesse vient du travail et de sa division ; critique du mercantilisme." },
            { front: "Corn Laws (abolies en 1846)", back: "Lois britanniques protégeant les producteurs de céréales ; leur abolition symbolise le libre-échange." },
            { front: "Traité Cobden-Chevalier, 1860", back: "Accord de libre-échange entre la France et le Royaume-Uni." },
            { front: "Canal de Suez, 1869", back: "Raccourcit fortement la route maritime Europe–Asie." },
            { front: "Étalon-or", back: "Système où les monnaies sont convertibles en or ; la livre sterling sert de référence." },
            { front: "Première mondialisation", back: "1870-1914 : records d’échanges, de capitaux et de migrations, dans un contexte impérial." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Selon Adam Smith, d’où vient la richesse des nations ?", options: ["De l’or accumulé", "Du travail et de la division du travail", "Des colonies uniquement"], answer: 1, explain: "C’est une rupture avec le mercantilisme." },
            { q: "Quelle infrastructure ouverte en 1869 bouleverse le commerce Europe–Asie ?", options: ["Le canal de Panama", "Le canal de Suez", "Le tunnel sous la Manche"], answer: 1, explain: "Panama n’ouvrira qu’en 1914." },
            { q: "Le libre-échange s’est-il imposé partout et pour toujours au XIXe siècle ?", options: ["Oui", "Non, beaucoup de pays reviennent au protectionnisme à partir des années 1880"], answer: 1, explain: "L’histoire du commerce alterne phases d’ouverture et de fermeture." },
            { q: "Que révèlent les guerres de l’opium sur la première mondialisation ?", options: ["Qu’elle fut entièrement pacifique", "Que l’ouverture de certains marchés a été imposée par la force", "Que la Chine fermait ses ports aux Européens par choix commercial"], answer: 1, explain: "Le Royaume-Uni impose à la Chine l’ouverture de ports et le commerce de l’opium." },
          ],
        },
        {
          type: "case",
          title: "La révolution de l’information",
          story:
            "Avant 1866, un négociant de Liverpool apprenait le prix du coton à New York avec environ deux semaines de retard, le temps qu’un navire traverse l’Atlantique. Après le câble télégraphique transatlantique, il l’apprend dans la journée.",
          question: "Quel effet principal cela a-t-il sur le commerce ?",
          options: [
            "Aucun, seul le transport compte",
            "Les écarts de prix entre marchés se réduisent : il devient plus difficile de profiter de l’ignorance des autres, et les marchés se connectent",
            "Les prix du coton doublent",
          ],
          answer: 1,
          explain:
            "L’information rapide rapproche les prix des différents marchés. C’est la même logique qu’internet aujourd’hui : quand les clients comparent en un clic, les marges fondées sur l’ignorance disparaissent.",
        },
        {
          type: "fiche",
          title: "L’industrie et la première mondialisation",
          points: [
            "<b>Adam Smith (1776)</b> et <b>Ricardo (1817)</b> : penseurs du libre-échange.",
            "Révolution industrielle : vapeur, <b>chemins de fer</b>, navires, <b>télégraphe</b> (1866), <b>Suez</b> (1869).",
            "Libre-échange : <b>Corn Laws</b> abolies (1846), <b>Cobden-Chevalier</b> (1860), <b>étalon-or</b>.",
            "Retour de la protection dès les années 1880 (<b>tarifs Méline</b>, 1892).",
            "<b>Première mondialisation (1870-1914)</b>, aussi impériale : partage de l’Afrique, guerres de l’opium.",
          ],
          retenir: "Transport plus rapide, information plus rapide : chaque révolution logistique redessine le commerce.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Crises, conteneurs et règles du jeu (1914-2000)",
      minutes: 18,
      objectives: ["Comprendre le repli des années 1930 et la reconstruction de l’après-guerre", "Mesurer la révolution du conteneur"],
      steps: [
        {
          type: "lesson",
          title: "Le XXe siècle",
          slides: [
            {
              title: "Le grand repli",
              body:
                "<ul><li>La <b>Première Guerre mondiale</b> (1914-1918) brise la première mondialisation.</li><li>Après la crise de <b>1929</b>, les États-Unis adoptent en <b>1930</b> le tarif <b>Smoot-Hawley</b>, qui relève fortement leurs droits de douane. D’autres pays répliquent.</li><li>Le commerce mondial s’effondre au début des années 1930. Chacun se replie sur son marché ou son empire colonial.</li></ul><p>Beaucoup d’historiens et d’économistes considèrent que ces guerres commerciales ont aggravé la crise et les tensions internationales.</p>",
            },
            {
              title: "Reconstruire des règles communes",
              body:
                "<p>Après la Seconde Guerre mondiale, les vainqueurs veulent éviter de répéter les erreurs des années 1930 :</p><ul><li><b>1944</b> : les accords de <b>Bretton Woods</b> créent un système monétaire international autour du dollar, ainsi que le <b>FMI</b> et la Banque mondiale.</li><li><b>1947</b> : le <b>GATT</b>, un accord pour réduire progressivement les droits de douane par des négociations successives.</li><li><b>1957</b> : le <b>traité de Rome</b> crée la Communauté économique européenne, un marché commun qui deviendra l’Union européenne.</li><li><b>1995</b> : l’<b>Organisation mondiale du commerce</b> (OMC) remplace le GATT, avec un système de règlement des différends.</li></ul>",
            },
            {
              title: "La révolution du conteneur",
              body:
                "<p>En <b>1956</b>, l’entrepreneur américain <b>Malcom McLean</b> fait naviguer l’<i>Ideal X</i>, un pétrolier modifié qui transporte des <b>conteneurs</b> : des boîtes métalliques standardisées qui passent directement du camion au navire, puis au train.</p><ul><li>Avant, des dockers chargeaient chaque sac et chaque caisse à la main : des jours d’escale et beaucoup de vols.</li><li>Avec le conteneur, le chargement se fait en quelques heures, avec des grues.</li><li>Le coût du transport maritime s’effondre.</li></ul><p>Aujourd’hui, la grande majorité des marchandises échangées dans le monde voyage par la mer, une large part en conteneurs. Sans cette « boîte », pas d’import depuis la Chine à prix bas.</p>",
            },
            {
              title: "Des Trente Glorieuses à la Chine",
              body:
                "<ul><li>Pendant les <b>Trente Glorieuses</b> (1945-1975), le commerce mondial progresse plus vite que la production.</li><li>Les <b>chocs pétroliers</b> de 1973 et 1979 rappellent la dépendance à l’énergie importée.</li><li>Les pays asiatiques (Japon, puis Corée du Sud, Taïwan…) se développent grâce aux exportations.</li><li>La Chine s’ouvre progressivement à partir de <b>1978</b>, et entre à l’OMC le <b>11 décembre 2001</b>. Elle devient « l’usine du monde ».</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Repli ou ouverture ?",
          instruction: "Chaque événement favorise-t-il le repli ou l’ouverture du commerce ?",
          categories: ["Repli", "Ouverture"],
          items: [
            { text: "Tarif Smoot-Hawley, 1930", cat: 0, why: "Forte hausse des droits de douane américains." },
            { text: "Création du GATT, 1947", cat: 1, why: "Négociations pour baisser les droits de douane." },
            { text: "Traité de Rome, 1957", cat: 1, why: "Création d’un marché commun européen." },
            { text: "Repli des empires coloniaux sur eux-mêmes dans les années 1930", cat: 0, why: "Commerce limité à des zones fermées." },
            { text: "Entrée de la Chine à l’OMC en 2001", cat: 1, why: "Intégration au commerce mondial." },
            { text: "Création de l’OMC en 1995", cat: 1, why: "Règles communes et règlement des différends." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Smoot-Hawley, 1930", back: "Hausse des droits de douane américains ; symbole des guerres commerciales des années 1930." },
            { front: "Bretton Woods, 1944", back: "Système monétaire international autour du dollar ; création du FMI et de la Banque mondiale." },
            { front: "GATT, 1947", back: "Accord pour réduire progressivement les droits de douane." },
            { front: "Traité de Rome, 1957", back: "Création de la Communauté économique européenne et d’un marché commun." },
            { front: "Malcom McLean, 1956", back: "Lance le transport maritime par conteneurs standardisés." },
            { front: "Chine à l’OMC", back: "11 décembre 2001 : la Chine devient « l’usine du monde »." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi a-t-on créé le GATT en 1947 ?", options: ["Pour augmenter les droits de douane", "Pour éviter de revivre les guerres commerciales des années 1930 en baissant les droits de douane", "Pour créer l’euro"], answer: 1, explain: "Leçon tirée de l’effondrement du commerce dans les années 1930." },
            { q: "Quelle innovation a le plus fait baisser le coût du transport maritime au XXe siècle ?", options: ["Le conteneur standardisé", "La voile", "Le télégraphe"], answer: 0, explain: "Chargement mécanisé, rapidité, moins de vols." },
            { q: "Quand la Chine est-elle entrée à l’OMC ?", options: ["1978", "2001", "2020"], answer: 1, explain: "1978 marque le début de ses réformes ; 2001 son entrée à l’OMC." },
            { q: "Quel organisme remplace le GATT en 1995 ?", options: ["Le FMI", "L’Organisation mondiale du commerce", "La BCE"], answer: 1, explain: "L’OMC ajoute un système de règlement des différends." },
          ],
        },
        {
          type: "case",
          title: "La boîte qui a changé le monde",
          story:
            "En 1950, faire venir des marchandises d’Asie jusqu’en Europe prenait des semaines d’escales, de manutention à la main et de pertes. Aujourd’hui, un importateur de Caen peut faire venir un conteneur de Chine en quelques semaines, pour un coût par produit souvent de quelques centimes.",
          question: "Quelle leçon un entrepreneur peut-il en tirer ?",
          options: [
            "Les innovations logistiques n’ont pas d’effet sur le commerce",
            "Une innovation « banale » de standardisation peut bouleverser des industries entières : réduire un coût de transaction crée parfois plus de valeur qu’un nouveau produit",
            "Il faut toujours transporter par avion",
          ],
          answer: 1,
          explain:
            "Le conteneur n’est qu’une boîte, mais sa standardisation a fait baisser le coût du commerce mondial. Le même raisonnement s’applique au paiement en un clic, à la livraison en point relais ou aux plateformes : simplifier l’échange crée des marchés.",
        },
        {
          type: "fiche",
          title: "Le XXe siècle",
          points: [
            "Repli : Première Guerre mondiale, crise de <b>1929</b>, <b>Smoot-Hawley (1930)</b>, guerres commerciales.",
            "Règles communes : <b>Bretton Woods (1944)</b>, <b>GATT (1947)</b>, <b>traité de Rome (1957)</b>, <b>OMC (1995)</b>.",
            "<b>Conteneur</b> (McLean, <b>1956</b>) : effondrement du coût du transport maritime.",
            "Trente Glorieuses, chocs pétroliers (1973, 1979), essor de l’Asie.",
            "Chine : réformes en <b>1978</b>, OMC le <b>11 décembre 2001</b>.",
          ],
          retenir: "Après le chaos des années 1930, le monde a reconstruit des règles ; puis une simple boîte a rendu le commerce mondial bon marché.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Le commerce d’aujourd’hui : plateformes et tensions",
      minutes: 18,
      objectives: ["Comprendre les chaînes de valeur mondiales et l’e-commerce", "Analyser le retour des tensions commerciales depuis 2018"],
      steps: [
        {
          type: "lesson",
          title: "Le commerce contemporain",
          slides: [
            {
              title: "Les chaînes de valeur mondiales",
              body:
                "<p>Aujourd’hui, un produit n’est presque jamais fabriqué dans un seul pays. Un smartphone peut être conçu aux États-Unis, utiliser des puces de Taïwan et de Corée, des minerais d’Afrique et d’Amérique du Sud, et être assemblé en Chine ou en Inde.</p><p>On parle de <b>chaînes de valeur mondiales</b> : chaque étape est réalisée là où elle coûte le moins ou là où se trouvent les compétences.</p><p>Point important : la plus grande partie de la <b>valeur</b> se trouve souvent au début (conception, marque, technologie) et à la fin (marketing, vente, service), plus que dans l’assemblage.</p>",
            },
            {
              title: "La révolution de l’e-commerce",
              body:
                "<ul><li><b>1994</b> : Jeff Bezos fonde <b>Amazon</b>, d’abord pour vendre des livres en ligne.</li><li><b>1999</b> : Jack Ma fonde <b>Alibaba</b> en Chine, qui connecte les fabricants chinois aux acheteurs du monde entier.</li><li>Les <b>places de marché</b> permettent à n’importe qui de vendre partout sans magasin.</li><li>Plus récemment, des plateformes comme <b>Shein</b> ou <b>Temu</b> expédient directement de Chine vers les consommateurs européens des millions de petits colis, ce qui pose des questions de concurrence, de contrôle des produits et de droits de douane sur les petits envois.</li></ul><p>Pour un petit entrepreneur, c’est une opportunité unique dans l’histoire : sourcer en Chine et vendre dans toute l’Europe depuis son salon.</p>",
            },
            {
              title: "Le retour des tensions",
              body:
                "<ul><li>À partir de <b>2018</b>, les États-Unis et la Chine se lancent dans une <b>guerre commerciale</b> : droits de douane croisés sur des centaines de milliards de dollars de produits.</li><li><b>2020-2022</b> : le Covid et la reprise provoquent une crise logistique ; le prix d’un conteneur Asie–Europe est multiplié plusieurs fois.</li><li>Depuis 2023-2024, les attaques dans la mer Rouge détournent une partie des navires par le cap de Bonne-Espérance, comme avant le canal de Suez.</li><li><b>2025</b> : nouvelle vague de droits de douane américains ; l’accord avec l’Union européenne plafonne la plupart des droits à 15 %.</li><li><b>2026</b> : les tensions au Moyen-Orient font flamber le pétrole et menacent des passages maritimes clés.</li></ul>",
            },
            {
              title: "Démondialisation ou reconfiguration ?",
              body:
                "<p>Les experts débattent :</p><ul><li>pour certains, on assiste à une <b>démondialisation</b> : relocalisations, protectionnisme, blocs rivaux ;</li><li>pour d’autres, il s’agit plutôt d’une <b>reconfiguration</b> : le commerce mondial continue de croître, mais les entreprises diversifient leurs fournisseurs (Vietnam, Inde, Mexique, Maroc…) et rapprochent certaines productions (« nearshoring »).</li></ul><p>Les États cherchent aussi à sécuriser les produits <b>stratégiques</b> : semi-conducteurs, médicaments, batteries, terres rares.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Chaîne de valeur mondiale", back: "Production découpée entre plusieurs pays, chaque étape là où elle est la plus efficace." },
            { front: "Où est la valeur ?", back: "Surtout dans la conception, la marque, la technologie, le marketing et la vente, plus que dans l’assemblage." },
            { front: "Amazon (1994) et Alibaba (1999)", back: "Plateformes qui ont transformé la vente et le sourcing mondial." },
            { front: "Guerre commerciale sino-américaine", back: "Depuis 2018 : droits de douane croisés entre les États-Unis et la Chine." },
            { front: "Nearshoring", back: "Rapprocher la production des marchés de consommation (Mexique pour les États-Unis, Maroc ou Europe de l’Est pour l’UE)." },
            { front: "Produits stratégiques", back: "Semi-conducteurs, médicaments, batteries, terres rares : enjeux de souveraineté." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Dans la fabrication d’un smartphone, où se situe généralement la plus grande part de la valeur ?", options: ["Dans l’assemblage final", "Dans la conception, la technologie, la marque et la vente", "Dans le transport"], answer: 1, explain: "C’est la « courbe du sourire » : la valeur est aux deux extrémités de la chaîne." },
            { q: "Pourquoi les attaques en mer Rouge ont-elles allongé les trajets Asie–Europe ?", options: ["Les navires contournent l’Afrique par le cap de Bonne-Espérance au lieu de passer par Suez", "Les navires vont plus lentement", "Les ports européens ont fermé"], answer: 0, explain: "Un détour de plusieurs milliers de kilomètres." },
            { q: "Qu’est-ce que le nearshoring ?", options: ["Produire au plus loin", "Rapprocher la production des marchés de consommation", "Vendre uniquement en ligne"], answer: 1, explain: "Une réponse aux risques logistiques et géopolitiques." },
            { q: "Le commerce mondial s’est-il effondré depuis 2018 ?", options: ["Oui, complètement", "Non, il se reconfigure : les échanges continuent mais les routes et les fournisseurs changent"], answer: 1, explain: "Le débat porte sur la nature du changement, pas sur une disparition du commerce." },
          ],
        },
        {
          type: "case",
          title: "Un seul fournisseur",
          story:
            "Une boutique en ligne d’accessoires pour animaux achète 100 % de ses produits à un seul fournisseur chinois et les fait venir par la mer Rouge. En quelques mois, le fret double, les délais passent de 5 à 8 semaines et un nouveau droit de douane est annoncé.",
          question: "Quelle stratégie l’histoire récente recommande-t-elle ?",
          options: [
            "Ne rien changer, ces crises sont toujours courtes",
            "Diversifier les fournisseurs et les pays de sourcing, garder un stock de sécurité sur les meilleures ventes, intégrer le risque logistique dans les prix",
            "Arrêter l’import et tout fabriquer soi-même immédiatement",
          ],
          answer: 1,
          explain:
            "Depuis 2020, les chocs logistiques et douaniers se répètent. Les entreprises qui s’en sortent le mieux ont plusieurs fournisseurs, plusieurs pays, et une marge suffisante pour absorber un choc. C’est exactement la logique de reconfiguration des grandes entreprises.",
        },
        {
          type: "fiche",
          title: "Le commerce aujourd’hui",
          points: [
            "<b>Chaînes de valeur mondiales</b> : la valeur est dans la conception, la marque et la vente.",
            "E-commerce : <b>Amazon (1994)</b>, <b>Alibaba (1999)</b>, places de marché, Shein, Temu.",
            "Tensions : guerre commerciale <b>États-Unis–Chine (2018)</b>, crise logistique post-Covid, <b>mer Rouge</b>, droits de douane <b>2025</b>, choc pétrolier <b>2026</b>.",
            "Débat : <b>démondialisation</b> ou <b>reconfiguration</b> (diversification, nearshoring).",
            "Produits stratégiques : semi-conducteurs, médicaments, batteries, terres rares.",
          ],
          retenir: "Le commerce ne disparaît pas, il change de route : diversifie les tiennes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Ce que 5 000 ans de commerce nous apprennent",
      minutes: 16,
      objectives: ["Identifier les constantes de l’histoire du commerce", "Les appliquer à une entreprise d’aujourd’hui"],
      steps: [
        {
          type: "lesson",
          title: "Les leçons de l’histoire",
          slides: [
            {
              title: "Constante n°1 : la confiance",
              body:
                "<p>De la tablette d’Uruk à l’avis client en ligne, le commerce repose sur la <b>confiance</b> :</p><ul><li>le poinçon du roi sur la pièce lydienne ;</li><li>la réputation des marchands de la Hanse ou des banquiers Médicis ;</li><li>les règles communes de l’OMC ;</li><li>aujourd’hui : les avis, les garanties, les marques, le paiement sécurisé.</li></ul><p>Chaque fois que la confiance progresse (monnaie, droit, comptabilité, notation des vendeurs), le commerce s’étend.</p>",
            },
            {
              title: "Constante n°2 : le coût de l’échange",
              body:
                "<p>Les grandes accélérations du commerce viennent presque toujours d’une <b>baisse du coût d’échanger</b> :</p><table class='t'><tr><th>Innovation</th><th>Coût réduit</th></tr><tr><td>Monnaie</td><td>Trouver un partenaire d’échange</td></tr><tr><td>Lettre de change</td><td>Transporter de l’or</td></tr><tr><td>Vapeur, Suez</td><td>Durée du transport</td></tr><tr><td>Télégraphe, internet</td><td>Accès à l’information</td></tr><tr><td>Conteneur</td><td>Manutention</td></tr><tr><td>Places de marché</td><td>Trouver des clients partout</td></tr></table>",
            },
            {
              title: "Constante n°3 : l’alternance ouverture-fermeture",
              body:
                "<p>L’histoire du commerce n’est pas une ligne droite vers toujours plus d’ouverture :</p><ul><li>mercantilisme → libre-échange (XIXe) → protectionnisme (fin XIXe) ;</li><li>première mondialisation → repli des années 1930 ;</li><li>ouverture de l’après-guerre → tensions depuis 2018.</li></ul><p>Ces cycles dépendent des crises, des rapports de force entre puissances et des choix politiques. Personne ne peut prédire avec certitude la phase suivante.</p>",
            },
            {
              title: "Constante n°4 : gagnants et perdants",
              body:
                "<p>Le commerce crée de la richesse globale, mais pas pour tout le monde au même moment :</p><ul><li>les consommateurs gagnent souvent des prix plus bas ;</li><li>les secteurs exposés à la concurrence peuvent perdre emplois et revenus ;</li><li>et l’histoire montre aussi des échanges fondés sur la violence : traite atlantique, ouverture forcée de marchés, exploitation coloniale.</li></ul><p>Les débats actuels sur la mondialisation (emploi industriel, souveraineté, environnement, justice) prolongent des questions très anciennes, sur lesquelles les avis divergent légitimement.</p>",
            },
            {
              title: "Ta checklist d’entrepreneur-historien",
              body:
                "<ol><li><b>Où est la valeur ?</b> À la source, dans la marque, dans l’accès au client ? (épices, VOC, chaînes de valeur)</li><li><b>Combien d’intermédiaires</b> entre ton fournisseur et ton client, et lesquels peux-tu supprimer ?</li><li><b>Quel est ton risque de route ?</b> Un seul fournisseur, un seul pays, une seule plateforme, un seul canal publicitaire ?</li><li><b>Comment crées-tu la confiance ?</b> Marque, avis, garanties, service.</li><li><b>Quel coût d’échange</b> peux-tu réduire pour tes clients ? Livraison, paiement, simplicité.</li></ol>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle constante ?",
          instruction: "Associe chaque exemple à la constante de l’histoire du commerce qu’il illustre.",
          categories: ["Confiance", "Baisse du coût d’échange", "Cycle ouverture-fermeture"],
          items: [
            { text: "Le poinçon royal sur les pièces de Lydie", cat: 0, why: "Garantie de poids et de pureté." },
            { text: "Le conteneur standardisé de 1956", cat: 1, why: "Manutention bien moins chère." },
            { text: "Le tarif Smoot-Hawley de 1930 après une période d’ouverture", cat: 2, why: "Passage de l’ouverture au repli." },
            { text: "Les avis clients vérifiés sur une place de marché", cat: 0, why: "Rassurer un acheteur qui ne connaît pas le vendeur." },
            { text: "Le paiement en un clic", cat: 1, why: "Réduit l’effort et le temps pour acheter." },
            { text: "Les droits de douane croisés entre les États-Unis et la Chine depuis 2018", cat: 2, why: "Nouvelle phase de tensions après des décennies d’ouverture." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Constante : la confiance", back: "Monnaie, réputation, droit, avis : sans confiance, pas d’échange à grande échelle." },
            { front: "Constante : le coût de l’échange", back: "Chaque baisse du coût d’échanger (monnaie, vapeur, conteneur, internet) accélère le commerce." },
            { front: "Constante : l’alternance", back: "Phases d’ouverture et de fermeture se succèdent au gré des crises et des rapports de force." },
            { front: "Constante : gagnants et perdants", back: "Richesse globale, mais répartition inégale ; et des échanges parfois fondés sur la violence." },
            { front: "Supprimer les intermédiaires", back: "Des Portugais allant chercher le poivre en Inde aux marques qui vendent en direct." },
            { front: "Risque de route", back: "Dépendre d’un seul fournisseur, pays, passage maritime ou plateforme." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel point commun entre la lettre de change, le conteneur et la place de marché en ligne ?", options: ["Ils ont été inventés en Chine", "Ils ont tous fortement réduit le coût d’échanger", "Ils sont gratuits"], answer: 1, explain: "Chacun a fait baisser un frein différent au commerce." },
            { q: "L’histoire du commerce est-elle une marche continue vers plus d’ouverture ?", options: ["Oui", "Non, elle alterne phases d’ouverture et de repli"], answer: 1, explain: "Le XIXe et le XXe siècle en donnent plusieurs exemples." },
            { q: "Pourquoi les avis clients jouent-ils le même rôle que la réputation des marchands médiévaux ?", options: ["Ils remplacent la monnaie", "Ils créent la confiance entre des inconnus éloignés", "Ils baissent les prix"], answer: 1, explain: "Le commerce à distance a toujours eu besoin de garanties de confiance." },
            { q: "Quelle leçon de la VOC et des Portugais s’applique à une marque e-commerce ?", options: ["Multiplier les intermédiaires", "Capter la valeur en se rapprochant de la source et du client", "Éviter de vendre à l’étranger"], answer: 1, explain: "Moins d’intermédiaires = plus de marge et plus de contrôle." },
          ],
        },
        {
          type: "case",
          title: "Le diagnostic historique",
          story:
            "Sami importe des parfums d’ambiance d’un grossiste européen qui les achète lui-même à un fabricant. Il les vend uniquement via une grande place de marché, qui prend une commission importante et peut changer ses règles à tout moment.",
          question: "Que lui conseillerait un historien du commerce ?",
          options: [
            "Rien, son modèle est parfait",
            "Réduire les intermédiaires en remontant vers le fabricant, et diversifier ses canaux (site propre, revendeurs) pour ne pas dépendre d’une seule « route »",
            "Revenir au troc",
          ],
          answer: 1,
          explain:
            "Comme les Portugais face aux marchands de Venise, il capte plus de valeur en se rapprochant de la source. Et comme toute entreprise qui dépend d’un seul passage (Suez, mer Rouge, une plateforme), il réduit son risque en ouvrant d’autres routes vers ses clients.",
        },
        {
          type: "fiche",
          title: "Les leçons de 5 000 ans de commerce",
          points: [
            "<b>Confiance</b> : monnaie, réputation, droit, avis clients.",
            "<b>Coût de l’échange</b> : monnaie, lettre de change, vapeur, conteneur, internet.",
            "<b>Alternance</b> ouverture / fermeture selon les crises et les puissances.",
            "<b>Gagnants et perdants</b>, et des échanges parfois fondés sur la violence.",
            "Checklist : où est la valeur, combien d’intermédiaires, quel risque de route, quelle confiance, quel coût d’échange.",
          ],
          retenir: "Les marchands ont changé d’outils, pas de règles : confiance, accès à la source et routes multiples.",
        },
      ],
    },
  ],
});
