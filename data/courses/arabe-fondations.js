/* ============================================================
   COURS : Arabe littéraire — les fondations
   Institut des Langues · 8 séances de 15 à 20 minutes
   Arabe standard moderne (fuṣḥā) : alphabet (2 séances), mots de
   survie, raccourcis depuis le français, grammaire, verbes,
   situations (voyage, travail).
   Translittération simplifiée : ā ī ū = voyelles longues,
   ʿ = ʿayn, ' = hamza, ḥ ṣ ḍ ṭ ẓ = consonnes « emphatiques »
   ou gutturales, kh, gh, sh, th, dh.
   Les exercices écrits acceptent l’arabe (avec ou sans voyelles)
   ou les lettres latines.
   ============================================================ */
AGORA.registerCourse({
  id: "arabe-fondations",
  faculty: "langues",
  lang: "ar-SA",
  title: "Arabe littéraire — les fondations",
  subtitle: "L’alphabet, les sons, les racines et tes premières phrases en arabe standard",
  color: "#6b4f9a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour entrer dans l’arabe littéraire (l’arabe standard des médias, des livres et des documents officiels) : comment fonctionne la langue, l’alphabet en deux séances, les mots de survie, les nombreux mots que le français a empruntés à l’arabe, la grammaire de base, les verbes et leurs racines, puis le voyage et le travail. Clique sur 🔊 pour écouter : la qualité de la voix dépend de ton appareil.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment fonctionne l’arabe",
      minutes: 16,
      objectives: ["Distinguer arabe littéraire et dialectes", "Comprendre l’écriture et le système des racines"],
      steps: [
        {
          type: "lesson",
          title: "Les principes",
          slides: [
            {
              title: "Arabe littéraire et dialectes",
              body:
                "<ul><li>L’<b>arabe littéraire</b> ou standard (<i>al-fuṣḥā</i>) est la langue écrite commune à tout le monde arabe : presse, livres, documents officiels, journaux télévisés, discours.</li><li>Au quotidien, on parle des <b>dialectes</b> (marocain, algérien, égyptien, levantin, du Golfe…), parfois très différents entre eux.</li><li>L’arabe littéraire est compris partout par les personnes scolarisées : c’est la meilleure base pour lire, écrire et ensuite apprendre un dialecte.</li></ul>",
            },
            {
              title: "Une écriture de droite à gauche",
              body:
                "<ul><li>L’arabe s’écrit et se lit <b>de droite à gauche</b>.</li><li>L’alphabet compte <b>28 lettres</b>, presque toutes des consonnes.</li><li>Les lettres sont <b>liées</b> entre elles dans un mot, et changent un peu de forme selon leur position (début, milieu, fin, isolée).</li><li>Il n’y a pas de majuscules.</li></ul><p>Exemple : <span class='ar'>سَلَام</span> (salām, la paix) se lit de droite à gauche : s, a, l, ā, m.</p>",
              say: [{ t: "سَلَام", ph: "salām", fr: "paix" }],
            },
            {
              title: "Les voyelles",
              body:
                "<ul><li>Trois <b>voyelles longues</b> s’écrivent avec des lettres : <span class='ar'>ا</span> (ā), <span class='ar'>و</span> (ū), <span class='ar'>ي</span> (ī).</li><li>Les trois <b>voyelles courtes</b> (a, i, u) sont de petits signes au-dessus ou au-dessous des lettres : <span class='ar'>بَ</span> ba, <span class='ar'>بِ</span> bi, <span class='ar'>بُ</span> bu.</li><li>Dans la presse et les livres pour adultes, les voyelles courtes <b>ne sont généralement pas écrites</b> : on les devine grâce au vocabulaire et à la grammaire. Les manuels et le Coran les notent.</li></ul>",
              say: [
                { t: "بَ", ph: "ba", fr: "b + a" },
                { t: "بِ", ph: "bi", fr: "b + i" },
                { t: "بُ", ph: "bu", fr: "b + ou" },
              ],
            },
            {
              title: "Le secret : les racines",
              body:
                "<p>La plupart des mots arabes sont construits sur une <b>racine de trois consonnes</b> qui porte une idée. On l’habille avec des voyelles et des préfixes selon des modèles réguliers.</p><table class='t'><tr><th>Racine k-t-b (écrire)</th><th>Sens</th></tr><tr><td><span class='ar'>كَتَبَ</span> kataba</td><td>il a écrit</td></tr><tr><td><span class='ar'>كِتَاب</span> kitāb</td><td>livre</td></tr><tr><td><span class='ar'>كَاتِب</span> kātib</td><td>écrivain</td></tr><tr><td><span class='ar'>مَكْتَب</span> maktab</td><td>bureau</td></tr><tr><td><span class='ar'>مَكْتَبَة</span> maktaba</td><td>bibliothèque, librairie</td></tr></table><p>Apprendre une racine, c’est souvent apprendre une famille entière de mots.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "al-fuṣḥā", back: "l’arabe littéraire (standard), commun à tout le monde arabe", say: false },
            { front: "<span class='ar'>سَلَام</span> salām", back: "paix", say: "سَلَام" },
            { front: "<span class='ar'>كِتَاب</span> kitāb", back: "livre (racine k-t-b)", say: "كِتَاب" },
            { front: "<span class='ar'>مَكْتَب</span> maktab", back: "bureau (racine k-t-b)", say: "مَكْتَب" },
            { front: "Sens de lecture", back: "De droite à gauche", say: false },
            { front: "Voyelles courtes", back: "Petits signes (a, i, u), souvent non écrits", say: false },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle langue arabe est comprise par les personnes scolarisées dans tout le monde arabe ?", options: ["Le dialecte marocain", "L’arabe littéraire (standard)", "Le dialecte égyptien"], answer: 1, explain: "Les dialectes varient beaucoup d’un pays à l’autre." },
            { q: "Combien de lettres compte l’alphabet arabe ?", options: ["22", "26", "28"], answer: 2, explain: "28 lettres, presque toutes des consonnes." },
            { q: "Dans un journal arabe, les voyelles courtes sont…", options: ["toujours écrites", "généralement absentes", "écrites en rouge"], answer: 1, explain: "On les déduit du contexte." },
            { q: "Quel mot appartient à la même famille que كِتَاب (livre) ?", options: ["مَكْتَبَة maktaba (bibliothèque)", "سَلَام salām (paix)", "بَيْت bayt (maison)"], answer: 0, explain: "Même racine k-t-b." },
            { q: "Quel mot as-tu entendu ?", say: "كِتَاب", options: ["kitāb (livre)", "kātib (écrivain)", "maktab (bureau)"], answer: 0, explain: "كِتَاب kitāb." },
          ],
        },
        {
          type: "type",
          title: "Les racines",
          instruction: "Écris en lettres latines (ou en arabe). Les accents et signes spéciaux ne sont pas obligatoires.",
          items: [
            { prompt: "Comment dit-on « livre » ? (racine k-t-b)", answer: ["kitab", "kitaab", "كتاب"] },
            { prompt: "Comment dit-on « bureau » ? (racine k-t-b, préfixe ma-)", answer: ["maktab", "مكتب"] },
            { prompt: "Quelles sont les trois consonnes de la racine qui veut dire « écrire » ? (ex. : abc)", answer: ["ktb", "k t b", "k-t-b", "كتب"] },
            { prompt: "Écoute et écris en lettres latines :", say: "سَلَام", answer: ["salam", "salaam"] },
          ],
        },
        {
          type: "case",
          title: "Quel arabe apprendre ?",
          story:
            "Noa veut pouvoir lire des documents commerciaux, comprendre l’actualité et échanger avec des partenaires au Maroc et dans le Golfe. Un ami lui conseille d’apprendre seulement le dialecte marocain.",
          question: "Quelle stratégie est la plus cohérente avec ses objectifs ?",
          options: [
            "Apprendre seulement un dialecte",
            "Commencer par l’arabe littéraire pour lire, écrire et être compris partout à l’écrit, puis ajouter le dialecte du pays où il travaille le plus pour l’oral du quotidien",
            "Ne pas apprendre l’arabe, tout se fait en anglais",
          ],
          answer: 1,
          explain:
            "L’arabe littéraire ouvre l’écrit et la communication formelle dans tout le monde arabe ; un dialecte facilite les échanges informels. Beaucoup d’apprenants combinent les deux, dans cet ordre ou en parallèle.",
        },
        {
          type: "fiche",
          title: "Comment fonctionne l’arabe",
          points: [
            "<b>Arabe littéraire</b> (écrit, médias, formel) et <b>dialectes</b> (oral du quotidien).",
            "Écriture de <b>droite à gauche</b>, <b>28 lettres</b> liées, sans majuscules.",
            "Voyelles longues écrites (<span class='ar'>ا و ي</span>), voyelles courtes en petits signes souvent absents.",
            "Mots construits sur des <b>racines</b> de trois consonnes : k-t-b → kitāb, kātib, maktab, maktaba.",
          ],
          retenir: "En arabe, une racine de trois lettres te donne toute une famille de mots.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "L’alphabet (1) : les formes et les points",
      minutes: 18,
      objectives: ["Reconnaître les lettres qui ne diffèrent que par leurs points", "Lire des mots simples"],
      steps: [
        {
          type: "lesson",
          title: "Les familles de lettres",
          slides: [
            {
              title: "Une même forme, des points différents",
              body:
                "<p>Beaucoup de lettres partagent la même forme et ne se distinguent que par le <b>nombre et la position des points</b> :</p><table class='t'><tr><th>Lettre</th><th>Son</th></tr><tr><td><span class='ar'>ب</span></td><td>b (un point dessous)</td></tr><tr><td><span class='ar'>ت</span></td><td>t (deux points dessus)</td></tr><tr><td><span class='ar'>ث</span></td><td>th (comme think, trois points dessus)</td></tr><tr><td><span class='ar'>ن</span></td><td>n (un point dessus)</td></tr><tr><td><span class='ar'>ي</span></td><td>y ou ī (deux points dessous)</td></tr></table>",
              say: [
                { t: "ب", ph: "bā'", fr: "b" },
                { t: "ت", ph: "tā'", fr: "t" },
                { t: "ث", ph: "thā'", fr: "th (think)" },
                { t: "ن", ph: "nūn", fr: "n" },
              ],
            },
            {
              title: "Les six lettres qui ne s’attachent pas à gauche",
              body:
                "<p>Six lettres se lient à la lettre précédente mais <b>jamais à la suivante</b> : après elles, le mot se « coupe » visuellement.</p><p class='ar-big'>ا د ذ ر ز و</p><table class='t'><tr><th>Lettre</th><th>Son</th></tr><tr><td><span class='ar'>ا</span></td><td>alif : ā (voyelle longue) ou support de hamza</td></tr><tr><td><span class='ar'>د</span> / <span class='ar'>ذ</span></td><td>d / dh (comme le « th » de « this »)</td></tr><tr><td><span class='ar'>ر</span> / <span class='ar'>ز</span></td><td>r roulé / z</td></tr><tr><td><span class='ar'>و</span></td><td>w ou ū</td></tr></table>",
            },
            {
              title: "Lire tes premiers mots",
              body: "<p>Avec ces lettres, tu peux déjà lire. Rappel : de droite à gauche.</p>",
              say: [
                { t: "بَاب", ph: "bāb", fr: "porte" },
                { t: "بَيْت", ph: "bayt", fr: "maison" },
                { t: "نُور", ph: "nūr", fr: "lumière" },
                { t: "دَار", ph: "dār", fr: "demeure, maison" },
                { t: "وَزِير", ph: "wazīr", fr: "ministre (vizir)" },
              ],
            },
            {
              title: "Une lettre, quatre formes",
              body:
                "<p>Selon sa place dans le mot, une lettre change de forme. Exemple avec <span class='ar'>ب</span> (b) :</p><table class='t'><tr><th>Isolée</th><th>Début</th><th>Milieu</th><th>Fin</th></tr><tr><td><span class='ar'>ب</span></td><td><span class='ar'>بـ</span></td><td><span class='ar'>ـبـ</span></td><td><span class='ar'>ـب</span></td></tr></table><p>La forme de début et de milieu est souvent « raccourcie » : on reconnaît surtout la lettre à ses <b>points</b>.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "<span class='ar'>ب</span>", back: "b (un point dessous)", say: "بَاء" },
            { front: "<span class='ar'>ت</span>", back: "t (deux points dessus)", say: "تَاء" },
            { front: "<span class='ar'>ن</span>", back: "n (un point dessus)", say: "نُون" },
            { front: "<span class='ar'>ي</span>", back: "y ou ī (deux points dessous)", say: "يَاء" },
            { front: "<span class='ar'>ا د ذ ر ز و</span>", back: "Les six lettres qui ne s’attachent pas à la suivante", say: false },
            { front: "<span class='ar'>بَيْت</span>", back: "bayt : maison", say: "بَيْت" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quelle lettre a un seul point en dessous ?", options: ["<span class='ar'>ت</span>", "<span class='ar'>ب</span>", "<span class='ar'>ن</span>"], answer: 1, explain: "ب = b." },
            { q: "Comment se lit <span class='ar'>بَاب</span> ?", options: ["bāb (porte)", "nūr (lumière)", "dār (maison)"], answer: 0, explain: "b + ā + b." },
            { q: "Laquelle de ces lettres ne s’attache jamais à la lettre suivante ?", options: ["<span class='ar'>ب</span>", "<span class='ar'>ر</span>", "<span class='ar'>ن</span>"], answer: 1, explain: "ر fait partie des six lettres non liantes à gauche." },
            { q: "Quel mot as-tu entendu ?", say: "نُور", options: ["<span class='ar'>نُور</span> nūr", "<span class='ar'>بَاب</span> bāb", "<span class='ar'>دَار</span> dār"], answer: 0, explain: "nūr : lumière." },
            { q: "Quelle lettre se prononce comme le « th » de l’anglais « think » ?", options: ["<span class='ar'>ت</span>", "<span class='ar'>ث</span>", "<span class='ar'>ذ</span>"], answer: 1, explain: "ث (thā’) est sourd ; ذ (dhāl) est le « th » sonore de « this »." },
          ],
        },
        {
          type: "type",
          title: "Lis et translittère",
          instruction: "Écris en lettres latines le mot arabe (sans accents si tu veux).",
          items: [
            { prompt: "<span class='ar ar-big'>بَاب</span>", answer: ["bab", "baab"], explain: "Porte." },
            { prompt: "<span class='ar ar-big'>بَيْت</span>", answer: ["bayt", "beit", "bait", "beyt"], explain: "Maison." },
            { prompt: "<span class='ar ar-big'>دَار</span>", answer: ["dar", "daar"], explain: "Demeure." },
            { prompt: "<span class='ar ar-big'>نُور</span>", answer: ["nur", "nour", "noor"], explain: "Lumière." },
          ],
        },
        {
          type: "case",
          title: "Le panneau de la rue",
          story:
            "À Rabat, Inès voit sur une plaque <span class='ar'>دَار</span> suivi d’un nom de famille. Elle se demande si c’est un restaurant, une maison ou une administration.",
          question: "Que signifie ce mot et comment l’a-t-elle lu ?",
          options: [
            "Bāb : une porte",
            "Dār : une demeure, une maison (lu de droite à gauche : d, ā, r) ; on le retrouve dans de nombreux noms de lieux et de riads",
            "Nūr : une lumière",
          ],
          answer: 1,
          explain:
            "Dār (maison, demeure) apparaît partout : Dar el-Beïda (Casablanca en arabe signifie « la maison blanche »), les riads « Dar … ». Reconnaître quelques lettres permet déjà de lire les panneaux.",
        },
        {
          type: "fiche",
          title: "Alphabet (1)",
          points: [
            "Même forme, points différents : <span class='ar'>ب ت ث ن ي</span> (b, t, th, n, y).",
            "Six lettres non liées à gauche : <span class='ar'>ا د ذ ر ز و</span>.",
            "Chaque lettre a jusqu’à quatre formes (isolée, début, milieu, fin) ; les points restent.",
            "Premiers mots : <span class='ar'>بَاب</span> bāb, <span class='ar'>بَيْت</span> bayt, <span class='ar'>نُور</span> nūr, <span class='ar'>دَار</span> dār.",
          ],
          retenir: "En arabe, ce sont souvent les points qui font la lettre.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "L’alphabet (2) : les sons de l’arabe",
      minutes: 18,
      objectives: ["Découvrir les sons absents du français", "Lire des mots courants avec tout l’alphabet"],
      steps: [
        {
          type: "lesson",
          title: "Les sons particuliers",
          slides: [
            {
              title: "Les sons de la gorge",
              body:
                "<table class='t'><tr><th>Lettre</th><th>Son</th></tr><tr><td><span class='ar'>ح</span> ḥā'</td><td>h fortement soufflé du fond de la gorge</td></tr><tr><td><span class='ar'>خ</span> khā'</td><td>comme la jota espagnole ou le « ch » allemand de Bach</td></tr><tr><td><span class='ar'>ع</span> ʿayn</td><td>contraction de la gorge, sans équivalent en français</td></tr><tr><td><span class='ar'>غ</span> ghayn</td><td>proche du r grasseyé français</td></tr><tr><td><span class='ar'>ق</span> qāf</td><td>k prononcé très au fond de la gorge</td></tr><tr><td><span class='ar'>ه</span> hā'</td><td>h léger, comme en anglais</td></tr><tr><td><span class='ar'>ء</span> hamza</td><td>petit arrêt de la voix (coup de glotte)</td></tr></table>",
              say: [
                { t: "حُبّ", ph: "ḥubb", fr: "amour (ḥ)" },
                { t: "خُبْز", ph: "khubz", fr: "pain (kh)" },
                { t: "عَرَبِيّ", ph: "ʿarabiyy", fr: "arabe (ʿayn)" },
                { t: "قَلْب", ph: "qalb", fr: "cœur (q)" },
              ],
            },
            {
              title: "Les consonnes « emphatiques »",
              body:
                "<p>Quatre consonnes se prononcent avec la langue plus en arrière, ce qui « assombrit » la voyelle voisine :</p><table class='t'><tr><th>Normale</th><th>Emphatique</th></tr><tr><td><span class='ar'>س</span> s</td><td><span class='ar'>ص</span> ṣ</td></tr><tr><td><span class='ar'>د</span> d</td><td><span class='ar'>ض</span> ḍ</td></tr><tr><td><span class='ar'>ت</span> t</td><td><span class='ar'>ط</span> ṭ</td></tr><tr><td><span class='ar'>ذ</span> dh</td><td><span class='ar'>ظ</span> ẓ</td></tr></table><p>Le <span class='ar'>ض</span> est si caractéristique qu’on appelle l’arabe « la langue du ḍād ».</p>",
              say: [
                { t: "سَيْف", ph: "sayf", fr: "épée (s)" },
                { t: "صَيْف", ph: "ṣayf", fr: "été (ṣ emphatique)" },
              ],
            },
            {
              title: "Les autres lettres",
              body:
                "<table class='t'><tr><th>Lettre</th><th>Son</th></tr><tr><td><span class='ar'>ج</span></td><td>j (comme « jour » ; « g » dur en Égypte)</td></tr><tr><td><span class='ar'>س</span> / <span class='ar'>ش</span></td><td>s / ch (sh)</td></tr><tr><td><span class='ar'>ف</span></td><td>f</td></tr><tr><td><span class='ar'>ك</span></td><td>k</td></tr><tr><td><span class='ar'>ل</span></td><td>l</td></tr><tr><td><span class='ar'>م</span></td><td>m</td></tr></table><p>Et la <b>tā’ marbūṭa</b> <span class='ar'>ة</span>, qui marque souvent le <b>féminin</b> en fin de mot : <span class='ar'>مَدْرَسَة</span> madrasa (école).</p>",
              say: [
                { t: "شَمْس", ph: "shams", fr: "soleil" },
                { t: "جَمِيل", ph: "jamīl", fr: "beau" },
                { t: "مَدْرَسَة", ph: "madrasa", fr: "école (féminin en ة)" },
              ],
            },
            {
              title: "Lire des mots courants",
              body: "<p>Tu connais maintenant tout l’alphabet. Écoute et lis :</p>",
              say: [
                { t: "شُكْرًا", ph: "shukran", fr: "merci" },
                { t: "مَرْحَبًا", ph: "marḥaban", fr: "bonjour, bienvenue" },
                { t: "قَهْوَة", ph: "qahwa", fr: "café" },
                { t: "سُوق", ph: "sūq", fr: "marché (souk)" },
                { t: "صَدِيق", ph: "ṣadīq", fr: "ami" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Son normal ou son de gorge ?",
          instruction: "Classe chaque lettre.",
          categories: ["Son proche du français", "Son de gorge ou emphatique"],
          items: [
            { text: "<span class='ar'>م</span> m", cat: 0, why: "Comme en français." },
            { text: "<span class='ar'>ع</span> ʿayn", cat: 1, why: "Contraction de la gorge." },
            { text: "<span class='ar'>ف</span> f", cat: 0, why: "Comme en français." },
            { text: "<span class='ar'>ح</span> ḥā'", cat: 1, why: "h profond et soufflé." },
            { text: "<span class='ar'>ص</span> ṣād", cat: 1, why: "s emphatique." },
            { text: "<span class='ar'>ش</span> shīn", cat: 0, why: "Comme le « ch » français." },
            { text: "<span class='ar'>ق</span> qāf", cat: 1, why: "k du fond de la gorge." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "<span class='ar'>ع</span> ʿayn", back: "son de gorge sans équivalent français", say: "عَيْن" },
            { front: "<span class='ar'>خ</span> khā'", back: "comme la jota espagnole", say: "خَاء" },
            { front: "<span class='ar'>ق</span> qāf", back: "k du fond de la gorge", say: "قَاف" },
            { front: "<span class='ar'>ة</span> tā' marbūṭa", back: "marque souvent le féminin en fin de mot", say: false },
            { front: "<span class='ar'>شُكْرًا</span> shukran", back: "merci", say: "شُكْرًا" },
            { front: "<span class='ar'>صَيْف / سَيْف</span>", back: "ṣayf (été) / sayf (épée)", say: "صَيْف" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "شُكْرًا", options: ["shukran (merci)", "marḥaban (bonjour)", "ṣadīq (ami)"], answer: 0, explain: "شُكْرًا : merci." },
            { q: "Quel mot as-tu entendu ?", say: "قَهْوَة", options: ["qahwa (café)", "khubz (pain)", "sūq (marché)"], answer: 0, explain: "Le mot « café » vient de qahwa (via le turc)." },
            { q: "Que marque souvent la lettre <span class='ar'>ة</span> en fin de mot ?", options: ["Le pluriel", "Le féminin", "Le passé"], answer: 1, explain: "madrasa, maktaba…" },
            { q: "Pourquoi appelle-t-on l’arabe « la langue du ḍād » ?", options: ["Parce que la lettre ض est considérée comme typique de l’arabe", "Parce qu’elle est la première lettre", "Parce qu’elle n’existe pas en arabe"], answer: 0, explain: "C’est un son réputé propre à l’arabe." },
          ],
        },
        {
          type: "type",
          title: "Lis et translittère",
          instruction: "Écris en lettres latines (sans accents si tu veux).",
          items: [
            { prompt: "<span class='ar ar-big'>شُكْرًا</span>", answer: ["shukran", "choukran", "chukran", "shokran", "chokran"], explain: "Merci." },
            { prompt: "<span class='ar ar-big'>سُوق</span>", answer: ["suq", "souq", "souk", "suuq", "sooq"], explain: "Marché." },
            { prompt: "<span class='ar ar-big'>شَمْس</span>", answer: ["shams", "chams"], explain: "Soleil." },
            { prompt: "<span class='ar ar-big'>مَدْرَسَة</span>", answer: ["madrasa", "madrassa", "madrasah"], explain: "École." },
          ],
        },
        {
          type: "case",
          title: "Le menu du restaurant",
          story:
            "Au Caire, Karim veut commander un café sur un menu écrit seulement en arabe. Il reconnaît une ligne : <span class='ar'>قهوة</span>, sans voyelles.",
          question: "Comment Karim peut-il identifier ce mot ?",
          options: [
            "Impossible sans voyelles",
            "En lisant les consonnes de droite à gauche : q-h-w-a (ة final), qu’il reconnaît comme qahwa, le café ; les voyelles absentes se devinent quand on connaît le mot",
            "En demandant le menu en anglais seulement",
          ],
          answer: 1,
          explain:
            "C’est ainsi que se lit l’arabe au quotidien : on reconnaît le squelette des consonnes. Plus le vocabulaire grandit, plus la lecture sans voyelles devient naturelle.",
        },
        {
          type: "fiche",
          title: "Alphabet (2)",
          points: [
            "Sons de gorge : <span class='ar'>ح خ ع غ ق ه ء</span> (ḥ, kh, ʿ, gh, q, h, ').",
            "Emphatiques : <span class='ar'>ص ض ط ظ</span> face à <span class='ar'>س د ت ذ</span>.",
            "<span class='ar'>ج</span> j, <span class='ar'>ش</span> sh, <span class='ar'>ف</span> f, <span class='ar'>ك</span> k, <span class='ar'>ل</span> l, <span class='ar'>م</span> m.",
            "<span class='ar'>ة</span> tā’ marbūṭa : souvent le féminin.",
            "Mots : <span class='ar'>شُكْرًا مَرْحَبًا قَهْوَة سُوق صَدِيق</span>.",
          ],
          retenir: "Lire l’arabe, c’est reconnaître un squelette de consonnes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Les mots de survie",
      minutes: 16,
      objectives: ["Saluer, remercier et se présenter", "Compter de 1 à 10 et poser les questions de base"],
      steps: [
        {
          type: "lesson",
          title: "L’essentiel pour échanger",
          slides: [
            {
              title: "Saluer",
              body: "<p>Les salutations ont souvent une <b>réponse consacrée</b> :</p>",
              say: [
                { t: "السَّلَامُ عَلَيْكُم", ph: "as-salāmu ʿalaykum", fr: "la paix sur vous (bonjour)" },
                { t: "وَعَلَيْكُمُ السَّلَام", ph: "wa ʿalaykumu s-salām", fr: "et sur vous la paix (réponse)" },
                { t: "صَبَاحُ الخَيْر", ph: "ṣabāḥ al-khayr", fr: "bonjour (le matin)" },
                { t: "صَبَاحُ النُّور", ph: "ṣabāḥ an-nūr", fr: "réponse : matin de lumière" },
                { t: "مَعَ السَّلَامَة", ph: "maʿa s-salāma", fr: "au revoir" },
              ],
            },
            {
              title: "La politesse et la présentation",
              body: "<p>En arabe, on s’adresse différemment à un homme ou à une femme : <i>min faḍlika</i> (à un homme), <i>min faḍliki</i> (à une femme).</p>",
              say: [
                { t: "شُكْرًا", ph: "shukran", fr: "merci" },
                { t: "عَفْوًا", ph: "ʿafwan", fr: "de rien / pardon" },
                { t: "مِنْ فَضْلِك", ph: "min faḍlik", fr: "s’il te plaît, s’il vous plaît" },
                { t: "اِسْمِي نُوَا", ph: "ismī Noa", fr: "je m’appelle Noa" },
                { t: "كَيْفَ حَالُكَ؟", ph: "kayfa ḥāluka ?", fr: "comment vas-tu ? (à un homme)" },
                { t: "بِخَيْر، الحَمْدُ لِله", ph: "bi-khayr, al-ḥamdu li-llāh", fr: "bien, Dieu merci" },
              ],
            },
            {
              title: "Questions et mots utiles",
              say: [
                { t: "نَعَم / لَا", ph: "naʿam / lā", fr: "oui / non" },
                { t: "أَيْنَ؟", ph: "ayna ?", fr: "où ?" },
                { t: "مَتَى؟", ph: "matā ?", fr: "quand ?" },
                { t: "مَا هَذَا؟", ph: "mā hādhā ?", fr: "qu’est-ce que c’est ?" },
                { t: "كَمِ السِّعْر؟", ph: "kam as-siʿr ?", fr: "quel est le prix ?" },
                { t: "لَا أَفْهَم", ph: "lā afham", fr: "je ne comprends pas" },
              ],
              body: "<p>Le point d’interrogation arabe est retourné : <span class='ar'>؟</span></p>",
            },
            {
              title: "Les nombres de 1 à 10",
              body:
                "<p>Au Moyen-Orient, on utilise souvent les chiffres dits « arabo-indiens » <span class='ar'>١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠</span> ; au Maghreb, les chiffres que nous utilisons (eux aussi appelés « chiffres arabes »). Les nombres se lisent de gauche à droite, même dans un texte arabe.</p>",
              say: [
                { t: "وَاحِد", ph: "wāḥid", fr: "1" },
                { t: "اِثْنَان", ph: "ithnān", fr: "2" },
                { t: "ثَلَاثَة", ph: "thalātha", fr: "3" },
                { t: "أَرْبَعَة", ph: "arbaʿa", fr: "4" },
                { t: "خَمْسَة", ph: "khamsa", fr: "5" },
                { t: "عَشَرَة", ph: "ʿashara", fr: "10" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "<span class='ar'>السَّلَامُ عَلَيْكُم</span>", back: "as-salāmu ʿalaykum : bonjour (la paix sur vous)", say: "السَّلَامُ عَلَيْكُم" },
            { front: "<span class='ar'>شُكْرًا</span>", back: "shukran : merci", say: "شُكْرًا" },
            { front: "<span class='ar'>عَفْوًا</span>", back: "ʿafwan : de rien", say: "عَفْوًا" },
            { front: "<span class='ar'>مِنْ فَضْلِك</span>", back: "min faḍlik : s’il vous plaît", say: "مِنْ فَضْلِك" },
            { front: "<span class='ar'>كَمِ السِّعْر؟</span>", back: "kam as-siʿr ? : quel est le prix ?", say: "كَمِ السِّعْر" },
            { front: "<span class='ar'>خَمْسَة</span>", back: "khamsa : 5", say: "خَمْسَة" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "On te dit « as-salāmu ʿalaykum ». Tu réponds…", options: ["ṣabāḥ al-khayr", "wa ʿalaykumu s-salām", "maʿa s-salāma"], answer: 1, explain: "La réponse consacrée." },
            { q: "Quel nombre as-tu entendu ?", say: "ثَلَاثَة", options: ["3", "5", "10"], answer: 0, explain: "thalātha = 3." },
            { q: "Quel nombre as-tu entendu ?", say: "خَمْسَة", options: ["2", "5", "4"], answer: 1, explain: "khamsa = 5 (d’où la « khamsa », main de Fatma à cinq doigts)." },
            { q: "« Lā afham » signifie…", options: ["Je ne comprends pas", "Je ne sais pas où", "Je n’ai pas faim"], answer: 0, explain: "Phrase indispensable." },
            { q: "Pour demander le prix au marché, tu dis…", options: ["kam as-siʿr ?", "ayna ?", "ismī…"], answer: 0, explain: "Kam = combien ; siʿr = prix." },
          ],
        },
        {
          type: "type",
          title: "Traduis",
          instruction: "Écris en lettres latines ou en arabe (accents facultatifs).",
          items: [
            { prompt: "Merci", answer: ["shukran", "choukran", "chukran", "shokran", "شكرا"] },
            { prompt: "Oui", answer: ["naam", "na'am", "naʿam", "نعم"] },
            { prompt: "Je m’appelle Noa.", answer: ["ismi noa", "ismee noa", "اسمي نوا"] },
            { prompt: "Où ?", answer: ["ayna", "aina", "أين", "اين"] },
            { prompt: "Écoute et écris le chiffre :", say: "عَشَرَة", answer: ["10", "dix", "١٠"] },
          ],
        },
        {
          type: "case",
          title: "Le rendez-vous à Dubaï",
          story:
            "Noa rencontre un distributeur à Dubaï. Le rendez-vous se déroulera en anglais, mais il veut montrer du respect en commençant par quelques mots d’arabe.",
          question: "Quelle entrée en matière est la plus appropriée ?",
          options: [
            "Dire « Habibi ! » en tapant sur l’épaule",
            "Saluer par « As-salāmu ʿalaykum », attendre la réponse « wa ʿalaykumu s-salām », puis poursuivre en anglais, et conclure par « shukran »",
            "Ne rien dire en arabe pour éviter les erreurs",
          ],
          answer: 1,
          explain:
            "Quelques formules bien placées sont très appréciées. La familiarité excessive au premier rendez-vous l’est moins. Les usages de salutation (poignée de main, notamment entre hommes et femmes) varient : on laisse l’interlocuteur prendre l’initiative.",
        },
        {
          type: "fiche",
          title: "Mots de survie",
          points: [
            "<b>as-salāmu ʿalaykum</b> → <b>wa ʿalaykumu s-salām</b> ; <b>ṣabāḥ al-khayr</b> → <b>ṣabāḥ an-nūr</b> ; <b>maʿa s-salāma</b>.",
            "<b>shukran</b>, <b>ʿafwan</b>, <b>min faḍlik</b>, <b>ismī…</b>, <b>kayfa ḥāluka ?</b>",
            "<b>naʿam / lā</b>, <b>ayna ?</b>, <b>matā ?</b>, <b>kam as-siʿr ?</b>, <b>lā afham</b>.",
            "1 à 5 : <b>wāḥid, ithnān, thalātha, arbaʿa, khamsa</b> ; 10 : <b>ʿashara</b>.",
          ],
          retenir: "Une salutation en arabe appelle une réponse : apprends-les toujours par paires.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Les raccourcis depuis le français",
      minutes: 15,
      objectives: ["Découvrir les mots français venus de l’arabe", "Comprendre l’article al- et les lettres solaires"],
      steps: [
        {
          type: "lesson",
          title: "Tu parles déjà un peu arabe",
          slides: [
            {
              title: "Des mots français venus de l’arabe",
              body:
                "<p>Le français a emprunté plusieurs centaines de mots à l’arabe, souvent par l’espagnol, l’italien ou le latin médiéval, à l’époque où les savants arabes transmettaient les mathématiques, la médecine et le commerce méditerranéen.</p><table class='t'><tr><th>Français</th><th>Arabe d’origine</th></tr><tr><td>sucre</td><td><span class='ar'>سُكَّر</span> sukkar</td></tr><tr><td>chiffre, zéro</td><td><span class='ar'>صِفْر</span> ṣifr (vide, zéro)</td></tr><tr><td>algèbre</td><td><span class='ar'>الجَبْر</span> al-jabr</td></tr><tr><td>magasin</td><td><span class='ar'>مَخَازِن</span> makhāzin (entrepôts)</td></tr><tr><td>coton</td><td><span class='ar'>قُطْن</span> quṭn</td></tr><tr><td>tarif</td><td><span class='ar'>تَعْرِيف</span> taʿrīf (notification)</td></tr><tr><td>matelas</td><td><span class='ar'>مَطْرَح</span> maṭraḥ</td></tr></table>",
            },
            {
              title: "D’autres mots familiers",
              say: [
                { t: "سُكَّر", ph: "sukkar", fr: "sucre" },
                { t: "صِفْر", ph: "ṣifr", fr: "zéro" },
                { t: "طَبِيب", ph: "ṭabīb", fr: "médecin (toubib)" },
                { t: "أَمِير", ph: "amīr", fr: "prince, commandant (amiral)" },
                { t: "قُطْن", ph: "quṭn", fr: "coton" },
              ],
              body: "<p>Même « alcool » (al-kuḥl), « hasard » (az-zahr, le dé, selon l’étymologie la plus courante) ou « jupe » (jubba) viennent de l’arabe.</p>",
            },
            {
              title: "L’article al-",
              body:
                "<ul><li>L’article défini est <span class='ar'>ال</span> <b>al-</b> (le, la, les), collé au mot : <span class='ar'>كِتَاب</span> kitāb (un livre) → <span class='ar'>الكِتَاب</span> al-kitāb (le livre).</li><li>On le retrouve dans de nombreux mots français : <b>al</b>gèbre, <b>al</b>cool, <b>al</b>chimie, <b>a</b>bricot (via l’espagnol albaricoque).</li></ul>",
            },
            {
              title: "Lettres solaires et lunaires",
              body:
                "<p>Devant certaines consonnes (dites <b>solaires</b> : t, th, d, dh, r, z, s, sh, ṣ, ḍ, ṭ, ẓ, l, n), le <b>l</b> de l’article ne se prononce pas : il se fond dans la consonne suivante, qui est doublée.</p><ul><li><span class='ar'>الشَّمْس</span> <b>ash-shams</b> (le soleil) : lettre solaire.</li><li><span class='ar'>القَمَر</span> <b>al-qamar</b> (la lune) : lettre lunaire, le l se prononce.</li></ul>",
              say: [
                { t: "الشَّمْس", ph: "ash-shams", fr: "le soleil (l assimilé)" },
                { t: "القَمَر", ph: "al-qamar", fr: "la lune (l prononcé)" },
                { t: "السَّلَام", ph: "as-salām", fr: "la paix (l assimilé)" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "<span class='ar'>سُكَّر</span> sukkar", back: "sucre", say: "سُكَّر" },
            { front: "<span class='ar'>صِفْر</span> ṣifr", back: "zéro (a donné « chiffre » et « zéro »)", say: "صِفْر" },
            { front: "<span class='ar'>طَبِيب</span> ṭabīb", back: "médecin (a donné « toubib »)", say: "طَبِيب" },
            { front: "<span class='ar'>ال</span> al-", back: "article défini : le, la, les", say: false },
            { front: "<span class='ar'>الشَّمْس</span> ash-shams", back: "le soleil (lettre solaire : le l disparaît)", say: "الشَّمْس" },
            { front: "<span class='ar'>القَمَر</span> al-qamar", back: "la lune (lettre lunaire : le l se prononce)", say: "القَمَر" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "De quel mot arabe vient « algèbre » ?", options: ["al-jabr", "al-kuḥl", "ṣifr"], answer: 0, explain: "Du titre d’un traité du mathématicien al-Khwārizmī (IXe siècle), dont le nom a aussi donné « algorithme »." },
            { q: "Comment se prononce <span class='ar'>الشَّمْس</span> (le soleil) ?", options: ["al-shams", "ash-shams", "a-lamshams"], answer: 1, explain: "Ch est une lettre solaire : le l s’assimile." },
            { q: "Quel mot as-tu entendu ?", say: "طَبِيب", options: ["ṭabīb (médecin)", "ṣadīq (ami)", "kitāb (livre)"], answer: 0, explain: "Il a donné « toubib » en français familier." },
            { q: "Comment dit-on « le livre » ?", options: ["kitāb al", "al-kitāb", "el kitab-un"], answer: 1, explain: "L’article se colle devant le nom." },
          ],
        },
        {
          type: "type",
          title: "Retrouve le mot arabe",
          instruction: "Écris en lettres latines ou en arabe (accents facultatifs).",
          items: [
            { prompt: "Sucre", answer: ["sukkar", "soukkar", "sukar", "سكر"] },
            { prompt: "Zéro", answer: ["sifr", "ṣifr", "صفر"] },
            { prompt: "Le livre (avec l’article)", answer: ["al-kitab", "alkitab", "al kitab", "الكتاب"] },
            { prompt: "Le soleil (attention à la prononciation de l’article)", answer: ["ash-shams", "ashshams", "ach-chams", "ash shams", "الشمس"] },
          ],
        },
        {
          type: "case",
          title: "Le nom de la boutique",
          story:
            "Noa veut nommer une boutique en ligne avec un mot arabe facile à retenir pour un public francophone. Il hésite entre « As-Sukkar » (le sucre) et « Al-Sukkar ».",
          question: "Quelle orthographe correspond à la prononciation arabe ?",
          options: [
            "Al-Sukkar, car l’article se prononce toujours « al »",
            "As-Sukkar : s est une lettre solaire, le l de l’article s’assimile",
            "Sukkar-al",
          ],
          answer: 1,
          explain:
            "Devant une lettre solaire, on transcrit souvent l’assimilation (as-, ash-, ar-, ad-…). Pour une marque, on vérifie aussi que le mot n’a pas de connotation inattendue dans les pays visés et qu’il est disponible (INPI, domaine).",
        },
        {
          type: "fiche",
          title: "Raccourcis depuis le français",
          points: [
            "Mots venus de l’arabe : <b>sucre, zéro, chiffre, algèbre, magasin, coton, tarif, matelas, toubib, amiral, alcool</b>.",
            "Article <b>al-</b> collé au nom : <span class='ar'>الكِتَاب</span> al-kitāb.",
            "<b>Lettres solaires</b> : le l s’assimile (ash-shams, as-salām) ; <b>lunaires</b> : il se prononce (al-qamar).",
          ],
          retenir: "Sucre, zéro, magasin : le français parle arabe plus souvent qu’on ne le croit.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "La grammaire essentielle",
      minutes: 17,
      objectives: ["Construire des phrases sans verbe être", "Utiliser pronoms, possessifs et adjectifs"],
      steps: [
        {
          type: "lesson",
          title: "Les briques de la phrase",
          slides: [
            {
              title: "Les pronoms personnels",
              body:
                "<table class='t'><tr><th>Arabe</th><th>Sens</th></tr><tr><td><span class='ar'>أَنَا</span> anā</td><td>je</td></tr><tr><td><span class='ar'>أَنْتَ</span> anta / <span class='ar'>أَنْتِ</span> anti</td><td>tu (homme) / tu (femme)</td></tr><tr><td><span class='ar'>هُوَ</span> huwa / <span class='ar'>هِيَ</span> hiya</td><td>il / elle</td></tr><tr><td><span class='ar'>نَحْنُ</span> naḥnu</td><td>nous</td></tr><tr><td><span class='ar'>أَنْتُم</span> antum</td><td>vous (pluriel)</td></tr><tr><td><span class='ar'>هُم</span> hum</td><td>ils</td></tr></table><p>L’arabe distingue le <b>masculin et le féminin</b> même pour « tu » et « vous ».</p>",
            },
            {
              title: "Une phrase sans verbe « être »",
              body:
                "<p>Au présent, l’arabe n’utilise pas de verbe « être » : on juxtapose simplement les mots. C’est la <b>phrase nominale</b>.</p>",
              say: [
                { t: "أَنَا طَالِب", ph: "anā ṭālib", fr: "je (suis) étudiant" },
                { t: "هِيَ مُهَنْدِسَة", ph: "hiya muhandisa", fr: "elle (est) ingénieure" },
                { t: "البَيْتُ كَبِير", ph: "al-baytu kabīr", fr: "la maison (est) grande" },
              ],
            },
            {
              title: "Adjectifs et possessifs",
              body:
                "<ul><li>L’adjectif se place <b>après le nom</b> et s’accorde, y compris avec l’article : <span class='ar'>بَيْت كَبِير</span> bayt kabīr (une grande maison) / <span class='ar'>البَيْت الكَبِير</span> al-bayt al-kabīr (la grande maison).</li><li>Les possessifs sont des <b>terminaisons</b> collées au nom :</li></ul><table class='t'><tr><th>Arabe</th><th>Sens</th></tr><tr><td><span class='ar'>كِتَابِي</span> kitābī</td><td>mon livre</td></tr><tr><td><span class='ar'>كِتَابُكَ</span> kitābuka</td><td>ton livre (à un homme)</td></tr><tr><td><span class='ar'>كِتَابُهُ</span> kitābuhu</td><td>son livre (à lui)</td></tr><tr><td><span class='ar'>كِتَابُهَا</span> kitābuhā</td><td>son livre (à elle)</td></tr><tr><td><span class='ar'>كِتَابُنَا</span> kitābunā</td><td>notre livre</td></tr></table>",
            },
            {
              title: "Questions et négations",
              body:
                "<ul><li>Question fermée : on ajoute <span class='ar'>هَلْ</span> <b>hal</b> en tête. <span class='ar'>هَلْ أَنْتَ فَرَنْسِيّ؟</span> hal anta faransiyy ? (Es-tu français ?)</li><li>Négation d’une phrase nominale : <span class='ar'>لَيْسَ</span> <b>laysa</b>, qui se conjugue (<i>lastu</i> : je ne suis pas). <span class='ar'>لَسْتُ طَالِبًا</span> lastu ṭāliban.</li><li>Négation d’un verbe au présent : <span class='ar'>لَا</span> <b>lā</b> devant le verbe. <span class='ar'>لَا أَفْهَم</span> lā afham.</li><li>« Le livre de l’étudiant » : on juxtapose, le premier nom sans article : <span class='ar'>كِتَابُ الطَّالِب</span> kitābu ṭ-ṭālib.</li></ul>",
              say: [{ t: "هَلْ أَنْتَ فَرَنْسِيّ؟", ph: "hal anta faransiyy ?", fr: "Es-tu français ?" }],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "<span class='ar'>أَنَا</span> anā", back: "je", say: "أَنَا" },
            { front: "<span class='ar'>أَنْتَ / أَنْتِ</span>", back: "anta / anti : tu (homme / femme)", say: "أَنْتَ" },
            { front: "<span class='ar'>أَنَا طَالِب</span>", back: "anā ṭālib : je suis étudiant (pas de verbe être)", say: "أَنَا طَالِب" },
            { front: "<span class='ar'>كِتَابِي</span>", back: "kitābī : mon livre", say: "كِتَابِي" },
            { front: "<span class='ar'>هَلْ</span> hal", back: "mot qui transforme la phrase en question oui/non", say: "هَلْ" },
            { front: "<span class='ar'>لَا أَفْهَم</span>", back: "lā afham : je ne comprends pas", say: "لَا أَفْهَم" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment dit-on « Je suis étudiant » ?", options: ["anā kāna ṭālib", "anā ṭālib", "ṭālib anā hiya"], answer: 1, explain: "Pas de verbe être au présent." },
            { q: "« Kitābuhā » signifie…", options: ["son livre (à lui)", "son livre (à elle)", "leur livre"], answer: 1, explain: "-hā : à elle." },
            { q: "Pour dire « tu » à une femme, on dit…", options: ["anta", "anti", "huwa"], answer: 1, explain: "Anti au féminin." },
            { q: "« La grande maison » se dit…", options: ["al-bayt kabīr", "al-bayt al-kabīr", "kabīr al-bayt"], answer: 1, explain: "Article répété sur l’adjectif : al-bayt al-kabīr. Sans article sur l’adjectif, c’est une phrase : « la maison est grande »." },
            { q: "Quelle phrase as-tu entendue ?", say: "هَلْ أَنْتَ فَرَنْسِيّ؟", options: ["Es-tu français ?", "Je suis français.", "Il est français."], answer: 0, explain: "Hal + phrase = question." },
          ],
        },
        {
          type: "type",
          title: "Construis la phrase",
          instruction: "Écris en lettres latines ou en arabe (accents facultatifs).",
          items: [
            { prompt: "je (pronom)", answer: ["ana", "anaa", "أنا", "انا"] },
            { prompt: "mon livre", answer: ["kitabi", "kitaabi", "كتابي"] },
            { prompt: "Je suis étudiant.", answer: ["ana talib", "ana taalib", "أنا طالب", "انا طالب"] },
            { prompt: "nous", answer: ["nahnu", "nahnou", "نحن"] },
          ],
        },
        {
          type: "case",
          title: "Se présenter à une cliente",
          story:
            "Au Maroc, Noa rencontre la gérante d’un institut de beauté. Il veut lui demander en arabe littéraire : « Êtes-vous la responsable ? » (à une femme), puis se présenter : « Je suis distributeur. »",
          question: "Quelle formulation est correcte ?",
          options: [
            "hal anta al-mudīr ? anā muwazziʿ.",
            "hal anti al-mudīra ? anā muwazziʿ.",
            "anti mudīr hal ? muwazziʿ anā kāna.",
          ],
          answer: 1,
          explain:
            "À une femme : anti, et mudīra au féminin. Pas de verbe être : anā muwazziʿ (je suis distributeur). Dans la pratique, au Maroc, la conversation passera vite au dialecte (darija) ou au français, mais la structure reste utile.",
        },
        {
          type: "fiche",
          title: "Grammaire essentielle",
          points: [
            "Pronoms : <b>anā, anta / anti, huwa / hiya, naḥnu, antum, hum</b> (masculin et féminin).",
            "Pas de verbe être au présent : <b>anā ṭālib</b>.",
            "Adjectif après le nom, article répété : <b>al-bayt al-kabīr</b>.",
            "Possessifs en terminaisons : <b>kitābī, kitābuka, kitābuhu, kitābuhā, kitābunā</b>.",
            "<b>hal</b> pour questionner ; négation <b>laysa</b> (phrase nominale), <b>lā</b> + verbe.",
          ],
          retenir: "En arabe, « je suis » se dit… en ne le disant pas.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Les verbes et leurs racines",
      minutes: 17,
      objectives: ["Conjuguer un verbe au passé et au présent", "Exprimer le futur"],
      steps: [
        {
          type: "lesson",
          title: "Conjuguer",
          slides: [
            {
              title: "Le passé : des terminaisons",
              body:
                "<p>Au passé, la racine reste au début et on ajoute une <b>terminaison</b>. Exemple : <span class='ar'>كَتَبَ</span> kataba (écrire).</p><table class='t'><tr><th>Arabe</th><th>Sens</th></tr><tr><td><span class='ar'>كَتَبْتُ</span> katabtu</td><td>j’ai écrit</td></tr><tr><td><span class='ar'>كَتَبْتَ</span> katabta</td><td>tu as écrit (homme)</td></tr><tr><td><span class='ar'>كَتَبَ</span> kataba</td><td>il a écrit</td></tr><tr><td><span class='ar'>كَتَبَتْ</span> katabat</td><td>elle a écrit</td></tr><tr><td><span class='ar'>كَتَبْنَا</span> katabnā</td><td>nous avons écrit</td></tr><tr><td><span class='ar'>كَتَبُوا</span> katabū</td><td>ils ont écrit</td></tr></table><p>Le verbe se cite à la 3e personne du passé (« il a écrit ») : c’est la forme du dictionnaire.</p>",
            },
            {
              title: "Le présent : des préfixes",
              body:
                "<p>Au présent, on ajoute surtout des <b>préfixes</b> :</p><table class='t'><tr><th>Arabe</th><th>Sens</th></tr><tr><td><span class='ar'>أَكْتُبُ</span> aktubu</td><td>j’écris</td></tr><tr><td><span class='ar'>تَكْتُبُ</span> taktubu</td><td>tu écris (homme) / elle écrit</td></tr><tr><td><span class='ar'>يَكْتُبُ</span> yaktubu</td><td>il écrit</td></tr><tr><td><span class='ar'>نَكْتُبُ</span> naktubu</td><td>nous écrivons</td></tr><tr><td><span class='ar'>يَكْتُبُونَ</span> yaktubūna</td><td>ils écrivent</td></tr></table><p>Repère : <b>a-</b> je, <b>ta-</b> tu / elle, <b>ya-</b> il, <b>na-</b> nous.</p>",
              say: [
                { t: "أَكْتُبُ", ph: "aktubu", fr: "j’écris" },
                { t: "يَكْتُبُ", ph: "yaktubu", fr: "il écrit" },
                { t: "نَكْتُبُ", ph: "naktubu", fr: "nous écrivons" },
              ],
            },
            {
              title: "Le futur",
              body:
                "<p>On ajoute <span class='ar'>سَـ</span> <b>sa-</b> (proche) ou <span class='ar'>سَوْفَ</span> <b>sawfa</b> devant le présent :</p>",
              say: [
                { t: "سَأَكْتُبُ", ph: "sa-aktubu", fr: "j’écrirai" },
                { t: "سَوْفَ نُسَافِرُ", ph: "sawfa nusāfiru", fr: "nous voyagerons" },
              ],
            },
            {
              title: "Quelques verbes utiles",
              body:
                "<table class='t'><tr><th>Passé (il)</th><th>Présent (il)</th><th>Sens</th></tr><tr><td><span class='ar'>ذَهَبَ</span> dhahaba</td><td><span class='ar'>يَذْهَبُ</span> yadhhabu</td><td>aller</td></tr><tr><td><span class='ar'>عَمِلَ</span> ʿamila</td><td><span class='ar'>يَعْمَلُ</span> yaʿmalu</td><td>travailler</td></tr><tr><td><span class='ar'>شَرِبَ</span> shariba</td><td><span class='ar'>يَشْرَبُ</span> yashrabu</td><td>boire</td></tr><tr><td><span class='ar'>فَهِمَ</span> fahima</td><td><span class='ar'>يَفْهَمُ</span> yafhamu</td><td>comprendre</td></tr><tr><td><span class='ar'>أَرَادَ</span> arāda</td><td><span class='ar'>يُرِيدُ</span> yurīdu</td><td>vouloir</td></tr></table><p><span class='ar'>أُرِيدُ قَهْوَة</span> urīdu qahwa : je veux un café.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "<span class='ar'>كَتَبْتُ</span> katabtu", back: "j’ai écrit", say: "كَتَبْتُ" },
            { front: "<span class='ar'>يَكْتُبُ</span> yaktubu", back: "il écrit", say: "يَكْتُبُ" },
            { front: "<span class='ar'>سَـ</span> sa- / <span class='ar'>سَوْفَ</span> sawfa", back: "marques du futur devant le présent", say: false },
            { front: "<span class='ar'>أُرِيدُ</span> urīdu", back: "je veux", say: "أُرِيدُ" },
            { front: "<span class='ar'>يَعْمَلُ</span> yaʿmalu", back: "il travaille", say: "يَعْمَلُ" },
            { front: "a- / ta- / ya- / na-", back: "préfixes du présent : je / tu, elle / il / nous", say: false },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "« Katabnā » signifie…", options: ["nous avons écrit", "ils ont écrit", "j’écris"], answer: 0, explain: "Terminaison -nā : nous." },
            { q: "Quel préfixe indique « il » au présent ?", options: ["a-", "ya-", "na-"], answer: 1, explain: "yaktubu : il écrit." },
            { q: "Comment dit-on « j’écrirai » ?", options: ["katabtu", "sa-aktubu", "yaktubu"], answer: 1, explain: "sa- + présent." },
            { q: "Quelle phrase as-tu entendue ?", say: "أُرِيدُ قَهْوَة", options: ["Je veux un café.", "Il boit un café.", "Nous avons un café."], answer: 0, explain: "urīdu qahwa." },
          ],
        },
        {
          type: "type",
          title: "Conjugue",
          instruction: "Écris en lettres latines ou en arabe (accents facultatifs).",
          items: [
            { prompt: "j’ai écrit (kataba)", answer: ["katabtu", "katabt", "كتبت"] },
            { prompt: "il écrit (présent)", answer: ["yaktubu", "yaktub", "يكتب"] },
            { prompt: "nous écrivons", answer: ["naktubu", "naktub", "نكتب"] },
            { prompt: "Je veux un café.", answer: ["uridu qahwa", "urid qahwa", "ouridou qahwa", "أريد قهوة", "اريد قهوة"] },
          ],
        },
        {
          type: "case",
          title: "Le message au partenaire",
          story:
            "Noa veut écrire à un partenaire de Casablanca : « Je travaille avec vous et nous voyagerons à Casablanca. » Il connaît yaʿmalu (il travaille) et nusāfiru (nous voyageons).",
          question: "Quelle forme choisir pour « je travaille » et « nous voyagerons » ?",
          options: [
            "yaʿmalu … nusāfiru",
            "aʿmalu … sa-nusāfiru (ou sawfa nusāfiru)",
            "ʿamilnā … sāfara",
          ],
          answer: 1,
          explain:
            "Je = préfixe a- : aʿmalu. Futur = sa- ou sawfa devant le présent : sa-nusāfiru. Avec les préfixes et sa-, tu peux déjà parler de ton présent et de tes projets.",
        },
        {
          type: "fiche",
          title: "Verbes",
          points: [
            "Passé : terminaisons (<b>katabtu, katabta, kataba, katabat, katabnā, katabū</b>).",
            "Présent : préfixes <b>a-</b> (je), <b>ta-</b> (tu, elle), <b>ya-</b> (il), <b>na-</b> (nous).",
            "Futur : <b>sa-</b> ou <b>sawfa</b> + présent.",
            "Verbes utiles : <b>dhahaba</b> (aller), <b>ʿamila</b> (travailler), <b>shariba</b> (boire), <b>fahima</b> (comprendre), <b>arāda / yurīdu</b> (vouloir).",
          ],
          retenir: "Au passé, la fin du verbe change ; au présent, c’est son début.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "En voyage et au travail",
      minutes: 18,
      objectives: ["Se débrouiller à l’hôtel, au restaurant et en ville", "Utiliser le vocabulaire et les formules du monde des affaires"],
      steps: [
        {
          type: "lesson",
          title: "En situation",
          slides: [
            {
              title: "Voyager",
              say: [
                { t: "مَطَار", ph: "maṭār", fr: "aéroport" },
                { t: "فُنْدُق", ph: "funduq", fr: "hôtel" },
                { t: "عِنْدِي حَجْز", ph: "ʿindī ḥajz", fr: "j’ai une réservation" },
                { t: "أَيْنَ الفُنْدُق؟", ph: "ayna l-funduq ?", fr: "où est l’hôtel ?" },
                { t: "يَمِين / يَسَار", ph: "yamīn / yasār", fr: "droite / gauche" },
              ],
              body: "<p><i>ʿindī</i> veut dire « chez moi, j’ai » : c’est ainsi qu’on exprime la possession (<i>ʿindī sayyāra</i> : j’ai une voiture).</p>",
            },
            {
              title: "Au restaurant",
              say: [
                { t: "قَائِمَة الطَّعَام", ph: "qā'imat aṭ-ṭaʿām", fr: "le menu" },
                { t: "أُرِيدُ مَاء", ph: "urīdu mā'", fr: "je veux de l’eau" },
                { t: "بِدُونِ سُكَّر", ph: "bidūni sukkar", fr: "sans sucre" },
                { t: "الحِسَاب مِنْ فَضْلِك", ph: "al-ḥisāb min faḍlik", fr: "l’addition, s’il vous plaît" },
              ],
              body: "<p>Le thé et le café sont souvent servis très sucrés : <i>bidūni sukkar</i> (sans sucre) peut être utile.</p>",
            },
            {
              title: "Le vocabulaire des affaires",
              say: [
                { t: "شَرِكَة", ph: "sharika", fr: "entreprise, société" },
                { t: "عَمِيل", ph: "ʿamīl", fr: "client" },
                { t: "سِعْر", ph: "siʿr", fr: "prix" },
                { t: "فَاتُورَة", ph: "fātūra", fr: "facture" },
                { t: "عَرْضُ سِعْر", ph: "ʿarḍu siʿr", fr: "devis, offre de prix" },
                { t: "اِجْتِمَاع", ph: "ijtimāʿ", fr: "réunion" },
              ],
              body: "<p>Dans les affaires, on passe souvent à l’anglais (Golfe) ou au français (Maghreb), mais les documents officiels sont en arabe : savoir reconnaître ces mots est un vrai avantage.</p>",
            },
            {
              title: "Les formules écrites",
              body:
                "<ul><li>Ouverture formelle : <span class='ar'>السَّيِّد المُحْتَرَم</span> as-sayyid al-muḥtaram (Monsieur, avec respect) / <span class='ar'>السَّيِّدَة المُحْتَرَمَة</span> as-sayyida al-muḥtarama (Madame).</li><li>Remerciement : <span class='ar'>شُكْرًا عَلَى تَعَاوُنِكُم</span> shukran ʿalā taʿāwunikum (merci pour votre coopération).</li><li>Clôture : <span class='ar'>مَعَ خَالِص التَّحِيَّات</span> maʿa khāliṣ at-taḥiyyāt (avec mes salutations distinguées).</li></ul><p>Les échanges commencent souvent par des formules de politesse et des nouvelles avant d’entrer dans le sujet : prendre ce temps fait partie de la relation.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "<span class='ar'>فُنْدُق</span> funduq", back: "hôtel", say: "فُنْدُق" },
            { front: "<span class='ar'>عِنْدِي حَجْز</span>", back: "ʿindī ḥajz : j’ai une réservation", say: "عِنْدِي حَجْز" },
            { front: "<span class='ar'>الحِسَاب مِنْ فَضْلِك</span>", back: "al-ḥisāb min faḍlik : l’addition, s’il vous plaît", say: "الحِسَاب مِنْ فَضْلِك" },
            { front: "<span class='ar'>شَرِكَة</span> sharika", back: "entreprise", say: "شَرِكَة" },
            { front: "<span class='ar'>فَاتُورَة</span> fātūra", back: "facture", say: "فَاتُورَة" },
            { front: "<span class='ar'>مَعَ خَالِص التَّحِيَّات</span>", back: "avec mes salutations distinguées", say: "مَعَ خَالِص التَّحِيَّات" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "فُنْدُق", options: ["funduq (hôtel)", "maṭār (aéroport)", "sūq (marché)"], answer: 0, explain: "funduq : hôtel." },
            { q: "Quel mot as-tu entendu ?", say: "فَاتُورَة", options: ["fātūra (facture)", "sharika (entreprise)", "siʿr (prix)"], answer: 0, explain: "Proche du mot « facture »." },
            { q: "Comment dit-on « j’ai une réservation » ?", options: ["ʿindī ḥajz", "anā ḥajz", "ḥajz ʿindaka"], answer: 0, explain: "ʿindī = j’ai (chez moi)." },
            { q: "« Yasār » signifie…", options: ["droite", "gauche", "tout droit"], answer: 1, explain: "yamīn = droite, yasār = gauche." },
          ],
        },
        {
          type: "type",
          title: "En situation",
          instruction: "Écris en lettres latines ou en arabe (accents facultatifs).",
          items: [
            { prompt: "hôtel", answer: ["funduq", "fundouq", "fondouk", "funduk", "فندق"] },
            { prompt: "facture", answer: ["fatura", "fatoura", "faatuura", "فاتورة"] },
            { prompt: "entreprise", answer: ["sharika", "charika", "sharikah", "شركة"] },
            { prompt: "J’ai une réservation.", answer: ["indi hajz", "'indi hajz", "ʿindi hajz", "عندي حجز"] },
          ],
        },
        {
          type: "case",
          title: "Le premier mail au distributeur",
          story:
            "Noa écrit à M. Al-Mansouri, un distributeur d’Abou Dhabi. Le mail est en anglais, mais il souhaite ouvrir et clore avec des formules arabes respectueuses.",
          question: "Quelle combinaison est la plus adaptée ?",
          options: [
            "« Habibi, » … « Bisous »",
            "« As-sayyid al-muḥtaram Al-Mansouri, as-salāmu ʿalaykum » … corps du message en anglais … « shukran ʿalā taʿāwunikum, maʿa khāliṣ at-taḥiyyāt »",
            "Aucune formule, aller droit au prix",
          ],
          answer: 1,
          explain:
            "Les formules de respect en ouverture et en clôture, même dans un mail en anglais, montrent de la considération. Le corps du message peut rester dans la langue de travail commune.",
        },
        {
          type: "fiche",
          title: "Voyage et travail",
          points: [
            "Voyage : <b>maṭār</b>, <b>funduq</b>, <b>ʿindī ḥajz</b>, <b>ayna… ?</b>, <b>yamīn / yasār</b>.",
            "Restaurant : <b>urīdu…</b>, <b>bidūni sukkar</b>, <b>al-ḥisāb min faḍlik</b>.",
            "Affaires : <b>sharika</b>, <b>ʿamīl</b>, <b>siʿr</b>, <b>fātūra</b>, <b>ʿarḍu siʿr</b>, <b>ijtimāʿ</b>.",
            "Écrit : <b>as-sayyid al-muḥtaram</b>, <b>shukran ʿalā taʿāwunikum</b>, <b>maʿa khāliṣ at-taḥiyyāt</b>.",
          ],
          retenir: "Dans le monde arabe, la relation précède l’affaire : commence par les formules.",
        },
      ],
    },
  ],
});
