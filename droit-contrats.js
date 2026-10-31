/* ============================================================
   COURS : Droit des contrats — signer, exécuter, vendre
   Faculté de Droit · 8 séances de 15 à 20 minutes
   Contrats en général + contrats entre pros + vente aux consommateurs.
   Règles vérifiées au 31 octobre 2026 (bouton de rétractation du
   19 juin 2026, facturation électronique, prix de référence…).
   ============================================================ */
AGORA.registerCourse({
  id: "droit-contrats",
  faculty: "droit",
  title: "Droit des contrats — signer, exécuter, vendre",
  subtitle: "Former un contrat solide, le faire respecter, vendre aux pros et aux particuliers",
  color: "#a8432f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour ne plus signer à l’aveugle : comment naît un contrat, ce qui le rend nul, les clauses qui comptent, que faire quand l’autre ne respecte pas sa parole, les règles entre professionnels, la vente en ligne aux consommateurs, les garanties, et les contrats clés de l’entrepreneur.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment naît un contrat",
      minutes: 17,
      objectives: ["Savoir à quel moment on est engagé", "Connaître les conditions de validité d’un contrat"],
      steps: [
        {
          type: "lesson",
          title: "La naissance du contrat",
          slides: [
            {
              title: "Un contrat, c’est quoi ?",
              body:
                "<p>Un accord de volontés entre deux personnes (ou plus) qui crée des <b>obligations</b> : livrer, payer, travailler, ne pas faire concurrence…</p><p>Règle fondamentale : <b>un contrat valable s’impose aux parties comme une loi</b>. Une fois engagé, tu ne peux plus revenir dessus seul, sauf si le contrat ou la loi te le permet.</p>",
              article: { ref: "Code civil, art. 1103", text: "Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits." },
            },
            {
              title: "Offre + acceptation = contrat",
              body:
                "<ul><li>L’<b>offre</b> doit être <b>précise</b> (les éléments essentiels : la chose et le prix) et <b>ferme</b> (montrer la volonté d’être engagé si l’autre accepte).</li><li>L’<b>acceptation</b> doit correspondre à l’offre. Si tu acceptes « mais à 10 % de moins », c’est une <b>contre-offre</b>, pas une acceptation.</li><li>À distance, le contrat est conclu quand l’acceptation <b>parvient</b> à celui qui a fait l’offre.</li></ul><p>Le <b>silence</b> ne vaut pas acceptation, sauf exceptions (relations d’affaires habituelles, usages).</p>",
            },
            {
              title: "Les négociations",
              body:
                "<p>Pendant les <b>pourparlers</b>, chacun est libre de négocier et de ne pas signer. Mais il faut le faire de <b>bonne foi</b>.</p><ul><li>Rompre une négociation est permis.</li><li>La rompre brutalement après avoir fait croire que l’accord était acquis, ou négocier sans intention de conclure, peut engager ta responsabilité.</li><li>Les dommages et intérêts couvrent alors les frais engagés, pas le gain qu’aurait rapporté le contrat.</li></ul>",
            },
            {
              title: "Les conditions de validité",
              body:
                "<p>Trois conditions, sinon le contrat est <b>nul</b> :</p><div class='tiers'><div><b>Consentement</b><span>libre et éclairé (séance 2)</span></div><div><b>Capacité</b><span>majeur, pas sous tutelle…</span></div><div><b>Contenu licite et certain</b><span>objet et prix déterminés ou déterminables, pas illégal</span></div></div>",
              article: { ref: "Code civil, art. 1128", text: "Sont nécessaires à la validité d’un contrat : 1° Le consentement des parties ; 2° Leur capacité de contracter ; 3° Un contenu licite et certain." },
            },
            {
              title: "La forme et la preuve",
              body:
                "<p>Par principe, un contrat se forme <b>par simple accord</b>, même oral : c’est le <b>consensualisme</b>. Certains contrats exigent un écrit (vente immobilière, cautionnement, contrat de travail à durée déterminée…).</p><p>Mais prouver un accord oral est difficile :</p><ul><li>entre particuliers, un <b>écrit est exigé pour prouver</b> un acte de plus de <b>1 500 €</b> ;</li><li>entre commerçants, la preuve est <b>libre</b> (mails, messages, bons de commande).</li></ul><p>En ligne, la commande se forme en deux temps : le client vérifie son panier puis <b>confirme</b> (« double clic »).</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Force obligatoire", back: "Un contrat valable s’impose aux parties comme une loi (art. 1103 C. civ.)." },
            { front: "Offre", back: "Proposition précise (chose et prix) et ferme, qui engage si elle est acceptée." },
            { front: "Contre-offre", back: "Réponse qui modifie l’offre : ce n’est pas une acceptation, c’est une nouvelle offre." },
            { front: "Pourparlers", back: "Négociations libres, mais de bonne foi. La rupture abusive engage la responsabilité." },
            { front: "Conditions de validité", back: "Consentement, capacité, contenu licite et certain (art. 1128 C. civ.)." },
            { front: "Consensualisme", back: "Un contrat se forme par simple accord, sauf exceptions. L’écrit sert surtout de preuve." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un fournisseur t’envoie une offre à 12 € l’unité. Tu réponds : « OK pour 10 € ». Y a-t-il contrat ?", options: ["Oui, à 12 €", "Oui, à 10 €", "Non, c’est une contre-offre"], answer: 2, explain: "Ta réponse modifie le prix : c’est une nouvelle offre que le fournisseur doit accepter." },
            { q: "Un prospect ne répond pas à ton devis envoyé il y a trois semaines. Est-il engagé ?", options: ["Oui, qui ne dit mot consent", "Non, le silence ne vaut pas acceptation"], answer: 1, explain: "Le silence ne vaut pas acceptation, sauf circonstances particulières." },
            { q: "Entre deux sociétés commerciales, une commande passée par WhatsApp peut-elle être prouvée ?", options: ["Non, il faut un contrat signé", "Oui, la preuve est libre entre commerçants"], answer: 1, explain: "En matière commerciale, tous les moyens de preuve sont admis." },
            { q: "Un contrat dont le prix n’est ni fixé ni déterminable est…", options: ["valable, le juge fixera le prix", "nul, le contenu n’est pas certain", "valable entre pros uniquement"], answer: 1, explain: "Le contenu doit être certain : la chose et le prix doivent être déterminés ou déterminables (avec des exceptions pour certains contrats de prestation)." },
          ],
        },
        {
          type: "case",
          title: "La négociation fantôme",
          story:
            "Pendant 4 mois, une enseigne négocie avec Clara pour qu’elle fabrique 10 000 bougies à son nom. L’enseigne lui demande de commander les moules et de réserver un atelier, en lui répétant que « c’est validé, il ne manque que la signature ». Puis elle arrête tout du jour au lendemain, sans explication. Clara a dépensé 8 000 €.",
          question: "Clara peut-elle obtenir quelque chose ?",
          options: [
            "Non : sans contrat signé, l’enseigne était libre",
            "Oui : la rupture brutale et de mauvaise foi des pourparlers peut l’obliger à rembourser les frais engagés",
            "Oui : le contrat est réputé conclu et l’enseigne doit commander les 10 000 bougies",
          ],
          answer: 1,
          explain:
            "Rompre une négociation est permis, mais pas de façon abusive après avoir fait croire à un accord certain. Clara peut obtenir réparation de ses frais (moules, atelier), mais pas le bénéfice qu’elle aurait fait sur la commande.",
        },
        {
          type: "fiche",
          title: "La naissance du contrat",
          points: [
            "Un contrat valable <b>tient lieu de loi</b> entre les parties (art. 1103).",
            "<b>Offre</b> précise et ferme + <b>acceptation</b> identique = contrat. Modifier = <b>contre-offre</b>.",
            "Le <b>silence</b> ne vaut pas acceptation (sauf exceptions).",
            "Pourparlers libres mais de <b>bonne foi</b> : la rupture abusive se paie.",
            "Validité : <b>consentement</b>, <b>capacité</b>, <b>contenu licite et certain</b>.",
            "Preuve : écrit au-delà de <b>1 500 €</b> entre particuliers ; <b>libre</b> entre commerçants.",
          ],
          retenir: "Ce qui est accepté est signé, même sans signature : garde des traces écrites.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Un consentement libre et éclairé",
      minutes: 18,
      objectives: ["Connaître le devoir d’information", "Reconnaître l’erreur, le dol et la violence"],
      steps: [
        {
          type: "lesson",
          title: "Le consentement",
          slides: [
            {
              title: "Le devoir d’information",
              body:
                "<p>Celui qui connaît une information <b>déterminante</b> pour l’autre doit la lui donner, si l’autre l’ignore légitimement ou fait confiance.</p><ul><li>Il porte sur ce qui a un lien direct avec le contenu du contrat ou la qualité des parties.</li><li>Il ne porte <b>pas</b> sur l’estimation de la valeur : tu n’as pas à dire à un vendeur que son objet vaut plus cher qu’il ne le croit.</li><li>On ne peut pas l’écarter par une clause.</li></ul>",
              article: { ref: "Code civil, art. 1112-1", text: "Celle des parties qui connaît une information dont l’importance est déterminante pour le consentement de l’autre doit l’en informer dès lors que, légitimement, cette dernière ignore cette information ou fait confiance à son cocontractant." },
            },
            {
              title: "L’erreur",
              body:
                "<p>Se tromper peut annuler un contrat, mais seulement si l’erreur porte sur :</p><ul><li>les <b>qualités essentielles</b> de la chose (ce qui a décidé les parties) ;</li><li>ou les qualités essentielles de la personne, dans les contrats conclus en considération de la personne.</li></ul><p>L’erreur doit être <b>excusable</b>. Et l’erreur sur la <b>valeur</b> ne compte pas : avoir payé trop cher, ce n’est pas une erreur au sens du droit.</p>",
              example: "Tu achètes un tableau présenté comme un original d’un peintre connu ; c’est une copie. Erreur sur une qualité essentielle : nullité possible.",
            },
            {
              title: "Le dol",
              body:
                "<p>Le <b>dol</b>, c’est une <b>tromperie</b> qui pousse l’autre à signer :</p><ul><li>des <b>manœuvres</b> (faux documents, mise en scène) ;</li><li>des <b>mensonges</b> ;</li><li>ou le <b>silence volontaire</b> sur une information qu’on savait déterminante (la <b>réticence dolosive</b>).</li></ul><p>Avec le dol, même une erreur sur la valeur ou une erreur « inexcusable » permet d’annuler le contrat. Et la victime peut en plus obtenir des <b>dommages et intérêts</b>.</p>",
              article: { ref: "Code civil, art. 1137", text: "Le dol est le fait pour un contractant d’obtenir le consentement de l’autre par des manœuvres ou des mensonges. Constitue également un dol la dissimulation intentionnelle par l’un des contractants d’une information dont il sait le caractère déterminant pour l’autre partie." },
            },
            {
              title: "La violence et l’abus de dépendance",
              body:
                "<ul><li>La <b>violence</b> : signer sous la <b>contrainte</b> d’une menace (physique, morale, financière) qui fait craindre un mal considérable.</li><li>L’<b>abus de dépendance</b> : profiter de l’état de dépendance de l’autre (économique notamment) pour obtenir un engagement qu’il n’aurait pas accepté autrement, avec un <b>avantage manifestement excessif</b>.</li></ul><p>Menacer d’agir en justice n’est pas de la violence, sauf si c’est détourné pour obtenir un avantage excessif.</p>",
              example: "Un gros client qui représente 80 % de ton chiffre d’affaires t’impose de baisser tes prix de 40 % « ou on arrête tout demain » : piste d’abus de dépendance.",
            },
            {
              title: "La sanction : la nullité",
              body:
                "<ul><li>Les vices du consentement (erreur, dol, violence) entraînent la <b>nullité relative</b> : seule la victime peut la demander.</li><li>Délai : <b>5 ans</b> à partir de la découverte de l’erreur ou du dol, ou de la fin de la violence.</li><li>Effet : le contrat est <b>effacé</b> comme s’il n’avait jamais existé. Chacun rend ce qu’il a reçu (les <b>restitutions</b>).</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel vice du consentement ?",
          instruction: "Identifie le vice dans chaque situation.",
          categories: ["Erreur", "Dol", "Violence / abus de dépendance", "Aucun vice"],
          items: [
            { text: "Le vendeur d’un fonds de commerce gonfle volontairement son chiffre d’affaires dans les documents remis à l’acheteur", cat: 1, why: "Faux documents pour tromper : manœuvres dolosives." },
            { text: "Tu achètes un local commercial au prix du marché, puis les prix du quartier baissent de 15 %", cat: 3, why: "Une mauvaise affaire n’est pas un vice : l’erreur sur la valeur ne compte pas." },
            { text: "Un client achète une montre de collection qu’il croit authentique, comme le vendeur ; c’est une réplique", cat: 0, why: "Erreur sur une qualité essentielle, sans tromperie." },
            { text: "Un vendeur de voiture cache sciemment que le véhicule a été accidenté et réparé", cat: 1, why: "Silence volontaire sur une information déterminante : réticence dolosive." },
            { text: "Un fournisseur unique de matière première menace de couper l’approvisionnement si tu ne signes pas un contrat d’exclusivité de 10 ans", cat: 2, why: "Exploitation d’une dépendance pour obtenir un avantage manifestement excessif." },
            { text: "Tu signes un contrat sans lire les conditions générales qui t’ont été remises", cat: 3, why: "Ne pas lire ne rend pas le contrat nul : tu étais en mesure de les connaître." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Devoir d’information", back: "Obligation de révéler une information déterminante que l’autre ignore légitimement. Pas sur la valeur." },
            { front: "Erreur", back: "Sur les qualités essentielles de la chose ou de la personne, et excusable. Jamais sur la seule valeur." },
            { front: "Dol", back: "Tromperie par manœuvres, mensonges ou silence volontaire. Nullité + dommages et intérêts." },
            { front: "Réticence dolosive", back: "Taire volontairement une information qu’on sait déterminante pour l’autre." },
            { front: "Abus de dépendance", back: "Profiter de la dépendance de l’autre pour obtenir un avantage manifestement excessif : une forme de violence." },
            { front: "Nullité relative", back: "Demandée par la victime seule, dans les 5 ans de la découverte. Le contrat est effacé, chacun restitue." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu achètes un stock de 500 sacs 4 000 €, puis tu découvres qu’ils en valaient 2 500. Peux-tu faire annuler pour erreur ?", options: ["Oui, tu as payé trop cher", "Non, l’erreur sur la valeur ne permet pas l’annulation", "Oui, si l’écart dépasse 30 %"], answer: 1, explain: "Sauf dol, une simple erreur sur la valeur n’est pas une cause de nullité." },
            { q: "Même situation, mais le vendeur t’a montré de fausses factures d’achat à 10 € pièce. Cette fois…", options: ["rien ne change", "c’est un dol : nullité possible et dommages et intérêts", "c’est une violence"], answer: 1, explain: "Les fausses factures sont des manœuvres dolosives." },
            { q: "Combien de temps pour agir en nullité pour dol ?", options: ["1 an après la signature", "5 ans à partir de la découverte du dol", "20 ans"], answer: 1, explain: "5 ans, le délai court à partir de la découverte." },
            { q: "Peut-on insérer une clause « l’acheteur renonce à toute information de la part du vendeur » ?", options: ["Oui, la liberté contractuelle le permet", "Non, le devoir d’information ne peut pas être écarté par contrat"], answer: 1, explain: "L’article 1112-1 est d’ordre public." },
          ],
        },
        {
          type: "case",
          title: "Le fonds de commerce enjolivé",
          story:
            "Romain rachète une épicerie fine. Le vendeur lui annonce 300 000 € de chiffre d’affaires annuel et lui montre un tableau qu’il a lui-même préparé. Après la vente, Romain découvre via le comptable que le vrai chiffre était de 180 000 €, et que le vendeur le savait parfaitement.",
          question: "Quels recours pour Romain ?",
          options: [
            "Aucun : il aurait dû vérifier lui-même les comptes",
            "Demander la nullité pour dol et des dommages et intérêts, ou seulement des dommages et intérêts s’il veut garder l’épicerie",
            "Seulement une réduction de prix proportionnelle",
          ],
          answer: 1,
          explain:
            "Le mensonge sur le chiffre d’affaires, déterminant pour l’achat, est un dol. Romain peut faire annuler la vente ou garder le fonds et réclamer réparation. Même une négligence de sa part dans les vérifications n’excuse pas la tromperie.",
        },
        {
          type: "fiche",
          title: "Le consentement",
          points: [
            "<b>Devoir d’information</b> sur ce qui est déterminant, jamais sur la valeur, impossible à écarter.",
            "<b>Erreur</b> : qualités essentielles, excusable, jamais la seule valeur.",
            "<b>Dol</b> : manœuvres, mensonges, silence volontaire → nullité + dommages et intérêts.",
            "<b>Violence</b>, dont l’<b>abus de dépendance</b> économique.",
            "<b>Nullité relative</b> : demandée par la victime dans les <b>5 ans</b> de la découverte ; restitutions.",
          ],
          retenir: "Une mauvaise affaire n’annule rien ; une tromperie, si.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les clauses qui comptent",
      minutes: 18,
      objectives: ["Comprendre les clauses clés d’un contrat d’affaires", "Savoir quand une clause est écartée par le juge"],
      steps: [
        {
          type: "lesson",
          title: "Les clauses",
          slides: [
            {
              title: "La liberté contractuelle et ses limites",
              body:
                "<p>En principe, les parties écrivent ce qu’elles veulent : c’est la <b>liberté contractuelle</b>. Trois grandes limites :</p><ul><li>l’<b>ordre public</b> : on ne déroge pas aux règles impératives (droit du travail, droit de la consommation…) ;</li><li>une clause qui <b>vide l’obligation essentielle</b> de sa substance est réputée non écrite ;</li><li>dans un <b>contrat d’adhésion</b> (non négocié, comme des CGV imposées), une clause qui crée un <b>déséquilibre significatif</b> est réputée non écrite.</li></ul><p>« Réputée non écrite » : la clause disparaît, le reste du contrat continue.</p>",
              article: { ref: "Code civil, art. 1170", text: "Toute clause qui prive de sa substance l’obligation essentielle du débiteur est réputée non écrite." },
            },
            {
              title: "Les clauses sur l’argent",
              body:
                "<ul><li><b>Prix et révision</b> : prix fixe, indexé (sur un indice officiel) ou révisable selon une formule.</li><li><b>Conditions de paiement</b> : échéances, acompte, pénalités de retard.</li><li><b>Clause pénale</b> : montant forfaitaire à payer en cas d’inexécution (« 500 € par jour de retard de livraison »). Le juge peut la <b>réduire</b> si elle est manifestement excessive, ou l’augmenter si elle est dérisoire.</li><li><b>Clause de réserve de propriété</b> : le vendeur reste propriétaire de la marchandise jusqu’au paiement complet. Très utile si l’acheteur fait faillite.</li></ul>",
            },
            {
              title: "Les clauses sur la responsabilité",
              body:
                "<ul><li><b>Clause limitative de responsabilité</b> : plafonne l’indemnisation (« au maximum le montant de la commande »). Valable entre professionnels, sauf faute lourde ou dolosive, ou si elle vide l’obligation essentielle.</li><li><b>Clause d’exclusion</b> : supprime toute responsabilité dans certains cas.</li><li>Face à un <b>consommateur</b>, ce type de clause est en principe <b>abusif</b> et réputé non écrit.</li></ul>",
              example: "Un hébergeur web s’engage à garder ton site en ligne, mais prévoit « aucune responsabilité en cas d’interruption, quelle qu’en soit la durée ». Cette clause vide son obligation essentielle : elle sera écartée.",
            },
            {
              title: "Les clauses sur la durée et la sortie",
              body:
                "<ul><li><b>Durée déterminée</b> : le contrat prend fin à son terme. Attention aux clauses de <b>reconduction tacite</b>.</li><li><b>Durée indéterminée</b> : chacun peut y mettre fin à tout moment, en respectant un <b>préavis raisonnable</b>.</li><li><b>Clause résolutoire</b> : le contrat est automatiquement rompu en cas de manquement précis, après une mise en demeure restée sans effet.</li><li><b>Non-concurrence</b> : valable seulement si elle est limitée dans le <b>temps</b>, dans l’<b>espace</b>, à une <b>activité</b> précise, et proportionnée aux intérêts protégés.</li><li><b>Confidentialité</b> : protège les informations échangées, même après la fin du contrat.</li></ul>",
            },
            {
              title: "Les clauses sur les litiges",
              body:
                "<ul><li><b>Clause d’attribution de juridiction</b> : choisit le tribunal compétent (« tribunal de commerce de Caen »). Valable seulement <b>entre commerçants</b>, et écrite de façon très apparente.</li><li><b>Clause de médiation ou conciliation préalable</b> : oblige à tenter l’amiable avant d’aller au juge. Si on l’ignore, la demande en justice peut être irrecevable.</li><li><b>Loi applicable</b> : utile avec un partenaire étranger (fournisseur chinois, client belge…).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Réputée non écrite", back: "La clause disparaît, mais le reste du contrat continue de s’appliquer." },
            { front: "Clause pénale", back: "Indemnité forfaitaire fixée d’avance en cas d’inexécution ; le juge peut la réduire ou l’augmenter." },
            { front: "Réserve de propriété", back: "Le vendeur reste propriétaire jusqu’au paiement intégral : il peut récupérer la marchandise." },
            { front: "Clause limitative de responsabilité", back: "Plafonne l’indemnisation. Écartée en cas de faute lourde, de dol, ou si elle vide l’obligation essentielle." },
            { front: "Clause de non-concurrence", back: "Valable si limitée dans le temps, l’espace, l’activité, et proportionnée." },
            { front: "Clause d’attribution de juridiction", back: "Choix du tribunal compétent : valable seulement entre commerçants, très apparente." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ton contrat prévoit une pénalité de 50 000 € pour un retard de livraison d’un jour sur une commande de 2 000 €. Le juge peut…", options: ["seulement l’appliquer", "la réduire car manifestement excessive", "annuler tout le contrat"], answer: 1, explain: "Le juge peut modérer une clause pénale manifestement excessive (art. 1231-5 C. civ.)." },
            { q: "Ton client professionnel fait faillite avant de payer ta marchandise. Quelle clause t’aide le plus ?", options: ["La clause de confidentialité", "La clause de réserve de propriété", "La clause d’attribution de juridiction"], answer: 1, explain: "Tu restes propriétaire et peux revendiquer la marchandise encore en stock chez lui." },
            { q: "Une clause de non-concurrence « partout dans le monde, à vie, pour toute activité » est…", options: ["valable si elle est signée", "nulle, car disproportionnée", "valable entre commerçants"], answer: 1, explain: "Elle doit être limitée dans le temps, l’espace et l’activité." },
            { q: "Tes CGV prévoient la compétence du tribunal de Caen. Ton client est un particulier de Lyon. La clause s’applique-t-elle ?", options: ["Oui", "Non, elle ne vaut qu’entre commerçants"], answer: 1, explain: "Face à un non-commerçant, la clause d’attribution de juridiction ne s’applique pas." },
          ],
        },
        {
          type: "case",
          title: "La clause du transporteur",
          story:
            "Nora confie chaque semaine ses colis à un transporteur. Le contrat prévoit : « Le transporteur n’est responsable d’aucune perte ou avarie, pour quelque cause que ce soit. » Un mois, 40 colis disparaissent. Le transporteur invoque la clause.",
          question: "La clause protège-t-elle le transporteur ?",
          options: [
            "Oui : Nora l’a signée, elle s’applique",
            "Non : elle vide de sa substance l’obligation essentielle d’un transporteur, qui est d’acheminer les colis",
            "Oui, mais seulement pour la moitié des colis",
          ],
          answer: 1,
          explain:
            "L’obligation essentielle d’un transporteur est de livrer. Une clause qui supprime toute responsabilité en cas de perte la vide de sa substance : elle est réputée non écrite (art. 1170). Attention, le transport de marchandises a aussi ses propres plafonds légaux d’indemnisation.",
        },
        {
          type: "fiche",
          title: "Les clauses qui comptent",
          points: [
            "Liberté contractuelle, sauf <b>ordre public</b>, <b>obligation essentielle</b> vidée, <b>déséquilibre significatif</b> (contrat d’adhésion).",
            "Argent : prix, révision, <b>clause pénale</b> (modérable), <b>réserve de propriété</b>.",
            "Responsabilité : <b>clauses limitatives</b> valables entre pros, sauf faute lourde, dol, obligation essentielle.",
            "Sortie : durée, <b>préavis</b>, <b>clause résolutoire</b>, <b>non-concurrence</b> limitée et proportionnée.",
            "Litiges : <b>attribution de juridiction</b> entre commerçants, médiation préalable, loi applicable.",
          ],
          retenir: "Une clause trop belle pour celui qui l’a écrite finit souvent écartée par le juge.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Quand l’autre ne respecte pas le contrat",
      minutes: 19,
      objectives: ["Connaître les 5 réactions possibles face à une inexécution", "Comprendre la force majeure et l’imprévision"],
      steps: [
        {
          type: "lesson",
          title: "L’inexécution",
          slides: [
            {
              title: "La boîte à outils de l’article 1217",
              body:
                "<p>Quand ton cocontractant ne fait pas ce qu’il a promis (ou le fait mal), le Code civil te donne <b>5 options</b>, que tu peux combiner si elles sont compatibles :</p><ol><li><b>suspendre</b> ta propre exécution ;</li><li>demander l’<b>exécution forcée</b> ;</li><li>obtenir une <b>réduction du prix</b> ;</li><li>provoquer la <b>résolution</b> (fin) du contrat ;</li><li>demander des <b>dommages et intérêts</b>.</li></ol>",
              article: { ref: "Code civil, art. 1217", text: "La partie envers laquelle l’engagement n’a pas été exécuté, ou l’a été imparfaitement, peut : refuser d’exécuter ou suspendre l’exécution de sa propre obligation ; poursuivre l’exécution forcée en nature de l’obligation ; obtenir une réduction du prix ; provoquer la résolution du contrat ; demander réparation des conséquences de l’inexécution." },
            },
            {
              title: "Suspendre et forcer",
              body:
                "<ul><li><b>Exception d’inexécution</b> : tu peux ne pas exécuter ta part si l’autre n’exécute pas la sienne, à condition que son manquement soit <b>suffisamment grave</b>. Tu peux même suspendre par avance s’il est manifeste qu’il ne s’exécutera pas, en le lui notifiant rapidement.</li><li><b>Exécution forcée en nature</b> : obtenir ce qui a été promis (la livraison, les travaux), après mise en demeure. Sauf si c’est impossible ou si le coût est manifestement disproportionné pour un débiteur de bonne foi.</li><li>Tu peux aussi, après mise en demeure, <b>faire exécuter par un autre</b> à ses frais.</li></ul>",
            },
            {
              title: "Réduire le prix ou rompre",
              body:
                "<ul><li><b>Réduction du prix</b> : en cas d’exécution imparfaite (prestation incomplète, qualité inférieure), après mise en demeure, tu peux accepter la prestation et réduire proportionnellement le prix.</li><li><b>Résolution</b> : mettre fin au contrat. Trois chemins :<ul><li>une <b>clause résolutoire</b> prévue au contrat ;</li><li>une <b>notification</b> unilatérale, à tes risques, en cas d’inexécution suffisamment grave, après mise en demeure (sauf urgence) ;</li><li>une décision du <b>juge</b>.</li></ul></li></ul>",
            },
            {
              title: "La force majeure",
              body:
                "<p>Le débiteur n’est pas responsable si l’inexécution vient d’un événement de <b>force majeure</b> :</p><ul><li>qui <b>échappe à son contrôle</b> ;</li><li>qui ne pouvait pas être <b>raisonnablement prévu</b> lors de la signature ;</li><li>dont les effets ne peuvent pas être <b>évités</b> par des mesures appropriées.</li></ul><p>Empêchement temporaire : l’exécution est suspendue. Empêchement définitif : le contrat est résolu de plein droit. Une simple difficulté financière ou une hausse de prix <b>n’est pas</b> de la force majeure.</p>",
              article: { ref: "Code civil, art. 1218", text: "Il y a force majeure en matière contractuelle lorsqu’un événement échappant au contrôle du débiteur, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêche l’exécution de son obligation par le débiteur." },
            },
            {
              title: "L’imprévision",
              body:
                "<p>Si un <b>changement de circonstances imprévisible</b> rend l’exécution <b>excessivement onéreuse</b> pour une partie qui n’avait pas accepté ce risque (flambée du prix des matières premières, du fret…) :</p><ol><li>elle peut demander une <b>renégociation</b> au cocontractant, en continuant d’exécuter ;</li><li>en cas de refus ou d’échec, les parties peuvent résilier ou demander au juge d’adapter le contrat ;</li><li>à défaut d’accord, le juge peut <b>réviser</b> ou mettre fin au contrat.</li></ol><p>Beaucoup de contrats d’affaires <b>écartent</b> cette règle par une clause : vérifie avant de signer.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle réaction ?",
          instruction: "Choisis la réponse la plus adaptée à chaque problème.",
          categories: ["Suspendre son exécution", "Exécution forcée", "Réduction du prix", "Résolution"],
          items: [
            { text: "Ton fournisseur ne livre plus depuis 2 mois malgré tes relances, et tu as trouvé un autre fournisseur", cat: 3, why: "Inexécution grave et durable : tu veux sortir du contrat." },
            { text: "Un client n’a pas réglé les trois dernières factures ; la prochaine livraison est prévue demain", cat: 0, why: "Exception d’inexécution : tu peux suspendre les livraisons tant qu’il ne paie pas." },
            { text: "Le prestataire a livré ton site web, mais sans le module de paiement prévu ; tu veux garder le reste", cat: 2, why: "Exécution imparfaite que tu acceptes : réduction proportionnelle du prix." },
            { text: "Un artisan a encaissé l’acompte mais refuse de venir installer la vitrine sur mesure déjà fabriquée", cat: 1, why: "Tu veux obtenir la prestation promise : mise en demeure puis exécution forcée." },
            { text: "Ton agence marketing a réalisé 2 campagnes sur les 4 prévues et ne répond plus", cat: 3, why: "Elle a cessé d’exécuter : mise en demeure, puis notification de la résolution." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Article 1217", back: "Les 5 remèdes : suspendre, exécution forcée, réduction du prix, résolution, dommages et intérêts." },
            { front: "Exception d’inexécution", back: "Ne pas exécuter sa part tant que l’autre n’exécute pas la sienne, si son manquement est suffisamment grave." },
            { front: "Résolution par notification", back: "Mettre fin au contrat soi-même, à ses risques, après mise en demeure, en cas d’inexécution suffisamment grave." },
            { front: "Force majeure", back: "Événement hors de contrôle, imprévisible, irrésistible : pas de responsabilité du débiteur." },
            { front: "Imprévision", back: "Changement imprévisible rendant l’exécution excessivement onéreuse : renégociation, puis juge (art. 1195)." },
            { front: "Mise en demeure", back: "Étape préalable à la plupart des remèdes : réclamer formellement l’exécution dans un délai." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ton fournisseur chinois annonce que le prix du fret a doublé et qu’il ne livrera pas au prix convenu. Force majeure ?", options: ["Oui, c’est un événement extérieur", "Non, un surcoût n’empêche pas l’exécution : c’est éventuellement de l’imprévision", "Oui, si l’augmentation dépasse 50 %"], answer: 1, explain: "La force majeure suppose un empêchement, pas seulement un coût plus élevé." },
            { q: "Un client ne paie plus. Peux-tu arrêter de le livrer ?", options: ["Non, le contrat doit continuer", "Oui, par l’exception d’inexécution, si le manquement est suffisamment grave", "Seulement avec l’accord du juge"], answer: 1, explain: "C’est le principe de l’exception d’inexécution." },
            { q: "Peux-tu mettre fin toi-même à un contrat sans passer par le juge ?", options: ["Jamais", "Oui, par notification après mise en demeure, en cas d’inexécution suffisamment grave, à tes risques", "Oui, à tout moment sans motif"], answer: 1, explain: "La résolution unilatérale existe (art. 1226), mais le juge pourra vérifier qu’elle était justifiée." },
            { q: "Avant d’obtenir une réduction de prix ou l’exécution forcée, il faut en principe…", options: ["une mise en demeure", "une expertise", "un huissier"], answer: 0, explain: "La mise en demeure est l’étape préalable." },
          ],
        },
        {
          type: "case",
          title: "L’atelier en retard",
          story:
            "Sami a commandé 2 000 vestes brodées pour une collection qui sort le 1er mars. Le 15 février, l’atelier n’a toujours rien produit et ne répond plus. Sami trouve un autre atelier capable de livrer à temps, mais plus cher de 3 000 €.",
          question: "Quelle stratégie est la plus solide juridiquement ?",
          options: [
            "Commander ailleurs sans rien dire, puis refuser de payer le premier atelier",
            "Mettre en demeure le premier atelier avec un délai court, puis notifier la résolution et réclamer les 3 000 € de surcoût en dommages et intérêts",
            "Attendre le 1er mars pour voir si la livraison arrive",
          ],
          answer: 1,
          explain:
            "La mise en demeure crée la preuve de l’inexécution. La notification de la résolution met fin au contrat proprement. Les dommages et intérêts couvrent le surcoût du nouvel atelier. Commander ailleurs sans formalité expose Sami à se voir reprocher une rupture abusive.",
        },
        {
          type: "fiche",
          title: "L’inexécution",
          points: [
            "5 remèdes (art. 1217) : <b>suspendre</b>, <b>exécution forcée</b>, <b>réduction du prix</b>, <b>résolution</b>, <b>dommages et intérêts</b>.",
            "Toujours commencer par une <b>mise en demeure</b> écrite.",
            "Résolution : <b>clause résolutoire</b>, <b>notification</b> (à tes risques) ou <b>juge</b>.",
            "<b>Force majeure</b> : hors contrôle, imprévisible, irrésistible. Un surcoût n’en est pas une.",
            "<b>Imprévision</b> : renégociation puis juge, sauf clause qui l’écarte.",
          ],
          retenir: "Avant de réagir, écris : la mise en demeure ouvre toutes les portes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Vendre entre professionnels",
      minutes: 19,
      objectives: ["Maîtriser CGV, délais de paiement et pénalités", "Connaître la rupture brutale et la facturation électronique"],
      steps: [
        {
          type: "lesson",
          title: "Les contrats B2B",
          slides: [
            {
              title: "Les conditions générales de vente",
              body:
                "<p>Entre professionnels, tu dois <b>communiquer tes CGV</b> à tout acheteur pro qui les demande. Elles sont le <b>socle de la négociation commerciale</b>.</p><p>Elles contiennent notamment : conditions de vente, barème de prix, réductions, <b>conditions de règlement</b>, taux des <b>pénalités de retard</b> et indemnité forfaitaire de 40 €.</p><p>Si l’acheteur a ses propres conditions générales d’achat qui contredisent les tiennes, les clauses incompatibles <b>s’annulent</b> : d’où l’intérêt de négocier un contrat clair.</p>",
            },
            {
              title: "Les délais de paiement",
              body:
                "<div class='tiers'><div><b>30 jours</b><span>par défaut, après la livraison ou la prestation</span></div><div><b>60 jours</b><span>maximum après la date de facture</span></div><div><b>45 jours fin de mois</b><span>alternative maximale, si prévue</span></div></div><p>Ces délais sont des <b>plafonds</b> : on ne peut pas convenir de plus long (sauf secteurs particuliers et export hors UE). Un client qui impose 90 jours à son fournisseur risque jusqu’à <b>2 millions d’euros</b> d’amende administrative pour une société.</p>",
            },
            {
              title: "Les pénalités de retard",
              body:
                "<ul><li>Elles courent <b>automatiquement</b> dès le lendemain de l’échéance, sans relance nécessaire.</li><li>Taux par défaut : taux de refinancement de la BCE + 10 points. Le taux choisi ne peut pas être inférieur à <b>3 fois le taux d’intérêt légal</b>.</li><li>S’y ajoute l’<b>indemnité forfaitaire de 40 €</b> par facture.</li><li>Ces mentions doivent figurer sur tes <b>factures</b> et tes CGV.</li></ul><p>En pratique, beaucoup n’osent pas les réclamer : les mentionner dans la relance suffit souvent à accélérer le paiement.</p>",
            },
            {
              title: "La rupture brutale d’une relation établie",
              body:
                "<p>Tu travailles depuis des années avec un fournisseur ou un client, même sans contrat écrit ? C’est une <b>relation commerciale établie</b>.</p><ul><li>Pour y mettre fin, il faut un <b>préavis écrit</b> d’une durée suffisante, qui tient compte notamment de la <b>durée de la relation</b>.</li><li>Sinon, l’auteur de la rupture doit réparer le préjudice (la marge perdue pendant le préavis qui aurait dû être donné).</li><li>Un préavis de <b>18 mois</b> met à l’abri de cette responsabilité, quelle que soit la durée de la relation.</li></ul><p>Une baisse brutale et importante des commandes peut être assimilée à une rupture partielle.</p>",
              article: { ref: "Code de commerce, art. L. 442-1, II", text: "Engage la responsabilité de son auteur et l’oblige à réparer le préjudice causé le fait, par toute personne exerçant des activités de production, de distribution ou de services, de rompre brutalement, même partiellement, une relation commerciale établie, en l’absence d’un préavis écrit qui tienne compte notamment de la durée de la relation commerciale…" },
            },
            {
              title: "La facture électronique arrive",
              body:
                "<ul><li>Depuis le <b>1er septembre 2026</b>, toutes les entreprises assujetties à la TVA doivent pouvoir <b>recevoir</b> des factures électroniques, via une plateforme agréée. Les grandes entreprises et ETI doivent aussi les <b>émettre</b>.</li><li>À partir du <b>1er septembre 2027</b>, les <b>PME et micro-entreprises</b> devront aussi <b>émettre</b> leurs factures B2B au format électronique.</li><li>Un PDF envoyé par mail ne suffira plus : il faudra un format structuré transmis par une plateforme.</li></ul><p>L’administration a annoncé une période de tolérance au démarrage pour les entreprises de bonne foi.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Légal ou pas ?",
          instruction: "Entre deux entreprises françaises (hors secteurs particuliers), ces pratiques sont-elles permises ?",
          categories: ["Permis", "Interdit"],
          items: [
            { text: "Paiement à 45 jours fin de mois à compter de la facture", cat: 0, why: "C’est l’un des deux plafonds légaux." },
            { text: "Paiement à 90 jours date de facture imposé par un gros client", cat: 1, why: "Au-delà de 60 jours : amende administrative possible." },
            { text: "Facturer 40 € d’indemnité forfaitaire pour chaque facture payée en retard", cat: 0, why: "Prévu par le Code de commerce." },
            { text: "Prévoir un taux de pénalités de 1 % par an", cat: 1, why: "Le taux ne peut pas être inférieur à 3 fois le taux d’intérêt légal." },
            { text: "Arrêter du jour au lendemain un fournisseur avec qui tu travailles depuis 8 ans", cat: 1, why: "Rupture brutale d’une relation établie : il faut un préavis écrit suffisant." },
            { text: "Refuser d’envoyer tes CGV à un acheteur professionnel qui les demande", cat: 1, why: "Leur communication est obligatoire à tout acheteur pro qui en fait la demande." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "CGV entre pros", back: "À communiquer à tout acheteur pro qui les demande ; socle de la négociation." },
            { front: "Délai de paiement par défaut", back: "30 jours après la livraison ou la prestation." },
            { front: "Délais maximaux B2B", back: "60 jours date de facture, ou 45 jours fin de mois." },
            { front: "Pénalités de retard", back: "Automatiques ; taux minimum 3 fois le taux légal ; + 40 € par facture." },
            { front: "Rupture brutale", back: "Fin d’une relation établie sans préavis écrit suffisant : indemnisation. 18 mois de préavis protègent toujours." },
            { front: "Facture électronique", back: "Réception obligatoire pour tous depuis le 1er septembre 2026 ; émission pour PME et micro au 1er septembre 2027." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ta facture du 10 mars ne mentionne aucun délai. Ton client pro paie le 25 mai. Est-il en retard ?", options: ["Non, il avait 60 jours", "Oui, le délai par défaut est de 30 jours après la livraison", "Non, sans délai écrit il n’y a pas de retard"], answer: 1, explain: "Sans clause, c’est 30 jours après la livraison ou la prestation." },
            { q: "Ta micro-entreprise vend à des pros. Devras-tu émettre des factures électroniques ?", options: ["Non, jamais", "Oui, à partir du 1er septembre 2027", "Oui, depuis le 1er septembre 2026"], answer: 1, explain: "Émission obligatoire pour PME et micro au 1er septembre 2027 ; réception dès septembre 2026." },
            { q: "Tu arrêtes un client historique (6 ans) avec un préavis de 15 jours. Risque ?", options: ["Aucun, sans contrat écrit tu es libre", "Une action en rupture brutale de relation commerciale établie", "Une amende pénale"], answer: 1, explain: "Même sans contrat écrit, une relation de 6 ans est établie : le préavis doit être proportionné." },
            { q: "Les pénalités de retard B2B courent…", options: ["après une mise en demeure", "automatiquement dès le lendemain de l’échéance", "après jugement"], answer: 1, explain: "Elles sont exigibles sans rappel." },
          ],
        },
        {
          type: "case",
          title: "Le distributeur congédié",
          story:
            "Depuis 5 ans, Hugo distribue en exclusivité une marque de produits capillaires auprès des salons de Normandie, sans contrat écrit. Cela représente 60 % de son chiffre d’affaires. Un lundi, la marque lui écrit : « Nous travaillons désormais en direct. Fin de notre collaboration à la fin du mois. »",
          question: "Hugo a-t-il un recours ?",
          options: [
            "Non : sans contrat écrit, la marque peut arrêter quand elle veut",
            "Oui : c’est une rupture brutale d’une relation commerciale établie ; il peut réclamer la marge qu’il aurait faite pendant un préavis raisonnable",
            "Oui : il peut obliger la marque à continuer de travailler avec lui pour toujours",
          ],
          answer: 1,
          explain:
            "Cinq ans de relation suivie = relation établie, même sans écrit. Un mois de préavis est très insuffisant. Hugo ne peut pas imposer la poursuite, mais il peut obtenir réparation de la marge brute perdue pendant le préavis qui aurait dû lui être accordé.",
        },
        {
          type: "fiche",
          title: "Vendre entre professionnels",
          points: [
            "<b>CGV</b> à communiquer à tout acheteur pro qui les demande.",
            "Délais : <b>30 jours</b> par défaut, maximum <b>60 jours</b> date de facture ou <b>45 jours fin de mois</b>.",
            "Pénalités automatiques (minimum <b>3 fois le taux légal</b>) + <b>40 €</b> par facture.",
            "<b>Rupture brutale</b> d’une relation établie : préavis écrit proportionné, 18 mois protègent toujours.",
            "<b>Facture électronique</b> : réception depuis sept. 2026, émission pour PME et micro en sept. 2027.",
          ],
          retenir: "Entre pros, la loi fixe les délais : à toi de faire respecter les tiens.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Vendre en ligne aux consommateurs",
      minutes: 20,
      objectives: ["Respecter le droit de rétractation et le nouveau bouton", "Afficher des prix et des promotions conformes"],
      steps: [
        {
          type: "lesson",
          title: "La vente en ligne aux particuliers",
          slides: [
            {
              title: "Un consommateur est très protégé",
              body:
                "<p>Le Code de la consommation protège la personne physique qui achète pour ses <b>besoins personnels</b>. Ses règles sont <b>impératives</b> : tes CGV ne peuvent pas les écarter.</p><p>Avant la commande, tu dois l’informer clairement : caractéristiques du produit, <b>prix TTC</b> et frais de livraison, délai de livraison, ton identité et tes coordonnées, garanties, droit de rétractation, et coordonnées d’un <b>médiateur de la consommation</b> (obligatoire).</p>",
            },
            {
              title: "Le droit de rétractation",
              body:
                "<ul><li><b>14 jours</b> pour changer d’avis, sans motif ni pénalité. Le délai court à partir de la <b>réception</b> du produit (de la signature pour un service).</li><li>Tu dois <b>rembourser</b> dans les 14 jours, y compris les frais de livraison standard. Tu peux attendre le retour du produit ou la preuve de son envoi.</li><li>Les frais de retour sont à la charge du client <b>si tu l’as indiqué</b> ; sinon, c’est toi qui les paies.</li><li>Si tu n’as pas informé le client de ce droit, le délai est prolongé de <b>12 mois</b>.</li></ul>",
            },
            {
              title: "Le bouton de rétractation (depuis le 19 juin 2026)",
              body:
                "<p>Depuis le <b>19 juin 2026</b>, tout site qui vend en ligne doit proposer une fonctionnalité dédiée pour se rétracter :</p><ul><li>clairement identifiée, par exemple <b>« Renoncer au contrat ici »</b> ;</li><li><b>gratuite</b>, visible, accessible facilement pendant tout le délai de 14 jours ;</li><li>le client confirme sa demande, puis reçoit immédiatement un <b>accusé de réception</b> horodaté sur un support durable (e-mail).</li></ul><p>Sanction : jusqu’à <b>75 000 €</b> d’amende administrative pour une société.</p>",
            },
            {
              title: "Les exceptions à la rétractation",
              body:
                "<p>Pas de droit de rétractation notamment pour :</p><ul><li>les biens <b>personnalisés</b> ou fabriqués sur mesure (gravure, prénom brodé) ;</li><li>les biens <b>périssables</b> ;</li><li>les biens <b>descellés</b> qui ne peuvent pas être renvoyés pour des raisons d’<b>hygiène</b> (cosmétiques ouverts, sous-vêtements…) ;</li><li>les contenus numériques fournis immédiatement avec l’accord exprès du client ;</li><li>les services pleinement exécutés avant la fin du délai, avec son accord exprès.</li></ul><p>Ces exceptions doivent être <b>annoncées</b> dans ton information précontractuelle.</p>",
            },
            {
              title: "Les prix barrés",
              body:
                "<p>Toute annonce de réduction doit afficher un <b>prix de référence</b> : le <b>prix le plus bas</b> que tu as pratiqué pour tous les consommateurs au cours des <b>30 derniers jours</b> (art. L. 112-1-1 C. conso.).</p><ul><li>Pas de prix « gonflé » juste avant les soldes ou le Black Friday.</li><li>Réductions successives : la référence reste le prix d’avant la première baisse.</li><li>Fausses promotions permanentes = <b>pratique commerciale trompeuse</b> : jusqu’à 5 ans de prison et 750 000 € d’amende en ligne, et des dommages et intérêts aux concurrents.</li></ul>",
              example: "Ton produit est à 29 € depuis 2 mois. Tu le passes à 39 € la semaine avant le Black Friday pour afficher « 39 € → 29 € ». C’est interdit : la référence reste 29 €.",
            },
          ],
        },
        {
          type: "sort",
          title: "Rétractation possible ?",
          instruction: "Le client peut-il exercer son droit de rétractation de 14 jours ?",
          categories: ["Oui", "Non"],
          items: [
            { text: "Une paire de cils magnétiques dont l’emballage scellé a été ouvert", cat: 1, why: "Produit descellé non retournable pour des raisons d’hygiène, si l’exception a été annoncée." },
            { text: "Une plaque NFC gravée au nom du restaurant du client", cat: 1, why: "Bien personnalisé." },
            { text: "Un sac à main standard reçu il y a 10 jours, pas à son goût", cat: 0, why: "Bien standard, dans le délai de 14 jours." },
            { text: "Une formation vidéo dont le client a demandé l’accès immédiat, en renonçant expressément à son droit", cat: 1, why: "Contenu numérique fourni immédiatement avec accord exprès et renonciation." },
            { text: "Un diffuseur de parfum d’ambiance resté sous film, reçu il y a 5 jours", cat: 0, why: "Produit non descellé : le droit de rétractation s’applique." },
            { text: "Un bouquet de fleurs fraîches livré pour un anniversaire", cat: 1, why: "Bien périssable." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Droit de rétractation", back: "14 jours après réception, sans motif. Remboursement sous 14 jours, livraison standard comprise." },
            { front: "Bouton de rétractation", back: "Obligatoire depuis le 19 juin 2026 : « Renoncer au contrat ici », gratuit, accusé de réception immédiat." },
            { front: "Absence d’information sur la rétractation", back: "Le délai est prolongé de 12 mois." },
            { front: "Exceptions principales", back: "Biens personnalisés, périssables, descellés pour hygiène, contenus numériques et services exécutés avec accord exprès." },
            { front: "Prix de référence", back: "Le prix le plus bas pratiqué dans les 30 jours précédant la réduction (art. L. 112-1-1 C. conso.)." },
            { front: "Médiateur de la consommation", back: "Obligatoire pour tout professionnel qui vend aux consommateurs ; ses coordonnées doivent être indiquées." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un client reçoit sa commande le 3 et se rétracte le 15 du même mois. Est-ce dans les délais ?", options: ["Non, le délai court depuis la commande", "Oui, 14 jours après la réception", "Non, il fallait 7 jours"], answer: 1, explain: "Pour un bien, le délai court à compter de la réception." },
            { q: "Tes CGV ne disent rien sur les frais de retour. Qui les paie ?", options: ["Le client", "Toi, le vendeur", "Moitié-moitié"], answer: 1, explain: "Les frais de retour ne sont à la charge du client que si tu l’as indiqué." },
            { q: "Ton site a oublié d’informer les clients du droit de rétractation. Conséquence ?", options: ["Aucune", "Le délai est prolongé de 12 mois", "Les ventes sont nulles"], answer: 1, explain: "Le client peut se rétracter jusqu’à 12 mois et 14 jours." },
            { q: "Ta boutique en ligne n’a pas de bouton de rétractation en octobre 2026. Risque ?", options: ["Aucun, ce n’est qu’une recommandation", "Jusqu’à 75 000 € d’amende administrative pour une société", "Fermeture automatique du site"], answer: 1, explain: "Obligation en vigueur depuis le 19 juin 2026." },
            { q: "Peux-tu écrire dans tes CGV « aucun retour accepté » pour tous tes produits standards ?", options: ["Oui, ce sont tes conditions", "Non, le droit de rétractation est impératif"], answer: 1, explain: "Les règles protectrices du consommateur ne peuvent pas être écartées par contrat." },
          ],
        },
        {
          type: "case",
          title: "Le Black Friday de la boutique",
          story:
            "Lina vend des coffrets beauté à 45 € depuis septembre. Le 20 novembre, elle les passe à 69 €, puis lance le 27 un « Black Friday −35 % : 69 € → 45 € ». Un concurrent signale la promotion à la DGCCRF.",
          question: "La promotion est-elle conforme ?",
          options: [
            "Oui : le prix de 69 € a bien été pratiqué juste avant",
            "Non : le prix de référence est le plus bas des 30 derniers jours, soit 45 € ; il n’y a aucune réduction réelle",
            "Oui, car le Black Friday n’est pas soumis aux règles des soldes",
          ],
          answer: 1,
          explain:
            "Le prix de référence est le plus bas pratiqué dans les 30 jours avant la promotion : 45 €. Annoncer −35 % est une pratique commerciale trompeuse, sanctionnée lourdement, surtout en ligne.",
        },
        {
          type: "fiche",
          title: "Vendre en ligne aux consommateurs",
          points: [
            "Règles <b>impératives</b> : tes CGV ne peuvent pas les écarter. <b>Médiateur</b> de la consommation obligatoire.",
            "<b>Rétractation</b> : 14 jours après réception ; remboursement sous 14 jours ; +12 mois si pas d’information.",
            "<b>Bouton « Renoncer au contrat ici »</b> obligatoire depuis le <b>19 juin 2026</b>, avec accusé de réception immédiat.",
            "Exceptions : <b>personnalisé</b>, <b>périssable</b>, <b>descellé (hygiène)</b>, numérique ou service exécuté avec accord exprès.",
            "Prix barré = référence au <b>prix le plus bas des 30 derniers jours</b>.",
          ],
          retenir: "En B2C, ce que la loi protège, aucune CGV ne peut l’enlever.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Les garanties du vendeur",
      minutes: 16,
      objectives: ["Distinguer garantie de conformité, vices cachés et garantie commerciale", "Savoir traiter une réclamation client"],
      steps: [
        {
          type: "lesson",
          title: "Les garanties",
          slides: [
            {
              title: "Trois garanties à ne pas confondre",
              body:
                "<table class='t'><tr><th>Garantie</th><th>Pour qui</th><th>Origine</th></tr><tr><td><b>Légale de conformité</b></td><td>Consommateurs, face à un vendeur pro</td><td>La loi, obligatoire</td></tr><tr><td><b>Vices cachés</b></td><td>Tout acheteur (particulier ou pro)</td><td>La loi, obligatoire</td></tr><tr><td><b>Commerciale</b></td><td>Selon ce que le vendeur promet</td><td>Le contrat, facultative</td></tr></table><p>La garantie commerciale s’<b>ajoute</b> aux garanties légales, elle ne les remplace jamais.</p>",
            },
            {
              title: "La garantie légale de conformité",
              body:
                "<ul><li>Le vendeur pro doit livrer un bien <b>conforme</b> au contrat et à l’usage attendu (ce qui a été décrit, les qualités annoncées en publicité, les accessoires…).</li><li>Durée : <b>2 ans</b> à compter de la livraison.</li><li>Tout défaut qui apparaît dans les <b>24 mois</b> (12 mois pour un bien d’occasion) est <b>présumé</b> exister dès la livraison : le client n’a rien à prouver.</li><li>Le client choisit entre <b>réparation</b> et <b>remplacement</b>, sauf coût disproportionné. Si c’est impossible ou trop long : <b>réduction du prix</b> ou <b>remboursement</b>.</li><li>C’est le <b>vendeur</b> qui répond, pas le fabricant : à toi de te retourner ensuite contre ton fournisseur.</li></ul>",
            },
            {
              title: "La garantie des vices cachés",
              body:
                "<p>Le vendeur, même particulier, garantit l’acheteur contre les <b>défauts cachés</b> qui rendent la chose impropre à son usage, ou qui en diminuent tellement l’usage que l’acheteur ne l’aurait pas achetée (ou à un prix moindre).</p><ul><li>Le vice doit être <b>caché</b>, <b>antérieur</b> à la vente et <b>grave</b>.</li><li>Délai : <b>2 ans à partir de la découverte</b> du vice.</li><li>L’acheteur choisit : rendre la chose et être remboursé, ou la garder et obtenir une réduction du prix.</li><li>Le vendeur <b>professionnel</b> est présumé connaître le vice : il doit aussi des dommages et intérêts.</li></ul>",
              article: { ref: "Code civil, art. 1641", text: "Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent impropre à l’usage auquel on la destine, ou qui diminuent tellement cet usage que l’acheteur ne l’aurait pas acquise, ou n’en aurait donné qu’un moindre prix, s’il les avait connus." },
            },
            {
              title: "Ce qui arrive bientôt : le droit à la réparation",
              body:
                "<p>Une directive européenne de 2024 sur le <b>droit à la réparation</b> devait être transposée au plus tard le <b>31 juillet 2026</b>. Elle prévoit notamment de <b>prolonger de 12 mois</b> la garantie légale quand le client choisit la réparation plutôt que le remplacement.</p><p>Fin octobre 2026, la France ne l’avait pas encore transposée : cette prolongation n’est donc pas encore applicable chez nous. À surveiller.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Garantie légale de conformité", back: "Vendeur pro → consommateur : 2 ans, défaut présumé antérieur pendant 24 mois (12 mois en occasion)." },
            { front: "Choix du consommateur", back: "Réparation ou remplacement ; à défaut, réduction du prix ou remboursement." },
            { front: "Vices cachés", back: "Défaut caché, antérieur, grave. Action dans les 2 ans de la découverte. Tout vendeur, tout acheteur." },
            { front: "Vendeur pro et vice caché", back: "Présumé connaître le vice : il doit aussi des dommages et intérêts." },
            { front: "Garantie commerciale", back: "Facultative, contractuelle, s’ajoute aux garanties légales sans les remplacer." },
            { front: "Qui répond de la conformité ?", back: "Le vendeur, pas le fabricant ; le vendeur se retourne ensuite contre son fournisseur." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un client a acheté un sèche-cheveux neuf sur ton site il y a 18 mois. Il tombe en panne. Doit-il prouver que le défaut existait à la livraison ?", options: ["Oui", "Non, le défaut est présumé exister dès la livraison pendant 24 mois"], answer: 1, explain: "Pour un bien neuf, la présomption dure 24 mois." },
            { q: "Ton client exige que tu le renvoies vers le fabricant. As-tu le droit ?", options: ["Oui, c’est au fabricant de gérer", "Non, c’est toi, le vendeur, qui dois la garantie de conformité"], answer: 1, explain: "Le consommateur s’adresse au vendeur, qui se retourne ensuite contre son fournisseur." },
            { q: "Tu achètes pour ta société un véhicule utilitaire d’occasion à un particulier ; le moteur avait une fissure cachée. Quelle garantie ?", options: ["Garantie légale de conformité", "Garantie des vices cachés", "Aucune, entre particulier et pro"], answer: 1, explain: "La conformité ne joue que d’un vendeur pro vers un consommateur ; les vices cachés jouent pour tous." },
            { q: "Ta garantie commerciale « 1 an pièces » peut-elle remplacer la garantie légale de 2 ans ?", options: ["Oui, si c’est écrit dans les CGV", "Non, elle s’ajoute aux garanties légales"], answer: 1, explain: "La garantie commerciale ne peut jamais réduire les garanties légales." },
          ],
        },
        {
          type: "case",
          title: "La réclamation du client",
          story:
            "Une cliente a acheté sur la boutique de Yasmine un diffuseur électrique il y a 7 mois. Il ne chauffe plus. Yasmine répond : « Le produit était garanti 6 mois par le fabricant, la garantie est terminée, contactez directement le fabricant en Chine. »",
          question: "La réponse de Yasmine est-elle correcte ?",
          options: [
            "Oui : la garantie du fabricant a expiré",
            "Non : Yasmine doit la garantie légale de conformité de 2 ans ; elle doit proposer réparation ou remplacement",
            "Oui, mais elle doit rembourser la moitié",
          ],
          answer: 1,
          explain:
            "La garantie fabricant de 6 mois est une garantie commerciale qui s’ajoute à la garantie légale. Pendant 2 ans, c’est Yasmine, la vendeuse, qui répond du défaut, présumé exister dès la livraison. Elle pourra ensuite se retourner contre son fournisseur selon leur contrat.",
        },
        {
          type: "fiche",
          title: "Les garanties",
          points: [
            "<b>Conformité</b> (pro → consommateur) : 2 ans ; défaut présumé pendant <b>24 mois</b> (12 en occasion).",
            "Le client choisit <b>réparation</b> ou <b>remplacement</b>, sinon réduction du prix ou remboursement.",
            "C’est le <b>vendeur</b> qui répond, pas le fabricant.",
            "<b>Vices cachés</b> (tout vendeur) : caché, antérieur, grave ; <b>2 ans</b> après la découverte ; le pro doit en plus des dommages et intérêts.",
            "<b>Garantie commerciale</b> : facultative, s’ajoute aux garanties légales.",
            "Droit à la réparation (+12 mois) : directive européenne pas encore transposée fin 2026.",
          ],
          retenir: "Le client vient toujours vers toi : la garantie légale, c’est le vendeur qui la porte.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Les contrats clés de l’entrepreneur",
      minutes: 18,
      objectives: ["Connaître les règles du bail commercial et des contrats de distribution", "Appliquer une checklist avant de signer"],
      steps: [
        {
          type: "lesson",
          title: "Les contrats de l’entrepreneur",
          slides: [
            {
              title: "Le bail commercial",
              body:
                "<ul><li>Durée <b>minimale de 9 ans</b> (le fameux « 3-6-9 »).</li><li>Le locataire peut donner congé à la fin de chaque <b>période de 3 ans</b>, avec un préavis de <b>6 mois</b>.</li><li>Le locataire a un <b>droit au renouvellement</b> à la fin du bail. Si le bailleur refuse sans motif grave, il doit payer une <b>indemnité d’éviction</b>, souvent très élevée.</li><li>Le loyer est révisable tous les 3 ans, dans des limites encadrées.</li><li>Alternative : le <b>bail dérogatoire</b> (bail précaire), <b>3 ans maximum</b> au total, sans droit au renouvellement. Idéal pour tester un emplacement.</li></ul>",
            },
            {
              title: "Le devis et le contrat de prestation",
              body:
                "<ul><li>Un <b>devis signé</b> par le client avec « bon pour accord » vaut contrat : prix et contenu sont fixés.</li><li>Précise toujours : la prestation exacte, les <b>livrables</b>, les délais, le prix, l’<b>acompte</b>, ce qui est <b>hors périmètre</b>, les modalités de validation, et le nombre de révisions incluses.</li><li>Pour les créations (site, logo, vidéos), règle la <b>propriété intellectuelle</b> : sans cession écrite, les droits restent au créateur.</li></ul>",
              example: "Tu crées le site animé d’un commerce. Sans clause de cession de droits, le client paie le site mais n’en détient pas juridiquement les droits d’auteur : à préciser dans le devis.",
            },
            {
              title: "Les contrats de distribution",
              body:
                "<table class='t'><tr><th>Contrat</th><th>Principe</th></tr><tr><td><b>Distribution / revente</b></td><td>Tu achètes et revends en ton nom : tu prends le risque du stock et fixes ton prix de revente</td></tr><tr><td><b>Agent commercial</b></td><td>Tu négocies pour le compte d’une marque, contre commission ; la marque vend en son nom. À la fin du contrat, l’agent a droit à une indemnité (souvent 2 ans de commissions)</td></tr><tr><td><b>Franchise</b></td><td>Tu exploites une enseigne et un savoir-faire contre redevance ; document d’information précontractuelle obligatoire 20 jours avant la signature</td></tr><tr><td><b>Exclusivité</b></td><td>Clause limitée dans le temps et l’espace ; souvent assortie d’objectifs de vente</td></tr></table>",
            },
            {
              title: "Les autres contrats utiles",
              body:
                "<ul><li><b>Accord de confidentialité (NDA)</b> : avant de partager une idée, des prix ou un fichier client avec un partenaire.</li><li><b>Contrat fournisseur / sourcing</b> : spécifications, contrôle qualité, délais, incoterm (qui paie le transport et quand le risque passe), loi applicable.</li><li><b>CGU et mentions légales</b> d’un site : obligatoires, avec la politique de confidentialité (données personnelles).</li><li><b>Contrat de sous-traitance</b> : le sous-traitant doit être agréé par le client final dans certains secteurs (BTP).</li></ul>",
            },
            {
              title: "La checklist avant de signer",
              body:
                "<ol><li><b>Qui</b> signe ? La bonne société, le bon dirigeant, avec un Kbis à jour.</li><li><b>Quoi</b> exactement ? Prestation, quantités, qualité, livrables.</li><li><b>Combien et quand</b> ? Prix, révision, échéances, pénalités.</li><li><b>Combien de temps</b> ? Durée, reconduction tacite, préavis de sortie.</li><li><b>Et si ça tourne mal</b> ? Responsabilité, plafonds, clause résolutoire, garanties.</li><li><b>Qui juge</b> ? Médiation, tribunal, loi applicable.</li></ol><p>Et garde tout : versions signées, échanges de mails, bons de livraison. C’est ta preuve.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel contrat ?",
          instruction: "Associe chaque situation au contrat adapté.",
          categories: ["Bail dérogatoire", "Bail commercial 3-6-9", "Agent commercial", "Accord de confidentialité"],
          items: [
            { text: "Tu veux tester une boutique éphémère pendant 18 mois avant de t’engager", cat: 0, why: "Bail de 3 ans maximum, sans droit au renouvellement." },
            { text: "Tu ouvres ton entrepôt définitif et veux être protégé contre un non-renouvellement", cat: 1, why: "Le bail commercial donne le droit au renouvellement ou une indemnité d’éviction." },
            { text: "Tu démarches les salons pour une marque qui facture elle-même et te verse 15 % de commission", cat: 2, why: "Tu négocies pour son compte, sans acheter ni revendre." },
            { text: "Avant de montrer ta formule de parfum à un laboratoire, tu veux protéger ton secret", cat: 3, why: "Le NDA encadre l’usage des informations partagées." },
            { text: "Une marque étrangère te charge de trouver des clients en France contre commission", cat: 2, why: "C’est la définition de l’agence commerciale." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Bail commercial", back: "9 ans minimum ; congé du locataire tous les 3 ans (préavis 6 mois) ; droit au renouvellement." },
            { front: "Indemnité d’éviction", back: "Due par le bailleur qui refuse le renouvellement du bail commercial sans motif grave." },
            { front: "Bail dérogatoire", back: "3 ans maximum au total, sans droit au renouvellement : pour tester un emplacement." },
            { front: "Agent commercial", back: "Négocie pour une marque contre commission ; indemnité de fin de contrat." },
            { front: "Cession de droits d’auteur", back: "Doit être écrite et précise ; sinon, les droits restent au créateur." },
            { front: "Incoterm", back: "Règle internationale qui fixe qui paie le transport et quand le risque passe du vendeur à l’acheteur." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu as un bail commercial depuis 2 ans et veux partir. Le peux-tu ?", options: ["Oui, à tout moment avec 1 mois de préavis", "En principe, à la fin de la première période de 3 ans, avec 6 mois de préavis", "Non, jamais avant 9 ans"], answer: 1, explain: "C’est la faculté de résiliation triennale du locataire." },
            { q: "Ton bailleur refuse de renouveler ton bail commercial sans motif grave. Conséquence ?", options: ["Tu dois partir sans rien", "Il doit te verser une indemnité d’éviction", "Le bail se poursuit obligatoirement"], answer: 1, explain: "Le refus est possible, mais il se paie." },
            { q: "Un graphiste te livre ton logo sans contrat de cession de droits. Qui détient les droits d’auteur ?", options: ["Toi, puisque tu as payé", "Le graphiste, tant qu’une cession écrite n’a pas été signée"], answer: 1, explain: "La cession de droits doit être écrite et détaillée." },
            { q: "Un devis signé avec « bon pour accord »…", options: ["n’est qu’une proposition", "vaut contrat", "doit être confirmé par un notaire"], answer: 1, explain: "Offre précise + acceptation : le contrat est formé." },
          ],
        },
        {
          type: "case",
          title: "Le local de rêve",
          story:
            "Adam trouve un local idéal pour lancer une boutique de cosmétiques, mais il ne sait pas si le quartier fonctionnera. Le bailleur lui propose un bail commercial classique de 9 ans. Adam préférerait s’engager le moins possible la première année.",
          question: "Quelle solution lui proposer ?",
          options: [
            "Signer le bail de 9 ans : il pourra partir au bout d’un an sans frais",
            "Négocier un bail dérogatoire de 1 à 3 ans, puis un bail commercial si l’emplacement fonctionne",
            "Occuper le local sans contrat écrit",
          ],
          answer: 1,
          explain:
            "Le bail dérogatoire permet de tester sans s’engager sur 3 ans minimum. Avec un bail 3-6-9, Adam ne pourrait partir qu’au bout de 3 ans (sauf accord). Attention : s’il reste dans les lieux après le terme du bail dérogatoire sans réaction du bailleur, un bail commercial classique naît automatiquement.",
        },
        {
          type: "fiche",
          title: "Les contrats de l’entrepreneur",
          points: [
            "<b>Bail commercial</b> : 9 ans, sortie triennale (préavis 6 mois), droit au renouvellement ou <b>indemnité d’éviction</b>.",
            "<b>Bail dérogatoire</b> : 3 ans maximum, pour tester.",
            "<b>Devis signé</b> = contrat ; préciser livrables, hors-périmètre, acompte, <b>cession de droits</b>.",
            "Distribution : <b>revente</b> (ton risque), <b>agent</b> (commission + indemnité), <b>franchise</b> (DIP 20 jours avant).",
            "NDA, contrat fournisseur (incoterm), CGU et mentions légales.",
            "Checklist : qui, quoi, combien, combien de temps, et si ça tourne mal, qui juge.",
          ],
          retenir: "Un bon contrat se relit en pensant au pire jour de la relation.",
        },
      ],
    },
  ],
});
