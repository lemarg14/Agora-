/* ============================================================
   COURS : Russe — les fondations
   Institut des Langues · 9 séances de 15 à 20 minutes
   Deux séances d'alphabet (cyrillique), puis les 6 axes :
   mots de survie, raccourcis depuis le français, grammaire
   (genres, cas), conjugaison (et aspect), voyage, travail.
   Les exercices écrits acceptent le cyrillique OU une
   translittération en lettres latines (privet, spasibo…).
   La translittération affichée est générée automatiquement.
   ============================================================ */
AGORA.registerCourse({
  id: "russe-fondations",
  faculty: "langues",
  lang: "ru-RU",
  title: "Russe — les fondations",
  subtitle: "Lire le cyrillique, prononcer et construire tes premières phrases",
  color: "#6b4f9a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Neuf séances pour démarrer le russe : deux séances pour apprivoiser l’alphabet cyrillique (plus facile qu’il n’en a l’air), puis les mots de survie, les nombreux mots venus du français, la grammaire essentielle avec une première approche des cas, les verbes au présent, au passé et au futur, le voyage et le travail. Dans les exercices écrits, tu peux répondre en cyrillique ou en lettres latines (privet, spasibo…).",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "L’alphabet (1) : les lettres faciles et les pièges",
      minutes: 18,
      objectives: ["Comprendre les grands principes du russe", "Lire les lettres cyrilliques qui ressemblent à l’alphabet latin"],
      steps: [
        {
          type: "lesson",
          title: "Le cyrillique, en trois groupes",
          slides: [
            {
              title: "Une langue slave, un autre alphabet",
              body:
                "<ul><li>Le russe est une langue <b>slave</b>, parlée par environ 250 millions de personnes : en Russie, mais aussi comme langue commune en Ukraine, au Bélarus, au Kazakhstan, dans le Caucase et en Asie centrale.</li><li>Il s’écrit en <b>cyrillique</b> : 33 lettres. Environ un tiers ressemble déjà à nos lettres.</li><li>L’<b>accent tonique</b> est libre (il peut tomber sur n’importe quelle syllabe) et n’est pas écrit : on l’apprend avec chaque mot, à l’oreille.</li><li>Un <b>o</b> non accentué se prononce presque « a » : <i>молоко</i> (lait) se dit « malaKO ».</li><li>Pas d’articles, pas de verbe « être » au présent, mais des <b>cas</b> (comme en allemand ou en polonais).</li></ul>",
            },
            {
              title: "Groupe 1 : les vraies jumelles",
              body:
                "<p>Ces lettres s’écrivent et se prononcent (presque) comme chez nous :</p><table class='t'><tr><th>Lettre</th><th>Son</th></tr><tr><td>А а</td><td>a</td></tr><tr><td>К к</td><td>k</td></tr><tr><td>М м</td><td>m</td></tr><tr><td>О о</td><td>o (ou « a » sans accent)</td></tr><tr><td>Т т</td><td>t</td></tr></table>",
              say: [
                { t: "мама", fr: "maman" },
                { t: "кот", fr: "chat" },
                { t: "атом", fr: "atome" },
              ],
            },
            {
              title: "Groupe 2 : les fausses amies",
              body:
                "<p>Elles ressemblent à des lettres latines… mais ne se lisent pas pareil. C’est le vrai piège du début :</p><table class='t'><tr><th>Lettre</th><th>Ressemble à</th><th>Se lit</th></tr><tr><td>В в</td><td>B</td><td><b>v</b></td></tr><tr><td>Н н</td><td>H</td><td><b>n</b></td></tr><tr><td>Р р</td><td>P</td><td><b>r</b> (roulé)</td></tr><tr><td>С с</td><td>C</td><td><b>s</b></td></tr><tr><td>У у</td><td>y</td><td><b>ou</b></td></tr><tr><td>Х х</td><td>X</td><td><b>kh</b> (raclé)</td></tr><tr><td>Е е</td><td>E</td><td><b>ié / é</b></td></tr></table>",
              say: [
                { t: "ресторан", fr: "restaurant (Р = r, С = s, Н = n)" },
                { t: "нет", fr: "non" },
                { t: "сок", fr: "jus" },
                { t: "метро", fr: "métro" },
              ],
            },
            {
              title: "Groupe 3 : les lettres nouvelles mais logiques",
              body:
                "<p>Beaucoup viennent de l’alphabet grec :</p><table class='t'><tr><th>Lettre</th><th>Son</th><th>Exemple</th></tr><tr><td>Б б</td><td>b</td><td>банк (banque)</td></tr><tr><td>Г г</td><td>g (dur)</td><td>гид (guide)</td></tr><tr><td>Д д</td><td>d</td><td>да (oui)</td></tr><tr><td>З з</td><td>z</td><td>зонт (parapluie)</td></tr><tr><td>И и</td><td>i</td><td>и (et)</td></tr><tr><td>Л л</td><td>l</td><td>лампа (lampe)</td></tr><tr><td>П п</td><td>p</td><td>парк (parc)</td></tr><tr><td>Ф ф</td><td>f</td><td>футбол (football)</td></tr></table>",
              say: [
                { t: "банк", fr: "banque" },
                { t: "парк", fr: "parc" },
                { t: "футбол", fr: "football" },
                { t: "такси", fr: "taxi" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Jumelle ou fausse amie ?",
          instruction: "Cette lettre cyrillique se lit-elle comme la lettre latine à laquelle elle ressemble ?",
          categories: ["Se lit pareil", "Piège : se lit autrement"],
          items: [
            { text: "А", cat: 0, why: "a." },
            { text: "Р", cat: 1, why: "r, pas p." },
            { text: "К", cat: 0, why: "k." },
            { text: "Н", cat: 1, why: "n, pas h." },
            { text: "С", cat: 1, why: "s, toujours (jamais k)." },
            { text: "М", cat: 0, why: "m." },
            { text: "В", cat: 1, why: "v, pas b." },
            { text: "У", cat: 1, why: "ou." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "ресторан", back: "restaurant" },
            { front: "метро", back: "métro" },
            { front: "такси", back: "taxi" },
            { front: "нет", back: "non" },
            { front: "да", back: "oui" },
            { front: "банк", back: "banque" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment se lit « РЕСТОРАН » ?", options: ["pectopah", "restoran (restaurant)", "rextopan"], answer: 1, explain: "Р = r, Е = é, С = s, Н = n." },
            { q: "Quel mot as-tu entendu ?", say: "такси", options: ["такси (taxi)", "тапки (chaussons)", "танки (tanks)"], answer: 0, explain: "Un mot international." },
            { q: "La lettre « В » se lit…", options: ["b", "v", "w"], answer: 1, explain: "В = v ; le b s’écrit Б." },
            { q: "Quel mot as-tu entendu ?", say: "метро", options: ["метро", "мэр", "море"], answer: 0, explain: "Métro." },
            { q: "Dans « молоко » (lait), comment sonnent les deux premiers « о » ?", options: ["Comme des o bien ronds", "Presque comme des a : malaKO", "Ils sont muets"], answer: 1, explain: "Un o non accentué s’affaiblit en « a »." },
          ],
        },
        {
          type: "type",
          title: "Lis et écris",
          instruction: "Écris le mot en lettres latines ou en cyrillique : les deux sont acceptés.",
          items: [
            { prompt: "Lis ce mot à voix haute puis écris-le en lettres latines : <b>ТАКСИ</b>", answer: ["такси", "taxi"], explain: "Taxi." },
            { prompt: "Lis et écris en lettres latines : <b>ПАРК</b>", answer: ["парк"], explain: "Parc." },
            { prompt: "Écoute et écris :", say: "банк", answer: ["банк"], explain: "Banque." },
            { prompt: "Écoute et écris :", say: "ресторан", answer: ["ресторан"], explain: "Restaurant." },
          ],
        },
        {
          type: "case",
          title: "L’enseigne mystérieuse",
          story:
            "Dans une rue d’Almaty, Noa cherche où dîner. Il passe devant une enseigne lumineuse : « PECTOPAH ». Il pense à une marque de pharmacie et continue son chemin.",
          question: "Que signifie l’enseigne ?",
          options: [
            "Une pharmacie",
            "РЕСТОРАН : restoran, un restaurant ; Р = r, С = s, Н = n",
            "Un magasin de pièces auto",
          ],
          answer: 1,
          explain:
            "C’est l’exemple classique des fausses amies du cyrillique. Dès que tu maîtrises les sept lettres pièges (В Н Р С У Х Е), une bonne partie des enseignes devient lisible.",
        },
        {
          type: "fiche",
          title: "Alphabet, partie 1",
          points: [
            "Russe : langue <b>slave</b>, alphabet <b>cyrillique</b> de 33 lettres, accent tonique <b>libre</b> et non écrit ; <b>о</b> non accentué ≈ « a ».",
            "Jumelles : <b>А К М О Т</b>.",
            "Fausses amies : <b>В</b> = v, <b>Н</b> = n, <b>Р</b> = r, <b>С</b> = s, <b>У</b> = ou, <b>Х</b> = kh, <b>Е</b> = ié.",
            "Logiques : <b>Б</b> b, <b>Г</b> g, <b>Д</b> d, <b>З</b> z, <b>И</b> i, <b>Л</b> l, <b>П</b> p, <b>Ф</b> f.",
          ],
          retenir: "PECTOPAH = restoran : maîtrise les 7 fausses amies et tu lis déjà les enseignes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "L’alphabet (2) : les lettres nouvelles",
      minutes: 18,
      objectives: ["Lire les lettres propres au cyrillique", "Comprendre les voyelles « mouillées » et les signes"],
      steps: [
        {
          type: "lesson",
          title: "Les lettres qui n’existent pas chez nous",
          slides: [
            {
              title: "Les chuintantes",
              body:
                "<table class='t'><tr><th>Lettre</th><th>Son</th><th>Exemple</th></tr><tr><td>Ж ж</td><td>j (jour)</td><td>журнал (magazine)</td></tr><tr><td>Ш ш</td><td>ch (chat)</td><td>шоколад (chocolat)</td></tr><tr><td>Щ щ</td><td>ch long et mouillé</td><td>борщ (bortch)</td></tr><tr><td>Ч ч</td><td>tch</td><td>чай (thé)</td></tr><tr><td>Ц ц</td><td>ts</td><td>центр (centre)</td></tr></table>",
              say: [
                { t: "журнал", fr: "magazine" },
                { t: "шоколад", fr: "chocolat" },
                { t: "чай", fr: "thé" },
                { t: "центр", fr: "centre" },
                { t: "борщ", fr: "bortch (soupe de betterave)" },
              ],
            },
            {
              title: "Les voyelles « mouillées »",
              body:
                "<p>Le russe a des voyelles en deux versions : une « dure » et une « mouillée » (avec un petit son « y » devant, et qui adoucit la consonne précédente).</p><table class='t'><tr><th>Dure</th><th>Mouillée</th></tr><tr><td>а (a)</td><td><b>я</b> (ia)</td></tr><tr><td>у (ou)</td><td><b>ю</b> (iou)</td></tr><tr><td>э (è)</td><td><b>е</b> (ié)</td></tr><tr><td>о (o)</td><td><b>ё</b> (io, toujours accentué)</td></tr><tr><td>ы (y)</td><td><b>и</b> (i)</td></tr></table><p><b>Ы</b> est un « i » prononcé avec la langue en arrière, un son sans équivalent en français : <i>ты</i> (tu), <i>мы</i> (nous).</p>",
              say: [
                { t: "я", fr: "je, moi" },
                { t: "меню", fr: "menu" },
                { t: "это", fr: "c’est, ceci" },
                { t: "ты", fr: "tu (ы)" },
              ],
            },
            {
              title: "Й et les deux signes",
              body:
                "<ul><li><b>Й</b> : un « y » bref, comme dans « paille » : <i>мой</i> (mon), <i>чай</i> (thé).</li><li><b>Ь</b> (signe mou) : ne se prononce pas, il <b>adoucit</b> la consonne qui précède : <i>день</i> (jour), <i>мать</i> (mère).</li><li><b>Ъ</b> (signe dur) : rare, il marque une petite séparation : <i>объект</i> (objet).</li></ul>",
              say: [
                { t: "мой", fr: "mon (Й)" },
                { t: "день", fr: "jour (Ь adoucit le н)" },
                { t: "Москва", fr: "Moscou (accent sur -VA)" },
              ],
            },
            {
              title: "Attention à l’écriture manuscrite",
              body:
                "<p>En italique et à la main, certaines lettres changent de visage :</p><ul><li><b>т</b> s’écrit comme un <i>m</i> ;</li><li><b>и</b> ressemble à un <i>u</i> ;</li><li><b>п</b> ressemble à un <i>n</i> ;</li><li><b>д</b> ressemble à un <i>g</i>.</li></ul><p>Sur les menus écrits à la main ou dans les e-mails en italique, pense à ces équivalences.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "чай", back: "thé (Ч = tch, Й = y bref)" },
            { front: "шоколад", back: "chocolat (Ш = ch)" },
            { front: "журнал", back: "magazine (Ж = j)" },
            { front: "центр", back: "centre (Ц = ts)" },
            { front: "меню", back: "menu (Ю = iou)" },
            { front: "это", back: "c’est, ceci (Э = è)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "чай", options: ["чай (thé)", "шар (boule)", "час (heure)"], answer: 0, explain: "Ч = tch." },
            { q: "« Я » signifie et se lit…", options: ["r, comme un R à l’envers", "ia, et veut dire « je »", "ya, et veut dire « oui »"], answer: 1, explain: "Я = ia, le pronom « je »." },
            { q: "Quelle lettre se lit « ch » comme dans « chat » ?", options: ["Ж", "Ш", "Ц"], answer: 1, explain: "Ж = j, Ц = ts." },
            { q: "Quel mot as-tu entendu ?", say: "шоколад", options: ["шоколад (chocolat)", "журнал (magazine)", "центр (centre)"], answer: 0, explain: "Emprunt au français." },
            { q: "À quoi sert le signe mou Ь ?", options: ["À allonger la voyelle", "À adoucir la consonne précédente ; il ne se prononce pas seul", "À marquer le pluriel"], answer: 1, explain: "день, мать." },
          ],
        },
        {
          type: "type",
          title: "Lis et écris",
          instruction: "Écris en lettres latines ou en cyrillique (les deux sont acceptés).",
          items: [
            { prompt: "Lis et écris en lettres latines : <b>ЧАЙ</b>", answer: ["чай"], explain: "Thé." },
            { prompt: "Lis et écris en lettres latines : <b>ЦЕНТР</b>", answer: ["центр"], explain: "Centre." },
            { prompt: "Écoute et écris :", say: "шоколад", answer: ["шоколад"], explain: "Chocolat." },
            { prompt: "Écoute et écris :", say: "меню", answer: ["меню"], explain: "Menu." },
          ],
        },
        {
          type: "case",
          title: "Le menu du café",
          story:
            "Dans un café, Sofia lit l’ardoise : « Меню : борщ, блины, чай, кофе, шоколад ». Elle n’a jamais étudié le russe mais connaît les deux séances d’alphabet.",
          question: "Que propose le café ?",
          options: [
            "Uniquement des boissons",
            "Bortch, blinis (crêpes), thé, café et chocolat",
            "Impossible à lire sans connaître le russe",
          ],
          answer: 1,
          explain:
            "борщ (bortch), блины (bliny, les crêpes), чай (tchaï), кофе (kofé), шоколад (chokolad) : avec l’alphabet seul, beaucoup de mots internationaux se déchiffrent immédiatement.",
        },
        {
          type: "fiche",
          title: "Alphabet, partie 2",
          points: [
            "Chuintantes : <b>Ж</b> j, <b>Ш</b> ch, <b>Щ</b> ch long, <b>Ч</b> tch, <b>Ц</b> ts.",
            "Voyelles mouillées : <b>я</b> ia, <b>ю</b> iou, <b>е</b> ié, <b>ё</b> io, <b>и</b> i ; dures : а у э о ы.",
            "<b>Ы</b> : « i » prononcé en arrière ; <b>Й</b> : y bref ; <b>Ь</b> adoucit, <b>Ъ</b> sépare.",
            "Manuscrit : <b>т</b> ≈ m, <b>и</b> ≈ u, <b>п</b> ≈ n, <b>д</b> ≈ g.",
          ],
          retenir: "Avec ces deux séances, tu sais lire tout l’alphabet russe : le reste est du vocabulaire.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les mots de survie",
      minutes: 16,
      objectives: ["Saluer, remercier et se présenter", "Compter et poser les questions de base"],
      steps: [
        {
          type: "lesson",
          title: "L’essentiel pour se débrouiller",
          slides: [
            {
              title: "Saluer et se présenter",
              say: [
                { t: "Здравствуйте!", fr: "Bonjour ! (formel ; le premier в est muet : zdrastvouïtié)" },
                { t: "Привет!", fr: "Salut ! (familier)" },
                { t: "Добрый день!", fr: "Bonjour ! (dans la journée, plus simple à prononcer)" },
                { t: "Меня зовут Ноа.", fr: "Je m’appelle Noa." },
                { t: "Очень приятно.", fr: "Enchanté." },
                { t: "До свидания!", fr: "Au revoir !" },
                { t: "Пока!", fr: "Salut, à plus ! (familier)" },
              ],
              body: "<p>Si <i>здравствуйте</i> te paraît imprononçable, <i>добрый день</i> est parfait en journée.</p>",
            },
            {
              title: "Les mots de politesse",
              body:
                "<p><b>Пожалуйста</b> veut dire « s’il vous plaît », « je vous en prie » (de rien) et « voici », comme le <i>bitte</i> allemand.</p>",
              say: [
                { t: "Спасибо!", fr: "Merci !" },
                { t: "Пожалуйста", fr: "S’il vous plaît / de rien / voici" },
                { t: "Извините", fr: "Excusez-moi, pardon" },
                { t: "Да / Нет", fr: "Oui / Non" },
                { t: "Я не понимаю.", fr: "Je ne comprends pas." },
                { t: "Вы говорите по-французски?", fr: "Parlez-vous français ?" },
              ],
            },
            {
              title: "Les mots pour questionner",
              say: [
                { t: "Что?", fr: "Quoi ? (se prononce « chto »)" },
                { t: "Где?", fr: "Où ?" },
                { t: "Когда?", fr: "Quand ?" },
                { t: "Кто?", fr: "Qui ?" },
                { t: "Почему?", fr: "Pourquoi ?" },
                { t: "Сколько стоит?", fr: "Combien ça coûte ?" },
              ],
              body: "<p>Pour poser une question fermée, on garde l’ordre de la phrase et on monte la voix : <i>Вы говорите по-английски?</i></p>",
            },
            {
              title: "Les nombres et la monnaie",
              body: "<p>En Russie, la monnaie est le <b>rouble</b> (рубль, ₽). Au Kazakhstan, c’est le tengé.</p>",
              say: [
                { t: "один, два, три", fr: "1, 2, 3" },
                { t: "четыре, пять", fr: "4, 5" },
                { t: "десять", fr: "10" },
                { t: "двадцать", fr: "20" },
                { t: "сто", fr: "100" },
                { t: "тысяча", fr: "1 000" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Здравствуйте", back: "Bonjour (formel)" },
            { front: "Привет", back: "Salut (familier)" },
            { front: "Спасибо", back: "Merci" },
            { front: "Пожалуйста", back: "S’il vous plaît / de rien / voici" },
            { front: "Извините", back: "Excusez-moi" },
            { front: "Сколько стоит?", back: "Combien ça coûte ?" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "Спасибо", options: ["Merci", "S’il vous plaît", "Pardon"], answer: 0, explain: "spaSIbo." },
            { q: "Quel nombre as-tu entendu ?", say: "пять", options: ["3", "5", "10"], answer: 1, explain: "пять = 5." },
            { q: "On te dit « Спасибо ! ». Tu réponds…", options: ["Пожалуйста", "Привет", "Нет"], answer: 0, explain: "Пожалуйста = je vous en prie." },
            { q: "Pour saluer un client que tu rencontres pour la première fois :", options: ["Привет!", "Здравствуйте!", "Пока!"], answer: 1, explain: "Привет et пока sont familiers." },
            { q: "Quel mot as-tu entendu ?", say: "Где?", options: ["Où ?", "Quand ?", "Qui ?"], answer: 0, explain: "где = où." },
          ],
        },
        {
          type: "type",
          title: "Traduis en russe",
          instruction: "Écris en russe, en cyrillique ou en lettres latines (spasibo…).",
          items: [
            { prompt: "Merci", answer: ["спасибо", "спасибо большое", "большое спасибо"] },
            { prompt: "Bonjour (formel)", answer: ["здравствуйте", "добрый день"], explain: "Le premier в de здравствуйте ne se prononce pas." },
            { prompt: "Je m’appelle Sarah.", answer: ["меня зовут сара", "меня зовут сарах", "я сара"] },
            { prompt: "Je ne comprends pas.", answer: ["я не понимаю", "не понимаю"] },
            { prompt: "Oui / Non (écris « oui »)", answer: ["да"] },
          ],
        },
        {
          type: "case",
          title: "Le premier rendez-vous",
          story:
            "Noa rencontre pour la première fois un distributeur d’une cinquantaine d’années. Il a appris « Привет ! » dans une vidéo et l’utilise en lui serrant la main. Son interlocuteur sourit, un peu surpris.",
          question: "Qu’aurait-il fallu dire ?",
          options: [
            "Пока!",
            "Здравствуйте ! (ou Добрый день !) : привет est réservé aux amis et aux proches",
            "Спасибо!",
          ],
          answer: 1,
          explain:
            "Le russe distingue nettement le registre familier (ты, привет, пока) du registre poli (вы, здравствуйте, до свидания). Avec un partenaire, on reste dans le poli jusqu’à ce qu’il propose autre chose.",
        },
        {
          type: "fiche",
          title: "Mots de survie",
          points: [
            "Saluer : <b>здравствуйте</b> / <b>добрый день</b> (poli), <b>привет</b> (familier), <b>меня зовут…</b>, <b>до свидания</b> / <b>пока</b>.",
            "<b>спасибо</b>, <b>пожалуйста</b> (s’il vous plaît, de rien, voici), <b>извините</b>, <b>да / нет</b>, <b>я не понимаю</b>.",
            "Questions : <b>что, где, когда, кто, почему, сколько стоит?</b>",
            "Nombres : <b>один, два, три, пять, десять, сто, тысяча</b> ; monnaie : <b>рубль</b>.",
          ],
          retenir: "Здравствуйте, спасибо, пожалуйста : la politesse russe en trois mots.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Les raccourcis depuis le français",
      minutes: 15,
      objectives: ["Reconnaître les nombreux emprunts au français", "Éviter les faux amis"],
      steps: [
        {
          type: "lesson",
          title: "Le français caché dans le russe",
          slides: [
            {
              title: "Un héritage du XIXe siècle",
              body:
                "<p>Au XVIIIe et au XIXe siècle, l’aristocratie russe parlait français : le début de <i>Guerre et Paix</i> de Tolstoï est écrit en français ! Le russe en a gardé des centaines de mots :</p>",
              say: [
                { t: "пляж", fr: "plage" },
                { t: "багаж", fr: "bagage" },
                { t: "шофёр", fr: "chauffeur" },
                { t: "тротуар", fr: "trottoir" },
                { t: "пальто", fr: "manteau (de « paletot »)" },
                { t: "магазин", fr: "magasin, boutique" },
              ],
            },
            {
              title: "Les terminaisons internationales",
              body:
                "<table class='t'><tr><th>Français</th><th>Russe</th><th>Exemples</th></tr><tr><td>-tion</td><td>-ция</td><td>информация, ситуация, революция</td></tr><tr><td>-isme</td><td>-изм</td><td>туризм</td></tr><tr><td>-logie</td><td>-логия</td><td>биология, технология</td></tr><tr><td>-iste</td><td>-ист</td><td>турист, журналист</td></tr></table>",
              say: [
                { t: "информация", fr: "information" },
                { t: "ситуация", fr: "situation" },
                { t: "журналист", fr: "journaliste" },
              ],
            },
            {
              title: "Les faux amis",
              body:
                "<table class='t'><tr><th>Russe</th><th>Veut dire</th><th>Et pas…</th></tr><tr><td>фамилия</td><td>nom de famille</td><td>famille (= семья)</td></tr><tr><td>кабинет</td><td>bureau (la pièce)</td><td>cabinet de toilette</td></tr><tr><td>аккуратный</td><td>soigneux, ordonné</td><td>précis</td></tr><tr><td>декада</td><td>période de dix jours</td><td>décennie</td></tr><tr><td>артист</td><td>acteur, comédien</td><td>artiste peintre (= художник)</td></tr><tr><td>компот</td><td>boisson aux fruits cuits</td><td>compote</td></tr></table>",
            },
            {
              title: "Les mots modernes",
              body: "<p>L’anglais a apporté beaucoup de mots récents, faciles à reconnaître une fois l’alphabet acquis.</p>",
              say: [
                { t: "компьютер", fr: "ordinateur" },
                { t: "интернет", fr: "internet" },
                { t: "менеджер", fr: "manager, commercial" },
                { t: "бизнес", fr: "business" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Vrai ami ou faux ami ?",
          instruction: "Le mot russe a-t-il le même sens que le mot français qui lui ressemble ?",
          categories: ["Même sens", "Faux ami"],
          items: [
            { text: "пляж (pliaj)", cat: 0, why: "Plage." },
            { text: "фамилия (familiia)", cat: 1, why: "Nom de famille." },
            { text: "багаж (bagaj)", cat: 0, why: "Bagage." },
            { text: "декада (dékada)", cat: 1, why: "Dix jours." },
            { text: "информация (informatsiia)", cat: 0, why: "Information." },
            { text: "аккуратный (akkouratnyï)", cat: 1, why: "Soigneux." },
            { text: "компот (kompot)", cat: 1, why: "Boisson aux fruits." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "пляж", back: "plage" },
            { front: "тротуар", back: "trottoir" },
            { front: "магазин", back: "magasin, boutique" },
            { front: "информация", back: "information (-tion → -ция)" },
            { front: "фамилия", back: "nom de famille (famille = семья)" },
            { front: "кабинет", back: "bureau (la pièce)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un formulaire te demande ta « фамилия ». Tu écris…", options: ["les noms de ta famille", "ton nom de famille", "ton adresse"], answer: 1, explain: "Фамилия = nom de famille." },
            { q: "Quel mot as-tu entendu ?", say: "тротуар", options: ["тротуар (trottoir)", "театр (théâtre)", "туалет (toilettes)"], answer: 0, explain: "Emprunt au français." },
            { q: "Comment dit-on « situation » ?", options: ["ситуация", "ситуасьон", "ситуатион"], answer: 0, explain: "-tion → -ция." },
            { q: "On te dit qu’un employé est « аккуратный ». C’est…", options: ["un compliment : il est soigneux", "un reproche : il est lent", "il est précis dans ses calculs"], answer: 0, explain: "Faux ami." },
          ],
        },
        {
          type: "type",
          title: "Retrouve le mot russe",
          instruction: "Écris en russe, en cyrillique ou en lettres latines.",
          items: [
            { prompt: "plage", answer: ["пляж"] },
            { prompt: "information", answer: ["информация"], hint: "-tion → -ция" },
            { prompt: "chauffeur", answer: ["шофёр", "шофер", "водитель"] },
            { prompt: "bagage", answer: ["багаж"] },
          ],
        },
        {
          type: "case",
          title: "Le formulaire de l’hôtel",
          story:
            "À l’accueil d’un hôtel, Noa remplit une fiche : « Имя : … Фамилия : … ». Il écrit son prénom dans la première case, puis « mère, père, sœur » dans la seconde, pensant qu’on lui demande sa famille.",
          question: "Que fallait-il écrire dans la case « Фамилия » ?",
          options: [
            "Les membres de sa famille",
            "Son nom de famille : фамилия est un faux ami",
            "Sa nationalité",
          ],
          answer: 1,
          explain:
            "Имя = prénom, фамилия = nom de famille. Ces deux mots apparaissent sur tous les formulaires (hôtel, banque, douane) : à connaître par cœur.",
        },
        {
          type: "fiche",
          title: "Raccourcis depuis le français",
          points: [
            "Emprunts au français : <b>пляж, багаж, шофёр, тротуар, пальто, магазин</b>.",
            "Terminaisons : <b>-tion → -ция</b>, <b>-isme → -изм</b>, <b>-logie → -логия</b>, <b>-iste → -ист</b>.",
            "Faux amis : <b>фамилия</b> (nom de famille), <b>кабинет</b>, <b>аккуратный</b>, <b>декада</b>, <b>артист</b>, <b>компот</b>.",
            "Formulaires : <b>имя</b> = prénom, <b>фамилия</b> = nom.",
          ],
          retenir: "Le russe a emprunté des centaines de mots au français : une fois l’alphabet lu, tu les reconnais.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "La grammaire essentielle",
      minutes: 18,
      objectives: ["Construire des phrases simples sans verbe « être »", "Reconnaître le genre et comprendre le principe des cas"],
      steps: [
        {
          type: "lesson",
          title: "Les briques de la phrase",
          slides: [
            {
              title: "Pas d’articles, pas de « être »",
              body:
                "<ul><li>Pas d’articles : <i>кот</i> = « le chat » ou « un chat ».</li><li>Au présent, le verbe « être » disparaît : <i>Я студент.</i> = « Je (suis) étudiant. » <i>Это Анна.</i> = « C’est Anna. »</li><li>Pour dire « avoir », on dit « chez moi il y a » : <i>У меня есть машина.</i> (J’ai une voiture.)</li></ul>",
              say: [
                { t: "Я студент.", fr: "Je suis étudiant." },
                { t: "Это Анна.", fr: "C’est Anna." },
                { t: "У меня есть вопрос.", fr: "J’ai une question." },
              ],
            },
            {
              title: "Trois genres",
              body:
                "<table class='t'><tr><th>Genre</th><th>Terminaison</th><th>Exemples</th></tr><tr><td>Masculin</td><td>consonne, -й</td><td>дом (maison), чай (thé)</td></tr><tr><td>Féminin</td><td>-а, -я</td><td>вода (eau), неделя (semaine)</td></tr><tr><td>Neutre</td><td>-о, -е</td><td>окно (fenêtre), море (mer)</td></tr></table><p>Les mots en <b>-ь</b> peuvent être masculins ou féminins : à apprendre au cas par cas.</p>",
            },
            {
              title: "Pronoms, vouvoiement et négation",
              body:
                "<table class='t'><tr><th>Russe</th><th>Sens</th></tr><tr><td>я</td><td>je</td></tr><tr><td>ты</td><td>tu</td></tr><tr><td>он / она / оно</td><td>il / elle / « il » neutre</td></tr><tr><td>мы</td><td>nous</td></tr><tr><td>вы</td><td>vous (pluriel ou politesse)</td></tr><tr><td>они</td><td>ils, elles</td></tr></table><p>Négation : <b>не</b> devant le verbe. <i>Я не говорю по-русски.</i> (Je ne parle pas russe.)</p>",
            },
            {
              title: "Le principe des cas",
              body:
                "<p>Le russe a <b>six cas</b> : la fin d’un nom change selon son rôle. Commence par l’<b>accusatif</b> (le complément d’objet) des mots féminins :</p><ul><li>Sujet : <i>Это вода.</i> (C’est de l’eau.)</li><li>Objet : <i>Я хочу вод<b>у</b>.</i> (Je veux de l’eau : -а devient -у.)</li><li><i>Дайте, пожалуйста, карт<b>у</b>.</i> (Donnez-moi la carte, s’il vous plaît.)</li></ul><p>Les mots masculins d’objets et les neutres ne changent pas : <i>Я хочу чай. Я хочу кофе.</i></p>",
              say: [
                { t: "Это вода.", fr: "C’est de l’eau." },
                { t: "Я хочу воду.", fr: "Je veux de l’eau." },
                { t: "Я хочу чай.", fr: "Je veux du thé." },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Quel genre ?",
          instruction: "Classe chaque nom selon son genre (d’après sa terminaison).",
          categories: ["Masculin", "Féminin", "Neutre"],
          items: [
            { text: "дом (maison)", cat: 0, why: "Consonne finale." },
            { text: "вода (eau)", cat: 1, why: "Finale -а." },
            { text: "окно (fenêtre)", cat: 2, why: "Finale -о." },
            { text: "чай (thé)", cat: 0, why: "Finale -й." },
            { text: "неделя (semaine)", cat: 1, why: "Finale -я." },
            { text: "море (mer)", cat: 2, why: "Finale -е." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Я студент.", back: "Je suis étudiant (pas de verbe « être »)." },
            { front: "У меня есть…", back: "J’ai… (litt. « chez moi il y a »)" },
            { front: "вода / воду", back: "eau (sujet) / eau (objet : Я хочу воду)" },
            { front: "не", back: "ne… pas" },
            { front: "вы", back: "vous (pluriel ou politesse)" },
            { front: "Я не говорю по-русски.", back: "Je ne parle pas russe." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment dit-on « Je suis français » ?", options: ["Я есть француз.", "Я француз.", "Я быть француз."], answer: 1, explain: "Pas de verbe « être » au présent." },
            { q: "Quel est le genre de « машина » (voiture) ?", options: ["Masculin", "Féminin", "Neutre"], answer: 1, explain: "Finale -а." },
            { q: "« Je veux de l’eau » se dit…", options: ["Я хочу вода.", "Я хочу воду.", "Я хочу водой."], answer: 1, explain: "Accusatif féminin : -а → -у." },
            { q: "Quelle phrase as-tu entendue ?", say: "У меня есть вопрос.", options: ["J’ai une question.", "Il y a un problème.", "Où est la question ?"], answer: 0, explain: "У меня есть = j’ai." },
          ],
        },
        {
          type: "type",
          title: "Construis la phrase",
          instruction: "Écris en russe, en cyrillique ou en lettres latines.",
          items: [
            { prompt: "Je veux de l’eau. (вода)", answer: ["я хочу воду", "хочу воду"] },
            { prompt: "Je ne parle pas russe.", answer: ["я не говорю по-русски", "я не говорю по русски", "не говорю по-русски"] },
            { prompt: "C’est Anna.", answer: ["это анна"] },
            { prompt: "J’ai une question. (вопрос)", answer: ["у меня есть вопрос", "у меня вопрос"] },
          ],
        },
        {
          type: "case",
          title: "La commande au café",
          story:
            "Hugo commande : « Я хочу вода и кофе. » La serveuse le comprend parfaitement et revient avec de l’eau et un café.",
          question: "Quelle est la forme correcte, et est-ce grave ?",
          options: [
            "Rien à corriger",
            "« Я хочу воду и кофе » : вода passe à l’accusatif (-у) ; кофе ne change pas. L’erreur ne gêne pas la compréhension",
            "« Я хочу воды и кофы »",
          ],
          answer: 1,
          explain:
            "Les russophones comprennent très bien un étranger qui se trompe de cas. Avec l’accusatif féminin (-а → -у), tu couvres déjà la plupart des commandes et des demandes. Pour être plus poli : « Можно воду, пожалуйста? »",
        },
        {
          type: "fiche",
          title: "Grammaire essentielle",
          points: [
            "Pas d’articles, <b>pas de « être »</b> au présent : <b>Я студент</b> ; avoir : <b>У меня есть…</b>",
            "Genres : consonne / -й (masc.), <b>-а / -я</b> (fém.), <b>-о / -е</b> (neutre) ; -ь à apprendre.",
            "Pronoms <b>я, ты, он, она, оно, мы, вы, они</b> ; politesse : <b>вы</b> ; négation <b>не</b>.",
            "Six <b>cas</b> ; accusatif féminin <b>-а → -у</b> : <b>Я хочу воду</b>.",
          ],
          retenir: "Я студент, У меня есть…, Я хочу воду : trois structures qui couvrent beaucoup de situations.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Le présent",
      minutes: 17,
      objectives: ["Conjuguer les deux grands groupes de verbes", "Se présenter : origine, âge, langues"],
      steps: [
        {
          type: "lesson",
          title: "Les verbes du quotidien",
          slides: [
            {
              title: "1re conjugaison : читать (lire)",
              body:
                "<table class='t'><tr><th>Sujet</th><th>читать</th><th>знать (savoir)</th></tr><tr><td>я</td><td>читаю</td><td>знаю</td></tr><tr><td>ты</td><td>читаешь</td><td>знаешь</td></tr><tr><td>он / она</td><td>читает</td><td>знает</td></tr><tr><td>мы</td><td>читаем</td><td>знаем</td></tr><tr><td>вы</td><td>читаете</td><td>знаете</td></tr><tr><td>они</td><td>читают</td><td>знают</td></tr></table><p>Même modèle : <i>работать</i> (travailler), <i>понимать</i> (comprendre), <i>делать</i> (faire).</p>",
              say: [
                { t: "Я работаю.", fr: "Je travaille." },
                { t: "Я не знаю.", fr: "Je ne sais pas." },
              ],
            },
            {
              title: "2e conjugaison : говорить (parler)",
              body:
                "<table class='t'><tr><th>Sujet</th><th>говорить</th></tr><tr><td>я</td><td>говорю</td></tr><tr><td>ты</td><td>говоришь</td></tr><tr><td>он / она</td><td>говорит</td></tr><tr><td>мы</td><td>говорим</td></tr><tr><td>вы</td><td>говорите</td></tr><tr><td>они</td><td>говорят</td></tr></table><p>Même modèle : <i>звонить</i> (téléphoner), <i>платить</i> (payer, avec я плачу).</p>",
              say: [
                { t: "Я говорю немного по-русски.", fr: "Je parle un peu russe." },
                { t: "Вы говорите по-английски?", fr: "Parlez-vous anglais ?" },
              ],
            },
            {
              title: "Les irréguliers utiles",
              body:
                "<ul><li><b>хотеть</b> (vouloir) : хочу, хочешь, хочет, хотим, хотите, хотят.</li><li><b>мочь</b> (pouvoir) : могу, можешь, может… <i>Можно?</i> = « C’est possible ? / Je peux ? »</li><li><b>жить</b> (habiter) : живу, живёшь, живёт… <i>Я живу во Франции.</i></li></ul><p>Pour être poli, préfère <i>Я хотел бы…</i> (homme) / <i>Я хотела бы…</i> (femme) : « je voudrais ».</p>",
            },
            {
              title: "Se présenter",
              say: [
                { t: "Я из Франции.", fr: "Je viens de France." },
                { t: "Я француз. / Я француженка.", fr: "Je suis français. / Je suis française." },
                { t: "Я живу во Франции.", fr: "J’habite en France." },
                { t: "Мне двадцать пять лет.", fr: "J’ai 25 ans (litt. « à moi 25 ans »)." },
              ],
              body: "<p>L’âge se dit avec <i>мне</i> (« à moi ») : <i>Мне 25 лет.</i></p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "читаю / читаешь / читает", back: "je lis / tu lis / il lit" },
            { front: "говорю / говоришь / говорит", back: "je parle / tu parles / il parle" },
            { front: "хочу", back: "je veux" },
            { front: "Можно?", back: "Je peux ? / C’est possible ?" },
            { front: "Я из Франции.", back: "Je viens de France." },
            { front: "Мне 25 лет.", back: "J’ai 25 ans." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Complète : Мы ___ (работать) в Париже.", options: ["работаем", "работают", "работаю"], answer: 0, explain: "Мы работаем." },
            { q: "Complète : Они ___ (говорить) по-французски.", options: ["говорит", "говорят", "говорим"], answer: 1, explain: "Они говорят." },
            { q: "Comment dit-on « J’ai 25 ans » ?", options: ["У меня 25 лет.", "Мне 25 лет.", "Я 25 лет."], answer: 1, explain: "L’âge se dit au datif : мне." },
            { q: "Quelle phrase as-tu entendue ?", say: "Я говорю немного по-русски.", options: ["Je parle un peu russe.", "Je ne parle pas russe.", "Tu parles russe ?"], answer: 0, explain: "немного = un peu." },
          ],
        },
        {
          type: "type",
          title: "Conjugue",
          instruction: "Écris la forme correcte, en cyrillique ou en lettres latines.",
          items: [
            { prompt: "Я ___ (работать) в Кане.", answer: ["работаю"] },
            { prompt: "Ты ___ (говорить) по-русски?", answer: ["говоришь"] },
            { prompt: "Traduis : Je ne sais pas.", answer: ["я не знаю", "не знаю"] },
            { prompt: "Traduis : Je viens de France.", answer: ["я из франции", "из франции"] },
          ],
        },
        {
          type: "case",
          title: "Se présenter à un partenaire",
          story:
            "Noa rencontre un importateur à Almaty. Il veut dire : « Je viens de France, j’habite à Caen et je parle un peu russe. »",
          question: "Quelle phrase est correcte ?",
          options: [
            "Я есть Франция, я жить Кан, я говорить русский.",
            "Я из Франции, я живу в Кане и немного говорю по-русски.",
            "Он из Франции, живёт в Кане.",
          ],
          answer: 1,
          explain:
            "Из Франции (de France), живу (j’habite), говорю по-русски (je parle russe). Une présentation simple et correcte fait toujours une excellente impression, surtout dans une langue réputée difficile.",
        },
        {
          type: "fiche",
          title: "Le présent",
          points: [
            "1re conjugaison : <b>читаю, читаешь, читает, читаем, читаете, читают</b>.",
            "2e conjugaison : <b>говорю, говоришь, говорит, говорим, говорите, говорят</b>.",
            "Irréguliers : <b>хочу, могу, живу</b> ; poli : <b>я хотел(а) бы</b> ; <b>Можно?</b>",
            "Se présenter : <b>Я из Франции</b>, <b>Я живу во Франции</b>, <b>Мне 25 лет</b>.",
          ],
          retenir: "Deux modèles de conjugaison (читаю / говорю) couvrent la grande majorité des verbes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Passé, futur et aspect",
      minutes: 17,
      objectives: ["Raconter au passé en accordant selon le genre", "Comprendre l’aspect et parler du futur"],
      steps: [
        {
          type: "lesson",
          title: "Sortir du présent",
          slides: [
            {
              title: "Le passé : très simple",
              body:
                "<p>Le passé se forme avec <b>-л</b> et s’accorde seulement en <b>genre et nombre</b> (pas en personne) :</p><table class='t'><tr><th></th><th>Homme</th><th>Femme</th><th>Pluriel</th></tr><tr><td>быть (être)</td><td>был</td><td>была</td><td>были</td></tr><tr><td>работать</td><td>работал</td><td>работала</td><td>работали</td></tr><tr><td>говорить</td><td>говорил</td><td>говорила</td><td>говорили</td></tr></table>",
              say: [
                { t: "Я был в Москве.", fr: "J’ai été à Moscou (dit par un homme)." },
                { t: "Я была в Москве.", fr: "J’ai été à Moscou (dit par une femme)." },
              ],
            },
            {
              title: "L’aspect : en cours ou terminé",
              body:
                "<p>Presque chaque verbe russe existe <b>par paire</b> :</p><ul><li><b>imperfectif</b> : action en cours, habituelle ou répétée. <i>делать</i> (faire), <i>писать</i> (écrire), <i>звонить</i> (appeler).</li><li><b>perfectif</b> : action vue comme <b>terminée</b>, avec un résultat. <i>сделать, написать, позвонить</i>.</li></ul><p><i>Я писал письмо</i> = j’écrivais une lettre. <i>Я написал письмо</i> = j’ai écrit la lettre (elle est finie).</p>",
            },
            {
              title: "Le futur",
              body:
                "<ul><li>Verbe <b>perfectif</b> conjugué comme au présent = <b>futur</b> : <i>Я позвоню завтра.</i> (J’appellerai demain.) <i>Я отправлю письмо.</i> (J’enverrai la lettre.)</li><li>Verbe <b>imperfectif</b> : <b>буду</b> + infinitif : <i>Я буду работать в Казахстане.</i> (Je travaillerai au Kazakhstan.)</li></ul>",
              say: [
                { t: "Я позвоню завтра.", fr: "J’appellerai demain." },
                { t: "Я буду работать.", fr: "Je travaillerai." },
              ],
            },
            {
              title: "Repères de temps",
              say: [
                { t: "вчера", fr: "hier" },
                { t: "сегодня", fr: "aujourd’hui (le г se lit v : sevodnia)" },
                { t: "завтра", fr: "demain" },
                { t: "сейчас", fr: "maintenant" },
                { t: "на следующей неделе", fr: "la semaine prochaine" },
              ],
              body: "<p>Dans les terminaisons <b>-ого / -его</b> et dans <i>сегодня</i>, le г se prononce v.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "был / была / были", back: "il était, j’étais (homme / femme / pluriel)" },
            { front: "делать / сделать", back: "faire (en cours) / faire (terminé)" },
            { front: "звонить / позвонить", back: "appeler (en cours) / appeler (une fois, terminé)" },
            { front: "Я позвоню завтра.", back: "J’appellerai demain (perfectif = futur)." },
            { front: "буду + infinitif", back: "futur des verbes imperfectifs" },
            { front: "вчера / завтра", back: "hier / demain" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Sofia (une femme) dit « j’ai travaillé » :", options: ["Я работал.", "Я работала.", "Я работали."], answer: 1, explain: "Féminin : -ла." },
            { q: "Quelle forme indique une action terminée ?", options: ["писать", "написать"], answer: 1, explain: "Le préfixe на- forme ici le perfectif." },
            { q: "« Я отправлю письмо » signifie…", options: ["J’ai envoyé la lettre", "J’enverrai la lettre", "J’envoie des lettres"], answer: 1, explain: "Perfectif conjugué au présent = futur." },
            { q: "Quelle phrase as-tu entendue ?", say: "Я позвоню завтра.", options: ["J’appellerai demain.", "J’ai appelé hier.", "Appelle-moi demain."], answer: 0, explain: "Позвонить : perfectif." },
          ],
        },
        {
          type: "type",
          title: "Passé et futur",
          instruction: "Écris en russe, en cyrillique ou en lettres latines.",
          items: [
            { prompt: "j’ai été / j’étais (tu es un homme)", answer: ["я был", "был"] },
            { prompt: "j’ai été / j’étais (tu es une femme)", answer: ["я была", "была"] },
            { prompt: "J’appellerai demain.", answer: ["я позвоню завтра", "позвоню завтра", "завтра я позвоню", "завтра позвоню"] },
            { prompt: "demain", answer: ["завтра"] },
          ],
        },
        {
          type: "case",
          title: "La promesse au client",
          story:
            "Un client demande quand il recevra l’offre. Noa répond « Я отправляю предложение завтра », en pensant dire « J’enverrai l’offre demain ».",
          question: "Quelle forme exprime le mieux la promesse d’un envoi fait demain ?",
          options: [
            "Я отправляю предложение завтра.",
            "Я отправлю предложение завтра. (perfectif : l’envoi sera fait)",
            "Я отправлял предложение завтра.",
          ],
          answer: 1,
          explain:
            "Отправлять (imperfectif) / отправить (perfectif). Le perfectif conjugué (отправлю) donne un futur ferme : « j’enverrai ». C’est ce qui rassure un client.",
        },
        {
          type: "fiche",
          title: "Passé, futur, aspect",
          points: [
            "Passé en <b>-л</b>, accordé en genre : <b>был / была / были</b>, <b>работал / работала</b>.",
            "Paires de verbes : <b>imperfectif</b> (en cours) / <b>perfectif</b> (terminé) : делать / сделать.",
            "Futur : perfectif conjugué (<b>позвоню</b>) ou <b>буду</b> + infinitif imperfectif.",
            "Repères : <b>вчера, сегодня, завтра, сейчас</b>.",
          ],
          retenir: "Le passé russe est l’un des plus simples d’Europe ; la vraie nouveauté, c’est l’aspect.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "En voyage",
      minutes: 16,
      objectives: ["Se déplacer, se loger et se restaurer", "Demander son chemin"],
      steps: [
        {
          type: "lesson",
          title: "Les situations du voyage",
          slides: [
            {
              title: "Se déplacer",
              say: [
                { t: "аэропорт", fr: "aéroport" },
                { t: "вокзал", fr: "gare (de « Vauxhall », un parc londonien)" },
                { t: "поезд", fr: "train" },
                { t: "билет", fr: "billet" },
                { t: "Рейс задерживается.", fr: "Le vol est retardé." },
              ],
              body: "<p>Dans le métro, les annonces et les plans sont souvent en cyrillique seulement : savoir lire l’alphabet change tout.</p>",
            },
            {
              title: "À l’hôtel",
              say: [
                { t: "гостиница", fr: "hôtel" },
                { t: "У меня бронь.", fr: "J’ai une réservation." },
                { t: "Завтрак включён?", fr: "Le petit-déjeuner est-il compris ?" },
                { t: "Вай-фай не работает.", fr: "Le Wi-Fi ne marche pas." },
              ],
              body: "<p>Remarque : on dit aussi <i>отель</i>, plus moderne.</p>",
            },
            {
              title: "Au restaurant",
              say: [
                { t: "Меню, пожалуйста.", fr: "La carte, s’il vous plaît." },
                { t: "Приятного аппетита!", fr: "Bon appétit !" },
                { t: "За здоровье!", fr: "À la santé ! (en trinquant)" },
                { t: "Счёт, пожалуйста.", fr: "L’addition, s’il vous plaît." },
                { t: "Можно картой?", fr: "Je peux payer par carte ?" },
              ],
              body: "<p>Contrairement à l’idée reçue, les russophones ne trinquent pas avec « na zdorovie » (qui répond plutôt à un merci pour le repas) : on porte un toast, par exemple <i>За здоровье!</i> ou <i>За нас!</i> (À nous !).</p>",
            },
            {
              title: "Demander son chemin",
              say: [
                { t: "Где вокзал?", fr: "Où est la gare ?" },
                { t: "прямо", fr: "tout droit" },
                { t: "налево / направо", fr: "à gauche / à droite" },
                { t: "Это далеко?", fr: "C’est loin ?" },
                { t: "близко", fr: "près" },
              ],
              body: "<p>Et : <i>рядом</i> (à côté), <i>напротив</i> (en face).</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "вокзал / поезд", back: "gare / train" },
            { front: "задерживается", back: "est retardé" },
            { front: "У меня бронь.", back: "J’ai une réservation." },
            { front: "Счёт, пожалуйста.", back: "L’addition, s’il vous plaît." },
            { front: "Приятного аппетита!", back: "Bon appétit !" },
            { front: "налево / направо", back: "à gauche / à droite" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’as-tu entendu ?", say: "Поезд задерживается.", options: ["Le train est retardé.", "Le train est annulé.", "Le train est complet."], answer: 0, explain: "Задерживается = est retardé." },
            { q: "Qu’as-tu entendu ?", say: "Идите прямо, потом направо.", options: ["Allez tout droit, puis à droite.", "Allez à gauche, puis tout droit.", "Revenez en arrière."], answer: 0, explain: "Прямо = tout droit, направо = à droite." },
            { q: "Pour trinquer, on dit plutôt…", options: ["« Na zdorovie ! », comme dans les films", "Un toast : « За здоровье ! » ou « За нас ! »", "« Приятного аппетита ! »"], answer: 1, explain: "Le « na zdorovie » des films est un cliché." },
            { q: "« Счёт, пожалуйста » sert à…", options: ["demander l’addition", "commander", "réserver"], answer: 0, explain: "Счёт = l’addition (et aussi la facture, le compte)." },
          ],
        },
        {
          type: "type",
          title: "En situation",
          instruction: "Traduis en russe, en cyrillique ou en lettres latines.",
          items: [
            { prompt: "L’addition, s’il vous plaît.", answer: ["счёт, пожалуйста", "счет пожалуйста", "пожалуйста счёт", "можно счёт"] },
            { prompt: "Où est la gare ?", answer: ["где вокзал"] },
            { prompt: "Bon appétit !", answer: ["приятного аппетита"] },
            { prompt: "à droite", answer: ["направо"] },
          ],
        },
        {
          type: "case",
          title: "Le toast au dîner d’affaires",
          story:
            "Lors d’un dîner avec un partenaire à Almaty, on remplit les verres. Hugo, fier de lui, lance « Na zdorovie ! » comme dans les films. Ses hôtes sourient poliment, puis l’un d’eux se lève pour porter un long toast à la coopération entre leurs entreprises.",
          question: "Quelle aurait été la meilleure approche ?",
          options: [
            "Ne rien dire",
            "Porter un vrai toast, même court : « За здоровье ! », « За нас ! » ou « За наше сотрудничество ! » (à notre coopération)",
            "Dire « Приятного аппетита ! »",
          ],
          answer: 1,
          explain:
            "Dans le monde russophone, le toast est un petit discours : on boit « à » quelque chose (за + accusatif). Proposer un toast à la coopération est une marque d’engagement très appréciée.",
        },
        {
          type: "fiche",
          title: "En voyage",
          points: [
            "Transport : <b>аэропорт, вокзал, поезд, билет, задерживается</b>.",
            "Hôtel : <b>гостиница</b>, <b>У меня бронь</b>, <b>Завтрак включён?</b>",
            "Restaurant : <b>Меню, пожалуйста</b>, <b>Приятного аппетита</b>, <b>Счёт, пожалуйста</b> ; toast : <b>За здоровье !</b>",
            "Chemin : <b>прямо, налево, направо, далеко, близко</b>.",
          ],
          retenir: "On ne dit pas « na zdorovie » en trinquant : on boit « à » quelque chose, за…",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s9",
      title: "Le russe du travail",
      minutes: 17,
      objectives: ["Écrire un e-mail professionnel simple", "Prospecter et négocier avec des partenaires russophones"],
      steps: [
        {
          type: "lesson",
          title: "Travailler en russe",
          slides: [
            {
              title: "Prénom et patronyme",
              body:
                "<p>Chaque russophone a un <b>prénom</b>, un <b>patronyme</b> (formé sur le prénom du père) et un <b>nom</b> : <i>Иван Петрович Смирнов</i> (Ivan, fils de Piotr, Smirnov).</p><p>Pour s’adresser poliment à quelqu’un, on utilise <b>prénom + patronyme</b> avec <b>вы</b> : <i>Иван Петрович</i>, <i>Анна Сергеевна</i>. C’est l’équivalent de « Monsieur » / « Madame », en plus chaleureux.</p>",
              say: [
                { t: "Иван Петрович", fr: "Ivan, fils de Piotr" },
                { t: "Анна Сергеевна", fr: "Anna, fille de Sergueï" },
              ],
            },
            {
              title: "L’e-mail professionnel",
              body:
                "<ul><li>Ouverture : <i>Уважаемый Иван Петрович!</i> (homme) / <i>Уважаемая Анна Сергеевна!</i> (femme) ; plus courant : <i>Добрый день!</i></li><li>Pièce jointe : <i>Во вложении направляю коммерческое предложение.</i> (Je vous envoie ci-joint notre offre commerciale.)</li><li>Clôture : <i>С уважением,</i> (Cordialement / Respectueusement).</li></ul>",
              say: [
                { t: "Уважаемая Анна Сергеевна!", fr: "Madame (formule d’ouverture)" },
                { t: "Во вложении направляю коммерческое предложение.", fr: "Je vous envoie ci-joint notre offre commerciale." },
                { t: "С уважением", fr: "Cordialement" },
              ],
            },
            {
              title: "Le vocabulaire commercial",
              say: [
                { t: "коммерческое предложение", fr: "offre commerciale (souvent abrégée КП)" },
                { t: "договор", fr: "contrat" },
                { t: "заказ", fr: "commande" },
                { t: "счёт", fr: "facture (et addition)" },
                { t: "срок поставки", fr: "délai de livraison" },
                { t: "скидка", fr: "remise" },
                { t: "образец", fr: "échantillon" },
                { t: "предоплата", fr: "paiement d’avance, acompte" },
              ],
              body: "<p>Les prix s’écrivent avec une virgule décimale et un espace pour les milliers : <b>1 250,50</b>.</p>",
            },
            {
              title: "Négocier et culture d’affaires",
              body:
                "<ul><li><i>Возможна ли скидка при заказе 500 штук?</i> (Une remise est-elle possible pour 500 pièces ?)</li><li><i>Для нас это дорого.</i> (C’est cher pour nous.)</li><li><i>Какие условия оплаты?</i> (Quelles sont les conditions de paiement ?)</li><li><i>Можете подтвердить это письменно?</i> (Pouvez-vous le confirmer par écrit ?)</li></ul><p>La relation personnelle compte beaucoup : rendez-vous en face à face, thé ou repas, puis seulement les détails. Le russe est aussi une langue d’affaires au Kazakhstan, en Asie centrale et dans le Caucase. <b>Avant tout commerce avec la Russie ou le Bélarus, vérifie les sanctions de l’Union européenne</b> : de nombreux produits et opérations y sont interdits.</p>",
              say: [
                { t: "Для нас это дорого.", fr: "C’est cher pour nous." },
                { t: "Какие условия оплаты?", fr: "Quelles sont les conditions de paiement ?" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Quel mot ?",
          instruction: "Associe chaque situation au bon terme.",
          categories: ["коммерческое предложение (offre)", "счёт (facture)", "образец (échantillon)"],
          items: [
            { text: "Avant d’acheter, le client veut un prix détaillé", cat: 0, why: "L’offre commerciale (КП)." },
            { text: "Après livraison, tu demandes le paiement", cat: 1, why: "La facture." },
            { text: "Tu laisses un produit à tester gratuitement", cat: 2, why: "L’échantillon." },
            { text: "Document envoyé « во вложении » avant l’accord", cat: 0, why: "L’offre précède la commande." },
            { text: "Le même mot sert pour l’addition au restaurant", cat: 1, why: "Счёт." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Уважаемый / Уважаемая…", back: "Monsieur / Madame… (ouverture + prénom et patronyme)" },
            { front: "Во вложении…", back: "Ci-joint…" },
            { front: "С уважением", back: "Cordialement" },
            { front: "коммерческое предложение", back: "offre commerciale (КП)" },
            { front: "скидка", back: "remise" },
            { front: "договор", back: "contrat" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ton contact s’appelle Анна Сергеевна Иванова. Pour lui écrire poliment, tu commences par…", options: ["Привет, Анна!", "Уважаемая Анна Сергеевна!", "Уважаемый Иванова!"], answer: 1, explain: "Prénom + patronyme, au féminin." },
            { q: "Qu’as-tu entendu ?", say: "Возможна ли скидка?", options: ["Une remise est-elle possible ?", "La facture est-elle prête ?", "Le contrat est-il signé ?"], answer: 0, explain: "Скидка = remise." },
            { q: "« Срок поставки » désigne…", options: ["le délai de livraison", "le prix de gros", "la durée du contrat"], answer: 0, explain: "Срок = délai, поставка = livraison." },
            { q: "Avant de vendre à un client en Russie, il faut d’abord…", options: ["traduire le site", "vérifier les sanctions de l’UE applicables", "ouvrir un compte en roubles"], answer: 1, explain: "De nombreuses opérations sont interdites : c’est la première vérification." },
          ],
        },
        {
          type: "type",
          title: "Rédige",
          instruction: "Traduis en russe, en cyrillique ou en lettres latines.",
          items: [
            { prompt: "Cordialement (formule de fin)", answer: ["с уважением"] },
            { prompt: "remise", answer: ["скидка"] },
            { prompt: "contrat", answer: ["договор", "контракт"] },
            { prompt: "C’est cher pour nous.", answer: ["для нас это дорого", "это дорого для нас", "это для нас дорого"] },
          ],
        },
        {
          type: "case",
          title: "Le premier mail à un distributeur",
          story:
            "Noa veut proposer des accessoires pour animaux à un distributeur d’Almaty dont le directeur s’appelle Ерлан Маратович. Il prépare un premier e-mail en russe simple.",
          question: "Quel message est le plus adapté ?",
          options: [
            "« Привет, Ерлан! Купи мои товары. Пока! »",
            "« Уважаемый Ерлан Маратович! Мы продаём аксессуары для животных. Во вложении направляю коммерческое предложение. Будем рады отправить бесплатный образец. С уважением, Ноа »",
            "Un long mail en français",
          ],
          answer: 1,
          explain:
            "Prénom + patronyme, présentation en une phrase, offre en pièce jointe, proposition d’échantillon gratuit et formule de fin : court et respectueux. Pour un envoi réel, une relecture par un natif reste recommandée.",
        },
        {
          type: "fiche",
          title: "Le russe du travail",
          points: [
            "S’adresser à quelqu’un : <b>prénom + patronyme</b> + <b>вы</b> (Иван Петрович, Анна Сергеевна).",
            "E-mail : <b>Уважаемый / Уважаемая…!</b> ou <b>Добрый день!</b>, <b>Во вложении направляю…</b>, <b>С уважением</b>.",
            "Vocabulaire : <b>коммерческое предложение, договор, заказ, счёт, срок поставки, скидка, образец, предоплата</b>.",
            "Négocier : <b>скидка при заказе…</b>, <b>дорого</b>, <b>условия оплаты</b>, <b>подтвердить письменно</b> ; vérifier les <b>sanctions UE</b> avant tout commerce avec la Russie.",
          ],
          retenir: "Prénom + patronyme : la formule qui ouvre les portes dans tout le monde russophone.",
        },
      ],
    },
  ],
});
