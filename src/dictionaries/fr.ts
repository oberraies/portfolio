
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
  id: string; // To link to static assets if needed, or just for keys
  title: string;
  description: string;
  tags: string[];
  liveLink?: string; // Optional
  repoLink?: string; // Optional
  imageHint: string;
  period: string;
  logolabel?: string;
  // image and logo paths will remain static, they are not translated text
}

export interface ProjectsPageDictionaryItems {
  projects: ProjectItem[];
  githubButton: string;
  liveDemoButton: string;
}


export interface Dictionary {
  navLinks: {
    home: NavLinkDictionaryItem;
    cv: NavLinkDictionaryItem;
    projects: NavLinkDictionaryItem;
    templates: NavLinkDictionaryItem;
    contact: NavLinkDictionaryItem;
  };
  navbar: NavbarDictionaryItems;
  footer: FooterDictionaryItems;
  homePage: HomePageDictionaryItems;
  pageHeaders: PageHeaderDictionaryItems;
  contactForm: ContactFormDictionaryItems;
  cvPage: CVPageDictionaryItems;
  projectsPage: ProjectsPageDictionaryItems;
  metadata: {
    title: string;
    description: string;
  };
}

const dictionary: Dictionary = {
  navLinks: {
    home: { label: 'Accueil' },
    cv: { label: 'CV' },
    projects: { label: 'Projets' },
    templates: { label: 'Templates' },
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
    contactInfoSocialPrompt: "Réservez un créneau pour discuter de vos besoins ou de vos projets (Via Calendly) ",
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
        liveLink: '#', repoLink: '#', imageHint: 'football app dashboard', period: "09/2024 - 10/2024", logolabel: ''
      },
      {
        id: 'choix-transporteurs',
        title: 'Application de choix de transporteurs et de tracking',
        description: `Outil complet d'aide à la décision logistique permettant l'import des ventes, leur traitement dynamique selon la période choisie, et l'optimisation du choix du transporteur. Il inclut la validation des commandes, un système de suivi (tracking), une visualisation intelligente des produits spécifiques, et la génération automatisée des fichiers d'export adaptés aux plateformes logistiques.`,
        tags: ['Excel', 'VBA', 'Extraction des données', 'Traitement des données'],
        liveLink: '#', repoLink: '#', imageHint: 'transport manager', period : "09/2024", logolabel: ''
      },
      {
        id: 'audit-energetique',
        title: 'Outil d’audit des valeurs énergétiques',
        description: `Outil automatisé de gestion et de reporting de la consommation d'énergie à l'échelle régionale. Il permet l'import des fichiers de saisie et d'intervention, la vérification de la cohérence des données, la génération des dossiers par gouvernorat et commune, ainsi que le calcul de KPI. L'outil exporte les données vers Access et produit des rapports Word détaillés pour chaque entité locale.`,
        tags: ['Excel', 'Access', 'Word', 'VBA', 'SQL'],
        liveLink: '#', repoLink: '#', imageHint: 'perfect audit tool', period : "06/2024 - 07/2024", logolabel : ''
      },
      { 
        id: 'gestion-paie',
        title: 'Application de gestion et de vérification des fiches de paie',
        description: `Application de gestion de la paie et du personnel, intégrant des fiches de paie dynamiques selon le régime du collaborateur, la gestion des congés (maladie, maternité, paternité, accidents de travail), et l'automatisation des paramètres légaux tels que le SMIC ou la loi Fillon.`,
        tags: ['Excel', 'VBA', 'RH', 'Paie'],
        liveLink: '#', repoLink: '#', imageHint: 'payroll management', period : "12/2023", logolabel : ''
      },
      { 
        id: 'dimensionnement-pac',
        title: 'Outil d’aide au dimensionnement des pompes à chaleur',
        description: `Interface complète de saisie et gestion des données géographiques et techniques liées à la construction. Elle permet le calcul précis des besoins en chauffage via la sélection des pompes adaptées, l'analyse des déperditions thermiques grâce à des graphiques dynamiques, et génère des devis exportables en PDF. Un système d'administration facilite la gestion des paramètres et valeurs utilisées.`,
        tags: ['Excel', 'VBA', 'Calculs avancés', 'Courbe dynamique', 'Aide à la décision'],
        liveLink: '#', repoLink: '#', imageHint: 'heat pump sizing', period : "05/2023", logolabel : ''
      },
      { 
        id: 'calcul-recyclabilite',
        title: 'Outil de calcul de la recyclabilité ',
        description: `Système automatisé d'évaluation de la recyclabilité des produits et chaussures, basé sur l'analyse des matériaux, masses et compositions, avec gestion dynamique des composants et indicateur visuel de performance écologique.`,
        tags: ['Excel', 'VBA', 'Calculs avancés', 'Courbe dynamique', 'Aide à la décision'],
        liveLink: '#', repoLink: '#', imageHint: 'recyclability calculation', period : "04/2023", logolabel : ''
      },
      { 
        id: 'planning-retroplanning',
        title: 'Planning et rétroplanning',
        description: `Application Excel multi-utilisateurs avec interface de saisie et gestion dynamique d'un agenda type Google Calendar, permettant la création, modification et suppression visuelle d'évènements et tâches.`,
        tags: ['Excel', 'VBA', 'Access', 'Filtres avancés', 'Visualisation', 'Gestion des formes', 'Dessin assisté'],
        liveLink: '#', repoLink: '#', imageHint: 'planning tool', period : "02/2023", logolabel : ''
      },
      { 
        id: 'gestion-planification',
        title: 'Gestion de la planification',
        description: `Application intelligente de planification RH : un outil collaboratif qui optimise l'affectation du personnel grâce à une gestion dynamique des profils, un système de souhaits intégré, l'import automatisé des absences, et des dashboards clairs pour le suivi et la validation. Conçue pour fluidifier les processus tout en valorisant les préférences des équipes.`,
        tags: ['Excel', 'VBA', 'Access', 'SQL','Extraction', 'Visualisation', 'Données temps réel' ],
        liveLink: '#', repoLink: '#', imageHint: 'scheduling management', period : "2022 - 2023", logolabel : ''
      },
    ]
  },
  metadata: {
    title: 'Oussama Berraies - Data Analyst & Développeur VBA',
    description: 'Portfolio professionnel de Oussama Berraies, Data Analyst, Développeur Excel VBA et Formateur. Découvrez mes projets, compétences et templates personnalisables.',
  },
};

export default dictionary;
