/* ============================================================
   COURS : Néerlandais — les fondations
   Institut des Langues · 8 séances de 15 à 20 minutes
   Les 6 axes : principes et prononciation, mots de survie,
   raccourcis depuis le français, grammaire, conjugaison,
   vocabulaire par situation (voyage, travail).
   Néerlandais des Pays-Bas (nl-NL) ; le néerlandais de Flandre
   (Belgique) est la même langue, avec un accent et quelques
   mots différents.
   ============================================================ */
AGORA.registerCourse({
  id: "neerlandais-fondations",
  faculty: "langues",
  lang: "nl-NL",
  title: "Néerlandais — les fondations",
  subtitle: "Prononcer, comprendre et construire tes premières phrases utiles",
  color: "#6b4f9a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour démarrer le néerlandais, langue des Pays-Bas et de la Flandre : les sons qui surprennent (g, ui, ij), les mots de survie, les nombreux mots venus du français, la grammaire essentielle (de ou het), l’ordre des mots, les temps utiles, puis le voyage et le travail. Clique sur 🔊 pour écouter et écris tes réponses.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Comment marche le néerlandais (et ses sons)",
      minutes: 17,
      objectives: ["Comprendre les grands principes du néerlandais", "Prononcer les sons typiques"],
      steps: [
        {
          type: "lesson",
          title: "Les principes",
          slides: [
            {
              title: "Une langue entre l’anglais et l’allemand",
              body:
                "<ul><li>Le néerlandais est une langue <b>germanique</b>, cousine de l’anglais et de l’allemand. Il est parlé aux <b>Pays-Bas</b>, en <b>Flandre</b> (nord de la Belgique), au Suriname et dans les Antilles néerlandaises.</li><li>Beaucoup de mots ressemblent à l’anglais : <i>water, hand, appel</i> (pomme), <i>boek</i> (livre).</li><li>Il a emprunté de nombreux mots au <b>français</b> (séance 3).</li><li>Deux articles : <b>de</b> et <b>het</b> (séance 4).</li></ul>",
            },
            {
              title: "Le g et le ch",
              body:
                "<p>Le <b>g</b> et le <b>ch</b> se prononcent du fond de la gorge, comme la jota espagnole. Aux Pays-Bas, il est plutôt rugueux ; en Flandre et dans le sud, plus doux.</p><p>Le groupe <b>sch</b> se dit « s » + ce son raclé : <i>Scheveningen</i>, le célèbre test de prononciation.</p>",
              say: [
                { t: "goed", fr: "bien, bon" },
                { t: "acht", fr: "huit" },
                { t: "Groningen", fr: "Groningue (ville)" },
                { t: "school", fr: "école (s + ch)" },
              ],
            },
            {
              title: "Les voyelles et diphtongues",
              body:
                "<table class='t'><tr><th>Écrit</th><th>Son approché</th><th>Exemple</th></tr><tr><td>oe</td><td>ou</td><td>boek (livre)</td></tr><tr><td>u / uu</td><td>u court / u long</td><td>vuur (feu)</td></tr><tr><td>eu</td><td>eu</td><td>neus (nez)</td></tr><tr><td>ij / ei</td><td>« èï »</td><td>wijn (vin), klein (petit)</td></tr><tr><td>ui</td><td>entre « eu » et « ï », sans équivalent</td><td>huis (maison)</td></tr><tr><td>aa, ee, oo</td><td>voyelles longues</td><td>straat (rue)</td></tr></table>",
              say: [
                { t: "boek", fr: "livre (oe = ou)" },
                { t: "wijn", fr: "vin (ij)" },
                { t: "huis", fr: "maison (ui)" },
                { t: "straat", fr: "rue (aa long)" },
              ],
            },
            {
              title: "Le w, le v et l’accent",
              body:
                "<ul><li>Le <b>w</b> se prononce entre le v et le w anglais : <i>water</i>.</li><li>Le <b>v</b> en début de mot sonne souvent presque comme un f : <i>vader</i> (père).</li><li>Le <b>j</b> se prononce « y » : <i>ja</i> (oui).</li><li>L’accent tonique tombe le plus souvent sur la <b>première syllabe</b> : <i>WER-ken</i> (travailler).</li></ul>",
              say: [
                { t: "water", fr: "eau" },
                { t: "vader", fr: "père" },
                { t: "ja", fr: "oui" },
                { t: "werken", fr: "travailler (WER-ken)" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "goed", back: "bien, bon (g raclé)" },
            { front: "huis", back: "maison (ui, son typique)" },
            { front: "wijn", back: "vin (ij = èï)" },
            { front: "boek", back: "livre (oe = ou)" },
            { front: "ja / nee", back: "oui / non" },
            { front: "werken", back: "travailler (accent sur WER)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel mot as-tu entendu ?", say: "huis", options: ["huis (maison)", "haas (lièvre)", "hees (enroué)"], answer: 0, explain: "Le son ui est typique du néerlandais." },
            { q: "Quel mot as-tu entendu ?", say: "boek", options: ["buk", "boek", "beek"], answer: 1, explain: "oe se prononce « ou »." },
            { q: "Comment se prononce le g de « goed » ?", options: ["Comme le g de « gare »", "Raclé au fond de la gorge", "Comme un j"], answer: 1, explain: "Comme la jota espagnole, plus doux en Flandre." },
            { q: "Où est en général l’accent tonique ?", options: ["Sur la première syllabe", "Sur la dernière", "Il n’y en a pas"], answer: 0, explain: "WER-ken, VA-der." },
            { q: "Dans quels pays parle-t-on néerlandais ?", options: ["Pays-Bas et Flandre (Belgique), notamment", "Seulement les Pays-Bas", "Pays-Bas et Danemark"], answer: 0, explain: "Le flamand est du néerlandais." },
          ],
        },
        {
          type: "type",
          title: "Écris le mot que tu entends",
          instruction: "Clique sur 🔊, écoute, puis écris le mot en néerlandais.",
          items: [
            { prompt: "Écoute et écris :", say: "goed", answer: "goed", explain: "Bien." },
            { prompt: "Écoute et écris :", say: "huis", answer: "huis", explain: "Maison." },
            { prompt: "Écoute et écris :", say: "wijn", answer: ["wijn", "wein"], explain: "Vin (ij)." },
            { prompt: "Écoute et écris :", say: "water", answer: "water", explain: "Eau." },
          ],
        },
        {
          type: "case",
          title: "Le salon à Gand",
          story:
            "À Gand, en Flandre, Noa salue une coiffeuse en français. Elle lui répond poliment en anglais. Un ami belge lui explique que commencer en néerlandais, même maladroitement, change souvent l’accueil.",
          question: "Quel est le meilleur réflexe ?",
          options: [
            "Toujours parler français en Belgique",
            "En Flandre, commencer par quelques mots de néerlandais (« Goedemiddag! »), puis demander poliment si l’on peut continuer en anglais ou en français",
            "Parler néerlandais uniquement, même sans le maîtriser",
          ],
          answer: 1,
          explain:
            "En Flandre, la langue officielle est le néerlandais. Ouvrir dans la langue locale est une marque de respect, et la plupart des interlocuteurs passent volontiers à l’anglais ensuite.",
        },
        {
          type: "fiche",
          title: "Principes et sons",
          points: [
            "Langue <b>germanique</b> (Pays-Bas, Flandre), proche de l’anglais et de l’allemand.",
            "<b>g / ch</b> raclés ; <b>sch</b> = s + ch.",
            "<b>oe</b> = ou, <b>ij / ei</b> ≈ èï, <b>ui</b> son typique, voyelles doubles longues.",
            "<b>w</b> entre v et w, <b>v</b> presque f, <b>j</b> = y ; accent sur la <b>première syllabe</b>.",
          ],
          retenir: "Un g raclé et un ui bien placé : tu sonnes déjà néerlandais.",
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
                { t: "Hallo! / Hoi!", fr: "Bonjour ! / Salut !" },
                { t: "Goedemorgen", fr: "Bonjour (le matin)" },
                { t: "Goedemiddag", fr: "Bonjour (l’après-midi)" },
                { t: "Ik heet Noa.", fr: "Je m’appelle Noa." },
                { t: "Hoe gaat het?", fr: "Comment ça va ?" },
                { t: "Tot ziens!", fr: "Au revoir !" },
              ],
              body: "<p>Entre amis, on dit souvent <i>doei</i> (salut) pour partir.</p>",
            },
            {
              title: "La politesse : je ou u",
              body:
                "<p>Le néerlandais distingue <b>jij / je</b> (tu) et <b>u</b> (vous de politesse). Les formules changent en conséquence :</p>",
              say: [
                { t: "Dank je wel.", fr: "Merci beaucoup (tutoiement)." },
                { t: "Dank u wel.", fr: "Merci beaucoup (vouvoiement)." },
                { t: "Alstublieft", fr: "S’il vous plaît / voici (vouvoiement)" },
                { t: "Graag gedaan.", fr: "Avec plaisir, de rien." },
                { t: "Sorry / Pardon", fr: "Pardon, désolé" },
                { t: "Ik begrijp het niet.", fr: "Je ne comprends pas." },
              ],
            },
            {
              title: "Les mots pour questionner",
              say: [
                { t: "Wat?", fr: "Quoi ?" },
                { t: "Waar?", fr: "Où ?" },
                { t: "Wanneer?", fr: "Quand ?" },
                { t: "Wie?", fr: "Qui ?" },
                { t: "Waarom?", fr: "Pourquoi ?" },
                { t: "Hoeveel kost het?", fr: "Combien ça coûte ?" },
              ],
              body: "<p><i>Alsjeblieft / alstublieft</i> veut dire à la fois « s’il te plaît » et « voici » (en tendant quelque chose).</p>",
            },
            {
              title: "Les nombres",
              body:
                "<p>Comme en allemand, les unités se disent <b>avant</b> les dizaines : 21 se dit « un-et-vingt », <i>eenentwintig</i>. Attention à ne pas inverser les chiffres en notant un prix ou un numéro.</p>",
              say: [
                { t: "dertien", fr: "13" },
                { t: "dertig", fr: "30" },
                { t: "eenentwintig", fr: "21 (un-et-vingt)" },
                { t: "vijfenveertig", fr: "45 (cinq-et-quarante)" },
                { t: "honderd", fr: "100" },
                { t: "duizend", fr: "1 000" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Hoe gaat het?", back: "Comment ça va ?" },
            { front: "Dank u wel.", back: "Merci beaucoup (vouvoiement)." },
            { front: "Graag gedaan.", back: "Avec plaisir / de rien." },
            { front: "Hoeveel kost het?", back: "Combien ça coûte ?" },
            { front: "Ik begrijp het niet.", back: "Je ne comprends pas." },
            { front: "eenentwintig", back: "21 (l’unité avant la dizaine)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel nombre as-tu entendu ?", say: "vijfenveertig", options: ["54", "45", "15"], answer: 1, explain: "vijf-en-veertig : cinq-et-quarante = 45." },
            { q: "Quel nombre as-tu entendu ?", say: "dertig", options: ["13", "30", "3"], answer: 1, explain: "dertien = 13, dertig = 30." },
            { q: "À une cliente que tu ne connais pas, tu dis…", options: ["Dank je wel", "Dank u wel", "Doei"], answer: 1, explain: "U : vouvoiement." },
            { q: "« Graag gedaan » répond à…", options: ["Dank je wel", "Hoe gaat het?", "Tot ziens"], answer: 0, explain: "C’est « de rien, avec plaisir »." },
            { q: "« Waar is het station? » signifie…", options: ["Quand part le train ?", "Où est la gare ?", "Pourquoi la gare ?"], answer: 1, explain: "Waar = où." },
          ],
        },
        {
          type: "type",
          title: "Traduis en néerlandais",
          instruction: "Écris la phrase en néerlandais. Majuscules et ponctuation ne comptent pas.",
          items: [
            { prompt: "Merci beaucoup (vouvoiement).", answer: ["dank u wel", "dank u"] },
            { prompt: "Je m’appelle Sarah.", answer: ["ik heet sarah", "mijn naam is sarah", "ik ben sarah"] },
            { prompt: "Combien ça coûte ?", answer: ["hoeveel kost het", "wat kost het", "hoeveel kost dat", "wat kost dat"] },
            { prompt: "Je ne comprends pas.", answer: ["ik begrijp het niet", "ik snap het niet", "ik begrijp het niet goed"] },
            { prompt: "Au revoir !", answer: ["tot ziens", "dag", "doei"] },
          ],
        },
        {
          type: "case",
          title: "Le numéro de téléphone",
          story:
            "Un fournisseur d’Utrecht dicte son numéro au téléphone : « …vierentachtig… ». Karim note 48.",
          question: "Quelle est l’erreur et le bon réflexe ?",
          options: [
            "Aucune erreur",
            "Vier-en-tachtig se dit « quatre-et-quatre-vingts » : c’est 84. Il faut s’habituer à l’inversion des unités et relire le numéro à voix haute ou le faire envoyer par écrit",
            "Il faut raccrocher",
          ],
          answer: 1,
          explain:
            "L’inversion unité-dizaine est le piège classique des nombres en néerlandais (comme en allemand). Pour un numéro ou un montant, faire confirmer par écrit évite les erreurs.",
        },
        {
          type: "fiche",
          title: "Mots de survie",
          points: [
            "Saluer : <b>hallo</b>, <b>goedemorgen / goedemiddag</b>, <b>ik heet…</b>, <b>hoe gaat het?</b>, <b>tot ziens</b>.",
            "Politesse : <b>dank je / dank u wel</b>, <b>alsjeblieft / alstublieft</b>, <b>graag gedaan</b>.",
            "Questions : <b>wat, waar, wanneer, wie, waarom, hoeveel kost het?</b>",
            "Nombres : unité <b>avant</b> la dizaine (<b>eenentwintig</b> = 21) ; dertien (13) ≠ dertig (30).",
          ],
          retenir: "En néerlandais, 21 se dit « un-et-vingt » : écoute la fin du nombre.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Les raccourcis depuis le français",
      minutes: 15,
      objectives: ["Reconnaître les mots venus du français et de l’anglais", "Éviter les faux amis"],
      steps: [
        {
          type: "lesson",
          title: "Des mots que tu connais déjà",
          slides: [
            {
              title: "Le français dans le néerlandais",
              body:
                "<p>Pendant des siècles, le français a été la langue de prestige dans les Pays-Bas et en Flandre. Beaucoup de mots courants viennent du français, souvent avec une orthographe adaptée.</p><table class='t'><tr><th>Néerlandais</th><th>Français</th></tr><tr><td>trottoir</td><td>trottoir</td></tr><tr><td>cadeau</td><td>cadeau</td></tr><tr><td>bureau</td><td>bureau</td></tr><tr><td>plafond</td><td>plafond</td></tr><tr><td>paraplu</td><td>parapluie</td></tr><tr><td>portemonnee</td><td>porte-monnaie</td></tr><tr><td>chauffeur, garage, restaurant</td><td>idem</td></tr></table>",
            },
            {
              title: "Les ponts avec l’anglais",
              body:
                "<p>Si tu as fait le cours d’anglais, profite des ressemblances :</p><table class='t'><tr><th>Néerlandais</th><th>Anglais</th><th>Français</th></tr><tr><td>water</td><td>water</td><td>eau</td></tr><tr><td>boek</td><td>book</td><td>livre</td></tr><tr><td>huis</td><td>house</td><td>maison</td></tr><tr><td>drinken</td><td>to drink</td><td>boire</td></tr><tr><td>komen</td><td>to come</td><td>venir</td></tr></table>",
              say: [
                { t: "drinken", fr: "boire" },
                { t: "komen", fr: "venir" },
              ],
            },
            {
              title: "Même mot, son néerlandais",
              say: [
                { t: "cadeau", fr: "cadeau" },
                { t: "trottoir", fr: "trottoir" },
                { t: "paraplu", fr: "parapluie" },
                { t: "portemonnee", fr: "porte-monnaie" },
              ],
              body: "<p>Écoute : la prononciation se rapproche du français, avec un accent néerlandais.</p>",
            },
            {
              title: "Les faux amis",
              body:
                "<table class='t'><tr><th>Néerlandais</th><th>Veut dire</th><th>Et pas…</th></tr><tr><td>monster</td><td>échantillon</td><td>monstre</td></tr><tr><td>brutaal</td><td>effronté, insolent</td><td>brutal</td></tr><tr><td>slim</td><td>intelligent</td><td>mince (anglais slim)</td></tr><tr><td>lui</td><td>paresseux</td><td>lui</td></tr><tr><td>rok</td><td>jupe</td><td>rock</td></tr><tr><td>jus</td><td>sauce de viande</td><td>jus de fruit (= sap)</td></tr></table>",
            },
          ],
        },
        {
          type: "sort",
          title: "Vrai ami ou faux ami ?",
          instruction: "Le mot néerlandais a-t-il le même sens que le mot français qui lui ressemble ?",
          categories: ["Même sens", "Faux ami"],
          items: [
            { text: "cadeau", cat: 0, why: "Cadeau." },
            { text: "monster", cat: 1, why: "Échantillon." },
            { text: "trottoir", cat: 0, why: "Trottoir." },
            { text: "brutaal", cat: 1, why: "Effronté, pas brutal." },
            { text: "plafond", cat: 0, why: "Plafond." },
            { text: "lui", cat: 1, why: "Paresseux." },
            { text: "jus", cat: 1, why: "Sauce de viande ; le jus de fruit se dit sap." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "monster", back: "échantillon" },
            { front: "brutaal", back: "effronté, insolent" },
            { front: "slim", back: "intelligent" },
            { front: "lui", back: "paresseux" },
            { front: "paraplu", back: "parapluie" },
            { front: "sinaasappelsap", back: "jus d’orange (jus = sauce de viande)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un client te demande « een gratis monster ». Il veut…", options: ["un monstre gratuit", "un échantillon gratuit", "un cadeau surprise"], answer: 1, explain: "Monster = échantillon." },
            { q: "« Hij is heel slim » signifie…", options: ["Il est très mince", "Il est très intelligent", "Il est très lent"], answer: 1, explain: "Faux ami avec l’anglais." },
            { q: "Comment dit-on « parapluie » ?", options: ["paraplu", "regenschermte", "parapluie"], answer: 0, explain: "Paraplu, emprunté au français." },
            { q: "Quel mot as-tu entendu ?", say: "portemonnee", options: ["portemonnee (porte-monnaie)", "paraplu (parapluie)", "plafond (plafond)"], answer: 0, explain: "Emprunt au français." },
          ],
        },
        {
          type: "type",
          title: "Retrouve le mot",
          instruction: "Écris le mot néerlandais.",
          items: [
            { prompt: "cadeau", answer: ["cadeau", "kado", "cadeautje"] },
            { prompt: "échantillon", answer: ["monster"] },
            { prompt: "parapluie", answer: ["paraplu"] },
            { prompt: "boire (pense à l’anglais « drink »)", answer: ["drinken"] },
          ],
        },
        {
          type: "case",
          title: "Les échantillons au salon",
          story:
            "À Anvers, Noa propose à une coiffeuse de lui laisser un « gratis monstertje ». Son collègue français pense qu’il a fait une gaffe.",
          question: "Qui a raison ?",
          options: [
            "Le collègue : « monster » veut dire monstre",
            "Noa : « monster » veut dire échantillon, et « monstertje » est le diminutif, un petit échantillon",
            "Personne, le mot n’existe pas",
          ],
          answer: 1,
          explain:
            "Monster = échantillon, un mot très utile en prospection. Le suffixe -tje forme un diminutif, très fréquent en néerlandais (koffietje, petit café).",
        },
        {
          type: "fiche",
          title: "Raccourcis depuis le français",
          points: [
            "Emprunts au français : <b>trottoir, cadeau, bureau, plafond, paraplu, portemonnee, chauffeur</b>.",
            "Ponts avec l’anglais : <b>water, boek, huis, drinken, komen</b>.",
            "Faux amis : <b>monster</b> (échantillon), <b>brutaal</b>, <b>slim</b>, <b>lui</b>, <b>rok</b>, <b>jus</b>.",
            "Diminutif en <b>-je / -tje</b> : monstertje, koffietje.",
          ],
          retenir: "Ton français et ton anglais font déjà la moitié du chemin vers le néerlandais.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "La grammaire essentielle",
      minutes: 17,
      objectives: ["Utiliser de et het, les pluriels et les adjectifs", "Construire négations et questions"],
      steps: [
        {
          type: "lesson",
          title: "Les briques de la phrase",
          slides: [
            {
              title: "De ou het",
              body:
                "<ul><li>Le néerlandais a deux articles définis : <b>de</b> (la majorité des mots) et <b>het</b> (les mots neutres).</li><li>Il faut apprendre l’article avec le mot : <i>de man, de vrouw, de auto</i> / <i>het huis, het boek, het kind</i>.</li><li>Trois règles sûres : tous les <b>pluriels</b> prennent <b>de</b> ; tous les <b>diminutifs</b> (-je) prennent <b>het</b> ; l’article indéfini est toujours <b>een</b>.</li></ul>",
              say: [
                { t: "de man", fr: "l’homme" },
                { t: "het huis", fr: "la maison" },
                { t: "de huizen", fr: "les maisons (pluriel : de)" },
                { t: "het huisje", fr: "la maisonnette (diminutif : het)" },
              ],
            },
            {
              title: "Le pluriel",
              body:
                "<ul><li>Le plus souvent : <b>-en</b> (<i>boek → boeken</i>, <i>huis → huizen</i>).</li><li>Après certaines terminaisons (-el, -er, -em, -je…) : <b>-s</b> (<i>tafel → tafels</i>, <i>auto → auto's</i>).</li><li>L’orthographe des voyelles s’adapte pour garder le même son : <i>straat → straten</i>, <i>boot → boten</i>.</li></ul>",
            },
            {
              title: "Pronoms et adjectifs",
              body:
                "<table class='t'><tr><th>Sujet</th><th>Possessif</th></tr><tr><td>ik (je)</td><td>mijn</td></tr><tr><td>jij, je (tu)</td><td>jouw, je</td></tr><tr><td>u (vous, politesse)</td><td>uw</td></tr><tr><td>hij / zij, ze (il / elle)</td><td>zijn / haar</td></tr><tr><td>wij, we (nous)</td><td>ons, onze</td></tr><tr><td>jullie (vous, pluriel)</td><td>jullie</td></tr><tr><td>zij, ze (ils)</td><td>hun</td></tr></table><p>L’adjectif se place <b>avant</b> le nom et prend souvent un <b>-e</b> : <i>de grote auto, een grote auto</i>. Exception : avec <i>een</i> devant un mot en het, pas de -e : <i>een groot huis</i> (mais <i>het grote huis</i>).</p>",
            },
            {
              title: "Négation et questions",
              body:
                "<ul><li><b>niet</b> nie un verbe ou un adjectif : <i>Ik werk niet. Het is niet duur.</i></li><li><b>geen</b> remplace « pas de / pas un » devant un nom : <i>Ik heb geen auto.</i></li><li>Question : on <b>inverse</b> le verbe et le sujet : <i>Spreekt u Engels?</i> Avec <b>jij</b>, le verbe perd son -t : <i>Spreek jij Engels?</i></li></ul>",
              say: [
                { t: "Ik heb geen auto.", fr: "Je n’ai pas de voiture." },
                { t: "Het is niet duur.", fr: "Ce n’est pas cher." },
                { t: "Spreekt u Engels?", fr: "Parlez-vous anglais ?" },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "de / het", back: "les deux articles définis (het = neutre)" },
            { front: "het huis / de huizen", back: "la maison / les maisons (pluriel toujours de)" },
            { front: "een groot huis", back: "une grande maison (pas de -e avec een + mot en het)" },
            { front: "geen", back: "pas de, pas un (devant un nom)" },
            { front: "niet", back: "ne… pas (verbe, adjectif)" },
            { front: "Spreek jij…? / Spreekt u…?", back: "Parles-tu… ? / Parlez-vous… ?" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Quel article pour « boeken » (des livres, pluriel) ?", options: ["het", "de", "een"], answer: 1, explain: "Tous les pluriels prennent de." },
            { q: "Quel article pour « meisje » (fillette, diminutif) ?", options: ["de", "het"], answer: 1, explain: "Tous les diminutifs prennent het." },
            { q: "« Je n’ai pas de temps » se dit…", options: ["Ik heb niet tijd.", "Ik heb geen tijd.", "Ik niet heb tijd."], answer: 1, explain: "Geen devant un nom." },
            { q: "Transforme en question : « Jij werkt hier. »", options: ["Werkt jij hier?", "Werk jij hier?", "Jij werk hier?"], answer: 1, explain: "Avec jij inversé, le verbe perd son -t." },
            { q: "Quelle phrase as-tu entendue ?", say: "Het is niet duur.", options: ["Ce n’est pas cher.", "C’est très cher.", "Ce n’est pas dur."], answer: 0, explain: "Duur = cher." },
          ],
        },
        {
          type: "type",
          title: "Construis la phrase",
          instruction: "Écris en néerlandais.",
          items: [
            { prompt: "Je n’ai pas de voiture.", answer: ["ik heb geen auto", "ik heb geen wagen"] },
            { prompt: "Parlez-vous anglais ? (u)", answer: ["spreekt u engels"] },
            { prompt: "les maisons", answer: ["de huizen"] },
            { prompt: "Ce n’est pas cher.", answer: ["het is niet duur", "dat is niet duur"] },
            { prompt: "mon livre", answer: ["mijn boek"] },
          ],
        },
        {
          type: "case",
          title: "L’annonce en ligne",
          story:
            "Pour sa boutique en ligne en Belgique, Noa traduit « un petit cadeau offert » par « een klein cadeau gratis ». Une amie flamande lui propose plutôt « een gratis cadeautje ».",
          question: "Pourquoi « een gratis cadeautje » sonne-t-il mieux ?",
          options: [
            "Parce que gratis doit toujours être à la fin",
            "Le diminutif -tje exprime naturellement « petit » (un petit cadeau), et l’adjectif se place avant le nom",
            "Parce que cadeau est un faux ami",
          ],
          answer: 1,
          explain:
            "Le néerlandais adore les diminutifs : cadeautje, koffietje, momentje. L’adjectif (gratis) se place devant le nom. Pour un texte de vente, une relecture par un natif reste recommandée.",
        },
        {
          type: "fiche",
          title: "Grammaire essentielle",
          points: [
            "<b>de</b> / <b>het</b> (neutre) ; pluriel toujours <b>de</b> ; diminutif toujours <b>het</b> ; <b>een</b>.",
            "Pluriel <b>-en</b> ou <b>-s</b> ; orthographe des voyelles adaptée.",
            "Adjectif <b>avant</b> le nom, souvent en <b>-e</b> (sauf een + mot en het).",
            "<b>niet</b> (verbe, adjectif) / <b>geen</b> (devant un nom) ; question par <b>inversion</b> (spreek jij…?).",
          ],
          retenir: "De ou het ? Apprends toujours l’article avec le mot.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Le présent et l’ordre des mots",
      minutes: 17,
      objectives: ["Conjuguer au présent zijn, hebben et les verbes réguliers", "Placer le verbe au bon endroit"],
      steps: [
        {
          type: "lesson",
          title: "Conjuguer et placer le verbe",
          slides: [
            {
              title: "Les verbes réguliers",
              body:
                "<p>On part de l’infinitif (<i>werken</i>), on enlève <b>-en</b> pour avoir le radical (<i>werk</i>) :</p><table class='t'><tr><th>Sujet</th><th>werken (travailler)</th></tr><tr><td>ik</td><td>werk</td></tr><tr><td>jij / u</td><td>werkt</td></tr><tr><td>hij / zij</td><td>werkt</td></tr><tr><td>wij / jullie / zij</td><td>werken</td></tr></table><p>Pour garder le son de la voyelle, l’orthographe s’adapte : <i>maken → ik maak</i>, <i>wonen → ik woon</i>.</p>",
            },
            {
              title: "Zijn et hebben",
              body:
                "<table class='t'><tr><th>Sujet</th><th>zijn (être)</th><th>hebben (avoir)</th></tr><tr><td>ik</td><td>ben</td><td>heb</td></tr><tr><td>jij / u</td><td>bent</td><td>hebt / heeft (u)</td></tr><tr><td>hij / zij</td><td>is</td><td>heeft</td></tr><tr><td>wij / jullie / zij</td><td>zijn</td><td>hebben</td></tr></table>",
              say: [
                { t: "Ik ben Frans.", fr: "Je suis français." },
                { t: "Hij heeft een winkel.", fr: "Il a un magasin." },
                { t: "Ik ben 25 jaar.", fr: "J’ai 25 ans (avec zijn)." },
              ],
            },
            {
              title: "Le verbe en deuxième position",
              body:
                "<p>Règle d’or : dans une phrase principale, le verbe conjugué est toujours le <b>deuxième élément</b>. Si on commence par autre chose que le sujet, le sujet passe <b>après</b> le verbe :</p><ul><li><i>Ik ga morgen naar Amsterdam.</i></li><li><i>Morgen <b>ga ik</b> naar Amsterdam.</i></li></ul>",
              say: [
                { t: "Ik ga morgen naar Amsterdam.", fr: "Je vais à Amsterdam demain." },
                { t: "Morgen ga ik naar Amsterdam.", fr: "Demain, je vais à Amsterdam." },
              ],
            },
            {
              title: "Les verbes à deux parties",
              body:
                "<p>Avec un verbe comme <b>willen</b> (vouloir), <b>kunnen</b> (pouvoir) ou <b>moeten</b> (devoir), l’infinitif part <b>à la fin</b> de la phrase :</p><ul><li><i>Ik wil een koffie bestellen.</i> (Je veux commander un café.)</li><li><i>Kunt u mij morgen bellen?</i> (Pouvez-vous m’appeler demain ?)</li><li><i>Ik moet vandaag werken.</i> (Je dois travailler aujourd’hui.)</li></ul>",
              say: [
                { t: "Ik wil een koffie bestellen.", fr: "Je veux commander un café." },
                { t: "Kunt u mij morgen bellen?", fr: "Pouvez-vous m’appeler demain ?" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Bonne ou mauvaise phrase ?",
          instruction: "L’ordre des mots est-il correct ?",
          categories: ["Correct", "Incorrect"],
          items: [
            { text: "Morgen ga ik naar Gent.", cat: 0, why: "Verbe en 2e position, sujet après." },
            { text: "Morgen ik ga naar Gent.", cat: 1, why: "Le verbe doit être en 2e position." },
            { text: "Ik wil een auto kopen.", cat: 0, why: "Infinitif à la fin." },
            { text: "Ik wil kopen een auto.", cat: 1, why: "L’infinitif part à la fin." },
            { text: "Vandaag werk ik niet.", cat: 0, why: "Inversion correcte." },
            { text: "Kunt u bellen mij morgen?", cat: 1, why: "Kunt u mij morgen bellen?" },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "ik werk, jij werkt, wij werken", back: "je travaille, tu travailles, nous travaillons" },
            { front: "ik ben / ik heb", back: "je suis / j’ai" },
            { front: "Ik ben 30 jaar.", back: "J’ai 30 ans (avec zijn)." },
            { front: "Morgen ga ik…", back: "Demain je vais… (verbe en 2e position)" },
            { front: "Ik wil … kopen.", back: "Je veux acheter… (infinitif à la fin)" },
            { front: "moeten", back: "devoir" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Complète : Hij ___ (hebben) een fiets.", options: ["heb", "heeft", "hebben"], answer: 1, explain: "Hij heeft." },
            { q: "Complète : Wij ___ (wonen) in Brussel.", options: ["woon", "woont", "wonen"], answer: 2, explain: "Pluriel = infinitif." },
            { q: "Quelle phrase est correcte ?", options: ["Vandaag ik werk thuis.", "Vandaag werk ik thuis.", "Vandaag werk thuis ik."], answer: 1, explain: "Verbe en 2e position." },
            { q: "Quelle phrase as-tu entendue ?", say: "Kunt u mij morgen bellen?", options: ["Pouvez-vous m’appeler demain ?", "Vous m’avez appelé hier ?", "Je vous appelle demain."], answer: 0, explain: "Bellen = appeler (au téléphone)." },
          ],
        },
        {
          type: "type",
          title: "Conjugue et construis",
          instruction: "Écris la forme demandée ou la phrase en néerlandais.",
          items: [
            { prompt: "Ik ___ (zijn) Frans.", answer: ["ben"] },
            { prompt: "Zij (elle) ___ (werken) in Gent.", answer: ["werkt"] },
            { prompt: "Traduis : Demain, je vais à Amsterdam. (commence par Morgen)", answer: ["morgen ga ik naar amsterdam"] },
            { prompt: "Traduis : Je veux acheter une voiture. (een auto kopen)", answer: ["ik wil een auto kopen"] },
            { prompt: "Traduis : J’ai 25 ans.", answer: ["ik ben 25 jaar", "ik ben 25 jaar oud", "ik ben vijfentwintig jaar"] },
          ],
        },
        {
          type: "case",
          title: "Le rendez-vous à fixer",
          story:
            "Noa veut écrire à un client de Rotterdam : « Demain, je peux venir à 10 heures. » Il écrit : « Morgen ik kan komen om 10 uur. »",
          question: "Quelle est la phrase correcte ?",
          options: [
            "Morgen ik kan komen om 10 uur.",
            "Morgen kan ik om 10 uur komen.",
            "Morgen kan komen ik om 10 uur.",
          ],
          answer: 1,
          explain:
            "Deux règles : verbe conjugué en 2e position (kan), sujet juste après, et infinitif (komen) à la fin. Ces deux règles suffisent pour la plupart des phrases du quotidien.",
        },
        {
          type: "fiche",
          title: "Présent et ordre des mots",
          points: [
            "Réguliers : <b>ik werk</b>, <b>jij / hij werkt</b>, <b>wij / jullie / zij werken</b>.",
            "<b>zijn</b> : ben, bent, is, zijn ; <b>hebben</b> : heb, hebt, heeft, hebben ; âge avec <b>zijn</b>.",
            "Verbe conjugué en <b>2e position</b> : <i>Morgen ga ik…</i>",
            "<b>willen, kunnen, moeten</b> + infinitif <b>à la fin</b>.",
          ],
          retenir: "Le verbe en deuxième, l’infinitif à la fin : le néerlandais tient dans cette phrase.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Passé et futur",
      minutes: 16,
      objectives: ["Raconter au passé composé", "Parler du futur et de ses projets"],
      steps: [
        {
          type: "lesson",
          title: "Sortir du présent",
          slides: [
            {
              title: "Le passé composé",
              body:
                "<p>Pour raconter, on utilise surtout le <b>passé composé</b> : <b>hebben</b> ou <b>zijn</b> + participe passé, placé <b>à la fin</b> :</p><ul><li>Verbes réguliers : <b>ge-</b> + radical + <b>-t</b> ou <b>-d</b> : <i>werken → gewerkt</i>, <i>wonen → gewoond</i>.</li><li><i>Ik heb gisteren lang gewerkt.</i> (J’ai longtemps travaillé hier.)</li></ul>",
              say: [
                { t: "Ik heb gisteren gewerkt.", fr: "J’ai travaillé hier." },
                { t: "Wij hebben in Gent gewoond.", fr: "Nous avons habité à Gand." },
              ],
            },
            {
              title: "-t ou -d ? Le truc du « kofschip »",
              body:
                "<p>Si le radical se termine par une lettre du mot <b>’t kofschip</b> (t, k, f, s, ch, p), le participe se termine par <b>-t</b> ; sinon par <b>-d</b>.</p><ul><li><i>werk</i> (k) → <i>gewerkt</i></li><li><i>maak</i> (k) → <i>gemaakt</i></li><li><i>woon</i> (n) → <i>gewoond</i></li><li><i>bel</i> (l) → <i>gebeld</i></li></ul>",
            },
            {
              title: "Les participes irréguliers courants",
              body:
                "<table class='t'><tr><th>Infinitif</th><th>Participe</th><th>Sens</th></tr><tr><td>gaan</td><td>(ben) gegaan</td><td>aller</td></tr><tr><td>komen</td><td>(ben) gekomen</td><td>venir</td></tr><tr><td>eten</td><td>gegeten</td><td>manger</td></tr><tr><td>drinken</td><td>gedronken</td><td>boire</td></tr><tr><td>zien</td><td>gezien</td><td>voir</td></tr><tr><td>doen</td><td>gedaan</td><td>faire</td></tr><tr><td>kopen</td><td>gekocht</td><td>acheter</td></tr><tr><td>sturen</td><td>gestuurd</td><td>envoyer</td></tr></table><p>Les verbes de déplacement prennent souvent <b>zijn</b> : <i>Ik ben naar Utrecht gegaan.</i></p>",
            },
            {
              title: "Le futur",
              body:
                "<ul><li>Très souvent, le <b>présent</b> + un mot de temps suffit : <i>Morgen bel ik u.</i> (Je vous appelle demain.)</li><li><b>gaan</b> + infinitif : projet proche. <i>Ik ga een winkel openen.</i></li><li><b>zullen</b> + infinitif : promesse, formel. <i>Ik zal het morgen sturen.</i> (Je l’enverrai demain.)</li></ul>",
              say: [
                { t: "Ik ga een winkel openen.", fr: "Je vais ouvrir un magasin." },
                { t: "Ik zal het morgen sturen.", fr: "Je l’enverrai demain." },
              ],
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "gewerkt", back: "travaillé (werken, -t car k)" },
            { front: "gebeld", back: "appelé (bellen, -d car l)" },
            { front: "’t kofschip", back: "t, k, f, s, ch, p → participe en -t" },
            { front: "gegaan", back: "allé (ben gegaan)" },
            { front: "gekocht", back: "acheté (kopen, irrégulier)" },
            { front: "Ik zal…", back: "Je vais… / je ferai… (promesse)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Participe passé de « maken » (faire, fabriquer) ?", options: ["gemaakd", "gemaakt", "gemaken"], answer: 1, explain: "k est dans ’t kofschip : -t." },
            { q: "« Ik ben naar Brussel ___ » (gaan)", options: ["gegaan", "gegaat", "gaan"], answer: 0, explain: "Participe irrégulier, avec zijn." },
            { q: "« Hebt u de factuur ___? » (sturen)", options: ["gestuurt", "gestuurd", "stuurde"], answer: 1, explain: "r n’est pas dans ’t kofschip : -d." },
            { q: "Quelle phrase as-tu entendue ?", say: "Ik zal het morgen sturen.", options: ["Je l’enverrai demain.", "Je l’ai envoyé hier.", "Tu l’envoies demain."], answer: 0, explain: "Zullen : promesse." },
          ],
        },
        {
          type: "type",
          title: "Au passé et au futur",
          instruction: "Écris en néerlandais.",
          items: [
            { prompt: "Participe passé de « werken » :", answer: ["gewerkt"] },
            { prompt: "Participe passé de « kopen » :", answer: ["gekocht"] },
            { prompt: "Traduis : J’ai travaillé hier. (gisteren)", answer: ["ik heb gisteren gewerkt", "gisteren heb ik gewerkt"] },
            { prompt: "Traduis : Je vais ouvrir un magasin. (gaan)", answer: ["ik ga een winkel openen"] },
          ],
        },
        {
          type: "case",
          title: "La relance du client",
          story:
            "Un client de Gand écrit : « Hebt u het monster al gestuurd? » Noa a bien envoyé l’échantillon hier et veut promettre d’envoyer le numéro de suivi.",
          question: "Quelle réponse est correcte ?",
          options: [
            "Ja, ik stuur het monster gisteren. Ik stuur morgen het nummer.",
            "Ja, ik heb het monster gisteren gestuurd. Ik zal u het trackingnummer vandaag sturen.",
            "Ja, ik heb gestuurd gisteren het monster.",
          ],
          answer: 1,
          explain:
            "Passé : heb … gestuurd, avec le participe à la fin. Promesse : zal … sturen. Une réponse claire rassure le client.",
        },
        {
          type: "fiche",
          title: "Passé et futur",
          points: [
            "Passé composé : <b>hebben / zijn</b> + participe <b>à la fin</b>.",
            "Réguliers : <b>ge- + radical + -t / -d</b> (’t kofschip → -t).",
            "Irréguliers : <b>gegaan, gekomen, gegeten, gedronken, gezien, gedaan, gekocht</b>.",
            "Futur : présent + mot de temps, <b>gaan</b> + infinitif, <b>zullen</b> + infinitif.",
          ],
          retenir: "’t kofschip : six lettres pour ne plus hésiter entre -t et -d.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "En voyage",
      minutes: 16,
      objectives: ["Se déplacer, se loger et se restaurer", "Demander son chemin et payer"],
      steps: [
        {
          type: "lesson",
          title: "Les situations du voyage",
          slides: [
            {
              title: "Se déplacer",
              say: [
                { t: "het station", fr: "la gare" },
                { t: "de trein", fr: "le train" },
                { t: "de fiets", fr: "le vélo" },
                { t: "het fietspad", fr: "la piste cyclable" },
                { t: "Mijn vlucht heeft vertraging.", fr: "Mon vol a du retard." },
              ],
              body:
                "<p>Aux Pays-Bas, le vélo est partout : on ne marche <b>jamais sur une piste cyclable</b>. Dans les trains néerlandais, on peut généralement valider directement avec sa carte bancaire sans contact.</p>",
            },
            {
              title: "À l’hôtel",
              say: [
                { t: "Ik heb een reservering.", fr: "J’ai une réservation." },
                { t: "een tweepersoonskamer", fr: "une chambre double" },
                { t: "Is het ontbijt inbegrepen?", fr: "Le petit-déjeuner est-il compris ?" },
                { t: "De wifi werkt niet.", fr: "Le Wi-Fi ne marche pas." },
              ],
              body: "<p>Le néerlandais construit de longs mots composés : <i>tweepersoonskamer</i> = deux-personnes-chambre.</p>",
            },
            {
              title: "Au restaurant et en magasin",
              say: [
                { t: "Mag ik de menukaart?", fr: "Puis-je avoir la carte ?" },
                { t: "Ik wil graag een koffie.", fr: "Je voudrais un café." },
                { t: "Mag ik afrekenen?", fr: "Je peux régler ? (l’addition)" },
                { t: "Kan ik pinnen?", fr: "Je peux payer par carte ?" },
              ],
              body: "<p><i>Graag</i> (volontiers) rend une demande polie : <i>ik wil graag…</i> = je voudrais. Beaucoup de commerces sont « pin only » : <b>pinnen</b> = payer par carte.</p>",
            },
            {
              title: "Demander son chemin",
              say: [
                { t: "Waar is het station?", fr: "Où est la gare ?" },
                { t: "rechtdoor", fr: "tout droit" },
                { t: "links / rechts", fr: "à gauche / à droite" },
                { t: "Is het ver?", fr: "C’est loin ?" },
                { t: "dichtbij", fr: "près" },
              ],
              body: "<p>Repère : <i>rechts</i> (droite) ressemble à l’allemand <i>rechts</i> ; <i>links</i> (gauche) aussi.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "de fiets", back: "le vélo" },
            { front: "vertraging", back: "retard" },
            { front: "Is het ontbijt inbegrepen?", back: "Le petit-déjeuner est-il compris ?" },
            { front: "Ik wil graag…", back: "Je voudrais…" },
            { front: "pinnen", back: "payer par carte" },
            { front: "rechtdoor / links / rechts", back: "tout droit / à gauche / à droite" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qu’as-tu entendu ?", say: "De trein heeft vertraging.", options: ["Le train a du retard.", "Le train est annulé.", "Le train est à l’heure."], answer: 0, explain: "Vertraging = retard." },
            { q: "Qu’as-tu entendu ?", say: "Ga rechtdoor en dan links.", options: ["Tout droit puis à gauche.", "À droite puis tout droit.", "À gauche puis à droite."], answer: 0, explain: "Rechtdoor = tout droit, links = gauche." },
            { q: "Pour demander à payer par carte, tu dis…", options: ["Kan ik pinnen?", "Kan ik fietsen?", "Kan ik bellen?"], answer: 0, explain: "Pinnen = payer par carte." },
            { q: "Pourquoi éviter de marcher sur le « fietspad » ?", options: ["C’est une piste cyclable", "C’est un trottoir privé", "C’est une voie de tram"], answer: 0, explain: "Les cyclistes y roulent vite." },
          ],
        },
        {
          type: "type",
          title: "En situation",
          instruction: "Traduis en néerlandais.",
          items: [
            { prompt: "J’ai une réservation.", answer: ["ik heb een reservering", "ik heb een reservatie"] },
            { prompt: "Je voudrais un café.", answer: ["ik wil graag een koffie", "ik wil graag koffie", "mag ik een koffie"] },
            { prompt: "Je peux payer par carte ?", answer: ["kan ik pinnen", "mag ik pinnen", "kan ik met de kaart betalen"] },
            { prompt: "C’est loin ?", answer: ["is het ver"] },
          ],
        },
        {
          type: "case",
          title: "La location à Amsterdam",
          story:
            "Arrivée dans un appartement loué à Amsterdam, Sofia découvre que le Wi-Fi ne marche pas alors qu’elle doit travailler le soir même. Elle écrit à l’hôte en néerlandais simple.",
          question: "Quel message est le plus efficace ?",
          options: [
            "Wifi slecht. Nu repareren.",
            "Hallo, de wifi werkt niet en ik moet vanavond werken. Kunt u mij helpen? Alvast bedankt!",
            "Uw appartement is slecht.",
          ],
          answer: 1,
          explain:
            "Salutation, problème, besoin, demande polie avec kunt u, et « alvast bedankt » (merci d’avance), une formule très utilisée.",
        },
        {
          type: "fiche",
          title: "En voyage",
          points: [
            "Transport : <b>het station</b>, <b>de trein</b>, <b>de fiets</b>, <b>vertraging</b> ; jamais sur le <b>fietspad</b>.",
            "Hôtel : <b>ik heb een reservering</b>, <b>is het ontbijt inbegrepen?</b>",
            "Restaurant, magasin : <b>ik wil graag…</b>, <b>mag ik afrekenen?</b>, <b>kan ik pinnen?</b>",
            "Chemin : <b>rechtdoor</b>, <b>links / rechts</b>, <b>ver / dichtbij</b>.",
          ],
          retenir: "Graag rend tout plus poli : ik wil graag…",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Le néerlandais du travail",
      minutes: 18,
      objectives: ["Écrire un e-mail professionnel simple", "Prospecter et négocier avec des Néerlandais et des Flamands"],
      steps: [
        {
          type: "lesson",
          title: "Travailler en néerlandais",
          slides: [
            {
              title: "L’e-mail professionnel",
              body:
                "<ul><li>Ouverture formelle : <i>Geachte heer De Vries,</i> / <i>Geachte mevrouw Peeters,</i>. Plus courant : <i>Beste Jan,</i> (très fréquent, même en affaires).</li><li>Objet : <i>Ik schrijf u omdat…</i> (je vous écris parce que…).</li><li>Pièce jointe : <i>In de bijlage vindt u de offerte.</i></li><li>Clôture : <i>Met vriendelijke groet,</i> (cordialement).</li></ul>",
              say: [
                { t: "In de bijlage vindt u de offerte.", fr: "Vous trouverez le devis en pièce jointe." },
                { t: "Met vriendelijke groet", fr: "Cordialement" },
              ],
            },
            {
              title: "Le vocabulaire commercial",
              say: [
                { t: "de offerte", fr: "le devis" },
                { t: "de factuur", fr: "la facture" },
                { t: "de bestelling", fr: "la commande" },
                { t: "de levertijd", fr: "le délai de livraison" },
                { t: "de korting", fr: "la remise" },
                { t: "het monster", fr: "l’échantillon" },
              ],
              body: "<p>Comme en français, la virgule sert aux décimales : <b>€ 4,50</b>.</p>",
            },
            {
              title: "La culture de la franchise",
              body:
                "<ul><li>Aux Pays-Bas, la communication est réputée <b>directe</b> : on dit clairement oui ou non, on critique ouvertement un prix. Ce n’est pas de l’impolitesse.</li><li>Les rendez-vous sont <b>ponctuels</b> et planifiés (<i>een afspraak maken</i> : prendre rendez-vous).</li><li>En Flandre, le ton est souvent un peu plus formel et diplomatique.</li><li>Arguments appréciés : prix clair, faits, efficacité, pas de promesses excessives.</li></ul>",
            },
            {
              title: "Négocier",
              body:
                "<ul><li><i>Kunt u iets aan de prijs doen?</i> (Pouvez-vous faire un geste sur le prix ?)</li><li><i>Is er korting mogelijk bij 500 stuks?</i> (Une remise est-elle possible pour 500 pièces ?)</li><li><i>Dat is te duur voor ons.</i> (C’est trop cher pour nous.)</li><li><i>Wat is de minimale bestelling?</i> (Quelle est la commande minimum ?)</li><li><i>Kunt u dat schriftelijk bevestigen?</i> (Pouvez-vous le confirmer par écrit ?)</li></ul>",
              say: [
                { t: "Is er korting mogelijk bij 500 stuks?", fr: "Une remise est-elle possible pour 500 pièces ?" },
                { t: "Kunt u dat schriftelijk bevestigen?", fr: "Pouvez-vous le confirmer par écrit ?" },
              ],
            },
          ],
        },
        {
          type: "sort",
          title: "Quel mot ?",
          instruction: "Associe chaque situation au bon document ou terme.",
          categories: ["offerte (devis)", "factuur (facture)", "bestelling (commande)"],
          items: [
            { text: "Avant d’acheter, le client demande un prix détaillé", cat: 0, why: "C’est le devis." },
            { text: "Après la livraison, tu demandes le paiement", cat: 1, why: "C’est la facture." },
            { text: "Le client confirme qu’il veut 300 pièces", cat: 2, why: "C’est la commande." },
            { text: "Document envoyé « in de bijlage » avant la signature", cat: 0, why: "Le devis précède l’accord." },
            { text: "Document avec la TVA à régler sous 30 jours", cat: 1, why: "La facture." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "de offerte", back: "le devis" },
            { front: "de factuur", back: "la facture" },
            { front: "de korting", back: "la remise" },
            { front: "In de bijlage vindt u…", back: "Vous trouverez en pièce jointe…" },
            { front: "Met vriendelijke groet", back: "Cordialement" },
            { front: "een afspraak maken", back: "prendre rendez-vous" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un client néerlandais te dit directement : « Dat is te duur. » Comment l’interpréter ?", options: ["Il est vexé et part", "C’est une remarque franche, typique ; on peut discuter du prix ou de la valeur", "Il insulte ton produit"], answer: 1, explain: "La franchise fait partie de la culture d’affaires." },
            { q: "Qu’as-tu entendu ?", say: "Is er korting mogelijk?", options: ["Une remise est-elle possible ?", "La livraison est-elle possible ?", "La commande est-elle prête ?"], answer: 0, explain: "Korting = remise." },
            { q: "Comment clore un e-mail professionnel ?", options: ["Doei!", "Met vriendelijke groet,", "Tot morgen!"], answer: 1, explain: "Cordialement." },
            { q: "« De levertijd » désigne…", options: ["le délai de livraison", "le lieu de livraison", "le livreur"], answer: 0, explain: "Leveren = livrer, tijd = temps." },
          ],
        },
        {
          type: "type",
          title: "Rédige",
          instruction: "Traduis en néerlandais professionnel.",
          items: [
            { prompt: "Vous trouverez le devis en pièce jointe.", answer: ["in de bijlage vindt u de offerte", "bijgaand vindt u de offerte", "in bijlage vindt u de offerte"] },
            { prompt: "Cordialement", answer: ["met vriendelijke groet", "met vriendelijke groeten"] },
            { prompt: "Quelle est la commande minimum ?", answer: ["wat is de minimale bestelling", "wat is de minimumbestelling"] },
            { prompt: "Pouvez-vous le confirmer par écrit ?", answer: ["kunt u dat schriftelijk bevestigen", "kunt u het schriftelijk bevestigen"] },
          ],
        },
        {
          type: "case",
          title: "La prospection en Flandre",
          story:
            "Noa prépare un e-mail pour une chaîne d’animaleries à Anvers. Il veut se présenter, proposer un échantillon gratuit et demander un rendez-vous, en néerlandais simple.",
          question: "Quel message est le plus adapté ?",
          options: [
            "« Hoi! Koop mijn producten, ze zijn super. Doei! »",
            "« Geachte heer Peeters, ik schrijf u omdat wij accessoires voor huisdieren verkopen. Graag stuur ik u een gratis monster. Kunnen we een afspraak maken? Met vriendelijke groet, Noa »",
            "Écrire en français sans un mot de néerlandais",
          ],
          answer: 1,
          explain:
            "Formule d’ouverture, objet clair, offre concrète (gratis monster), demande de rendez-vous et clôture : court, direct et poli, ce qui convient bien aux interlocuteurs néerlandophones. Pour un vrai envoi commercial, une relecture par un natif reste recommandée.",
        },
        {
          type: "fiche",
          title: "Le néerlandais du travail",
          points: [
            "E-mail : <b>Geachte heer / mevrouw…</b> ou <b>Beste…</b>, <b>In de bijlage vindt u…</b>, <b>Met vriendelijke groet</b>.",
            "Vocabulaire : <b>offerte, factuur, bestelling, levertijd, korting, monster</b> ; virgule décimale.",
            "Culture : <b>franchise</b> et <b>ponctualité</b> aux Pays-Bas, un peu plus de formes en Flandre.",
            "Négocier : <b>Kunt u iets aan de prijs doen?</b>, <b>korting bij … stuks</b>, <b>schriftelijk bevestigen</b>.",
          ],
          retenir: "Avec les Néerlandais, sois clair et précis : la franchise est une forme de respect.",
        },
      ],
    },
  ],
});
