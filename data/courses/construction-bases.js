/* ============================================================
   COURS : Construction — les bases
   École de Construction · 8 séances de 15 à 20 minutes
   Vue d’ensemble avant les cours spécialisés (électricité,
   plomberie, maçonnerie). Règles vérifiées au 1er novembre 2026
   (Code de l’urbanisme R421-2, R421-14, R421-17, R431-2 ;
   Code civil 1792 et suivants). À METTRE À JOUR si les seuils
   d’urbanisme ou la réglementation thermique évoluent.
   ============================================================ */
AGORA.registerCourse({
  id: "construction-bases",
  faculty: "construction",
  title: "Construction — les bases",
  subtitle: "Comprendre comment un bâtiment est conçu, autorisé, construit et garanti",
  color: "#c27c0e",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour savoir lire un projet de construction : de quoi est fait un bâtiment, qui fait quoi, quelles autorisations demander, comment on passe des fondations au toit puis aux finitions, et comment se protéger (sécurité sur le chantier, garanties, réception). C’est la base avant les cours d’électricité, de plomberie et de maçonnerie.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment tient un bâtiment",
      minutes: 15,
      objectives: ["Distinguer structure, enveloppe et équipements", "Comprendre le chemin des charges jusqu’au sol"],
      steps: [
        {
          type: "lesson",
          title: "Les trois couches d’un bâtiment",
          slides: [
            {
              title: "Structure, enveloppe, équipements",
              body:
                "<div class='tiers'><div><b>La structure</b><span>Ce qui porte : fondations, murs porteurs, poteaux, poutres, planchers, charpente.</span></div><div><b>L’enveloppe</b><span>Ce qui protège : toiture, façades, menuiseries, isolation, étanchéité.</span></div><div><b>Les équipements</b><span>Ce qui fait vivre le bâtiment : électricité, plomberie, chauffage, ventilation.</span></div></div><p>Un bâtiment réussi, c’est une structure qui tient, une enveloppe qui protège et des équipements qui fonctionnent, dans cet ordre de priorité.</p>",
            },
            {
              title: "Gros œuvre et second œuvre",
              body:
                "<p>Sur un chantier, on distingue deux grandes familles de travaux :</p><ul><li><b>Le gros œuvre</b> : tout ce qui assure la solidité et la mise hors d’eau du bâtiment (terrassement, fondations, murs, planchers, charpente, couverture).</li><li><b>Le second œuvre</b> : tout ce qui rend le bâtiment habitable (menuiseries, isolation, cloisons, électricité, plomberie, chauffage, revêtements, peinture).</li></ul><p>On parle de bâtiment <b>« hors d’eau »</b> quand la toiture est posée, et <b>« hors d’air »</b> quand les fenêtres et portes extérieures sont posées. Le second œuvre peut alors commencer à l’abri.</p>",
            },
            {
              title: "Le chemin des charges",
              body:
                "<p>Tout ce qui pèse sur un bâtiment doit être transmis jusqu’au sol : c’est la <b>descente de charges</b>.</p><ol><li>La neige, le vent et la couverture pèsent sur la <b>charpente</b>.</li><li>La charpente et les planchers (meubles, personnes) s’appuient sur les <b>murs porteurs</b> ou les <b>poutres et poteaux</b>.</li><li>Les murs transmettent le tout aux <b>fondations</b>.</li><li>Les fondations répartissent la charge sur le <b>sol</b>.</li></ol><p>Si un maillon est sous-dimensionné, des fissures apparaissent, voire un effondrement. C’est pour cela qu’on ne supprime jamais un mur porteur sans étude.</p>",
              example: "Ouvrir une cuisine sur le salon en abattant un mur porteur impose de poser une poutre (un « IPN » en acier, ou en béton) dimensionnée par un bureau d’études, avec des étais pendant les travaux.",
            },
            {
              title: "Les forces en jeu",
              body:
                "<table class='t'><tr><th>Force</th><th>Ce que c’est</th><th>Exemple</th></tr><tr><td><b>Compression</b></td><td>On écrase</td><td>Un poteau sous un plancher</td></tr><tr><td><b>Traction</b></td><td>On étire</td><td>Le dessous d’une poutre qui fléchit</td></tr><tr><td><b>Flexion</b></td><td>On plie</td><td>Une poutre ou une dalle entre deux appuis</td></tr></table><p>Chaque matériau a ses forces : la pierre et le béton résistent très bien à la compression mais mal à la traction ; l’acier et le bois résistent bien aux deux. D’où l’invention du <b>béton armé</b> (séance 5).</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Gros œuvre ou second œuvre ?",
          instruction: "Classe chaque travail.",
          categories: ["Gros œuvre", "Second œuvre"],
          items: [
            { text: "Couler les fondations", cat: 0, why: "Solidité du bâtiment." },
            { text: "Poser des prises électriques", cat: 1, why: "Équipement intérieur." },
            { text: "Monter les murs en parpaings", cat: 0, why: "Structure porteuse." },
            { text: "Poser le carrelage", cat: 1, why: "Finition." },
            { text: "Mettre en place la charpente", cat: 0, why: "Elle porte la couverture." },
            { text: "Monter des cloisons en plaques de plâtre", cat: 1, why: "Cloisons non porteuses de distribution." },
            { text: "Installer la chaudière ou la pompe à chaleur", cat: 1, why: "Équipement de chauffage." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Gros œuvre", back: "Travaux qui assurent la solidité et la mise hors d’eau : fondations, murs, planchers, charpente, couverture." },
            { front: "Second œuvre", back: "Travaux qui rendent le bâtiment habitable : menuiseries, isolation, réseaux, cloisons, finitions." },
            { front: "Hors d’eau / hors d’air", back: "Toiture posée / menuiseries extérieures posées : le bâtiment est protégé." },
            { front: "Descente de charges", back: "Chemin des charges du toit jusqu’au sol, en passant par murs et fondations." },
            { front: "Mur porteur", back: "Mur qui supporte une partie du bâtiment ; on ne le modifie qu’après étude." },
            { front: "Compression / traction", back: "Écraser / étirer. Le béton résiste à la première, l’acier aux deux." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un bâtiment est « hors d’eau » quand…", options: ["les fondations sont coulées", "la toiture est posée", "la plomberie est raccordée"], answer: 1, explain: "La pluie ne peut plus entrer par le haut." },
            { q: "Où finit la descente de charges ?", options: ["Dans la charpente", "Dans les murs", "Dans le sol, via les fondations"], answer: 2, explain: "Les fondations répartissent les charges sur le terrain." },
            { q: "Pourquoi associe-t-on de l’acier au béton ?", options: ["Pour la couleur", "Parce que le béton résiste mal à la traction", "Pour alléger le béton"], answer: 1, explain: "L’acier reprend les efforts de traction." },
            { q: "Une cloison en plaques de plâtre entre deux chambres est en général…", options: ["un mur porteur", "une cloison non porteuse (second œuvre)", "une fondation"], answer: 1, explain: "Elle sépare les pièces sans porter le bâtiment." },
          ],
        },
        {
          type: "case",
          title: "Le mur de la cuisine",
          story:
            "Karim veut abattre le mur entre sa cuisine et son salon pour ouvrir l’espace. Un ami lui dit : « Tape dedans, si ça sonne creux, c’est pas porteur, tu peux y aller. »",
          question: "Quelle est la bonne démarche ?",
          options: [
            "Suivre le conseil de l’ami",
            "Faire vérifier par un professionnel (bureau d’études ou maçon expérimenté) si le mur est porteur ; s’il l’est, faire dimensionner une poutre et étayer pendant les travaux, et vérifier les règles de copropriété le cas échéant",
            "Abattre le mur progressivement en observant les fissures",
          ],
          answer: 1,
          explain:
            "Le « test du son » n’est pas fiable. Un mur porteur supprimé sans renfort peut provoquer des fissures graves, voire un effondrement. En copropriété, toucher à un mur porteur demande en plus l’accord de l’assemblée générale.",
        },
        {
          type: "fiche",
          title: "Comment tient un bâtiment",
          points: [
            "Trois couches : <b>structure</b> (porte), <b>enveloppe</b> (protège), <b>équipements</b> (font vivre).",
            "<b>Gros œuvre</b> (solidité, hors d’eau) puis <b>second œuvre</b> (habitabilité).",
            "<b>Hors d’eau</b> = toiture posée ; <b>hors d’air</b> = menuiseries extérieures posées.",
            "<b>Descente de charges</b> : toit → murs/poteaux → fondations → sol.",
            "Béton = compression ; acier = compression et traction ; d’où le <b>béton armé</b>.",
          ],
          retenir: "On ne touche jamais à un mur porteur sans étude.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Les acteurs et les étapes d’un projet",
      minutes: 17,
      objectives: ["Savoir qui fait quoi dans un projet de construction", "Connaître les grandes étapes, de l’idée à la réception"],
      steps: [
        {
          type: "lesson",
          title: "Qui fait quoi",
          slides: [
            {
              title: "Le maître d’ouvrage et le maître d’œuvre",
              body:
                "<ul><li><b>Le maître d’ouvrage (MOA)</b> : celui qui commande et paie le projet (un particulier, une entreprise, une commune). Il définit le besoin et le budget.</li><li><b>Le maître d’œuvre (MOE)</b> : celui qui conçoit le projet et dirige les travaux pour le compte du maître d’ouvrage. Souvent un <b>architecte</b>, parfois un maître d’œuvre non architecte ou un constructeur.</li><li><b>Les entreprises</b> : elles réalisent les travaux, chacune dans son <b>corps d’état</b> (maçonnerie, charpente, électricité, plomberie…).</li></ul>",
            },
            {
              title: "Les autres intervenants",
              body:
                "<ul><li><b>Le bureau d’études</b> : calcule la structure (béton, charpente), les réseaux (fluides, électricité) ou la thermique.</li><li><b>Le géotechnicien</b> : étudie le sol pour choisir les fondations.</li><li><b>Le contrôleur technique</b> : vérifie la solidité et la sécurité ; obligatoire pour certains bâtiments (établissements recevant du public, immeubles de grande hauteur…).</li><li><b>Le coordonnateur SPS</b> (sécurité et protection de la santé) : organise la prévention des risques quand plusieurs entreprises interviennent sur le même chantier.</li></ul>",
            },
            {
              title: "Les grandes étapes",
              body:
                "<ol><li><b>Programme</b> : besoin, budget, terrain.</li><li><b>Conception</b> : esquisse, avant-projet, plans.</li><li><b>Autorisation</b> : permis de construire ou déclaration préalable (séance 3).</li><li><b>Études d’exécution</b> : plans détaillés, calculs.</li><li><b>Consultation</b> : devis des entreprises, choix, signature des marchés.</li><li><b>Chantier</b> : préparation, gros œuvre, second œuvre, finitions.</li><li><b>Réception</b> : le maître d’ouvrage accepte l’ouvrage, avec ou sans réserves (séance 8).</li></ol>",
            },
            {
              title: "Trois façons de faire construire une maison",
              body:
                "<table class='t'><tr><th>Formule</th><th>Principe</th><th>Point d’attention</th></tr><tr><td><b>Contrat de construction de maison individuelle (CCMI)</b></td><td>Un constructeur s’occupe de tout, à prix et délai convenus</td><td>Contrat très encadré par la loi, avec garantie de livraison</td></tr><tr><td><b>Architecte + entreprises</b></td><td>L’architecte conçoit et suit le chantier, chaque entreprise a son contrat</td><td>Plus de liberté, coordination à bien organiser</td></tr><tr><td><b>Auto-construction ou lots séparés sans maître d’œuvre</b></td><td>Le particulier coordonne lui-même</td><td>Moins cher en apparence, mais les risques (retards, malfaçons, coordination) reposent sur lui</td></tr></table>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Maître d’ouvrage (MOA)", back: "Celui qui commande et paie le projet." },
            { front: "Maître d’œuvre (MOE)", back: "Celui qui conçoit et dirige les travaux pour le MOA (souvent l’architecte)." },
            { front: "Corps d’état", back: "Spécialité d’une entreprise : maçonnerie, charpente, électricité, plomberie…" },
            { front: "Bureau d’études", back: "Calcule la structure, les réseaux ou la thermique." },
            { front: "Coordonnateur SPS", back: "Organise la sécurité quand plusieurs entreprises travaillent sur le même chantier." },
            { front: "CCMI", back: "Contrat de construction de maison individuelle : constructeur unique, prix et délai convenus, très encadré." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une commune fait construire une école. Qui est le maître d’ouvrage ?", options: ["L’architecte", "La commune", "L’entreprise de maçonnerie"], answer: 1, explain: "C’est elle qui commande et finance." },
            { q: "Qui calcule la taille des poutres en béton d’un immeuble ?", options: ["Le bureau d’études structure", "Le peintre", "Le notaire"], answer: 0, explain: "Les calculs de structure sont son métier." },
            { q: "Dans quel ordre se déroulent ces étapes ?", options: ["Chantier, permis, conception", "Conception, autorisation, chantier, réception", "Réception, chantier, conception"], answer: 1, explain: "On conçoit, on obtient l’autorisation, on construit, puis on réceptionne." },
            { q: "Quel est le principal risque quand un particulier coordonne lui-même plusieurs entreprises ?", options: ["Aucun", "La coordination, les retards et les responsabilités en cas de problème reposent sur lui", "Il paie forcément plus cher"], answer: 1, explain: "Il devient de fait le chef d’orchestre du chantier." },
          ],
        },
        {
          type: "case",
          title: "Le local de Sofiane",
          story:
            "Sofiane veut transformer un ancien atelier en bureaux pour sa société. Il a un budget, un plan griffonné et trois devis d’artisans. Il hésite à commencer tout de suite pour gagner du temps.",
          question: "Quelle est la meilleure façon de démarrer ?",
          options: [
            "Signer le devis le moins cher et lancer les travaux",
            "Clarifier le programme et le budget, faire concevoir le projet (architecte ou maître d’œuvre), vérifier l’autorisation nécessaire et les règles applicables aux locaux de travail, puis consulter les entreprises sur la base de plans précis",
            "Commencer par la peinture, c’est le plus rapide",
          ],
          answer: 1,
          explain:
            "Des devis comparés sans plans précis ne décrivent pas les mêmes travaux. Un changement de destination (atelier vers bureaux) peut aussi demander une autorisation d’urbanisme. Le temps passé en conception évite des erreurs bien plus coûteuses sur le chantier.",
        },
        {
          type: "fiche",
          title: "Acteurs et étapes",
          points: [
            "<b>Maître d’ouvrage</b> (commande et paie) / <b>maître d’œuvre</b> (conçoit et dirige) / <b>entreprises</b> (réalisent).",
            "Autour : <b>bureau d’études</b>, <b>géotechnicien</b>, <b>contrôleur technique</b>, <b>coordonnateur SPS</b>.",
            "Étapes : programme → conception → autorisation → études → consultation → chantier → <b>réception</b>.",
            "Maison : <b>CCMI</b>, <b>architecte + entreprises</b>, ou coordination par le particulier (plus risqué).",
          ],
          retenir: "Un devis ne remplace pas un projet : on conçoit d’abord, on construit ensuite.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les autorisations et les règles",
      minutes: 18,
      objectives: ["Savoir quand demander un permis ou une déclaration préalable", "Connaître les grandes règles qui encadrent la construction"],
      steps: [
        {
          type: "lesson",
          title: "Avant de construire",
          slides: [
            {
              title: "Le PLU, première lecture",
              body:
                "<p>Avant tout projet, on consulte le <b>plan local d’urbanisme (PLU)</b> de la commune, en mairie ou en ligne. Il fixe, zone par zone :</p><ul><li>ce qu’on peut construire (habitation, commerce, agricole…) ;</li><li>les hauteurs maximales, les distances aux limites du terrain ;</li><li>l’aspect extérieur (toitures, couleurs, clôtures) ;</li><li>parfois une surface de pleine terre ou d’espaces verts à conserver.</li></ul><p>Le <b>certificat d’urbanisme</b>, demandé en mairie, indique les règles applicables à un terrain donné.</p>",
            },
            {
              title: "Permis ou déclaration préalable ?",
              body:
                "<p>Pour une construction nouvelle ou une extension, on regarde la plus grande des deux surfaces créées : <b>surface de plancher</b> ou <b>emprise au sol</b>.</p><table class='t'><tr><th>Surface créée</th><th>Formalité</th></tr><tr><td>Moins de 5 m²</td><td>En principe aucune (sauf secteurs protégés)</td></tr><tr><td>De 5 à 20 m²</td><td>Déclaration préalable</td></tr><tr><td>Plus de 20 m²</td><td>Permis de construire</td></tr><tr><td>Extension d’une habitation en zone urbaine d’un PLU</td><td>Déclaration préalable jusqu’à 40 m², permis au-delà</td></tr></table><p>Attention : si l’extension fait dépasser <b>150 m²</b> de surface de plancher au total, le permis est obligatoire.</p>",
              article: { ref: "Code de l’urbanisme, art. R421-14 et R421-17", text: "Seuils de 20 m² (40 m² en zone urbaine d’un PLU pour une extension) entre déclaration préalable et permis de construire." },
            },
            {
              title: "L’architecte obligatoire",
              body:
                "<ul><li>Un particulier qui construit pour lui-même doit faire appel à un <b>architecte</b> si la surface de plancher totale dépasse <b>150 m²</b>.</li><li>Pour une société ou une construction professionnelle, l’architecte est obligatoire dans la plupart des cas, quelle que soit la surface (avec quelques exceptions, notamment agricoles).</li></ul><p>Délais d’instruction courants : <b>1 mois</b> pour une déclaration préalable, <b>2 mois</b> pour le permis d’une maison individuelle (plus en secteur protégé). Le permis est valable <b>3 ans</b>, et doit être affiché sur le terrain : les tiers ont alors <b>2 mois</b> pour le contester.</p>",
              article: { ref: "Code de l’urbanisme, art. R431-2", text: "Dispense d’architecte pour les personnes physiques qui construisent pour elles-mêmes une construction dont la surface de plancher n’excède pas 150 m²." },
            },
            {
              title: "Les règles techniques",
              body:
                "<ul><li><b>Les DTU</b> (documents techniques unifiés) : les règles de l’art pour chaque métier (maçonnerie, couverture, plomberie…). Les assureurs s’y réfèrent en cas de sinistre.</li><li><b>La réglementation environnementale RE2020</b> : depuis 2022, elle impose aux constructions neuves de consommer peu d’énergie, de limiter leur impact carbone et de rester confortables en été.</li><li><b>Les normes de sécurité</b> : électricité (norme NF C 15-100), gaz, accessibilité aux personnes handicapées pour les bâtiments ouverts au public, sécurité incendie.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle formalité ?",
          instruction: "Pour une maison hors zone urbaine d’un PLU (seuil de 20 m²), classe chaque projet.",
          categories: ["Aucune formalité (en principe)", "Déclaration préalable", "Permis de construire"],
          items: [
            { text: "Un abri de jardin de 4 m²", cat: 0, why: "Moins de 5 m² (hors secteur protégé)." },
            { text: "Un abri de jardin de 12 m²", cat: 1, why: "Entre 5 et 20 m²." },
            { text: "Un garage accolé de 30 m²", cat: 2, why: "Plus de 20 m² hors zone urbaine d’un PLU." },
            { text: "Une maison neuve de 110 m²", cat: 2, why: "Construction nouvelle de plus de 20 m²." },
            { text: "Une véranda de 18 m²", cat: 1, why: "Entre 5 et 20 m²." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "PLU", back: "Plan local d’urbanisme : fixe ce qu’on peut construire, où et comment, zone par zone." },
            { front: "Déclaration préalable", back: "Formalité pour les petits projets (en général 5 à 20 m², jusqu’à 40 m² pour une extension en zone urbaine d’un PLU)." },
            { front: "Permis de construire", back: "Obligatoire au-delà de ces seuils ; valable 3 ans ; affiché sur le terrain." },
            { front: "Seuil de 150 m²", back: "Au-delà, un particulier doit faire appel à un architecte." },
            { front: "DTU", back: "Documents techniques unifiés : les règles de l’art de chaque métier." },
            { front: "RE2020", back: "Réglementation environnementale des constructions neuves depuis 2022 : énergie, carbone, confort d’été." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’est-ce qu’on consulte en premier avant un projet ?", options: ["Le PLU de la commune", "Un catalogue de cuisine", "Le code de la route"], answer: 0, explain: "Il dit ce qui est autorisé sur le terrain." },
            { q: "Laurence agrandit sa maison de 35 m² en zone urbaine d’une commune dotée d’un PLU ; la maison passera de 100 à 135 m². Que lui faut-il ?", options: ["Un permis de construire", "Une déclaration préalable", "Aucune formalité"], answer: 1, explain: "Jusqu’à 40 m² en zone urbaine d’un PLU, et le total reste sous 150 m²." },
            { q: "Un particulier construit une maison de 170 m² de surface de plancher. Que doit-il faire ?", options: ["Rien de particulier", "Faire appel à un architecte", "Demander seulement une déclaration préalable"], answer: 1, explain: "Le seuil de 150 m² est dépassé." },
            { q: "Pourquoi les DTU comptent-ils autant ?", options: ["Ils sont décoratifs", "Ce sont les règles de l’art, auxquelles se réfèrent experts et assureurs en cas de litige", "Ils remplacent le permis"], answer: 1, explain: "Ne pas les respecter peut engager la responsabilité de l’entreprise." },
          ],
        },
        {
          type: "case",
          title: "La véranda du voisin",
          story:
            "Marc a construit une véranda de 25 m² sans aucune démarche, en dehors de toute zone urbaine de PLU. Son voisin, gêné par la vue, menace d’agir. Marc pense que c’est trop tard puisque c’est construit.",
          question: "Quelle est la situation de Marc ?",
          options: [
            "Il ne risque rien puisque la véranda est construite",
            "Il a construit sans le permis qui était nécessaire (plus de 20 m²) : il s’expose à des sanctions et éventuellement à une demande de démolition ; il peut tenter de régulariser en déposant un permis, si le projet respecte les règles d’urbanisme",
            "Il lui suffit d’envoyer une lettre d’excuses",
          ],
          answer: 1,
          explain:
            "Construire sans autorisation est une infraction au code de l’urbanisme. Une régularisation est parfois possible, mais seulement si le projet est conforme aux règles ; sinon la démolition peut être ordonnée. Cela pose aussi problème lors de la revente.",
        },
        {
          type: "fiche",
          title: "Autorisations et règles",
          points: [
            "Lire le <b>PLU</b> (ou demander un <b>certificat d’urbanisme</b>) avant tout projet.",
            "Moins de 5 m² : rien ; 5 à 20 m² : <b>déclaration préalable</b> ; plus de 20 m² : <b>permis</b> (40 m² pour une extension en zone urbaine d’un PLU).",
            "<b>Architecte obligatoire</b> au-delà de 150 m² de surface de plancher pour un particulier.",
            "Délais : 1 mois (DP), 2 mois (permis de maison) ; permis valable 3 ans ; recours des tiers 2 mois après affichage.",
            "Règles techniques : <b>DTU</b>, <b>RE2020</b>, normes (électricité NF C 15-100, incendie, accessibilité).",
          ],
          retenir: "Ce qui est construit sans autorisation peut devoir être démoli.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Le sol et les fondations",
      minutes: 17,
      objectives: ["Comprendre pourquoi l’étude de sol est décisive", "Connaître les principaux types de fondations"],
      steps: [
        {
          type: "lesson",
          title: "Tout commence par le sol",
          slides: [
            {
              title: "L’étude de sol",
              body:
                "<p>Le sol n’est pas le même partout : roche, sable, limon, argile, remblai… Certains sols bougent ou se tassent.</p><ul><li>Les <b>argiles</b> gonflent quand elles sont humides et se rétractent en période de sécheresse : c’est la première cause de fissures sur les maisons en France.</li><li>Dans les zones exposées à ce risque, une <b>étude géotechnique</b> est obligatoire lors de la vente d’un terrain constructible et avant la construction d’une maison (loi ELAN).</li><li>Le géotechnicien recommande le type et la profondeur des fondations.</li></ul>",
            },
            {
              title: "Les étapes du terrassement",
              body:
                "<ol><li><b>Implantation</b> : on reporte le plan sur le terrain (piquets, cordeaux) pour placer exactement le bâtiment.</li><li><b>Décapage</b> : on retire la terre végétale.</li><li><b>Fouilles</b> : on creuse les tranchées des fondations.</li><li><b>Fondations</b> : on coule le béton, avec ses armatures.</li><li><b>Soubassement</b> : murs entre les fondations et le premier plancher, avec un vide sanitaire ou un dallage.</li></ol><p>Les fondations doivent descendre <b>sous la profondeur du gel</b>, de l’ordre de 50 cm à 1 m selon la région et l’altitude, pour éviter que le sol gelé ne les soulève.</p>",
            },
            {
              title: "Les types de fondations",
              body:
                "<table class='t'><tr><th>Type</th><th>Principe</th><th>Quand</th></tr><tr><td><b>Semelles filantes</b></td><td>Bande de béton armé sous les murs</td><td>Maisons sur bon sol, le cas le plus courant</td></tr><tr><td><b>Semelles isolées</b></td><td>Plot de béton sous chaque poteau</td><td>Structures à poteaux (hangar, ossature)</td></tr><tr><td><b>Radier</b></td><td>Grande dalle sous tout le bâtiment</td><td>Sol peu porteur, charges à répartir</td></tr><tr><td><b>Pieux ou micropieux</b></td><td>Colonnes qui descendent jusqu’à une couche solide</td><td>Sol de surface mauvais (remblai, vase), argiles sensibles</td></tr></table>",
            },
            {
              title: "L’eau, l’ennemie",
              body:
                "<ul><li>L’eau qui stagne au pied des murs ramollit le sol et fait remonter l’humidité.</li><li>On protège les fondations et soubassements par un <b>drainage</b> (tuyau perforé entouré de gravier) et un enduit ou une membrane étanche.</li><li>Une <b>coupure de capillarité</b> empêche l’humidité de remonter dans les murs.</li><li>Les eaux de pluie des toitures sont évacuées loin des fondations.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Étude géotechnique", back: "Analyse du sol qui détermine le type et la profondeur des fondations." },
            { front: "Retrait-gonflement des argiles", back: "Les argiles gonflent à l’humidité et se rétractent à la sécheresse : première cause de fissures des maisons." },
            { front: "Semelle filante", back: "Bande de béton armé continue sous les murs : la fondation la plus courante." },
            { front: "Radier", back: "Dalle de béton sous toute la surface du bâtiment, pour répartir les charges." },
            { front: "Pieux", back: "Fondations profondes qui vont chercher une couche de sol solide." },
            { front: "Hors gel", back: "Profondeur minimale des fondations pour que le gel ne les soulève pas." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle est la première cause de fissures des maisons en France ?", options: ["Les tremblements de terre", "Le retrait-gonflement des argiles", "Le vent"], answer: 1, explain: "Les sécheresses répétées aggravent ce phénomène." },
            { q: "Sur un terrain avec 3 mètres de remblai en surface, on choisira plutôt…", options: ["des semelles filantes peu profondes", "des pieux ou micropieux jusqu’au bon sol", "aucune fondation"], answer: 1, explain: "Un remblai est peu porteur et se tasse." },
            { q: "Pourquoi descendre les fondations hors gel ?", options: ["Pour économiser du béton", "Pour éviter que le sol gelé ne soulève et ne fissure la construction", "Pour faciliter la plomberie"], answer: 1, explain: "Le gel augmente le volume de l’eau du sol." },
            { q: "À quoi sert un drainage au pied des murs ?", options: ["À arroser le jardin", "À évacuer l’eau qui ramollirait le sol et humidifierait les murs", "À ventiler la maison"], answer: 1, explain: "L’eau est l’ennemie des fondations." },
          ],
        },
        {
          type: "case",
          title: "Le terrain pas cher",
          story:
            "Élodie trouve un terrain 20 % moins cher que les autres du quartier. L’annonce précise : « ancien remblai, zone d’aléa argile moyen ». Le vendeur lui dit que l’étude de sol, « c’est de l’argent jeté ».",
          question: "Que doit faire Élodie ?",
          options: [
            "Acheter vite avant qu’un autre ne le prenne",
            "Exiger l’étude géotechnique (obligatoire à la vente dans ce type de zone), puis faire chiffrer les fondations adaptées : le surcoût éventuel (pieux, radier) peut annuler l’économie sur le prix du terrain",
            "Construire avec des fondations classiques et voir ce qui se passe",
          ],
          answer: 1,
          explain:
            "Un terrain moins cher peut cacher des fondations bien plus coûteuses. L’étude de sol est un investissement minime à côté du coût de réparation de fissures structurelles.",
        },
        {
          type: "fiche",
          title: "Le sol et les fondations",
          points: [
            "<b>Étude géotechnique</b> : obligatoire dans les zones d’argiles sensibles (loi ELAN) ; elle guide le choix des fondations.",
            "Terrassement : implantation, décapage, fouilles, fondations, soubassement.",
            "Fondations : <b>semelles filantes</b>, <b>isolées</b>, <b>radier</b>, <b>pieux</b>.",
            "Descendre <b>hors gel</b> ; protéger de l’eau (drainage, étanchéité, coupure de capillarité).",
          ],
          retenir: "Ce qu’on économise sur l’étude de sol, on le paie en fissures.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Le gros œuvre : murs, planchers, béton armé",
      minutes: 18,
      objectives: ["Connaître les principaux systèmes constructifs", "Comprendre le rôle du béton armé, des chaînages et des linteaux"],
      steps: [
        {
          type: "lesson",
          title: "Monter les murs et les planchers",
          slides: [
            {
              title: "Les systèmes constructifs",
              body:
                "<table class='t'><tr><th>Système</th><th>Atouts</th><th>Limites</th></tr><tr><td><b>Blocs béton (parpaings)</b></td><td>Économique, maîtrisé par tous les maçons</td><td>Isolant faible, demande une bonne isolation</td></tr><tr><td><b>Brique (terre cuite)</b></td><td>Meilleure isolation propre, régule l’humidité</td><td>Plus fragile à la pose</td></tr><tr><td><b>Béton banché</b></td><td>Très solide, coulé dans des coffrages</td><td>Lourd, chantier technique</td></tr><tr><td><b>Ossature bois</b></td><td>Léger, rapide, faible impact carbone</td><td>Exige soin contre l’humidité et le feu</td></tr><tr><td><b>Ossature métallique</b></td><td>Grandes portées (hangars, entrepôts)</td><td>Isolation et protection incendie à prévoir</td></tr></table>",
            },
            {
              title: "Le béton armé",
              body:
                "<ul><li>Le <b>béton</b>, c’est du ciment, du sable, des graviers et de l’eau. Il durcit en quelques jours et atteint sa résistance prévue au bout d’environ <b>28 jours</b>.</li><li>Il résiste très bien à l’écrasement, mal à l’étirement. On y noie donc des <b>armatures en acier</b> (fers à béton) placées là où la pièce sera tendue.</li><li>Trop d’eau dans le béton le rend plus facile à couler mais <b>moins résistant</b> : on ne « rallonge » pas un béton à l’eau.</li><li>Le béton frais doit être protégé du gel et du dessèchement pendant sa prise.</li></ul>",
            },
            {
              title: "Chaînages et linteaux",
              body:
                "<ul><li>Les <b>chaînages</b> sont des ceintures de béton armé, horizontales (en haut des murs, à chaque plancher) et verticales (aux angles). Ils solidarisent les murs entre eux, comme une ficelle autour d’un paquet.</li><li>Le <b>linteau</b> est la poutre au-dessus d’une ouverture (porte, fenêtre) qui reprend le poids du mur situé au-dessus.</li><li>Ces éléments sont essentiels contre les fissures et, dans les zones sismiques, contre l’effondrement.</li></ul>",
              example: "Une fissure en escalier qui part de l’angle d’une fenêtre peut signaler un linteau insuffisant ou un mouvement de fondation : à faire examiner.",
            },
            {
              title: "Les planchers",
              body:
                "<ul><li><b>Dalle pleine</b> en béton armé coulée sur place.</li><li><b>Plancher à poutrelles et hourdis</b> : des poutrelles préfabriquées, des blocs (hourdis) entre elles et une fine dalle de béton par-dessus. Très courant en maison individuelle.</li><li><b>Plancher bois</b> : solives et panneaux, plus léger.</li></ul><p>Un plancher doit être dimensionné pour les charges prévues : une bibliothèque, une baignoire ou un aquarium pèsent beaucoup plus que des meubles ordinaires.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel élément ?",
          instruction: "Associe chaque description à l’élément de gros œuvre.",
          categories: ["Chaînage", "Linteau", "Plancher"],
          items: [
            { text: "Ceinture de béton armé en haut des murs", cat: 0, why: "Il solidarise les murs." },
            { text: "Poutre au-dessus d’une fenêtre", cat: 1, why: "Il porte le mur au-dessus de l’ouverture." },
            { text: "Poutrelles et hourdis recouverts de béton", cat: 2, why: "Système de plancher courant." },
            { text: "Poteau de béton armé dans l’angle de la maison", cat: 0, why: "Chaînage vertical." },
            { text: "Pièce au-dessus de la porte de garage", cat: 1, why: "Elle franchit l’ouverture." },
            { text: "Dalle coulée sur place entre deux niveaux", cat: 2, why: "Dalle pleine." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Béton", back: "Ciment + sable + graviers + eau ; résistance prévue atteinte vers 28 jours." },
            { front: "Béton armé", back: "Béton avec des armatures en acier qui reprennent la traction." },
            { front: "Chaînage", back: "Ceinture de béton armé (horizontale ou verticale) qui solidarise les murs." },
            { front: "Linteau", back: "Poutre au-dessus d’une ouverture qui porte le mur au-dessus." },
            { front: "Poutrelles-hourdis", back: "Plancher de poutrelles préfabriquées, blocs et dalle de béton : très courant en maison." },
            { front: "Ossature bois", back: "Structure légère en bois, rapide à monter, faible impact carbone." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un ouvrier ajoute beaucoup d’eau au béton pour qu’il coule mieux. Conséquence ?", options: ["Le béton sera plus résistant", "Le béton sera moins résistant", "Aucune"], answer: 1, explain: "L’excès d’eau affaiblit le béton durci." },
            { q: "À quoi servent les chaînages ?", options: ["À décorer la façade", "À solidariser les murs entre eux", "À faire passer les câbles"], answer: 1, explain: "Ils ceinturent la construction." },
            { q: "Quel système est le plus adapté à un grand entrepôt sans poteaux intermédiaires ?", options: ["Ossature métallique", "Brique", "Plancher bois"], answer: 0, explain: "L’acier permet de grandes portées." },
            { q: "Pourquoi faut-il signaler une baignoire balnéo très lourde au maître d’œuvre ?", options: ["Pour la couleur du carrelage", "Parce que le plancher doit être dimensionné pour cette charge", "Ce n’est pas utile"], answer: 1, explain: "Une forte charge localisée doit être prévue dans les calculs." },
          ],
        },
        {
          type: "case",
          title: "Le béton du samedi",
          story:
            "Sur le chantier de Julien, la toupie de béton arrive en retard un samedi de décembre. Il fait -2 °C et le gel est annoncé pour la nuit. Le chef d’équipe propose de couler quand même la dalle et de rajouter de l’eau pour aller plus vite.",
          question: "Que faut-il faire ?",
          options: [
            "Couler et ajouter de l’eau",
            "Ne pas ajouter d’eau, et soit reporter le coulage, soit prendre les précautions de bétonnage par temps froid prévues (béton adapté, protection contre le gel pendant la prise)",
            "Couler et arroser la dalle toute la nuit",
          ],
          answer: 1,
          explain:
            "L’eau ajoutée affaiblit le béton et le gel pendant la prise peut le dégrader durablement. Une dalle ratée coûte bien plus cher qu’un jour de retard.",
        },
        {
          type: "fiche",
          title: "Le gros œuvre",
          points: [
            "Systèmes : <b>parpaing</b>, <b>brique</b>, <b>béton banché</b>, <b>ossature bois</b>, <b>ossature métallique</b>.",
            "<b>Béton armé</b> : le béton pour la compression, l’acier pour la traction ; jamais d’eau en plus.",
            "<b>Chaînages</b> (ceintures) et <b>linteaux</b> (au-dessus des ouvertures) contre les fissures.",
            "Planchers : <b>dalle pleine</b>, <b>poutrelles-hourdis</b>, <b>bois</b> ; dimensionnés pour les charges prévues.",
          ],
          retenir: "Le béton n’aime ni l’eau en trop, ni le gel pendant sa prise.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Le toit et l’enveloppe",
      minutes: 17,
      objectives: ["Connaître les éléments d’une toiture", "Comprendre l’isolation, l’étanchéité et les ponts thermiques"],
      steps: [
        {
          type: "lesson",
          title: "Mettre le bâtiment à l’abri",
          slides: [
            {
              title: "La toiture",
              body:
                "<ul><li><b>La charpente</b> porte le toit : traditionnelle (grosses pièces de bois assemblées, permet d’aménager les combles) ou <b>fermettes</b> industrielles (triangles rapprochés, économiques, mais combles difficiles à aménager).</li><li><b>La couverture</b> protège de la pluie : tuiles, ardoises, zinc, bac acier. Le choix dépend souvent du PLU et du climat.</li><li><b>Le toit-terrasse</b> est plat : il n’a pas de couverture mais une <b>étanchéité</b> (membrane) avec une légère pente vers les évacuations.</li></ul>",
            },
            {
              title: "Isoler",
              body:
                "<p>Une maison mal isolée perd une grande partie de sa chaleur par le toit, puis par les murs, les fenêtres et le sol.</p><table class='t'><tr><th>Technique</th><th>Principe</th></tr><tr><td><b>Isolation par l’intérieur (ITI)</b></td><td>Isolant et cloison côté intérieur ; moins chère mais réduit la surface habitable</td></tr><tr><td><b>Isolation par l’extérieur (ITE)</b></td><td>Isolant sur la façade, recouvert d’un enduit ou d’un bardage ; supprime la plupart des ponts thermiques</td></tr></table><p>La performance d’un isolant se mesure par sa <b>résistance thermique R</b> : plus R est élevé, mieux il isole.</p>",
            },
            {
              title: "Ponts thermiques et étanchéité à l’air",
              body:
                "<ul><li>Un <b>pont thermique</b> est un point faible de l’isolation, souvent à la jonction mur-plancher ou autour des fenêtres. La chaleur s’y échappe, et de la condensation (puis des moisissures) peut y apparaître.</li><li>L’<b>étanchéité à l’air</b> empêche les fuites d’air incontrôlées : en construction neuve, elle est mesurée par un test d’infiltrométrie.</li><li>Une maison étanche à l’air doit être <b>ventilée</b> (VMC) pour évacuer l’humidité et renouveler l’air.</li></ul>",
            },
            {
              title: "Les menuiseries",
              body:
                "<ul><li>Fenêtres et portes extérieures : bois, PVC, aluminium ou mixte.</li><li>Le <b>double vitrage</b> est devenu la norme ; le triple vitrage sert surtout dans les climats froids ou les façades nord.</li><li>La pose compte autant que la fenêtre : une fenêtre performante mal posée laisse passer l’air et l’eau.</li><li>Les protections solaires (volets, brise-soleil, débords de toiture) sont essentielles pour le <b>confort d’été</b>.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fermettes", back: "Charpente industrielle en triangles rapprochés : économique, combles difficiles à aménager." },
            { front: "Couverture", back: "Ce qui protège le toit de la pluie : tuiles, ardoises, zinc, bac acier." },
            { front: "ITI / ITE", back: "Isolation par l’intérieur / par l’extérieur (cette dernière supprime la plupart des ponts thermiques)." },
            { front: "Résistance thermique R", back: "Mesure la performance d’un isolant : plus R est élevé, mieux il isole." },
            { front: "Pont thermique", back: "Point faible de l’isolation où la chaleur s’échappe et où la condensation peut apparaître." },
            { front: "VMC", back: "Ventilation mécanique contrôlée : renouvelle l’air et évacue l’humidité." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pierre veut aménager ses combles plus tard. Quelle charpente choisir ?", options: ["Des fermettes", "Une charpente traditionnelle", "Peu importe"], answer: 1, explain: "Les fermettes encombrent les combles." },
            { q: "Par où une maison non isolée perd-elle le plus de chaleur ?", options: ["Par le toit", "Par la porte d’entrée", "Par les prises électriques"], answer: 0, explain: "La chaleur monte : la toiture est la priorité." },
            { q: "Des moisissures apparaissent dans l’angle mur-plafond d’une chambre. Cause probable ?", options: ["Un pont thermique avec condensation, souvent aggravé par une ventilation insuffisante", "Un mauvais carrelage", "Une prise mal posée"], answer: 0, explain: "La paroi froide condense l’humidité de l’air." },
            { q: "Quel est l’intérêt principal de l’isolation par l’extérieur ?", options: ["Elle agrandit la maison", "Elle traite la plupart des ponts thermiques sans réduire la surface intérieure", "Elle est toujours moins chère"], answer: 1, explain: "L’isolant enveloppe le bâtiment en continu." },
          ],
        },
        {
          type: "case",
          title: "La maison trop étanche",
          story:
            "Nadia a fait changer toutes ses fenêtres et boucher les grilles d’aération « pour ne plus avoir froid ». Quelques mois plus tard, de la buée ruisselle sur les vitres et une odeur de moisi apparaît dans la salle de bains.",
          question: "Que s’est-il passé ?",
          options: [
            "Les nouvelles fenêtres sont défectueuses",
            "En supprimant les entrées d’air sans installer de ventilation, l’humidité produite dans la maison (douches, cuisine, respiration) ne s’évacue plus : il faut rétablir une ventilation (entrées d’air, VMC)",
            "Il faut chauffer moins",
          ],
          answer: 1,
          explain:
            "Isoler et étancher sans ventiler crée des problèmes d’humidité, de moisissures et de qualité de l’air. Isolation et ventilation vont toujours ensemble.",
        },
        {
          type: "fiche",
          title: "Le toit et l’enveloppe",
          points: [
            "Toiture : <b>charpente</b> (traditionnelle ou fermettes) + <b>couverture</b> ; toit-terrasse = <b>étanchéité</b>.",
            "Isoler d’abord le <b>toit</b> ; <b>ITI</b> ou <b>ITE</b> ; performance mesurée par <b>R</b>.",
            "Chasser les <b>ponts thermiques</b> et assurer l’<b>étanchéité à l’air</b>.",
            "Toujours <b>ventiler</b> (VMC) une maison bien isolée.",
            "Menuiseries : la qualité de pose compte autant que le produit ; penser au <b>confort d’été</b>.",
          ],
          retenir: "Isoler sans ventiler, c’est fabriquer de l’humidité.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Le second œuvre et les réseaux",
      minutes: 16,
      objectives: ["Connaître l’ordre d’intervention des corps d’état", "Avoir une première vue des réseaux (électricité, eau, chauffage)"],
      steps: [
        {
          type: "lesson",
          title: "Rendre le bâtiment habitable",
          slides: [
            {
              title: "L’ordre d’intervention",
              body:
                "<p>Une fois le bâtiment hors d’eau et hors d’air, les corps d’état se succèdent, souvent dans cet ordre :</p><ol><li>Cloisons et doublages (premières plaques, réservations pour les gaines)</li><li><b>Réseaux</b> : électricité, plomberie, chauffage, ventilation (passage des gaines et tuyaux)</li><li>Isolation et fermeture des cloisons, chapes au sol</li><li>Plâtrerie et finitions des murs, menuiseries intérieures</li><li>Revêtements : carrelage, parquet, peinture</li><li>Appareillage : prises, interrupteurs, sanitaires, raccordements finaux</li></ol><p>Une mauvaise coordination oblige à ouvrir des murs déjà finis : c’est l’une des principales sources de surcoûts.</p>",
            },
            {
              title: "L’électricité en bref",
              body:
                "<ul><li>Une installation part du <b>tableau électrique</b>, avec un disjoncteur général et des circuits protégés séparément.</li><li>Les <b>interrupteurs différentiels 30 mA</b> protègent les personnes contre l’électrocution.</li><li>La <b>prise de terre</b> évacue les courants de défaut.</li><li>En France, les installations des logements suivent la norme <b>NF C 15-100</b> (nombre de prises, sections de câbles, zones de sécurité dans la salle de bains).</li></ul><p>Le cours dédié à l’électricité détaillera tout cela. Règle absolue : on <b>coupe le courant</b> et on <b>vérifie l’absence de tension</b> avant toute intervention.</p>",
            },
            {
              title: "L’eau et le chauffage",
              body:
                "<ul><li><b>Alimentation</b> : l’eau sous pression arrive par le compteur, puis le réseau intérieur (cuivre, multicouche, PER).</li><li><b>Évacuation</b> : eaux usées et eaux vannes partent par gravité dans des tuyaux en pente vers le tout-à-l’égout ou une installation d’assainissement individuel.</li><li><b>Production d’eau chaude</b> : chauffe-eau électrique, thermodynamique, chaudière, solaire.</li><li><b>Chauffage</b> : pompe à chaleur, chaudière, radiateurs, plancher chauffant, poêle. En construction neuve, la RE2020 favorise les solutions peu émettrices de carbone.</li></ul>",
            },
            {
              title: "Les finitions",
              body:
                "<ul><li>Les <b>chapes</b> nivellent le sol avant les revêtements ; elles doivent sécher avant la pose du parquet ou du carrelage.</li><li>Les murs reçoivent enduits, bandes et peinture.</li><li>Dans les pièces humides, une <b>protection à l’eau</b> (système d’étanchéité sous le carrelage de douche) évite les infiltrations, cause fréquente de sinistres.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Avant ou après ?",
          instruction: "Classe chaque tâche selon le moment où elle intervient en général.",
          categories: ["Avant de fermer les cloisons", "Après la fermeture des cloisons"],
          items: [
            { text: "Passer les gaines électriques", cat: 0, why: "Elles doivent être dans les murs avant fermeture." },
            { text: "Peindre les murs", cat: 1, why: "Finition." },
            { text: "Poser les tuyaux d’alimentation d’eau", cat: 0, why: "Réseau encastré." },
            { text: "Poser les prises et interrupteurs", cat: 1, why: "Appareillage final." },
            { text: "Prévoir les conduits de VMC", cat: 0, why: "Ils passent dans les cloisons et faux plafonds." },
            { text: "Poser le parquet", cat: 1, why: "Revêtement de finition." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Ordre du second œuvre", back: "Cloisons et réseaux → isolation et chapes → plâtrerie → revêtements → appareillage." },
            { front: "Tableau électrique", back: "Point de départ de l’installation, avec disjoncteurs et différentiels." },
            { front: "Différentiel 30 mA", back: "Protège les personnes contre l’électrocution." },
            { front: "NF C 15-100", back: "Norme des installations électriques des logements en France." },
            { front: "Évacuation gravitaire", back: "Les eaux usées s’écoulent par la pente des tuyaux." },
            { front: "Chape", back: "Couche qui nivelle le sol avant les revêtements ; elle doit sécher." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi coordonner électricien et plaquiste ?", options: ["Pour partager le repas", "Pour passer les gaines avant de fermer les cloisons et éviter de rouvrir les murs", "Ce n’est pas nécessaire"], answer: 1, explain: "Rouvrir des murs finis coûte cher." },
            { q: "Avant toute intervention électrique, il faut…", options: ["Mettre des gants de jardinage", "Couper le courant et vérifier l’absence de tension", "Prévenir le voisin"], answer: 1, explain: "C’est la règle de base de sécurité." },
            { q: "Comment s’écoulent en général les eaux usées dans une maison ?", options: ["Sous pression grâce à une pompe", "Par gravité, grâce à la pente des tuyaux", "Par évaporation"], answer: 1, explain: "D’où l’importance des pentes." },
            { q: "On pose le parquet sur une chape encore humide. Risque ?", options: ["Aucun", "Le parquet peut gonfler, se déformer ou moisir", "Le parquet sèche plus vite"], answer: 1, explain: "Il faut respecter les temps de séchage." },
          ],
        },
        {
          type: "case",
          title: "La salle de bains refaite",
          story:
            "Hugo fait refaire sa salle de bains. Le carreleur propose de poser directement le carrelage de la douche à l’italienne sur l’ancienne plaque de plâtre, sans système d’étanchéité, « parce que les joints suffisent ».",
          question: "Que doit répondre Hugo ?",
          options: [
            "Accepter, les joints sont étanches",
            "Exiger un système d’étanchéité sous carrelage adapté aux douches et des supports prévus pour les pièces humides, conformément aux règles de l’art",
            "Mettre du silicone partout à la fin",
          ],
          answer: 1,
          explain:
            "Les joints de carrelage ne sont pas étanches. Une douche sans protection à l’eau provoque des infiltrations lentes, invisibles, qui finissent par abîmer le plancher ou le plafond du voisin du dessous.",
        },
        {
          type: "fiche",
          title: "Second œuvre et réseaux",
          points: [
            "Ordre : cloisons et <b>réseaux</b> → isolation, chapes → plâtrerie → revêtements → appareillage.",
            "Électricité : tableau, <b>différentiels 30 mA</b>, terre, norme <b>NF C 15-100</b> ; toujours couper et vérifier.",
            "Eau : alimentation sous pression, <b>évacuation par gravité</b> ; eau chaude et chauffage adaptés à la RE2020.",
            "Pièces humides : <b>étanchéité sous carrelage</b> ; respecter les temps de séchage des chapes.",
          ],
          retenir: "Une bonne coordination évite de casser ce qui vient d’être fini.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Sécurité, réception et garanties",
      minutes: 18,
      objectives: ["Connaître les principaux risques d’un chantier et la prévention", "Savoir réceptionner des travaux et utiliser les garanties"],
      steps: [
        {
          type: "lesson",
          title: "Se protéger sur le chantier et après",
          slides: [
            {
              title: "Les risques d’un chantier",
              body:
                "<ul><li>Les <b>chutes de hauteur</b> sont parmi les premières causes d’accidents mortels du travail, et le bâtiment est particulièrement exposé (toitures, échafaudages, trémies, échelles).</li><li>Autres risques majeurs : chutes d’objets, effondrement de tranchées, engins, électricité, manutention de charges lourdes, poussières (silice, amiante dans les bâtiments anciens).</li><li>Le principe est de <b>supprimer le risque à la source</b> avant de protéger les personnes : garde-corps et filets plutôt que simple harnais, échafaudage plutôt qu’échelle.</li></ul>",
            },
            {
              title: "Les équipements de protection",
              body:
                "<div class='tiers'><div><b>Protections collectives</b><span>Garde-corps, filets, échafaudages conformes, blindage des tranchées, balisage. Elles protègent tout le monde : à privilégier.</span></div><div><b>Protections individuelles (EPI)</b><span>Casque, chaussures de sécurité, gants, lunettes, protection auditive, masque, harnais quand le collectif est impossible.</span></div><div><b>Organisation</b><span>Plan de prévention, chantier rangé, accès sécurisés, formation, interdiction de travailler seul sur les tâches dangereuses.</span></div></div><p>Dans un bâtiment construit avant 1997, on fait réaliser un <b>repérage amiante</b> avant les travaux qui touchent aux matériaux.</p>",
            },
            {
              title: "La réception",
              body:
                "<ul><li>La <b>réception</b> est l’acte par lequel le maître d’ouvrage accepte les travaux, <b>avec ou sans réserves</b>. Elle se fait de préférence par écrit, avec un procès-verbal, en visitant les lieux avec les entreprises.</li><li>Chaque défaut constaté est inscrit comme <b>réserve</b> ; l’entreprise doit le corriger.</li><li>Le maître d’ouvrage peut retenir jusqu’à <b>5 %</b> du prix (<b>retenue de garantie</b>) jusqu’à la levée des réserves, sauf caution bancaire.</li><li>La réception déclenche le point de départ de toutes les garanties.</li></ul>",
            },
            {
              title: "Les trois garanties",
              body:
                "<table class='t'><tr><th>Garantie</th><th>Durée</th><th>Ce qu’elle couvre</th></tr><tr><td><b>Parfait achèvement</b></td><td>1 an</td><td>Les réserves et tous les désordres signalés dans l’année</td></tr><tr><td><b>Bon fonctionnement (biennale)</b></td><td>2 ans</td><td>Les équipements dissociables : volets, robinetterie, radiateurs…</td></tr><tr><td><b>Décennale</b></td><td>10 ans</td><td>Les dommages qui compromettent la solidité ou rendent le bâtiment impropre à sa destination</td></tr></table><p>Les entreprises doivent être assurées en <b>responsabilité décennale</b> : demande toujours l’attestation avant de signer. Le maître d’ouvrage doit en principe souscrire une <b>assurance dommages-ouvrage</b>, qui préfinance les réparations sans attendre la recherche des responsabilités.</p>",
              article: { ref: "Code civil, art. 1792", text: "Tout constructeur d’un ouvrage est responsable de plein droit, envers le maître ou l’acquéreur de l’ouvrage, des dommages, même résultant d’un vice du sol, qui compromettent la solidité de l’ouvrage ou qui le rendent impropre à sa destination." },
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle garantie ?",
          instruction: "Un an et demi après la réception, quelle garantie joue en priorité pour chaque problème ?",
          categories: ["Bon fonctionnement (2 ans)", "Décennale (10 ans)"],
          items: [
            { text: "Un volet roulant électrique ne fonctionne plus", cat: 0, why: "Équipement dissociable." },
            { text: "Une grande fissure traverse un mur porteur", cat: 1, why: "Atteinte à la solidité." },
            { text: "Un mitigeur de cuisine fuit", cat: 0, why: "Équipement dissociable." },
            { text: "La toiture laisse passer l’eau dans les chambres", cat: 1, why: "Le bâtiment devient impropre à sa destination." },
            { text: "Le plancher s’affaisse", cat: 1, why: "Solidité compromise." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Chute de hauteur", back: "Parmi les premières causes d’accidents mortels du travail, très présente dans le bâtiment." },
            { front: "Protection collective", back: "Garde-corps, filets, échafaudages : à privilégier sur les protections individuelles." },
            { front: "Réception", back: "Acceptation des travaux, avec ou sans réserves ; point de départ des garanties." },
            { front: "Retenue de garantie", back: "Jusqu’à 5 % du prix conservés jusqu’à la levée des réserves." },
            { front: "Garanties 1 / 2 / 10 ans", back: "Parfait achèvement / bon fonctionnement / décennale." },
            { front: "Dommages-ouvrage", back: "Assurance du maître d’ouvrage qui préfinance les réparations relevant de la décennale." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pour un travail en toiture, quelle protection privilégier ?", options: ["Un harnais seul", "Une protection collective (garde-corps, échafaudage, filet) avant les protections individuelles", "Des chaussures antidérapantes"], answer: 1, explain: "Le collectif protège même en cas d’oubli ou d’erreur." },
            { q: "Que faire avant de démolir une cloison dans un bâtiment de 1985 ?", options: ["Rien", "Faire réaliser un repérage amiante", "Arroser la cloison"], answer: 1, explain: "Les bâtiments construits avant 1997 peuvent contenir de l’amiante." },
            { q: "Lors de la réception, Sarah remarque une porte qui frotte. Que faire ?", options: ["Ne rien dire", "L’inscrire comme réserve au procès-verbal", "Refuser de payer la totalité des travaux"], answer: 1, explain: "La réserve oblige l’entreprise à corriger, et la retenue de garantie peut s’appliquer." },
            { q: "Avant de signer avec une entreprise de maçonnerie, il faut demander…", options: ["Sa photo", "Son attestation d’assurance décennale", "Son chiffre d’affaires"], answer: 1, explain: "Sans assurance, les recours en cas de sinistre grave sont très compliqués." },
          ],
        },
        {
          type: "case",
          title: "L’artisan sans assurance",
          story:
            "Thomas fait construire une extension. L’artisan le moins cher n’a pas d’attestation décennale « en ce moment, c’est en cours ». Deux ans après les travaux, de grosses fissures apparaissent et l’artisan a fermé son entreprise.",
          question: "Quelle leçon en tirer ?",
          options: [
            "Les fissures sont normales",
            "Il fallait exiger l’attestation d’assurance décennale valable à l’ouverture du chantier, et souscrire une dommages-ouvrage : sans elles, Thomas risque de devoir payer lui-même les réparations",
            "Il suffit d’appeler un autre artisan pour qu’il répare gratuitement",
          ],
          answer: 1,
          explain:
            "La responsabilité décennale existe même sans assurance, mais si l’entreprise a disparu et n’était pas assurée, elle devient impossible à faire jouer en pratique. L’attestation et la dommages-ouvrage sont les vraies protections.",
        },
        {
          type: "fiche",
          title: "Sécurité, réception, garanties",
          points: [
            "<b>Chutes de hauteur</b> : risque majeur ; <b>protections collectives</b> d’abord, puis <b>EPI</b>.",
            "Bâtiment d’avant 1997 : <b>repérage amiante</b> avant travaux.",
            "<b>Réception</b> avec procès-verbal et <b>réserves</b> ; <b>retenue de garantie</b> jusqu’à 5 %.",
            "Garanties : <b>1 an</b> (parfait achèvement), <b>2 ans</b> (bon fonctionnement), <b>10 ans</b> (décennale).",
            "Exiger l’<b>attestation décennale</b> ; souscrire une <b>dommages-ouvrage</b>.",
          ],
          retenir: "Pas d’attestation décennale, pas de signature.",
        },
      ],
    },
  ],
});
