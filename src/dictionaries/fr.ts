
export interface NavLinkDictionaryItem {
  label: string;
}

export interface NavbarDictionaryItems {
  logoAlt: string;
  switchToEnglish: string;
  switchToFrench: string;
  openMenu: string;
  closeMenu: string;
  selectLanguage: string;
}

export interface FooterDictionaryItems {
  allRightsReserved: string;
}

export interface HomePageDictionaryItems {
  greeting: string;
  name: string;
  role: string;
  intro: string;
  myProjectsButton: string;
  contactMeButton: string;
  aboutMeTitle: string;
  aboutMeText: string;
  viewCvButton: string;
  mySkillsTitle: string;
  skillVbaDev: { name: string; description: string; };
  skillDataAnalysis: { name: string; description: string; };
  skillProjectManagement: { name: string; description: string; };
  skillCollaboration: { name: string; description: string; };
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export interface PageHeaderDictionaryItems {
  cvTitle: string;
  cvDescription: string;
  downloadCvButton: string;
  projectsTitle: string;
  projectsDescription: string;
  templatesTitle: string;
  templatesDescription: string;
  contactTitle: string;
  contactDescription: string;
  quizTitle: string;
  quizDescription: string;
}

export interface ContactFormDictionaryItems {
  nameLabel: string;
  namePlaceholder: string;
  nameError: string;
  emailLabel: string;
  emailPlaceholder: string;
  emailError: string;
  phoneLabel: string;
  phonePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  messageError: string;
  filesLabel: string;
  filesHelpText: string;
  filesButton: string;
  filesSelected: string;
  maxFileSizeError: string;
  fileTypeError: string;
  submitButton: string;
  submittingButton: string;
  successTitle: string;
  successDescription: string;
  errorTitle: string;
  unexpectedErrorTitle: string;
  unexpectedErrorDescription: string;
  contactInfoTitle: string;
  contactInfoAvailability: string;
  contactInfoSocialPrompt: string;
  sendMessageTitle: string;
}

export interface CVEducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface CVExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface CVSkillItem {
  name: string;
  level: number; // Level remains a number
}

export interface CVTrainingItem {
  title: string;
  buttonLabel: string;
}

export interface CVPageDictionaryItems {
  educationTitle: string;
  education: CVEducationItem[];
  experienceTitle: string;
  experience: CVExperienceItem[];
  skillsTitle: string;
  skills: CVSkillItem[]; // Note: icon component cannot be in JSON, will be mapped in component
  trainingTitle: string;
  training: CVTrainingItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  imageHint: string;
  period: string;
  logolabel?: string;
  image: string;
  logo?: string;
  logoNeedsLightBg?: boolean;
}

export interface ProjectsPageDictionaryItems {
  projects: ProjectItem[];
  githubButton: string;
  liveDemoButton: string;
}

export interface QuizPageDictionaryItems {
  excelQuizTitle: string;
  excelQuizDescription: string;
  excelStartButton: string;
  vbaQuizTitle: string;
  vbaQuizDescription: string;
  vbaStartButton: string;
}

export interface ExcelQuizTopic {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
}

export interface ExcelQuizTopicsPageDictionaryItems {
  title: string;
  description: string;
  topics: ExcelQuizTopic[];
  goBackButtonLabel: string;
}

export interface VbaQuizTopic {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
}

export interface VbaQuizTopicsPageDictionaryItems {
  title: string;
  description: string;
  topics: VbaQuizTopic[];
  goBackButtonLabel: string;
}

// Types for the interactive quiz page
export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ExcelFormulasQuizData {
  title: string;
  description: string;
  questions: Question[];
}

export interface ExcelPivotTablesQuizData {
  title: string;
  description: string;
  questions: Question[];
}

export interface ExcelChartsQuizData {
  title: string;
  description: string;
  questions: Question[];
}

export interface ExcelDataManagementQuizData {
  title: string;
  description: string;
  questions: Question[];
}

export interface ExcelPowerPivotQuizData {
  title: string;
  description: string;
  questions: Question[];
}

export interface ExcelPowerQueryQuizData {
  title: string;
  description: string;
  questions: Question[];
}

export interface VbaVariablesQuizData {
  title: string;
  description: string;
  questions: Question[];
}

export interface QuizEmailDictionaryItems {
  subject: string;
  greeting: string;
  intro: (topic: string) => string;
  summaryTitle: string;
  score: string;
  level: string;
  detailsTitle: string;
  question: (num: number) => string;
  yourAnswer: string;
  correctAnswer: string;
  explanation: string;
  outro: string;
  signature: string;
}


export interface QuizFormulasPageDictionaryItems {
  title: string;
  description: string;
  question: string;
  nextButton: string;
  previousButton: string;
  finishButton: string;
  validation: {
    selectAnswer: string;
    selectAllAnswers: string;
  };
  results: {
    title: string;
    description: string;
    yourScore: string;
    yourLevel: string;
    levels: {
      beginner: string;
      intermediate: string;
      expert: string;
    };
    levelInfo: {
      beginner: { description: string; ctaButton: string; ctaLink: string; };
      intermediate: { description: string; ctaButton: string; ctaLink: string; };
      expert: { description: string; ctaButton: string; ctaLink: string; };
    };
    retakeButton: string;
    showAnswersButton: string;
    hideAnswersButton: string;
    yourAnswerLabel: string;
    correctAnswerLabel: string;
    explanationLabel: string;
    backToQuizzesButton: string;
  };
  emailCapture: {
    title: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successMessage: string;
    invalidEmailError: string;
  };
  error: {
    title: string;
    message: string;
  };
}


export interface Dictionary {
  navLinks: {
    home: NavLinkDictionaryItem;
    cv: NavLinkDictionaryItem;
    projects: NavLinkDictionaryItem;
    templates: NavLinkDictionaryItem;
    quiz: NavLinkDictionaryItem;
    contact: NavLinkDictionaryItem;
  };
  navbar: NavbarDictionaryItems;
  footer: FooterDictionaryItems;
  homePage: HomePageDictionaryItems;
  pageHeaders: PageHeaderDictionaryItems;
  contactForm: ContactFormDictionaryItems;
  cvPage: CVPageDictionaryItems;
  projectsPage: ProjectsPageDictionaryItems;
  quizPage: QuizPageDictionaryItems;
  excelQuizTopicsPage: ExcelQuizTopicsPageDictionaryItems;
  vbaQuizTopicsPage: VbaQuizTopicsPageDictionaryItems;
  quizFormulasPage: QuizFormulasPageDictionaryItems;
  excelFormulasQuiz: ExcelFormulasQuizData;
  excelPivotTablesQuiz: ExcelPivotTablesQuizData;
  excelChartsQuiz: ExcelChartsQuizData;
  excelDataManagementQuiz: ExcelDataManagementQuizData;
  excelPowerPivotQuiz: ExcelPowerPivotQuizData;
  excelPowerQueryQuiz: ExcelPowerQueryQuizData;
  vbaVariablesQuiz: VbaVariablesQuizData;
  quizEmail: QuizEmailDictionaryItems;
  metadata: {
    title: string;
    description: string;
  };
}

const frQuizEmail: QuizEmailDictionaryItems = {
  subject: "Vos résultats au quiz",
  greeting: "Bonjour,",
  intro: (topic) => `Merci d'avoir testé vos connaissances sur <strong>${topic}</strong>. Voici un résumé détaillé de votre performance :`,
  summaryTitle: "Résumé de votre performance",
  score: "Score final",
  level: "Niveau estimé",
  detailsTitle: "Détail de vos réponses",
  question: (num) => `Question ${num}`,
  yourAnswer: "Votre réponse",
  correctAnswer: "Réponse correcte",
  explanation: "Explication",
  outro: "C'est un excellent point de départ ! Pour continuer à progresser, n'hésitez pas à consulter mes offres de formation ou à me contacter directement pour un programme sur mesure.",
  signature: "Oussama Berraies",
};

const frExcelFormulasQuiz: ExcelFormulasQuizData = {
  title: "Quiz : Formules et Fonctions Excel",
  description: "20 questions pour évaluer votre niveau, de débutant à expert.",
  questions: [
    // Beginner Level (Q1-Q8)
    {
      question: "Pour calculer la somme des cellules de A1 à A10, quelle formule utilisez-vous ?",
      options: ["=AJOUTER(A1:A10)", "=TOTAL(A1:A10)", "=SOMME(A1:A10)", "=COMBINER(A1:A10)"],
      correctAnswerIndex: 2,
      explanation: "SOMME est la fonction fondamentale pour additionner une plage de nombres."
    },
    {
      question: "Que fait le symbole `$` dans une référence de cellule comme `$A$1` ?",
      options: ["Il formate la cellule en devise.", "Il crée une référence absolue qui ne change pas lorsque la formule est copiée.", "Il indique une valeur texte.", "Il supprime la cellule."],
      correctAnswerIndex: 1,
      explanation: "Le `$` crée une référence absolue. `$A$1` bloque la colonne et la ligne, `A$1` bloque uniquement la ligne, et `$A1` bloque uniquement la colonne."
    },
    {
      question: "Quelle fonction utiliseriez-vous pour afficher \"Pass\" si un score en C2 est 60 ou plus, et \"Fail\" sinon ?",
      options: ["=SI(C2>=60; \"Pass\"; \"Fail\")", "=CHOISIR(C2; \"Pass\"; \"Fail\")", "=SWITCH(C2>=60; \"Pass\"; \"Fail\")", "=RESULTAT(C2>=60; \"Pass\"; \"Fail\")"],
      correctAnswerIndex: 0,
      explanation: "La fonction SI évalue une condition logique et renvoie une valeur pour un résultat VRAI et une autre pour un résultat FAUX."
    },
    {
      question: "Quelle fonction compte le nombre de cellules dans une plage qui contiennent des nombres ?",
      options: ["NB", "NBVAL", "NB.VIDE", "NB.SI"],
      correctAnswerIndex: 0,
      explanation: "NB compte uniquement les valeurs numériques. NBVAL compte toutes les cellules non vides (texte et nombres), et NB.VIDE compte les cellules vides."
    },
    {
      question: "Pour trouver une valeur dans la première colonne d'un tableau et retourner une valeur correspondante d'une autre colonne, quelle fonction est la plus courante ?",
      options: ["CHERCHER", "TROUVER", "RECHERCHE", "RECHERCHEV"],
      correctAnswerIndex: 3,
      explanation: "RECHERCHEV (Recherche Verticale) est une fonction classique pour rechercher une valeur dans la colonne la plus à gauche d'un tableau et retourner une valeur d'une colonne spécifiée dans la même ligne."
    },
    {
      question: "Comment joindre le texte de la cellule A1 (\"Bonjour\") et B1 (\"Monde\") pour créer \"BonjourMonde\" ?",
      options: ["=A1 & B1", "=JOINDRE(A1; B1)", "=COMBINER(A1; B1)", "=A1 + B1"],
      correctAnswerIndex: 0,
      explanation: "L'opérateur esperluette (`&`) est le moyen le plus simple de concaténer (joindre) des chaînes de texte. La fonction CONCATENER fonctionne également."
    },
    {
      question: "Quelle fonction retourne la date actuelle sans l'heure ?",
      options: ["MAINTENANT()", "DATEACTUELLE()", "DATE()", "AUJOURDHUI()"],
      correctAnswerIndex: 3,
      explanation: "AUJOURDHUI() retourne la date actuelle, qui se met à jour à chaque ouverture ou recalcul du classeur. MAINTENANT() retourne la date et l'heure actuelles."
    },
    {
      question: "Pour empêcher une formule d'afficher une erreur comme `#N/A`, et afficher un message personnalisé à la place, vous devez l'envelopper dans quelle fonction ?",
      options: ["PASDERREUR()", "ESTERREUR()", "SIERREUR()", "EPURAGE()"],
      correctAnswerIndex: 2,
      explanation: "SIERREUR évalue une formule et retourne son résultat si ce n'est pas une erreur. Si c'est une erreur, elle retourne une valeur alternative spécifiée (comme \"\" ou \"Non Trouvé\")."
    },
    // Advanced Level (Q9-Q15)
    {
      question: "Pour compter les lignes où la colonne A est \"Nord\" ET la colonne B est \"Matériel\", quelle fonction est la meilleure ?",
      options: ["NB.SI(A:A; \"Nord\") + NB.SI(B:B; \"Matériel\")", "ET(NB.SI(A:A; \"Nord\"); NB.SI(B:B; \"Matériel\"))", "NB.SI.ENS(A:A; \"Nord\"; B:B; \"Matériel\")", "BDNB(A:B; \"Matériel\")"],
      correctAnswerIndex: 2,
      explanation: "NB.SI.ENS est conçu spécifiquement pour compter des cellules en fonction de plusieurs critères sur différentes plages."
    },
    {
      question: "Quel est un avantage clé de l'utilisation de `INDEX` et `EQUIV` par rapport à `RECHERCHEV` ?",
      options: ["C'est plus rapide pour les petits ensembles de données.", "Il peut rechercher des valeurs dans n'importe quelle colonne, pas seulement celle la plus à gauche.", "Il ne fonctionne qu'avec des nombres.", "Il ignore automatiquement les erreurs."],
      correctAnswerIndex: 1,
      explanation: "La combinaison INDEX/EQUIV est plus flexible. EQUIV trouve la position d'une valeur, et INDEX retourne la valeur à cette position, donc la colonne de recherche peut être à droite de la colonne de retour, ce qui est impossible avec RECHERCHEV."
    },
    {
      question: "Quel est le résultat de la formule `=SOMMEPROD({1;2;3}; {10;20;30})` ?",
      options: ["66", "140", "60", "Une erreur #VALEUR!"],
      correctAnswerIndex: 1,
      explanation: "SOMMEPROD multiplie les composants correspondants dans les matrices données et retourne la somme de ces produits. (1*10 + 2*20 + 3*30) = 10 + 40 + 90 = 140."
    },
    {
      question: "Quelle fonction permet de joindre une plage de cellules avec un délimiteur spécifique (par exemple, une virgule) et d'ignorer les cellules vides ?",
      options: ["CONCAT", "CONCATENER", "JOINDRE.TEXTE", "FUSIONNER"],
      correctAnswerIndex: 2,
      explanation: "JOINDRE.TEXTE est une fonction moderne et puissante spécialement conçue pour cet usage. Son deuxième argument permet de choisir d'ignorer les cellules vides."
    },
    {
      question: "Pour obtenir la dernière valeur numérique d'une colonne qui contient des types de données mixtes, quelle formule est une technique avancée courante ?",
      options: ["=MAX(A:A)", "=RECHERCHEV(9,99E+307;A:A;1;VRAI)", "=RECHERCHE(2; 1/(ESTNUM(A:A)); A:A)", "=PRENDRE(A:A; -1)"],
      correctAnswerIndex: 2,
      explanation: "La formule `RECHERCHE(2; 1/(...))` est une technique classique et robuste. Elle crée une matrice de 1 et d'erreurs, et `RECHERCHE` trouve la position du dernier 1, correspondant au dernier nombre."
    },
    {
      question: "Que fait l'opérateur double unaire (`--`) dans une formule comme `=SOMMEPROD(--(A1:A10=\"Nord\"))` ?",
      options: ["Il soustrait la valeur de zéro.", "Il convertit les valeurs VRAI/FAUX en 1 et 0.", "C'est une faute de frappe et provoquera une erreur.", "Il fait exécuter la formule deux fois pour une meilleure précision."],
      correctAnswerIndex: 1,
      explanation: "Le test logique `(A1:A10=\"Nord\")` retourne une matrice de valeurs VRAI/FAUX. L'opérateur double unaire est un moyen efficace de forcer cette matrice booléenne à devenir une matrice numérique de 1 et 0, que SOMMEPROD peut ensuite additionner."
    },
    {
      question: "Comment pouvez-vous arrondir un nombre en A1 au multiple de 50 le plus proche ?",
      options: ["=ARRONDI(A1; 50)", "=ARRONDI.AU.MULTIPLE(A1; 50)", "=PLAFOND(A1; 50)", "=ARRONDI.SUP(A1; -2)"],
      correctAnswerIndex: 1,
      explanation: "ARRONDI.AU.MULTIPLE est spécifiquement conçue pour arrondir un nombre au multiple spécifié le plus proche."
    },
    // Expert Level (Q16-Q20)
    {
      question: "Quelle fonction moderne est généralement considérée comme un remplacement supérieur pour `RECHERCHEV`, `RECHERCHEH`, et `INDEX/EQUIV` en raison de sa flexibilité et de sa syntaxe plus simple ?",
      options: ["SUPERRECHERCHE", "RECHERCHEX", "LIREDONNEESTABCROISDYNAMIQUE", "REQUETE"],
      correctAnswerIndex: 1,
      explanation: "RECHERCHEX est le successeur moderne des anciennes fonctions de recherche. Il recherche une correspondance exacte par défaut, peut rechercher de bas en haut, et gère de manière robuste les insertions/suppressions de colonnes sans se casser."
    },
    {
      question: "Pour améliorer la lisibilité et les performances en calculant une valeur une seule fois, quelle fonction devriez-vous utiliser pour attribuer des noms à ces résultats intermédiaires ?",
      options: ["DEFINIR", "VAR", "LET", "CALCULER"],
      correctAnswerIndex: 2,
      explanation: "La fonction LET vous permet de déclarer des variables nommées dans la portée d'une formule. Cela rend les formules plus faciles à lire et peut optimiser les performances en empêchant le même calcul d'être répété."
    },
    {
      question: "Quelle fonction vous permet de créer vos propres fonctions personnalisées et réutilisables (par exemple, `MAFONCTION`) directement dans la barre de formule sans utiliser VBA ?",
      options: ["CREER.FONCTION", "FONCTION.PERSO", "SCRIPT", "LAMBDA"],
      correctAnswerIndex: 3,
      explanation: "La fonction LAMBDA vous permet de définir des fonctions anonymes. Lorsque vous attribuez un LAMBDA à un nom dans le Gestionnaire de noms, il devient une nouvelle fonction réutilisable dans votre classeur."
    },
    {
      question: "Quelle fonction de tableau dynamique est conçue pour extraire un sous-ensemble d'une table qui répond à une condition logique spécifique (par exemple, toutes les ventes de la région \"Nord\") ?",
      options: ["EXTRAIRE", "SELECTIONNER", "FILTRE", "REQUETE"],
      correctAnswerIndex: 2,
      explanation: "La fonction FILTRE est conçue précisément pour cela. Elle prend un tableau et un argument \"inclure\" (un tableau booléen), ne retournant que les lignes ou colonnes où l'argument inclure est VRAI."
    },
    {
      question: "Pour calculer un total cumulé pour une colonne de nombres en A2:A10, quelle fonction d'aide LAMBDA est la plus appropriée ?",
      options: ["MAP", "REDUCE", "BYROW", "SCAN"],
      correctAnswerIndex: 3,
      explanation: "La fonction SCAN traite un tableau et retourne les valeurs intermédiaires accumulées. C'est parfait pour générer un total cumulé, car elle montre la valeur accumulée à chaque étape. REDUCE ne retourne que le total final."
    }
  ]
};

const frExcelPivotTablesQuiz: ExcelPivotTablesQuizData = {
  title: "Quiz : Tableaux Croisés Dynamiques Excel",
  description: "15 questions pour évaluer votre capacité à synthétiser et analyser les données.",
  questions: [
    // Débutant
    {
      question: "Quel est l'objectif principal d'un Tableau Croisé Dynamique (TCD) ?",
      options: [
        "Créer des graphiques complexes.",
        "Écrire des macros VBA.",
        "Synthétiser, analyser et explorer de grandes quantités de données.",
        "Mettre en forme des cellules avec des couleurs."
      ],
      correctAnswerIndex: 2,
      explanation: "Le TCD est l'outil par excellence pour résumer rapidement des données brutes en un rapport interactif."
    },
    {
      question: "Pour créer un TCD, où devez-vous d'abord cliquer dans le ruban Excel ?",
      options: [
        "Onglet Données",
        "Onglet Insertion",
        "Onglet Accueil",
        "Onglet Formules"
      ],
      correctAnswerIndex: 1,
      explanation: "L'option 'Tableau Croisé Dynamique' se trouve dans l'onglet 'Insertion', groupe 'Tableaux'."
    },
    {
      question: "Dans un TCD, quelle zone est utilisée pour effectuer des calculs (somme, moyenne, etc.) sur des données numériques ?",
      options: [
        "Filtres",
        "Colonnes",
        "Lignes",
        "Valeurs"
      ],
      correctAnswerIndex: 3,
      explanation: "La zone 'Valeurs' est spécifiquement conçue pour agréger des données numériques à l'aide de fonctions comme Somme, Moyenne, Nombre, etc."
    },
    {
      question: "Comment pouvez-vous rapidement filtrer les données affichées dans un TCD pour n'afficher que les ventes d'une certaine région ?",
      options: [
        "En modifiant la source de données.",
        "En utilisant un graphique croisé dynamique.",
        "En faisant glisser le champ 'Région' dans la zone 'Filtres'.",
        "En triant la colonne des valeurs."
      ],
      correctAnswerIndex: 2,
      explanation: "La zone 'Filtres' permet de créer un filtre global pour l'ensemble du tableau croisé dynamique, ce qui est idéal pour isoler des sous-ensembles de données."
    },
    {
      question: "Que se passe-t-il si vous double-cliquez sur une cellule de valeur dans un TCD (par exemple, la somme des ventes) ?",
      options: [
        "Le TCD est supprimé.",
        "Une nouvelle feuille est créée affichant toutes les lignes de données sources qui composent cette valeur.",
        "La cellule entre en mode édition.",
        "Un graphique est automatiquement créé."
      ],
      correctAnswerIndex: 1,
      explanation: "C'est une fonctionnalité puissante appelée 'Drill Down' qui permet de voir instantanément les données détaillées derrière un chiffre agrégé."
    },
    // Avancé
    {
      question: "Dans un TCD contenant des dates quotidiennes, comment pouvez-vous les regrouper pour afficher les totaux par mois et par année ?",
      options: [
        "En utilisant la fonction `JOINDRE.TEXTE`.",
        "En créant des colonnes supplémentaires dans les données sources.",
        "En faisant un clic droit sur une date dans le TCD et en choisissant 'Grouper'.",
        "En ajoutant un filtre chronologique."
      ],
      correctAnswerIndex: 2,
      explanation: "La fonctionnalité 'Grouper' est l'outil intégré pour agréger des dates (par jours, mois, trimestres, années) ou des nombres (par intervalles) directement dans le TCD."
    },
    {
      question: "Qu'est-ce qu'un 'Champ calculé' dans un TCD ?",
      options: [
        "Une formule qui existe dans les données sources.",
        "Un champ qui utilise une macro VBA.",
        "Une nouvelle colonne dans le TCD créée à l'aide d'une formule qui utilise d'autres champs du TCD.",
        "Un filtre appliqué au TCD."
      ],
      correctAnswerIndex: 2,
      explanation: "Un champ calculé permet d'effectuer des calculs sur des données agrégées (par ex., `='Chiffre d\'affaires' / Quantité`) sans avoir à modifier les données sources."
    },
    {
      question: "Quelle est la principale différence entre un Segment (Slicer) et un Filtre de rapport classique ?",
      options: [
        "Un segment ne peut filtrer qu'un seul champ à la fois.",
        "Un segment est un objet visuel et interactif (boutons) qui peut contrôler plusieurs TCD simultanément.",
        "Un segment modifie les données sources.",
        "Un filtre est plus rapide qu'un segment."
      ],
      correctAnswerIndex: 1,
      explanation: "Les segments offrent une expérience de filtrage beaucoup plus conviviale et visuelle, et leur capacité à se connecter à plusieurs TCD/graphiques les rend parfaits pour les tableaux de bord."
    },
    {
      question: "À quoi sert l'option 'Afficher les valeurs comme -> % du total de la colonne' ?",
      options: [
        "Elle formate les nombres en pourcentages.",
        "Elle calcule la contribution de chaque cellule par rapport au total de sa colonne.",
        "Elle crée un nouveau champ calculé.",
        "Elle filtre les valeurs supérieures à 100%."
      ],
      correctAnswerIndex: 1,
      explanation: "C'est un moyen rapide et puissant de changer la perspective d'analyse, passant de valeurs absolues à des contributions relatives sans écrire de formules."
    },
    {
      question: "Pour vous assurer que votre TCD se met à jour automatiquement lorsque vous ajoutez de nouvelles données à votre tableau source, quelle est la meilleure pratique ?",
      options: [
        "Recréer le TCD à chaque fois.",
        "Formater vos données sources en tant que Tableau Excel (Ctrl+L) avant de créer le TCD.",
        "Utiliser la fonction `INDIRECT`.",
        "Verrouiller les cellules de la source de données."
      ],
      correctAnswerIndex: 1,
      explanation: "Utiliser un Tableau Excel permet au TCD de reconnaître automatiquement les nouvelles lignes et colonnes, il suffit alors d'actualiser le TCD pour les inclure."
    },
    // Expert
    {
      question: "Quelle fonction est spécifiquement conçue pour extraire une valeur d'un TCD en utilisant ses libellés de ligne et de colonne, mais est souvent considérée comme rigide et peu performante ?",
      options: [
        "`RECHERCHEV`",
        "`INDEX`/`EQUIV`",
        "`LIREDONNEESTABCROISDYNAMIQUE`",
        "`RECHERCHEX`"
      ],
      correctAnswerIndex: 2,
      explanation: "`LIREDONNEESTABCROISDYNAMIQUE` est générée automatiquement par Excel lorsque vous pointez vers une cellule de TCD depuis une formule. Elle est précise mais peut devenir très longue et se casse si la structure du TCD change."
    },
    {
      question: "Qu'est-ce qu'un 'Élément calculé' dans un TCD, et en quoi est-il différent d'un 'Champ calculé' ?",
      options: [
        "C'est un autre nom pour un champ calculé.",
        "Il crée une nouvelle ligne ou colonne dans un champ existant en effectuant des opérations sur d'autres éléments de ce même champ (ex: 'Europe' = 'France' + 'Allemagne').",
        "Il nécessite du code VBA pour fonctionner.",
        "Il ne peut effectuer que des additions."
      ],
      correctAnswerIndex: 1,
      explanation: "Un champ calculé opère sur d'autres *champs* (colonnes), tandis qu'un élément calculé opère sur d'autres *éléments* (lignes/items) au sein d'un même champ. C'est une distinction subtile mais cruciale."
    },
    {
      question: "Pour analyser des données provenant de plusieurs tables liées (par exemple, une table de Ventes et une table de Produits) dans un seul TCD, quelle fonctionnalité d'Excel devez-vous utiliser ?",
      options: [
        "La consolidation de données.",
        "La fonction `JOINDRE.TEXTE`.",
        "Le Modèle de données (Power Pivot).",
        "Le gestionnaire de scénarios."
      ],
      correctAnswerIndex: 2,
      explanation: "Le Modèle de données permet de créer des relations entre différentes tables, créant ainsi une base de données relationnelle sur laquelle le TCD peut opérer, ce qui est beaucoup plus puissant que de tout joindre dans une seule grande table."
    },
    {
      question: "Dans un TCD basé sur le Modèle de données, comment pouvez-vous compter le nombre de clients *uniques* ayant acheté un produit, au lieu de compter le nombre total de transactions ?",
      options: [
        "En utilisant la fonction `NB.SI` dans un champ calculé.",
        "En faisant un clic droit sur le champ dans la zone Valeurs, puis 'Synthétiser les valeurs par -> Nombre'.",
        "En faisant un clic droit sur le champ dans la zone Valeurs, puis 'Paramètres des champs de valeurs' et en choisissant 'Nombre de valeurs distinctes'.",
        "Cela est impossible sans VBA."
      ],
      correctAnswerIndex: 2,
      explanation: "Le calcul 'Nombre de valeurs distinctes' (Distinct Count) est l'une des fonctionnalités les plus puissantes du Modèle de données, résolvant un problème qui était historiquement très complexe à résoudre dans les TCD classiques."
    },
    {
      question: "Quel est le principal inconvénient de l'utilisation d'Éléments calculés ?",
      options: [
        "Ils ralentissent considérablement le TCD.",
        "Ils sont inclus dans les totaux généraux, ce qui peut fausser les résultats globaux (double comptage).",
        "Ils ne peuvent pas être utilisés dans les graphiques croisés dynamiques.",
        "Ils ne fonctionnent qu'avec des nombres entiers."
      ],
      correctAnswerIndex: 1,
      explanation: "C'est un piège classique : si vous créez un élément 'Europe' = 'France' + 'Allemagne', le total général inclura la France, l'Allemagne ET l'Europe, comptant ainsi ces pays en double. Il faut souvent les masquer ou utiliser d'autres techniques pour des regroupements propres."
    }
  ]
};

const frExcelChartsQuiz: ExcelChartsQuizData = {
  title: "Quiz : Graphiques et Mise en Forme Excel",
  description: "20 questions pour tester vos compétences en visualisation de données et mise en forme conditionnelle.",
  questions: [
    // Débutant
    {
      question: "Comment créer un graphique en barres simple à partir d'une sélection de données ?",
      options: [
        "Aller dans l'onglet 'Données' et cliquer sur 'Graphique'.",
        "Aller dans l'onglet 'Insertion' et choisir un type de graphique dans le groupe 'Graphiques'.",
        "Faire un clic droit sur les données et choisir 'Créer un graphique'.",
        "Utiliser la formule =GRAPHBARRES(A1:B10)."
      ],
      correctAnswerIndex: 1,
      explanation: "Tous les outils de création de graphiques se trouvent dans le groupe 'Graphiques' de l'onglet 'Insertion' du ruban."
    },
    {
      question: "Quel est le cas d'usage idéal pour un graphique en secteurs (camembert) ?",
      options: [
        "Montrer des tendances sur une période.",
        "Comparer des valeurs entre de nombreuses catégories.",
        "Montrer la proportion de chaque partie par rapport à un tout.",
        "Afficher des relations entre deux variables."
      ],
      correctAnswerIndex: 2,
      explanation: "Un graphique en secteurs est parfait pour montrer comment des parties individuelles composent un total, comme des parts de marché ou une répartition budgétaire. Il est moins efficace pour comparer plusieurs catégories entre elles."
    },
    {
      question: "Pour ajouter un titre à votre graphique, quel élément devez-vous ajouter ?",
      options: [
        "Étiquettes de données",
        "Légende",
        "Titre du graphique",
        "Titres des axes"
      ],
      correctAnswerIndex: 2,
      explanation: "L'élément 'Titre du graphique' peut être ajouté via le bouton '+' vert (Éléments de graphique) à côté du graphique, ou depuis l'onglet 'Création de graphique'."
    },
    {
      question: "À quoi sert une légende de graphique ?",
      options: [
        "À afficher le titre principal du graphique.",
        "À identifier quelle couleur ou quel motif correspond à quelle série de données.",
        "À montrer la valeur exacte de chaque point de données.",
        "À ajouter une image de fond au graphique."
      ],
      correctAnswerIndex: 1,
      explanation: "La légende est cruciale pour comprendre les graphiques avec plusieurs séries de données, car elle fournit une clé pour interpréter les données."
    },
    {
      question: "Qu'est-ce que la 'Mise en forme conditionnelle' ?",
      options: [
        "Un outil pour formater les graphiques automatiquement.",
        "Un moyen de changer l'apparence des cellules en fonction de règles ou de critères spécifiques.",
        "Une fonction pour calculer des moyennes.",
        "Une fonctionnalité pour verrouiller des cellules."
      ],
      correctAnswerIndex: 1,
      explanation: "La mise en forme conditionnelle, située dans l'onglet 'Accueil', permet de formater dynamiquement des cellules (couleur, icônes, etc.) en fonction de leurs valeurs, ce qui facilite l'analyse visuelle."
    },
    {
      question: "Quelle règle de mise en forme conditionnelle utiliseriez-vous pour surligner tous les chiffres d'affaires supérieurs à 10 000 € ?",
      options: [
        "Règles des valeurs les plus/moins élevées -> 10 % des valeurs les plus élevées",
        "Barres de données",
        "Règles de mise en surbrillance des cellules -> Supérieur à...",
        "Nuances de couleurs"
      ],
      correctAnswerIndex: 2,
      explanation: "La catégorie 'Règles de mise en surbrillance des cellules' offre des options simples pour formater les cellules basées sur des comparaisons comme 'Supérieur à', 'Inférieur à' ou 'Égal à'."
    },
    {
      question: "Qu'est-ce qu'un 'Graphique Sparkline' ?",
      options: [
        "Un type de mise en forme conditionnelle.",
        "Un petit graphique miniature qui tient dans une seule cellule.",
        "Un axe secondaire sur un graphique.",
        "Un titre pour un graphique."
      ],
      correctAnswerIndex: 1,
      explanation: "Les graphiques Sparkline sont des graphiques minuscules placés dans une cellule pour fournir une représentation visuelle rapide des tendances des données à côté des chiffres bruts."
    },
    {
      question: "Comment changer le type d'un graphique existant (par exemple, d'un graphique à barres à un graphique en courbes) ?",
      options: [
        "Il faut supprimer le graphique et en créer un nouveau.",
        "En faisant glisser les coins du graphique.",
        "Faire un clic droit sur le graphique et sélectionner 'Modifier le type de graphique'.",
        "Dans l'onglet 'Mise en page'."
      ],
      correctAnswerIndex: 2,
      explanation: "Excel facilite le changement de type de graphique sans perdre vos données ou votre mise en forme. Cette option est disponible dans le menu contextuel du clic droit ou dans l'onglet 'Création de graphique'."
    },
    // Avancé
    {
      question: "Qu'est-ce qu'un 'Graphique combiné' ?",
      options: [
        "Un graphique qui combine des données de plusieurs feuilles de calcul.",
        "Un graphique qui utilise deux ou plusieurs types de graphiques différents (ex: histogramme et courbe) dans un seul graphique.",
        "Un graphique en 3D.",
        "Un graphique créé avec une formule."
      ],
      correctAnswerIndex: 1,
      explanation: "Un graphique combiné est utilisé pour afficher des données de types ou d'échelles différents, comme tracer le volume des ventes (colonnes) par rapport à la marge bénéficiaire (courbe)."
    },
    {
      question: "Quand est-il nécessaire d'utiliser un axe secondaire dans un graphique ?",
      options: [
        "Quand on a plus de cinq séries de données.",
        "Quand on trace deux séries de données avec des ordres de grandeur très différents (ex: des ventes en millions et un taux de croissance en pourcentage).",
        "Pour tous les graphiques en courbes.",
        "Pour rendre le graphique plus coloré."
      ],
      correctAnswerIndex: 1,
      explanation: "Un axe secondaire permet d'afficher correctement deux échelles de valeurs différentes sur le même graphique, évitant qu'une série ne paraisse plate ou insignifiante."
    },
    {
      question: "Comment créer une règle de mise en forme conditionnelle basée sur une formule ?",
      options: [
        "Ce n'est pas possible dans Excel.",
        "Aller dans Mise en forme conditionnelle -> Nouvelle règle -> 'Utiliser une formule pour déterminer pour quelles cellules le format sera appliqué'.",
        "Aller dans Barres de données -> Autres règles.",
        "Utiliser la fonction =FORMAT()."
      ],
      correctAnswerIndex: 2,
      explanation: "L'utilisation d'une formule offre une flexibilité ultime, vous permettant de créer des règles de mise en forme basées sur n'importe quelle condition logique que vous pouvez écrire, comme formater une ligne entière en fonction de la valeur d'une seule cellule."
    },
    {
      question: "À quoi sert l'outil 'Reproduire la mise en forme' de l'onglet Accueil ?",
      options: [
        "À peindre des couleurs sur un graphique.",
        "À créer un nouveau graphique.",
        "À copier rapidement toute la mise en forme (y compris conditionnelle) d'une cellule ou plage à une autre.",
        "À changer la police du texte."
      ],
      correctAnswerIndex: 2,
      explanation: "Le 'Pinceau de mise en forme' est un énorme gain de temps. Il copie tous les aspects de la mise en forme, de la taille et couleur de police aux formats de nombre et règles de mise en forme conditionnelle."
    },
    {
      question: "Comment créer un titre de graphique dynamique qui est lié à la valeur d'une cellule ?",
      options: [
        "Il faut utiliser une macro VBA.",
        "Double-cliquer sur le titre et taper la référence de la cellule.",
        "Sélectionner le titre du graphique, taper `=` dans la barre de formule, puis cliquer sur la cellule à lier.",
        "Utiliser la fonction =TITREGRAPHIQUE()."
      ],
      correctAnswerIndex: 2,
      explanation: "Cette technique permet à votre titre de graphique de se mettre à jour automatiquement chaque fois que le contenu de la cellule liée change, ce qui est excellent pour les rapports interactifs."
    },
    {
      question: "Que représentent les 'Barres de données' en mise en forme conditionnelle ?",
      options: [
        "Elles mettent en surbrillance les 10 valeurs les plus élevées.",
        "Elles ajoutent de petits graphiques à barres à l'intérieur de chaque cellule, la longueur de la barre représentant la valeur de la cellule par rapport aux autres.",
        "Elles ajoutent des barres d'erreur à un graphique.",
        "Elles créent un nouveau graphique à barres sur la feuille."
      ],
      correctAnswerIndex: 1,
      explanation: "Les barres de données fournissent une comparaison visuelle rapide des valeurs dans la cellule, ce qui facilite le repérage des chiffres élevés et bas dans une plage sans avoir besoin d'un graphique séparé."
    },
    {
      question: "Que fait l'ajout d'une 'Courbe de tendance' à un graphique ?",
      options: [
        "Elle relie tous les points de données par une ligne droite.",
        "Elle met en évidence les points de données les plus hauts et les plus bas.",
        "Elle affiche la direction générale ou le modèle dans les données, souvent en utilisant une droite de régression.",
        "Elle change l'arrière-plan du graphique."
      ],
      correctAnswerIndex: 2,
      explanation: "Une courbe de tendance est un puissant outil d'analyse qui représente visuellement la tendance de vos données, aidant à identifier des modèles et à faire des prévisions."
    },
    // Expert
    {
      question: "Comment pouvez-vous créer une plage de graphique dynamique qui s'étend automatiquement lorsque de nouvelles données sont ajoutées à votre source ?",
      options: [
        "Il faut manuellement mettre à jour la source de données du graphique à chaque fois.",
        "Formater les données sources en tant que Tableau Excel (Ctrl+L) avant de créer le graphique.",
        "En verrouillant la position du graphique.",
        "En enregistrant le graphique comme une image."
      ],
      correctAnswerIndex: 1,
      explanation: "Utiliser un Tableau Excel est la méthode la plus robuste et recommandée. La source de données du graphique est liée à l'objet tableau, donc elle inclut automatiquement toutes les nouvelles lignes ou colonnes ajoutées au tableau."
    },
    {
      question: "À quoi sert principalement un graphique en 'Cascade' (Waterfall) ?",
      options: [
        "À comparer les parties d'un tout.",
        "À montrer la relation entre deux ensembles de nombres.",
        "À visualiser l'effet cumulatif de valeurs positives et négatives introduites séquentiellement.",
        "À afficher des données hiérarchiques."
      ],
      correctAnswerIndex: 2,
      explanation: "Un graphique en cascade est excellent pour comprendre comment une valeur initiale est affectée par une série de valeurs intermédiaires positives et négatives, comme pour analyser le compte de résultat d'une entreprise."
    },
    {
      question: "Comment enregistrez-vous un graphique personnalisé pour le réutiliser plus tard dans d'autres classeurs ?",
      options: [
        "Copier et coller le graphique.",
        "Faire un clic droit sur le graphique et sélectionner 'Enregistrer comme modèle'.",
        "Prendre une capture d'écran du graphique.",
        "Utiliser le Pinceau de mise en forme."
      ],
      correctAnswerIndex: 1,
      explanation: "Enregistrer un graphique comme modèle (fichier .crtx) stocke tous ses paramètres de mise en forme et de disposition, vous permettant d'appliquer ce look personnalisé à n'importe quel autre graphique en quelques clics."
    },
    {
      question: "Comment pouvez-vous utiliser des Plages nommées pour définir les séries de données dans un graphique ?",
      options: [
        "Ce n'est pas possible ; il faut utiliser des références de cellules.",
        "Dans la boîte de dialogue 'Sélectionner les données sources', modifier une série et remplacer la référence de cellule dans le champ 'Valeurs de la série' par la plage nommée (ex: =Feuil1!MesVentes).",
        "En tapant le nom directement dans la légende du graphique.",
        "En créant une règle de mise en forme conditionnelle."
      ],
      correctAnswerIndex: 2,
      explanation: "L'utilisation de plages nommées rend les sources de données de vos graphiques beaucoup plus lisibles et gérables, surtout pour des plages complexes ou dynamiques définies avec des formules comme DECALER."
    },
    {
      question: "Quel est le principal avantage d'un graphique 'Rayons de soleil' (Sunburst) par rapport à un graphique 'Treemap' (Rectangle) ?",
      options: [
        "Il peut gérer des valeurs négatives.",
        "Il est meilleur pour montrer les tendances dans le temps.",
        "Il peut afficher plusieurs niveaux d'une hiérarchie dans une seule vue.",
        "Il est plus simple à formater."
      ],
      correctAnswerIndex: 2,
      explanation: "Les deux types de graphiques montrent des données hiérarchiques. Cependant, les anneaux concentriques d'un graphique 'Rayons de soleil' sont plus efficaces pour montrer comment les anneaux extérieurs (sous-catégories) se rapportent aux anneaux intérieurs (catégories parentes), affichant ainsi clairement plusieurs niveaux de hiérarchie."
    }
  ]
};

const frExcelDataManagementQuiz: ExcelDataManagementQuizData = {
  title: "Quiz : Gestion des Données Excel",
  description: "20 questions pour évaluer votre capacité à gérer et fiabiliser des bases de données.",
  questions: [
    // Débutant
    {
      question: "Quel outil permet de supprimer définitivement les lignes identiques d'un ensemble de données ?",
      options: [
        "Mise en forme conditionnelle",
        "Supprimer les doublons",
        "Trier et filtrer",
        "Remplissage instantané"
      ],
      correctAnswerIndex: 1,
      explanation: "L'outil 'Supprimer les doublons', situé dans l'onglet Données, est spécifiquement conçu pour trouver et supprimer des lignes entières en double."
    },
    {
      question: "Quelle est la manière la plus rapide d'appliquer un filtre sur une colonne de données ?",
      options: [
        "Utiliser l'outil de filtre 'Avancé'.",
        "Cliquer sur le bouton 'Filtrer' dans l'onglet Données pour ajouter des flèches de filtre aux en-têtes.",
        "Écrire une macro VBA.",
        "Créer un Tableau Croisé Dynamique."
      ],
      correctAnswerIndex: 1,
      explanation: "Le bouton Filtre (ou filtre automatique) est la méthode standard pour ajouter rapidement des listes déroulantes de filtrage à la ligne d'en-tête d'un jeu de données."
    },
    {
      question: "Quel est l'objectif principal de la 'Validation des données' ?",
      options: [
        "Vérifier les fautes d'orthographe.",
        "Restreindre le type de données ou les valeurs que les utilisateurs peuvent entrer dans une cellule.",
        "Trier les données numériquement.",
        "Mettre en forme les cellules en fonction de leur valeur."
      ],
      correctAnswerIndex: 1,
      explanation: "La validation des données est un outil proactif utilisé pour contrôler la saisie et prévenir les erreurs en définissant ce qui est considéré comme une entrée valide pour une cellule ou une plage."
    },
    {
      question: "Comment trier des données sur la base de plusieurs colonnes (ex: trier par Région, puis par Ventes) ?",
      options: [
        "Trier d'abord la colonne Ventes, puis la colonne Région.",
        "Il n'est pas possible de trier sur plus d'une colonne.",
        "Utiliser la boîte de dialogue 'Tri personnalisé' pour ajouter plusieurs niveaux de tri.",
        "Utiliser la fonction RECHERCHEV."
      ],
      correctAnswerIndex: 2,
      explanation: "La boîte de dialogue 'Tri personnalisé' vous permet de définir une hiérarchie de règles de tri, en spécifiant quelle colonne trier en premier, en deuxième, et ainsi de suite."
    },
    {
      question: "Comment mettre en évidence les valeurs en double dans une colonne sans les supprimer ?",
      options: [
        "En utilisant l'outil 'Supprimer les doublons'.",
        "En utilisant un Tableau Croisé Dynamique.",
        "Mise en forme conditionnelle -> Règles de mise en surbrillance des cellules -> Valeurs en double.",
        "En utilisant la fonction NB."
      ],
      correctAnswerIndex: 2,
      explanation: "La mise en forme conditionnelle est l'outil parfait pour identifier visuellement les doublons (ou les valeurs uniques) sans altérer les données elles-mêmes."
    },
    {
      question: "Quel outil vous permet de diviser le contenu d'une seule colonne en plusieurs colonnes (ex: 'Prénom Nom' en deux colonnes distinctes) ?",
      options: [
        "Grouper",
        "Consolider",
        "Convertir (Texte en colonnes)",
        "Filtrer"
      ],
      correctAnswerIndex: 2,
      explanation: "L'assistant 'Convertir (Texte en colonnes)' de l'onglet Données est conçu spécifiquement pour analyser les données d'une colonne et les répartir dans plusieurs, en se basant sur des délimiteurs ou des largeurs fixes."
    },
    {
      question: "La fonctionnalité 'Filtrer' vous permet de...",
      options: [
        "Supprimer définitivement les lignes qui ne correspondent pas à vos critères.",
        "Réorganiser les lignes dans un ordre spécifique.",
        "Masquer temporairement les lignes qui ne répondent pas à vos critères.",
        "Calculer la somme des lignes visibles."
      ],
      correctAnswerIndex: 2,
      explanation: "Le filtrage est une action non destructive qui masque les lignes, vous permettant de vous concentrer sur un sous-ensemble de vos données sans rien supprimer."
    },
    {
      question: "Pour créer une liste déroulante dans une cellule, quelle option de 'Validation des données' devez-vous utiliser ?",
      options: [
        "Autoriser : Tout",
        "Autoriser : Nombre entier",
        "Autoriser : Liste",
        "Autoriser : Personnalisé"
      ],
      correctAnswerIndex: 2,
      explanation: "L'option 'Liste' permet de définir un ensemble de valeurs autorisées (soit en les tapant, soit en faisant référence à une plage) qui apparaîtront sous forme de menu déroulant."
    },
    // Avancé
    {
      question: "Quel est l'avantage principal de l'outil 'Filtre avancé' par rapport au filtre automatique ?",
      options: [
        "Il est plus coloré.",
        "Il ne peut filtrer que sur un seul critère.",
        "Il permet des critères complexes (ex: (Ventes > 500 ET Région = 'Nord') OU (Ventes > 800)) et peut extraire les résultats vers un autre emplacement.",
        "Il fonctionne plus rapidement sur les petits jeux de données."
      ],
      correctAnswerIndex: 2,
      explanation: "Le Filtre avancé est beaucoup plus puissant pour les conditions logiques complexes et possède la capacité unique de copier les résultats filtrés vers une nouvelle plage, laissant les données originales intactes."
    },
    {
      question: "Pour utiliser l'outil 'Filtre avancé', que devez-vous préparer au préalable sur votre feuille de calcul ?",
      options: [
        "Un Tableau Croisé Dynamique.",
        "Un graphique.",
        "Une plage de critères.",
        "Une macro VBA."
      ],
      correctAnswerIndex: 2,
      explanation: "Vous devez mettre en place une plage spécifique sur votre feuille où vous définissez les en-têtes et les critères que le Filtre avancé utilisera pour évaluer les données."
    },
    {
      question: "Quelle fonction est spécifiquement conçue pour agréger des données (somme, moyenne, etc.) dans une liste filtrée, en ignorant les lignes masquées ?",
      options: [
        "SOMME",
        "SOMME.SI",
        "SOUS.TOTAL",
        "AGREGAT"
      ],
      correctAnswerIndex: 2,
      explanation: "La fonction SOUS.TOTAL est sensible aux filtres. Lorsqu'elle est utilisée avec les numéros de fonction de 1 à 11, elle calcule sur toutes les cellules, mais avec les numéros de 101 à 111, elle ne calcule que sur les cellules visibles."
    },
    {
      question: "À quoi sert la fonctionnalité 'Grouper' dans l'onglet Données ?",
      options: [
        "À fusionner plusieurs cellules en une seule.",
        "À créer un plan pour masquer ou afficher rapidement des groupes de lignes ou de colonnes.",
        "À regrouper différentes feuilles de calcul.",
        "À appliquer la même mise en forme à plusieurs cellules."
      ],
      correctAnswerIndex: 1,
      explanation: "Le groupement est utilisé pour créer des sections réductibles dans votre feuille de calcul, ce qui est très utile pour synthétiser des données sans créer de Tableau Croisé Dynamique."
    },
    {
      question: "Dans la Validation des données, que permet l'option 'Personnalisé' ?",
      options: [
        "Créer un message d'erreur personnalisé.",
        "Utiliser une formule pour définir la règle de validation.",
        "Autoriser n'importe quel type de donnée.",
        "Sélectionner parmi une liste de règles prédéfinies."
      ],
      correctAnswerIndex: 1,
      explanation: "L'option 'Personnalisé' offre une flexibilité ultime en vous permettant d'écrire n'importe quelle formule logique qui renvoie VRAI (pour les données valides) ou FAUX (pour les données non valides)."
    },
    {
      question: "L'outil 'Consolider' sert à...",
      options: [
        "Combiner des valeurs de plusieurs plages en une seule plage.",
        "Joindre du texte de différentes cellules.",
        "Créer un lien entre deux feuilles de calcul.",
        "Supprimer les lignes vides d'un jeu de données."
      ],
      correctAnswerIndex: 0,
      explanation: "Consolider est utile pour résumer des données provenant de rapports structurés de manière similaire (par exemple, sommer les ventes de feuilles mensuelles séparées) en un résumé principal."
    },
    {
      question: "Comment pouvez-vous vous assurer qu'une date entrée dans la cellule A1 est toujours un jour de semaine (lundi-vendredi) via la validation des données ?",
      options: [
        "Formule personnalisée : =ESTJOURSEMAINE(A1)",
        "Formule personnalisée : =JOURSEM(A1;2)<=5",
        "Ce n'est pas possible avec la validation des données.",
        "Autoriser : Jours de semaine uniquement"
      ],
      correctAnswerIndex: 1,
      explanation: "La formule `JOURSEM(A1;2)` renvoie un nombre de 1 (lundi) à 7 (dimanche). Par conséquent, vérifier si ce nombre est inférieur ou égal à 5 restreint efficacement la saisie à un jour de semaine."
    },
    // Expert
    {
      question: "Quelle fonctionnalité, introduite dans Excel 2013, est la plus puissante pour nettoyer et transformer des données provenant de sources multiples avant de les charger dans Excel ?",
      options: [
        "Validation des données",
        "Filtre avancé",
        "Get & Transform (Power Query)",
        "Remplissage instantané"
      ],
      correctAnswerIndex: 2,
      explanation: "Get & Transform, le nom public du moteur Power Query intégré à Excel, est un outil ETL (Extract, Transform, Load) dédié, bien plus puissant que toute autre fonctionnalité native d'Excel pour la préparation des données."
    },
    {
      question: "Dans Power Query, à quoi sert l'étape 'Supprimer les autres colonnes' ?",
      options: [
        "Elle supprime toutes les colonnes de la table.",
        "Elle masque les autres colonnes, mais elles peuvent être ramenées plus tard.",
        "Elle ne conserve que les colonnes sélectionnées, rendant la requête plus robuste aux ajouts futurs de colonnes dans la source.",
        "C'est juste une aide visuelle qui n'affecte pas le résultat final."
      ],
      correctAnswerIndex: 2,
      explanation: "C'est une bonne pratique clé. En sélectionnant explicitement les colonnes à conserver, votre requête ne se cassera pas si quelqu'un ajoute plus tard de nouvelles colonnes non désirées au fichier source."
    },
    {
      question: "Qu'est-ce que le 'Remplissage instantané' (Flash Fill) ?",
      options: [
        "Une manière plus rapide de calculer des formules.",
        "Une fonctionnalité qui complète automatiquement la saisie de données lorsqu'elle détecte un modèle dans vos actions.",
        "Un type de mise en forme conditionnelle.",
        "Un outil pour créer des graphiques rapidement."
      ],
      correctAnswerIndex: 1,
      explanation: "Le Remplissage instantané (Ctrl+E) est un outil intelligent qui reconnaît des motifs (comme extraire les prénoms d'un nom complet) et applique ce motif au reste de la colonne, économisant beaucoup de travail manuel."
    },
    {
      question: "Pour créer un lien entre deux tables basées sur une colonne commune (ex: ID Produit) pour une analyse croisée sans RECHERCHEV, vous devriez utiliser...",
      options: [
        "L'outil Consolider.",
        "Une série de formules complexes.",
        "Le Modèle de Données (Power Pivot).",
        "La Validation des données."
      ],
      correctAnswerIndex: 2,
      explanation: "Le Modèle de Données est le moteur de base de données relationnelle interne d'Excel. La création de relations entre les tables est la manière moderne et efficace d'analyser des données provenant de sources multiples, en particulier dans les Tableaux Croisés Dynamiques."
    },
    {
      question: "Dans Power Query, que fait 'Unpivot Columns' (Annuler le tableau croisé dynamique des colonnes) ?",
      options: [
        "Il fait pivoter toute la table de 90 degrés.",
        "Il transforme les colonnes sélectionnées en paires attribut-valeur, ce qui est idéal pour convertir des tables de données larges en un format tabulaire approprié.",
        "Il supprime les colonnes sélectionnées.",
        "Il trie les colonnes dans l'ordre inverse."
      ],
      correctAnswerIndex: 1,
      explanation: "L'opération 'Unpivot' est une étape cruciale de la transformation des données. Elle prend un format 'large' (ex: des colonnes pour Jan, Fév, Mar) et le transforme en un format 'long' (une colonne 'Mois' et une colonne 'Valeur'), qui est le format standard requis pour les TCD et la plupart des outils d'analyse."
    }
  ]
};

const frExcelPowerPivotQuiz: ExcelPowerPivotQuizData = {
  title: "Quiz : Power Pivot et DAX",
  description: "15 questions pour évaluer vos compétences sur le modèle de données, DAX et la création de KPIs.",
  questions: [
    // Débutant
    {
      question: "Qu'est-ce que le 'Modèle de Données' dans Excel ?",
      options: [
        "Une mise en forme spéciale pour les tableaux.",
        "Une collection de tables avec des relations entre elles, permettant des analyses complexes.",
        "Un autre nom pour un Tableau Croisé Dynamique.",
        "Une macro VBA pour importer des données."
      ],
      correctAnswerIndex: 1,
      explanation: "Le Modèle de Données est un moteur de base de données interne à Excel qui permet de travailler avec plusieurs tables de données liées entre elles, bien au-delà des capacités d'une seule table."
    },
    {
      question: "Comment crée-t-on une relation entre deux tables dans la fenêtre Power Pivot ?",
      options: [
        "En utilisant la fonction LIEN()",
        "En copiant-collant les colonnes.",
        "En faisant glisser la colonne clé d'une table vers la colonne correspondante de l'autre table en vue Diagramme.",
        "C'est automatique, on ne peut pas le faire manuellement."
      ],
      correctAnswerIndex: 2,
      explanation: "La vue Diagramme de Power Pivot est l'interface visuelle pour créer des relations 'un-à-plusieurs' en glissant-déposant les champs communs entre les tables."
    },
    {
      question: "Quelle est la principale différence entre une 'colonne calculée' et une 'mesure' en DAX ?",
      options: [
        "Une mesure est plus rapide.",
        "Une colonne calculée est stockée physiquement dans la table, tandis qu'une mesure est calculée à la volée en fonction du contexte du TCD.",
        "Il n'y a pas de différence.",
        "Une colonne calculée ne peut utiliser que des additions."
      ],
      correctAnswerIndex: 1,
      explanation: "Une colonne calculée ajoute une valeur statique à chaque ligne de la table, consommant de la mémoire. Une mesure est dynamique et son résultat dépend des filtres appliqués dans le TCD, ce qui est bien plus flexible."
    },
    {
      question: "Quelle est la fonction DAX la plus simple pour additionner tous les nombres d'une colonne 'Ventes' ?",
      options: [
        "TOTAL(Ventes[Montant])",
        "ADD(Ventes[Montant])",
        "SUM(Ventes[Montant])",
        "CALCULATE(Ventes[Montant])"
      ],
      correctAnswerIndex: 2,
      explanation: "`SUM` est la fonction d'agrégation de base en DAX, tout comme dans Excel, pour additionner les valeurs d'une colonne."
    },
    {
      question: "À quoi sert la fonction DAX `RELATED()` ?",
      options: [
        "À trouver des lignes en double.",
        "À récupérer une valeur d'une autre table liée, du côté 'un' de la relation.",
        "À calculer une moyenne.",
        "À filtrer les données."
      ],
      correctAnswerIndex: 1,
      explanation: "`RELATED` est utilisée dans les colonnes calculées pour 'remonter' une information d'une table de dimension (le côté 'un') vers une table de faits (le côté 'plusieurs')."
    },
    // Avancé
    {
      question: "Quelle fonction DAX est considérée comme la plus importante et la plus puissante car elle permet de modifier le contexte de filtre d'une expression ?",
      options: [
        "FILTER",
        "CALCULATE",
        "SUMX",
        "ALL"
      ],
      correctAnswerIndex: 1,
      explanation: "`CALCULATE` est la pierre angulaire de DAX. Elle évalue une expression dans un contexte de filtre modifié par les arguments que vous lui fournissez."
    },
    {
      question: "Pour calculer le total des ventes depuis le début de l'année jusqu'à la date actuelle, quelle famille de fonctions DAX utiliseriez-vous ?",
      options: [
        "Fonctions de texte",
        "Fonctions logiques",
        "Fonctions d'intelligence temporelle (Time Intelligence)",
        "Fonctions de relation"
      ],
      correctAnswerIndex: 2,
      explanation: "Les fonctions d'intelligence temporelle comme `TOTALYTD`, `SAMEPERIODLASTYEAR`, et `DATESYTD` sont spécifiquement conçues pour les calculs basés sur des périodes de temps."
    },
    {
      question: "Quelle est la différence fondamentale entre `SUM` et `SUMX` ?",
      options: [
        "SUMX est plus rapide.",
        "SUM additionne une colonne, tandis que SUMX effectue une somme sur une expression évaluée pour chaque ligne d'une table.",
        "Il n'y a pas de différence.",
        "SUMX ne fonctionne que sur les colonnes calculées."
      ],
      correctAnswerIndex: 1,
      explanation: "`SUMX` est une fonction itérative. Elle parcourt une table ligne par ligne, effectue un calcul (son 2ème argument) pour chaque ligne, puis additionne les résultats de ces calculs."
    },
    {
      question: "Que fait la fonction `ALL()` lorsqu'elle est utilisée comme filtre dans `CALCULATE` ?",
      options: [
        "Elle sélectionne toutes les colonnes de la table.",
        "Elle supprime les filtres existants sur la colonne ou la table spécifiée, permettant un calcul sur l'ensemble des données.",
        "Elle vérifie si toutes les conditions sont vraies.",
        "Elle renvoie une erreur si des filtres sont actifs."
      ],
      correctAnswerIndex: 1,
      explanation: "`ALL` est un 'modificateur de filtre'. Elle est utilisée pour ignorer les filtres provenant du TCD ou d'autres calculs, par exemple pour calculer un pourcentage par rapport à un total général."
    },
    {
      question: "Dans la formule `CALCULATE(SUM(Ventes[Montant]), FILTER(Produits, Produits[Couleur] = \"Rouge\"))`, quel est le rôle de `FILTER` ?",
      options: [
        "De colorer les résultats en rouge.",
        "De renvoyer VRAI ou FAUX.",
        "De créer une table virtuelle contenant uniquement les produits rouges, qui est ensuite utilisée comme filtre par CALCULATE.",
        "De supprimer les produits rouges de la table."
      ],
      correctAnswerIndex: 2,
      explanation: "`FILTER` est un itérateur qui retourne une table. Dans `CALCULATE`, cette table retournée est utilisée comme un nouveau filtre qui s'ajoute au contexte de filtre initial."
    },
    // Expert
    {
      question: "Qu'est-ce que la 'transition de contexte' (context transition) en DAX ?",
      options: [
        "Le passage d'un TCD à un autre.",
        "Le processus par lequel le contexte de ligne d'une colonne calculée ou d'un itérateur est transformé en un contexte de filtre équivalent.",
        "La mise à jour automatique des données.",
        "Une option de mise en forme."
      ],
      correctAnswerIndex: 1,
      explanation: "C'est un concept fondamental. Lorsque vous utilisez une mesure à l'intérieur d'une colonne calculée ou d'une fonction comme `SUMX`, `CALCULATE` est implicitement invoqué, transformant la ligne actuelle en un filtre, ce qui peut affecter le résultat de la mesure."
    },
    {
      question: "Quelle fonction DAX utiliseriez-vous pour référencer la valeur d'une colonne dans un contexte d'itération 'extérieur' ?",
      options: [
        "OUTER",
        "PREVIOUS",
        "EARLIER",
        "CONTEXT"
      ],
      correctAnswerIndex: 2,
      explanation: "`EARLIER` permet de 'sortir' du contexte de ligne actuel pour accéder au contexte de ligne immédiatement supérieur. C'est essentiel pour de nombreux calculs complexes."
    },
    {
      question: "À quoi sert la fonction `KEEPFILTERS` lorsqu'elle est utilisée dans `CALCULATE` ?",
      options: [
        "À sauvegarder les filtres pour une utilisation ultérieure.",
        "À empêcher le nouveau filtre de `CALCULATE` d'écraser le contexte de filtre externe, en créant une intersection des deux contextes.",
        "À accélérer le calcul.",
        "À supprimer tous les filtres sauf celui spécifié."
      ],
      correctAnswerIndex: 1,
      explanation: "Par défaut, un filtre dans `CALCULATE` remplace le filtre existant sur la même colonne. `KEEPFILTERS` modifie ce comportement pour que le nouveau filtre s'ajoute à l'ancien, ne gardant que les valeurs présentes dans les deux."
    },
    {
      question: "Pour définir une variable réutilisable au sein d'une formule DAX complexe, quelle syntaxe est recommandée pour la clarté et la performance ?",
      options: [
        "DEFINE var_name = ...",
        "LET var_name = ... IN ...",
        "VAR var_name = ... RETURN ...",
        "SET var_name = ..."
      ],
      correctAnswerIndex: 2,
      explanation: "La syntaxe `VAR ... RETURN ...` permet de déclarer des variables qui stockent le résultat d'un calcul intermédiaire. Cela évite de répéter la même logique plusieurs fois dans la formule et peut améliorer les performances."
    },
    {
      question: "Comment DAX gère-t-il les relations 'plusieurs-à-plusieurs' (many-to-many) ?",
      options: [
        "Elles ne sont pas supportées.",
        "En utilisant une table de pont (bridge table) et des relations unidirectionnelles.",
        "En activant une option spéciale dans les paramètres.",
        "En utilisant la fonction `MANY_TO_MANY()`."
      ],
      correctAnswerIndex: 1,
      explanation: "Le modèle standard pour gérer une relation plusieurs-à-plusieurs en DAX est d'introduire une table intermédiaire (une table de pont) qui contient les clés uniques des deux tables à lier, puis de créer des relations 'un-à-plusieurs' de chaque table vers la table de pont."
    }
  ]
};

const frExcelPowerQueryQuiz: ExcelPowerQueryQuizData = {
  title: "Quiz : Power Query",
  description: "20 questions pour tester vos connaissances sur l'importation et la transformation de données.",
  questions: [
    // Débutant
    {
      question: "Quel est l'objectif principal de Power Query ?",
      options: [
        "Créer des graphiques",
        "Écrire du code VBA",
        "Se connecter à des sources de données, les nettoyer et les transformer",
        "Formater des cellules"
      ],
      correctAnswerIndex: 2,
      explanation: "Power Query est un outil ETL (Extract, Transform, Load) dédié à la préparation des données."
    },
    {
      question: "Comment ouvre-t-on l'éditeur Power Query ?",
      options: [
        "Onglet Insertion -> Power Query",
        "Onglet Données -> Obtenir des données",
        "Clic droit sur une cellule -> Lancer Power Query",
        "Onglet Accueil -> Éditeur"
      ],
      correctAnswerIndex: 1,
      explanation: "On accède à Power Query via l'onglet 'Données', en utilisant une des options 'Obtenir des données'."
    },
    {
      question: "Une fois les données transformées dans Power Query, comment les charge-t-on dans une feuille Excel ?",
      options: [
        "Fichier -> Enregistrer",
        "Bouton 'Appliquer'",
        "Onglet Accueil -> 'Fermer et charger'",
        "Copier-coller les données"
      ],
      correctAnswerIndex: 2,
      explanation: "Le bouton 'Fermer et charger' (ou 'Fermer et charger dans...') est la commande standard pour envoyer le résultat de la requête vers Excel."
    },
    {
      question: "Quelle transformation simple permet de s'assurer que la première ligne d'un fichier est utilisée comme en-tête de colonnes ?",
      options: [
        "Filtrer les lignes",
        "Renommer les colonnes",
        "Utiliser la première ligne pour les en-têtes",
        "Transposer la table"
      ],
      correctAnswerIndex: 2,
      explanation: "C'est une commande très courante et directement accessible dans l'onglet 'Accueil' ou 'Transformer' de l'éditeur."
    },
    {
      question: "À quoi sert l'option 'Modifier le type' dans Power Query ?",
      options: [
        "Changer le type de graphique",
        "Définir si une colonne contient du texte, des nombres, des dates, etc.",
        "Modifier la police du texte",
        "Convertir la table en image"
      ],
      correctAnswerIndex: 1,
      explanation: "Définir le bon type de données est crucial pour les calculs et les relations corrects dans Excel ou Power Pivot."
    },
    {
      question: "Que se passe-t-il lorsque vous 'Actualisez' une requête Power Query dans Excel ?",
      options: [
        "La requête est supprimée",
        "Les étapes de transformation sont ré-exécutées sur les données sources actuelles",
        "Seule la mise en forme de la table est mise à jour",
        "Une copie de la feuille est créée"
      ],
      correctAnswerIndex: 1,
      explanation: "L'actualisation relance tout le processus d'extraction et de transformation, garantissant que vos données dans Excel sont à jour."
    },
    {
      question: "Quel outil de Power Query permet de combiner des tables en ajoutant les lignes d'une table à la suite des autres ?",
      options: [
        "Fusionner les requêtes",
        "Ajouter les requêtes",
        "Pivoter la colonne",
        "Grouper par"
      ],
      correctAnswerIndex: 1,
      explanation: "'Ajouter les requêtes' (Append) est l'équivalent d'un `UNION ALL` en SQL; il empile les tables les unes sur les autres."
    },
    // Avancé
    {
      question: "Quelle est la différence fondamentale entre 'Ajouter les requêtes' (Append) et 'Fusionner les requêtes' (Merge) ?",
      options: [
        "Il n'y en a aucune",
        "Append empile les lignes, Merge joint les colonnes de deux tables basées sur une colonne commune",
        "Merge est plus rapide que Append",
        "Append ne fonctionne qu'avec deux tables"
      ],
      correctAnswerIndex: 1,
      explanation: "'Merge' est l'équivalent d'une jointure (JOIN) en SQL, enrichissant une table avec les colonnes d'une autre."
    },
    {
      question: "Quel langage de programmation est utilisé en arrière-plan par l'éditeur Power Query ?",
      options: [
        "VBA",
        "SQL",
        "Langage M",
        "Python"
      ],
      correctAnswerIndex: 2,
      explanation: "Chaque clic dans l'interface utilisateur génère une ligne de code en langage M (Mashup)."
    },
    {
      question: "À quoi sert l'opération 'Unpivot Columns' (Dépivoter les colonnes) ?",
      options: [
        "À faire pivoter la table entière",
        "À transformer des colonnes (ex: Jan, Fév, Mar) en une seule colonne 'Attribut' et une colonne 'Valeur'",
        "À supprimer les colonnes sélectionnées",
        "À créer un tableau croisé dynamique"
      ],
      correctAnswerIndex: 1,
      explanation: "C'est une transformation cruciale pour convertir des données au format 'large' en format 'long', qui est le format standard pour l'analyse."
    },
    {
      question: "Comment peut-on ajouter une colonne personnalisée qui calcule une valeur basée sur d'autres colonnes ?",
      options: [
        "Onglet Affichage -> Nouvelle colonne",
        "Onglet Transformer -> Calculer",
        "Onglet Ajouter une colonne -> Colonne personnalisée",
        "Il faut écrire du code M directement"
      ],
      correctAnswerIndex: 2,
      explanation: "La fonctionnalité 'Colonne personnalisée' ouvre une boîte de dialogue où vous pouvez écrire une formule en M pour créer une nouvelle colonne."
    },
    {
      question: "Quelle option de 'Fusionner les requêtes' (Merge) est équivalente à un LEFT JOIN en SQL, gardant toutes les lignes de la première table ?",
      options: [
        "Interne (Inner)",
        "Gauche externe (Left Outer)",
        "Droite externe (Right Outer)",
        "Pleine externe (Full Outer)"
      ],
      correctAnswerIndex: 1,
      explanation: "'Gauche externe' est le type de jointure le plus courant. Il conserve toutes les lignes de la table de gauche et ajoute les correspondances de la table de droite."
    },
    {
      question: "Dans Power Query, qu'est-ce qu'un 'Paramètre' ?",
      options: [
        "Un nom pour une requête",
        "Une variable que l'utilisateur peut modifier facilement pour changer le comportement d'une requête (ex: un chemin de fichier)",
        "Un type de données spécial",
        "Une erreur de requête"
      ],
      correctAnswerIndex: 1,
      explanation: "Les paramètres rendent les requêtes dynamiques et réutilisables, en permettant de changer des valeurs clés sans modifier le code M."
    },
    {
      question: "Que fait la transformation 'Grouper par' (Group By) ?",
      options: [
        "Elle fusionne des cellules",
        "Elle agrège des lignes basées sur les valeurs d'une ou plusieurs colonnes (ex: calculer les ventes totales par région)",
        "Elle trie les données",
        "Elle crée un plan dans Excel"
      ],
      correctAnswerIndex: 1,
      explanation: "'Grouper par' est l'équivalent de la clause GROUP BY en SQL, permettant de synthétiser des données en effectuant des calculs (Somme, Moyenne, etc.) sur des groupes de lignes."
    },
    {
      question: "À quoi sert l'option 'Extraire le texte entre les délimiteurs' ?",
      options: [
        "À supprimer du texte",
        "À diviser une colonne",
        "À isoler et extraire une partie d'une chaîne de caractères située entre un délimiteur de début et de fin",
        "À joindre du texte"
      ],
      correctAnswerIndex: 2,
      explanation: "C'est un outil très pratique pour analyser des chaînes de texte complexes sans avoir à écrire de formules M compliquées."
    },
    // Expert
    {
      question: "Comment peut-on référencer le résultat de l'étape précédente dans une formule de colonne personnalisée en M ?",
      options: [
        "PreviousStep",
        "En utilisant le nom de l'étape précédente (ex: #\"Type modifié\")",
        "C'est impossible",
        "input()"
      ],
      correctAnswerIndex: 1,
      explanation: "Le code M est une série d'étapes qui se référencent les unes les autres. Chaque étape a un nom (souvent avec des espaces, d'où les guillemets et le #)."
    },
    {
      question: "Quelle est la principale différence entre `Table.SelectRows` et `Table.SelectColumns` en langage M ?",
      options: [
        "L'un filtre les lignes, l'autre les colonnes",
        "Les deux font la même chose",
        "`Table.SelectRows` est plus rapide",
        "`Table.SelectColumns` modifie la table source"
      ],
      correctAnswerIndex: 0,
      explanation: "C'est une distinction fondamentale : `Table.SelectRows` est la fonction derrière le filtrage (WHERE en SQL), tandis que `Table.SelectColumns` est la fonction derrière le choix de colonnes (SELECT en SQL)."
    },
    {
      question: "Quel est le meilleur moyen de documenter les étapes d'une requête Power Query complexe pour un autre utilisateur ?",
      options: [
        "Ajouter des commentaires dans la feuille Excel",
        "Renommer les étapes avec des noms descriptifs et utiliser la section 'Propriétés'",
        "Écrire un document Word séparé",
        "Enregistrer un fichier audio"
      ],
      correctAnswerIndex: 1,
      explanation: "Renommer les étapes (ex: \"Type modifié\" -> \"Définir Types de Données\") et utiliser le champ description dans les propriétés de l'étape est la meilleure pratique pour une documentation intégrée."
    },
    {
      question: "À quoi sert la fonction `Table.Buffer` en langage M ?",
      options: [
        "À sauvegarder la table dans un fichier.",
        "À charger l'intégralité d'une table en mémoire pour potentiellement accélérer les opérations suivantes si elle est référencée plusieurs fois.",
        "À vider le cache de Power Query.",
        "À créer une copie de la table."
      ],
      correctAnswerIndex: 1,
      explanation: "C'est une technique d'optimisation de performance. Si une requête source est utilisée comme base pour plusieurs autres requêtes, la 'bufferiser' évite de la ré-exécuter à chaque fois."
    },
    {
      question: "Qu'est-ce que le 'Query Folding' (Repli de requête) dans Power Query ?",
      options: [
        "La capacité de masquer des étapes dans l'éditeur.",
        "Le processus par lequel Power Query traduit les étapes de transformation M en une seule requête dans le langage natif de la source (ex: SQL), déléguant le traitement au serveur de base de données.",
        "Une erreur qui se produit lorsque la requête est trop complexe.",
        "La compression des données avant de les charger dans Excel."
      ],
      correctAnswerIndex: 1,
      explanation: "Le Query Folding est le concept le plus important pour la performance. Quand il est actif, le travail lourd est effectué par le serveur (ex: SQL Server) au lieu d'être fait par votre machine locale, ce qui est beaucoup plus efficace."
    }
  ]
};

const frVbaVariablesQuiz: VbaVariablesQuizData = {
  title: "Quiz : Variables et Types de Données VBA",
  description: "20 questions pour évaluer votre maîtrise des déclarations, de la portée et des types de données en VBA.",
  questions: [
    {
      question: "Comment déclare-t-on une variable en VBA ?",
      options: ["VAR maVariable", "DECLARE maVariable", "Dim maVariable", "SET maVariable"],
      correctAnswerIndex: 2,
      explanation: "`Dim` (Dimension) est le mot-clé standard pour déclarer une variable locale en VBA."
    },
    {
      question: "Quel type de données est le plus approprié pour stocker le nombre entier `30000` ?",
      options: ["Byte", "Integer", "Long", "Double"],
      correctAnswerIndex: 1,
      explanation: "`Integer` peut stocker des nombres entiers jusqu'à 32 767. `Long` serait nécessaire pour des valeurs plus grandes, mais `Integer` est suffisant et plus optimisé pour cette valeur."
    },
    {
      question: "Une variable déclarée avec `Dim` au niveau d'un module (en dehors de toute procédure) est visible...",
      options: ["Uniquement dans la procédure où elle est utilisée.", "Dans toutes les procédures de ce module uniquement.", "Dans tous les modules du projet.", "Nulle part, c'est une erreur."],
      correctAnswerIndex: 1,
      explanation: "Une variable déclarée avec `Dim` en haut d'un module a une portée de module. Pour la rendre visible dans tout le projet, il faudrait utiliser `Public`."
    },
    {
      question: "Quel est le type de données par défaut pour une variable qui n'a pas de type spécifié (ex: `Dim maVariable`) ?",
      options: ["String", "Integer", "Empty", "Variant"],
      correctAnswerIndex: 3,
      explanation: "`Variant` est le type par défaut. Il peut contenir n'importe quel type de données, mais il est moins performant que les types de données spécifiques."
    },
    {
      question: "Pour stocker le texte \"Bonjour\", quel type de données est le plus efficace ?",
      options: ["String", "Text", "Char", "Variant"],
      correctAnswerIndex: 0,
      explanation: "Le type `String` est spécifiquement conçu pour stocker des chaînes de caractères."
    },
    {
      question: "Quelle déclaration est utilisée pour une variable dont la valeur ne changera jamais ?",
      options: ["Static maConstante = 10", "Final maConstante = 10", "Const maConstante = 10", "Let maConstante = 10"],
      correctAnswerIndex: 2,
      explanation: "`Const` est utilisé pour déclarer une constante, une valeur qui reste la même tout au long de l'exécution du programme."
    },
    {
      question: "Quel est le résultat de `MsgBox TypeName(maVariable)` si `Dim maVariable As Boolean` a été déclaré ?",
      options: ["\"Boolean\"", "\"Vrai/Faux\"", "\"Integer\"", "\"Bool\""],
      correctAnswerIndex: 0,
      explanation: "`TypeName` est une fonction VBA qui renvoie le type de données d'une variable sous forme de chaîne de caractères."
    },
    {
      question: "Une variable déclarée avec `Public` dans un module standard est accessible...",
      options: ["Uniquement dans ce module.", "Uniquement dans les modules de feuille.", "Depuis n'importe quel module du projet VBA.", "Uniquement si `Option Explicit` est désactivé."],
      correctAnswerIndex: 2,
      explanation: "`Public` donne à la variable une portée de projet, la rendant globale et accessible partout."
    },
    {
      question: "À quoi sert le mot-clé `Static` dans la déclaration d'une variable à l'intérieur d'une procédure (`Sub` ou `Function`) ?",
      options: ["Il la rend visible dans tout le module.", "Il la rend constante.", "Il préserve sa valeur entre les différents appels à cette même procédure.", "Il alloue plus de mémoire."],
      correctAnswerIndex: 2,
      explanation: "Contrairement à une variable `Dim` qui est réinitialisée à chaque appel, une variable `Static` conserve sa valeur."
    },
    {
      question: "Quel type de données utiliseriez-vous pour stocker une référence à un objet, comme une feuille de calcul (`Worksheet`) ?",
      options: ["Generic", "Object", "Pointer", "Reference"],
      correctAnswerIndex: 1,
      explanation: "Le type `Object` est le type générique pour les références d'objets. On peut aussi utiliser des types plus spécifiques comme `Worksheet` ou `Range`."
    },
    {
      question: "Que signifie `Option Explicit` au début d'un module VBA ?",
      options: ["Il force l'indentation correcte du code.", "Il oblige le programmeur à déclarer toutes les variables avant de les utiliser.", "Il active les fonctionnalités explicites d'Excel.", "Il désactive la gestion des erreurs."],
      correctAnswerIndex: 1,
      explanation: "`Option Explicit` est une bonne pratique essentielle qui évite les erreurs de frappe dans les noms de variables en forçant leur déclaration explicite avec `Dim`, `Public`, etc."
    },
    {
      question: "Quel est le problème avec ce code : `Dim x As Integer, y As Integer : x = 33000 : y = x` ?",
      options: ["On ne peut pas déclarer deux variables sur la même ligne.", "`x` est déclaré mais pas `y`.", "La valeur `33000` dépasse la capacité maximale d'un `Integer`.", "Il n'y a aucun problème."],
      correctAnswerIndex: 2,
      explanation: "Un `Integer` en VBA est un entier 16-bits signé, sa plage va de -32 768 à 32 767. `33000` provoquerait une erreur de dépassement de capacité. Il faudrait utiliser le type `Long`."
    },
    {
      question: "Pour stocker une valeur qui peut être soit `Vrai`, soit `Faux`, quel type de données est le plus approprié ?",
      options: ["Integer", "Boolean", "Logical", "Bit"],
      correctAnswerIndex: 1,
      explanation: "Le type `Boolean` est spécifiquement conçu pour stocker les valeurs logiques `True` et `False`."
    },
    {
      question: "Quelle est la différence de portée entre `Private Sub MaProcedure()` et `Sub MaProcedure()` dans un module standard ?",
      options: ["`Private` la rend plus rapide.", "Il n'y a aucune différence dans un module standard.", "`Private` la rend visible uniquement à l'intérieur de ce module, alors que sans `Private` (par défaut `Public`), elle est visible depuis d'autres modules.", "`Private` empêche l'appel de la procédure."],
      correctAnswerIndex: 2,
      explanation: "Le mot-clé `Private` restreint la visibilité d'une procédure ou d'une variable au module où elle est déclarée. Par défaut, une procédure `Sub` dans un module standard est `Public`."
    },
    {
      question: "Si vous ne savez pas quel type de données une fonction va retourner (nombre, texte, erreur...), quel type de variable est le plus sûr pour recevoir ce résultat ?",
      options: ["String", "Double", "Variant", "Any"],
      correctAnswerIndex: 2,
      explanation: "`Variant` est conçu pour contenir n'importe quel type de données, y compris des objets, des erreurs ou des tableaux. C'est le type le plus flexible, bien que moins performant que les types spécifiques."
    },
    {
      question: "Pour regrouper des variables de types différents mais liées (ex: ID, Nom, et DateEmbauche d'un employé) en une seule variable, quelle structure VBA est la plus appropriée ?",
      options: ["Collection", "Dictionary", "Public Enum", "Type...End Type"],
      correctAnswerIndex: 3,
      explanation: "L'instruction `Type...End Type` permet de créer un Type Défini par l'Utilisateur (UDT), une structure de données personnalisée pouvant contenir plusieurs éléments liés, similaire à un `struct` dans d'autres langages."
    },
    {
      question: "En VBA, quel est le but principal de définir explicitement une variable objet à `Nothing` (e.g., `Set MaFeuille = Nothing`) ?",
      options: ["Supprimer la feuille de calcul du classeur.", "Effacer le contenu de la feuille de calcul.", "Libérer immédiatement la mémoire utilisée par la variable objet, ce qui peut prévenir les fuites de mémoire.", "Renommer la variable objet."],
      correctAnswerIndex: 2,
      explanation: "Définir un objet à `Nothing` décrémente son compteur de références. Lorsque le compteur atteint zéro, VBA sait qu'il peut libérer la mémoire. C'est crucial pour la gestion de la mémoire, surtout dans les boucles ou les grosses applications."
    },
    {
      question: "Pour créer un ensemble de constantes nommées pouvant être utilisées de manière interchangeable avec des nombres pour une meilleure lisibilité du code (ex: pour des états comme `statutOuvert`, `statutFerme`), que devriez-vous déclarer ?",
      options: ["Public Const", "Array", "Static Type", "Enum"],
      correctAnswerIndex: 3,
      explanation: "Un `Enum` (Énumération) sert à définir un ensemble de constantes entières nommées, ce qui rend le code beaucoup plus facile à lire et à maintenir que d'utiliser des 'nombres magiques'."
    },
    {
      question: "Quelle est la différence de déclaration entre une chaîne de caractères de longueur fixe de 10 caractères et une chaîne de longueur variable ?",
      options: ["Dim s As String(10)", "Dim s As String, Longueur=10", "Dim s As String * 10", "Dim s(10) As String"],
      correctAnswerIndex: 2,
      explanation: "La syntaxe `Dim nomVariable As String * longueur` est utilisée pour déclarer une chaîne de longueur fixe, qui occupe toujours une quantité de mémoire définie, utile pour les entrées/sorties de fichiers ou l'interaction avec des API. Une déclaration standard `Dim s As String` est de longueur variable."
    },
    {
      question: "Les fonctions VBA `StrPtr`, `ObjPtr`, et `VarPtr` sont non documentées et fournissent quel type d'information sur une variable ?",
      options: ["Son type de données sous forme de chaîne.", "Son adresse mémoire (pointeur).", "Sa valeur convertie en chaîne de caractères.", "Sa date de création."],
      correctAnswerIndex: 1,
      explanation: "Ce sont des fonctions avancées et non supportées qui retournent l'adresse mémoire (pointeur) des données d'une variable. Elles sont extrêmement puissantes mais doivent être utilisées avec une grande prudence, généralement pour des opérations à haute performance ou l'interfaçage avec des bibliothèques externes."
    }
  ]
};

const dictionary: Dictionary = {
  navLinks: {
    home: { label: 'Accueil' },
    cv: { label: 'CV' },
    projects: { label: 'Projets' },
    templates: { label: 'Templates' },
    quiz: { label: 'Testez votre niveau' },
    contact: { label: 'Contact' },
  },
  navbar: {
    logoAlt: 'Logo Oussama Berraies',
    switchToEnglish: 'Passer en anglais',
    switchToFrench: 'Passer en français',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    selectLanguage: 'Sélectionner la langue',
  },
  footer: {
    allRightsReserved: 'Tous droits réservés.',
  },
  homePage: {
    greeting: 'Bonjour, je suis',
    name: 'Oussama Berraies',
    role: 'Data Analyst, Développeur Excel VBA et Formateur.',
    intro: 'J’automatise les processus, conçois des applications sur mesure et transforme les données en tableaux de bord interactifs pour une prise de décision rapide et efficace.',
    myProjectsButton: 'Mes Projets',
    contactMeButton: 'Contactez-moi',
    aboutMeTitle: 'À propos de moi',
    aboutMeText: "Data Analyst et Développeur Excel VBA avec plus de 14 ans d'expérience en automatisation de processus et analyse de données. Expert en tableaux de bord interactifs, optimisation des flux et extraction de données complexes. Maîtrise de VBA, SQL et Excel pour transformer les données en insights exploitables, facilitant des décisions rapides et efficaces. Innovant, rigoureux et orienté résultats, je crée des solutions sur mesure pour optimiser la performance des équipes et entreprises.",
    viewCvButton: 'Voir mon CV',
    mySkillsTitle: 'Mes Compétences',
    skillVbaDev: { name: 'Développement VBA', description: 'Création de scripts et applications sur mesure pour une expérience utilisateur optimale' },
    skillDataAnalysis: { name: 'Analyse de données', description: 'Transformer les données brutes en informations claires, utiles et exploitables.' },
    skillProjectManagement: { name: 'Gestion de Projet', description: 'Planification, exécution et suivi de projets digitaux.' },
    skillCollaboration: { name: 'Collaboration', description: 'Travail en équipe efficace et communication transparente.' },
    ctaTitle: 'Prêt à collaborer ?',
    ctaText: "Discutons de votre projet et voyons comment nous pouvons créer quelque chose d'exceptionnel ensemble.",
    ctaButton: 'Parlons-en !',
  },
  pageHeaders: {
    cvTitle: "Mon Curriculum Vitae",
    cvDescription: "Un aperçu de mon parcours professionnel, de mes formations et de mes compétences.",
    downloadCvButton: "Télécharger mon CV (PDF)",
    projectsTitle: "Mes Projets",
    projectsDescription: "Une sélection d’outils développés pour automatiser les processus, fiabiliser les données et fournir des analyses claires et exploitables.",
    templatesTitle: "Mes Templates",
    templatesDescription: "Explorez une sélection de templates et composants réutilisables pour accélérer vos projets. → En cours de développement, revenez bientôt !",
    contactTitle: "Contactez-moi",
    contactDescription: "Besoin de conseils, d'optimisations ou simplement une envie de collaborer, N'hésitez pas à me contacter",
    quizTitle: "Testez Votre Niveau",
    quizDescription: "Évaluez vos compétences en Excel et VBA avec nos quiz interactifs, du niveau débutant au niveau expert.",
  },
  contactForm: {
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    nameError: "Le nom doit contenir au moins 2 caractères.",
    emailLabel: "Email",
    emailPlaceholder: "Votre adresse e-mail",
    emailError: "Veuillez entrer une adresse e-mail valide.",
    phoneLabel: "Téléphone (Optionnel)",
    phonePlaceholder: "Votre numéro de téléphone",
    messageLabel: "Message",
    messagePlaceholder: "Votre message...",
    messageError: "Le message doit contenir au moins 10 caractères.",
    filesLabel: "Pièces Jointes (Optionnel, max 5 fichiers, 5MB chacun)",
    filesHelpText: "PDF, DOC(X), JPG, PNG (MAX. 5MB/fichier)",
    filesButton: "Cliquez pour choisir",
    filesSelected: "Fichiers sélectionnés :",
    maxFileSizeError: "Chaque fichier ne doit pas dépasser 5MB.",
    fileTypeError: "Types de fichiers non supportés.",
    submitButton: "Envoyer le Message",
    submittingButton: "Envoi en cours...",
    successTitle: "Message Envoyé !",
    successDescription: "Merci pour votre message. Je vous répondrai dès que possible.",
    errorTitle: "Erreur",
    unexpectedErrorTitle: "Erreur Inattendue",
    unexpectedErrorDescription: "Une erreur inattendue s'est produite. Veuillez réessayer.",
    contactInfoTitle: "Informations de Contact",
    contactInfoAvailability: "Vaste mobilité - Disponible rapidement",
    contactInfoSocialPrompt: "Réservez un créneau pour discuter de vos besoins ou de vos projets : ",
    sendMessageTitle: "Envoyez-moi un message",
  },
  cvPage: {
    educationTitle: "Parcours et formation",
    education: [
      {
        degree: 'Licence fondamentale en informatique de gestion',
        institution: 'Faculté des Sciences économique et de Gestion de Tunis',
        period: '', // Période peut rester vide ou être internationalisée si besoin
        description: 'Conception et développement d’applications informatiques orientées vers la gestion des entreprises.',
      },
    ],
    experienceTitle: "Expérience Professionnelle",
    experience: [
      {
        role: 'Chef de service - Développeur Excel VBA Sénior',
        company: "Caisse Nationale d'Assurance Maladie",
        period: "2021 - Aujourd'hui",
        responsibilities: [
          'Développement d’applications sous Excel, analyse, extraction et transformation des données.',
          'Création de codes favorisant les automatisations des tâches et process.',
          'Reporting, statistiques et apurements.',
          'Technologies : Excel VBA – Oracle forms – PL/SQL – SQL Developer – Mysql',
        ],
      },
      {
        role: 'Technicien support applicatif',
        company: 'Quanta',
        period: '2022 - 2023',
        responsibilities: [
          'Suivi des tickets (Notion, ClickUp, Hubspot), support client, rédaction des rapports.',
          'Réponses aux mails, meeting clients pour fournir des réponses et guider les utilisateurs sur la plateforme.',
          'Connexion avec les développeurs afin de proposer des améliorations ou demander des détails.',
          'Élaboration de rapports et HealthChecks pour les différents utilisateurs.',
        ],
      },
      {
        role: 'Sous-chef de service',
        company: 'Caisse Nationale d’Assurance Maladie (CNAM)',
        period: '06/2008 – 12/2019',
        responsibilities: [
          'Gestion des demandes d’accord préalable.',
          'Gestion des demandes d’admission pour les affection prises en charge intégralement.',
          'Développement d’applications sous Excel / VBA (Suivi des présences, heures supplémentaires, congés…, gestion des demandes et édition des décisions de prises en charge pour dialyse péritonéale…)',
          'Formulaires et interfaces Oracle forms',
        ],
      },
      {
        role: 'Data analyst et chargé de reporting',
        company: 'LaSer Contact',
        period: '08/2007 – 05/2008',
        responsibilities: [
          'Collecte, analyse et présentation des données.',
          'Statistiques - rapports journaliers, hebdomadaires, mensuels…',
          'Comité de pilotage et analyse décisionnelle.',
          'Planifications des équipes d’assistance et gestion des ressources humaines.',
          'Technologies : Access VBA – Excel VBA – SQL.',
        ],
      },
      {
        role: 'Technicien support applicatif N2',
        company: 'LaSer Contact',
        period: '06/2007 – 08/2007',
        responsibilities: [
          'Réception d’appels clients.',
          'Dépannage des caisses enregistreuses et des appareils de paiement à distance.',
          'Contact, tri et mise en relation avec les équipes N3 et maintenance.',
        ],
      },
    ],
    skillsTitle: "Compétences Techniques",
    skills: [
      { name: 'Excel (formules avancées, tableaux croisés)', level: 95 },
      { name: 'VBA (automatisations, ADO, formulaires)', level: 95 },
      { name: 'Access (requêtes SQL, formulaires)', level: 95 },
      { name: 'SQL (requêtes, jointures, filtrage, bases Access/SQL Server)', level: 90 },
      { name: 'Gestion de bases de données relationnelles', level: 85 },
      { name: 'Tableaux de bord dynamiques', level: 90 },
      { name: 'Expérience utilisateur', level: 90 },
      { name: 'Automatisation de rapports / reporting', level: 90 },
      { name: 'Nettoyage et transformation des données', level: 90 },
    ],
    trainingTitle: "Activités de formation professionnelle",
    training: [
      { title: 'Formation Excel initiation', buttonLabel: 'Voir le programme' },
      { title: 'Formation Excel avancé', buttonLabel: 'Voir le programme' },
      { title: 'Formation Excel expert', buttonLabel: 'Voir le programme' },
      { title: 'Formation Excel VBA', buttonLabel: 'Voir le programme' },
      { title: 'Formation sur mesure', buttonLabel: 'En discuter' },
    ],
  },
  projectsPage: {
    githubButton: "GitHub",
    liveDemoButton: "Démo Live",
    projects: [
      {
        id: 'gestion-club-foot',
        title: 'Application de gestion pour clubs de football',
        description: "L'objectif est de créer un suivi complet des présences/absences et rendement des élèves et encadrants, permettre la gestion des emplois de temps et de produire des reportings hebdomadaires. L'application offre des outils de visualisation, de calcul des indicateurs de performances.",
        tags: ["Excel", "VBA", "Data visualisaton", "Reporting avancé", "Gestion des images"],
        liveLink: '#', repoLink: '#', imageHint: 'football app dashboard', period: "09/2024 - 10/2024", logolabel: '',
        image: '/projet-gestion-club-foot.png', logo: '/Logo_Exceloco.png',
        logoNeedsLightBg: true,
      },
      {
        id: 'choix-transporteurs',
        title: 'Application de choix de transporteurs et de tracking',
        description: `Outil complet d'aide à la décision logistique permettant l'import des ventes, leur traitement dynamique selon la période choisie, et l'optimisation du choix du transporteur. Il inclut la validation des commandes, un système de suivi (tracking), une visualisation intelligente des produits spécifiques, et la génération automatisée des fichiers d'export adaptés aux plateformes logistiques.`,
        tags: ['Excel', 'VBA', 'Extraction des données', 'Traitement des données'],
        liveLink: '#', repoLink: '#', imageHint: 'transport manager', period : "09/2024", logolabel: '',
        image: '/Slate_Main.png', logo: '/Slate_Logo.jpg',
        logoNeedsLightBg: true,
      },
      {
        id: 'audit-energetique',
        title: 'Outil d’audit des valeurs énergétiques',
        description: `Outil automatisé de gestion et de reporting de la consommation d'énergie à l'échelle régionale. Il permet l'import des fichiers de saisie et d'intervention, la vérification de la cohérence des données, la génération des dossiers par gouvernorat et commune, ainsi que le calcul de KPI. L'outil exporte les données vers Access et produit des rapports Word détaillés pour chaque entité locale.`,
        tags: ['Excel', 'Access', 'Word', 'VBA', 'SQL'],
        liveLink: '#', repoLink: '#', imageHint: 'perfect audit tool', period : "06/2024 - 07/2024", logolabel : '',
        image: '/Perfect_Main.png', logo: '/Logo_Perfect.png'
      },
      { 
        id: 'gestion-paie',
        title: 'Application de gestion et de vérification des fiches de paie',
        description: `Application de gestion de la paie et du personnel, intégrant des fiches de paie dynamiques selon le régime du collaborateur, la gestion des congés (maladie, maternité, paternité, accidents de travail), et l'automatisation des paramètres légaux tels que le SMIC ou la loi Fillon.`,
        tags: ['Excel', 'VBA', 'RH', 'Paie'],
        liveLink: '#', repoLink: '#', imageHint: 'payroll management', period : "12/2023", logolabel : '',
        image: '/HL_Main.png', logo: '/Logo_HL.png'
      },
      { 
        id: 'dimensionnement-pac',
        title: 'Outil d’aide au dimensionnement des pompes à chaleur',
        description: `Interface complète de saisie et gestion des données géographiques et techniques liées à la construction. Elle permet le calcul précis des besoins en chauffage via la sélection des pompes adaptées, l'analyse des déperditions thermiques grâce à des graphiques dynamiques, et génère des devis exportables en PDF. Un système d'administration facilite la gestion des paramètres et valeurs utilisées.`,
        tags: ['Excel', 'VBA', 'Calculs avancés', 'Courbe dynamique', 'Aide à la décision'],
        liveLink: '#', repoLink: '#', imageHint: 'heat pump sizing', period : "05/2023", logolabel : '',
        image: '/Wolf_Main.png', logo: '/Logo_Wolf.png'
      },
      { 
        id: 'calcul-recyclabilite',
        title: 'Outil de calcul de la recyclabilité ',
        description: `Système automatisé d'évaluation de la recyclabilité des produits et chaussures, basé sur l'analyse des matériaux, masses et compositions, avec gestion dynamique des composants et indicateur visuel de performance écologique.`,
        tags: ['Excel', 'VBA', 'Calculs avancés', 'Courbe dynamique', 'Aide à la décision'],
        liveLink: '#', repoLink: '#', imageHint: 'recyclability calculation', period : "04/2023", logolabel : '',
        image: '/Refashion_Main.png', logo: '/Logo_Refashion.jpg'
      },
      { 
        id: 'planning-retroplanning',
        title: 'Planning et rétroplanning',
        description: `Application Excel multi-utilisateurs avec interface de saisie et gestion dynamique d'un agenda type Google Calendar, permettant la création, modification et suppression visuelle d'évènements et tâches.`,
        tags: ['Excel', 'VBA', 'Access', 'Filtres avancés', 'Visualisation', 'Gestion des formes', 'Dessin assisté'],
        liveLink: '#', repoLink: '#', imageHint: 'planning tool', period : "02/2023", logolabel : '',
        image: '/CM_Main.png', logo: '/Logo_CM.png',
        logoNeedsLightBg: true,
      },
      { 
        id: 'gestion-planification',
        title: 'Gestion de la planification',
        description: `Application intelligente de planification RH : un outil collaboratif qui optimise l'affectation du personnel grâce à une gestion dynamique des profils, un système de souhaits intégré, l'import automatisé des absences, et des dashboards clairs pour le suivi et la validation. Conçue pour fluidifier les processus tout en valorisant les préférences des équipes.`,
        tags: ['Excel', 'VBA', 'Access', 'SQL','Extraction', 'Visualisation', 'Données temps réel' ],
        liveLink: '#', repoLink: '#', imageHint: 'scheduling management', period : "2022 - 2023", logolabel : '',
        image: '/Planification_Main.png', logo: '/Logo_Exceloco.png',
        logoNeedsLightBg: true,
      },
    ]
  },
  quizPage: {
    excelQuizTitle: "Quiz Excel",
    excelQuizDescription: "Testez vos connaissances sur les formules, les tableaux croisés dynamiques, la mise en forme et plus encore.",
    excelStartButton: "Découvrir",
    vbaQuizTitle: "Quiz Excel VBA",
    vbaQuizDescription: "Évaluez votre maîtrise de l'automatisation, des formulaires, et de la manipulation de données avec VBA.",
    vbaStartButton: "Découvrir",
  },
  excelQuizTopicsPage: {
    title: "Quiz Excel - Choisissez un sujet",
    description: "Affinez votre évaluation en choisissant un domaine spécifique d'Excel à tester.",
    goBackButtonLabel: "Retour aux quiz",
    topics: [
      { id: 'formulas', title: "Formules et Fonctions", description: "Testez votre maîtrise des formules essentielles et des fonctions avancées.", buttonLabel: "Commencer le quiz" },
      { id: 'pivot_tables', title: "Tableaux Croisés Dynamiques", description: "Évaluez votre capacité à synthétiser et analyser des données avec les TCD.", buttonLabel: "Commencer le quiz" },
      { id: 'charts', title: "Graphiques et Mise en Forme", description: "Mesurez vos compétences en visualisation de données et en mise en forme conditionnelle.", buttonLabel: "Commencer le quiz" },
      { id: 'data_management', title: "Gestion des Données", description: "Filtrage avancé, doublons, validation... Évaluez votre capacité à gérer et fiabiliser efficacement des bases de données Excel.", buttonLabel: "Commencer le quiz" },
      { id: 'power_pivot', title: "Power Pivot", description: "Évaluez vos compétences sur le modèle de données, DAX et la création de KPIs.", buttonLabel: "Commencer le quiz" },
      { id: 'power_query', title: "Power Query", description: "Testez vos connaissances sur l'importation et la transformation de données.", buttonLabel: "Commencer le quiz" }
    ]
  },
  vbaQuizTopicsPage: {
    title: "Quiz Excel VBA - Choisissez un sujet",
    description: "Évaluez votre maîtrise de l'automatisation, des formulaires et de la manipulation de données avec VBA.",
    goBackButtonLabel: "Retour aux quiz",
    topics: [
      { id: 'variables_types', title: "Variables et Types de Données", description: "Maîtrise des déclarations, portée et types de données en VBA.", buttonLabel: "Commencer le quiz" },
      { id: 'loops_conditions', title: "Boucles et Conditions", description: "Testez votre logique avec les structures de contrôle comme If, For, Do...", buttonLabel: "Commencer le quiz" },
      { id: 'userforms', title: "UserForms et Contrôles", description: "Évaluez votre capacité à créer des interfaces utilisateur interactives.", buttonLabel: "Commencer le quiz" },
      { id: 'interaction_excel', title: "Interaction avec Excel", description: "Manipulation des classeurs, feuilles, cellules et objets Excel.", buttonLabel: "Commencer le quiz" },
      { id: 'error_handling', title: "Gestion des Erreurs", description: "Évaluez vos compétences pour créer du code robuste avec On Error.", buttonLabel: "Commencer le quiz" },
      { id: 'file_handling', title: "Fichiers et Collections", description: "Évaluez votre capacité à interagir avec le système de fichiers et à manipuler des objets via les collections et dictionnaires.", buttonLabel: "Commencer le quiz" },
    ]
  },
  quizFormulasPage: {
    title: "Quiz: Formules et Fonctions Excel",
    description: "20 questions pour évaluer votre niveau, de débutant à expert.",
    question: "Question",
    nextButton: "Suivant",
    previousButton: "Précédent",
    finishButton: "Terminer",
    validation: {
      selectAnswer: "Veuillez sélectionner une réponse avant de continuer.",
      selectAllAnswers: "Veuillez répondre à toutes les questions avant de terminer.",
    },
    results: {
      title: "Résultats du Quiz",
      description: "Voici votre performance. Découvrez votre niveau et les prochaines étapes !",
      yourScore: "Votre score",
      yourLevel: "Votre niveau estimé",
      levels: {
        beginner: "Débutant",
        intermediate: "Avancé",
        expert: "Expert",
      },
      levelInfo: {
        beginner: { 
          description: "Vous avez les bases ! C'est le moment idéal pour renforcer vos fondamentaux avec une formation adaptée.", 
          ctaButton: "Découvrir la formation Débutant", 
          ctaLink: "/cv" 
        },
        intermediate: { 
          description: "Vous maîtrisez bien Excel ! Perfectionnez-vous et débloquez des techniques avancées pour devenir incontournable.", 
          ctaButton: "Explorer la formation Avancé", 
          ctaLink: "/cv" 
        },
        expert: { 
          description: "Impressionnant ! Votre expertise est solide. Contactez-moi pour discuter de projets complexes ou de formations sur-mesure.", 
          ctaButton: "Discutons de vos besoins", 
          ctaLink: "/contact" 
        },
      },
      retakeButton: "Refaire le quiz",
      showAnswersButton: "Voir mes réponses",
      hideAnswersButton: "Masquer les réponses",
      yourAnswerLabel: "Votre réponse :",
      correctAnswerLabel: "Réponse correcte :",
      explanationLabel: "Explication :",
      backToQuizzesButton: "Retour aux quiz",
    },
    emailCapture: {
      title: "Presque terminé !",
      description: "Pour voir vos résultats détaillés et découvrir votre niveau, veuillez entrer votre adresse e-mail ci-dessous.",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "votre.email@exemple.com",
      submitButton: "Voir mes résultats",
      submittingButton: "Enregistrement...",
      successMessage: "Résultats enregistrés ! Affichage...",
      invalidEmailError: "Veuillez fournir une adresse e-mail valide.",
    },
    error: {
      title: "Erreur de génération du quiz",
      message: "Désolé, nous n'avons pas pu générer le quiz pour le moment. L'IA est peut-être en surcharge. Veuillez réessayer dans quelques instants."
    },
  },
  excelFormulasQuiz: frExcelFormulasQuiz,
  excelPivotTablesQuiz: frExcelPivotTablesQuiz,
  excelChartsQuiz: frExcelChartsQuiz,
  excelDataManagementQuiz: frExcelDataManagementQuiz,
  excelPowerPivotQuiz: frExcelPowerPivotQuiz,
  excelPowerQueryQuiz: frExcelPowerQueryQuiz,
  vbaVariablesQuiz: frVbaVariablesQuiz,
  quizEmail: frQuizEmail,
  metadata: {
    title: 'Oussama Berraies - Data Analyst & Développeur VBA',
    description: 'Portfolio professionnel de Oussama Berraies, Data Analyst, Développeur Excel VBA et Formateur. Découvrez mes projets, compétences et templates personnalisables.',
  },
};

export default dictionary;
