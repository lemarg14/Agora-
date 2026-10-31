/* ============================================================
   COURS : Droit des sociétés — l’essentiel
   Faculté de Droit · 8 séances de 15 à 20 minutes
   Chiffres vérifiés au 31 octobre 2026 (IS, flat tax, seuils
   micro-entreprise 2026-2028, loi de simplification du 26 mai 2026).
   ============================================================ */
AGORA.registerCourse({
  id: "droit-societes",
  faculty: "droit",
  title: "Droit des sociétés — l’essentiel",
  subtitle: "Créer, diriger, financer et transmettre une société",
  color: "#a8432f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour maîtriser ce que tout entrepreneur devrait savoir : choisir entre entreprise individuelle et société, comparer SAS et SARL, créer sa structure, gérer les associés, diriger sans engager sa responsabilité, se rémunérer, faire évoluer la société et réagir quand elle va mal.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Entreprise individuelle ou société ?",
      minutes: 17,
      objectives: ["Comprendre ce qu’est une personne morale", "Savoir quand passer de l’entreprise individuelle à la société"],
      steps: [
        {
          type: "lesson",
          title: "Entreprise individuelle ou société",
          slides: [
            {
              title: "Deux façons d’entreprendre",
              body:
                "<ul><li><b>L’entreprise individuelle (EI)</b> : c’est <b>toi</b> qui exerces l’activité, en ton nom. Pas de structure séparée. La micro-entreprise est une EI avec un régime fiscal et social simplifié.</li><li><b>La société</b> : tu crées une <b>nouvelle personne</b>, juridiquement distincte de toi. Elle a son nom, son siège, son patrimoine, son numéro SIREN, son compte bancaire. Elle signe les contrats, encaisse, doit les dettes.</li></ul><p>Cette « personne » qui n’est pas un humain s’appelle une <b>personne morale</b>. Elle naît le jour de son <b>immatriculation</b> au registre du commerce et des sociétés (RCS).</p>",
              article: { ref: "Code civil, art. 1842", text: "Les sociétés autres que les sociétés en participation visées au chapitre III jouissent de la personnalité morale à compter de leur immatriculation." },
            },
            {
              title: "Ce qu’est une société",
              body:
                "<p>La loi la définit comme un projet commun :</p><ul><li>une ou plusieurs personnes (les <b>associés</b>) ;</li><li>qui mettent quelque chose en commun (les <b>apports</b> : argent, biens, savoir-faire) ;</li><li>pour <b>partager les bénéfices</b> ou profiter d’une économie, et qui acceptent aussi de <b>contribuer aux pertes</b>.</li></ul>",
              article: { ref: "Code civil, art. 1832", text: "La société est instituée par deux ou plusieurs personnes qui conviennent par un contrat d’affecter à une entreprise commune des biens ou leur industrie en vue de partager le bénéfice ou de profiter de l’économie qui pourra en résulter. Elle peut être instituée, dans les cas prévus par la loi, par l’acte de volonté d’une seule personne." },
            },
            {
              title: "L’entrepreneur individuel est mieux protégé depuis 2022",
              body:
                "<p>Depuis le <b>15 mai 2022</b>, tout entrepreneur individuel a automatiquement <b>deux patrimoines</b> :</p><ul><li>un patrimoine <b>professionnel</b> (biens utiles à l’activité) : seul gage des créanciers professionnels ;</li><li>un patrimoine <b>personnel</b> (ta maison, ton épargne perso…) : en principe protégé.</li></ul><p>Limites : en cas de <b>fraude</b> ou de <b>manquements graves</b>, et pour certaines dettes fiscales et sociales, les créanciers peuvent atteindre le patrimoine personnel. Et une banque te demandera souvent de renoncer à cette protection pour un prêt.</p>",
            },
            {
              title: "La micro-entreprise et ses plafonds",
              body:
                "<p>Le régime micro s’applique tant que ton chiffre d’affaires annuel ne dépasse pas (plafonds 2026-2028) :</p><div class='tiers'><div><b>203 100 €</b><span>vente de marchandises</span></div><div><b>83 600 €</b><span>prestations de services</span></div><div><b>Pas de TVA</b><span>sous 85 000 € (vente) ou 37 500 € (services)</span></div></div><p>Pas de déduction des charges réelles : tu es taxé sur un pourcentage du chiffre d’affaires. Dès que tu as beaucoup de charges (stock, publicité, sous-traitance), la micro devient vite désavantageuse.</p>",
            },
            {
              title: "Quand passer en société ?",
              body:
                "<ul><li>Tu veux <b>t’associer</b> avec quelqu’un ou faire entrer un investisseur.</li><li>Tu as de <b>grosses charges</b> ou des marges à réinvestir : l’impôt sur les sociétés devient intéressant (séance 6).</li><li>Tu approches des <b>plafonds</b> de la micro.</li><li>Tu veux une image plus solide face aux clients, fournisseurs et banques.</li><li>Tu prépares une <b>revente</b> : on vend facilement une société, beaucoup moins une EI.</li></ul>",
              example: "Un e-commerçant en micro qui fait 150 000 € de ventes mais 110 000 € de marchandises et de pub est imposé sur un pourcentage des 150 000 €, pas sur son vrai bénéfice : c’est souvent le signal pour passer en société.",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Personne morale", back: "Entité juridique distincte des personnes physiques (une société), avec ses droits, ses biens et ses dettes." },
            { front: "Immatriculation", back: "Inscription au RCS : c’est elle qui fait naître la personnalité morale (art. 1842 C. civ.)." },
            { front: "Associés", back: "Les personnes qui font des apports à la société et partagent bénéfices et pertes." },
            { front: "Patrimoine professionnel de l’EI", back: "Depuis le 15 mai 2022, seul gage des créanciers pros de l’entrepreneur individuel, sauf exceptions." },
            { front: "Plafonds micro 2026-2028", back: "203 100 € en vente de marchandises, 83 600 € en prestations de services." },
            { front: "Limite de la micro", back: "Pas de déduction des charges réelles : désavantageux quand les charges sont lourdes." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "À partir de quand une SAS existe-t-elle juridiquement ?", options: ["À la signature des statuts", "À son immatriculation au RCS", "Au premier chiffre d’affaires"], answer: 1, explain: "La personnalité morale naît à l’immatriculation (art. 1842 C. civ.)." },
            { q: "Un entrepreneur individuel fait faillite en 2026. Sa maison personnelle est-elle en principe exposée aux créanciers professionnels ?", options: ["Oui, toujours", "Non, en principe elle fait partie de son patrimoine personnel protégé", "Seulement s’il est marié"], answer: 1, explain: "Depuis 2022, les patrimoines sont séparés par défaut, sauf fraude, manquements graves ou renonciation." },
            { q: "Un consultant en micro-entreprise facture 95 000 € de prestations en 2026. Problème ?", options: ["Non, le plafond est de 203 100 €", "Oui, il dépasse le plafond de 83 600 € pour les services", "Non, la micro n’a pas de plafond"], answer: 1, explain: "Pour les prestations de services, le plafond 2026-2028 est de 83 600 €." },
            { q: "Laquelle de ces raisons pousse le plus souvent à créer une société ?", options: ["Vouloir s’associer ou faire entrer un investisseur", "Vouloir payer plus de cotisations", "Vouloir éviter de tenir une comptabilité"], answer: 0, explain: "On ne peut pas avoir d’associé dans une entreprise individuelle. Et une société impose une comptabilité complète." },
          ],
        },
        {
          type: "case",
          title: "La boutique qui grossit",
          story:
            "Inès vend des accessoires pour animaux en ligne en micro-entreprise. Cette année : <b>180 000 €</b> de ventes, mais <b>120 000 €</b> de marchandises, de publicité et de logistique. Un ami veut investir 20 000 € et devenir son associé.",
          question: "Que lui conseiller ?",
          options: [
            "Rester en micro : elle est encore sous le plafond de 203 100 €",
            "Créer une société : elle pourra accueillir l’associé et être imposée sur son vrai bénéfice",
            "Ouvrir une deuxième micro-entreprise au nom de son ami",
          ],
          answer: 1,
          explain:
            "Deux signaux : impossible d’avoir un associé en entreprise individuelle, et la micro la taxe sur un pourcentage du chiffre d’affaires alors que ses charges réelles sont énormes. Une société (SAS ou SARL) règle les deux.",
        },
        {
          type: "fiche",
          title: "EI ou société",
          points: [
            "<b>EI</b> : tu exerces en ton nom. <b>Société</b> : une <b>personne morale</b> distincte, née à l’<b>immatriculation</b>.",
            "Une société = des associés, des apports, un partage des bénéfices et des pertes (art. 1832 C. civ.).",
            "Depuis mai 2022, l’EI a un patrimoine pro et un patrimoine perso séparés (sauf fraude, manquements graves, renonciation).",
            "Plafonds micro 2026-2028 : <b>203 100 €</b> (vente) et <b>83 600 €</b> (services).",
            "Passer en société : associés, charges lourdes, plafonds, crédibilité, revente future.",
          ],
          retenir: "La société, c’est une personne de plus dans ton business : elle signe, elle possède, elle doit.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Choisir sa forme de société",
      minutes: 19,
      objectives: ["Comparer SAS et SARL", "Connaître les autres formes (SA, SNC, SCI)"],
      steps: [
        {
          type: "lesson",
          title: "Les formes de société",
          slides: [
            {
              title: "La responsabilité des associés",
              body:
                "<p>Premier critère : jusqu’où les associés peuvent-ils perdre de l’argent si la société coule ?</p><ul><li><b>Responsabilité limitée aux apports</b> : SAS, SARL, SA. Tu risques au maximum ce que tu as apporté.</li><li><b>Responsabilité indéfinie</b> : SNC (et solidaire), sociétés civiles comme la SCI (à proportion des parts). Les créanciers peuvent se retourner contre tes biens personnels.</li></ul><p>Attention : si tu te portes <b>caution personnelle</b> d’un prêt de ta société, tu perds cette protection pour ce prêt.</p>",
            },
            {
              title: "SAS et SASU",
              body:
                "<ul><li>1 associé (<b>SASU</b>) ou plus, sans maximum. Capital libre, <b>dès 1 €</b>.</li><li>Grande <b>liberté des statuts</b> : on organise le pouvoir, les votes, les entrées et sorties d’associés comme on veut.</li><li>Dirigée par un <b>président</b> (personne physique ou société).</li><li>Le président rémunéré est <b>assimilé salarié</b> : bonne protection sociale, mais cotisations élevées.</li><li>Les dividendes ne supportent pas de cotisations sociales.</li></ul><p>C’est la forme la plus choisie par les créateurs aujourd’hui, et celle des start-up.</p>",
            },
            {
              title: "SARL et EURL",
              body:
                "<ul><li>1 associé (<b>EURL</b>) à <b>100 associés maximum</b>. Capital libre, dès 1 €.</li><li>Fonctionnement très <b>encadré par la loi</b> : moins de liberté, mais moins de risque d’erreur de rédaction.</li><li>Dirigée par un ou plusieurs <b>gérants</b>, obligatoirement des personnes physiques.</li><li>Le gérant <b>majoritaire</b> est <b>travailleur non salarié (TNS)</b> : cotisations plus faibles, protection plus faible. Gérant minoritaire ou égalitaire : assimilé salarié.</li><li>Pour le gérant majoritaire, les dividendes au-delà de 10 % du capital supportent des cotisations sociales (séance 6).</li></ul><p>Adaptée aux projets familiaux ou aux petites structures qui veulent un cadre stable.</p>",
            },
            {
              title: "Les autres formes",
              body:
                "<table class='t'><tr><th>Forme</th><th>Pour quoi</th><th>À retenir</th></tr><tr><td><b>SA</b></td><td>Grandes entreprises, cotation en bourse</td><td>Capital minimum 37 000 €, conseil d’administration, lourde</td></tr><tr><td><b>SNC</b></td><td>Associés de confiance (souvent famille)</td><td>Tous commerçants, responsables indéfiniment et solidairement</td></tr><tr><td><b>SCI</b></td><td>Détenir et gérer de l’immobilier</td><td>Société civile, pas d’activité commerciale</td></tr><tr><td><b>SELARL, SELAS…</b></td><td>Professions libérales réglementées</td><td>Médecins, avocats, experts-comptables</td></tr></table>",
            },
            {
              title: "SAS ou SARL : le comparatif",
              body:
                "<table class='t'><tr><th></th><th>SAS</th><th>SARL</th></tr><tr><td>Souplesse</td><td>Très grande</td><td>Cadre légal strict</td></tr><tr><td>Dirigeant</td><td>Président</td><td>Gérant</td></tr><tr><td>Statut social</td><td>Assimilé salarié</td><td>TNS si gérant majoritaire</td></tr><tr><td>Coût d’1 € de salaire net</td><td>Plus cher</td><td>Moins cher</td></tr><tr><td>Dividendes</td><td>Pas de cotisations sociales</td><td>Cotisations au-delà de 10 % pour le gérant majoritaire</td></tr><tr><td>Entrée d’investisseurs</td><td>Très facile</td><td>Plus rigide</td></tr><tr><td>Vente des titres</td><td>0,1 % de droits</td><td>3 % après abattement</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle forme choisir ?",
          instruction: "Choisis la forme la plus adaptée à chaque projet.",
          categories: ["SAS / SASU", "SARL / EURL", "SCI", "SA"],
          items: [
            { text: "Trois amis lancent une start-up et veulent lever des fonds auprès d’investisseurs", cat: 0, why: "La SAS permet d’organiser facilement l’entrée d’investisseurs et des actions de préférence." },
            { text: "Un couple veut acheter un immeuble de rapport et le transmettre plus tard à ses enfants", cat: 2, why: "La SCI est faite pour détenir et transmettre de l’immobilier." },
            { text: "Un artisan seul veut limiter ses cotisations sociales en se versant une rémunération", cat: 1, why: "En EURL, le gérant associé unique est TNS : cotisations plus faibles qu’un président de SASU." },
            { text: "Un groupe industriel prévoit une introduction en bourse", cat: 3, why: "La cotation en bourse se fait sous forme de SA (ou SCA)." },
            { text: "Un consultant seul veut se payer surtout en dividendes, sans cotisations sociales dessus", cat: 0, why: "En SASU, les dividendes ne supportent que la flat tax, pas de cotisations sociales." },
            { text: "Deux frères reprennent la boulangerie familiale et veulent un cadre simple fixé par la loi", cat: 1, why: "La SARL de famille, très encadrée, est un classique pour ce type de projet." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "SASU / EURL", back: "Versions à associé unique de la SAS et de la SARL." },
            { front: "SAS", back: "Grande liberté statutaire, président assimilé salarié, dividendes sans cotisations sociales." },
            { front: "SARL", back: "2 à 100 associés, cadre légal strict, gérant personne physique, gérant majoritaire TNS." },
            { front: "Responsabilité limitée aux apports", back: "SAS, SARL, SA : les associés ne perdent au maximum que leurs apports (sauf caution personnelle)." },
            { front: "SNC", back: "Associés commerçants, responsables indéfiniment et solidairement des dettes sociales." },
            { front: "TNS", back: "Travailleur non salarié : cotisations plus faibles qu’un assimilé salarié, protection sociale moindre." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est le capital minimum d’une SAS ?", options: ["1 €", "1 500 €", "37 000 €"], answer: 0, explain: "Le capital est libre en SAS et en SARL. 37 000 €, c’est le minimum de la SA." },
            { q: "Combien d’associés au maximum dans une SARL ?", options: ["10", "50", "100"], answer: 2, explain: "La SARL est limitée à 100 associés." },
            { q: "Le gérant majoritaire d’une SARL relève du statut social…", options: ["d’assimilé salarié", "de travailleur non salarié (TNS)", "de fonctionnaire"], answer: 1, explain: "Gérant majoritaire = TNS. Gérant minoritaire ou égalitaire = assimilé salarié." },
            { q: "Associé d’une SAS, tu t’es porté caution personnelle du prêt bancaire de la société. Si elle fait faillite…", options: ["tu ne risques que ton apport", "la banque peut te réclamer le prêt sur tes biens personnels", "la caution est annulée automatiquement"], answer: 1, explain: "La caution est un engagement personnel : elle contourne la responsabilité limitée." },
            { q: "Quelle forme convient le mieux pour détenir un local commercial à part de ta société d’exploitation ?", options: ["Une SNC", "Une SCI", "Une deuxième SAS obligatoirement"], answer: 1, explain: "Montage classique : la SCI possède les murs et les loue à la société d’exploitation." },
          ],
        },
        {
          type: "case",
          title: "Deux associés, deux envies",
          story:
            "Yanis et Leïla créent une marque de cosmétiques. Yanis veut se verser un petit salaire en limitant les charges. Leïla, elle, veut pouvoir faire entrer des investisseurs d’ici deux ans et prévoir des règles sur mesure si l’un des deux veut partir. Ils hésitent entre SARL et SAS.",
          question: "Quelle forme répond le mieux à l’ensemble du projet ?",
          options: [
            "La SARL, parce qu’elle coûte moins cher en charges sociales pour un gérant majoritaire",
            "La SAS, parce qu’elle permet des statuts sur mesure et facilite l’entrée d’investisseurs",
            "La SNC, parce qu’elle est la plus souple",
          ],
          answer: 1,
          explain:
            "La levée de fonds et les règles de sortie sur mesure pèsent plus lourd : la SAS est taillée pour ça. Le coût social de Yanis peut se gérer (faible salaire, dividendes). En SARL à 50/50, aucun gérant ne serait d’ailleurs majoritaire, donc pas de statut TNS.",
        },
        {
          type: "fiche",
          title: "Choisir sa forme",
          points: [
            "Responsabilité <b>limitée aux apports</b> : SAS, SARL, SA. <b>Indéfinie</b> : SNC, SCI. La caution personnelle annule la protection.",
            "<b>SAS</b> : statuts libres, président assimilé salarié, dividendes sans cotisations, idéale pour lever des fonds.",
            "<b>SARL</b> : 100 associés max, cadre strict, gérant majoritaire TNS (moins cher), cotisations sur dividendes au-delà de 10 %.",
            "<b>SA</b> : 37 000 € de capital, pour les grandes entreprises. <b>SCI</b> : l’immobilier.",
            "Vente des titres : 0,1 % de droits en SAS, 3 % après abattement en SARL.",
          ],
          retenir: "La forme se choisit selon le projet, pas selon la mode.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Créer sa société pas à pas",
      minutes: 18,
      objectives: ["Connaître les étapes de la création", "Comprendre le capital et les apports"],
      steps: [
        {
          type: "lesson",
          title: "La création",
          slides: [
            {
              title: "Les statuts",
              body:
                "<p>Les <b>statuts</b> sont le contrat fondateur de la société. Ils contiennent obligatoirement :</p><ul><li>la <b>forme</b> (SAS, SARL…) et la <b>dénomination</b> ;</li><li>l’<b>objet social</b> : les activités de la société ;</li><li>le <b>siège social</b> ;</li><li>le <b>capital</b> et la répartition entre associés ;</li><li>la <b>durée</b> (99 ans maximum, renouvelable).</li></ul><p>En SAS, ils organisent aussi le pouvoir et les décisions : c’est là que tout se joue. Un modèle gratuit téléchargé sans réfléchir est une source classique de conflits.</p>",
            },
            {
              title: "Le capital et les apports",
              body:
                "<p>Le capital est la somme de tous les apports, en échange desquels les associés reçoivent des <b>parts sociales</b> (SARL) ou des <b>actions</b> (SAS).</p><ul><li><b>Apport en numéraire</b> : de l’argent.</li><li><b>Apport en nature</b> : un bien (matériel, stock, fonds de commerce, marque). Il faut l’évaluer ; un <b>commissaire aux apports</b> est en principe obligatoire si un apport dépasse 30 000 € ou si le total des apports en nature dépasse la moitié du capital.</li><li><b>Apport en industrie</b> : ton travail ou ton savoir-faire. Il donne des droits aux bénéfices mais <b>n’entre pas dans le capital</b>.</li></ul>",
            },
            {
              title: "Libérer le capital",
              body:
                "<p>« Libérer », c’est verser réellement l’argent promis. À la création, on peut n’en verser qu’une partie :</p><div class='tiers'><div><b>SARL</b><span>au moins 1/5 des apports en argent</span></div><div><b>SAS</b><span>au moins la moitié</span></div><div><b>Le reste</b><span>dans les 5 ans</span></div></div><p>L’argent est déposé sur un compte bloqué (banque, notaire ou Caisse des dépôts) jusqu’à l’immatriculation. Un capital de 1 € est légal, mais il envoie un mauvais signal aux banques et aux fournisseurs.</p>",
            },
            {
              title: "Les formalités",
              body:
                "<ol><li>Rédiger et signer les statuts.</li><li>Déposer les fonds et obtenir l’attestation de dépôt.</li><li>Publier une <b>annonce légale</b> de constitution.</li><li>Faire la demande d’immatriculation sur le <b>guichet unique</b> de l’INPI (obligatoire depuis le 1er janvier 2023), avec la déclaration des <b>bénéficiaires effectifs</b> (personnes détenant plus de 25 % du capital ou des droits de vote, ou contrôlant la société).</li><li>Recevoir le <b>Kbis</b> : la carte d’identité de la société.</li></ol>",
            },
            {
              title: "Les actes accomplis avant l’immatriculation",
              body:
                "<p>Avant le Kbis, la société n’existe pas encore. Pourtant, il faut souvent signer un bail, commander du stock, ouvrir un site…</p><p>Ces actes sont passés <b>« au nom de la société en formation »</b>. Une fois immatriculée, la société les <b>reprend</b> (via une liste annexée aux statuts ou une décision des associés). Sinon, c’est <b>la personne qui a signé</b> qui reste engagée personnellement.</p>",
              example: "Tu signes un bail commercial en ton nom propre la veille de l’immatriculation, sans mention de la société en formation : si la société ne reprend pas le bail correctement, c’est toi qui dois les loyers.",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Statuts", back: "Contrat fondateur : forme, nom, objet, siège, capital, durée (99 ans max), règles de fonctionnement." },
            { front: "Objet social", back: "La liste des activités de la société, fixée dans les statuts." },
            { front: "Apport en industrie", back: "Apport de travail ou de savoir-faire : droits aux bénéfices, mais pas de place dans le capital." },
            { front: "Libération du capital", back: "Versement effectif des apports : 1/5 minimum en SARL, la moitié en SAS, le reste sous 5 ans." },
            { front: "Bénéficiaire effectif", back: "Personne qui détient plus de 25 % du capital ou des votes, ou qui contrôle la société. À déclarer." },
            { front: "Société en formation", back: "Les actes signés avant l’immatriculation doivent être repris par la société, sinon le signataire reste engagé." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une SARL au capital de 10 000 € en numéraire. Combien faut-il verser au minimum à la création ?", options: ["1 000 €", "2 000 €", "5 000 €"], answer: 1, explain: "Au moins 1/5 des apports en numéraire en SARL, soit 2 000 €." },
            { q: "Ton associé apporte uniquement ses compétences en marketing. Cet apport…", options: ["augmente le capital", "lui donne des droits aux bénéfices sans entrer dans le capital", "est interdit"], answer: 1, explain: "C’est un apport en industrie." },
            { q: "Depuis 2023, l’immatriculation d’une société se demande…", options: ["au centre des impôts", "sur le guichet unique de l’INPI", "à la mairie"], answer: 1, explain: "Le guichet unique électronique est obligatoire pour toutes les formalités d’entreprise." },
            { q: "Tu apportes un stock de marchandises estimé à 45 000 € à ta SAS. Faut-il un commissaire aux apports ?", options: ["Non, jamais en SAS", "Oui, en principe, car l’apport dépasse 30 000 €", "Seulement si tu es seul associé"], answer: 1, explain: "Au-delà de 30 000 € pour un apport en nature, la désignation est en principe obligatoire." },
          ],
        },
        {
          type: "case",
          title: "Le bail signé trop tôt",
          story:
            "Pressé d’ouvrir, Mehdi signe un bail commercial à son nom pour sa future SAS, sans indiquer « pour le compte de la société en formation ». La SAS est immatriculée un mois plus tard, mais personne ne pense à faire reprendre le bail. Un an après, la société ne paie plus les loyers.",
          question: "Le bailleur peut-il réclamer les loyers à Mehdi personnellement ?",
          options: [
            "Non : le bail était pour la société, la responsabilité limitée le protège",
            "Oui : le bail n’ayant pas été repris par la société, Mehdi reste engagé personnellement",
            "Non : un bail signé avant l’immatriculation est nul",
          ],
          answer: 1,
          explain:
            "La responsabilité limitée ne vaut que pour les engagements de la société. Un acte signé avant l’immatriculation doit être passé au nom de la société en formation, puis repris. Sinon, le signataire reste tenu.",
        },
        {
          type: "fiche",
          title: "Créer sa société",
          points: [
            "<b>Statuts</b> : forme, nom, <b>objet</b>, <b>siège</b>, capital, durée. En SAS, ils fixent tout le fonctionnement.",
            "Apports : <b>numéraire</b>, <b>nature</b> (commissaire aux apports au-delà de 30 000 €), <b>industrie</b> (hors capital).",
            "Libération : <b>1/5</b> en SARL, <b>1/2</b> en SAS, le reste sous <b>5 ans</b>.",
            "Formalités : dépôt des fonds → annonce légale → <b>guichet unique INPI</b> + bénéficiaires effectifs → <b>Kbis</b>.",
            "Avant le Kbis : signer « au nom de la société en formation » et faire reprendre les actes.",
          ],
          retenir: "Tant qu’il n’y a pas de Kbis, c’est ta signature qui t’engage.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Les associés et leurs décisions",
      minutes: 18,
      objectives: ["Connaître les droits d’un associé", "Savoir comment se prennent les décisions et sortir d’une société"],
      steps: [
        {
          type: "lesson",
          title: "Les associés",
          slides: [
            {
              title: "Les droits d’un associé",
              body:
                "<ul><li><b>Droit aux bénéfices</b> : recevoir des dividendes quand l’assemblée en décide.</li><li><b>Droit de vote</b> dans les assemblées.</li><li><b>Droit d’information</b> : consulter les comptes, le rapport de gestion, poser des questions écrites.</li><li><b>Droit de céder</b> ses titres, selon les règles prévues.</li></ul><p>En échange, l’associé contribue aux pertes, à hauteur de son apport dans les sociétés à responsabilité limitée.</p>",
            },
            {
              title: "Les deux types de décisions",
              body:
                "<ul><li><b>Décisions ordinaires</b> : la gestion courante de l’année. Approuver les comptes, décider de la distribution des bénéfices, nommer le dirigeant. Les comptes doivent être approuvés dans les <b>6 mois</b> après la clôture de l’exercice.</li><li><b>Décisions extraordinaires</b> : tout ce qui modifie les <b>statuts</b>. Changer l’objet, augmenter le capital, transférer le siège, transformer la société.</li></ul><p>En SARL (créée après août 2005), en principe : décisions ordinaires à <b>plus de la moitié des parts</b>, modifications des statuts aux <b>deux tiers</b> des parts des associés présents ou représentés. En SAS, ce sont les <b>statuts</b> qui fixent les majorités.</p>",
            },
            {
              title: "La minorité de blocage",
              body:
                "<p>En SARL, si les modifications de statuts exigent les deux tiers, un associé qui détient <b>plus d’un tiers</b> des parts peut bloquer ces décisions. C’est la <b>minorité de blocage</b>.</p><p>À l’inverse, à 50/50, aucune décision ordinaire ne passe si les deux associés sont en désaccord : risque de <b>blocage total</b>.</p>",
              example: "Deux associés à 50/50 se fâchent : impossible d’approuver les comptes, de nommer un nouveau gérant, de distribuer des dividendes. C’est l’une des causes les plus fréquentes de conflits devant le tribunal de commerce.",
            },
            {
              title: "Le pacte d’associés",
              body:
                "<p>Un contrat confidentiel signé entre associés, en plus des statuts. Il prévoit ce que les statuts ne disent pas, ou pas publiquement :</p><ul><li><b>Préemption</b> : priorité pour racheter les titres d’un associé qui vend.</li><li><b>Inaliénabilité</b> : interdiction de vendre pendant une durée limitée.</li><li><b>Bad leaver / good leaver</b> : prix de rachat selon les circonstances du départ.</li><li><b>Sortie conjointe</b> (tag-along) et <b>sortie forcée</b> (drag-along).</li><li>Règles de résolution des blocages.</li></ul>",
            },
            {
              title: "Quitter la société : la cession",
              body:
                "<ul><li><b>SARL</b> : vendre ses parts à un <b>tiers</b> exige l’<b>agrément</b> de la majorité des associés représentant au moins la moitié des parts (art. L. 223-14 C. com.). Entre associés, la cession est en principe libre, sauf clause contraire.</li><li><b>SAS</b> : les actions sont librement cessibles, sauf <b>clause d’agrément</b> ou de préemption prévue dans les statuts.</li></ul><p>Sans acheteur et sans clause de sortie, un associé minoritaire peut se retrouver coincé : d’où l’intérêt du pacte.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Ordinaire ou extraordinaire ?",
          instruction: "Classe chaque décision.",
          categories: ["Décision ordinaire", "Décision extraordinaire"],
          items: [
            { text: "Approuver les comptes de l’exercice", cat: 0, why: "Gestion annuelle courante." },
            { text: "Transformer la SARL en SAS", cat: 1, why: "Changement de forme = modification des statuts." },
            { text: "Verser un dividende de 20 000 €", cat: 0, why: "L’affectation du résultat est une décision ordinaire." },
            { text: "Augmenter le capital pour accueillir un nouvel associé", cat: 1, why: "Le capital figure dans les statuts." },
            { text: "Ajouter la vente en gros à l’objet social", cat: 1, why: "L’objet social est inscrit dans les statuts." },
            { text: "Nommer un nouveau gérant non désigné dans les statuts", cat: 0, why: "La nomination d’un gérant hors statuts est une décision ordinaire en SARL." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Approbation des comptes", back: "Dans les 6 mois suivant la clôture de l’exercice, en décision ordinaire." },
            { front: "Décision extraordinaire", back: "Toute modification des statuts : capital, objet, siège, forme…" },
            { front: "Minorité de blocage (SARL)", back: "Plus d’un tiers des parts : permet de bloquer les modifications de statuts votées aux deux tiers." },
            { front: "Pacte d’associés", back: "Contrat confidentiel entre associés : préemption, inaliénabilité, leaver, sorties conjointes…" },
            { front: "Agrément", back: "Accord des associés nécessaire pour faire entrer un tiers. Obligatoire en SARL, statutaire en SAS." },
            { front: "Préemption", back: "Droit d’être prioritaire pour racheter les titres d’un associé qui vend." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ta SARL clôture son exercice au 31 décembre. Avant quelle date les comptes doivent-ils être approuvés ?", options: ["31 mars", "30 juin", "31 décembre suivant"], answer: 1, explain: "Dans les 6 mois après la clôture." },
            { q: "Dans une SARL à trois associés (40 %, 35 %, 25 %), l’associé à 35 % peut-il bloquer une augmentation de capital ?", options: ["Oui, il détient plus d’un tiers", "Non, il est minoritaire", "Seulement avec l’associé à 25 %"], answer: 0, explain: "Avec plus d’un tiers des parts, il empêche d’atteindre les deux tiers requis." },
            { q: "En SAS, qui fixe les règles de majorité des assemblées ?", options: ["La loi, comme en SARL", "Les statuts", "Le tribunal"], answer: 1, explain: "C’est la grande liberté de la SAS : les statuts organisent les décisions collectives." },
            { q: "Un associé de SARL veut vendre ses parts à son cousin, extérieur à la société. Il lui faut…", options: ["rien, la vente est libre", "l’agrément des associés", "l’autorisation du tribunal"], answer: 1, explain: "Cession à un tiers en SARL : agrément obligatoire (art. L. 223-14 C. com.)." },
          ],
        },
        {
          type: "case",
          title: "Le 50/50 qui coince",
          story:
            "Sofia et Karim ont créé une SARL à 50/50. Trois ans après, ils ne s’entendent plus : Karim refuse d’approuver les comptes et toute distribution de dividendes. Aucun pacte n’a été signé, les statuts sont un modèle standard.",
          question: "Quelle leçon tirer de cette situation ?",
          options: [
            "Sofia peut décider seule puisqu’elle est gérante",
            "À 50/50, aucune décision ne passe en cas de désaccord : il fallait prévoir un mécanisme de sortie ou de déblocage dans les statuts ou un pacte",
            "Le tribunal donnera automatiquement raison à la gérante",
          ],
          answer: 1,
          explain:
            "Sans majorité, la société est paralysée. Les solutions existent après coup (mandataire désigné par le tribunal, rachat, dissolution pour mésentente), mais elles sont longues et coûteuses. Un pacte prévoyant une clause de rachat ou de déblocage aurait évité l’impasse.",
        },
        {
          type: "fiche",
          title: "Les associés",
          points: [
            "Droits : <b>dividendes</b>, <b>vote</b>, <b>information</b>, <b>cession</b>.",
            "<b>Ordinaire</b> = gestion de l’année (comptes sous 6 mois). <b>Extraordinaire</b> = modification des statuts.",
            "SARL : plus de la moitié des parts (ordinaire), deux tiers (extraordinaire) → <b>minorité de blocage</b> au-delà d’un tiers.",
            "SAS : les <b>statuts</b> fixent les majorités.",
            "<b>Pacte d’associés</b> : préemption, inaliénabilité, leaver, sorties, déblocage.",
            "Cession à un tiers : <b>agrément</b> obligatoire en SARL, selon les statuts en SAS.",
          ],
          retenir: "On rédige le pacte quand tout va bien, pour le jour où tout ira mal.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Le dirigeant et ses responsabilités",
      minutes: 19,
      objectives: ["Savoir ce que peut faire le dirigeant", "Éviter les fautes qui engagent sa responsabilité, dont l’abus de biens sociaux"],
      steps: [
        {
          type: "lesson",
          title: "Le dirigeant",
          slides: [
            {
              title: "Ses pouvoirs",
              body:
                "<p>Le gérant de SARL ou le président de SAS <b>représente la société</b> : il signe les contrats, embauche, agit en justice en son nom.</p><p>Face aux tiers, il a les pouvoirs les plus étendus, dans la limite de l’<b>objet social</b>. Les limitations prévues dans les statuts (« le président ne peut pas emprunter plus de 50 000 € sans accord des associés ») ne sont en principe <b>pas opposables aux tiers</b> : la société reste engagée, mais le dirigeant devra rendre des comptes aux associés.</p>",
            },
            {
              title: "Nomination et révocation",
              body:
                "<ul><li><b>SARL</b> : le gérant est nommé dans les statuts ou par décision des associés. Il peut être révoqué par les associés représentant plus de la moitié des parts. Sans <b>juste motif</b>, la révocation reste valable, mais la société peut devoir lui verser des <b>dommages et intérêts</b>.</li><li><b>SAS</b> : les <b>statuts</b> fixent les règles de nomination et de révocation du président.</li></ul><p>Un dirigeant n’est pas un salarié : il n’a pas de contrat de travail, ni d’indemnités de licenciement ni de chômage, sauf assurance privée ou contrat de travail distinct pour des fonctions techniques réelles.</p>",
            },
            {
              title: "La responsabilité civile",
              body:
                "<p>Le dirigeant peut devoir réparer, avec son propre argent, le dommage causé par :</p><ul><li>une <b>violation de la loi</b> ;</li><li>une <b>violation des statuts</b> ;</li><li>une <b>faute de gestion</b> (prendre un risque déraisonnable, ne pas payer les cotisations, négliger une assurance obligatoire…).</li></ul><p>Envers les <b>tiers</b> (clients, fournisseurs), il n’est responsable personnellement que pour une faute <b>séparable de ses fonctions</b> : une faute intentionnelle, d’une particulière gravité, incompatible avec l’exercice normal de ses fonctions.</p>",
            },
            {
              title: "L’abus de biens sociaux",
              body:
                "<p>C’est l’infraction pénale la plus connue du droit des sociétés : utiliser les biens ou le crédit de la société <b>contre son intérêt</b>, à des fins <b>personnelles</b>, en le sachant.</p><p>Peine : <b>5 ans</b> d’emprisonnement et <b>375 000 €</b> d’amende (art. L. 241-3 pour la SARL, L. 242-6 pour la SA, applicable à la SAS).</p><p>Attention : il s’applique même dans une société à associé unique. L’argent de ta SASU <b>n’est pas ton argent</b>.</p>",
              example: "Payer ses vacances, la voiture de son conjoint ou ses courses avec la carte bancaire de la société, sans les rembourser, c’est un abus de biens sociaux.",
            },
            {
              title: "Les conventions surveillées",
              body:
                "<ul><li><b>Conventions réglementées</b> : un contrat entre la société et son dirigeant ou un associé (bail, prêt, prestation) doit être approuvé par les associés.</li><li><b>Conventions interdites</b> : un dirigeant ou un associé personne physique ne peut pas emprunter à la société, se faire consentir un découvert ou faire garantir ses dettes personnelles par elle (SARL et SAS).</li></ul><p>Le compte courant d’associé « débiteur » (tu dois de l’argent à ta société) est donc à proscrire.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Permis ou risqué ?",
          instruction: "Le président d’une SASU fait les opérations suivantes. Classe-les.",
          categories: ["Normal", "Abus de biens sociaux probable"],
          items: [
            { text: "Payer avec la carte de la société un déplacement chez un fournisseur", cat: 0, why: "Dépense dans l’intérêt de la société." },
            { text: "Régler la facture d’électricité de sa résidence secondaire avec le compte de la société", cat: 1, why: "Dépense personnelle supportée par la société." },
            { text: "Se verser une rémunération votée par une décision de l’associé unique", cat: 0, why: "Rémunération décidée régulièrement et raisonnable." },
            { text: "Louer à la société un appartement qui sert de logement à sa sœur", cat: 1, why: "La société paie un bien qui ne sert qu’à l’intérêt personnel du dirigeant." },
            { text: "Acheter un ordinateur utilisé pour le travail de la société", cat: 0, why: "Bien utile à l’activité." },
            { text: "Virer 15 000 € de la société sur son compte personnel « en attendant », sans écriture ni décision", cat: 1, why: "Prélèvement personnel sans contrepartie : c’est l’exemple type." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Pouvoirs du dirigeant face aux tiers", back: "Les plus étendus dans la limite de l’objet social ; les limitations statutaires ne sont en principe pas opposables aux tiers." },
            { front: "Révocation sans juste motif (SARL)", back: "Valable, mais ouvre droit à des dommages et intérêts pour le gérant." },
            { front: "Faute de gestion", back: "Décision ou négligence qui cause un dommage à la société : engage la responsabilité civile du dirigeant." },
            { front: "Faute séparable des fonctions", back: "Faute intentionnelle d’une particulière gravité : seule hypothèse de responsabilité personnelle envers les tiers." },
            { front: "Abus de biens sociaux", back: "Usage des biens de la société contre son intérêt, à des fins personnelles. 5 ans et 375 000 €." },
            { front: "Convention interdite", back: "Prêt, découvert ou garantie accordés par la société à son dirigeant ou associé personne physique." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Les statuts limitent les achats du président à 30 000 €. Il signe une commande de 80 000 € avec un fournisseur qui l’ignore. La société est-elle engagée ?", options: ["Non, le président a dépassé ses pouvoirs", "Oui, la limitation n’est pas opposable au fournisseur", "Seulement à hauteur de 30 000 €"], answer: 1, explain: "La société est engagée ; les associés pourront reprocher la faute au président." },
            { q: "Un associé unique de SASU peut-il commettre un abus de biens sociaux ?", options: ["Non, c’est sa propre société", "Oui, le patrimoine de la société reste distinct du sien"], answer: 1, explain: "La société est une autre personne : son argent n’est pas celui de son associé." },
            { q: "Le gérant d’une SARL peut-il emprunter 10 000 € à sa société pour acheter une voiture personnelle ?", options: ["Oui, avec un contrat de prêt", "Non, c’est une convention interdite", "Oui, si les associés votent"], answer: 1, explain: "Les prêts au gérant personne physique sont interdits, même avec un vote." },
            { q: "Un gérant de SARL révoqué sans juste motif peut…", options: ["être réintégré de force", "obtenir des dommages et intérêts", "rien, la révocation est libre"], answer: 1, explain: "La révocation produit ses effets, mais elle peut être indemnisée." },
          ],
        },
        {
          type: "case",
          title: "La carte bleue de la SASU",
          story:
            "Malik dirige seul sa SASU de négoce. Pour aller plus vite, il utilise la carte de la société pour tout : stock, publicité, mais aussi courses, restaurants en famille et deux week-ends à Barcelone. « C’est ma société, c’est mon argent », dit-il. Lors d’un contrôle fiscal, l’administration relève 18 000 € de dépenses personnelles.",
          question: "Quel est le risque principal ?",
          options: [
            "Aucun : en SASU, l’associé unique dispose librement des fonds",
            "Un redressement fiscal et des poursuites pénales pour abus de biens sociaux",
            "Une simple amende de 750 €",
          ],
          answer: 1,
          explain:
            "Les dépenses personnelles payées par la société sont réintégrées fiscalement et peuvent constituer un abus de biens sociaux (5 ans, 375 000 €). La bonne pratique : se verser une rémunération ou des dividendes, puis payer ses dépenses perso avec son compte perso.",
        },
        {
          type: "fiche",
          title: "Le dirigeant",
          points: [
            "Le dirigeant <b>représente</b> la société ; les limites statutaires ne sont en principe pas opposables aux tiers.",
            "SARL : révocation à plus de la moitié des parts ; sans juste motif → dommages et intérêts. SAS : selon les statuts.",
            "Responsabilité civile : violation de la loi, des statuts, <b>faute de gestion</b>. Envers les tiers : seulement la faute <b>séparable</b>.",
            "<b>Abus de biens sociaux</b> : 5 ans et 375 000 €, même en société unipersonnelle.",
            "<b>Conventions réglementées</b> à faire approuver ; <b>prêts au dirigeant interdits</b>.",
          ],
          retenir: "L’argent de ta société n’est pas ton argent.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "L’argent de la société",
      minutes: 20,
      objectives: ["Comprendre l’impôt sur les sociétés et les dividendes", "Choisir entre salaire et dividendes"],
      steps: [
        {
          type: "lesson",
          title: "L’argent de la société",
          slides: [
            {
              title: "Du chiffre d’affaires au bénéfice",
              body:
                "<ol><li><b>Chiffre d’affaires</b> : tout ce que la société facture.</li><li>Moins les <b>charges</b> : achats, loyers, salaires (dont celui du dirigeant), publicité, amortissements…</li><li>= le <b>bénéfice</b> avant impôt.</li><li>Moins l’<b>impôt sur les sociétés</b> (IS).</li><li>= le <b>résultat net</b>, que les associés peuvent distribuer ou laisser dans la société.</li></ol>",
            },
            {
              title: "L’impôt sur les sociétés en 2026",
              body:
                "<div class='tiers'><div><b>15 %</b><span>jusqu’à 42 500 € de bénéfice</span></div><div><b>25 %</b><span>au-delà</span></div><div><b>PME</b><span>conditions du taux réduit</span></div></div><p>Conditions du taux réduit : chiffre d’affaires de moins de <b>10 M€</b>, capital <b>entièrement libéré</b>, et détenu à <b>75 % au moins par des personnes physiques</b> (directement ou via des sociétés qui remplissent elles-mêmes ces conditions).</p><p>Exemple : 80 000 € de bénéfice → 6 375 € (15 % de 42 500) + 9 375 € (25 % du reste) = <b>15 750 €</b> d’IS.</p>",
            },
            {
              title: "Les dividendes",
              body:
                "<ul><li>On ne distribue que du <b>bénéfice distribuable</b> (bénéfice de l’année + réserves, moins les pertes antérieures). Distribuer de l’argent qui n’existe pas = <b>dividendes fictifs</b>, une infraction pénale.</li><li>D’abord, la <b>réserve légale</b> : 5 % du bénéfice chaque année, jusqu’à atteindre 10 % du capital.</li><li>Fiscalité 2026 : <b>prélèvement forfaitaire unique de 31,4 %</b> (12,8 % d’impôt + 18,6 % de prélèvements sociaux, en hausse depuis le 1er janvier 2026), ou option pour le barème de l’impôt sur le revenu avec un abattement de 40 %.</li><li>Gérant majoritaire de SARL : la part des dividendes au-delà de <b>10 % du capital</b> (plus primes et comptes courants) supporte en plus des <b>cotisations sociales</b>.</li></ul>",
            },
            {
              title: "Salaire ou dividendes ?",
              body:
                "<table class='t'><tr><th></th><th>Rémunération</th><th>Dividendes</th></tr><tr><td>Pour la société</td><td>Charge déductible : réduit l’IS</td><td>Payés après l’IS</td></tr><tr><td>Charges sociales</td><td>Oui : environ 45 % du net pour un TNS, nettement plus pour un président de SAS</td><td>Non en SAS ; oui au-delà de 10 % pour le gérant majoritaire de SARL</td></tr><tr><td>Droits sociaux (retraite, maladie)</td><td>Oui</td><td>Non</td></tr><tr><td>Régularité</td><td>Mensuelle</td><td>Une fois par an après l’approbation des comptes</td></tr></table><p>La bonne répartition dépend de ton bénéfice, de ton statut et de tes besoins de protection sociale : c’est le sujet n°1 à travailler avec ton expert-comptable.</p>",
            },
            {
              title: "Le compte courant d’associé",
              body:
                "<p>Quand tu <b>prêtes</b> de l’argent à ta société (au-delà de ton apport en capital), il est inscrit dans ton <b>compte courant d’associé</b>.</p><ul><li>C’est une <b>dette</b> de la société envers toi : tu peux en principe la récupérer quand tu veux, sauf blocage convenu.</li><li>Il peut être rémunéré par des intérêts, dans des limites fiscales.</li><li>Il ne doit jamais devenir <b>débiteur</b> (tu devrais de l’argent à la société) : c’est une convention interdite, et un risque d’abus de biens sociaux.</li></ul>",
              example: "Pour financer un gros stock, tu prêtes 15 000 € à ta SAS. Dans un an, la société pourra te les rembourser sans impôt pour toi : c’est un remboursement, pas un revenu.",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Taux réduit d’IS", back: "15 % jusqu’à 42 500 € de bénéfice, pour les PME (CA < 10 M€, capital libéré, détenu à 75 % par des personnes physiques)." },
            { front: "Taux normal d’IS", back: "25 % au-delà de 42 500 €." },
            { front: "Flat tax 2026 sur dividendes", back: "31,4 % : 12,8 % d’impôt + 18,6 % de prélèvements sociaux." },
            { front: "Réserve légale", back: "5 % du bénéfice chaque année jusqu’à 10 % du capital." },
            { front: "Dividendes du gérant majoritaire de SARL", back: "Au-delà de 10 % du capital (+ primes + comptes courants) : soumis aux cotisations sociales." },
            { front: "Compte courant d’associé", back: "Somme prêtée par un associé à sa société, remboursable : une dette de la société." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ta SAS (PME éligible) fait 30 000 € de bénéfice. Combien d’IS ?", options: ["4 500 €", "7 500 €", "9 000 €"], answer: 0, explain: "Tout le bénéfice est sous 42 500 € : 15 % × 30 000 = 4 500 €." },
            { q: "Tu reçois 10 000 € de dividendes de ta SASU en 2026, à la flat tax. Combien d’impôts et prélèvements ?", options: ["3 000 €", "3 140 €", "4 500 €"], answer: 1, explain: "31,4 % depuis 2026, contre 30 % auparavant." },
            { q: "Ta société a eu 20 000 € de pertes l’an dernier et 15 000 € de bénéfice cette année. Peux-tu distribuer un dividende ?", options: ["Oui, 15 000 €", "Non, le bénéfice ne couvre pas les pertes antérieures (sauf réserves suffisantes)", "Oui, la moitié"], answer: 1, explain: "Le bénéfice distribuable tient compte des pertes reportées : sinon, c’est un dividende fictif." },
            { q: "Pourquoi un salaire de dirigeant réduit-il l’impôt de la société ?", options: ["Parce qu’il est déductible du bénéfice", "Parce qu’il est exonéré de cotisations", "Il ne le réduit pas"], answer: 0, explain: "La rémunération est une charge : elle diminue le bénéfice imposable à l’IS." },
            { q: "Gérant majoritaire d’une SARL au capital de 5 000 €, tu te verses 20 000 € de dividendes. Quelle part supporte des cotisations sociales ?", options: ["Aucune", "Ce qui dépasse 500 €, environ 19 500 €", "Tout"], answer: 1, explain: "Seule la part au-delà de 10 % du capital (500 €) supporte les cotisations, hors primes et comptes courants." },
          ],
        },
        {
          type: "case",
          title: "Se payer en dividendes",
          story:
            "Théo dirige une SARL de travaux dont il détient 80 % des parts, au capital de 1 000 €. Pour « éviter les charges », il ne se verse aucun salaire et prévoit 60 000 € de dividendes. Il pense ainsi ne payer que la flat tax.",
          question: "Son raisonnement est-il bon ?",
          options: [
            "Oui, les dividendes ne supportent jamais de cotisations",
            "Non : gérant majoritaire de SARL, ses dividendes au-delà de 100 € (10 % du capital) supportent des cotisations sociales",
            "Oui, mais seulement s’il est seul associé",
          ],
          answer: 1,
          explain:
            "Le piège classique de la SARL avec un petit capital : presque tous les dividendes du gérant majoritaire supportent des cotisations sociales en plus des prélèvements. En SAS, la stratégie « 100 % dividendes » fonctionne différemment, mais sans aucun droit à la retraite.",
        },
        {
          type: "fiche",
          title: "L’argent de la société",
          points: [
            "Chiffre d’affaires − charges = bénéfice − <b>IS</b> = résultat net.",
            "IS 2026 : <b>15 %</b> jusqu’à 42 500 € (PME), <b>25 %</b> au-delà.",
            "Dividendes : seulement sur le <b>bénéfice distribuable</b> ; <b>réserve légale</b> de 5 % jusqu’à 10 % du capital.",
            "Flat tax 2026 : <b>31,4 %</b>. Gérant majoritaire de SARL : cotisations au-delà de <b>10 % du capital</b>.",
            "Rémunération = charge déductible + droits sociaux ; dividendes = pas de droits sociaux.",
            "<b>Compte courant d’associé</b> : un prêt remboursable à ta société, jamais débiteur.",
          ],
          retenir: "Salaire pour être protégé, dividendes pour être efficace : le dosage se calcule.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Faire évoluer et vendre sa société",
      minutes: 18,
      objectives: ["Connaître les grandes opérations sur une société", "Distinguer vente des titres et vente du fonds de commerce"],
      steps: [
        {
          type: "lesson",
          title: "Faire évoluer sa société",
          slides: [
            {
              title: "Modifier les statuts",
              body:
                "<p>Toute modification des statuts suit le même chemin :</p><ol><li>une <b>décision extraordinaire</b> des associés (séance 4) ;</li><li>la mise à jour des statuts ;</li><li>une <b>annonce légale</b> ;</li><li>la déclaration sur le <b>guichet unique</b> de l’INPI ;</li><li>un nouveau <b>Kbis</b>.</li></ol><p>Opérations fréquentes : transfert de siège, changement de nom, ajout d’activité à l’objet social, changement de dirigeant.</p>",
            },
            {
              title: "Faire entrer un associé",
              body:
                "<p>Deux techniques :</p><ul><li><b>Cession</b> : un associé existant lui vend ses titres. L’argent va <b>au vendeur</b>, pas à la société.</li><li><b>Augmentation de capital</b> : la société émet de nouveaux titres. L’argent va <b>dans la société</b>, et la part de chaque ancien associé est diluée.</li></ul><p>En SAS, les associés ont en principe un <b>droit préférentiel de souscription</b> lors d’une augmentation de capital en numéraire : ils sont prioritaires pour souscrire et éviter la dilution.</p>",
            },
            {
              title: "Changer de forme",
              body:
                "<p>On peut <b>transformer</b> une société sans la recréer : même SIREN, mêmes contrats, mêmes dettes. Seule la forme change.</p><ul><li>SARL → SAS : décidée à l’<b>unanimité</b> des associés (art. L. 223-43 C. com.).</li><li>Un rapport d’un <b>commissaire à la transformation</b> est en principe nécessaire, sauf exceptions.</li></ul><p>Raisons classiques : préparer une levée de fonds, changer de statut social du dirigeant, alléger les droits sur une future vente.</p>",
            },
            {
              title: "Vendre : titres ou fonds de commerce ?",
              body:
                "<table class='t'><tr><th></th><th>Vente des titres</th><th>Vente du fonds de commerce</th></tr><tr><td>Ce qui est vendu</td><td>La société entière (parts ou actions)</td><td>L’activité : clientèle, nom, droit au bail, matériel</td></tr><tr><td>Le vendeur</td><td>Les associés</td><td>La société</td></tr><tr><td>Les dettes</td><td>Restent dans la société, donc reprises par l’acheteur</td><td>Restent au vendeur</td></tr><tr><td>Droits d’enregistrement</td><td>0,1 % (actions SAS) ; 3 % après abattement (parts SARL)</td><td>Barème progressif, plus élevé</td></tr></table><p>Lors d’une vente de titres, l’acheteur exige une <b>garantie d’actif et de passif</b> : le vendeur l’indemnise si une dette cachée apparaît après la vente.</p>",
            },
            {
              title: "Informer les salariés avant la vente",
              body:
                "<p>Dans les sociétés de <b>moins de 50 salariés</b>, le vendeur doit informer les salariés avant de céder le fonds de commerce ou la majorité des titres, pour leur permettre de présenter une offre (ils n’ont pas de priorité d’achat).</p><p>La <b>loi de simplification du 26 mai 2026</b> a réduit ce délai à <b>1 mois</b> avant la vente (contre 2 mois), pour les ventes conclues depuis le <b>27 juillet 2026</b>. L’amende maximale en cas d’oubli passe de 2 % à 0,5 % du prix.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Cession ou augmentation de capital ?",
          instruction: "Dans chaque situation, l’argent va-t-il au vendeur ou à la société ?",
          categories: ["Cession de titres (argent au vendeur)", "Augmentation de capital (argent à la société)"],
          items: [
            { text: "Un investisseur apporte 100 000 € pour financer le développement en échange de 20 % des actions nouvelles", cat: 1, why: "Nouveaux titres émis : l’argent finance la société." },
            { text: "Un associé fondateur part à la retraite et revend ses parts à un salarié", cat: 0, why: "Titres existants vendus : le prix revient au fondateur." },
            { text: "La société a besoin de trésorerie et ses associés remettent de l’argent contre de nouvelles actions", cat: 1, why: "C’est une augmentation de capital en numéraire." },
            { text: "Tu rachètes les 50 % de ton associé pour devenir seul propriétaire", cat: 0, why: "Cession entre associés : l’argent va à ton associé." },
            { text: "Un business angel entre au capital pour financer un nouvel entrepôt", cat: 1, why: "L’argent doit entrer dans la société : augmentation de capital." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Augmentation de capital", back: "Émission de nouveaux titres : l’argent entre dans la société, les anciens associés sont dilués." },
            { front: "Droit préférentiel de souscription", back: "Priorité des associés pour souscrire aux nouvelles actions en numéraire, afin d’éviter la dilution." },
            { front: "Transformation", back: "Changement de forme sans création d’une nouvelle personne morale. SARL → SAS : unanimité." },
            { front: "Fonds de commerce", back: "Ensemble des éléments de l’activité : clientèle, nom commercial, droit au bail, matériel." },
            { front: "Garantie d’actif et de passif", back: "Engagement du vendeur d’indemniser l’acheteur si une dette antérieure à la vente apparaît." },
            { front: "Information des salariés (moins de 50)", back: "Au plus tard 1 mois avant la vente, depuis les ventes conclues à partir du 27 juillet 2026." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu vends 100 % des actions de ta SAS pour 200 000 €. Droits d’enregistrement ?", options: ["200 €", "6 000 €", "10 000 €"], answer: 0, explain: "0,1 % pour les actions de SAS." },
            { q: "Tu achètes une société par la vente de ses titres. Une dette fiscale ancienne apparaît après l’achat. Qui la paie ?", options: ["Le vendeur, automatiquement", "La société, donc indirectement toi, sauf garantie d’actif et de passif", "Personne, elle est effacée par la vente"], answer: 1, explain: "Les dettes restent dans la société : d’où l’importance de la garantie de passif." },
            { q: "Transformer une SARL en SAS nécessite…", options: ["la majorité simple", "les deux tiers des parts", "l’unanimité des associés"], answer: 2, explain: "Art. L. 223-43 du Code de commerce." },
            { q: "Ta SARL de 12 salariés va vendre son fonds de commerce en novembre 2026. Quand faut-il informer les salariés au plus tard ?", options: ["2 mois avant la vente", "1 mois avant la vente", "Aucune obligation"], answer: 1, explain: "Depuis la loi du 26 mai 2026, le délai est d’un mois pour les ventes conclues depuis le 27 juillet 2026." },
          ],
        },
        {
          type: "case",
          title: "Racheter la société ou le fonds ?",
          story:
            "Nina veut reprendre un salon de coiffure exploité par une SARL. L’expert-comptable du vendeur lui signale un litige en cours avec l’URSSAF et un ancien salarié aux prud’hommes. Le vendeur propose de lui céder <b>les parts de la SARL</b>.",
          question: "Quelle est l’option la plus prudente pour Nina ?",
          options: [
            "Acheter les parts sans condition : c’est plus simple",
            "Acheter le fonds de commerce plutôt que les parts, ou exiger une solide garantie d’actif et de passif",
            "Attendre que la SARL soit dissoute pour récupérer la clientèle gratuitement",
          ],
          answer: 1,
          explain:
            "En achetant les parts, Nina reprendrait la société avec ses litiges et ses dettes. En achetant le fonds, elle ne reprend que l’activité (les dettes restent au vendeur, même si les contrats de travail suivent). Si elle achète les parts, une garantie de passif bien rédigée est indispensable.",
        },
        {
          type: "fiche",
          title: "Faire évoluer et vendre",
          points: [
            "Modifier les statuts : décision extraordinaire → annonce légale → guichet unique → nouveau Kbis.",
            "<b>Cession</b> : l’argent au vendeur. <b>Augmentation de capital</b> : l’argent à la société, avec dilution.",
            "<b>Transformation</b> : même société, nouvelle forme. SARL → SAS à l’unanimité.",
            "Vente des <b>titres</b> (avec les dettes, garantie de passif) ou du <b>fonds de commerce</b> (sans les dettes).",
            "Droits : <b>0,1 %</b> (actions), <b>3 %</b> après abattement (parts SARL).",
            "Moins de 50 salariés : informer les salariés <b>1 mois</b> avant la vente (loi du 26 mai 2026).",
          ],
          retenir: "Acheter des titres, c’est acheter aussi le passé de la société.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Quand la société va mal",
      minutes: 19,
      objectives: ["Repérer les signaux d’alerte et les obligations légales", "Connaître les procédures de prévention et collectives"],
      steps: [
        {
          type: "lesson",
          title: "Les difficultés",
          slides: [
            {
              title: "Signal n°1 : les capitaux propres fondent",
              body:
                "<p>Les <b>capitaux propres</b>, c’est ce que la société vaut pour ses associés (capital + réserves + résultats). Si les pertes les font passer <b>sous la moitié du capital</b> :</p><ol><li>dans les <b>4 mois</b> après l’approbation des comptes, les associés décident en assemblée extraordinaire s’ils <b>dissolvent</b> ou <b>continuent</b> ;</li><li>la décision est publiée ;</li><li>en cas de poursuite, ils ont jusqu’à la clôture du <b>deuxième exercice</b> suivant pour reconstituer les capitaux propres ;</li><li>sinon, réduction du capital, dans les conditions prévues depuis la réforme de 2023.</li></ol><p>Sans assemblée, tout intéressé peut demander la dissolution au tribunal.</p>",
            },
            {
              title: "Agir tôt : la prévention",
              body:
                "<p>Avant d’être en cessation des paiements, le dirigeant peut demander au président du tribunal de commerce :</p><ul><li>un <b>mandat ad hoc</b> : un professionnel négocie discrètement avec les principaux créanciers ;</li><li>une <b>conciliation</b> : un conciliateur cherche un accord avec les créanciers, pour 4 mois maximum (5 avec prolongation). Possible même jusqu’à 45 jours après la cessation des paiements.</li></ul><p>Ces procédures sont <b>confidentielles</b> : ni les clients ni les fournisseurs ne le savent. Le tribunal propose aussi des entretiens gratuits de prévention.</p>",
            },
            {
              title: "La cessation des paiements",
              body:
                "<p>Une société est en <b>cessation des paiements</b> quand elle ne peut plus payer ses dettes exigibles avec son actif disponible (trésorerie, découvert autorisé).</p><p>Le dirigeant doit la <b>déclarer au tribunal dans les 45 jours</b>, sauf s’il a demandé une conciliation dans ce délai.</p>",
              article: { ref: "Code de commerce, art. L. 631-1", text: "Il est institué une procédure de redressement judiciaire ouverte à tout débiteur […] qui, dans l’impossibilité de faire face au passif exigible avec son actif disponible, est en cessation des paiements." },
            },
            {
              title: "Les procédures collectives",
              body:
                "<table class='t'><tr><th>Procédure</th><th>Quand ?</th><th>Objectif</th></tr><tr><td><b>Sauvegarde</b></td><td>Difficultés sérieuses, <b>avant</b> la cessation des paiements</td><td>Réorganiser, dettes gelées, plan jusqu’à 10 ans</td></tr><tr><td><b>Redressement judiciaire</b></td><td>Cessation des paiements, mais l’entreprise peut être sauvée</td><td>Plan de continuation ou cession</td></tr><tr><td><b>Liquidation judiciaire</b></td><td>Redressement manifestement impossible</td><td>Arrêter l’activité, vendre les actifs, payer les créanciers dans l’ordre</td></tr></table><p>Dès le jugement d’ouverture, les poursuites individuelles des créanciers s’arrêtent, et les dettes antérieures sont gelées.</p>",
            },
            {
              title: "Ce que risque le dirigeant",
              body:
                "<ul><li><b>Responsabilité pour insuffisance d’actif</b> : en liquidation, le tribunal peut obliger le dirigeant à payer tout ou partie des dettes s’il a commis une <b>faute de gestion</b> ayant contribué au trou (une simple négligence ne suffit pas).</li><li><b>Faillite personnelle</b> ou <b>interdiction de gérer</b> jusqu’à 15 ans, notamment pour ne pas avoir déclaré la cessation des paiements dans les 45 jours.</li><li><b>Banqueroute</b> (infraction pénale) : détourner des actifs, tenir une comptabilité fictive… 5 ans et 75 000 €.</li></ul><p>Et les <b>cautions personnelles</b> du dirigeant restent dues.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle procédure ?",
          instruction: "Associe chaque situation à la procédure la plus adaptée.",
          categories: ["Conciliation / mandat ad hoc", "Sauvegarde", "Redressement judiciaire", "Liquidation judiciaire"],
          items: [
            { text: "Un gros client a fait faillite, la trésorerie tient encore 3 mois, tu veux renégocier discrètement avec ta banque", cat: 0, why: "Pas encore de cessation des paiements, besoin de confidentialité." },
            { text: "La société paie encore ses dettes mais anticipe qu’elle ne pourra pas rembourser un gros prêt l’an prochain", cat: 1, why: "Difficultés sérieuses sans cessation des paiements : sauvegarde possible." },
            { text: "La société ne peut plus payer les salaires du mois mais garde un carnet de commandes solide", cat: 2, why: "Cessation des paiements avec des perspectives : redressement." },
            { text: "Plus d’activité, plus de clients, des dettes impossibles à rembourser", cat: 3, why: "Redressement manifestement impossible : liquidation." },
            { text: "Un fournisseur menace d’assigner, la trésorerie est tendue mais tu veux éviter que tes clients l’apprennent", cat: 0, why: "Les procédures amiables sont confidentielles." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Capitaux propres < moitié du capital", back: "AGE dans les 4 mois après l’approbation des comptes : dissoudre ou continuer, puis régulariser." },
            { front: "Mandat ad hoc", back: "Mandataire désigné par le tribunal pour négocier discrètement avec les créanciers." },
            { front: "Conciliation", back: "Négociation confidentielle avec les créanciers, 4 à 5 mois, possible jusqu’à 45 jours après la cessation des paiements." },
            { front: "Cessation des paiements", back: "Impossible de payer le passif exigible avec l’actif disponible. Déclaration sous 45 jours." },
            { front: "Sauvegarde", back: "Procédure collective avant la cessation des paiements, pour réorganiser l’entreprise." },
            { front: "Insuffisance d’actif", back: "En liquidation, le dirigeant fautif peut être condamné à payer une partie des dettes." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Dans quel délai le dirigeant doit-il déclarer la cessation des paiements ?", options: ["15 jours", "45 jours", "6 mois"], answer: 1, explain: "45 jours, sauf demande de conciliation dans ce délai." },
            { q: "Une société en cessation des paiements peut-elle demander une sauvegarde ?", options: ["Oui", "Non, la sauvegarde suppose de ne pas être en cessation des paiements"], answer: 1, explain: "Ce sera un redressement ou une liquidation." },
            { q: "Pourquoi un dirigeant choisirait-il une conciliation plutôt qu’un redressement ?", options: ["Elle est confidentielle", "Elle efface toutes les dettes", "Elle est obligatoire"], answer: 0, explain: "La confidentialité protège la réputation et les relations commerciales." },
            { q: "En liquidation, le dirigeant peut-il être condamné à payer des dettes de la société ?", options: ["Jamais, la responsabilité est limitée", "Oui, en cas de faute de gestion ayant contribué à l’insuffisance d’actif", "Toujours, quelle que soit sa gestion"], answer: 1, explain: "C’est l’action en responsabilité pour insuffisance d’actif ; la simple négligence ne suffit pas." },
          ],
        },
        {
          type: "case",
          title: "Attendre que ça passe",
          story:
            "Depuis février, la SAS de Lucas ne paie plus l’URSSAF ni plusieurs fournisseurs, faute de trésorerie. Il continue à commander du stock à crédit en espérant un gros contrat. En septembre, un fournisseur assigne la société, qui est placée en liquidation. Le liquidateur fixe la cessation des paiements en février.",
          question: "Que risque Lucas personnellement ?",
          options: [
            "Rien : il était président d’une SAS à responsabilité limitée",
            "Une interdiction de gérer pour défaut de déclaration dans les 45 jours, et une condamnation à payer une partie des dettes pour faute de gestion",
            "Seulement la perte de son apport en capital",
          ],
          answer: 1,
          explain:
            "Sept mois sans déclarer la cessation des paiements, en aggravant le passif : c’est le scénario type des sanctions personnelles. S’il avait demandé une conciliation ou un redressement en février, il aurait protégé la société et lui-même.",
        },
        {
          type: "fiche",
          title: "Quand la société va mal",
          points: [
            "Capitaux propres <b>sous la moitié du capital</b> : AGE dans les <b>4 mois</b>, régularisation avant la fin du 2e exercice.",
            "Prévention <b>confidentielle</b> : <b>mandat ad hoc</b>, <b>conciliation</b>.",
            "<b>Cessation des paiements</b> : passif exigible > actif disponible → déclarer sous <b>45 jours</b>.",
            "<b>Sauvegarde</b> (avant cessation), <b>redressement</b> (sauvable), <b>liquidation</b> (impossible à sauver).",
            "Dirigeant : <b>insuffisance d’actif</b> (faute de gestion), <b>interdiction de gérer</b>, <b>banqueroute</b> ; les cautions restent dues.",
          ],
          retenir: "Le tribunal de commerce aide ceux qui viennent tôt et sanctionne ceux qui attendent.",
        },
      ],
    },
  ],
});
