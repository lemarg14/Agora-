/* ============================================================
   COURS : Portugais — les fondations
   Institut des Langues · 8 séances de 15 à 20 minutes
   Les 6 axes : principes et prononciation, mots de survie,
   raccourcis depuis le français, grammaire, conjugaison,
   vocabulaire par situation (voyage, travail).
   Portugais du Portugal (pt-PT) ; différences avec le Brésil
   signalées (vocabulaire, você, prononciation).
   ============================================================ */
AGORA.registerCourse({
  id: "portugais-fondations",
  faculty: "langues",
  lang: "pt-PT",
  title: "Portugais — les fondations",
  subtitle: "Prononcer, comprendre et construire tes premières phrases utiles",
  color: "#6b4f9a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour démarrer le portugais, langue du Portugal, du Brésil et de plusieurs pays d’Afrique : les sons nasaux et chuintants, les mots de survie, les milliers de mots que tu reconnais grâce au français, la grammaire essentielle, les temps utiles, puis le voyage et le travail. Le cours suit le portugais du Portugal et signale les différences brésiliennes.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment marche le portugais (et ses sons)",
      minutes: 17,
      objectives: ["Comprendre les grands principes du portugais", "Prononcer les sons nasaux et les consonnes typiques"],
      steps: [
        {
          type: "lesson",
          title: "Les principes",
          slides: [
            {
              title: "Une langue latine, deux grandes variantes",
              body:
                "<ul><li>Le portugais vient du latin, comme le français et l’espagnol. Il est parlé par plus de 250 millions de personnes : Portugal, Brésil, Angola, Mozambique, Cap-Vert…</li><li>Deux variantes principales : le <b>portugais européen</b> (ce cours) et le <b>portugais brésilien</b>. Elles se comprennent, mais l’accent et une partie du vocabulaire diffèrent.</li><li>Comme en espagnol, le <b>sujet est souvent omis</b> et les noms ont un <b>genre</b> (souvent -o masculin, -a féminin).</li></ul>",
            },
            {
              title: "Les voyelles nasales",
              body:
                "<p>Le portugais a des sons nasaux, un peu comme le français « an » ou « on » :</p><ul><li><b>ão</b> : une nasale typique, entre « an » et « on » suivie de « ou » : <i>pão</i> (pain), <i>não</i> (non).</li><li><b>ã</b>, <b>õe</b> : <i>maçã</i> (pomme), <i>limões</i> (citrons).</li><li><b>-em</b> en fin de mot : <i>bem</i> (bien), <i>também</i> (aussi).</li></ul>",
              say: [
                { t: "pão", fr: "pain" },
                { t: "não", fr: "non" },
                { t: "bem", fr: "bien" },
                { t: "também", fr: "aussi" },
              ],
            },
            {
              title: "Lh, nh, ç et le s chuintant",
              body:
                "<ul><li><b>lh</b> se prononce comme « ill » dans « fille » : <i>trabalho</i> (travail).</li><li><b>nh</b> se prononce « gn » : <i>vinho</i> (vin).</li><li><b>ç</b> = s : <i>obrigação</i>.</li><li>Au Portugal, le <b>s en fin de syllabe</b> se prononce « ch » : <i>Lisboa</i> sonne « Lij-boa », <i>dois</i> (deux) « doïch ».</li><li>Le <b>r</b> initial et le <b>rr</b> sont raclés dans la gorge : <i>Rio</i>, <i>carro</i>.</li></ul>",
              say: [
                { t: "trabalho", fr: "travail (lh)" },
                { t: "vinho", fr: "vin (nh)" },
                { t: "Lisboa", fr: "Lisbonne (s chuintant)" },
                { t: "carro", fr: "voiture (rr raclé)" },
              ],
            },
            {
              title: "Des voyelles avalées",
              body:
                "<p>En portugais du Portugal, les voyelles <b>non accentuées</b> sont souvent très réduites, voire avalées : <i>telefone</i> sonne presque « tl-fon ». C’est ce qui rend le portugais européen difficile à l’oreille au début, et c’est une grande différence avec le brésilien, plus « ouvert ».</p><p>L’accent tonique suit des règles proches de l’espagnol, et un accent écrit (á, é, ó, â, ê, ô) signale une syllabe forte : <i>café, português</i>.</p>",
              say: [
                { t: "telefone", fr: "téléphone (voyelles réduites)" },
                { t: "português", fr: "portugais" },
                { t: "obrigado", fr: "merci" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "não", back: "non (son nasal ão)" },
            { front: "pão", back: "pain" },
            { front: "trabalho", back: "travail (lh = ill)" },
            { front: "vinho", back: "vin (nh = gn)" },
            { front: "Lisboa", back: "Lisbonne (s chuintant au Portugal)" },
            { front: "também", back: "aussi (em nasal)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "pão", options: ["pão (pain)", "pá (pelle)", "pau (bâton)"], answer: 0, explain: "La nasale ão." },
            { q: "Quel mot as-tu entendu ?", say: "vinho", options: ["vinho (vin)", "vindo (venu)", "vivo (vivant)"], answer: 0, explain: "nh = gn." },
            { q: "Comment se prononce « lh » ?", options: ["comme « l » + « h »", "comme « ill » dans « fille »", "comme « ch »"], answer: 1, explain: "trabalho, mulher." },
            { q: "Au Portugal, le s final de « dois » se prononce…", options: ["s", "ch", "z"], answer: 1, explain: "Le s chuintant est typique du portugais européen." },
            { q: "Quelle différence principale entre portugais européen et brésilien à l’oral ?", options: ["Aucune", "Le portugais européen avale davantage les voyelles non accentuées", "Le brésilien n’a pas de nasales"], answer: 1, explain: "Le brésilien est plus « ouvert »." },
          ],
        },
        {
          type: "type",
          title: "Écris le mot que tu entends",
          instruction: "Clique sur 🔊, écoute, puis écris le mot en portugais (accents facultatifs).",
          items: [
            { prompt: "Écoute et écris :", say: "obrigado", answer: ["obrigado"], explain: "Merci (dit par un homme)." },
            { prompt: "Écoute et écris :", say: "não", answer: ["nao", "não"], explain: "Non." },
            { prompt: "Écoute et écris :", say: "vinho", answer: ["vinho"], explain: "Vin." },
            { prompt: "Écoute et écris :", say: "trabalho", answer: ["trabalho"], explain: "Travail." },
          ],
        },
        {
          type: "case",
          title: "« Je ne comprends rien à Lisbonne »",
          story:
            "Après quelques semaines de portugais brésilien sur une application, Hugo arrive à Lisbonne. Il a l’impression que les gens parlent « une autre langue » et avalent la moitié des mots.",
          question: "Que se passe-t-il ?",
          options: [
            "Les Lisboètes parlent espagnol",
            "Le portugais européen réduit beaucoup les voyelles non accentuées et chuinte les s : c’est la même langue, mais l’oreille doit s’habituer à cet accent",
            "Il a appris une mauvaise langue",
          ],
          answer: 1,
          explain:
            "L’écrit est presque identique, l’oral diffère nettement. S’exposer à l’accent visé (podcasts, vidéos, conversations) est la meilleure solution.",
        },
        {
          type: "fiche",
          title: "Principes et sons",
          points: [
            "Langue latine, deux variantes : <b>européenne</b> et <b>brésilienne</b> ; sujet souvent omis, noms genrés.",
            "Nasales : <b>ão</b> (pão, não), <b>ã</b>, <b>õe</b>, <b>-em</b> (bem, também).",
            "<b>lh</b> = ill, <b>nh</b> = gn, <b>ç</b> = s, <b>s</b> final chuintant au Portugal, <b>rr</b> raclé.",
            "Voyelles non accentuées <b>réduites</b> au Portugal ; accent écrit = syllabe forte.",
          ],
          retenir: "Pão, não, vinho, trabalho : quatre mots pour apprivoiser les sons du portugais.",
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
                { t: "Olá!", fr: "Bonjour, salut" },
                { t: "Bom dia", fr: "Bonjour (le matin)" },
                { t: "Boa tarde", fr: "Bonjour (l’après-midi)" },
                { t: "Chamo-me Noa.", fr: "Je m’appelle Noa (Portugal ; au Brésil : Me chamo Noa)." },
                { t: "Muito prazer.", fr: "Enchanté." },
                { t: "Tudo bem?", fr: "Ça va ?" },
              ],
              body: "<p><i>Até logo</i> (à plus tard) et <i>adeus</i> (adieu, au revoir) servent à partir.</p>",
            },
            {
              title: "Obrigado ou obrigada ?",
              body:
                "<p>Pour dire merci, on accorde avec <b>la personne qui parle</b> : un homme dit <b>obrigado</b>, une femme dit <b>obrigada</b>.</p>",
              say: [
                { t: "Obrigado.", fr: "Merci (dit par un homme)." },
                { t: "Obrigada.", fr: "Merci (dit par une femme)." },
                { t: "De nada.", fr: "De rien." },
                { t: "Por favor", fr: "S’il vous plaît" },
                { t: "Desculpe.", fr: "Excusez-moi, pardon." },
                { t: "Não percebo.", fr: "Je ne comprends pas (Portugal ; au Brésil : Não entendo)." },
              ],
            },
            {
              title: "Les mots pour questionner",
              say: [
                { t: "O quê?", fr: "Quoi ?" },
                { t: "Onde?", fr: "Où ?" },
                { t: "Quando?", fr: "Quand ?" },
                { t: "Quem?", fr: "Qui ?" },
                { t: "Porquê?", fr: "Pourquoi ? (Portugal)" },
                { t: "Quanto custa?", fr: "Combien ça coûte ?" },
              ],
              body: "<p>Contrairement à l’espagnol, pas de point d’interrogation à l’envers.</p>",
            },
            {
              title: "Les nombres",
              body: "<p>Attention à <b>quinhentos</b> (500) et à quelques différences : 16 se dit <i>dezasseis</i> au Portugal et <i>dezesseis</i> au Brésil.</p>",
              say: [
                { t: "dois", fr: "2" },
                { t: "quinze", fr: "15" },
                { t: "cinquenta", fr: "50" },
                { t: "cem", fr: "100" },
                { t: "quinhentos", fr: "500" },
                { t: "mil", fr: "1 000" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Tudo bem?", back: "Ça va ?" },
            { front: "Muito prazer.", back: "Enchanté." },
            { front: "Obrigado / Obrigada", back: "Merci (selon que tu es un homme ou une femme)" },
            { front: "Quanto custa?", back: "Combien ça coûte ?" },
            { front: "Não percebo.", back: "Je ne comprends pas (Portugal)." },
            { front: "quinhentos", back: "500" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Sofia (une femme) veut remercier. Elle dit…", options: ["Obrigado", "Obrigada", "Gracias"], answer: 1, explain: "On accorde avec la personne qui parle." },
            { q: "Quel nombre as-tu entendu ?", say: "cinquenta", options: ["15", "50", "500"], answer: 1, explain: "cinquenta = 50." },
            { q: "Quel nombre as-tu entendu ?", say: "quinhentos", options: ["50", "150", "500"], answer: 2, explain: "quinhentos = 500." },
            { q: "« Não percebo » signifie…", options: ["Je n’ai pas reçu", "Je ne comprends pas", "Je ne perçois rien"], answer: 1, explain: "Au Portugal. Au Brésil : não entendo." },
            { q: "On te dit « Obrigado! ». Tu réponds…", options: ["De nada", "Por favor", "Desculpe"], answer: 0, explain: "De rien." },
          ],
        },
        {
          type: "type",
          title: "Traduis en portugais",
          instruction: "Écris la phrase en portugais (accents facultatifs).",
          items: [
            { prompt: "Merci (tu es un homme).", answer: ["obrigado", "muito obrigado"] },
            { prompt: "Je m’appelle Sarah.", answer: ["chamo-me sarah", "chamo me sarah", "me chamo sarah", "o meu nome e sarah", "meu nome e sarah"] },
            { prompt: "Combien ça coûte ?", answer: ["quanto custa", "quanto e"] },
            { prompt: "Je ne comprends pas. (Portugal)", answer: ["nao percebo", "não percebo", "nao entendo"] },
            { prompt: "Bonjour (le matin).", answer: ["bom dia"] },
          ],
        },
        {
          type: "case",
          title: "Le merci de Leïla",
          story:
            "Au marché de Porto, Leïla remercie le vendeur en disant « Obrigado! » car c’est le mot qu’elle a entendu partout. Le vendeur sourit gentiment.",
          question: "Pourquoi sourit-il ?",
          options: [
            "Elle a dit un mot grossier",
            "Une femme dit plutôt « obrigada » : le mot s’accorde avec la personne qui remercie ; l’erreur est courante et sans gravité",
            "Il faut dire « gracias » au Portugal",
          ],
          answer: 1,
          explain:
            "Obrigado signifie littéralement « obligé ». Une femme est « obrigada ». Les Portugais apprécient qu’on fasse l’effort, et cette nuance montre qu’on connaît la langue.",
        },
        {
          type: "fiche",
          title: "Mots de survie",
          points: [
            "Saluer : <b>olá</b>, <b>bom dia</b>, <b>boa tarde</b>, <b>chamo-me…</b>, <b>muito prazer</b>, <b>tudo bem?</b>",
            "Merci : <b>obrigado</b> (homme) / <b>obrigada</b> (femme) ; <b>de nada</b>, <b>por favor</b>, <b>desculpe</b>.",
            "Questions : <b>o quê, onde, quando, quem, porquê, quanto custa?</b>",
            "Nombres : <b>quinze</b> (15), <b>cinquenta</b> (50), <b>cem</b> (100), <b>quinhentos</b> (500), <b>mil</b>.",
          ],
          retenir: "Obrigado ou obrigada : le merci portugais s’accorde avec toi.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les raccourcis depuis le français",
      minutes: 15,
      objectives: ["Reconnaître les mots communs au français et au portugais", "Éviter les faux amis"],
      steps: [
        {
          type: "lesson",
          title: "Tu connais déjà des milliers de mots",
          slides: [
            {
              title: "Les terminaisons qui se transforment",
              body:
                "<table class='t'><tr><th>Français</th><th>Portugais</th><th>Exemples</th></tr><tr><td>-tion</td><td>-ção (pluriel -ções)</td><td>nation → nação, information → informação</td></tr><tr><td>-té</td><td>-dade</td><td>ville (cité) → cidade, université → universidade</td></tr><tr><td>-eux</td><td>-oso</td><td>délicieux → delicioso, dangereux → perigoso</td></tr><tr><td>-ment</td><td>-mente</td><td>rapidement → rapidamente</td></tr><tr><td>-iste</td><td>-ista</td><td>dentiste → dentista</td></tr></table>",
            },
            {
              title: "Même mot, son portugais",
              say: [
                { t: "informação", fr: "information" },
                { t: "cidade", fr: "ville" },
                { t: "universidade", fr: "université" },
                { t: "restaurante", fr: "restaurant" },
                { t: "rapidamente", fr: "rapidement" },
              ],
              body: "<p>Si tu as suivi le cours d’espagnol, beaucoup de mots sont presque identiques : <i>nación / nação, ciudad / cidade</i>.</p>",
            },
            {
              title: "Les faux amis",
              body:
                "<table class='t'><tr><th>Portugais</th><th>Veut dire</th><th>Et pas…</th></tr><tr><td>puxar</td><td>tirer</td><td>pousser (= empurrar)</td></tr><tr><td>esquisito</td><td>bizarre</td><td>exquis</td></tr><tr><td>apelido</td><td>nom de famille (Portugal), surnom (Brésil)</td><td>appel</td></tr><tr><td>constipado</td><td>enrhumé</td><td>constipé</td></tr><tr><td>rato</td><td>souris</td><td>rat (= ratazana)</td></tr><tr><td>borracha</td><td>gomme, caoutchouc</td><td>ivre</td></tr></table>",
            },
            {
              title: "Le piège des portes",
              body:
                "<p>Sur les portes au Portugal et au Brésil, tu liras souvent :</p><ul><li><b>PUXE</b> : tirez (alors que « puxe » fait penser à « poussez »).</li><li><b>EMPURRE</b> : poussez.</li></ul><p>C’est l’un des faux amis les plus utiles au quotidien.</p>",
              say: [
                { t: "puxe", fr: "tirez" },
                { t: "empurre", fr: "poussez" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Vrai ami ou faux ami ?",
          instruction: "Le mot portugais a-t-il le même sens que le mot français qui lui ressemble ?",
          categories: ["Même sens", "Faux ami"],
          items: [
            { text: "informação", cat: 0, why: "Information." },
            { text: "puxar", cat: 1, why: "Tirer, pas pousser." },
            { text: "cidade", cat: 0, why: "Cité, ville." },
            { text: "esquisito", cat: 1, why: "Bizarre, pas exquis." },
            { text: "delicioso", cat: 0, why: "Délicieux." },
            { text: "constipado", cat: 1, why: "Enrhumé." },
            { text: "rato", cat: 1, why: "Souris." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "puxe / empurre", back: "tirez / poussez" },
            { front: "esquisito", back: "bizarre" },
            { front: "apelido", back: "nom de famille (Portugal) ; surnom (Brésil)" },
            { front: "constipado", back: "enrhumé" },
            { front: "rato", back: "souris" },
            { front: "cidade", back: "ville (-té → -dade)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Sur une porte de magasin, tu lis « PUXE ». Tu…", options: ["pousses", "tires", "sonnes"], answer: 1, explain: "Puxar = tirer." },
            { q: "« Que comida esquisita! » signifie…", options: ["Quel plat exquis !", "Quel plat bizarre !", "Quel plat épicé !"], answer: 1, explain: "Esquisito = bizarre." },
            { q: "Sur un formulaire portugais, « Apelido » demande…", options: ["ton numéro d’appel", "ton nom de famille", "ton prénom"], answer: 1, explain: "Au Portugal, apelido = nom de famille." },
            { q: "Quel mot as-tu entendu ?", say: "universidade", options: ["universidade", "universal", "unidade"], answer: 0, explain: "-dade correspond à -té." },
          ],
        },
        {
          type: "type",
          title: "Transforme le mot français",
          instruction: "Écris le mot portugais (accents facultatifs).",
          items: [
            { prompt: "nation", answer: ["nacao", "nação"], hint: "-tion → -ção" },
            { prompt: "ville (cité)", answer: ["cidade"], hint: "-té → -dade" },
            { prompt: "délicieux", answer: ["delicioso"], hint: "-eux → -oso" },
            { prompt: "rapidement", answer: ["rapidamente"], hint: "-ment → -mente" },
          ],
        },
        {
          type: "case",
          title: "Le formulaire du fournisseur",
          story:
            "Noa remplit en ligne le formulaire d’un fournisseur portugais. À la case « Apelido », il écrit son surnom d’enfance, pensant à un pseudonyme.",
          question: "Qu’aurait-il dû écrire ?",
          options: [
            "Son surnom",
            "Son nom de famille : au Portugal, « apelido » désigne le nom de famille (« nome » ou « nome próprio » pour le prénom)",
            "Son numéro de téléphone",
          ],
          answer: 1,
          explain:
            "Au Brésil, apelido veut dire surnom et le nom de famille se dit sobrenome. Ce genre de détail compte sur une facture ou un contrat.",
        },
        {
          type: "fiche",
          title: "Raccourcis depuis le français",
          points: [
            "Terminaisons : <b>-tion → -ção</b>, <b>-té → -dade</b>, <b>-eux → -oso</b>, <b>-ment → -mente</b>.",
            "Très proche de l’espagnol à l’écrit.",
            "Faux amis : <b>puxar</b> (tirer), <b>esquisito</b> (bizarre), <b>apelido</b>, <b>constipado</b>, <b>rato</b>, <b>borracha</b>.",
            "Portes : <b>PUXE</b> = tirez, <b>EMPURRE</b> = poussez.",
          ],
          retenir: "Puxe, c’est tirer : le faux ami qui t’évitera de forcer une porte.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "La grammaire essentielle",
      minutes: 17,
      objectives: ["Utiliser articles, contractions, pluriel et adjectifs", "Choisir la bonne forme d’adresse"],
      steps: [
        {
          type: "lesson",
          title: "Les briques de la phrase",
          slides: [
            {
              title: "Articles et contractions",
              body:
                "<table class='t'><tr><th></th><th>Masculin</th><th>Féminin</th></tr><tr><td>Le / la</td><td>o carro</td><td>a casa</td></tr><tr><td>Les</td><td>os carros</td><td>as casas</td></tr><tr><td>Un / une</td><td>um carro</td><td>uma casa</td></tr></table><p>Les prépositions fusionnent avec l’article : <b>de + o = do</b>, <b>em + a = na</b>, <b>a + o = ao</b>. <i>Moro no Porto</i> (j’habite à Porto), <i>o carro do Pedro</i> (la voiture de Pedro).</p>",
            },
            {
              title: "Pluriel et adjectifs",
              body:
                "<ul><li>Pluriel : <b>+s</b> le plus souvent (<i>casa → casas</i>) ; <b>-ão</b> devient souvent <b>-ões</b> (<i>informação → informações</i>).</li><li>L’adjectif se place en général <b>après le nom</b> et s’accorde : <i>uma casa branca, uns carros novos</i>.</li></ul>",
              say: [
                { t: "uma casa branca", fr: "une maison blanche" },
                { t: "as informações", fr: "les informations" },
              ],
            },
            {
              title: "Tu, você et o senhor",
              body:
                "<ul><li>Au Portugal, <b>tu</b> s’emploie entre proches.</li><li>Avec un inconnu ou un client, on utilise <b>o senhor / a senhora</b> (monsieur, madame) avec le verbe à la 3e personne : <i>O senhor fala francês?</i></li><li><b>Você</b> existe aussi au Portugal, mais peut sonner trop direct ; au <b>Brésil</b>, <i>você</i> est le « tu » courant.</li><li>Pluriel : <i>vocês</i> (vous).</li></ul>",
            },
            {
              title: "Possessifs, négation, questions",
              body:
                "<ul><li>Au Portugal, le possessif s’emploie avec l’article : <i>o meu carro</i> (ma voiture), <i>a minha casa</i> (ma maison).</li><li>Négation : <b>não</b> devant le verbe. <i>Não falo alemão.</i></li><li>Question : la même phrase avec une intonation montante. <i>Fala inglês?</i></li></ul>",
              say: [
                { t: "a minha casa", fr: "ma maison" },
                { t: "Não falo alemão.", fr: "Je ne parle pas allemand." },
                { t: "O senhor fala francês?", fr: "Parlez-vous français, monsieur ?" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "do / na / ao", back: "de + o / em + a / a + o (contractions)" },
            { front: "informações", back: "informations (-ão → -ões)" },
            { front: "o senhor / a senhora", back: "vous de politesse (verbe à la 3e personne)" },
            { front: "você", back: "tu courant au Brésil ; plus délicat au Portugal" },
            { front: "a minha casa", back: "ma maison (article + possessif au Portugal)" },
            { front: "Não falo…", back: "Je ne parle pas…" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "« J’habite à Porto » se dit…", options: ["Moro em o Porto.", "Moro no Porto.", "Moro ao Porto."], answer: 1, explain: "em + o = no." },
            { q: "Pluriel de « informação » ?", options: ["informaçãos", "informações", "informaçães"], answer: 1, explain: "-ão → -ões ici." },
            { q: "Tu t’adresses poliment à un client âgé à Lisbonne. Tu dis…", options: ["Tu falas francês?", "O senhor fala francês?", "Vocês falam francês?"], answer: 1, explain: "O senhor + 3e personne." },
            { q: "Quelle phrase as-tu entendue ?", say: "Não falo alemão.", options: ["Je ne parle pas allemand.", "Je parle allemand.", "Tu ne parles pas allemand ?"], answer: 0, explain: "Não devant le verbe." },
          ],
        },
        {
          type: "type",
          title: "Construis la phrase",
          instruction: "Écris en portugais (accents facultatifs).",
          items: [
            { prompt: "les maisons blanches", answer: ["as casas brancas"] },
            { prompt: "ma maison (Portugal, avec l’article)", answer: ["a minha casa", "minha casa"] },
            { prompt: "Je ne parle pas allemand.", answer: ["nao falo alemao", "não falo alemão", "eu nao falo alemao"] },
            { prompt: "la voiture de Pedro", answer: ["o carro do pedro"] },
          ],
        },
        {
          type: "case",
          title: "Le premier contact à Porto",
          story:
            "Noa rencontre la gérante d’un salon de coiffure à Porto, une femme d’une cinquantaine d’années. Il hésite entre « Tu tens clientes? », « Você tem clientes? » et « A senhora tem clientes…? ».",
          question: "Quelle forme choisir ?",
          options: [
            "Tu tens…, c’est plus chaleureux",
            "A senhora tem…, la forme respectueuse attendue au Portugal avec une interlocutrice qu’on ne connaît pas",
            "Você tem…, comme au Brésil",
          ],
          answer: 1,
          explain:
            "Au Portugal, o senhor / a senhora est la forme la plus sûre en contexte professionnel. Au Brésil, você serait naturel.",
        },
        {
          type: "fiche",
          title: "Grammaire essentielle",
          points: [
            "<b>o / a / os / as</b>, <b>um / uma</b> ; contractions <b>do, no, ao</b>.",
            "Pluriel <b>-s</b>, <b>-ão → -ões</b> ; adjectif <b>après</b> le nom et accordé.",
            "Portugal : <b>tu</b> (proches), <b>o senhor / a senhora</b> (politesse) ; Brésil : <b>você</b>.",
            "<b>o meu, a minha</b> ; négation <b>não</b> ; question par l’intonation.",
          ],
          retenir: "Au Portugal, dans le doute, o senhor ou a senhora.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Le présent, ser et estar",
      minutes: 17,
      objectives: ["Conjuguer les verbes réguliers au présent", "Distinguer ser et estar, utiliser ter"],
      steps: [
        {
          type: "lesson",
          title: "Les verbes du quotidien",
          slides: [
            {
              title: "Les trois groupes réguliers",
              body:
                "<table class='t'><tr><th></th><th>falar (parler)</th><th>comer (manger)</th><th>abrir (ouvrir)</th></tr><tr><td>eu</td><td>falo</td><td>como</td><td>abro</td></tr><tr><td>tu</td><td>falas</td><td>comes</td><td>abres</td></tr><tr><td>ele / ela / você</td><td>fala</td><td>come</td><td>abre</td></tr><tr><td>nós</td><td>falamos</td><td>comemos</td><td>abrimos</td></tr><tr><td>eles / vocês</td><td>falam</td><td>comem</td><td>abrem</td></tr></table>",
            },
            {
              title: "Ser et estar",
              body:
                "<p>Comme en espagnol :</p><ul><li><b>ser</b> : identité, origine, métier, caractéristique durable. <i>Sou francês. É empresário.</i></li><li><b>estar</b> : état du moment, situation. <i>Estou cansado. A loja está fechada.</i></li></ul><table class='t'><tr><th></th><th>ser</th><th>estar</th></tr><tr><td>eu</td><td>sou</td><td>estou</td></tr><tr><td>tu</td><td>és</td><td>estás</td></tr><tr><td>ele / você</td><td>é</td><td>está</td></tr><tr><td>nós</td><td>somos</td><td>estamos</td></tr><tr><td>eles / vocês</td><td>são</td><td>estão</td></tr></table><p>Pour la localisation d’un lieu fixe, on utilise souvent <b>ficar</b> : <i>Onde fica a estação?</i> (Où se trouve la gare ?)</p>",
              say: [
                { t: "Sou francês.", fr: "Je suis français." },
                { t: "Estou cansado.", fr: "Je suis fatigué." },
                { t: "Onde fica a estação?", fr: "Où se trouve la gare ?" },
              ],
            },
            {
              title: "Ter et ir",
              body:
                "<ul><li><b>ter</b> (avoir) : tenho, tens, tem, temos, têm. <i>Tenho 25 anos.</i> (J’ai 25 ans.)</li><li><b>ter de</b> + infinitif (Portugal) / <b>ter que</b> (Brésil) : devoir. <i>Tenho de trabalhar.</i></li><li><b>ir</b> (aller) : vou, vais, vai, vamos, vão.</li></ul>",
              say: [
                { t: "Tenho 25 anos.", fr: "J’ai 25 ans." },
                { t: "Tenho de trabalhar.", fr: "Je dois travailler." },
              ],
            },
            {
              title: "Ce qui se passe maintenant",
              body:
                "<p>Pour dire « je suis en train de… » :</p><ul><li>Au <b>Portugal</b> : <b>estar a</b> + infinitif. <i>Estou a trabalhar.</i></li><li>Au <b>Brésil</b> : <b>estar</b> + gérondif en -ndo. <i>Estou trabalhando.</i></li></ul>",
              say: [
                { t: "Estou a trabalhar.", fr: "Je suis en train de travailler (Portugal)." },
                { t: "Estou trabalhando.", fr: "Je suis en train de travailler (Brésil)." },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Ser ou estar ?",
          instruction: "Quel verbe pour traduire « être » ?",
          categories: ["ser", "estar"],
          items: [
            { text: "Je suis français.", cat: 0, why: "Nationalité : sou francês." },
            { text: "Le magasin est fermé.", cat: 1, why: "État : está fechada." },
            { text: "Elle est avocate.", cat: 0, why: "Métier : é advogada." },
            { text: "Je suis fatigué.", cat: 1, why: "État : estou cansado." },
            { text: "La maison est grande.", cat: 0, why: "Caractéristique : é grande." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "falo, falas, fala", back: "je parle, tu parles, il parle" },
            { front: "sou / estou", back: "je suis (identité) / je suis (état)" },
            { front: "Onde fica…?", back: "Où se trouve… ?" },
            { front: "Tenho 30 anos.", back: "J’ai 30 ans." },
            { front: "Tenho de…", back: "Je dois… (Portugal ; ter que au Brésil)" },
            { front: "Estou a trabalhar.", back: "Je suis en train de travailler (Portugal)." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Complète : Nós ___ (falar) português.", options: ["falam", "falamos", "falo"], answer: 1, explain: "Nós : -amos." },
            { q: "« A loja ___ fechada. »", options: ["é", "está"], answer: 1, explain: "Fermée : un état." },
            { q: "Comment dit-on « Je suis en train de manger » au Portugal ?", options: ["Estou comendo.", "Estou a comer.", "Sou a comer."], answer: 1, explain: "Estar a + infinitif au Portugal." },
            { q: "Quelle phrase as-tu entendue ?", say: "Onde fica a estação?", options: ["Où se trouve la gare ?", "Quand part le train ?", "La gare est fermée ?"], answer: 0, explain: "Ficar sert à localiser." },
          ],
        },
        {
          type: "type",
          title: "Conjugue",
          instruction: "Écris la forme correcte (accents facultatifs).",
          items: [
            { prompt: "Eles ___ (comer) às oito.", answer: ["comem"] },
            { prompt: "Eu ___ (ser) francês.", answer: ["sou"] },
            { prompt: "Traduis : J’ai 25 ans.", answer: ["tenho 25 anos", "tenho vinte e cinco anos"] },
            { prompt: "Traduis : Je dois travailler. (Portugal)", answer: ["tenho de trabalhar", "tenho que trabalhar"] },
            { prompt: "Traduis : Je suis fatigué.", answer: ["estou cansado"] },
          ],
        },
        {
          type: "case",
          title: "Se présenter",
          story:
            "Noa veut dire à un distributeur de Lisbonne : « Je suis français, je suis à Lisbonne cette semaine et je distribue des produits capillaires. »",
          question: "Quelle phrase est correcte ?",
          options: [
            "Estou francês, sou em Lisboa esta semana e distribuo produtos capilares.",
            "Sou francês, estou em Lisboa esta semana e distribuo produtos capilares.",
            "Tenho francês, vou Lisboa e distribuo.",
          ],
          answer: 1,
          explain:
            "Nationalité : ser (sou). Présence temporaire dans une ville : estar (estou). La même logique qu’en espagnol.",
        },
        {
          type: "fiche",
          title: "Présent, ser, estar",
          points: [
            "Réguliers : <b>-ar</b> (falo…), <b>-er</b> (como…), <b>-ir</b> (abro…).",
            "<b>ser</b> (identité) / <b>estar</b> (état) ; <b>ficar</b> pour situer un lieu.",
            "<b>ter</b> : âge (tenho 25 anos) ; <b>ter de / ter que</b> = devoir ; <b>ir</b> : vou, vais, vai…",
            "En train de : <b>estar a</b> + infinitif (Portugal) / <b>estar</b> + -ndo (Brésil).",
          ],
          retenir: "Sou pour qui tu es, estou pour comment tu es.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Passé, futur et projets",
      minutes: 16,
      objectives: ["Raconter une action passée", "Parler de projets et d’obligations"],
      steps: [
        {
          type: "lesson",
          title: "Sortir du présent",
          slides: [
            {
              title: "Le futur proche : ir + infinitif",
              body: "<p>Comme en français : <b>ir + infinitif</b>.</p>",
              say: [
                { t: "Vou ligar ao cliente.", fr: "Je vais appeler le client." },
                { t: "Vamos abrir uma loja.", fr: "Nous allons ouvrir une boutique." },
              ],
            },
            {
              title: "Le passé : le pretérito perfeito",
              body:
                "<p>Pour une action terminée (ontem = hier), verbes en -ar :</p><table class='t'><tr><th></th><th>falar</th></tr><tr><td>eu</td><td>falei</td></tr><tr><td>tu</td><td>falaste</td></tr><tr><td>ele / você</td><td>falou</td></tr><tr><td>nós</td><td>falámos (Portugal) / falamos (Brésil)</td></tr><tr><td>eles / vocês</td><td>falaram</td></tr></table><p>Verbes en -er et -ir : <i>comi, comeste, comeu…</i> / <i>abri, abriste, abriu…</i></p>",
              say: [
                { t: "Ontem falei com o fornecedor.", fr: "Hier, j’ai parlé avec le fournisseur." },
                { t: "Já comeste?", fr: "Tu as déjà mangé ?" },
              ],
            },
            {
              title: "Trois irréguliers à connaître",
              body:
                "<ul><li><b>ir</b> et <b>ser</b> : <i>fui, foste, foi, fomos, foram</i>. <i>Fui a Madrid.</i></li><li><b>ter</b> : <i>tive, tiveste, teve…</i> <i>Tive uma reunião.</i></li><li><b>fazer</b> (faire) : <i>fiz, fizeste, fez…</i> <i>O que fizeste ontem?</i></li></ul>",
            },
            {
              title: "Vouloir, pouvoir, devoir",
              body:
                "<ul><li><b>querer</b> : <i>Quero um café.</i> Plus poli : <i>Queria um café.</i> (Je voudrais un café.)</li><li><b>poder</b> : <i>Posso pagar com cartão?</i></li><li>Demander poliment : <i>Pode enviar-me a fatura?</i> (Portugal) / <i>Pode me enviar a fatura?</i> (Brésil)</li><li>Devoir : <i>tenho de</i> (Portugal), <i>tenho que</i> (Brésil).</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Vou…", back: "Je vais… (futur proche)" },
            { front: "falei / falou", back: "j’ai parlé / il a parlé" },
            { front: "fui", back: "je suis allé / j’ai été" },
            { front: "tive / fiz", back: "j’ai eu / j’ai fait" },
            { front: "Queria…", back: "Je voudrais… (poli)" },
            { front: "Posso pagar com cartão?", back: "Je peux payer par carte ?" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "« Hier, j’ai parlé avec le client » se dit…", options: ["Ontem falo com o cliente.", "Ontem falei com o cliente.", "Ontem vou falar com o cliente."], answer: 1, explain: "Action terminée : falei." },
            { q: "« Fui a Lisboa » signifie…", options: ["Je suis allé à Lisbonne", "Je vais à Lisbonne", "J’habite à Lisbonne"], answer: 0, explain: "Fui, prétérit de ir." },
            { q: "Pour commander poliment un café, tu dis…", options: ["Dá-me um café.", "Queria um café, por favor.", "Café!"], answer: 1, explain: "Queria = je voudrais." },
            { q: "Quelle phrase as-tu entendue ?", say: "Vou ligar ao cliente.", options: ["Je vais appeler le client.", "J’ai appelé le client.", "Le client va m’appeler."], answer: 0, explain: "Ligar = appeler (au téléphone)." },
          ],
        },
        {
          type: "type",
          title: "Passé et futur",
          instruction: "Écris en portugais (accents facultatifs).",
          items: [
            { prompt: "Nous allons ouvrir une boutique.", answer: ["vamos abrir uma loja"] },
            { prompt: "Hier, j’ai parlé avec le fournisseur.", answer: ["ontem falei com o fornecedor"] },
            { prompt: "Je voudrais un café, s’il vous plaît.", answer: ["queria um cafe por favor", "queria um café por favor", "queria um cafe"] },
            { prompt: "J’ai eu une réunion. (ter)", answer: ["tive uma reuniao", "tive uma reunião"] },
          ],
        },
        {
          type: "case",
          title: "Le compte rendu",
          story:
            "Le soir, Noa résume sa journée à un associé portugais : il est allé à Coimbra, il a eu trois rendez-vous et demain il va rappeler un salon.",
          question: "Quelle phrase est correcte ?",
          options: [
            "Vou a Coimbra, tenho três reuniões e amanhã ligo um salão.",
            "Fui a Coimbra, tive três reuniões e amanhã vou ligar a um salão.",
            "Foi a Coimbra, tinha reuniões e amanhã liguei.",
          ],
          answer: 1,
          explain:
            "Passé terminé : fui, tive. Projet : vou ligar. Ligar a alguém = appeler quelqu’un.",
        },
        {
          type: "fiche",
          title: "Passé, futur, projets",
          points: [
            "Futur proche : <b>ir + infinitif</b> (vou ligar, vamos abrir).",
            "Prétérit -ar : <b>-ei, -aste, -ou, -ámos, -aram</b> ; -er : <b>comi, comeu</b>.",
            "Irréguliers : <b>fui</b> (ir/ser), <b>tive</b> (ter), <b>fiz</b> (fazer).",
            "Poli : <b>queria</b>, <b>pode…?</b>, <b>posso…?</b> ; devoir : <b>tenho de / tenho que</b>.",
          ],
          retenir: "Vou pour demain, fui pour hier, queria pour être poli.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "En voyage",
      minutes: 16,
      objectives: ["Se déplacer, se loger et se restaurer", "Connaître les mots qui changent entre Portugal et Brésil"],
      steps: [
        {
          type: "lesson",
          title: "Les situations du voyage",
          slides: [
            {
              title: "Se déplacer",
              body:
                "<table class='t'><tr><th>Français</th><th>Portugal</th><th>Brésil</th></tr><tr><td>train</td><td>comboio</td><td>trem</td></tr><tr><td>bus</td><td>autocarro</td><td>ônibus</td></tr><tr><td>billet</td><td>bilhete</td><td>passagem / bilhete</td></tr><tr><td>gare</td><td>estação</td><td>estação</td></tr></table>",
              say: [
                { t: "o comboio", fr: "le train (Portugal)" },
                { t: "o autocarro", fr: "le bus (Portugal)" },
                { t: "O meu voo está atrasado.", fr: "Mon vol est retardé." },
              ],
            },
            {
              title: "À l’hôtel",
              say: [
                { t: "Tenho uma reserva.", fr: "J’ai une réservation." },
                { t: "um quarto duplo", fr: "une chambre double" },
                { t: "O pequeno-almoço está incluído?", fr: "Le petit-déjeuner est-il compris ? (Brésil : café da manhã)" },
                { t: "O wi-fi não funciona.", fr: "Le Wi-Fi ne marche pas." },
                { t: "Onde é a casa de banho?", fr: "Où sont les toilettes ? (Brésil : banheiro)" },
              ],
              body: "<p>Mots qui changent : <i>pequeno-almoço</i> (Portugal) / <i>café da manhã</i> (Brésil) ; <i>casa de banho</i> / <i>banheiro</i>.</p>",
            },
            {
              title: "Au restaurant et au café",
              say: [
                { t: "Uma mesa para dois, se faz favor.", fr: "Une table pour deux, s’il vous plaît (Portugal)." },
                { t: "Queria a ementa, por favor.", fr: "Je voudrais la carte (Portugal ; Brésil : cardápio)." },
                { t: "Um café, por favor.", fr: "Un café (au Portugal, un expresso, aussi appelé bica à Lisbonne)." },
                { t: "A conta, por favor.", fr: "L’addition, s’il vous plaît." },
              ],
              body: "<p>Au Portugal, <i>se faz favor</i> est une façon très courante de dire « s’il vous plaît » pour interpeller.</p>",
            },
            {
              title: "Demander son chemin",
              say: [
                { t: "Onde fica a estação?", fr: "Où se trouve la gare ?" },
                { t: "Siga sempre em frente.", fr: "Continuez tout droit." },
                { t: "Vire à esquerda.", fr: "Tournez à gauche." },
                { t: "Vire à direita.", fr: "Tournez à droite." },
                { t: "É longe?", fr: "C’est loin ?" },
              ],
              body: "<p>Et : <i>perto</i> (près), <i>ao lado de</i> (à côté de), <i>em frente de</i> (en face de).</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "o comboio / o trem", back: "le train (Portugal / Brésil)" },
            { front: "o autocarro / o ônibus", back: "le bus (Portugal / Brésil)" },
            { front: "o pequeno-almoço", back: "le petit-déjeuner (Portugal)" },
            { front: "a casa de banho", back: "les toilettes, la salle de bain (Portugal)" },
            { front: "A conta, por favor.", back: "L’addition, s’il vous plaît." },
            { front: "sempre em frente", back: "tout droit" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Au Portugal, pour prendre le bus, tu cherches…", options: ["o ônibus", "o autocarro", "o comboio"], answer: 1, explain: "Ônibus est brésilien ; comboio est le train." },
            { q: "Qu’as-tu entendu ?", say: "Vire à direita.", options: ["Tournez à droite.", "Tournez à gauche.", "Continuez tout droit."], answer: 0, explain: "Direita = droite, esquerda = gauche." },
            { q: "Qu’as-tu entendu ?", say: "O seu voo está atrasado.", options: ["Votre vol est retardé.", "Votre vol est annulé.", "Votre vol est à l’heure."], answer: 0, explain: "Atrasado = retardé ; cancelado = annulé." },
            { q: "Au Brésil, le petit-déjeuner se dit…", options: ["pequeno-almoço", "café da manhã", "almoço"], answer: 1, explain: "Almoço = déjeuner." },
          ],
        },
        {
          type: "type",
          title: "En situation",
          instruction: "Traduis en portugais du Portugal (accents facultatifs).",
          items: [
            { prompt: "J’ai une réservation.", answer: ["tenho uma reserva"] },
            { prompt: "L’addition, s’il vous plaît.", answer: ["a conta por favor", "a conta se faz favor"] },
            { prompt: "C’est loin ?", answer: ["e longe", "é longe", "fica longe"] },
            { prompt: "le train (Portugal)", answer: ["o comboio", "comboio"] },
          ],
        },
        {
          type: "case",
          title: "La demande au guichet",
          story:
            "À Lisbonne, Karim demande au guichet : « Onde é o ônibus para o aeroporto? ». L’employé comprend mais le reprend en souriant.",
          question: "Quelle formulation est la plus naturelle au Portugal ?",
          options: [
            "Onde é o ônibus…?",
            "Onde fica a paragem do autocarro para o aeroporto?",
            "Onde é o comboio do ônibus?",
          ],
          answer: 1,
          explain:
            "Au Portugal : autocarro (bus) et paragem (arrêt) ; au Brésil : ônibus et ponto. Les deux variantes se comprennent, mais utiliser les mots locaux facilite les échanges.",
        },
        {
          type: "fiche",
          title: "En voyage",
          points: [
            "Portugal / Brésil : <b>comboio / trem</b>, <b>autocarro / ônibus</b>, <b>pequeno-almoço / café da manhã</b>, <b>casa de banho / banheiro</b>.",
            "Hôtel : <b>tenho uma reserva</b>, <b>está incluído?</b>",
            "Restaurant : <b>se faz favor</b>, <b>queria…</b>, <b>a ementa</b>, <b>a conta</b>.",
            "Chemin : <b>sempre em frente</b>, <b>à esquerda / à direita</b>, <b>perto / longe</b>.",
          ],
          retenir: "Comboio au Portugal, trem au Brésil : vérifie de quel côté de l’Atlantique tu es.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Le portugais du travail",
      minutes: 17,
      objectives: ["Écrire un e-mail professionnel simple", "Prospecter et négocier en portugais"],
      steps: [
        {
          type: "lesson",
          title: "Travailler en portugais",
          slides: [
            {
              title: "L’e-mail professionnel",
              body:
                "<ul><li>Ouverture formelle au Portugal : <i>Exmo. Sr. Silva,</i> (Excelentíssimo Senhor) / <i>Exma. Sra. Costa,</i>. Plus courant : <i>Caro João,</i> / <i>Olá Ana,</i>.</li><li>Objet : <i>Escrevo-lhe para…</i> (je vous écris pour…).</li><li>Pièce jointe : <i>Envio em anexo o orçamento.</i></li><li>Clôture : <i>Com os melhores cumprimentos,</i> (Portugal) / <i>Atenciosamente,</i> (Brésil).</li></ul>",
              say: [
                { t: "Envio em anexo o orçamento.", fr: "Je vous envoie le devis en pièce jointe." },
                { t: "Com os melhores cumprimentos", fr: "Cordialement (Portugal)" },
              ],
            },
            {
              title: "Le vocabulaire commercial",
              say: [
                { t: "o orçamento", fr: "le devis" },
                { t: "a fatura", fr: "la facture" },
                { t: "a encomenda", fr: "la commande (Portugal ; Brésil : o pedido)" },
                { t: "o prazo de entrega", fr: "le délai de livraison" },
                { t: "o desconto", fr: "la remise" },
                { t: "uma amostra", fr: "un échantillon" },
              ],
              body: "<p>Comme en français, la virgule sert aux décimales : <b>4,50 €</b>.</p>",
            },
            {
              title: "Prospecter",
              say: [
                { t: "Bom dia, posso falar com o responsável?", fr: "Bonjour, puis-je parler au responsable ?" },
                { t: "Tem cinco minutos?", fr: "Avez-vous cinq minutes ?" },
                { t: "Posso deixar-lhe uma amostra?", fr: "Puis-je vous laisser un échantillon ?" },
                { t: "Deixo-lhe o meu cartão.", fr: "Je vous laisse ma carte." },
              ],
              body: "<p>La relation compte beaucoup : un café pris ensemble (<i>um café</i>) fait souvent partie de la négociation.</p>",
            },
            {
              title: "Négocier poliment",
              body:
                "<ul><li><i>Seria possível…?</i> (Serait-il possible… ?)</li><li><i>Consegue fazer um desconto para 500 unidades?</i> (Pouvez-vous faire une remise pour 500 unités ?)</li><li><i>É um pouco caro para nós.</i> (C’est un peu cher pour nous.)</li><li><i>Quais são as condições de pagamento?</i> (Quelles sont les conditions de paiement ?)</li><li><i>Pode confirmar por escrito?</i> (Pouvez-vous confirmer par écrit ?)</li></ul>",
              say: [
                { t: "Consegue fazer um desconto para quinhentas unidades?", fr: "Pouvez-vous faire une remise pour 500 unités ?" },
                { t: "Pode confirmar por escrito?", fr: "Pouvez-vous confirmer par écrit ?" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Trop direct ou professionnel ?",
          instruction: "Classe chaque formulation.",
          categories: ["Trop direct", "Professionnel et poli"],
          items: [
            { text: "Mande-me o preço.", cat: 0, why: "Impératif sec." },
            { text: "Pode enviar-me a sua tabela de preços, por favor?", cat: 1, why: "Demande polie." },
            { text: "É caro demais.", cat: 0, why: "Brutal en ouverture." },
            { text: "É um pouco caro para nós.", cat: 1, why: "Formule diplomatique." },
            { text: "Seria possível entregar na sexta-feira?", cat: 1, why: "Demande adoucie." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "o orçamento", back: "le devis" },
            { front: "a fatura", back: "la facture" },
            { front: "a encomenda", back: "la commande (Portugal)" },
            { front: "uma amostra", back: "un échantillon" },
            { front: "Envio em anexo…", back: "Je vous envoie en pièce jointe…" },
            { front: "Com os melhores cumprimentos", back: "Cordialement (Portugal)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Comment écrit-on « quatre euros cinquante » au Portugal ?", options: ["4.50 €", "4,50 €"], answer: 1, explain: "Virgule décimale, comme en français." },
            { q: "Qu’as-tu entendu ?", say: "Posso deixar-lhe uma amostra?", options: ["Puis-je vous laisser un échantillon ?", "Puis-je vous montrer le magasin ?", "Pouvez-vous me laisser passer ?"], answer: 0, explain: "Amostra = échantillon." },
            { q: "Pour clore un e-mail professionnel au Portugal, tu écris…", options: ["Beijinhos,", "Com os melhores cumprimentos,", "Tchau!"], answer: 1, explain: "Beijinhos (bisous) est réservé aux proches." },
            { q: "« O prazo de entrega » désigne…", options: ["le prix de livraison", "le délai de livraison", "le lieu de livraison"], answer: 1, explain: "Prazo = délai." },
          ],
        },
        {
          type: "type",
          title: "Rédige",
          instruction: "Traduis en portugais professionnel du Portugal (accents facultatifs).",
          items: [
            { prompt: "Je vous envoie le devis en pièce jointe.", answer: ["envio em anexo o orcamento", "envio em anexo o orçamento", "envio o orcamento em anexo", "envio o orçamento em anexo"] },
            { prompt: "Puis-je parler au responsable ?", answer: ["posso falar com o responsavel", "posso falar com o responsável"] },
            { prompt: "C’est un peu cher pour nous.", answer: ["e um pouco caro para nos", "é um pouco caro para nós"] },
            { prompt: "Cordialement (Portugal)", answer: ["com os melhores cumprimentos", "melhores cumprimentos", "cumprimentos"] },
          ],
        },
        {
          type: "case",
          title: "La visite au salon de Lisbonne",
          story:
            "À Lisbonne, Noa entre dans un salon de coiffure pour présenter un produit de camouflage capillaire. La gérante termine une coupe.",
          question: "Quelle approche est la plus adaptée ?",
          options: [
            "Interrompre : « Produto para carecas, muito bom, compre! »",
            "Attendre, puis : « Bom dia, desculpe incomodar. Posso falar com a senhora quando tiver cinco minutos? Distribuímos um produto para disfarçar a queda de cabelo. Posso deixar-lhe uma amostra e o meu cartão. »",
            "Laisser un prospectus en espagnol",
          ],
          answer: 1,
          explain:
            "Politesse (desculpe incomodar), a senhora, présentation en une phrase, échantillon et carte. Au Portugal, la relation et le respect des formes comptent autant que le prix. Et le portugais n’est pas l’espagnol : un document dans la bonne langue fait une vraie différence.",
        },
        {
          type: "fiche",
          title: "Le portugais du travail",
          points: [
            "E-mail : <b>Exmo. Sr. / Exma. Sra.</b> ou <b>Caro…</b>, <b>Escrevo-lhe para…</b>, <b>Envio em anexo…</b>, <b>Com os melhores cumprimentos</b>.",
            "Vocabulaire : <b>orçamento, fatura, encomenda (pedido au Brésil), prazo de entrega, desconto, amostra</b> ; virgule décimale.",
            "Prospection : <b>posso falar com o responsável?</b>, <b>posso deixar-lhe uma amostra?</b>",
            "Négocier : <b>seria possível…?</b>, <b>consegue fazer um desconto?</b>, <b>pode confirmar por escrito?</b>",
          ],
          retenir: "Au Portugal, on négocie souvent autour d’un café : la relation d’abord, le prix ensuite.",
        },
      ],
    },
  ],
});
