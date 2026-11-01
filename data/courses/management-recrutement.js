/* ============================================================
   COURS : Recruter en détail
   École de Management · 8 séances de 15 à 20 minutes
   Suite de « Manager — les fondations » (séance 2).
   Chiffres et règles vérifiés au 1er novembre 2026 :
   SMIC 12,31 €/h brut, 1 867,02 €/mois (35 h) depuis le
   1er juin 2026 ; aide à l'embauche d'apprentis pour les
   contrats signés depuis le 8 mars 2026 et commencés avant le
   1er janvier 2027 ; projet de loi « transparence salariale »
   présenté en Conseil des ministres le 10 septembre 2026, pas
   encore adopté. À METTRE À JOUR quand ces éléments changent.
   ============================================================ */
AGORA.registerCourse({
  id: "management-recrutement",
  faculty: "management",
  title: "Recruter en détail",
  subtitle: "Du besoin à la signature : contrats, coûts, annonce, entretien, offre et formalités",
  color: "#2f7d5b",
  level: "Intermédiaire",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour mener un recrutement de bout en bout : savoir s’il faut vraiment recruter et avec quel contrat, calculer le coût réel d’un salarié, utiliser l’alternance, les stages et les freelances sans risque, écrire une annonce qui attire les bons profils, trier, mener un entretien solide, faire une offre et accomplir les formalités d’embauche. Idéal après « Manager — les fondations ».",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Faut-il recruter, et avec quel contrat ?",
      minutes: 18,
      objectives: ["Vérifier que le besoin est réel et durable", "Choisir entre CDI, CDD, intérim et temps partiel"],
      steps: [
        {
          type: "lesson",
          title: "Avant de publier une annonce",
          slides: [
            {
              title: "Le besoin est-il réel ?",
              body:
                "<p>Avant de recruter, réponds à quatre questions :</p><ol><li><b>Quelles tâches précises</b> seront confiées, et combien d’heures par semaine représentent-elles vraiment ?</li><li>Le besoin est-il <b>durable</b> (activité régulière) ou <b>temporaire</b> (pic saisonnier, remplacement) ?</li><li>Peut-on <b>réorganiser</b>, automatiser ou sous-traiter ces tâches ?</li><li>Le chiffre d’affaires ou la marge permettent-ils de <b>financer le poste</b> pendant au moins 6 à 12 mois ?</li></ol><p>Une bonne pratique : noter pendant deux semaines les tâches qu’on voudrait déléguer et le temps qu’elles prennent.</p>",
            },
            {
              title: "Le CDI : la règle",
              body:
                "<p>Le <b>contrat à durée indéterminée</b> est la forme normale du contrat de travail. Il peut être à temps plein ou à temps partiel.</p><ul><li>Temps partiel : en principe <b>24 heures par semaine minimum</b>, sauf exceptions (demande écrite du salarié, étudiant, accord de branche…).</li><li>Il peut comporter une <b>période d’essai</b> (2 / 3 / 4 mois selon la catégorie).</li><li>Il prend fin par démission, rupture conventionnelle, licenciement (avec un motif réel et sérieux) ou retraite.</li></ul>",
            },
            {
              title: "Le CDD : seulement dans certains cas",
              body:
                "<p>Un <b>CDD</b> ne peut pas pourvoir durablement un emploi lié à l’activité normale de l’entreprise. Il est réservé à des <b>cas précis</b> :</p><ul><li>remplacement d’un salarié absent ;</li><li>accroissement temporaire d’activité (une grosse commande, la période de Noël) ;</li><li>emplois saisonniers ou « d’usage » dans certains secteurs.</li></ul><p>Règles clés : <b>contrat écrit</b> indiquant le motif, transmis au plus tard dans les 2 jours ouvrables suivant l’embauche ; durée maximale en général de <b>18 mois</b> renouvellements compris ; <b>indemnité de fin de contrat de 10 %</b> des salaires bruts (sauf exceptions). Sinon, risque de <b>requalification en CDI</b> par le juge.</p>",
            },
            {
              title: "L’intérim",
              body:
                "<p>Avec l’<b>intérim</b>, une agence (entreprise de travail temporaire) recrute, emploie et paie le salarié ; ton entreprise paie une facture à l’agence.</p><ul><li><b>Avantages</b> : rapidité, pas de formalités, remplacement facile.</li><li><b>Inconvénients</b> : coût horaire élevé (salaire + cotisations + indemnités de fin de mission + marge de l’agence), salarié moins impliqué.</li><li>Mêmes cas de recours limités que le CDD.</li></ul><p>Utile pour tester un besoin sur quelques semaines avant de recruter en direct.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel contrat ?",
          instruction: "Choisis le contrat le plus adapté à chaque situation.",
          categories: ["CDI", "CDD", "Intérim"],
          items: [
            { text: "Un préparateur de commandes pour une activité qui tourne toute l’année", cat: 0, why: "Besoin durable et normal." },
            { text: "Remplacer une salariée pendant son congé maternité", cat: 1, why: "Remplacement d’un salarié absent." },
            { text: "Deux personnes pendant trois semaines pour un pic de commandes imprévu, dès lundi", cat: 2, why: "Urgence et courte durée : l’agence fournit vite." },
            { text: "Un commercial pour développer durablement la clientèle B2B", cat: 0, why: "Emploi permanent." },
            { text: "Un renfort de 4 mois pour une grosse commande ponctuelle", cat: 1, why: "Accroissement temporaire d’activité." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "CDI", back: "Forme normale du contrat de travail ; temps partiel en principe ≥ 24 h / semaine" },
            { front: "Cas de recours au CDD", back: "Remplacement, accroissement temporaire d’activité, saisonnier / d’usage" },
            { front: "Durée max. d’un CDD (en général)", back: "18 mois, renouvellements compris" },
            { front: "Indemnité de fin de CDD", back: "10 % des salaires bruts (sauf exceptions)" },
            { front: "Requalification", back: "Un CDD irrégulier peut être transformé en CDI par le juge" },
            { front: "Intérim", back: "L’agence emploie et paie ; rapide mais coûteux ; mêmes cas de recours que le CDD" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Peut-on embaucher en CDD un préparateur pour l’activité normale et permanente de l’entrepôt ?", options: ["Oui, c’est plus souple", "Non : le CDD ne peut pas pourvoir durablement un emploi permanent", "Oui, si le salarié est d’accord"], answer: 1, explain: "Risque de requalification en CDI." },
            { q: "En fin de CDD, l’employeur verse en principe…", options: ["rien", "une indemnité de 10 % des salaires bruts", "un mois de salaire"], answer: 1, explain: "L’indemnité de fin de contrat (dite de précarité)." },
            { q: "Un temps partiel est en principe d’au moins…", options: ["10 h par semaine", "24 h par semaine", "30 h par semaine"], answer: 1, explain: "Avec des exceptions prévues par la loi." },
            { q: "Pourquoi utiliser l’intérim ?", options: ["C’est le moins cher", "Pour répondre vite à un besoin court ou tester un poste", "Pour éviter de payer les cotisations"], answer: 1, explain: "C’est rapide, mais plus coûteux à l’heure." },
          ],
        },
        {
          type: "case",
          title: "Le CDD à répétition",
          story:
            "Pour « garder de la souplesse », Hugo enchaîne trois CDD de 6 mois avec le même salarié sur le même poste de magasinier, avec pour motif « surcroît d’activité ». Le salarié saisit les prud’hommes à la fin du troisième contrat.",
          question: "Que risque Hugo ?",
          options: [
            "Rien, les contrats étaient écrits",
            "La requalification en CDI depuis le premier contrat, avec une indemnité de requalification et, faute de licenciement régulier, des indemnités pour licenciement sans cause réelle et sérieuse",
            "Une simple amende de 50 €",
          ],
          answer: 1,
          explain:
            "Un « surcroît d’activité » qui dure 18 mois, c’est une activité normale. Le CDD n’est pas un moyen d’éviter le CDI : la période d’essai sert à tester un candidat.",
        },
        {
          type: "fiche",
          title: "Besoin et contrat",
          points: [
            "Vérifier le besoin : <b>tâches, heures, durée, alternatives, financement</b>.",
            "<b>CDI</b> = la norme ; temps partiel en principe <b>≥ 24 h</b>.",
            "<b>CDD</b> : cas limités (remplacement, surcroît temporaire, saisonnier), écrit avec motif, <b>18 mois</b> max. en général, <b>10 %</b> de fin de contrat ; sinon <b>requalification</b>.",
            "<b>Intérim</b> : rapide, coûteux, mêmes cas de recours ; utile pour tester un besoin.",
          ],
          retenir: "Pour un besoin durable, c’est un CDI ; la période d’essai est faite pour tester.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Le coût réel d’un salarié",
      minutes: 16,
      objectives: ["Passer du brut au net et au coût employeur", "Savoir si une embauche est rentable"],
      steps: [
        {
          type: "lesson",
          title: "Brut, net, coût total",
          slides: [
            {
              title: "Les trois montants",
              body:
                "<div class='tiers'><div><b>Le salaire brut</b><span>Le montant du contrat. C’est sur lui que se calculent les cotisations.</span></div><div><b>Le net</b><span>Ce que reçoit le salarié : environ <b>77 à 80 %</b> du brut pour un non-cadre (avant impôt à la source).</span></div><div><b>Le coût employeur</b><span>Brut + cotisations patronales : fortement réduit près du SMIC, il approche <b>1,4 à 1,45 fois le brut</b> pour les salaires plus élevés.</span></div></div><p>Pour un calcul exact, utilise le simulateur officiel de l’URSSAF (mon-entreprise.urssaf.fr) : les taux et réductions changent régulièrement.</p>",
            },
            {
              title: "Le SMIC et les minima",
              body:
                "<ul><li>Depuis le <b>1er juin 2026</b>, le SMIC est de <b>12,31 € brut de l’heure</b>, soit <b>1 867,02 € brut par mois</b> pour 35 heures.</li><li>Près du SMIC, la <b>réduction générale des cotisations patronales</b> diminue fortement le coût employeur.</li><li>Attention : ta <b>convention collective</b> fixe souvent des <b>salaires minimaux</b> par niveau, parfois supérieurs au SMIC. Ils s’imposent.</li></ul>",
            },
            {
              title: "Les coûts cachés",
              body:
                "<p>Le salaire n’est pas le seul coût :</p><ul><li><b>Mutuelle</b> : l’employeur paie au moins 50 % de la complémentaire santé obligatoire.</li><li>Matériel, poste de travail, tenue, outils logiciels.</li><li>Temps de <b>recrutement</b> et de <b>formation</b> (souvent plusieurs semaines de productivité réduite).</li><li>Congés payés (2,5 jours ouvrables par mois travaillé), absences, frais de transport (50 % de l’abonnement de transport public).</li><li>Médecine du travail, expert-comptable ou logiciel de paie.</li></ul>",
            },
            {
              title: "L’embauche est-elle rentable ?",
              body:
                "<p>Un raisonnement simple :</p><ol><li>Calcule le <b>coût annuel total</b> du poste (coût employeur × 12 + coûts annexes).</li><li>Estime ce que le poste va <b>rapporter ou libérer</b> : chiffre d’affaires supplémentaire × taux de marge, ou heures du dirigeant libérées × valeur de ces heures.</li><li>Fixe un <b>délai</b> au bout duquel le poste doit être rentable (souvent 6 à 12 mois) et un indicateur pour le vérifier.</li></ol><p>Exemple : un commercial qui coûte 45 000 € par an doit générer au moins 45 000 € de <b>marge</b> (et non de chiffre d’affaires) pour être rentable.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "SMIC au 1er juin 2026", back: "12,31 € brut / heure, 1 867,02 € brut / mois (35 h)" },
            { front: "Net ≈", back: "77 à 80 % du brut (non-cadre, avant impôt)" },
            { front: "Coût employeur (hors SMIC)", back: "Environ 1,4 à 1,45 × le brut" },
            { front: "Minima conventionnels", back: "Salaires minimaux de la convention collective, parfois supérieurs au SMIC" },
            { front: "Mutuelle", back: "Au moins 50 % payés par l’employeur" },
            { front: "Rentabilité d’un commercial", back: "Il doit générer au moins son coût en marge, pas en chiffre d’affaires" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Sur quel montant se calculent les cotisations ?", options: ["Le net", "Le brut", "Le coût employeur"], answer: 1, explain: "Le salaire brut est la base." },
            { q: "Pour un salaire de 3 000 € brut, le coût employeur est d’environ…", options: ["3 000 €", "4 200 à 4 350 €", "6 000 €"], answer: 1, explain: "Environ 1,4 à 1,45 fois le brut à ce niveau." },
            { q: "Que doit-on vérifier en plus du SMIC ?", options: ["Les minima de la convention collective", "Le salaire du dirigeant", "Rien"], answer: 0, explain: "Ils peuvent être plus élevés et s’imposent." },
            { q: "Un commercial coûte 40 000 € par an ; la marge est de 25 %. Quel chiffre d’affaires minimum doit-il apporter ?", options: ["40 000 €", "160 000 €", "50 000 €"], answer: 1, explain: "40 000 / 0,25 = 160 000 € de chiffre d’affaires pour couvrir son coût." },
          ],
        },
        {
          type: "case",
          title: "Le calcul trop rapide",
          story:
            "Noa veut embaucher un commercial à 2 500 € « par mois ». Il prévoit 30 000 € par an dans son budget. Il vend des produits avec 30 % de marge.",
          question: "Qu’a-t-il oublié ?",
          options: [
            "Rien, 2 500 × 12 = 30 000 €",
            "Le coût employeur (environ 1,4 fois le brut, soit près de 42 000 € par an), plus la mutuelle, le matériel, les frais et le temps de formation ; et le commercial devra générer environ 140 000 € de chiffre d’affaires pour couvrir ce coût avec 30 % de marge",
            "Les congés payés uniquement",
          ],
          answer: 1,
          explain:
            "Confondre brut et coût total est l’erreur la plus fréquente. Avant de recruter, fais une simulation sur le site de l’URSSAF et calcule le chiffre d’affaires nécessaire à partir de ta marge.",
        },
        {
          type: "fiche",
          title: "Le coût d’un salarié",
          points: [
            "<b>Brut</b> (contrat) → <b>net</b> (≈ 77-80 %) → <b>coût employeur</b> (≈ 1,4-1,45 × brut, beaucoup moins près du SMIC).",
            "SMIC depuis le 1er juin 2026 : <b>12,31 €/h</b>, <b>1 867,02 €/mois</b> brut ; vérifier les <b>minima conventionnels</b>.",
            "Coûts cachés : <b>mutuelle</b> (≥ 50 %), matériel, transport (50 %), congés, formation.",
            "Rentabilité : le poste doit générer son coût en <b>marge</b>, dans un délai fixé.",
          ],
          retenir: "Un salaire brut de 2 500 € coûte environ 3 500 € par mois à l’entreprise : budgète le coût total.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Alternants, stagiaires et freelances",
      minutes: 17,
      objectives: ["Utiliser l’alternance et les aides disponibles", "Éviter les pièges du stage et du faux freelance"],
      steps: [
        {
          type: "lesson",
          title: "Les autres façons de renforcer l’équipe",
          slides: [
            {
              title: "L’apprentissage",
              body:
                "<ul><li>Un <b>contrat d’apprentissage</b> associe une formation dans un centre (CFA) et du travail en entreprise, du CAP au master.</li><li>L’apprenti a en principe entre <b>16 et 29 ans</b> (exceptions possibles).</li><li>Son salaire est un <b>pourcentage du SMIC</b>, selon son âge et son année de formation.</li><li>Un <b>maître d’apprentissage</b> doit l’encadrer dans l’entreprise.</li><li>La formation est financée par l’<b>OPCO</b> (l’opérateur de compétences de ta branche).</li></ul>",
            },
            {
              title: "L’aide à l’embauche d’apprentis (2026)",
              body:
                "<p>Pour les contrats signés depuis le <b>8 mars 2026</b> et commencés avant le <b>1er janvier 2027</b>, l’aide (versée chaque mois la première année) dépend du diplôme préparé :</p><table class='t'><tr><th>Diplôme préparé</th><th>Moins de 250 salariés</th></tr><tr><td>CAP, bac (niveaux 3-4)</td><td>5 000 €</td></tr><tr><td>Bac+2 (niveau 5)</td><td>4 500 €</td></tr><tr><td>Bac+3 à bac+5 (niveaux 6-7)</td><td>2 000 €</td></tr></table><p>Apprenti en situation de handicap : 6 000 €. Le contrat doit être transmis à l’OPCO dans les 6 mois. Les montants changent souvent : vérifie sur le site du ministère du Travail avant de signer.</p>",
            },
            {
              title: "Le stage",
              body:
                "<ul><li>Un stage nécessite une <b>convention</b> signée par l’école, l’entreprise et l’étudiant.</li><li>Au-delà de <b>2 mois</b> de présence, une <b>gratification</b> minimale légale est obligatoire.</li><li>Un stagiaire <b>ne peut pas</b> occuper un poste permanent, remplacer un salarié absent ou faire face à un pic d’activité.</li><li>Nombre limité : <b>3 stagiaires</b> en même temps dans une entreprise de moins de 20 salariés (15 % de l’effectif au-delà).</li><li>Le stage a un <b>objectif pédagogique</b> et un tuteur dans l’entreprise.</li></ul>",
            },
            {
              title: "Le freelance (et le faux freelance)",
              body:
                "<p>Travailler avec un <b>indépendant</b> (auto-entrepreneur, agence) est utile pour des missions ponctuelles ou expertes : site internet, montage vidéo, comptabilité.</p><p>Mais si l’entreprise lui donne des <b>ordres</b>, <b>contrôle</b> son travail et peut le <b>sanctionner</b>, avec des horaires imposés et un travail dans les locaux pour un seul client, c’est un <b>lien de subordination</b> : le contrat peut être requalifié en <b>contrat de travail</b>, avec rappel de cotisations et risque de poursuites pour <b>travail dissimulé</b>.</p><p>Bon réflexe : un freelance s’engage sur un <b>résultat</b> (un livrable, un prix), organise lui-même son travail et a d’autres clients.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle solution ?",
          instruction: "Quelle forme de collaboration convient à chaque besoin ?",
          categories: ["Apprentissage", "Stage", "Freelance"],
          items: [
            { text: "Former sur deux ans un futur logisticien qui prépare un bac pro", cat: 0, why: "Formation diplômante en alternance." },
            { text: "Créer le nouveau site internet de la boutique, livré en 6 semaines", cat: 2, why: "Mission ponctuelle avec un livrable." },
            { text: "Un étudiant d’école de commerce qui doit faire une étude de marché de 2 mois", cat: 1, why: "Objectif pédagogique, convention." },
            { text: "Monter 8 vidéos publicitaires par mois, à un prix fixe par vidéo", cat: 2, why: "Livrables et prix ; le prestataire organise son travail." },
            { text: "Un BTS commerce en alternance pour développer les ventes", cat: 0, why: "Contrat d’apprentissage niveau bac+2." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Contrat d’apprentissage", back: "Formation en CFA + travail en entreprise ; salaire en % du SMIC ; maître d’apprentissage" },
            { front: "Aide apprenti < 250 salariés (2026)", back: "5 000 € (CAP-bac), 4 500 € (bac+2), 2 000 € (bac+3 à bac+5)" },
            { front: "OPCO", back: "Organisme qui finance la formation de l’apprenti et reçoit le contrat" },
            { front: "Gratification de stage", back: "Obligatoire au-delà de 2 mois de présence" },
            { front: "Stagiaire interdit pour…", back: "Un poste permanent, un remplacement, un pic d’activité" },
            { front: "Faux freelance", back: "Ordres + contrôle + sanction = subordination → requalification en salarié" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une entreprise de 5 salariés embauche un apprenti en CAP (contrat signé en avril 2026). L’aide est de…", options: ["2 000 €", "5 000 €", "Aucune aide"], answer: 1, explain: "Niveaux 3-4, moins de 250 salariés." },
            { q: "Un stagiaire peut-il remplacer une salariée en congé ?", options: ["Oui", "Non", "Oui, s’il est payé"], answer: 1, explain: "Interdit par la loi." },
            { q: "Au-delà de quelle durée la gratification de stage est-elle obligatoire ?", options: ["1 mois", "2 mois", "6 mois"], answer: 1, explain: "Plus de 2 mois de présence." },
            { q: "Quel élément indique un faux freelance ?", options: ["Il facture un prix par livrable", "L’entreprise lui impose ses horaires, ses ordres et le contrôle comme un salarié", "Il a plusieurs clients"], answer: 1, explain: "C’est le lien de subordination." },
          ],
        },
        {
          type: "case",
          title: "L’auto-entrepreneur à plein temps",
          story:
            "Pour éviter les cotisations, Hugo fait travailler Malik comme auto-entrepreneur : 35 heures par semaine dans l’entrepôt, horaires fixés par Hugo, consignes chaque matin, et Hugo est son seul client. Un an plus tard, Malik conteste devant les prud’hommes.",
          question: "Que risque Hugo ?",
          options: [
            "Rien, Malik a accepté le statut",
            "La requalification en contrat de travail (lien de subordination), avec rappel de salaires et de cotisations, et des poursuites possibles pour travail dissimulé",
            "Une simple remarque de l’URSSAF",
          ],
          answer: 1,
          explain:
            "Ce n’est pas le statut choisi qui compte, mais la réalité de la relation. Pour un poste à plein temps sous tes ordres, c’est un contrat de travail, éventuellement un apprentissage avec l’aide à l’embauche.",
        },
        {
          type: "fiche",
          title: "Alternance, stage, freelance",
          points: [
            "<b>Apprentissage</b> : CFA + entreprise, 16-29 ans en principe, salaire en % du SMIC, <b>maître d’apprentissage</b>, financement <b>OPCO</b>.",
            "Aide 2026 (< 250 salariés) : <b>5 000 €</b> (CAP-bac), <b>4 500 €</b> (bac+2), <b>2 000 €</b> (bac+3 à 5).",
            "<b>Stage</b> : convention, gratification au-delà de <b>2 mois</b>, jamais sur un poste permanent ; 3 stagiaires max. sous 20 salariés.",
            "<b>Freelance</b> : un résultat et un prix ; ordres + contrôle + sanction = <b>salarié déguisé</b>.",
          ],
          retenir: "L’alternance est souvent le meilleur rapport coût / engagement pour une petite entreprise.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "L’annonce et le sourcing",
      minutes: 16,
      objectives: ["Rédiger une annonce claire, attirante et légale", "Choisir où chercher les candidats"],
      steps: [
        {
          type: "lesson",
          title: "Attirer les bons profils",
          slides: [
            {
              title: "La structure d’une bonne annonce",
              body:
                "<ol><li><b>Intitulé clair</b>, avec les mots que les candidats tapent : « Préparateur de commandes (H/F) — Caen ».</li><li>L’<b>entreprise</b> en 3 lignes : ce qu’elle fait, sa taille, pourquoi c’est intéressant.</li><li>Les <b>missions</b> concrètes, au quotidien.</li><li>Le <b>profil</b> : compétences indispensables, puis les « plus ».</li><li>Les <b>conditions</b> : contrat, horaires, lieu, salaire, avantages, date de début.</li><li>Comment <b>postuler</b> (simple et rapide).</li></ol><p>Une annonce honnête (y compris sur les contraintes : port de charges, horaires décalés) évite les mauvaises surprises et les départs rapides.</p>",
            },
            {
              title: "Ce que la loi impose",
              body:
                "<ul><li>Aucune mention <b>discriminatoire</b> : pas de limite d’âge (« moins de 30 ans »), de sexe (« vendeuse »), d’origine, etc. On écrit « H/F » ou on utilise un intitulé neutre.</li><li>L’annonce doit être rédigée <b>en français</b> (une traduction ou des termes étrangers sans équivalent sont possibles).</li><li>Elle doit être <b>datée</b> et ne pas contenir d’allégations fausses (sur le poste, le salaire).</li><li>Pas d’annonce pour un poste qui n’existe pas (constituer un « vivier » doit être clairement indiqué).</li></ul>",
            },
            {
              title: "Afficher le salaire : bientôt une obligation",
              body:
                "<p>La <b>directive européenne sur la transparence salariale</b> (2023) prévoit que l’employeur indique la <b>rémunération ou une fourchette</b> dans l’annonce ou avant l’entretien, et interdit de demander aux candidats leur <b>salaire passé</b>.</p><p>La France devait la transposer avant le 7 juin 2026 : le projet de loi a été présenté en Conseil des ministres en <b>septembre 2026</b> et n’est pas encore adopté. Bonne pratique dès maintenant : <b>afficher une fourchette</b>. Les annonces avec salaire reçoivent nettement plus de candidatures pertinentes.</p>",
            },
            {
              title: "Où chercher",
              body:
                "<table class='t'><tr><th>Canal</th><th>Pour quels profils</th></tr><tr><td>France Travail</td><td>Gratuit, tous profils, aides et services de présélection</td></tr><tr><td>Indeed, HelloWork</td><td>Postes opérationnels et employés, gros volume</td></tr><tr><td>LinkedIn, Welcome to the Jungle</td><td>Profils commerciaux, marketing, cadres</td></tr><tr><td>Écoles, CFA</td><td>Alternants et stagiaires</td></tr><tr><td><b>Cooptation</b></td><td>Les recommandations de l’équipe et du réseau : souvent les meilleures recrues</td></tr><tr><td>Réseaux sociaux de l’entreprise</td><td>Candidats qui connaissent déjà la marque</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Mention légale ou interdite ?",
          instruction: "Cette mention peut-elle figurer dans une annonce ?",
          categories: ["Autorisée", "Interdite"],
          items: [
            { text: "« Vendeur / vendeuse (H/F) »", cat: 0, why: "Intitulé neutre." },
            { text: "« Jeune dynamique de moins de 30 ans »", cat: 1, why: "Discrimination liée à l’âge." },
            { text: "« Permis B exigé (livraisons quotidiennes) »", cat: 0, why: "Lien direct avec le poste." },
            { text: "« Profil européen souhaité »", cat: 1, why: "Discrimination liée à l’origine." },
            { text: "« Salaire : 2 000 à 2 300 € brut mensuel selon expérience »", cat: 0, why: "Recommandé, bientôt obligatoire." },
            { text: "« Hôtesse d’accueil, bonne présentation féminine »", cat: 1, why: "Sexe et apparence physique." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Structure d’une annonce", back: "Intitulé, entreprise, missions, profil, conditions (avec salaire), candidature" },
            { front: "H/F", back: "Pour un intitulé non discriminatoire" },
            { front: "Langue de l’annonce", back: "Le français (traduction possible en plus)" },
            { front: "Transparence salariale", back: "Fourchette de salaire et interdiction de demander le salaire passé : projet de loi en cours (2026)" },
            { front: "Cooptation", back: "Recrutement par recommandation de l’équipe ou du réseau" },
            { front: "France Travail", back: "Canal gratuit, avec services de présélection" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel intitulé est le meilleur ?", options: ["« Super opportunité ! »", "« Préparateur de commandes (H/F) — Caen — CDI »", "« Couteau suisse motivé »"], answer: 1, explain: "Clair, avec les mots recherchés, le lieu et le contrat." },
            { q: "« Recherche vendeuse de 20 à 30 ans » est…", options: ["acceptable", "discriminatoire (âge et sexe)", "obligatoire pour cibler"], answer: 1, explain: "Deux critères interdits." },
            { q: "Afficher une fourchette de salaire dans l’annonce…", options: ["est interdit", "est une bonne pratique, appelée à devenir obligatoire", "fait fuir les candidats"], answer: 1, explain: "La directive européenne est en cours de transposition." },
            { q: "Pour recruter un alternant, le canal le plus direct est…", options: ["LinkedIn", "les écoles et les CFA", "un cabinet de chasseurs de têtes"], answer: 1, explain: "Ils cherchent des entreprises pour leurs étudiants." },
          ],
        },
        {
          type: "case",
          title: "L’annonce sans réponse",
          story:
            "Noa publie : « Cherche personne motivée pour aider dans la boutique, polyvalente, contactez-nous. » En trois semaines, il reçoit 4 candidatures, aucune adaptée.",
          question: "Comment améliorer l’annonce ?",
          options: [
            "La republier telle quelle chaque semaine",
            "Un intitulé précis (poste, H/F, ville, contrat), les missions concrètes, les compétences clés, les horaires, une fourchette de salaire, et une diffusion sur France Travail, Indeed et les réseaux de la boutique, avec un appel à la cooptation",
            "Ajouter « urgent » en majuscules",
          ],
          answer: 1,
          explain:
            "Un candidat ne postule pas à un poste qu’il ne comprend pas. Plus l’annonce est concrète (missions, horaires, salaire), plus les candidatures sont nombreuses et pertinentes.",
        },
        {
          type: "fiche",
          title: "Annonce et sourcing",
          points: [
            "Annonce : <b>intitulé clair (H/F)</b>, entreprise, <b>missions</b>, profil, <b>conditions et salaire</b>, candidature simple.",
            "Légal : <b>aucune mention discriminatoire</b>, en <b>français</b>, datée, sincère.",
            "<b>Transparence salariale</b> : fourchette de salaire et interdiction de demander le salaire passé (projet de loi 2026).",
            "Canaux : <b>France Travail</b>, Indeed, LinkedIn, écoles et CFA, <b>cooptation</b>, réseaux de l’entreprise.",
          ],
          retenir: "Une annonce précise et honnête attire moins de candidats « au hasard » et plus de bons candidats.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Trier les candidatures",
      minutes: 15,
      objectives: ["Présélectionner vite et équitablement", "Respecter les règles sur les données des candidats"],
      steps: [
        {
          type: "lesson",
          title: "De 80 CV à 5 entretiens",
          slides: [
            {
              title: "Des critères fixés à l’avance",
              body:
                "<p>Avant d’ouvrir le premier CV, écris :</p><ul><li>les <b>critères éliminatoires</b> (2 ou 3 maximum, liés au poste : permis, disponibilité, diplôme obligatoire) ;</li><li>les <b>critères de choix</b> (expérience similaire, compétences, motivation), avec une note de 1 à 3.</li></ul><p>Trier avec une grille réduit l’influence de détails sans rapport avec le poste (photo, prénom, adresse, mise en page).</p>",
            },
            {
              title: "La préqualification téléphonique",
              body:
                "<p>Un appel de <b>10 à 15 minutes</b> avant de convoquer en entretien :</p><ul><li>vérifier les critères éliminatoires (disponibilité, horaires, trajet, prétentions salariales si tu affiches une fourchette) ;</li><li>poser une ou deux questions sur l’expérience ;</li><li>présenter le poste honnêtement ;</li><li>écouter la façon de s’exprimer (utile pour un poste en relation client).</li></ul><p>Tu gagnes des heures d’entretiens inutiles.</p>",
            },
            {
              title: "Les tests",
              body:
                "<ul><li>Les tests (pratiques, écrits, personnalité) doivent avoir un <b>lien direct avec le poste</b> et être <b>pertinents</b>.</li><li>Le candidat doit être <b>informé à l’avance</b> des méthodes utilisées, et les résultats doivent rester <b>confidentiels</b>.</li><li>Les tests pratiques (préparer une commande, rédiger un e-mail, corriger une fiche produit) sont les plus utiles et les mieux acceptés.</li></ul>",
            },
            {
              title: "Les données des candidats (RGPD)",
              body:
                "<ul><li>Informer les candidats de l’usage de leurs données (une phrase dans l’annonce ou l’accusé de réception suffit).</li><li>Ne collecter que les informations <b>utiles</b> pour évaluer la candidature.</li><li>Recommandation de la CNIL : conserver un CV non retenu <b>2 ans maximum</b> après le dernier contact (avec l’accord du candidat pour le garder en vivier).</li><li>Stocker les CV en lieu sûr (pas dans une boîte mail partagée avec tout le monde).</li></ul><p>Et une règle de courtoisie qui fait la réputation d’une entreprise : <b>répondre à tous</b>, même par un message de refus court.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Critères éliminatoires", back: "2 ou 3 maximum, liés au poste, fixés avant de lire les CV" },
            { front: "Préqualification", back: "Appel de 10-15 min pour vérifier les essentiels avant l’entretien" },
            { front: "Tests de recrutement", back: "Pertinents, liés au poste, annoncés à l’avance, résultats confidentiels" },
            { front: "Conservation d’un CV non retenu", back: "2 ans max. après le dernier contact (recommandation CNIL)" },
            { front: "Collecte de données", back: "Seulement ce qui sert à évaluer la candidature" },
            { front: "Répondre à tous", back: "Même un refus court protège la réputation de l’entreprise" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quand fixer les critères de tri ?", options: ["Après avoir lu les CV", "Avant d’ouvrir le premier CV", "Pendant l’entretien"], answer: 1, explain: "Pour comparer tous les candidats de la même façon." },
            { q: "Combien de temps conserver un CV non retenu, selon la CNIL ?", options: ["Indéfiniment", "2 ans maximum après le dernier contact", "1 semaine"], answer: 1, explain: "Avec l’accord du candidat pour le vivier." },
            { q: "Un test de recrutement doit être…", options: ["secret jusqu’au dernier moment", "lié au poste et annoncé au candidat", "le plus difficile possible"], answer: 1, explain: "Le candidat doit connaître les méthodes utilisées." },
            { q: "À quoi sert la préqualification téléphonique ?", options: ["À remplacer l’entretien", "À éviter des entretiens inutiles en vérifiant les essentiels", "À négocier le salaire"], answer: 1, explain: "10 à 15 minutes bien utilisées." },
          ],
        },
        {
          type: "case",
          title: "Le tri au feeling",
          story:
            "Pour un poste de livreur, Hugo écarte les CV « mal présentés » et ceux dont l’adresse est dans certains quartiers « trop loin ». Il garde ceux qui ont une photo souriante.",
          question: "Qu’est-ce qui pose problème ?",
          options: [
            "Rien, c’est son droit de choisir",
            "Ses critères n’ont pas de lien avec le poste et le lieu de résidence et l’apparence physique sont des critères de discrimination ; il devait fixer des critères liés au poste (permis, disponibilité, expérience de livraison) et vérifier le temps de trajet en préqualification",
            "Il aurait dû demander une lettre de motivation",
          ],
          answer: 1,
          explain:
            "Une mise en page soignée ne dit rien de la capacité à livrer. Les critères liés au poste sont plus justes, plus légaux et plus efficaces.",
        },
        {
          type: "fiche",
          title: "Trier",
          points: [
            "<b>Critères éliminatoires</b> (2-3) et <b>critères de choix</b> notés, fixés <b>avant</b> le tri.",
            "<b>Préqualification</b> téléphonique de 10-15 min.",
            "<b>Tests</b> pertinents, liés au poste, annoncés, confidentiels.",
            "RGPD : informer, collecter le strict utile, <b>2 ans</b> max. pour un CV non retenu ; <b>répondre à tous</b>.",
          ],
          retenir: "Un tri rapide n’est juste que s’il repose sur des critères écrits à l’avance.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "L’entretien en profondeur",
      minutes: 18,
      objectives: ["Mener un entretien structuré de bout en bout", "Repérer et limiter ses propres biais"],
      steps: [
        {
          type: "lesson",
          title: "Un entretien qui révèle les compétences",
          slides: [
            {
              title: "Le déroulé (45 à 60 minutes)",
              body:
                "<ol><li><b>Accueil</b> (5 min) : mettre à l’aise, présenter le déroulé.</li><li><b>Présentation de l’entreprise et du poste</b> (5 min).</li><li><b>Parcours</b> du candidat (10 min).</li><li><b>Questions comportementales</b> par compétence (15-20 min).</li><li><b>Mise en situation</b> (10-15 min).</li><li><b>Questions du candidat</b> (5 min) : elles en disent long sur sa motivation.</li><li><b>Suite du processus</b> : dates, prochaine étape.</li></ol><p>Le recruteur parle <b>peu</b> : idéalement le candidat parle 70 à 80 % du temps.</p>",
            },
            {
              title: "Une question par compétence",
              body:
                "<table class='t'><tr><th>Compétence</th><th>Question comportementale</th></tr><tr><td>Rigueur</td><td>« Racontez-moi une erreur que vous avez faite au travail. Qu’avez-vous fait ensuite ? »</td></tr><tr><td>Relation client</td><td>« Parlez-moi d’un client mécontent que vous avez dû gérer. »</td></tr><tr><td>Autonomie</td><td>« Racontez une situation où vous avez dû trouver une solution seul. »</td></tr><tr><td>Travail en équipe</td><td>« Parlez-moi d’un désaccord avec un collègue. Comment cela s’est-il terminé ? »</td></tr></table><p><b>Creuse</b> chaque réponse : « Qu’avez-vous fait, vous, précisément ? », « Quel a été le résultat ? », « Que feriez-vous différemment ? » Méfie-toi des réponses en « nous » ou au conditionnel.</p>",
            },
            {
              title: "Les biais du recruteur",
              body:
                "<ul><li><b>Effet de halo</b> : une qualité visible (aisance, belle école) colore tout le jugement.</li><li><b>Première impression</b> : on décide en quelques minutes puis on cherche à confirmer.</li><li><b>Biais de similarité</b> : préférer les candidats qui nous ressemblent (même parcours, mêmes loisirs).</li><li><b>Effet de contraste</b> : un candidat moyen paraît excellent après un mauvais.</li></ul><p>Antidotes : les <b>mêmes questions</b> pour tous, une <b>grille notée</b> juste après l’entretien, et si possible un <b>deuxième avis</b> (un collègue qui note séparément).</p>",
            },
            {
              title: "La grille d’évaluation",
              body:
                "<p>Pour chaque compétence du poste, une note de 1 à 4 avec un exemple tiré de l’entretien :</p><table class='t'><tr><th>Compétence</th><th>Note</th><th>Preuve</th></tr><tr><td>Rigueur</td><td>3</td><td>A mis en place une check-list après une erreur d’expédition</td></tr><tr><td>Relation client</td><td>4</td><td>Exemple précis de client mécontent fidélisé</td></tr><tr><td>Mise en situation</td><td>2</td><td>3 erreurs sur 10 lignes de commande</td></tr></table><p>Une note sans preuve est une impression.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Bonne question ou mauvaise question ?",
          instruction: "Cette question aide-t-elle à évaluer une compétence réelle ?",
          categories: ["Utile", "Peu utile"],
          items: [
            { text: "« Racontez-moi la dernière fois où vous avez dû respecter un délai très court. »", cat: 0, why: "Comportementale : un fait passé." },
            { text: "« Quels sont vos trois défauts ? »", cat: 1, why: "Réponses préparées et convenues." },
            { text: "« Concrètement, qu’avez-vous fait, vous ? »", cat: 0, why: "Relance qui fait apparaître le rôle réel." },
            { text: "« Vous êtes plutôt quelqu’un de motivé ? »", cat: 1, why: "Question fermée : la réponse est toujours oui." },
            { text: "« Comment avez-vous géré votre désaccord avec votre responsable ? »", cat: 0, why: "Situation réelle et vérifiable." },
            { text: "« Où vous voyez-vous dans 10 ans ? »", cat: 1, why: "Peu prédictive pour un poste opérationnel." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Le candidat parle…", back: "70 à 80 % du temps de l’entretien" },
            { front: "Question comportementale", back: "« Racontez-moi une fois où… » : un fait passé, précis" },
            { front: "Relances", back: "« Qu’avez-vous fait, vous ? Quel résultat ? Et avec le recul ? »" },
            { front: "Effet de halo", back: "Une qualité visible colore tout le jugement" },
            { front: "Biais de similarité", back: "Préférer les candidats qui nous ressemblent" },
            { front: "Grille d’évaluation", back: "Une note par compétence, avec une preuve tirée de l’entretien" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi se méfier d’une réponse en « nous » ?", options: ["C’est impoli", "Elle masque le rôle réel du candidat", "Ce n’est pas grammatical"], answer: 1, explain: "Relance : « Et vous, précisément ? »" },
            { q: "Un candidat sorti d’une grande école paraît excellent sur tout : c’est peut-être…", options: ["l’effet de halo", "l’effet de contraste", "une preuve de compétence"], answer: 0, explain: "Une qualité visible influence tout le reste." },
            { q: "Quand remplir la grille d’évaluation ?", options: ["À la fin de tous les entretiens", "Juste après chaque entretien", "Avant l’entretien"], answer: 1, explain: "La mémoire déforme vite." },
            { q: "Quelle question est la plus prédictive ?", options: ["« Êtes-vous rigoureux ? »", "« Racontez-moi une erreur que vous avez faite et ce que vous avez changé ensuite. »", "« Quel animal seriez-vous ? »"], answer: 1, explain: "Un comportement passé, précis et vérifiable." },
          ],
        },
        {
          type: "case",
          title: "Le candidat brillant à l’oral",
          story:
            "Pour un poste de gestionnaire de stock, Sofia hésite entre Thomas, très à l’aise et drôle, et Inès, plus réservée. Sur la mise en situation (inventaire d’un rayon de 40 références), Thomas fait 7 erreurs, Inès aucune. Sofia penche pour Thomas : « Il a un super état d’esprit. »",
          question: "Que lui conseiller ?",
          options: [
            "Suivre son intuition",
            "Revenir à la grille : pour ce poste, la rigueur est la compétence clé ; la mise en situation est la preuve la plus fiable, et l’aisance orale relève sans doute de l’effet de halo",
            "Recruter les deux",
          ],
          answer: 1,
          explain:
            "L’entretien évalue souvent l’aisance à parler, pas la capacité à faire le travail. La mise en situation et la grille ramènent la décision aux compétences réellement nécessaires.",
        },
        {
          type: "fiche",
          title: "L’entretien",
          points: [
            "Déroulé : accueil, poste, parcours, <b>questions comportementales</b>, <b>mise en situation</b>, questions du candidat, suite.",
            "Une question par compétence, puis <b>creuser</b> : « vous, précisément ? », résultat, recul.",
            "Biais : <b>halo</b>, <b>première impression</b>, <b>similarité</b>, <b>contraste</b>.",
            "Antidotes : mêmes questions, <b>grille notée avec preuves</b>, deuxième avis.",
          ],
          retenir: "Ce qu’un candidat a fait et ce qu’il réussit en mise en situation prédisent mieux que ce qu’il dit de lui.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Vérifier, décider, faire une offre",
      minutes: 16,
      objectives: ["Prendre des références et décider", "Faire une offre sans risque juridique et refuser avec élégance"],
      steps: [
        {
          type: "lesson",
          title: "La dernière ligne droite",
          slides: [
            {
              title: "Les références",
              body:
                "<ul><li>Le candidat doit être <b>informé</b> des méthodes utilisées : demande-lui les coordonnées de 2 anciens responsables et son accord pour les appeler.</li><li>Pose des <b>questions factuelles</b> : « Quelles étaient ses missions ? Qu’est-ce qu’il faisait particulièrement bien ? Sur quoi devait-il progresser ? Le réembaucheriez-vous ? »</li><li>Écoute aussi les <b>silences</b> et les hésitations.</li><li>Vérifie les diplômes indispensables au poste et, pour certaines activités, les autorisations obligatoires.</li></ul>",
            },
            {
              title: "Décider",
              body:
                "<ul><li>Compare les candidats <b>sur la grille</b>, compétence par compétence, pas sur un souvenir global.</li><li>Pose-toi la question : « Est-ce que je serais <b>déçu</b> si ce candidat partait chez un concurrent ? » Si la réponse est non, ce n’est pas le bon.</li><li>Mieux vaut <b>ne pas recruter</b> que recruter par défaut : une erreur de recrutement coûte souvent plusieurs mois de salaire, de temps et d’énergie.</li></ul>",
            },
            {
              title: "L’offre écrite : attention",
              body:
                "<p>Depuis 2017, la Cour de cassation distingue :</p><ul><li>l’<b>offre de contrat de travail</b> (poste, rémunération, date d’entrée) : elle peut être retirée tant que le candidat ne l’a pas acceptée et avant le délai fixé, mais un retrait abusif peut entraîner des dommages-intérêts ;</li><li>la <b>promesse unilatérale de contrat de travail</b> : l’employeur s’engage et laisse seulement au candidat le choix d’accepter. La retirer revient à rompre un contrat : le contrat de travail est considéré comme conclu.</li></ul><p>En pratique : n’envoie une offre précise que lorsque ta décision est <b>ferme</b>, et fixe un <b>délai</b> de réponse (par exemple 5 jours).</p>",
            },
            {
              title: "Négocier et refuser",
              body:
                "<ul><li><b>Salaire</b> : annonce une fourchette tôt, explique ce qui fait évoluer la rémunération (objectifs, ancienneté, prime). Ne promets pas oralement ce que tu ne peux pas écrire.</li><li>Le projet de loi sur la transparence salariale prévoit d’<b>interdire de demander le salaire passé</b> : prends l’habitude de parler de la rémunération du poste, pas de l’historique du candidat.</li><li><b>Refuser</b> les autres candidats rencontrés <b>rapidement</b>, idéalement par téléphone pour les finalistes, avec un mot sincère. Ce sont peut-être de futurs clients ou de futures recrues.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Références", back: "Avec l’information et l’accord du candidat ; questions factuelles" },
            { front: "« Le réembaucheriez-vous ? »", back: "La question de référence la plus révélatrice" },
            { front: "Le test du concurrent", back: "Serais-je déçu s’il partait chez un concurrent ? Si non, ce n’est pas le bon" },
            { front: "Offre de contrat de travail", back: "Peut être retirée avant acceptation et avant le délai fixé (retrait abusif = dommages-intérêts)" },
            { front: "Promesse unilatérale de contrat", back: "La retirer = rompre le contrat de travail, déjà considéré comme conclu" },
            { front: "Refuser un finaliste", back: "Vite, idéalement par téléphone, avec un mot sincère" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Peut-on appeler les anciens employeurs d’un candidat à son insu ?", options: ["Oui, c’est courant", "Non : le candidat doit être informé des méthodes utilisées", "Oui, si c’est rapide"], answer: 1, explain: "Le Code du travail impose cette information." },
            { q: "Hésitation entre deux candidats moyens : que faire ?", options: ["Prendre le moins cher", "Ne pas recruter par défaut et relancer la recherche", "Tirer au sort"], answer: 1, explain: "Une erreur de recrutement coûte plus cher qu’une attente." },
            { q: "Retirer une promesse unilatérale de contrat de travail revient à…", options: ["rien du tout", "rompre un contrat de travail déjà conclu", "annuler un simple devis"], answer: 1, explain: "Le candidat peut demander réparation comme pour une rupture." },
            { q: "Quand envoyer une offre écrite précise ?", options: ["Au premier bon entretien, pour ne pas perdre le candidat", "Quand la décision est ferme, avec un délai de réponse", "Jamais par écrit"], answer: 1, explain: "Elle engage l’entreprise." },
          ],
        },
        {
          type: "case",
          title: "L’offre retirée",
          story:
            "Noa envoie un e-mail à Karim : « Nous avons le plaisir de vous confirmer votre embauche en CDI comme logisticien à 2 100 € brut, début le 1er décembre. » Karim accepte et démissionne de son emploi. Une semaine plus tard, une grosse commande est annulée et Noa lui écrit que l’embauche n’aura finalement pas lieu.",
          question: "Quelle est la situation ?",
          options: [
            "Aucun problème : Karim n’a pas commencé",
            "L’e-mail précisait le poste, la rémunération et la date, et Karim l’a accepté : le contrat de travail est formé. Le retirer s’analyse comme une rupture, avec des indemnités possibles ; Noa aurait dû attendre que sa décision soit ferme",
            "Karim doit rembourser ses frais",
          ],
          answer: 1,
          explain:
            "Un e-mail peut suffire à engager l’entreprise. Avant d’écrire « nous confirmons votre embauche », vérifie le budget et la visibilité sur l’activité.",
        },
        {
          type: "fiche",
          title: "Vérifier, décider, offrir",
          points: [
            "<b>Références</b> avec l’information et l’accord du candidat ; « le réembaucheriez-vous ? ».",
            "Décider <b>sur la grille</b> ; mieux vaut <b>ne pas recruter</b> que recruter par défaut.",
            "<b>Offre</b> de contrat (retirable avant acceptation, sans abus) vs <b>promesse unilatérale</b> (engage) ; n’écrire que quand c’est <b>ferme</b>, avec un délai.",
            "Parler du salaire <b>du poste</b>, pas du salaire passé ; <b>refuser</b> vite et proprement les autres candidats.",
          ],
          retenir: "Un e-mail qui précise poste, salaire et date peut valoir contrat : écris-le seulement quand c’est décidé.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Les formalités d’embauche",
      minutes: 17,
      objectives: ["Accomplir toutes les démarches obligatoires dans le bon ordre", "Rédiger un contrat de travail complet"],
      steps: [
        {
          type: "lesson",
          title: "La check-list de l’embauche",
          slides: [
            {
              title: "Avant le premier jour",
              body:
                "<ol><li><b>Salarié étranger hors Union européenne</b> : vérifier son autorisation de travail auprès de la préfecture, au moins <b>2 jours ouvrables avant</b> l’embauche.</li><li><b>DPAE</b> (déclaration préalable à l’embauche) sur le site de l’URSSAF, dans les <b>8 jours précédant</b> l’embauche et au plus tard juste avant la prise de poste.</li><li>Préparer le <b>contrat de travail</b>.</li><li>Pour le tout premier salarié : choisir sa <b>convention collective</b>, adhérer à un service de <b>santé au travail</b>, à une caisse de retraite complémentaire, et mettre en place la <b>mutuelle</b> collective.</li></ol>",
            },
            {
              title: "Le contrat de travail",
              body:
                "<p>Mentions à prévoir :</p><ul><li>identité des parties, <b>date de début</b>, lieu de travail ;</li><li><b>intitulé du poste</b>, qualification et classification selon la convention collective ;</li><li><b>rémunération</b> (salaire de base, primes) et <b>durée du travail</b> ;</li><li><b>période d’essai</b> (si prévue) et éventuel renouvellement ;</li><li>convention collective applicable, congés payés, préavis.</li></ul><p>Le salarié doit aussi recevoir, dans le premier mois, les informations essentielles sur la relation de travail (obligation issue d’une directive européenne de 2019). Un contrat écrit et complet les contient déjà.</p>",
            },
            {
              title: "Les périodes d’essai en détail",
              body:
                "<table class='t'><tr><th>Contrat</th><th>Durée maximale</th></tr><tr><td>CDI ouvriers, employés</td><td>2 mois (4 avec renouvellement)</td></tr><tr><td>CDI agents de maîtrise, techniciens</td><td>3 mois (6 avec renouvellement)</td></tr><tr><td>CDI cadres</td><td>4 mois (8 avec renouvellement)</td></tr><tr><td>CDD de 6 mois ou moins</td><td>1 jour par semaine, 2 semaines maximum</td></tr><tr><td>CDD de plus de 6 mois</td><td>1 mois maximum</td></tr></table><p>La période d’essai doit être <b>écrite dans le contrat</b> ; le renouvellement n’est possible que si un accord de branche le prévoit, si le contrat le mentionne et avec l’accord <b>écrit</b> du salarié.</p>",
            },
            {
              title: "Après l’embauche",
              body:
                "<ul><li>Inscrire le salarié au <b>registre unique du personnel</b>.</li><li>Organiser la <b>visite d’information et de prévention</b> (médecine du travail) dans les <b>3 mois</b> suivant la prise de poste (avant l’embauche pour certains postes à risques).</li><li>Établir le premier <b>bulletin de paie</b> et la déclaration sociale nominative (DSN) mensuelle, souvent via l’expert-comptable ou un logiciel de paie.</li><li>Informer le salarié de son droit au premier <b>entretien de parcours professionnel</b> (au cours de la première année).</li><li>Mettre à jour le <b>document unique d’évaluation des risques</b> (DUERP), obligatoire dès le premier salarié.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Avant ou après l’embauche ?",
          instruction: "À quel moment faut-il accomplir cette formalité ?",
          categories: ["Avant la prise de poste", "Après la prise de poste"],
          items: [
            { text: "La DPAE à l’URSSAF", cat: 0, why: "Elle est préalable, comme son nom l’indique." },
            { text: "Vérifier l’autorisation de travail d’un salarié non européen", cat: 0, why: "Au moins 2 jours ouvrables avant." },
            { text: "La visite d’information et de prévention (poste sans risque particulier)", cat: 1, why: "Dans les 3 mois." },
            { text: "Le premier bulletin de paie", cat: 1, why: "À la fin du premier mois." },
            { text: "Prévoir la période d’essai par écrit dans le contrat", cat: 0, why: "Elle ne se présume pas." },
            { text: "Le premier entretien de parcours professionnel", cat: 1, why: "Au cours de la première année." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Autorisation de travail (hors UE)", back: "Vérification en préfecture au moins 2 jours ouvrables avant l’embauche" },
            { front: "DPAE", back: "Dans les 8 jours précédant l’embauche, au plus tard avant la prise de poste" },
            { front: "Essai CDD ≤ 6 mois", back: "1 jour par semaine, 2 semaines maximum" },
            { front: "Renouvellement de l’essai", back: "Accord de branche + mention au contrat + accord écrit du salarié" },
            { front: "Visite d’information et de prévention", back: "Dans les 3 mois suivant la prise de poste" },
            { front: "DUERP", back: "Document unique d’évaluation des risques, obligatoire dès le 1er salarié" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un CDD de 4 mois peut comporter une période d’essai de…", options: ["2 mois", "1 jour par semaine, soit environ 2 semaines maximum", "Pas d’essai possible"], answer: 1, explain: "1 jour par semaine, plafonné à 2 semaines pour un CDD de 6 mois ou moins." },
            { q: "Une période d’essai non écrite dans le contrat…", options: ["s’applique automatiquement", "n’existe pas", "dure 1 mois"], answer: 1, explain: "Elle ne se présume pas." },
            { q: "Quand faire la visite d’information et de prévention pour un poste sans risque particulier ?", options: ["Dans les 3 mois", "Dans l’année", "Jamais"], answer: 0, explain: "Dans les 3 mois suivant la prise de poste." },
            { q: "Le document unique d’évaluation des risques est obligatoire…", options: ["à partir de 50 salariés", "dès le premier salarié", "seulement dans le BTP"], answer: 1, explain: "DUERP dès le premier salarié." },
          ],
        },
        {
          type: "case",
          title: "Le premier salarié",
          story:
            "Noa embauche son tout premier salarié en CDI, qui commence lundi. Il a signé le contrat, mais n’a fait aucune autre démarche : « Le comptable s’occupera de la paie à la fin du mois. »",
          question: "Que doit-il faire avant lundi ?",
          options: [
            "Rien d’autre, le comptable gère tout",
            "Faire la DPAE, vérifier la convention collective applicable, adhérer à un service de santé au travail et à la retraite complémentaire, mettre en place la mutuelle collective ; puis, après l’arrivée : registre du personnel, visite médicale dans les 3 mois, DUERP",
            "Seulement acheter un bureau",
          ],
          answer: 1,
          explain:
            "Sans DPAE, l’embauche peut être considérée comme du travail dissimulé. L’expert-comptable peut aider, mais l’employeur reste responsable : une check-list évite les oublis.",
        },
        {
          type: "fiche",
          title: "Formalités d’embauche",
          points: [
            "Avant : <b>autorisation de travail</b> (hors UE, 2 jours ouvrables avant), <b>DPAE</b>, contrat ; pour le 1er salarié : convention collective, santé au travail, retraite complémentaire, <b>mutuelle</b>.",
            "Contrat : poste, classification, <b>rémunération</b>, durée du travail, <b>période d’essai</b>, convention collective.",
            "Essai : CDI <b>2 / 3 / 4 mois</b> ; CDD ≤ 6 mois : <b>1 jour/semaine, 2 semaines max.</b> ; > 6 mois : <b>1 mois</b>.",
            "Après : <b>registre du personnel</b>, <b>visite dans les 3 mois</b>, paie et DSN, <b>DUERP</b>, entretien de parcours professionnel dans l’année.",
          ],
          retenir: "La DPAE avant le premier jour : sans elle, l’embauche peut être considérée comme du travail dissimulé.",
        },
      ],
    },
  ],
});
