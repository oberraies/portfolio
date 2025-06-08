
import type { Dictionary, CVPageDictionaryItems, ProjectsPageDictionaryItems, ProjectItem as FrProjectItem, CVEducationItem as FrCVEducationItem, CVExperienceItem as FrCVExperienceItem, CVSkillItem as FrCVSkillItem, CVTrainingItem as FrCVTrainingItem } from './fr'; // Reuse the interface structure

// Re-declare specific item types if their structure needs to be identical for type safety
// (though for simple string translations, the Fr types might suffice if only strings change)
interface CVEducationItem extends FrCVEducationItem {}
interface CVExperienceItem extends FrCVExperienceItem {}
interface CVSkillItem extends FrCVSkillItem {}
interface CVTrainingItem extends FrCVTrainingItem {}
interface ProjectItem extends FrProjectItem {}


const enCVPage: CVPageDictionaryItems = {
  educationTitle: "Education & Training",
  education: [
    {
      degree: 'Fundamental Bachelor\'s Degree in Management Computing',
      institution: 'Faculty of Economic Sciences and Management of Tunis',
      period: '',
      description: 'Design and development of IT applications geared towards business management.',
    },
  ],
  experienceTitle: "Professional Experience",
  experience: [
    {
      role: 'Service Manager - Senior Excel VBA Developer',
      company: "National Health Insurance Fund (CNAM)",
      period: "2021 - Present",
      responsibilities: [
        'Development of Excel applications, data analysis, extraction, and transformation.',
        'Creation of code to automate tasks and processes.',
        'Reporting, statistics, and reconciliations.',
        'Technologies: Excel VBA – Oracle Forms – PL/SQL – SQL Developer – MySQL',
      ],
    },
    {
      role: 'Application Support Technician',
      company: 'Quanta',
      period: '2022 - 2023',
      responsibilities: [
        'Ticket tracking (Notion, ClickUp, Hubspot), customer support, report writing.',
        'Responding to emails, client meetings to provide answers and guide users on the platform.',
        'Liaising with developers to suggest improvements or request details.',
        'Development of reports and HealthChecks for various users.',
      ],
    },
    {
      role: 'Deputy Head of Service',
      company: 'National Health Insurance Fund (CNAM)',
      period: '06/2008 – 12/2019',
      responsibilities: [
        'Management of prior approval requests.',
        'Management of admission requests for fully covered conditions.',
        'Development of Excel/VBA applications (Tracking attendance, overtime, leave..., managing requests and issuing coverage decisions for peritoneal dialysis...)',
        'Oracle Forms interfaces and forms',
      ],
    },
    {
      role: 'Data Analyst and Reporting Officer',
      company: 'LaSer Contact',
      period: '08/2007 – 05/2008',
      responsibilities: [
        'Data collection, analysis, and presentation.',
        'Statistics - daily, weekly, monthly reports…',
        'Steering committee and decision-making analysis.',
        'Planning of support teams and human resources management.',
        'Technologies: Access VBA – Excel VBA – SQL.',
      ],
    },
    {
      role: 'L2 Application Support Technician',
      company: 'LaSer Contact',
      period: '06/2007 – 08/2007',
      responsibilities: [
        'Receiving customer calls.',
        'Troubleshooting cash registers and remote payment devices.',
        'Contacting, triaging, and liaising with L3 and maintenance teams.',
      ],
    },
  ],
  skillsTitle: "Technical Skills",
  skills: [
    { name: 'Excel (advanced formulas, pivot tables)', level: 95 },
    { name: 'VBA (automations, ADO, forms)', level: 95 },
    { name: 'Access (SQL queries, forms)', level: 95 },
    { name: 'SQL (queries, joins, filtering, Access/SQL Server databases)', level: 90 },
    { name: 'Dynamic dashboards', level: 90 },
    { name: 'User experience', level: 90 },
    { name: 'Report automation / reporting', level: 90 },
    { name: 'Data cleaning and transformation', level: 90 },
  ],
  trainingTitle: "Professional Training Activities",
  training: [
    { title: 'Excel Initiation Training', buttonLabel: 'View Program' },
    { title: 'Excel Advanced Training', buttonLabel: 'View Program' },
    { title: 'Excel Expert Training', buttonLabel: 'View Program' },
    { title: 'Excel VBA Training', buttonLabel: 'View Program' },
  ],
};

const enProjectsPage: ProjectsPageDictionaryItems = {
  githubButton: "GitHub",
  liveDemoButton: "Live Demo",
  projects: [
    {
      id: 'gestion-club-foot',
      title: 'Management Application for Football Clubs',
      description: "The goal is to create a comprehensive tracking of attendance/absences and performance of students and coaches, manage schedules, and produce weekly reports. The application offers visualization tools and performance indicator calculations.",
      tags: ["Excel", "VBA", "Data Visualization", "Advanced Reporting", "Image Management"],
      liveLink: '#', repoLink: '#', imageHint: 'football app dashboard', period: "09/2024 - 10/2024", logolabel: ''
    },
    {
      id: 'choix-transporteurs',
      title: 'Carrier Selection and Tracking Application',
      description: `A complete logistics decision support tool enabling sales import, dynamic processing according to the chosen period, and optimization of carrier choice. It includes order validation, a tracking system, intelligent visualization of specific products, and automated generation of export files adapted to logistics platforms.`,
      tags: ['Excel', 'VBA', 'Data Extraction', 'Data Processing'],
      liveLink: '#', repoLink: '#', imageHint: 'transport manager', period : "09/2024", logolabel: ''
    },
    {
      id: 'audit-energetique',
      title: 'Energy Value Auditing Tool',
      description: `Automated tool for managing and reporting energy consumption at a regional scale. It allows importing data entry and intervention files, verifying data consistency, generating files by governorate and municipality, and calculating KPIs. The tool exports data to Access and produces detailed Word reports for each local entity.`,
      tags: ['Excel', 'Access', 'Word', 'VBA', 'SQL'],
      liveLink: '#', repoLink: '#', imageHint: 'perfect audit tool', period : "06/2024 - 07/2024", logolabel : ''
    },
    {
      id: 'gestion-paie',
      title: 'Payroll and Payslip Verification Management Application',
      description: `Payroll and personnel management application, integrating dynamic payslips according to employee status, leave management (sick, maternity, paternity, work accidents), and automation of legal parameters such as minimum wage or Fillon law.`,
      tags: ['Excel', 'VBA', 'HR', 'Payroll'],
      liveLink: '#', repoLink: '#', imageHint: 'payroll management', period : "12/2023", logolabel : ''
    },
    {
      id: 'dimensionnement-pac',
      title: 'Heat Pump Sizing Assistance Tool',
      description: `Comprehensive interface for entering and managing geographical and technical data related to construction. It allows precise calculation of heating needs via selection of suitable pumps, analysis of thermal losses through dynamic graphs, and generates quotes exportable to PDF. An administration system facilitates management of parameters and values used.`,
      tags: ['Excel', 'VBA', 'Advanced Calculations', 'Dynamic Curve', 'Decision Support'],
      liveLink: '#', repoLink: '#', imageHint: 'heat pump sizing', period : "05/2023", logolabel : ''
    },
    {
      id: 'calcul-recyclabilite',
      title: 'Recyclability Calculation Tool',
      description: `Automated system for assessing the recyclability of products and footwear, based on material analysis, mass, and composition, with dynamic component management and a visual indicator of ecological performance.`,
      tags: ['Excel', 'VBA', 'Advanced Calculations', 'Dynamic Curve', 'Decision Support'],
      liveLink: '#', repoLink: '#', imageHint: 'recyclability calculation', period : "04/2023", logolabel : ''
    },
    {
      id: 'planning-retroplanning',
      title: 'Planning and Reverse Planning',
      description: `Multi-user Excel application with an interface for dynamic entry and management of a Google Calendar-type schedule, allowing visual creation, modification, and deletion of events and tasks.`,
      tags: ['Excel', 'VBA', 'Access', 'Advanced Filters', 'Visualization', 'Shape Management', 'Assisted Drawing'],
      liveLink: '#', repoLink: '#', imageHint: 'planning tool', period : "02/2023", logolabel : ''
    },
    {
      id: 'gestion-planification',
      title: 'Scheduling Management',
      description: `Intelligent HR planning application: a collaborative tool that optimizes staff allocation through dynamic profile management, an integrated wish system, automated import of absences, and clear dashboards for monitoring and validation. Designed to streamline processes while valuing team preferences.`,
      tags: ['Excel', 'VBA', 'Access', 'SQL','Extraction', 'Visualization', 'Real-time Data' ],
      liveLink: '#', repoLink: '#', imageHint: 'scheduling management', period : "2022 - 2023", logolabel : ''
      },
    ]
};


const dictionary: Dictionary = {
  navLinks: {
    home: { label: 'Home' },
    cv: { label: 'CV' },
    projects: { label: 'Projects' },
    templates: { label: 'Templates' },
    contact: { label: 'Contact' },
  },
  navbar: {
    logoAlt: 'Oussama Berraies Logo',
    switchToEnglish: 'Switch to English',
    switchToFrench: 'Switch to French',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    selectLanguage: 'Select language',
  },
  footer: {
    allRightsReserved: 'All rights reserved.',
  },
  homePage: {
    greeting: "Hello, I'm",
    name: 'Oussama Berraies',
    role: 'Data Analyst, Excel VBA Developer, and Trainer.',
    intro: 'I automate processes, design custom applications, and transform data into interactive dashboards for quick and effective decision-making.',
    myProjectsButton: 'My Projects',
    contactMeButton: 'Contact Me',
    aboutMeTitle: 'About Me',
    aboutMeText: "Data Analyst and Excel VBA Developer with over 14 years of experience in process automation and data analysis. Expert in interactive dashboards, workflow optimization, and complex data extraction. Proficient in VBA, SQL, and Excel to turn data into actionable insights, facilitating fast and effective decisions. Innovative, meticulous, and results-oriented, I create custom solutions to optimize team and company performance.",
    viewCvButton: 'View My CV',
    mySkillsTitle: 'My Skills',
    skillVbaDev: { name: 'VBA Development', description: 'Creating custom scripts and applications for an optimal user experience.' },
    skillDataAnalysis: { name: 'Data Analysis', description: 'Transforming raw data into clear, useful, and actionable information.' },
    skillProjectManagement: { name: 'Project Management', description: 'Planning, execution, and monitoring of digital projects.' },
    skillCollaboration: { name: 'Collaboration', description: 'Effective teamwork and transparent communication.' },
    ctaTitle: 'Ready to collaborate?',
    ctaText: "Let's discuss your project and see how we can create something exceptional together.",
    ctaButton: "Let's Talk!",
  },
  pageHeaders: {
    cvTitle: "My Curriculum Vitae",
    cvDescription: "An overview of my professional background, education, and skills.",
    downloadCvButton: "Download My CV (PDF)",
    projectsTitle: "My Projects",
    projectsDescription: "A selection of tools developed to automate processes, ensure data reliability, and provide clear, actionable analyses.",
    templatesTitle: "My Templates",
    templatesDescription: "Explore a selection of reusable templates and components to speed up your projects. → Under development, check back soon!",
    contactTitle: "Contact Me",
    contactDescription: "Need advice, optimizations, or just want to collaborate? Feel free to contact me.",
  },
  contactForm: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    nameError: "Name must be at least 2 characters.",
    emailLabel: "Email",
    emailPlaceholder: "Your email address",
    emailError: "Please enter a valid email address.",
    phoneLabel: "Phone (Optional)",
    phonePlaceholder: "Your phone number",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    messageError: "Message must be at least 10 characters.",
    filesLabel: "Attachments (Optional, max 5 files, 5MB each)",
    filesHelpText: "PDF, DOC(X), JPG, PNG (MAX. 5MB/file)",
    filesButton: "Click to choose",
    filesSelected: "Selected files:",
    maxFileSizeError: "Each file must not exceed 5MB.",
    fileTypeError: "Unsupported file types.",
    submitButton: "Send Message",
    submittingButton: "Sending...",
    successTitle: "Message Sent!",
    successDescription: "Thank you for your message. I will get back to you as soon as possible.",
    errorTitle: "Error",
    unexpectedErrorTitle: "Unexpected Error",
    unexpectedErrorDescription: "An unexpected error occurred. Please try again.",
    contactInfoTitle: "Contact Information",
    contactInfoAvailability: "Highly mobile - Available quickly",
    contactInfoSocialPrompt: "I am also available on social media. Feel free to follow me or send me a message.",
    sendMessageTitle: "Send me a message",
  },
  cvPage: enCVPage,
  projectsPage: enProjectsPage,
  metadata: {
    title: 'Oussama Berraies - Data Analyst & VBA Developer',
    description: 'Professional portfolio of Oussama Berraies, Data Analyst, Excel VBA Developer, and Trainer. Discover my projects, skills, and customizable templates.',
  },
};

export default dictionary;

    