/* ============================================================
   COURS : Droit civil — la vie de tous les jours
   Faculté de Droit · 8 séances de 15 à 20 minutes
   Personnes, couple, famille, biens, voisinage, responsabilité,
   successions. Règles vérifiées au 31 octobre 2026.
   ============================================================ */
AGORA.registerCourse({
  id: "droit-civil",
  faculty: "droit",
  title: "Droit civil — la vie de tous les jours",
  subtitle: "Personnes, couple, famille, propriété, responsabilité et héritage",
  color: "#a8432f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Le droit civil règle la vie privée de chacun. Huit séances pour comprendre tes droits et ceux de tes proches : la capacité et la protection des personnes, le mariage, le PACS et l’union libre, l’argent du couple, les enfants, la séparation, la propriété et le voisinage, la responsabilité quand on cause un dommage, et l’héritage.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Les personnes et leur capacité",
      minutes: 16,
      objectives: ["Savoir qui peut agir seul en droit", "Connaître les mesures de protection des personnes vulnérables"],
      steps: [
        {
          type: "lesson",
          title: "Les personnes",
          slides: [
            {
              title: "Le droit civil, c’est quoi ?",
              body:
                "<p>C’est le droit des <b>relations entre particuliers</b> : la naissance, le nom, le couple, les enfants, les biens, les contrats, les dommages, l’héritage. Il est rassemblé pour l’essentiel dans le <b>Code civil</b>, créé en 1804 et modifié depuis.</p><p>Le droit civil est le « droit commun » : il s’applique chaque fois qu’aucune règle spéciale (droit commercial, droit du travail, droit de la consommation…) ne prévoit autre chose.</p>",
            },
            {
              title: "La personnalité juridique",
              body:
                "<ul><li>Tout être humain a la <b>personnalité juridique</b> : il peut avoir des droits et des obligations.</li><li>Elle commence à la <b>naissance</b> (de l’enfant né vivant et viable) et prend fin au <b>décès</b>.</li><li>Elle se traduit par un <b>état civil</b> : nom, prénoms, date et lieu de naissance, filiation, situation de famille.</li></ul><p>Depuis le 1er juillet 2022, toute personne majeure peut, <b>une fois dans sa vie</b>, choisir de porter le nom de son autre parent (ou les deux noms) par simple déclaration en mairie.</p>",
            },
            {
              title: "La capacité : qui peut agir seul ?",
              body:
                "<div class='tiers'><div><b>Majeur (18 ans)</b><span>capable d’exercer seul tous ses droits</span></div><div><b>Mineur</b><span>représenté par ses parents, sauf actes de la vie courante</span></div><div><b>Mineur émancipé</b><span>dès 16 ans, sur décision du juge des tutelles</span></div></div><p>Un mineur peut faire seul les <b>actes de la vie courante</b> adaptés à son âge (acheter un livre, un repas). Pour le reste, ce sont ses parents qui agissent pour lui.</p>",
              article: { ref: "Code civil, art. 414", text: "La majorité est fixée à dix-huit ans accomplis ; à cet âge, chacun est capable d’exercer les droits dont il a la jouissance." },
            },
            {
              title: "Protéger un adulte vulnérable",
              body:
                "<p>Quand un adulte ne peut plus pourvoir seul à ses intérêts (maladie, âge, accident), plusieurs mesures existent, de la plus légère à la plus lourde :</p><table class='t'><tr><th>Mesure</th><th>Effet</th></tr><tr><td><b>Mandat de protection future</b></td><td>On désigne soi-même à l’avance la personne qui s’occupera de nous</td></tr><tr><td><b>Habilitation familiale</b></td><td>Un proche est autorisé par le juge à agir pour la personne</td></tr><tr><td><b>Sauvegarde de justice</b></td><td>Protection temporaire (1 an renouvelable une fois), la personne garde ses droits</td></tr><tr><td><b>Curatelle</b></td><td>La personne est <b>assistée</b> pour les actes importants</td></tr><tr><td><b>Tutelle</b></td><td>La personne est <b>représentée</b> pour la plupart des actes</td></tr></table><p>C’est le <b>juge des contentieux de la protection</b> qui décide, en choisissant toujours la mesure la moins contraignante possible.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Personnalité juridique", back: "Aptitude à avoir des droits et des obligations : de la naissance au décès." },
            { front: "Majorité", back: "18 ans : capacité d’exercer seul tous ses droits (art. 414 C. civ.)." },
            { front: "Émancipation", back: "Dès 16 ans, par décision du juge : le mineur est traité comme un majeur pour la plupart des actes." },
            { front: "Curatelle", back: "Le majeur protégé est assisté (et non remplacé) pour les actes importants." },
            { front: "Tutelle", back: "Le majeur protégé est représenté pour la plupart des actes de la vie civile." },
            { front: "Mandat de protection future", back: "On choisit à l’avance qui nous représentera si on ne peut plus gérer nos affaires." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un ado de 15 ans achète seul un jeu vidéo à 20 €. L’achat est-il valable ?", options: ["Non, il est mineur", "Oui, c’est un acte de la vie courante adapté à son âge", "Seulement avec une autorisation écrite"], answer: 1, explain: "Les actes de la vie courante échappent à l’incapacité du mineur." },
            { q: "Un mineur de 17 ans peut-il créer une entreprise ?", options: ["Jamais", "Oui, s’il est émancipé, ou avec l’autorisation de ses parents dans certaines conditions", "Oui, librement"], answer: 1, explain: "Le mineur émancipé peut être commerçant ; sinon l’accord des représentants légaux est nécessaire." },
            { q: "Ta grand-mère a besoin d’aide pour les gros actes (vente d’un bien) mais gère seule son quotidien. Mesure adaptée ?", options: ["La tutelle", "La curatelle ou une habilitation familiale", "Aucune mesure possible"], answer: 1, explain: "Le juge choisit la mesure la moins lourde : ici l’assistance suffit." },
            { q: "Peut-on organiser soi-même sa protection future, tant qu’on est en bonne santé ?", options: ["Non, seul le juge décide", "Oui, avec un mandat de protection future"], answer: 1, explain: "On désigne à l’avance son mandataire, sous seing privé ou devant notaire." },
          ],
        },
        {
          type: "case",
          title: "Le père qui perd la mémoire",
          story:
            "Le père de Samia, 78 ans, commence à oublier de payer ses factures et a signé deux contrats de démarchage inutiles. Il n’a jamais fait de mandat de protection future. Ses enfants s’entendent bien et veulent l’aider sans le priver de toute autonomie.",
          question: "Quelle démarche est la plus adaptée ?",
          options: [
            "Que Samia signe désormais à sa place, sans formalité",
            "Saisir le juge des contentieux de la protection pour une habilitation familiale ou une curatelle, avec un certificat médical",
            "Demander directement une tutelle complète pour être tranquilles",
          ],
          answer: 1,
          explain:
            "Signer à sa place sans pouvoir serait illégal. Le juge choisit la mesure la moins contraignante : l’habilitation familiale convient bien quand la famille est unie, la curatelle permet une assistance sur les gros actes. La tutelle n’est retenue que si rien d’autre ne suffit.",
        },
        {
          type: "fiche",
          title: "Les personnes",
          points: [
            "Droit civil = droit des relations entre particuliers, rassemblé dans le <b>Code civil</b>.",
            "<b>Personnalité juridique</b> de la naissance au décès ; changement de nom simplifié une fois dans sa vie depuis 2022.",
            "<b>Majorité</b> à 18 ans ; mineur : actes de la vie courante seulement ; <b>émancipation</b> dès 16 ans.",
            "Protection des majeurs : mandat de protection future, habilitation familiale, sauvegarde, <b>curatelle</b> (assistance), <b>tutelle</b> (représentation).",
            "Le juge choisit toujours la mesure <b>la moins contraignante</b>.",
          ],
          retenir: "Protéger un proche, c’est l’aider sans lui retirer plus de liberté que nécessaire.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Mariage, PACS ou union libre",
      minutes: 18,
      objectives: ["Comparer les trois formes de couple", "Savoir ce que chaque statut change pour le logement, les dettes et l’héritage"],
      steps: [
        {
          type: "lesson",
          title: "Les formes de couple",
          slides: [
            {
              title: "Trois statuts très différents",
              body:
                "<ul><li><b>Le mariage</b> : célébré en mairie, il crée le plus d’obligations et de protections.</li><li><b>Le PACS</b> (pacte civil de solidarité) : un contrat entre deux personnes, enregistré en mairie ou chez un notaire.</li><li><b>Le concubinage</b> (union libre) : une simple situation de fait, une vie commune stable. Presque aucune règle spécifique.</li></ul><p>Beaucoup de couples choisissent sans connaître les conséquences, surtout pour le logement, les dettes et l’héritage.</p>",
            },
            {
              title: "Les obligations entre partenaires",
              body:
                "<table class='t'><tr><th></th><th>Mariage</th><th>PACS</th><th>Concubinage</th></tr><tr><td>Devoirs</td><td>Respect, fidélité, secours, assistance, communauté de vie</td><td>Vie commune, aide matérielle et assistance</td><td>Aucun</td></tr><tr><td>Dettes du ménage (loyer, courses, énergie)</td><td>Solidaires</td><td>Solidaires</td><td>Chacun ses dettes</td></tr><tr><td>Impôt sur le revenu</td><td>Déclaration commune</td><td>Déclaration commune</td><td>Déclarations séparées</td></tr><tr><td>Biens</td><td>Selon le régime matrimonial (séance 3)</td><td>Séparation de biens par défaut</td><td>Chacun ses biens</td></tr></table><p>La solidarité ne joue pas pour les dépenses <b>manifestement excessives</b>, ni (sauf exceptions) pour les achats à crédit et emprunts non consentis par les deux.</p>",
            },
            {
              title: "Le logement",
              body:
                "<ul><li><b>Mariés</b> : le logement familial est protégé. Même s’il appartient à un seul époux, celui-ci ne peut pas le vendre ou résilier le bail <b>sans l’accord de l’autre</b>. Le bail est réputé appartenir aux deux.</li><li><b>Pacsés</b> : le bail peut être cotitulaire sur demande ; en cas de décès, le partenaire peut reprendre le bail.</li><li><b>Concubins</b> : seul celui qui a signé est titulaire. En cas de décès, le concubin notoire depuis au moins un an peut reprendre le bail, mais il n’a aucun droit sur un logement qui appartenait à l’autre.</li></ul>",
            },
            {
              title: "En cas de décès",
              body:
                "<table class='t'><tr><th></th><th>Hérite automatiquement ?</th><th>Droits de succession</th></tr><tr><td><b>Époux</b></td><td>Oui, c’est un héritier</td><td>Exonéré</td></tr><tr><td><b>Partenaire de PACS</b></td><td>Non, sauf testament</td><td>Exonéré s’il hérite par testament</td></tr><tr><td><b>Concubin</b></td><td>Non, sauf testament</td><td>60 % (comme un étranger à la famille)</td></tr></table><p>Conséquence : un couple pacsé ou en union libre qui ne fait pas de testament peut laisser le survivant <b>sans rien</b>, même après 20 ans de vie commune. Seule l’assurance-vie permet souvent de compenser.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel statut ?",
          instruction: "Pour chaque règle, indique quel statut de couple elle concerne.",
          categories: ["Mariage seulement", "Mariage et PACS", "Aucun (concubinage)"],
          items: [
            { text: "Le survivant hérite automatiquement, sans testament", cat: 0, why: "Seul l’époux est héritier légal." },
            { text: "Imposition commune sur le revenu", cat: 1, why: "Mariés et pacsés déclarent ensemble." },
            { text: "Solidarité pour les dettes du ménage (loyer, électricité)", cat: 1, why: "Prévue pour les époux et les partenaires de PACS." },
            { text: "Devoir de fidélité", cat: 0, why: "Il figure parmi les devoirs du mariage, pas dans le PACS." },
            { text: "Chacun reste seul responsable de ses dettes, même pour le loyer s’il est seul signataire", cat: 2, why: "Le concubinage n’organise aucune solidarité." },
            { text: "Impossible de vendre le logement familial sans l’accord de l’autre, même s’il est à un seul nom", cat: 0, why: "Protection propre au logement de la famille des époux." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "PACS", back: "Contrat de couple enregistré en mairie ou chez un notaire : aide matérielle, vie commune, imposition commune." },
            { front: "Concubinage", back: "Vie commune stable et continue, sans statut : pas de solidarité, pas d’héritage automatique." },
            { front: "Solidarité ménagère", back: "Mariés et pacsés répondent ensemble des dettes de la vie courante, sauf dépenses manifestement excessives." },
            { front: "Logement familial", back: "Un époux ne peut pas le vendre ni résilier le bail sans l’accord de l’autre." },
            { front: "Partenaire de PACS et héritage", back: "N’hérite que par testament, mais alors sans droits de succession." },
            { front: "Concubin et héritage", back: "N’hérite que par testament, et paie 60 % de droits de succession." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ton partenaire de PACS achète seul une console à crédit à 2 000 €. Es-tu tenu de payer ?", options: ["Oui, toujours", "En principe non : la solidarité ne joue pas pour les achats à crédit non consentis par les deux", "Oui, si vous vivez ensemble"], answer: 1, explain: "La solidarité concerne les besoins de la vie courante ; les crédits non consentis par les deux en sont en principe exclus (sauf petits montants nécessaires)." },
            { q: "Un concubin meurt sans testament après 15 ans de vie commune. Que reçoit sa compagne dans la succession ?", options: ["La moitié", "Un quart", "Rien"], answer: 2, explain: "Le concubin n’est pas héritier. Seuls un testament ou une assurance-vie le protègent." },
            { q: "Des partenaires pacsés achètent un appartement sans rien préciser. Le régime par défaut est…", options: ["la communauté", "la séparation de biens : chacun est propriétaire de ce qu’il a financé", "l’indivision obligatoire"], answer: 1, explain: "Depuis 2007, la séparation de biens est le régime par défaut du PACS ; s’ils achètent ensemble, ils sont en indivision à proportion de leur apport." },
            { q: "Ton conjoint marié veut vendre la maison de famille qui lui appartient en propre, sans ton accord. Il peut ?", options: ["Oui, elle est à lui", "Non, l’accord des deux époux est nécessaire pour le logement familial"], answer: 1, explain: "Le logement de la famille est protégé (art. 215 C. civ.)." },
          ],
        },
        {
          type: "case",
          title: "Vingt ans d’union libre",
          story:
            "Malika et Julien vivent ensemble depuis 20 ans, sans être mariés ni pacsés. Ils ont un fils. La maison où ils vivent est au nom de Julien seul. Julien décède brutalement, sans testament.",
          question: "Quelle est la situation de Malika ?",
          options: [
            "Elle hérite de la moitié de la maison après 20 ans de vie commune",
            "Elle n’hérite de rien : la maison revient à leur fils, et elle n’a aucun droit dessus",
            "Elle devient automatiquement usufruitière de la maison",
          ],
          answer: 1,
          explain:
            "Sans mariage ni testament, le concubin n’a aucun droit dans la succession, quelle que soit la durée de la relation. Leur fils hérite de tout. Un PACS avec testament, un mariage ou une assurance-vie auraient protégé Malika.",
        },
        {
          type: "fiche",
          title: "Mariage, PACS, union libre",
          points: [
            "<b>Mariage</b> : le plus protecteur (devoirs, logement familial, héritier, exonération de droits).",
            "<b>PACS</b> : solidarité ménagère, impôt commun, séparation de biens par défaut, héritage <b>seulement par testament</b> (sans droits).",
            "<b>Concubinage</b> : aucune solidarité, aucun héritage ; testament taxé à <b>60 %</b>.",
            "Solidarité ménagère : pas pour les dépenses excessives ni les crédits non consentis.",
            "Pacsés et concubins : faire un <b>testament</b> et penser à l’<b>assurance-vie</b>.",
          ],
          retenir: "L’amour ne fait pas un héritier : le statut et le testament, si.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "L’argent du couple marié",
      minutes: 17,
      objectives: ["Comprendre les régimes matrimoniaux", "Savoir protéger son patrimoine quand on est entrepreneur"],
      steps: [
        {
          type: "lesson",
          title: "Les régimes matrimoniaux",
          slides: [
            {
              title: "Le régime matrimonial",
              body:
                "<p>C’est l’ensemble des règles qui fixent <b>à qui appartiennent les biens</b> du couple marié, <b>qui les gère</b>, et <b>qui paie les dettes</b>.</p><ul><li>Sans contrat de mariage, c’est le régime légal : la <b>communauté réduite aux acquêts</b>.</li><li>Avec un <b>contrat de mariage</b> signé chez un notaire avant le mariage, on choisit un autre régime.</li><li>On peut <b>changer</b> de régime en cours de mariage, devant notaire.</li></ul>",
            },
            {
              title: "La communauté réduite aux acquêts",
              body:
                "<div class='tiers'><div><b>Biens propres de A</b><span>avant le mariage, héritages, donations</span></div><div><b>Biens communs</b><span>tout ce qui est acquis pendant le mariage, y compris les salaires</span></div><div><b>Biens propres de B</b><span>avant le mariage, héritages, donations</span></div></div><p>Au divorce ou au décès, les biens communs sont partagés <b>par moitié</b>, quel que soit celui qui a le plus gagné.</p><p>Les <b>revenus</b> de chacun (salaires, bénéfices) tombent dans la communauté.</p>",
            },
            {
              title: "Les autres régimes",
              body:
                "<table class='t'><tr><th>Régime</th><th>Principe</th><th>Pour qui</th></tr><tr><td><b>Séparation de biens</b></td><td>Chacun reste propriétaire de ce qu’il achète, chacun paie ses dettes</td><td>Entrepreneurs, professions à risque, remariages</td></tr><tr><td><b>Participation aux acquêts</b></td><td>Séparation pendant le mariage ; à la fin, chacun partage l’enrichissement de l’autre</td><td>Couples qui veulent l’indépendance et l’équité</td></tr><tr><td><b>Communauté universelle</b></td><td>Tout est commun ; souvent avec attribution intégrale au survivant</td><td>Couples âgés sans enfant d’une autre union</td></tr></table>",
            },
            {
              title: "Les dettes et l’entrepreneur marié",
              body:
                "<ul><li>En communauté, les dettes de chaque époux peuvent être payées sur les <b>biens communs</b>.</li><li>Exception protectrice : un <b>emprunt</b> ou une <b>caution</b> souscrit par un seul époux n’engage que ses biens propres et ses revenus, sauf si l’autre y a <b>consenti expressément</b>.</li><li>Pour un entrepreneur, la <b>séparation de biens</b> met le conjoint à l’abri des dettes professionnelles.</li></ul>",
              article: { ref: "Code civil, art. 1415", text: "Chacun des époux ne peut engager que ses biens propres et ses revenus, par un cautionnement ou un emprunt, à moins que ceux-ci n’aient été contractés avec le consentement exprès de l’autre conjoint qui, dans ce cas, n’engage pas ses biens propres." },
              example: "Tu te portes caution du prêt bancaire de ta SAS. Ton épouse signe aussi « bon pour consentement » : en cas de défaillance, la banque pourra saisir les biens communs, y compris la maison achetée pendant le mariage.",
            },
          ],
        },
        {
          type: "sort",
          title: "Propre ou commun ?",
          instruction: "Couple marié sans contrat (communauté réduite aux acquêts). Classe chaque bien.",
          categories: ["Bien propre", "Bien commun"],
          items: [
            { text: "L’appartement acheté par l’épouse 3 ans avant le mariage", cat: 0, why: "Acquis avant le mariage." },
            { text: "La voiture achetée pendant le mariage avec le salaire du mari", cat: 1, why: "Acquise pendant le mariage avec des revenus, qui sont communs." },
            { text: "La maison reçue par le mari en héritage de ses parents", cat: 0, why: "Les héritages restent propres, même reçus pendant le mariage." },
            { text: "Les économies accumulées sur le livret de l’épouse depuis le mariage", cat: 1, why: "Les revenus épargnés pendant le mariage sont communs." },
            { text: "Les bijoux offerts à l’épouse par sa grand-mère", cat: 0, why: "Les donations reçues sont propres." },
            { text: "Le stock de marchandises acheté par le mari pour son entreprise individuelle avec ses bénéfices", cat: 1, why: "Acquis pendant le mariage avec des revenus : commun, même s’il sert à une activité pro." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Régime légal", back: "Communauté réduite aux acquêts : ce qui est acquis pendant le mariage est commun." },
            { front: "Biens propres", back: "Biens possédés avant le mariage, et biens reçus par héritage ou donation." },
            { front: "Contrat de mariage", back: "Signé chez le notaire, il permet de choisir un autre régime matrimonial." },
            { front: "Séparation de biens", back: "Chacun garde ses biens et ses dettes : le régime protecteur pour l’entrepreneur." },
            { front: "Participation aux acquêts", back: "Séparés pendant le mariage, partage de l’enrichissement à la fin." },
            { front: "Emprunt ou caution d’un seul époux", back: "N’engage que ses biens propres et revenus, sauf consentement exprès du conjoint (art. 1415)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Marié sans contrat, tu crées ta société avec 20 000 € de tes économies faites pendant le mariage. Les parts sociales sont…", options: ["des biens propres", "des biens communs (même si toi seul as la qualité d’associé)"], answer: 1, explain: "Financées avec des fonds communs, elles entrent en communauté ; ton conjoint doit d’ailleurs être informé de l’apport." },
            { q: "Peut-on changer de régime matrimonial après le mariage ?", options: ["Non, jamais", "Oui, devant notaire", "Seulement après 10 ans"], answer: 1, explain: "Le changement se fait devant notaire, avec parfois une homologation du juge (enfants mineurs, opposition)." },
            { q: "Quel régime protège le mieux le conjoint d’un entrepreneur contre les dettes professionnelles ?", options: ["La communauté universelle", "La séparation de biens", "La communauté réduite aux acquêts"], answer: 1, explain: "Chacun répond seul de ses dettes." },
            { q: "Au divorce, en communauté légale, comment sont partagés les biens communs ?", options: ["Selon les revenus de chacun", "Par moitié", "Au profit de celui qui garde les enfants"], answer: 1, explain: "Partage par moitié, quels que soient les apports de chacun pendant le mariage." },
          ],
        },
        {
          type: "case",
          title: "Le mariage de l’entrepreneur",
          story:
            "Nassim, 27 ans, dirige deux sociétés d’import et se porte régulièrement caution des prêts bancaires. Il va épouser Inès, infirmière, qui va hériter de l’appartement de sa grand-mère. Ils comptent acheter ensemble leur résidence principale. Ils pensent ne pas faire de contrat de mariage, « c’est plus romantique ».",
          question: "Que leur conseiller ?",
          options: [
            "Rien : sans contrat, Inès est automatiquement protégée des dettes de Nassim",
            "Envisager un contrat de séparation de biens (ou de participation aux acquêts) chez le notaire, et acheter la résidence en indivision à proportion des apports",
            "Choisir la communauté universelle pour tout mettre en commun",
          ],
          answer: 1,
          explain:
            "En communauté, les dettes de Nassim pourraient atteindre les biens communs, dont la future résidence. L’héritage d’Inès resterait propre de toute façon, mais leurs revenus et achats communs seraient exposés. La séparation de biens protège chacun ; la participation aux acquêts ajoute un partage équitable à la fin.",
        },
        {
          type: "fiche",
          title: "L’argent du couple marié",
          points: [
            "Sans contrat : <b>communauté réduite aux acquêts</b>.",
            "<b>Propres</b> : biens d’avant le mariage, héritages, donations. <b>Communs</b> : acquis pendant le mariage, revenus compris.",
            "Autres régimes : <b>séparation de biens</b>, <b>participation aux acquêts</b>, <b>communauté universelle</b>.",
            "Emprunt ou caution d’un seul époux : n’engage que ses propres et revenus, sauf consentement exprès de l’autre (art. 1415).",
            "Entrepreneur : la séparation de biens protège le conjoint.",
          ],
          retenir: "Le contrat de mariage, c’est l’assurance du couple d’entrepreneur.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Les enfants et la famille",
      minutes: 16,
      objectives: ["Comprendre la filiation et l’autorité parentale", "Connaître les obligations alimentaires"],
      steps: [
        {
          type: "lesson",
          title: "La famille",
          slides: [
            {
              title: "La filiation",
              body:
                "<p>La filiation est le <b>lien juridique</b> entre un enfant et ses parents. Elle s’établit :</p><ul><li>pour la mère, par l’<b>acte de naissance</b> qui la désigne ;</li><li>pour le père marié, par la <b>présomption de paternité</b> : le mari de la mère est présumé être le père ;</li><li>pour le père non marié, par une <b>reconnaissance</b> en mairie (avant ou après la naissance) ;</li><li>à défaut, par une <b>action en justice</b> (avec expertise génétique, ordonnée seulement par le juge).</li></ul><p>Tous les enfants ont les <b>mêmes droits</b>, que leurs parents soient mariés ou non.</p>",
            },
            {
              title: "L’autorité parentale",
              body:
                "<p>C’est l’ensemble des droits et devoirs des parents pour <b>protéger l’enfant</b> : sécurité, santé, moralité, éducation, développement. Elle s’exerce jusqu’à ses 18 ans.</p><ul><li>En principe, elle est exercée <b>en commun</b> par les deux parents, même s’ils sont séparés.</li><li>Les décisions importantes (changement d’école, religion, déménagement lointain, opération non urgente) se prennent à <b>deux</b>.</li><li>Les parents associent l’enfant aux décisions qui le concernent, selon son âge et sa maturité.</li></ul>",
            },
            {
              title: "La pension alimentaire",
              body:
                "<ul><li>Chaque parent contribue à l’<b>entretien et à l’éducation</b> de l’enfant, selon ses ressources et les besoins de l’enfant.</li><li>Après une séparation, cela prend souvent la forme d’une <b>pension alimentaire</b> versée par le parent chez qui l’enfant ne vit pas principalement.</li><li>Elle ne s’arrête pas automatiquement à 18 ans : elle continue tant que l’enfant n’est pas autonome (études, recherche d’emploi).</li><li>Depuis 2023, le versement passe en principe automatiquement par la <b>CAF</b> (intermédiation financière de l’ARIPA), qui la verse au parent créancier et agit en cas d’impayé.</li></ul>",
            },
            {
              title: "L’obligation alimentaire entre générations",
              body:
                "<p>Les enfants doivent des <b>aliments</b> (une aide pour les besoins essentiels) à leurs parents et grands-parents dans le besoin, et réciproquement.</p><ul><li>Elle s’étend aux gendres et belles-filles envers leurs beaux-parents.</li><li>Le montant dépend des besoins de celui qui demande et des ressources de celui qui doit.</li><li>Exemple fréquent : la participation aux frais de maison de retraite d’un parent aux faibles revenus.</li></ul>",
              article: { ref: "Code civil, art. 205", text: "Les enfants doivent des aliments à leurs père et mère ou autres ascendants qui sont dans le besoin." },
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Présomption de paternité", back: "Le mari de la mère est présumé être le père de l’enfant." },
            { front: "Reconnaissance", back: "Déclaration en mairie par laquelle un parent non marié établit sa filiation." },
            { front: "Autorité parentale", back: "Droits et devoirs pour protéger l’enfant jusqu’à 18 ans, en principe exercés en commun." },
            { front: "Pension alimentaire", back: "Contribution à l’entretien de l’enfant, selon les ressources ; continue au-delà de 18 ans si l’enfant n’est pas autonome." },
            { front: "ARIPA", back: "Service de la CAF qui verse la pension alimentaire et la recouvre en cas d’impayé." },
            { front: "Obligation alimentaire", back: "Devoir d’aider ses parents et ascendants dans le besoin, et réciproquement (art. 205)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un couple non marié a un enfant. Le père doit-il faire une démarche pour être reconnu père ?", options: ["Non, c’est automatique", "Oui, une reconnaissance en mairie", "Oui, un test ADN"], answer: 1, explain: "La présomption de paternité ne joue que dans le mariage." },
            { q: "Après une séparation, la mère veut inscrire l’enfant dans une école à 600 km. Peut-elle décider seule ?", options: ["Oui, l’enfant vit chez elle", "Non, c’est une décision importante qui se prend à deux, ou par le juge en cas de désaccord"], answer: 1, explain: "L’autorité parentale est conjointe, même après la séparation." },
            { q: "Ton fils de 20 ans est étudiant sans revenus. Dois-tu continuer à payer la pension ?", options: ["Non, il est majeur", "Oui, tant qu’il n’est pas autonome financièrement"], answer: 1, explain: "La contribution suit les besoins de l’enfant, pas son âge." },
            { q: "Peut-on te demander de participer aux frais d’EHPAD de ta mère sans ressources ?", options: ["Non, jamais", "Oui, au titre de l’obligation alimentaire, selon tes moyens"], answer: 1, explain: "C’est l’obligation alimentaire envers les ascendants." },
          ],
        },
        {
          type: "case",
          title: "La pension qui n’arrive plus",
          story:
            "Depuis leur séparation, le jugement oblige Karim à verser 250 € par mois pour leur fille à Laura. Depuis 3 mois, il ne paie plus, « parce qu’il ne voit pas assez sa fille ».",
          question: "Que peut faire Laura ?",
          options: [
            "Rien : un parent peut suspendre la pension s’il voit moins l’enfant",
            "Saisir l’ARIPA (CAF), qui peut récupérer les sommes, et éventuellement porter plainte pour abandon de famille",
            "Empêcher Karim de voir sa fille jusqu’au paiement",
          ],
          answer: 1,
          explain:
            "La pension et le droit de visite sont indépendants : on ne peut pas suspendre l’un à cause de l’autre. L’ARIPA recouvre les impayés (directement auprès de l’employeur ou de la banque). Ne pas payer plus de 2 mois une pension fixée par le juge est aussi le délit d’abandon de famille.",
        },
        {
          type: "fiche",
          title: "Les enfants et la famille",
          points: [
            "<b>Filiation</b> : acte de naissance (mère), présomption de paternité (mari), <b>reconnaissance</b> (père non marié), justice.",
            "Tous les enfants ont les mêmes droits.",
            "<b>Autorité parentale</b> conjointe, même après séparation ; décisions importantes à deux.",
            "<b>Pension alimentaire</b> selon ressources et besoins, au-delà de 18 ans si besoin ; versée via la CAF (ARIPA).",
            "<b>Obligation alimentaire</b> envers les parents et grands-parents dans le besoin (art. 205).",
          ],
          retenir: "La pension est le droit de l’enfant, pas une arme entre parents.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Se séparer : divorce et fin du PACS",
      minutes: 18,
      objectives: ["Connaître les quatre cas de divorce", "Comprendre la prestation compensatoire et le partage"],
      steps: [
        {
          type: "lesson",
          title: "La séparation",
          slides: [
            {
              title: "Les quatre cas de divorce",
              body:
                "<table class='t'><tr><th>Divorce</th><th>Quand ?</th></tr><tr><td><b>Par consentement mutuel</b></td><td>Les époux sont d’accord sur le divorce <b>et</b> sur toutes ses conséquences</td></tr><tr><td><b>Accepté</b></td><td>D’accord sur le principe du divorce, mais pas sur les conséquences : le juge tranche</td></tr><tr><td><b>Pour altération définitive du lien conjugal</b></td><td>Les époux vivent séparés depuis <b>au moins 1 an</b> au moment de la demande</td></tr><tr><td><b>Pour faute</b></td><td>Violation grave ou renouvelée des devoirs du mariage (violences, infidélité…)</td></tr></table>",
            },
            {
              title: "Le divorce par consentement mutuel sans juge",
              body:
                "<ul><li>Depuis 2017, il se fait <b>sans juge</b> : une convention signée par les deux époux et leurs <b>deux avocats</b> (un chacun, obligatoirement).</li><li>Chaque époux dispose d’un <b>délai de réflexion de 15 jours</b> après avoir reçu le projet avant de signer.</li><li>La convention est ensuite déposée chez un <b>notaire</b>, ce qui la rend exécutoire.</li><li>Le juge reste nécessaire si un <b>enfant mineur demande à être entendu</b>, ou si un époux est sous mesure de protection.</li></ul><p>C’est le divorce le plus rapide : souvent quelques semaines.</p>",
            },
            {
              title: "La prestation compensatoire",
              body:
                "<p>Le divorce peut créer une <b>disparité</b> de niveau de vie entre les ex-époux : par exemple quand l’un a réduit sa carrière pour s’occuper des enfants.</p><ul><li>La <b>prestation compensatoire</b> sert à compenser cette disparité.</li><li>Elle est en principe versée sous forme de <b>capital</b> (somme d’argent, bien), éventuellement échelonné sur 8 ans maximum.</li><li>Le juge tient compte de la durée du mariage, de l’âge, de la santé, des patrimoines, des choix professionnels faits pour la famille, des droits à la retraite.</li></ul><p>À ne pas confondre avec la <b>pension alimentaire</b>, qui est pour les enfants.</p>",
            },
            {
              title: "Les autres conséquences",
              body:
                "<ul><li><b>Partage des biens</b> selon le régime matrimonial (séance 3), généralement devant notaire s’il y a un bien immobilier.</li><li><b>Nom</b> : chacun perd l’usage du nom de l’autre, sauf accord ou autorisation du juge.</li><li><b>Enfants</b> : autorité parentale conjointe, résidence (chez l’un ou en alternance), pension.</li><li><b>Logement</b> : attribution ou vente, rachat de la part de l’autre (la « soulte »).</li></ul>",
            },
            {
              title: "Mettre fin au PACS ou à l’union libre",
              body:
                "<ul><li><b>PACS</b> : déclaration conjointe en mairie ou chez le notaire, ou décision d’un seul partenaire signifiée à l’autre par commissaire de justice. Le mariage de l’un des deux ou un décès y met fin aussi. Pas de prestation compensatoire.</li><li><b>Concubinage</b> : on se sépare librement, sans formalité. Les biens achetés ensemble se partagent selon les parts de chacun (indivision).</li><li>Dans les deux cas, le juge aux affaires familiales tranche pour les <b>enfants</b> si les parents ne s’entendent pas.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel divorce ?",
          instruction: "Choisis le type de divorce adapté à chaque couple.",
          categories: ["Consentement mutuel", "Accepté", "Altération définitive", "Faute"],
          items: [
            { text: "Ils sont d’accord sur tout : la maison, les enfants, la pension", cat: 0, why: "Accord complet : divorce sans juge, par avocats et notaire." },
            { text: "Ils veulent divorcer tous les deux mais se disputent sur la garde des enfants", cat: 1, why: "D’accord sur le principe, pas sur les conséquences." },
            { text: "Il est parti il y a 14 mois et elle refuse de divorcer", cat: 2, why: "Séparation d’au moins un an : le divorce peut être prononcé même sans accord." },
            { text: "Elle subit des violences de la part de son mari", cat: 3, why: "Violation grave des devoirs du mariage." },
            { text: "Ils sont d’accord sur le divorce mais leur fils de 13 ans demande à être entendu par le juge", cat: 1, why: "La demande d’audition de l’enfant ferme la voie du divorce sans juge : il faut une procédure judiciaire." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Divorce par consentement mutuel", back: "Sans juge depuis 2017 : deux avocats, 15 jours de réflexion, dépôt chez le notaire." },
            { front: "Divorce accepté", back: "Accord sur le principe, désaccord sur les conséquences tranché par le juge." },
            { front: "Altération définitive du lien conjugal", back: "Séparation d’au moins 1 an au moment de la demande." },
            { front: "Prestation compensatoire", back: "Compense la disparité de niveau de vie créée par le divorce, en principe en capital." },
            { front: "Soulte", back: "Somme versée par celui qui garde un bien commun pour racheter la part de l’autre." },
            { front: "Fin du PACS", back: "Déclaration conjointe, ou décision unilatérale signifiée par commissaire de justice." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Dans un divorce par consentement mutuel, combien d’avocats faut-il ?", options: ["Un seul pour les deux", "Deux, un par époux", "Aucun"], answer: 1, explain: "Chaque époux a son propre avocat : c’est la garantie de son consentement." },
            { q: "Ta femme est partie il y a 6 mois et refuse de divorcer. Peux-tu demander le divorce pour altération définitive ?", options: ["Oui, tout de suite", "Pas encore : il faut au moins 1 an de séparation au jour de la demande", "Jamais sans son accord"], answer: 1, explain: "Le délai d’un an se calcule à la date de la demande en divorce." },
            { q: "La prestation compensatoire sert à…", options: ["payer l’entretien des enfants", "compenser la disparité de niveau de vie entre ex-époux", "punir l’époux fautif"], answer: 1, explain: "Elle n’a rien à voir avec la faute ni avec les enfants." },
            { q: "Ton partenaire de PACS veut y mettre fin, toi non. Peut-il le faire seul ?", options: ["Non, il faut l’accord des deux", "Oui, en te le faisant signifier par commissaire de justice"], answer: 1, explain: "La rupture unilatérale du PACS est possible." },
          ],
        },
        {
          type: "case",
          title: "La carrière mise de côté",
          story:
            "Après 18 ans de mariage, Hélène et Marc divorcent. Hélène a arrêté de travailler pendant 10 ans pour élever leurs trois enfants et suivre Marc dans ses mutations. Marc est aujourd’hui cadre dirigeant ; Hélène retrouve un emploi à temps partiel. Ils sont d’accord pour divorcer mais pas sur l’argent.",
          question: "Quelle demande Hélène peut-elle faire ?",
          options: [
            "Rien : elle a choisi d’arrêter de travailler",
            "Une prestation compensatoire, en tenant compte de ses choix professionnels pour la famille et de ses droits à la retraite réduits",
            "Une pension alimentaire à vie pour elle-même",
          ],
          answer: 1,
          explain:
            "La disparité de niveau de vie est forte et résulte en partie de choix faits pour la famille : c’est exactement le rôle de la prestation compensatoire, versée en principe en capital. Les pensions pour les enfants s’y ajoutent. Divorce accepté probable, puisqu’ils sont d’accord sur le principe.",
        },
        {
          type: "fiche",
          title: "Se séparer",
          points: [
            "4 divorces : <b>consentement mutuel</b>, <b>accepté</b>, <b>altération définitive</b> (1 an de séparation), <b>faute</b>.",
            "Consentement mutuel <b>sans juge</b> : deux avocats, 15 jours de réflexion, notaire ; juge si l’enfant demande à être entendu.",
            "<b>Prestation compensatoire</b> : compense la disparité de niveau de vie, en capital.",
            "Partage selon le régime matrimonial ; <b>soulte</b> pour garder un bien.",
            "<b>PACS</b> : fin conjointe ou unilatérale (commissaire de justice) ; <b>concubinage</b> : séparation libre.",
          ],
          retenir: "On peut divorcer vite quand on s’entend sur tout : préparer l’accord fait gagner des mois.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "La propriété et le voisinage",
      minutes: 18,
      objectives: ["Comprendre la propriété, l’usufruit et l’indivision", "Connaître les règles de voisinage"],
      steps: [
        {
          type: "lesson",
          title: "Les biens",
          slides: [
            {
              title: "Le droit de propriété",
              body:
                "<p>La propriété est le droit le plus complet sur une chose. Il réunit trois prérogatives :</p><div class='tiers'><div><b>User</b><span>se servir de la chose (habiter la maison)</span></div><div><b>Jouir</b><span>en percevoir les fruits (louer et toucher les loyers)</span></div><div><b>Disposer</b><span>la vendre, la donner, la transformer</span></div></div>",
              article: { ref: "Code civil, art. 544", text: "La propriété est le droit de jouir et disposer des choses de la manière la plus absolue, pourvu qu’on n’en fasse pas un usage prohibé par les lois ou par les règlements." },
            },
            {
              title: "Usufruit et nue-propriété",
              body:
                "<p>La propriété peut être <b>démembrée</b> entre deux personnes :</p><ul><li>l’<b>usufruitier</b> peut <b>utiliser</b> le bien et en <b>percevoir les revenus</b> (habiter, louer) ;</li><li>le <b>nu-propriétaire</b> a le droit d’en <b>disposer</b>, et récupère la pleine propriété au décès de l’usufruitier.</li></ul><p>C’est très utilisé pour transmettre : des parents donnent la nue-propriété d’un appartement à leurs enfants, gardent l’usufruit pour y vivre, et la donation coûte moins cher fiscalement.</p>",
            },
            {
              title: "L’indivision et la copropriété",
              body:
                "<ul><li><b>Indivision</b> : plusieurs personnes possèdent ensemble un même bien, chacune pour une quote-part (des héritiers, un couple non marié qui achète). Les décisions importantes demandent une majorité des <b>deux tiers</b>, la vente du bien en principe l’<b>unanimité</b> (le juge peut l’autoriser dans certains cas).</li><li>Règle d’or : <b>« Nul ne peut être contraint à demeurer dans l’indivision »</b> (art. 815) : chacun peut demander le partage.</li><li><b>Copropriété</b> : un immeuble divisé en lots ; chaque copropriétaire possède son appartement et une part des parties communes, gérées par le syndicat des copropriétaires et un syndic.</li></ul>",
            },
            {
              title: "Les troubles anormaux de voisinage",
              body:
                "<p>Depuis la loi du 15 avril 2024, le Code civil le dit clairement : celui qui cause à son voisin un trouble <b>qui dépasse les inconvénients normaux</b> du voisinage (bruit, odeurs, poussière, perte d’ensoleillement…) en est <b>responsable de plein droit</b>, même sans faute.</p><p>Exception : il n’est pas responsable si l’activité <b>existait avant</b> l’arrivée du voisin, qu’elle est <b>conforme</b> aux règles, et qu’elle continue <b>dans les mêmes conditions</b> (sans aggraver le trouble).</p>",
              article: { ref: "Code civil, art. 1253", text: "Le propriétaire, le locataire, l’occupant sans titre, le bénéficiaire d’un titre ayant pour objet principal l’occupation ou l’exploitation d’un fonds, le maître d’ouvrage ou celui qui en exerce les pouvoirs qui est à l’origine d’un trouble excédant les inconvénients normaux de voisinage est responsable de plein droit du dommage qui en résulte." },
            },
            {
              title: "Arbres, haies et passage",
              body:
                "<ul><li><b>Plantations</b> (sauf règles locales) : un arbre ou une haie de plus de <b>2 mètres</b> de haut doit être planté à au moins <b>2 mètres</b> de la limite ; les plus petits, à <b>50 cm</b>.</li><li>Les <b>branches</b> qui dépassent : tu peux exiger que ton voisin les coupe (pas les couper toi-même). Les <b>racines</b> : tu peux les couper toi-même à la limite.</li><li><b>Servitude de passage</b> : un terrain <b>enclavé</b> (sans accès suffisant à la voie publique) a droit à un passage sur le terrain voisin, contre indemnité.</li><li><b>Prescription acquisitive</b> : celui qui possède un bien comme propriétaire, de façon paisible et publique, pendant <b>30 ans</b> (10 ans avec un titre et de bonne foi) en devient propriétaire.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Les trois attributs de la propriété", back: "User, jouir (percevoir les fruits), disposer (art. 544 C. civ.)." },
            { front: "Usufruit", back: "Droit d’utiliser un bien et d’en percevoir les revenus ; s’éteint au décès de l’usufruitier." },
            { front: "Nue-propriété", back: "Droit de disposer du bien ; devient pleine propriété au décès de l’usufruitier." },
            { front: "Indivision", back: "Propriété commune à plusieurs ; nul ne peut être contraint d’y rester (art. 815)." },
            { front: "Trouble anormal de voisinage", back: "Responsabilité de plein droit, sans faute, sauf activité antérieure, conforme et inchangée (art. 1253)." },
            { front: "Distances de plantation", back: "Plus de 2 m de haut : 2 m de la limite ; sinon 50 cm (sauf règles locales)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tes parents te donnent la nue-propriété de leur maison et gardent l’usufruit. Qui y habite ?", options: ["Toi", "Tes parents, usufruitiers", "Personne"], answer: 1, explain: "L’usufruitier a l’usage du bien ; tu deviendras plein propriétaire à leur décès." },
            { q: "Ton frère et toi avez hérité d’un appartement en indivision. Il refuse de vendre. Es-tu bloqué pour toujours ?", options: ["Oui, il faut l’unanimité", "Non, tu peux demander le partage en justice"], answer: 1, explain: "Nul ne peut être contraint à demeurer dans l’indivision." },
            { q: "Les branches du cerisier de ton voisin dépassent sur ton jardin. Que peux-tu faire ?", options: ["Les couper toi-même", "Exiger qu’il les coupe", "Cueillir les cerises et les vendre"], answer: 1, explain: "Pour les branches, il faut demander au voisin (art. 673). Les racines, tu peux les couper toi-même." },
            { q: "Tu achètes une maison à côté d’une boulangerie qui fonctionne depuis 20 ans, conformément aux règles et sans changement. Tu te plains de l’odeur et du bruit du matin. Responsabilité ?", options: ["Oui, le trouble est anormal", "Non, l’activité était antérieure, conforme et inchangée"], answer: 1, explain: "C’est l’exception d’antériorité de l’article 1253." },
          ],
        },
        {
          type: "case",
          title: "La haie qui fait de l’ombre",
          story:
            "Le voisin de Thomas a planté il y a 4 ans une haie de thuyas à 1 mètre de la limite. Elle mesure aujourd’hui 4 mètres et prive le potager de Thomas de soleil. Le voisin refuse de la tailler : « Elle est chez moi. » Il n’existe pas de règle locale particulière.",
          question: "Que peut obtenir Thomas ?",
          options: [
            "Rien : la haie est sur le terrain du voisin",
            "Après une tentative amiable, obtenir du juge que la haie soit réduite à 2 mètres ou arrachée",
            "La couper lui-même à 2 mètres",
          ],
          answer: 1,
          explain:
            "Une plantation de plus de 2 mètres doit être à 2 mètres de la limite : ici, elle est à 1 mètre. Thomas peut exiger qu’elle soit réduite à 2 mètres ou arrachée (art. 672), après la tentative amiable obligatoire pour ce type de litige (conciliateur de justice). Il ne doit jamais couper lui-même.",
        },
        {
          type: "fiche",
          title: "Propriété et voisinage",
          points: [
            "Propriété = <b>user</b>, <b>jouir</b>, <b>disposer</b> (art. 544).",
            "Démembrement : <b>usufruit</b> (utiliser, percevoir) / <b>nue-propriété</b> (disposer).",
            "<b>Indivision</b> : décisions aux 2/3, vente à l’unanimité ; chacun peut demander le partage.",
            "<b>Trouble anormal de voisinage</b> : responsabilité sans faute, sauf activité antérieure, conforme et inchangée (art. 1253, 2024).",
            "Plantations : <b>2 m</b> de la limite au-delà de 2 m de haut, sinon 50 cm ; branches : demander ; racines : couper.",
            "<b>Prescription acquisitive</b> : 30 ans (10 ans avec titre et bonne foi).",
          ],
          retenir: "Ta propriété s’arrête là où commence la tranquillité normale de ton voisin.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "La responsabilité civile",
      minutes: 18,
      objectives: ["Savoir quand on doit réparer un dommage causé à autrui", "Connaître les cas de responsabilité sans faute"],
      steps: [
        {
          type: "lesson",
          title: "La responsabilité civile",
          slides: [
            {
              title: "Réparer, pas punir",
              body:
                "<p>Le droit pénal <b>punit</b> ; la responsabilité civile <b>répare</b>. Elle oblige celui qui a causé un dommage à <b>indemniser</b> la victime, en argent le plus souvent.</p><p>Deux grandes familles :</p><ul><li>la responsabilité <b>contractuelle</b> : un contrat n’a pas été exécuté (vu dans le cours sur les contrats) ;</li><li>la responsabilité <b>extracontractuelle</b> (ou délictuelle) : un dommage causé hors de tout contrat. C’est le sujet de cette séance.</li></ul>",
            },
            {
              title: "La responsabilité pour faute",
              body:
                "<p>Trois conditions à prouver par la victime :</p><div class='tiers'><div><b>Une faute</b><span>acte volontaire, imprudence ou négligence</span></div><div><b>Un dommage</b><span>matériel, corporel ou moral</span></div><div><b>Un lien de causalité</b><span>la faute a causé le dommage</span></div></div>",
              article: { ref: "Code civil, art. 1240", text: "Tout fait quelconque de l’homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer." },
            },
            {
              title: "La responsabilité sans faute",
              body:
                "<p>Dans plusieurs cas, la victime n’a <b>pas besoin de prouver une faute</b> :</p><ul><li>Du fait des <b>choses</b> qu’on a sous sa garde : le pot de fleurs qui tombe du balcon, l’étagère de ton magasin qui s’effondre sur un client.</li><li>Du fait des <b>animaux</b> : le propriétaire répond des dommages causés par son chien.</li><li>Du fait des <b>enfants mineurs</b> : les parents sont responsables de plein droit des dommages causés par leur enfant mineur qui habite avec eux.</li><li>Du fait des <b>salariés</b> : l’employeur répond des dommages causés par ses salariés dans l’exercice de leurs fonctions.</li></ul><p>Pour s’exonérer, il faut en principe prouver une <b>force majeure</b> ou la <b>faute de la victime</b>.</p>",
            },
            {
              title: "Les accidents de la route",
              body:
                "<p>La <b>loi Badinter</b> (1985) protège fortement les victimes d’accidents impliquant un véhicule terrestre à moteur :</p><ul><li>Les victimes <b>non conductrices</b> (piétons, cyclistes, passagers) sont indemnisées de leurs dommages corporels, sauf <b>faute inexcusable</b> qui est la cause exclusive de l’accident (cas très rares).</li><li>Les victimes de moins de 16 ans, de plus de 70 ans, ou invalides à 80 % sont toujours indemnisées, sauf si elles ont volontairement recherché le dommage.</li><li>Le <b>conducteur</b> victime peut voir son indemnisation réduite ou supprimée par sa propre faute.</li></ul>",
            },
            {
              title: "En pratique : l’assurance et les délais",
              body:
                "<ul><li>L’<b>assurance responsabilité civile</b> (souvent incluse dans l’assurance habitation) paie à ta place les dommages que tu causes dans ta vie privée.</li><li>Pour ton activité, il faut une <b>RC professionnelle</b> : elle n’est pas couverte par l’assurance habitation.</li><li>Délai pour agir : <b>5 ans</b> à partir du jour où la victime a connu (ou aurait dû connaître) son dommage ; <b>10 ans</b> pour un dommage corporel, à partir de la consolidation.</li><li>La victime est indemnisée de tout son préjudice, mais pas plus : c’est la <b>réparation intégrale</b>.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Faute à prouver ?",
          instruction: "La victime doit-elle prouver une faute pour être indemnisée ?",
          categories: ["Faute à prouver", "Pas de faute à prouver"],
          items: [
            { text: "Un concurrent publie de faux avis négatifs sur ta boutique", cat: 0, why: "Responsabilité pour faute (dénigrement)." },
            { text: "Le chien du voisin mord ton fils dans la rue", cat: 1, why: "Responsabilité du fait des animaux : de plein droit." },
            { text: "Un enfant de 10 ans casse la vitrine d’un magasin avec son ballon", cat: 1, why: "Les parents sont responsables de plein droit de leur enfant mineur." },
            { text: "Un piéton est renversé par une voiture", cat: 1, why: "Loi Badinter : indemnisation sans faute à prouver." },
            { text: "Ton livreur salarié endommage une voiture en manœuvrant pendant sa tournée", cat: 1, why: "L’employeur répond de ses salariés dans leurs fonctions." },
            { text: "Un ancien associé divulgue tes fichiers clients à un concurrent", cat: 0, why: "Il faut prouver le comportement fautif." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Conditions de la responsabilité pour faute", back: "Une faute, un dommage, un lien de causalité (art. 1240 C. civ.)." },
            { front: "Fait des choses", back: "Le gardien d’une chose répond des dommages qu’elle cause, sans faute à prouver." },
            { front: "Responsabilité des parents", back: "De plein droit pour les dommages causés par leur enfant mineur qui habite avec eux." },
            { front: "Responsabilité de l’employeur", back: "Répond des dommages causés par ses salariés dans l’exercice de leurs fonctions." },
            { front: "Loi Badinter", back: "Victimes non conductrices d’accidents de la route indemnisées sauf faute inexcusable cause exclusive." },
            { front: "Délais d’action", back: "5 ans en général ; 10 ans pour un dommage corporel, à partir de la consolidation." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un client glisse sur le sol mouillé de ton magasin et se casse le poignet. Ta responsabilité peut être engagée…", options: ["seulement s’il prouve une faute grave", "comme gardien des lieux et de leurs équipements, ou pour négligence (pas de panneau)", "jamais, c’est sa faute"], answer: 1, explain: "Le commerçant doit assurer la sécurité de ses clients ; la RC professionnelle couvre ce risque." },
            { q: "Ton fils de 15 ans, qui vit avec toi, raye une voiture. Qui est responsable civilement ?", options: ["Lui seul", "Toi et l’autre parent, de plein droit", "Personne, il est mineur"], answer: 1, explain: "Les parents répondent de plein droit des dommages causés par leur enfant mineur." },
            { q: "Un cycliste est percuté par une voiture. Doit-il prouver la faute du conducteur ?", options: ["Oui", "Non, la loi Badinter l’indemnise sauf faute inexcusable cause exclusive"], answer: 1, explain: "Les victimes non conductrices sont très protégées." },
            { q: "L’assurance habitation couvre-t-elle les dommages causés dans ton activité professionnelle ?", options: ["Oui, toujours", "Non, il faut une RC professionnelle"], answer: 1, explain: "La RC « vie privée » exclut l’activité professionnelle." },
          ],
        },
        {
          type: "case",
          title: "La palette qui tombe",
          story:
            "Dans l’entrepôt de Moussa, une palette mal sanglée tombe d’un rack et blesse un livreur d’une autre société venu récupérer une commande. Moussa assure : « Je n’étais même pas là, je n’ai commis aucune faute. »",
          question: "La société de Moussa peut-elle être tenue d’indemniser le livreur ?",
          options: [
            "Non, faute de faute personnelle de Moussa",
            "Oui : la société est gardienne de la palette (responsabilité du fait des choses) et répond aussi de ses salariés qui l’ont mal sanglée",
            "Non, c’est l’employeur du livreur qui paie",
          ],
          answer: 1,
          explain:
            "Pas besoin de prouver une faute : la société est gardienne de la palette. Elle répond aussi de ses salariés. Le livreur, blessé au travail, sera aussi pris en charge au titre des accidents du travail, et l’assureur pourra se retourner contre la société de Moussa. D’où l’importance de la RC professionnelle.",
        },
        {
          type: "fiche",
          title: "La responsabilité civile",
          points: [
            "Responsabilité civile = <b>réparer</b> ; droit pénal = punir.",
            "Pour faute : <b>faute + dommage + lien de causalité</b> (art. 1240-1241).",
            "Sans faute : <b>choses</b> sous sa garde, <b>animaux</b>, <b>enfants mineurs</b>, <b>salariés</b>.",
            "<b>Loi Badinter</b> : victimes non conductrices presque toujours indemnisées.",
            "RC vie privée ≠ <b>RC professionnelle</b>.",
            "Délais : <b>5 ans</b> ; <b>10 ans</b> pour un dommage corporel.",
          ],
          retenir: "Ce que tu as sous ta garde, tu en réponds : assure-le.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "L’héritage et les donations",
      minutes: 20,
      objectives: ["Savoir qui hérite et dans quelle proportion", "Connaître le testament, la donation et la fiscalité de base"],
      steps: [
        {
          type: "lesson",
          title: "Les successions",
          slides: [
            {
              title: "Qui hérite sans testament ?",
              body:
                "<p>La loi classe les héritiers en <b>ordres</b>. Le premier ordre qui a un membre vivant exclut les suivants :</p><ol><li>les <b>enfants</b> et leurs descendants ;</li><li>les <b>parents</b>, frères et sœurs (et leurs descendants) ;</li><li>les autres <b>ascendants</b> (grands-parents…) ;</li><li>les autres <b>collatéraux</b> (oncles, tantes, cousins), jusqu’au 6e degré.</li></ol><p>Le <b>conjoint marié</b> survivant vient en plus, avec des droits propres. Sans aucun héritier, la succession revient à l’<b>État</b>.</p>",
            },
            {
              title: "Les droits du conjoint survivant",
              body:
                "<table class='t'><tr><th>Situation</th><th>Le conjoint reçoit</th></tr><tr><td>Tous les enfants sont communs au couple</td><td>Au choix : l’<b>usufruit de tout</b> ou <b>1/4 en pleine propriété</b></td></tr><tr><td>Au moins un enfant d’une autre union</td><td><b>1/4 en pleine propriété</b></td></tr><tr><td>Pas d’enfant, mais les parents du défunt sont vivants</td><td>La moitié (ou 3/4 si un seul parent)</td></tr><tr><td>Ni enfant ni parent</td><td>Tout</td></tr></table><p>Il a aussi le droit de rester <b>gratuitement un an</b> dans le logement familial, puis un droit viager d’y habiter, que le défunt ne peut écarter que par un testament devant notaire.</p>",
            },
            {
              title: "La réserve héréditaire",
              body:
                "<p>On ne peut pas déshériter ses enfants en France. Une partie de la succession, la <b>réserve</b>, leur revient obligatoirement :</p><div class='tiers'><div><b>1 enfant</b><span>réserve 1/2, liberté 1/2</span></div><div><b>2 enfants</b><span>réserve 2/3, liberté 1/3</span></div><div><b>3 enfants et plus</b><span>réserve 3/4, liberté 1/4</span></div></div><p>Le reste, la <b>quotité disponible</b>, peut être laissé à qui on veut par testament ou donation (conjoint, partenaire, ami, association). Les donations faites de son vivant sont prises en compte dans ce calcul.</p>",
            },
            {
              title: "Le testament et la donation",
              body:
                "<ul><li><b>Testament olographe</b> : écrit <b>entièrement à la main</b>, daté et signé. Gratuit, mais risque de perte ou de contestation : le confier à un notaire, qui l’inscrit au fichier central des dernières volontés.</li><li><b>Testament authentique</b> : dicté au notaire devant témoins. Plus sûr.</li><li><b>Donation</b> : transmettre de son vivant, de façon <b>irrévocable</b>. Chez le notaire pour un bien immobilier ; le <b>don manuel</b> (argent, objet) se fait de la main à la main, mais doit être déclaré aux impôts.</li></ul><p>Un héritier n’est jamais obligé d’accepter : il peut <b>renoncer</b> (s’il y a plus de dettes que de biens) ou accepter <b>à concurrence de l’actif net</b>.</p>",
            },
            {
              title: "La fiscalité en bref (2026)",
              body:
                "<ul><li>Le <b>conjoint marié</b> et le <b>partenaire de PACS</b> sont <b>exonérés</b> de droits de succession.</li><li>Chaque enfant bénéficie d’un <b>abattement de 100 000 €</b> par parent, sur les donations et la succession, qui se <b>renouvelle tous les 15 ans</b>.</li><li>Don d’argent pour un logement : jusqu’à <b>100 000 €</b> exonérés par donateur pour aider un enfant ou petit-enfant à acheter un logement neuf ou faire des travaux de rénovation énergétique (jusqu’au 31 décembre 2026), ou à acheter un logement ancien comme première résidence principale (jusqu’au 30 juin 2027).</li><li>L’<b>assurance-vie</b> est en grande partie <b>hors succession</b> : 152 500 € par bénéficiaire exonérés pour les versements faits avant 70 ans.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Qui hérite ?",
          instruction: "Une personne décède sans testament. Qui hérite en priorité dans chaque situation (hors conjoint) ?",
          categories: ["Les enfants", "Les parents et frères et sœurs", "Les cousins", "L’État"],
          items: [
            { text: "Elle laisse deux enfants, ses parents et un frère", cat: 0, why: "Les enfants (1er ordre) excluent tous les autres." },
            { text: "Elle n’a pas d’enfant ; sa mère et sa sœur sont vivantes", cat: 1, why: "2e ordre : parents et frères et sœurs." },
            { text: "Ni enfant, ni parents, ni frères et sœurs, ni grands-parents ; il reste deux cousins germains", cat: 2, why: "Collatéraux ordinaires, jusqu’au 6e degré." },
            { text: "Aucun parent jusqu’au 6e degré, pas de conjoint, pas de testament", cat: 3, why: "La succession est dite « en déshérence » : elle revient à l’État." },
            { text: "Elle laisse un petit-fils (son fils unique est décédé avant elle) et ses parents", cat: 0, why: "Le petit-fils vient à la place de son père (représentation) : 1er ordre." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Ordres d’héritiers", back: "1. Descendants ; 2. parents, frères et sœurs ; 3. ascendants ; 4. collatéraux jusqu’au 6e degré." },
            { front: "Droits du conjoint (enfants communs)", back: "Au choix : usufruit de toute la succession ou 1/4 en pleine propriété." },
            { front: "Réserve héréditaire", back: "Part réservée aux enfants : 1/2 (un enfant), 2/3 (deux), 3/4 (trois et plus)." },
            { front: "Testament olographe", back: "Écrit entièrement à la main, daté et signé." },
            { front: "Abattement parent-enfant", back: "100 000 € par parent et par enfant, renouvelable tous les 15 ans." },
            { front: "Renonciation à succession", back: "Un héritier peut refuser l’héritage, par exemple s’il y a plus de dettes que de biens." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un père de 3 enfants veut tout léguer à une association. Quelle part maximum peut-il lui laisser ?", options: ["Tout", "La moitié", "Un quart"], answer: 2, explain: "Avec 3 enfants, la réserve est de 3/4 : il ne peut disposer librement que d’1/4." },
            { q: "Un testament tapé à l’ordinateur, imprimé et signé à la main est-il un testament olographe valable ?", options: ["Oui", "Non, il doit être écrit entièrement à la main"], answer: 1, explain: "Écrit, daté et signé de la main du testateur : sinon, il est nul." },
            { q: "Ton père est décédé avec 80 000 € de dettes et 20 000 € de biens. Es-tu obligé de payer ses dettes ?", options: ["Oui, en tant qu’héritier", "Non, tu peux renoncer à la succession ou l’accepter à concurrence de l’actif net"], answer: 1, explain: "On n’est jamais forcé d’accepter une succession." },
            { q: "Ta mère te donne 100 000 € en 2026, puis décède en 2030. L’abattement de 100 000 € s’applique-t-il de nouveau à la succession ?", options: ["Oui, intégralement", "Non, il a déjà été utilisé il y a moins de 15 ans"], answer: 1, explain: "Les donations des 15 dernières années sont rappelées : l’abattement est consommé." },
            { q: "Ta partenaire de PACS t’a légué ses biens par testament. Combien de droits de succession ?", options: ["60 %", "Aucun, le partenaire de PACS est exonéré"], answer: 1, explain: "Exonération totale, mais seulement grâce au testament." },
          ],
        },
        {
          type: "case",
          title: "La famille recomposée",
          story:
            "Pierre décède. Il était marié avec Sonia, avec qui il a eu une fille. Il avait aussi un fils d’une première union. Il n’a fait ni testament ni donation au dernier vivant. Sonia pensait pouvoir choisir l’usufruit de toute la succession pour rester dans la maison.",
          question: "Quels sont les droits de Sonia ?",
          options: [
            "Elle peut choisir l’usufruit de tout",
            "Elle reçoit 1/4 en pleine propriété, car tous les enfants ne sont pas communs ; elle garde aussi un droit d’habitation sur le logement",
            "Elle n’hérite de rien, ce sont les enfants qui héritent",
          ],
          answer: 1,
          explain:
            "Le choix de l’usufruit total n’existe que si tous les enfants sont communs. Ici, il y a un enfant d’une première union : Sonia reçoit 1/4 en pleine propriété. Elle bénéficie aussi du droit de rester un an gratuitement puis d’un droit viager au logement. Une donation entre époux aurait pu élargir ses droits.",
        },
        {
          type: "fiche",
          title: "L’héritage",
          points: [
            "Héritiers par <b>ordres</b> : enfants, puis parents et fratrie, puis ascendants, puis collatéraux (6e degré).",
            "<b>Conjoint</b> : usufruit total ou 1/4 si enfants communs ; 1/4 sinon ; droit au logement.",
            "<b>Réserve</b> des enfants : 1/2, 2/3, 3/4. Le reste est la <b>quotité disponible</b>.",
            "Testament <b>olographe</b> (à la main, daté, signé) ou <b>authentique</b> ; donation irrévocable.",
            "On peut <b>renoncer</b> ou accepter à concurrence de l’actif net.",
            "Fiscalité : conjoint et pacsé <b>exonérés</b> ; <b>100 000 €</b> par parent et par enfant tous les <b>15 ans</b> ; assurance-vie hors succession.",
          ],
          retenir: "Sans testament, c’est la loi qui choisit tes héritiers à ta place.",
        },
      ],
    },
  ],
});
