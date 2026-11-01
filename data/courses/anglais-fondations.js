/* ============================================================
   COURS : Anglais — les fondations
   Institut des Langues · 8 séances de 15 à 20 minutes
   Les 6 axes : principes et prononciation, mots de survie,
   raccourcis depuis le français, grammaire, conjugaison,
   vocabulaire par situation (voyage, travail).
   Moteur : prononciation par synthèse vocale (lang), mots
   prononçables (say), questions d’écoute (q.say), exercices
   d’écriture (type: "type").
   ============================================================ */
AGORA.registerCourse({
  id: "anglais-fondations",
  faculty: "langues",
  lang: "en-US",
  title: "Anglais — les fondations",
  subtitle: "Prononcer, comprendre et construire tes premières phrases utiles",
  color: "#6b4f9a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour poser des bases solides : les sons qui piègent les francophones, les mots de survie, les milliers de mots que tu connais déjà grâce au français, la grammaire essentielle, les temps les plus utiles, puis l’anglais du voyage et du travail. Clique sur 🔊 pour écouter, et écris tes réponses dans les exercices.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment marche l’anglais (et ses sons)",
      minutes: 17,
      objectives: ["Comprendre les grands principes de l’anglais", "Prononcer les sons qui piègent les francophones"],
      steps: [
        {
          type: "lesson",
          title: "Les principes",
          slides: [
            {
              title: "Une langue plus simple qu’on ne le croit",
              body:
                "<ul><li><b>Pas de genre</b> pour les objets : <i>the table</i>, <i>the book</i>, un seul « the ».</li><li><b>Peu de conjugaison</b> : au présent, seule la 3e personne change (<i>I work, she work<b>s</b></i>).</li><li><b>Un ordre des mots fixe</b> : sujet + verbe + complément. <i>I like coffee.</i></li><li>L’<b>adjectif se place avant le nom</b> et ne s’accorde pas : <i>a big house, big houses</i>.</li></ul><p>La vraie difficulté de l’anglais, c’est l’<b>écart entre l’écrit et l’oral</b>. D’où l’importance d’écouter chaque mot.</p>",
            },
            {
              title: "Le « th »",
              body:
                "<p>Le son « th » n’existe pas en français. On place le bout de la langue <b>entre les dents</b> et on souffle.</p><p>Il y a deux versions : sourde (comme un « s » zézayé) et sonore (comme un « z » zézayé).</p>",
              say: [
                { t: "think", fr: "penser (th sourd)" },
                { t: "three", fr: "trois (th sourd)" },
                { t: "the", fr: "le, la, les (th sonore)" },
                { t: "this", fr: "ceci (th sonore)" },
                { t: "brother", fr: "frère (th sonore)" },
              ],
            },
            {
              title: "Le « h » qu’on entend",
              body:
                "<p>En anglais, le <b>h se prononce</b> presque toujours : c’est un léger souffle. Sans lui, le mot change de sens.</p>",
              say: [
                { t: "hat", fr: "chapeau (≠ at : à)" },
                { t: "hair", fr: "cheveux (≠ air : air)" },
                { t: "hungry", fr: "affamé" },
                { t: "hello", fr: "bonjour" },
              ],
            },
            {
              title: "Voyelles longues et courtes",
              body:
                "<p>La longueur d’une voyelle change le mot. Écoute bien la différence :</p>",
              say: [
                { t: "ship", fr: "bateau (i court)" },
                { t: "sheep", fr: "mouton (i long)" },
                { t: "live", fr: "vivre (i court)" },
                { t: "leave", fr: "partir (i long)" },
                { t: "full", fr: "plein (ou court)" },
                { t: "fool", fr: "idiot (ou long)" },
              ],
            },
            {
              title: "L’accent tonique",
              body:
                "<p>En français, on accentue la fin du mot. En anglais, chaque mot a une <b>syllabe forte</b>, souvent au début, et les autres sont avalées. Mal placer l’accent rend un mot difficile à comprendre.</p>",
              say: [
                { t: "comfortable", ph: "COM-fter-bl", fr: "confortable" },
                { t: "vegetable", ph: "VEDJ-te-bl", fr: "légume" },
                { t: "hotel", ph: "ho-TEL", fr: "hôtel" },
                { t: "photograph", ph: "PHO-to-graph", fr: "photographie" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "think", back: "penser (th sourd, langue entre les dents)" },
            { front: "the", back: "le, la, les (th sonore)" },
            { front: "ship / sheep", back: "bateau (i court) / mouton (i long)" },
            { front: "hair / air", back: "cheveux (h soufflé) / air" },
            { front: "comfortable", back: "confortable — accent sur COM" },
            { front: "a big house", back: "une grande maison (adjectif avant le nom, invariable)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "sheep", options: ["ship", "sheep", "shop"], answer: 1, explain: "« Sheep » (mouton) a un i long." },
            { q: "Quel mot as-tu entendu ?", say: "three", options: ["tree", "free", "three"], answer: 2, explain: "Le « th » se fait la langue entre les dents." },
            { q: "Où place-t-on l’adjectif en anglais ?", options: ["Après le nom", "Avant le nom", "N’importe où"], answer: 1, explain: "A red car : une voiture rouge." },
            { q: "Au présent, quelle personne prend un -s ?", options: ["I", "You", "He, she, it"], answer: 2, explain: "She works, he plays, it rains." },
            { q: "Quel mot as-tu entendu ?", say: "hair", options: ["air", "hair", "here"], answer: 1, explain: "Le h se prononce : c’est un souffle." },
          ],
        },
        {
          type: "type",
          title: "Écris le mot que tu entends",
          instruction: "Clique sur 🔊, écoute, puis écris le mot en anglais.",
          items: [
            { prompt: "Écoute et écris :", say: "think", answer: "think", explain: "Penser." },
            { prompt: "Écoute et écris :", say: "brother", answer: "brother", explain: "Frère." },
            { prompt: "Écoute et écris :", say: "hungry", answer: "hungry", explain: "Affamé." },
            { prompt: "Écoute et écris :", say: "leave", answer: "leave", explain: "Partir (i long), à ne pas confondre avec live." },
          ],
        },
        {
          type: "case",
          title: "La commande au café",
          story:
            "À Londres, Hugo commande : « I would like a hot tea », mais il oublie le h et dit « a ot tea ». Le serveur hésite et lui demande de répéter.",
          question: "Quel est le conseil le plus utile pour Hugo ?",
          options: [
            "Parler plus fort en français",
            "Prononcer le h soufflé (hot) et accentuer la bonne syllabe : c’est souvent la prononciation, plus que la grammaire, qui bloque la compréhension",
            "Ne plus jamais commander de thé",
          ],
          answer: 1,
          explain:
            "Les natifs comprennent très bien une grammaire imparfaite, beaucoup moins des sons mal placés. Travailler le h, le th et l’accent tonique rend immédiatement plus compréhensible.",
        },
        {
          type: "fiche",
          title: "Principes et sons",
          points: [
            "Pas de genre, peu de conjugaison, ordre <b>sujet + verbe + complément</b>, adjectif <b>avant</b> le nom.",
            "<b>th</b> : langue entre les dents (think, the).",
            "<b>h</b> soufflé : hair ≠ air, hat ≠ at.",
            "Voyelles <b>courtes / longues</b> : ship / sheep, live / leave.",
            "<b>Accent tonique</b> : COMfortable, VEGetable.",
          ],
          retenir: "En anglais, écoute avant de lire : l’écrit trompe, l’oral ne ment pas.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Les mots de survie",
      minutes: 16,
      objectives: ["Saluer, remercier, s’excuser et demander", "Compter et poser les questions de base"],
      steps: [
        {
          type: "lesson",
          title: "L’essentiel pour se débrouiller",
          slides: [
            {
              title: "Saluer et se présenter",
              body: "<p>Les formules qu’on utilise tous les jours :</p>",
              say: [
                { t: "Hello! / Hi!", fr: "Bonjour ! / Salut !" },
                { t: "Good morning", fr: "Bonjour (le matin)" },
                { t: "My name is Noa.", fr: "Je m’appelle Noa." },
                { t: "Nice to meet you.", fr: "Enchanté." },
                { t: "How are you? — I'm fine, thanks.", fr: "Comment ça va ? — Bien, merci." },
                { t: "See you later!", fr: "À plus tard !" },
              ],
            },
            {
              title: "La politesse",
              body: "<p>Les anglophones utilisent beaucoup de formules de politesse : <i>please</i> et <i>thank you</i> à chaque demande.</p>",
              say: [
                { t: "Please", fr: "S’il te plaît / s’il vous plaît" },
                { t: "Thank you very much.", fr: "Merci beaucoup." },
                { t: "You're welcome.", fr: "De rien." },
                { t: "Excuse me", fr: "Excusez-moi (pour interpeller)" },
                { t: "Sorry", fr: "Pardon, désolé" },
                { t: "Could you repeat, please?", fr: "Pourriez-vous répéter ?" },
              ],
            },
            {
              title: "Les mots pour questionner",
              body: "<p>Avec ces mots, tu peux poser presque toutes les questions :</p>",
              say: [
                { t: "What?", fr: "Quoi ? Quel ?" },
                { t: "Where?", fr: "Où ?" },
                { t: "When?", fr: "Quand ?" },
                { t: "Who?", fr: "Qui ?" },
                { t: "Why?", fr: "Pourquoi ?" },
                { t: "How much is it?", fr: "Combien ça coûte ?" },
              ],
            },
            {
              title: "Les nombres qui piègent",
              body:
                "<p>Attention à <b>-teen</b> (13 à 19, accent sur la fin) et <b>-ty</b> (30, 40… accent au début) : une erreur classique au moment de payer.</p>",
              say: [
                { t: "thirteen", fr: "13" },
                { t: "thirty", fr: "30" },
                { t: "fifteen", fr: "15" },
                { t: "fifty", fr: "50" },
                { t: "one hundred", fr: "100" },
                { t: "one thousand", fr: "1 000" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Nice to meet you.", back: "Enchanté(e)." },
            { front: "You're welcome.", back: "De rien." },
            { front: "Excuse me", back: "Excusez-moi (pour attirer l’attention)." },
            { front: "How much is it?", back: "Combien ça coûte ?" },
            { front: "Where is…?", back: "Où est… ?" },
            { front: "thirteen / thirty", back: "13 (accent à la fin) / 30 (accent au début)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel nombre as-tu entendu ?", say: "fifteen", options: ["15", "50", "5"], answer: 0, explain: "-teen : 13 à 19, accent sur la fin." },
            { q: "Quel nombre as-tu entendu ?", say: "forty", options: ["14", "40", "4"], answer: 1, explain: "Attention à l’orthographe : forty, sans u." },
            { q: "Quelqu’un te dit « Thank you! ». Tu réponds…", options: ["Please", "You're welcome", "Sorry"], answer: 1, explain: "C’est l’équivalent de « de rien »." },
            { q: "Pour demander où est la gare, tu commences par…", options: ["Where is…", "When is…", "Who is…"], answer: 0, explain: "Where is the station?" },
            { q: "Tu n’as pas compris. Tu dis…", options: ["Could you repeat, please?", "See you later!", "Nice to meet you."], answer: 0, explain: "Formule polie et très utile." },
          ],
        },
        {
          type: "type",
          title: "Traduis en anglais",
          instruction: "Écris la phrase en anglais. Les majuscules et la ponctuation ne comptent pas.",
          items: [
            { prompt: "Merci beaucoup.", answer: ["thank you very much", "thanks a lot", "thank you so much"] },
            { prompt: "Je m’appelle Sarah.", answer: ["my name is sarah", "i'm sarah", "i am sarah"] },
            { prompt: "Combien ça coûte ?", answer: ["how much is it", "how much does it cost", "how much is this"] },
            { prompt: "Où est la gare ?", answer: ["where is the station", "where's the station", "where is the train station"], explain: "Station : gare." },
            { prompt: "Pardon, désolé.", answer: ["sorry", "i'm sorry", "i am sorry"] },
          ],
        },
        {
          type: "case",
          title: "Le taxi à New York",
          story:
            "Leïla prend un taxi. Le chauffeur annonce le prix : « It's thirty dollars ». Elle a compris « thirteen » et tend 13 dollars. Le chauffeur s’agace.",
          question: "Quel est le bon réflexe ?",
          options: [
            "Payer 13 dollars et partir vite",
            "En cas de doute sur un nombre, faire répéter ou demander à voir le prix écrit (« Could you write it down, please? ») ; et s’entraîner à distinguer -teen et -ty",
            "Ne jamais prendre de taxi",
          ],
          answer: 1,
          explain:
            "13 et 30, 15 et 50 : la confusion est fréquente. Faire écrire le montant est un réflexe simple et poli.",
        },
        {
          type: "fiche",
          title: "Mots de survie",
          points: [
            "Saluer : <b>Hello</b>, <b>Nice to meet you</b>, <b>How are you?</b>",
            "Politesse : <b>please</b>, <b>thank you</b>, <b>you're welcome</b>, <b>excuse me</b>, <b>sorry</b>.",
            "Questions : <b>what, where, when, who, why, how much</b>.",
            "Nombres : <b>-teen</b> (accent à la fin) ≠ <b>-ty</b> (accent au début).",
          ],
          retenir: "Avec please, thank you et where is…, tu te débrouilles déjà partout.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les raccourcis depuis le français",
      minutes: 16,
      objectives: ["Reconnaître les milliers de mots communs au français et à l’anglais", "Éviter les faux amis les plus courants"],
      steps: [
        {
          type: "lesson",
          title: "Tu connais déjà des milliers de mots",
          slides: [
            {
              title: "Pourquoi tant de mots communs",
              body:
                "<p>Après la conquête de l’Angleterre par Guillaume de Normandie en <b>1066</b>, le français a été pendant des siècles la langue de la cour et de l’administration anglaises. Résultat : une très grande partie du vocabulaire anglais vient du français ou du latin.</p><p>Pour un francophone, c’est un énorme raccourci : il suffit souvent d’apprendre la <b>prononciation</b>.</p>",
            },
            {
              title: "Les terminaisons qui se transforment",
              body:
                "<table class='t'><tr><th>Français</th><th>Anglais</th><th>Exemples</th></tr><tr><td>-tion</td><td>-tion</td><td>nation, information, situation</td></tr><tr><td>-té</td><td>-ty</td><td>université → university, qualité → quality</td></tr><tr><td>-eux</td><td>-ous</td><td>dangereux → dangerous, nerveux → nervous</td></tr><tr><td>-ique</td><td>-ic / -ical</td><td>logique → logical, public → public</td></tr><tr><td>-ment (adverbe)</td><td>-ly</td><td>rapidement → rapidly, finalement → finally</td></tr><tr><td>-iste</td><td>-ist</td><td>dentiste → dentist</td></tr></table>",
            },
            {
              title: "Même mot, autre son",
              body: "<p>Ces mots s’écrivent presque comme en français mais se prononcent très différemment :</p>",
              say: [
                { t: "information", fr: "information" },
                { t: "restaurant", fr: "restaurant" },
                { t: "university", fr: "université" },
                { t: "dangerous", fr: "dangereux" },
                { t: "business", fr: "affaires (busi-ness : « biz-ness »)" },
              ],
            },
            {
              title: "Les faux amis",
              body:
                "<p>Certains mots se ressemblent mais n’ont <b>pas le même sens</b> :</p><table class='t'><tr><th>Anglais</th><th>Veut dire</th><th>Et pas…</th></tr><tr><td>actually</td><td>en fait</td><td>actuellement (= currently)</td></tr><tr><td>eventually</td><td>finalement</td><td>éventuellement (= possibly)</td></tr><tr><td>library</td><td>bibliothèque</td><td>librairie (= bookshop)</td></tr><tr><td>sensible</td><td>raisonnable</td><td>sensible (= sensitive)</td></tr><tr><td>to attend</td><td>assister à</td><td>attendre (= to wait)</td></tr><tr><td>a deception</td><td>une tromperie</td><td>une déception (= a disappointment)</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Vrai ami ou faux ami ?",
          instruction: "Le mot anglais a-t-il le même sens que le mot français qui lui ressemble ?",
          categories: ["Même sens", "Faux ami"],
          items: [
            { text: "information", cat: 0, why: "Même sens." },
            { text: "actually", cat: 1, why: "En fait, pas « actuellement »." },
            { text: "dangerous", cat: 0, why: "Dangereux." },
            { text: "library", cat: 1, why: "Bibliothèque, pas « librairie »." },
            { text: "university", cat: 0, why: "Université." },
            { text: "to attend", cat: 1, why: "Assister à, pas « attendre »." },
            { text: "eventually", cat: 1, why: "Finalement, pas « éventuellement »." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "actually", back: "en fait (actuellement = currently)" },
            { front: "eventually", back: "finalement (éventuellement = possibly)" },
            { front: "library", back: "bibliothèque (librairie = bookshop)" },
            { front: "sensible", back: "raisonnable (sensible = sensitive)" },
            { front: "to attend a meeting", back: "assister à une réunion (attendre = to wait)" },
            { front: "disappointment", back: "déception (a deception = une tromperie)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "« I'm currently working on it » signifie…", options: ["J’y travaille actuellement", "J’y ai travaillé autrefois", "Je refuse d’y travailler"], answer: 0, explain: "Currently = actuellement." },
            { q: "« Actually, I prefer tea » signifie…", options: ["Actuellement, je préfère le thé", "En fait, je préfère le thé", "Je n’aime pas le thé"], answer: 1, explain: "Actually = en fait." },
            { q: "Comment dit-on « nerveux » ?", options: ["nervy", "nervous", "nervic"], answer: 1, explain: "-eux devient -ous." },
            { q: "Tu cherches à acheter un livre. Tu vas dans une…", options: ["library", "bookshop", "librairy"], answer: 1, explain: "Library = bibliothèque (on emprunte)." },
            { q: "Quel mot as-tu entendu ?", say: "university", options: ["university", "universal", "unity"], answer: 0, explain: "Accent sur la 3e syllabe : uni-VER-si-ty." },
          ],
        },
        {
          type: "type",
          title: "Transforme le mot français",
          instruction: "Écris le mot anglais correspondant grâce aux terminaisons.",
          items: [
            { prompt: "rapidement", answer: "rapidly", hint: "-ment → -ly" },
            { prompt: "qualité", answer: "quality", hint: "-té → -ty" },
            { prompt: "dangereux", answer: "dangerous", hint: "-eux → -ous" },
            { prompt: "logique (adjectif)", answer: ["logical", "logic"], hint: "-ique → -ical" },
            { prompt: "finalement", answer: "finally", hint: "-ment → -ly" },
          ],
        },
        {
          type: "case",
          title: "Le mail au fournisseur",
          story:
            "Noa écrit à un fournisseur anglais : « Eventually, we could order 500 units. » Il voulait dire « Éventuellement, nous pourrions commander 500 unités ». Le fournisseur comprend « Finalement, nous pourrions commander 500 unités » et prépare déjà la commande.",
          question: "Quelle phrase aurait été correcte ?",
          options: [
            "Actually, we could order 500 units.",
            "Possibly, we could order 500 units. / We might order 500 units.",
            "Eventually we order 500 units.",
          ],
          answer: 1,
          explain:
            "Éventuellement = possibly / maybe / might. Eventually = finalement, au bout du compte. Dans un échange commercial, un faux ami peut créer un vrai malentendu.",
        },
        {
          type: "fiche",
          title: "Raccourcis depuis le français",
          points: [
            "Depuis 1066, une grande partie du vocabulaire anglais vient du <b>français</b>.",
            "Terminaisons : <b>-té → -ty</b>, <b>-eux → -ous</b>, <b>-ment → -ly</b>, <b>-ique → -ic/-ical</b>.",
            "Même mot, <b>autre prononciation</b> : toujours écouter.",
            "Faux amis : <b>actually</b> (en fait), <b>eventually</b> (finalement), <b>library</b>, <b>sensible</b>, <b>to attend</b>.",
          ],
          retenir: "Le français t’offre des milliers de mots anglais : méfie-toi seulement des faux amis.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "La grammaire essentielle",
      minutes: 17,
      objectives: ["Utiliser les articles, les pluriels et les pronoms", "Construire des phrases simples, négatives et interrogatives"],
      steps: [
        {
          type: "lesson",
          title: "Les briques de la phrase",
          slides: [
            {
              title: "Les articles",
              body:
                "<ul><li><b>a</b> devant un son de consonne, <b>an</b> devant un son de voyelle : <i>a car, an apple, an hour</i> (le h ne se prononce pas dans hour).</li><li><b>the</b> = le, la, les, pour tout.</li><li>Pas d’article pour parler d’une chose en général : <i>I like coffee</i> (j’aime <b>le</b> café).</li></ul>",
              say: [
                { t: "a car", fr: "une voiture" },
                { t: "an apple", fr: "une pomme" },
                { t: "an hour", fr: "une heure (h muet)" },
              ],
            },
            {
              title: "Le pluriel",
              body:
                "<ul><li>En général : <b>+s</b> (<i>a book, two books</i>), ou <b>+es</b> après s, x, ch, sh (<i>a box, two boxes</i>).</li><li>Quelques pluriels irréguliers très courants : <i>man → men, woman → women, child → children, person → people, foot → feet</i>.</li><li>Certains mots sont indénombrables et ne prennent pas de s : <i>information, advice, furniture</i> (meubles).</li></ul>",
            },
            {
              title: "Les pronoms",
              body:
                "<table class='t'><tr><th>Sujet</th><th>Complément</th><th>Possessif</th></tr><tr><td>I (je)</td><td>me</td><td>my</td></tr><tr><td>you (tu, vous)</td><td>you</td><td>your</td></tr><tr><td>he (il, personne)</td><td>him</td><td>his</td></tr><tr><td>she (elle, personne)</td><td>her</td><td>her</td></tr><tr><td>it (il, elle : chose, animal)</td><td>it</td><td>its</td></tr><tr><td>we (nous)</td><td>us</td><td>our</td></tr><tr><td>they (ils, elles)</td><td>them</td><td>their</td></tr></table><p>Le possessif s’accorde avec le <b>possesseur</b> : <i>his car</i> (sa voiture, à lui), <i>her car</i> (sa voiture, à elle).</p>",
            },
            {
              title: "Questions et négations",
              body:
                "<ul><li>Avec <b>to be</b> : on inverse. <i>You are tired → Are you tired?</i> Négation : <i>I am not tired.</i></li><li>Avec les autres verbes au présent : on ajoute <b>do / does</b>. <i>You like tea → Do you like tea?</i> / <i>She works → Does she work?</i></li><li>Négation : <b>don't / doesn't</b> + verbe de base. <i>I don't like tea. She doesn't work here.</i></li><li>Attention : après does / doesn't, le verbe <b>perd son -s</b>.</li></ul>",
              say: [
                { t: "Are you tired?", fr: "Es-tu fatigué ?" },
                { t: "Do you like tea?", fr: "Aimes-tu le thé ?" },
                { t: "She doesn't work here.", fr: "Elle ne travaille pas ici." },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "an hour", back: "une heure (an car le h ne se prononce pas)" },
            { front: "children", back: "enfants (pluriel de child)" },
            { front: "people", back: "gens, personnes (pluriel de person)" },
            { front: "his / her", back: "son, sa, ses (à lui) / (à elle)" },
            { front: "Do you…?", back: "Question au présent avec un verbe autre que to be." },
            { front: "doesn't + verbe sans s", back: "Négation à la 3e personne : she doesn't know." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Complète : I need ___ umbrella.", options: ["a", "an", "the a"], answer: 1, explain: "Umbrella commence par un son voyelle." },
            { q: "« Sa voiture » (celle de Marie) se dit…", options: ["his car", "her car", "its car"], answer: 1, explain: "Le possessif dépend du possesseur : Marie → her." },
            { q: "Transforme en question : « She speaks English. »", options: ["Speaks she English?", "Does she speak English?", "Does she speaks English?"], answer: 1, explain: "Does + sujet + verbe sans s." },
            { q: "Quel est le pluriel de « child » ?", options: ["childs", "children", "childes"], answer: 1, explain: "Pluriel irrégulier." },
            { q: "Quelle phrase as-tu entendue ?", say: "Do you like coffee?", options: ["Do you like coffee?", "You like coffee.", "Did you like coffee?"], answer: 0, explain: "Question au présent avec do." },
          ],
        },
        {
          type: "type",
          title: "Construis la phrase",
          instruction: "Écris la phrase en anglais.",
          items: [
            { prompt: "Je n’aime pas le café.", answer: ["i don't like coffee", "i do not like coffee"] },
            { prompt: "Est-ce qu’elle travaille ici ?", answer: ["does she work here"] },
            { prompt: "Nous sommes fatigués.", answer: ["we are tired", "we're tired"] },
            { prompt: "Leurs enfants", answer: ["their children"] },
            { prompt: "Il ne parle pas anglais.", answer: ["he doesn't speak english", "he does not speak english"] },
          ],
        },
        {
          type: "case",
          title: "Le mail mal tourné",
          story:
            "Dans un mail, Yasmine écrit à un client : « Does your company needs a quote? » Son collègue britannique lui signale une erreur.",
          question: "Où est l’erreur ?",
          options: [
            "Il faut « Do your company needs »",
            "Après does, le verbe perd son -s : « Does your company need a quote? »",
            "Il n’y a pas d’erreur",
          ],
          answer: 1,
          explain:
            "Le -s de la 3e personne « passe » dans does : il ne doit pas apparaître deux fois. C’est l’une des erreurs les plus fréquentes des francophones.",
        },
        {
          type: "fiche",
          title: "Grammaire essentielle",
          points: [
            "<b>a</b> / <b>an</b> (selon le son), <b>the</b> pour tout ; pas d’article pour une généralité.",
            "Pluriel en <b>-s / -es</b> ; irréguliers : men, women, children, people, feet.",
            "Pronoms <b>I, you, he, she, it, we, they</b> ; possessifs <b>my, your, his, her, its, our, their</b>.",
            "Questions : inversion avec <b>to be</b>, <b>do / does</b> sinon ; négation <b>don't / doesn't</b> + verbe sans s.",
          ],
          retenir: "Does prend le s : le verbe qui suit n’en a plus besoin.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Conjuguer au présent",
      minutes: 17,
      objectives: ["Maîtriser to be et to have", "Distinguer présent simple et présent en -ing"],
      steps: [
        {
          type: "lesson",
          title: "Les verbes de base",
          slides: [
            {
              title: "To be : être",
              body:
                "<table class='t'><tr><th>Forme pleine</th><th>Forme courte (à l’oral)</th></tr><tr><td>I am</td><td>I'm</td></tr><tr><td>you are</td><td>you're</td></tr><tr><td>he / she / it is</td><td>he's / she's / it's</td></tr><tr><td>we / they are</td><td>we're / they're</td></tr></table><p>Attention : on dit <i>I <b>am</b> 25</i> (j’<b>ai</b> 25 ans), <i>I <b>am</b> hungry</i> (j’<b>ai</b> faim), <i>I <b>am</b> cold</i> (j’<b>ai</b> froid).</p>",
              say: [
                { t: "I'm 25 years old.", fr: "J’ai 25 ans." },
                { t: "I'm hungry.", fr: "J’ai faim." },
                { t: "They're late.", fr: "Ils sont en retard." },
              ],
            },
            {
              title: "To have : avoir",
              body:
                "<ul><li><i>I have, you have, he/she/it <b>has</b>, we have, they have.</i></li><li>Questions et négations avec do / does : <i>Do you have a car? I don't have time.</i></li><li>En anglais britannique, on entend aussi <i>I've got</i> pour « j’ai ».</li></ul>",
              say: [
                { t: "She has two children.", fr: "Elle a deux enfants." },
                { t: "Do you have a minute?", fr: "Tu as une minute ?" },
                { t: "I don't have time.", fr: "Je n’ai pas le temps." },
              ],
            },
            {
              title: "Présent simple : les habitudes",
              body:
                "<p>Le <b>présent simple</b> exprime ce qui est vrai en général ou ce qu’on fait <b>régulièrement</b> :</p><ul><li><i>I work in Caen.</i> (je travaille à Caen, c’est mon travail)</li><li><i>She drinks coffee every morning.</i></li><li>Mots-indices : <i>always, usually, often, sometimes, never, every day</i>.</li></ul>",
            },
            {
              title: "Présent en -ing : en ce moment",
              body:
                "<p>Le <b>présent continu</b> (be + verbe-<b>ing</b>) exprime ce qui se passe <b>maintenant</b> ou en ce moment :</p><ul><li><i>I am working.</i> (je suis en train de travailler)</li><li><i>She is calling a client.</i></li><li>Mots-indices : <i>now, right now, at the moment, today, this week</i>.</li></ul><p>Comparaison : <i>I work from home</i> (habituellement) / <i>I'm working from home today</i> (aujourd’hui).</p>",
              say: [
                { t: "I'm working right now.", fr: "Je travaille en ce moment." },
                { t: "What are you doing?", fr: "Qu’est-ce que tu fais ?" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Habitude ou en ce moment ?",
          instruction: "Quel présent faut-il utiliser ?",
          categories: ["Présent simple (habitude)", "Présent en -ing (maintenant)"],
          items: [
            { text: "Je vais à la salle de sport tous les lundis.", cat: 0, why: "I go to the gym every Monday." },
            { text: "Chut, je suis au téléphone !", cat: 1, why: "I'm on the phone / I'm talking." },
            { text: "Elle parle trois langues.", cat: 0, why: "She speaks three languages : vrai en général." },
            { text: "Regarde, il pleut.", cat: 1, why: "It's raining." },
            { text: "Nous livrons en 48 heures.", cat: 0, why: "We deliver in 48 hours : règle habituelle." },
            { text: "Cette semaine, je travaille depuis la maison.", cat: 1, why: "This week, I'm working from home." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "I'm 30.", back: "J’ai 30 ans (to be, pas to have)." },
            { front: "I'm cold.", back: "J’ai froid." },
            { front: "She has", back: "Elle a (3e personne de to have)." },
            { front: "always, usually, never", back: "Indices du présent simple (habitudes)." },
            { front: "right now, at the moment", back: "Indices du présent en -ing." },
            { front: "What are you doing?", back: "Qu’est-ce que tu fais (en ce moment) ?" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment dit-on « J’ai faim » ?", options: ["I have hungry", "I am hungry", "I hunger"], answer: 1, explain: "Avec to be." },
            { q: "Complète : Look! The kids ___ in the garden.", options: ["play", "are playing", "plays"], answer: 1, explain: "Look! indique une action en cours." },
            { q: "Complète : He ___ to work by train every day.", options: ["go", "goes", "is going"], answer: 1, explain: "Habitude + 3e personne : goes." },
            { q: "Quelle phrase as-tu entendue ?", say: "She's working from home today.", options: ["She works from home.", "She's working from home today.", "She worked from home."], answer: 1, explain: "Today : action temporaire, présent en -ing." },
          ],
        },
        {
          type: "type",
          title: "Conjugue",
          instruction: "Écris la forme correcte du verbe entre parenthèses (un ou plusieurs mots).",
          items: [
            { prompt: "She ___ (to have) a meeting at 3.", answer: "has" },
            { prompt: "They ___ (to be) from Spain.", answer: ["are", "'re"] },
            { prompt: "I ___ (to work) right now. (forme complète : am + -ing)", answer: ["am working", "'m working"] },
            { prompt: "He ___ (to drink) coffee every morning.", answer: "drinks" },
            { prompt: "Traduis : J’ai 25 ans.", answer: ["i am 25", "i'm 25", "i am 25 years old", "i'm 25 years old", "i am twenty-five", "i'm twenty-five"] },
          ],
        },
        {
          type: "case",
          title: "Le coup de fil",
          story:
            "Un client anglais appelle Karim et demande : « Hi Karim, do you have a minute? » Karim est en train de conduire et veut répondre qu’il conduit et qu’il rappellera.",
          question: "Quelle réponse est correcte ?",
          options: [
            "Sorry, I drive. I call you back.",
            "Sorry, I'm driving right now. I'll call you back.",
            "Sorry, I am drive. I calling you.",
          ],
          answer: 1,
          explain:
            "Action en cours : I'm driving. Pour une promesse immédiate, on utilise will (I'll call you back), que tu verras à la séance suivante.",
        },
        {
          type: "fiche",
          title: "Le présent",
          points: [
            "<b>To be</b> : am, are, is (I'm, you're, he's…) ; âge, faim, froid → to be.",
            "<b>To have</b> : have / <b>has</b> ; questions et négations avec do / does.",
            "<b>Présent simple</b> : habitudes, vérités (always, every day).",
            "<b>Présent en -ing</b> : maintenant, temporaire (right now, today, this week).",
          ],
          retenir: "I work = c’est mon travail ; I'm working = je suis en train.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Passé, futur et modaux",
      minutes: 17,
      objectives: ["Raconter au passé simple", "Parler du futur et utiliser can, should, must"],
      steps: [
        {
          type: "lesson",
          title: "Sortir du présent",
          slides: [
            {
              title: "Le passé simple : verbes réguliers",
              body:
                "<ul><li>On ajoute <b>-ed</b> : <i>work → worked, call → called, visit → visited</i>.</li><li>C’est la même forme pour toutes les personnes.</li><li>Prononciation de -ed : « t » (worked), « d » (called) ou « id » après t et d (visited, needed).</li><li>Question et négation avec <b>did</b> + verbe de base : <i>Did you call him? I didn't call him.</i></li></ul>",
              say: [
                { t: "I worked late yesterday.", fr: "J’ai travaillé tard hier." },
                { t: "She visited London.", fr: "Elle a visité Londres." },
                { t: "Did you call him?", fr: "L’as-tu appelé ?" },
              ],
            },
            {
              title: "Les verbes irréguliers à connaître",
              body:
                "<table class='t'><tr><th>Base</th><th>Passé</th><th>Sens</th></tr><tr><td>be</td><td>was / were</td><td>être</td></tr><tr><td>have</td><td>had</td><td>avoir</td></tr><tr><td>go</td><td>went</td><td>aller</td></tr><tr><td>do</td><td>did</td><td>faire</td></tr><tr><td>make</td><td>made</td><td>fabriquer, faire</td></tr><tr><td>buy</td><td>bought</td><td>acheter</td></tr><tr><td>send</td><td>sent</td><td>envoyer</td></tr><tr><td>pay</td><td>paid</td><td>payer</td></tr><tr><td>get</td><td>got</td><td>obtenir, recevoir</td></tr><tr><td>see</td><td>saw</td><td>voir</td></tr></table>",
            },
            {
              title: "Le futur",
              body:
                "<ul><li><b>will</b> + verbe : décision immédiate, promesse, prévision. <i>I'll send it tomorrow.</i></li><li><b>be going to</b> + verbe : projet déjà décidé. <i>We're going to open a new shop.</i></li><li>Négation : <i>won't</i> (= will not).</li></ul>",
              say: [
                { t: "I'll call you back.", fr: "Je te rappelle." },
                { t: "We're going to launch a new product.", fr: "Nous allons lancer un nouveau produit." },
                { t: "It won't take long.", fr: "Ça ne prendra pas longtemps." },
              ],
            },
            {
              title: "Les modaux",
              body:
                "<ul><li><b>can</b> : pouvoir, savoir faire. <i>I can help you.</i></li><li><b>could</b> : pourrais (poli). <i>Could you send me the invoice?</i></li><li><b>should</b> : devrais (conseil). <i>You should check the price.</i></li><li><b>must</b> : dois (obligation forte). <i>You must wear a helmet.</i></li></ul><p>Les modaux ne prennent jamais de -s et sont suivis du verbe de base sans « to » : <i>she can swim</i>.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "went", back: "passé de go (aller)" },
            { front: "bought", back: "passé de buy (acheter)" },
            { front: "sent", back: "passé de send (envoyer)" },
            { front: "I'll…", back: "Je vais… / je ferai… (décision immédiate, promesse)" },
            { front: "Could you…?", back: "Pourriez-vous… ? (demande polie)" },
            { front: "should", back: "devrais (conseil)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Complète : Yesterday, I ___ to the bank.", options: ["go", "went", "goed"], answer: 1, explain: "Go est irrégulier : went." },
            { q: "Transforme en question : « You paid the invoice. »", options: ["Paid you the invoice?", "Did you pay the invoice?", "Did you paid the invoice?"], answer: 1, explain: "Did + verbe de base." },
            { q: "Pour demander poliment un document, on dit…", options: ["Send me the document.", "Could you send me the document, please?", "You must send me the document."], answer: 1, explain: "Could + please : forme polie." },
            { q: "Quelle phrase as-tu entendue ?", say: "We're going to open a new shop.", options: ["We opened a new shop.", "We're going to open a new shop.", "We open a new shop."], answer: 1, explain: "Going to : projet décidé." },
            { q: "« She can speaks English » : où est l’erreur ?", options: ["Il n’y en a pas", "Après can, pas de -s : she can speak", "Il faut she cans speak"], answer: 1, explain: "Modal + verbe de base." },
          ],
        },
        {
          type: "type",
          title: "Passé et futur",
          instruction: "Écris la forme demandée.",
          items: [
            { prompt: "Passé de « buy » :", answer: "bought" },
            { prompt: "Passé de « send » :", answer: "sent" },
            { prompt: "Traduis : Je te rappelle. (avec will, forme courte)", answer: ["i'll call you back", "i will call you back"] },
            { prompt: "Traduis : Tu devrais vérifier le prix.", answer: ["you should check the price"] },
            { prompt: "Traduis : Nous n’avons pas payé. (did)", answer: ["we didn't pay", "we did not pay"] },
          ],
        },
        {
          type: "case",
          title: "Le retard de livraison",
          story:
            "Un client écrit à Noa : « Did you send the parcel? It hasn't arrived. » Noa a bien envoyé le colis hier, et il veut le rassurer en promettant d’envoyer le numéro de suivi.",
          question: "Quelle réponse est la plus juste ?",
          options: [
            "Yes, I send the parcel yesterday. I send you the tracking number.",
            "Yes, I sent the parcel yesterday. I'll send you the tracking number right away.",
            "Yes, I sended it. I am going send the number.",
          ],
          answer: 1,
          explain:
            "Passé : sent (irrégulier). Promesse immédiate : I'll send. Une réponse correcte et rapide rassure le client.",
        },
        {
          type: "fiche",
          title: "Passé, futur, modaux",
          points: [
            "Passé régulier : <b>-ed</b> ; questions et négations : <b>did / didn't</b> + verbe de base.",
            "Irréguliers clés : <b>was/were, had, went, did, made, bought, sent, paid, got, saw</b>.",
            "Futur : <b>will</b> (décision, promesse) / <b>be going to</b> (projet).",
            "Modaux : <b>can, could, should, must</b> + verbe de base, jamais de -s.",
          ],
          retenir: "Did prend le passé : le verbe qui suit reste à la base.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "En voyage",
      minutes: 16,
      objectives: ["Se débrouiller à l’aéroport, à l’hôtel et au restaurant", "Demander et comprendre son chemin"],
      steps: [
        {
          type: "lesson",
          title: "Les situations du voyage",
          slides: [
            {
              title: "À l’aéroport",
              say: [
                { t: "boarding pass", fr: "carte d’embarquement" },
                { t: "gate", fr: "porte d’embarquement" },
                { t: "luggage", fr: "bagages (indénombrable)" },
                { t: "My flight is delayed.", fr: "Mon vol est retardé." },
                { t: "Where is the check-in desk?", fr: "Où est le comptoir d’enregistrement ?" },
              ],
              body: "<p>Les mots que tu verras sur tous les panneaux :</p>",
            },
            {
              title: "À l’hôtel",
              say: [
                { t: "I have a reservation.", fr: "J’ai une réservation." },
                { t: "a single / double room", fr: "une chambre simple / double" },
                { t: "Is breakfast included?", fr: "Le petit-déjeuner est-il compris ?" },
                { t: "What time is check-out?", fr: "À quelle heure faut-il libérer la chambre ?" },
                { t: "The Wi-Fi doesn't work.", fr: "Le Wi-Fi ne fonctionne pas." },
              ],
              body: "<p>De l’arrivée au départ :</p>",
            },
            {
              title: "Au restaurant",
              say: [
                { t: "A table for two, please.", fr: "Une table pour deux, s’il vous plaît." },
                { t: "Can I see the menu?", fr: "Puis-je voir la carte ?" },
                { t: "I'd like the chicken.", fr: "Je voudrais le poulet." },
                { t: "I'm allergic to nuts.", fr: "Je suis allergique aux fruits à coque." },
                { t: "Can we have the bill, please?", fr: "L’addition, s’il vous plaît. (check aux États-Unis)" },
              ],
              body: "<p>« I'd like » (je voudrais) est plus poli que « I want ».</p>",
            },
            {
              title: "Demander son chemin",
              say: [
                { t: "How do I get to the station?", fr: "Comment aller à la gare ?" },
                { t: "Go straight on.", fr: "Allez tout droit." },
                { t: "Turn left / turn right.", fr: "Tournez à gauche / à droite." },
                { t: "It's next to the bank.", fr: "C’est à côté de la banque." },
                { t: "Is it far?", fr: "C’est loin ?" },
              ],
              body: "<p>Et quelques repères : <i>opposite</i> (en face), <i>between</i> (entre), <i>at the corner</i> (au coin).</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "boarding pass", back: "carte d’embarquement" },
            { front: "delayed", back: "retardé" },
            { front: "Is breakfast included?", back: "Le petit-déjeuner est-il compris ?" },
            { front: "I'd like…", back: "Je voudrais… (poli)" },
            { front: "the bill", back: "l’addition (the check aux États-Unis)" },
            { front: "Turn left.", back: "Tournez à gauche." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’as-tu entendu ?", say: "Your flight is delayed.", options: ["Ton vol est annulé.", "Ton vol est retardé.", "Ton vol est à l’heure."], answer: 1, explain: "Delayed = retardé (annulé = cancelled)." },
            { q: "Qu’as-tu entendu ?", say: "Turn right at the corner.", options: ["Tournez à droite au coin.", "Tournez à gauche au coin.", "Allez tout droit."], answer: 0, explain: "Right = droite." },
            { q: "Pour demander l’addition à Londres, tu dis…", options: ["Can we have the bill, please?", "Can we have the note?", "The addition, please."], answer: 0, explain: "Bill au Royaume-Uni, check aux États-Unis." },
            { q: "Pour signaler une allergie, tu dis…", options: ["I'm allergic to nuts.", "I have allergy nuts.", "Nuts are allergic."], answer: 0, explain: "Allergic to + aliment." },
          ],
        },
        {
          type: "type",
          title: "En situation",
          instruction: "Traduis en anglais.",
          items: [
            { prompt: "J’ai une réservation.", answer: ["i have a reservation", "i've got a reservation", "i have a booking"] },
            { prompt: "Une table pour deux, s’il vous plaît.", answer: ["a table for two please", "table for two please", "a table for two"] },
            { prompt: "C’est loin ?", answer: ["is it far"] },
            { prompt: "Je voudrais le poulet.", answer: ["i'd like the chicken", "i would like the chicken"] },
          ],
        },
        {
          type: "case",
          title: "La chambre sans Wi-Fi",
          story:
            "Arrivée tard à son hôtel de Manchester, Sofia constate que le Wi-Fi ne fonctionne pas alors qu’elle doit envoyer un dossier le soir même. Elle descend à la réception.",
          question: "Quelle formulation est la plus efficace et polie ?",
          options: [
            "Wi-Fi no good. Fix now.",
            "Excuse me, the Wi-Fi doesn't work in my room, and I need to send an important file tonight. Could you help me, please?",
            "Your hotel is bad.",
          ],
          answer: 1,
          explain:
            "Excuse me + le problème + le besoin + une demande polie avec could : c’est la structure qui obtient le plus vite une solution.",
        },
        {
          type: "fiche",
          title: "En voyage",
          points: [
            "Aéroport : <b>boarding pass</b>, <b>gate</b>, <b>luggage</b>, <b>delayed</b> / cancelled.",
            "Hôtel : <b>I have a reservation</b>, <b>Is breakfast included?</b>, <b>check-out</b>.",
            "Restaurant : <b>I'd like…</b>, <b>I'm allergic to…</b>, <b>the bill</b> (check aux États-Unis).",
            "Chemin : <b>straight on</b>, <b>left / right</b>, <b>next to</b>, <b>opposite</b>.",
          ],
          retenir: "Excuse me + ton besoin + could you…, please? : la formule qui ouvre toutes les portes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "L’anglais du travail",
      minutes: 18,
      objectives: ["Écrire un e-mail professionnel simple", "Se débrouiller au téléphone, en réunion et en négociation"],
      steps: [
        {
          type: "lesson",
          title: "Travailler en anglais",
          slides: [
            {
              title: "L’e-mail professionnel",
              body:
                "<ul><li>Ouverture : <i>Dear Mr Smith,</i> (formel) / <i>Hi John,</i> (courant).</li><li>Objet de l’e-mail : <i>I'm writing to…</i> (je vous écris pour…).</li><li>Demande : <i>Could you please send me…?</i></li><li>Pièce jointe : <i>Please find attached the quote.</i></li><li>Clôture : <i>I look forward to hearing from you.</i> / <i>Best regards,</i></li></ul>",
              say: [
                { t: "Please find attached the quote.", fr: "Veuillez trouver ci-joint le devis." },
                { t: "I look forward to hearing from you.", fr: "Dans l’attente de votre réponse." },
                { t: "Best regards", fr: "Cordialement" },
              ],
            },
            {
              title: "Au téléphone et en visio",
              say: [
                { t: "Hello, this is Noa from Centr Supply.", fr: "Bonjour, ici Noa de Centr Supply." },
                { t: "Could you speak more slowly, please?", fr: "Pourriez-vous parler plus lentement ?" },
                { t: "Sorry, you're breaking up.", fr: "Désolé, ça coupe." },
                { t: "Can I call you back?", fr: "Puis-je vous rappeler ?" },
                { t: "Let me check and get back to you.", fr: "Je vérifie et je reviens vers vous." },
              ],
              body: "<p>Au téléphone, commence toujours par te présenter (<i>this is…</i>, et non <i>I am…</i>).</p>",
            },
            {
              title: "Les chiffres et les prix",
              say: [
                { t: "a quote", fr: "un devis" },
                { t: "an invoice", fr: "une facture" },
                { t: "The price is 4.50 dollars per unit.", fr: "Le prix est de 4,50 dollars l’unité." },
                { t: "What's your minimum order?", fr: "Quelle est votre commande minimum ?" },
                { t: "delivery time", fr: "délai de livraison" },
              ],
              body: "<p>Attention : en anglais, le séparateur décimal est un <b>point</b> (4.50) et les milliers ont une <b>virgule</b> (1,000).</p>",
            },
            {
              title: "Négocier poliment",
              body:
                "<p>L’anglais professionnel adoucit les demandes. On évite le « non » brutal et l’impératif.</p><ul><li><i>Would it be possible to…?</i> (Serait-il possible de… ?)</li><li><i>Could you do a better price for 1,000 units?</i></li><li><i>I'm afraid that's a bit high for us.</i> (Je crains que ce soit un peu cher pour nous.)</li><li><i>Let's meet halfway.</i> (Coupons la poire en deux.)</li><li><i>Can you confirm that in writing?</i> (Pouvez-vous le confirmer par écrit ?)</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Trop direct ou poli ?",
          instruction: "Classe chaque formulation pour un e-mail à un fournisseur.",
          categories: ["Trop direct", "Professionnel et poli"],
          items: [
            { text: "Send me the price.", cat: 0, why: "Impératif sec." },
            { text: "Could you please send me your price list?", cat: 1, why: "Demande polie." },
            { text: "Your price is too expensive.", cat: 0, why: "Brutal (et « price… expensive » est maladroit)." },
            { text: "I'm afraid that's a bit high for us.", cat: 1, why: "Formule diplomatique." },
            { text: "Would it be possible to deliver by Friday?", cat: 1, why: "Demande adoucie." },
            { text: "Deliver Friday.", cat: 0, why: "Ordre sans formule." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "a quote", back: "un devis" },
            { front: "an invoice", back: "une facture" },
            { front: "Please find attached…", back: "Veuillez trouver ci-joint…" },
            { front: "Let me get back to you.", back: "Je reviens vers vous." },
            { front: "I'm afraid that's a bit high.", back: "Je crains que ce soit un peu cher." },
            { front: "Can you confirm that in writing?", back: "Pouvez-vous le confirmer par écrit ?" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment écrit-on « mille deux cents dollars et cinquante cents » en anglais ?", options: ["$1.200,50", "$1,200.50", "$1 200,50"], answer: 1, explain: "Virgule pour les milliers, point pour les décimales." },
            { q: "Qu’as-tu entendu ?", say: "Could you send me an invoice?", options: ["Pourriez-vous m’envoyer une facture ?", "Pourriez-vous m’envoyer un devis ?", "Pourriez-vous m’inviter ?"], answer: 0, explain: "Invoice = facture (devis = quote)." },
            { q: "Au téléphone, pour te présenter, tu dis…", options: ["I am Noa.", "This is Noa from Centr Supply.", "Me, Noa."], answer: 1, explain: "This is… est la formule du téléphone." },
            { q: "Pour clore un e-mail formel, tu écris…", options: ["Bye!", "Best regards,", "Kisses,"], answer: 1, explain: "Best regards = cordialement." },
          ],
        },
        {
          type: "type",
          title: "Rédige",
          instruction: "Traduis en anglais professionnel.",
          items: [
            { prompt: "Veuillez trouver ci-joint le devis.", answer: ["please find attached the quote", "please find the quote attached", "please find attached our quote"] },
            { prompt: "Pourriez-vous m’envoyer la facture ?", answer: ["could you send me the invoice", "could you please send me the invoice", "could you send me the invoice please"] },
            { prompt: "Je vérifie et je reviens vers vous.", answer: ["let me check and get back to you", "i'll check and get back to you", "i will check and get back to you"] },
            { prompt: "Quelle est votre commande minimum ?", answer: ["what is your minimum order", "what's your minimum order"] },
          ],
        },
        {
          type: "case",
          title: "La négociation avec le fournisseur",
          story:
            "Un fournisseur propose à Noa des plaques NFC à 2.40 dollars l’unité pour 500 pièces. Noa voudrait 1 000 pièces à un meilleur prix, et éviter tout malentendu sur le délai.",
          question: "Quel message est le plus efficace ?",
          options: [
            "Too expensive. 1,000 pieces, 1.50 dollars.",
            "Thank you for your quote. We're interested in 1,000 units: could you do a better price for that quantity? Could you also confirm the delivery time in writing? Best regards, Noa",
            "Eventually we buy 1,000 if you are cheaper.",
          ],
          answer: 1,
          explain:
            "Remercier, annoncer le volume, demander un geste avec could, et faire confirmer par écrit : c’est la structure classique d’une négociation professionnelle en anglais. Et attention au faux ami « eventually » (finalement).",
        },
        {
          type: "fiche",
          title: "L’anglais du travail",
          points: [
            "E-mail : <b>Dear / Hi</b>, <b>I'm writing to…</b>, <b>Please find attached…</b>, <b>Best regards</b>.",
            "Téléphone : <b>This is… from…</b>, <b>Could you speak more slowly?</b>, <b>Let me get back to you</b>.",
            "Chiffres : <b>1,000.50</b> ; <b>quote</b> (devis), <b>invoice</b> (facture), <b>minimum order</b>.",
            "Négocier : <b>Would it be possible…?</b>, <b>I'm afraid…</b>, <b>Can you confirm in writing?</b>",
          ],
          retenir: "En anglais professionnel, on adoucit la forme pour être ferme sur le fond.",
        },
      ],
    },
  ],
});
