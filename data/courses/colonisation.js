/* ============================================================
   COURS : La colonisation — conquêtes, empires, indépendances
   Faculté d’Histoire · 8 séances de 15 à 20 minutes
   Approche mondiale (Espagne, Portugal, Royaume-Uni, France,
   Belgique, Pays-Bas…). Faits établis présentés clairement ;
   quand les bilans chiffrés sont débattus, la fourchette et les
   sources divergentes sont indiquées. Actualité vérifiée au
   31 octobre 2026 (Nouvelle-Calédonie, franc CFA, restitutions).
   ============================================================ */
AGORA.registerCourse({
  id: "colonisation",
  faculty: "histoire",
  title: "La colonisation — conquêtes, empires, indépendances",
  subtitle: "Cinq siècles d’empires coloniaux, leurs logiques, leurs violences et leurs héritages",
  color: "#8a6a2f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre un phénomène qui a façonné le monde actuel : pourquoi et comment les puissances européennes ont conquis des empires, la conquête des Amériques, le partage de l’Afrique et de l’Asie, le fonctionnement du système colonial, la montée des nationalismes, les décolonisations, ce qu’il en reste aujourd’hui et les débats de mémoire. Les faits sont présentés tels que les historiens les établissent, et les points de vue tels qu’ils s’expriment.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Qu’est-ce que la colonisation ?",
      minutes: 15,
      objectives: ["Définir la colonisation et ses différentes formes", "Comprendre les motivations des puissances colonisatrices"],
      steps: [
        {
          type: "lesson",
          title: "Définitions et motivations",
          slides: [
            {
              title: "Une définition",
              body:
                "<p>La <b>colonisation</b>, c’est la prise de contrôle d’un territoire et de sa population par un État étranger, qui y impose son autorité politique, souvent économique et culturelle, et parfois y installe ses propres habitants.</p><p>Le phénomène est très ancien : les Phéniciens et les Grecs fondaient déjà des colonies autour de la Méditerranée. Mais ce cours porte sur la colonisation européenne, du XVe au XXe siècle, qui a touché presque toute la planète.</p>",
            },
            {
              title: "Les différentes formes",
              body:
                "<table class='t'><tr><th>Forme</th><th>Principe</th><th>Exemple</th></tr><tr><td><b>Colonie de peuplement</b></td><td>Des colons s’installent en grand nombre</td><td>Amérique du Nord, Australie, Algérie</td></tr><tr><td><b>Colonie d’exploitation</b></td><td>Peu de colons ; on exploite les ressources et la main-d’œuvre</td><td>Congo, Afrique de l’Ouest, Indochine</td></tr><tr><td><b>Protectorat</b></td><td>Le souverain local reste en place, mais la puissance étrangère contrôle l’essentiel</td><td>Tunisie (1881), Maroc (1912)</td></tr><tr><td><b>Comptoir</b></td><td>Poste commercial sur une côte</td><td>Pondichéry, Gorée</td></tr></table>",
            },
            {
              title: "Pourquoi coloniser ?",
              body:
                "<p>Les motivations s’additionnent souvent :</p><ul><li><b>Économiques</b> : matières premières (or, argent, sucre, coton, caoutchouc), débouchés pour les produits de la métropole, terres pour les colons.</li><li><b>Stratégiques</b> : ports, routes maritimes, rivalités entre puissances.</li><li><b>Religieuses</b> : diffuser le christianisme (missions).</li><li><b>Idéologiques</b> : au XIXe siècle, une prétendue « <b>mission civilisatrice</b> », fondée sur l’idée, aujourd’hui rejetée, d’une hiérarchie entre les peuples.</li><li><b>Nationalistes</b> : le prestige d’un grand empire.</li></ul>",
            },
            {
              title: "Deux grands âges coloniaux",
              body:
                "<div class='tiers'><div><b>XVe-XVIIIe siècle</b><span>Premiers empires : Espagne, Portugal, puis Pays-Bas, Royaume-Uni, France. Surtout les Amériques et des comptoirs.</span></div><div><b>XIXe-début XXe</b><span>Impérialisme : partage de l’Afrique et d’une grande partie de l’Asie, avec la révolution industrielle.</span></div><div><b>Après 1945</b><span>Décolonisations, puis héritages et débats de mémoire.</span></div></div>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle forme de domination ?",
          instruction: "Classe chaque situation.",
          categories: ["Colonie de peuplement", "Colonie d’exploitation", "Protectorat"],
          items: [
            { text: "Des centaines de milliers d’Européens s’installent en Algérie et y possèdent des terres", cat: 0, why: "Installation massive de colons." },
            { text: "Le sultan du Maroc reste en place, mais la France contrôle la politique étrangère et l’administration", cat: 2, why: "C’est le protectorat de 1912." },
            { text: "Quelques centaines d’agents européens organisent la récolte du caoutchouc au Congo", cat: 1, why: "Exploitation des ressources avec peu de colons." },
            { text: "Des colons britanniques fondent des villes et des fermes en Australie", cat: 0, why: "Peuplement européen massif." },
            { text: "Le bey de Tunis garde son titre, mais un résident général français gouverne", cat: 2, why: "Protectorat de 1881." },
            { text: "Des plantations d’hévéas en Indochine employant une main-d’œuvre locale", cat: 1, why: "Économie tournée vers l’exportation." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Colonisation", back: "Prise de contrôle d’un territoire et de sa population par un État étranger." },
            { front: "Colonie de peuplement", back: "Installation massive de colons (Amérique du Nord, Australie, Algérie)." },
            { front: "Colonie d’exploitation", back: "Peu de colons, exploitation des ressources et de la main-d’œuvre locale." },
            { front: "Protectorat", back: "Le souverain local reste en place mais la puissance étrangère contrôle l’essentiel (Tunisie, Maroc)." },
            { front: "« Mission civilisatrice »", back: "Justification idéologique du XIXe siècle fondée sur une prétendue hiérarchie des peuples." },
            { front: "Impérialisme", back: "Volonté d’expansion et de domination des grandes puissances, surtout au XIXe siècle." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle est la différence principale entre une colonie et un protectorat ?", options: ["Il n’y en a aucune", "Dans un protectorat, le souverain local reste officiellement en place", "Le protectorat n’existe qu’en Asie"], answer: 1, explain: "La puissance protectrice contrôle pourtant l’essentiel du pouvoir." },
            { q: "Laquelle de ces motivations n’apparaît PAS dans les justifications de la colonisation au XIXe siècle ?", options: ["La recherche de matières premières", "Le prestige national", "Le droit des peuples à disposer d’eux-mêmes"], answer: 2, explain: "Ce principe sera au contraire invoqué contre la colonisation au XXe siècle." },
            { q: "L’Algérie française était surtout…", options: ["une colonie de peuplement", "un comptoir", "un protectorat"], answer: 0, explain: "Environ un million d’Européens y vivaient au milieu du XXe siècle." },
            { q: "La colonisation européenne la plus étendue a eu lieu…", options: ["dans l’Antiquité", "aux XIXe et début du XXe siècle", "après 1960"], answer: 1, explain: "C’est l’âge de l’impérialisme et du partage de l’Afrique." },
          ],
        },
        {
          type: "case",
          title: "Les mots pour le dire",
          story:
            "Dans un débat, quelqu’un affirme : « La colonisation, c’était seulement du commerce, les Européens venaient vendre et acheter. » Un autre répond : « C’était seulement de la violence. »",
          question: "Quelle réponse correspond le mieux à la définition historique ?",
          options: [
            "La colonisation n’était que du commerce",
            "La colonisation est d’abord une domination politique imposée à un territoire et à sa population ; elle a eu des dimensions économiques, militaires, religieuses et culturelles, et ses formes ont beaucoup varié selon les lieux et les époques",
            "Le mot colonisation ne s’applique qu’à l’Antiquité",
          ],
          answer: 1,
          explain:
            "Le commerce peut exister sans colonisation ; ce qui définit la colonisation, c’est la domination politique. Comprendre ses différentes formes permet d’éviter les simplifications, dans un sens comme dans l’autre.",
        },
        {
          type: "fiche",
          title: "Qu’est-ce que la colonisation ?",
          points: [
            "<b>Colonisation</b> : domination politique d’un territoire et de sa population par un État étranger.",
            "Formes : <b>peuplement</b>, <b>exploitation</b>, <b>protectorat</b>, <b>comptoir</b>.",
            "Motivations : économiques, stratégiques, religieuses, idéologiques (« mission civilisatrice »), nationalistes.",
            "Deux grands âges : XVe-XVIIIe siècle (Amériques) et XIXe-XXe siècle (Afrique, Asie), puis décolonisations après 1945.",
          ],
          retenir: "Coloniser, ce n’est pas seulement commercer : c’est gouverner un peuple sans son consentement.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Les premiers empires et les Amériques (XVe-XIXe siècle)",
      minutes: 18,
      objectives: ["Comprendre la conquête des Amériques et ses conséquences", "Connaître les premières indépendances"],
      steps: [
        {
          type: "lesson",
          title: "Les premiers empires",
          slides: [
            {
              title: "Espagne et Portugal se partagent le monde",
              body:
                "<ul><li>Après 1492, l’Espagne et le Portugal se disputent les terres nouvellement atteintes.</li><li>Le <b>traité de Tordesillas</b> (<b>1494</b>) trace une ligne dans l’Atlantique : à l’ouest pour l’Espagne, à l’est pour le Portugal. C’est pourquoi on parle portugais au Brésil et espagnol dans le reste de l’Amérique du Sud.</li><li>Le Portugal crée aussi un réseau de comptoirs en Afrique et en Asie.</li></ul>",
            },
            {
              title: "La conquête des empires amérindiens",
              body:
                "<ul><li>De 1519 à 1521, <b>Hernán Cortés</b> et quelques centaines d’Espagnols, alliés à des peuples autochtones ennemis des Aztèques, s’emparent de <b>Tenochtitlan</b> (Mexico).</li><li>À partir de 1532, <b>Francisco Pizarro</b> conquiert l’Empire inca.</li><li>Les conquérants profitent des divisions locales, de leurs armes et chevaux, et surtout des <b>épidémies</b> (variole, rougeole) contre lesquelles les Amérindiens n’ont aucune immunité.</li></ul><p>Au cours du XVIe siècle, la population amérindienne s’effondre : les estimations varient beaucoup, mais dans de nombreuses régions elle diminue de plus de la moitié, parfois de près de 90 %. Les maladies sont la cause principale, aggravées par les guerres, le travail forcé et la désorganisation des sociétés.</p>",
            },
            {
              title: "Exploiter les terres et les hommes",
              body:
                "<ul><li>Les Espagnols organisent le travail forcé des Amérindiens (système de l’<b>encomienda</b>), notamment dans les mines d’argent.</li><li>Lors de la <b>controverse de Valladolid</b> (1550-1551), le dominicain <b>Bartolomé de Las Casas</b> défend l’humanité et les droits des Amérindiens face à Juan Ginés de Sepúlveda, qui justifie leur domination.</li><li>Pour remplacer la main-d’œuvre amérindienne décimée, les Européens développent la <b>traite atlantique</b> des Africains réduits en esclavage (voir le cours sur l’histoire du commerce).</li><li>Les Anglais s’installent en Amérique du Nord (treize colonies), les Français au Canada (<b>Québec</b>, fondée en 1608), aux Antilles et en Louisiane.</li></ul>",
            },
            {
              title: "Les premières indépendances",
              body:
                "<ul><li><b>1776</b> : les treize colonies anglaises d’Amérique du Nord proclament leur indépendance : naissance des <b>États-Unis</b>.</li><li><b>1804</b> : après une révolte des esclaves menée notamment par <b>Toussaint Louverture</b>, <b>Haïti</b> devient indépendante. C’est la première république née d’une révolte d’esclaves.</li><li>De <b>1810 à 1825</b> environ, l’Amérique espagnole s’émancipe (Simón Bolívar, José de San Martín) ; le Brésil devient indépendant en <b>1822</b>.</li></ul><p>Ces indépendances sont souvent menées par les descendants des colons européens ; les populations amérindiennes et noires restent largement exclues du pouvoir.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Traité de Tordesillas (1494)", back: "Partage des terres nouvelles entre l’Espagne et le Portugal." },
            { front: "Hernán Cortés (1519-1521)", back: "Conquête de l’Empire aztèque, avec des alliés autochtones." },
            { front: "Effondrement démographique amérindien", back: "Surtout dû aux épidémies, aggravé par les guerres et le travail forcé ; jusqu’à près de 90 % dans certaines régions." },
            { front: "Controverse de Valladolid (1550-1551)", back: "Débat sur l’humanité et les droits des Amérindiens (Las Casas contre Sepúlveda)." },
            { front: "Haïti (1804)", back: "Première république issue d’une révolte d’esclaves (Toussaint Louverture)." },
            { front: "Indépendances latino-américaines", back: "Vers 1810-1825 (Bolívar, San Martín) ; Brésil en 1822." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi parle-t-on portugais au Brésil ?", options: ["Par hasard", "Parce que le traité de Tordesillas a attribué cette zone au Portugal", "Parce que le Brésil a été colonisé par la France"], answer: 1, explain: "La ligne de 1494 passait à l’est de l’Amérique du Sud." },
            { q: "Quelle a été la principale cause de l’effondrement de la population amérindienne ?", options: ["Les famines naturelles", "Les épidémies apportées par les Européens, aggravées par les violences et le travail forcé", "L’émigration vers l’Europe"], answer: 1, explain: "Les historiens s’accordent sur le rôle majeur des maladies." },
            { q: "Quel est le premier État indépendant né d’une révolte d’esclaves ?", options: ["Les États-Unis", "Haïti", "Le Brésil"], answer: 1, explain: "En 1804." },
            { q: "Qui a défendu les droits des Amérindiens lors de la controverse de Valladolid ?", options: ["Hernán Cortés", "Bartolomé de Las Casas", "Christophe Colomb"], answer: 1, explain: "Un dominicain témoin des violences de la conquête." },
          ],
        },
        {
          type: "case",
          title: "Quelques centaines contre un empire",
          story:
            "Un élève s’étonne : « Comment quelques centaines de soldats espagnols ont-ils pu vaincre l’Empire aztèque, qui comptait des millions d’habitants ? Ils devaient être invincibles. »",
          question: "Que répondent les historiens ?",
          options: [
            "Les Espagnols étaient invincibles grâce à leur courage",
            "Plusieurs facteurs se combinent : alliances avec des peuples autochtones hostiles aux Aztèques, armes et chevaux, et surtout des épidémies qui ont décimé la population",
            "Les Aztèques se sont rendus sans combattre",
          ],
          answer: 1,
          explain:
            "Les dizaines de milliers d’alliés autochtones (notamment les Tlaxcaltèques) et l’épidémie de variole de 1520 ont été décisifs. Le récit d’une victoire de quelques héros cache une réalité plus complexe.",
        },
        {
          type: "fiche",
          title: "Les premiers empires",
          points: [
            "<b>Tordesillas (1494)</b> : partage Espagne-Portugal.",
            "Conquêtes : <b>Cortés</b> (Aztèques, 1519-1521), <b>Pizarro</b> (Incas, à partir de 1532).",
            "Effondrement démographique amérindien, surtout par les <b>épidémies</b> ; travail forcé (<b>encomienda</b>) ; <b>Valladolid</b> (1550-1551).",
            "Traite atlantique ; colonies anglaises et françaises (<b>Québec</b>, 1608 ; Antilles).",
            "Indépendances : <b>États-Unis (1776)</b>, <b>Haïti (1804)</b>, Amérique latine (1810-1825).",
          ],
          retenir: "La première vague coloniale a transformé les Amériques, au prix d’un effondrement des peuples autochtones.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "L’âge des empires (XIXe siècle-1914)",
      minutes: 18,
      objectives: ["Comprendre le partage de l’Afrique et de l’Asie", "Connaître les justifications et les oppositions de l’époque"],
      steps: [
        {
          type: "lesson",
          title: "Le second âge colonial",
          slides: [
            {
              title: "Pourquoi une nouvelle vague au XIXe siècle ?",
              body:
                "<ul><li>La <b>révolution industrielle</b> crée des besoins en matières premières (coton, caoutchouc, minerais) et en débouchés.</li><li>De nouvelles techniques rendent la conquête plus facile : <b>bateaux à vapeur</b>, <b>quinine</b> contre le paludisme, armes à répétition et mitrailleuses.</li><li>La rivalité entre puissances européennes pousse chacune à occuper le terrain avant les autres.</li><li>Les explorateurs et les missionnaires ouvrent la voie.</li></ul>",
            },
            {
              title: "La France conquiert l’Algérie",
              body:
                "<ul><li>En <b>1830</b>, la France débarque à Alger. La conquête dure des décennies et rencontre une forte résistance, notamment celle de l’<b>émir Abd el-Kader</b>, qui ne se rend qu’en 1847.</li><li>Elle est très violente : destructions de villages, « enfumades » de populations réfugiées dans des grottes.</li><li>L’Algérie devient une <b>colonie de peuplement</b>, divisée en départements, où les colons européens obtiennent les meilleures terres.</li></ul>",
            },
            {
              title: "Le partage de l’Afrique",
              body:
                "<ul><li>Lors de la <b>conférence de Berlin</b> (<b>1884-1885</b>), les puissances européennes fixent les règles du partage de l’Afrique, sans aucun représentant africain.</li><li>En quelques décennies, presque tout le continent est conquis. Vers 1914, seules l’<b>Éthiopie</b> (qui a battu l’Italie à <b>Adoua</b> en 1896) et le <b>Libéria</b> restent indépendants.</li><li>Les frontières sont souvent tracées à la règle, sans tenir compte des peuples et des royaumes existants.</li><li>De nombreux résistants s’opposent à la conquête, comme <b>Samory Touré</b> en Afrique de l’Ouest.</li></ul>",
            },
            {
              title: "Les grands empires",
              body:
                "<ul><li>L’<b>Empire britannique</b> est le plus vaste de l’histoire : vers 1920, il couvre environ un quart des terres émergées. Après la révolte des Cipayes (1857), l’<b>Inde</b> passe sous l’autorité directe de la Couronne britannique (1858).</li><li>L’<b>empire français</b> est le deuxième : Afrique du Nord (Algérie, Tunisie en 1881, Maroc en 1912), Afrique-Occidentale et Afrique-Équatoriale françaises, Madagascar, Indochine, îles du Pacifique et des Caraïbes.</li><li>Les Pays-Bas en Indonésie, la Belgique au Congo, l’Allemagne, l’Italie et le Portugal en Afrique.</li></ul>",
            },
            {
              title: "Les débats de l’époque",
              body:
                "<p>La colonisation divise déjà les Français. En <b>juillet 1885</b>, à l’Assemblée :</p><ul><li><b>Jules Ferry</b> défend l’expansion coloniale pour des raisons économiques, stratégiques et au nom d’un prétendu « devoir » des « races supérieures » de « civiliser les races inférieures ».</li><li><b>Georges Clemenceau</b> lui répond en dénonçant cette idée de races supérieures et les violences de la conquête, et préfère concentrer les forces de la France contre l’Allemagne.</li></ul><p>L’idée d’une hiérarchie des races, alors répandue en Europe, est aujourd’hui rejetée par la science et par le droit.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel empire ?",
          instruction: "Associe chaque territoire à la puissance qui le dominait vers 1914.",
          categories: ["Royaume-Uni", "France", "Autres puissances"],
          items: [
            { text: "L’Inde", cat: 0, why: "Joyau de l’Empire britannique." },
            { text: "L’Indochine", cat: 1, why: "Union indochinoise française." },
            { text: "Le Congo", cat: 2, why: "D’abord possession du roi des Belges, puis colonie belge (1908)." },
            { text: "Madagascar", cat: 1, why: "Colonie française depuis 1896." },
            { text: "L’Indonésie", cat: 2, why: "Indes néerlandaises (Pays-Bas)." },
            { text: "L’Égypte et le Soudan", cat: 0, why: "Sous contrôle britannique." },
            { text: "Le Sénégal", cat: 1, why: "Afrique-Occidentale française." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "1830", back: "Début de la conquête de l’Algérie par la France ; résistance d’Abd el-Kader jusqu’en 1847." },
            { front: "Conférence de Berlin (1884-1885)", back: "Les Européens fixent les règles du partage de l’Afrique, sans Africains." },
            { front: "Adoua (1896)", back: "Victoire de l’Éthiopie sur l’Italie : l’Éthiopie reste indépendante." },
            { front: "Raj britannique (1858)", back: "L’Inde passe sous l’autorité directe de la Couronne après la révolte des Cipayes." },
            { front: "Débat Ferry-Clemenceau (1885)", back: "Ferry défend la colonisation au nom des « races supérieures » ; Clemenceau dénonce cette idée." },
            { front: "Outils de la conquête", back: "Vapeur, quinine, armes à répétition et mitrailleuses." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quels pays africains restent indépendants vers 1914 ?", options: ["Le Maroc et l’Égypte", "L’Éthiopie et le Libéria", "Le Sénégal et le Mali"], answer: 1, explain: "L’Éthiopie a vaincu l’Italie à Adoua en 1896." },
            { q: "Qui a participé à la conférence de Berlin de 1884-1885 ?", options: ["Les puissances européennes (et quelques autres) mais aucun représentant africain", "Tous les rois africains", "Les Nations unies"], answer: 0, explain: "Le sort de l’Afrique a été négocié sans les Africains." },
            { q: "Pourquoi la quinine joue-t-elle un rôle dans la conquête de l’Afrique ?", options: ["C’était une arme", "Elle protège les Européens contre le paludisme, qui les décimait", "Elle servait de monnaie"], answer: 1, explain: "Avant elle, l’intérieur de l’Afrique était surnommé « le tombeau de l’homme blanc »." },
            { q: "En 1885, qui s’oppose à Jules Ferry sur la colonisation ?", options: ["Georges Clemenceau", "Charles de Gaulle", "Napoléon"], answer: 0, explain: "Il dénonce l’idée de « races supérieures »." },
          ],
        },
        {
          type: "case",
          title: "Une frontière à la règle",
          story:
            "Sur une carte de l’Afrique, Inès remarque de nombreuses frontières parfaitement droites, alors qu’en Europe elles suivent souvent des rivières ou des montagnes. Elle se demande pourquoi.",
          question: "Quelle explication est la plus juste ?",
          options: [
            "Les Africains préféraient les lignes droites",
            "Beaucoup de ces frontières ont été tracées par les puissances coloniales lors du partage, selon leurs intérêts et souvent sans connaître le terrain ni tenir compte des peuples ; elles ont été conservées après les indépendances",
            "Ce sont des frontières naturelles",
          ],
          answer: 1,
          explain:
            "Ces frontières ont parfois séparé des peuples ou réuni des groupes rivaux. Après les indépendances, les États africains ont choisi de les conserver pour éviter des guerres sans fin (séance 7).",
        },
        {
          type: "fiche",
          title: "L’âge des empires",
          points: [
            "Moteurs : <b>révolution industrielle</b>, rivalités, nouvelles techniques (vapeur, <b>quinine</b>, armes).",
            "<b>Algérie</b> : conquête à partir de <b>1830</b>, résistance d’<b>Abd el-Kader</b>, colonie de peuplement.",
            "<b>Conférence de Berlin (1884-1885)</b> : partage de l’Afrique ; seuls l’<b>Éthiopie</b> et le <b>Libéria</b> restent indépendants.",
            "Empires britannique (Inde, 1858) et français (Afrique, Madagascar, Indochine), mais aussi néerlandais, belge, allemand, italien, portugais.",
            "Débat de 1885 : <b>Ferry</b> (« races supérieures ») contre <b>Clemenceau</b>.",
          ],
          retenir: "Au XIXe siècle, l’industrie donne aux Européens les moyens et les motifs de se partager le monde.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Le système colonial au quotidien",
      minutes: 18,
      objectives: ["Comprendre comment fonctionnaient les colonies", "Distinguer les réalisations, les inégalités et les violences du système"],
      steps: [
        {
          type: "lesson",
          title: "La vie dans les colonies",
          slides: [
            {
              title: "Deux catégories de personnes",
              body:
                "<p>Dans l’empire français, la société coloniale est fondée sur l’<b>inégalité juridique</b> :</p><ul><li>les <b>citoyens</b> (essentiellement les Européens), qui ont tous les droits ;</li><li>les <b>sujets</b> (la grande majorité des colonisés), soumis à des règles particulières.</li></ul><p>Le <b>code de l’indigénat</b> (à partir de 1881) permet à l’administration de punir les « indigènes » sans jugement pour des infractions spécifiques (manque de respect envers un agent, réunion non autorisée…). Il est aboli en <b>1946</b>.</p>",
            },
            {
              title: "Le travail forcé",
              body:
                "<ul><li>Dans de nombreuses colonies, les populations doivent fournir un <b>travail obligatoire</b> pour les routes, les chemins de fer, les plantations.</li><li>Exemple : la construction du chemin de fer <b>Congo-Océan</b> (1921-1934), en Afrique-Équatoriale française, coûte la vie à des milliers de travailleurs (plus de 15 000 selon les estimations courantes). L’écrivain André Gide et le journaliste Albert Londres dénoncent ces conditions.</li><li>Dans l’<b>État indépendant du Congo</b>, propriété personnelle du roi des Belges <b>Léopold II</b> (1885-1908), l’exploitation du caoutchouc s’accompagne de violences extrêmes (mutilations, prises d’otages). Le nombre de morts, très débattu, se compte en millions selon de nombreuses estimations. Le scandale international oblige la Belgique à reprendre le territoire en 1908.</li></ul><p>Le travail forcé est aboli dans les colonies françaises en <b>1946</b> (loi Houphouët-Boigny).</p>",
            },
            {
              title: "Une économie tournée vers la métropole",
              body:
                "<ul><li>Les colonies produisent ce dont la métropole a besoin : arachide au Sénégal, coton, cacao, café, caoutchouc, vin et blé en Algérie, minerais.</li><li>Elles achètent les produits manufacturés de la métropole.</li><li>Les meilleures terres sont souvent attribuées aux colons ou aux grandes compagnies.</li><li>Les profits bénéficient surtout aux entreprises et aux colons ; la question de savoir si les colonies ont été globalement rentables pour l’État français fait débat entre historiens économistes.</li></ul>",
            },
            {
              title: "Réalisations et limites",
              body:
                "<p>La colonisation a aussi construit des <b>routes</b>, des <b>ports</b>, des <b>chemins de fer</b>, des <b>écoles</b>, des <b>hôpitaux</b>, et mené des campagnes de vaccination.</p><p>Les historiens soulignent cependant que ces équipements :</p><ul><li>servaient d’abord l’économie coloniale et les colons ;</li><li>restaient très inégalement accessibles : au moment des indépendances, la grande majorité des enfants colonisés n’était pas scolarisée dans de nombreuses colonies ;</li><li>ont souvent été construits grâce au travail forcé.</li></ul><p>Le poids relatif de ces réalisations et de ces violences est au cœur des débats de mémoire (séance 8).</p>",
            },
            {
              title: "Montrer l’empire",
              body:
                "<ul><li>La propagande présente l’empire comme une œuvre glorieuse : manuels scolaires, affiches, cartes avec les colonies en rose.</li><li>L’<b>Exposition coloniale</b> de <b>1931</b>, au bois de Vincennes, attire environ 8 millions de visiteurs.</li><li>Des « <b>zoos humains</b> » exhibent des personnes venues des colonies dans des villages reconstitués, comme des curiosités, jusque dans les années 1930.</li></ul><p>À la même époque, des voix s’élèvent contre le système colonial : surréalistes, une partie de la gauche, et surtout les intellectuels colonisés eux-mêmes.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Réalité du système colonial",
          instruction: "Classe chaque élément : outil de domination ou réalisation matérielle.",
          categories: ["Outil de domination ou d’inégalité", "Réalisation matérielle"],
          items: [
            { text: "Le code de l’indigénat", cat: 0, why: "Punitions sans jugement pour les seuls colonisés." },
            { text: "Le port de Dakar", cat: 1, why: "Infrastructure, d’abord au service de l’économie coloniale." },
            { text: "Le travail forcé sur les chantiers", cat: 0, why: "Contrainte imposée aux colonisés." },
            { text: "Des campagnes de vaccination", cat: 1, why: "Réalisation sanitaire, à l’accès inégal." },
            { text: "La distinction entre citoyens et sujets", cat: 0, why: "Inégalité juridique." },
            { text: "Une ligne de chemin de fer vers la côte", cat: 1, why: "Infrastructure tournée vers l’exportation." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Citoyens et sujets", back: "Dans l’empire français, les colonisés étaient en majorité des « sujets » aux droits limités." },
            { front: "Code de l’indigénat", back: "Régime de sanctions sans jugement pour les colonisés, de 1881 à 1946." },
            { front: "Congo-Océan (1921-1934)", back: "Chemin de fer construit au prix de milliers de morts parmi les travailleurs forcés." },
            { front: "État indépendant du Congo (1885-1908)", back: "Propriété de Léopold II : exploitation du caoutchouc et violences de masse." },
            { front: "Loi Houphouët-Boigny (1946)", back: "Abolition du travail forcé dans les colonies françaises." },
            { front: "Exposition coloniale de 1931", back: "Vitrine de l’empire à Vincennes, environ 8 millions de visiteurs." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Que permettait le code de l’indigénat ?", options: ["Donner le droit de vote aux colonisés", "Punir les colonisés sans jugement pour des infractions spécifiques", "Protéger les terres des colonisés"], answer: 1, explain: "Il illustre l’inégalité juridique du système colonial." },
            { q: "À qui appartenait l’État indépendant du Congo entre 1885 et 1908 ?", options: ["À la France", "Personnellement au roi des Belges Léopold II", "Au Royaume-Uni"], answer: 1, explain: "La Belgique le reprend en 1908 après un scandale international." },
            { q: "Quand le travail forcé est-il aboli dans les colonies françaises ?", options: ["1848", "1946", "1962"], answer: 1, explain: "Loi Houphouët-Boigny du 11 avril 1946." },
            { q: "Les infrastructures coloniales (routes, ports, chemins de fer)…", options: ["étaient conçues d’abord pour les besoins des populations locales", "servaient d’abord l’économie coloniale, même si elles ont été utilisées ensuite", "n’ont jamais existé"], answer: 1, explain: "Elles reliaient souvent les zones de production aux ports d’exportation." },
          ],
        },
        {
          type: "case",
          title: "Une école, pour qui ?",
          story:
            "Dans une colonie d’Afrique de l’Ouest, une école a été construite en 1930. Les manuels y parlent de « nos ancêtres les Gaulois ». Au moment de l’indépendance, une petite minorité d’enfants de la colonie a été scolarisée.",
          question: "Comment un historien analyse-t-il cette école ?",
          options: [
            "Comme la preuve que la colonisation a scolarisé toute la population",
            "Comme une réalisation réelle mais très limitée, qui formait surtout une petite élite et diffusait la culture de la métropole plus que celle des colonisés",
            "Comme une invention de propagande qui n’a jamais existé",
          ],
          answer: 1,
          explain:
            "Il faut tenir les deux bouts : l’école a existé et a formé des élites (dont beaucoup de futurs dirigeants des indépendances), mais elle n’a touché qu’une minorité et s’accompagnait d’une hiérarchie des cultures.",
        },
        {
          type: "fiche",
          title: "Le système colonial",
          points: [
            "<b>Inégalité juridique</b> : citoyens et <b>sujets</b> ; <b>code de l’indigénat</b> (1881-1946).",
            "<b>Travail forcé</b> (Congo-Océan) ; violences de masse au <b>Congo de Léopold II</b> ; abolition en 1946 (loi Houphouët-Boigny).",
            "Économie tournée vers la <b>métropole</b> : cultures d’exportation, terres aux colons.",
            "Réalisations (routes, ports, écoles, hôpitaux) mais au service de l’économie coloniale et à l’accès très inégal.",
            "Propagande : <b>Exposition coloniale de 1931</b>, « zoos humains ».",
          ],
          retenir: "Le système colonial reposait sur une inégalité de droits entre colons et colonisés.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Guerres mondiales et éveil des nationalismes",
      minutes: 17,
      objectives: ["Comprendre le rôle des colonies dans les deux guerres mondiales", "Comprendre la montée des mouvements d’indépendance"],
      steps: [
        {
          type: "lesson",
          title: "Les colonies dans la tourmente",
          slides: [
            {
              title: "Les soldats des colonies",
              body:
                "<ul><li>Pendant la <b>Première Guerre mondiale</b>, la France mobilise plusieurs centaines de milliers de soldats venus de ses colonies : tirailleurs « sénégalais » (en réalité de toute l’Afrique subsaharienne), maghrébins, malgaches, indochinois. Des travailleurs coloniaux remplacent aussi les ouvriers partis au front.</li><li>Pendant la <b>Seconde Guerre mondiale</b>, l’empire est essentiel à la France libre. L’armée qui débarque en Provence en août 1944 compte une large part de soldats venus d’Afrique du Nord et d’Afrique subsaharienne.</li></ul><p>Ces soldats espéraient souvent que leur engagement serait reconnu par plus de droits. La déception sera forte.</p>",
            },
            {
              title: "Des répressions sanglantes",
              body:
                "<ul><li><b>Thiaroye</b> (Sénégal), <b>1er décembre 1944</b> : des tirailleurs rapatriés qui réclament le paiement de leurs soldes sont tués par l’armée française. Le bilan officiel de l’époque était de 35 morts ; des historiens estiment qu’il était plus élevé. En 2024, la France a reconnu un « massacre ».</li><li><b>Sétif et Guelma</b> (Algérie), à partir du <b>8 mai 1945</b> : des manifestations nationalistes tournent à l’émeute, des Européens sont tués, puis la répression fait des milliers de morts algériens. Les bilans divergent fortement selon les sources : de 1 500 environ selon les autorités françaises de l’époque à plusieurs dizaines de milliers selon les autorités algériennes ; beaucoup d’historiens évoquent plusieurs milliers de morts.</li><li><b>Madagascar</b>, <b>1947</b> : une insurrection est réprimée pendant près de deux ans ; les bilans avancés vont d’environ 11 000 à près de 90 000 morts, beaucoup victimes de la faim et des maladies dans les zones de fuite.</li></ul>",
            },
            {
              title: "Les idées d’indépendance",
              body:
                "<ul><li>En <b>1918</b>, le président américain Wilson défend le « <b>droit des peuples à disposer d’eux-mêmes</b> » (pour l’Europe), une idée que les colonisés reprennent à leur compte.</li><li>En Inde, <b>Gandhi</b> mène une lutte <b>non violente</b> contre la domination britannique ; la « <b>marche du sel</b> » de 1930 devient un symbole mondial.</li><li>Des élites formées dans les écoles et universités européennes (Hô Chi Minh, Habib Bourguiba, Léopold Sédar Senghor, Messali Hadj…) réclament l’égalité puis l’indépendance.</li><li>Le courant de la <b>négritude</b> (Aimé Césaire, Senghor) revendique la fierté des cultures noires.</li></ul>",
            },
            {
              title: "Un monde qui change après 1945",
              body:
                "<ul><li>Les puissances coloniales européennes sortent affaiblies de la guerre.</li><li>Les deux nouvelles superpuissances, les <b>États-Unis</b> et l’<b>URSS</b>, sont chacune hostiles, pour des raisons différentes, aux empires coloniaux européens.</li><li>La <b>Charte des Nations unies</b> (1945) affirme le principe du droit des peuples à disposer d’eux-mêmes.</li><li>Le <b>2 septembre 1945</b>, Hô Chi Minh proclame l’indépendance du Vietnam.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Tirailleurs « sénégalais »", back: "Soldats d’Afrique subsaharienne de l’armée française, pas seulement du Sénégal." },
            { front: "Thiaroye (1er décembre 1944)", back: "Tirailleurs tués par l’armée française alors qu’ils réclamaient leurs soldes ; « massacre » reconnu par la France en 2024." },
            { front: "Sétif et Guelma (mai 1945)", back: "Émeutes puis répression sanglante en Algérie ; bilans très divergents selon les sources." },
            { front: "Gandhi et la marche du sel (1930)", back: "Résistance non violente à la domination britannique en Inde." },
            { front: "Négritude", back: "Mouvement littéraire et politique (Césaire, Senghor) revendiquant la fierté des cultures noires." },
            { front: "Charte des Nations unies (1945)", back: "Affirme le droit des peuples à disposer d’eux-mêmes." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Les tirailleurs dits « sénégalais » venaient…", options: ["uniquement du Sénégal", "de toute l’Afrique subsaharienne colonisée par la France", "d’Indochine"], answer: 1, explain: "Le nom vient du premier corps créé au Sénégal en 1857." },
            { q: "Quelle stratégie Gandhi utilise-t-il contre la domination britannique ?", options: ["La guérilla armée", "La non-violence et la désobéissance civile", "L’alliance avec l’Allemagne"], answer: 1, explain: "La marche du sel de 1930 en est le symbole." },
            { q: "Pourquoi les bilans de Sétif (1945) sont-ils présentés sous forme de fourchette ?", options: ["Parce qu’il n’y a eu aucune victime", "Parce que les sources (autorités françaises, autorités algériennes, historiens) divergent fortement", "Parce que l’événement est inventé"], answer: 1, explain: "C’est le cas de nombreux bilans de violences coloniales." },
            { q: "Pourquoi l’après-1945 est-il favorable aux indépendances ?", options: ["Les empires sont plus forts que jamais", "Les métropoles sont affaiblies, les superpuissances et l’ONU défendent le droit des peuples", "Les colonies le refusent"], answer: 1, explain: "Le contexte international bascule." },
          ],
        },
        {
          type: "case",
          title: "Le retour du tirailleur",
          story:
            "Amadou a combattu en France de 1943 à 1945, de la Provence jusqu’aux Vosges. Rentré au Sénégal, il découvre qu’il reste un « sujet » sans droit de vote, que sa pension est plus faible que celle d’un ancien combattant français, et que ses camarades de Thiaroye ont été tués pour avoir réclamé leur solde.",
          question: "Quel effet ce type d’expérience a-t-il eu sur l’histoire coloniale ?",
          options: [
            "Aucun effet",
            "Elle a nourri un sentiment d’injustice et renforcé les revendications d’égalité puis d’indépendance",
            "Elle a renforcé l’adhésion de tous au système colonial",
          ],
          answer: 1,
          explain:
            "L’écart entre le sacrifice consenti et l’absence d’égalité a joué un rôle majeur dans la montée des nationalismes. L’inégalité des pensions des anciens combattants coloniaux n’a été progressivement corrigée qu’à partir des années 2000.",
        },
        {
          type: "fiche",
          title: "Guerres mondiales et nationalismes",
          points: [
            "Des centaines de milliers de soldats coloniaux dans les deux guerres ; rôle clé de l’empire pour la France libre.",
            "Répressions : <b>Thiaroye (1944)</b>, <b>Sétif et Guelma (1945)</b>, <b>Madagascar (1947)</b> ; bilans débattus.",
            "Idées : droit des peuples (Wilson, 1918 ; ONU, 1945), <b>Gandhi</b> et la non-violence, <b>négritude</b>.",
            "Après 1945 : métropoles affaiblies, États-Unis et URSS hostiles aux empires ; indépendance du Vietnam proclamée (2 septembre 1945).",
          ],
          retenir: "Les colonisés qui ont combattu pour la liberté de l’Europe ont réclamé la leur.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Les décolonisations (1945-1975)",
      minutes: 19,
      objectives: ["Connaître les grandes étapes des décolonisations en Asie et en Afrique", "Distinguer décolonisations négociées et guerres d’indépendance"],
      steps: [
        {
          type: "lesson",
          title: "Les indépendances",
          slides: [
            {
              title: "L’Asie d’abord",
              body:
                "<ul><li><b>1947</b> : l’Inde britannique devient indépendante, mais est divisée entre l’<b>Inde</b> et le <b>Pakistan</b> (la <b>Partition</b>). Les violences entre communautés font, selon les estimations, de quelques centaines de milliers à deux millions de morts, et plus de 10 millions de personnes sont déplacées.</li><li><b>1949</b> : l’<b>Indonésie</b> obtient son indépendance après une guerre contre les Pays-Bas.</li><li><b>1954</b> : après la défaite de <b>Diên Biên Phu</b>, la France quitte l’<b>Indochine</b> (Vietnam, Laos, Cambodge).</li></ul>",
            },
            {
              title: "Bandung et le tiers-monde",
              body:
                "<p>En <b>1955</b>, la conférence de <b>Bandung</b> (Indonésie) réunit 29 pays d’Asie et d’Afrique, la plupart nouvellement indépendants. Ils condamnent le colonialisme sous toutes ses formes.</p><p>C’est la naissance politique du « <b>tiers-monde</b> », puis du mouvement des <b>non-alignés</b>, qui refusent de choisir entre les États-Unis et l’URSS en pleine guerre froide.</p>",
            },
            {
              title: "L’Afrique devient indépendante",
              body:
                "<ul><li><b>1956</b> : indépendance du <b>Maroc</b> et de la <b>Tunisie</b>.</li><li><b>1957</b> : le <b>Ghana</b> (Kwame Nkrumah) est la première colonie d’Afrique subsaharienne à devenir indépendante.</li><li><b>1958</b> : la <b>Guinée</b> de Sékou Touré vote « non » à la Communauté proposée par de Gaulle et devient immédiatement indépendante ; la France rompt brutalement son aide.</li><li><b>1960</b> : « <b>l’année de l’Afrique</b> » : 17 pays africains deviennent indépendants, dont la plupart des colonies françaises et le <b>Congo belge</b>, où le Premier ministre <b>Patrice Lumumba</b> est assassiné en 1961.</li><li><b>1962</b> : indépendance de l’<b>Algérie</b>, après huit ans de guerre (voir le cours sur la France au XXe siècle).</li></ul>",
            },
            {
              title: "Négociées ou arrachées",
              body:
                "<table class='t'><tr><th>Type</th><th>Exemples</th></tr><tr><td><b>Indépendance largement négociée</b></td><td>Ghana, Sénégal, Côte d’Ivoire, la plupart des colonies françaises d’Afrique subsaharienne</td></tr><tr><td><b>Guerre d’indépendance</b></td><td>Indonésie, Indochine, Algérie, Kenya (révolte des Mau Mau, 1952-1960), colonies portugaises</td></tr></table><p>Les colonies <b>portugaises</b> (Angola, Mozambique, Guinée-Bissau) ne deviennent indépendantes qu’en <b>1974-1975</b>, après la révolution des Œillets à Lisbonne. Le Zimbabwe suit en 1980, la Namibie en 1990.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle décennie ?",
          instruction: "Classe chaque indépendance selon sa période.",
          categories: ["1945-1955", "1956-1962", "Après 1962"],
          items: [
            { text: "Inde et Pakistan", cat: 0, why: "1947." },
            { text: "Algérie", cat: 1, why: "1962." },
            { text: "Angola et Mozambique", cat: 2, why: "1975, après la révolution des Œillets." },
            { text: "Ghana", cat: 1, why: "1957." },
            { text: "Indonésie", cat: 0, why: "1949." },
            { text: "Sénégal, Mali, Côte d’Ivoire, Madagascar", cat: 1, why: "1960." },
            { text: "Zimbabwe", cat: 2, why: "1980." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Partition de l’Inde (1947)", back: "Indépendance et division Inde-Pakistan ; violences massives et plus de 10 millions de déplacés." },
            { front: "Conférence de Bandung (1955)", back: "29 pays d’Asie et d’Afrique condamnent le colonialisme ; naissance du tiers-monde." },
            { front: "Ghana (1957)", back: "Première colonie d’Afrique subsaharienne indépendante (Kwame Nkrumah)." },
            { front: "Guinée (1958)", back: "Vote « non » à la Communauté de De Gaulle et indépendance immédiate." },
            { front: "1960, l’année de l’Afrique", back: "17 pays africains deviennent indépendants." },
            { front: "Révolution des Œillets (1974)", back: "Chute de la dictature au Portugal, suivie de l’indépendance de ses colonies africaines." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel pays devient indépendant en 1947 et se divise aussitôt en deux États ?", options: ["L’Indochine", "L’Inde britannique (Inde et Pakistan)", "L’Algérie"], answer: 1, explain: "La Partition s’accompagne de violences massives." },
            { q: "Combien de pays africains deviennent indépendants en 1960 ?", options: ["3", "17", "50"], answer: 1, explain: "D’où le surnom d’« année de l’Afrique »." },
            { q: "Pourquoi les colonies portugaises deviennent-elles indépendantes si tard ?", options: ["Elles ne le voulaient pas", "La dictature portugaise refusait la décolonisation jusqu’à sa chute en 1974", "Elles étaient trop petites"], answer: 1, explain: "Des guerres de libération y duraient depuis les années 1960." },
            { q: "Que réunit la conférence de Bandung en 1955 ?", options: ["Les puissances coloniales", "Des pays d’Asie et d’Afrique nouvellement indépendants", "L’OTAN"], answer: 1, explain: "Ils condamnent le colonialisme et affirment leur place dans le monde." },
          ],
        },
        {
          type: "case",
          title: "Deux chemins vers l’indépendance",
          story:
            "Le Sénégal devient indépendant en 1960 après des négociations, avec Léopold Sédar Senghor comme premier président. L’Algérie devient indépendante en 1962 après huit ans de guerre. Un étudiant demande pourquoi les deux chemins ont été si différents.",
          question: "Quel facteur explique le mieux cette différence ?",
          options: [
            "Le Sénégal n’était pas une colonie",
            "L’Algérie était une colonie de peuplement d’environ un million d’Européens, considérée comme partie intégrante de la France, ce qui rendait l’indépendance beaucoup plus conflictuelle",
            "La France ne connaissait pas l’existence du Sénégal",
          ],
          answer: 1,
          explain:
            "Là où vivaient de nombreux colons et où la puissance coloniale considérait le territoire comme le sien (Algérie, Kenya, colonies portugaises, Rhodésie), la décolonisation a souvent pris la forme d’une guerre.",
        },
        {
          type: "fiche",
          title: "Les décolonisations",
          points: [
            "Asie : <b>Inde et Pakistan (1947)</b>, <b>Indonésie (1949)</b>, <b>Indochine (1954)</b>.",
            "<b>Bandung (1955)</b> : naissance du tiers-monde et des non-alignés.",
            "Afrique : Maroc et Tunisie (1956), <b>Ghana (1957)</b>, <b>Guinée (1958)</b>, <b>1960</b> (17 pays), <b>Algérie (1962)</b>.",
            "Indépendances <b>négociées</b> ou <b>guerres</b> (Indochine, Algérie, Kenya, colonies portugaises).",
            "Dernières vagues : colonies portugaises (1974-1975), Zimbabwe (1980), Namibie (1990).",
          ],
          retenir: "Plus il y avait de colons, plus la décolonisation a été violente.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Après les indépendances : héritages",
      minutes: 18,
      objectives: ["Comprendre les héritages politiques et économiques de la colonisation", "Connaître la situation des territoires d’outre-mer et les liens actuels"],
      steps: [
        {
          type: "lesson",
          title: "Les héritages",
          slides: [
            {
              title: "Des frontières et des États hérités",
              body:
                "<ul><li>En <b>1963-1964</b>, l’Organisation de l’unité africaine décide de conserver les <b>frontières héritées</b> de la colonisation, pour éviter des guerres en chaîne.</li><li>Beaucoup d’États doivent construire une nation à partir de peuples très divers, avec la langue de l’ancienne puissance comme langue officielle.</li><li>Plusieurs pays connaissent des coups d’État, des régimes autoritaires et des guerres civiles ; les historiens débattent du poids de l’héritage colonial par rapport aux choix faits après les indépendances.</li></ul>",
            },
            {
              title: "La « Françafrique » et le franc CFA",
              body:
                "<ul><li>Après 1960, la France garde des liens étroits avec ses anciennes colonies d’Afrique : accords de défense, bases militaires, aide, réseaux politiques. Ses critiques appellent ce système la « <b>Françafrique</b> » ; ses défenseurs y voient une coopération et une stabilité.</li><li>Le <b>franc CFA</b>, créé en 1945, est toujours utilisé par 14 pays d’Afrique de l’Ouest et centrale, avec une parité fixe avec l’euro garantie par la France.</li><li>Une réforme décidée en 2019-2020 pour l’Afrique de l’Ouest a mis fin au dépôt de la moitié des réserves en France et au siège français dans les instances. Le projet de monnaie commune ouest-africaine, l’<b>eco</b>, est annoncé pour 2027 mais reste incertain.</li><li>Entre 2022 et 2025, l’armée française a quitté le Mali, le Burkina Faso, le Niger, puis le Tchad et le Sénégal, sur fond de forte contestation de son rôle dans une partie de l’opinion africaine.</li></ul>",
            },
            {
              title: "Les outre-mer français",
              body:
                "<ul><li>Certaines anciennes colonies sont restées françaises : la <b>Guadeloupe</b>, la <b>Martinique</b>, la <b>Guyane</b> et <b>La Réunion</b> sont devenues des <b>départements</b> dès <b>1946</b> ; <b>Mayotte</b> en <b>2011</b>.</li><li>Leurs habitants sont des citoyens français à part entière. Des écarts importants subsistent cependant avec la métropole (chômage, prix, services publics), à l’origine de mouvements sociaux réguliers.</li><li>D’autres territoires ont un statut particulier : Polynésie française, Wallis-et-Futuna, et la <b>Nouvelle-Calédonie</b>.</li></ul>",
            },
            {
              title: "Le cas de la Nouvelle-Calédonie",
              body:
                "<ul><li>Après les violences des années 1980, les accords de <b>Matignon</b> (<b>1988</b>) puis de <b>Nouméa</b> (<b>1998</b>) organisent un processus de décolonisation progressif.</li><li>Trois référendums (2018, 2020, 2021) aboutissent au maintien dans la France ; le dernier est boycotté par les indépendantistes.</li><li>En <b>mai 2024</b>, des émeutes meurtrières éclatent autour de l’élargissement du corps électoral.</li><li>L’<b>accord de Bougival</b> (juillet 2025), qui prévoyait un « État de la Nouvelle-Calédonie » au sein de la France, n’a pas abouti.</li><li>Aux élections provinciales du <b>28 juin 2026</b>, les indépendantistes obtiennent 26 sièges sur 54 au Congrès, les non-indépendantistes 24 et un parti centriste 4. L’avenir institutionnel reste ouvert.</li></ul>",
            },
            {
              title: "Migrations et langues",
              body:
                "<ul><li>Les liens créés par la colonisation orientent les <b>migrations</b> : beaucoup d’immigrés en France viennent d’anciennes colonies (Maghreb, Afrique subsaharienne), comme au Royaume-Uni (Inde, Pakistan, Caraïbes).</li><li>Le <b>français</b> est aujourd’hui parlé par plus de 300 millions de personnes, dont une majorité en Afrique : c’est le continent qui fera l’avenir de la langue.</li><li>L’<b>Organisation internationale de la Francophonie</b> réunit des dizaines d’États et de gouvernements.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Intangibilité des frontières", back: "Principe adopté par les États africains en 1964 : conserver les frontières héritées." },
            { front: "Françafrique", back: "Terme désignant les liens étroits, souvent critiqués, entre la France et ses anciennes colonies africaines." },
            { front: "Franc CFA", back: "Monnaie de 14 pays africains, créée en 1945, à parité fixe avec l’euro ; réformée en 2019-2020 en Afrique de l’Ouest." },
            { front: "Départements d’outre-mer", back: "Guadeloupe, Martinique, Guyane, La Réunion (1946) et Mayotte (2011)." },
            { front: "Accord de Nouméa (1998)", back: "Organise la décolonisation progressive de la Nouvelle-Calédonie et trois référendums." },
            { front: "Francophonie", back: "Plus de 300 millions de locuteurs, majoritairement en Afrique." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi les États africains ont-ils conservé les frontières coloniales ?", options: ["Ils les trouvaient parfaites", "Pour éviter une multiplication de guerres territoriales", "Parce que l’ONU l’imposait"], answer: 1, explain: "Remettre en cause une frontière aurait ouvert la porte à toutes les autres." },
            { q: "Les habitants de la Guadeloupe et de la Martinique sont…", options: ["des citoyens français à part entière", "des sujets coloniaux", "des étrangers"], answer: 0, explain: "Ce sont des départements depuis 1946." },
            { q: "Qu’a changé la réforme du franc CFA en Afrique de l’Ouest décidée en 2019-2020 ?", options: ["Elle a supprimé la parité avec l’euro", "Elle a mis fin au dépôt de la moitié des réserves en France et au siège français dans les instances", "Elle a remplacé immédiatement le franc CFA par l’eco"], answer: 1, explain: "La parité fixe avec l’euro, elle, a été maintenue." },
            { q: "Où vit aujourd’hui la majorité des francophones ?", options: ["En France", "En Afrique", "Au Canada"], answer: 1, explain: "La croissance démographique africaine fait de l’Afrique le cœur de la francophonie." },
          ],
        },
        {
          type: "case",
          title: "Le débat sur le franc CFA",
          story:
            "Deux économistes africains s’opposent à la radio. Le premier défend le franc CFA : stabilité de la monnaie, inflation faible, confiance des investisseurs. Le second le critique : symbole de dépendance envers l’ancienne puissance coloniale, monnaie trop forte pour les exportations, politique monétaire décidée en fonction de l’euro.",
          question: "Quelle présentation de ce débat est la plus juste ?",
          options: [
            "L’un des deux a forcément tort, la question est purement technique",
            "Le débat mêle des arguments économiques (stabilité contre flexibilité) et des enjeux de souveraineté et de mémoire ; les deux positions s’appuient sur des éléments réels",
            "Le franc CFA n’existe plus depuis 1960",
          ],
          answer: 1,
          explain:
            "C’est un bon exemple d’héritage colonial encore discuté : les arguments économiques des deux camps sont sérieux, et la dimension symbolique compte autant que les chiffres.",
        },
        {
          type: "fiche",
          title: "Les héritages",
          points: [
            "<b>Frontières héritées</b> conservées (1964) ; construction nationale difficile.",
            "<b>Françafrique</b> : liens étroits et contestés ; retrait militaire du Sahel et d’Afrique de l’Ouest entre 2022 et 2025.",
            "<b>Franc CFA</b> : 14 pays, parité avec l’euro ; réforme 2019-2020 ; projet <b>eco</b> annoncé pour 2027.",
            "<b>Outre-mer</b> : départements (1946, Mayotte 2011) ; <b>Nouvelle-Calédonie</b> : Matignon, Nouméa, Bougival, provinciales 2026.",
            "Migrations et <b>francophonie</b> (plus de 300 millions de locuteurs).",
          ],
          retenir: "Les indépendances ont mis fin aux empires, pas aux liens qu’ils avaient créés.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Mémoires et débats d’aujourd’hui",
      minutes: 17,
      objectives: ["Distinguer histoire et mémoire", "Connaître les grandes étapes et les termes du débat sur le passé colonial"],
      steps: [
        {
          type: "lesson",
          title: "Les mémoires de la colonisation",
          slides: [
            {
              title: "Histoire et mémoire",
              body:
                "<ul><li>L’<b>histoire</b> cherche à établir et comprendre les faits à partir de sources, avec une méthode critique. Elle peut être révisée quand de nouvelles sources apparaissent.</li><li>La <b>mémoire</b>, c’est la façon dont des groupes (anciens colons, anciens colonisés, soldats, descendants) se souviennent du passé, avec leurs émotions et leurs blessures.</li></ul><p>Sur la colonisation, les mémoires sont <b>multiples et parfois opposées</b> : pieds-noirs, harkis, anciens appelés, peuples colonisés, descendants d’immigrés. Le travail historique ne les efface pas, mais il fournit une base commune de faits.</p>",
            },
            {
              title: "Les étapes en France",
              body:
                "<ul><li><b>1999</b> : la France reconnaît officiellement le terme de « <b>guerre d’Algérie</b> ».</li><li><b>2001</b> : la loi Taubira reconnaît la traite et l’esclavage comme crimes contre l’humanité.</li><li><b>2005</b> : une loi demande aux programmes scolaires de reconnaître le « rôle positif » de la présence française outre-mer. Après une forte polémique chez les historiens, cette disposition est supprimée en 2006.</li><li><b>2018</b> : le président Macron reconnaît que le mathématicien <b>Maurice Audin</b> est mort en 1957 sous la torture, du fait d’un système mis en place en Algérie.</li><li><b>2021</b> : l’historien <b>Benjamin Stora</b> remet un rapport sur les mémoires de la colonisation et de la guerre d’Algérie, avec des propositions de gestes symboliques.</li><li><b>2024</b> : reconnaissance du « massacre » de Thiaroye.</li></ul>",
            },
            {
              title: "Les restitutions",
              body:
                "<p>Pendant la période coloniale, des milliers d’objets d’art et de culte ont été emportés en Europe, souvent par la force ou dans des conditions contestées.</p><ul><li>En <b>2021</b>, la France restitue au <b>Bénin</b> 26 œuvres des trésors royaux d’Abomey.</li><li>En <b>mai 2026</b>, le Parlement adopte une <b>loi-cadre</b> qui permet de restituer, sans voter une loi à chaque fois, des biens entrés dans les collections publiques entre 1815 et 1972 dans des conditions illicites, après l’avis d’un comité scientifique associant l’État demandeur.</li></ul><p>D’autres anciens pays colonisateurs suivent des démarches comparables : l’Allemagne a reconnu en 2021 le génocide des Herero et des Nama (Namibie, 1904-1908) ; le roi des Belges a exprimé ses « profonds regrets » pour le passé colonial au Congo.</p>",
            },
            {
              title: "Les termes du débat",
              body:
                "<p>Le débat public sur le passé colonial oppose notamment :</p><ul><li>ceux qui demandent une <b>reconnaissance</b> plus forte des violences et des injustices, voire des réparations, au nom de la vérité et de la dignité des victimes et de leurs descendants ;</li><li>ceux qui refusent la « <b>repentance</b> », jugent qu’il faut aussi rappeler les réalisations et le parcours de ceux qui ont vécu dans les colonies de bonne foi, et craignent que le passé divise la nation.</li></ul><p>Les historiens rappellent que certains faits ne sont pas une question d’opinion (conquêtes violentes, travail forcé, inégalité juridique, massacres documentés), tandis que les <b>jugements moraux et politiques</b> sur ce qu’il faut faire aujourd’hui relèvent du débat démocratique.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Fait établi ou jugement à débattre ?",
          instruction: "Classe chaque affirmation.",
          categories: ["Fait établi par les historiens", "Jugement ou position à débattre"],
          items: [
            { text: "Le code de l’indigénat a existé de 1881 à 1946", cat: 0, why: "Fait documenté." },
            { text: "La France devrait verser des réparations à ses anciennes colonies", cat: 1, why: "Position politique, défendue par certains, refusée par d’autres." },
            { text: "La conférence de Berlin s’est tenue sans représentant africain", cat: 0, why: "Fait documenté." },
            { text: "Il faut arrêter de parler de la colonisation pour réconcilier les Français", cat: 1, why: "Opinion sur la politique de mémoire." },
            { text: "La France a restitué 26 œuvres au Bénin en 2021", cat: 0, why: "Fait." },
            { text: "La colonisation a eu un bilan globalement positif ou négatif", cat: 1, why: "Jugement global qui dépend des critères choisis et fait débat." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Histoire et mémoire", back: "L’histoire établit les faits avec méthode ; la mémoire est le souvenir vécu des groupes." },
            { front: "Loi de 2005 et « rôle positif »", back: "Disposition demandant d’enseigner le « rôle positif » de la colonisation, supprimée en 2006 après une polémique." },
            { front: "Rapport Stora (2021)", back: "Rapport sur les mémoires de la colonisation et de la guerre d’Algérie, avec des propositions de gestes symboliques." },
            { front: "Restitution au Bénin (2021)", back: "26 œuvres des trésors royaux d’Abomey rendues par la France." },
            { front: "Loi-cadre sur les restitutions (mai 2026)", back: "Permet de restituer des biens acquis illicitement entre 1815 et 1972, sans loi au cas par cas." },
            { front: "Génocide des Herero et des Nama", back: "Commis par l’Allemagne en Namibie (1904-1908), reconnu par Berlin en 2021." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle est la différence entre histoire et mémoire ?", options: ["Aucune", "L’histoire établit les faits avec une méthode critique ; la mémoire est le souvenir vécu et parfois sélectif des groupes", "La mémoire est toujours fausse"], answer: 1, explain: "Les deux sont légitimes, mais n’ont pas le même rôle." },
            { q: "Que prévoit la loi-cadre de mai 2026 ?", options: ["L’interdiction de toute restitution", "Une procédure pour restituer des biens culturels acquis illicitement entre 1815 et 1972", "La restitution de toutes les œuvres africaines en un an"], answer: 1, explain: "Chaque demande est étudiée par un comité scientifique associant l’État demandeur." },
            { q: "Pourquoi la disposition de 2005 sur le « rôle positif » a-t-elle été supprimée ?", options: ["Par oubli", "Après une forte polémique, notamment chez les historiens, qui refusaient que la loi dicte le contenu de l’histoire enseignée", "Parce qu’elle avait été adoptée par erreur à l’étranger"], answer: 1, explain: "Le débat portait sur le rôle du législateur face aux historiens." },
            { q: "Lequel de ces énoncés est un jugement et non un fait ?", options: ["L’Algérie est devenue indépendante en 1962", "Il faut une repentance officielle de la France", "Le travail forcé a été aboli en 1946"], answer: 1, explain: "C’est une position politique, défendue par certains et refusée par d’autres." },
          ],
        },
        {
          type: "case",
          title: "Le débat en classe",
          story:
            "Dans un lycée de Caen, deux élèves s’affrontent : l’une dit « la colonisation, c’était seulement des crimes », l’autre répond « la colonisation a apporté les routes et les hôpitaux, il faut arrêter de culpabiliser ». La professeure leur demande de construire une réponse d’historien.",
          question: "Quelle réponse correspond le mieux à la démarche historique ?",
          options: [
            "Donner raison à l’une des deux pour clore le débat",
            "Établir les faits (conquêtes violentes, inégalités juridiques, travail forcé, massacres, mais aussi infrastructures, écoles et hôpitaux à l’accès limité), les situer selon les lieux et les époques, puis distinguer ces faits des jugements moraux et des choix politiques d’aujourd’hui, qui relèvent du débat",
            "Refuser d’en parler car le sujet est trop sensible",
          ],
          answer: 1,
          explain:
            "L’histoire ne choisit pas un camp à l’avance : elle établit ce qui s’est passé, dans sa complexité. Elle permet ensuite à chacun de se forger une opinion en connaissance de cause, et de comprendre pourquoi d’autres pensent différemment.",
        },
        {
          type: "fiche",
          title: "Mémoires et débats",
          points: [
            "<b>Histoire</b> (faits, méthode critique) ≠ <b>mémoire</b> (souvenirs des groupes, multiples).",
            "Étapes : « guerre d’Algérie » reconnue (1999), loi Taubira (2001), « rôle positif » supprimé (2006), Audin (2018), rapport Stora (2021), Thiaroye (2024).",
            "Restitutions : <b>Bénin (2021)</b>, <b>loi-cadre de mai 2026</b> (biens acquis entre 1815 et 1972).",
            "Ailleurs : génocide des Herero et Nama reconnu par l’Allemagne (2021), regrets belges.",
            "Débat : reconnaissance et réparations contre refus de la repentance ; les faits établis ne sont pas une opinion, les choix politiques le sont.",
          ],
          retenir: "Les faits se prouvent, les jugements se débattent : c’est la clé pour parler de la colonisation.",
        },
      ],
    },
  ],
});
