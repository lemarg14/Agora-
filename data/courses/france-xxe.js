/* ============================================================
   COURS : La France de 1900 à 2000
   Faculté d’Histoire · 8 séances de 15 à 20 minutes
   Dates de l’historiographie courante. Les sujets de mémoire
   (Vichy, guerre d’Algérie) sont traités de façon factuelle ;
   quand les bilans chiffrés sont débattus, la fourchette est donnée.
   ============================================================ */
AGORA.registerCourse({
  id: "france-xxe",
  faculty: "histoire",
  title: "La France de 1900 à 2000",
  subtitle: "Deux guerres mondiales, quatre régimes, un pays transformé",
  color: "#8a6a2f",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre le siècle qui a fait la France d’aujourd’hui : la Belle Époque, les deux guerres mondiales, Vichy et la Résistance, la reconstruction et la Sécurité sociale, de Gaulle et la Ve République, la guerre d’Algérie, les Trente Glorieuses, Mai 68, puis les années Giscard, Mitterrand et Chirac jusqu’à l’euro.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "La Belle Époque et la République (1900-1914)",
      minutes: 17,
      objectives: ["Comprendre la France républicaine du début du siècle", "Connaître les grandes lois et fractures de l’époque"],
      steps: [
        {
          type: "lesson",
          title: "La Belle Époque",
          slides: [
            {
              title: "La France en 1900",
              body:
                "<p>En 1900, Paris accueille l’<b>Exposition universelle</b> et inaugure sa première ligne de <b>métro</b>. La France est une grande puissance, avec le deuxième empire colonial du monde après celui du Royaume-Uni.</p><ul><li>Environ <b>40 millions</b> d’habitants.</li><li>Un pays encore très <b>rural</b> : environ 4 actifs sur 10 travaillent dans l’agriculture.</li><li>L’électricité, l’automobile, le cinéma (inventé par les frères Lumière en 1895) et l’aviation commencent à changer la vie.</li></ul><p>Le nom de « <b>Belle Époque</b> » a été donné après coup, par nostalgie, une fois la guerre de 1914 passée. Pour beaucoup d’ouvriers et de paysans, la vie restait dure.</p>",
            },
            {
              title: "La IIIe République s’enracine",
              body:
                "<p>La <b>IIIe République</b> est née en 1870, après la défaite contre la Prusse. En 1900, elle est solidement installée.</p><ul><li>Les <b>lois Jules Ferry</b> (1881-1882) ont rendu l’école primaire <b>gratuite</b>, <b>obligatoire</b> et <b>laïque</b>. L’instituteur devient une figure de la République dans chaque village.</li><li>Le suffrage universel masculin s’exerce ; les femmes, elles, n’ont pas encore le droit de vote.</li><li>Les libertés de la presse, de réunion, d’association (loi de 1901) et syndicales sont garanties.</li></ul>",
            },
            {
              title: "L’affaire Dreyfus",
              body:
                "<p>En 1894, le capitaine <b>Alfred Dreyfus</b>, officier juif, est condamné à tort pour espionnage au profit de l’Allemagne et déporté au bagne.</p><ul><li>En 1898, l’écrivain <b>Émile Zola</b> publie « <b>J’accuse… !</b> » pour dénoncer l’injustice.</li><li>La France se déchire entre <b>dreyfusards</b> (défenseurs de la justice et des droits individuels) et <b>antidreyfusards</b> (au nom de l’honneur de l’armée, souvent avec un antisémitisme virulent).</li><li>Dreyfus est réhabilité en <b>1906</b>.</li></ul><p>L’affaire marque la naissance des « intellectuels » engagés et de la Ligue des droits de l’homme (1898).</p>",
            },
            {
              title: "1905 : la séparation des Églises et de l’État",
              body:
                "<p>La loi du <b>9 décembre 1905</b> organise la <b>laïcité</b> :</p><ul><li>la République garantit la <b>liberté de conscience</b> et le libre exercice des cultes ;</li><li>elle ne reconnaît, ne salarie ni ne subventionne aucun culte.</li></ul><p>La loi provoque de fortes tensions avec l’Église catholique à l’époque. Elle reste aujourd’hui un pilier de l’identité républicaine. L’Alsace-Moselle, allemande en 1905, a conservé un régime particulier.</p>",
              article: { ref: "Loi du 9 décembre 1905, art. 1er", text: "La République assure la liberté de conscience. Elle garantit le libre exercice des cultes sous les seules restrictions édictées ci-après dans l’intérêt de l’ordre public." },
            },
            {
              title: "Une société en mouvement",
              body:
                "<ul><li>Le mouvement ouvrier s’organise : la <b>CGT</b> est fondée en 1895, la <b>SFIO</b> (parti socialiste) en 1905, avec <b>Jean Jaurès</b> comme grande figure.</li><li>Les grèves sont nombreuses ; le repos hebdomadaire devient obligatoire en 1906.</li><li>Les tensions montent en Europe : rivalités coloniales, course aux armements, alliances (la France avec la Russie et le Royaume-Uni face à l’Allemagne et l’Autriche-Hongrie).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "IIIe République", back: "Régime né en 1870, solidement installé en 1900 ; dure jusqu’en 1940." },
            { front: "Lois Ferry (1881-1882)", back: "École primaire gratuite, obligatoire et laïque." },
            { front: "Affaire Dreyfus", back: "Officier juif condamné à tort en 1894, défendu par Zola (« J’accuse… ! », 1898), réhabilité en 1906." },
            { front: "Loi du 9 décembre 1905", back: "Séparation des Églises et de l’État : liberté de conscience, aucun culte reconnu ni subventionné." },
            { front: "SFIO (1905)", back: "Parti socialiste unifié, avec Jean Jaurès." },
            { front: "Belle Époque", back: "Nom donné après 1918 aux années 1900-1914, vues avec nostalgie." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Que garantissent les lois Ferry des années 1880 ?", options: ["Le droit de vote des femmes", "Une école primaire gratuite, obligatoire et laïque", "La séparation des Églises et de l’État"], answer: 1, explain: "La laïcité de l’État ne viendra qu’en 1905." },
            { q: "Qu’a révélé l’affaire Dreyfus ?", options: ["Un consensus total en France", "Une profonde fracture entre défenseurs des droits individuels et défenseurs de l’armée, sur fond d’antisémitisme", "La victoire de l’Allemagne"], answer: 1, explain: "Elle a durablement marqué la vie politique française." },
            { q: "Selon la loi de 1905, la République…", options: ["finance les cultes officiels", "ne reconnaît, ne salarie ni ne subventionne aucun culte, et garantit la liberté de conscience", "interdit les religions"], answer: 1, explain: "La laïcité protège la liberté de croire ou de ne pas croire." },
            { q: "En 1900, les femmes pouvaient-elles voter en France ?", options: ["Oui", "Non, il faudra attendre 1944"], answer: 1, explain: "Le suffrage était universel… mais seulement masculin." },
          ],
        },
        {
          type: "case",
          title: "Le maire et le curé",
          story:
            "En 1906, dans un village normand, le maire veut savoir si la commune doit continuer à payer le salaire du curé, comme sous le régime précédent. Le conseil municipal est divisé.",
          question: "Que prévoit la loi de 1905 ?",
          options: [
            "La commune doit continuer à payer le curé",
            "La République ne salarie plus aucun culte : le traitement du curé n’est plus versé par les pouvoirs publics, mais le culte reste libre",
            "Le culte catholique est interdit",
          ],
          answer: 1,
          explain:
            "Depuis 1905, les cultes s’organisent et se financent eux-mêmes, et chacun reste libre de pratiquer. Les églises existantes restent cependant à la disposition des fidèles.",
        },
        {
          type: "fiche",
          title: "La Belle Époque (1900-1914)",
          points: [
            "1900 : Exposition universelle, métro ; 40 millions d’habitants, pays très rural, grand empire colonial.",
            "<b>IIIe République</b> (1870-1940) ; <b>lois Ferry</b> (1881-1882) : école gratuite, obligatoire, laïque.",
            "<b>Affaire Dreyfus</b> (1894-1906) : « J’accuse… ! » de Zola, fracture du pays.",
            "<b>Loi de 1905</b> : séparation des Églises et de l’État, laïcité.",
            "Mouvement ouvrier : CGT (1895), SFIO (1905), Jaurès ; tensions européennes.",
          ],
          retenir: "Le début du siècle installe l’école, la laïcité et la République dans tout le pays.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "La Grande Guerre (1914-1918)",
      minutes: 18,
      objectives: ["Connaître les grandes étapes de la Première Guerre mondiale", "Mesurer son coût humain et ses conséquences"],
      steps: [
        {
          type: "lesson",
          title: "La Première Guerre mondiale",
          slides: [
            {
              title: "L’engrenage de l’été 1914",
              body:
                "<ul><li><b>28 juin 1914</b> : l’archiduc François-Ferdinand, héritier de l’Autriche-Hongrie, est assassiné à Sarajevo.</li><li>Le jeu des alliances entraîne l’Europe dans la guerre en quelques semaines.</li><li><b>31 juillet</b> : Jean Jaurès, qui militait pour la paix, est assassiné à Paris.</li><li><b>1er août</b> : mobilisation générale en France. <b>3 août</b> : l’Allemagne déclare la guerre à la France.</li></ul><p>Les partis s’unissent dans l’<b>Union sacrée</b>. Beaucoup pensent que la guerre sera courte.</p>",
            },
            {
              title: "De la Marne aux tranchées",
              body:
                "<ul><li>L’armée allemande traverse la Belgique et menace Paris. En <b>septembre 1914</b>, la <b>bataille de la Marne</b> l’arrête ; on se souvient des « taxis de la Marne » réquisitionnés pour transporter des soldats.</li><li>Le front se fige : des centaines de kilomètres de <b>tranchées</b>, de la mer du Nord à la Suisse.</li><li>Les soldats, les « <b>poilus</b> », vivent dans la boue, le froid, sous les obus, face à des armes nouvelles : mitrailleuses, artillerie lourde, gaz de combat.</li></ul>",
            },
            {
              title: "Verdun et 1917",
              body:
                "<ul><li><b>Verdun</b> (février-décembre 1916) : l’une des plus longues et plus meurtrières batailles de l’histoire, devenue le symbole de la résistance française. Presque toute l’armée française y passe par rotation.</li><li>La même année, la bataille de la <b>Somme</b> est encore plus meurtrière, avec les Britanniques.</li><li><b>1917</b> : l’offensive du <b>Chemin des Dames</b> échoue ; des <b>mutineries</b> éclatent. Les États-Unis entrent en guerre ; la Russie, en pleine révolution, en sort.</li><li><b>Georges Clemenceau</b>, président du Conseil à partir de novembre 1917, incarne la volonté de tenir jusqu’à la victoire.</li></ul>",
            },
            {
              title: "La victoire et son prix",
              body:
                "<p>L’<b>armistice</b> est signé le <b>11 novembre 1918</b>.</p><ul><li>Environ <b>1,4 million</b> de soldats français sont morts, sans compter des millions de blessés et de « gueules cassées ». Presque chaque village a son monument aux morts.</li><li>Le nord-est du pays est dévasté.</li><li>Les femmes ont remplacé les hommes dans les usines et les champs, mais n’obtiennent pas le droit de vote.</li><li>Des soldats de l’empire colonial (tirailleurs sénégalais, maghrébins…) ont combattu et sont morts pour la France.</li></ul>",
            },
            {
              title: "Le traité de Versailles",
              body:
                "<p>Le <b>traité de Versailles</b> est signé le <b>28 juin 1919</b> avec l’Allemagne :</p><ul><li>la France récupère l’<b>Alsace-Moselle</b>, perdue en 1871 ;</li><li>l’Allemagne est désignée comme responsable de la guerre, doit payer des <b>réparations</b>, réduire son armée et perd des territoires.</li></ul><p>Beaucoup d’Allemands le vivent comme un « diktat », un traité imposé. Des historiens y voient l’un des facteurs qui ont nourri les tensions menant à la Seconde Guerre mondiale.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Dans quel ordre ?",
          instruction: "Classe chaque événement selon l’année où il se produit.",
          categories: ["1914", "1916-1917", "1918-1919"],
          items: [
            { text: "Assassinat de Jean Jaurès", cat: 0, why: "31 juillet 1914." },
            { text: "Bataille de Verdun", cat: 1, why: "Février à décembre 1916." },
            { text: "Bataille de la Marne", cat: 0, why: "Septembre 1914." },
            { text: "Mutineries après l’échec du Chemin des Dames", cat: 1, why: "Printemps 1917." },
            { text: "Armistice", cat: 2, why: "11 novembre 1918." },
            { text: "Traité de Versailles", cat: 2, why: "28 juin 1919." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "28 juin 1914", back: "Assassinat de l’archiduc François-Ferdinand à Sarajevo : début de l’engrenage." },
            { front: "Union sacrée", back: "Union des partis politiques français pendant la guerre." },
            { front: "Bataille de la Marne (septembre 1914)", back: "Arrête l’avancée allemande vers Paris ; début de la guerre de tranchées." },
            { front: "Verdun (1916)", back: "Bataille symbole de la résistance française, l’une des plus meurtrières de l’histoire." },
            { front: "11 novembre 1918", back: "Armistice ; environ 1,4 million de soldats français morts." },
            { front: "Traité de Versailles (28 juin 1919)", back: "Retour de l’Alsace-Moselle, réparations allemandes, ressenti comme un « diktat » en Allemagne." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pourquoi la guerre devient-elle une guerre de tranchées dès la fin 1914 ?", options: ["Parce que les armées l’avaient prévu", "Parce qu’après la Marne, aucune armée n’arrive à percer : le front se fige", "Parce que l’hiver empêchait de marcher"], answer: 1, explain: "La puissance de feu défensive (mitrailleuses, artillerie) bloque les offensives." },
            { q: "Combien de soldats français environ sont morts pendant la Grande Guerre ?", options: ["140 000", "1,4 million", "14 millions"], answer: 1, explain: "Environ 1,4 million, sans compter les blessés et invalides." },
            { q: "Quelle région la France récupère-t-elle en 1919 ?", options: ["La Savoie", "L’Alsace-Moselle", "La Corse"], answer: 1, explain: "Perdue en 1871 après la guerre contre la Prusse." },
            { q: "Qui incarne la volonté de tenir jusqu’à la victoire à partir de 1917 ?", options: ["Jean Jaurès", "Georges Clemenceau", "Charles de Gaulle"], answer: 1, explain: "Surnommé le « Père la Victoire »." },
          ],
        },
        {
          type: "case",
          title: "Le monument aux morts",
          story:
            "Dans presque toutes les communes de France, on trouve un monument aux morts de 1914-1918 avec une longue liste de noms, parfois plusieurs du même nom de famille. Un enfant demande pourquoi les monuments de cette guerre sont si nombreux et si chargés.",
          question: "Quelle explication est la plus juste ?",
          options: [
            "Parce que la guerre a duré plus de 20 ans",
            "Parce qu’une génération entière d’hommes a été mobilisée et qu’environ 1,4 million de soldats français sont morts, venant de toutes les communes du pays",
            "Parce que seules les grandes villes ont été touchées",
          ],
          answer: 1,
          explain:
            "La mobilisation a touché tout le pays, surtout les campagnes, qui fournissaient la majorité de l’infanterie. Ces monuments, construits dans les années 1920, témoignent d’un deuil national sans équivalent.",
        },
        {
          type: "fiche",
          title: "La Grande Guerre (1914-1918)",
          points: [
            "Engrenage : Sarajevo (28 juin 1914), assassinat de <b>Jaurès</b>, mobilisation le 1er août, <b>Union sacrée</b>.",
            "<b>Marne</b> (septembre 1914) puis guerre de <b>tranchées</b> ; les « poilus ».",
            "<b>Verdun</b> (1916), Somme, Chemin des Dames et <b>mutineries</b> (1917), <b>Clemenceau</b>.",
            "<b>Armistice du 11 novembre 1918</b> : environ <b>1,4 million</b> de soldats français morts.",
            "<b>Traité de Versailles</b> (1919) : retour de l’Alsace-Moselle, réparations, rancœur allemande.",
          ],
          retenir: "La Grande Guerre a saigné une génération et laissé derrière elle les germes de la suivante.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "L’entre-deux-guerres (1919-1939)",
      minutes: 16,
      objectives: ["Comprendre les crises des années 1930 en France", "Connaître l’œuvre du Front populaire"],
      steps: [
        {
          type: "lesson",
          title: "L’entre-deux-guerres",
          slides: [
            {
              title: "Les Années folles",
              body:
                "<p>Les années 1920 sont marquées par la volonté d’oublier la guerre : jazz, cinéma, cabarets, mode plus libre pour les femmes, développement de l’automobile et de la radio.</p><p>Mais le pays doit aussi <b>reconstruire</b> les régions dévastées, rembourser ses dettes, et la population vieillit : les pertes de la guerre et la faible natalité inquiètent.</p><p>En 1920, le congrès de <b>Tours</b> voit la scission de la gauche : naissance du Parti communiste, à côté de la SFIO.</p>",
            },
            {
              title: "La crise des années 1930",
              body:
                "<p>Le krach de Wall Street (octobre <b>1929</b>) déclenche une crise mondiale. Elle touche la France plus tard que les autres pays, à partir de 1931, mais dure plus longtemps.</p><ul><li>Chute de la production, faillites, montée du chômage.</li><li>Instabilité politique : les gouvernements se succèdent rapidement.</li><li>Scandales (affaire Stavisky) et montée des ligues d’extrême droite.</li><li>Le <b>6 février 1934</b>, une manifestation des ligues devant l’Assemblée tourne à l’émeute ; la gauche y voit une menace fasciste.</li></ul>",
            },
            {
              title: "Le Front populaire (1936)",
              body:
                "<p>Pour faire face, socialistes, communistes et radicaux s’allient dans le <b>Front populaire</b>, qui gagne les élections de mai 1936. <b>Léon Blum</b> devient président du Conseil, premier socialiste à ce poste.</p><p>Une immense vague de grèves joyeuses aboutit aux <b>accords de Matignon</b> (juin 1936) :</p><ul><li>hausse des salaires ;</li><li>reconnaissance des conventions collectives et des délégués du personnel ;</li><li><b>deux semaines de congés payés</b> ;</li><li><b>semaine de 40 heures</b>.</li></ul><p>Pour la première fois, des millions d’ouvriers partent en vacances. Le gouvernement est aussi critiqué pour ses difficultés économiques et se divise sur la guerre d’Espagne ; Blum quitte le pouvoir dès 1937.</p>",
            },
            {
              title: "Vers la guerre",
              body:
                "<ul><li>En Allemagne, Hitler arrive au pouvoir en <b>1933</b>, réarme, remilitarise la Rhénanie (1936), annexe l’Autriche (mars 1938).</li><li>En septembre 1938, à <b>Munich</b>, la France et le Royaume-Uni acceptent qu’il annexe une partie de la Tchécoslovaquie, pour éviter la guerre.</li><li>Le 1er septembre 1939, l’Allemagne envahit la Pologne. Le <b>3 septembre</b>, la France et le Royaume-Uni lui déclarent la guerre.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Années folles", back: "Années 1920 : désir d’oubli, jazz, cinéma, nouvelles libertés, mais reconstruction difficile." },
            { front: "Congrès de Tours (1920)", back: "Scission de la gauche : naissance du Parti communiste à côté de la SFIO." },
            { front: "6 février 1934", back: "Émeute des ligues devant l’Assemblée nationale ; la gauche s’unit contre la menace fasciste." },
            { front: "Front populaire (1936)", back: "Alliance de gauche menée par Léon Blum." },
            { front: "Accords de Matignon (juin 1936)", back: "Hausses de salaires, conventions collectives, deux semaines de congés payés, semaine de 40 heures." },
            { front: "Accords de Munich (1938)", back: "La France et le Royaume-Uni cèdent à Hitler une partie de la Tchécoslovaquie pour éviter la guerre." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle grande conquête sociale date de 1936 ?", options: ["La Sécurité sociale", "Les congés payés", "Le SMIC"], answer: 1, explain: "Deux semaines de congés payés, avec la semaine de 40 heures." },
            { q: "Qui dirige le gouvernement du Front populaire ?", options: ["Georges Clemenceau", "Léon Blum", "Charles de Gaulle"], answer: 1, explain: "Premier socialiste président du Conseil." },
            { q: "Pourquoi la France et le Royaume-Uni signent-ils les accords de Munich en 1938 ?", options: ["Pour attaquer l’Allemagne", "Pour éviter la guerre en cédant aux exigences de Hitler", "Pour créer l’Europe"], answer: 1, explain: "Une politique d’apaisement qui n’empêchera pas la guerre un an plus tard." },
            { q: "Quand la France déclare-t-elle la guerre à l’Allemagne ?", options: ["1er septembre 1939", "3 septembre 1939", "10 mai 1940"], answer: 1, explain: "Deux jours après l’invasion de la Pologne." },
          ],
        },
        {
          type: "case",
          title: "Les premiers congés payés",
          story:
            "Été 1936. Henri, ouvrier dans une usine de Rouen, n’a jamais eu de vacances de sa vie. Grâce aux nouvelles lois, il part avec sa famille deux semaines à la mer, en train, avec un billet à tarif réduit.",
          question: "Que représente ce départ pour l’époque ?",
          options: [
            "Une habitude ancienne pour les ouvriers",
            "Une révolution sociale : pour la première fois, les salariés ont droit à des vacances payées, ce qui change leur rapport au temps libre et fait naître le tourisme de masse",
            "Une obligation imposée par l’armée",
          ],
          answer: 1,
          explain:
            "Les congés payés de 1936 restent l’un des symboles les plus forts du Front populaire. Ils passeront à trois semaines en 1956, quatre en 1969, cinq en 1982.",
        },
        {
          type: "fiche",
          title: "L’entre-deux-guerres",
          points: [
            "Années 1920 : <b>Années folles</b>, reconstruction, congrès de <b>Tours</b> (1920).",
            "Crise de <b>1929</b> en France à partir de 1931 ; instabilité, ligues, <b>6 février 1934</b>.",
            "<b>Front populaire</b> (1936, Léon Blum) : accords de <b>Matignon</b>, <b>congés payés</b>, <b>40 heures</b>.",
            "Montée de Hitler, <b>Munich</b> (1938), déclaration de guerre le <b>3 septembre 1939</b>.",
          ],
          retenir: "Entre deux guerres, la France invente les vacances mais ne parvient pas à arrêter Hitler.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Défaite, Vichy et Résistance (1939-1945)",
      minutes: 20,
      objectives: ["Comprendre la défaite de 1940 et le régime de Vichy", "Connaître la Résistance et la Libération"],
      steps: [
        {
          type: "lesson",
          title: "La Seconde Guerre mondiale",
          slides: [
            {
              title: "La défaite de 1940",
              body:
                "<ul><li>De septembre 1939 à mai 1940, c’est la « <b>drôle de guerre</b> » : peu de combats sur le front ouest.</li><li>Le <b>10 mai 1940</b>, l’Allemagne attaque. Ses blindés percent dans les Ardennes ; l’armée française s’effondre en six semaines.</li><li>Des millions de civils fuient sur les routes : c’est l’<b>exode</b>.</li><li>Le maréchal <b>Pétain</b>, héros de Verdun, devient chef du gouvernement et signe l’<b>armistice</b> le <b>22 juin 1940</b>. La France est coupée en deux : zone occupée au nord et à l’ouest, zone dite libre au sud.</li></ul>",
            },
            {
              title: "Deux voix en juin 1940",
              body:
                "<ul><li>Le <b>18 juin 1940</b>, depuis Londres, le général <b>Charles de Gaulle</b> lance un appel à la radio de la BBC : la guerre n’est pas finie, il faut continuer le combat. Il fonde la <b>France libre</b>.</li><li>Le <b>10 juillet 1940</b>, à Vichy, les parlementaires votent les <b>pleins pouvoirs</b> à Pétain. La IIIe République disparaît, remplacée par l’« <b>État français</b> », un régime autoritaire.</li></ul>",
            },
            {
              title: "Le régime de Vichy et la collaboration",
              body:
                "<p>Le régime de Vichy veut une « <b>Révolution nationale</b> » (« Travail, Famille, Patrie ») et choisit la <b>collaboration</b> avec l’Allemagne nazie (entrevue de Montoire, octobre 1940).</p><ul><li>Dès octobre 1940, il adopte de lui-même un <b>statut des Juifs</b> qui les exclut de nombreuses professions.</li><li>Il participe aux persécutions et aux arrestations : lors de la <b>rafle du Vel d’Hiv</b>, les <b>16 et 17 juillet 1942</b>, la police française arrête plus de 13 000 Juifs à Paris, dont plus de 4 000 enfants.</li><li>Au total, environ <b>75 000 Juifs</b> sont déportés de France vers les camps d’extermination ; à peine 3 % reviennent.</li><li>À partir de 1943, le Service du travail obligatoire (STO) envoie des centaines de milliers de jeunes travailler en Allemagne.</li></ul><p>Le <b>16 juillet 1995</b>, le président <b>Jacques Chirac</b> reconnaît officiellement la responsabilité de l’État français dans la déportation des Juifs.</p>",
            },
            {
              title: "La Résistance",
              body:
                "<ul><li>Des réseaux et mouvements de résistance se forment en France : renseignement, sabotages, presse clandestine, aide aux personnes pourchassées, puis maquis armés.</li><li>Des « <b>Justes</b> » cachent des Juifs au péril de leur vie.</li><li><b>Jean Moulin</b>, envoyé par de Gaulle, unifie les mouvements dans le <b>Conseil national de la Résistance</b> (CNR, mai 1943). Il est arrêté et meurt sous la torture.</li><li>Le CNR adopte en 1944 un programme qui inspirera les réformes de la Libération.</li></ul><p>La grande majorité des Français n’est ni dans la collaboration active ni dans la Résistance : elle tente de survivre aux pénuries et à l’occupation.</p>",
            },
            {
              title: "Le Débarquement et la Libération",
              body:
                "<ul><li>Le <b>6 juin 1944</b>, les Alliés débarquent en <b>Normandie</b>. La bataille de Normandie dure tout l’été ; <b>Caen</b>, en grande partie détruite par les combats et les bombardements, est libérée en juillet 1944.</li><li>Le 15 août, un second débarquement a lieu en Provence.</li><li>Paris est libéré le <b>25 août 1944</b>.</li><li>L’Allemagne capitule le <b>8 mai 1945</b>.</li></ul><p>Environ 550 000 à 600 000 Français (militaires et civils) sont morts pendant la Seconde Guerre mondiale.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Vichy ou France libre ?",
          instruction: "Associe chaque élément au camp correspondant.",
          categories: ["Régime de Vichy", "France libre et Résistance"],
          items: [
            { text: "Appel du 18 juin 1940", cat: 1, why: "Lancé par de Gaulle depuis Londres." },
            { text: "Devise « Travail, Famille, Patrie »", cat: 0, why: "Devise de l’État français." },
            { text: "Statut des Juifs d’octobre 1940", cat: 0, why: "Loi antisémite adoptée par Vichy." },
            { text: "Conseil national de la Résistance", cat: 1, why: "Unifié par Jean Moulin en 1943." },
            { text: "Entrevue de Montoire et politique de collaboration", cat: 0, why: "Pétain rencontre Hitler en octobre 1940." },
            { text: "Maquis et sabotages de voies ferrées", cat: 1, why: "Actions de la Résistance intérieure." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "22 juin 1940", back: "Armistice signé par le gouvernement Pétain ; France coupée en zones." },
            { front: "18 juin 1940", back: "Appel du général de Gaulle à continuer le combat depuis Londres." },
            { front: "10 juillet 1940", back: "Pleins pouvoirs à Pétain : fin de la IIIe République, naissance de l’« État français »." },
            { front: "Rafle du Vel d’Hiv (16-17 juillet 1942)", back: "Plus de 13 000 Juifs arrêtés à Paris par la police française." },
            { front: "Conseil national de la Résistance (1943)", back: "Unification des mouvements de résistance par Jean Moulin." },
            { front: "6 juin 1944", back: "Débarquement allié en Normandie ; Paris libéré le 25 août 1944." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Combien de temps dure la bataille de France en 1940 ?", options: ["Environ six semaines", "Deux ans", "Quatre ans"], answer: 0, explain: "Du 10 mai à l’armistice du 22 juin 1940." },
            { q: "Le statut des Juifs d’octobre 1940 a été…", options: ["imposé par l’Allemagne contre l’avis de Vichy", "adopté par le régime de Vichy lui-même", "voté par le Front populaire"], answer: 1, explain: "Vichy a mené sa propre politique antisémite." },
            { q: "Que reconnaît Jacques Chirac en 1995 ?", options: ["La victoire de 1945", "La responsabilité de l’État français dans la déportation des Juifs", "L’indépendance de l’Algérie"], answer: 1, explain: "Discours du 16 juillet 1995, au Vel d’Hiv." },
            { q: "Quelle ville normande est en grande partie détruite lors des combats de 1944 ?", options: ["Deauville", "Caen", "Cherbourg seulement"], answer: 1, explain: "Caen est libérée en juillet 1944 au prix de destructions massives." },
          ],
        },
        {
          type: "case",
          title: "Un passé qui ne passe pas",
          story:
            "Dans un débat, quelqu’un affirme : « Vichy, ce n’était pas vraiment la France ; c’est l’Allemagne qui a tout décidé. » Un autre répond que l’État français a lui-même pris des lois antisémites et que sa police a procédé à des arrestations.",
          question: "Que disent les faits établis par les historiens ?",
          options: [
            "Vichy n’a pris aucune décision propre",
            "Vichy était un régime français qui a choisi la collaboration et a mené sa propre politique antisémite ; c’est ce qu’a reconnu officiellement le président de la République en 1995",
            "La Résistance n’a jamais existé",
          ],
          answer: 1,
          explain:
            "Les historiens ont montré que Vichy a pris des initiatives propres (statut des Juifs dès octobre 1940, participation de la police aux rafles). En 1995, Jacques Chirac a reconnu la responsabilité de l’État. Cela n’enlève rien à l’action de la France libre et des résistants.",
        },
        {
          type: "fiche",
          title: "1939-1945",
          points: [
            "« Drôle de guerre », offensive du <b>10 mai 1940</b>, exode, <b>armistice du 22 juin 1940</b>.",
            "<b>Appel du 18 juin</b> (de Gaulle) ; <b>10 juillet 1940</b> : pleins pouvoirs à Pétain, État français à <b>Vichy</b>.",
            "<b>Collaboration</b>, statut des Juifs (1940), <b>Vel d’Hiv</b> (1942) : environ <b>75 000 Juifs</b> déportés de France.",
            "<b>Résistance</b> : Jean Moulin, <b>CNR</b> (1943) ; les Justes.",
            "<b>6 juin 1944</b> en Normandie, Caen libérée en juillet, Paris le <b>25 août</b> ; capitulation allemande le <b>8 mai 1945</b>.",
          ],
          retenir: "En 1940, deux France se font face : celle qui collabore et celle qui refuse.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Reconstruire : la IVe République (1944-1958)",
      minutes: 17,
      objectives: ["Connaître les grandes réformes de la Libération", "Comprendre les forces et faiblesses de la IVe République"],
      steps: [
        {
          type: "lesson",
          title: "La Libération et la IVe République",
          slides: [
            {
              title: "Les réformes de la Libération",
              body:
                "<p>Le Gouvernement provisoire dirigé par de Gaulle, avec les forces issues de la Résistance (gaullistes, communistes, socialistes, démocrates-chrétiens), transforme profondément le pays :</p><ul><li>les <b>femmes obtiennent le droit de vote</b> (ordonnance du 21 avril 1944) et votent pour la première fois en <b>avril 1945</b> ;</li><li>la <b>Sécurité sociale</b> est créée par les ordonnances d’<b>octobre 1945</b> : maladie, retraite, famille ;</li><li>de grandes <b>nationalisations</b> : Renault, les grandes banques, le charbon, l’électricité et le gaz (EDF-GDF, 1946) ;</li><li>la planification de l’économie (Commissariat au Plan, Jean Monnet).</li></ul>",
            },
            {
              title: "La IVe République",
              body:
                "<p>La Constitution de <b>1946</b> fonde la <b>IVe République</b>. Son préambule proclame de nouveaux droits : droit à l’emploi, droit de grève, droit syndical, égalité entre hommes et femmes, protection de la santé.</p><p>Mais le régime donne beaucoup de pouvoir au Parlement et les majorités sont fragiles : les gouvernements tombent souvent (plus d’une vingtaine en douze ans). De Gaulle, opposé à ces institutions, quitte le pouvoir dès janvier 1946.</p><p>Malgré cette instabilité, la reconstruction est rapide et l’économie repart, aidée par le <b>plan Marshall</b> américain (à partir de 1947-1948).</p>",
            },
            {
              title: "Les débuts de l’Europe",
              body:
                "<ul><li>Le <b>9 mai 1950</b>, le ministre <b>Robert Schuman</b> propose de mettre en commun le charbon et l’acier français et allemands, pour rendre une nouvelle guerre « matériellement impossible ».</li><li>En <b>1951</b>, six pays créent la <b>CECA</b> (Communauté européenne du charbon et de l’acier).</li><li>En <b>1957</b>, le <b>traité de Rome</b> crée la Communauté économique européenne (CEE), un marché commun.</li></ul><p>La réconciliation franco-allemande devient l’un des piliers de la politique française.</p>",
            },
            {
              title: "Les guerres coloniales",
              body:
                "<ul><li>En <b>Indochine</b>, la France affronte le mouvement indépendantiste vietnamien. La défaite de <b>Diên Biên Phu</b> (mai 1954) conduit aux accords de Genève et au retrait français.</li><li>Le <b>1er novembre 1954</b>, le Front de libération nationale (FLN) déclenche l’insurrection en <b>Algérie</b>, qui compte environ un million d’Européens et est alors considérée comme formée de départements français.</li><li>La Tunisie et le Maroc obtiennent leur indépendance en <b>1956</b>.</li></ul><p>La guerre d’Algérie s’enlise et finit par emporter la IVe République.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle période ?",
          instruction: "Associe chaque réforme ou événement à sa période.",
          categories: ["Front populaire (1936)", "Libération (1944-1946)", "Années 1950"],
          items: [
            { text: "Congés payés de deux semaines", cat: 0, why: "Accords de Matignon." },
            { text: "Création de la Sécurité sociale", cat: 1, why: "Ordonnances d’octobre 1945." },
            { text: "Droit de vote des femmes", cat: 1, why: "Ordonnance d’avril 1944, premier vote en 1945." },
            { text: "Création de la CECA", cat: 2, why: "1951." },
            { text: "Semaine de 40 heures", cat: 0, why: "Juin 1936." },
            { text: "Nationalisation de l’électricité (EDF)", cat: 1, why: "1946." },
            { text: "Traité de Rome", cat: 2, why: "1957." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Droit de vote des femmes", back: "Ordonnance du 21 avril 1944 ; premier vote en avril 1945." },
            { front: "Sécurité sociale", back: "Créée par les ordonnances d’octobre 1945 : maladie, retraite, famille." },
            { front: "IVe République (1946-1958)", back: "Régime parlementaire instable, mais période de reconstruction rapide." },
            { front: "Plan Marshall", back: "Aide économique américaine à la reconstruction de l’Europe à partir de 1947-1948." },
            { front: "Déclaration Schuman (9 mai 1950)", back: "Proposition de mettre en commun charbon et acier : naissance de la construction européenne." },
            { front: "1er novembre 1954", back: "Début de la guerre d’Algérie (insurrection du FLN)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quand les Françaises votent-elles pour la première fois ?", options: ["1919", "1945", "1968"], answer: 1, explain: "Aux élections municipales d’avril 1945, après l’ordonnance de 1944." },
            { q: "Quel est le principal point faible de la IVe République ?", options: ["L’absence de Parlement", "L’instabilité gouvernementale", "L’absence d’élections"], answer: 1, explain: "Plus d’une vingtaine de gouvernements en douze ans." },
            { q: "Pourquoi mettre en commun le charbon et l’acier en 1950-1951 ?", options: ["Pour augmenter les prix", "Pour rendre une nouvelle guerre franco-allemande matériellement impossible", "Pour fermer les mines"], answer: 1, explain: "Ces ressources étaient la base de l’industrie d’armement." },
            { q: "Quelle défaite met fin à la guerre d’Indochine ?", options: ["Verdun", "Diên Biên Phu (1954)", "Sedan (1940)"], answer: 1, explain: "Suivie des accords de Genève." },
          ],
        },
        {
          type: "case",
          title: "D’où vient ta carte Vitale ?",
          story:
            "Lina se demande pourquoi, en France, les soins sont en grande partie remboursés et pourquoi on cotise sur son salaire pour la retraite, alors que dans d’autres pays chacun doit s’assurer seul.",
          question: "Quelle origine historique peut-on lui donner ?",
          options: [
            "Ce système existe depuis Napoléon",
            "Il vient des ordonnances de 1945, à la Libération, inspirées notamment par le programme du Conseil national de la Résistance, qui créent une Sécurité sociale fondée sur des cotisations",
            "Il a été imposé par l’Union européenne",
          ],
          answer: 1,
          explain:
            "La Sécurité sociale de 1945 s’appuie sur des systèmes plus anciens (assurances sociales de 1928-1930), mais elle les généralise. Elle reste au cœur des débats d’aujourd’hui sur son financement (voir le cours de Finance d’État).",
        },
        {
          type: "fiche",
          title: "La Libération et la IVe République",
          points: [
            "Libération : <b>vote des femmes</b> (1944-1945), <b>Sécurité sociale</b> (1945), <b>nationalisations</b>, planification.",
            "<b>IVe République</b> (1946-1958) : droits sociaux, mais <b>instabilité</b> gouvernementale.",
            "Reconstruction rapide, <b>plan Marshall</b>.",
            "Europe : déclaration <b>Schuman</b> (1950), <b>CECA</b> (1951), <b>traité de Rome</b> (1957).",
            "Guerres coloniales : <b>Indochine</b> (Diên Biên Phu, 1954), début de la guerre d’<b>Algérie</b> (1er novembre 1954).",
          ],
          retenir: "De la Libération datent le vote des femmes, la Sécurité sociale et les débuts de l’Europe.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "De Gaulle, la Ve République et l’Algérie (1958-1969)",
      minutes: 19,
      objectives: ["Comprendre la naissance de la Ve République", "Connaître la guerre d’Algérie, la décolonisation et Mai 68"],
      steps: [
        {
          type: "lesson",
          title: "Les années de Gaulle",
          slides: [
            {
              title: "Mai 1958 et le retour de De Gaulle",
              body:
                "<p>En <b>mai 1958</b>, à Alger, des partisans de l’Algérie française et des militaires se soulèvent contre le gouvernement, qu’ils jugent prêt à négocier. La IVe République est paralysée.</p><p>Le général de Gaulle est rappelé au pouvoir. Il fait rédiger une nouvelle Constitution, approuvée par <b>référendum</b> le 28 septembre 1958 et promulguée le <b>4 octobre 1958</b> : c’est la <b>Ve République</b>, toujours en vigueur.</p>",
            },
            {
              title: "Les institutions de la Ve République",
              body:
                "<ul><li>Un <b>président de la République</b> aux pouvoirs renforcés : il nomme le Premier ministre, peut dissoudre l’Assemblée, recourir au référendum.</li><li>Un gouvernement plus stable face au Parlement (article 49.3, motion de censure encadrée).</li><li>En <b>1962</b>, un référendum décide que le président sera élu au <b>suffrage universel direct</b>. Première élection en décembre <b>1965</b> : de Gaulle est réélu face à François Mitterrand.</li></ul><p>Ses défenseurs y voient un régime qui a apporté la stabilité ; ses critiques dénoncent une trop forte concentration du pouvoir entre les mains du président.</p>",
            },
            {
              title: "La guerre d’Algérie (1954-1962)",
              body:
                "<ul><li>La guerre oppose l’armée française au FLN, qui réclame l’indépendance. Elle est marquée par des attentats, une répression violente, l’usage de la <b>torture</b> par l’armée française, et des violences contre les civils des deux côtés.</li><li>De Gaulle évolue vers l’autodétermination. Une partie de l’armée tente un putsch en 1961, et l’OAS (organisation favorable à l’Algérie française) multiplie les attentats.</li><li>Les <b>accords d’Évian</b> sont signés le <b>18 mars 1962</b>. L’Algérie devient indépendante le <b>5 juillet 1962</b>.</li></ul><p>Bilan : environ 25 000 à 30 000 militaires français tués ; pour les Algériens, les estimations des historiens vont généralement de 250 000 à 400 000 morts, l’État algérien avançant un chiffre bien plus élevé. Environ <b>800 000 pieds-noirs</b> quittent l’Algérie pour la France en quelques mois ; de nombreux <b>harkis</b> (Algériens ayant combattu aux côtés de la France) sont massacrés, d’autres sont accueillis dans des conditions très difficiles.</p>",
            },
            {
              title: "Décolonisation et puissance",
              body:
                "<ul><li>En <b>1960</b>, la plupart des colonies françaises d’Afrique subsaharienne deviennent indépendantes. La France y garde une forte influence politique, militaire et monétaire.</li><li>De Gaulle mène une politique d’<b>indépendance nationale</b> : arme nucléaire (premier essai en 1960), sortie du commandement intégré de l’OTAN (1966), réconciliation avec l’Allemagne (traité de l’Élysée, 1963).</li><li>Le <b>nouveau franc</b> est introduit en 1960 (1 nouveau franc = 100 anciens).</li></ul>",
            },
            {
              title: "Mai 68 et le départ de De Gaulle",
              body:
                "<ul><li>En <b>mai 1968</b>, une révolte étudiante à Paris se transforme en mouvement social géant : environ 7 à 10 millions de grévistes, le pays est paralysé.</li><li>Les <b>accords de Grenelle</b> accordent une forte hausse du salaire minimum (+35 %) et des droits syndicaux dans l’entreprise.</li><li>Aux élections de juin 1968, les gaullistes remportent une large victoire.</li><li>Mais en <b>avril 1969</b>, de Gaulle perd un référendum sur la régionalisation et le Sénat, et démissionne. Il meurt en 1970.</li></ul><p>Mai 68 reste l’objet de jugements opposés : libération des mœurs et de la parole pour les uns, début d’un déclin de l’autorité pour les autres.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "4 octobre 1958", back: "Promulgation de la Constitution de la Ve République." },
            { front: "Référendum de 1962", back: "Élection du président de la République au suffrage universel direct." },
            { front: "Accords d’Évian (18 mars 1962)", back: "Fin de la guerre d’Algérie ; indépendance le 5 juillet 1962." },
            { front: "Pieds-noirs et harkis", back: "Environ 800 000 Européens d’Algérie rapatriés en 1962 ; harkis massacrés ou accueillis dans des camps." },
            { front: "1960", back: "Indépendance de la plupart des colonies d’Afrique subsaharienne ; nouveau franc ; premier essai nucléaire." },
            { front: "Mai 1968", back: "Révolte étudiante et grève générale ; accords de Grenelle (+35 % du salaire minimum)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle crise ramène de Gaulle au pouvoir en 1958 ?", options: ["La crise de 1929", "La crise liée à la guerre d’Algérie", "Mai 68"], answer: 1, explain: "Le soulèvement d’Alger de mai 1958 paralyse la IVe République." },
            { q: "Depuis quand le président de la République est-il élu au suffrage universel direct ?", options: ["1958", "Référendum de 1962, première élection en 1965", "1981"], answer: 1, explain: "En 1958, il était élu par un collège de grands électeurs." },
            { q: "Quand l’Algérie devient-elle indépendante ?", options: ["1954", "5 juillet 1962", "1968"], answer: 1, explain: "Après les accords d’Évian du 18 mars 1962." },
            { q: "Pourquoi de Gaulle démissionne-t-il en 1969 ?", options: ["Il perd l’élection présidentielle", "Il perd un référendum", "Il est renversé par un coup d’État"], answer: 1, explain: "Il avait mis son mandat en jeu sur le référendum." },
          ],
        },
        {
          type: "case",
          title: "Deux mémoires d’une même guerre",
          story:
            "Dans une famille, le grand-père de Karim, né à Oran, a dû quitter l’Algérie en 1962 avec une valise ; celui de Yasmine a combattu pour l’indépendance. Les deux petits-enfants, amis au lycée à Caen, découvrent que leurs familles racontent cette période de façon très différente.",
          question: "Quelle attitude correspond le mieux au travail d’historien ?",
          options: [
            "Choisir quelle famille a raison",
            "Reconnaître que les mémoires sont différentes et douloureuses, et s’appuyer sur les faits établis : la colonisation, la violence de la guerre des deux côtés, la torture, l’exode des pieds-noirs, le sort des harkis, l’indépendance",
            "Éviter complètement le sujet",
          ],
          answer: 1,
          explain:
            "La guerre d’Algérie a laissé des mémoires multiples (anciens appelés, pieds-noirs, harkis, Algériens, immigrés). L’histoire ne remplace pas ces mémoires, mais elle établit les faits et permet de les comprendre ensemble. Le terme officiel de « guerre » n’a d’ailleurs été reconnu par la France qu’en 1999 ; on parlait auparavant des « événements ».",
        },
        {
          type: "fiche",
          title: "De Gaulle et la Ve République (1958-1969)",
          points: [
            "Mai 1958 : crise algérienne, retour de De Gaulle ; <b>Ve République</b> (Constitution du <b>4 octobre 1958</b>).",
            "Président renforcé, élu au <b>suffrage universel direct</b> depuis le référendum de <b>1962</b> (première élection en 1965).",
            "<b>Guerre d’Algérie</b> : torture, violences des deux côtés ; <b>accords d’Évian</b> (18 mars 1962), indépendance le <b>5 juillet 1962</b> ; pieds-noirs, harkis.",
            "<b>1960</b> : indépendances africaines, nouveau franc, arme nucléaire ; sortie du commandement de l’OTAN (1966).",
            "<b>Mai 68</b> : grève générale, accords de <b>Grenelle</b> ; départ de De Gaulle en <b>1969</b>.",
          ],
          retenir: "Les institutions de 1958 nous gouvernent toujours ; les mémoires de l’Algérie, elles, restent à vif.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Les Trente Glorieuses (1945-1975)",
      minutes: 17,
      objectives: ["Comprendre la grande transformation économique et sociale de l’après-guerre", "Connaître les nouvelles libertés des années 1960-1970"],
      steps: [
        {
          type: "lesson",
          title: "Les Trente Glorieuses",
          slides: [
            {
              title: "Une croissance exceptionnelle",
              body:
                "<p>De la fin de la guerre au milieu des années 1970, la France connaît une croissance d’environ <b>5 % par an</b> en moyenne. L’économiste Jean Fourastié appellera cette période les « <b>Trente Glorieuses</b> » (dans un livre de 1979).</p><ul><li>Plein emploi ou presque.</li><li>Hausse rapide des salaires et du niveau de vie.</li><li>Modernisation de l’industrie : automobile, nucléaire, aéronautique (Concorde, Airbus), grands équipements.</li></ul>",
            },
            {
              title: "La France change de visage",
              body:
                "<ul><li><b>Exode rural</b> : les agriculteurs, encore très nombreux en 1945, deviennent une petite minorité. Les campagnes se vident, les villes et banlieues grandissent.</li><li><b>Baby-boom</b> : forte natalité de 1946 au milieu des années 1960.</li><li>Construction massive de logements, dont les « <b>grands ensembles</b> » en banlieue.</li><li><b>Immigration de travail</b> : l’industrie et le bâtiment font venir des travailleurs d’Italie, d’Espagne, du Portugal, puis du Maghreb et d’Afrique subsaharienne.</li></ul>",
            },
            {
              title: "La société de consommation",
              body:
                "<ul><li>Les ménages s’équipent : réfrigérateur, machine à laver, télévision, voiture (la 2 CV, la 4L).</li><li>Le premier <b>hypermarché</b> de France ouvre en <b>1963</b> (Carrefour, à Sainte-Geneviève-des-Bois).</li><li>La publicité, le crédit à la consommation et les loisirs se développent ; la troisième semaine de congés payés arrive en 1956, la quatrième en 1969.</li></ul><p>Certains critiquent dès cette époque une société centrée sur la consommation ; c’est l’une des sources de la contestation de Mai 68.</p>",
            },
            {
              title: "De nouvelles libertés",
              body:
                "<ul><li><b>1965</b> : les femmes mariées peuvent travailler et ouvrir un compte en banque sans l’autorisation de leur mari.</li><li><b>1967</b> : la <b>loi Neuwirth</b> autorise la contraception.</li><li><b>1974</b> : la majorité passe de 21 à <b>18 ans</b>.</li><li><b>1975</b> : la <b>loi Veil</b> dépénalise l’interruption volontaire de grossesse, après des débats très vifs. Simone Veil, rescapée d’Auschwitz, la défend à l’Assemblée.</li><li><b>1975</b> : le divorce par consentement mutuel est créé.</li></ul>",
            },
            {
              title: "La fin des Trente Glorieuses",
              body:
                "<p>Le <b>choc pétrolier de 1973</b> (le prix du pétrole est multiplié par quatre) puis celui de 1979 frappent une économie très dépendante de l’énergie importée.</p><ul><li>La croissance ralentit nettement.</li><li>Le <b>chômage</b> de masse s’installe : il dépasse durablement le million de chômeurs à la fin des années 1970.</li><li>L’inflation reste forte.</li><li>En réponse, la France lance un grand programme <b>nucléaire</b> civil (plan Messmer, 1974).</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Avant ou après 1975 ?",
          instruction: "Classe chaque phénomène.",
          categories: ["Trente Glorieuses (1945-1975)", "Après 1975"],
          items: [
            { text: "Croissance d’environ 5 % par an", cat: 0, why: "Rythme moyen des Trente Glorieuses." },
            { text: "Chômage de masse durable", cat: 1, why: "S’installe après les chocs pétroliers." },
            { text: "Baby-boom", cat: 0, why: "De 1946 au milieu des années 1960." },
            { text: "Ouverture du premier hypermarché", cat: 0, why: "1963." },
            { text: "Deuxième choc pétrolier", cat: 1, why: "1979." },
            { text: "Exode rural massif", cat: 0, why: "Grande transformation de l’après-guerre." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Trente Glorieuses", back: "1945-1975 : croissance d’environ 5 % par an, plein emploi ; expression de Jean Fourastié (1979)." },
            { front: "Exode rural", back: "Départ massif des campagnes vers les villes pendant les Trente Glorieuses." },
            { front: "Loi Neuwirth (1967)", back: "Autorise la contraception." },
            { front: "Loi Veil (1975)", back: "Dépénalise l’interruption volontaire de grossesse." },
            { front: "Majorité à 18 ans", back: "1974 (auparavant 21 ans)." },
            { front: "Choc pétrolier de 1973", back: "Prix du pétrole multiplié par quatre : fin des Trente Glorieuses, montée du chômage." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel était le rythme moyen de croissance pendant les Trente Glorieuses ?", options: ["Environ 1 % par an", "Environ 5 % par an", "Environ 15 % par an"], answer: 1, explain: "Un rythme jamais retrouvé depuis (0,9 % en 2025)." },
            { q: "Avant 1965, une femme mariée pouvait-elle ouvrir seule un compte en banque ?", options: ["Oui", "Non, il lui fallait l’autorisation de son mari"], answer: 1, explain: "La loi de 1965 réforme les régimes matrimoniaux." },
            { q: "Quel événement met fin aux Trente Glorieuses ?", options: ["Mai 68", "Le choc pétrolier de 1973", "La chute du mur de Berlin"], answer: 1, explain: "La flambée du pétrole frappe une économie dépendante de l’énergie importée." },
            { q: "Pourquoi l’industrie française fait-elle venir des travailleurs immigrés pendant les Trente Glorieuses ?", options: ["Pour remplacer les machines", "Parce qu’elle manque de main-d’œuvre en pleine croissance", "Pour baisser la natalité"], answer: 1, explain: "Le bâtiment, l’automobile et la sidérurgie recrutent massivement." },
          ],
        },
        {
          type: "case",
          title: "Les grands-parents et les parents",
          story:
            "La grand-mère de Léo est née en 1940 dans une ferme du Calvados sans eau courante. À 25 ans, elle vit dans un appartement neuf à Caen, avec réfrigérateur, télévision et voiture. Son fils, né en 1975, entre sur le marché du travail en pleine période de chômage.",
          question: "Que racontent ces deux trajectoires ?",
          options: [
            "Rien de particulier, la vie n’a pas changé",
            "La transformation spectaculaire des Trente Glorieuses (exode rural, confort, consommation), puis le basculement vers une croissance faible et un chômage durable après 1975",
            "Que la France s’est appauvrie dès 1945",
          ],
          answer: 1,
          explain:
            "En une génération, les conditions de vie ont plus changé qu’en plusieurs siècles. Le contraste avec les décennies suivantes explique une part de la nostalgie et des débats actuels sur la croissance et le niveau de vie.",
        },
        {
          type: "fiche",
          title: "Les Trente Glorieuses",
          points: [
            "1945-1975 : croissance d’environ <b>5 % par an</b>, plein emploi, modernisation.",
            "<b>Exode rural</b>, <b>baby-boom</b>, grands ensembles, <b>immigration de travail</b>.",
            "<b>Société de consommation</b> : électroménager, voiture, premier hypermarché (1963).",
            "Libertés : femmes mariées (1965), contraception (<b>1967</b>), majorité à <b>18 ans</b> (1974), <b>loi Veil</b> (1975).",
            "Fin : <b>chocs pétroliers</b> (1973, 1979), chômage de masse, programme nucléaire.",
          ],
          retenir: "En trente ans, la France passe de la ferme à l’hypermarché, puis découvre le chômage de masse.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "De Giscard à l’euro (1974-2000)",
      minutes: 18,
      objectives: ["Connaître les grandes alternances politiques de la fin du siècle", "Comprendre l’ancrage européen et le bilan du siècle"],
      steps: [
        {
          type: "lesson",
          title: "La fin du siècle",
          slides: [
            {
              title: "Giscard d’Estaing (1974-1981)",
              body:
                "<ul><li><b>Valéry Giscard d’Estaing</b>, centriste libéral, est élu en 1974.</li><li>Réformes de société : majorité à 18 ans, loi Veil, divorce par consentement mutuel.</li><li>Mais la crise s’installe : chômage et inflation montent ; plans de rigueur de Raymond Barre.</li></ul>",
            },
            {
              title: "1981 : l’alternance",
              body:
                "<p>En <b>mai 1981</b>, <b>François Mitterrand</b> est élu : c’est la première alternance de la Ve République, avec un gouvernement de gauche incluant des ministres communistes.</p><ul><li><b>Abolition de la peine de mort</b> (loi du 9 octobre 1981, portée par Robert Badinter).</li><li>Semaine de 39 heures, <b>cinquième semaine</b> de congés payés, <b>retraite à 60 ans</b> (1982).</li><li>Nationalisations de grands groupes industriels et de banques.</li><li><b>Décentralisation</b> (lois Defferre, 1982) : plus de pouvoirs aux communes, départements et régions.</li></ul><p>En <b>1983</b>, face au déficit, à l’inflation et à la pression sur le franc, le gouvernement opère le « <b>tournant de la rigueur</b> » et choisit de rester dans le système monétaire européen.</p>",
            },
            {
              title: "Cohabitations et Europe",
              body:
                "<ul><li><b>Cohabitation</b> : un président et une majorité parlementaire de bords opposés. Première fois en <b>1986-1988</b> (Mitterrand et le Premier ministre Jacques Chirac), puis 1993-1995 et 1997-2002.</li><li>Privatisations à partir de 1986.</li><li><b>1992</b> : le référendum sur le <b>traité de Maastricht</b>, qui crée l’Union européenne et prépare la monnaie unique, est approuvé de justesse (environ 51 % de oui).</li><li><b>1995</b> : <b>Jacques Chirac</b> est élu président.</li></ul>",
            },
            {
              title: "Les dernières années du siècle",
              body:
                "<ul><li><b>1997</b> : le service militaire obligatoire est suspendu par une loi ; les derniers appelés partent en 2001.</li><li><b>1998</b> et <b>2000</b> : les lois Aubry instaurent la semaine de <b>35 heures</b>. Leurs défenseurs mettent en avant les créations d’emplois et le temps libre ; leurs critiques, le coût pour les entreprises et la compétitivité.</li><li><b>1998</b> : victoire de l’équipe de France en Coupe du monde de football.</li><li><b>1er janvier 1999</b> : naissance de l’<b>euro</b> pour les banques et les marchés ; les pièces et billets arrivent le 1er janvier 2002.</li></ul>",
            },
            {
              title: "Le bilan d’un siècle",
              body:
                "<table class='t'><tr><th></th><th>1900</th><th>2000</th></tr><tr><td>Population</td><td>Environ 40 millions</td><td>Environ 60 millions (métropole)</td></tr><tr><td>Agriculteurs</td><td>Environ 4 actifs sur 10</td><td>Moins de 1 actif sur 20</td></tr><tr><td>Régime</td><td>IIIe République</td><td>Ve République (après Vichy et la IVe)</td></tr><tr><td>Droit de vote</td><td>Hommes seulement</td><td>Hommes et femmes, dès 18 ans</td></tr><tr><td>Protection sociale</td><td>Très limitée</td><td>Sécurité sociale, retraites, congés payés</td></tr><tr><td>Place dans le monde</td><td>Empire colonial</td><td>Puissance moyenne ancrée dans l’Union européenne</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel président ?",
          instruction: "Associe chaque mesure ou événement au président en fonction.",
          categories: ["De Gaulle", "Giscard d’Estaing", "Mitterrand", "Chirac"],
          items: [
            { text: "Abolition de la peine de mort", cat: 2, why: "Loi du 9 octobre 1981." },
            { text: "Majorité à 18 ans et loi Veil", cat: 1, why: "1974-1975." },
            { text: "Référendum sur l’élection du président au suffrage direct", cat: 0, why: "1962." },
            { text: "Reconnaissance de la responsabilité de l’État dans la rafle du Vel d’Hiv", cat: 3, why: "Discours du 16 juillet 1995." },
            { text: "Référendum sur le traité de Maastricht", cat: 2, why: "Septembre 1992." },
            { text: "Suspension du service militaire obligatoire", cat: 3, why: "Loi de 1997." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Mai 1981", back: "Élection de François Mitterrand : première alternance de la Ve République." },
            { front: "9 octobre 1981", back: "Abolition de la peine de mort (Robert Badinter)." },
            { front: "Tournant de la rigueur (1983)", back: "Le gouvernement de gauche privilégie la lutte contre l’inflation et l’ancrage européen." },
            { front: "Cohabitation", back: "Président et majorité de bords opposés : 1986-1988, 1993-1995, 1997-2002." },
            { front: "Traité de Maastricht (1992)", back: "Crée l’Union européenne et prépare l’euro ; approuvé en France par environ 51 % des voix." },
            { front: "1er janvier 1999", back: "Naissance de l’euro (pièces et billets le 1er janvier 2002)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’est-ce qu’une cohabitation ?", options: ["Un gouvernement d’union nationale", "Un président et un Premier ministre issus de camps politiques opposés", "Deux présidents en même temps"], answer: 1, explain: "Trois cohabitations entre 1986 et 2002." },
            { q: "Quelle mesure de 1982 a fait passer l’âge de la retraite à 60 ans ?", options: ["Une réforme de Giscard", "Une ordonnance du gouvernement Mauroy, sous Mitterrand", "Les lois Aubry"], answer: 1, explain: "Avec la 5e semaine de congés et les 39 heures." },
            { q: "Avec quel score la France approuve-t-elle le traité de Maastricht en 1992 ?", options: ["Environ 51 %", "Environ 70 %", "Environ 90 %"], answer: 0, explain: "Un résultat très serré qui montre déjà les divisions sur l’Europe." },
            { q: "Quand les pièces et billets en euros arrivent-ils dans les poches des Français ?", options: ["1er janvier 1999", "1er janvier 2002", "1992"], answer: 1, explain: "L’euro existe pour les marchés depuis 1999." },
          ],
        },
        {
          type: "case",
          title: "Le siècle en une vie",
          story:
            "Une femme née en 1915 à Bayeux a vu son père partir à la guerre, a vécu l’Occupation et le Débarquement, a voté pour la première fois en 1945, a acheté sa première machine à laver dans les années 1960, et a payé sa première baguette en euros à 86 ans.",
          question: "Quelle idée résume le mieux ce parcours ?",
          options: [
            "La France n’a presque pas changé au XXe siècle",
            "En une seule vie, la France a traversé deux guerres, quatre régimes politiques, la conquête des droits des femmes, une révolution du niveau de vie et l’intégration européenne",
            "Seule l’économie a changé",
          ],
          answer: 1,
          explain:
            "Le XXe siècle a été celui des ruptures les plus rapides de l’histoire de France. Comprendre ces étapes aide à lire les débats actuels : institutions, protection sociale, Europe, mémoire de la colonisation, place dans le monde.",
        },
        {
          type: "fiche",
          title: "De Giscard à l’euro (1974-2000)",
          points: [
            "<b>Giscard</b> (1974-1981) : réformes de société, début de la crise.",
            "<b>Mitterrand</b> (1981-1995) : alternance, <b>abolition de la peine de mort</b>, retraite à 60 ans, nationalisations, décentralisation, <b>tournant de la rigueur</b> (1983).",
            "<b>Cohabitations</b> (1986, 1993, 1997) ; <b>Maastricht</b> (1992, environ 51 %).",
            "<b>Chirac</b> (1995) : Vel d’Hiv, fin du service militaire ; <b>35 heures</b> (1998-2000).",
            "<b>Euro</b> : 1999 (marchés), 2002 (pièces et billets).",
          ],
          retenir: "La France de 2000 est républicaine, sociale et européenne : chacun de ces mots a été gagné au cours du siècle.",
        },
      ],
    },
  ],
});
