/* ============================================================
   COURS : Droit pénal — les bases
   Faculté de Droit · 8 séances de 15 à 20 minutes
   Contenu pédagogique simplifié, à jour du droit connu fin 2026.
   Pour toute situation réelle : Légifrance + un avocat.
   ------------------------------------------------------------
   Types d'étapes : lesson · cards · sort · quiz · case · fiche
   (voir README pour le format complet)
   ============================================================ */
AGORA.registerCourse({
  id: "droit-penal",
  faculty: "droit",
  title: "Droit pénal — les bases",
  subtitle: "Ce qui est interdit, ce qu’on risque, comment marche la justice",
  color: "#a8432f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre le Code pénal sans avoir fait la fac : les grands principes, les types d’infractions, la responsabilité, les infractions du quotidien et le chemin d’une affaire jusqu’au tribunal. Une séance par jour suffit.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Les grands principes",
      minutes: 15,
      objectives: [
        "Savoir à quoi sert le droit pénal",
        "Connaître les 5 principes qui protègent chaque citoyen",
      ],
      steps: [
        {
          type: "lesson",
          title: "Les grands principes",
          slides: [
            {
              title: "Le droit pénal, c’est quoi ?",
              body:
                "<p>C’est la branche du droit qui fixe <b>les comportements interdits</b> (les <b>infractions</b>) et <b>les sanctions</b> (les <b>peines</b>).</p><p>Il protège la société tout entière. C’est pour ça que c’est l’État qui poursuit l’auteur, par l’intermédiaire du <b>procureur de la République</b>, et pas la victime elle-même.</p><p>Deux codes à connaître :</p><ul><li><b>Code pénal</b> : le « quoi » — les infractions et les peines.</li><li><b>Code de procédure pénale</b> : le « comment » — l’enquête, le procès, les droits.</li></ul>",
              example:
                "On te vole ton téléphone : ce n’est pas un litige entre toi et le voleur. C’est la société qui le poursuit. Toi, tu peux demander réparation en te constituant <b>partie civile</b>.",
            },
            {
              title: "Pas de texte, pas de peine",
              body:
                "<p>C’est le <b>principe de légalité</b>, le pilier de tout le droit pénal. Pour être puni, il faut qu’un texte précis interdise ce comportement <b>et</b> prévoie la peine.</p><ul><li>Crimes et délits → fixés par la <b>loi</b> (le Parlement).</li><li>Contraventions → fixées par le <b>règlement</b> (les décrets du Gouvernement).</li></ul><p>En latin, les juristes disent : <i>nullum crimen, nulla poena sine lege</i>.</p>",
              article: {
                ref: "Code pénal, art. 111-3",
                text:
                  "Nul ne peut être puni pour un crime ou pour un délit dont les éléments ne sont pas définis par la loi, ou pour une contravention dont les éléments ne sont pas définis par le règlement.",
              },
              example:
                "Un comportement peut être choquant ou immoral : si aucun texte ne l’interdit, ce n’est pas une infraction.",
            },
            {
              title: "La loi ne remonte pas le temps",
              body:
                "<p>C’est la <b>non-rétroactivité</b> : on juge un acte avec les règles qui existaient <b>au moment où il a été commis</b>. Une nouvelle loi plus sévère ne s’applique pas aux faits d’avant.</p><p><b>Exception importante</b> : si une nouvelle loi est <b>plus douce</b> (elle supprime une infraction ou baisse la peine), elle s’applique tout de suite aux faits qui ne sont pas encore définitivement jugés. Les juristes parlent de <b>rétroactivité in mitius</b>.</p>",
              article: {
                ref: "Code pénal, art. 112-1",
                text:
                  "Sont seuls punissables les faits constitutifs d’une infraction à la date à laquelle ils ont été commis.",
              },
            },
            {
              title: "La loi se lit à la lettre",
              body:
                "<p>C’est l’<b>interprétation stricte</b>. Le juge n’a pas le droit d’élargir un texte pénal à une situation qu’il ne prévoit pas, même si elle y ressemble beaucoup.</p><p>Conséquence : quand une nouvelle pratique apparaît, le législateur doit souvent écrire un texte spécial. Par exemple, le Code précise expressément que le vol d’énergie (l’électricité) est assimilé à un vol.</p>",
              article: { ref: "Code pénal, art. 111-4", text: "La loi pénale est d’interprétation stricte." },
            },
            {
              title: "Innocent jusqu’à preuve du contraire",
              body:
                "<p><b>Présomption d’innocence</b> : toute personne est présumée innocente tant que sa culpabilité n’a pas été établie. C’est à l’accusation de prouver, pas à toi de prouver ton innocence. Et <b>le doute profite à l’accusé</b>.</p><p>Sources : article 9 de la Déclaration des droits de l’homme de 1789 et article préliminaire du Code de procédure pénale.</p><p><b>Personnalité de la responsabilité</b> : on ne répond pénalement que de ses propres actes.</p>",
              article: {
                ref: "Code pénal, art. 121-1",
                text: "Nul n’est responsable pénalement que de son propre fait.",
              },
              example:
                "Si ton frère commet un vol, tu ne peux pas être condamné à sa place. Attention : pour un enfant mineur, les parents peuvent devoir payer les dégâts — mais c’est de la responsabilité <b>civile</b> (de l’argent), pas pénale.",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Principe de légalité", back: "Pas d’infraction ni de peine sans texte (art. 111-3). Crimes et délits : la loi. Contraventions : le règlement." },
            { front: "Non-rétroactivité", back: "Une loi pénale plus sévère ne s’applique pas aux faits commis avant son entrée en vigueur (art. 112-1)." },
            { front: "Rétroactivité in mitius", back: "Une loi plus douce s’applique aux faits passés qui ne sont pas encore définitivement jugés." },
            { front: "Interprétation stricte", back: "Le juge ne peut pas étendre un texte pénal à un cas qu’il ne prévoit pas (art. 111-4)." },
            { front: "Présomption d’innocence", back: "Présumé innocent tant que la culpabilité n’est pas prouvée. La preuve pèse sur l’accusation ; le doute profite à l’accusé." },
            { front: "Personnalité de la responsabilité", back: "On n’est responsable pénalement que de son propre fait (art. 121-1)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            {
              q: "Qui fixe les contraventions (les infractions les moins graves) ?",
              options: ["Le Parlement, par une loi", "Le Gouvernement, par un règlement (décret)", "Le maire de chaque commune", "Le juge, au cas par cas"],
              answer: 1,
              explain: "Crimes et délits relèvent de la loi ; les contraventions relèvent du règlement (art. 111-3).",
            },
            {
              q: "Une loi double la peine du vol en mars. Paul a volé en février. Quelle peine encourt-il ?",
              options: ["La nouvelle peine, doublée", "L’ancienne peine", "Au choix du juge"],
              answer: 1,
              explain: "Non-rétroactivité : une loi plus sévère ne s’applique pas aux faits commis avant elle.",
            },
            {
              q: "Pendant le procès de Léa, une loi supprime l’infraction qu’on lui reproche. Que se passe-t-il ?",
              options: ["Elle est quand même jugée selon l’ancienne loi", "Elle ne peut plus être condamnée pour ces faits", "Le procès est reporté de 6 mois"],
              answer: 1,
              explain: "Une loi plus douce s’applique immédiatement aux faits pas encore définitivement jugés (rétroactivité in mitius).",
            },
            {
              q: "Au procès pénal, s’il reste un doute sérieux, il profite…",
              options: ["à la victime", "à l’accusé", "au procureur"],
              answer: 1,
              explain: "C’est une conséquence directe de la présomption d’innocence.",
            },
            {
              q: "Le fils mineur de Marc commet un vol. Marc peut-il être condamné pénalement pour ce vol ?",
              options: ["Oui, il est responsable de son enfant", "Non, sauf s’il a lui-même participé", "Oui, mais seulement à une amende"],
              answer: 1,
              explain: "Nul n’est responsable pénalement que de son propre fait. Marc pourra en revanche devoir indemniser la victime (responsabilité civile des parents).",
            },
          ],
        },
        {
          type: "case",
          title: "La trottinette et le texte",
          story:
            "Un texte (inventé pour l’exercice) punit « le fait de circuler <b>à vélo</b> sur un trottoir ». Inès est contrôlée en train de rouler sur le trottoir… en <b>trottinette électrique</b>. Le procureur veut la poursuivre sur la base de ce texte.",
          question: "Le juge peut-il condamner Inès sur ce texte ?",
          options: [
            "Oui : une trottinette, c’est comme un vélo, le but du texte est le même",
            "Non : le texte vise les vélos, le juge ne peut pas l’étendre aux trottinettes",
            "Oui, mais avec une peine réduite",
          ],
          answer: 1,
          explain:
            "Interprétation stricte (art. 111-4) : le juge ne peut pas appliquer un texte pénal à un cas qu’il ne prévoit pas. C’est d’ailleurs pour ça que le Code de la route a créé des règles propres aux trottinettes électriques.",
        },
        {
          type: "fiche",
          title: "Les grands principes du droit pénal",
          points: [
            "<b>Légalité</b> : pas d’infraction ni de peine sans texte (art. 111-3).",
            "<b>Non-rétroactivité</b> : on juge avec la loi du jour des faits (art. 112-1)… sauf si la nouvelle loi est plus douce.",
            "<b>Interprétation stricte</b> : le juge applique le texte à la lettre (art. 111-4).",
            "<b>Présomption d’innocence</b> : la preuve pèse sur l’accusation, le doute profite à l’accusé.",
            "<b>Responsabilité personnelle</b> : on ne répond que de ses propres actes (art. 121-1).",
            "Code pénal = le « quoi » ; Code de procédure pénale = le « comment ».",
          ],
          retenir: "Pas de texte, pas d’infraction. Pas de preuve, pas de condamnation.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Crimes, délits, contraventions",
      minutes: 18,
      objectives: [
        "Classer n’importe quelle infraction en lisant sa peine",
        "Savoir quel tribunal juge quoi",
      ],
      steps: [
        {
          type: "lesson",
          title: "Les 3 familles d’infractions",
          slides: [
            {
              title: "Trois familles, selon la gravité",
              body:
                "<p>Toutes les infractions sont rangées en trois catégories, de la moins grave à la plus grave :</p><div class='tiers'><div><b>Contraventions</b><span>les « petites » infractions</span></div><div><b>Délits</b><span>l’essentiel du quotidien judiciaire</span></div><div><b>Crimes</b><span>les plus graves</span></div></div><p>Le réflexe à avoir : <b>c’est la peine prévue par le texte qui donne la catégorie</b>.</p>",
              article: {
                ref: "Code pénal, art. 111-1",
                text: "Les infractions pénales sont classées, suivant leur gravité, en crimes, délits et contraventions.",
              },
            },
            {
              title: "Les contraventions",
              body:
                "<ul><li><b>Jamais de prison.</b> Seulement des amendes (et quelques peines complémentaires).</li><li>5 classes, avec un maximum d’amende : 1re classe 38 € · 2e 150 € · 3e 450 € · 4e 750 € · <b>5e 1 500 €</b> (jusqu’à 3 000 € en cas de récidive quand le texte le prévoit).</li><li>Jugées par le <b>tribunal de police</b>, ou réglées par une <b>amende forfaitaire</b>.</li></ul>",
              example: "Tapage nocturne (3e classe), stationnement gênant, la plupart des petits excès de vitesse.",
            },
            {
              title: "Les délits",
              body:
                "<ul><li>Punis d’<b>emprisonnement jusqu’à 10 ans</b> maximum, et/ou d’une amende d’au moins <b>3 750 €</b>.</li><li>Jugés par le <b>tribunal correctionnel</b>.</li><li>C’est la catégorie la plus fréquente.</li></ul>",
              example: "Vol, escroquerie, conduite avec un taux d’alcool d’au moins 0,8 g/L de sang, harcèlement, usage de stupéfiants.",
            },
            {
              title: "Les crimes",
              body:
                "<ul><li>Punis de <b>réclusion criminelle</b> : 15 ans, 20 ans, 30 ans ou à perpétuité.</li><li>Jugés par la <b>cour d’assises</b> (des magistrats + des citoyens tirés au sort, les jurés)…</li><li>…ou par la <b>cour criminelle départementale</b> (5 magistrats, sans jurés) pour les crimes punis de 15 ou 20 ans commis par des majeurs, hors récidive.</li></ul>",
              example: "Meurtre, viol, vol à main armée.",
            },
            {
              title: "Pourquoi ce classement change tout",
              body:
                "<p>La catégorie décide de beaucoup de choses :</p><ul><li><b>Le tribunal</b> compétent.</li><li>Si la <b>tentative</b> est punissable (toujours pour un crime, parfois pour un délit, jamais pour une contravention).</li><li>Le délai de <b>prescription</b> : 1 an, 6 ans ou 20 ans.</li></ul><p>Quand un texte dit « puni de 3 ans d’emprisonnement », retiens : <b>3 ans = maximum encouru</b>, et ça en fait un délit.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Range chaque infraction",
          instruction: "Lis la peine prévue et classe l’infraction dans la bonne famille.",
          categories: ["Contravention", "Délit", "Crime"],
          items: [
            { text: "Punie d’une amende de 450 € maximum", cat: 0, why: "Pas de prison, amende ≤ 1 500 € → contravention (3e classe)." },
            { text: "Puni de 3 ans d’emprisonnement et 45 000 € d’amende", cat: 1, why: "Prison jusqu’à 10 ans → délit." },
            { text: "Puni de 30 ans de réclusion criminelle", cat: 2, why: "Réclusion criminelle → crime." },
            { text: "Puni de 10 ans d’emprisonnement", cat: 1, why: "10 ans, c’est le maximum d’un délit. Au-delà, on passe en crime." },
            { text: "Punie d’une amende de 1 500 €", cat: 0, why: "C’est le plafond de la 5e classe → contravention." },
            { text: "Puni de la réclusion criminelle à perpétuité", cat: 2, why: "Perpétuité → crime." },
            { text: "Puni de 7 500 € d’amende, sans prison", cat: 1, why: "Amende ≥ 3 750 € → délit, même sans prison." },
            { text: "Puni de 15 ans de réclusion criminelle", cat: 2, why: "15 ans de réclusion → crime (le plus bas niveau)." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Contravention", back: "Infraction la moins grave. Amende seulement (max 1 500 €, 3 000 € en récidive). Tribunal de police." },
            { front: "Délit", back: "Emprisonnement jusqu’à 10 ans et/ou amende ≥ 3 750 €. Tribunal correctionnel." },
            { front: "Crime", back: "Réclusion criminelle de 15 ans à perpétuité. Cour d’assises ou cour criminelle départementale." },
            { front: "Cour d’assises", back: "Juge les crimes avec des magistrats et des jurés citoyens tirés au sort." },
            { front: "Cour criminelle départementale", back: "5 magistrats, sans jurés. Crimes punis de 15 ou 20 ans, commis par des majeurs hors récidive." },
            { front: "Comment reconnaître la catégorie ?", back: "On regarde la peine maximale prévue par le texte." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle est la peine de prison maximale pour un délit ?", options: ["5 ans", "10 ans", "15 ans", "20 ans"], answer: 1, explain: "Au-delà de 10 ans, on parle de réclusion criminelle : c’est un crime." },
            { q: "Quelle juridiction juge un vol simple ?", options: ["Le tribunal de police", "Le tribunal correctionnel", "La cour d’assises"], answer: 1, explain: "Le vol simple est puni de 3 ans : c’est un délit → tribunal correctionnel." },
            { q: "Peut-on aller en prison pour une contravention ?", options: ["Oui, quelques jours", "Non, jamais", "Seulement en récidive"], answer: 1, explain: "Les contraventions ne sont jamais punies d’emprisonnement." },
            { q: "Un meurtre (puni de 30 ans) commis par un majeur est jugé par…", options: ["la cour criminelle départementale", "la cour d’assises", "le tribunal correctionnel"], answer: 1, explain: "La cour criminelle ne juge que les crimes punis de 15 ou 20 ans. 30 ans → cour d’assises." },
            { q: "Amende maximale d’une contravention de 5e classe (hors récidive) ?", options: ["750 €", "1 500 €", "3 750 €"], answer: 1, explain: "1 500 €, portée à 3 000 € en récidive quand le texte le prévoit." },
          ],
        },
        {
          type: "case",
          title: "La soirée qui dérape",
          story:
            "Tom organise une fête chez lui. À 3 h du matin, la musique est encore à fond : les voisins appellent la police pour <b>tapage nocturne</b>. En repartant, son ami Yanis prend le volant avec <b>1,2 g d’alcool par litre de sang</b>.",
          question: "Devant quelles juridictions ces deux affaires peuvent-elles être jugées ?",
          options: [
            "Les deux devant le tribunal de police",
            "Tapage → tribunal de police ; alcool au volant → tribunal correctionnel",
            "Les deux devant le tribunal correctionnel",
          ],
          answer: 1,
          explain:
            "Le tapage nocturne est une contravention (souvent réglée par amende forfaitaire). La conduite avec au moins 0,8 g/L de sang est un délit, jugé par le tribunal correctionnel.",
        },
        {
          type: "fiche",
          title: "Crimes, délits, contraventions",
          points: [
            "<b>Contravention</b> : amende seulement, max 1 500 € (5e classe) → tribunal de police.",
            "<b>Délit</b> : prison jusqu’à 10 ans et/ou amende ≥ 3 750 € → tribunal correctionnel.",
            "<b>Crime</b> : réclusion de 15 ans à perpétuité → cour d’assises ou cour criminelle départementale.",
            "La catégorie se lit dans <b>la peine maximale</b> prévue par le texte.",
            "Elle décide du tribunal, de la tentative et de la prescription.",
          ],
          retenir: "Amende seule → contravention. Prison ≤ 10 ans → délit. Réclusion → crime.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les ingrédients d’une infraction",
      minutes: 18,
      objectives: ["Connaître les 3 éléments d’une infraction", "Comprendre quand une tentative est punie"],
      steps: [
        {
          type: "lesson",
          title: "La recette d’une infraction",
          slides: [
            {
              title: "Trois ingrédients obligatoires",
              body:
                "<p>Pour qu’il y ait infraction, il faut réunir <b>trois éléments</b>. S’il en manque un seul, il n’y a pas d’infraction.</p><ol><li><b>L’élément légal</b> : un texte qui interdit le comportement (vu en séance 1).</li><li><b>L’élément matériel</b> : un acte concret.</li><li><b>L’élément moral</b> : l’état d’esprit de l’auteur.</li></ol>",
            },
            {
              title: "L’élément matériel",
              body:
                "<p>C’est le comportement extérieur. Penser à commettre une infraction n’est jamais puni : il faut <b>un acte</b>.</p><ul><li>Une <b>action</b> : frapper, prendre, mentir pour obtenir de l’argent…</li><li>Ou une <b>abstention</b>, quand la loi oblige à agir : ne pas porter secours à une personne en danger.</li></ul><p>Certaines infractions exigent un <b>résultat</b> (la mort pour le meurtre). D’autres sont punies même sans résultat : l’empoisonnement est puni même si la victime survit.</p>",
            },
            {
              title: "L’élément moral",
              body:
                "<p>Par principe, crimes et délits sont <b>intentionnels</b> : l’auteur a voulu l’acte en sachant qu’il était interdit.</p><p>Mais la loi punit aussi certaines <b>fautes non intentionnelles</b> : imprudence, négligence, mise en danger délibérée. Exemple : l’homicide involontaire.</p><p>Pour les <b>contraventions</b>, pas besoin de prouver l’intention : le fait suffit. Le radar ne te demande pas si tu voulais rouler vite.</p>",
              article: {
                ref: "Code pénal, art. 121-3",
                text: "Il n’y a point de crime ou de délit sans intention de le commettre.",
              },
            },
            {
              title: "Le mobile ne compte pas",
              body:
                "<p>Le <b>mobile</b>, c’est la raison profonde qui pousse à agir (la faim, la jalousie, l’argent…). Pour savoir s’il y a infraction, <b>il est indifférent</b>.</p><p>Voler pour nourrir sa famille reste un vol. Le juge pourra en tenir compte pour choisir la peine, et dans des cas extrêmes l’<b>état de nécessité</b> peut jouer (séance 5).</p>",
            },
            {
              title: "La tentative",
              body:
                "<p>On peut être puni même si l’infraction n’a pas abouti. Il faut deux conditions :</p><ol><li>Un <b>commencement d’exécution</b> : des actes qui mènent directement à l’infraction (pas une simple préparation).</li><li>L’échec est dû à une cause <b>indépendante de la volonté</b> de l’auteur — il n’a pas renoncé de lui-même (pas de <b>désistement volontaire</b>).</li></ol><p>La tentative est punie <b>comme l’infraction réussie</b> : toujours pour un crime, pour un délit seulement si un texte le prévoit, jamais pour une contravention.</p>",
              article: {
                ref: "Code pénal, art. 121-5",
                text:
                  "La tentative est constituée dès lors que, manifestée par un commencement d’exécution, elle n’a été suspendue ou n’a manqué son effet qu’en raison de circonstances indépendantes de la volonté de son auteur.",
              },
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Les 3 éléments d’une infraction", back: "Légal (un texte), matériel (un acte), moral (l’état d’esprit)." },
            { front: "Élément matériel", back: "L’acte concret : une action, ou une abstention quand la loi impose d’agir." },
            { front: "Élément moral", back: "Intention (principe pour crimes et délits) ou faute d’imprudence quand la loi le prévoit." },
            { front: "Mobile", back: "La raison d’agir. Indifférent pour savoir s’il y a infraction, peut jouer sur la peine." },
            { front: "Commencement d’exécution", back: "Acte qui mène directement à l’infraction, au-delà de la simple préparation." },
            { front: "Désistement volontaire", back: "L’auteur renonce de lui-même avant la fin : pas de tentative punissable." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Karim achète des gants et repère une maison pour la cambrioler, puis abandonne son projet. Tentative ?", options: ["Oui, il a préparé le vol", "Non, ce ne sont que des actes préparatoires"], answer: 1, explain: "Repérer et acheter du matériel, c’est préparer. Il n’y a pas encore de commencement d’exécution." },
            { q: "Un cambrioleur force une porte, mais s’enfuit parce que l’alarme sonne. Tentative punissable ?", options: ["Oui", "Non, il n’a rien volé"], answer: 0, explain: "Commencement d’exécution + échec dû à une circonstance extérieure (l’alarme) = tentative." },
            { q: "Même cambrioleur : au moment d’entrer, il renonce par remords, sans aucune pression extérieure.", options: ["Tentative de vol punissable", "Pas de tentative : désistement volontaire"], answer: 1, explain: "Il a renoncé de lui-même. Attention : la porte abîmée peut être poursuivie à part (dégradation)." },
            { q: "Pour un excès de vitesse (contravention), faut-il prouver que le conducteur voulait rouler trop vite ?", options: ["Oui", "Non, le fait suffit"], answer: 1, explain: "Pour les contraventions, la seule constatation des faits suffit." },
            { q: "La tentative d’une contravention est-elle punissable ?", options: ["Toujours", "Si le texte le prévoit", "Jamais"], answer: 2, explain: "Crime : toujours. Délit : si un texte le prévoit. Contravention : jamais." },
          ],
        },
        {
          type: "case",
          title: "La poche vide",
          story:
            "Dans le métro, Léo glisse discrètement la main dans la poche d’un passant pour lui prendre son portefeuille. Pas de chance : <b>la poche est vide</b>. Un agent de sécurité a tout vu.",
          question: "Léo peut-il être puni ?",
          options: [
            "Non : il n’y avait rien à voler, donc aucune infraction possible",
            "Oui : c’est une tentative de vol, punie comme un vol",
            "Seulement d’une contravention",
          ],
          answer: 1,
          explain:
            "C’est une « infraction impossible » : la jurisprudence la traite comme une tentative punissable. Il y a commencement d’exécution, et l’échec ne dépend pas de sa volonté. Le Code prévoit expressément que la tentative de vol est punie des mêmes peines (art. 311-13).",
        },
        {
          type: "fiche",
          title: "Les ingrédients d’une infraction",
          points: [
            "Il faut 3 éléments : <b>légal</b> (texte), <b>matériel</b> (acte), <b>moral</b> (intention ou faute).",
            "Penser n’est pas puni : il faut un acte (ou une abstention si la loi impose d’agir).",
            "Crimes et délits : intention par principe ; imprudence seulement si la loi le prévoit.",
            "Contraventions : le fait suffit, pas besoin de prouver l’intention.",
            "Le <b>mobile</b> est indifférent à l’existence de l’infraction.",
            "<b>Tentative</b> = commencement d’exécution + pas de désistement volontaire. Crime : toujours ; délit : si prévu ; contravention : jamais.",
          ],
          retenir: "Texte + acte + intention. Préparer n’est pas tenter ; renoncer de soi-même n’est pas tenter.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Qui est responsable ?",
      minutes: 16,
      objectives: ["Distinguer auteur, coauteur et complice", "Savoir que les entreprises et les mineurs peuvent être poursuivis"],
      steps: [
        {
          type: "lesson",
          title: "Les responsables",
          slides: [
            {
              title: "Auteur et coauteur",
              body:
                "<p>L’<b>auteur</b> est celui qui commet lui-même les faits, ou qui tente de les commettre (art. 121-4).</p><p>Quand plusieurs personnes réalisent ensemble l’infraction, ce sont des <b>coauteurs</b> : chacun est responsable comme s’il avait agi seul.</p>",
            },
            {
              title: "Le complice",
              body:
                "<p>Le complice ne commet pas l’infraction lui-même, mais il y participe de deux façons :</p><ul><li>par <b>aide ou assistance</b> : fournir l’arme, faire le guet, conduire la voiture…</li><li>par <b>provocation ou instructions</b> : pousser quelqu’un à agir par un don, une promesse, une menace, un ordre, ou lui expliquer comment faire.</li></ul><p>Conditions : il faut une infraction principale punissable, et une aide <b>en connaissance de cause</b>, donnée <b>avant ou pendant</b> les faits. Aider après coup, ce n’est pas de la complicité (mais ça peut être autre chose, comme du recel).</p><p>Le complice encourt <b>les mêmes peines que l’auteur</b> (art. 121-6).</p>",
              article: {
                ref: "Code pénal, art. 121-7",
                text:
                  "Est complice d’un crime ou d’un délit la personne qui sciemment, par aide ou assistance, en a facilité la préparation ou la consommation.",
              },
            },
            {
              title: "Les entreprises aussi",
              body:
                "<p>Une <b>personne morale</b> (société, association…) peut être condamnée pénalement pour les infractions commises <b>pour son compte</b> par ses dirigeants ou représentants (art. 121-2). Seul l’État y échappe.</p><ul><li>Amende jusqu’à <b>5 fois</b> celle prévue pour une personne physique.</li><li>Autres peines possibles : interdiction d’activité, fermeture d’établissement, exclusion des marchés publics, voire dissolution.</li></ul><p>Et ça ne protège pas le dirigeant : la société et lui peuvent être poursuivis ensemble.</p>",
            },
            {
              title: "Les mineurs",
              body:
                "<p>La <b>majorité pénale</b> est à <b>18 ans</b>. Les mineurs relèvent du <b>Code de la justice pénale des mineurs</b> (2021) :</p><ul><li>Moins de <b>13 ans</b> : présumé <b>non capable de discernement</b> (mais cette présomption peut être renversée).</li><li>À partir de <b>13 ans</b> : présumé capable de discernement.</li><li>Priorité aux mesures <b>éducatives</b>. Si une peine est prononcée, elle est en principe <b>divisée par deux</b> par rapport à un majeur (l’« excuse de minorité », qui peut être écartée exceptionnellement après 16 ans).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Coauteur", back: "Celui qui réalise l’infraction avec d’autres. Chacun est responsable comme un auteur." },
            { front: "Complice par aide ou assistance", back: "Facilite sciemment la préparation ou la réalisation : fournir le matériel, faire le guet…" },
            { front: "Complice par provocation", back: "Pousse à agir par don, promesse, menace, ordre, abus d’autorité, ou donne des instructions." },
            { front: "Peine du complice", back: "La même que celle encourue par l’auteur (art. 121-6)." },
            { front: "Personne morale", back: "Société, association… responsable pénalement sauf l’État. Amende jusqu’à 5 fois celle d’une personne physique." },
            { front: "Mineur de moins de 13 ans", back: "Présumé sans discernement (présomption simple). Priorité à l’éducatif." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Sam prête, en connaissance de cause, un pied-de-biche à Alex pour cambrioler. Sam est…", options: ["innocent, il n’est pas entré", "complice par aide ou assistance", "coauteur"], answer: 1, explain: "Il a facilité sciemment la préparation : complicité par aide." },
            { q: "Après un vol auquel elle n’a pas participé, Nora accepte de cacher les objets volés. Complice du vol ?", options: ["Oui", "Non"], answer: 1, explain: "L’aide après coup n’est pas de la complicité. En revanche, c’est du recel (séance 7)." },
            { q: "Une SARL peut-elle être condamnée pénalement ?", options: ["Non, seules les personnes physiques peuvent l’être", "Oui, comme toute personne morale sauf l’État"], answer: 1, explain: "Art. 121-2 du Code pénal." },
            { q: "Quelle peine encourt le complice ?", options: ["La moitié de celle de l’auteur", "La même que l’auteur", "Une simple amende"], answer: 1, explain: "Le complice est puni comme auteur (art. 121-6)." },
            { q: "Un enfant de 11 ans commet des dégradations. Il est présumé…", options: ["pleinement responsable", "non capable de discernement"], answer: 1, explain: "Avant 13 ans, présomption de non-discernement, qui peut être renversée." },
          ],
        },
        {
          type: "case",
          title: "Le chauffeur",
          story:
            "Contre 500 €, Mehdi accepte d’attendre au volant pendant que deux amis braquent une bijouterie. Il ne descend pas de la voiture. Une fois le braquage fait, il les emmène à toute vitesse.",
          question: "Quelle est la situation de Mehdi ?",
          options: [
            "Il n’a rien à craindre : il n’est jamais entré dans la bijouterie",
            "Il est complice et encourt les mêmes peines que ses amis",
            "Il est complice, mais sa peine est automatiquement réduite de moitié",
          ],
          answer: 1,
          explain:
            "Il a apporté une aide sciemment, préparée à l’avance et pendant les faits (faire le guet, assurer la fuite). C’est de la complicité par aide ou assistance : mêmes peines encourues que les auteurs.",
        },
        {
          type: "fiche",
          title: "Qui est responsable ?",
          points: [
            "<b>Auteur</b> : commet ou tente. <b>Coauteurs</b> : agissent ensemble, chacun responsable.",
            "<b>Complice</b> (art. 121-7) : aide/assistance ou provocation/instructions, sciemment, avant ou pendant les faits.",
            "Le complice encourt <b>la même peine</b> que l’auteur (art. 121-6).",
            "Aide après coup ≠ complicité (mais peut être du recel).",
            "<b>Personnes morales</b> responsables sauf l’État (art. 121-2) ; amende jusqu’à ×5.",
            "<b>Mineurs</b> : majorité pénale 18 ans ; moins de 13 ans présumé sans discernement ; peine en principe divisée par deux.",
          ],
          retenir: "Celui qui aide sciemment risque autant que celui qui agit.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Les excuses qui marchent (ou pas)",
      minutes: 18,
      objectives: ["Connaître les causes d’irresponsabilité", "Maîtriser les conditions de la légitime défense"],
      steps: [
        {
          type: "lesson",
          title: "Les causes d’irresponsabilité",
          slides: [
            {
              title: "Quand la loi dit « pas responsable »",
              body:
                "<p>Dans certaines situations, une personne a bien commis l’acte… mais n’est pas pénalement responsable. Ces cas sont listés aux <b>articles 122-1 à 122-8</b> du Code pénal.</p><p>Deux familles :</p><ul><li><b>Causes objectives</b> (« faits justificatifs ») : l’acte devient permis. Légitime défense, état de nécessité, ordre de la loi.</li><li><b>Causes subjectives</b> : c’est la personne qui ne peut pas être reprochée. Trouble mental, contrainte, erreur de droit, minorité.</li></ul>",
            },
            {
              title: "La légitime défense",
              body:
                "<p>Côté <b>attaque</b> : elle doit être <b>injustifiée</b> et <b>actuelle</b> (en train de se produire), contre soi ou contre autrui.</p><p>Côté <b>riposte</b>, trois conditions :</p><ul><li><b>Simultanée</b> : en même temps, pas le lendemain.</li><li><b>Nécessaire</b> : il n’y avait pas d’autre moyen.</li><li><b>Proportionnée</b> : pas de disproportion entre l’attaque et la défense.</li></ul><p>Pour défendre un <b>bien</b>, c’est possible, mais <b>jamais par un homicide volontaire</b>.</p><p>La légitime défense est <b>présumée</b> (art. 122-6) quand on repousse <b>de nuit</b> une entrée par effraction, violence ou ruse dans un lieu habité, ou quand on se défend contre des vols ou pillages commis avec violence.</p>",
              article: { ref: "Code pénal, art. 122-5", text: "N’est pas pénalement responsable la personne qui, devant une atteinte injustifiée envers elle-même ou autrui, accomplit, dans le même temps, un acte commandé par la nécessité de la légitime défense…" },
            },
            {
              title: "L’état de nécessité",
              body:
                "<p>Face à un <b>danger actuel ou imminent</b>, on peut commettre une infraction si c’est <b>nécessaire</b> pour sauver une personne ou un bien, sauf disproportion entre les moyens et la gravité du danger (art. 122-7).</p><p>Différence avec la légitime défense : ici, on ne répond pas à une attaque, on <b>évite un danger</b>.</p>",
              example: "Casser la vitre d’une voiture garée en plein soleil pour sauver un bébé enfermé à l’intérieur.",
            },
            {
              title: "Le trouble mental",
              body:
                "<ul><li>Discernement <b>aboli</b> par un trouble psychique ou neuropsychique → <b>pas responsable</b>. Des mesures de soins ou de sûreté restent possibles.</li><li>Discernement seulement <b>altéré</b> → responsable, mais la peine de prison encourue est en principe <b>réduite d’un tiers</b>.</li></ul><p>Depuis 2022, celui qui consomme volontairement une substance <b>pour</b> commettre une infraction ne peut pas invoquer l’abolition de son discernement.</p>",
              article: { ref: "Code pénal, art. 122-1", text: "N’est pas pénalement responsable la personne qui était atteinte, au moment des faits, d’un trouble psychique ou neuropsychique ayant aboli son discernement ou le contrôle de ses actes." },
            },
            {
              title: "Les autres causes",
              body:
                "<ul><li><b>Contrainte</b> (122-2) : une force irrésistible et imprévisible a obligé à agir.</li><li><b>Erreur de droit</b> (122-3) : avoir cru, par une erreur <b>impossible à éviter</b>, que l’acte était permis. Très rarement admise : « nul n’est censé ignorer la loi ».</li><li><b>Ordre de la loi / commandement de l’autorité légitime</b> (122-4) : un chirurgien qui opère n’est pas poursuivi pour violences. Mais obéir à un ordre <b>manifestement illégal</b> ne protège pas.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Légitime défense : conditions de l’attaque", back: "Injustifiée et actuelle, contre soi ou autrui." },
            { front: "Légitime défense : conditions de la riposte", back: "Simultanée, nécessaire, proportionnée." },
            { front: "Légitime défense des biens", back: "Possible, mais jamais par un homicide volontaire." },
            { front: "Légitime défense présumée (122-6)", back: "Repousser de nuit une entrée par effraction, violence ou ruse dans un lieu habité ; se défendre contre un vol avec violence." },
            { front: "État de nécessité", back: "Infraction nécessaire pour éviter un danger actuel ou imminent, sans disproportion (art. 122-7)." },
            { front: "Discernement aboli / altéré", back: "Aboli → irresponsable. Altéré → responsable, peine de prison encourue réduite d’un tiers." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelles conditions doit respecter une riposte en légitime défense ?", options: ["Être immédiate, nécessaire et proportionnée", "Intervenir dans les 24 h", "Être plus forte que l’attaque pour dissuader"], answer: 0, explain: "Simultanéité, nécessité, proportionnalité (art. 122-5)." },
            { q: "Peut-on tuer volontairement pour protéger un bien (ex. sa voiture) ?", options: ["Oui si le bien est de grande valeur", "Non, jamais au titre de la légitime défense"], answer: 1, explain: "La légitime défense des biens exclut l’homicide volontaire." },
            { q: "Casser la vitre d’une voiture pour sauver un enfant enfermé en pleine chaleur relève…", options: ["de la légitime défense", "de l’état de nécessité", "de l’erreur de droit"], answer: 1, explain: "Il n’y a pas d’attaque, mais un danger actuel : c’est l’état de nécessité." },
            { q: "« Je ne savais pas que c’était interdit » est en principe…", options: ["une excuse valable", "une excuse très rarement admise"], answer: 1, explain: "L’erreur de droit n’est admise que si elle était impossible à éviter (art. 122-3)." },
            { q: "Une personne au discernement seulement altéré au moment des faits est…", options: ["irresponsable", "responsable, avec une peine encourue réduite", "jugée comme un mineur"], answer: 1, explain: "Altéré ≠ aboli : responsable, mais la peine de prison encourue est réduite d’un tiers." },
          ],
        },
        {
          type: "case",
          title: "Le vélo volé",
          story:
            "Sofiane se fait voler son vélo devant chez lui. <b>Le lendemain</b>, il reconnaît le voleur dans la rue, le rattrape et lui donne plusieurs coups de poing. Le voleur porte plainte. Sofiane invoque la légitime défense.",
          question: "La légitime défense peut-elle être retenue ?",
          options: [
            "Oui : il a été victime d’un vol, il avait le droit de réagir",
            "Non : l’attaque n’était plus actuelle, c’est une riposte décalée",
            "Oui, mais seulement si le vélo valait plus de 500 €",
          ],
          answer: 1,
          explain:
            "La riposte doit être simultanée à une attaque actuelle. Le lendemain, c’est une vengeance, pas une défense : Sofiane peut être poursuivi pour violences. Le bon réflexe : porter plainte pour le vol.",
        },
        {
          type: "fiche",
          title: "Les causes d’irresponsabilité",
          points: [
            "Listées aux articles <b>122-1 à 122-8</b> du Code pénal.",
            "<b>Légitime défense</b> : attaque injustifiée et actuelle ; riposte simultanée, nécessaire, proportionnée. Jamais d’homicide volontaire pour un bien.",
            "<b>Présomption</b> de légitime défense : entrée de nuit par effraction dans un lieu habité, vol avec violence.",
            "<b>État de nécessité</b> : éviter un danger actuel ou imminent, sans disproportion.",
            "<b>Trouble mental</b> : aboli → irresponsable ; altéré → peine réduite.",
            "<b>Contrainte</b>, <b>erreur de droit inévitable</b>, <b>ordre de la loi</b> (sauf ordre manifestement illégal).",
          ],
          retenir: "Se défendre, oui. Se venger, non.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Les atteintes aux personnes",
      minutes: 20,
      objectives: ["Distinguer meurtre, assassinat et homicide involontaire", "Comprendre l’échelle des violences et la non-assistance"],
      steps: [
        {
          type: "lesson",
          title: "Les atteintes aux personnes",
          slides: [
            {
              title: "Les atteintes à la vie",
              body:
                "<table class='t'><tr><th>Infraction</th><th>Ce que c’est</th><th>Peine max</th></tr><tr><td><b>Meurtre</b> (221-1)</td><td>Donner volontairement la mort</td><td>30 ans de réclusion</td></tr><tr><td><b>Assassinat</b> (221-3)</td><td>Meurtre avec préméditation ou guet-apens</td><td>Perpétuité</td></tr><tr><td><b>Empoisonnement</b> (221-5)</td><td>Attenter à la vie par des substances mortelles, même si la victime survit</td><td>30 ans de réclusion</td></tr><tr><td><b>Homicide involontaire</b> (221-6)</td><td>Causer la mort par imprudence ou négligence</td><td>3 ans et 45 000 € (5 ans et 75 000 € si violation manifestement délibérée d’une règle de sécurité)</td></tr></table><p>La différence clé : <b>l’intention de tuer</b> (meurtre) et <b>le fait de l’avoir planifiée</b> (assassinat).</p>",
            },
            {
              title: "Les violences volontaires",
              body:
                "<p>Leur gravité dépend surtout de l’<b>ITT</b> : l’incapacité totale de travail, fixée par un médecin. Ce n’est <b>pas</b> un arrêt de travail : c’est la durée pendant laquelle la victime ne peut plus faire les gestes de la vie courante.</p><ul><li>Sans ITT → contravention de 4e classe.</li><li>ITT ≤ 8 jours → contravention de 5e classe.</li><li>ITT > 8 jours → <b>délit</b> : 3 ans et 45 000 € (222-11).</li></ul><p>Mais une <b>circonstance aggravante</b> (sur un conjoint, avec une arme, en réunion, sur une personne vulnérable, sur un agent public…) en fait souvent un <b>délit</b> même sans ITT (222-13).</p><p>Tout en haut : les violences ayant entraîné la mort <b>sans intention de la donner</b> (222-7) sont un <b>crime</b> puni de 15 ans de réclusion.</p>",
            },
            {
              title: "La non-assistance à personne en danger",
              body:
                "<p>La loi oblige parfois à <b>agir</b>. Deux obligations, si c’est possible sans risque pour soi ou pour les autres :</p><ul><li><b>Empêcher</b> un crime ou un délit contre l’intégrité d’une personne.</li><li><b>Porter secours</b> à une personne en péril, soi-même ou en appelant les secours.</li></ul><p>Peine : <b>5 ans et 75 000 €</b>. Bonne nouvelle : <b>appeler le 15, le 17, le 18 ou le 112</b> suffit souvent à remplir son obligation.</p>",
              article: { ref: "Code pénal, art. 223-6", text: "Sera puni des mêmes peines quiconque s’abstient volontairement de porter à une personne en péril l’assistance que, sans risque pour lui ou pour les tiers, il pouvait lui prêter soit par son action personnelle, soit en provoquant un secours." },
            },
            {
              title: "Menaces et harcèlement",
              body:
                "<ul><li><b>Menace de mort</b> répétée, ou matérialisée par un écrit, une image ou un message : <b>3 ans et 45 000 €</b> (222-17).</li><li><b>Harcèlement moral</b> : des propos ou comportements répétés qui dégradent les conditions de vie de la victime. 1 an et 15 000 €, davantage avec des circonstances aggravantes — notamment s’il passe par Internet ou les réseaux sociaux (222-33-2-2).</li></ul><p>Un message vocal, un DM ou une story peuvent suffire comme preuve : <b>capture d’écran et plainte</b>.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Contravention, délit ou crime ?",
          instruction: "Classe chaque situation (sans autre circonstance que celles indiquées).",
          categories: ["Contravention", "Délit", "Crime"],
          items: [
            { text: "Une gifle, aucune ITT, aucune circonstance aggravante", cat: 0, why: "Violences sans ITT ni circonstance aggravante → contravention de 4e classe." },
            { text: "Un coup de poing qui entraîne 10 jours d’ITT", cat: 1, why: "ITT > 8 jours → délit (art. 222-11)." },
            { text: "Un coup porté à son conjoint, sans ITT", cat: 1, why: "La qualité de conjoint est une circonstance aggravante → délit (art. 222-13)." },
            { text: "Un coup de poing, 5 jours d’ITT, aucune circonstance", cat: 0, why: "ITT ≤ 8 jours sans circonstance → contravention de 5e classe." },
            { text: "Tuer quelqu’un après avoir préparé son plan pendant des semaines", cat: 2, why: "Préméditation → assassinat, puni de la perpétuité." },
            { text: "Provoquer un accident mortel par imprudence", cat: 1, why: "Homicide involontaire → délit (art. 221-6)." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Meurtre", back: "Donner volontairement la mort. 30 ans de réclusion (221-1)." },
            { front: "Assassinat", back: "Meurtre avec préméditation ou guet-apens. Perpétuité (221-3)." },
            { front: "Homicide involontaire", back: "Mort causée par imprudence ou négligence. Délit : 3 ans et 45 000 € (221-6)." },
            { front: "ITT", back: "Incapacité totale de travail, fixée par un médecin. Mesure la gravité des violences (seuil clé : 8 jours)." },
            { front: "Non-assistance à personne en danger", back: "Ne pas empêcher un crime/délit ou ne pas porter secours, alors qu’on le pouvait sans risque. 5 ans et 75 000 € (223-6)." },
            { front: "Violences ayant entraîné la mort sans intention", back: "Crime : 15 ans de réclusion (222-7). Ni meurtre, ni homicide involontaire." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ce qui distingue l’assassinat du meurtre, c’est…", options: ["l’arme utilisée", "la préméditation ou le guet-apens", "le nombre de victimes"], answer: 1, explain: "Assassinat = meurtre + préméditation (ou guet-apens)." },
            { q: "L’ITT, c’est…", options: ["la durée de l’arrêt de travail", "la durée pendant laquelle la victime ne peut plus accomplir les gestes de la vie courante", "le montant de l’indemnisation"], answer: 1, explain: "C’est une notion médico-légale, différente de l’arrêt de travail." },
            { q: "Tu vois une personne inconsciente dans la rue. Quel minimum la loi attend-elle de toi ?", options: ["Rien, tu n’es pas médecin", "Au moins appeler les secours", "Lui faire un massage cardiaque obligatoirement"], answer: 1, explain: "Provoquer un secours (appeler le 15/112) suffit à remplir l’obligation si tu ne peux pas faire plus sans risque." },
            { q: "L’homicide involontaire est…", options: ["une contravention", "un délit", "un crime"], answer: 1, explain: "Puni de 3 ans (ou 5 ans), c’est un délit." },
            { q: "Une menace de mort envoyée par SMS est punie au maximum de…", options: ["une amende de 450 €", "3 ans et 45 000 €", "10 ans"], answer: 1, explain: "Menace de mort matérialisée par écrit : 3 ans et 45 000 € (222-17)." },
          ],
        },
        {
          type: "case",
          title: "La sortie de boîte",
          story:
            "À la sortie d’une boîte de nuit, Kevin se dispute avec un autre client et lui donne <b>un seul coup de poing</b>. La victime tombe, se cogne la tête contre le trottoir et <b>meurt</b>. Tous les témoins confirment que Kevin ne voulait pas tuer.",
          question: "Quelle est la bonne qualification ?",
          options: [
            "Meurtre",
            "Homicide involontaire",
            "Violences volontaires ayant entraîné la mort sans intention de la donner",
          ],
          answer: 2,
          explain:
            "Pas de meurtre : il n’y avait pas d’intention de tuer. Pas d’homicide involontaire non plus : le coup, lui, était volontaire. C’est un crime puni de 15 ans de réclusion criminelle (art. 222-7).",
        },
        {
          type: "fiche",
          title: "Les atteintes aux personnes",
          points: [
            "<b>Meurtre</b> : 30 ans. <b>Assassinat</b> (préméditation) : perpétuité. <b>Empoisonnement</b> : 30 ans.",
            "<b>Homicide involontaire</b> : délit, 3 ans et 45 000 € (5 ans si violation délibérée).",
            "<b>Violences</b> : gravité selon l’ITT (seuil 8 jours) et les circonstances aggravantes.",
            "Coup volontaire + mort non voulue = <b>crime</b> de 15 ans (222-7).",
            "<b>Non-assistance</b> : 5 ans et 75 000 € ; appeler les secours suffit souvent.",
            "<b>Menace de mort</b> écrite ou répétée : 3 ans. <b>Harcèlement</b> : aggravé en ligne.",
          ],
          retenir: "Ce qui compte : l’intention (tuer ? frapper ?), le résultat, et l’ITT.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Les atteintes aux biens",
      minutes: 20,
      objectives: ["Ne plus confondre vol, escroquerie, abus de confiance et recel", "Repérer les pièges du quotidien (achats douteux)"],
      steps: [
        {
          type: "lesson",
          title: "Les atteintes aux biens",
          slides: [
            {
              title: "Le vol",
              body:
                "<p>Le vol, c’est <b>prendre</b> la chose de quelqu’un d’autre, sans son accord, en le sachant.</p><ul><li><b>Soustraire</b> : appréhender la chose contre la volonté du propriétaire.</li><li>Une <b>chose d’autrui</b> : un bien mobilier qui appartient à quelqu’un d’autre.</li><li>Avec <b>intention</b>.</li></ul><p>Vol simple : <b>3 ans et 45 000 €</b> (311-3). Plus lourd avec des circonstances aggravantes : en réunion, avec effraction, dans les transports en commun, avec violence… (311-4 et suivants).</p><p>Particularité : le vol entre époux, ou entre parents et enfants, ne peut en principe pas être poursuivi (<b>immunité familiale</b>, 311-12), sauf exceptions (papiers d’identité, moyens de paiement, époux séparés…).</p>",
              article: { ref: "Code pénal, art. 311-1", text: "Le vol est la soustraction frauduleuse de la chose d’autrui." },
            },
            {
              title: "L’escroquerie",
              body:
                "<p>Ici, la victime <b>remet elle-même</b> son argent ou son bien… parce qu’elle a été <b>trompée</b> :</p><ul><li>par un <b>faux nom</b> ou une <b>fausse qualité</b> (« je suis policier », « je suis votre banquier ») ;</li><li>par l’<b>abus d’une qualité vraie</b> ;</li><li>ou par des <b>manœuvres frauduleuses</b> (une mise en scène, de faux documents, un faux site…).</li></ul><p>Un simple mensonge ne suffit généralement pas : il faut une mise en scène ou un faux nom/une fausse qualité.</p><p>Peine : <b>5 ans et 375 000 €</b> (313-1).</p>",
              example: "Le faux conseiller bancaire qui t’appelle avec le numéro de ta banque et te fait valider un « virement de sécurité ».",
            },
            {
              title: "L’abus de confiance",
              body:
                "<p>On t’a <b>confié</b> un bien ou de l’argent, de façon parfaitement légale, pour que tu le rendes ou que tu l’utilises d’une certaine façon. Et tu le <b>détournes</b>.</p><p>Peine : <b>5 ans et 375 000 €</b> (314-1).</p>",
              example: "Un salarié qui utilise la carte carburant de l’entreprise pour ses vacances. Un garagiste qui revend la voiture qu’on lui a confiée pour réparation.",
            },
            {
              title: "Le recel",
              body:
                "<p>Le recel, c’est <b>cacher, détenir ou transmettre</b> une chose dont on sait qu’elle provient d’un crime ou d’un délit — ou <b>profiter</b> en connaissance de cause de ce qu’elle a rapporté.</p><p>Peine : <b>5 ans et 375 000 €</b> (321-1), soit plus que le vol simple.</p><p>Attention : le juge peut déduire que tu « savais » à partir des circonstances : <b>prix ridicule</b>, <b>pas de facture</b>, vendeur pressé, produits neufs en quantité…</p>",
            },
            {
              title: "Le récap pour ne plus confondre",
              body:
                "<table class='t'><tr><th>On te…</th><th>Infraction</th></tr><tr><td><b>prend</b> le bien</td><td>Vol</td></tr><tr><td><b>trompe</b> pour que tu donnes</td><td>Escroquerie</td></tr><tr><td><b>détourne</b> ce que tu as confié</td><td>Abus de confiance</td></tr><tr><td><b>force</b> à donner (violence, menace)</td><td>Extorsion — 7 ans et 100 000 €</td></tr><tr><td><b>fait chanter</b> (menace de révéler)</td><td>Chantage — 5 ans et 75 000 €</td></tr><tr><td>Quelqu’un <b>garde ou achète</b> le butin en le sachant</td><td>Recel</td></tr></table><p>Et casser ou abîmer le bien d’autrui : <b>dégradation</b>, 2 ans et 30 000 € (sauf dommage léger).</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle infraction ?",
          instruction: "Associe chaque situation à la bonne infraction.",
          categories: ["Vol", "Escroquerie", "Abus de confiance", "Recel"],
          items: [
            { text: "Prendre un sac posé sur une chaise de terrasse", cat: 0, why: "On prend sans l’accord du propriétaire → vol." },
            { text: "Se faire passer pour un policier pour obtenir 300 €", cat: 1, why: "Fausse qualité + remise volontaire → escroquerie." },
            { text: "Garder pour soi l’argent d’une cagnotte qu’on devait reverser à une association", cat: 2, why: "L’argent avait été confié pour un usage précis, puis détourné → abus de confiance." },
            { text: "Acheter 50 € une console neuve « tombée du camion », sans facture", cat: 3, why: "Prix dérisoire, pas de facture : on ne pouvait pas ignorer l’origine → recel." },
            { text: "Un garagiste revend la voiture qu’on lui avait confiée pour réparation", cat: 2, why: "Bien remis légalement puis détourné → abus de confiance." },
            { text: "Créer un faux site de vente et encaisser les paiements sans jamais livrer", cat: 1, why: "Manœuvre frauduleuse (le faux site) qui pousse à payer → escroquerie." },
            { text: "Sortir d’un magasin avec un article non payé", cat: 0, why: "Soustraction frauduleuse → vol." },
            { text: "Stocker chez soi des vélos qu’un ami a volés", cat: 3, why: "Détenir une chose volée en le sachant → recel." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Vol", back: "Soustraction frauduleuse de la chose d’autrui (311-1). Simple : 3 ans et 45 000 €." },
            { front: "Escroquerie", back: "Obtenir une remise par faux nom, fausse qualité ou manœuvres frauduleuses (313-1). 5 ans et 375 000 €." },
            { front: "Abus de confiance", back: "Détourner un bien remis à charge de le rendre ou d’en faire un usage déterminé (314-1). 5 ans et 375 000 €." },
            { front: "Recel", back: "Détenir, cacher, transmettre une chose provenant d’un crime ou délit, en le sachant (321-1). 5 ans et 375 000 €." },
            { front: "Extorsion", back: "Obtenir quelque chose par violence, menace ou contrainte (312-1). 7 ans et 100 000 €." },
            { front: "Immunité familiale", back: "Le vol entre époux ou entre parents et enfants n’est en principe pas poursuivi (311-12), sauf exceptions." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un ami te prête son ordinateur, tu le revends. C’est…", options: ["un vol", "une escroquerie", "un abus de confiance"], answer: 2, explain: "Le bien t’a été remis légalement, à charge de le rendre : tu l’as détourné." },
            { q: "Quelle infraction est punie le plus lourdement (version simple) ?", options: ["Le vol", "Le recel"], answer: 1, explain: "Recel : 5 ans et 375 000 €. Vol simple : 3 ans et 45 000 €." },
            { q: "Pour prouver un recel, le juge peut s’appuyer sur…", options: ["uniquement des aveux", "les circonstances : prix dérisoire, absence de facture…"], answer: 1, explain: "La connaissance de l’origine frauduleuse peut se déduire des circonstances." },
            { q: "Quelqu’un te menace de te frapper si tu ne lui donnes pas ton téléphone. C’est…", options: ["un vol simple", "une extorsion", "une escroquerie"], answer: 1, explain: "Obtenir une remise par la menace de violences = extorsion (312-1)." },
          ],
        },
        {
          type: "case",
          title: "La bonne affaire",
          story:
            "Yasmine trouve sur un groupe de revente <b>10 trottinettes électriques neuves à 40 € pièce</b> (elles valent 400 € en magasin). Le vendeur n’a pas de facture, veut être payé en liquide et « doit tout écouler ce soir ». Elle achète tout et les revend sur Leboncoin.",
          question: "Que risque Yasmine ?",
          options: [
            "Rien : elle a payé, elle est devenue propriétaire",
            "Des poursuites pour recel : les circonstances montrent qu’elle ne pouvait pas ignorer l’origine",
            "Seulement une amende pour vente sans facture",
          ],
          answer: 1,
          explain:
            "Prix divisé par 10, aucune facture, paiement en liquide, urgence : tout indique une origine frauduleuse. Le recel peut être retenu (5 ans et 375 000 €). En achat-revente, exige toujours une facture ou une preuve d’origine.",
        },
        {
          type: "fiche",
          title: "Les atteintes aux biens",
          points: [
            "<b>Vol</b> = on prend (3 ans et 45 000 €, plus avec circonstances aggravantes).",
            "<b>Escroquerie</b> = on trompe pour se faire remettre (5 ans et 375 000 €).",
            "<b>Abus de confiance</b> = on détourne ce qui a été confié (5 ans et 375 000 €).",
            "<b>Recel</b> = on garde/achète le butin en connaissance de cause (5 ans et 375 000 €).",
            "<b>Extorsion</b> = on force (7 ans) ; <b>chantage</b> = on menace de révéler (5 ans).",
            "Achat douteux (prix ridicule, pas de facture) = risque de recel.",
          ],
          retenir: "Prendre, tromper, détourner, receler : quatre infractions différentes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Du délit au procès",
      minutes: 20,
      objectives: ["Suivre le chemin d’une affaire de la plainte au jugement", "Connaître ses droits en garde à vue et les délais de prescription"],
      steps: [
        {
          type: "lesson",
          title: "La procédure pénale",
          slides: [
            {
              title: "Les acteurs",
              body:
                "<ul><li><b>Police et gendarmerie</b> : constatent les infractions, mènent l’enquête.</li><li><b>Procureur de la République</b> : dirige l’enquête et décide des suites. Il représente la société.</li><li><b>Juge d’instruction</b> : enquête sur les affaires graves ou complexes (obligatoire pour les crimes).</li><li><b>Juge des libertés et de la détention</b> : décide notamment de la détention provisoire.</li><li><b>Avocat</b> : défend le suspect ou assiste la victime.</li><li><b>Victime</b> : peut se constituer <b>partie civile</b> pour obtenir réparation.</li></ul>",
            },
            {
              title: "De la plainte à la décision du procureur",
              body:
                "<p>On porte plainte au commissariat, à la gendarmerie, ou par courrier au procureur. Le procureur décide alors selon le principe d’<b>opportunité des poursuites</b> (art. 40-1 du Code de procédure pénale) :</p><ul><li><b>Poursuivre</b> devant un tribunal ;</li><li>une <b>alternative aux poursuites</b> (médiation, stage, avertissement…) ;</li><li>ou <b>classer sans suite</b>.</li></ul><p>Si l’affaire est classée, la victime n’est pas bloquée : elle peut <b>citer directement</b> l’auteur devant le tribunal (délits et contraventions) ou porter plainte <b>avec constitution de partie civile</b> devant le juge d’instruction, sous conditions.</p>",
            },
            {
              title: "La garde à vue",
              body:
                "<p>Mesure de contrainte décidée par un officier de police judiciaire quand il existe des <b>raisons plausibles de soupçonner</b> un crime ou un délit puni de prison.</p><ul><li>Durée : <b>24 h</b>, renouvelable <b>une fois</b> (24 h de plus) sur autorisation du procureur, si l’infraction est punie d’au moins 1 an de prison.</li><li>Jusqu’à <b>96 h</b> pour la criminalité organisée et le terrorisme.</li></ul><p><b>Tes droits</b> : être informé des faits reprochés, <b>garder le silence</b>, être assisté d’un <b>avocat</b> dès le début, voir un <b>médecin</b>, faire prévenir un <b>proche</b> et ton <b>employeur</b>, avoir un <b>interprète</b>.</p>",
            },
            {
              title: "La prescription",
              body:
                "<p>Passé un certain délai, on ne peut plus poursuivre. Depuis la réforme de 2017 :</p><div class='tiers'><div><b>1 an</b><span>contraventions</span></div><div><b>6 ans</b><span>délits</span></div><div><b>20 ans</b><span>crimes</span></div></div><p>Le délai court en principe <b>à partir du jour des faits</b>. Exceptions : pour les infractions cachées, il court à partir de leur découverte (avec un plafond) ; certains crimes sur mineurs se prescrivent par 30 ans à partir de leur majorité ; les crimes contre l’humanité sont <b>imprescriptibles</b>.</p>",
            },
            {
              title: "Le procès et les recours",
              body:
                "<ul><li>Audience en principe <b>publique</b>, avec respect des droits de la défense.</li><li>Le texte fixe un <b>maximum</b> : « puni de 5 ans » ne veut pas dire 5 ans automatiquement. Le juge <b>personnalise</b> la peine selon les faits et la personne.</li><li><b>Appel</b> : en principe dans les <b>10 jours</b> → cour d’appel (ou cour d’assises d’appel pour un crime). L’affaire est rejugée.</li><li><b>Pourvoi en cassation</b> : dans les <b>5 jours francs</b>. La Cour de cassation ne rejuge pas les faits : elle vérifie seulement que <b>le droit</b> a été bien appliqué.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Procureur de la République", back: "Dirige l’enquête et décide des suites : poursuivre, alternative ou classement sans suite." },
            { front: "Opportunité des poursuites", back: "Le procureur choisit s’il poursuit ou non (art. 40-1 CPP)." },
            { front: "Garde à vue : durée", back: "24 h, renouvelable une fois (24 h). Jusqu’à 96 h en criminalité organisée ou terrorisme." },
            { front: "Garde à vue : droits", back: "Être informé, se taire, avocat, médecin, prévenir un proche et l’employeur, interprète." },
            { front: "Prescription", back: "Contravention 1 an · délit 6 ans · crime 20 ans, en principe à partir des faits." },
            { front: "Cour de cassation", back: "Ne rejuge pas les faits, vérifie seulement l’application du droit. Pourvoi en 5 jours francs." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qui décide de poursuivre ou non l’auteur d’une infraction ?", options: ["La victime", "Le procureur de la République", "Le commissariat"], answer: 1, explain: "C’est le principe d’opportunité des poursuites." },
            { q: "Durée normale d’une garde à vue ?", options: ["12 h", "24 h, renouvelable une fois", "72 h"], answer: 1, explain: "24 h + 24 h sur autorisation du procureur ; régimes spéciaux jusqu’à 96 h." },
            { q: "Délai de prescription d’un délit ?", options: ["1 an", "3 ans", "6 ans", "20 ans"], answer: 2, explain: "6 ans depuis la loi du 27 février 2017." },
            { q: "La Cour de cassation rejuge-t-elle les faits ?", options: ["Oui, c’est un troisième procès", "Non, elle vérifie seulement le droit"], answer: 1, explain: "Elle juge le droit, pas les faits." },
            { q: "« Puni de 5 ans d’emprisonnement » signifie que…", options: ["le condamné fera 5 ans", "5 ans est le maximum que le juge peut prononcer"], answer: 1, explain: "C’est la peine encourue maximale ; le juge personnalise." },
          ],
        },
        {
          type: "case",
          title: "Le classement sans suite",
          story:
            "Amel s’est fait escroquer de 500 € par un faux vendeur en ligne. Elle porte plainte. Quelques mois plus tard, elle reçoit un avis de <b>classement sans suite</b>. Pourtant, elle a le nom et le RIB de l’escroc.",
          question: "Amel peut-elle encore agir ?",
          options: [
            "Non : le classement sans suite met fin à tout",
            "Oui : elle peut citer directement l’escroc devant le tribunal ou porter plainte avec constitution de partie civile",
            "Seulement si elle engage un détective privé",
          ],
          answer: 1,
          explain:
            "Le classement sans suite n’est pas un jugement. La victime peut saisir elle-même la justice : citation directe devant le tribunal correctionnel, ou plainte avec constitution de partie civile devant le juge d’instruction (sous conditions). Elle peut aussi contester le classement auprès du procureur général.",
        },
        {
          type: "fiche",
          title: "Du délit au procès",
          points: [
            "Le <b>procureur</b> décide : poursuivre, alternative, ou classement sans suite.",
            "Après un classement, la victime peut <b>citer directement</b> ou se <b>constituer partie civile</b>.",
            "<b>Garde à vue</b> : 24 h + 24 h ; droit au silence, à l’avocat, au médecin, de prévenir un proche.",
            "<b>Prescription</b> : 1 an (contravention), 6 ans (délit), 20 ans (crime).",
            "La peine du texte est un <b>maximum</b> : le juge personnalise.",
            "<b>Appel</b> en 10 jours (on rejuge) ; <b>cassation</b> en 5 jours (on vérifie le droit).",
          ],
          retenir: "En garde à vue : avocat et silence. Après un classement : tu peux encore agir.",
        },
      ],
    },
  ],
});
