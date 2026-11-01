/* ============================================================
   COURS : Le droit du travail du manager
   École de Management · 8 séances de 15 à 20 minutes
   Ce qu'un dirigeant de petite entreprise doit savoir au
   quotidien : sources du droit, temps de travail, salaire,
   congés et absences, santé et sécurité, libertés des
   salariés, seuils et représentants, fin du contrat.
   Règles vérifiées au 1er novembre 2026, dont : congé
   supplémentaire de naissance (LFSS 2026, pris depuis le
   1er juillet 2026) ; contribution patronale de 40 % sur les
   indemnités de rupture conventionnelle (ruptures prenant
   effet depuis le 1er janvier 2026). À METTRE À JOUR si les
   règles évoluent. Ce cours ne remplace pas un conseil
   juridique personnalisé.
   ============================================================ */
AGORA.registerCourse({
  id: "management-droit-travail",
  faculty: "management",
  title: "Le droit du travail du manager",
  subtitle: "Les règles à connaître pour diriger une équipe sans faux pas",
  color: "#2f7d5b",
  level: "Intermédiaire",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour connaître les règles qui encadrent le quotidien d’un employeur : où trouver le droit applicable, temps de travail et heures supplémentaires, salaire et bulletin de paie, congés et absences, santé et sécurité, libertés des salariés au travail, seuils d’effectif et représentants du personnel, et les différentes façons de mettre fin à un contrat. Avec des cas concrets de petite entreprise. Pour une situation sensible, ce cours ne remplace pas l’avis d’un avocat ou d’un expert-comptable.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Les sources du droit du travail",
      minutes: 16,
      objectives: ["Savoir où trouver les règles applicables à ton entreprise", "Comprendre les pouvoirs de l’employeur et leurs limites"],
      steps: [
        {
          type: "lesson",
          title: "Qui fixe les règles ?",
          slides: [
            {
              title: "Les différentes sources",
              body:
                "<table class='t'><tr><th>Source</th><th>Ce qu’elle contient</th></tr><tr><td><b>Code du travail</b></td><td>Les règles de base pour tous : durée du travail, SMIC, congés, licenciement…</td></tr><tr><td><b>Convention collective</b> de branche</td><td>Les règles de ton secteur : salaires minimaux, primes, préavis, période d’essai…</td></tr><tr><td><b>Accords d’entreprise</b></td><td>Négociés dans l’entreprise (temps de travail, télétravail…)</td></tr><tr><td><b>Règlement intérieur</b></td><td>Discipline, hygiène, sécurité ; obligatoire à partir de 50 salariés</td></tr><tr><td><b>Contrat de travail</b></td><td>Ce qui est propre à chaque salarié</td></tr><tr><td><b>Usages</b></td><td>Pratiques constantes et générales (une prime versée tous les ans à tous)</td></tr></table>",
            },
            {
              title: "Trouver sa convention collective",
              body:
                "<ul><li>Elle dépend de l’<b>activité principale</b> de l’entreprise (code APE, à vérifier), pas d’un choix libre.</li><li>Chaque convention a un numéro <b>IDCC</b>, qui doit figurer sur les bulletins de paie.</li><li>On la consulte gratuitement sur <b>Légifrance</b> ou sur <b>code.travail.gouv.fr</b>, qui répond aussi aux questions courantes selon ta convention.</li><li>Exemples : commerce de détail non alimentaire, commerce de gros, transports routiers et activités auxiliaires…</li></ul><p>Réflexe : avant de répondre à une question RH (préavis, prime, essai), vérifie <b>toujours</b> la convention collective.</p>",
            },
            {
              title: "Quelle règle s’applique ?",
              body:
                "<p>Principe historique : quand plusieurs règles s’appliquent, on retient la plus <b>favorable au salarié</b>. Depuis 2017, c’est plus nuancé :</p><ul><li>certains sujets sont réservés à la <b>branche</b> (salaires minimaux, classifications…) ;</li><li>sur beaucoup d’autres sujets, un <b>accord d’entreprise</b> peut fixer ses propres règles, même moins favorables que la branche ;</li><li>le <b>contrat de travail</b> peut toujours être plus favorable que les accords.</li></ul><p>En pratique, pour une petite entreprise sans accord : Code du travail + convention collective + contrat.</p>",
            },
            {
              title: "Le pouvoir de l’employeur",
              body:
                "<p>L’employeur dispose de trois pouvoirs :</p><ul><li><b>Direction</b> : organiser le travail, donner des instructions, fixer les horaires dans le cadre du contrat.</li><li><b>Réglementaire</b> : édicter des règles générales (règlement intérieur, notes de service).</li><li><b>Disciplinaire</b> : sanctionner une faute, selon une procédure.</li></ul><p>Limite essentielle : une restriction aux droits et libertés des salariés doit être <b>justifiée</b> par la nature de la tâche et <b>proportionnée</b> au but recherché. Et un élément essentiel du contrat (salaire, qualification, durée du travail) ne peut pas être modifié sans l’<b>accord du salarié</b>.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Changement des conditions ou modification du contrat ?",
          instruction: "L’employeur peut-il l’imposer (changement des conditions de travail) ou faut-il l’accord du salarié (modification du contrat) ?",
          categories: ["Peut être imposé", "Accord du salarié nécessaire"],
          items: [
            { text: "Passer de 9 h-17 h à 8 h 30-16 h 30 (même durée, jour)", cat: 0, why: "Simple changement d’horaires dans la journée." },
            { text: "Baisser le salaire de base de 200 €", cat: 1, why: "La rémunération est un élément essentiel." },
            { text: "Changer de logiciel de gestion des commandes", cat: 0, why: "Organisation du travail." },
            { text: "Passer de 35 h à 28 h par semaine", cat: 1, why: "La durée du travail est un élément du contrat." },
            { text: "Passer d’un horaire de jour à un horaire de nuit", cat: 1, why: "Bouleversement de l’organisation de vie : accord requis." },
            { text: "Confier une nouvelle tâche correspondant à la qualification", cat: 0, why: "Relève du pouvoir de direction." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Convention collective", back: "Règles du secteur ; dépend de l’activité principale ; numéro IDCC sur la fiche de paie" },
            { front: "code.travail.gouv.fr", back: "Site officiel gratuit pour trouver sa convention et les réponses courantes" },
            { front: "Règlement intérieur", back: "Obligatoire à partir de 50 salariés" },
            { front: "Usage", back: "Pratique constante, générale et fixe : elle devient obligatoire" },
            { front: "Pouvoir de direction", back: "Organiser le travail et donner des instructions" },
            { front: "Modification du contrat", back: "Salaire, qualification, durée du travail : accord du salarié requis" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "De quoi dépend la convention collective applicable ?", options: ["Du choix du dirigeant", "De l’activité principale de l’entreprise", "Du lieu du siège social"], answer: 1, explain: "Le code APE est un indice, l’activité réelle est déterminante." },
            { q: "Une prime de fin d’année versée depuis 5 ans à tous les salariés, du même montant…", options: ["peut être supprimée du jour au lendemain", "peut constituer un usage, qu’il faut dénoncer selon une procédure", "est illégale"], answer: 1, explain: "Constance, généralité et fixité font l’usage." },
            { q: "L’employeur peut-il baisser le salaire sans l’accord du salarié ?", options: ["Oui", "Non", "Oui, si les ventes baissent"], answer: 1, explain: "C’est une modification du contrat." },
            { q: "À partir de combien de salariés le règlement intérieur est-il obligatoire ?", options: ["11", "50", "250"], answer: 1, explain: "50 salariés." },
          ],
        },
        {
          type: "case",
          title: "La mauvaise convention",
          story:
            "L’entreprise de Noa fait principalement de la vente en gros à des professionnels. Il applique depuis deux ans la convention du commerce de détail, trouvée « parce qu’elle ressemblait ». Un salarié découvre que la convention du commerce de gros prévoit un salaire minimum plus élevé pour son niveau.",
          question: "Que risque Noa ?",
          options: [
            "Rien, c’était une erreur de bonne foi",
            "Un rappel de salaire et des autres avantages prévus par la bonne convention, dans la limite de la prescription (3 ans pour les salaires) ; il fallait vérifier la convention à partir de l’activité principale",
            "Une simple mise en demeure sans conséquence",
          ],
          answer: 1,
          explain:
            "La convention s’impose selon l’activité réelle. Une vérification sur code.travail.gouv.fr ou avec l’expert-comptable dès la première embauche évite des rappels coûteux.",
        },
        {
          type: "fiche",
          title: "Sources et pouvoirs",
          points: [
            "Sources : <b>Code du travail</b>, <b>convention collective</b> (selon l’activité, IDCC), accords d’entreprise, <b>règlement intérieur</b> (≥ 50 salariés), contrat, usages.",
            "Trouver sa convention : <b>Légifrance</b>, <b>code.travail.gouv.fr</b>.",
            "Depuis 2017, l’accord d’entreprise prime sur la branche sur beaucoup de sujets (sauf salaires minimaux, classifications…).",
            "Pouvoirs : <b>direction</b>, réglementaire, <b>disciplinaire</b> ; modifier salaire, qualification ou durée du travail exige l’<b>accord du salarié</b>.",
          ],
          retenir: "Avant toute décision RH, un réflexe : que disent le Code du travail et MA convention collective ?",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Le temps de travail",
      minutes: 18,
      objectives: ["Connaître les durées maximales et les repos obligatoires", "Gérer correctement les heures supplémentaires"],
      steps: [
        {
          type: "lesson",
          title: "Durées, repos, heures supplémentaires",
          slides: [
            {
              title: "Les limites",
              body:
                "<table class='t'><tr><th>Règle</th><th>Seuil</th></tr><tr><td>Durée légale</td><td><b>35 h</b> par semaine (au-delà : heures supplémentaires)</td></tr><tr><td>Maximum par jour</td><td><b>10 h</b> (sauf dérogations)</td></tr><tr><td>Maximum par semaine</td><td><b>48 h</b>, et <b>44 h</b> en moyenne sur 12 semaines</td></tr><tr><td>Pause</td><td><b>20 min</b> dès 6 h de travail</td></tr><tr><td>Repos quotidien</td><td><b>11 h</b> consécutives</td></tr><tr><td>Repos hebdomadaire</td><td><b>24 h + 11 h</b> = 35 h consécutives, en principe le dimanche</td></tr></table>",
            },
            {
              title: "Les heures supplémentaires",
              body:
                "<ul><li>Ce sont les heures faites <b>au-delà de 35 h</b> par semaine, à la demande ou avec l’accord (même implicite) de l’employeur.</li><li>Majoration par défaut : <b>+25 %</b> de la 36e à la 43e heure, <b>+50 %</b> à partir de la 44e. Un accord peut prévoir un autre taux, au minimum 10 %.</li><li>Elles peuvent être remplacées en tout ou partie par un <b>repos compensateur</b> équivalent, si un accord le prévoit (ou, sans délégué syndical, sur décision de l’employeur si le CSE ne s’y oppose pas).</li><li>Contingent annuel par défaut : <b>220 heures</b> par salarié ; au-delà, contrepartie obligatoire en repos.</li></ul>",
            },
            {
              title: "Décompter le temps",
              body:
                "<ul><li>L’employeur doit pouvoir <b>prouver</b> les horaires effectués : planning, badgeuse, relevé signé chaque semaine.</li><li>En cas de litige, le salarié présente des éléments (notes, messages) et l’employeur doit y répondre avec <b>ses propres relevés</b>. Sans relevé, l’employeur est en position très faible.</li><li>Le temps de trajet domicile-travail n’est pas du travail effectif. Le temps d’habillage peut ouvrir droit à une contrepartie si une tenue est imposée et doit être mise sur place.</li></ul>",
            },
            {
              title: "Les cadres au forfait jours",
              body:
                "<ul><li>Pour les cadres <b>autonomes</b> dans l’organisation de leur temps, on peut compter en <b>jours</b> plutôt qu’en heures : <b>218 jours</b> par an au maximum en principe.</li><li>Conditions : un <b>accord collectif</b> qui le prévoit, une <b>convention individuelle</b> écrite signée par le salarié, et un <b>suivi de la charge</b> de travail (entretien annuel, respect des repos).</li><li>Sans ces garanties, le forfait peut être annulé et toutes les heures au-delà de 35 h deviennent des heures supplémentaires à payer.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Légal ou pas ?",
          instruction: "Cette organisation respecte-t-elle les règles par défaut ?",
          categories: ["Respecte les règles", "Ne respecte pas les règles"],
          items: [
            { text: "Finir à 22 h et reprendre à 7 h le lendemain", cat: 1, why: "9 h de repos seulement : il en faut 11." },
            { text: "Une journée de 9 h avec une pause de 30 min", cat: 0, why: "Sous les 10 h, pause suffisante." },
            { text: "6 h 30 de travail sans aucune pause", cat: 1, why: "20 min de pause dès 6 h." },
            { text: "Une semaine exceptionnelle de 46 h, les autres à 39 h", cat: 0, why: "Sous 48 h, moyenne sous 44 h." },
            { text: "Trois semaines d’affilée à 50 h pour l’inventaire", cat: 1, why: "48 h maximum par semaine." },
            { text: "Payer 39 h avec les 4 h au-delà de 35 h majorées de 25 %", cat: 0, why: "Heures supplémentaires correctement payées." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Durée légale", back: "35 h par semaine" },
            { front: "Maximums", back: "10 h/jour, 48 h/semaine, 44 h en moyenne sur 12 semaines" },
            { front: "Repos", back: "11 h par jour, 35 h consécutives par semaine ; pause de 20 min dès 6 h" },
            { front: "Majoration des heures sup. (par défaut)", back: "+25 % de la 36e à la 43e heure, +50 % ensuite" },
            { front: "Contingent annuel par défaut", back: "220 heures supplémentaires par salarié" },
            { front: "Forfait jours", back: "Cadres autonomes, 218 jours max., accord + convention individuelle + suivi de la charge" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un salarié à 35 h fait 40 h une semaine. Combien d’heures majorées à 25 % ?", options: ["5", "8", "0"], answer: 0, explain: "De la 36e à la 40e heure." },
            { q: "Le repos minimum entre deux journées de travail est de…", options: ["8 h", "11 h", "12 h"], answer: 1, explain: "11 heures consécutives." },
            { q: "En cas de litige sur les heures, qui doit produire les relevés d’horaires ?", options: ["Seulement le salarié", "L’employeur doit pouvoir justifier les horaires effectués", "L’inspection du travail"], answer: 1, explain: "Sans relevés, l’employeur est en difficulté." },
            { q: "Un forfait jours sans convention individuelle signée…", options: ["est valable", "est irrégulier : les heures au-delà de 35 h peuvent être réclamées", "est obligatoire pour les cadres"], answer: 1, explain: "Les garanties sont indispensables." },
          ],
        },
        {
          type: "case",
          title: "Le coup de feu de Noël",
          story:
            "En décembre, l’équipe logistique de Noa travaille de 7 h à 19 h avec une demi-heure de pause, six jours sur sept, pendant trois semaines. Les heures au-delà de 35 h sont « récupérées en janvier, quand ce sera calme », sans rien d’écrit.",
          question: "Quels problèmes cela pose-t-il ?",
          options: [
            "Aucun si les salariés sont d’accord",
            "11 h 30 de travail par jour (plus de 10 h) et plus de 60 h par semaine (plus de 48 h) ; sans accord prévoyant le repos compensateur, les heures supplémentaires doivent être payées et majorées ; il fallait étaler l’activité, renforcer avec des intérimaires et décompter précisément",
            "Seulement le travail le samedi",
          ],
          answer: 1,
          explain:
            "Les durées maximales protègent la santé et ne se négocient pas au cas par cas. Le dépassement expose à des amendes par salarié concerné, à des rappels de salaire et, en cas d’accident, à une faute de l’employeur.",
        },
        {
          type: "fiche",
          title: "Temps de travail",
          points: [
            "<b>35 h</b> légales ; max. <b>10 h/jour</b>, <b>48 h/semaine</b>, <b>44 h</b> en moyenne sur 12 semaines.",
            "Repos : <b>11 h</b> quotidien, <b>35 h</b> hebdomadaire (en principe le dimanche) ; <b>20 min</b> de pause dès 6 h.",
            "Heures sup. : <b>+25 %</b> (36e-43e), <b>+50 %</b> ensuite par défaut ; contingent <b>220 h</b> ; repos compensateur seulement si prévu.",
            "<b>Décompter</b> les horaires ; <b>forfait jours</b> (218 j) avec accord, convention individuelle et suivi de la charge.",
          ],
          retenir: "Les durées maximales et les repos ne se négocient pas : un pic d’activité se gère avec des renforts, pas avec des journées de 12 heures.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Le salaire et la paie",
      minutes: 15,
      objectives: ["Respecter les règles de paiement du salaire", "Éviter les erreurs courantes sur les primes, les retenues et les frais"],
      steps: [
        {
          type: "lesson",
          title: "Payer juste",
          slides: [
            {
              title: "Les règles de base",
              body:
                "<ul><li>Le salaire est payé <b>au moins une fois par mois</b>, à date fixe, par virement (ou chèque).</li><li>Un <b>bulletin de paie</b> est remis à chaque paiement (il peut être électronique, sauf opposition du salarié).</li><li>Le salaire respecte le <b>SMIC</b> et les <b>minima de la convention collective</b>.</li><li><b>Égalité de rémunération</b> entre les femmes et les hommes pour un même travail ou un travail de valeur égale ; plus largement, à travail égal, salaire égal (sauf raisons objectives : expérience, résultats…).</li><li>Un salarié peut demander un <b>acompte</b> correspondant à 15 jours de travail déjà effectués.</li></ul>",
            },
            {
              title: "Les primes",
              body:
                "<ul><li>Une prime prévue par le <b>contrat</b>, la convention collective ou un <b>usage</b> est obligatoire.</li><li>Une prime sur <b>objectifs</b> doit reposer sur des objectifs <b>réalisables</b>, connus à l’avance, et l’employeur doit pouvoir justifier le calcul.</li><li>Une prime vraiment <b>exceptionnelle</b> (une fois, pour un événement précis) n’engage pas pour l’avenir.</li><li>La <b>prime de partage de la valeur</b> permet de verser une prime avec un régime social et fiscal favorable, selon des conditions qui évoluent : vérifie-les avec ton expert-comptable.</li></ul>",
            },
            {
              title: "Les retenues interdites",
              body:
                "<ul><li>Les <b>amendes et sanctions pécuniaires</b> sont interdites : on ne retient pas le prix d’un colis cassé ou d’un retard sur le salaire.</li><li>Seules les heures <b>non travaillées</b> (absence, retard) peuvent être décomptées, au prorata.</li><li>Une avance consentie par l’employeur ne peut être récupérée que par retenues limitées à <b>10 %</b> du salaire exigible à chaque paie.</li><li>Le salarié n’engage sa responsabilité financière qu’en cas de <b>faute lourde</b> (intention de nuire), et seulement par une action en justice.</li></ul>",
            },
            {
              title: "Frais et avantages",
              body:
                "<ul><li><b>Frais professionnels</b> (déplacements, repas en mission, matériel) : ils sont remboursés en plus du salaire, sur justificatifs ou selon des barèmes.</li><li><b>Transport</b> : prise en charge obligatoire de <b>50 %</b> de l’abonnement de transport public ou de vélos en location.</li><li><b>Titres-restaurant</b> : facultatifs ; s’ils existent, ils doivent bénéficier à tous les salariés dans la même situation.</li><li><b>Avantages en nature</b> (véhicule de fonction utilisé à titre privé, téléphone…) : ils sont soumis à cotisations et apparaissent sur le bulletin.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Autorisé ou interdit ?",
          instruction: "L’employeur peut-il le faire ?",
          categories: ["Autorisé", "Interdit"],
          items: [
            { text: "Retenir 30 € pour un téléphone cassé par négligence", cat: 1, why: "Sanction pécuniaire interdite (pas de faute lourde)." },
            { text: "Décompter 2 heures d’absence non justifiée", cat: 0, why: "Heures non travaillées." },
            { text: "Récupérer une avance de 500 € à raison de 50 € par mois sur un salaire de 2 000 €", cat: 0, why: "Moins de 10 % du salaire par paie." },
            { text: "Ne verser la prime d’objectifs à personne car les objectifs n’ont jamais été communiqués", cat: 1, why: "Objectifs inconnus : la prime peut être due intégralement." },
            { text: "Rembourser 50 % de l’abonnement de bus", cat: 0, why: "C’est même obligatoire." },
            { text: "Payer le salaire tous les deux mois", cat: 1, why: "Au moins une fois par mois." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Paiement du salaire", back: "Au moins une fois par mois, avec bulletin de paie" },
            { front: "Acompte", back: "Le salarié peut demander l’équivalent de 15 jours travaillés" },
            { front: "Sanctions pécuniaires", back: "Interdites : pas de retenue pour une faute ou un objet cassé" },
            { front: "Récupération d’une avance", back: "Retenues limitées à 10 % du salaire à chaque paie" },
            { front: "Prime sur objectifs", back: "Objectifs réalisables et connus à l’avance, calcul justifiable" },
            { front: "Abonnement de transport public", back: "Pris en charge à 50 % par l’employeur" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un salarié casse un écran par maladresse. L’employeur peut…", options: ["retenir le prix sur le salaire", "ne rien retenir ; éventuellement sanctionner par un avertissement si c’est une faute", "le licencier pour faute lourde"], answer: 1, explain: "La maladresse n’est pas une intention de nuire." },
            { q: "Les titres-restaurant sont…", options: ["obligatoires", "facultatifs, mais égaux entre salariés dans la même situation", "réservés aux cadres"], answer: 1, explain: "Pas d’obligation légale de les mettre en place." },
            { q: "Une prime versée chaque année, à tous, du même montant, depuis 6 ans peut être…", options: ["un usage obligatoire", "toujours facultative", "illégale"], answer: 0, explain: "Pour la supprimer, il faut dénoncer l’usage selon une procédure." },
            { q: "Combien de temps l’employeur doit-il conserver les doubles des bulletins de paie ?", options: ["1 an", "5 ans", "Il n’y a pas de règle"], answer: 1, explain: "5 ans (le salarié, lui, a intérêt à les garder toute sa vie)." },
          ],
        },
        {
          type: "case",
          title: "Les colis abîmés",
          story:
            "Pour responsabiliser l’équipe, Hugo annonce : « Chaque colis abîmé par votre faute sera retenu sur votre paie. » Le mois suivant, il retire 45 € à un préparateur.",
          question: "Que faut-il en penser ?",
          options: [
            "C’est une bonne méthode de motivation",
            "C’est une sanction pécuniaire interdite : Hugo doit rembourser les 45 € et peut être sanctionné ; pour réduire la casse, il faut agir sur la formation, les procédures et, en cas de faute répétée, une sanction disciplinaire régulière",
            "C’est autorisé si c’est écrit au contrat",
          ],
          answer: 1,
          explain:
            "Même écrite dans le contrat ou le règlement intérieur, une amende est interdite. Seule la faute lourde permet d’engager la responsabilité financière du salarié, devant le juge.",
        },
        {
          type: "fiche",
          title: "Salaire et paie",
          points: [
            "Paiement <b>mensuel</b>, <b>bulletin</b>, SMIC et <b>minima conventionnels</b>, <b>égalité</b> de rémunération ; acompte possible.",
            "Primes : obligatoires si prévues (contrat, convention, <b>usage</b>) ; objectifs <b>réalisables et connus</b>.",
            "<b>Amendes interdites</b> ; seules les heures non travaillées se décomptent ; avance récupérée à <b>10 %</b> max. par paie.",
            "<b>Frais professionnels</b> remboursés, <b>50 %</b> du transport public, titres-restaurant facultatifs, avantages en nature déclarés.",
          ],
          retenir: "On ne punit jamais par le portefeuille : la retenue sur salaire pour faute est interdite.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Congés et absences",
      minutes: 17,
      objectives: ["Gérer les congés payés", "Connaître les principaux congés et absences et leurs règles"],
      steps: [
        {
          type: "lesson",
          title: "Les congés et absences",
          slides: [
            {
              title: "Les congés payés",
              body:
                "<ul><li>Chaque salarié acquiert <b>2,5 jours ouvrables</b> par mois de travail, soit <b>30 jours ouvrables</b> (5 semaines) par an.</li><li>L’employeur fixe la <b>période de prise</b> (elle inclut toujours du 1er mai au 31 octobre) et l’<b>ordre des départs</b>, après avis du CSE s’il existe, en tenant compte de la situation familiale.</li><li>Le salarié doit pouvoir prendre au moins <b>12 jours ouvrables continus</b> entre le 1er mai et le 31 octobre.</li><li>Les dates, une fois fixées, ne peuvent être changées moins d’<b>un mois</b> avant le départ, sauf circonstances exceptionnelles.</li><li>Depuis 2024, un salarié en <b>arrêt maladie</b> acquiert aussi des congés : 2 jours ouvrables par mois (maladie non professionnelle), dans la limite de 24 jours par an.</li></ul>",
            },
            {
              title: "La maladie",
              body:
                "<ul><li>Le salarié doit prévenir l’employeur et envoyer son <b>arrêt de travail</b> dans les <b>48 heures</b>.</li><li>La Sécurité sociale verse des indemnités journalières après un délai de carence de 3 jours.</li><li>À partir d’<b>un an d’ancienneté</b>, l’employeur doit en principe <b>compléter</b> ces indemnités (maintien partiel du salaire, après 7 jours de carence), et la convention collective est souvent plus favorable.</li><li>L’employeur peut organiser une <b>contre-visite médicale</b> s’il verse ce complément.</li><li>Le salarié malade ne peut pas être licencié <b>à cause</b> de sa maladie (discrimination).</li></ul>",
            },
            {
              title: "Les congés familiaux",
              body:
                "<table class='t'><tr><th>Événement</th><th>Congé (minimum légal)</th></tr><tr><td>Mariage ou PACS du salarié</td><td>4 jours</td></tr><tr><td>Naissance (père ou second parent)</td><td>3 jours + <b>congé de paternité</b> de 25 jours</td></tr><tr><td>Maternité</td><td><b>16 semaines</b> pour un premier ou deuxième enfant</td></tr><tr><td>Décès du conjoint, d’un parent, d’un frère ou d’une sœur</td><td>3 jours</td></tr><tr><td>Décès d’un enfant</td><td>12 à 14 jours (plus un congé de deuil)</td></tr></table><p><b>Nouveau en 2026</b> : le <b>congé supplémentaire de naissance</b>, pour les enfants nés ou adoptés depuis le 1er janvier 2026, pris depuis le 1er juillet 2026 : 1 ou 2 mois par parent, indemnisé par la Sécurité sociale, prévenance d’un mois en principe, et l’employeur ne peut pas le refuser.</p>",
            },
            {
              title: "Les absences injustifiées",
              body:
                "<ul><li>Une absence non justifiée n’est pas payée et peut être sanctionnée.</li><li><b>Abandon de poste</b> : depuis 2023, l’employeur peut mettre le salarié en demeure (lettre recommandée ou remise en main propre) de justifier son absence et de reprendre son poste dans un délai d’au moins <b>15 jours</b>. Sans réponse, le salarié est <b>présumé démissionnaire</b>.</li><li>Il peut justifier d’un motif légitime (raisons de santé, droit de retrait, grève, refus d’une modification du contrat…).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Congés payés", back: "2,5 jours ouvrables par mois, 30 par an (5 semaines)" },
            { front: "Congé principal", back: "Au moins 12 jours ouvrables continus entre le 1er mai et le 31 octobre" },
            { front: "Maladie et congés (depuis 2024)", back: "2 jours ouvrables par mois d’arrêt (non professionnel), 24 max. par an" },
            { front: "Arrêt maladie", back: "À transmettre dans les 48 h ; complément employeur dès 1 an d’ancienneté" },
            { front: "Congé de paternité", back: "25 jours (en plus des 3 jours de naissance)" },
            { front: "Congé supplémentaire de naissance (2026)", back: "1 ou 2 mois par parent, indemnisé par la Sécurité sociale, ne peut pas être refusé" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Combien de congés payés un salarié à temps plein acquiert-il sur une année complète ?", options: ["25 jours ouvrables", "30 jours ouvrables (5 semaines)", "20 jours"], answer: 1, explain: "2,5 jours ouvrables × 12 mois." },
            { q: "Qui fixe l’ordre des départs en congés ?", options: ["Les salariés entre eux", "L’employeur, selon des critères (situation familiale, ancienneté…)", "L’inspection du travail"], answer: 1, explain: "Après avis du CSE s’il existe." },
            { q: "Un salarié en arrêt maladie pendant 3 mois acquiert-il des congés payés ?", options: ["Non", "Oui, depuis 2024 (2 jours ouvrables par mois en cas de maladie non professionnelle)", "Seulement s’il est cadre"], answer: 1, explain: "Loi du 22 avril 2024." },
            { q: "Un salarié ne vient plus sans prévenir. Que peut faire l’employeur ?", options: ["Le considérer immédiatement comme démissionnaire", "Le mettre en demeure de justifier et reprendre son poste dans un délai d’au moins 15 jours", "Ne plus jamais le payer et attendre"], answer: 1, explain: "Procédure de présomption de démission." },
          ],
        },
        {
          type: "case",
          title: "Les congés d’été",
          story:
            "En juin, Noa annonce à son équipe qu’à cause d’une grosse commande, personne ne pourra prendre de vacances avant novembre. Une salariée avait posé ses trois semaines d’août, validées en mars.",
          question: "Que dit le droit ?",
          options: [
            "L’employeur décide, c’est son pouvoir de direction",
            "Les dates validées ne peuvent être modifiées moins d’un mois avant le départ sauf circonstances exceptionnelles, et chacun doit pouvoir prendre au moins 12 jours ouvrables continus entre le 1er mai et le 31 octobre ; il faut renforcer l’équipe (intérim, CDD de remplacement) plutôt que supprimer les congés",
            "Il suffit de payer les congés au lieu de les donner",
          ],
          answer: 1,
          explain:
            "Les congés payés protègent la santé : on ne peut pas les remplacer par de l’argent pendant le contrat. Une grosse commande se prépare avec des renforts.",
        },
        {
          type: "fiche",
          title: "Congés et absences",
          points: [
            "CP : <b>2,5 j ouvrables/mois</b> (30/an), période incluant <b>mai-octobre</b>, <b>12 jours continus</b> l’été, dates figées <b>1 mois</b> avant ; acquisition pendant la maladie depuis 2024.",
            "Maladie : arrêt sous <b>48 h</b>, complément employeur dès <b>1 an</b> d’ancienneté, contre-visite possible.",
            "Famille : mariage 4 j, naissance 3 j + <b>paternité 25 j</b>, maternité <b>16 semaines</b>, décès 3 à 14 j ; <b>congé supplémentaire de naissance</b> (2026) : 1-2 mois par parent.",
            "<b>Abandon de poste</b> : mise en demeure, délai ≥ <b>15 jours</b>, puis présomption de démission.",
          ],
          retenir: "Les congés se planifient tôt et ne se suppriment pas : un pic d’activité se gère avec des renforts.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Santé, sécurité et harcèlement",
      minutes: 17,
      objectives: ["Comprendre l’obligation de sécurité de l’employeur", "Réagir correctement à un accident ou à un signalement de harcèlement"],
      steps: [
        {
          type: "lesson",
          title: "Protéger les salariés",
          slides: [
            {
              title: "L’obligation de sécurité",
              body:
                "<p>L’employeur doit prendre les mesures nécessaires pour assurer la sécurité et protéger la <b>santé physique et mentale</b> des salariés :</p><ul><li>évaluer les risques dans le <b>DUERP</b> (document unique), obligatoire dès le premier salarié, et le mettre à jour ;</li><li><b>former</b> (gestes et postures, conduite d’engins comme les chariots élévateurs avec autorisation de conduite) ;</li><li>fournir les <b>équipements de protection</b> (chaussures de sécurité, gants) et veiller à leur port ;</li><li>prévenir aussi les risques <b>psychosociaux</b> : surcharge, tensions, isolement.</li></ul>",
            },
            {
              title: "L’accident du travail",
              body:
                "<ul><li>Le salarié informe l’employeur dans les <b>24 heures</b>.</li><li>L’employeur <b>déclare l’accident</b> à la CPAM dans les <b>48 heures</b> (hors dimanches et jours fériés), même s’il a des doutes : il peut émettre des réserves motivées.</li><li>Il remet au salarié une <b>feuille d’accident</b> pour la prise en charge des soins.</li><li>Après un arrêt de plus de 30 jours pour accident du travail, une <b>visite de reprise</b> à la médecine du travail est obligatoire.</li></ul><p>Ne pas déclarer un accident est sanctionné, et un accident lié à un manquement de sécurité peut être reconnu comme <b>faute inexcusable</b> de l’employeur.</p>",
            },
            {
              title: "Le harcèlement",
              body:
                "<ul><li><b>Harcèlement moral</b> : agissements répétés qui dégradent les conditions de travail et peuvent porter atteinte à la santé, à la dignité ou à l’avenir professionnel.</li><li><b>Harcèlement sexuel</b> : propos ou comportements à connotation sexuelle ou sexiste répétés, ou une pression grave, même unique, pour obtenir un acte sexuel.</li><li>L’employeur doit <b>prévenir</b> (information affichée, règlement intérieur), <b>enquêter</b> rapidement dès un signalement, <b>protéger</b> la victime et <b>sanctionner</b> l’auteur.</li><li>Un salarié qui témoigne de bonne foi est <b>protégé</b> contre toute sanction.</li></ul>",
            },
            {
              title: "Le droit de retrait et la déconnexion",
              body:
                "<ul><li><b>Droit de retrait</b> : un salarié qui a un motif raisonnable de penser qu’une situation présente un <b>danger grave et imminent</b> peut se retirer, après avoir alerté l’employeur, sans sanction ni retenue de salaire.</li><li><b>Droit à la déconnexion</b> : le salarié n’a pas à répondre aux messages hors de son temps de travail ; les entreprises d’au moins 50 salariés doivent en définir les modalités (accord ou charte).</li><li><b>Télétravail</b> : il repose sur un accord collectif, une charte ou un simple accord entre employeur et salarié ; il est réversible et le télétravailleur a les mêmes droits que les autres salariés.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Obligation de sécurité", back: "Protéger la santé physique et mentale : évaluer, former, équiper, prévenir" },
            { front: "DUERP", back: "Document unique d’évaluation des risques, dès le premier salarié" },
            { front: "Déclaration d’accident du travail", back: "À la CPAM dans les 48 h, même avec des doutes (réserves possibles)" },
            { front: "Faute inexcusable", back: "L’employeur avait conscience du danger et n’a pas pris les mesures nécessaires" },
            { front: "Signalement de harcèlement", back: "Enquêter vite, protéger la victime, sanctionner l’auteur, protéger les témoins" },
            { front: "Droit de retrait", back: "Danger grave et imminent : retrait sans sanction ni retenue de salaire" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un préparateur se blesse au dos en soulevant un carton. L’employeur doit…", options: ["attendre de voir si c’est grave", "déclarer l’accident à la CPAM dans les 48 h", "demander au salarié de le déclarer lui-même"], answer: 1, explain: "Même avec des doutes, avec des réserves motivées." },
            { q: "Un salarié signale des propos humiliants répétés d’un collègue. Première action ?", options: ["Attendre une deuxième plainte", "Ouvrir rapidement une enquête et protéger la personne", "Muter le salarié qui se plaint"], answer: 1, explain: "Inaction = manquement à l’obligation de sécurité." },
            { q: "Le droit de retrait suppose…", options: ["un simple désaccord", "un motif raisonnable de penser à un danger grave et imminent", "l’autorisation de l’employeur"], answer: 1, explain: "Le salarié alerte et se retire." },
            { q: "Le DUERP est obligatoire…", options: ["dès le premier salarié", "à partir de 50 salariés", "seulement dans l’industrie"], answer: 0, explain: "Et il doit être mis à jour." },
          ],
        },
        {
          type: "case",
          title: "Le chariot élévateur",
          story:
            "Pour aller plus vite, Noa laisse un nouveau salarié utiliser le chariot élévateur de l’entrepôt « en faisant attention », sans formation ni autorisation de conduite. Une palette tombe et blesse un collègue.",
          question: "Quelle est la situation de Noa ?",
          options: [
            "Ce n’est pas sa responsabilité, c’est un accident",
            "Il a manqué à son obligation de sécurité : conduire un chariot exige une formation et une autorisation de conduite délivrée par l’employeur ; il risque la reconnaissance d’une faute inexcusable, voire des poursuites pénales, en plus de la déclaration d’accident à faire sous 48 h",
            "Seul le conducteur est responsable",
          ],
          answer: 1,
          explain:
            "Les équipements dangereux (chariots, transpalettes électriques, nacelles) demandent formation et autorisation. Le DUERP doit les recenser avec les mesures de prévention.",
        },
        {
          type: "fiche",
          title: "Santé et sécurité",
          points: [
            "<b>Obligation de sécurité</b> : <b>DUERP</b> dès le 1er salarié, formation, équipements, risques psychosociaux.",
            "<b>Accident du travail</b> : info du salarié sous 24 h, <b>déclaration CPAM sous 48 h</b>, feuille d’accident ; risque de <b>faute inexcusable</b>.",
            "<b>Harcèlement</b> : prévenir, <b>enquêter vite</b>, protéger, sanctionner ; témoins de bonne foi protégés.",
            "<b>Droit de retrait</b>, <b>droit à la déconnexion</b>, télétravail réversible avec les mêmes droits.",
          ],
          retenir: "Former, équiper, déclarer et réagir vite : l’employeur répond de la santé de ses salariés.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Les libertés des salariés au travail",
      minutes: 15,
      objectives: ["Savoir ce que l’employeur peut contrôler", "Respecter la vie privée et les libertés des salariés"],
      steps: [
        {
          type: "lesson",
          title: "Contrôler sans surveiller abusivement",
          slides: [
            {
              title: "Le principe",
              body:
                "<p>Le salarié reste un citoyen au travail. L’employeur peut <b>contrôler l’activité</b>, mais toute restriction doit être :</p><ul><li><b>justifiée</b> par la nature de la tâche ou un intérêt légitime (sécurité, protection des biens) ;</li><li><b>proportionnée</b> au but recherché ;</li><li><b>connue</b> des salariés à l’avance : un dispositif de contrôle caché ne peut pas servir de preuve en principe.</li></ul><p>Les dispositifs de contrôle doivent aussi faire l’objet d’une information du CSE s’il existe.</p>",
            },
            {
              title: "Caméras et géolocalisation",
              body:
                "<ul><li><b>Vidéosurveillance</b> : possible pour la sécurité des biens et des personnes (entrées, stocks, caisses), avec information des salariés et affichage. Elle ne doit pas filmer un salarié <b>en permanence</b> à son poste, ni les zones de pause ou les toilettes (recommandations de la CNIL).</li><li><b>Géolocalisation</b> des véhicules : pour suivre les livraisons ou la sécurité, pas pour contrôler en continu la vitesse ou les pauses ; elle doit pouvoir être désactivée en dehors du temps de travail.</li><li>Les images et données ne sont conservées que pour une durée limitée (en général un mois pour la vidéo).</li></ul>",
            },
            {
              title: "E-mails, ordinateur et réseaux sociaux",
              body:
                "<ul><li>Les fichiers et e-mails sur les outils professionnels sont <b>présumés professionnels</b> : l’employeur peut les consulter.</li><li>Sauf s’ils sont clairement identifiés comme <b>« personnel »</b> ou « privé » : l’employeur ne peut alors les ouvrir qu’en présence du salarié ou en cas de risque particulier.</li><li>Sur les <b>réseaux sociaux</b>, le salarié a sa liberté d’expression, mais il ne doit pas dénigrer l’entreprise de façon excessive (propos injurieux, diffamatoires) ni divulguer d’informations confidentielles.</li></ul>",
            },
            {
              title: "Tenue, religion, vie personnelle",
              body:
                "<ul><li><b>Tenue</b> : l’employeur peut imposer une tenue pour des raisons d’hygiène, de sécurité ou d’image auprès des clients, de façon proportionnée.</li><li><b>Religion</b> : la liberté religieuse s’applique. Une <b>clause de neutralité</b> (interdiction des signes religieux, politiques, philosophiques visibles) n’est possible que si elle est inscrite dans le <b>règlement intérieur</b> (ou une note de service équivalente), générale, et limitée aux salariés en contact avec les clients.</li><li><b>Vie personnelle</b> : un fait de la vie privée ne peut en principe pas justifier une sanction, sauf s’il constitue un manquement aux obligations du contrat.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Contrôle légitime ou abusif ?",
          instruction: "Ce dispositif ou cette pratique est-il acceptable ?",
          categories: ["Légitime (si les salariés sont informés)", "Abusif"],
          items: [
            { text: "Une caméra sur la zone de stockage des produits de valeur", cat: 0, why: "Protection des biens." },
            { text: "Une caméra filmant en continu le poste d’une comptable", cat: 1, why: "Surveillance permanente disproportionnée." },
            { text: "Lire un dossier « Personnel » sur l’ordinateur d’un salarié en son absence", cat: 1, why: "Ouverture seulement en sa présence (sauf risque particulier)." },
            { text: "Consulter la boîte mail professionnelle d’un salarié absent pour suivre une commande", cat: 0, why: "Messages présumés professionnels." },
            { text: "Géolocaliser les véhicules de livraison pendant les tournées", cat: 0, why: "Suivi des livraisons." },
            { text: "Une caméra dans la salle de pause", cat: 1, why: "Zone de vie privée." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Contrôle de l’activité", back: "Justifié, proportionné et connu des salariés à l’avance" },
            { front: "Vidéosurveillance", back: "Pour la sécurité ; pas de filmage permanent d’un poste ni des zones de pause" },
            { front: "Fichiers et e-mails professionnels", back: "Présumés professionnels, sauf s’ils sont marqués « personnel »" },
            { front: "Dossier « personnel »", back: "Ouvert seulement en présence du salarié (sauf risque particulier)" },
            { front: "Clause de neutralité", back: "Dans le règlement intérieur, générale, limitée aux postes en contact avec la clientèle" },
            { front: "Dispositif caché", back: "En principe pas utilisable comme preuve" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un dispositif de surveillance installé sans informer les salariés…", options: ["est valable s’il est discret", "est en principe illicite et ses images difficilement utilisables comme preuve", "est obligatoire"], answer: 1, explain: "L’information préalable est indispensable." },
            { q: "Un e-mail intitulé « Perso - rendez-vous médical » dans la messagerie pro…", options: ["peut être lu librement", "est protégé : à n’ouvrir qu’en présence du salarié", "doit être supprimé"], answer: 1, explain: "Identifié comme personnel." },
            { q: "Peut-on interdire les signes religieux à tous les salariés par simple oral ?", options: ["Oui", "Non : il faut une clause de neutralité écrite, générale et limitée aux postes en contact avec les clients", "Oui, si l’employeur le juge utile"], answer: 1, explain: "Encadrement strict." },
            { q: "Un salarié critique son entreprise en termes injurieux sur un réseau social public…", options: ["est toujours protégé", "peut être sanctionné pour abus de sa liberté d’expression", "ne peut jamais être sanctionné"], answer: 1, explain: "La liberté d’expression a des limites." },
          ],
        },
        {
          type: "case",
          title: "Les caméras de l’entrepôt",
          story:
            "Après des vols, Hugo installe des caméras dans l’entrepôt sans en parler. Il découvre qu’un salarié sort des produits sans les enregistrer et veut le licencier en s’appuyant sur les images.",
          question: "Quel est le risque ?",
          options: [
            "Aucun : un vol reste un vol",
            "Les images d’un dispositif installé sans information des salariés sont en principe une preuve illicite ; le juge peut les écarter (sauf si leur usage est indispensable et proportionné) ; Hugo aurait dû informer les salariés, afficher et respecter les règles de la CNIL",
            "Il doit d’abord porter plainte auprès de la CNIL",
          ],
          answer: 1,
          explain:
            "La jurisprudence admet parfois une preuve illicite si elle est indispensable et proportionnée, mais c’est un pari risqué. Une installation régulière (information, affichage, cadrage limité) protège l’entreprise.",
        },
        {
          type: "fiche",
          title: "Libertés au travail",
          points: [
            "Contrôle <b>justifié, proportionné, connu</b> à l’avance ; information du CSE s’il existe.",
            "Vidéo : sécurité oui, <b>filmage permanent</b> d’un poste et <b>salles de pause</b> non ; géolocalisation limitée.",
            "Outils pro : contenus <b>présumés professionnels</b>, sauf mention <b>« personnel »</b>.",
            "Tenue proportionnée ; <b>neutralité religieuse</b> seulement par clause écrite, générale, postes en contact client ; vie privée protégée.",
          ],
          retenir: "Contrôler, oui ; surveiller en cachette ou en permanence, non.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Seuils d’effectif et représentants du personnel",
      minutes: 15,
      objectives: ["Connaître les obligations qui apparaissent en grandissant", "Comprendre le rôle du CSE"],
      steps: [
        {
          type: "lesson",
          title: "Grandir, c’est aussi de nouvelles obligations",
          slides: [
            {
              title: "Les grands seuils",
              body:
                "<table class='t'><tr><th>Effectif</th><th>Principales obligations nouvelles</th></tr><tr><td>Dès 1 salarié</td><td>DUERP, affichages obligatoires, registre du personnel, médecine du travail, mutuelle</td></tr><tr><td><b>11</b></td><td>Élection d’un <b>CSE</b> (comité social et économique)</td></tr><tr><td><b>20</b></td><td>Obligation d’emploi de travailleurs handicapés (<b>6 %</b> de l’effectif ou contribution)</td></tr><tr><td><b>50</b></td><td><b>Règlement intérieur</b>, CSE aux attributions élargies, <b>participation</b> aux bénéfices, droit à la déconnexion à organiser</td></tr><tr><td>250</td><td>Référent harcèlement RH, obligations renforcées</td></tr></table><p>La plupart des seuils ne s’appliquent que s’ils sont atteints pendant <b>5 années civiles consécutives</b> (règle de 2019) ; pour le CSE, le seuil de 11 doit être atteint pendant <b>12 mois consécutifs</b>.</p>",
            },
            {
              title: "Le CSE",
              body:
                "<ul><li>Le <b>comité social et économique</b> représente les salariés. Ses membres sont <b>élus</b> pour 4 ans en principe.</li><li>Entre 11 et 49 salariés, il présente les <b>réclamations</b> des salariés (salaires, application du Code du travail), participe à la prévention en santé et sécurité, et peut saisir l’inspection du travail.</li><li>À partir de 50 salariés, il est <b>consulté</b> sur la marche de l’entreprise, dispose d’un budget et de moyens plus importants.</li><li>Ses membres sont des <b>salariés protégés</b> : les licencier exige l’autorisation de l’inspection du travail.</li></ul>",
            },
            {
              title: "Les élections",
              body:
                "<ul><li>Quand le seuil est atteint, l’employeur doit <b>organiser les élections</b> : informer les salariés, inviter les syndicats à négocier le protocole électoral, organiser le vote.</li><li>Si aucun candidat ne se présente, l’employeur établit un <b>procès-verbal de carence</b> et le transmet à l’inspection du travail.</li><li>Ne pas organiser les élections expose au <b>délit d’entrave</b> et fragilise certaines procédures (licenciement pour inaptitude, licenciement économique…).</li></ul>",
            },
            {
              title: "Les affichages et l’inspection du travail",
              body:
                "<ul><li><b>Affichages ou informations obligatoires</b> (par tout moyen accessible) : coordonnées de l’inspection du travail et de la médecine du travail, horaires collectifs, convention collective applicable, textes sur l’égalité de rémunération, le harcèlement et les discriminations, consignes de sécurité…</li><li>L’<b>inspection du travail</b> peut contrôler l’entreprise, demander des documents (registre, horaires, DUERP) et dresser des procès-verbaux.</li><li>Elle est aussi une source de <b>renseignements</b> gratuite pour l’employeur.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "À partir de combien de salariés ?",
          instruction: "À quel seuil apparaît chaque obligation ?",
          categories: ["Dès 1 salarié", "11 salariés", "50 salariés"],
          items: [
            { text: "Document unique d’évaluation des risques", cat: 0, why: "Dès le premier salarié." },
            { text: "Élection d’un CSE", cat: 1, why: "11 salariés pendant 12 mois consécutifs." },
            { text: "Règlement intérieur", cat: 2, why: "50 salariés." },
            { text: "Mutuelle collective", cat: 0, why: "Dès le premier salarié." },
            { text: "Participation aux bénéfices", cat: 2, why: "50 salariés." },
            { text: "Registre unique du personnel", cat: 0, why: "Dès le premier salarié." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Seuil du CSE", back: "11 salariés pendant 12 mois consécutifs" },
            { front: "Seuil de 50 salariés", back: "Règlement intérieur, participation, CSE élargi" },
            { front: "Lissage des seuils (2019)", back: "La plupart des seuils ne s’appliquent qu’après 5 années civiles consécutives" },
            { front: "Salarié protégé", back: "Membre du CSE : son licenciement exige l’autorisation de l’inspection du travail" },
            { front: "PV de carence", back: "Constat qu’aucun candidat ne s’est présenté aux élections" },
            { front: "Délit d’entrave", back: "Ne pas organiser les élections ou empêcher le CSE de fonctionner" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une entreprise compte 12 salariés depuis 14 mois. Elle doit…", options: ["rien faire", "organiser l’élection d’un CSE", "créer un règlement intérieur"], answer: 1, explain: "11 salariés pendant 12 mois consécutifs." },
            { q: "Personne ne se porte candidat aux élections du CSE. L’employeur…", options: ["désigne quelqu’un", "établit un procès-verbal de carence", "ne fait rien"], answer: 1, explain: "Et le transmet à l’inspection du travail." },
            { q: "Licencier un membre du CSE nécessite…", options: ["l’accord des autres salariés", "l’autorisation de l’inspection du travail", "un simple courrier"], answer: 1, explain: "C’est un salarié protégé." },
            { q: "L’obligation d’emploi de travailleurs handicapés s’applique à partir de…", options: ["11 salariés", "20 salariés", "250 salariés"], answer: 1, explain: "6 % de l’effectif, ou contribution." },
          ],
        },
        {
          type: "case",
          title: "La croissance oubliée",
          story:
            "L’entreprise de Noa est passée de 6 à 14 salariés en un an et demi. Il n’y a jamais eu d’élections. Noa veut licencier un salarié devenu inapte, et son avocat lui pose une question sur le CSE.",
          question: "Pourquoi l’avocat s’inquiète-t-il ?",
          options: [
            "Pour rien, le CSE est facultatif",
            "L’entreprise a dépassé 11 salariés pendant 12 mois consécutifs : l’absence d’élections (ou de PV de carence) est un délit d’entrave et prive l’employeur de la consultation exigée dans certaines procédures, ce qui peut rendre le licenciement contestable",
            "Parce que le CSE doit voter le licenciement",
          ],
          answer: 1,
          explain:
            "Suivre son effectif chaque mois permet d’anticiper les seuils. Organiser les élections, même s’il n’y a aucun candidat, sécurise l’entreprise.",
        },
        {
          type: "fiche",
          title: "Seuils et représentants",
          points: [
            "Dès <b>1</b> : DUERP, affichages, registre, médecine du travail, mutuelle.",
            "<b>11</b> (12 mois consécutifs) : <b>CSE</b> ; <b>20</b> : emploi de travailleurs handicapés (6 %) ; <b>50</b> : règlement intérieur, participation, CSE élargi.",
            "Seuils de 20, 50, 250 en général appliqués après <b>5 années civiles consécutives</b>.",
            "Élections ou <b>PV de carence</b> ; membres du CSE <b>protégés</b> ; sinon <b>délit d’entrave</b>.",
          ],
          retenir: "Surveille ton effectif chaque mois : les seuils de 11 et 50 changent les règles du jeu.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Mettre fin au contrat",
      minutes: 18,
      objectives: ["Distinguer démission, rupture conventionnelle et licenciement", "Respecter la procédure et remettre les bons documents"],
      steps: [
        {
          type: "lesson",
          title: "Les façons de se séparer",
          slides: [
            {
              title: "La démission",
              body:
                "<ul><li>C’est le salarié qui part, par une volonté <b>claire et non équivoque</b> (de préférence par écrit).</li><li>Il effectue un <b>préavis</b> si la convention collective ou les usages en prévoient un ; l’employeur peut l’en dispenser (en le payant) ou le salarié demander à l’écourter.</li><li>Pas d’indemnité de rupture, et en principe pas d’allocation chômage (sauf démission considérée comme légitime ou reconversion encadrée).</li><li>Une démission donnée sous le coup de la colère ou sous la pression peut être <b>contestée</b>.</li></ul>",
            },
            {
              title: "La rupture conventionnelle",
              body:
                "<ul><li>Une séparation <b>d’un commun accord</b> pour un CDI, après un ou plusieurs <b>entretiens</b>.</li><li>Une <b>indemnité</b> au moins égale à l’indemnité légale de licenciement.</li><li>Un délai de <b>rétractation de 15 jours calendaires</b> après la signature, puis une demande d’<b>homologation</b> à la DREETS (en ligne), qui a 15 jours ouvrables pour répondre.</li><li>Le salarié peut toucher l’<b>allocation chômage</b>.</li><li>Coût : l’employeur paie une <b>contribution de 40 %</b> sur la part exonérée de l’indemnité (pour les ruptures prenant effet depuis le 1er janvier 2026, contre 30 % auparavant).</li></ul>",
            },
            {
              title: "Le licenciement pour motif personnel",
              body:
                "<p>Il faut un <b>motif réel et sérieux</b> (insuffisance professionnelle, faute…) et une procédure :</p><ol><li><b>Convocation</b> à un entretien préalable (lettre recommandée ou remise en main propre), au moins <b>5 jours ouvrables</b> avant l’entretien ;</li><li><b>Entretien</b> : l’employeur expose les motifs et écoute le salarié, qui peut être assisté ;</li><li><b>Notification</b> par lettre recommandée, au moins <b>2 jours ouvrables</b> après l’entretien, avec des motifs <b>précis</b>.</li></ol><p>Indemnité légale (dès 8 mois d’ancienneté, sauf faute grave ou lourde) : <b>1/4 de mois</b> de salaire par année jusqu’à 10 ans, <b>1/3</b> au-delà. Préavis légal : 1 mois (6 mois à 2 ans d’ancienneté), 2 mois au-delà, sauf convention plus favorable. Si le licenciement est jugé injustifié, l’indemnité est encadrée par un <b>barème</b> selon l’ancienneté.</p>",
            },
            {
              title: "Les documents de fin de contrat",
              body:
                "<p>Quel que soit le mode de rupture, l’employeur remet :</p><ul><li>le <b>certificat de travail</b> ;</li><li>l’<b>attestation France Travail</b> (pour l’assurance chômage) ;</li><li>le <b>reçu pour solde de tout compte</b>, qui détaille les sommes versées (salaire, congés payés non pris, indemnités).</li></ul><p>Le licenciement <b>économique</b> (difficultés, mutations technologiques, réorganisation, cessation d’activité) suit une procédure spécifique, avec obligation de reclassement : à préparer avec un conseil.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel mode de rupture ?",
          instruction: "Quel mode de rupture correspond à chaque situation ?",
          categories: ["Démission", "Rupture conventionnelle", "Licenciement"],
          items: [
            { text: "Une salariée annonce par écrit qu’elle part rejoindre une autre entreprise", cat: 0, why: "Volonté claire du salarié." },
            { text: "Employeur et salarié s’accordent pour se séparer, avec une indemnité négociée", cat: 1, why: "Commun accord." },
            { text: "Un salarié a volé de la marchandise à plusieurs reprises", cat: 2, why: "Faute : licenciement disciplinaire." },
            { text: "Un commercial souhaite partir créer son entreprise et toucher le chômage, l’employeur est d’accord", cat: 1, why: "Commun accord, ouvre droit au chômage." },
            { text: "Malgré formation et accompagnement, un salarié n’atteint pas les attendus du poste", cat: 2, why: "Insuffisance professionnelle (motif réel et sérieux)." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Rupture conventionnelle : délais", back: "15 jours calendaires de rétractation, puis homologation DREETS (15 jours ouvrables)" },
            { front: "Contribution patronale sur rupture conventionnelle", back: "40 % sur la part exonérée de l’indemnité (ruptures effectives depuis le 1er janvier 2026)" },
            { front: "Procédure de licenciement", back: "Convocation ≥ 5 jours ouvrables avant l’entretien ; notification ≥ 2 jours ouvrables après" },
            { front: "Indemnité légale de licenciement", back: "Dès 8 mois : 1/4 de mois par année jusqu’à 10 ans, 1/3 au-delà" },
            { front: "Préavis légal de licenciement", back: "1 mois (6 mois-2 ans d’ancienneté), 2 mois au-delà de 2 ans" },
            { front: "Documents de fin de contrat", back: "Certificat de travail, attestation France Travail, solde de tout compte" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Après la signature d’une rupture conventionnelle, chaque partie peut se rétracter pendant…", options: ["48 h", "15 jours calendaires", "1 mois"], answer: 1, explain: "Puis demande d’homologation." },
            { q: "Combien de jours ouvrables minimum entre la convocation et l’entretien préalable ?", options: ["2", "5", "15"], answer: 1, explain: "5 jours ouvrables après la présentation de la lettre." },
            { q: "Un salarié a 4 ans d’ancienneté et 2 000 € de salaire de référence. Indemnité légale de licenciement ?", options: ["2 000 €", "8 000 €", "1 000 €"], answer: 0, explain: "1/4 × 2 000 × 4 = 2 000 € (la convention collective peut prévoir plus)." },
            { q: "Quel document permet au salarié de faire valoir ses droits au chômage ?", options: ["Le certificat de travail", "L’attestation France Travail", "Le dernier bulletin de paie"], answer: 1, explain: "Ex-attestation Pôle emploi." },
          ],
        },
        {
          type: "case",
          title: "Le licenciement par SMS",
          story:
            "Après une dispute, Hugo envoie un SMS à un salarié : « Tu es viré, ne reviens pas demain. » Le salarié saisit les prud’hommes.",
          question: "Quelle est la situation ?",
          options: [
            "Le licenciement est valable, l’écrit existe",
            "Sans convocation à un entretien préalable ni lettre de licenciement motivée, le licenciement est irrégulier et, faute de motif énoncé, sans cause réelle et sérieuse : Hugo s’expose à des indemnités (préavis, indemnité de licenciement, dommages-intérêts selon le barème)",
            "C’est une démission du salarié",
          ],
          answer: 1,
          explain:
            "Un licenciement se prépare : faits datés, convocation, entretien, lettre précise. En cas de faute grave, une mise à pied conservatoire permet d’écarter immédiatement le salarié pendant la procédure.",
        },
        {
          type: "fiche",
          title: "Fin du contrat",
          points: [
            "<b>Démission</b> : volonté claire, préavis selon la convention, pas d’indemnité.",
            "<b>Rupture conventionnelle</b> : accord, indemnité ≥ légale, <b>15 jours</b> de rétractation, <b>homologation</b> ; contribution patronale de <b>40 %</b> (depuis 2026).",
            "<b>Licenciement</b> : motif réel et sérieux, convocation (<b>≥ 5 j ouvrables</b>), entretien, lettre motivée (<b>≥ 2 j ouvrables</b> après) ; indemnité <b>1/4 de mois/an</b> (1/3 après 10 ans) ; barème en cas de contestation.",
            "Documents : <b>certificat de travail</b>, <b>attestation France Travail</b>, <b>solde de tout compte</b>.",
          ],
          retenir: "On ne licencie jamais sur un coup de colère : on documente, on convoque, on écoute, puis on écrit.",
        },
      ],
    },
  ],
});
