/* ============================================================
   COURS : Comprendre la politique — institutions et idées
   Faculté de Sciences politiques · 8 séances de 15 à 20 min
   Notions de base, Ve République, Parlement et fabrication de
   la loi, élections, collectivités et Union européenne,
   grandes familles d'idées (présentées de façon équilibrée),
   partis, médias et opinion, citoyenneté et participation.
   Repères vérifiés au 1er novembre 2026 : présidentielle
   prévue les 18 avril et 2 mai 2027 ; Parlement européen de
   720 membres (81 pour la France) depuis 2024. À METTRE À
   JOUR. Le cours décrit les institutions et les idées sans
   prendre parti.
   ============================================================ */
AGORA.registerCourse({
  id: "politique-bases",
  faculty: "politique",
  title: "Comprendre la politique — institutions et idées",
  subtitle: "Comment la France est gouvernée, comment on vote, et les grandes familles d’idées",
  color: "#7a3b6e",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour comprendre la vie politique sans jargon : les notions de base (pouvoir, démocratie, séparation des pouvoirs), la Ve République, le Parlement et la fabrication de la loi, les élections et les modes de scrutin, les communes, départements, régions et l’Union européenne, les grandes familles d’idées politiques présentées de façon équilibrée, le rôle des partis, des médias et des sondages, et enfin les moyens de participer. Le cours explique ; il ne dit pas pour qui ou quoi penser.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Pouvoir, État et démocratie",
      minutes: 16,
      objectives: ["Définir les notions de base de la science politique", "Distinguer les grands types de régimes"],
      steps: [
        {
          type: "lesson",
          title: "Les mots de la politique",
          slides: [
            {
              title: "Pouvoir, État, nation",
              body:
                "<ul><li>La <b>politique</b> désigne l’organisation de la vie collective : qui décide, comment, et pour quels objectifs.</li><li>L’<b>État</b> exerce l’autorité sur un territoire et une population ; selon le sociologue Max Weber, il revendique le <b>monopole de la violence physique légitime</b> (police, armée, justice).</li><li>La <b>nation</b> est une communauté qui se reconnaît une histoire, une culture ou un projet communs.</li><li>La <b>souveraineté</b> : le pouvoir suprême de décider. En France, « la souveraineté nationale appartient au peuple » (Constitution, article 3).</li></ul>",
            },
            {
              title: "La démocratie",
              body:
                "<ul><li><b>Démocratie</b> : du grec <i>dêmos</i> (peuple) et <i>kratos</i> (pouvoir).</li><li><b>Directe</b> : les citoyens décident eux-mêmes (Athènes antique, référendums, certains cantons suisses).</li><li><b>Représentative</b> : les citoyens élisent des représentants qui décident en leur nom (le principe général en France).</li><li>Ingrédients d’une démocratie libérale : élections libres et régulières, <b>pluralisme</b> des partis, libertés (expression, presse, réunion), <b>État de droit</b> (les gouvernants sont eux aussi soumis au droit), juges indépendants, protection des minorités.</li></ul>",
            },
            {
              title: "La séparation des pouvoirs",
              body:
                "<p>Théorisée par <b>Montesquieu</b> (<i>De l’esprit des lois</i>, 1748) : « il faut que, par la disposition des choses, le pouvoir arrête le pouvoir ».</p><table class='t'><tr><th>Pouvoir</th><th>Rôle</th><th>En France</th></tr><tr><td><b>Législatif</b></td><td>Voter les lois, contrôler le gouvernement</td><td>Parlement (Assemblée nationale, Sénat)</td></tr><tr><td><b>Exécutif</b></td><td>Appliquer les lois, gouverner</td><td>Président, Premier ministre, gouvernement</td></tr><tr><td><b>Judiciaire</b></td><td>Juger, trancher les litiges</td><td>Tribunaux, cours d’appel, Cour de cassation, Conseil d’État</td></tr></table>",
            },
            {
              title: "Les types de régimes",
              body:
                "<ul><li><b>Régime parlementaire</b> : le gouvernement est issu du Parlement et responsable devant lui (Royaume-Uni, Allemagne, Italie).</li><li><b>Régime présidentiel</b> : séparation stricte, le président est élu et le Parlement ne peut pas renverser le gouvernement (États-Unis).</li><li><b>Régime semi-présidentiel</b> : président élu au suffrage universel avec des pouvoirs importants, et gouvernement responsable devant le Parlement : c’est le cas de la <b>France</b>.</li><li><b>Régimes autoritaires</b> : élections absentes ou non libres, opposition et presse muselées, pas de séparation réelle des pouvoirs.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel pouvoir ?",
          instruction: "Quel pouvoir exerce chaque institution ou action ?",
          categories: ["Législatif", "Exécutif", "Judiciaire"],
          items: [
            { text: "L’Assemblée nationale vote une loi", cat: 0, why: "Pouvoir législatif." },
            { text: "Le gouvernement publie un décret d’application", cat: 1, why: "Il met en œuvre la loi." },
            { text: "Un tribunal condamne une entreprise", cat: 2, why: "Pouvoir judiciaire." },
            { text: "Le Sénat amende un projet de loi", cat: 0, why: "Travail législatif." },
            { text: "Le préfet applique une décision du gouvernement", cat: 1, why: "Le préfet représente l’État exécutif." },
            { text: "La Cour de cassation rend un arrêt", cat: 2, why: "Plus haute juridiction judiciaire." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "État (Max Weber)", back: "Monopole de la violence physique légitime sur un territoire" },
            { front: "Démocratie représentative", back: "Les citoyens élisent des représentants qui décident en leur nom" },
            { front: "État de droit", back: "Les gouvernants sont eux aussi soumis au droit et aux juges" },
            { front: "Montesquieu", back: "« Le pouvoir arrête le pouvoir » : séparation des pouvoirs" },
            { front: "Régime semi-présidentiel", back: "Président élu au suffrage universel + gouvernement responsable devant le Parlement : la France" },
            { front: "Pluralisme", back: "Existence de plusieurs partis et opinions libres de s’exprimer" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qui a théorisé la séparation des pouvoirs ?", options: ["Rousseau", "Montesquieu", "Voltaire"], answer: 1, explain: "De l’esprit des lois, 1748." },
            { q: "Les États-Unis sont un régime…", options: ["présidentiel", "parlementaire", "semi-présidentiel"], answer: 0, explain: "Le Congrès ne peut pas renverser le président par un vote de confiance." },
            { q: "Un référendum est un outil de démocratie…", options: ["directe", "représentative", "autoritaire"], answer: 0, explain: "Les citoyens décident eux-mêmes." },
            { q: "Quel élément distingue une démocratie d’un régime autoritaire ?", options: ["L’existence d’un drapeau", "Des élections libres avec pluralisme et une presse libre", "Un président"], answer: 1, explain: "Beaucoup de régimes autoritaires organisent des élections non libres." },
          ],
        },
        {
          type: "case",
          title: "Les élections sans choix",
          story:
            "Dans un pays imaginaire, des élections ont lieu tous les 5 ans. Le président sortant obtient 98 % des voix. Les opposants sont en prison, les journaux indépendants ont été fermés et les juges sont nommés et révoqués par le président.",
          question: "Ce pays est-il une démocratie ?",
          options: [
            "Oui, puisqu’il y a des élections",
            "Non : sans pluralisme, sans presse libre, sans juges indépendants ni opposition libre, les élections ne permettent pas un vrai choix ; c’est un régime autoritaire",
            "Oui, si la participation est forte",
          ],
          answer: 1,
          explain:
            "L’élection est nécessaire mais pas suffisante : la démocratie suppose aussi des libertés, le pluralisme et l’État de droit.",
        },
        {
          type: "fiche",
          title: "Notions de base",
          points: [
            "<b>État</b> (monopole de la violence légitime), <b>nation</b>, <b>souveraineté</b> (au peuple en France).",
            "Démocratie <b>directe</b> / <b>représentative</b> ; pluralisme, libertés, <b>État de droit</b>.",
            "<b>Séparation des pouvoirs</b> (Montesquieu) : législatif, exécutif, judiciaire.",
            "Régimes : <b>parlementaire</b>, <b>présidentiel</b>, <b>semi-présidentiel</b> (France), autoritaire.",
          ],
          retenir: "Une démocratie, ce n’est pas seulement voter : c’est aussi pouvoir critiquer, s’informer librement et être protégé par des juges indépendants.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "La Ve République : Président et gouvernement",
      minutes: 17,
      objectives: ["Connaître le rôle du Président et du gouvernement", "Comprendre la cohabitation et les pouvoirs exceptionnels"],
      steps: [
        {
          type: "lesson",
          title: "L’exécutif à deux têtes",
          slides: [
            {
              title: "La Constitution de 1958",
              body:
                "<ul><li>Adoptée par référendum en <b>1958</b>, à l’initiative du général de <b>Gaulle</b>, pour sortir de l’instabilité de la IVe République (gouvernements très courts).</li><li>Elle renforce l’<b>exécutif</b>, en particulier le Président.</li><li>Elle a été <b>révisée</b> de nombreuses fois : élection du Président au suffrage universel direct (1962), quinquennat (2000), grande réforme de 2008 (limitation à deux mandats consécutifs, question prioritaire de constitutionnalité…).</li><li>Le <b>préambule</b> renvoie à la Déclaration des droits de l’homme de 1789, au préambule de 1946 et à la Charte de l’environnement de 2004.</li></ul>",
            },
            {
              title: "Le Président de la République",
              body:
                "<ul><li>Élu au <b>suffrage universel direct</b> pour <b>5 ans</b> ; <b>deux mandats consécutifs</b> au maximum.</li><li>Prochaine élection présidentielle prévue les <b>18 avril et 2 mai 2027</b>.</li><li>Il <b>nomme le Premier ministre</b> (et, sur sa proposition, les ministres).</li><li>Il peut <b>dissoudre</b> l’Assemblée nationale (pas plus d’une fois par an), soumettre certains textes au <b>référendum</b>, saisir le Conseil constitutionnel.</li><li>Il est chef des armées, négocie les traités, promulgue les lois.</li><li>En cas de menace grave, l’article <b>16</b> lui donne des pouvoirs exceptionnels (utilisé une seule fois, en 1961).</li></ul>",
            },
            {
              title: "Le Premier ministre et le gouvernement",
              body:
                "<ul><li>Le gouvernement « <b>détermine et conduit la politique de la nation</b> » (article 20).</li><li>Le <b>Premier ministre</b> dirige l’action du gouvernement, coordonne les ministres, exerce le pouvoir réglementaire (décrets).</li><li>Le gouvernement est <b>responsable devant l’Assemblée nationale</b> : elle peut le renverser par une <b>motion de censure</b> votée à la majorité absolue des députés.</li><li>Il peut engager sa responsabilité sur un texte (article <b>49.3</b>) : le texte est adopté sans vote, sauf si une motion de censure est votée. Depuis 2008, cet outil est limité aux textes budgétaires et à un autre texte par session.</li></ul>",
            },
            {
              title: "La cohabitation et les majorités",
              body:
                "<ul><li>Quand le Président dispose d’une majorité à l’Assemblée, il domine la vie politique.</li><li>Quand la majorité de l’Assemblée est opposée au Président, il doit nommer un Premier ministre de cette majorité : c’est la <b>cohabitation</b> (1986-1988, 1993-1995, 1997-2002). Le Premier ministre gouverne alors l’essentiel de la politique intérieure.</li><li>Sans majorité absolue claire à l’Assemblée, le gouvernement doit chercher des compromis texte par texte, et le risque de censure augmente.</li><li>Le quinquennat et le calendrier (législatives juste après la présidentielle) ont été conçus pour rendre la cohabitation plus rare.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Président ou gouvernement ?",
          instruction: "Qui détient chaque pouvoir ?",
          categories: ["Président de la République", "Premier ministre / gouvernement"],
          items: [
            { text: "Dissoudre l’Assemblée nationale", cat: 0, why: "Article 12." },
            { text: "Déterminer et conduire la politique de la nation", cat: 1, why: "Article 20." },
            { text: "Nommer le Premier ministre", cat: 0, why: "Article 8." },
            { text: "Engager sa responsabilité sur un texte (49.3)", cat: 1, why: "Le Premier ministre, après délibération du Conseil des ministres." },
            { text: "Être chef des armées", cat: 0, why: "Article 15." },
            { text: "Prendre des décrets d’application des lois", cat: 1, why: "Pouvoir réglementaire du Premier ministre." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Constitution de la Ve République", back: "1958, adoptée par référendum, à l’initiative de De Gaulle" },
            { front: "Mandat présidentiel", back: "5 ans, suffrage universel direct, 2 mandats consécutifs max" },
            { front: "Présidentielle 2027", back: "Prévue les 18 avril et 2 mai 2027" },
            { front: "Motion de censure", back: "L’Assemblée renverse le gouvernement à la majorité absolue des députés" },
            { front: "Article 49.3", back: "Texte adopté sans vote sauf censure ; limité depuis 2008" },
            { front: "Cohabitation", back: "Président et majorité de l’Assemblée de bords opposés" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Depuis quand le Président est-il élu au suffrage universel direct ?", options: ["1958", "1962", "2000"], answer: 1, explain: "Révision par référendum en 1962." },
            { q: "Qui peut renverser le gouvernement ?", options: ["Le Sénat", "L’Assemblée nationale, par une motion de censure", "Le Conseil constitutionnel"], answer: 1, explain: "Le gouvernement est responsable devant l’Assemblée." },
            { q: "Combien de mandats présidentiels consécutifs au maximum ?", options: ["1", "2", "Illimité"], answer: 1, explain: "Depuis la révision de 2008." },
            { q: "Qu’est-ce que la cohabitation ?", options: ["Un gouvernement d’union nationale", "Un Président et une majorité de l’Assemblée de bords opposés", "Deux présidents en même temps"], answer: 1, explain: "Trois cohabitations entre 1986 et 2002." },
          ],
        },
        {
          type: "case",
          title: "La dissolution",
          story:
            "Une élève demande : « Si le Président dissout l’Assemblée, est-ce qu’il quitte aussi son poste ? »",
          question: "Que lui répondre ?",
          options: [
            "Oui, une dissolution entraîne une nouvelle présidentielle",
            "Non : la dissolution provoque de nouvelles élections législatives (dans les 20 à 40 jours), mais le Président reste en fonction ; une nouvelle dissolution est impossible pendant un an après ces élections",
            "La dissolution supprime définitivement l’Assemblée",
          ],
          answer: 1,
          explain:
            "La dissolution permet de redonner la parole aux électeurs pour choisir les députés ; elle ne touche ni le mandat du Président ni le Sénat.",
        },
        {
          type: "fiche",
          title: "L’exécutif",
          points: [
            "Constitution de <b>1958</b> (De Gaulle), révisée : élection directe (1962), quinquennat (2000), réforme de 2008.",
            "<b>Président</b> : 5 ans, 2 mandats consécutifs max, nomme le PM, <b>dissolution</b>, référendum, chef des armées, article 16 ; présidentielle les <b>18 avril et 2 mai 2027</b>.",
            "<b>Gouvernement</b> : conduit la politique de la nation, responsable devant l’Assemblée (<b>censure</b>, <b>49.3</b>).",
            "<b>Cohabitation</b> quand Président et majorité s’opposent.",
          ],
          retenir: "En France, le Président est élu par le peuple, mais le gouvernement doit garder la confiance de l’Assemblée.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Le Parlement et la fabrication de la loi",
      minutes: 17,
      objectives: ["Connaître l’Assemblée nationale et le Sénat", "Suivre le parcours d’une loi et le contrôle de constitutionnalité"],
      steps: [
        {
          type: "lesson",
          title: "Faire la loi",
          slides: [
            {
              title: "Deux chambres",
              body:
                "<table class='t'><tr><th></th><th>Assemblée nationale</th><th>Sénat</th></tr><tr><td>Membres</td><td><b>577 députés</b></td><td><b>348 sénateurs</b></td></tr><tr><td>Élection</td><td>Suffrage universel <b>direct</b></td><td>Suffrage universel <b>indirect</b> (environ 160 000 grands électeurs, surtout des élus locaux)</td></tr><tr><td>Mandat</td><td>5 ans</td><td>6 ans, renouvelé par moitié tous les 3 ans</td></tr><tr><td>Particularité</td><td>Peut renverser le gouvernement ; a le dernier mot en cas de désaccord</td><td>Représente les collectivités territoriales ; ne peut pas être dissous</td></tr></table>",
            },
            {
              title: "Le parcours d’une loi",
              body:
                "<ol><li><b>Dépôt</b> : un <b>projet de loi</b> (venant du gouvernement) ou une <b>proposition de loi</b> (venant de parlementaires).</li><li>Examen en <b>commission</b>, puis en <b>séance publique</b> : discussion et vote d’<b>amendements</b>.</li><li><b>Navette</b> : le texte passe d’une chambre à l’autre jusqu’à un texte identique.</li><li>En cas de désaccord : <b>commission mixte paritaire</b> (7 députés, 7 sénateurs) ; si l’échec persiste, l’Assemblée nationale peut avoir le <b>dernier mot</b>.</li><li>Contrôle éventuel du <b>Conseil constitutionnel</b>.</li><li><b>Promulgation</b> par le Président, publication au <b>Journal officiel</b>, puis décrets d’application.</li></ol>",
            },
            {
              title: "Contrôler le gouvernement",
              body:
                "<ul><li><b>Questions au gouvernement</b> : chaque semaine, les ministres répondent aux députés et sénateurs.</li><li><b>Commissions d’enquête</b> : elles peuvent auditionner sous serment.</li><li>Vote du <b>budget</b> (loi de finances) et du financement de la Sécurité sociale chaque automne.</li><li><b>Motion de censure</b> (Assemblée uniquement).</li><li>Évaluation des politiques publiques, avec l’appui de la Cour des comptes.</li></ul>",
            },
            {
              title: "Le Conseil constitutionnel",
              body:
                "<ul><li><b>9 membres</b> nommés pour 9 ans (3 par le Président de la République, 3 par le président de l’Assemblée, 3 par le président du Sénat).</li><li>Il vérifie que les lois respectent la <b>Constitution</b> et les droits fondamentaux. Une loi censurée ne peut pas être appliquée.</li><li>Saisine avant promulgation par le Président, le Premier ministre, les présidents des chambres ou <b>60 députés</b> ou <b>60 sénateurs</b>.</li><li>Depuis 2010, la <b>question prioritaire de constitutionnalité</b> (QPC) permet à tout justiciable, lors d’un procès, de contester une loi déjà en vigueur.</li><li>Il contrôle aussi la régularité des élections nationales.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Assemblée ou Sénat ?",
          instruction: "À quelle chambre correspond chaque caractéristique ?",
          categories: ["Assemblée nationale", "Sénat"],
          items: [
            { text: "577 membres élus au suffrage direct", cat: 0, why: "Les députés." },
            { text: "Élus par des grands électeurs", cat: 1, why: "Suffrage indirect." },
            { text: "Peut renverser le gouvernement", cat: 0, why: "Motion de censure." },
            { text: "Ne peut pas être dissous", cat: 1, why: "Seule l’Assemblée peut l’être." },
            { text: "Peut avoir le dernier mot en cas de désaccord", cat: 0, why: "Article 45." },
            { text: "Représente les collectivités territoriales", cat: 1, why: "Article 24." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Assemblée nationale", back: "577 députés, 5 ans, suffrage direct" },
            { front: "Sénat", back: "348 sénateurs, 6 ans, renouvelé par moitié, suffrage indirect" },
            { front: "Projet / proposition de loi", back: "Vient du gouvernement / de parlementaires" },
            { front: "Navette", back: "Allers-retours du texte entre les deux chambres" },
            { front: "Commission mixte paritaire", back: "7 députés + 7 sénateurs pour trouver un compromis" },
            { front: "QPC", back: "Tout justiciable peut contester une loi en vigueur lors d’un procès (depuis 2010)" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un texte déposé par le gouvernement s’appelle…", options: ["une proposition de loi", "un projet de loi", "un décret"], answer: 1, explain: "Proposition = parlementaires." },
            { q: "Combien de sénateurs ?", options: ["348", "577", "925"], answer: 0, explain: "577 + 348 = 925 parlementaires." },
            { q: "Combien de députés faut-il pour saisir le Conseil constitutionnel ?", options: ["10", "60", "289"], answer: 1, explain: "Ou 60 sénateurs." },
            { q: "Après le vote définitif, qui promulgue la loi ?", options: ["Le Premier ministre", "Le Président de la République", "Le président du Sénat"], answer: 1, explain: "Dans les 15 jours." },
          ],
        },
        {
          type: "case",
          title: "La loi censurée",
          story:
            "Une loi votée par le Parlement contient un article qui permet de perquisitionner un domicile sans aucun contrôle d’un juge. 60 députés saisissent le Conseil constitutionnel.",
          question: "Que peut-il se passer ?",
          options: [
            "Rien : une loi votée s’applique toujours",
            "Le Conseil constitutionnel peut censurer l’article s’il porte une atteinte disproportionnée aux libertés ; le reste de la loi peut être promulgué sans lui",
            "Le Conseil constitutionnel réécrit toute la loi",
          ],
          answer: 1,
          explain:
            "Le contrôle de constitutionnalité garantit que même la majorité parlementaire respecte les droits fondamentaux : c’est l’un des piliers de l’État de droit.",
        },
        {
          type: "fiche",
          title: "Parlement",
          points: [
            "<b>Assemblée</b> : 577 députés, 5 ans, direct ; <b>Sénat</b> : 348 sénateurs, 6 ans, indirect.",
            "Loi : projet / proposition → commission → séance → <b>navette</b> → <b>CMP</b> → dernier mot à l’Assemblée possible → promulgation → JO.",
            "Contrôle : questions, commissions d’enquête, budget, <b>censure</b>.",
            "<b>Conseil constitutionnel</b> : 9 membres ; saisine par 60 députés ou sénateurs ; <b>QPC</b> depuis 2010.",
          ],
          retenir: "La loi est votée par le Parlement, mais elle doit respecter la Constitution, garantie par le Conseil constitutionnel.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Les élections et le vote",
      minutes: 16,
      objectives: ["Connaître les différentes élections", "Comprendre les modes de scrutin et leurs effets"],
      steps: [
        {
          type: "lesson",
          title: "Voter en France",
          slides: [
            {
              title: "Qui vote, et comment",
              body:
                "<ul><li>Pour voter : être <b>Français</b>, avoir <b>18 ans</b>, jouir de ses droits civiques et être <b>inscrit</b> sur les listes électorales (automatiquement à 18 ans si recensé ; sinon, s’inscrire en mairie ou en ligne).</li><li>Les citoyens de l’Union européenne résidant en France peuvent voter aux élections <b>municipales</b> et <b>européennes</b>.</li><li>Le vote est <b>secret</b> (isoloir), <b>personnel</b> (procuration possible) et <b>non obligatoire</b> en France.</li><li>Le vote <b>blanc</b> est compté séparément, mais n’est pas pris en compte dans les suffrages exprimés.</li></ul>",
            },
            {
              title: "Les différentes élections",
              body:
                "<table class='t'><tr><th>Élection</th><th>On élit</th><th>Durée</th></tr><tr><td>Présidentielle</td><td>Le Président</td><td>5 ans</td></tr><tr><td>Législatives</td><td>Les députés</td><td>5 ans (sauf dissolution)</td></tr><tr><td>Municipales</td><td>Les conseillers municipaux, qui élisent le maire</td><td>6 ans</td></tr><tr><td>Départementales</td><td>Les conseillers départementaux</td><td>6 ans</td></tr><tr><td>Régionales</td><td>Les conseillers régionaux</td><td>6 ans</td></tr><tr><td>Européennes</td><td>Les députés européens (81 pour la France)</td><td>5 ans</td></tr><tr><td>Sénatoriales</td><td>Les sénateurs (par des grands électeurs)</td><td>6 ans</td></tr></table>",
            },
            {
              title: "Les modes de scrutin",
              body:
                "<ul><li><b>Scrutin majoritaire</b> : le ou les candidats arrivés en tête l’emportent. À deux tours en France pour la présidentielle et les législatives (circonscriptions). Avantage : des majorités plus nettes, un lien élu-territoire. Critique : les petits partis sont sous-représentés.</li><li><b>Scrutin proportionnel</b> : les sièges sont répartis selon le pourcentage de voix de chaque liste (européennes, régionales et municipales avec une prime majoritaire). Avantage : représentation fidèle. Critique : majorités plus difficiles, coalitions nécessaires.</li><li>Le choix du mode de scrutin est un débat politique récurrent.</li></ul>",
            },
            {
              title: "Participation et campagnes",
              body:
                "<ul><li>L’<b>abstention</b> varie beaucoup selon les élections : plus faible à la présidentielle, plus forte aux européennes ou aux élections locales.</li><li>Les dépenses de campagne sont <b>plafonnées</b> et contrôlées ; les dons des entreprises aux candidats et partis sont <b>interdits</b> ; les dons des particuliers sont plafonnés.</li><li>Pendant la campagne présidentielle officielle, l’<b>égalité du temps de parole</b> s’applique dans les médias audiovisuels.</li><li>Pour être candidat à la présidentielle, il faut recueillir <b>500 parrainages</b> d’élus, venant d’au moins 30 départements ou collectivités d’outre-mer.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Majoritaire ou proportionnel ?",
          instruction: "Quel mode de scrutin est principalement utilisé pour chaque élection en France ?",
          categories: ["Majoritaire à deux tours", "Proportionnel (listes)"],
          items: [
            { text: "Présidentielle", cat: 0, why: "Les deux premiers s’affrontent au second tour." },
            { text: "Législatives", cat: 0, why: "Par circonscription." },
            { text: "Européennes", cat: 1, why: "Listes nationales à la proportionnelle." },
            { text: "Régionales", cat: 1, why: "Proportionnelle avec prime majoritaire." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Conditions pour voter", back: "Français, 18 ans, droits civiques, inscrit sur les listes" },
            { front: "Citoyens de l’UE en France", back: "Votent aux municipales et aux européennes" },
            { front: "Vote blanc", back: "Compté à part, non inclus dans les suffrages exprimés" },
            { front: "Scrutin majoritaire", back: "Majorités nettes, petits partis sous-représentés" },
            { front: "Scrutin proportionnel", back: "Représentation fidèle, coalitions souvent nécessaires" },
            { front: "Parrainages présidentiels", back: "500 signatures d’élus d’au moins 30 départements ou collectivités d’outre-mer" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Le vote est-il obligatoire en France ?", options: ["Oui", "Non", "Seulement à la présidentielle"], answer: 1, explain: "Contrairement à la Belgique, par exemple." },
            { q: "Combien de temps dure le mandat d’un maire ?", options: ["5 ans", "6 ans", "7 ans"], answer: 1, explain: "Comme les conseillers municipaux." },
            { q: "Une entreprise peut-elle financer la campagne d’un candidat ?", options: ["Oui, sans limite", "Non, c’est interdit", "Oui, jusqu’à 10 000 €"], answer: 1, explain: "Seules les personnes physiques peuvent donner, avec un plafond." },
            { q: "Quel mode de scrutin favorise des majorités nettes ?", options: ["Le scrutin majoritaire", "La proportionnelle intégrale", "Le tirage au sort"], answer: 0, explain: "Au prix d’une représentation moins fidèle." },
          ],
        },
        {
          type: "case",
          title: "Voter à distance",
          story:
            "Karim sera en déplacement en Espagne le jour du premier tour de la présidentielle. Il pense qu’il ne pourra pas voter.",
          question: "Que peut-il faire ?",
          options: [
            "Rien, il perd son vote",
            "Donner une procuration à un autre électeur (démarche en ligne puis vérification d’identité auprès d’un commissariat, d’une gendarmerie ou d’un consulat), suffisamment à l’avance",
            "Voter par SMS",
          ],
          answer: 1,
          explain:
            "La procuration permet de voter en son absence. Le mandataire vote à sa place, selon ses consignes.",
        },
        {
          type: "fiche",
          title: "Élections",
          points: [
            "Voter : Français, <b>18 ans</b>, inscrit ; vote <b>secret</b>, <b>non obligatoire</b> ; procuration possible ; vote blanc compté à part.",
            "Élections : présidentielle et législatives (5 ans), municipales, départementales, régionales (6 ans), européennes (5 ans, <b>81</b> députés français), sénatoriales.",
            "<b>Majoritaire</b> (majorités nettes) vs <b>proportionnel</b> (représentation fidèle).",
            "Campagnes : dépenses plafonnées, <b>dons d’entreprises interdits</b>, <b>500 parrainages</b> pour la présidentielle.",
          ],
          retenir: "Le mode de scrutin n’est pas neutre : il influence le nombre de partis représentés et la formation des majorités.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Collectivités locales et Union européenne",
      minutes: 16,
      objectives: ["Savoir qui fait quoi entre commune, département, région et État", "Comprendre les institutions européennes"],
      steps: [
        {
          type: "lesson",
          title: "Du local à l’européen",
          slides: [
            {
              title: "Les collectivités territoriales",
              body:
                "<table class='t'><tr><th>Collectivité</th><th>Compétences principales</th></tr><tr><td><b>Commune</b> (près de 35 000)</td><td>État civil, écoles maternelles et élémentaires, urbanisme (permis de construire), voirie communale, police municipale</td></tr><tr><td><b>Intercommunalité</b></td><td>Déchets, eau, transports urbains, développement économique (zones d’activité)</td></tr><tr><td><b>Département</b> (101)</td><td>Action sociale (RSA, aide aux personnes âgées et handicapées, protection de l’enfance), collèges, routes départementales</td></tr><tr><td><b>Région</b> (18)</td><td>Développement économique, aides aux entreprises, lycées, formation professionnelle, trains régionaux</td></tr></table>",
            },
            {
              title: "L’État sur le territoire",
              body:
                "<ul><li>La France est un État <b>unitaire décentralisé</b> : les collectivités s’administrent librement, mais dans le cadre des lois nationales.</li><li>Le <b>préfet</b>, nommé par le gouvernement, représente l’État dans le département et la région : sécurité, contrôle de légalité des actes des collectivités, services de l’État.</li><li>Les grandes lois de <b>décentralisation</b> (1982-1983, 2003, 2015) ont transféré des compétences aux collectivités.</li><li>Pour une entreprise : la Région pour les aides au développement, l’intercommunalité pour l’implantation, la mairie pour l’urbanisme.</li></ul>",
            },
            {
              title: "Les institutions européennes",
              body:
                "<table class='t'><tr><th>Institution</th><th>Rôle</th></tr><tr><td><b>Commission européenne</b></td><td>Propose les lois européennes, veille à leur application, négocie les accords commerciaux</td></tr><tr><td><b>Parlement européen</b></td><td>720 députés élus pour 5 ans ; vote les lois et le budget avec le Conseil</td></tr><tr><td><b>Conseil de l’UE</b></td><td>Les ministres des 27 États ; vote les lois avec le Parlement</td></tr><tr><td><b>Conseil européen</b></td><td>Les chefs d’État et de gouvernement ; fixe les grandes orientations</td></tr><tr><td><b>Cour de justice de l’UE</b></td><td>Veille au respect du droit européen</td></tr><tr><td><b>BCE</b></td><td>Politique monétaire de la zone euro</td></tr></table>",
            },
            {
              title: "Règlements et directives",
              body:
                "<ul><li>Un <b>règlement</b> européen s’applique <b>directement</b> dans tous les pays (ex. le RGPD sur les données personnelles).</li><li>Une <b>directive</b> fixe un objectif que chaque pays doit <b>transposer</b> dans son droit national (ex. la directive sur la transparence salariale).</li><li>Une grande partie des règles qui concernent les entreprises (concurrence, sécurité des produits, étiquetage, commerce extérieur) est décidée au niveau européen.</li><li>Le débat sur le bon partage des compétences entre l’UE et les États (plus d’intégration ou plus de souveraineté nationale) traverse la vie politique de tous les pays membres.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Qui est compétent ?",
          instruction: "Quelle collectivité gère principalement chaque sujet ?",
          categories: ["Commune / intercommunalité", "Département", "Région"],
          items: [
            { text: "Délivrer un permis de construire", cat: 0, why: "Urbanisme local." },
            { text: "Verser le RSA", cat: 1, why: "Action sociale." },
            { text: "Construire un lycée", cat: 2, why: "Les lycées sont régionaux." },
            { text: "Collecter les déchets", cat: 0, why: "Souvent l’intercommunalité." },
            { text: "Aider une PME à investir", cat: 2, why: "Développement économique." },
            { text: "Entretenir un collège", cat: 1, why: "Les collèges sont départementaux." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "État unitaire décentralisé", back: "Collectivités libres de s’administrer dans le cadre des lois nationales" },
            { front: "Préfet", back: "Représentant de l’État ; contrôle la légalité des actes locaux" },
            { front: "Région", back: "Économie, lycées, formation professionnelle, trains régionaux" },
            { front: "Commission européenne", back: "Propose les lois européennes" },
            { front: "Parlement européen", back: "720 députés élus pour 5 ans" },
            { front: "Règlement / directive", back: "Applicable directement / à transposer dans le droit national" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Qui gère les collèges ?", options: ["La commune", "Le département", "La région"], answer: 1, explain: "Écoles : commune ; collèges : département ; lycées : région." },
            { q: "Quelle institution propose les lois européennes ?", options: ["La Commission européenne", "Le Parlement européen", "La BCE"], answer: 0, explain: "Le Parlement et le Conseil les votent." },
            { q: "Le RGPD est…", options: ["une directive à transposer", "un règlement directement applicable", "une loi française"], answer: 1, explain: "Il s’applique tel quel dans toute l’UE." },
            { q: "Qui représente l’État dans le département ?", options: ["Le président du conseil départemental", "Le préfet", "Le maire du chef-lieu"], answer: 1, explain: "Nommé par le gouvernement." },
          ],
        },
        {
          type: "case",
          title: "Le local de Caen",
          story:
            "Noa veut transformer un ancien entrepôt en local mixte (stockage, bureaux, studio). Il se demande à qui s’adresser pour les autorisations et les aides.",
          question: "Quelle répartition est la plus juste ?",
          options: [
            "Tout passe par l’Élysée",
            "La mairie (ou l’intercommunalité selon les cas) pour l’urbanisme et le changement de destination du bâtiment ; la Région (et ses agences) pour d’éventuelles aides au développement des entreprises ; la préfecture pour certaines autorisations relevant de l’État",
            "Seule l’Union européenne est compétente",
          ],
          answer: 1,
          explain:
            "Connaître le « mille-feuille » territorial permet de frapper à la bonne porte et de gagner du temps.",
        },
        {
          type: "fiche",
          title: "Local et européen",
          points: [
            "<b>Commune</b> (écoles, urbanisme), <b>intercommunalité</b> (déchets, transports, zones d’activité), <b>département</b> (social, collèges), <b>région</b> (économie, lycées, formation).",
            "État <b>unitaire décentralisé</b> ; <b>préfet</b> ; lois de décentralisation.",
            "UE : <b>Commission</b> propose, <b>Parlement</b> (720) et <b>Conseil</b> votent, Conseil européen oriente, CJUE, BCE.",
            "<b>Règlement</b> (direct) / <b>directive</b> (à transposer).",
          ],
          retenir: "Écoles à la commune, collèges au département, lycées à la région : chaque échelon a ses compétences.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Les grandes familles d’idées",
      minutes: 18,
      objectives: ["Comprendre l’origine du clivage gauche-droite", "Connaître les grandes idéologies et leurs arguments, de façon équilibrée"],
      steps: [
        {
          type: "lesson",
          title: "Les idées politiques",
          slides: [
            {
              title: "Gauche et droite",
              body:
                "<ul><li>L’origine est spatiale : en <b>1789</b>, à l’Assemblée constituante, les partisans d’un veto fort du roi se placent à droite du président de séance, leurs opposants à gauche.</li><li>Traditionnellement, la <b>gauche</b> met l’accent sur l’<b>égalité</b>, la redistribution, le rôle de l’État pour corriger les inégalités et le progrès social.</li><li>La <b>droite</b> met l’accent sur la <b>liberté</b> d’entreprendre, la responsabilité individuelle, l’ordre, l’autorité et la transmission des traditions.</li><li>Ce clivage reste utile mais <b>imparfait</b> : d’autres lignes de partage comptent (ouverture ou protection face à la mondialisation, Europe, écologie, rapport aux institutions).</li></ul>",
            },
            {
              title: "Libéralisme, socialisme, conservatisme",
              body:
                "<table class='t'><tr><th>Courant</th><th>Idées centrales</th><th>Critiques souvent formulées</th></tr><tr><td><b>Libéralisme</b></td><td>Libertés individuelles, marché, limitation du pouvoir de l’État ; versions politique et économique</td><td>Peut laisser se creuser les inégalités</td></tr><tr><td><b>Socialisme et social-démocratie</b></td><td>Égalité, protection sociale, services publics, rôle des syndicats ; la social-démocratie accepte l’économie de marché encadrée</td><td>Poids des impôts et de la dépense publique, risque pour la compétitivité</td></tr><tr><td><b>Conservatisme</b></td><td>Prudence face aux changements rapides, importance des traditions, de la famille, de l’ordre</td><td>Peut freiner des évolutions jugées nécessaires</td></tr></table>",
            },
            {
              title: "Écologie, souverainisme, populisme",
              body:
                "<ul><li><b>Écologie politique</b> : faire de la préservation de l’environnement et du climat une priorité qui oriente l’économie et les modes de vie. Ses défenseurs y voient une urgence ; ses critiques s’inquiètent du coût pour les ménages et les entreprises.</li><li><b>Souverainisme</b> et <b>nationalisme</b> : priorité à la nation, à la maîtrise des frontières et des décisions nationales face à l’UE et à la mondialisation. Ses défenseurs y voient la protection du peuple et de la démocratie nationale ; ses critiques redoutent le repli et le rejet de l’autre.</li><li><b>Populisme</b> : un style plus qu’une doctrine, qui oppose le « peuple » à des « élites » jugées déconnectées ; il existe des versions de gauche comme de droite. Le terme est parfois utilisé pour disqualifier un adversaire.</li></ul>",
            },
            {
              title: "Penser par soi-même",
              body:
                "<ul><li>Chaque famille politique part de <b>valeurs</b> (liberté, égalité, sécurité, solidarité, identité, environnement) et les hiérarchise différemment.</li><li>Beaucoup de débats portent aussi sur des <b>faits</b> (effets d’une mesure, chiffres) : distinguer ce qui relève des valeurs et ce qui relève des données vérifiables aide à mieux débattre.</li><li>Exercice utile : être capable de formuler <b>l’argument le plus solide</b> de la position avec laquelle on n’est pas d’accord.</li><li>Les programmes réels des partis empruntent souvent à plusieurs familles d’idées.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quelle valeur est mise en avant ?",
          instruction: "Quelle valeur centrale chaque argument met-il le plus en avant ?",
          categories: ["Égalité / solidarité", "Liberté / responsabilité", "Ordre / tradition"],
          items: [
            { text: "« Les plus aisés doivent contribuer davantage pour financer les services publics »", cat: 0, why: "Redistribution." },
            { text: "« Moins de réglementation permettra aux entrepreneurs de créer des emplois »", cat: 1, why: "Liberté d’entreprendre." },
            { text: "« Il faut préserver les institutions et les repères qui ont fait leurs preuves »", cat: 2, why: "Prudence, tradition." },
            { text: "« Chacun doit pouvoir choisir sa vie sans que l’État ne s’en mêle »", cat: 1, why: "Libertés individuelles." },
            { text: "« L’accès aux soins doit être le même pour tous, quels que soient les revenus »", cat: 0, why: "Égalité." },
            { text: "« L’autorité de l’État doit être respectée pour garantir la sécurité »", cat: 2, why: "Ordre." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Origine de gauche / droite", back: "1789 : place dans l’Assemblée selon la position sur le veto du roi" },
            { front: "Libéralisme", back: "Libertés individuelles, marché, État limité" },
            { front: "Social-démocratie", back: "Économie de marché encadrée, protection sociale, redistribution" },
            { front: "Conservatisme", back: "Prudence face au changement, traditions, ordre" },
            { front: "Populisme", back: "Style opposant « peuple » et « élites », à gauche comme à droite" },
            { front: "Débattre utilement", back: "Distinguer les valeurs des faits vérifiables" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "D’où viennent les termes « gauche » et « droite » ?", options: ["De la Révolution de 1789", "De la Ve République", "Des États-Unis"], answer: 0, explain: "Disposition des députés dans l’Assemblée constituante." },
            { q: "La social-démocratie…", options: ["rejette toute économie de marché", "accepte l’économie de marché tout en la régulant et en redistribuant", "refuse les impôts"], answer: 1, explain: "Différence avec le socialisme révolutionnaire." },
            { q: "Le populisme est surtout…", options: ["une doctrine économique précise", "un style politique opposant peuple et élites", "un parti unique"], answer: 1, explain: "Il existe sous différentes formes." },
            { q: "« Cette mesure créera 100 000 emplois » relève…", options: ["d’une valeur", "d’un fait vérifiable (ou d’une prévision à examiner)", "d’une opinion invérifiable"], answer: 1, explain: "On peut regarder les données et les études." },
          ],
        },
        {
          type: "case",
          title: "Le débat du dîner",
          story:
            "Lors d’un dîner, deux amis s’affrontent sur une hausse du salaire minimum. L’un parle de dignité et de pouvoir d’achat, l’autre de risque pour l’emploi dans les petites entreprises. Le ton monte.",
          question: "Comment rendre le débat plus utile ?",
          options: [
            "Décider qui a raison en criant plus fort",
            "Séparer les valeurs (justice sociale, liberté d’entreprendre) des faits (effets mesurés des hausses passées sur l’emploi et les revenus), chercher ce que disent les études, et reconnaître l’argument le plus solide de l’autre",
            "Éviter tout débat politique",
          ],
          answer: 1,
          explain:
            "Les désaccords politiques combinent souvent des valeurs différentes et des lectures différentes des faits : les distinguer apaise le débat et le rend plus éclairant.",
        },
        {
          type: "fiche",
          title: "Les idées",
          points: [
            "<b>Gauche / droite</b> : né en <b>1789</b> ; égalité et redistribution / liberté, responsabilité, ordre ; clivage utile mais imparfait.",
            "<b>Libéralisme</b>, <b>socialisme et social-démocratie</b>, <b>conservatisme</b> : idées et critiques.",
            "<b>Écologie politique</b>, <b>souverainisme</b>, <b>populisme</b> (style, de gauche comme de droite).",
            "Débattre : distinguer <b>valeurs</b> et <b>faits</b> ; formuler le meilleur argument adverse.",
          ],
          retenir: "Comprendre une idée politique, c’est être capable de l’expliquer comme le ferait l’un de ses défenseurs, même si l’on n’est pas d’accord.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Partis, médias et opinion",
      minutes: 16,
      objectives: ["Comprendre le rôle des partis et des groupes d’intérêt", "Lire un sondage et repérer la désinformation"],
      steps: [
        {
          type: "lesson",
          title: "La fabrique de l’opinion",
          slides: [
            {
              title: "Les partis politiques",
              body:
                "<ul><li>Selon la Constitution (article 4), les partis « concourent à l’expression du suffrage » et doivent respecter la démocratie et la souveraineté nationale.</li><li>Rôles : sélectionner des candidats, élaborer des programmes, mobiliser les électeurs, former des militants et des élus.</li><li>Financement : cotisations, dons de particuliers plafonnés, et <b>aide publique</b> calculée selon les résultats aux législatives et le nombre de parlementaires.</li><li>Le paysage partisan évolue : des partis naissent, fusionnent ou s’effacent, et les coalitions changent selon les élections.</li></ul>",
            },
            {
              title: "Les groupes d’intérêt",
              body:
                "<ul><li><b>Syndicats de salariés</b> et <b>organisations patronales</b> : ils négocient des accords et sont consultés sur les réformes sociales (dialogue social).</li><li><b>Associations</b>, ONG, collectifs citoyens : environnement, consommateurs, droits humains…</li><li><b>Représentants d’intérêts</b> (lobbying) : entreprises, fédérations professionnelles, associations qui cherchent à influencer les décisions publiques. En France, ils doivent s’inscrire sur un <b>répertoire public</b> tenu par la Haute Autorité pour la transparence de la vie publique (HATVP).</li><li>La HATVP contrôle aussi les déclarations de patrimoine et d’intérêts de nombreux élus.</li></ul>",
            },
            {
              title: "Lire un sondage",
              body:
                "<ul><li>Un sondage interroge un <b>échantillon</b> (souvent 1 000 personnes) censé représenter la population (méthode des quotas : âge, sexe, profession, région…).</li><li>Il comporte une <b>marge d’erreur</b> : avec 1 000 personnes, environ <b>±3 points</b> autour de 50 %. Un candidat à 24 % et un autre à 22 % sont donc souvent dans la marge.</li><li>Un sondage est une <b>photographie</b> à un instant, pas une prédiction.</li><li>Vérifier : qui l’a commandé, la taille de l’échantillon, les dates, la formulation exacte des questions. En France, la <b>Commission des sondages</b> contrôle les sondages électoraux.</li></ul>",
            },
            {
              title: "Médias et désinformation",
              body:
                "<ul><li>La <b>liberté de la presse</b> est protégée (loi de 1881), avec des limites : diffamation, injure, provocation à la haine.</li><li>Les <b>réseaux sociaux</b> sont devenus une source d’information majeure ; leurs algorithmes favorisent les contenus qui font réagir, et peuvent enfermer dans des « bulles ».</li><li>La <b>désinformation</b> : fausses informations, images sorties de leur contexte, contenus générés par intelligence artificielle, campagnes d’ingérence étrangère.</li><li>Réflexes : vérifier la source, la date, chercher l’information chez plusieurs médias, se méfier de ce qui provoque une émotion très forte, utiliser les rubriques de vérification des faits.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Article 4 de la Constitution", back: "Les partis concourent à l’expression du suffrage" },
            { front: "Financement public des partis", back: "Selon les résultats aux législatives et le nombre de parlementaires" },
            { front: "HATVP", back: "Répertoire des représentants d’intérêts, contrôle des déclarations des élus" },
            { front: "Marge d’erreur (1 000 personnes)", back: "Environ ±3 points autour de 50 %" },
            { front: "Sondage", back: "Une photographie à un instant, pas une prédiction" },
            { front: "Face à une info choc", back: "Vérifier la source, la date, croiser plusieurs médias" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un sondage de 1 000 personnes donne A à 26 % et B à 24 %. Que conclure ?", options: ["A gagnera forcément", "Les deux sont dans la marge d’erreur : on ne peut pas les départager", "B a perdu"], answer: 1, explain: "Environ ±3 points." },
            { q: "Où les lobbyistes doivent-ils s’enregistrer en France ?", options: ["Sur le répertoire de la HATVP", "À la mairie", "Nulle part"], answer: 0, explain: "Répertoire public des représentants d’intérêts." },
            { q: "Pourquoi les réseaux sociaux favorisent-ils certains contenus ?", options: ["Leurs algorithmes mettent en avant ce qui fait réagir", "Par tirage au sort", "Par décision du gouvernement"], answer: 0, explain: "D’où l’importance de diversifier ses sources." },
            { q: "Une vidéo choquante circule sans date ni source. Premier réflexe ?", options: ["La partager vite", "Vérifier son origine et chercher si des médias fiables en parlent", "La commenter"], answer: 1, explain: "Beaucoup d’images sont sorties de leur contexte." },
          ],
        },
        {
          type: "case",
          title: "La fausse citation",
          story:
            "Sofia voit passer sur un réseau social une image attribuant une phrase choquante à un responsable politique. Elle est partagée des milliers de fois. Aucun média ne la reprend.",
          question: "Que faire ?",
          options: [
            "La partager, puisque beaucoup de gens y croient",
            "Chercher la source originale (discours, interview, vidéo complète), vérifier auprès de médias reconnus et de rubriques de vérification ; ne pas la partager tant qu’elle n’est pas confirmée",
            "En déduire que tous les médias mentent",
          ],
          answer: 1,
          explain:
            "Les fausses citations sont l’une des formes les plus courantes de désinformation, quel que soit le camp visé. Le nombre de partages ne prouve rien.",
        },
        {
          type: "fiche",
          title: "Partis, médias, opinion",
          points: [
            "<b>Partis</b> (article 4) : candidats, programmes, mobilisation ; financement public selon les résultats.",
            "<b>Syndicats</b>, organisations patronales, associations, <b>lobbies</b> inscrits à la <b>HATVP</b>.",
            "<b>Sondages</b> : échantillon, quotas, <b>±3 points</b> pour 1 000 personnes, photographie et non prédiction.",
            "<b>Presse</b> libre (loi de 1881) ; réseaux sociaux et algorithmes ; réflexes contre la <b>désinformation</b>.",
          ],
          retenir: "Avant de croire ou de partager une information politique : qui le dit, quand, et qui d’autre le confirme ?",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Citoyenneté et participation",
      minutes: 15,
      objectives: ["Connaître ses droits et devoirs de citoyen", "Découvrir les moyens de participer au-delà du vote"],
      steps: [
        {
          type: "lesson",
          title: "Participer à la vie publique",
          slides: [
            {
              title: "Droits et devoirs",
              body:
                "<ul><li><b>Droits</b> : voter et être élu, libertés d’expression, de réunion, d’association, de manifestation, de conscience et de religion, égalité devant la loi.</li><li><b>Devoirs</b> : respecter la loi, payer ses impôts selon ses capacités, participer à la défense (journée défense et citoyenneté), être juré d’assises si l’on est tiré au sort, respecter les droits des autres.</li><li>La devise <b>« Liberté, Égalité, Fraternité »</b> et le principe de <b>laïcité</b> (loi de 1905 : liberté de conscience, neutralité de l’État) sont au cœur de la République.</li></ul>",
            },
            {
              title: "Agir au-delà du vote",
              body:
                "<ul><li><b>S’engager</b> dans une association, un syndicat, un parti, un conseil de quartier.</li><li><b>Manifester</b> : liberté fondamentale ; une manifestation sur la voie publique doit être <b>déclarée</b> en mairie ou en préfecture à l’avance.</li><li><b>Contacter ses élus</b> : maire, député, sénateur ; ils tiennent des permanences.</li><li>Participer aux <b>enquêtes publiques</b> et concertations (projets d’aménagement, d’urbanisme).</li><li>Se présenter soi-même aux élections, en commençant souvent par le conseil municipal.</li></ul>",
            },
            {
              title: "Pétitions et référendums",
              body:
                "<ul><li><b>Pétitions au Parlement</b> : sur le site de l’Assemblée nationale, une pétition qui dépasse <b>100 000 signatures</b> est mise en avant et confiée à un rapporteur ; au-delà de <b>500 000</b> signatures venant d’au moins 30 départements, la conférence des présidents peut décider d’un <b>débat en séance</b>. Le Sénat a son propre dispositif.</li><li><b>Référendum d’initiative partagée</b> (RIP) : il faut le soutien d’un cinquième des parlementaires puis d’un dixième des électeurs inscrits (près de 5 millions de signatures). Aucun n’a abouti à ce jour.</li><li><b>Conventions citoyennes</b> : des citoyens tirés au sort réfléchissent à une question (climat en 2019-2020, fin de vie en 2022-2023) et font des propositions.</li></ul>",
            },
            {
              title: "S’informer pour voter",
              body:
                "<ul><li>Lire les <b>programmes</b> directement, pas seulement les résumés.</li><li>Comparer les propositions sur les sujets qui comptent pour soi, et regarder leur <b>financement</b> et leur faisabilité.</li><li>Consulter des sources variées et des comparateurs neutres.</li><li>Regarder les débats, mais aussi le bilan et les votes passés des élus (consultables sur les sites de l’Assemblée et du Sénat).</li><li>Vérifier son inscription sur les listes électorales en ligne bien avant l’élection.</li></ul><p>Ce cours t’a donné les clés pour comprendre ; tes choix restent les tiens.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Droit ou devoir ?",
          instruction: "S’agit-il plutôt d’un droit ou d’un devoir du citoyen ?",
          categories: ["Droit", "Devoir"],
          items: [
            { text: "Créer une association", cat: 0, why: "Liberté d’association (loi de 1901)." },
            { text: "Payer ses impôts", cat: 1, why: "Contribution aux charges publiques." },
            { text: "Manifester (après déclaration)", cat: 0, why: "Liberté fondamentale." },
            { text: "Siéger comme juré d’assises si l’on est tiré au sort", cat: 1, why: "Obligation légale." },
            { text: "Se présenter à une élection", cat: 0, why: "Droit d’éligibilité." },
            { text: "Respecter la loi", cat: 1, why: "Fondement de la vie en société." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Laïcité (loi de 1905)", back: "Liberté de conscience et neutralité de l’État" },
            { front: "Manifestation", back: "Liberté fondamentale ; déclaration préalable en mairie ou préfecture" },
            { front: "Pétition à l’Assemblée", back: "100 000 signatures : rapporteur ; 500 000 (30 départements) : débat en séance possible" },
            { front: "RIP", back: "1/5 des parlementaires + 1/10 des électeurs inscrits" },
            { front: "Convention citoyenne", back: "Citoyens tirés au sort qui font des propositions" },
            { front: "Vérifier ses élus", back: "Votes et activité consultables sur les sites de l’Assemblée et du Sénat" },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Une pétition sur le site de l’Assemblée dépasse 500 000 signatures de 30 départements. Que peut-il se passer ?", options: ["La loi est automatiquement abrogée", "La conférence des présidents peut décider d’un débat en séance", "Un référendum est organisé"], answer: 1, explain: "Le débat n’entraîne pas forcément un vote." },
            { q: "Combien de signatures d’électeurs faut-il pour un RIP ?", options: ["100 000", "Un dixième des électeurs inscrits (près de 5 millions)", "1 million"], answer: 1, explain: "Après le soutien d’un cinquième des parlementaires." },
            { q: "Organiser une manifestation sur la voie publique nécessite…", options: ["une autorisation du Président", "une déclaration préalable en mairie ou préfecture", "rien du tout"], answer: 1, explain: "C’est une déclaration, pas une autorisation (sauf interdiction motivée)." },
            { q: "La laïcité signifie…", options: ["l’interdiction des religions", "la liberté de conscience et la neutralité de l’État", "une religion d’État"], answer: 1, explain: "Loi de séparation des Églises et de l’État, 1905." },
          ],
        },
        {
          type: "case",
          title: "Le projet de zone commerciale",
          story:
            "Un projet de zone commerciale est prévu près du quartier d’Hugo. Il a des avis partagés : emplois et commerces d’un côté, circulation et artificialisation des sols de l’autre. Il se sent impuissant.",
          question: "Quels moyens d’action a-t-il ?",
          options: [
            "Aucun, les décisions sont déjà prises",
            "Participer à l’enquête publique ou à la concertation, s’informer en mairie, contacter les élus, rejoindre ou créer une association de riverains, s’exprimer au conseil de quartier, et voter aux municipales en connaissant les positions des listes",
            "Bloquer le chantier par la force",
          ],
          answer: 1,
          explain:
            "La démocratie locale offre de nombreux leviers. Les décisions d’aménagement passent souvent par des procédures de consultation ouvertes à tous.",
        },
        {
          type: "fiche",
          title: "Citoyenneté",
          points: [
            "<b>Droits</b> (vote, libertés, égalité) et <b>devoirs</b> (loi, impôts, défense, jury) ; devise et <b>laïcité</b> (1905).",
            "Agir : <b>associations</b>, syndicats, partis, <b>manifestation déclarée</b>, élus, enquêtes publiques, candidature.",
            "<b>Pétitions</b> (100 000 / 500 000), <b>RIP</b> (1/5 des parlementaires + 1/10 des électeurs), <b>conventions citoyennes</b>.",
            "S’informer : programmes, financement, sources variées, votes des élus, inscription sur les listes.",
          ],
          retenir: "Le vote est le premier pouvoir du citoyen, mais pas le seul : s’informer, s’engager et s’exprimer comptent aussi.",
        },
      ],
    },
  ],
});
