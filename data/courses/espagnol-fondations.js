/* ============================================================
   COURS : Espagnol — les fondations
   Institut des Langues · 8 séances de 15 à 20 minutes
   Les 6 axes : principes et prononciation, mots de survie,
   raccourcis depuis le français, grammaire, conjugaison,
   vocabulaire par situation (voyage, travail).
   Espagnol d’Espagne (es-ES) ; différences avec l’Amérique latine
   signalées (vosotros, prononciation du c/z).
   ============================================================ */
AGORA.registerCourse({
  id: "espagnol-fondations",
  faculty: "langues",
  lang: "es-ES",
  title: "Espagnol — les fondations",
  subtitle: "Prononcer, comprendre et construire tes premières phrases utiles",
  color: "#6b4f9a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour démarrer l’espagnol avec un gros avantage : tu es francophone. Les sons à maîtriser, les mots de survie, les milliers de mots que tu reconnais déjà, la grammaire essentielle (ser et estar compris), les temps les plus utiles, puis l’espagnol du voyage et du travail. Clique sur 🔊 pour écouter et écris tes réponses.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment marche l’espagnol (et ses sons)",
      minutes: 17,
      objectives: ["Comprendre les grands principes de l’espagnol", "Prononcer les sons propres à l’espagnol"],
      steps: [
        {
          type: "lesson",
          title: "Les principes",
          slides: [
            {
              title: "Une langue cousine du français",
              body:
                "<ul><li>L’espagnol vient du latin, comme le français : la structure des phrases et une grande partie du vocabulaire te seront familières.</li><li>Il <b>se lit presque comme il s’écrit</b> : une fois les règles connues, tu peux prononcer n’importe quel mot.</li><li>Les noms ont un <b>genre</b> : souvent masculin en -o (<i>el libro</i>), féminin en -a (<i>la casa</i>).</li><li>Le <b>sujet est souvent omis</b> : la terminaison du verbe suffit. <i>Hablo español</i> = je parle espagnol.</li></ul>",
            },
            {
              title: "Les voyelles et le h",
              body:
                "<p>Cinq voyelles, toujours <b>prononcées et nettes</b> : a, e (é), i, o, u (ou). Pas de voyelles muettes ni de nasales comme « an » ou « on ».</p><p>Le <b>h est muet</b> : <i>hola</i> se dit « ola ».</p>",
              say: [
                { t: "hola", fr: "bonjour (h muet)" },
                { t: "bueno", fr: "bon (u = ou)" },
                { t: "gente", fr: "les gens (e = é)" },
                { t: "un", fr: "un (on prononce le n, pas de nasale)" },
              ],
            },
            {
              title: "La jota et le r roulé",
              body:
                "<ul><li>Le <b>j</b> (et le g devant e, i) se prononce comme un « r » raclé du fond de la gorge.</li><li>Le <b>r</b> est battu (un coup de langue) ; le <b>rr</b> et le r en début de mot sont <b>roulés</b>.</li></ul>",
              say: [
                { t: "jamón", fr: "jambon (jota)" },
                { t: "gente", fr: "les gens (g = jota devant e)" },
                { t: "pero", fr: "mais (r battu)" },
                { t: "perro", fr: "chien (rr roulé)" },
                { t: "rápido", fr: "rapide (r initial roulé)" },
              ],
            },
            {
              title: "Ñ, ll, z et c",
              body:
                "<ul><li><b>ñ</b> se prononce « gn » : <i>España</i>.</li><li><b>ll</b> et <b>y</b> se prononcent à peu près comme « y » : <i>llamar</i>.</li><li>En Espagne, <b>z</b> et <b>c devant e, i</b> se prononcent langue entre les dents, comme le « th » anglais de <i>think</i>. En Amérique latine, ils se prononcent « s ».</li></ul>",
              say: [
                { t: "España", fr: "Espagne (ñ = gn)" },
                { t: "me llamo", fr: "je m’appelle (ll ≈ y)" },
                { t: "cerveza", fr: "bière (c et z « zézayés » en Espagne)" },
                { t: "gracias", fr: "merci" },
              ],
            },
            {
              title: "L’accent tonique",
              body:
                "<p>Chaque mot a une syllabe plus forte, selon des règles simples :</p><ul><li>Mot terminé par une <b>voyelle, n ou s</b> : accent sur l’<b>avant-dernière</b> syllabe (<i>CA-sa, HA-blan</i>).</li><li>Sinon : accent sur la <b>dernière</b> (<i>ha-BLAR, ciu-DAD</i>).</li><li>Exception : un <b>accent écrit</b> indique la syllabe forte (<i>ca-FÉ, ME-di-co</i> s’écrit <i>médico</i>).</li></ul>",
              say: [
                { t: "casa", fr: "maison (CA-sa)" },
                { t: "hablar", fr: "parler (ha-BLAR)" },
                { t: "café", fr: "café (ca-FÉ)" },
                { t: "médico", fr: "médecin (MÉ-di-co)" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "hola", back: "bonjour (le h est muet)" },
            { front: "perro / pero", back: "chien (rr roulé) / mais (r battu)" },
            { front: "jamón", back: "jambon (j = r raclé)" },
            { front: "España", back: "Espagne (ñ = gn)" },
            { front: "me llamo", back: "je m’appelle (ll ≈ y)" },
            { front: "Hablo español.", back: "Je parle espagnol (le sujet « yo » est souvent omis)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "perro", options: ["pero", "perro", "pelo"], answer: 1, explain: "Le rr est roulé : perro = chien." },
            { q: "Quel mot as-tu entendu ?", say: "jamón", options: ["jamón", "ramón", "camón"], answer: 0, explain: "La jota se prononce au fond de la gorge." },
            { q: "Comment se prononce le h de « hola » ?", options: ["Comme en anglais, soufflé", "Il est muet", "Comme un j"], answer: 1, explain: "Le h espagnol ne se prononce pas." },
            { q: "« Hablo francés » : pourquoi pas de « yo » ?", options: ["C’est une faute", "La terminaison -o indique déjà « je »", "Yo est interdit"], answer: 1, explain: "On ajoute yo seulement pour insister." },
            { q: "Où est l’accent tonique de « hablar » ?", options: ["HA-blar", "ha-BLAR", "Il n’y en a pas"], answer: 1, explain: "Mot terminé par r (consonne autre que n, s) : dernière syllabe." },
          ],
        },
        {
          type: "type",
          title: "Écris le mot que tu entends",
          instruction: "Clique sur 🔊, écoute, puis écris le mot en espagnol (les accents écrits ne sont pas obligatoires).",
          items: [
            { prompt: "Écoute et écris :", say: "gracias", answer: "gracias", explain: "Merci." },
            { prompt: "Écoute et écris :", say: "perro", answer: "perro", explain: "Chien." },
            { prompt: "Écoute et écris :", say: "España", answer: "españa", explain: "Avec un ñ." },
            { prompt: "Écoute et écris :", say: "hola", answer: "hola", explain: "N’oublie pas le h muet à l’écrit." },
          ],
        },
        {
          type: "case",
          title: "« Pero » ou « perro » ?",
          story:
            "À Valence, Hugo veut dire à un client « mais je peux vous faire un prix » et commence par « perro… ». Le client sourit : il a entendu « chien ».",
          question: "Quel est le conseil le plus utile ?",
          options: [
            "Ne plus jamais dire « mais »",
            "Travailler la différence entre r battu (pero, mais) et rr roulé (perro, chien) : en espagnol, la prononciation de certaines consonnes change le sens du mot",
            "Parler français",
          ],
          answer: 1,
          explain:
            "Les paires pero / perro, caro (cher) / carro (chariot, voiture en Amérique latine) montrent que le r compte. Les erreurs de prononciation font souvent sourire, rarement fâcher, mais mieux vaut les corriger tôt.",
        },
        {
          type: "fiche",
          title: "Principes et sons",
          points: [
            "Langue cousine du français, <b>se lit comme elle s’écrit</b>, sujet souvent <b>omis</b>.",
            "Voyelles nettes, <b>h muet</b>, <b>j</b> raclé, <b>r</b> battu / <b>rr</b> roulé.",
            "<b>ñ</b> = gn, <b>ll</b> ≈ y, <b>z / ce / ci</b> zézayés en Espagne (« s » en Amérique latine).",
            "Accent tonique : avant-dernière syllabe si le mot finit par voyelle, n, s ; sinon la dernière ; sinon accent écrit.",
          ],
          retenir: "En espagnol, tout se prononce : ce que tu lis, tu le dis.",
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
              body: "<p>Les formules de tous les jours :</p>",
              say: [
                { t: "¡Hola! ¿Qué tal?", fr: "Salut ! Ça va ?" },
                { t: "Buenos días", fr: "Bonjour (le matin)" },
                { t: "Buenas tardes", fr: "Bonjour, bon après-midi" },
                { t: "Me llamo Noa.", fr: "Je m’appelle Noa." },
                { t: "Encantado.", fr: "Enchanté (encantada au féminin)." },
                { t: "Hasta luego.", fr: "À plus tard." },
              ],
            },
            {
              title: "La politesse",
              body: "<p>À l’écrit, les questions et exclamations s’ouvrent avec un signe à l’envers : <b>¿…?</b> et <b>¡…!</b></p>",
              say: [
                { t: "Por favor", fr: "S’il te plaît / s’il vous plaît" },
                { t: "Muchas gracias.", fr: "Merci beaucoup." },
                { t: "De nada.", fr: "De rien." },
                { t: "Perdón / Disculpe", fr: "Pardon / Excusez-moi" },
                { t: "¿Puede repetir, por favor?", fr: "Pouvez-vous répéter ?" },
                { t: "No entiendo.", fr: "Je ne comprends pas." },
              ],
            },
            {
              title: "Les mots pour questionner",
              body: "<p>Les mots interrogatifs portent toujours un accent écrit :</p>",
              say: [
                { t: "¿Qué?", fr: "Quoi ? Que ?" },
                { t: "¿Dónde?", fr: "Où ?" },
                { t: "¿Cuándo?", fr: "Quand ?" },
                { t: "¿Quién?", fr: "Qui ?" },
                { t: "¿Por qué?", fr: "Pourquoi ? (porque = parce que)" },
                { t: "¿Cuánto cuesta?", fr: "Combien ça coûte ?" },
              ],
            },
            {
              title: "Les nombres qui piègent",
              body: "<p>Quelques nombres à connaître par cœur, dont un irrégulier traître : 500 se dit <b>quinientos</b>.</p>",
              say: [
                { t: "quince", fr: "15" },
                { t: "cincuenta", fr: "50" },
                { t: "cien", fr: "100" },
                { t: "quinientos", fr: "500" },
                { t: "mil", fr: "1 000" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "¿Qué tal?", back: "Ça va ?" },
            { front: "Encantado / Encantada", back: "Enchanté / Enchantée" },
            { front: "De nada.", back: "De rien." },
            { front: "¿Cuánto cuesta?", back: "Combien ça coûte ?" },
            { front: "No entiendo.", back: "Je ne comprends pas." },
            { front: "quinientos", back: "500 (irrégulier)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel nombre as-tu entendu ?", say: "cincuenta", options: ["15", "50", "500"], answer: 1, explain: "Cincuenta = 50 ; quince = 15 ; quinientos = 500." },
            { q: "Quel nombre as-tu entendu ?", say: "quinientos", options: ["50", "150", "500"], answer: 2, explain: "Quinientos, irrégulier : on ne dit pas « cincocientos »." },
            { q: "On te dit « ¡Muchas gracias! ». Tu réponds…", options: ["Por favor", "De nada", "Perdón"], answer: 1, explain: "De nada = de rien." },
            { q: "« ¿Por qué? » signifie…", options: ["Parce que", "Pourquoi ?", "Pour qui ?"], answer: 1, explain: "Porque (en un mot, sans accent) = parce que." },
            { q: "Comment écrit-on une question en espagnol ?", options: ["Comme en français", "Avec ¿ au début et ? à la fin", "Sans point d’interrogation"], answer: 1, explain: "¿Dónde está?" },
          ],
        },
        {
          type: "type",
          title: "Traduis en espagnol",
          instruction: "Écris la phrase en espagnol. Majuscules, accents et signes ¿ ¡ ne sont pas obligatoires.",
          items: [
            { prompt: "Merci beaucoup.", answer: ["muchas gracias", "muchisimas gracias"] },
            { prompt: "Je m’appelle Sarah.", answer: ["me llamo sarah", "soy sarah", "mi nombre es sarah"] },
            { prompt: "Combien ça coûte ?", answer: ["cuanto cuesta", "cuanto es", "cuanto vale"] },
            { prompt: "Je ne comprends pas.", answer: ["no entiendo", "no comprendo", "no lo entiendo"] },
            { prompt: "Où est la gare ?", answer: ["donde esta la estacion", "donde esta la estacion de tren"], explain: "Estación = gare." },
          ],
        },
        {
          type: "case",
          title: "Le prix au marché",
          story:
            "Au marché de Valence, Leïla demande le prix d’un jambon entier. Le vendeur répond « quinientos euros ». Elle comprend « cinquante » et se réjouit de l’affaire.",
          question: "Quel est le bon réflexe ?",
          options: [
            "Acheter tout de suite",
            "En cas de doute, faire répéter ou demander le prix écrit (« ¿Me lo puede escribir? ») ; et retenir que quinientos = 500, cincuenta = 50",
            "Partir sans rien dire",
          ],
          answer: 1,
          explain:
            "Quinientos et cincuenta se ressemblent pour une oreille francophone. Faire écrire un montant est un réflexe simple et poli, surtout dans une négociation.",
        },
        {
          type: "fiche",
          title: "Mots de survie",
          points: [
            "Saluer : <b>hola</b>, <b>buenos días</b>, <b>buenas tardes</b>, <b>me llamo…</b>, <b>encantado/a</b>.",
            "Politesse : <b>por favor</b>, <b>gracias</b>, <b>de nada</b>, <b>perdón / disculpe</b>.",
            "Questions : <b>¿qué?, ¿dónde?, ¿cuándo?, ¿quién?, ¿por qué?, ¿cuánto cuesta?</b> ; signes <b>¿ ¡</b>.",
            "Nombres : <b>quince</b> (15), <b>cincuenta</b> (50), <b>cien</b> (100), <b>quinientos</b> (500), <b>mil</b>.",
          ],
          retenir: "Por favor, gracias et ¿dónde está…? suffisent pour te débrouiller partout.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les raccourcis depuis le français",
      minutes: 16,
      objectives: ["Reconnaître les mots communs au français et à l’espagnol", "Éviter les faux amis les plus courants"],
      steps: [
        {
          type: "lesson",
          title: "Tu connais déjà des milliers de mots",
          slides: [
            {
              title: "Deux langues sœurs",
              body:
                "<p>Le français et l’espagnol descendent tous deux du <b>latin</b>. Une très grande partie du vocabulaire courant se ressemble, et les terminaisons se transforment de façon régulière.</p><p>Pour un francophone, l’espagnol écrit est souvent compréhensible dès les premières semaines : l’effort porte surtout sur l’<b>oral</b> et la <b>conjugaison</b>.</p>",
            },
            {
              title: "Les terminaisons qui se transforment",
              body:
                "<table class='t'><tr><th>Français</th><th>Espagnol</th><th>Exemples</th></tr><tr><td>-tion</td><td>-ción</td><td>nation → nación, information → información</td></tr><tr><td>-té</td><td>-dad</td><td>université → universidad, ville (cité) → ciudad</td></tr><tr><td>-eux</td><td>-oso</td><td>dangereux → peligroso, délicieux → delicioso</td></tr><tr><td>-ment (adverbe)</td><td>-mente</td><td>rapidement → rápidamente</td></tr><tr><td>-iste</td><td>-ista</td><td>dentiste → dentista</td></tr><tr><td>verbes en -er</td><td>souvent -ar</td><td>parler → hablar, acheter → comprar, utiliser → usar</td></tr></table>",
            },
            {
              title: "Même mot, autre son",
              body: "<p>Écoute ces mots transparents à l’écrit :</p>",
              say: [
                { t: "información", fr: "information" },
                { t: "universidad", fr: "université" },
                { t: "delicioso", fr: "délicieux" },
                { t: "rápidamente", fr: "rapidement" },
                { t: "restaurante", fr: "restaurant" },
              ],
            },
            {
              title: "Les faux amis",
              body:
                "<table class='t'><tr><th>Espagnol</th><th>Veut dire</th><th>Et pas…</th></tr><tr><td>embarazada</td><td>enceinte</td><td>embarrassée (= avergonzada)</td></tr><tr><td>constipado</td><td>enrhumé</td><td>constipé (= estreñido)</td></tr><tr><td>éxito</td><td>succès</td><td>sortie (= salida)</td></tr><tr><td>salir</td><td>sortir</td><td>salir (= ensuciar)</td></tr><tr><td>largo</td><td>long</td><td>large (= ancho)</td></tr><tr><td>contestar</td><td>répondre</td><td>contester</td></tr><tr><td>carpeta</td><td>dossier, chemise</td><td>carpette</td></tr><tr><td>molestar</td><td>déranger</td><td>molester</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Vrai ami ou faux ami ?",
          instruction: "Le mot espagnol a-t-il le même sens que le mot français qui lui ressemble ?",
          categories: ["Même sens", "Faux ami"],
          items: [
            { text: "información", cat: 0, why: "Information." },
            { text: "embarazada", cat: 1, why: "Enceinte, pas embarrassée." },
            { text: "universidad", cat: 0, why: "Université." },
            { text: "éxito", cat: 1, why: "Succès, pas sortie." },
            { text: "peligroso", cat: 0, why: "Dangereux (le sens est le même, la forme change)." },
            { text: "largo", cat: 1, why: "Long, pas large." },
            { text: "contestar", cat: 1, why: "Répondre, pas contester." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "embarazada", back: "enceinte (embarrassée = avergonzada)" },
            { front: "constipado", back: "enrhumé" },
            { front: "éxito", back: "succès (sortie = salida)" },
            { front: "largo", back: "long (large = ancho)" },
            { front: "contestar", back: "répondre" },
            { front: "molestar", back: "déranger" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "« La salida » désigne…", options: ["le succès", "la sortie", "la salade"], answer: 1, explain: "Éxito = succès ; salida = sortie." },
            { q: "« Estoy constipado » signifie…", options: ["Je suis enrhumé", "Je suis constipé", "Je suis fatigué"], answer: 0, explain: "Un faux ami classique." },
            { q: "Comment dit-on « dangereux » ?", options: ["dangeroso", "peligroso", "dangerado"], answer: 1, explain: "Le mot est différent, mais la terminaison -oso correspond à -eux." },
            { q: "« Una calle muy larga » est…", options: ["une rue très large", "une rue très longue", "une rue très belle"], answer: 1, explain: "Largo = long." },
            { q: "Quel mot as-tu entendu ?", say: "universidad", options: ["universidad", "universal", "unidad"], answer: 0, explain: "-dad correspond à -té." },
          ],
        },
        {
          type: "type",
          title: "Transforme le mot français",
          instruction: "Écris le mot espagnol grâce aux terminaisons (accents facultatifs).",
          items: [
            { prompt: "nation", answer: ["nacion", "nación"], hint: "-tion → -ción" },
            { prompt: "ville (cité)", answer: ["ciudad"], hint: "-té → -dad" },
            { prompt: "délicieux", answer: ["delicioso"], hint: "-eux → -oso" },
            { prompt: "rapidement", answer: ["rapidamente", "rápidamente"], hint: "-ment → -mente" },
            { prompt: "dentiste", answer: ["dentista"], hint: "-iste → -ista" },
          ],
        },
        {
          type: "case",
          title: "La gêne à la réunion",
          story:
            "Lors d’un rendez-vous avec la gérante d’un salon de coiffure à Madrid, Sofia veut dire qu’elle est un peu gênée d’arriver en retard et dit : « Estoy embarazada ». La gérante la félicite chaleureusement.",
          question: "Qu’aurait dû dire Sofia ?",
          options: [
            "Estoy embarazada, perdón.",
            "Perdón por el retraso, me da un poco de vergüenza. / Estoy un poco avergonzada.",
            "Estoy constipada.",
          ],
          answer: 1,
          explain:
            "Embarazada = enceinte. Pour la gêne : me da vergüenza, estoy avergonzada. Les faux amis font partie des malentendus les plus mémorables… et les plus évitables.",
        },
        {
          type: "fiche",
          title: "Raccourcis depuis le français",
          points: [
            "Langues sœurs issues du <b>latin</b> : l’écrit est vite compréhensible.",
            "Terminaisons : <b>-tion → -ción</b>, <b>-té → -dad</b>, <b>-eux → -oso</b>, <b>-ment → -mente</b>, <b>-iste → -ista</b>.",
            "Beaucoup de verbes français en -er deviennent des verbes en <b>-ar</b>.",
            "Faux amis : <b>embarazada</b>, <b>constipado</b>, <b>éxito</b>, <b>largo</b>, <b>contestar</b>, <b>molestar</b>.",
          ],
          retenir: "Le français t’ouvre l’espagnol écrit : garde l’oreille en éveil et l’œil sur les faux amis.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "La grammaire essentielle",
      minutes: 17,
      objectives: ["Utiliser articles, genre, pluriel et adjectifs", "Choisir entre tú et usted, construire négations et questions"],
      steps: [
        {
          type: "lesson",
          title: "Les briques de la phrase",
          slides: [
            {
              title: "Articles et genre",
              body:
                "<table class='t'><tr><th></th><th>Masculin</th><th>Féminin</th></tr><tr><td>Le / la</td><td>el libro</td><td>la casa</td></tr><tr><td>Les</td><td>los libros</td><td>las casas</td></tr><tr><td>Un / une</td><td>un libro</td><td>una casa</td></tr></table><p>Attention : le genre ne correspond pas toujours au français : <i>el coche</i> (la voiture), <i>la leche</i> (le lait), <i>el problema</i> (le problème, masculin malgré le -a).</p>",
            },
            {
              title: "Pluriel et adjectifs",
              body:
                "<ul><li>Pluriel : <b>+s</b> après une voyelle (<i>casa → casas</i>), <b>+es</b> après une consonne (<i>ciudad → ciudades</i>).</li><li>L’adjectif se place en général <b>après le nom</b> et s’accorde : <i>una casa blanca, unos coches rojos</i>.</li></ul>",
              say: [
                { t: "una casa blanca", fr: "une maison blanche" },
                { t: "las ciudades grandes", fr: "les grandes villes" },
              ],
            },
            {
              title: "Les pronoms et le vouvoiement",
              body:
                "<table class='t'><tr><th>Pronom</th><th>Sens</th></tr><tr><td>yo</td><td>je</td></tr><tr><td>tú</td><td>tu</td></tr><tr><td>él / ella / <b>usted</b></td><td>il / elle / vous (politesse, un seul)</td></tr><tr><td>nosotros / nosotras</td><td>nous</td></tr><tr><td>vosotros / vosotras</td><td>vous (plusieurs, familier, en Espagne)</td></tr><tr><td>ellos / ellas / <b>ustedes</b></td><td>ils / elles / vous (plusieurs, politesse)</td></tr></table><p><b>Usted</b> se conjugue comme « il » : <i>¿Usted habla francés?</i> En Espagne, on tutoie vite ; avec un client ou un inconnu plus âgé, on commence par <i>usted</i>.</p>",
            },
            {
              title: "Négation et questions",
              body:
                "<ul><li>Négation : <b>no</b> devant le verbe. <i>No hablo alemán.</i> (Pas de « pas » !)</li><li>Question : souvent la même phrase avec une intonation montante, et les signes ¿…? à l’écrit. <i>¿Hablas inglés?</i></li><li>Avec un mot interrogatif, il se place en tête : <i>¿Dónde vives?</i></li></ul>",
              say: [
                { t: "No hablo alemán.", fr: "Je ne parle pas allemand." },
                { t: "¿Hablas inglés?", fr: "Tu parles anglais ?" },
                { t: "¿Dónde vives?", fr: "Où habites-tu ?" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "el coche", back: "la voiture (masculin en espagnol)" },
            { front: "el problema", back: "le problème (masculin malgré le -a)" },
            { front: "las ciudades", back: "les villes (pluriel en -es après consonne)" },
            { front: "usted", back: "vous de politesse (se conjugue comme « il »)" },
            { front: "vosotros", back: "vous (plusieurs, familier, en Espagne)" },
            { front: "No entiendo.", back: "Je ne comprends pas (no devant le verbe)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Complète : ___ problema es grave.", options: ["La", "El", "Lo"], answer: 1, explain: "Problema est masculin." },
            { q: "« Une voiture rouge » se dit…", options: ["un rojo coche", "un coche rojo", "una coche roja"], answer: 1, explain: "Coche est masculin, l’adjectif suit le nom." },
            { q: "Tu t’adresses poliment à une cliente. Tu dis…", options: ["¿Tú quieres un café?", "¿Usted quiere un café?", "¿Vosotros queréis un café?"], answer: 1, explain: "Usted + verbe à la 3e personne." },
            { q: "Comment dit-on « Je ne parle pas allemand » ?", options: ["Hablo no alemán.", "No hablo alemán.", "No hablo pas alemán."], answer: 1, explain: "No devant le verbe, c’est tout." },
            { q: "Quelle phrase as-tu entendue ?", say: "¿Dónde vives?", options: ["Où habites-tu ?", "Quand viens-tu ?", "Qui es-tu ?"], answer: 0, explain: "Dónde = où, vivir = habiter, vivre." },
          ],
        },
        {
          type: "type",
          title: "Construis la phrase",
          instruction: "Écris en espagnol (accents et signes ¿ facultatifs).",
          items: [
            { prompt: "les maisons blanches", answer: ["las casas blancas"] },
            { prompt: "Je ne comprends pas.", answer: ["no entiendo", "no comprendo"] },
            { prompt: "Tu parles anglais ?", answer: ["hablas ingles", "tu hablas ingles"] },
            { prompt: "Vous parlez français ? (usted)", answer: ["usted habla frances", "habla usted frances", "habla frances"] },
            { prompt: "une ville", answer: ["una ciudad"] },
          ],
        },
        {
          type: "case",
          title: "Le premier rendez-vous client",
          story:
            "Noa rencontre pour la première fois le propriétaire d’un salon de coiffure à Séville, un homme d’une soixantaine d’années. Il hésite entre « ¿Tú tienes clientes calvos? » et « ¿Usted tiene clientes calvos? ».",
          question: "Quelle forme choisir ?",
          options: [
            "Tú, parce qu’on tutoie toujours en Espagne",
            "Usted pour commencer, par respect pour un interlocuteur plus âgé rencontré dans un cadre professionnel, puis passer au tú s’il le propose",
            "Vosotros, c’est plus poli",
          ],
          answer: 1,
          explain:
            "En Espagne, le tutoiement arrive vite, mais commencer par usted avec un client plus âgé est un signe de respect apprécié. S’il te dit « tutéame », tu passes au tú.",
        },
        {
          type: "fiche",
          title: "Grammaire essentielle",
          points: [
            "<b>el / la / los / las</b>, <b>un / una</b> ; genre parfois différent du français (el coche, la leche, el problema).",
            "Pluriel <b>-s / -es</b> ; adjectif <b>après</b> le nom et accordé.",
            "Pronoms : <b>yo, tú, él, ella, usted, nosotros, vosotros, ellos, ustedes</b> ; <b>usted</b> se conjugue comme « il ».",
            "Négation : <b>no</b> + verbe ; question : intonation + <b>¿…?</b>",
          ],
          retenir: "En espagnol, « ne… pas » se dit en un mot : no.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Le présent, ser et estar",
      minutes: 18,
      objectives: ["Conjuguer les verbes réguliers au présent", "Distinguer ser et estar, utiliser tener"],
      steps: [
        {
          type: "lesson",
          title: "Les verbes du quotidien",
          slides: [
            {
              title: "Les trois groupes réguliers",
              body:
                "<table class='t'><tr><th></th><th>hablar (parler)</th><th>comer (manger)</th><th>vivir (vivre)</th></tr><tr><td>yo</td><td>hablo</td><td>como</td><td>vivo</td></tr><tr><td>tú</td><td>hablas</td><td>comes</td><td>vives</td></tr><tr><td>él / ella / usted</td><td>habla</td><td>come</td><td>vive</td></tr><tr><td>nosotros</td><td>hablamos</td><td>comemos</td><td>vivimos</td></tr><tr><td>vosotros</td><td>habláis</td><td>coméis</td><td>vivís</td></tr><tr><td>ellos / ustedes</td><td>hablan</td><td>comen</td><td>viven</td></tr></table>",
            },
            {
              title: "Ser et estar : deux façons d’« être »",
              body:
                "<ul><li><b>Ser</b> : ce qui définit, l’identité, l’origine, le métier, les caractéristiques durables. <i>Soy francés. Es empresario. La tienda es grande.</i></li><li><b>Estar</b> : la <b>situation</b> et l’<b>état</b> du moment, et le <b>lieu</b>. <i>Estoy cansado. Está en Madrid. La tienda está cerrada.</i></li></ul><table class='t'><tr><th></th><th>ser</th><th>estar</th></tr><tr><td>yo</td><td>soy</td><td>estoy</td></tr><tr><td>tú</td><td>eres</td><td>estás</td></tr><tr><td>él / usted</td><td>es</td><td>está</td></tr><tr><td>nosotros</td><td>somos</td><td>estamos</td></tr><tr><td>ellos / ustedes</td><td>son</td><td>están</td></tr></table>",
              say: [
                { t: "Soy francés.", fr: "Je suis français (identité : ser)." },
                { t: "Estoy cansado.", fr: "Je suis fatigué (état : estar)." },
                { t: "Está en Madrid.", fr: "Il est à Madrid (lieu : estar)." },
              ],
            },
            {
              title: "Tener : avoir",
              body:
                "<ul><li><i>tengo, tienes, tiene, tenemos, tenéis, tienen</i>.</li><li>Comme en anglais, on dit <b>avoir</b> pour l’âge, mais avec tener : <i>Tengo 25 años.</i></li><li>Tener sert aussi pour la faim, la soif, le froid : <i>Tengo hambre, tengo sed, tengo frío.</i></li><li><b>Tener que</b> + infinitif = devoir : <i>Tengo que trabajar.</i></li></ul>",
              say: [
                { t: "Tengo 25 años.", fr: "J’ai 25 ans." },
                { t: "Tengo hambre.", fr: "J’ai faim." },
                { t: "Tengo que trabajar.", fr: "Je dois travailler." },
              ],
            },
            {
              title: "Quelques irréguliers indispensables",
              body:
                "<ul><li><b>ir</b> (aller) : voy, vas, va, vamos, vais, van.</li><li><b>hacer</b> (faire) : hago, haces, hace…</li><li><b>querer</b> (vouloir) : quiero, quieres, quiere… <i>Quiero un café.</i></li><li><b>poder</b> (pouvoir) : puedo, puedes, puede… <i>¿Puedo pagar con tarjeta?</i></li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Ser ou estar ?",
          instruction: "Quel verbe utiliser pour traduire « être » ?",
          categories: ["ser", "estar"],
          items: [
            { text: "Je suis français.", cat: 0, why: "Nationalité, identité : soy francés." },
            { text: "Le magasin est fermé.", cat: 1, why: "État du moment : está cerrada." },
            { text: "Elle est avocate.", cat: 0, why: "Métier : es abogada." },
            { text: "Nous sommes à Valence.", cat: 1, why: "Lieu : estamos en Valencia." },
            { text: "Je suis fatigué.", cat: 1, why: "État : estoy cansado." },
            { text: "La boutique est grande.", cat: 0, why: "Caractéristique : es grande." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "hablo, hablas, habla", back: "je parle, tu parles, il parle (hablar)" },
            { front: "soy / estoy", back: "je suis (identité) / je suis (état, lieu)" },
            { front: "Tengo 30 años.", back: "J’ai 30 ans." },
            { front: "Tengo que…", back: "Je dois…" },
            { front: "voy", back: "je vais (ir)" },
            { front: "¿Puedo pagar con tarjeta?", back: "Je peux payer par carte ?" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Complète : Nosotros ___ (hablar) español.", options: ["hablan", "hablamos", "hablo"], answer: 1, explain: "Nosotros : -amos." },
            { q: "« La tienda ___ cerrada los domingos. »", options: ["es", "está"], answer: 1, explain: "Fermée : un état, avec estar." },
            { q: "Comment dit-on « J’ai faim » ?", options: ["Soy hambre", "Estoy hambre", "Tengo hambre"], answer: 2, explain: "Avec tener." },
            { q: "Quelle phrase as-tu entendue ?", say: "Estoy en Madrid.", options: ["Je suis à Madrid.", "Je suis madrilène.", "J’étais à Madrid."], answer: 0, explain: "Le lieu se dit avec estar." },
          ],
        },
        {
          type: "type",
          title: "Conjugue",
          instruction: "Écris la forme correcte (accents facultatifs).",
          items: [
            { prompt: "Ellos ___ (vivir) en Sevilla.", answer: ["viven"] },
            { prompt: "Yo ___ (ser) francés.", answer: ["soy"] },
            { prompt: "Usted ___ (estar) cansado.", answer: ["esta", "está"] },
            { prompt: "Traduis : J’ai 25 ans.", answer: ["tengo 25 anos", "tengo 25 años", "tengo veinticinco anos", "tengo veinticinco años"] },
            { prompt: "Traduis : Je dois travailler.", answer: ["tengo que trabajar"] },
          ],
        },
        {
          type: "case",
          title: "La présentation au salon",
          story:
            "Noa se présente au gérant d’un salon : il veut dire qu’il est français, qu’il est à Valence pour deux mois et qu’il distribue des produits capillaires.",
          question: "Quelle présentation est correcte ?",
          options: [
            "Estoy francés, soy en Valencia dos meses y distribuyo productos para el cabello.",
            "Soy francés, estoy en Valencia dos meses y distribuyo productos para el cabello.",
            "Tengo francés, voy Valencia y distribuyo.",
          ],
          answer: 1,
          explain:
            "Nationalité : ser (soy francés). Lieu : estar (estoy en Valencia). C’est la distinction la plus importante de l’espagnol pour un francophone.",
        },
        {
          type: "fiche",
          title: "Présent, ser, estar",
          points: [
            "Réguliers : <b>-ar</b> (hablo, hablas, habla…), <b>-er</b> (como…), <b>-ir</b> (vivo…).",
            "<b>Ser</b> : identité, origine, métier, caractéristique ; <b>estar</b> : état, lieu.",
            "<b>Tener</b> : âge, faim, soif, froid ; <b>tener que</b> = devoir.",
            "Irréguliers clés : <b>ir</b> (voy), <b>hacer</b> (hago), <b>querer</b> (quiero), <b>poder</b> (puedo).",
          ],
          retenir: "Ser dit qui tu es, estar dit où et comment tu es.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Passé, futur et projets",
      minutes: 17,
      objectives: ["Raconter une action passée simple", "Parler de ses projets et de ses obligations"],
      steps: [
        {
          type: "lesson",
          title: "Sortir du présent",
          slides: [
            {
              title: "Le futur proche : ir a + infinitif",
              body:
                "<p>Le plus simple pour parler du futur : <b>ir a + infinitif</b>, comme « aller + infinitif » en français.</p><ul><li><i>Voy a llamar al cliente.</i> (Je vais appeler le client.)</li><li><i>Vamos a abrir una tienda.</i> (Nous allons ouvrir une boutique.)</li></ul>",
              say: [
                { t: "Voy a llamar al cliente.", fr: "Je vais appeler le client." },
                { t: "Vamos a abrir una tienda.", fr: "Nous allons ouvrir une boutique." },
              ],
            },
            {
              title: "Le passé : le prétérit",
              body:
                "<p>Pour une action <b>terminée</b> à un moment précis (hier, l’an dernier), on utilise le <b>pretérito indefinido</b>. Verbes en -ar :</p><table class='t'><tr><th></th><th>hablar</th></tr><tr><td>yo</td><td>hablé</td></tr><tr><td>tú</td><td>hablaste</td></tr><tr><td>él / usted</td><td>habló</td></tr><tr><td>nosotros</td><td>hablamos</td></tr><tr><td>vosotros</td><td>hablasteis</td></tr><tr><td>ellos / ustedes</td><td>hablaron</td></tr></table><p>Attention à l’accent : <i>hablo</i> (je parle) ≠ <i>habló</i> (il a parlé).</p>",
              say: [
                { t: "Ayer hablé con el proveedor.", fr: "Hier, j’ai parlé avec le fournisseur." },
                { t: "¿Compraste las entradas?", fr: "Tu as acheté les billets ?" },
              ],
            },
            {
              title: "Trois irréguliers à connaître",
              body:
                "<ul><li><b>ir</b> et <b>ser</b> ont le même prétérit : <i>fui, fuiste, fue…</i> (<i>Fui a Madrid</i> : je suis allé à Madrid.)</li><li><b>hacer</b> : <i>hice, hiciste, hizo…</i> (<i>¿Qué hiciste ayer?</i>)</li><li><b>tener</b> : <i>tuve, tuviste, tuvo…</i> (<i>Tuve una reunión.</i>)</li></ul><p>Tu entendras aussi un passé composé (<i>he hablado</i>, j’ai parlé), surtout en Espagne pour une action récente : tu le reconnaîtras facilement.</p>",
            },
            {
              title: "Vouloir, pouvoir, devoir",
              body:
                "<ul><li><b>Querer</b> + infinitif : vouloir. <i>Quiero hablar con el encargado.</i></li><li><b>Poder</b> + infinitif : pouvoir. <i>¿Puede enviarme la factura?</i></li><li><b>Tener que</b> + infinitif : devoir (obligation). <i>Tengo que irme.</i></li><li>Pour être plus poli, le conditionnel : <i>Quería…</i> / <i>¿Podría…?</i> (Je voudrais… / Pourriez-vous… ?)</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Voy a…", back: "Je vais… (futur proche)" },
            { front: "hablé / habló", back: "j’ai parlé / il a parlé (prétérit)" },
            { front: "fui", back: "je suis allé / j’ai été (ir et ser)" },
            { front: "hice", back: "j’ai fait (hacer)" },
            { front: "tuve", back: "j’ai eu (tener)" },
            { front: "¿Podría…?", back: "Pourriez-vous… ? (poli)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment dit-on « Je vais appeler » ?", options: ["Voy llamar", "Voy a llamar", "Llamaré a ir"], answer: 1, explain: "Ir a + infinitif." },
            { q: "« Ayer ___ (hablar, yo) con el cliente. »", options: ["hablo", "hablé", "hablaba"], answer: 1, explain: "Action terminée hier : prétérit, hablé." },
            { q: "« Fui a Barcelona » signifie…", options: ["Je suis allé à Barcelone", "Je vais à Barcelone", "J’ai été Barcelone"], answer: 0, explain: "Fui, prétérit de ir." },
            { q: "Quelle phrase as-tu entendue ?", say: "¿Podría enviarme la factura?", options: ["Pourriez-vous m’envoyer la facture ?", "Puis-je payer la facture ?", "Vous avez envoyé la facture ?"], answer: 0, explain: "Podría = pourriez-vous ; enviar = envoyer ; factura = facture." },
            { q: "Pour exprimer une obligation, on dit…", options: ["Tengo que + infinitif", "Soy que + infinitif", "Estoy a + infinitif"], answer: 0, explain: "Tengo que trabajar." },
          ],
        },
        {
          type: "type",
          title: "Passé et futur",
          instruction: "Écris en espagnol (accents facultatifs).",
          items: [
            { prompt: "Nous allons ouvrir une boutique.", answer: ["vamos a abrir una tienda"] },
            { prompt: "Hier, j’ai parlé avec le fournisseur.", answer: ["ayer hable con el proveedor", "ayer hablé con el proveedor"] },
            { prompt: "Qu’as-tu fait hier ?", answer: ["que hiciste ayer"] },
            { prompt: "Je dois partir. (tener que + irme)", answer: ["tengo que irme"] },
          ],
        },
        {
          type: "case",
          title: "Le compte rendu au téléphone",
          story:
            "Le soir, Noa appelle son associé espagnol pour résumer sa journée : il est allé à Alicante, il a eu deux rendez-vous et demain il va rappeler un salon.",
          question: "Quelle phrase est correcte ?",
          options: [
            "Voy a Alicante, tengo dos citas y mañana llamo un salón.",
            "Fui a Alicante, tuve dos citas y mañana voy a llamar a un salón.",
            "Fue a Alicante, tenía dos citas y mañana llamé.",
          ],
          answer: 1,
          explain:
            "Passé terminé : fui, tuve. Projet : voy a llamar. Remarque : on dit « llamar a » devant une personne ou un établissement qu’on appelle.",
        },
        {
          type: "fiche",
          title: "Passé, futur, projets",
          points: [
            "Futur proche : <b>ir a + infinitif</b> (voy a, vamos a).",
            "Prétérit en -ar : <b>-é, -aste, -ó, -amos, -asteis, -aron</b> ; hablo ≠ habló.",
            "Irréguliers : <b>fui</b> (ir/ser), <b>hice</b> (hacer), <b>tuve</b> (tener).",
            "<b>querer</b>, <b>poder</b>, <b>tener que</b> + infinitif ; poli : <b>quería</b>, <b>¿podría…?</b>",
          ],
          retenir: "Voy a… pour demain, fui… pour hier : déjà de quoi raconter ta semaine.",
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
              title: "À l’aéroport et à la gare",
              body: "<p>Les mots des panneaux et des annonces :</p>",
              say: [
                { t: "la tarjeta de embarque", fr: "la carte d’embarquement" },
                { t: "la puerta", fr: "la porte (d’embarquement)" },
                { t: "el equipaje", fr: "les bagages" },
                { t: "Mi vuelo está retrasado.", fr: "Mon vol est retardé." },
                { t: "un billete de ida y vuelta", fr: "un billet aller-retour" },
              ],
            },
            {
              title: "À l’hôtel ou dans un logement",
              body: "<p>De l’arrivée au départ :</p>",
              say: [
                { t: "Tengo una reserva.", fr: "J’ai une réservation." },
                { t: "una habitación doble", fr: "une chambre double" },
                { t: "¿El desayuno está incluido?", fr: "Le petit-déjeuner est-il compris ?" },
                { t: "¿A qué hora hay que dejar la habitación?", fr: "À quelle heure faut-il libérer la chambre ?" },
                { t: "El wifi no funciona.", fr: "Le Wi-Fi ne marche pas." },
              ],
            },
            {
              title: "Au restaurant",
              body: "<p>En Espagne, on déjeune tard (souvent vers 14 h) et on dîne tard (souvent après 21 h). Le <i>menú del día</i> du midi est souvent une bonne affaire.</p>",
              say: [
                { t: "Una mesa para dos, por favor.", fr: "Une table pour deux, s’il vous plaît." },
                { t: "¿Me trae la carta?", fr: "Vous m’apportez la carte ?" },
                { t: "Quería el menú del día.", fr: "Je voudrais le menu du jour." },
                { t: "Soy alérgico a los frutos secos.", fr: "Je suis allergique aux fruits à coque." },
                { t: "La cuenta, por favor.", fr: "L’addition, s’il vous plaît." },
              ],
            },
            {
              title: "Demander son chemin",
              body: "<p>Et quelques repères : <i>cerca</i> (près), <i>lejos</i> (loin), <i>al lado de</i> (à côté de), <i>enfrente de</i> (en face de).</p>",
              say: [
                { t: "¿Cómo llego a la estación?", fr: "Comment je vais à la gare ?" },
                { t: "Siga todo recto.", fr: "Continuez tout droit." },
                { t: "Gire a la izquierda.", fr: "Tournez à gauche." },
                { t: "Gire a la derecha.", fr: "Tournez à droite." },
                { t: "¿Está lejos?", fr: "C’est loin ?" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "la tarjeta de embarque", back: "la carte d’embarquement" },
            { front: "retrasado", back: "retardé (cancelado = annulé)" },
            { front: "¿El desayuno está incluido?", back: "Le petit-déjeuner est-il compris ?" },
            { front: "el menú del día", back: "le menu du jour (formule du midi)" },
            { front: "La cuenta, por favor.", back: "L’addition, s’il vous plaît." },
            { front: "a la izquierda / a la derecha", back: "à gauche / à droite" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’as-tu entendu ?", say: "Su vuelo está retrasado.", options: ["Votre vol est retardé.", "Votre vol est annulé.", "Votre vol est complet."], answer: 0, explain: "Retrasado = retardé ; cancelado = annulé." },
            { q: "Qu’as-tu entendu ?", say: "Gire a la derecha.", options: ["Tournez à droite.", "Tournez à gauche.", "Continuez tout droit."], answer: 0, explain: "Derecha = droite, izquierda = gauche." },
            { q: "Pour demander l’addition, tu dis…", options: ["La adición, por favor.", "La cuenta, por favor.", "La nota, gracias."], answer: 1, explain: "La cuenta." },
            { q: "À quelle heure dîne-t-on habituellement en Espagne ?", options: ["Vers 18 h", "Souvent après 21 h", "À midi"], answer: 1, explain: "Les horaires sont plus tardifs qu’en France." },
          ],
        },
        {
          type: "type",
          title: "En situation",
          instruction: "Traduis en espagnol (accents et signes ¿ facultatifs).",
          items: [
            { prompt: "J’ai une réservation.", answer: ["tengo una reserva", "tengo una reservacion"] },
            { prompt: "L’addition, s’il vous plaît.", answer: ["la cuenta por favor"] },
            { prompt: "C’est loin ?", answer: ["esta lejos", "está lejos", "es lejos"] },
            { prompt: "Une table pour deux, s’il vous plaît.", answer: ["una mesa para dos por favor", "mesa para dos por favor", "una mesa para dos"] },
          ],
        },
        {
          type: "case",
          title: "Le logement sans Wi-Fi",
          story:
            "Arrivé dans son appartement loué à Valence, Noa constate que le Wi-Fi ne fonctionne pas alors qu’il doit envoyer des devis le soir même. Il écrit au propriétaire.",
          question: "Quel message est le plus efficace et poli ?",
          options: [
            "Wifi malo. Arreglar ya.",
            "Hola, el wifi no funciona y necesito enviar documentos importantes esta noche. ¿Podría ayudarme, por favor? Muchas gracias.",
            "Su apartamento es malo.",
          ],
          answer: 1,
          explain:
            "Salutation + problème + besoin + demande polie avec podría : la structure qui obtient le plus vite une solution, dans toutes les langues.",
        },
        {
          type: "fiche",
          title: "En voyage",
          points: [
            "Transport : <b>tarjeta de embarque</b>, <b>puerta</b>, <b>equipaje</b>, <b>retrasado / cancelado</b>, <b>ida y vuelta</b>.",
            "Logement : <b>tengo una reserva</b>, <b>¿el desayuno está incluido?</b>",
            "Restaurant : <b>quería…</b>, <b>menú del día</b>, <b>soy alérgico a…</b>, <b>la cuenta</b> ; horaires tardifs.",
            "Chemin : <b>todo recto</b>, <b>izquierda / derecha</b>, <b>cerca / lejos</b>.",
          ],
          retenir: "Hola + ton besoin + ¿podría…, por favor? : la formule qui ouvre toutes les portes.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "L’espagnol du travail",
      minutes: 18,
      objectives: ["Écrire un e-mail professionnel simple", "Prospecter, négocier et parler chiffres en espagnol"],
      steps: [
        {
          type: "lesson",
          title: "Travailler en espagnol",
          slides: [
            {
              title: "L’e-mail professionnel",
              body:
                "<ul><li>Ouverture : <i>Estimado señor García:</i> / <i>Estimada señora López:</i> (formel ; en espagnol on met deux-points) ou <i>Hola, Carmen:</i> (courant).</li><li>Objet : <i>Le escribo para…</i> (je vous écris pour…).</li><li>Pièce jointe : <i>Le adjunto el presupuesto.</i></li><li>Clôture : <i>Quedo a la espera de su respuesta.</i> / <i>Un saludo cordial,</i> / <i>Saludos,</i></li></ul>",
              say: [
                { t: "Le escribo para presentarle nuestros productos.", fr: "Je vous écris pour vous présenter nos produits." },
                { t: "Le adjunto el presupuesto.", fr: "Je vous joins le devis." },
                { t: "Quedo a la espera de su respuesta.", fr: "Dans l’attente de votre réponse." },
              ],
            },
            {
              title: "Prospecter un commerce",
              body: "<p>Pour présenter un produit à un professionnel (salon, boutique) :</p>",
              say: [
                { t: "Buenos días, ¿podría hablar con el encargado?", fr: "Bonjour, pourrais-je parler au responsable ?" },
                { t: "Distribuimos un producto para la caída del cabello.", fr: "Nous distribuons un produit contre la chute de cheveux." },
                { t: "¿Le puedo dejar una muestra?", fr: "Puis-je vous laisser un échantillon ?" },
                { t: "¿Tiene cinco minutos?", fr: "Avez-vous cinq minutes ?" },
                { t: "Le dejo mi tarjeta.", fr: "Je vous laisse ma carte." },
              ],
            },
            {
              title: "Chiffres, prix et commandes",
              body: "<p>Bonne nouvelle : comme en français, l’espagnol utilise la <b>virgule</b> pour les décimales (4,50 €) et le point (ou un espace) pour les milliers.</p>",
              say: [
                { t: "el presupuesto", fr: "le devis" },
                { t: "la factura", fr: "la facture" },
                { t: "el pedido mínimo", fr: "la commande minimum" },
                { t: "el plazo de entrega", fr: "le délai de livraison" },
                { t: "El precio es de cuatro euros con cincuenta la unidad.", fr: "Le prix est de 4,50 € l’unité." },
              ],
            },
            {
              title: "Négocier poliment",
              body:
                "<ul><li><i>¿Sería posible…?</i> (Serait-il possible… ?)</li><li><i>¿Podría hacernos un mejor precio para 500 unidades?</i></li><li><i>Me parece un poco caro.</i> (Ça me semble un peu cher.)</li><li><i>¿Qué condiciones de pago ofrecen?</i> (Quelles conditions de paiement proposez-vous ?)</li><li><i>¿Me lo puede confirmar por escrito?</i> (Pouvez-vous me le confirmer par écrit ?)</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Trop direct ou professionnel ?",
          instruction: "Classe chaque formulation pour un échange avec un client ou un fournisseur.",
          categories: ["Trop direct", "Professionnel et poli"],
          items: [
            { text: "Mándeme el precio.", cat: 0, why: "Impératif sec." },
            { text: "¿Podría enviarme su lista de precios, por favor?", cat: 1, why: "Demande polie." },
            { text: "Es demasiado caro.", cat: 0, why: "Brutal en ouverture de négociation." },
            { text: "Me parece un poco caro para nosotros.", cat: 1, why: "Formule diplomatique." },
            { text: "¿Sería posible entregar el viernes?", cat: 1, why: "Demande adoucie." },
            { text: "Entregue el viernes.", cat: 0, why: "Ordre sans formule." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "el presupuesto", back: "le devis" },
            { front: "la factura", back: "la facture" },
            { front: "Le adjunto…", back: "Je vous joins…" },
            { front: "el encargado", back: "le responsable (d’un commerce)" },
            { front: "una muestra", back: "un échantillon" },
            { front: "Me parece un poco caro.", back: "Ça me semble un peu cher." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment écrit-on « quatre euros cinquante » en Espagne ?", options: ["4.50 €", "4,50 €", "4-50 €"], answer: 1, explain: "Virgule décimale, comme en français." },
            { q: "Qu’as-tu entendu ?", say: "¿Le puedo dejar una muestra?", options: ["Puis-je vous laisser un échantillon ?", "Puis-je vous montrer le magasin ?", "Pouvez-vous me laisser passer ?"], answer: 0, explain: "Muestra = échantillon ; dejar = laisser." },
            { q: "Pour ouvrir un e-mail formel à Mme López, tu écris…", options: ["Hola López,", "Estimada señora López:", "Querida López"], answer: 1, explain: "Estimado/a + deux-points." },
            { q: "« El plazo de entrega » désigne…", options: ["le lieu de livraison", "le délai de livraison", "le prix de livraison"], answer: 1, explain: "Plazo = délai." },
          ],
        },
        {
          type: "type",
          title: "Rédige",
          instruction: "Traduis en espagnol professionnel (accents et signes ¿ facultatifs).",
          items: [
            { prompt: "Je vous joins le devis.", answer: ["le adjunto el presupuesto", "adjunto el presupuesto", "le envio el presupuesto adjunto"] },
            { prompt: "Pourrais-je parler au responsable ?", answer: ["podria hablar con el encargado", "puedo hablar con el encargado", "podria hablar con el responsable"] },
            { prompt: "Dans l’attente de votre réponse.", answer: ["quedo a la espera de su respuesta", "a la espera de su respuesta"] },
            { prompt: "Quelle est la commande minimum ?", answer: ["cual es el pedido minimo", "cuál es el pedido mínimo"] },
          ],
        },
        {
          type: "case",
          title: "La visite au salon de coiffure",
          story:
            "À Valence, Noa entre dans un salon pour présenter Namilka, un produit de camouflage capillaire. La coiffeuse est occupée avec une cliente.",
          question: "Quelle approche est la plus adaptée ?",
          options: [
            "Interrompre tout de suite : « Producto para calvos, muy bueno, compre. »",
            "Attendre un moment, puis : « Buenos días, perdone la molestia. ¿Podría hablar con el encargado cuando tenga cinco minutos? Distribuimos un producto para disimular la caída del cabello. Le puedo dejar una muestra y mi tarjeta. »",
            "Laisser un prospectus sans rien dire",
          ],
          answer: 1,
          explain:
            "Politesse (perdone la molestia), respect du travail en cours, demande du responsable, présentation en une phrase, échantillon et carte : une prospection courte et professionnelle laisse une bonne impression, même si la réponse vient plus tard.",
        },
        {
          type: "fiche",
          title: "L’espagnol du travail",
          points: [
            "E-mail : <b>Estimado/a…:</b>, <b>Le escribo para…</b>, <b>Le adjunto…</b>, <b>Quedo a la espera…</b>, <b>Un saludo</b>.",
            "Prospection : <b>¿Podría hablar con el encargado?</b>, <b>una muestra</b>, <b>le dejo mi tarjeta</b>.",
            "Chiffres : virgule décimale (<b>4,50 €</b>) ; <b>presupuesto</b>, <b>factura</b>, <b>pedido mínimo</b>, <b>plazo de entrega</b>.",
            "Négocier : <b>¿Sería posible…?</b>, <b>me parece un poco caro</b>, <b>¿me lo confirma por escrito?</b>",
          ],
          retenir: "En espagnol professionnel, la politesse ouvre la porte, la précision conclut l’affaire.",
        },
      ],
    },
  ],
});
