/* ============================================================
   COURS : La plomberie du bâtiment
   École de Construction · 8 séances de 15 à 20 minutes
   Comprendre les réseaux d’eau, lire une installation, prévenir
   les fuites et les dégâts des eaux, savoir quand appeler un pro.
   Vérifié au 1er novembre 2026 : températures d’eau chaude
   (arrêté du 23 juin 1978 modifié : 50 °C max aux points de
   puisage des pièces de toilette), pentes DTU 60.11 (1 à 3 cm/m).
   Prix et consommation d’eau donnés en ordres de grandeur.
   ============================================================ */
AGORA.registerCourse({
  id: "plomberie",
  faculty: "construction",
  title: "La plomberie du bâtiment",
  subtitle: "Alimentation, évacuation, eau chaude, chauffage : comprendre l’eau dans un bâtiment",
  color: "#c27c0e",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre comment l’eau entre, circule, chauffe et ressort d’un bâtiment : les deux grands réseaux, les matériaux, l’évacuation, l’eau chaude, la salle de bains, le chauffage à eau, les fuites et les dégâts des eaux, et les économies. Le but : lire une installation, éviter les erreurs coûteuses et parler le même langage que ton plombier.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "L’eau dans le bâtiment",
      minutes: 15,
      objectives: ["Distinguer le réseau d’alimentation et le réseau d’évacuation", "Savoir couper l’eau et comprendre la pression"],
      steps: [
        {
          type: "lesson",
          title: "Deux réseaux, deux logiques",
          slides: [
            {
              title: "Alimentation et évacuation",
              body:
                "<div class='tiers'><div><b>L’alimentation</b><span>L’eau potable arrive <b>sous pression</b> : elle peut monter, tourner, aller loin, dans des tuyaux de petit diamètre.</span></div><div><b>L’évacuation</b><span>Les eaux usées repartent <b>par gravité</b> : il faut des tuyaux plus gros et une <b>pente</b> continue.</span></div><div><b>Les eaux pluviales</b><span>L’eau de pluie des toitures, gérée à part (gouttières, descentes, infiltration ou réseau).</span></div></div><p>Toute la plomberie repose sur cette différence : on peut faire passer l’alimentation presque partout, alors que l’évacuation impose des contraintes de pente et de place.</p>",
            },
            {
              title: "Du réseau public au robinet",
              body:
                "<ol><li>L’eau arrive du réseau public par un <b>branchement</b>.</li><li>Elle passe par le <b>compteur</b>, souvent dans un regard extérieur ou une gaine palière.</li><li>Juste après : le <b>robinet d’arrêt général</b>, à connaître absolument.</li><li>Puis souvent un <b>réducteur de pression</b> et un <b>clapet anti-retour</b>.</li><li>Enfin, la distribution vers les appareils, avec idéalement un <b>robinet d’arrêt par appareil</b> (WC, lavabo, lave-linge).</li></ol>",
            },
            {
              title: "La pression",
              body:
                "<ul><li>La pression se mesure en <b>bars</b>. Dans un logement, une pression de l’ordre de <b>2 à 3 bars</b> est confortable.</li><li>Trop faible : douche décevante, chauffe-eau qui fonctionne mal.</li><li>Trop forte (au-delà d’environ 3 bars) : bruits, coups de bélier, joints et flexibles fatigués, risque de fuite. On installe alors un <b>réducteur de pression</b>.</li></ul><p>Le <b>coup de bélier</b> est le claquement entendu quand on ferme brusquement un robinet : l’onde de pression fatigue l’installation. Un anti-bélier peut l’amortir.</p>",
            },
            {
              title: "Quelques ordres de grandeur",
              body:
                "<ul><li>Un Français consomme en moyenne autour de <b>150 litres d’eau par jour</b> à domicile.</li><li>Le prix de l’eau, assainissement compris, tourne en moyenne autour de <b>4 à 5 € le mètre cube</b> (1 m³ = 1 000 litres), avec de fortes différences entre communes.</li><li>Une chasse d’eau qui fuit en continu peut gaspiller plusieurs centaines de litres par jour sans qu’on s’en aperçoive.</li></ul>",
              example: "Une famille de 4 personnes qui consomme 150 L chacun par jour utilise environ 220 m³ par an, soit environ 900 à 1 100 € à 4-5 € le m³.",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel réseau ?",
          instruction: "Classe chaque élément.",
          categories: ["Alimentation (sous pression)", "Évacuation (par gravité)"],
          items: [
            { text: "Le tuyau qui amène l’eau froide au lavabo", cat: 0, why: "Arrivée d’eau potable." },
            { text: "Le tuyau de 100 mm sous les WC", cat: 1, why: "Évacuation des eaux vannes." },
            { text: "Le compteur d’eau", cat: 0, why: "Sur l’arrivée." },
            { text: "Le siphon sous l’évier", cat: 1, why: "Il fait partie de l’évacuation." },
            { text: "Le réducteur de pression", cat: 0, why: "Il règle la pression d’arrivée." },
            { text: "La descente qui part vers le tout-à-l’égout", cat: 1, why: "Évacuation gravitaire." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Alimentation", back: "Réseau d’eau potable sous pression : petits tuyaux, peut monter et tourner." },
            { front: "Évacuation", back: "Réseau des eaux usées par gravité : gros tuyaux et pente continue." },
            { front: "Robinet d’arrêt général", back: "Juste après le compteur : coupe l’eau de tout le logement. À connaître absolument." },
            { front: "Pression confortable", back: "De l’ordre de 2 à 3 bars ; au-delà, réducteur de pression." },
            { front: "Coup de bélier", back: "Claquement dû à une fermeture brusque ; fatigue l’installation." },
            { front: "1 m³", back: "1 000 litres ; prix moyen autour de 4 à 5 € assainissement compris." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi les tuyaux d’évacuation sont-ils plus gros que ceux d’alimentation ?", options: ["Par habitude", "Parce que l’eau s’y écoule par gravité, sans pression, avec parfois des matières solides", "Pour faire moins de bruit"], answer: 1, explain: "Sans pression, il faut de la section et de la pente." },
            { q: "Une fuite importante apparaît sous l’évier. Premier geste ?", options: ["Appeler un ami", "Fermer le robinet d’arrêt de l’appareil ou le robinet général", "Mettre une serviette"], answer: 1, explain: "On coupe d’abord, on répare ensuite." },
            { q: "La pression mesurée chez toi est de 6 bars. Que faire ?", options: ["Rien, c’est mieux", "Installer un réducteur de pression", "Changer le compteur"], answer: 1, explain: "Une pression excessive use joints et flexibles." },
            { q: "Combien de litres dans 1 m³ ?", options: ["100", "1 000", "10 000"], answer: 1, explain: "C’est l’unité de la facture d’eau." },
          ],
        },
        {
          type: "case",
          title: "L’emménagement",
          story:
            "Rania vient d’emménager dans un appartement. Un soir, un flexible de lave-linge éclate et l’eau envahit la cuisine. Elle ne sait pas où couper l’eau et cherche pendant de longues minutes.",
          question: "Quelle leçon en tirer ?",
          options: [
            "Il fallait acheter un autre lave-linge",
            "Repérer dès l’emménagement le robinet d’arrêt général (et ceux des appareils), vérifier qu’il fonctionne, et le montrer à tous les occupants",
            "Laisser le lave-linge débranché",
          ],
          answer: 1,
          explain:
            "Chaque minute compte en cas de fuite. Les robinets d’arrêt qui n’ont pas été manœuvrés depuis des années se grippent : il est utile de les tourner de temps en temps.",
        },
        {
          type: "fiche",
          title: "L’eau dans le bâtiment",
          points: [
            "<b>Alimentation</b> sous pression / <b>évacuation</b> par gravité / <b>eaux pluviales</b> à part.",
            "Branchement → <b>compteur</b> → <b>robinet d’arrêt général</b> → réducteur et clapet → appareils.",
            "Pression confortable : <b>2 à 3 bars</b> ; au-delà, <b>réducteur</b>.",
            "Ordres de grandeur : environ <b>150 L</b> par personne et par jour, <b>4 à 5 € le m³</b>.",
          ],
          retenir: "Le premier outil du plombier, c’est savoir où couper l’eau.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Tuyaux, matériaux et raccords",
      minutes: 16,
      objectives: ["Reconnaître les principaux matériaux de plomberie", "Comprendre les grands types de raccords"],
      steps: [
        {
          type: "lesson",
          title: "Les matériaux",
          slides: [
            {
              title: "Pour l’alimentation",
              body:
                "<table class='t'><tr><th>Matériau</th><th>Atouts</th><th>Limites</th></tr><tr><td><b>Cuivre</b></td><td>Durable, résistant à la chaleur, bel aspect en apparent</td><td>Demande du savoir-faire (brasure, sertissage), plus cher</td></tr><tr><td><b>PER</b> (polyéthylène réticulé)</td><td>Souple, posé en gaine, peu de raccords</td><td>Ne supporte pas les UV, pas en apparent au soleil</td></tr><tr><td><b>Multicouche</b></td><td>Garde sa forme une fois cintré, facile à poser</td><td>Raccords spécifiques à sertir ou à visser</td></tr></table><p>Dans les bâtiments anciens on trouve aussi de l’<b>acier galvanisé</b> (qui s’entartre et rouille) et parfois du <b>plomb</b>.</p>",
            },
            {
              title: "Le plomb, à remplacer",
              body:
                "<ul><li>Les canalisations en <b>plomb</b> se trouvent surtout dans les immeubles anciens (avant la seconde moitié du XXe siècle).</li><li>Le plomb peut passer dans l’eau, surtout quand elle stagne, et il est toxique, en particulier pour les jeunes enfants et les femmes enceintes.</li><li>Leur pose est interdite dans les installations neuves depuis 1995. Quand on en trouve, on les remplace.</li><li>En attendant, on laisse couler l’eau quelques instants le matin avant de la boire.</li></ul>",
            },
            {
              title: "Pour l’évacuation",
              body:
                "<ul><li>Le <b>PVC</b> est le matériau de loin le plus courant : léger, économique, assemblé par <b>collage</b> ou par joints.</li><li>La <b>fonte</b> se rencontre dans l’ancien et les immeubles : lourde mais très silencieuse.</li><li>Des tuyaux spéciaux <b>« acoustiques »</b> réduisent le bruit des chutes d’eau dans les logements.</li></ul>",
            },
            {
              title: "Les raccords",
              body:
                "<div class='tiers'><div><b>À sertir</b><span>Une pince écrase le raccord sur le tube : rapide et fiable, outil spécifique.</span></div><div><b>À visser ou à compression</b><span>Écrou et bague ou joint : démontable, pratique en dépannage.</span></div><div><b>Brasure (soudure)</b><span>Sur le cuivre, au chalumeau : demande de la pratique et des précautions contre l’incendie.</span></div></div><p>Les <b>flexibles</b> (lave-linge, robinetterie) vieillissent : on les vérifie et on les remplace au moindre signe d’usure. Les raccords doivent rester <b>accessibles</b> autant que possible : un raccord noyé dans une dalle, c’est une fuite introuvable plus tard.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Cuivre", back: "Tube durable, résistant à la chaleur ; brasé ou serti." },
            { front: "PER", back: "Tube souple posé en gaine ; craint les UV." },
            { front: "Multicouche", back: "Tube qui garde sa forme une fois cintré ; raccords sertis ou vissés." },
            { front: "PVC", back: "Matériau courant de l’évacuation, assemblé par collage." },
            { front: "Plomb", back: "Ancien, toxique, interdit en neuf depuis 1995 : à remplacer." },
            { front: "Flexible", back: "Tuyau souple de raccordement ; s’use et doit être remplacé régulièrement." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel matériau d’alimentation ne faut-il pas laisser exposé au soleil ?", options: ["Le cuivre", "Le PER", "La fonte"], answer: 1, explain: "Les UV le dégradent." },
            { q: "Tu découvres des tuyaux gris et mous dans une vieille maison. Probablement…", options: ["Du PVC", "Du plomb, à faire remplacer", "Du PER"], answer: 1, explain: "Le plomb est gris, mou et marqué à l’ongle." },
            { q: "Pourquoi garder les raccords accessibles ?", options: ["Pour l’esthétique", "Pour pouvoir les surveiller et intervenir en cas de fuite", "Ce n’est pas utile"], answer: 1, explain: "Un raccord est un point faible potentiel." },
            { q: "Quel est le matériau le plus courant pour l’évacuation ?", options: ["Le PVC", "Le cuivre", "Le verre"], answer: 0, explain: "Léger, économique et simple à assembler." },
          ],
        },
        {
          type: "case",
          title: "Les flexibles d’origine",
          story:
            "Dans la maison de location de Paul, les flexibles d’arrivée d’eau sous l’évier et derrière le lave-linge sont d’origine. Ils datent de 15 ans, présentent des traces de rouille et une légère déformation.",
          question: "Que faire ?",
          options: [
            "Attendre qu’ils fuient",
            "Les faire remplacer préventivement (après avoir coupé l’eau), car un flexible qui éclate peut inonder un logement en quelques minutes",
            "Les recouvrir de ruban adhésif",
          ],
          answer: 1,
          explain:
            "Les flexibles sont une cause fréquente de dégâts des eaux. Un remplacement coûte peu comparé aux dégâts d’une inondation, surtout en appartement où le voisin du dessous est touché.",
        },
        {
          type: "fiche",
          title: "Matériaux et raccords",
          points: [
            "Alimentation : <b>cuivre</b>, <b>PER</b>, <b>multicouche</b> ; dans l’ancien, acier galvanisé et <b>plomb</b> (à remplacer).",
            "Évacuation : <b>PVC</b> collé, <b>fonte</b> dans l’ancien, tubes acoustiques.",
            "Raccords : <b>à sertir</b>, <b>à visser</b>, <b>brasure</b> ; les garder <b>accessibles</b>.",
            "Remplacer les <b>flexibles</b> usés avant qu’ils ne cèdent.",
          ],
          retenir: "Un raccord caché, c’est une fuite qu’on ne trouvera pas.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "L’évacuation et l’assainissement",
      minutes: 17,
      objectives: ["Comprendre siphons, pentes et ventilation", "Distinguer tout-à-l’égout et assainissement individuel"],
      steps: [
        {
          type: "lesson",
          title: "Faire partir les eaux usées",
          slides: [
            {
              title: "Eaux usées, eaux vannes, eaux pluviales",
              body:
                "<ul><li><b>Eaux usées (ou ménagères)</b> : lavabo, douche, évier, lave-linge.</li><li><b>Eaux vannes</b> : WC.</li><li><b>Eaux pluviales</b> : toitures et terrasses. Elles ne doivent pas être mélangées aux eaux usées quand le réseau public est séparatif : on les infiltre sur la parcelle ou on les envoie dans le réseau pluvial.</li></ul>",
            },
            {
              title: "Le siphon et la garde d’eau",
              body:
                "<p>Sous chaque appareil se trouve un <b>siphon</b> : un coude qui garde en permanence un peu d’eau, la <b>garde d’eau</b>.</p><p>Cette petite réserve bloque les <b>odeurs</b> des égouts. Quand une odeur remonte, c’est souvent qu’un siphon s’est vidé (appareil inutilisé longtemps, évaporation) ou qu’il est mal ventilé.</p><p>Le siphon retient aussi les cheveux et déchets : c’est la première chose à nettoyer en cas d’écoulement lent.</p>",
            },
            {
              title: "Diamètres et pentes",
              body:
                "<table class='t'><tr><th>Appareil</th><th>Diamètre courant (PVC)</th></tr><tr><td>Lavabo, bidet</td><td>32 mm</td></tr><tr><td>Douche, baignoire, évier, lave-linge</td><td>40 mm</td></tr><tr><td>WC</td><td>100 mm</td></tr></table><p>Les tuyaux horizontaux doivent avoir une pente régulière, en général de <b>1 à 3 cm par mètre</b>. Trop faible : l’eau stagne et les dépôts s’accumulent. Trop forte : l’eau part trop vite et laisse les matières derrière elle.</p>",
            },
            {
              title: "Ventilation et assainissement",
              body:
                "<ul><li>Les <b>chutes</b> (tuyaux verticaux) sont prolongées jusqu’au toit par une <b>ventilation primaire</b> : sans elle, l’eau qui descend aspire la garde d’eau des siphons (glouglous, odeurs).</li><li>Des <b>regards</b> permettent d’inspecter et de déboucher le réseau.</li><li>En ville, les eaux partent au <b>tout-à-l’égout</b> ; le raccordement est en principe obligatoire dans les deux ans qui suivent la mise en service du réseau public.</li><li>Sans réseau public, la maison a un <b>assainissement non collectif</b> (fosse toutes eaux, filtre, épandage ou micro-station), contrôlé par le <b>SPANC</b> de la commune ; un contrôle de moins de 3 ans est exigé lors de la vente.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel diamètre ?",
          instruction: "Associe chaque appareil à son diamètre d’évacuation courant.",
          categories: ["32 mm", "40 mm", "100 mm"],
          items: [
            { text: "Lavabo de la salle de bains", cat: 0, why: "Petit débit." },
            { text: "WC", cat: 2, why: "Matières solides." },
            { text: "Évier de cuisine", cat: 1, why: "Débit plus important, graisses." },
            { text: "Bac de douche", cat: 1, why: "Débit important." },
            { text: "Lave-linge", cat: 1, why: "Vidange rapide de la pompe." },
            { text: "Bidet", cat: 0, why: "Comme le lavabo." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Eaux vannes", back: "Eaux des WC." },
            { front: "Garde d’eau", back: "Eau retenue dans le siphon qui bloque les odeurs." },
            { front: "Pente d’évacuation", back: "En général 1 à 3 cm par mètre." },
            { front: "Ventilation primaire", back: "Prolongement de la chute jusqu’au toit pour éviter le désiphonnage." },
            { front: "Tout-à-l’égout", back: "Réseau public d’assainissement ; raccordement en principe obligatoire sous 2 ans." },
            { front: "SPANC", back: "Service public qui contrôle l’assainissement non collectif ; contrôle de moins de 3 ans à la vente." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une odeur d’égout dans une salle de bains peu utilisée vient souvent…", options: ["d’un siphon dont la garde d’eau s’est évaporée", "du chauffe-eau", "de la peinture"], answer: 0, explain: "Faire couler un peu d’eau suffit souvent." },
            { q: "On entend des glouglous dans le lavabo quand on tire la chasse. Cause probable ?", options: ["Un problème de ventilation de la chute qui aspire la garde d’eau", "Une pression trop forte", "Un robinet trop serré"], answer: 0, explain: "C’est le désiphonnage." },
            { q: "Quelle pente pour un tuyau d’évacuation horizontal ?", options: ["0, à plat", "En général 1 à 3 cm par mètre", "50 cm par mètre"], answer: 1, explain: "Ni trop, ni trop peu." },
            { q: "Tu vends une maison avec une fosse toutes eaux. Que faut-il fournir ?", options: ["Rien", "Le rapport de contrôle du SPANC de moins de 3 ans", "Une photo de la fosse"], answer: 1, explain: "C’est un diagnostic obligatoire." },
          ],
        },
        {
          type: "case",
          title: "La salle d’eau au sous-sol",
          story:
            "Antoine veut créer une salle d’eau avec WC au sous-sol de sa maison. Problème : le sous-sol est plus bas que le collecteur qui part vers l’égout.",
          question: "Quelle solution envisager ?",
          options: [
            "Poser les tuyaux à plat, l’eau finira par partir",
            "Installer une pompe de relevage (ou un broyeur adapté) qui remonte les eaux jusqu’au niveau du collecteur, en respectant les prescriptions du fabricant et en prévoyant l’entretien",
            "Renoncer à toute évacuation",
          ],
          answer: 1,
          explain:
            "L’évacuation gravitaire suppose une pente. Quand elle est impossible, une pompe de relevage remonte les eaux. C’est une solution courante, mais elle dépend de l’électricité et demande un entretien.",
        },
        {
          type: "fiche",
          title: "Évacuation et assainissement",
          points: [
            "<b>Eaux usées</b>, <b>eaux vannes</b> (WC), <b>eaux pluviales</b> (séparées).",
            "<b>Siphon</b> et <b>garde d’eau</b> contre les odeurs.",
            "Diamètres : <b>32</b> (lavabo), <b>40</b> (douche, évier, lave-linge), <b>100</b> (WC) ; pente <b>1 à 3 cm/m</b>.",
            "<b>Ventilation primaire</b> en toiture ; <b>regards</b> d’accès.",
            "<b>Tout-à-l’égout</b> ou <b>assainissement non collectif</b> contrôlé par le <b>SPANC</b>.",
          ],
          retenir: "L’eau propre arrive sous pression, l’eau sale repart par la pente.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "L’eau chaude sanitaire",
      minutes: 16,
      objectives: ["Comparer les modes de production d’eau chaude", "Concilier prévention des légionelles et des brûlures"],
      steps: [
        {
          type: "lesson",
          title: "Produire l’eau chaude",
          slides: [
            {
              title: "Les solutions",
              body:
                "<table class='t'><tr><th>Solution</th><th>Principe</th><th>À savoir</th></tr><tr><td><b>Chauffe-eau électrique (cumulus)</b></td><td>Résistance qui chauffe un ballon</td><td>Simple ; à programmer en heures creuses</td></tr><tr><td><b>Chauffe-eau thermodynamique</b></td><td>Pompe à chaleur qui prend les calories de l’air</td><td>Consomme beaucoup moins, plus cher à l’achat</td></tr><tr><td><b>Chaudière</b> (gaz, fioul, bois)</td><td>Chauffe aussi l’eau sanitaire, avec ou sans ballon</td><td>Liée au système de chauffage</td></tr><tr><td><b>Chauffe-eau solaire</b></td><td>Capteurs en toiture + appoint</td><td>Très économe, dépend de l’ensoleillement</td></tr><tr><td><b>Instantané</b></td><td>Chauffe au moment du besoin</td><td>Pas de stockage, puissance élevée</td></tr></table>",
            },
            {
              title: "Les légionelles",
              body:
                "<ul><li>Les <b>légionelles</b> sont des bactéries qui se développent dans l’eau tiède (en gros entre 25 et 45 °C), surtout quand elle stagne.</li><li>On s’infecte en respirant de fines gouttelettes (douche), pas en buvant l’eau. La maladie (légionellose) peut être grave.</li><li>Prévention : garder l’eau du ballon suffisamment chaude (une consigne autour de <b>55 °C</b> est recommandée), éviter les bras morts où l’eau stagne, détartrer et entretenir.</li></ul>",
            },
            {
              title: "Les brûlures",
              body:
                "<ul><li>À l’inverse, une eau trop chaude au robinet brûle : à 60 °C, la peau d’un enfant peut être gravement brûlée en quelques secondes.</li><li>Dans les installations récentes, la température est limitée à <b>50 °C aux robinets des pièces de toilette</b> (et 60 °C dans les autres pièces).</li><li>La solution n’est pas de baisser le ballon, mais d’installer un <b>mitigeur thermostatique</b> près des points d’usage : l’eau reste chaude dans le ballon, tempérée au robinet.</li></ul>",
              article: { ref: "Arrêté du 23 juin 1978 modifié, art. 36", text: "Dans les pièces destinées à la toilette, la température maximale de l’eau chaude sanitaire est fixée à 50 °C aux points de puisage." },
            },
            {
              title: "Le groupe de sécurité",
              body:
                "<ul><li>Sur un chauffe-eau à accumulation, le <b>groupe de sécurité</b> est obligatoire : il évite que la pression monte dangereusement quand l’eau se dilate en chauffant.</li><li>Il est normal qu’il goutte un peu pendant la chauffe : l’eau est évacuée vers l’égout.</li><li>On le manœuvre régulièrement (une fois par mois est souvent conseillé) pour éviter qu’il s’entartre.</li><li>Dans les régions à eau dure, le <b>calcaire</b> réduit la performance du ballon : détartrage, anode à surveiller, éventuellement adoucisseur.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Chauffe-eau thermodynamique", back: "Ballon chauffé par une pompe à chaleur : consomme beaucoup moins qu’un cumulus classique." },
            { front: "Légionelles", back: "Bactéries de l’eau tiède stagnante, transmises par les gouttelettes respirées." },
            { front: "55 °C", back: "Consigne recommandée pour le ballon, contre les légionelles." },
            { front: "50 °C", back: "Température maximale aux robinets des pièces de toilette dans les installations récentes." },
            { front: "Mitigeur thermostatique", back: "Mélange eau chaude et froide pour délivrer une température stable et sûre." },
            { front: "Groupe de sécurité", back: "Protège le ballon contre la surpression ; à manœuvrer régulièrement." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pour éviter les brûlures, faut-il régler le ballon à 40 °C ?", options: ["Oui", "Non : on garde le ballon chaud et on tempère au robinet avec un mitigeur thermostatique", "Oui, et couper le chauffe-eau l’été"], answer: 1, explain: "Un ballon tiède favorise les légionelles." },
            { q: "Comment attrape-t-on la légionellose ?", options: ["En buvant l’eau du robinet", "En respirant de fines gouttelettes d’eau contaminée, sous la douche par exemple", "En touchant un robinet"], answer: 1, explain: "La transmission se fait par inhalation." },
            { q: "Le groupe de sécurité goutte pendant la chauffe. Est-ce anormal ?", options: ["Oui, il faut le boucher", "Non, c’est l’eau de dilatation qui s’évacue", "Oui, il faut changer le ballon"], answer: 1, explain: "Ne jamais le boucher : c’est une sécurité." },
            { q: "Quelle solution consomme le moins d’électricité pour chauffer l’eau, à usage égal ?", options: ["Le cumulus électrique classique", "Le chauffe-eau thermodynamique", "Une bouilloire"], answer: 1, explain: "La pompe à chaleur récupère les calories de l’air." },
          ],
        },
        {
          type: "case",
          title: "L’Airbnb et les vacances",
          story:
            "Malik loue un studio meublé. Entre deux locations, l’appartement reste vide trois semaines en été, chauffe-eau coupé. Le premier voyageur arrive et prend une douche.",
          question: "Quelle précaution Malik aurait-il dû prendre ?",
          options: [
            "Aucune",
            "Remettre le chauffe-eau en route suffisamment tôt pour que l’eau soit bien chaude, puis faire couler l’eau chaude quelques minutes à chaque robinet et à la douche avant l’arrivée, pour renouveler l’eau qui a stagné",
            "Laisser le chauffe-eau éteint pour économiser",
          ],
          answer: 1,
          explain:
            "Une eau tiède qui stagne plusieurs semaines est le terrain idéal des légionelles. Le rinçage des canalisations et une eau bien chaude au ballon limitent ce risque.",
        },
        {
          type: "fiche",
          title: "L’eau chaude sanitaire",
          points: [
            "Solutions : <b>cumulus</b>, <b>thermodynamique</b>, <b>chaudière</b>, <b>solaire</b>, <b>instantané</b>.",
            "<b>Légionelles</b> : eau tiède stagnante ; ballon autour de <b>55 °C</b>, pas de bras morts.",
            "<b>Brûlures</b> : <b>50 °C</b> max aux robinets des pièces de toilette ; <b>mitigeur thermostatique</b>.",
            "<b>Groupe de sécurité</b> obligatoire, à manœuvrer ; surveiller le <b>calcaire</b>.",
          ],
          retenir: "Chaud dans le ballon, tempéré au robinet.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Salle de bains, WC et cuisine",
      minutes: 17,
      objectives: ["Connaître les points clés d’une salle de bains et d’une cuisine", "Comprendre l’étanchéité d’une douche à l’italienne"],
      steps: [
        {
          type: "lesson",
          title: "Les pièces d’eau",
          slides: [
            {
              title: "La douche à l’italienne",
              body:
                "<ul><li>Une douche de plain-pied, sans bac : élégante et accessible, mais techniquement exigeante.</li><li>Il faut une <b>pente</b> du sol vers la bonde ou le caniveau, et la place pour l’évacuation sous le sol (épaisseur de chape, réservation dans le plancher).</li><li>Il faut surtout une <b>étanchéité sous carrelage</b> continue (sol et murs), avec bandes aux angles et traitement des traversées. Le carrelage et les joints ne sont pas étanches.</li><li>En étage, une erreur d’étanchéité se voit d’abord… au plafond du dessous.</li></ul>",
            },
            {
              title: "Les WC",
              body:
                "<ul><li><b>WC posé</b> : simple, évacuation au sol ou à l’arrière.</li><li><b>WC suspendu</b> : fixé sur un <b>bâti-support</b> caché dans une cloison ; plus facile à nettoyer, mais le bâti doit rester accessible par la trappe des boutons.</li><li><b>Sanibroyeur</b> : broie et refoule les eaux quand l’évacuation gravitaire est impossible ; pratique mais bruyant, à réserver aux cas sans autre solution.</li><li>La <b>chasse double débit</b> (3 / 6 litres par exemple) économise beaucoup d’eau.</li></ul>",
            },
            {
              title: "La cuisine",
              body:
                "<ul><li>Évier avec siphon accessible, arrivées d’eau froide et chaude avec robinets d’arrêt.</li><li>Raccordements du <b>lave-vaisselle</b> et souvent du <b>lave-linge</b> : arrivée avec robinet, évacuation siphonnée en 40 mm.</li><li>Les <b>graisses</b> versées dans l’évier se figent dans les canalisations : on les jette à la poubelle, jamais dans l’évier.</li><li>Un îlot central avec évier impose de prévoir l’évacuation dans le sol dès la conception.</li></ul>",
            },
            {
              title: "Ventilation et accessibilité",
              body:
                "<ul><li>Les pièces d’eau doivent être <b>ventilées</b> (bouche d’extraction de VMC) : sinon l’humidité provoque condensation et moisissures.</li><li>Pour l’<b>accessibilité</b> (personnes âgées, handicap) : douche de plain-pied, barres d’appui, WC surélevé, espace de manœuvre. Dans le neuf, des règles s’imposent pour une partie des logements.</li><li>Les appareils électriques respectent les <b>volumes de sécurité</b> vus dans le cours d’électricité.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Bonne ou mauvaise pratique ?",
          instruction: "Classe chaque pratique.",
          categories: ["Bonne pratique", "Mauvaise pratique"],
          items: [
            { text: "Poser une étanchéité sous carrelage dans une douche à l’italienne", cat: 0, why: "Indispensable." },
            { text: "Vider l’huile de friture dans l’évier avec de l’eau chaude", cat: 1, why: "Elle se fige plus loin et bouche." },
            { text: "Laisser une trappe d’accès au bâti du WC suspendu", cat: 0, why: "Pour l’entretien du mécanisme." },
            { text: "Supprimer la bouche de VMC de la salle de bains pour éviter le bruit", cat: 1, why: "Humidité et moisissures garanties." },
            { text: "Installer une chasse double débit", cat: 0, why: "Économie d’eau." },
            { text: "Noyer un raccord sans accès sous la chape de la douche", cat: 1, why: "Fuite introuvable plus tard." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Douche à l’italienne", back: "Douche de plain-pied : pente, évacuation et étanchéité sous carrelage indispensables." },
            { front: "Étanchéité sous carrelage", back: "Membrane continue sous le carrelage ; les joints ne sont pas étanches." },
            { front: "Bâti-support", back: "Structure cachée dans la cloison qui porte un WC suspendu." },
            { front: "Sanibroyeur", back: "Broie et refoule les eaux quand l’évacuation par gravité est impossible." },
            { front: "Chasse double débit", back: "Deux volumes d’eau (par exemple 3 et 6 L) pour économiser." },
            { front: "Graisses", back: "À la poubelle, jamais dans l’évier : elles bouchent les canalisations." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Les joints de carrelage suffisent-ils à rendre une douche étanche ?", options: ["Oui", "Non, il faut une étanchéité sous le carrelage", "Oui avec du silicone"], answer: 1, explain: "L’eau traverse les joints lentement." },
            { q: "Pourquoi garder accessible le bâti d’un WC suspendu ?", options: ["Pour régler ou remplacer le mécanisme de chasse", "Pour décorer", "Ce n’est pas utile"], answer: 0, explain: "Sinon il faut casser la cloison." },
            { q: "Que faire de l’huile de cuisson usagée ?", options: ["La verser dans l’évier", "La laisser refroidir et la jeter (ou la déposer en point de collecte)", "La verser dans les WC"], answer: 1, explain: "Les graisses figées bouchent les canalisations." },
            { q: "Une salle de bains sans aucune ventilation risque…", options: ["De consommer moins", "Condensation et moisissures", "Rien"], answer: 1, explain: "L’humidité doit être évacuée." },
          ],
        },
        {
          type: "case",
          title: "Le plafond du voisin",
          story:
            "Six mois après avoir fait refaire sa salle de bains avec une douche à l’italienne, Sabrina reçoit un appel de sa voisine du dessous : une tache d’eau s’agrandit sur son plafond, juste sous la douche.",
          question: "Que doit faire Sabrina ?",
          options: [
            "Ignorer, c’est le problème de la voisine",
            "Arrêter d’utiliser la douche, prévenir son assureur dans les délais et l’entreprise qui a réalisé les travaux (les garanties de parfait achèvement et décennale peuvent jouer), et faire constater l’origine de la fuite",
            "Repeindre le plafond de la voisine",
          ],
          answer: 1,
          explain:
            "Un défaut d’étanchéité de douche est un classique des dégâts des eaux. Les travaux récents sont couverts par les garanties de l’entreprise (vues dans le cours « Construction — les bases ») ; l’assurance gère la relation avec la voisine.",
        },
        {
          type: "fiche",
          title: "Salle de bains, WC, cuisine",
          points: [
            "<b>Douche à l’italienne</b> : pente, évacuation sous le sol, <b>étanchéité sous carrelage</b>.",
            "WC : <b>posé</b>, <b>suspendu</b> (bâti accessible), <b>sanibroyeur</b> en dernier recours ; chasse <b>double débit</b>.",
            "Cuisine : siphon accessible, robinets d’arrêt, <b>jamais de graisses</b> dans l’évier.",
            "Pièces d’eau <b>ventilées</b> ; penser à l’<b>accessibilité</b>.",
          ],
          retenir: "Dans une douche, ce n’est pas le carrelage qui est étanche.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Le chauffage à eau",
      minutes: 16,
      objectives: ["Comprendre le fonctionnement d’un circuit de chauffage à eau", "Connaître l’entretien de base"],
      steps: [
        {
          type: "lesson",
          title: "Un circuit fermé",
          slides: [
            {
              title: "Le principe",
              body:
                "<p>Le chauffage central à eau est un <b>circuit fermé</b> : la même eau tourne en boucle.</p><ol><li>Le <b>générateur</b> (chaudière, pompe à chaleur air-eau, chaudière bois…) chauffe l’eau.</li><li>Un <b>circulateur</b> (petite pompe) la fait circuler.</li><li>Les <b>émetteurs</b> (radiateurs ou plancher chauffant) transmettent la chaleur aux pièces.</li><li>L’eau refroidie revient au générateur.</li></ol><p>Cette eau n’est pas l’eau potable : les deux circuits sont séparés.</p>",
            },
            {
              title: "Radiateurs et plancher chauffant",
              body:
                "<table class='t'><tr><th>Émetteur</th><th>Atouts</th><th>Limites</th></tr><tr><td><b>Radiateurs</b></td><td>Réactifs, faciles à poser en rénovation</td><td>Chaleur moins homogène</td></tr><tr><td><b>Plancher chauffant</b></td><td>Chaleur douce et homogène, invisible, fonctionne à basse température (idéal avec une pompe à chaleur)</td><td>Lent à réagir, à prévoir dès la construction ou en rénovation lourde</td></tr></table><p>Les <b>robinets thermostatiques</b> sur les radiateurs règlent la température pièce par pièce et font économiser de l’énergie.</p>",
            },
            {
              title: "Pression, purge et vase d’expansion",
              body:
                "<ul><li>Le circuit fonctionne avec une pression faible, souvent autour de <b>1 à 1,5 bar</b> à froid (voir la notice) : un manomètre l’indique sur la chaudière.</li><li>Le <b>vase d’expansion</b> absorbe la dilatation de l’eau quand elle chauffe.</li><li>De l’<b>air</b> peut s’accumuler en haut des radiateurs (haut froid, bruits de glouglou) : on les <b>purge</b>, puis on remet de la pression si nécessaire.</li><li>Avec les années, des boues se forment : un <b>désembouage</b> rend son efficacité au circuit.</li></ul>",
            },
            {
              title: "Entretien et sécurité",
              body:
                "<ul><li>L’<b>entretien annuel</b> des chaudières (gaz, fioul, bois) par un professionnel est obligatoire ; il améliore le rendement et prévient le risque d’<b>intoxication au monoxyde de carbone</b>.</li><li>Les pompes à chaleur ont aussi des obligations d’entretien périodique selon leur puissance.</li><li>Les installations de <b>gaz</b> se confient exclusivement à des professionnels qualifiés.</li><li>Un <b>détecteur de monoxyde de carbone</b> est vivement conseillé dans les logements équipés d’un appareil à combustion.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Circuit fermé", back: "La même eau de chauffage tourne en boucle, séparée de l’eau potable." },
            { front: "Circulateur", back: "Petite pompe qui fait circuler l’eau de chauffage." },
            { front: "Plancher chauffant", back: "Chaleur douce à basse température, idéal avec une pompe à chaleur." },
            { front: "Purge", back: "Évacuer l’air accumulé en haut des radiateurs." },
            { front: "Vase d’expansion", back: "Absorbe la dilatation de l’eau du circuit de chauffage." },
            { front: "Entretien annuel de chaudière", back: "Obligatoire ; prévient notamment l’intoxication au monoxyde de carbone." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Le haut d’un radiateur reste froid alors que le bas est chaud. Cause probable ?", options: ["De l’air dans le radiateur, à purger", "Un radiateur trop puissant", "Un problème électrique"], answer: 0, explain: "L’air monte et empêche l’eau chaude d’y circuler." },
            { q: "Pourquoi le plancher chauffant va-t-il bien avec une pompe à chaleur ?", options: ["Il fonctionne à basse température, ce qui améliore le rendement de la pompe à chaleur", "Il est plus joli", "Il ne consomme rien"], answer: 0, explain: "Moins l’eau doit être chaude, plus la PAC est efficace." },
            { q: "L’entretien annuel d’une chaudière gaz est…", options: ["facultatif", "obligatoire", "interdit au locataire"], answer: 1, explain: "Il incombe en général à l’occupant (locataire) pour une chaudière individuelle." },
            { q: "Quel gaz dangereux une chaudière mal entretenue peut-elle produire ?", options: ["Du monoxyde de carbone", "De l’hélium", "De l’oxygène"], answer: 0, explain: "Incolore et inodore : d’où l’intérêt d’un détecteur." },
          ],
        },
        {
          type: "case",
          title: "Les maux de tête de l’hiver",
          story:
            "Depuis le début de l’hiver, toute la famille de Damien a des maux de tête et des nausées, surtout le matin, qui disparaissent quand ils partent la journée. Leur chaudière gaz n’a pas été entretenue depuis trois ans et ils ont bouché les grilles d’aération « à cause des courants d’air ».",
          question: "Que faut-il faire en priorité ?",
          options: [
            "Prendre des médicaments contre le mal de tête",
            "Suspecter une intoxication au monoxyde de carbone : aérer, arrêter la chaudière, sortir du logement, appeler les secours (18, 15 ou 112), puis faire contrôler la chaudière et rétablir les ventilations",
            "Monter le chauffage",
          ],
          answer: 1,
          explain:
            "Maux de tête, nausées et amélioration hors du logement sont des signes typiques d’intoxication au monoxyde de carbone, gaz mortel sans odeur. Chaudière non entretenue et ventilations bouchées sont les deux causes classiques.",
        },
        {
          type: "fiche",
          title: "Le chauffage à eau",
          points: [
            "<b>Circuit fermé</b> : générateur → circulateur → émetteurs → retour.",
            "<b>Radiateurs</b> (réactifs) ou <b>plancher chauffant</b> (basse température, idéal avec PAC) ; robinets thermostatiques.",
            "Pression du circuit souvent autour de <b>1 à 1,5 bar</b> ; <b>vase d’expansion</b> ; <b>purge</b> ; désembouage.",
            "<b>Entretien annuel obligatoire</b> des chaudières ; gaz : uniquement des pros ; <b>détecteur de CO</b> conseillé.",
          ],
          retenir: "Une chaudière qu’on n’entretient pas peut tuer sans bruit ni odeur.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Fuites, bouchons et dégâts des eaux",
      minutes: 16,
      objectives: ["Savoir détecter une fuite et réagir à un dégât des eaux", "Connaître les bons gestes de débouchage et de prévention"],
      steps: [
        {
          type: "lesson",
          title: "Quand l’eau s’échappe",
          slides: [
            {
              title: "Détecter une fuite",
              body:
                "<ul><li><b>Test du compteur</b> : relever l’index le soir, ne rien utiliser pendant la nuit, relever le matin. S’il a avancé, il y a une fuite.</li><li>Une <b>chasse d’eau</b> qui coule en continu est la fuite la plus fréquente : quelques gouttes de colorant dans le réservoir apparaissent dans la cuvette sans tirer la chasse si le mécanisme fuit.</li><li>Signes d’alerte : facture en hausse, taches au plafond, peinture qui cloque, odeur d’humidité, compteur qui tourne.</li></ul>",
            },
            {
              title: "Déboucher sans abîmer",
              body:
                "<ol><li><b>Nettoyer le siphon</b> : beaucoup de bouchons sont là (cheveux, savon).</li><li><b>Ventouse</b> : efficace sur évier, lavabo, WC.</li><li><b>Furet</b> : un câble souple qu’on fait tourner dans la canalisation.</li><li>Au-delà, un professionnel avec du matériel adapté (hydrocurage, caméra).</li></ol><p>Les déboucheurs chimiques puissants sont dangereux (projections, vapeurs) et peuvent abîmer certains tuyaux : on les utilise avec précaution, jamais mélangés, ou on s’en passe.</p>",
            },
            {
              title: "Le gel",
              body:
                "<ul><li>L’eau augmente de volume en gelant : un tuyau plein d’eau peut éclater.</li><li>Points sensibles : canalisations extérieures, vide sanitaire, garage, maison inoccupée en hiver.</li><li>Prévention : isoler les tuyaux exposés, couper et <b>vidanger</b> le robinet extérieur avant l’hiver, garder un chauffage hors gel dans une maison vide.</li></ul>",
            },
            {
              title: "Le dégât des eaux",
              body:
                "<ol><li><b>Couper l’eau</b> (robinet de l’appareil ou général) et, si l’eau atteint des installations électriques, <b>couper l’électricité</b>.</li><li>Protéger les biens, éponger, aérer.</li><li>Prévenir le voisin concerné ; remplir ensemble un <b>constat amiable de dégât des eaux</b>.</li><li>Déclarer le sinistre à son <b>assureur</b> dans le délai prévu (souvent 5 jours ouvrés), avec photos et factures.</li></ol><p>Entre assureurs, une convention organise la prise en charge pour les sinistres courants : c’est en général l’assureur de l’occupant du local sinistré qui gère.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Dans quel ordre ?",
          instruction: "Classe chaque action selon sa priorité face à une fuite importante.",
          categories: ["Tout de suite", "Ensuite"],
          items: [
            { text: "Fermer le robinet d’arrêt", cat: 0, why: "Arrêter l’arrivée d’eau." },
            { text: "Couper l’électricité si l’eau approche des prises", cat: 0, why: "Sécurité des personnes." },
            { text: "Remplir le constat amiable avec le voisin", cat: 1, why: "Une fois la situation maîtrisée." },
            { text: "Déclarer le sinistre à l’assureur", cat: 1, why: "Dans les jours qui suivent." },
            { text: "Prendre des photos des dégâts", cat: 1, why: "Pour le dossier." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Test du compteur", back: "Relever l’index le soir et le matin sans rien utiliser : s’il avance, il y a une fuite." },
            { front: "Furet", back: "Câble souple qu’on fait tourner dans une canalisation pour la déboucher." },
            { front: "Déboucheur chimique", back: "Dangereux et parfois agressif pour les tuyaux : avec précaution, jamais mélangé." },
            { front: "Gel", back: "L’eau gonfle en gelant et fait éclater les tuyaux : isoler, vidanger, hors gel." },
            { front: "Constat amiable dégât des eaux", back: "Document rempli avec le voisin concerné pour les assureurs." },
            { front: "Déclaration de sinistre", back: "À faire rapidement auprès de l’assureur, souvent sous 5 jours ouvrés." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ta facture d’eau a doublé sans raison. Premier test ?", options: ["Changer de fournisseur", "Le test du compteur sur une nuit sans consommation", "Acheter une bouteille d’eau"], answer: 1, explain: "Il révèle une fuite cachée." },
            { q: "Le lavabo s’écoule lentement. Par quoi commencer ?", options: ["Un déboucheur chimique très puissant", "Démonter et nettoyer le siphon", "Appeler directement un hydrocureur"], answer: 1, explain: "Le bouchon est souvent dans le siphon." },
            { q: "Une maison secondaire reste vide en hiver. Quelle précaution ?", options: ["Aucune", "Couper l’eau, vidanger les canalisations exposées et/ou maintenir un hors gel", "Laisser tous les robinets ouverts en grand"], answer: 1, explain: "Le gel fait éclater les tuyaux pleins d’eau." },
            { q: "L’eau d’une fuite coule près d’une prise électrique. Que faire ?", options: ["Éponger rapidement à mains nues", "Couper l’électricité au tableau avant d’intervenir", "Brancher un ventilateur"], answer: 1, explain: "Eau et électricité : on coupe d’abord." },
          ],
        },
        {
          type: "case",
          title: "La fuite du week-end",
          story:
            "Un samedi soir, Bastien découvre de l’eau qui s’écoule de sous sa baignoire jusqu’au couloir. Le plafond de l’appartement du dessous commence à goutter.",
          question: "Quelle est la bonne séquence ?",
          options: [
            "Attendre lundi pour appeler un plombier",
            "Couper l’eau, couper l’électricité si nécessaire, prévenir le voisin, éponger et protéger, faire intervenir un plombier d’urgence si besoin, puis remplir le constat amiable et déclarer à l’assureur dans les délais",
            "Mettre des serviettes et aller se coucher",
          ],
          answer: 1,
          explain:
            "La rapidité limite les dégâts chez soi et chez le voisin. Les démarches d’assurance viennent ensuite, avec photos et devis ou factures.",
        },
        {
          type: "fiche",
          title: "Fuites et dégâts des eaux",
          points: [
            "Détecter : <b>test du compteur</b> sur une nuit, chasse d’eau qui coule, signes d’humidité.",
            "Déboucher : <b>siphon</b> → <b>ventouse</b> → <b>furet</b> → professionnel ; prudence avec les produits chimiques.",
            "<b>Gel</b> : isoler, vidanger, hors gel.",
            "Dégât des eaux : <b>couper l’eau</b> (et l’électricité si besoin), protéger, <b>constat amiable</b>, <b>déclaration</b> rapide à l’assureur.",
          ],
          retenir: "Une fuite se gère dans l’ordre : couper, protéger, déclarer.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Économiser l’eau et protéger le réseau",
      minutes: 15,
      objectives: ["Connaître les gestes et équipements qui économisent l’eau", "Comprendre les règles de récupération d’eau de pluie et de protection du réseau"],
      steps: [
        {
          type: "lesson",
          title: "Consommer mieux",
          slides: [
            {
              title: "Les équipements économes",
              body:
                "<ul><li><b>Mousseurs</b> (aérateurs) sur les robinets : ils mélangent de l’air à l’eau et réduisent le débit sans perte de confort.</li><li><b>Pommeau de douche économe</b> : une douche consomme beaucoup moins qu’un bain.</li><li><b>Chasse double débit</b>.</li><li><b>Mitigeurs</b> : on trouve plus vite la bonne température, donc moins d’eau perdue.</li><li>Électroménager bien classé et utilisé à pleine charge.</li></ul>",
            },
            {
              title: "Récupérer l’eau de pluie",
              body:
                "<ul><li>Une cuve récupère l’eau des toitures pour l’<b>arrosage</b>, et, avec une installation conforme, pour certains usages intérieurs comme les <b>WC</b> ou le lavage des sols.</li><li>Ce réseau doit être <b>totalement séparé</b> du réseau d’eau potable, et ses robinets signalés « eau non potable ».</li><li>Quand l’eau de pluie utilisée à l’intérieur est rejetée dans les égouts, une <b>déclaration en mairie</b> est en général demandée.</li><li>On ne boit jamais l’eau de pluie récupérée.</li></ul>",
            },
            {
              title: "Protéger le réseau public",
              body:
                "<p>L’eau ne doit jamais pouvoir <b>refluer</b> d’une installation privée vers le réseau public : un retour d’eau polluée (eau de chauffage, d’arrosage, de cuve) contaminerait l’eau de tout le quartier.</p><ul><li>Un <b>clapet anti-retour</b> est installé après le compteur.</li><li>Les installations à risque (chauffage, arrosage automatique, cuves, activités professionnelles) demandent des dispositifs plus poussés, comme un <b>disconnecteur</b>.</li><li>Un puits ou forage privé ne doit jamais être relié au réseau public.</li></ul>",
            },
            {
              title: "Le calcaire et quand appeler un pro",
              body:
                "<ul><li>Une eau <b>dure</b> (calcaire) entartre robinetterie, ballons et appareils. Un <b>adoucisseur</b> peut aider, en gardant si possible un robinet d’eau non adoucie pour la boisson.</li><li>Un plombier est indispensable pour : le gaz, les modifications du réseau d’évacuation, la création d’une salle de bains, le remplacement d’un chauffe-eau, les canalisations en plomb, et tout travail sous garantie ou assuré.</li><li>Demande toujours un <b>devis détaillé</b> et l’<b>attestation d’assurance décennale</b> pour les travaux d’ampleur.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Usages de l’eau de pluie",
          instruction: "Classe chaque usage de l’eau de pluie récupérée.",
          categories: ["Possible (avec une installation conforme)", "À proscrire"],
          items: [
            { text: "Arroser le potager", cat: 0, why: "Usage extérieur courant." },
            { text: "Alimenter la chasse d’eau des WC", cat: 0, why: "Avec un réseau séparé et signalé." },
            { text: "Remplir la carafe d’eau à boire", cat: 1, why: "Eau non potable." },
            { text: "Laver la voiture ou les sols", cat: 0, why: "Usage de nettoyage." },
            { text: "Relier la cuve au réseau d’eau potable", cat: 1, why: "Risque de contaminer le réseau public." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Mousseur", back: "Embout de robinet qui mélange de l’air à l’eau pour réduire le débit." },
            { front: "Eau de pluie", back: "Arrosage, WC, lavage, avec un réseau séparé et signalé ; jamais à boire." },
            { front: "Clapet anti-retour", back: "Empêche l’eau de refluer vers le réseau public." },
            { front: "Disconnecteur", back: "Protection renforcée contre les retours d’eau pour les installations à risque." },
            { front: "Adoucisseur", back: "Réduit le calcaire ; garder une eau non adoucie pour la boisson." },
            { front: "Devis + décennale", back: "Les deux documents à demander avant des travaux de plomberie d’ampleur." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi installer des mousseurs sur les robinets ?", options: ["Pour décorer", "Pour réduire le débit d’eau sans perdre en confort", "Pour chauffer l’eau"], answer: 1, explain: "Ils mélangent de l’air à l’eau." },
            { q: "Peut-on relier sa cuve d’eau de pluie au réseau d’eau potable ?", options: ["Oui, c’est plus pratique", "Non, les deux réseaux doivent être totalement séparés", "Oui la nuit seulement"], answer: 1, explain: "Un retour d’eau contaminerait le réseau public." },
            { q: "À quoi sert un clapet anti-retour après le compteur ?", options: ["À augmenter la pression", "À empêcher l’eau de l’installation de refluer vers le réseau public", "À filtrer le calcaire"], answer: 1, explain: "Il protège l’eau de tous." },
            { q: "Avant de signer un devis pour refaire une salle de bains, il faut demander…", options: ["La photo du plombier", "Un devis détaillé et l’attestation d’assurance décennale", "Rien"], answer: 1, explain: "Comme pour tous les travaux d’ampleur." },
          ],
        },
        {
          type: "case",
          title: "Le forage du jardin",
          story:
            "Olivier a fait creuser un forage dans son jardin. Pour simplifier, il propose de brancher la pompe du forage sur la tuyauterie de la maison, déjà reliée au réseau public, « comme ça on choisit l’eau qu’on veut avec une vanne ».",
          question: "Qu’en penser ?",
          options: [
            "C’est astucieux",
            "C’est interdit et dangereux : l’eau du forage pourrait refluer dans le réseau public et le contaminer ; les deux réseaux doivent rester physiquement séparés, et un forage domestique doit être déclaré en mairie",
            "C’est possible si la vanne est neuve",
          ],
          answer: 1,
          explain:
            "Une simple vanne ne garantit pas la séparation. La protection du réseau public est une règle de santé publique : une erreur chez un particulier peut toucher tout le quartier.",
        },
        {
          type: "fiche",
          title: "Économies et protection du réseau",
          points: [
            "Économiser : <b>mousseurs</b>, <b>douche économe</b>, <b>chasse double</b>, mitigeurs, électroménager bien classé.",
            "<b>Eau de pluie</b> : arrosage, WC, lavage ; réseau séparé et signalé ; jamais à boire.",
            "Protéger le réseau public : <b>clapet anti-retour</b>, <b>disconnecteur</b> pour les installations à risque, pas de liaison avec un forage.",
            "<b>Calcaire</b> : adoucisseur ; travaux d’ampleur : <b>devis détaillé</b> et <b>décennale</b>.",
          ],
          retenir: "Chez soi, on protège aussi l’eau de tout le quartier.",
        },
      ],
    },
  ],
});
