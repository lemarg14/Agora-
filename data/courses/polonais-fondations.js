/* ============================================================
   COURS : Polonais — les fondations
   Institut des Langues · 8 séances de 15 à 20 minutes
   Les 6 axes : principes et prononciation, mots de survie,
   raccourcis depuis le français, grammaire (genres, cas),
   conjugaison (et aspect), vocabulaire par situation.
   Les exercices écrits acceptent les réponses sans signes
   diacritiques (ą → a, ł → l…).
   ============================================================ */
AGORA.registerCourse({
  id: "polonais-fondations",
  faculty: "langues",
  lang: "pl-PL",
  title: "Polonais — les fondations",
  subtitle: "Lire, prononcer et construire tes premières phrases utiles",
  color: "#6b4f9a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour démarrer le polonais : déchiffrer les lettres et groupes de lettres qui impressionnent (sz, cz, rz, ł…), les mots de survie, les mots que tu connais déjà, la grammaire essentielle avec une première approche des cas, les verbes au présent, au passé et au futur, puis le voyage et le travail. Les exercices acceptent les réponses sans accents polonais.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment marche le polonais (et ses sons)",
      minutes: 18,
      objectives: ["Comprendre les grands principes du polonais", "Lire les lettres et groupes de lettres polonais"],
      steps: [
        {
          type: "lesson",
          title: "Les principes",
          slides: [
            {
              title: "Une langue slave, une écriture latine",
              body:
                "<ul><li>Le polonais est une langue <b>slave</b>, cousine du tchèque, du slovaque et, plus loin, du russe. Il est parlé par environ 40 millions de personnes en Pologne.</li><li>Il s’écrit avec l’<b>alphabet latin</b>, enrichi de lettres spéciales : <b>ą ę ć ł ń ó ś ź ż</b>.</li><li>Bonne nouvelle : la lecture est <b>régulière</b> ; une fois les règles connues, tu peux tout lire.</li><li>L’<b>accent tonique</b> tombe presque toujours sur l’<b>avant-dernière syllabe</b> : <i>War-SZA-wa</i>.</li><li>Pas d’articles (ni « le » ni « un »), mais des <b>cas</b> : la fin des mots change selon leur rôle dans la phrase.</li></ul>",
            },
            {
              title: "Les lettres simples qui changent",
              body:
                "<table class='t'><tr><th>Lettre</th><th>Se prononce</th><th>Exemple</th></tr><tr><td>w</td><td>v</td><td>woda (eau)</td></tr><tr><td>ł</td><td>w anglais (« ou » bref)</td><td>łatwo (facile)</td></tr><tr><td>c</td><td>ts</td><td>noc (nuit)</td></tr><tr><td>ó</td><td>ou</td><td>góra (montagne)</td></tr><tr><td>j</td><td>y</td><td>jak (comment)</td></tr><tr><td>y</td><td>i un peu sourd, entre i et é</td><td>my (nous)</td></tr><tr><td>ch / h</td><td>raclé, comme la jota</td><td>chleb (pain)</td></tr></table>",
              say: [
                { t: "woda", fr: "eau (w = v)" },
                { t: "łatwo", fr: "facile (ł = w anglais)" },
                { t: "noc", fr: "nuit (c = ts)" },
                { t: "chleb", fr: "pain (ch raclé)" },
              ],
            },
            {
              title: "Les groupes de consonnes",
              body:
                "<table class='t'><tr><th>Écrit</th><th>Se prononce</th><th>Exemple</th></tr><tr><td>sz</td><td>ch (chat)</td><td>szkoła (école)</td></tr><tr><td>cz</td><td>tch</td><td>czas (temps)</td></tr><tr><td>rz / ż</td><td>j (jour)</td><td>rzeka (rivière), żaba (grenouille)</td></tr><tr><td>szcz</td><td>ch + tch</td><td>Szczecin (ville)</td></tr><tr><td>dz / dż</td><td>dz / dj</td><td>dzwon (cloche)</td></tr></table><p>Célèbre phrase pour s’entraîner : <i>W Szczebrzeszynie chrząszcz brzmi w trzcinie</i> (« À Szczebrzeszyn, un scarabée bourdonne dans les roseaux »).</p>",
              say: [
                { t: "szkoła", fr: "école (sz = ch)" },
                { t: "czas", fr: "temps (cz = tch)" },
                { t: "rzeka", fr: "rivière (rz = j)" },
                { t: "W Szczebrzeszynie chrząszcz brzmi w trzcinie.", fr: "la phrase-défi" },
              ],
            },
            {
              title: "Les sons doux et les nasales",
              body:
                "<ul><li><b>ś, ć, ź, ń</b> (ou <b>si, ci, zi, ni</b> devant une voyelle) sont des versions « mouillées », plus douces que sz, cz, ż, n : <i>cześć</i> (salut), <i>koń</i> (cheval).</li><li><b>ą</b> et <b>ę</b> sont des voyelles nasales, proches de « on » et « in » : <i>są</i> (ils sont), <i>dziękuję</i> (merci).</li></ul>",
              say: [
                { t: "cześć", fr: "salut (ś et ć doux)" },
                { t: "dziękuję", fr: "merci (dzię + ę nasale)" },
                { t: "Warszawa", fr: "Varsovie (accent sur SZA)" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "woda", back: "eau (w = v)" },
            { front: "łatwo", back: "facile (ł = w anglais)" },
            { front: "szkoła", back: "école (sz = ch)" },
            { front: "czas", back: "temps (cz = tch)" },
            { front: "rzeka", back: "rivière (rz = j)" },
            { front: "dziękuję", back: "merci" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "czas", options: ["czas (temps)", "szas", "kas"], answer: 0, explain: "cz = tch." },
            { q: "Quel mot as-tu entendu ?", say: "woda", options: ["woda (eau)", "łoda", "boda"], answer: 0, explain: "w se prononce v." },
            { q: "Comment se prononce le « ł » ?", options: ["comme un l", "comme le w anglais", "comme un j"], answer: 1, explain: "łatwo ≈ « watwo »." },
            { q: "Où tombe en général l’accent tonique ?", options: ["Sur la première syllabe", "Sur l’avant-dernière syllabe", "Sur la dernière"], answer: 1, explain: "War-SZA-wa, dzię-KU-ję." },
            { q: "« rz » se prononce…", options: ["r + z", "comme le j de « jour »", "comme « tch »"], answer: 1, explain: "Comme ż." },
          ],
        },
        {
          type: "type",
          title: "Écris le mot que tu entends",
          instruction: "Clique sur 🔊, écoute, puis écris le mot en polonais (les lettres spéciales ne sont pas obligatoires).",
          items: [
            { prompt: "Écoute et écris :", say: "szkoła", answer: ["szkoła", "szkola"], explain: "École." },
            { prompt: "Écoute et écris :", say: "noc", answer: ["noc"], explain: "Nuit (c = ts)." },
            { prompt: "Écoute et écris :", say: "chleb", answer: ["chleb"], explain: "Pain." },
            { prompt: "Écoute et écris :", say: "woda", answer: ["woda"], explain: "Eau." },
          ],
        },
        {
          type: "case",
          title: "Le nom de la ville",
          story:
            "Noa doit livrer un client à « Łódź ». Il prononce « lodz » au téléphone, et son interlocuteur polonais met quelques secondes à comprendre.",
          question: "Comment se prononce Łódź ?",
          options: [
            "Lodz, comme écrit",
            "Environ « woudj » : ł = w, ó = ou, dź = dj doux",
            "Lodèz",
          ],
          answer: 1,
          explain:
            "Les noms de villes polonaises sont souvent méconnaissables quand on les lit « à la française » : Łódź (woudj), Wrocław (vrots-waf), Kraków (kra-kouf). Connaître les règles de lecture évite bien des malentendus.",
        },
        {
          type: "fiche",
          title: "Principes et sons",
          points: [
            "Langue <b>slave</b>, alphabet <b>latin</b> + <b>ą ę ć ł ń ó ś ź ż</b> ; lecture régulière ; pas d’articles, des <b>cas</b>.",
            "Accent sur l’<b>avant-dernière syllabe</b>.",
            "<b>w</b> = v, <b>ł</b> = w, <b>c</b> = ts, <b>ó</b> = ou, <b>j</b> = y, <b>ch</b> raclé.",
            "<b>sz</b> = ch, <b>cz</b> = tch, <b>rz / ż</b> = j, <b>szcz</b> = ch-tch ; sons doux <b>ś ć ź ń</b> ; nasales <b>ą ę</b>.",
          ],
          retenir: "Le polonais se lit comme il s’écrit : il suffit de connaître une dizaine de règles.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
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
                { t: "Dzień dobry!", fr: "Bonjour ! (formel, toute la journée)" },
                { t: "Cześć!", fr: "Salut ! (familier, pour arriver et partir)" },
                { t: "Dobry wieczór", fr: "Bonsoir" },
                { t: "Nazywam się Noa.", fr: "Je m’appelle Noa." },
                { t: "Miło mi.", fr: "Enchanté." },
                { t: "Do widzenia!", fr: "Au revoir !" },
              ],
              body: "<p><i>Dzień dobry</i> s’utilise du matin jusqu’au début de soirée.</p>",
            },
            {
              title: "Proszę : le mot magique",
              body:
                "<p><b>Proszę</b> veut dire à la fois « s’il vous plaît », « je vous en prie » (de rien) et « voici » (en tendant quelque chose).</p>",
              say: [
                { t: "Proszę", fr: "s’il vous plaît / de rien / voici" },
                { t: "Dziękuję.", fr: "Merci." },
                { t: "Dziękuję bardzo.", fr: "Merci beaucoup." },
                { t: "Przepraszam.", fr: "Pardon, excusez-moi." },
                { t: "Tak / Nie", fr: "Oui / Non" },
                { t: "Nie rozumiem.", fr: "Je ne comprends pas." },
              ],
            },
            {
              title: "Les mots pour questionner",
              say: [
                { t: "Co?", fr: "Quoi ?" },
                { t: "Gdzie?", fr: "Où ?" },
                { t: "Kiedy?", fr: "Quand ?" },
                { t: "Kto?", fr: "Qui ?" },
                { t: "Dlaczego?", fr: "Pourquoi ?" },
                { t: "Ile to kosztuje?", fr: "Combien ça coûte ?" },
              ],
              body: "<p>Pour poser une question fermée (oui / non), on commence souvent par <b>czy</b> : <i>Czy mówi Pan po francusku?</i> (Parlez-vous français ?)</p>",
            },
            {
              title: "Les nombres et la monnaie",
              body: "<p>La Pologne n’utilise pas l’euro : sa monnaie est le <b>złoty</b> (PLN), divisé en 100 groszy.</p>",
              say: [
                { t: "jeden, dwa, trzy", fr: "1, 2, 3" },
                { t: "pięć", fr: "5" },
                { t: "dziesięć", fr: "10" },
                { t: "piętnaście", fr: "15" },
                { t: "pięćdziesiąt", fr: "50" },
                { t: "sto", fr: "100" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Dzień dobry", back: "Bonjour (formel)" },
            { front: "Cześć", back: "Salut (familier)" },
            { front: "Proszę", back: "S’il vous plaît / de rien / voici" },
            { front: "Dziękuję", back: "Merci" },
            { front: "Przepraszam", back: "Pardon, excusez-moi" },
            { front: "Ile to kosztuje?", back: "Combien ça coûte ?" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel nombre as-tu entendu ?", say: "pięćdziesiąt", options: ["5", "15", "50"], answer: 2, explain: "pięć (5), piętnaście (15), pięćdziesiąt (50)." },
            { q: "Quel mot as-tu entendu ?", say: "Dziękuję", options: ["Merci", "Pardon", "Bonjour"], answer: 0, explain: "dzię-KU-ję." },
            { q: "On te dit « Dziękuję! ». Tu réponds…", options: ["Proszę", "Cześć", "Nie"], answer: 0, explain: "Proszę = je vous en prie." },
            { q: "Pour entrer dans un magasin, tu dis…", options: ["Cześć!", "Dzień dobry!", "Do widzenia!"], answer: 1, explain: "Cześć est réservé aux proches." },
            { q: "Quelle est la monnaie polonaise ?", options: ["L’euro", "Le złoty", "La couronne"], answer: 1, explain: "Le złoty (PLN)." },
          ],
        },
        {
          type: "type",
          title: "Traduis en polonais",
          instruction: "Écris en polonais (lettres spéciales facultatives).",
          items: [
            { prompt: "Bonjour (formel)", answer: ["dzien dobry", "dzień dobry"] },
            { prompt: "Merci", answer: ["dziekuje", "dziękuję", "dziekuje bardzo"] },
            { prompt: "Je m’appelle Sarah.", answer: ["nazywam sie sarah", "nazywam się sarah", "jestem sarah", "mam na imie sarah"] },
            { prompt: "Je ne comprends pas.", answer: ["nie rozumiem"] },
            { prompt: "Combien ça coûte ?", answer: ["ile to kosztuje", "ile kosztuje"] },
          ],
        },
        {
          type: "case",
          title: "Le café à Cracovie",
          story:
            "Dans un café de Cracovie, le serveur pose la tasse devant Sofia en disant « Proszę ». Elle répond « Proszę » aussi, hésitante. Puis elle dit « Dziękuję » et il répond encore « Proszę ».",
          question: "Que s’est-il passé ?",
          options: [
            "Ils se sont mal compris",
            "Rien d’anormal : proszę veut dire « voici » quand on tend quelque chose, et « je vous en prie » en réponse à un merci ; Sofia aurait simplement dû dire « Dziękuję » en recevant la tasse",
            "Le serveur s’est trompé",
          ],
          answer: 1,
          explain:
            "Proszę est l’un des mots les plus polyvalents du polonais. Retenir ses trois usages simplifie beaucoup d’échanges.",
        },
        {
          type: "fiche",
          title: "Mots de survie",
          points: [
            "Saluer : <b>dzień dobry</b> (formel), <b>cześć</b> (familier), <b>nazywam się…</b>, <b>do widzenia</b>.",
            "<b>proszę</b> (s’il vous plaît, de rien, voici), <b>dziękuję</b>, <b>przepraszam</b>, <b>tak / nie</b>.",
            "Questions : <b>co, gdzie, kiedy, kto, dlaczego, ile to kosztuje?</b> ; <b>czy</b> pour oui/non.",
            "Nombres : <b>pięć</b> (5), <b>dziesięć</b> (10), <b>pięćdziesiąt</b> (50), <b>sto</b> ; monnaie : <b>złoty</b>.",
          ],
          retenir: "Proszę, dziękuję, przepraszam : trois mots pour être poli partout en Pologne.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les raccourcis depuis le français",
      minutes: 15,
      objectives: ["Reconnaître les mots internationaux et les emprunts", "Éviter les faux amis"],
      steps: [
        {
          type: "lesson",
          title: "Des mots que tu connais déjà",
          slides: [
            {
              title: "Les terminaisons internationales",
              body:
                "<table class='t'><tr><th>Français</th><th>Polonais</th><th>Exemples</th></tr><tr><td>-tion</td><td>-cja</td><td>informacja, sytuacja, restauracja</td></tr><tr><td>-té (université)</td><td>-tet</td><td>uniwersytet</td></tr><tr><td>-isme</td><td>-izm</td><td>turyzm, realizm</td></tr><tr><td>-logie</td><td>-logia</td><td>biologia, technologia</td></tr><tr><td>-iste</td><td>-ista</td><td>dentysta, turysta</td></tr></table><p>Le son « i » s’écrit souvent <b>y</b> après certaines consonnes : <i>sytuacja, dentysta</i>.</p>",
            },
            {
              title: "Les emprunts au français",
              body:
                "<p>Le français a longtemps été la langue des élites polonaises. Beaucoup de mots en viennent, avec une orthographe polonaise :</p>",
              say: [
                { t: "bagaż", fr: "bagage" },
                { t: "biuro", fr: "bureau" },
                { t: "bilet", fr: "billet, ticket" },
                { t: "plaża", fr: "plage" },
                { t: "ekran", fr: "écran" },
                { t: "restauracja", fr: "restaurant" },
              ],
            },
            {
              title: "Les mots internationaux",
              say: [
                { t: "telefon", fr: "téléphone" },
                { t: "hotel", fr: "hôtel" },
                { t: "taksówka", fr: "taxi" },
                { t: "kawa", fr: "café" },
                { t: "herbata", fr: "thé (du latin herba)" },
              ],
              body: "<p>Attention : le thé se dit <i>herbata</i>, un mot qui ne ressemble pas du tout au français.</p>",
            },
            {
              title: "Les faux amis",
              body:
                "<table class='t'><tr><th>Polonais</th><th>Veut dire</th><th>Et pas…</th></tr><tr><td>dywan</td><td>tapis</td><td>divan</td></tr><tr><td>pensja</td><td>salaire</td><td>pension (= emerytura pour la retraite)</td></tr><tr><td>kawaler</td><td>célibataire (homme)</td><td>cavalier</td></tr><tr><td>ordynarny</td><td>vulgaire, grossier</td><td>ordinaire (= zwykły)</td></tr><tr><td>akademik</td><td>résidence universitaire</td><td>académicien</td></tr><tr><td>lokal</td><td>local, mais aussi bar ou restaurant</td><td>seulement un local</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Vrai ami ou faux ami ?",
          instruction: "Le mot polonais a-t-il le même sens que le mot français qui lui ressemble ?",
          categories: ["Même sens", "Faux ami"],
          items: [
            { text: "informacja", cat: 0, why: "Information." },
            { text: "dywan", cat: 1, why: "Tapis." },
            { text: "bagaż", cat: 0, why: "Bagage." },
            { text: "pensja", cat: 1, why: "Salaire." },
            { text: "biuro", cat: 0, why: "Bureau." },
            { text: "ordynarny", cat: 1, why: "Vulgaire, pas ordinaire." },
            { text: "kawaler", cat: 1, why: "Célibataire." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "informacja", back: "information (-tion → -cja)" },
            { front: "bilet", back: "billet, ticket" },
            { front: "herbata", back: "thé" },
            { front: "dywan", back: "tapis (pas divan)" },
            { front: "pensja", back: "salaire (pas pension)" },
            { front: "ordynarny", back: "vulgaire (ordinaire = zwykły)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un recruteur te parle de ta « pensja ». Il parle…", options: ["de ta retraite", "de ton salaire", "de ton hôtel"], answer: 1, explain: "Pensja = salaire." },
            { q: "Comment dit-on « situation » ?", options: ["sytuacja", "situacion", "sytuacjon"], answer: 0, explain: "-tion → -cja, i → y après t." },
            { q: "« Herbata » signifie…", options: ["herbe", "thé", "café"], answer: 1, explain: "Du latin herba." },
            { q: "Quel mot as-tu entendu ?", say: "restauracja", options: ["restauracja (restaurant)", "rezerwacja (réservation)", "recepcja (réception)"], answer: 0, explain: "Emprunt international." },
          ],
        },
        {
          type: "type",
          title: "Retrouve le mot polonais",
          instruction: "Écris en polonais (lettres spéciales facultatives).",
          items: [
            { prompt: "information", answer: ["informacja"], hint: "-tion → -cja" },
            { prompt: "bureau", answer: ["biuro"] },
            { prompt: "billet (de train)", answer: ["bilet"] },
            { prompt: "thé", answer: ["herbata"] },
          ],
        },
        {
          type: "case",
          title: "L’annonce de recrutement",
          story:
            "Pour un futur entrepôt en Pologne, Noa lit une annonce de recrutement concurrente : « Atrakcyjna pensja, praca w biurze ». Il comprend « pension attractive, travail au bureau ».",
          question: "Que signifie vraiment l’annonce ?",
          options: [
            "Pension attractive, travail au bureau",
            "Salaire attractif, travail au bureau : pensja est un faux ami (salaire)",
            "Repas offert au bureau",
          ],
          answer: 1,
          explain:
            "Atrakcyjna (attractive), praca (travail), biuro (bureau) sont transparents ; pensja, non. Les faux amis se cachent souvent au milieu de mots faciles.",
        },
        {
          type: "fiche",
          title: "Raccourcis depuis le français",
          points: [
            "Terminaisons : <b>-tion → -cja</b>, <b>-isme → -izm</b>, <b>-logie → -logia</b>, <b>-iste → -ista / -ysta</b>.",
            "Emprunts : <b>bagaż, biuro, bilet, plaża, ekran, restauracja</b>.",
            "Pièges : <b>herbata</b> (thé), <b>dywan</b> (tapis), <b>pensja</b> (salaire), <b>kawaler</b>, <b>ordynarny</b>.",
          ],
          retenir: "Les mots en -cja sont tes amis ; pensja et dywan ne le sont pas.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "La grammaire essentielle",
      minutes: 18,
      objectives: ["Reconnaître le genre des noms et utiliser les pronoms", "Comprendre le principe des cas"],
      steps: [
        {
          type: "lesson",
          title: "Les briques de la phrase",
          slides: [
            {
              title: "Pas d’articles, trois genres",
              body:
                "<ul><li>Le polonais n’a <b>pas d’articles</b> : <i>kawa</i> = « le café » ou « un café ».</li><li>Trois genres, reconnaissables le plus souvent à la terminaison :</li></ul><table class='t'><tr><th>Genre</th><th>Terminaison typique</th><th>Exemples</th></tr><tr><td>Masculin</td><td>consonne</td><td>dom (maison), telefon</td></tr><tr><td>Féminin</td><td>-a</td><td>kawa (café), praca (travail)</td></tr><tr><td>Neutre</td><td>-o, -e</td><td>biuro (bureau), morze (mer)</td></tr></table>",
            },
            {
              title: "Pronoms et politesse",
              body:
                "<table class='t'><tr><th>Polonais</th><th>Sens</th></tr><tr><td>ja</td><td>je</td></tr><tr><td>ty</td><td>tu</td></tr><tr><td>on / ona / ono</td><td>il / elle / « il » neutre</td></tr><tr><td>my</td><td>nous</td></tr><tr><td>wy</td><td>vous (pluriel familier)</td></tr><tr><td>oni / one</td><td>ils / elles</td></tr></table><p>Pour vouvoyer, on utilise <b>Pan</b> (monsieur), <b>Pani</b> (madame), <b>Państwo</b> (mesdames et messieurs) avec le verbe à la 3e personne : <i>Czy Pan mówi po angielsku?</i> (Parlez-vous anglais, monsieur ?)</p>",
            },
            {
              title: "Le principe des cas",
              body:
                "<p>En polonais, la <b>fin d’un nom change selon son rôle</b> dans la phrase. Il existe sept cas ; commence par repérer le plus utile, l’<b>accusatif</b> (le complément d’objet) :</p><ul><li>Sujet : <i>To jest kawa.</i> (C’est un café.)</li><li>Objet : <i>Poproszę kaw<b>ę</b>.</i> (Un café, s’il vous plaît : -a devient -ę.)</li><li>Même chose : <i>herbata → Poproszę herbat<b>ę</b>.</i></li></ul><p>Pour les mots masculins d’objets et les neutres, l’accusatif ne change pas : <i>Poproszę bilet. Poproszę piwo.</i></p>",
              say: [
                { t: "To jest kawa.", fr: "C’est un café." },
                { t: "Poproszę kawę.", fr: "Un café, s’il vous plaît." },
                { t: "Poproszę bilet.", fr: "Un billet, s’il vous plaît." },
              ],
            },
            {
              title: "Négation et questions",
              body:
                "<ul><li>Négation : <b>nie</b> devant le verbe. <i>Nie mówię po polsku.</i> (Je ne parle pas polonais.)</li><li>Question oui / non : <b>czy</b> en tête. <i>Czy masz czas?</i> (As-tu le temps ?)</li><li>Le sujet est souvent omis, car le verbe indique la personne : <i>Mówię</i> = je parle.</li></ul>",
              say: [
                { t: "Nie mówię po polsku.", fr: "Je ne parle pas polonais." },
                { t: "Czy mówi Pan po francusku?", fr: "Parlez-vous français, monsieur ?" },
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
            { text: "dom (maison)", cat: 0, why: "Consonne finale." },
            { text: "kawa (café)", cat: 1, why: "Finale -a." },
            { text: "biuro (bureau)", cat: 2, why: "Finale -o." },
            { text: "praca (travail)", cat: 1, why: "Finale -a." },
            { text: "telefon", cat: 0, why: "Consonne finale." },
            { text: "morze (mer)", cat: 2, why: "Finale -e." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "kawa / kawę", back: "café (sujet) / café (objet : Poproszę kawę)" },
            { front: "Pan / Pani", back: "Monsieur / Madame : vouvoiement + verbe à la 3e personne" },
            { front: "czy", back: "mot qui ouvre une question oui/non" },
            { front: "nie", back: "ne… pas / non" },
            { front: "Poproszę…", back: "Je voudrais…, … s’il vous plaît" },
            { front: "Nie mówię po polsku.", back: "Je ne parle pas polonais." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel est le genre de « szkoła » (école) ?", options: ["Masculin", "Féminin", "Neutre"], answer: 1, explain: "Finale -a." },
            { q: "« Un thé, s’il vous plaît » (herbata) se dit…", options: ["Poproszę herbata.", "Poproszę herbatę.", "Poproszę herbato."], answer: 1, explain: "Accusatif féminin : -a → -ę." },
            { q: "Pour vouvoyer une femme, tu utilises…", options: ["ty", "Pani + verbe à la 3e personne", "wy"], answer: 1, explain: "Czy Pani mówi po angielsku?" },
            { q: "Quelle phrase as-tu entendue ?", say: "Nie mówię po polsku.", options: ["Je ne parle pas polonais.", "Je parle polonais.", "Tu parles polonais ?"], answer: 0, explain: "Nie = négation." },
          ],
        },
        {
          type: "type",
          title: "Construis la phrase",
          instruction: "Écris en polonais (lettres spéciales facultatives).",
          items: [
            { prompt: "Un café, s’il vous plaît.", answer: ["poprosze kawe", "poproszę kawę", "kawe prosze", "kawę proszę"] },
            { prompt: "Je ne parle pas polonais.", answer: ["nie mowie po polsku", "nie mówię po polsku"] },
            { prompt: "Un billet, s’il vous plaît.", answer: ["poprosze bilet", "poproszę bilet", "bilet prosze"] },
            { prompt: "C’est un café. (To jest…)", answer: ["to jest kawa"] },
          ],
        },
        {
          type: "case",
          title: "La commande au bar",
          story:
            "À Varsovie, Hugo commande : « Poproszę herbata i kawa. » La serveuse comprend parfaitement et sourit.",
          question: "Quelle est la forme correcte, et est-ce grave ?",
          options: [
            "Rien à corriger",
            "« Poproszę herbatę i kawę » (accusatif) ; l’erreur n’empêche pas la compréhension, mais les cas rendent le polonais naturel",
            "« Poproszę herbato i kawo »",
          ],
          answer: 1,
          explain:
            "Les Polonais comprennent très bien un étranger qui se trompe de cas. Commencer par l’accusatif des mots féminins (-a → -ę) couvre déjà beaucoup de situations : commander, acheter, demander.",
        },
        {
          type: "fiche",
          title: "Grammaire essentielle",
          points: [
            "<b>Pas d’articles</b> ; genres : consonne (masc.), <b>-a</b> (fém.), <b>-o / -e</b> (neutre).",
            "Pronoms <b>ja, ty, on, ona, ono, my, wy, oni</b> ; politesse : <b>Pan / Pani / Państwo</b> + 3e personne.",
            "<b>Cas</b> : la fin du nom change selon son rôle ; accusatif féminin <b>-a → -ę</b> (Poproszę kawę).",
            "Négation <b>nie</b> ; question oui/non avec <b>czy</b> ; sujet souvent omis.",
          ],
          retenir: "Poproszę kawę : avec cette phrase, tu as déjà utilisé un cas.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Le présent",
      minutes: 17,
      objectives: ["Conjuguer być et mieć", "Conjuguer les verbes courants au présent"],
      steps: [
        {
          type: "lesson",
          title: "Les verbes du quotidien",
          slides: [
            {
              title: "Być (être) et mieć (avoir)",
              body:
                "<table class='t'><tr><th></th><th>być</th><th>mieć</th></tr><tr><td>ja</td><td>jestem</td><td>mam</td></tr><tr><td>ty</td><td>jesteś</td><td>masz</td></tr><tr><td>on / ona / Pan / Pani</td><td>jest</td><td>ma</td></tr><tr><td>my</td><td>jesteśmy</td><td>mamy</td></tr><tr><td>wy</td><td>jesteście</td><td>macie</td></tr><tr><td>oni / Państwo</td><td>są</td><td>mają</td></tr></table>",
              say: [
                { t: "Jestem z Francji.", fr: "Je viens de France." },
                { t: "Mam dwadzieścia pięć lat.", fr: "J’ai 25 ans." },
                { t: "Mam pytanie.", fr: "J’ai une question." },
              ],
            },
            {
              title: "Les verbes en -ać",
              body:
                "<p>Groupe très régulier, sur le modèle de <b>czytać</b> (lire) :</p><table class='t'><tr><th>Sujet</th><th>czytać</th></tr><tr><td>ja</td><td>czytam</td></tr><tr><td>ty</td><td>czytasz</td></tr><tr><td>on / ona</td><td>czyta</td></tr><tr><td>my</td><td>czytamy</td></tr><tr><td>wy</td><td>czytacie</td></tr><tr><td>oni</td><td>czytają</td></tr></table><p>Même modèle : <i>pytać</i> (demander), <i>mieszkać</i> (habiter), <i>zamawiać</i> (commander).</p>",
            },
            {
              title: "Les verbes en -ić / -yć",
              body:
                "<p>Modèle <b>mówić</b> (parler) :</p><table class='t'><tr><th>Sujet</th><th>mówić</th></tr><tr><td>ja</td><td>mówię</td></tr><tr><td>ty</td><td>mówisz</td></tr><tr><td>on / ona</td><td>mówi</td></tr><tr><td>my</td><td>mówimy</td></tr><tr><td>wy</td><td>mówicie</td></tr><tr><td>oni</td><td>mówią</td></tr></table><p>Même modèle : <i>robić</i> (faire), <i>płacić</i> (payer).</p>",
              say: [
                { t: "Mówię trochę po polsku.", fr: "Je parle un peu polonais." },
                { t: "Mieszkam w Caen.", fr: "J’habite à Caen." },
              ],
            },
            {
              title: "Chcieć, móc, musieć",
              body:
                "<ul><li><b>chcieć</b> (vouloir) : <i>chcę, chcesz, chce…</i> <i>Chcę zamówić.</i> (Je veux commander.)</li><li><b>móc</b> (pouvoir) : <i>mogę, możesz, może…</i> <i>Czy mogę zapłacić kartą?</i> (Puis-je payer par carte ?)</li><li><b>musieć</b> (devoir) : <i>muszę, musisz, musi…</i> <i>Muszę iść.</i> (Je dois y aller.)</li></ul><p>Pour être poli, <b>poproszę</b> et <b>chciałbym / chciałabym</b> (je voudrais, homme / femme) sont préférables à « chcę ».</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "jestem / jesteś / jest", back: "je suis / tu es / il est" },
            { front: "mam / masz / ma", back: "j’ai / tu as / il a" },
            { front: "Mam 25 lat.", back: "J’ai 25 ans." },
            { front: "mówię", back: "je parle" },
            { front: "Czy mogę zapłacić kartą?", back: "Puis-je payer par carte ?" },
            { front: "chciałbym / chciałabym", back: "je voudrais (dit par un homme / une femme)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Complète : My ___ (być) z Francji.", options: ["jesteśmy", "są", "jestem"], answer: 0, explain: "My jesteśmy." },
            { q: "Complète : Ona ___ (mieć) samochód.", options: ["mam", "ma", "mają"], answer: 1, explain: "Ona ma." },
            { q: "Comment dit-on « Je parle un peu polonais » ?", options: ["Mówię trochę po polsku.", "Mówi trochę polski.", "Jestem trochę polski."], answer: 0, explain: "Po polsku = en polonais." },
            { q: "Quelle phrase as-tu entendue ?", say: "Czy mogę zapłacić kartą?", options: ["Puis-je payer par carte ?", "Où est la carte ?", "Je veux une carte."], answer: 0, explain: "Móc = pouvoir ; zapłacić = payer ; kartą = par carte." },
          ],
        },
        {
          type: "type",
          title: "Conjugue",
          instruction: "Écris la forme correcte (lettres spéciales facultatives).",
          items: [
            { prompt: "Ja ___ (być) z Francji.", answer: ["jestem"] },
            { prompt: "Oni ___ (mieć) czas.", answer: ["maja", "mają"] },
            { prompt: "Ty ___ (czytać).", answer: ["czytasz"] },
            { prompt: "Traduis : J’ai 25 ans.", answer: ["mam 25 lat", "mam dwadziescia piec lat", "mam dwadzieścia pięć lat"] },
            { prompt: "Traduis : J’habite à Caen. (mieszkać)", answer: ["mieszkam w caen"] },
          ],
        },
        {
          type: "case",
          title: "Se présenter à un partenaire",
          story:
            "Noa rencontre un responsable logistique à Poznań. Il veut dire : « Je viens de France, j’habite à Caen et je parle un peu polonais. »",
          question: "Quelle phrase est correcte ?",
          options: [
            "Jest z Francji, mieszka w Caen i mówi trochę po polsku.",
            "Jestem z Francji, mieszkam w Caen i mówię trochę po polsku.",
            "Ja być Francja, ja mieszkać Caen.",
          ],
          answer: 1,
          explain:
            "Les terminaisons de 1re personne (-em, -am, -ę) suffisent à dire « je » : pas besoin d’ajouter ja. Une présentation simple et correcte fait toujours bonne impression.",
        },
        {
          type: "fiche",
          title: "Le présent",
          points: [
            "<b>być</b> : jestem, jesteś, jest, jesteśmy, jesteście, są ; <b>mieć</b> : mam, masz, ma…",
            "<b>-ać</b> : czytam, czytasz, czyta, czytamy, czytacie, czytają.",
            "<b>-ić / -yć</b> : mówię, mówisz, mówi, mówimy, mówicie, mówią.",
            "<b>chcę, mogę, muszę</b> ; poli : <b>poproszę</b>, <b>chciałbym / chciałabym</b>.",
          ],
          retenir: "Jestem, mam, mówię : trois verbes pour te présenter en polonais.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Passé, futur et aspect",
      minutes: 17,
      objectives: ["Raconter au passé en accordant selon le genre", "Comprendre l’aspect et parler du futur"],
      steps: [
        {
          type: "lesson",
          title: "Sortir du présent",
          slides: [
            {
              title: "Le passé s’accorde",
              body:
                "<p>Au passé, le verbe s’accorde avec le <b>genre</b> de la personne. Exemple avec <b>być</b> :</p><table class='t'><tr><th>Sujet</th><th>Homme</th><th>Femme</th></tr><tr><td>ja</td><td>byłem</td><td>byłam</td></tr><tr><td>ty</td><td>byłeś</td><td>byłaś</td></tr><tr><td>on / ona</td><td>był</td><td>była</td></tr></table><p>Formation : radical + <b>-ł</b> + terminaison : <i>robić → robiłem / robiłam</i> (j’ai fait), <i>pracować → pracowałem / pracowałam</i> (j’ai travaillé).</p>",
              say: [
                { t: "Byłem w Krakowie.", fr: "J’ai été à Cracovie (dit par un homme)." },
                { t: "Byłam w Krakowie.", fr: "J’ai été à Cracovie (dite par une femme)." },
              ],
            },
            {
              title: "L’aspect : en cours ou terminé",
              body:
                "<p>La plupart des verbes polonais vont <b>par paires</b> :</p><ul><li><b>imperfectif</b> : l’action en cours, habituelle ou répétée. <i>robić</i> (faire), <i>dzwonić</i> (appeler), <i>płacić</i> (payer).</li><li><b>perfectif</b> : l’action vue comme <b>terminée</b>, avec un résultat. <i>zrobić, zadzwonić, zapłacić</i>.</li></ul><p><i>Pisałem list</i> = j’écrivais une lettre (en cours). <i>Napisałem list</i> = j’ai écrit la lettre (c’est fait).</p>",
            },
            {
              title: "Le futur",
              body:
                "<ul><li>Avec un verbe <b>perfectif</b>, la forme du présent exprime le <b>futur</b> : <i>Zadzwonię jutro.</i> (Je t’appellerai demain.) <i>Zapłacę kartą.</i> (Je paierai par carte.)</li><li>Avec un verbe <b>imperfectif</b>, on utilise <b>będę</b> + infinitif : <i>Będę pracować w Polsce.</i> (Je travaillerai en Pologne, pendant un temps.)</li></ul>",
              say: [
                { t: "Zadzwonię jutro.", fr: "J’appellerai demain." },
                { t: "Będę pracować w Polsce.", fr: "Je travaillerai en Pologne." },
              ],
            },
            {
              title: "Repères de temps",
              say: [
                { t: "wczoraj", fr: "hier" },
                { t: "dzisiaj", fr: "aujourd’hui" },
                { t: "jutro", fr: "demain" },
                { t: "w przyszłym tygodniu", fr: "la semaine prochaine" },
                { t: "teraz", fr: "maintenant" },
              ],
              body: "<p>Avec ces mots et quelques paires de verbes, tu peux déjà situer une action dans le temps.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "byłem / byłam", back: "j’ai été (homme / femme)" },
            { front: "robić / zrobić", back: "faire (en cours) / faire (terminé)" },
            { front: "dzwonić / zadzwonić", back: "appeler (en cours) / appeler (une fois, terminé)" },
            { front: "Zadzwonię jutro.", back: "J’appellerai demain (perfectif = futur)." },
            { front: "będę + infinitif", back: "futur des verbes imperfectifs" },
            { front: "wczoraj / jutro", back: "hier / demain" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Sofia (une femme) dit « j’ai été à Varsovie » :", options: ["Byłem w Warszawie.", "Byłam w Warszawie.", "Był w Warszawie."], answer: 1, explain: "Byłam au féminin." },
            { q: "Quelle forme indique une action terminée ?", options: ["robić", "zrobić"], answer: 1, explain: "Le préfixe z- forme ici le perfectif." },
            { q: "« Zapłacę jutro » signifie…", options: ["J’ai payé hier", "Je paierai demain", "Je paie maintenant"], answer: 1, explain: "Perfectif au présent = futur." },
            { q: "Quelle phrase as-tu entendue ?", say: "Zadzwonię jutro.", options: ["J’appellerai demain.", "J’ai appelé hier.", "Appelle-moi demain."], answer: 0, explain: "Zadzwonić : perfectif." },
          ],
        },
        {
          type: "type",
          title: "Passé et futur",
          instruction: "Écris en polonais (lettres spéciales facultatives).",
          items: [
            { prompt: "j’ai été (tu es un homme)", answer: ["bylem", "byłem"] },
            { prompt: "j’ai été (tu es une femme)", answer: ["bylam", "byłam"] },
            { prompt: "J’appellerai demain.", answer: ["zadzwonie jutro", "zadzwonię jutro", "jutro zadzwonie", "jutro zadzwonię"] },
            { prompt: "demain", answer: ["jutro"] },
          ],
        },
        {
          type: "case",
          title: "La promesse au client",
          story:
            "Un client de Wrocław demande quand il recevra le devis. Noa répond « Wysyłam ofertę jutro », en pensant dire « J’enverrai le devis demain ».",
          question: "Quelle forme exprime le mieux la promesse d’un envoi terminé demain ?",
          options: [
            "Wysyłam ofertę jutro.",
            "Wyślę ofertę jutro. (perfectif : l’envoi sera fait demain)",
            "Wysyłałem ofertę jutro.",
          ],
          answer: 1,
          explain:
            "Wysyłać (imperfectif) / wysłać (perfectif). Le perfectif conjugué au présent (wyślę) donne un futur ferme : « j’enverrai ». Le présent imperfectif + jutro se comprend, mais sonne moins précis.",
        },
        {
          type: "fiche",
          title: "Passé, futur, aspect",
          points: [
            "Passé accordé au genre : <b>byłem / byłam</b>, <b>robiłem / robiłam</b>.",
            "Paires de verbes : <b>imperfectif</b> (en cours) / <b>perfectif</b> (terminé) : robić / zrobić.",
            "Futur : perfectif au présent (<b>zadzwonię</b>) ou <b>będę</b> + infinitif imperfectif.",
            "Repères : <b>wczoraj, dzisiaj, jutro, teraz</b>.",
          ],
          retenir: "Un verbe polonais te dit aussi si l’action est terminée : c’est l’aspect.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
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
                { t: "lotnisko", fr: "aéroport" },
                { t: "dworzec", fr: "gare" },
                { t: "pociąg", fr: "train" },
                { t: "bilet", fr: "billet" },
                { t: "Mój lot jest opóźniony.", fr: "Mon vol est retardé." },
              ],
              body: "<p>Dans les transports urbains, on valide son ticket en montant (<i>skasować bilet</i>).</p>",
            },
            {
              title: "À l’hôtel",
              say: [
                { t: "Mam rezerwację.", fr: "J’ai une réservation (accusatif de rezerwacja)." },
                { t: "pokój dwuosobowy", fr: "chambre double" },
                { t: "Czy śniadanie jest wliczone?", fr: "Le petit-déjeuner est-il compris ?" },
                { t: "Wi-Fi nie działa.", fr: "Le Wi-Fi ne marche pas." },
              ],
              body: "<p>Remarque l’accusatif : <i>rezerwacja → Mam rezerwację</i>.</p>",
            },
            {
              title: "Au restaurant",
              say: [
                { t: "Poproszę menu.", fr: "La carte, s’il vous plaît." },
                { t: "Poproszę wodę.", fr: "De l’eau, s’il vous plaît (woda → wodę)." },
                { t: "Smacznego!", fr: "Bon appétit !" },
                { t: "Na zdrowie!", fr: "Santé ! (en trinquant)" },
                { t: "Poproszę rachunek.", fr: "L’addition, s’il vous plaît." },
              ],
              body: "<p>Le pourboire est courant au restaurant (souvent autour de 10 %) ; dire <i>dziękuję</i> en donnant l’argent peut signifier « gardez la monnaie ».</p>",
            },
            {
              title: "Demander son chemin",
              say: [
                { t: "Gdzie jest dworzec?", fr: "Où est la gare ?" },
                { t: "prosto", fr: "tout droit" },
                { t: "w lewo / w prawo", fr: "à gauche / à droite" },
                { t: "Czy to daleko?", fr: "C’est loin ?" },
                { t: "blisko", fr: "près" },
              ],
              body: "<p>Et : <i>obok</i> (à côté), <i>naprzeciwko</i> (en face).</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "dworzec / pociąg", back: "gare / train" },
            { front: "opóźniony", back: "retardé" },
            { front: "Mam rezerwację.", back: "J’ai une réservation." },
            { front: "Smacznego!", back: "Bon appétit !" },
            { front: "Poproszę rachunek.", back: "L’addition, s’il vous plaît." },
            { front: "w lewo / w prawo", back: "à gauche / à droite" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’as-tu entendu ?", say: "Pociąg jest opóźniony.", options: ["Le train est retardé.", "Le train est annulé.", "Le train est complet."], answer: 0, explain: "Opóźniony = retardé." },
            { q: "Qu’as-tu entendu ?", say: "Proszę iść prosto, potem w prawo.", options: ["Allez tout droit, puis à droite.", "Allez à gauche, puis tout droit.", "Revenez en arrière."], answer: 0, explain: "Prosto = tout droit, w prawo = à droite." },
            { q: "Attention au pourboire : en donnant l’argent, « dziękuję » peut signifier…", options: ["Rendez-moi la monnaie", "Gardez la monnaie", "Je reviendrai"], answer: 1, explain: "Dis-le seulement si tu veux laisser la monnaie." },
            { q: "On trinque en disant…", options: ["Smacznego!", "Na zdrowie!", "Dzień dobry!"], answer: 1, explain: "Smacznego = bon appétit." },
          ],
        },
        {
          type: "type",
          title: "En situation",
          instruction: "Traduis en polonais (lettres spéciales facultatives).",
          items: [
            { prompt: "J’ai une réservation.", answer: ["mam rezerwacje", "mam rezerwację"] },
            { prompt: "L’addition, s’il vous plaît.", answer: ["poprosze rachunek", "poproszę rachunek", "rachunek prosze", "rachunek proszę"] },
            { prompt: "Où est la gare ?", answer: ["gdzie jest dworzec"] },
            { prompt: "Bon appétit !", answer: ["smacznego"] },
          ],
        },
        {
          type: "case",
          title: "La monnaie au restaurant",
          story:
            "À Gdańsk, l’addition fait 87 złotys. Hugo tend un billet de 200 et dit « Dziękuję ». Le serveur le remercie chaleureusement et s’éloigne… sans rendre la monnaie.",
          question: "Que s’est-il passé ?",
          options: [
            "Le serveur a volé Hugo",
            "En Pologne, dire « dziękuję » en tendant l’argent peut signifier « gardez la monnaie » : il fallait attendre la monnaie avant de remercier, ou indiquer le montant à garder",
            "Le restaurant était fermé",
          ],
          answer: 1,
          explain:
            "Un usage local qui coûte cher quand on l’ignore. Pour laisser un pourboire précis, on peut dire le montant total qu’on souhaite payer.",
        },
        {
          type: "fiche",
          title: "En voyage",
          points: [
            "Transport : <b>lotnisko, dworzec, pociąg, bilet, opóźniony</b>.",
            "Hôtel : <b>mam rezerwację</b>, <b>czy śniadanie jest wliczone?</b>",
            "Restaurant : <b>poproszę…</b>, <b>smacznego</b>, <b>na zdrowie</b>, <b>rachunek</b> ; attention au « dziękuję » en payant.",
            "Chemin : <b>prosto</b>, <b>w lewo / w prawo</b>, <b>daleko / blisko</b>.",
          ],
          retenir: "Avec poproszę + un nom à l’accusatif, tu commandes à peu près tout.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Le polonais du travail",
      minutes: 17,
      objectives: ["Écrire un e-mail professionnel simple", "Prospecter et négocier avec des partenaires polonais"],
      steps: [
        {
          type: "lesson",
          title: "Travailler en polonais",
          slides: [
            {
              title: "L’e-mail professionnel",
              body:
                "<ul><li>Ouverture formelle : <i>Szanowny Panie,</i> (Monsieur) / <i>Szanowna Pani,</i> (Madame) / <i>Szanowni Państwo,</i> (Mesdames et Messieurs). Plus courant : <i>Dzień dobry,</i>.</li><li>Pièce jointe : <i>W załączniku przesyłam ofertę.</i></li><li>Clôture : <i>Z poważaniem,</i> (formel) / <i>Pozdrawiam,</i> (cordialement, très courant).</li></ul>",
              say: [
                { t: "W załączniku przesyłam ofertę.", fr: "Je vous envoie l’offre en pièce jointe." },
                { t: "Z poważaniem", fr: "Veuillez agréer… (formel)" },
                { t: "Pozdrawiam", fr: "Cordialement" },
              ],
            },
            {
              title: "Le vocabulaire commercial",
              say: [
                { t: "oferta", fr: "offre, devis" },
                { t: "faktura", fr: "facture" },
                { t: "zamówienie", fr: "commande" },
                { t: "termin dostawy", fr: "délai de livraison" },
                { t: "rabat", fr: "remise" },
                { t: "próbka", fr: "échantillon" },
              ],
              body: "<p>Les prix sont souvent en <b>złotys (PLN)</b> ou en euros dans le B2B international ; la virgule sert aux décimales : <b>4,50 zł</b>.</p>",
            },
            {
              title: "La culture d’affaires",
              body:
                "<ul><li>On utilise les titres et le vouvoiement (<b>Pan / Pani</b>) tant que l’interlocuteur ne propose pas de passer au prénom (<i>przejść na ty</i>).</li><li>Ponctualité et poignée de main ferme sont appréciées.</li><li>Les décisions sont souvent prises après une relation de confiance : premiers échanges formels, puis plus chaleureux.</li><li>Avoir des documents (fiche produit, devis) en polonais ou au moins en anglais clair est un vrai plus.</li></ul>",
            },
            {
              title: "Négocier",
              body:
                "<ul><li><i>Czy jest możliwy rabat przy 500 sztukach?</i> (Une remise est-elle possible pour 500 pièces ?)</li><li><i>To trochę za drogo dla nas.</i> (C’est un peu trop cher pour nous.)</li><li><i>Jakie są warunki płatności?</i> (Quelles sont les conditions de paiement ?)</li><li><i>Czy może Pan to potwierdzić na piśmie?</i> (Pouvez-vous le confirmer par écrit, monsieur ?)</li></ul>",
              say: [
                { t: "To trochę za drogo dla nas.", fr: "C’est un peu trop cher pour nous." },
                { t: "Czy może Pan to potwierdzić na piśmie?", fr: "Pouvez-vous le confirmer par écrit ?" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Quel mot ?",
          instruction: "Associe chaque situation au bon terme.",
          categories: ["oferta (offre, devis)", "faktura (facture)", "próbka (échantillon)"],
          items: [
            { text: "Avant d’acheter, le client veut un prix détaillé", cat: 0, why: "L’offre." },
            { text: "Après livraison, tu demandes le paiement", cat: 1, why: "La facture." },
            { text: "Tu laisses un produit à tester gratuitement", cat: 2, why: "L’échantillon." },
            { text: "Document envoyé « w załączniku » avant l’accord", cat: 0, why: "L’offre précède la commande." },
            { text: "Document comportant le numéro fiscal (NIP) et la TVA", cat: 1, why: "La facture." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Szanowny Panie / Szanowna Pani", back: "Monsieur / Madame (ouverture formelle)" },
            { front: "W załączniku przesyłam…", back: "Je vous envoie en pièce jointe…" },
            { front: "Pozdrawiam", back: "Cordialement" },
            { front: "faktura", back: "facture" },
            { front: "rabat", back: "remise" },
            { front: "próbka", back: "échantillon" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Pour ouvrir un e-mail à une femme que tu ne connais pas, tu écris…", options: ["Cześć!", "Szanowna Pani,", "Szanowny Panie,"], answer: 1, explain: "Szanowna Pani au féminin." },
            { q: "Qu’as-tu entendu ?", say: "Czy jest możliwy rabat?", options: ["Une remise est-elle possible ?", "La facture est-elle prête ?", "La livraison est-elle possible ?"], answer: 0, explain: "Rabat = remise." },
            { q: "« Termin dostawy » désigne…", options: ["le délai de livraison", "le terminal", "la fin du contrat"], answer: 0, explain: "Termin = délai, échéance ; dostawa = livraison." },
            { q: "Ton interlocuteur te propose « przejść na ty ». Il veut…", options: ["arrêter la réunion", "passer au tutoiement", "changer de langue"], answer: 1, explain: "C’est un signe de confiance." },
          ],
        },
        {
          type: "type",
          title: "Rédige",
          instruction: "Traduis en polonais (lettres spéciales facultatives).",
          items: [
            { prompt: "Je vous envoie l’offre en pièce jointe.", answer: ["w zalaczniku przesylam oferte", "w załączniku przesyłam ofertę"] },
            { prompt: "Cordialement", answer: ["pozdrawiam", "z powazaniem", "z poważaniem", "serdecznie pozdrawiam"] },
            { prompt: "facture", answer: ["faktura"] },
            { prompt: "C’est un peu trop cher pour nous.", answer: ["to troche za drogo dla nas", "to trochę za drogo dla nas"] },
          ],
        },
        {
          type: "case",
          title: "Le premier mail à un grossiste",
          story:
            "Noa veut proposer des accessoires pour animaux à un grossiste de Poznań. Il prépare un premier e-mail en polonais simple.",
          question: "Quel message est le plus adapté ?",
          options: [
            "« Cześć! Kup moje produkty. Pa! »",
            "« Szanowny Panie, sprzedajemy akcesoria dla zwierząt. W załączniku przesyłam ofertę. Chętnie wyślę bezpłatną próbkę. Pozdrawiam, Noa »",
            "Un long mail en français",
          ],
          answer: 1,
          explain:
            "Ouverture formelle, présentation en une phrase, offre en pièce jointe, proposition d’échantillon gratuit et clôture : court et professionnel. Pour un envoi réel, une relecture par un natif reste recommandée.",
        },
        {
          type: "fiche",
          title: "Le polonais du travail",
          points: [
            "E-mail : <b>Szanowny Panie / Szanowna Pani</b> ou <b>Dzień dobry</b>, <b>W załączniku przesyłam…</b>, <b>Pozdrawiam / Z poważaniem</b>.",
            "Vocabulaire : <b>oferta, faktura, zamówienie, termin dostawy, rabat, próbka</b> ; złoty et virgule décimale.",
            "Culture : <b>Pan / Pani</b> jusqu’à <i>przejść na ty</i>, ponctualité, relation de confiance.",
            "Négocier : <b>rabat przy … sztukach</b>, <b>za drogo</b>, <b>warunki płatności</b>, <b>potwierdzić na piśmie</b>.",
          ],
          retenir: "En Pologne, on commence par Pan et Pani : le tutoiement se gagne.",
        },
      ],
    },
  ],
});
