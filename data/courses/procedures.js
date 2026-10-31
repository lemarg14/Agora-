/* ============================================================
   COURS : Les procédures — comment marche la justice
   Faculté de Droit · 8 séances de 15 à 20 minutes
   Procédure civile (litiges, impayés) + procédure pénale.
   Règles vérifiées au 31 octobre 2026.
   ============================================================ */
AGORA.registerCourse({
  id: "procedures",
  faculty: "droit",
  title: "Les procédures — comment marche la justice",
  subtitle: "Quel tribunal, quelles étapes, quels délais : du litige au jugement",
  color: "#a8432f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour savoir te servir de la justice : choisir le bon tribunal, régler un conflit à l’amiable, récupérer une facture impayée, mener ou subir un procès civil, comprendre une enquête et un procès pénal, puis faire appel et faire exécuter une décision.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "La carte des tribunaux",
      minutes: 18,
      objectives: ["Savoir quel tribunal saisir selon le litige", "Comprendre les trois étages de la justice"],
      steps: [
        {
          type: "lesson",
          title: "La carte des tribunaux",
          slides: [
            {
              title: "Deux grandes familles de justice",
              body:
                "<p>En France, la justice est coupée en deux ordres qui ne se mélangent pas :</p><ul><li><b>L’ordre judiciaire</b> : les litiges entre personnes privées (particuliers, entreprises) et les infractions pénales.</li><li><b>L’ordre administratif</b> : les litiges <b>contre l’administration</b> (mairie, préfecture, URSSAF pour certaines décisions, État…).</li></ul><p>Et dans l’ordre judiciaire, deux branches : la justice <b>civile</b> (réparer, trancher un conflit, faire payer) et la justice <b>pénale</b> (punir une infraction).</p>",
              example: "Un client ne te paie pas : justice civile. On te vole ta marchandise : justice pénale. La mairie te refuse une autorisation de terrasse : justice administrative.",
            },
            {
              title: "Les tribunaux civils de première instance",
              body:
                "<table class='t'><tr><th>Tribunal</th><th>Pour quoi ?</th></tr><tr><td><b>Tribunal judiciaire</b></td><td>Le tribunal civil « par défaut » : litiges entre particuliers, contrats, immobilier, famille, successions…</td></tr><tr><td><b>Juge des contentieux de la protection</b> (au sein du tribunal judiciaire)</td><td>Baux d’habitation, crédits à la consommation, surendettement</td></tr><tr><td><b>Tribunal de commerce</b></td><td>Litiges entre commerçants ou sociétés commerciales, difficultés des entreprises</td></tr><tr><td><b>Conseil de prud’hommes</b></td><td>Litiges entre un salarié et son employeur</td></tr></table><p>Depuis 2025, douze tribunaux de commerce expérimentent une version élargie : le <b>tribunal des activités économiques</b>, qui traite aussi les difficultés des agriculteurs, artisans et professions libérales.</p>",
            },
            {
              title: "Les tribunaux pénaux",
              body:
                "<p>Un tribunal par catégorie d’infraction (vu dans le cours de droit pénal) :</p><div class='tiers'><div><b>Tribunal de police</b><span>contraventions</span></div><div><b>Tribunal correctionnel</b><span>délits</span></div><div><b>Cour d’assises</b><span>crimes (ou cour criminelle départementale)</span></div></div><p>À savoir : le Code de procédure pénale a été réécrit par une ordonnance du 19 novembre 2025. Prévue pour le <b>1er janvier 2029</b>, la nouvelle version renomme notamment le tribunal correctionnel en <b>tribunal délictuel</b> et le tribunal de police en <b>tribunal contraventionnel</b>. Les règles de fond restent en principe les mêmes.</p>",
            },
            {
              title: "La justice administrative",
              body:
                "<ul><li><b>Tribunal administratif</b> : conteste une décision de l’administration (refus de permis, sanction, marché public…).</li><li>Le délai de recours est en principe de <b>2 mois</b> à partir de la notification de la décision.</li><li>Au-dessus : <b>cour administrative d’appel</b>, puis <b>Conseil d’État</b>.</li></ul>",
            },
            {
              title: "Les trois étages",
              body:
                "<ol><li><b>Première instance</b> : un premier tribunal juge l’affaire (faits + droit).</li><li><b>Appel</b> : la <b>cour d’appel</b> rejuge entièrement l’affaire, faits et droit.</li><li><b>Cassation</b> : la <b>Cour de cassation</b> ne rejuge pas les faits. Elle vérifie seulement que le droit a été bien appliqué. Si ce n’est pas le cas, elle « casse » la décision et renvoie l’affaire devant une autre cour d’appel.</li></ol><p>Pour les petits litiges civils (<b>5 000 € ou moins</b>), on ne peut pas faire appel : seul le pourvoi en cassation reste possible.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel tribunal saisir ?",
          instruction: "Pour chaque litige, choisis le tribunal compétent en première instance.",
          categories: ["Tribunal judiciaire", "Tribunal de commerce", "Prud’hommes", "Tribunal administratif"],
          items: [
            { text: "Ta SAS réclame 8 000 € à une autre société qui ne paie pas ses factures", cat: 1, why: "Litige entre sociétés commerciales → tribunal de commerce." },
            { text: "Un salarié conteste son licenciement", cat: 2, why: "Contrat de travail → conseil de prud’hommes." },
            { text: "La mairie refuse ton autorisation de terrasse", cat: 3, why: "Décision d’une administration → tribunal administratif." },
            { text: "Ton voisin a construit un mur sur ton terrain", cat: 0, why: "Litige entre particuliers sur un immeuble → tribunal judiciaire." },
            { text: "Un fournisseur commerçant te livre une marchandise défectueuse et refuse de rembourser ta société", cat: 1, why: "Deux commerçants → tribunal de commerce." },
            { text: "Un particulier veut annuler l’achat d’une voiture d’occasion à un autre particulier", cat: 0, why: "Deux particuliers → tribunal judiciaire." },
            { text: "Une cheffe d’équipe réclame ses heures supplémentaires non payées", cat: 2, why: "Salaire → conseil de prud’hommes." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Ordre judiciaire", back: "Litiges entre personnes privées (civil) et infractions (pénal)." },
            { front: "Ordre administratif", back: "Litiges contre l’administration. Tribunal administratif → cour administrative d’appel → Conseil d’État." },
            { front: "Tribunal judiciaire", back: "Tribunal civil de droit commun : particuliers, contrats, immobilier, famille…" },
            { front: "Tribunal de commerce", back: "Litiges entre commerçants ou sociétés commerciales, et entreprises en difficulté." },
            { front: "Cour d’appel", back: "Rejuge toute l’affaire : les faits et le droit." },
            { front: "Cour de cassation", back: "Ne rejuge pas les faits, vérifie seulement l’application du droit." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un client particulier refuse de payer ta prestation de 7 000 €. Tu es une SAS. Quel tribunal ?", options: ["Le tribunal de commerce", "Le tribunal judiciaire", "Les prud’hommes"], answer: 1, explain: "Le tribunal de commerce ne juge un litige que si le défendeur est commerçant. Contre un particulier, c’est le tribunal judiciaire." },
            { q: "Le juge qui rejuge entièrement une affaire, faits compris, c’est…", options: ["la Cour de cassation", "la cour d’appel", "le Conseil constitutionnel"], answer: 1, explain: "L’appel permet un nouvel examen complet. La cassation ne contrôle que le droit." },
            { q: "Un litige civil porte sur 3 000 €. Le perdant peut-il faire appel ?", options: ["Oui, toujours", "Non, il ne reste que le pourvoi en cassation", "Seulement avec un avocat"], answer: 1, explain: "En dessous de 5 000 €, le jugement est rendu « en dernier ressort »." },
            { q: "Ton propriétaire veut t’expulser de ton logement. Quel juge ?", options: ["Le tribunal de commerce", "Le juge des contentieux de la protection", "Le tribunal correctionnel"], answer: 1, explain: "Les baux d’habitation relèvent du juge des contentieux de la protection, au sein du tribunal judiciaire." },
          ],
        },
        {
          type: "case",
          title: "Le mauvais tribunal",
          story:
            "Sarah, gérante d’une SARL de cosmétiques, n’a pas été payée par une boutique (une SAS) pour une commande de 12 000 €. Elle dépose sa demande devant le <b>conseil de prud’hommes</b>, parce que « c’est le tribunal du travail et c’est son travail ».",
          question: "Que va-t-il se passer ?",
          options: [
            "Le conseil de prud’hommes juge l’affaire, il est compétent pour tout ce qui touche au travail",
            "Il va se déclarer incompétent : le litige oppose deux sociétés commerciales, c’est le tribunal de commerce",
            "L’affaire part directement en cassation",
          ],
          answer: 1,
          explain:
            "Les prud’hommes ne jugent que les litiges entre salariés et employeurs. Deux sociétés commerciales → tribunal de commerce. Se tromper de tribunal fait perdre des mois.",
        },
        {
          type: "fiche",
          title: "La carte des tribunaux",
          points: [
            "Deux ordres : <b>judiciaire</b> (civil + pénal) et <b>administratif</b> (contre l’administration).",
            "Civil : <b>tribunal judiciaire</b> par défaut, <b>tribunal de commerce</b> entre commerçants, <b>prud’hommes</b> pour le travail.",
            "Pénal : tribunal de police, tribunal correctionnel, cour d’assises (nouveaux noms prévus en 2029).",
            "Administratif : tribunal administratif, recours en principe dans les <b>2 mois</b>.",
            "Trois étages : première instance → <b>appel</b> (faits + droit) → <b>cassation</b> (droit seulement).",
            "Litige civil de 5 000 € ou moins : pas d’appel possible.",
          ],
          retenir: "Avant de te battre, trouve le bon tribunal.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Avant le procès : régler à l’amiable",
      minutes: 16,
      objectives: ["Rédiger une mise en demeure efficace", "Savoir quand l’amiable est obligatoire avant le juge"],
      steps: [
        {
          type: "lesson",
          title: "Régler à l’amiable",
          slides: [
            {
              title: "La mise en demeure",
              body:
                "<p>C’est une lettre, de préférence en <b>recommandé avec accusé de réception</b>, qui demande formellement à l’autre d’exécuter son obligation dans un délai précis.</p><p>Elle sert à trois choses :</p><ul><li>prouver que tu as réclamé (date certaine) ;</li><li>faire courir les <b>intérêts de retard</b> ;</li><li>montrer au juge que tu as tenté de régler le problème.</li></ul><p>Contenu type : qui tu es, ce qui est dû (montant, facture, date), le délai laissé (8 ou 15 jours), et ce que tu feras ensuite.</p>",
              article: { ref: "Code civil, art. 1344", text: "Le débiteur est mis en demeure de s’exécuter, soit par une sommation ou un acte portant interpellation suffisante, soit, si le contrat le prévoit, par la seule exigibilité de l’obligation." },
            },
            {
              title: "Entre professionnels : les pénalités automatiques",
              body:
                "<p>Entre entreprises, en cas de retard de paiement, le Code de commerce prévoit d’office :</p><ul><li>des <b>pénalités de retard</b> (le taux doit figurer sur tes factures et tes CGV) ;</li><li>une <b>indemnité forfaitaire de 40 €</b> pour frais de recouvrement, par facture impayée.</li></ul><p>Pense à les rappeler dans ta mise en demeure : ça accélère souvent le paiement.</p>",
            },
            {
              title: "Les modes amiables",
              body:
                "<ul><li><b>La conciliation</b> : un conciliateur de justice, bénévole et <b>gratuit</b>, aide les deux parties à trouver un accord. On le trouve via la mairie ou le tribunal.</li><li><b>La médiation</b> : un médiateur professionnel (payant), utile pour les conflits plus complexes ou commerciaux.</li><li><b>La procédure participative</b> : chacun avec son avocat, on négocie selon un cadre écrit.</li></ul><p>Un accord trouvé peut être <b>homologué par le juge</b> : il devient alors exécutoire comme un jugement.</p>",
            },
            {
              title: "Quand l’amiable est obligatoire",
              body:
                "<p>Pour certaines demandes devant le tribunal judiciaire, tu <b>dois</b> d’abord tenter une solution amiable (conciliation, médiation ou procédure participative), sinon ta demande est <b>irrecevable</b> :</p><ul><li>les demandes de <b>5 000 € ou moins</b> ;</li><li>les <b>troubles anormaux de voisinage</b> ;</li><li>certains conflits de voisinage (bornage, distances de plantation…).</li></ul><p>Exceptions : urgence, motif légitime, ou conciliateur indisponible pendant plus de 3 mois.</p><p>Ces règles figurent à l’<b>article 750-1</b> du Code de procédure civile. Depuis le <b>1er septembre 2025</b>, le juge peut aussi, en cours de procès, ordonner aux parties de rencontrer un médiateur ou un conciliateur, et les sanctionner d’une amende civile si elles ne s’y rendent pas sans motif.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Mise en demeure", back: "Lettre (idéalement en recommandé AR) exigeant l’exécution dans un délai. Fait courir les intérêts et sert de preuve." },
            { front: "Indemnité forfaitaire de recouvrement", back: "40 € par facture impayée entre professionnels, en plus des pénalités de retard." },
            { front: "Conciliateur de justice", back: "Bénévole, gratuit, aide les parties à trouver un accord." },
            { front: "Médiateur", back: "Professionnel payant qui accompagne la négociation, souvent en litige commercial." },
            { front: "Homologation", back: "Le juge valide un accord amiable : il devient exécutoire comme un jugement." },
            { front: "Amiable obligatoire", back: "Avant le tribunal judiciaire pour les demandes ≤ 5 000 € et certains litiges de voisinage (art. 750-1 CPC)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi envoyer la mise en demeure en recommandé avec accusé de réception ?", options: ["C’est obligatoire pour qu’elle soit valable", "Pour avoir la preuve de l’envoi et de sa date", "Pour que le tribunal la reçoive aussi"], answer: 1, explain: "Ce n’est pas toujours exigé, mais c’est la meilleure preuve en cas de procès." },
            { q: "Un particulier veut réclamer 1 800 € à un autre particulier devant le tribunal judiciaire. Que doit-il faire avant ?", options: ["Rien, il saisit directement le juge", "Tenter une conciliation, une médiation ou une procédure participative", "Payer un avocat obligatoirement"], answer: 1, explain: "Demande ≤ 5 000 € : tentative amiable préalable, sauf exception." },
            { q: "Un client professionnel règle avec 2 mois de retard 3 factures. Combien d’indemnités forfaitaires de recouvrement peux-tu réclamer au minimum ?", options: ["40 €", "120 €", "Aucune, seulement des intérêts"], answer: 1, explain: "40 € par facture impayée, en plus des pénalités de retard." },
            { q: "Un accord trouvé devant un conciliateur peut devenir aussi contraignant qu’un jugement si…", options: ["les deux parties le signent devant témoin", "il est homologué par le juge", "il est envoyé en recommandé"], answer: 1, explain: "L’homologation lui donne force exécutoire." },
          ],
        },
        {
          type: "case",
          title: "La haie du voisin",
          story:
            "Marc estime que la haie de 4 mètres de son voisin, plantée trop près de la limite, lui prive de soleil. Sans rien tenter avant, il assigne directement son voisin devant le tribunal judiciaire pour obtenir l’arrachage.",
          question: "Que risque Marc ?",
          options: [
            "Rien, il a le droit de saisir le juge quand il veut",
            "Que sa demande soit déclarée irrecevable faute de tentative amiable préalable",
            "Une condamnation pénale pour procédure abusive",
          ],
          answer: 1,
          explain:
            "Les litiges de distances de plantation et de voisinage font partie des cas où il faut d’abord tenter la conciliation, la médiation ou la procédure participative (art. 750-1 CPC). Un conciliateur de justice gratuit aurait suffi.",
        },
        {
          type: "fiche",
          title: "Régler à l’amiable",
          points: [
            "<b>Mise en demeure</b> en recommandé AR : montant, délai, suite envisagée.",
            "Entre pros : pénalités de retard + <b>40 €</b> d’indemnité par facture impayée.",
            "<b>Conciliation</b> (gratuite), <b>médiation</b> (payante), <b>procédure participative</b> (avec avocats).",
            "Un accord <b>homologué</b> vaut un jugement.",
            "Amiable <b>obligatoire</b> avant le tribunal judiciaire : demandes ≤ 5 000 € et voisinage (art. 750-1 CPC).",
            "Depuis septembre 2025, le juge peut imposer un rendez-vous avec un médiateur ou un conciliateur.",
          ],
          retenir: "Écris avant d’assigner : la mise en demeure, c’est ton premier atout.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Récupérer une facture impayée",
      minutes: 20,
      objectives: ["Choisir entre petites créances et injonction de payer", "Connaître les délais pour agir"],
      steps: [
        {
          type: "lesson",
          title: "Récupérer un impayé",
          slides: [
            {
              title: "La boîte à outils du créancier",
              body:
                "<p>Quand la mise en demeure ne suffit pas, tu as trois voies, de la plus légère à la plus lourde :</p><ol><li>la <b>procédure simplifiée des petites créances</b> (sans juge) ;</li><li>l’<b>injonction de payer</b> (rapide, sur dossier) ;</li><li>le <b>procès classique</b> (séances 4 et 5).</li></ol><p>Le choix dépend du montant, de qui est ton débiteur, et de s’il conteste la dette.</p>",
            },
            {
              title: "Les petites créances (≤ 5 000 €)",
              body:
                "<ul><li>Pour une créance de <b>5 000 € maximum</b>, intérêts compris.</li><li>Tu passes par un <b>commissaire de justice</b> (l’ancien huissier), qui invite le débiteur à trouver un accord.</li><li>Le débiteur a <b>1 mois</b> pour accepter.</li><li>S’il accepte, le commissaire de justice délivre directement un <b>titre exécutoire</b> : tu pourras faire saisir s’il ne respecte pas l’accord.</li><li>S’il refuse ou ne répond pas, tu passes à l’injonction de payer.</li></ul><p>Attention : cette procédure est <b>exclue entre commerçants</b>.</p>",
              article: { ref: "Code des procédures civiles d’exécution, art. L. 125-1", text: "Une procédure simplifiée de recouvrement des petites créances peut être mise en œuvre par un commissaire de justice à la demande du créancier pour le paiement d’une créance ayant une cause contractuelle ou résultant d’une obligation de caractère statutaire et inférieure à un montant défini par décret en Conseil d’État." },
            },
            {
              title: "L’injonction de payer, étape par étape",
              body:
                "<ol><li>Tu déposes une <b>requête</b> au tribunal (tribunal de commerce si ton client est commerçant, tribunal judiciaire sinon), avec facture, bon de commande, relances, mise en demeure.</li><li>Le juge décide <b>sur dossier, sans audience</b>. S’il est convaincu, il rend une <b>ordonnance d’injonction de payer</b>.</li><li>Tu la fais <b>signifier</b> au débiteur par commissaire de justice dans les <b>6 mois</b>, sinon elle ne vaut plus rien.</li><li>Le débiteur a <b>1 mois</b> pour faire <b>opposition</b>. S’il le fait, on passe à une audience classique.</li><li>Sans opposition, l’ordonnance devient <b>exécutoire</b> : saisies possibles.</li></ol><p>Avocat obligatoire au-delà de <b>10 000 €</b>.</p>",
            },
            {
              title: "Les délais pour agir (prescription)",
              body:
                "<table class='t'><tr><th>Situation</th><th>Délai</th></tr><tr><td>Règle générale (Code civil, art. 2224)</td><td><b>5 ans</b></td></tr><tr><td>Entre commerçants (Code de commerce, art. L. 110-4)</td><td><b>5 ans</b></td></tr><tr><td>Un professionnel contre un consommateur pour les biens ou services qu’il lui a fournis (Code de la consommation, art. L. 218-2)</td><td><b>2 ans</b></td></tr></table><p>Le délai part en principe du jour où tu as connu ou aurais dû connaître ton droit (en pratique, souvent l’échéance de la facture). Passé ce délai, ta créance existe encore mais tu ne peux plus l’obtenir en justice.</p>",
            },
            {
              title: "Comment choisir",
              body:
                "<table class='t'><tr><th>Situation</th><th>Meilleure voie</th></tr><tr><td>Client particulier, ≤ 5 000 €, dette pas vraiment contestée</td><td>Petites créances</td></tr><tr><td>Client professionnel, dette claire et documentée</td><td>Injonction de payer</td></tr><tr><td>Dette contestée (« le travail était mal fait »)</td><td>Procès classique</td></tr></table><p>Une bonne injonction de payer repose sur des <b>pièces</b> solides : devis signé, bon de commande, bon de livraison, factures, échanges écrits.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle procédure ?",
          instruction: "Choisis la voie la plus adaptée pour récupérer l’argent.",
          categories: ["Petites créances", "Injonction de payer", "Procès classique"],
          items: [
            { text: "Un particulier te doit 650 € pour une prestation, il dit juste qu’il « n’a pas les moyens maintenant »", cat: 0, why: "Particulier, petite somme, dette reconnue : la voie la plus légère." },
            { text: "Une société cliente te doit 3 200 € de factures, elle ne répond plus", cat: 1, why: "Entre commerçants, les petites créances sont exclues. Dette documentée → injonction de payer." },
            { text: "Un client refuse de payer 15 000 € en affirmant que ton travail est défectueux", cat: 2, why: "Dette contestée sur le fond : il faudra un débat, donc un procès." },
            { text: "Un restaurant te doit 22 000 € de livraisons, bons de livraison signés à l’appui", cat: 1, why: "Dette claire et prouvée : injonction de payer (avec avocat au-delà de 10 000 €)." },
            { text: "Un ancien client particulier te doit 1 200 € et propose de payer en plusieurs fois", cat: 0, why: "L’accord sur un échéancier devient un titre exécutoire via le commissaire de justice." },
            { text: "Un partenaire conteste à la fois le montant et la validité du contrat", cat: 2, why: "Contestation sérieuse : le juge doit trancher après débat." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Procédure des petites créances", back: "≤ 5 000 €, via un commissaire de justice, débiteur 1 mois pour accepter. Exclue entre commerçants." },
            { front: "Injonction de payer", back: "Requête sur dossier, sans audience. Ordonnance à signifier sous 6 mois. Opposition possible sous 1 mois." },
            { front: "Opposition", back: "Recours du débiteur contre l’injonction de payer, dans le mois de la signification. Ouvre une audience." },
            { front: "Commissaire de justice", back: "Officier public né en 2022 de la fusion des huissiers et des commissaires-priseurs. Signifie les actes et procède aux saisies." },
            { front: "Prescription de droit commun", back: "5 ans (art. 2224 C. civ.), 5 ans aussi entre commerçants." },
            { front: "Prescription pro → consommateur", back: "2 ans pour les biens et services fournis (art. L. 218-2 C. conso.)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu as obtenu une ordonnance d’injonction de payer en janvier. Tu la fais signifier en septembre. Problème ?", options: ["Non, aucun délai", "Oui : elle devait être signifiée dans les 6 mois, elle ne vaut plus rien", "Oui, mais seulement des frais en plus"], answer: 1, explain: "Faute de signification dans les 6 mois, l’ordonnance est non avenue." },
            { q: "Combien de temps a le débiteur pour faire opposition à l’injonction de payer ?", options: ["8 jours", "1 mois après la signification", "2 mois"], answer: 1, explain: "Un mois à compter de la signification." },
            { q: "Tu es artisan. Un client particulier ne t’a pas payé une facture d’il y a 3 ans. Peux-tu encore agir en justice ?", options: ["Oui, tu as 5 ans", "Non, c’est prescrit au bout de 2 ans", "Oui, une facture ne se prescrit jamais"], answer: 1, explain: "Action d’un professionnel contre un consommateur : 2 ans (art. L. 218-2 C. conso.)." },
            { q: "La procédure des petites créances est-elle possible entre deux sociétés commerciales ?", options: ["Oui", "Non"], answer: 1, explain: "Elle exclut les créances entre commerçants." },
            { q: "Sur quoi le juge de l’injonction de payer se décide-t-il ?", options: ["Sur une audience avec les deux parties", "Sur le seul dossier du créancier", "Sur un rapport d’expert"], answer: 1, explain: "C’est une procédure non contradictoire au départ : le débat n’a lieu qu’en cas d’opposition." },
          ],
        },
        {
          type: "case",
          title: "Les factures du salon",
          story:
            "Léa vend des produits capillaires à des salons de coiffure (des SARL). L’un d’eux lui doit <b>4 300 €</b> sur trois factures, livraisons signées à l’appui. Relances et mise en demeure restent sans réponse. Elle veut lancer la procédure des petites créances parce que « c’est moins de 5 000 € ».",
          question: "Quel est le bon conseil ?",
          options: [
            "Les petites créances, c’est parfait : moins de 5 000 €",
            "Une injonction de payer devant le tribunal de commerce, car les petites créances sont exclues entre commerçants",
            "Une plainte pénale pour escroquerie",
          ],
          answer: 1,
          explain:
            "Entre commerçants, la procédure des petites créances n’est pas ouverte. Dette claire et prouvée → injonction de payer au tribunal de commerce, sans avocat obligatoire sous 10 000 €. Un simple impayé n’est pas une escroquerie.",
        },
        {
          type: "fiche",
          title: "Récupérer une facture impayée",
          points: [
            "Ordre logique : mise en demeure → petites créances ou injonction de payer → procès.",
            "<b>Petites créances</b> : ≤ 5 000 €, commissaire de justice, accord sous 1 mois = titre exécutoire. Pas entre commerçants.",
            "<b>Injonction de payer</b> : requête sur dossier → ordonnance → signification sous <b>6 mois</b> → opposition possible sous <b>1 mois</b>.",
            "Avocat obligatoire au-delà de <b>10 000 €</b>.",
            "Prescription : <b>5 ans</b> en général et entre commerçants, <b>2 ans</b> d’un pro contre un consommateur.",
            "Ta force, ce sont tes pièces : devis signé, bons de livraison, factures, écrits.",
          ],
          retenir: "Une facture se récupère avec des preuves et des délais tenus.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Lancer un procès civil",
      minutes: 17,
      objectives: ["Savoir comment on saisit le juge civil", "Estimer ce que coûte un procès et qui paie"],
      steps: [
        {
          type: "lesson",
          title: "Lancer un procès civil",
          slides: [
            {
              title: "Le vocabulaire de base",
              body:
                "<ul><li>Le <b>demandeur</b> : celui qui lance le procès.</li><li>Le <b>défendeur</b> : celui qu’on attaque.</li><li>Les <b>parties</b> : les deux ensemble.</li><li>Les <b>conclusions</b> : les écrits où chacun expose ses demandes et ses arguments.</li><li>Les <b>pièces</b> : les preuves (contrats, factures, mails…), numérotées et communiquées à l’adversaire.</li></ul>",
            },
            {
              title: "Assignation ou requête",
              body:
                "<p>Deux façons de saisir le juge civil :</p><ul><li>L’<b>assignation</b> : un acte rédigé (souvent par un avocat) et <b>délivré par un commissaire de justice</b> à l’adversaire. Elle le convoque à une audience. C’est la voie normale.</li><li>La <b>requête</b> : une demande déposée directement au greffe. Elle est réservée à certains cas, notamment quand la demande ne dépasse pas <b>5 000 €</b> devant le tribunal judiciaire, ou pour l’injonction de payer.</li></ul><p>Dans les deux cas, tu dois indiquer les démarches amiables tentées (ou pourquoi tu en es dispensé).</p>",
            },
            {
              title: "L’avocat est-il obligatoire ?",
              body:
                "<table class='t'><tr><th>Devant…</th><th>Avocat obligatoire ?</th></tr><tr><td>Tribunal judiciaire</td><td>Oui au-delà de <b>10 000 €</b> ; et toujours pour certaines matières (succession, filiation…). Non devant le juge des contentieux de la protection</td></tr><tr><td>Tribunal de commerce</td><td>Oui au-delà de <b>10 000 €</b></td></tr><tr><td>Conseil de prud’hommes</td><td>Non en première instance</td></tr><tr><td>Cour d’appel</td><td>Oui, sauf exceptions</td></tr><tr><td>Cour de cassation</td><td>Oui, un avocat spécialisé « aux Conseils »</td></tr></table><p>Même quand il n’est pas obligatoire, un avocat évite les erreurs de procédure.</p>",
            },
            {
              title: "Combien ça coûte ?",
              body:
                "<ul><li>Les <b>dépens</b> : les frais de procédure « officiels » (actes du commissaire de justice, expertise, certains frais de greffe). En principe, le <b>perdant</b> les paie.</li><li>Les <b>frais irrépétibles</b> : surtout les honoraires d’avocat. Le juge peut condamner le perdant à en rembourser une partie au gagnant : c’est l’<b>article 700</b> du Code de procédure civile. Le montant est fixé librement par le juge, souvent bien inférieur aux honoraires réels.</li><li>L’<b>aide juridictionnelle</b> peut prendre en charge tout ou partie des frais, selon tes ressources.</li></ul>",
              article: { ref: "Code de procédure civile, art. 700", text: "Le juge condamne la partie tenue aux dépens ou qui perd son procès à payer à l’autre partie la somme qu’il détermine, au titre des frais exposés et non compris dans les dépens." },
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Demandeur / défendeur", back: "Celui qui attaque / celui qui est attaqué." },
            { front: "Assignation", back: "Acte délivré par commissaire de justice qui convoque l’adversaire devant le juge. Voie normale de saisine." },
            { front: "Requête", back: "Demande déposée au greffe, pour certains cas (petits montants, injonction de payer…)." },
            { front: "Dépens", back: "Frais de procédure officiels, en principe payés par le perdant." },
            { front: "Article 700", back: "Le juge peut faire rembourser au gagnant une partie de ses frais d’avocat, par le perdant." },
            { front: "Aide juridictionnelle", back: "Prise en charge par l’État de tout ou partie des frais de justice, selon les ressources." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ta société réclame 25 000 € à une autre société devant le tribunal de commerce. Avocat obligatoire ?", options: ["Non, jamais au tribunal de commerce", "Oui, au-delà de 10 000 €", "Seulement en appel"], answer: 1, explain: "Représentation obligatoire au tribunal de commerce au-delà de 10 000 €." },
            { q: "Tu gagnes ton procès. Tes frais d’avocat seront-ils intégralement remboursés ?", options: ["Oui, automatiquement", "Pas forcément : le juge fixe librement la somme de l’article 700", "Non, jamais"], answer: 1, explain: "L’article 700 est souvent une compensation partielle." },
            { q: "Comment l’adversaire est-il officiellement convoqué par une assignation ?", options: ["Par mail", "Par un commissaire de justice", "Par la police"], answer: 1, explain: "L’assignation est délivrée (signifiée) par commissaire de justice." },
            { q: "Les dépens sont en principe payés par…", options: ["le demandeur", "le perdant", "l’État"], answer: 1, explain: "Le perdant supporte en principe les dépens, sauf décision contraire du juge." },
          ],
        },
        {
          type: "case",
          title: "Le procès à 9 000 €",
          story:
            "Thomas, particulier, a payé 9 000 € à un cuisiniste particulier qui ne lui a jamais posé la cuisine. Une médiation a échoué. Il veut saisir le tribunal judiciaire mais pense qu’il doit « forcément prendre un avocat pour aller au tribunal ».",
          question: "Est-ce exact ?",
          options: [
            "Oui, l’avocat est toujours obligatoire devant le tribunal judiciaire",
            "Non : jusqu’à 10 000 €, il peut se défendre seul (hors matières réservées)",
            "Non, mais il doit obligatoirement passer par la police",
          ],
          answer: 1,
          explain:
            "Devant le tribunal judiciaire, la représentation par avocat n’est obligatoire qu’au-delà de 10 000 € (et dans certaines matières). Thomas peut agir seul, mais un avocat reste conseillé pour bien monter son dossier.",
        },
        {
          type: "fiche",
          title: "Lancer un procès civil",
          points: [
            "<b>Demandeur</b> contre <b>défendeur</b> ; chacun écrit des <b>conclusions</b> et produit des <b>pièces</b>.",
            "Saisir le juge : <b>assignation</b> (par commissaire de justice) ou <b>requête</b> (au greffe, cas limités).",
            "Avocat obligatoire au-delà de <b>10 000 €</b> au tribunal judiciaire et au tribunal de commerce ; pas aux prud’hommes en 1re instance.",
            "Le perdant paie en principe les <b>dépens</b>.",
            "<b>Article 700</b> : remboursement partiel des frais d’avocat du gagnant.",
            "<b>Aide juridictionnelle</b> selon les ressources.",
          ],
          retenir: "Gagner un procès ne rembourse pas tout : chiffre le coût avant de te lancer.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Pendant le procès civil : preuves et urgence",
      minutes: 18,
      objectives: ["Savoir qui doit prouver quoi et avec quelles preuves", "Utiliser le référé quand c’est urgent"],
      steps: [
        {
          type: "lesson",
          title: "Preuves et urgence",
          slides: [
            {
              title: "Qui doit prouver ?",
              body:
                "<p>Règle d’or : <b>celui qui réclame doit prouver</b>. Si tu réclames un paiement, tu prouves le contrat et la dette. Si l’autre dit avoir payé, c’est à lui de prouver le paiement.</p><p>Le juge ne cherche pas les preuves à ta place : un bon droit sans preuve, c’est un procès perdu.</p>",
              article: { ref: "Code civil, art. 1353", text: "Celui qui réclame l’exécution d’une obligation doit la prouver. Réciproquement, celui qui se prétend libéré doit justifier le paiement ou le fait qui a produit l’extinction de son obligation." },
            },
            {
              title: "Les preuves admises",
              body:
                "<ul><li><b>Écrits</b> : contrats, devis signés, factures, bons de livraison, mails, SMS, messages WhatsApp.</li><li><b>Attestations de témoins</b>, sur un formulaire officiel, avec copie de la pièce d’identité du témoin.</li><li><b>Constat de commissaire de justice</b> : très solide (état d’un local, contenu d’un site, d’un compte Instagram…).</li><li><b>Expertise</b> ordonnée par le juge, pour les questions techniques.</li></ul><p>Pour un acte juridique au-delà de <b>1 500 €</b> entre particuliers, la loi exige en principe un écrit. Entre commerçants, la preuve est <b>libre</b>.</p>",
            },
            {
              title: "Une preuve doit être loyale",
              body:
                "<p>En principe, une preuve obtenue de façon déloyale (un enregistrement fait à l’insu de la personne, par exemple) pouvait être écartée en matière civile.</p><p>Depuis fin 2023, la Cour de cassation admet qu’une telle preuve peut être retenue si elle est <b>indispensable</b> pour faire valoir ses droits et que l’atteinte aux droits de l’autre reste <b>proportionnée</b>. Le juge apprécie au cas par cas : ce n’est pas un permis d’enregistrer tout le monde.</p>",
            },
            {
              title: "Le référé : le juge de l’urgence",
              body:
                "<p>Un procès « au fond » prend souvent des mois. Le <b>référé</b> permet d’obtenir une décision <b>rapide et provisoire</b> :</p><ul><li>en cas d’<b>urgence</b>, des mesures qui ne se heurtent à aucune contestation sérieuse (art. 834 CPC) ;</li><li>pour faire cesser un <b>trouble manifestement illicite</b> ou prévenir un dommage imminent (art. 835) ;</li><li>pour obtenir une <b>provision</b> (une avance d’argent) quand la dette n’est pas sérieusement contestable (art. 835) ;</li><li>pour ordonner une <b>expertise</b> avant procès.</li></ul><p>La décision est exécutoire tout de suite, mais le juge du fond peut la remettre en cause plus tard.</p>",
              example: "Un ancien associé utilise ton logo et ta marque sur sa nouvelle boutique en ligne : le référé permet d’obtenir rapidement l’ordre d’arrêter, sous astreinte (une somme par jour de retard).",
            },
          ],
        },
        {
          type: "sort",
          title: "Preuve solide ou fragile ?",
          instruction: "Classe chaque élément selon sa force probante habituelle.",
          categories: ["Preuve solide", "Preuve fragile"],
          items: [
            { text: "Un devis signé avec la mention « bon pour accord »", cat: 0, why: "Écrit signé : il prouve l’accord et son contenu." },
            { text: "Ton propre tableau Excel des sommes qu’on te doit", cat: 1, why: "On ne peut pas se constituer de preuve à soi-même : il faut des pièces venant de l’autre ou de tiers." },
            { text: "Un constat de commissaire de justice sur l’état du local", cat: 0, why: "Acte d’un officier public, très difficile à contester." },
            { text: "Un bon de livraison signé par le client", cat: 0, why: "Prouve la livraison et sa date." },
            { text: "Le témoignage oral de ta mère, non rédigé", cat: 1, why: "Il faut une attestation écrite et conforme ; et un proche est jugé moins neutre." },
            { text: "Un échange de mails où le client reconnaît devoir la somme", cat: 0, why: "Reconnaissance écrite de la dette par le débiteur." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Charge de la preuve", back: "Celui qui réclame doit prouver ; celui qui se dit libéré doit prouver le paiement (art. 1353 C. civ.)." },
            { front: "Constat de commissaire de justice", back: "Constatation par un officier public : preuve très solide." },
            { front: "Preuve entre commerçants", back: "Libre : mails, factures, échanges… tout peut servir." },
            { front: "Référé", back: "Procédure rapide pour une décision provisoire : urgence, trouble manifestement illicite, provision, expertise." },
            { front: "Provision", back: "Avance d’argent accordée en référé quand la dette n’est pas sérieusement contestable." },
            { front: "Astreinte", back: "Somme à payer par jour (ou par infraction) de retard pour forcer l’exécution d’une décision." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu réclames 6 000 € à un client. Il dit avoir payé en espèces. Qui doit prouver ce paiement ?", options: ["Toi", "Le client", "Le juge"], answer: 1, explain: "Celui qui se prétend libéré doit justifier le paiement." },
            { q: "Ton client ne conteste pas sérieusement une facture mais traîne. Pour obtenir vite de l’argent, tu peux demander…", options: ["une provision en référé", "une garde à vue", "une expertise pénale"], answer: 0, explain: "La provision en référé est faite pour les dettes non sérieusement contestables." },
            { q: "Entre deux sociétés commerciales, une série de mails peut-elle prouver une commande ?", options: ["Non, il faut un contrat signé", "Oui, la preuve est libre entre commerçants"], answer: 1, explain: "En matière commerciale, la preuve se fait par tous moyens." },
            { q: "Pour prouver le contenu d’un site concurrent qui copie le tien, le plus solide est…", options: ["une capture d’écran faite par toi", "un constat de commissaire de justice", "un post sur tes réseaux"], answer: 1, explain: "Le constat d’un officier public est bien plus difficile à contester qu’une capture." },
          ],
        },
        {
          type: "case",
          title: "Le local inondé",
          story:
            "Nadia loue un local commercial pour stocker sa marchandise. Une fuite du toit inonde le stock, et le propriétaire refuse de faire les travaux. Chaque semaine, l’eau détruit davantage de cartons. Une procédure au fond prendrait au moins un an.",
          question: "Quelle est la meilleure stratégie immédiate ?",
          options: [
            "Attendre le procès au fond en gardant les factures",
            "Faire constater les dégâts par un commissaire de justice et saisir le juge des référés pour ordonner les travaux, voire une expertise",
            "Arrêter de payer le loyer sans rien dire",
          ],
          answer: 1,
          explain:
            "Le référé répond à l’urgence : le juge peut ordonner les travaux sous astreinte et désigner un expert. Le constat fige la preuve des dégâts. Arrêter de payer seule exposerait Nadia à une résiliation du bail.",
        },
        {
          type: "fiche",
          title: "Preuves et urgence",
          points: [
            "<b>Celui qui réclame prouve</b> ; celui qui dit avoir payé prouve le paiement (art. 1353 C. civ.).",
            "Preuves fortes : écrits signés, bons de livraison, mails de reconnaissance, <b>constat de commissaire de justice</b>.",
            "On ne se fabrique pas de preuve à soi-même. Entre commerçants, preuve <b>libre</b>.",
            "Preuve déloyale : admise seulement si indispensable et proportionnée.",
            "<b>Référé</b> : décision rapide et provisoire (urgence, trouble illicite, <b>provision</b>, expertise).",
            "<b>Astreinte</b> : une somme par jour de retard pour forcer l’exécution.",
          ],
          retenir: "Pas de preuve, pas de droit. Urgence ? Pense référé.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "L’enquête pénale en détail",
      minutes: 18,
      objectives: ["Comprendre le parcours d’une plainte", "Connaître tes droits en audition libre et en garde à vue"],
      steps: [
        {
          type: "lesson",
          title: "L’enquête pénale",
          slides: [
            {
              title: "Porter plainte",
              body:
                "<ul><li>Au <b>commissariat</b> ou à la <b>gendarmerie</b> : ils sont obligés d’enregistrer ta plainte, même si les faits se sont passés ailleurs.</li><li>Par <b>courrier</b> au procureur de la République.</li><li>En <b>ligne</b> pour certaines infractions (fraude à la carte bancaire, escroqueries sur Internet…) via les plateformes officielles.</li></ul><p>Garde le récépissé et apporte un maximum de pièces : captures, factures, coordonnées des témoins.</p>",
            },
            {
              title: "Les deux types d’enquête",
              body:
                "<table class='t'><tr><th>Enquête</th><th>Quand ?</th><th>Pouvoirs</th></tr><tr><td><b>Flagrance</b></td><td>L’infraction vient d’être commise ou est en train de l’être</td><td>Plus coercitifs : perquisitions sans accord, durée de 8 jours (prolongeable)</td></tr><tr><td><b>Préliminaire</b></td><td>Cas général, sur plainte ou initiative</td><td>Plus encadrés : certaines mesures demandent l’accord de la personne ou du juge</td></tr></table><p>Dans les deux cas, c’est le <b>procureur</b> qui dirige. Pour les affaires graves ou complexes, il saisit un <b>juge d’instruction</b> (obligatoire pour les crimes).</p>",
            },
            {
              title: "L’audition libre",
              body:
                "<p>Quand la police te soupçonne mais ne te retient pas, elle peut t’entendre en <b>audition libre</b>. Tu as alors le droit :</p><ul><li>d’être informé de l’infraction reprochée, de sa date et de son lieu ;</li><li>de <b>quitter les locaux à tout moment</b> ;</li><li>de <b>te taire</b> ;</li><li>d’être assisté d’un <b>avocat</b> si l’infraction est punie de prison ;</li><li>d’avoir un interprète.</li></ul>",
              article: { ref: "Code de procédure pénale, art. 61-1", text: "La personne à l’égard de laquelle il existe des raisons plausibles de soupçonner qu’elle a commis ou tenté de commettre une infraction ne peut être entendue librement sur ces faits qu’après avoir été informée…" },
            },
            {
              title: "La garde à vue",
              body:
                "<p>Mesure de contrainte : tu es <b>retenu</b>. Il faut des raisons plausibles de soupçonner un crime ou un délit puni de prison, et que ce soit l’unique moyen d’atteindre un objectif précis (empêcher une fuite, protéger les preuves…).</p><ul><li>24 h, renouvelable une fois (24 h) si la peine encourue est d’au moins 1 an. Jusqu’à 96 h pour la criminalité organisée.</li><li>Droits : être informé, prévenir un proche et l’employeur, <b>médecin</b>, <b>avocat</b> dès le début (entretien de 30 minutes puis présence aux auditions), <b>silence</b>, interprète.</li></ul><p>Conseil pratique : demande l’avocat <b>avant toute déclaration</b>. Tu peux demander un avocat commis d’office, gratuit pendant la garde à vue.</p>",
            },
            {
              title: "Les suites de l’enquête",
              body:
                "<p>Une fois l’enquête terminée, le procureur choisit :</p><ul><li><b>classement sans suite</b> (infraction pas constituée, auteur inconnu, ou poursuite jugée inopportune) ;</li><li><b>alternative aux poursuites</b> : médiation, stage, réparation du dommage, composition pénale ;</li><li><b>poursuites</b> devant un tribunal (séance 7) ;</li><li>ouverture d’une <b>information judiciaire</b> confiée à un juge d’instruction.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Audition libre ou garde à vue ?",
          instruction: "Range chaque droit ou caractéristique dans la bonne mesure (ou dans les deux s’il s’applique aux deux).",
          categories: ["Audition libre seulement", "Garde à vue seulement", "Les deux"],
          items: [
            { text: "Tu peux partir quand tu veux", cat: 0, why: "C’est ce qui définit l’audition libre." },
            { text: "Tu as le droit de garder le silence", cat: 2, why: "Le droit au silence existe dans les deux cas." },
            { text: "Durée de 24 h, renouvelable une fois", cat: 1, why: "Durée propre à la garde à vue." },
            { text: "Tu peux être examiné par un médecin à ta demande", cat: 1, why: "Droit attaché à la garde à vue, puisque tu es retenu." },
            { text: "Tu peux être assisté d’un avocat (infraction punie de prison)", cat: 2, why: "Le droit à l’avocat existe dans les deux cas." },
            { text: "Tu peux faire prévenir ton employeur", cat: 1, why: "Prévu pendant la garde à vue." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Enquête de flagrance", back: "Infraction en train ou venant d’être commise : pouvoirs plus forts, 8 jours prolongeables." },
            { front: "Enquête préliminaire", back: "Enquête ordinaire, plus encadrée, dirigée par le procureur." },
            { front: "Audition libre", back: "Suspect entendu sans être retenu : peut partir à tout moment, se taire, avoir un avocat." },
            { front: "Garde à vue", back: "Suspect retenu 24 h (+24 h) ; droits : silence, avocat, médecin, prévenir un proche et l’employeur." },
            { front: "Information judiciaire", back: "Enquête confiée à un juge d’instruction, obligatoire pour les crimes." },
            { front: "Composition pénale", back: "Alternative proposée par le procureur : amende, stage, travail non rémunéré… validée par un juge." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Le commissariat peut-il refuser ta plainte parce que les faits ont eu lieu dans une autre ville ?", options: ["Oui", "Non, il doit l’enregistrer"], answer: 1, explain: "Police et gendarmerie doivent recevoir toutes les plaintes et les transmettre au bon service." },
            { q: "En audition libre, tu veux partir. Tu peux…", options: ["seulement avec l’accord du policier", "partir à tout moment", "partir après 4 heures"], answer: 1, explain: "C’est le principe même de l’audition libre." },
            { q: "En garde à vue, quand peux-tu demander un avocat ?", options: ["Dès le début", "Après 12 heures", "Seulement si tu es mineur"], answer: 0, explain: "Le droit à l’avocat s’exerce dès le début de la mesure." },
            { q: "Qui dirige l’enquête préliminaire ?", options: ["Le commissaire de police", "Le procureur de la République", "La victime"], answer: 1, explain: "Le procureur dirige l’action de la police judiciaire." },
            { q: "Une enquête sur un meurtre nécessite…", options: ["seulement une enquête préliminaire", "l’ouverture d’une information judiciaire avec un juge d’instruction"], answer: 1, explain: "L’instruction est obligatoire en matière criminelle." },
          ],
        },
        {
          type: "case",
          title: "La convocation",
          story:
            "Karim, gérant d’une boutique, reçoit une convocation au commissariat pour être « entendu » au sujet de marchandises dont un concurrent dit qu’elles ont été volées. Sur place, l’officier lui indique qu’il est entendu en <b>audition libre</b>, comme suspect de recel. Karim pense qu’il est obligé de répondre à tout et de rester jusqu’à la fin.",
          question: "Que doit savoir Karim ?",
          options: [
            "Il doit répondre à toutes les questions, sinon il sera placé en garde à vue automatiquement",
            "Il peut se taire, être assisté d’un avocat (le recel est puni de prison) et quitter les locaux à tout moment",
            "Il ne peut avoir un avocat qu’en garde à vue",
          ],
          answer: 1,
          explain:
            "En audition libre : droit au silence, à l’avocat pour une infraction punie de prison, et liberté de partir. Partir peut toutefois conduire les enquêteurs à envisager une garde à vue : mieux vaut venir directement avec un avocat.",
        },
        {
          type: "fiche",
          title: "L’enquête pénale",
          points: [
            "Plainte : commissariat, gendarmerie (enregistrement obligatoire), courrier au procureur, ou en ligne pour certains faits.",
            "<b>Flagrance</b> (faits tout récents) ou <b>préliminaire</b> (cas général), dirigées par le <b>procureur</b>.",
            "<b>Audition libre</b> : on peut partir à tout moment, se taire, avoir un avocat.",
            "<b>Garde à vue</b> : 24 h + 24 h ; silence, avocat dès le début, médecin, prévenir un proche et l’employeur.",
            "Suites : classement, alternative (dont composition pénale), poursuites, ou juge d’instruction.",
            "Nouveau Code de procédure pénale prévu au 1er janvier 2029 : renumérotation, mêmes droits.",
          ],
          retenir: "Face à la police : avocat d’abord, déclarations ensuite.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Le procès pénal",
      minutes: 17,
      objectives: ["Distinguer les façons d’être jugé", "Savoir comment une victime obtient réparation"],
      steps: [
        {
          type: "lesson",
          title: "Le procès pénal",
          slides: [
            {
              title: "Les façons d’arriver devant le tribunal",
              body:
                "<ul><li><b>Convocation par officier de police judiciaire</b> : on te remet une date d’audience, souvent des semaines plus tard.</li><li><b>Citation directe</b> : par le procureur ou par la victime elle-même, via commissaire de justice.</li><li><b>Comparution immédiate</b> : à la sortie de garde à vue, tu es jugé le jour même (ou dans les jours qui suivent) pour un délit simple et des preuves déjà réunies.</li><li><b>CRPC</b> : le « plaider-coupable » (ci-dessous).</li><li><b>Ordonnance pénale</b> : jugement sur dossier, sans audience, pour des délits simples (certains délits routiers…). Tu peux t’y opposer.</li></ul>",
            },
            {
              title: "La comparution immédiate",
              body:
                "<p>Pour les délits punis d’au moins 2 ans (6 mois en flagrance), quand les charges sont suffisantes et l’affaire « en état d’être jugée ».</p><p>Point clé : le prévenu peut <b>refuser d’être jugé tout de suite</b> pour préparer sa défense. Le tribunal renvoie alors l’affaire, mais peut décider d’un placement en détention provisoire ou sous contrôle judiciaire en attendant.</p>",
            },
            {
              title: "La CRPC, le « plaider-coupable »",
              body:
                "<p><b>Comparution sur reconnaissance préalable de culpabilité</b> : si tu reconnais les faits, le procureur te propose une peine. L’<b>avocat est obligatoire</b>.</p><ul><li>Tu as un délai de réflexion de 10 jours si tu le demandes.</li><li>Si tu acceptes, un juge homologue la peine en audience.</li><li>Si tu refuses, ou si le juge refuse, l’affaire repart vers un procès classique, et ta reconnaissance ne peut pas être utilisée contre toi.</li></ul><p>Avantage : une peine souvent plus douce et prévisible. Inconvénient : il n’y a pas de vrai débat sur ta culpabilité.</p>",
              article: { ref: "Code de procédure pénale, art. 495-7", text: "Pour tous les délits, à l’exception de ceux mentionnés à l’article 495-16 et des délits d’atteintes volontaires et involontaires à l’intégrité des personnes et d’agressions sexuelles prévus aux articles 222-9 à 222-31-2 du code pénal lorsqu’ils sont punis d’une peine d’emprisonnement d’une durée supérieure à cinq ans, le procureur de la République peut…" },
            },
            {
              title: "L’audience correctionnelle",
              body:
                "<ol><li>Le président vérifie l’identité et rappelle les faits.</li><li>Il interroge le <b>prévenu</b> (la personne poursuivie).</li><li>La <b>partie civile</b> (la victime) et son avocat s’expriment.</li><li>Le <b>procureur</b> fait ses <b>réquisitions</b> : il demande une peine.</li><li>L’avocat de la défense plaide.</li><li>Le prévenu a toujours <b>la parole en dernier</b>.</li><li>Le tribunal rend son jugement, parfois après une pause ou à une date ultérieure.</li></ol>",
            },
            {
              title: "La victime : partie civile",
              body:
                "<p>Pour obtenir des <b>dommages et intérêts</b>, la victime doit se <b>constituer partie civile</b> : en le déclarant lors de la plainte, par courrier avant l’audience, ou à l’audience elle-même.</p><ul><li>Elle peut être assistée d’un avocat, éventuellement avec l’aide juridictionnelle.</li><li>Elle chiffre son préjudice avec justificatifs (factures, certificats, perte de chiffre d’affaires…).</li><li>Si l’auteur ne paie pas, des dispositifs d’aide au recouvrement existent, et certaines victimes peuvent être indemnisées par un fonds de garantie.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Prévenu", back: "Personne poursuivie devant le tribunal correctionnel (« accusé » devant la cour d’assises)." },
            { front: "Comparution immédiate", back: "Jugement rapide à la sortie de garde à vue ; le prévenu peut demander un délai pour préparer sa défense." },
            { front: "CRPC", back: "Plaider-coupable : on reconnaît les faits, le procureur propose une peine, un juge l’homologue. Avocat obligatoire." },
            { front: "Ordonnance pénale", back: "Jugement sur dossier, sans audience, pour des délits simples. Opposition possible." },
            { front: "Réquisitions", back: "Ce que le procureur demande au tribunal comme peine." },
            { front: "Partie civile", back: "La victime qui demande réparation dans le procès pénal." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "En comparution immédiate, le prévenu peut-il demander à être jugé plus tard ?", options: ["Non, jamais", "Oui, pour préparer sa défense", "Seulement s’il est mineur"], answer: 1, explain: "Il peut refuser d’être jugé sur-le-champ ; le tribunal décide alors des mesures d’attente." },
            { q: "Dans une CRPC, l’avocat est…", options: ["facultatif", "obligatoire", "interdit"], answer: 1, explain: "La présence de l’avocat est une garantie indispensable de cette procédure." },
            { q: "À l’audience correctionnelle, qui parle en dernier ?", options: ["Le procureur", "La partie civile", "Le prévenu"], answer: 2, explain: "Le prévenu ou son avocat a toujours la parole en dernier." },
            { q: "Une victime qui veut des dommages et intérêts dans le procès pénal doit…", options: ["attendre que le tribunal les lui propose", "se constituer partie civile", "lancer obligatoirement un procès civil séparé"], answer: 1, explain: "Sans constitution de partie civile, le tribunal ne statue pas sur son indemnisation." },
          ],
        },
        {
          type: "case",
          title: "Le plaider-coupable refusé",
          story:
            "Julien, poursuivi pour usage de faux documents, accepte une CRPC et reconnaît les faits devant le procureur. Mais au moment de l’homologation, le juge refuse la peine proposée, qu’il trouve inadaptée. L’affaire part vers une audience classique. L’avocat de la partie civile veut lire au tribunal les aveux faits par Julien pendant la CRPC.",
          question: "Est-ce possible ?",
          options: [
            "Oui, des aveux restent des aveux",
            "Non : en cas d’échec de la CRPC, ses déclarations ne peuvent pas être utilisées contre lui",
            "Oui, mais seulement si Julien est d’accord",
          ],
          answer: 1,
          explain:
            "C’est la garantie qui rend la CRPC équitable : si elle échoue, le procès repart de zéro, sans que la reconnaissance de culpabilité ne puisse être mentionnée ni utilisée.",
        },
        {
          type: "fiche",
          title: "Le procès pénal",
          points: [
            "Voies : convocation, citation directe, <b>comparution immédiate</b>, <b>CRPC</b>, <b>ordonnance pénale</b>.",
            "Comparution immédiate : on peut demander un délai pour préparer sa défense.",
            "<b>CRPC</b> : reconnaissance des faits + peine proposée + homologation ; avocat obligatoire ; si échec, rien ne peut être utilisé.",
            "Audience : interrogatoire, partie civile, <b>réquisitions</b>, défense, prévenu en dernier.",
            "Victime : se <b>constituer partie civile</b> pour obtenir des dommages et intérêts, avec justificatifs.",
          ],
          retenir: "Le dernier mot appartient toujours à la défense.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Après le jugement : recours et exécution",
      minutes: 18,
      objectives: ["Ne jamais rater un délai de recours", "Savoir faire exécuter une décision"],
      steps: [
        {
          type: "lesson",
          title: "Recours et exécution",
          slides: [
            {
              title: "Le jugement n’est pas toujours la fin",
              body:
                "<p>Un jugement peut être <b>contesté</b> (recours) puis doit être <b>exécuté</b>. Deux réflexes :</p><ul><li>noter immédiatement la date de <b>signification</b> ou de prononcé, qui fait courir les délais ;</li><li>vérifier si la décision est déjà exécutoire.</li></ul><p>En matière civile, depuis 2020, les jugements de première instance sont en principe <b>exécutoires immédiatement</b>, même si un appel est formé (exécution provisoire « de droit »), sauf exceptions ou si le juge l’écarte.</p>",
            },
            {
              title: "Les délais de recours",
              body:
                "<table class='t'><tr><th>Recours</th><th>Civil</th><th>Pénal</th></tr><tr><td><b>Appel</b></td><td>1 mois (15 jours en référé)</td><td>10 jours</td></tr><tr><td><b>Pourvoi en cassation</b></td><td>2 mois</td><td>5 jours francs</td></tr><tr><td><b>Opposition</b> (jugé sans avoir été là, dans certains cas)</td><td>1 mois</td><td>10 jours</td></tr></table><p>En civil, le délai court en principe à partir de la <b>signification</b> du jugement par commissaire de justice. Un délai raté, c’est un droit perdu.</p>",
              article: { ref: "Code de procédure civile, art. 538", text: "Le délai de recours par une voie ordinaire est d’un mois en matière contentieuse ; il est de quinze jours en matière gracieuse." },
            },
            {
              title: "Faire exécuter : le titre exécutoire",
              body:
                "<p>Pour forcer quelqu’un à payer, il te faut un <b>titre exécutoire</b> :</p><ul><li>un jugement exécutoire ;</li><li>une injonction de payer non contestée ;</li><li>un accord amiable homologué ;</li><li>le titre délivré dans la procédure des petites créances.</li></ul><p>Tu confies alors le titre à un <b>commissaire de justice</b>, seul habilité à pratiquer les saisies.</p>",
            },
            {
              title: "Les saisies",
              body:
                "<ul><li><b>Saisie-attribution</b> : sur le compte bancaire ou une somme due au débiteur. La banque doit toujours lui laisser un minimum vital (le « solde bancaire insaisissable »).</li><li><b>Saisie des rémunérations</b> : une partie du salaire, selon un barème. Depuis le <b>1er juillet 2025</b>, elle est gérée directement par le commissaire de justice, sans passer par le juge.</li><li><b>Saisie-vente</b> : des biens meubles du débiteur, vendus aux enchères.</li><li><b>Saisie immobilière</b> : la plus lourde, sous contrôle du juge.</li></ul><p>En cas de difficulté (contestation d’une saisie, délais de paiement), c’est le <b>juge de l’exécution</b> qui tranche.</p>",
            },
            {
              title: "Le bon réflexe : la procédure en chaîne",
              body:
                "<ol><li>Mise en demeure écrite.</li><li>Amiable : conciliation ou médiation (obligatoire dans certains cas).</li><li>Petites créances, injonction de payer ou procès selon la situation.</li><li>Titre exécutoire.</li><li>Commissaire de justice et saisies.</li></ol><p>À chaque étape : <b>garder les preuves et surveiller les délais</b> (prescription, signification, appel).</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel délai ?",
          instruction: "Associe chaque recours à son délai.",
          categories: ["5 jours francs", "10 jours", "1 mois", "2 mois"],
          items: [
            { text: "Appel d’un jugement civil du tribunal judiciaire", cat: 2, why: "Appel civil : 1 mois à compter de la signification." },
            { text: "Appel d’un jugement du tribunal correctionnel", cat: 1, why: "Appel pénal : 10 jours." },
            { text: "Pourvoi en cassation contre un arrêt civil", cat: 3, why: "Cassation civile : 2 mois." },
            { text: "Pourvoi en cassation contre un arrêt pénal", cat: 0, why: "Cassation pénale : 5 jours francs." },
            { text: "Opposition à une injonction de payer", cat: 2, why: "1 mois à compter de la signification." },
            { text: "Recours contre une décision administrative devant le tribunal administratif", cat: 3, why: "En principe 2 mois (séance 1)." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Délai d’appel civil", back: "1 mois (15 jours en référé), à partir de la signification." },
            { front: "Délai d’appel pénal", back: "10 jours." },
            { front: "Exécution provisoire de droit", back: "En civil, le jugement de 1re instance s’exécute tout de suite, même en cas d’appel, sauf exceptions." },
            { front: "Titre exécutoire", back: "Document qui permet de faire saisir : jugement, injonction non contestée, accord homologué…" },
            { front: "Saisie-attribution", back: "Saisie d’une somme (compte bancaire), en laissant au débiteur un solde insaisissable." },
            { front: "Juge de l’exécution", back: "Tranche les difficultés liées aux saisies et peut accorder des délais de paiement." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Tu perds en première instance devant le tribunal judiciaire et tu fais appel. Dois-tu quand même payer ?", options: ["Non, l’appel suspend tout", "En principe oui : exécution provisoire de droit", "Seulement si tu es commerçant"], answer: 1, explain: "Depuis 2020, l’exécution provisoire est la règle en civil, sauf exceptions." },
            { q: "Qui peut saisir ton compte bancaire avec un titre exécutoire ?", options: ["Ton créancier lui-même", "Un commissaire de justice", "La police"], answer: 1, explain: "Seul le commissaire de justice pratique les saisies." },
            { q: "Depuis le 1er juillet 2025, la saisie sur salaire…", options: ["est interdite", "est gérée par le commissaire de justice sans passer par le juge", "nécessite l’accord du salarié"], answer: 1, explain: "La procédure a été « déjudiciarisée »." },
            { q: "Condamné en correctionnel le 3 du mois, tu veux faire appel. Jusqu’à quand environ ?", options: ["Le 13", "Le 3 du mois suivant", "Dans 2 mois"], answer: 0, explain: "10 jours en matière pénale : il ne faut pas traîner." },
          ],
        },
        {
          type: "case",
          title: "Le jugement qui dort",
          story:
            "Yanis a gagné son procès : le tribunal de commerce a condamné un client à lui verser 14 000 €. Le jugement lui a été remis mais il ne fait rien, en attendant que le client paie spontanément. Six mois plus tard, toujours rien.",
          question: "Quelle est la bonne démarche ?",
          options: [
            "Renvoyer une mise en demeure et attendre encore",
            "Faire signifier le jugement par un commissaire de justice puis lui confier l’exécution (saisie sur les comptes du client)",
            "Recommencer un procès pour obtenir un deuxième jugement",
          ],
          answer: 1,
          explain:
            "Le jugement est un titre exécutoire, mais il doit être signifié. Le commissaire de justice peut ensuite pratiquer une saisie-attribution sur les comptes du débiteur. La signification fait aussi courir le délai d’appel du client.",
        },
        {
          type: "fiche",
          title: "Recours et exécution",
          points: [
            "Appel : <b>1 mois</b> en civil (15 jours en référé), <b>10 jours</b> en pénal.",
            "Cassation : <b>2 mois</b> en civil, <b>5 jours francs</b> en pénal.",
            "En civil, le jugement de 1re instance s’exécute tout de suite, même en cas d’appel (sauf exceptions).",
            "Pour forcer le paiement : un <b>titre exécutoire</b> + un <b>commissaire de justice</b>.",
            "Saisies : comptes (solde insaisissable préservé), salaire (sans juge depuis juillet 2025), biens, immobilier.",
            "Difficultés d’exécution : <b>juge de l’exécution</b>.",
          ],
          retenir: "Un jugement non signifié reste une feuille de papier.",
        },
      ],
    },
  ],
});
