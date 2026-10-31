/* ============================================================
   COURS : Finance d’entreprise — lire, piloter, financer
   École de Finance · 8 séances de 15 à 20 minutes
   Tous les calculs des exemples et des quiz sont vérifiés.
   Repères fiscaux 2026 : TVA 20/10/5,5/2,1 %, IS 15 % puis 25 %.
   ============================================================ */
AGORA.registerCourse({
  id: "finance-entreprise",
  faculty: "finance",
  title: "Finance d’entreprise — lire, piloter, financer",
  subtitle: "Comprendre les chiffres d’une entreprise et prendre de meilleures décisions",
  color: "#1f4f7a",
  level: "Débutant",
  minutesPerSession: "15–20 min",
  intro:
    "Huit séances pour parler la langue des chiffres : chiffre d’affaires, marge, bénéfice et trésorerie, compte de résultat et bilan, rentabilité d’un produit, besoin en fonds de roulement, financement, décisions d’investissement et valorisation d’une entreprise. Avec des calculs simples et des exemples tirés du commerce et de l’e-commerce.",
  sessions: [
    /* ======================================================= */
    {
      id: "s1",
      title: "Les mots de base de la finance",
      minutes: 17,
      objectives: ["Ne plus confondre chiffre d’affaires, marge, bénéfice et trésorerie", "Maîtriser HT, TTC et TVA"],
      steps: [
        {
          type: "lesson",
          title: "Les mots de base",
          slides: [
            {
              title: "Quatre chiffres à ne pas confondre",
              body:
                "<table class='t'><tr><th>Chiffre</th><th>Ce qu’il mesure</th></tr><tr><td><b>Chiffre d’affaires (CA)</b></td><td>Tout ce que tu as vendu (HT) sur la période</td></tr><tr><td><b>Marge</b></td><td>Ce qu’il reste après avoir retiré le coût d’achat (ou de production) de ce que tu as vendu</td></tr><tr><td><b>Bénéfice (résultat)</b></td><td>Ce qu’il reste après avoir retiré <b>toutes</b> les charges : achats, pub, loyer, salaires, impôts…</td></tr><tr><td><b>Trésorerie</b></td><td>L’argent réellement disponible sur les comptes bancaires</td></tr></table><p>Un gros chiffre d’affaires ne dit rien de la santé d’une entreprise : on peut faire 1 million d’euros de CA et perdre de l’argent.</p>",
            },
            {
              title: "HT, TTC et TVA",
              body:
                "<p>La <b>TVA</b> est un impôt payé par le consommateur final. L’entreprise la <b>collecte</b> pour l’État : elle ne lui appartient pas.</p><ul><li><b>HT</b> (hors taxes) : le prix qui revient à l’entreprise.</li><li><b>TTC</b> (toutes taxes comprises) : le prix payé par le client.</li><li>TTC = HT × (1 + taux). HT = TTC ÷ (1 + taux).</li></ul><div class='tiers'><div><b>20 %</b><span>taux normal (la plupart des produits)</span></div><div><b>10 %</b><span>restauration, travaux, transport…</span></div><div><b>5,5 % et 2,1 %</b><span>alimentation, livres, énergie / médicaments remboursés, presse</span></div></div>",
              example: "Tu vends une palette de cils magnétiques à 30 € TTC (TVA 20 %). Le prix HT est 30 ÷ 1,2 = 25 €. Les 5 € de TVA reviennent à l’État.",
            },
            {
              title: "La TVA qu’on reverse",
              body:
                "<p>Chaque mois (ou trimestre), l’entreprise calcule :</p><p><b>TVA à payer = TVA collectée sur les ventes − TVA déductible sur les achats</b></p><p>Exemple : tu as collecté 5 000 € de TVA sur tes ventes, et payé 2 000 € de TVA sur tes achats de marchandises et ta pub. Tu reverses <b>3 000 €</b> à l’État.</p><p>En <b>franchise de TVA</b> (micro-entreprise sous 85 000 € de ventes ou 37 500 € de services), tu ne factures pas de TVA, mais tu ne récupères pas non plus celle de tes achats.</p>",
            },
            {
              title: "Bénéfice n’est pas trésorerie",
              body:
                "<p>Ton entreprise peut être <b>bénéficiaire</b> et pourtant <b>à court d’argent</b>. Pourquoi ?</p><ul><li>tes clients paient à 60 jours, mais toi tu paies tes fournisseurs à la commande ;</li><li>tu as acheté beaucoup de stock qui n’est pas encore vendu ;</li><li>tu rembourses un emprunt (le remboursement du capital n’est pas une charge) ;</li><li>la TVA collectée dort sur ton compte mais n’est pas à toi.</li></ul><p>On dit souvent : <b>« Le bénéfice est une opinion, la trésorerie est un fait. »</b> La majorité des faillites viennent d’un manque de trésorerie, pas d’un manque de bénéfice.</p>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Chiffre d’affaires", back: "Total des ventes HT sur une période." },
            { front: "Marge", back: "Prix de vente HT − coût d’achat (ou de production) HT." },
            { front: "Bénéfice", back: "Ce qui reste après toutes les charges, impôts compris." },
            { front: "Trésorerie", back: "L’argent réellement disponible en banque." },
            { front: "Passer du TTC au HT", back: "HT = TTC ÷ (1 + taux). À 20 % : TTC ÷ 1,2." },
            { front: "TVA à reverser", back: "TVA collectée sur les ventes − TVA déductible sur les achats." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un produit est vendu 60 € TTC avec une TVA à 20 %. Quel est son prix HT ?", options: ["48 €", "50 €", "52 €"], answer: 1, explain: "60 ÷ 1,2 = 50 €. Erreur fréquente : retirer 20 % du TTC (60 × 0,8 = 48 €), ce qui est faux." },
            { q: "Ce mois-ci, tu as collecté 4 200 € de TVA et payé 1 500 € de TVA sur tes achats. Combien reverses-tu ?", options: ["4 200 €", "2 700 €", "5 700 €"], answer: 1, explain: "4 200 − 1 500 = 2 700 €." },
            { q: "Ton entreprise affiche 40 000 € de bénéfice mais n’arrive pas à payer les salaires. C’est possible ?", options: ["Non, c’est une erreur comptable", "Oui, le bénéfice n’est pas de la trésorerie"], answer: 1, explain: "Stocks, délais clients, remboursements d’emprunt : le bénéfice peut être immobilisé ailleurs que sur le compte." },
            { q: "Quel chiffre dit le plus sur la rentabilité d’une entreprise ?", options: ["Le chiffre d’affaires", "Le bénéfice", "Le nombre de commandes"], answer: 1, explain: "Le CA mesure l’activité, le bénéfice mesure ce qu’elle rapporte réellement." },
          ],
        },
        {
          type: "case",
          title: "Le mois record",
          story:
            "En novembre, la boutique en ligne d’Ilyes fait un record : <b>48 000 € TTC</b> de ventes (TVA 20 %). Il se dit qu’il peut enfin se verser 15 000 €. Ses marchandises lui ont coûté 14 000 € HT, la pub 9 000 € HT, la logistique et les frais de paiement 5 000 € HT.",
          question: "Combien a-t-il réellement dégagé avant impôts et sans compter sa rémunération ?",
          options: ["48 000 €", "12 000 €", "20 000 €"],
          answer: 1,
          explain:
            "CA HT = 48 000 ÷ 1,2 = 40 000 €. Charges = 14 000 + 9 000 + 5 000 = 28 000 €. Il reste 12 000 €, avant impôts. Se verser 15 000 € reviendrait à puiser dans l’argent de la TVA et des futures commandes.",
        },
        {
          type: "fiche",
          title: "Les mots de base",
          points: [
            "<b>CA</b> = ventes HT ; <b>marge</b> = vente − coût d’achat ; <b>bénéfice</b> = après toutes les charges ; <b>trésorerie</b> = argent en banque.",
            "HT = TTC ÷ (1 + taux). À 20 % : on divise par <b>1,2</b>, on ne retire pas 20 %.",
            "Taux 2026 : <b>20 %</b>, <b>10 %</b>, <b>5,5 %</b>, <b>2,1 %</b>.",
            "TVA à reverser = collectée − déductible. La TVA n’est jamais ton argent.",
            "<b>Bénéfice ≠ trésorerie</b> : délais clients, stock, emprunts, TVA.",
          ],
          retenir: "Raisonne toujours en HT, et regarde ta trésorerie avant ton bénéfice.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s2",
      title: "Lire un compte de résultat",
      minutes: 18,
      objectives: ["Comprendre comment se construit le résultat", "Calculer les soldes clés : marge, valeur ajoutée, EBE"],
      steps: [
        {
          type: "lesson",
          title: "Le compte de résultat",
          slides: [
            {
              title: "Le film de l’année",
              body:
                "<p>Le <b>compte de résultat</b> raconte ce qui s’est passé pendant l’exercice (souvent un an) :</p><ul><li>les <b>produits</b> : ce que l’entreprise a gagné (ventes principalement) ;</li><li>les <b>charges</b> : ce qu’elle a consommé (achats, pub, loyer, salaires, impôts…).</li></ul><p><b>Produits − charges = résultat</b> : bénéfice s’il est positif, perte s’il est négatif.</p><p>On le découpe en étapes, les <b>soldes intermédiaires de gestion</b>, pour voir <b>où</b> l’argent se gagne ou se perd.</p>",
            },
            {
              title: "L’escalier du résultat",
              body:
                "<p>Exemple : une boutique de cosmétiques sur un an.</p><table class='t'><tr><td>Ventes de marchandises</td><td>200 000 €</td></tr><tr><td>− Coût d’achat des marchandises vendues</td><td>80 000 €</td></tr><tr><td><b>= Marge commerciale</b></td><td><b>120 000 €</b></td></tr><tr><td>− Charges externes (pub, loyer, transport, logiciels…)</td><td>50 000 €</td></tr><tr><td><b>= Valeur ajoutée</b></td><td><b>70 000 €</b></td></tr><tr><td>− Impôts et taxes (hors IS)</td><td>2 000 €</td></tr><tr><td>− Salaires et charges sociales</td><td>40 000 €</td></tr><tr><td><b>= Excédent brut d’exploitation (EBE)</b></td><td><b>28 000 €</b></td></tr><tr><td>− Dotations aux amortissements</td><td>5 000 €</td></tr><tr><td><b>= Résultat d’exploitation</b></td><td><b>23 000 €</b></td></tr><tr><td>− Charges financières (intérêts)</td><td>3 000 €</td></tr><tr><td><b>= Résultat courant avant impôt</b></td><td><b>20 000 €</b></td></tr><tr><td>− Impôt sur les sociétés (15 %)</td><td>3 000 €</td></tr><tr><td><b>= Résultat net</b></td><td><b>17 000 €</b></td></tr></table>",
            },
            {
              title: "L’EBE, le chiffre roi",
              body:
                "<p>L’<b>excédent brut d’exploitation</b> (EBE, en anglais <i>EBITDA</i> au sens large) mesure ce que l’activité génère <b>avant</b> les amortissements, les intérêts et l’impôt.</p><ul><li>Il montre si le <b>métier</b> est rentable, indépendamment de la façon dont l’entreprise est financée.</li><li>C’est le chiffre que regardent les banquiers et les acheteurs d’entreprise (séance 8).</li><li>Un EBE négatif durablement = le modèle économique ne fonctionne pas.</li></ul>",
            },
            {
              title: "L’amortissement",
              body:
                "<p>Quand tu achètes un bien qui va servir plusieurs années (machine, ordinateur, véhicule), tu ne le passes pas en charge d’un coup : tu l’<b>amortis</b>, c’est-à-dire que tu étales son coût sur sa durée d’utilisation.</p><p>Exemple : une machine à graver à 9 000 € HT utilisée 3 ans → <b>3 000 €</b> de dotation aux amortissements par an.</p><p>L’amortissement réduit le bénéfice (donc l’impôt), mais <b>ne sort pas d’argent</b> chaque année : l’argent est sorti au moment de l’achat.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Où va chaque ligne ?",
          instruction: "Range chaque dépense dans la bonne catégorie de charges.",
          categories: ["Achats de marchandises", "Charges externes", "Charges de personnel", "Charges financières"],
          items: [
            { text: "Le stock de diffuseurs acheté pour être revendu", cat: 0, why: "Marchandises destinées à la revente." },
            { text: "Les campagnes Meta Ads du mois", cat: 1, why: "Publicité = service extérieur." },
            { text: "Le salaire de ta préparatrice de commandes et ses cotisations", cat: 2, why: "Charges de personnel." },
            { text: "Les intérêts de ton prêt bancaire", cat: 3, why: "Coût du financement." },
            { text: "Le loyer de l’entrepôt", cat: 1, why: "Loyer = charge externe." },
            { text: "L’abonnement Shopify et les frais de livraison Colissimo", cat: 1, why: "Services extérieurs." },
            { text: "Les agios de ton découvert bancaire", cat: 3, why: "Charge financière." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Compte de résultat", back: "Produits − charges de l’exercice = résultat (bénéfice ou perte)." },
            { front: "Marge commerciale", back: "Ventes de marchandises − coût d’achat des marchandises vendues." },
            { front: "Valeur ajoutée", back: "Marge − consommations externes (pub, loyer, transport, sous-traitance…)." },
            { front: "EBE", back: "Valeur ajoutée − impôts et taxes − charges de personnel : la rentabilité du métier." },
            { front: "Résultat d’exploitation", back: "EBE − dotations aux amortissements (et provisions)." },
            { front: "Amortissement", back: "Étalement du coût d’un investissement sur sa durée d’utilisation ; ne sort pas d’argent chaque année." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Ventes 150 000 €, coût d’achat des marchandises vendues 60 000 €. Marge commerciale ?", options: ["60 000 €", "90 000 €", "210 000 €"], answer: 1, explain: "150 000 − 60 000 = 90 000 €." },
            { q: "Tu achètes un véhicule utilitaire 24 000 € HT amorti sur 4 ans. Dotation annuelle ?", options: ["24 000 €", "6 000 €", "4 000 €"], answer: 1, explain: "24 000 ÷ 4 = 6 000 € par an." },
            { q: "Pourquoi les banquiers regardent-ils d’abord l’EBE ?", options: ["Parce qu’il inclut l’impôt", "Parce qu’il mesure la rentabilité du métier avant financement et amortissements", "Parce qu’il est toujours positif"], answer: 1, explain: "Il montre la capacité de l’activité à générer de l’argent." },
            { q: "Dans l’exemple de la boutique, si la pub augmente de 10 000 € sans ventes supplémentaires, que devient l’EBE ?", options: ["38 000 €", "18 000 €", "28 000 €"], answer: 1, explain: "La pub est une charge externe : la valeur ajoutée passe à 60 000 €, l’EBE à 28 000 − 10 000 = 18 000 €." },
          ],
        },
        {
          type: "case",
          title: "Le diagnostic",
          story:
            "Deux boutiques en ligne font chacune 300 000 € de ventes. La boutique A a une marge commerciale de 180 000 € mais un EBE de 5 000 €. La boutique B a une marge commerciale de 120 000 € et un EBE de 45 000 €.",
          question: "Quelle lecture est la bonne ?",
          options: [
            "A est plus rentable car sa marge est plus élevée",
            "A achète bien mais dépense trop (pub, frais, personnel) ; B a un modèle plus rentable",
            "Les deux se valent, elles ont le même chiffre d’affaires",
          ],
          answer: 1,
          explain:
            "La marge commerciale montre la qualité de l’achat et du prix de vente ; l’EBE montre ce qu’il reste après les frais de fonctionnement. A a une excellente marge mais la consomme presque entièrement en charges : c’est là qu’il faut chercher.",
        },
        {
          type: "fiche",
          title: "Le compte de résultat",
          points: [
            "Produits − charges = <b>résultat</b> de l’exercice.",
            "Escalier : <b>marge commerciale</b> → <b>valeur ajoutée</b> → <b>EBE</b> → résultat d’exploitation → résultat courant → <b>résultat net</b>.",
            "<b>EBE</b> = rentabilité du métier, avant amortissements, intérêts et impôts.",
            "<b>Amortissement</b> : étaler le coût d’un investissement ; réduit l’impôt sans sortir d’argent chaque année.",
            "Lire les étapes pour savoir <b>où</b> l’argent se perd.",
          ],
          retenir: "La marge dit si tu vends bien, l’EBE dit si ton entreprise tourne bien.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s3",
      title: "Lire un bilan",
      minutes: 17,
      objectives: ["Comprendre l’actif et le passif", "Repérer les signes de solidité ou de fragilité"],
      steps: [
        {
          type: "lesson",
          title: "Le bilan",
          slides: [
            {
              title: "La photo à un instant donné",
              body:
                "<p>Le compte de résultat est un <b>film</b> ; le <b>bilan</b> est une <b>photo</b> de l’entreprise à la date de clôture.</p><div class='tiers'><div><b>Actif</b><span>ce que l’entreprise possède ou ce qu’on lui doit</span></div><div><b>=</b><span>toujours équilibré</span></div><div><b>Passif</b><span>d’où vient l’argent qui a financé l’actif</span></div></div><p>Règle d’or : <b>actif = passif</b>. Tout ce que possède l’entreprise a été financé soit par ses associés, soit par des dettes.</p>",
            },
            {
              title: "L’actif",
              body:
                "<ul><li><b>Actif immobilisé</b> : ce qui sert durablement. Matériel, véhicules, logiciels, fonds de commerce, marque, dépôts de garantie.</li><li><b>Actif circulant</b> : ce qui tourne avec l’activité. <b>Stocks</b>, <b>créances clients</b> (factures pas encore payées), créances de TVA.</li><li><b>Trésorerie</b> : comptes bancaires, caisse.</li></ul>",
            },
            {
              title: "Le passif",
              body:
                "<ul><li><b>Capitaux propres</b> : l’argent des associés. Capital apporté + réserves (bénéfices passés gardés dans l’entreprise) + résultat de l’année.</li><li><b>Dettes financières</b> : emprunts bancaires, comptes courants d’associés.</li><li><b>Dettes d’exploitation</b> : <b>fournisseurs</b> pas encore payés, dettes fiscales (TVA, IS) et sociales (URSSAF).</li></ul><p>Les capitaux propres, c’est ce qui « appartient » aux associés une fois toutes les dettes payées.</p>",
            },
            {
              title: "Lire la solidité",
              body:
                "<ul><li><b>Capitaux propres positifs et significatifs</b> : l’entreprise a un matelas. Négatifs : elle doit plus qu’elle ne possède.</li><li><b>Endettement</b> : dettes financières ÷ capitaux propres. Au-delà de 1 à 1,5, beaucoup de banques deviennent prudentes.</li><li><b>Liquidité</b> : l’actif circulant et la trésorerie couvrent-ils les dettes à court terme ?</li><li><b>Stock</b> qui gonfle d’une année sur l’autre plus vite que les ventes : alerte sur des invendus.</li></ul>",
              example: "Un bilan avec 200 000 € de stock, 5 000 € de trésorerie et 150 000 € de dettes fournisseurs à 30 jours : l’entreprise est « riche » sur le papier mais risque de ne pas pouvoir payer ses fournisseurs.",
            },
          ],
        },
        {
          type: "sort",
          title: "Actif ou passif ?",
          instruction: "Range chaque élément du bilan.",
          categories: ["Actif", "Passif"],
          items: [
            { text: "Le stock de marchandises dans l’entrepôt", cat: 0, why: "Bien possédé par l’entreprise." },
            { text: "L’emprunt bancaire restant à rembourser", cat: 1, why: "Dette financière." },
            { text: "Les factures clients pas encore encaissées", cat: 0, why: "Créances : de l’argent qu’on te doit." },
            { text: "Le capital apporté par les associés", cat: 1, why: "Capitaux propres." },
            { text: "La facture du fournisseur chinois à payer dans 30 jours", cat: 1, why: "Dette fournisseur." },
            { text: "Le solde du compte bancaire", cat: 0, why: "Trésorerie." },
            { text: "La TVA collectée à reverser le mois prochain", cat: 1, why: "Dette fiscale." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Bilan", back: "Photo du patrimoine à une date : actif = passif." },
            { front: "Actif immobilisé", back: "Biens durables : matériel, véhicules, fonds de commerce, marque…" },
            { front: "Actif circulant", back: "Stocks, créances clients, créances fiscales : ce qui tourne avec l’activité." },
            { front: "Capitaux propres", back: "Capital + réserves + résultat : ce qui revient aux associés après paiement des dettes." },
            { front: "Dettes d’exploitation", back: "Fournisseurs, dettes fiscales et sociales." },
            { front: "Ratio d’endettement", back: "Dettes financières ÷ capitaux propres : mesure la dépendance aux prêteurs." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Actif total 250 000 €, dettes totales 180 000 €. Capitaux propres ?", options: ["430 000 €", "70 000 €", "180 000 €"], answer: 1, explain: "Actif = capitaux propres + dettes, donc 250 000 − 180 000 = 70 000 €." },
            { q: "Capitaux propres 50 000 €, dettes financières 100 000 €. Ratio d’endettement ?", options: ["0,5", "2", "150 000"], answer: 1, explain: "100 000 ÷ 50 000 = 2 : l’entreprise est fortement endettée." },
            { q: "Les bénéfices des années passées que les associés ont laissés dans l’entreprise s’appellent…", options: ["les réserves", "les créances", "les immobilisations"], answer: 0, explain: "Ils figurent dans les capitaux propres." },
            { q: "Un client te doit 12 000 €. Où cela apparaît-il ?", options: ["À l’actif, en créances clients", "Au passif, en dettes", "Nulle part tant qu’il n’a pas payé"], answer: 0, explain: "C’est une créance : de l’argent qui t’appartient mais que tu n’as pas encore." },
          ],
        },
        {
          type: "case",
          title: "Le bilan trompeur",
          story:
            "Une société de vente en gros présente 300 000 € d’actif dont 220 000 € de stock, 30 000 € de créances et 10 000 € de trésorerie. Au passif : 40 000 € de capitaux propres, 160 000 € de prêt bancaire et 100 000 € de dettes fournisseurs à payer sous 45 jours. Le stock a doublé en un an, les ventes ont baissé.",
          question: "Quel est le principal risque ?",
          options: [
            "Aucun : l’actif est élevé, l’entreprise est riche",
            "Un risque de trésorerie : l’argent est bloqué dans un stock qui se vend mal, alors que les dettes à court terme sont lourdes",
            "Un risque fiscal lié à la TVA",
          ],
          answer: 1,
          explain:
            "10 000 € de trésorerie et 30 000 € de créances face à 100 000 € à payer sous 45 jours : sans écouler le stock (peut-être en partie invendable), la société ne pourra pas payer. Ratio d’endettement de 4 (160 000 ÷ 40 000) : la banque ne prêtera pas facilement plus.",
        },
        {
          type: "fiche",
          title: "Le bilan",
          points: [
            "Bilan = <b>photo</b> ; compte de résultat = <b>film</b>.",
            "<b>Actif</b> : immobilisations, stocks, créances, trésorerie. <b>Passif</b> : capitaux propres, dettes financières, dettes d’exploitation.",
            "<b>Actif = passif</b>, toujours.",
            "Solidité : capitaux propres positifs, <b>endettement</b> raisonnable, liquidité suffisante.",
            "Alerte : stock qui gonfle, trésorerie faible face à des dettes court terme.",
          ],
          retenir: "Un bilan se lit en se demandant : avec quoi paiera-t-on les dettes des trois prochains mois ?",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s4",
      title: "Marges, prix et seuil de rentabilité",
      minutes: 20,
      objectives: ["Calculer taux de marge, taux de marque et coefficient", "Trouver le seuil de rentabilité et les chiffres clés de l’e-commerce"],
      steps: [
        {
          type: "lesson",
          title: "Marges et rentabilité",
          slides: [
            {
              title: "Taux de marge ou taux de marque ?",
              body:
                "<p>Un produit acheté <b>10 € HT</b> et vendu <b>25 € HT</b> dégage une marge de <b>15 €</b>. Mais on peut l’exprimer de trois façons :</p><table class='t'><tr><th>Indicateur</th><th>Formule</th><th>Résultat</th></tr><tr><td><b>Taux de marge</b></td><td>marge ÷ prix d’achat HT</td><td>15 ÷ 10 = <b>150 %</b></td></tr><tr><td><b>Taux de marque</b></td><td>marge ÷ prix de vente HT</td><td>15 ÷ 25 = <b>60 %</b></td></tr><tr><td><b>Coefficient multiplicateur</b></td><td>prix de vente ÷ prix d’achat</td><td>25 ÷ 10 = <b>2,5</b> (HT)</td></tr></table><p>Quand un fournisseur ou un associé parle de « marge à 60 % », demande toujours : <b>taux de marge ou taux de marque ?</b></p>",
            },
            {
              title: "Charges fixes et charges variables",
              body:
                "<ul><li><b>Charges variables</b> : elles augmentent avec les ventes. Achat des marchandises, emballage, livraison, frais de paiement, commissions.</li><li><b>Charges fixes</b> : elles existent même sans vente. Loyer, abonnements, salaires fixes, assurance, expert-comptable.</li></ul><p>La <b>marge sur coûts variables</b> (MCV) = CA − charges variables. C’est elle qui sert à « éponger » les charges fixes.</p>",
            },
            {
              title: "Le seuil de rentabilité",
              body:
                "<p>C’est le <b>chiffre d’affaires à atteindre pour ne pas perdre d’argent</b> : le point où la marge sur coûts variables couvre exactement les charges fixes.</p><p><b>Seuil de rentabilité = charges fixes ÷ taux de marge sur coûts variables</b></p><p>Exemple : 60 000 € de charges fixes par an, un taux de MCV de 40 %. Seuil = 60 000 ÷ 0,40 = <b>150 000 € de CA</b>.</p><p>Le <b>point mort</b> est la date à laquelle tu l’atteins : avec 200 000 € de CA réguliers sur l’année, 150 000 ÷ 200 000 × 12 mois = <b>9 mois</b>, soit fin septembre. Tout ce que tu vends ensuite est du bénéfice (avant impôt).</p>",
            },
            {
              title: "Les chiffres clés de l’e-commerce",
              body:
                "<ul><li><b>Panier moyen</b> : CA ÷ nombre de commandes.</li><li><b>CAC</b> (coût d’acquisition client) : dépenses marketing ÷ nouveaux clients.</li><li><b>Marge de contribution par commande</b> : panier moyen HT − coût des produits − livraison − frais de paiement.</li><li><b>ROAS</b> : CA généré ÷ budget publicitaire. Un ROAS de 3 = 3 € de ventes pour 1 € de pub.</li><li><b>ROAS de rentabilité</b> : 1 ÷ taux de marge de contribution. En dessous, chaque vente issue de la pub fait perdre de l’argent.</li><li><b>LTV</b> (valeur vie client) : la marge totale qu’un client rapporte sur toute sa relation avec toi.</li></ul>",
              example: "Panier moyen 40 € HT. Produits 16 €, livraison et paiement 6 € : marge de contribution 18 € (45 %). ROAS de rentabilité = 40 ÷ 18 ≈ 2,22. Avec un ROAS de 2, tu perds de l’argent sur chaque commande payée en pub.",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Taux de marge", back: "Marge ÷ prix d’achat HT." },
            { front: "Taux de marque", back: "Marge ÷ prix de vente HT." },
            { front: "Coefficient multiplicateur", back: "Prix de vente ÷ prix d’achat. HT ou TTC, à préciser." },
            { front: "Seuil de rentabilité", back: "Charges fixes ÷ taux de marge sur coûts variables." },
            { front: "ROAS de rentabilité", back: "1 ÷ taux de marge de contribution : le ROAS minimum pour ne pas perdre d’argent." },
            { front: "CAC", back: "Coût d’acquisition client : dépenses marketing ÷ nouveaux clients." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un produit acheté 8 € HT est vendu 20 € HT. Taux de marque ?", options: ["150 %", "60 %", "40 %"], answer: 1, explain: "Marge 12 € ÷ prix de vente 20 € = 60 %. (Le taux de marge serait 12 ÷ 8 = 150 %.)" },
            { q: "Charges fixes 45 000 €, taux de marge sur coûts variables 30 %. Seuil de rentabilité ?", options: ["13 500 €", "150 000 €", "75 000 €"], answer: 1, explain: "45 000 ÷ 0,30 = 150 000 € de CA." },
            { q: "Tu dépenses 3 000 € de pub pour 120 nouveaux clients. CAC ?", options: ["25 €", "40 €", "360 €"], answer: 0, explain: "3 000 ÷ 120 = 25 € par client." },
            { q: "Ta marge de contribution est de 25 % du panier. Ton ROAS est de 3,5. Gagnes-tu de l’argent sur ces ventes ?", options: ["Oui, le ROAS de rentabilité est de 4", "Non, le ROAS de rentabilité est de 4 et tu es en dessous", "Impossible à savoir"], answer: 1, explain: "ROAS de rentabilité = 1 ÷ 0,25 = 4. À 3,5, chaque euro de pub coûte plus qu’il ne rapporte en marge." },
            { q: "Un produit acheté 10 € HT doit avoir un taux de marque de 50 %. Prix de vente HT ?", options: ["15 €", "20 €", "25 €"], answer: 1, explain: "Taux de marque 50 % : la marge représente la moitié du prix de vente, donc 10 € de coût = l’autre moitié : 20 €." },
          ],
        },
        {
          type: "case",
          title: "La campagne qui « marche »",
          story:
            "Lina vend des coffrets à 50 € HT. Coût du coffret 20 €, livraison et emballage 7 €, frais de paiement 1 €. Sa campagne Meta affiche un <b>ROAS de 2</b>, et son agence lui dit que « c’est rentable puisque ça rapporte 2 € pour 1 € ».",
          question: "La campagne est-elle rentable ?",
          options: [
            "Oui, un ROAS de 2 est toujours rentable",
            "Non : la marge de contribution est de 22 € (44 %), le ROAS de rentabilité est d’environ 2,27 ; à 2, elle perd environ 3 € par coffret",
            "Oui, elle gagne 25 € par coffret",
          ],
          answer: 1,
          explain:
            "50 − 20 − 7 − 1 = 22 € de marge de contribution. Avec un ROAS de 2, la pub coûte 25 € par coffret vendu (50 ÷ 2) : 22 − 25 = −3 €. Le ROAS de rentabilité est 50 ÷ 22 ≈ 2,27. La campagne n’est intéressante que si les clients rachètent ensuite (LTV).",
        },
        {
          type: "fiche",
          title: "Marges et rentabilité",
          points: [
            "<b>Taux de marge</b> = marge ÷ achat ; <b>taux de marque</b> = marge ÷ vente ; <b>coefficient</b> = vente ÷ achat.",
            "<b>Charges variables</b> suivent les ventes ; <b>charges fixes</b> tombent quoi qu’il arrive.",
            "<b>Seuil de rentabilité</b> = charges fixes ÷ taux de marge sur coûts variables ; <b>point mort</b> = la date où tu l’atteins.",
            "E-commerce : panier moyen, <b>CAC</b>, marge de contribution, <b>ROAS</b>, <b>LTV</b>.",
            "<b>ROAS de rentabilité</b> = 1 ÷ taux de marge de contribution.",
          ],
          retenir: "Un ROAS n’a de sens que comparé à ta marge.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s5",
      title: "Trésorerie et besoin en fonds de roulement",
      minutes: 18,
      objectives: ["Calculer le BFR et comprendre pourquoi la croissance consomme de la trésorerie", "Construire un plan de trésorerie"],
      steps: [
        {
          type: "lesson",
          title: "La trésorerie",
          slides: [
            {
              title: "Le besoin en fonds de roulement",
              body:
                "<p>Entre le moment où tu paies (fournisseurs, stock) et celui où tu es payé (clients), il y a un <b>décalage</b>. L’argent bloqué dans ce décalage s’appelle le <b>besoin en fonds de roulement</b> (BFR).</p><p><b>BFR = stocks + créances clients − dettes fournisseurs</b> (en simplifiant)</p><p>Exemple : 30 000 € de stock + 20 000 € de créances − 15 000 € de dettes fournisseurs = <b>35 000 €</b> immobilisés pour faire tourner l’activité.</p>",
            },
            {
              title: "Pourquoi la croissance assèche la trésorerie",
              body:
                "<p>Quand les ventes augmentent, le stock et les créances clients augmentent aussi : le <b>BFR grossit</b>. Il faut donc financer ce supplément, avant même d’encaisser les ventes.</p><p>C’est pourquoi des entreprises en <b>forte croissance</b> font faillite : elles vendent beaucoup mais manquent de liquidités pour acheter le stock suivant.</p><p>L’e-commerce payé à la commande (carte bancaire) a un avantage : peu de créances clients. Son BFR vient surtout du <b>stock</b>, surtout avec des délais d’importation longs.</p>",
            },
            {
              title: "Les délais qui comptent",
              body:
                "<ul><li><b>Délai clients</b> (DSO) : en combien de jours tes clients te paient. Créances clients ÷ CA TTC × 365.</li><li><b>Délai fournisseurs</b> : en combien de jours tu paies tes fournisseurs.</li><li><b>Rotation du stock</b> : combien de jours ton stock met à se vendre.</li></ul><p>Exemple : 20 000 € de créances pour 240 000 € de CA TTC annuel → 20 000 ÷ 240 000 × 365 ≈ <b>30 jours</b>.</p>",
            },
            {
              title: "Les leviers pour réduire le BFR",
              body:
                "<ul><li><b>Encaisser plus vite</b> : acompte à la commande, paiement à la livraison, relances rapides, pénalités de retard.</li><li><b>Payer plus tard</b> (dans les limites légales) : négocier les délais fournisseurs.</li><li><b>Stocker moins</b> : commandes plus fréquentes, précommandes, dropshipping ou stock chez le fournisseur, déstockage des invendus.</li><li><b>Financer le décalage</b> : affacturage, crédit de trésorerie (séance 6).</li></ul>",
            },
            {
              title: "Le plan de trésorerie",
              body:
                "<p>Un tableau simple, mois par mois, sur 6 à 12 mois :</p><ol><li>la trésorerie de <b>début de mois</b> ;</li><li>+ les <b>encaissements</b> prévus (ventes encaissées TTC, apports, prêts) ;</li><li>− les <b>décaissements</b> prévus (fournisseurs TTC, salaires, loyer, TVA à reverser, remboursements d’emprunt, impôts) ;</li><li>= la trésorerie de <b>fin de mois</b>.</li></ol><p>On y raisonne en <b>TTC</b> et à la <b>date réelle</b> des mouvements d’argent. C’est l’outil n°1 pour anticiper un trou de trésorerie avant qu’il arrive, et pour discuter avec la banque.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Le BFR monte ou baisse ?",
          instruction: "Quel est l’effet de chaque décision sur le besoin en fonds de roulement ?",
          categories: ["Le BFR augmente", "Le BFR diminue"],
          items: [
            { text: "Ton fournisseur accepte d’être payé à 60 jours au lieu de 30", cat: 1, why: "Les dettes fournisseurs augmentent : tu gardes l’argent plus longtemps." },
            { text: "Tu commandes 6 mois de stock d’un coup pour avoir un meilleur prix", cat: 0, why: "Le stock immobilise de l’argent." },
            { text: "Tu exiges 30 % d’acompte à la commande de tes clients pros", cat: 1, why: "Tu encaisses plus tôt." },
            { text: "Un gros client B2B obtient un paiement à 60 jours", cat: 0, why: "Les créances clients augmentent." },
            { text: "Tu brades les invendus de la saison dernière", cat: 1, why: "Le stock baisse et redevient de l’argent." },
            { text: "Ta croissance double les ventes B2B payées à 45 jours", cat: 0, why: "Plus de ventes à crédit = plus de créances à financer." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "BFR", back: "Stocks + créances clients − dettes fournisseurs : l’argent bloqué par le cycle d’exploitation." },
            { front: "DSO", back: "Délai moyen de paiement des clients : créances ÷ CA TTC × 365." },
            { front: "Croissance et BFR", back: "Plus de ventes = plus de stock et de créances = plus de BFR à financer." },
            { front: "Plan de trésorerie", back: "Prévision mois par mois des encaissements et décaissements TTC, à leur date réelle." },
            { front: "Levier d’encaissement", back: "Acompte, paiement rapide, relances, pénalités de retard." },
            { front: "Levier de stock", back: "Commandes fréquentes, précommandes, déstockage des invendus." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Stock 40 000 €, créances clients 25 000 €, dettes fournisseurs 30 000 €. BFR ?", options: ["95 000 €", "35 000 €", "45 000 €"], answer: 1, explain: "40 000 + 25 000 − 30 000 = 35 000 €." },
            { q: "Créances clients 15 000 €, CA TTC annuel 180 000 €. Délai moyen de paiement des clients ?", options: ["Environ 30 jours", "Environ 12 jours", "Environ 60 jours"], answer: 0, explain: "15 000 ÷ 180 000 × 365 ≈ 30 jours." },
            { q: "Dans un plan de trésorerie, la vente d’une facture de 1 200 € TTC émise en mars et payée en mai apparaît…", options: ["en mars, pour 1 000 €", "en mai, pour 1 200 €", "en mars, pour 1 200 €"], answer: 1, explain: "On note le montant réellement encaissé (TTC) à la date réelle d’encaissement." },
            { q: "Le remboursement du capital d’un emprunt apparaît-il dans le plan de trésorerie ?", options: ["Non, ce n’est pas une charge", "Oui, c’est une sortie d’argent"], answer: 1, explain: "Ce n’est pas une charge au compte de résultat, mais c’est bien un décaissement." },
          ],
        },
        {
          type: "case",
          title: "La grosse commande",
          story:
            "Sofiane, grossiste en articles de rangement, décroche une commande de <b>80 000 € HT</b> d’une chaîne de magasins, payable à 60 jours. Il doit payer son fournisseur chinois 50 000 € à la commande. Il a 15 000 € en banque et ses charges fixes mensuelles sont de 8 000 €.",
          question: "Que doit-il faire en priorité ?",
          options: [
            "Accepter et commander : la commande est très rentable",
            "Faire un plan de trésorerie et trouver un financement du décalage (acompte du client, affacturage, crédit court terme) avant de s’engager",
            "Refuser la commande, elle est trop grosse",
          ],
          answer: 1,
          explain:
            "Rentable n’est pas finançable : il lui manque au moins 35 000 € pour payer le fournisseur, sans compter ses charges pendant 2 à 3 mois d’attente. Il peut négocier un acompte, céder la facture en affacturage, ou obtenir un crédit de trésorerie adossé à la commande.",
        },
        {
          type: "fiche",
          title: "Trésorerie et BFR",
          points: [
            "<b>BFR</b> = stocks + créances clients − dettes fournisseurs.",
            "La <b>croissance consomme de la trésorerie</b> : il faut financer le BFR supplémentaire.",
            "<b>DSO</b> = créances ÷ CA TTC × 365.",
            "Leviers : encaisser plus tôt, payer plus tard (dans les limites légales), stocker moins, financer le décalage.",
            "<b>Plan de trésorerie</b> mois par mois, en TTC, à la date réelle des flux.",
          ],
          retenir: "On ne meurt pas d’un manque de bénéfice, on meurt d’un manque de trésorerie.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s6",
      title: "Financer l’entreprise",
      minutes: 18,
      objectives: ["Connaître les sources de financement et leur usage", "Comprendre l’effet de levier et ce que regarde un banquier"],
      steps: [
        {
          type: "lesson",
          title: "Le financement",
          slides: [
            {
              title: "Deux grandes familles",
              body:
                "<table class='t'><tr><th></th><th>Fonds propres</th><th>Dettes</th></tr><tr><td>Origine</td><td>Associés, investisseurs, bénéfices réinvestis</td><td>Banques, prêteurs, fournisseurs</td></tr><tr><td>Remboursement</td><td>Non</td><td>Oui, avec intérêts</td></tr><tr><td>Contrepartie</td><td>Une part du capital (et du pouvoir)</td><td>Des garanties, parfois une caution personnelle</td></tr><tr><td>Coût</td><td>Élevé (l’investisseur attend une forte plus-value)</td><td>Plus faible, intérêts déductibles</td></tr></table>",
            },
            {
              title: "La boîte à outils",
              body:
                "<ul><li><b>Autofinancement</b> : réinvestir les bénéfices. Le plus sain, mais le plus lent.</li><li><b>Love money</b> : proches qui prêtent ou entrent au capital.</li><li><b>Prêt bancaire</b> : pour les investissements (matériel, fonds de commerce, travaux), sur 2 à 7 ans en général.</li><li><b>Crédit-bail / leasing</b> : louer un bien avec option d’achat (véhicule, machine) sans apport.</li><li><b>Prêts d’honneur</b> (réseaux d’accompagnement) et prêts ou garanties de <b>Bpifrance</b>.</li><li><b>Affacturage</b> : vendre ses factures clients à un organisme qui avance l’argent, contre une commission.</li><li><b>Financement participatif</b> : don, prêt ou capital, auprès du public.</li><li><b>Levée de fonds</b> : business angels, fonds d’investissement, pour une forte croissance.</li></ul>",
            },
            {
              title: "La règle d’or du financement",
              body:
                "<p><b>Financer le long terme avec du long terme, le court terme avec du court terme.</b></p><ul><li>Un investissement qui dure 5 ans (matériel, travaux) → prêt sur 5 ans ou leasing.</li><li>Un besoin de stock ou un décalage de paiement → solutions de court terme (affacturage, crédit de trésorerie, découvert autorisé).</li></ul><p>Payer un investissement de 5 ans avec la trésorerie du quotidien est l’erreur classique qui provoque des tensions de trésorerie quelques mois plus tard.</p>",
            },
            {
              title: "L’effet de levier",
              body:
                "<p>S’endetter peut <b>augmenter la rentabilité</b> des fonds propres, si l’investissement rapporte plus que le coût de la dette.</p><p>Exemple : un projet de 100 000 € rapporte 10 000 € par an (10 %), avant impôt.</p><ul><li>Financé à 100 % par les associés : rentabilité des fonds propres = 10 000 ÷ 100 000 = <b>10 %</b>.</li><li>Financé par 50 000 € d’apport et 50 000 € de prêt à 4 % : intérêts 2 000 €, résultat 8 000 € ; rentabilité = 8 000 ÷ 50 000 = <b>16 %</b>.</li></ul><p>Mais le levier joue <b>dans les deux sens</b> : si l’activité baisse, les intérêts restent à payer et les pertes sont amplifiées.</p>",
            },
            {
              title: "Ce que regarde un banquier",
              body:
                "<ul><li>Ton <b>apport</b> personnel (souvent 20 à 30 % du projet attendus pour une création).</li><li>La <b>capacité d’autofinancement</b> (CAF) : en gros, le résultat net + les amortissements. C’est l’argent généré pour rembourser.</li><li>La <b>capacité de remboursement</b> : dettes financières ÷ CAF. Beaucoup de banques attendent moins de 3 à 4 ans.</li><li>Des <b>comptes</b> lisibles, un <b>prévisionnel</b> réaliste, un plan de trésorerie.</li><li>Les <b>garanties</b> : nantissement, caution, garantie Bpifrance.</li></ul>",
            },
          ],
        },
        {
          type: "sort",
          title: "Quel financement ?",
          instruction: "Associe chaque besoin au financement le plus adapté.",
          categories: ["Prêt bancaire moyen terme", "Crédit-bail", "Affacturage", "Levée de fonds"],
          items: [
            { text: "Racheter un fonds de commerce de 120 000 €", cat: 0, why: "Investissement durable financé sur plusieurs années." },
            { text: "Équiper l’entrepôt d’un chariot élévateur sans sortir de trésorerie", cat: 1, why: "Location avec option d’achat, sans apport." },
            { text: "Tes clients pros paient à 60 jours et tu manques de trésorerie", cat: 2, why: "Tu cèdes tes factures pour être payé tout de suite." },
            { text: "Ouvrir 5 pays en 18 mois avec une forte perte au démarrage", cat: 3, why: "Projet risqué à forte croissance : les fonds propres conviennent mieux que la dette." },
            { text: "Acheter un véhicule de livraison utilitaire", cat: 1, why: "Le leasing est le financement classique des véhicules." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Fonds propres", back: "Argent des associés ou investisseurs : pas de remboursement, mais une part du capital." },
            { front: "Règle d’or", back: "Financer le long terme par du long terme, le court terme par du court terme." },
            { front: "Affacturage", back: "Cession des factures clients à un organisme qui avance l’argent contre commission." },
            { front: "Effet de levier", back: "La dette augmente la rentabilité des fonds propres si l’investissement rapporte plus que le taux d’intérêt." },
            { front: "CAF", back: "Capacité d’autofinancement : environ résultat net + amortissements." },
            { front: "Capacité de remboursement", back: "Dettes financières ÷ CAF, souvent attendue sous 3 à 4 ans." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Résultat net 30 000 €, amortissements 10 000 €. CAF approximative ?", options: ["20 000 €", "40 000 €", "30 000 €"], answer: 1, explain: "30 000 + 10 000 = 40 000 € (en simplifiant)." },
            { q: "Avec cette CAF de 40 000 €, l’entreprise a 200 000 € de dettes financières. Capacité de remboursement ?", options: ["2 ans", "5 ans", "8 ans"], answer: 1, explain: "200 000 ÷ 40 000 = 5 ans : au-delà de ce que beaucoup de banques acceptent." },
            { q: "Un investissement rapporte 6 % par an. Tu peux emprunter à 8 %. L’effet de levier est…", options: ["positif", "négatif : la dette coûte plus qu’elle ne rapporte"], answer: 1, explain: "Le levier n’est positif que si la rentabilité dépasse le taux d’intérêt." },
            { q: "Tu finances l’achat d’une machine qui servira 6 ans avec ton découvert bancaire. C’est…", options: ["une bonne idée, le découvert est souple", "une erreur : un besoin long financé par du court terme"], answer: 1, explain: "C’est la règle d’or du financement." },
          ],
        },
        {
          type: "case",
          title: "Lever des fonds ou emprunter ?",
          story:
            "Yanis veut ouvrir un entrepôt logistique pour ses deux marques : 150 000 € de travaux et d’équipements. Son activité dégage déjà une CAF de 60 000 € par an et il a 40 000 € de trésorerie. Un investisseur lui propose 150 000 € contre 35 % de sa société.",
          question: "Quelle option est la plus cohérente ?",
          options: [
            "Céder 35 % : l’argent n’est pas à rembourser",
            "Apporter une partie de sa trésorerie et emprunter le reste sur 5 à 7 ans (éventuellement avec du leasing) : il a la capacité de rembourser et garde son capital",
            "Tout payer avec la trésorerie et le découvert",
          ],
          answer: 1,
          explain:
            "Avec 60 000 € de CAF, un prêt d’environ 110 000 € représente moins de 2 ans de capacité de remboursement : finançable par la banque. Céder 35 % pour un investissement que l’activité peut rembourser coûterait beaucoup plus cher à long terme. Le découvert serait une erreur de règle d’or.",
        },
        {
          type: "fiche",
          title: "Financer l’entreprise",
          points: [
            "<b>Fonds propres</b> (pas de remboursement, dilution) vs <b>dettes</b> (remboursement, garanties).",
            "Outils : autofinancement, love money, prêt bancaire, <b>crédit-bail</b>, Bpifrance, <b>affacturage</b>, crowdfunding, levée de fonds.",
            "<b>Règle d’or</b> : long terme par du long terme, court terme par du court terme.",
            "<b>Effet de levier</b> : utile si la rentabilité dépasse le taux, dangereux sinon.",
            "Banquier : <b>apport</b>, <b>CAF</b>, capacité de remboursement (moins de 3 à 4 ans), garanties.",
          ],
          retenir: "On emprunte pour ce qui rapporte, on ouvre son capital pour ce qui est risqué.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s7",
      title: "Investir et décider",
      minutes: 18,
      objectives: ["Évaluer un investissement avec le ROI et le délai de récupération", "Comprendre la valeur temps de l’argent et la VAN"],
      steps: [
        {
          type: "lesson",
          title: "Décider d’un investissement",
          slides: [
            {
              title: "Le retour sur investissement",
              body:
                "<p>Le <b>ROI</b> compare ce qu’un investissement rapporte à ce qu’il coûte :</p><p><b>ROI = (gain − coût) ÷ coût</b></p><p>Exemple : une machine de gravure à 5 000 € te permet de vendre des plaques personnalisées qui rapportent 7 500 € de marge sur sa durée de vie. ROI = (7 500 − 5 000) ÷ 5 000 = <b>50 %</b>.</p><p>Le ROI est simple, mais il ne dit pas <b>quand</b> l’argent revient.</p>",
            },
            {
              title: "Le délai de récupération",
              body:
                "<p>Combien de temps faut-il pour <b>récupérer</b> la mise de départ ?</p><p><b>Délai = coût de l’investissement ÷ flux de trésorerie annuel</b> (si les flux sont réguliers)</p><p>Exemple : la machine à 5 000 € génère 2 000 € de trésorerie par an → délai de <b>2,5 ans</b>.</p><p>Pour une petite entreprise, c’est souvent le critère le plus parlant : plus le délai est court, moins le risque est élevé.</p>",
            },
            {
              title: "Un euro aujourd’hui vaut plus qu’un euro demain",
              body:
                "<p>Recevoir 1 000 € aujourd’hui vaut mieux que 1 000 € dans 3 ans : on peut les placer, l’inflation les grignote, et le futur est incertain. C’est la <b>valeur temps de l’argent</b>.</p><p>Pour comparer des sommes dans le temps, on les <b>actualise</b> avec un taux (le coût de ton argent, ou le rendement que tu exiges) :</p><p><b>Valeur actuelle = montant futur ÷ (1 + taux)<sup>nombre d’années</sup></b></p><p>Exemple : 1 000 € dans 2 ans, au taux de 8 % → 1 000 ÷ 1,08² ≈ <b>857 €</b> aujourd’hui.</p>",
            },
            {
              title: "La valeur actuelle nette (VAN)",
              body:
                "<p>La <b>VAN</b> additionne tous les flux futurs actualisés, puis retire l’investissement de départ.</p><p>Exemple : investir 10 000 € pour recevoir 4 000 € par an pendant 3 ans, au taux de 8 %.</p><table class='t'><tr><th>Année</th><th>Flux</th><th>Valeur actuelle</th></tr><tr><td>1</td><td>4 000 €</td><td>3 704 €</td></tr><tr><td>2</td><td>4 000 €</td><td>3 429 €</td></tr><tr><td>3</td><td>4 000 €</td><td>3 175 €</td></tr><tr><td colspan='2'><b>Total actualisé</b></td><td><b>10 308 €</b></td></tr></table><p>VAN = 10 308 − 10 000 = <b>+308 €</b>. Positive : le projet rapporte plus que les 8 % exigés. Négative : mieux vaut ne pas investir (ou placer l’argent ailleurs).</p><p>Le <b>TRI</b> (taux de rentabilité interne) est le taux qui rend la VAN égale à zéro.</p>",
            },
            {
              title: "Au-delà des chiffres",
              body:
                "<ul><li><b>Coût d’opportunité</b> : l’argent investi ici ne peut pas servir ailleurs. Quel autre projet sacrifies-tu ?</li><li><b>Risque</b> : un projet incertain mérite un taux d’actualisation plus élevé.</li><li><b>Hypothèses</b> : teste un scénario pessimiste (ventes −30 %) avant de décider.</li><li><b>Coûts cachés</b> : formation, maintenance, temps du dirigeant, BFR supplémentaire.</li></ul>",
            },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "ROI", back: "(Gain − coût) ÷ coût." },
            { front: "Délai de récupération", back: "Temps nécessaire pour récupérer la mise : coût ÷ flux annuel." },
            { front: "Actualisation", back: "Valeur actuelle = montant futur ÷ (1 + taux)^années." },
            { front: "VAN", back: "Somme des flux futurs actualisés − investissement. Positive = projet créateur de valeur." },
            { front: "TRI", back: "Taux d’actualisation qui rend la VAN nulle : la rentabilité propre du projet." },
            { front: "Coût d’opportunité", back: "Ce que tu sacrifies en choisissant d’investir ton argent dans ce projet plutôt qu’un autre." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "Un outil coûte 2 000 € et génère 3 000 € de marge supplémentaire. ROI ?", options: ["150 %", "50 %", "33 %"], answer: 1, explain: "(3 000 − 2 000) ÷ 2 000 = 50 %." },
            { q: "Un investissement de 12 000 € rapporte 4 000 € de trésorerie par an. Délai de récupération ?", options: ["2 ans", "3 ans", "4 ans"], answer: 1, explain: "12 000 ÷ 4 000 = 3 ans." },
            { q: "Quelle est la valeur actuelle de 1 100 € reçus dans 1 an, au taux de 10 % ?", options: ["990 €", "1 000 €", "1 210 €"], answer: 1, explain: "1 100 ÷ 1,10 = 1 000 €." },
            { q: "Un projet a une VAN de −2 000 € au taux de 8 %. Que faut-il en conclure ?", options: ["Il rapporte 2 000 €", "Il rapporte moins que les 8 % exigés : à éviter en l’état", "Il faut doubler l’investissement"], answer: 1, explain: "Une VAN négative signifie que le projet détruit de la valeur au taux exigé." },
          ],
        },
        {
          type: "case",
          title: "Deux projets, une enveloppe",
          story:
            "Nora a 20 000 € à investir. Projet A : une machine qui coûte 20 000 € et rapporte 5 000 € par an pendant 6 ans. Projet B : un stock de produits saisonniers qui coûte 20 000 € et se revend 26 000 € en 4 mois.",
          question: "Quel raisonnement est le plus juste ?",
          options: [
            "A est meilleur car il rapporte 30 000 € au total contre 26 000 €",
            "Il faut comparer le délai de récupération et le risque : B récupère la mise en 4 mois et l’argent peut être réinvesti plusieurs fois, alors que A met 4 ans à se rembourser",
            "Les deux se valent",
          ],
          answer: 1,
          explain:
            "A rapporte plus en valeur brute mais immobilise l’argent 4 ans avant de rembourser la mise (20 000 ÷ 5 000), sans tenir compte de l’actualisation. B dégage 30 % en 4 mois, et l’argent récupéré peut être réengagé. Reste à évaluer le risque d’invendus de B. On ne compare jamais deux projets sur leur seul gain total.",
        },
        {
          type: "fiche",
          title: "Investir et décider",
          points: [
            "<b>ROI</b> = (gain − coût) ÷ coût.",
            "<b>Délai de récupération</b> = coût ÷ flux annuel : le critère le plus parlant pour une petite structure.",
            "<b>Actualisation</b> : un euro aujourd’hui vaut plus qu’un euro demain.",
            "<b>VAN</b> = flux actualisés − investissement ; positive = projet créateur de valeur. <b>TRI</b> = taux qui annule la VAN.",
            "Penser au <b>coût d’opportunité</b>, au risque, aux coûts cachés, au scénario pessimiste.",
          ],
          retenir: "Le meilleur projet n’est pas celui qui rapporte le plus, c’est celui qui rapporte le plus vite et le plus sûrement.",
        },
      ],
    },

    /* ======================================================= */
    {
      id: "s8",
      title: "Valoriser une entreprise et piloter",
      minutes: 19,
      objectives: ["Estimer la valeur d’une entreprise par les multiples", "Construire un tableau de bord financier"],
      steps: [
        {
          type: "lesson",
          title: "Valorisation et pilotage",
          slides: [
            {
              title: "Valeur d’entreprise et valeur des titres",
              body:
                "<p>Deux notions à distinguer :</p><ul><li>La <b>valeur d’entreprise</b> : ce que vaut l’activité, quelle que soit sa façon d’être financée.</li><li>La <b>valeur des titres</b> (ce que reçoivent les associés qui vendent) = valeur d’entreprise − <b>dette nette</b>.</li></ul><p><b>Dette nette = dettes financières − trésorerie</b></p><p>Deux entreprises identiques ne se vendent pas au même prix si l’une est endettée et l’autre a de la trésorerie.</p>",
            },
            {
              title: "La méthode des multiples",
              body:
                "<p>La plus utilisée pour les PME : on applique un <b>multiple</b> à l’EBE (normalisé, c’est-à-dire retraité des éléments exceptionnels et avec une rémunération normale du dirigeant).</p><p>Exemple : EBE 200 000 €, multiple de 5 → valeur d’entreprise <b>1 000 000 €</b>. Dettes financières 300 000 €, trésorerie 100 000 € → dette nette 200 000 €. Valeur des titres = <b>800 000 €</b>.</p><p>Le multiple dépend du secteur, de la taille, de la croissance et du risque. À titre d’ordre de grandeur souvent cité, les petites entreprises se négocient plutôt dans le bas de la fourchette, autour de quelques fois l’EBE ; les sociétés récurrentes et en croissance obtiennent des multiples plus élevés. Un multiple n’est jamais un prix garanti.</p>",
            },
            {
              title: "Ce qui fait monter ou baisser la valeur",
              body:
                "<table class='t'><tr><th>Augmente la valeur</th><th>Diminue la valeur</th></tr><tr><td>Revenus récurrents (abonnements, contrats)</td><td>Dépendance au dirigeant</td></tr><tr><td>Marges supérieures au secteur</td><td>Un ou deux clients qui font l’essentiel du CA</td></tr><tr><td>Croissance prouvée</td><td>Comptes peu fiables, mélange perso et pro</td></tr><tr><td>Marque, fichier clients, process documentés</td><td>Dépendance à un seul fournisseur ou un seul canal (une plateforme, une régie publicitaire)</td></tr></table><p>Préparer la vente d’une entreprise, c’est travailler ces points <b>deux ou trois ans avant</b>.</p>",
            },
            {
              title: "L’autre méthode : les flux futurs",
              body:
                "<p>La méthode des <b>flux de trésorerie actualisés</b> (DCF) applique la séance 7 à toute l’entreprise : on prévoit les flux de trésorerie des prochaines années, on les actualise, et on ajoute une valeur finale.</p><p>Elle convient aux entreprises en forte croissance, dont la valeur repose sur l’avenir plus que sur l’EBE actuel. Elle est très sensible aux hypothèses : un petit changement du taux ou de la croissance change fortement le résultat. On la croise donc toujours avec les multiples.</p>",
            },
            {
              title: "Ton tableau de bord",
              body:
                "<p>Une page, mise à jour chaque mois, avec 8 à 10 indicateurs maximum :</p><ul><li><b>Activité</b> : CA HT, nombre de commandes, panier moyen.</li><li><b>Rentabilité</b> : taux de marque, marge de contribution, EBE du mois.</li><li><b>Acquisition</b> : dépenses pub, CAC, ROAS, part de clients récurrents.</li><li><b>Trésorerie</b> : solde bancaire, prévision à 3 mois, BFR, stock en jours de ventes.</li></ul><p>Compare toujours au <b>mois précédent</b>, au <b>même mois de l’an dernier</b> et à ton <b>objectif</b>. Un indicateur seul ne dit rien ; sa tendance dit tout.</p>",
            },
          ],
        },
        {
          type: "sort",
          title: "Plus ou moins de valeur ?",
          instruction: "Chaque élément augmente-t-il ou diminue-t-il la valeur d’une entreprise à vendre ?",
          categories: ["Augmente la valeur", "Diminue la valeur"],
          items: [
            { text: "40 % du chiffre d’affaires vient d’un seul client", cat: 1, why: "Concentration client : si ce client part, l’activité s’effondre." },
            { text: "60 % des ventes viennent d’abonnements mensuels", cat: 0, why: "Revenus récurrents et prévisibles." },
            { text: "Le dirigeant gère seul les fournisseurs, les ventes et le marketing", cat: 1, why: "L’entreprise dépend de lui : l’acheteur prend un risque." },
            { text: "Une marge supérieure de 10 points à celle des concurrents", cat: 0, why: "Rentabilité supérieure." },
            { text: "100 % des ventes passent par un seul compte publicitaire", cat: 1, why: "Dépendance à un seul canal d’acquisition." },
            { text: "Des process écrits et une équipe autonome", cat: 0, why: "L’activité peut tourner sans le vendeur." },
          ],
        },
        {
          type: "cards",
          cards: [
            { front: "Valeur d’entreprise", back: "Valeur de l’activité, indépendamment de son financement." },
            { front: "Dette nette", back: "Dettes financières − trésorerie." },
            { front: "Valeur des titres", back: "Valeur d’entreprise − dette nette : ce que reçoivent les vendeurs." },
            { front: "EBE normalisé", back: "EBE retraité des éléments exceptionnels, avec une rémunération normale du dirigeant." },
            { front: "DCF", back: "Valorisation par les flux de trésorerie futurs actualisés : adaptée aux entreprises en croissance." },
            { front: "Tableau de bord", back: "8 à 10 indicateurs mensuels comparés au mois précédent, à l’an dernier et à l’objectif." },
          ],
        },
        {
          type: "quiz",
          questions: [
            { q: "EBE normalisé 150 000 €, multiple de 4. Valeur d’entreprise ?", options: ["37 500 €", "600 000 €", "150 000 €"], answer: 1, explain: "150 000 × 4 = 600 000 €." },
            { q: "Avec cette valeur d’entreprise de 600 000 €, dettes financières 250 000 €, trésorerie 50 000 €. Valeur des titres ?", options: ["400 000 €", "350 000 €", "600 000 €"], answer: 0, explain: "Dette nette = 250 000 − 50 000 = 200 000 € ; 600 000 − 200 000 = 400 000 €." },
            { q: "Pourquoi « normaliser » l’EBE avant de valoriser ?", options: ["Pour le gonfler", "Pour retirer l’exceptionnel et intégrer une rémunération normale du dirigeant", "C’est une obligation fiscale"], answer: 1, explain: "Un dirigeant qui ne se paie pas gonfle artificiellement l’EBE." },
            { q: "Quelle méthode convient le mieux à une start-up en forte croissance encore peu rentable ?", options: ["Un multiple d’EBE", "Les flux de trésorerie futurs actualisés (DCF)", "La valeur du stock"], answer: 1, explain: "Sa valeur repose sur l’avenir, pas sur l’EBE actuel." },
          ],
        },
        {
          type: "case",
          title: "L’offre de rachat",
          story:
            "Karim reçoit une offre de rachat pour sa société de distribution : « 5 fois l’EBE ». Son EBE est de 120 000 €, mais il ne se verse que 10 000 € par an alors qu’un directeur salarié coûterait 60 000 € charges comprises. La société a 100 000 € de prêt et 20 000 € de trésorerie.",
          question: "Quel prix Karim peut-il raisonnablement attendre pour ses titres ?",
          options: [
            "600 000 € (5 × 120 000)",
            "Environ 270 000 € : EBE normalisé 70 000 €, valeur d’entreprise 350 000 €, moins 80 000 € de dette nette",
            "520 000 € (600 000 − 80 000)",
          ],
          answer: 1,
          explain:
            "Un acheteur retraitera l’EBE avec une rémunération normale : 120 000 − 50 000 de salaire manquant = 70 000 €. 5 × 70 000 = 350 000 € de valeur d’entreprise. Dette nette = 100 000 − 20 000 = 80 000 €. Titres ≈ 270 000 €. Pour mieux vendre, Karim doit augmenter l’EBE réel et réduire sa dépendance personnelle.",
        },
        {
          type: "fiche",
          title: "Valoriser et piloter",
          points: [
            "<b>Valeur des titres</b> = valeur d’entreprise − <b>dette nette</b> (dettes financières − trésorerie).",
            "<b>Multiples</b> appliqués à l’<b>EBE normalisé</b> ; petites structures dans le bas de la fourchette.",
            "Valeur ↑ : récurrence, marges, croissance, process. Valeur ↓ : dépendance au dirigeant, à un client, à un canal.",
            "<b>DCF</b> pour les entreprises en croissance, toujours croisé avec les multiples.",
            "<b>Tableau de bord</b> : 8 à 10 indicateurs mensuels, comparés et suivis en tendance.",
          ],
          retenir: "Une entreprise vaut ce qu’elle rapporte sans toi.",
        },
      ],
    },
  ],
});
