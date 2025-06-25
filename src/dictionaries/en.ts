
import type { Dictionary, CVPageDictionaryItems, ProjectsPageDictionaryItems, ProjectItem as FrProjectItem, CVEducationItem as FrCVEducationItem, CVExperienceItem as FrCVExperienceItem, CVSkillItem as FrCVSkillItem, CVTrainingItem as FrCVTrainingItem, QuizPageDictionaryItems, ExcelQuizTopicsPageDictionaryItems, VbaQuizTopicsPageDictionaryItems, VbaQuizTopic, QuizFormulasPageDictionaryItems, Question, ExcelFormulasQuizData, ExcelPivotTablesQuizData, ExcelChartsQuizData, ExcelDataManagementQuizData, ExcelPowerPivotQuizData, ExcelPowerQueryQuizData, VbaVariablesQuizData, QuizEmailDictionaryItems } from './fr'; // Reuse the interface structure

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
    { name: 'Relational database management', level: 85 },
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
    { title: 'Custom Training', buttonLabel: 'Discuss it' },
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
      liveLink: '#', repoLink: '#', imageHint: 'football app dashboard', period: "09/2024 - 10/2024", logolabel: '',
      image: '/projet-gestion-club-foot.png', logo: '/Logo_Exceloco.png',
      logoNeedsLightBg: true,
    },
    {
      id: 'choix-transporteurs',
      title: 'Carrier Selection and Tracking Application',
      description: `A complete logistics decision support tool enabling sales import, dynamic processing according to the chosen period, and optimization of carrier choice. It includes order validation, a tracking system, intelligent visualization of specific products, and automated generation of export files adapted to logistics platforms.`,
      tags: ['Excel', 'VBA', 'Data Extraction', 'Data Processing'],
      liveLink: '#', repoLink: '#', imageHint: 'transport manager', period : "09/2024", logolabel: '',
      image: '/Slate_Main.png', logo: '/Slate_Logo.jpg',
      logoNeedsLightBg: true,
    },
    {
      id: 'audit-energetique',
      title: 'Energy Value Auditing Tool',
      description: `Automated tool for managing and reporting energy consumption at a regional scale. It allows importing data entry and intervention files, verifying data consistency, generating files by governorate and municipality, and calculating KPIs. The tool exports data to Access and produces detailed Word reports for each local entity.`,
      tags: ['Excel', 'Access', 'Word', 'VBA', 'SQL'],
      liveLink: '#', repoLink: '#', imageHint: 'perfect audit tool', period : "06/2024 - 07/2024", logolabel : '',
      image: '/Perfect_Main.png', logo: '/Logo_Perfect.png'
    },
    {
      id: 'gestion-paie',
      title: 'Payroll and Payslip Verification Management Application',
      description: `Payroll and personnel management application, integrating dynamic payslips according to employee status, leave management (sick, maternity, paternity, work accidents), and automation of legal parameters such as minimum wage or Fillon law.`,
      tags: ['Excel', 'VBA', 'HR', 'Payroll'],
      liveLink: '#', repoLink: '#', imageHint: 'payroll management', period : "12/2023", logolabel : '',
      image: '/HL_Main.png', logo: '/Logo_HL.png'
    },
    {
      id: 'dimensionnement-pac',
      title: 'Heat Pump Sizing Assistance Tool',
      description: `Comprehensive interface for entering and managing geographical and technical data related to construction. It allows precise calculation of heating needs via selection of suitable pumps, analysis of thermal losses through dynamic graphs, and generates quotes exportable to PDF. An administration system facilitates management of parameters and values used.`,
      tags: ['Excel', 'VBA', 'Advanced Calculations', 'Dynamic Curve', 'Decision Support'],
      liveLink: '#', repoLink: '#', imageHint: 'heat pump sizing', period : "05/2023", logolabel : '',
      image: '/Wolf_Main.png', logo: '/Logo_Wolf.png'
    },
    {
      id: 'calcul-recyclabilite',
      title: 'Recyclability Calculation Tool',
      description: `Automated system for assessing the recyclability of products and footwear, based on material analysis, mass, and composition, with dynamic component management and a visual indicator of ecological performance.`,
      tags: ['Excel', 'VBA', 'Advanced Calculations', 'Dynamic Curve', 'Decision Support'],
      liveLink: '#', repoLink: '#', imageHint: 'recyclability calculation', period : "04/2023", logolabel : '',
      image: '/Refashion_Main.png', logo: '/Logo_Refashion.jpg'
    },
    {
      id: 'planning-retroplanning',
      title: 'Planning and Reverse Planning',
      description: `Multi-user Excel application with an interface for dynamic entry and management of a Google Calendar-type schedule, allowing visual creation, modification, and deletion of events and tasks.`,
      tags: ['Excel', 'VBA', 'Access', 'Advanced Filters', 'Visualization', 'Shape Management', 'Assisted Drawing'],
      liveLink: '#', repoLink: '#', imageHint: 'planning tool', period : "02/2023", logolabel : '',
      image: '/CM_Main.png', logo: '/Logo_CM.png',
      logoNeedsLightBg: true,
    },
    {
      id: 'gestion-planification',
      title: 'Scheduling Management',
      description: `Intelligent HR planning application: a collaborative tool that optimizes staff allocation through dynamic profile management, an integrated wish system, automated import of absences, and clear dashboards for monitoring and validation. Designed to streamline processes while valuing team preferences.`,
      tags: ['Excel', 'VBA', 'Access', 'SQL','Extraction', 'Visualization', 'Real-time Data' ],
      liveLink: '#', repoLink: '#', imageHint: 'scheduling management', period : "2022 - 2023", logolabel : '',
      image: '/Planification_Main.png', logo: '/Logo_Exceloco.png',
      logoNeedsLightBg: true,
      },
    ]
};

const enQuizPage: QuizPageDictionaryItems = {
  excelQuizTitle: "Excel Quiz",
  excelQuizDescription: "Test your knowledge of formulas, pivot tables, formatting, and more.",
  excelStartButton: "Discover",
  vbaQuizTitle: "Excel VBA Quiz",
  vbaQuizDescription: "Assess your mastery of automation, forms, and data manipulation with VBA.",
  vbaStartButton: "Discover",
};

const enExcelQuizTopicsPage: ExcelQuizTopicsPageDictionaryItems = {
    title: "Excel Quiz - Choose a Topic",
    description: "Refine your assessment by choosing a specific area of Excel to test.",
    goBackButtonLabel: "Back to Quizzes",
    topics: [
      { id: 'formulas', title: "Formulas and Functions", description: "Test your mastery of essential formulas and advanced functions.", buttonLabel: "Start the quiz" },
      { id: 'pivot_tables', title: "Pivot Tables", description: "Evaluate your ability to summarize and analyze data with Pivot Tables.", buttonLabel: "Start the quiz" },
      { id: 'charts', title: "Charts and Formatting", description: "Measure your skills in data visualization and conditional formatting.", buttonLabel: "Start the quiz" },
      { id: 'data_management', title: "Data Management", description: "Advanced filtering, duplicates, validation... Assess your ability to efficiently manage and ensure the reliability of Excel databases.", buttonLabel: "Start the quiz" },
      { id: 'power_pivot', title: "Power Pivot", description: "Assess your skills on the data model, DAX, and creating KPIs.", buttonLabel: "Start the quiz" },
      { id: 'power_query', title: "Power Query", description: "Test your knowledge of importing and transforming data.", buttonLabel: "Start the quiz" },
    ]
};

const enVbaQuizTopicsPage: VbaQuizTopicsPageDictionaryItems = {
  title: "Excel VBA Quiz - Choose a Topic",
  description: "Assess your mastery of automation, forms, and data manipulation with VBA.",
  goBackButtonLabel: "Back to Quizzes",
  topics: [
      { id: 'variables_types', title: "Variables and Data Types", description: "Mastery of declarations, scope, and data types in VBA.", buttonLabel: "Start the quiz" },
      { id: 'loops_conditions', title: "Loops and Conditionals", description: "Test your logic with control structures like If, For, Do...", buttonLabel: "Start the quiz" },
      { id: 'userforms', title: "UserForms and Controls", description: "Evaluate your ability to create interactive user interfaces.", buttonLabel: "Start the quiz" },
      { id: 'interaction_excel', title: "Interaction with Excel", description: "Manipulating workbooks, sheets, cells, and Excel objects.", buttonLabel: "Start the quiz" },
      { id: 'error_handling', title: "Error Handling", description: "Assess your skills in creating robust code with On Error.", buttonLabel: "Start the quiz" },
      { id: 'file_handling', title: "Files and Collections", description: "Assess your ability to interact with the file system and manipulate objects via collections and dictionaries.", buttonLabel: "Start the quiz" },
  ]
};

const enQuizFormulasPage: QuizFormulasPageDictionaryItems = {
    title: "Quiz: Excel Formulas and Functions",
    description: "20 questions to assess your level, from beginner to expert.",
    question: "Question",
    nextButton: "Next",
    previousButton: "Previous",
    finishButton: "Finish",
    validation: {
      selectAnswer: "Please select an answer before proceeding.",
      selectAllAnswers: "Please answer all questions before finishing.",
    },
    results: {
      title: "Quiz Results",
      description: "Here's your performance. Discover your level and the next steps!",
      yourScore: "Your score",
      yourLevel: "Your estimated level",
      levels: {
        beginner: "Beginner",
        intermediate: "Advanced",
        expert: "Expert",
      },
      levelInfo: {
        beginner: { 
          description: "You've got the basics! This is the perfect time to strengthen your fundamentals with suitable training.", 
          ctaButton: "Discover Beginner Training", 
          ctaLink: "/cv" 
        },
        intermediate: { 
          description: "You have a good command of Excel! Perfect your skills and unlock advanced techniques to become indispensable.", 
          ctaButton: "Explore Advanced Training", 
          ctaLink: "/cv" 
        },
        expert: { 
          description: "Impressive! Your expertise is solid. Contact me to discuss complex projects or custom training programs.", 
          ctaButton: "Let's Discuss Your Needs", 
          ctaLink: "/contact" 
        },
      },
      retakeButton: "Retake the quiz",
      showAnswersButton: "See my answers",
      hideAnswersButton: "Hide my answers",
      yourAnswerLabel: "Your answer:",
      correctAnswerLabel: "Correct answer:",
      explanationLabel: "Explanation:",
      backToQuizzesButton: "Back to quizzes",
    },
    emailCapture: {
      title: "Almost Done!",
      description: "To see your detailed results and discover your level, please enter your email address below.",
      emailLabel: "Email Address",
      emailPlaceholder: "your.email@example.com",
      submitButton: "See My Results",
      submittingButton: "Saving...",
      successMessage: "Results saved! Displaying...",
      invalidEmailError: "Please provide a valid email address.",
    },
    error: {
      title: "Quiz Generation Error",
      message: "Sorry, we couldn't generate the quiz at this moment. The AI might be overloaded. Please try again in a few moments."
    },
};

const enQuizEmail: QuizEmailDictionaryItems = {
  subject: "Your Quiz Results",
  greeting: "Hello,",
  intro: (topic) => `Thank you for testing your knowledge on <strong>${topic}</strong>. Here is a detailed summary of your performance:`,
  summaryTitle: "Your Performance Summary",
  score: "Final Score",
  level: "Estimated Level",
  detailsTitle: "Your Answers in Detail",
  question: (num) => `Question ${num}`,
  yourAnswer: "Your answer",
  correctAnswer: "Correct answer",
  explanation: "Explanation",
  outro: "This is an excellent starting point! To continue improving, feel free to check out my training offers or contact me directly for a custom program.",
  signature: "Oussama Berraies",
};

const enExcelFormulasQuiz: ExcelFormulasQuizData = {
  title: "Quiz: Excel Formulas and Functions",
  description: "20 questions to assess your level, from beginner to expert.",
  questions: [
    // Beginner Level (Q1-Q8)
    {
      question: "To calculate the sum of cells from A1 to A10, which formula do you use?",
      options: ["=ADD(A1:A10)", "=TOTAL(A1:A10)", "=SUM(A1:A10)", "=COMBINE(A1:A10)"],
      correctAnswerIndex: 2,
      explanation: "SUM is the fundamental function for adding a range of numbers."
    },
    {
      question: "What does the `$` symbol do in a cell reference like `$A$1`?",
      options: ["It formats the cell as currency.", "It creates an absolute reference that doesn't change when the formula is copied.", "It indicates a text value.", "It deletes the cell."],
      correctAnswerIndex: 1,
      explanation: "The `$` creates an absolute reference. `$A$1` locks both the column and the row, `A$1` locks only the row, and `$A1` locks only the column."
    },
    {
      question: "Which function would you use to display \"Pass\" if a score in C2 is 60 or higher, and \"Fail\" otherwise?",
      options: ["=IF(C2>=60, \"Pass\", \"Fail\")", "=CHOOSE(C2, \"Pass\", \"Fail\")", "=SWITCH(C2>=60, \"Pass\", \"Fail\")", "=RESULT(C2>=60, \"Pass\", \"Fail\")"],
      correctAnswerIndex: 0,
      explanation: "The IF function evaluates a logical condition and returns one value for a TRUE result and another for a FALSE result."
    },
    {
      question: "Which function counts the number of cells in a range that contain numbers?",
      options: ["COUNT", "COUNTA", "COUNTBLANK", "COUNTIF"],
      correctAnswerIndex: 0,
      explanation: "COUNT counts only numeric values. COUNTA counts all non-empty cells (text and numbers), and COUNTBLANK counts empty cells."
    },
    {
      question: "To find a value in the first column of a table and return a corresponding value from another column, which function is most common?",
      options: ["FIND", "SEARCH", "LOOK", "VLOOKUP"],
      correctAnswerIndex: 3,
      explanation: "VLOOKUP (Vertical Lookup) is a classic function for searching for a value in the leftmost column of a table and returning a value from a specified column in the same row."
    },
    {
      question: "How do you join the text from cell A1 (\"Hello\") and B1 (\"World\") to create \"HelloWorld\"?",
      options: ["=A1 & B1", "=JOIN(A1, B1)", "=COMBINE(A1, B1)", "=A1 + B1"],
      correctAnswerIndex: 0,
      explanation: "The ampersand (`&`) operator is the simplest way to concatenate (join) text strings. The CONCATENATE function also works."
    },
    {
      question: "Which function returns the current date without the time?",
      options: ["NOW()", "CURRENTDATE()", "DATE()", "TODAY()"],
      correctAnswerIndex: 3,
      explanation: "TODAY() returns the current date, which updates every time the workbook is opened or recalculated. NOW() returns the current date and time."
    },
    {
      question: "To prevent a formula from displaying an error like `#N/A`, and show a custom message instead, you should wrap it in which function?",
      options: ["NOERROR()", "ISERROR()", "IFERROR()", "CLEAN()"],
      correctAnswerIndex: 2,
      explanation: "IFERROR evaluates a formula and returns its result if it's not an error. If it is an error, it returns a specified alternative value (like \"\" or \"Not Found\")."
    },
    // Advanced Level (Q9-Q15)
    {
      question: "To count rows where column A is \"North\" AND column B is \"Hardware\", which function is best?",
      options: ["COUNTIF(A:A, \"North\") + COUNTIF(B:B, \"Hardware\")", "AND(COUNTIF(A:A, \"North\"), COUNTIF(B:B, \"Hardware\"))", "COUNTIFS(A:A, \"North\", B:B, \"Hardware\")", "DCOUNT(A:B, \"Hardware\")"],
      correctAnswerIndex: 2,
      explanation: "COUNTIFS is designed specifically for counting cells based on multiple criteria across different ranges."
    },
    {
      question: "What is a key advantage of using `INDEX` and `MATCH` over `VLOOKUP`?",
      options: ["It's faster for small datasets.", "It can look up values in any column, not just the leftmost one.", "It only works with numbers.", "It automatically ignores errors."],
      correctAnswerIndex: 1,
      explanation: "The INDEX/MATCH combination is more flexible. MATCH finds the position of a value, and INDEX returns the value at that position, so the lookup column can be to the right of the return column, which is impossible with VLOOKUP."
    },
    {
      question: "What is the result of the formula `=SUMPRODUCT({1,2,3}, {10,20,30})`?",
      options: ["66", "140", "60", "A #VALUE! error"],
      correctAnswerIndex: 1,
      explanation: "SUMPRODUCT multiplies corresponding components in the given arrays and returns the sum of those products. (1*10 + 2*20 + 3*30) = 10 + 40 + 90 = 140."
    },
    {
      question: "Which function allows you to join a range of cells with a specific delimiter (e.g., a comma) and ignore empty cells?",
      options: ["CONCAT", "CONCATENATE", "TEXTJOIN", "MERGE"],
      correctAnswerIndex: 2,
      explanation: "TEXTJOIN is a modern and powerful function specifically designed for this purpose. Its second argument allows you to choose whether to ignore empty cells."
    },
    {
      question: "To get the last numeric value from a column that contains mixed data types, which formula is a common advanced technique?",
      options: ["=MAX(A:A)", "=VLOOKUP(9.99E+307,A:A,1,TRUE)", "=LOOKUP(2, 1/(ISNUMBER(A:A)), A:A)", "=TAKE(A:A, -1)"],
      correctAnswerIndex: 2,
      explanation: "The `LOOKUP(2, 1/(...))` formula is a classic, robust technique. It creates an array of 1s and errors, and `LOOKUP` finds the position of the last 1, corresponding to the last number."
    },
    {
      question: "What does the double unary operator (`--`) do in a formula like `=SUMPRODUCT(--(A1:A10=\"North\"))`?",
      options: ["It subtracts the value from zero.", "It converts TRUE/FALSE values into 1s and 0s.", "It's a typo and will cause an error.", "It makes the formula run twice for better accuracy."],
      correctAnswerIndex: 1,
      explanation: "The logical test `(A1:A10=\"North\")` returns an array of TRUE/FALSE values. The double unary operator is an efficient way to coerce this boolean array into a numeric array of 1s and 0s, which SUMPRODUCT can then sum."
    },
    {
      question: "How can you round a number in A1 to the nearest multiple of 50?",
      options: ["=ROUND(A1, 50)", "=MROUND(A1, 50)", "=CEILING(A1, 50)", "=ROUNDUP(A1, -2)"],
      correctAnswerIndex: 1,
      explanation: "MROUND is specifically designed to round a number to the nearest specified multiple."
    },
    // Expert Level (Q16-Q20)
    {
      question: "Which modern function is generally considered a superior replacement for `VLOOKUP`, `HLOOKUP`, and `INDEX/MATCH` due to its flexibility and simpler syntax?",
      options: ["SUPERLOOKUP", "XLOOKUP", "GETPIVOTDATA", "QUERY"],
      correctAnswerIndex: 1,
      explanation: "XLOOKUP is the modern successor to older lookup functions. It defaults to an exact match, can search from bottom-to-top, and handles column insertions/deletions robustly without breaking."
    },
    {
      question: "To improve readability and performance by calculating a value only once, which function should you use to assign names to these intermediate results?",
      options: ["DEFINE", "VAR", "LET", "CALCULATE"],
      correctAnswerIndex: 2,
      explanation: "The LET function allows you to declare named variables within a formula's scope. This makes formulas easier to read and can optimize performance by preventing the same calculation from being repeated."
    },
    {
      question: "Which function allows you to create your own custom, reusable functions (e.g., `MYFUNCTION`) directly in the formula bar without using VBA?",
      options: ["CREATE.FUNCTION", "CUSTOM.FUNC", "SCRIPT", "LAMBDA"],
      correctAnswerIndex: 3,
      explanation: "The LAMBDA function allows you to define anonymous functions. When you assign a LAMBDA to a name in the Name Manager, it becomes a new, reusable function in your workbook."
    },
    {
      question: "Which dynamic array function is designed to extract a subset of a table that meets a specific logical condition (e.g., all sales from the \"North\" region)?",
      options: ["EXTRACT", "SELECT", "FILTER", "QUERY"],
      correctAnswerIndex: 2,
      explanation: "The FILTER function is designed precisely for this. It takes an array and an \"include\" argument (a boolean array), returning only the rows or columns where the include argument is TRUE."
    },
    {
      question: "To calculate a running total for a column of numbers in A2:A10, which LAMBDA helper function is most appropriate?",
      options: ["MAP", "REDUCE", "BYROW", "SCAN"],
      correctAnswerIndex: 3,
      explanation: "The SCAN function processes an array and returns the intermediate accumulated values. This is perfect for generating a running total, as it shows the accumulated value at each step. REDUCE only returns the final total."
    }
  ]
};

const enExcelPivotTablesQuiz: ExcelPivotTablesQuizData = {
  title: "Quiz: Excel Pivot Tables",
  description: "15 questions to assess your ability to summarize and analyze data.",
  questions: [
    // Beginner
    {
      question: "What is the main purpose of a PivotTable?",
      options: [
        "To create complex charts.",
        "To write VBA macros.",
        "To summarize, analyze, and explore large amounts of data.",
        "To format cells with colors."
      ],
      correctAnswerIndex: 2,
      explanation: "The PivotTable is the ultimate tool for quickly summarizing raw data into an interactive report."
    },
    {
      question: "To create a PivotTable, where should you first click in the Excel ribbon?",
      options: [
        "Data Tab",
        "Insert Tab",
        "Home Tab",
        "Formulas Tab"
      ],
      correctAnswerIndex: 1,
      explanation: "The 'PivotTable' option is found in the 'Insert' tab, 'Tables' group."
    },
    {
      question: "In a PivotTable, which area is used to perform calculations (sum, average, etc.) on numerical data?",
      options: [
        "Filters",
        "Columns",
        "Rows",
        "Values"
      ],
      correctAnswerIndex: 3,
      explanation: "The 'Values' area is specifically designed to aggregate numerical data using functions like Sum, Average, Count, etc."
    },
    {
      question: "How can you quickly filter the data displayed in a PivotTable to show only sales from a specific region?",
      options: [
        "By changing the data source.",
        "By using a PivotChart.",
        "By dragging the 'Region' field into the 'Filters' area.",
        "By sorting the values column."
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Filters' area allows you to create a global filter for the entire PivotTable, which is ideal for isolating data subsets."
    },
    {
      question: "What happens if you double-click a value cell in a PivotTable (e.g., the sum of sales)?",
      options: [
        "The PivotTable is deleted.",
        "A new sheet is created showing all the source data rows that make up that value.",
        "The cell enters edit mode.",
        "A chart is automatically created."
      ],
      correctAnswerIndex: 1,
      explanation: "This is a powerful feature called 'Drill Down' that allows you to instantly see the detailed data behind an aggregated number."
    },
    // Intermediate
    {
      question: "In a PivotTable with daily dates, how can you group them to show totals by month and year?",
      options: [
        "Using the TEXTJOIN function.",
        "Creating extra columns in the source data.",
        "Right-clicking a date in the PivotTable and selecting 'Group'.",
        "Adding a timeline."
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Group' feature is the built-in tool for aggregating dates (by days, months, quarters, years) or numbers (by intervals) directly in the PivotTable."
    },
    {
      question: "What is a 'Calculated Field' in a PivotTable?",
      options: [
        "A formula that exists in the source data.",
        "A field that uses a VBA macro.",
        "A new column in the PivotTable created using a formula that uses other fields from the PivotTable.",
        "A filter applied to the PivotTable."
      ],
      correctAnswerIndex: 2,
      explanation: "A calculated field allows you to perform calculations on aggregated data (e.g., ='Revenue' / Quantity) without modifying the source data."
    },
    {
      question: "What is the main difference between a Slicer and a classic Report Filter?",
      options: [
        "A slicer can only filter one field at a time.",
        "A slicer is a visual and interactive object (buttons) that can control multiple PivotTables at once.",
        "A slicer modifies the source data.",
        "A filter is faster than a slicer."
      ],
      correctAnswerIndex: 1,
      explanation: "Slicers provide a much more user-friendly and visual filtering experience, and their ability to connect to multiple PivotTables/charts makes them perfect for dashboards."
    },
    {
      question: "What is the purpose of the 'Show Values As -> % of Column Total' option?",
      options: [
        "It formats numbers as percentages.",
        "It calculates the contribution of each cell relative to its column's total.",
        "It creates a new calculated field.",
        "It filters values greater than 100%."
      ],
      correctAnswerIndex: 1,
      explanation: "This is a quick and powerful way to change the analysis perspective, moving from absolute values to relative contributions without writing formulas."
    },
    {
      question: "To ensure your PivotTable updates automatically when you add new data to your source table, what is the best practice?",
      options: [
        "Recreate the PivotTable every time.",
        "Format your source data as an Excel Table (Ctrl+L) before creating the PivotTable.",
        "Use the INDIRECT function.",
        "Lock the data source cells."
      ],
      correctAnswerIndex: 1,
      explanation: "Using an Excel Table allows the PivotTable to automatically recognize new rows and columns; you just need to refresh the PivotTable to include them."
    },
    // Expert
    {
      question: "Which function is specifically designed to extract a value from a PivotTable using its row and column labels, but is often considered rigid and inefficient?",
      options: [
        "VLOOKUP",
        "INDEX/MATCH",
        "GETPIVOTDATA",
        "XLOOKUP"
      ],
      correctAnswerIndex: 2,
      explanation: "GETPIVOTDATA is automatically generated by Excel when you point to a PivotTable cell from a formula. It's precise but can become very long and break if the PivotTable structure changes."
    },
    {
      question: "What is a 'Calculated Item' in a PivotTable, and how does it differ from a 'Calculated Field'?",
      options: [
        "It's another name for a calculated field.",
        "It creates a new row or column within an existing field by performing operations on other items in that same field (e.g., 'Europe' = 'France' + 'Germany').",
        "It requires VBA code to work.",
        "It can only perform additions."
      ],
      correctAnswerIndex: 1,
      explanation: "A calculated field operates on other *fields* (columns), whereas a calculated item operates on other *items* (rows) within the same field. This is a subtle but crucial distinction."
    },
    {
      question: "To analyze data from multiple related tables (e.g., a Sales table and a Products table) in a single PivotTable, which Excel feature must you use?",
      options: [
        "Data Consolidation.",
        "The TEXTJOIN function.",
        "The Data Model (Power Pivot).",
        "The Scenario Manager."
      ],
      correctAnswerIndex: 2,
      explanation: "The Data Model allows you to create relationships between different tables, creating a relational database on which the PivotTable can operate, which is much more powerful than joining everything into one large table."
    },
    {
      question: "In a PivotTable based on the Data Model, how can you count the number of *unique* customers who purchased a product, instead of the total number of transactions?",
      options: [
        "Using the COUNTIF function in a calculated field.",
        "Right-clicking the field in the Values area, then 'Summarize Values By -> Count'.",
        "Right-clicking the field in the Values area, then 'Value Field Settings' and choosing 'Distinct Count'.",
        "This is impossible without VBA."
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Distinct Count' calculation is one of the most powerful features of the Data Model, solving a problem that was historically very complex to solve in classic PivotTables."
    },
    {
      question: "What is the main drawback of using Calculated Items?",
      options: [
        "They significantly slow down the PivotTable.",
        "They are included in the grand totals, which can distort the overall results (double counting).",
        "They cannot be used in PivotCharts.",
        "They only work with integers."
      ],
      correctAnswerIndex: 1,
      explanation: "This is a classic pitfall: if you create a 'Europe' item = 'France' + 'Germany', the grand total will include France, Germany, AND Europe, thus double-counting these countries. You often need to hide them or use other techniques for clean groupings."
    }
  ]
};

const enExcelChartsQuiz: ExcelChartsQuizData = {
  title: "Quiz: Excel Charts and Formatting",
  description: "20 questions to test your skills in data visualization and conditional formatting.",
  questions: [
    // Beginner
    {
      question: "How do you create a basic bar chart from a data selection?",
      options: [
        "Go to the 'Data' tab and click 'Chart'.",
        "Go to the 'Insert' tab and choose a chart type from the 'Charts' group.",
        "Right-click the data and select 'Create Chart'.",
        "Use the formula =BARCHART(A1:B10)."
      ],
      correctAnswerIndex: 1,
      explanation: "All chart creation tools are located in the 'Charts' group on the 'Insert' tab of the ribbon."
    },
    {
      question: "What is the ideal use case for a Pie Chart?",
      options: [
        "Showing trends over time.",
        "Comparing values across many categories.",
        "Showing the proportion of each part to a whole.",
        "Displaying relationships between two variables."
      ],
      correctAnswerIndex: 2,
      explanation: "A Pie Chart is perfect for showing how individual parts make up a total, like market share or budget allocation. It's less effective for comparing multiple categories."
    },
    {
      question: "To add a title to your chart, which element should you add?",
      options: [
        "Data Labels",
        "Legend",
        "Chart Title",
        "Axis Titles"
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Chart Title' element can be added via the green '+' button (Chart Elements) next to the chart, or from the 'Chart Design' tab."
    },
    {
      question: "What is a chart legend used for?",
      options: [
        "To display the chart's main title.",
        "To identify which color or pattern corresponds to which data series.",
        "To show the exact value of each data point.",
        "To add a background image to the chart."
      ],
      correctAnswerIndex: 1,
      explanation: "The legend is crucial for understanding charts with multiple data series, as it provides a key to interpret the data."
    },
    {
      question: "What is Conditional Formatting?",
      options: [
        "A tool to format charts automatically.",
        "A way to change the appearance of cells based on specific rules or criteria.",
        "A function for calculating averages.",
        "A feature to lock cells."
      ],
      correctAnswerIndex: 1,
      explanation: "Conditional Formatting, found on the 'Home' tab, allows you to dynamically format cells (e.g., color, icons) based on their values, making data easier to analyze visually."
    },
    {
      question: "Which Conditional Formatting rule would you use to highlight all sales figures greater than $10,000?",
      options: [
        "Top/Bottom Rules -> Top 10%",
        "Data Bars",
        "Highlight Cells Rules -> Greater Than...",
        "Color Scales"
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Highlight Cells Rules' category provides straightforward options for formatting cells based on simple comparisons like 'Greater Than', 'Less Than', or 'Equal To'."
    },
    {
      question: "What is a Sparkline?",
      options: [
        "A type of conditional formatting.",
        "A small, miniature chart that fits inside a single cell.",
        "A secondary axis on a chart.",
        "A title for a chart."
      ],
      correctAnswerIndex: 1,
      explanation: "Sparklines are tiny charts placed in a cell to provide a quick visual representation of data trends next to the raw numbers."
    },
    {
      question: "How do you change the type of an existing chart (e.g., from a bar chart to a line chart)?",
      options: [
        "You must delete the chart and create a new one.",
        "By dragging the chart's corners.",
        "Right-click the chart and select 'Change Chart Type'.",
        "In the 'Page Layout' tab."
      ],
      correctAnswerIndex: 2,
      explanation: "Excel makes it easy to switch chart types without losing your data or formatting. This option is available in the right-click context menu or the 'Chart Design' tab."
    },
    // Advanced
    {
      question: "What is a Combination Chart?",
      options: [
        "A chart that combines data from multiple worksheets.",
        "A chart that uses two or more different chart types (e.g., column and line) in a single chart.",
        "A 3D chart.",
        "A chart created with a formula."
      ],
      correctAnswerIndex: 1,
      explanation: "A Combination Chart is used to display data of different types or scales, such as plotting sales volume (columns) against profit margin (line)."
    },
    {
      question: "When is it necessary to use a secondary axis in a chart?",
      options: [
        "When you have more than five data series.",
        "When you are plotting two data series with very different value ranges (e.g., sales in millions and percentage growth).",
        "For all line charts.",
        "To make the chart look more colorful."
      ],
      correctAnswerIndex: 1,
      explanation: "A secondary axis allows you to accurately display two different data scales on the same chart, preventing one series from looking flat or insignificant."
    },
    {
      question: "How can you create a conditional formatting rule based on a formula?",
      options: [
        "This is not possible in Excel.",
        "Go to Conditional Formatting -> New Rule -> 'Use a formula to determine which cells to format'.",
        "Go to Data Bars -> More Rules.",
        "Use the =FORMAT() function."
      ],
      correctAnswerIndex: 2,
      explanation: "Using a formula provides the ultimate flexibility, allowing you to create formatting rules based on any logical condition you can write, such as formatting an entire row based on the value in one cell."
    },
    {
      question: "What is the purpose of the 'Format Painter' tool on the Home tab?",
      options: [
        "To paint colors on a chart.",
        "To create a new chart.",
        "To quickly copy all formatting (including conditional formatting) from one cell or range to another.",
        "To change the font of the text."
      ],
      correctAnswerIndex: 2,
      explanation: "The Format Painter is a huge time-saver. It copies all formatting aspects, from font size and color to number formats and conditional formatting rules."
    },
    {
      question: "How do you create a dynamic chart title that is linked to the value of a cell?",
      options: [
        "You must use a VBA macro.",
        "Double-click the title and type in the cell reference.",
        "Select the chart title, type `=` in the formula bar, then click the cell you want to link to.",
        "Use the =CHARTTITLE() function."
      ],
      correctAnswerIndex: 2,
      explanation: "This technique allows your chart title to update automatically whenever the content of the linked cell changes, which is great for interactive reports."
    },
    {
      question: "What do 'Data Bars' in conditional formatting represent?",
      options: [
        "They highlight the top 10 values.",
        "They add small bar graphs inside each cell, with the length of the bar representing the cell's value relative to others.",
        "They add error bars to a chart.",
        "They create a new bar chart on the worksheet."
      ],
      correctAnswerIndex: 1,
      explanation: "Data Bars provide a quick, in-cell visual comparison of values, making it easy to spot high and low numbers in a range without needing a separate chart."
    },
    {
      question: "What does adding a 'Trendline' to a chart do?",
      options: [
        "It connects all the data points with a straight line.",
        "It highlights the highest and lowest data points.",
        "It displays the general direction or pattern in the data, often using a regression line.",
        "It changes the chart's background."
      ],
      correctAnswerIndex: 2,
      explanation: "A trendline is a powerful analytical tool that visually represents the trend in your data, helping to identify patterns and make forecasts."
    },
    // Expert
    {
      question: "How can you create a dynamic chart range that automatically expands when new data is added to your source?",
      options: [
        "You must manually update the chart's data source each time.",
        "Format the source data as an Excel Table (Ctrl+L) before creating the chart.",
        "By locking the chart's position.",
        "By saving the chart as an image."
      ],
      correctAnswerIndex: 1,
      explanation: "Using an Excel Table is the most robust and recommended method. The chart's data source is linked to the table object, so it automatically includes any new rows or columns added to the table."
    },
    {
      question: "What is a 'Waterfall' chart primarily used for?",
      options: [
        "Comparing parts of a whole.",
        "Showing the relationship between two sets of numbers.",
        "Visualizing the cumulative effect of sequentially introduced positive or negative values.",
        "Displaying hierarchical data."
      ],
      correctAnswerIndex: 2,
      explanation: "A Waterfall chart is excellent for understanding how an initial value is affected by a series of intermediate positive and negative values, such as analyzing a company's profit and loss statement."
    },
    {
      question: "How do you save a custom-formatted chart to be reused later in other workbooks?",
      options: [
        "Copy and paste the chart.",
        "Right-click the chart and select 'Save as Template'.",
        "Take a screenshot of the chart.",
        "Use the Format Painter."
      ],
      correctAnswerIndex: 1,
      explanation: "Saving a chart as a template (.crtx file) stores all its formatting and layout settings, allowing you to apply that custom look to any other chart with just a few clicks."
    },
    {
      question: "How can you use Named Ranges to define the data series in a chart?",
      options: [
        "It's not possible; you must use cell references.",
        "In the 'Select Data Source' dialog, edit a series and replace the cell reference in the 'Series values' field with the named range (e.g., =Sheet1!MySalesData).",
        "By typing the name directly into the chart legend.",
        "By creating a conditional formatting rule."
      ],
      correctAnswerIndex: 2,
      explanation: "Using named ranges makes your chart data sources much more readable and manageable, especially for complex or dynamic ranges defined with formulas like OFFSET."
    },
    {
      question: "What is the primary advantage of a 'Sunburst' chart over a 'Treemap' chart?",
      options: [
        "It can handle negative values.",
        "It's better for showing trends over time.",
        "It can display multiple levels of a hierarchy in a single view.",
        "It's simpler to format."
      ],
      correctAnswerIndex: 2,
      explanation: "Both chart types show hierarchical data. However, a Sunburst chart's concentric rings are more effective at showing how the outer rings (sub-categories) relate to the inner rings (parent categories), thus displaying multiple hierarchy levels clearly."
    }
  ]
};

const enExcelDataManagementQuiz: ExcelDataManagementQuizData = {
  title: "Quiz: Excel Data Management",
  description: "20 questions to assess your ability to manage and ensure the reliability of databases.",
  questions: [
    // Beginner
    {
      question: "Which tool allows you to permanently remove identical rows from a dataset?",
      options: [
        "Conditional Formatting",
        "Remove Duplicates",
        "Sort & Filter",
        "Flash Fill"
      ],
      correctAnswerIndex: 1,
      explanation: "The 'Remove Duplicates' tool, found in the Data tab, is specifically designed to find and delete entire duplicate rows."
    },
    {
      question: "What is the quickest way to apply a filter to a data column?",
      options: [
        "Use the 'Advanced' filter tool.",
        "Click the 'Filter' button in the Data tab to add filter arrows to headers.",
        "Write a VBA macro.",
        "Create a PivotTable."
      ],
      correctAnswerIndex: 1,
      explanation: "The AutoFilter button is the standard way to quickly add filter dropdowns to the header row of a dataset."
    },
    {
      question: "What is the primary purpose of 'Data Validation'?",
      options: [
        "To check for spelling errors.",
        "To restrict the type of data or the values that users can enter into a cell.",
        "To sort data numerically.",
        "To format cells based on their value."
      ],
      correctAnswerIndex: 1,
      explanation: "Data Validation is a proactive tool used to control data entry and prevent errors by defining what is considered a valid entry for a cell or range."
    },
    {
      question: "How do you sort data based on multiple columns (e.g., sort by Region, then by Sales)?",
      options: [
        "Sort the Sales column first, then the Region column.",
        "It's not possible to sort by more than one column.",
        "Use the 'Custom Sort' dialog box to add multiple sorting levels.",
        "Use the VLOOKUP function."
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Custom Sort' dialog allows you to define a hierarchy of sorting rules, specifying which column to sort by first, then second, and so on."
    },
    {
      question: "How can you highlight duplicate values in a column without deleting them?",
      options: [
        "Using the 'Remove Duplicates' tool.",
        "Using a PivotTable.",
        "Conditional Formatting -> Highlight Cells Rules -> Duplicate Values.",
        "Using the COUNT function."
      ],
      correctAnswerIndex: 2,
      explanation: "Conditional Formatting is the perfect tool for visually identifying duplicates (or unique values) without altering the data itself."
    },
    {
      question: "Which tool allows you to split the content of a single column into multiple columns (e.g., 'First_Name Last_Name' into two separate columns)?",
      options: [
        "Group",
        "Consolidate",
        "Text to Columns",
        "Filter"
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Text to Columns' wizard in the Data tab is designed specifically to parse data from one column into several, based on delimiters or fixed widths."
    },
    {
      question: "The 'Filter' feature allows you to...",
      options: [
        "Permanently delete rows that don't match your criteria.",
        "Rearrange rows in a specific order.",
        "Temporarily hide rows that do not meet your criteria.",
        "Calculate the sum of the visible rows."
      ],
      correctAnswerIndex: 2,
      explanation: "Filtering is a non-destructive action that hides rows, allowing you to focus on a subset of your data without deleting anything."
    },
    {
      question: "To create a dropdown list in a cell, which 'Data Validation' option should you use?",
      options: [
        "Allow: Any value",
        "Allow: Whole number",
        "Allow: List",
        "Allow: Custom"
      ],
      correctAnswerIndex: 2,
      explanation: "The 'List' option allows you to define a set of allowed values (either by typing them or by referencing a range) that will appear as a dropdown menu."
    },
    // Advanced
    {
      question: "What is the main advantage of the 'Advanced Filter' tool over AutoFilter?",
      options: [
        "It's more colorful.",
        "It can only filter by one criterion.",
        "It allows for complex criteria (e.g., (Sales > 500 AND Region = 'North') OR (Sales > 800)) and can extract results to another location.",
        "It works faster on small datasets."
      ],
      correctAnswerIndex: 2,
      explanation: "Advanced Filter is much more powerful for complex logical conditions and has the unique ability to copy the filtered results to a new range, leaving the original data untouched."
    },
    {
      question: "To use the 'Advanced Filter' tool, what must you prepare on your worksheet beforehand?",
      options: [
        "A PivotTable.",
        "A chart.",
        "A criteria range.",
        "A VBA macro."
      ],
      correctAnswerIndex: 2,
      explanation: "You must set up a specific range on your sheet where you define the headers and the criteria that the Advanced Filter will use to evaluate the data."
    },
    {
      question: "Which function is specifically designed to aggregate data (sum, average, etc.) in a filtered list, ignoring hidden rows?",
      options: [
        "SUM",
        "SUMIF",
        "SUBTOTAL",
        "AGGREGATE"
      ],
      correctAnswerIndex: 2,
      explanation: "The SUBTOTAL function is filter-aware. When used with function numbers 1-11, it calculates on all cells, but with 101-111, it calculates only on visible cells."
    },
    {
      question: "What is the purpose of the 'Group' feature in the Data tab?",
      options: [
        "To merge several cells into one.",
        "To create an outline to quickly hide or display groups of rows or columns.",
        "To group different worksheets together.",
        "To apply the same formatting to multiple cells."
      ],
      correctAnswerIndex: 1,
      explanation: "Grouping is used to create collapsible sections in your worksheet, which is very useful for summarizing data without creating a PivotTable."
    },
    {
      question: "In Data Validation, what does the 'Custom' option allow?",
      options: [
        "To create a custom error message.",
        "To use a formula to define the validation rule.",
        "To allow any type of data.",
        "To select from a predefined list of rules."
      ],
      correctAnswerIndex: 1,
      explanation: "The 'Custom' option provides ultimate flexibility by letting you write any logical formula that returns TRUE (for valid data) or FALSE (for invalid data)."
    },
    {
      question: "The 'Consolidate' tool is used to...",
      options: [
        "Combine values from multiple ranges into a single range.",
        "Join text from different cells.",
        "Create a link between two worksheets.",
        "Remove empty rows from a dataset."
      ],
      correctAnswerIndex: 0,
      explanation: "Consolidate is useful for summarizing data from similarly structured reports (e.g., summing sales from separate monthly sheets) into a master summary."
    },
    {
      question: "How can you ensure that a date entered in cell A1 is always a weekday (Monday-Friday) using Data Validation?",
      options: [
        "Custom formula: =ISWEEKDAY(A1)",
        "Custom formula: =WEEKDAY(A1,2)<=5",
        "It's not possible with Data Validation.",
        "Allow: Weekdays only"
      ],
      correctAnswerIndex: 1,
      explanation: "The formula `WEEKDAY(A1,2)` returns a number from 1 (Monday) to 7 (Sunday). Therefore, checking if this number is less than or equal to 5 effectively restricts the entry to a weekday."
    },
    // Expert
    {
      question: "Which feature, introduced in Excel 2013, is the most powerful for cleaning and transforming data from multiple sources before loading it into Excel?",
      options: [
        "Data Validation",
        "Advanced Filter",
        "Get & Transform (Power Query)",
        "Flash Fill"
      ],
      correctAnswerIndex: 2,
      explanation: "Get & Transform, the public name for the Power Query engine integrated into Excel, is a dedicated ETL (Extract, Transform, Load) tool far more powerful than any other native Excel feature for data preparation."
    },
    {
      question: "In Power Query, what is the purpose of the 'Remove Other Columns' step?",
      options: [
        "It deletes all columns from the table.",
        "It hides the other columns, but they can be brought back later.",
        "It keeps only the selected columns, making the query more robust against future column additions in the source.",
        "It's just a visual aid and doesn't affect the final output."
      ],
      correctAnswerIndex: 2,
      explanation: "This is a key best practice. By explicitly selecting which columns to keep, your query won't break if someone adds new, unwanted columns to the source data file later."
    },
    {
      question: "What is 'Flash Fill'?",
      options: [
        "A faster way to calculate formulas.",
        "A feature that automatically completes data entry when it detects a pattern in your actions.",
        "A type of conditional formatting.",
        "A tool for creating charts quickly."
      ],
      correctAnswerIndex: 1,
      explanation: "Flash Fill (Ctrl+E) is an intelligent tool that recognizes patterns (like extracting first names from a full name) and applies that pattern to the rest of the column, saving a lot of manual work."
    },
    {
      question: "To create a link between two tables based on a common column (e.g., Product ID) for cross-table analysis without VLOOKUP, you should use...",
      options: [
        "The Consolidate tool.",
        "A series of complex formulas.",
        "The Data Model (Power Pivot).",
        "Data Validation."
      ],
      correctAnswerIndex: 2,
      explanation: "The Data Model is Excel's internal relational database engine. Creating relationships between tables is the modern, efficient way to analyze data from multiple sources, especially in PivotTables."
    },
    {
      question: "In Power Query, what does 'Unpivot Columns' do?",
      options: [
        "It rotates the entire table 90 degrees.",
        "It transforms selected columns into attribute-value pairs, which is ideal for converting wide data tables into a proper tabular format.",
        "It deletes the selected columns.",
        "It sorts the columns in reverse order."
      ],
      correctAnswerIndex: 1,
      explanation: "Unpivoting is a crucial data transformation step. It takes a 'wide' format (e.g., columns for Jan, Feb, Mar) and turns it into a 'tall' format (a 'Month' column and a 'Value' column), which is the standard format required for PivotTables and most analysis tools."
    }
  ]
};

const enExcelPowerPivotQuiz: ExcelPowerPivotQuizData = {
  title: "Quiz: Power Pivot and DAX",
  description: "15 questions to assess your skills on the data model, DAX, and creating KPIs.",
  questions: [
    // Beginner
    {
      question: "What is the 'Data Model' in Excel?",
      options: [
        "A special formatting for tables.",
        "A collection of tables with relationships between them, enabling complex analysis.",
        "Another name for a PivotTable.",
        "A VBA macro for importing data."
      ],
      correctAnswerIndex: 1,
      explanation: "The Data Model is an internal database engine in Excel that allows you to work with multiple related data tables, going far beyond the capabilities of a single table."
    },
    {
      question: "How do you create a relationship between two tables in the Power Pivot window?",
      options: [
        "Using the LINK() function.",
        "By copying and pasting the columns.",
        "By dragging the key column from one table to the corresponding column of the other table in Diagram View.",
        "It's automatic; you cannot do it manually."
      ],
      correctAnswerIndex: 2,
      explanation: "The Diagram View in Power Pivot is the visual interface for creating 'one-to-many' relationships by dragging and dropping common fields between tables."
    },
    {
      question: "What is the main difference between a 'calculated column' and a 'measure' in DAX?",
      options: [
        "A measure is faster.",
        "A calculated column is physically stored in the table, while a measure is calculated on-the-fly based on the PivotTable context.",
        "There is no difference.",
        "A calculated column can only use addition."
      ],
      correctAnswerIndex: 1,
      explanation: "A calculated column adds a static value to each row of the table, consuming memory. A measure is dynamic, and its result depends on the filters applied in the PivotTable, which is much more flexible."
    },
    {
      question: "What is the simplest DAX function to sum all the numbers in a 'Sales' column?",
      options: [
        "TOTAL(Sales[Amount])",
        "ADD(Sales[Amount])",
        "SUM(Sales[Amount])",
        "CALCULATE(Sales[Amount])"
      ],
      correctAnswerIndex: 2,
      explanation: "`SUM` is the basic aggregation function in DAX, just like in Excel, for summing the values of a column."
    },
    {
      question: "What is the purpose of the DAX function `RELATED()`?",
      options: [
        "To find duplicate rows.",
        "To retrieve a value from another related table, from the 'one' side of the relationship.",
        "To calculate an average.",
        "To filter data."
      ],
      correctAnswerIndex: 1,
      explanation: "`RELATED` is used in calculated columns to 'look up' information from a dimension table (the 'one' side) to a fact table (the 'many' side)."
    },
    // Advanced
    {
      question: "Which DAX function is considered the most important and powerful because it allows you to modify the filter context of an expression?",
      options: [
        "FILTER",
        "CALCULATE",
        "SUMX",
        "ALL"
      ],
      correctAnswerIndex: 1,
      explanation: "`CALCULATE` is the cornerstone of DAX. It evaluates an expression in a filter context modified by the arguments you provide."
    },
    {
      question: "To calculate year-to-date sales, which family of DAX functions would you use?",
      options: [
        "Text functions",
        "Logical functions",
        "Time Intelligence functions",
        "Relationship functions"
      ],
      correctAnswerIndex: 2,
      explanation: "Time intelligence functions like `TOTALYTD`, `SAMEPERIODLASTYEAR`, and `DATESYTD` are specifically designed for calculations based on time periods."
    },
    {
      question: "What is the fundamental difference between `SUM` and `SUMX`?",
      options: [
        "SUMX is faster.",
        "SUM adds up a column, while SUMX performs a sum over an expression evaluated for each row of a table.",
        "There is no difference.",
        "SUMX only works on calculated columns."
      ],
      correctAnswerIndex: 1,
      explanation: "`SUMX` is an iterator function. It goes through a table row by row, performs a calculation (its 2nd argument) for each row, and then sums the results of those calculations."
    },
    {
      question: "What does the `ALL()` function do when used as a filter in `CALCULATE`?",
      options: [
        "It selects all columns of the table.",
        "It removes existing filters on the specified column or table, allowing a calculation over the entire dataset.",
        "It checks if all conditions are true.",
        "It returns an error if filters are active."
      ],
      correctAnswerIndex: 1,
      explanation: "`ALL` is a 'filter modifier'. It is used to ignore filters coming from the PivotTable or other calculations, for example, to calculate a percentage of a grand total."
    },
    {
      question: "In the formula `CALCULATE(SUM(Sales[Amount]), FILTER(Products, Products[Color] = \"Red\"))`, what is the role of `FILTER`?",
      options: [
        "To color the results red.",
        "To return TRUE or FALSE.",
        "To create a virtual table containing only red products, which is then used as a filter by CALCULATE.",
        "To remove red products from the table."
      ],
      correctAnswerIndex: 2,
      explanation: "`FILTER` is an iterator that returns a table. In `CALCULATE`, this returned table is used as a new filter that is added to the initial filter context."
    },
    // Expert
    {
      question: "What is 'context transition' in DAX?",
      options: [
        "Switching from one PivotTable to another.",
        "The process by which the row context of a calculated column or an iterator is transformed into an equivalent filter context.",
        "The automatic refreshing of data.",
        "A formatting option."
      ],
      correctAnswerIndex: 1,
      explanation: "This is a fundamental concept. When you use a measure inside a calculated column or a function like `SUMX`, `CALCULATE` is implicitly invoked, transforming the current row into a filter, which can affect the measure's result."
    },
    {
      question: "Which DAX function would you use to reference a column's value in an 'outer' iteration context?",
      options: [
        "OUTER",
        "PREVIOUS",
        "EARLIER",
        "CONTEXT"
      ],
      correctAnswerIndex: 2,
      explanation: "`EARLIER` allows you to 'step out' of the current row context to access the next-level-up row context. It's essential for many complex calculations."
    },
    {
      question: "What is the purpose of the `KEEPFILTERS` function when used within `CALCULATE`?",
      options: [
        "To save filters for later use.",
        "To prevent the new filter in `CALCULATE` from overwriting the outer filter context, instead creating an intersection of the two contexts.",
        "To speed up the calculation.",
        "To remove all filters except the one specified."
      ],
      correctAnswerIndex: 1,
      explanation: "By default, a filter in `CALCULATE` replaces any existing filter on the same column. `KEEPFILTERS` modifies this behavior so that the new filter is added to the old one, keeping only the values present in both."
    },
    {
      question: "To define a reusable variable within a complex DAX formula, which syntax is recommended for clarity and performance?",
      options: [
        "DEFINE var_name = ...",
        "LET var_name = ... IN ...",
        "VAR var_name = ... RETURN ...",
        "SET var_name = ..."
      ],
      correctAnswerIndex: 2,
      explanation: "The `VAR ... RETURN ...` syntax allows you to declare variables that store the result of an intermediate calculation. This avoids repeating the same logic multiple times in the formula and can improve performance."
    },
    {
      question: "How does DAX handle 'many-to-many' relationships?",
      options: [
        "They are not supported.",
        "By using a bridge table and one-to-many relationships.",
        "By enabling a special option in the settings.",
        "By using the `MANY_TO_MANY()` function."
      ],
      correctAnswerIndex: 1,
      explanation: "The standard model for handling a many-to-many relationship in DAX is to introduce an intermediary table (a bridge table) that contains the unique keys of the two tables to be linked, and then create 'one-to-many' relationships from each table to the bridge table."
    }
  ]
};

const enExcelPowerQueryQuiz: ExcelPowerQueryQuizData = {
  title: "Quiz: Power Query",
  description: "20 questions to test your knowledge on importing and transforming data.",
  questions: [
    // Débutant
    {
      question: "What is the main purpose of Power Query?",
      options: [
        "Create charts",
        "Write VBA code",
        "Connect to data sources, clean, and transform them",
        "Format cells"
      ],
      correctAnswerIndex: 2,
      explanation: "Power Query is a dedicated ETL (Extract, Transform, Load) tool for data preparation."
    },
    {
      question: "How do you open the Power Query Editor?",
      options: [
        "Insert Tab -> Power Query",
        "Data Tab -> Get Data",
        "Right-click on a cell -> Launch Power Query",
        "Home Tab -> Editor"
      ],
      correctAnswerIndex: 1,
      explanation: "Power Query is accessed via the 'Data' tab, using one of the 'Get Data' options."
    },
    {
      question: "Once the data is transformed in Power Query, how do you load it into an Excel sheet?",
      options: [
        "File -> Save",
        "'Apply' Button",
        "Home Tab -> 'Close & Load'",
        "Copy-paste the data"
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Close & Load' (or 'Close & Load To...') button is the standard command to send the query result to Excel."
    },
    {
      question: "Which simple transformation ensures that the first row of a file is used as column headers?",
      options: [
        "Filter Rows",
        "Rename Columns",
        "Use First Row as Headers",
        "Transpose Table"
      ],
      correctAnswerIndex: 2,
      explanation: "This is a very common command and is directly accessible in the 'Home' or 'Transform' tab of the editor."
    },
    {
      question: "What is the purpose of the 'Change Type' option in Power Query?",
      options: [
        "Change the chart type",
        "Define whether a column contains text, numbers, dates, etc.",
        "Change the font of the text",
        "Convert the table to an image"
      ],
      correctAnswerIndex: 1,
      explanation: "Setting the correct data type is crucial for correct calculations and relationships in Excel or Power Pivot."
    },
    {
      question: "What happens when you 'Refresh' a Power Query query in Excel?",
      options: [
        "The query is deleted",
        "The transformation steps are re-executed on the current source data",
        "Only the table's formatting is updated",
        "A copy of the sheet is created"
      ],
      correctAnswerIndex: 1,
      explanation: "Refreshing reruns the entire extraction and transformation process, ensuring your data in Excel is up to date."
    },
    {
      question: "Which Power Query tool allows you to combine tables by adding the rows of one table after the others?",
      options: [
        "Merge Queries",
        "Append Queries",
        "Pivot Column",
        "Group By"
      ],
      correctAnswerIndex: 1,
      explanation: "'Append Queries' is the equivalent of a `UNION ALL` in SQL; it stacks tables on top of each other."
    },
    // Advanced
    {
      question: "What is the fundamental difference between 'Append Queries' and 'Merge Queries'?",
      options: [
        "There is none",
        "Append stacks rows, Merge joins columns from two tables based on a common column",
        "Merge is faster than Append",
        "Append only works with two tables"
      ],
      correctAnswerIndex: 1,
      explanation: "'Merge' is the equivalent of a JOIN in SQL, enriching one table with the columns of another."
    },
    {
      question: "What programming language is used in the background by the Power Query editor?",
      options: [
        "VBA",
        "SQL",
        "M Language",
        "Python"
      ],
      correctAnswerIndex: 2,
      explanation: "Every click in the UI generates a line of code in the M (Mashup) language."
    },
    {
      question: "What does the 'Unpivot Columns' operation do?",
      options: [
        "It rotates the entire table",
        "It transforms columns (e.g., Jan, Feb, Mar) into a single 'Attribute' column and a 'Value' column",
        "It deletes the selected columns",
        "It creates a pivot table"
      ],
      correctAnswerIndex: 1,
      explanation: "This is a crucial transformation for converting data from a 'wide' format to a 'long' format, which is the standard format for analysis."
    },
    {
      question: "How can you add a custom column that calculates a value based on other columns?",
      options: [
        "View Tab -> New Column",
        "Transform Tab -> Calculate",
        "Add Column Tab -> Custom Column",
        "You have to write M code directly"
      ],
      correctAnswerIndex: 2,
      explanation: "The 'Custom Column' feature opens a dialog box where you can write a formula in M to create a new column."
    },
    {
      question: "Which 'Merge Queries' option is equivalent to a LEFT JOIN in SQL, keeping all rows from the first table?",
      options: [
        "Inner",
        "Left Outer",
        "Right Outer",
        "Full Outer"
      ],
      correctAnswerIndex: 1,
      explanation: "'Left Outer' is the most common type of join. It keeps all rows from the left table and adds matches from the right table."
    },
    {
      question: "In Power Query, what is a 'Parameter'?",
      options: [
        "A name for a query",
        "A variable that the user can easily change to alter the behavior of a query (e.g., a file path)",
        "A special data type",
        "A query error"
      ],
      correctAnswerIndex: 1,
      explanation: "Parameters make queries dynamic and reusable by allowing key values to be changed without modifying the M code."
    },
    {
      question: "What does the 'Group By' transformation do?",
      options: [
        "It merges cells",
        "It aggregates rows based on the values in one or more columns (e.g., calculating total sales by region)",
        "It sorts the data",
        "It creates an outline in Excel"
      ],
      correctAnswerIndex: 1,
      explanation: "'Group By' is the equivalent of the GROUP BY clause in SQL, allowing data to be summarized by performing calculations (Sum, Average, etc.) on groups of rows."
    },
    {
      question: "What is the purpose of the 'Extract Text Between Delimiters' option?",
      options: [
        "To delete text",
        "To split a column",
        "To isolate and extract a part of a character string located between a start and end delimiter",
        "To join text"
      ],
      correctAnswerIndex: 2,
      explanation: "This is a very practical tool for parsing complex text strings without having to write complicated M formulas."
    },
    // Expert
    {
      question: "How can you reference the result of the previous step in a custom column formula in M?",
      options: [
        "PreviousStep",
        "By using the name of the previous step (e.g., #\"Changed Type\")",
        "It's impossible",
        "input()"
      ],
      correctAnswerIndex: 1,
      explanation: "M code is a series of steps that reference each other. Each step has a name (often with spaces, hence the quotes and the #)."
    },
    {
      question: "What is the main difference between `Table.SelectRows` and `Table.SelectColumns` in the M language?",
      options: [
        "One filters rows, the other filters columns",
        "Both do the same thing",
        "`Table.SelectRows` is faster",
        "`Table.SelectColumns` modifies the source table"
      ],
      correctAnswerIndex: 0,
      explanation: "This is a fundamental distinction: `Table.SelectRows` is the function behind filtering (WHERE in SQL), while `Table.SelectColumns` is the function behind choosing columns (SELECT in SQL)."
    },
    {
      question: "What is the best way to document the steps of a complex Power Query query for another user?",
      options: [
        "Add comments in the Excel sheet",
        "Rename the steps with descriptive names and use the 'Properties' section",
        "Write a separate Word document",
        "Record an audio file"
      ],
      correctAnswerIndex: 1,
      explanation: "Renaming steps (e.g., \"Changed Type\" -> \"Set Data Types\") and using the description field in the step properties is the best practice for integrated documentation."
    },
    {
      question: "What is the purpose of the `Table.Buffer` function in the M language?",
      options: [
        "To save the table to a file.",
        "To load an entire table into memory to potentially speed up subsequent operations if it is referenced multiple times.",
        "To clear the Power Query cache.",
        "To create a copy of the table."
      ],
      correctAnswerIndex: 1,
      explanation: "This is a performance optimization technique. If a source query is used as a base for several other queries, 'buffering' it prevents it from being re-executed each time."
    },
    {
      question: "What is 'Query Folding' in Power Query?",
      options: [
        "The ability to hide steps in the editor.",
        "The process by which Power Query translates M transformation steps into a single query in the source's native language (e.g., SQL), delegating the processing to the database server.",
        "An error that occurs when the query is too complex.",
        "The compression of data before loading it into Excel."
      ],
      correctAnswerIndex: 1,
      explanation: "Query Folding is the most important concept for performance. When active, the heavy lifting is done by the server (e.g., SQL Server) instead of by your local machine, which is much more efficient."
    }
  ]
};

const enVbaVariablesQuiz: VbaVariablesQuizData = {
  title: "Quiz: VBA Variables and Data Types",
  description: "20 questions to assess your mastery of declarations, scope, and data types in VBA.",
  questions: [
    {
      question: "How do you declare a variable in VBA?",
      options: ["VAR myVariable", "DECLARE myVariable", "Dim myVariable", "SET myVariable"],
      correctAnswerIndex: 2,
      explanation: "`Dim` (Dimension) is the standard keyword for declaring a local variable in VBA."
    },
    {
      question: "Which data type is most appropriate for storing the integer `30000`?",
      options: ["Byte", "Integer", "Long", "Double"],
      correctAnswerIndex: 1,
      explanation: "`Integer` can store whole numbers up to 32,767. `Long` would be necessary for larger values, but `Integer` is sufficient and more optimized for this value."
    },
    {
      question: "A variable declared with `Dim` at the module level (outside of any procedure) is visible...",
      options: ["Only in the procedure where it is used.", "In all procedures of that module only.", "In all modules of the project.", "Nowhere, it's an error."],
      correctAnswerIndex: 1,
      explanation: "A variable declared with `Dim` at the top of a module has module scope. To make it visible throughout the project, you would need to use `Public`."
    },
    {
      question: "What is the default data type for a variable that has no specified type (e.g., `Dim myVariable`)?",
      options: ["String", "Integer", "Empty", "Variant"],
      correctAnswerIndex: 3,
      explanation: "`Variant` is the default type. It can hold any type of data, but it is less performant than specific data types."
    },
    {
      question: "To store the text \"Hello\", which data type is most efficient?",
      options: ["String", "Text", "Char", "Variant"],
      correctAnswerIndex: 0,
      explanation: "The `String` data type is specifically designed to store character strings."
    },
    {
      question: "Which declaration is used for a variable whose value will never change?",
      options: ["Static myConstant = 10", "Final myConstant = 10", "Const myConstant = 10", "Let myConstant = 10"],
      correctAnswerIndex: 2,
      explanation: "`Const` is used to declare a constant, a value that remains the same throughout the program's execution."
    },
    {
      question: "What is the result of `MsgBox TypeName(myVariable)` if `Dim myVariable As Boolean` has been declared?",
      options: ["\"Boolean\"", "\"True/False\"", "\"Integer\"", "\"Bool\""],
      correctAnswerIndex: 0,
      explanation: "`TypeName` is a VBA function that returns the data type of a variable as a string."
    },
    {
      question: "A variable declared with `Public` in a standard module is accessible...",
      options: ["Only in that module.", "Only in sheet modules.", "From any module in the VBA project.", "Only if `Option Explicit` is disabled."],
      correctAnswerIndex: 2,
      explanation: "`Public` gives the variable project-wide scope, making it global and accessible everywhere."
    },
    {
      question: "What is the purpose of the `Static` keyword in a variable declaration inside a procedure (`Sub` or `Function`)?",
      options: ["It makes it visible throughout the module.", "It makes it constant.", "It preserves its value between different calls to that same procedure.", "It allocates more memory."],
      correctAnswerIndex: 2,
      explanation: "Unlike a `Dim` variable which is reset with each call, a `Static` variable retains its value."
    },
    {
      question: "Which data type would you use to store a reference to an object, like a `Worksheet`?",
      options: ["Generic", "Object", "Pointer", "Reference"],
      correctAnswerIndex: 1,
      explanation: "The `Object` type is the generic type for object references. You can also use more specific types like `Worksheet` or `Range`."
    },
    {
      question: "What does `Option Explicit` at the beginning of a VBA module mean?",
      options: ["It forces correct code indentation.", "It requires the programmer to declare all variables before using them.", "It enables explicit Excel features.", "It disables error handling."],
      correctAnswerIndex: 1,
      explanation: "`Option Explicit` is an essential best practice that prevents typos in variable names by forcing their explicit declaration with `Dim`, `Public`, etc."
    },
    {
      question: "What is the problem with this code: `Dim x As Integer, y As Integer : x = 33000 : y = x`?",
      options: ["You cannot declare two variables on the same line.", "`x` is declared but not `y`.", "The value `33000` exceeds the maximum capacity of an `Integer`.", "There is no problem."],
      correctAnswerIndex: 2,
      explanation: "An `Integer` in VBA is a signed 16-bit integer, its range is from -32,768 to 32,767. `33000` would cause an overflow error. The `Long` type should be used."
    },
    {
      question: "To store a value that can be either `True` or `False`, which data type is most appropriate?",
      options: ["Integer", "Boolean", "Logical", "Bit"],
      correctAnswerIndex: 1,
      explanation: "The `Boolean` data type is specifically designed to store the logical values `True` and `False`."
    },
    {
      question: "What is the scope difference between `Private Sub MyProcedure()` and `Sub MyProcedure()` in a standard module?",
      options: ["`Private` makes it faster.", "There is no difference in a standard module.", "`Private` makes it visible only within that module, whereas without `Private` (default `Public`), it is visible from other modules.", "`Private` prevents the procedure from being called."],
      correctAnswerIndex: 2,
      explanation: "The `Private` keyword restricts the visibility of a procedure or variable to the module where it is declared. By default, a `Sub` procedure in a standard module is `Public`."
    },
    {
      question: "If you don't know what data type a function will return (number, text, error...), which variable type is the safest to receive this result?",
      options: ["String", "Double", "Variant", "Any"],
      correctAnswerIndex: 2,
      explanation: "`Variant` is designed to hold any type of data, including objects, errors, or arrays. It is the most flexible type, although less performant than specific types."
    },
    {
      question: "To group different but related types of variables (e.g., an employee's ID, Name, and HireDate) into a single variable, which VBA structure is most appropriate?",
      options: ["Collection", "Dictionary", "Public Enum", "Type...End Type"],
      correctAnswerIndex: 3,
      explanation: "The `Type...End Type` statement allows you to create a User-Defined Type (UDT), a custom data structure that can contain several related elements, similar to a `struct` in other languages."
    },
    {
      question: "In VBA, what is the main purpose of explicitly setting an object variable to `Nothing` (e.g., `Set MySheet = Nothing`)?",
      options: ["To delete the worksheet from the workbook.", "To clear the contents of the worksheet.", "To immediately release the memory used by the object variable, which can prevent memory leaks.", "To rename the object variable."],
      correctAnswerIndex: 2,
      explanation: "Setting an object to `Nothing` decrements its reference counter. When the counter reaches zero, VBA knows it can release the memory. This is crucial for memory management, especially in loops or large applications."
    },
    {
      question: "To create a set of named constants that can be used interchangeably with numbers for better code readability (e.g., for statuses like `statusOpen`, `statusClosed`), what should you declare?",
      options: ["Public Const", "Array", "Static Type", "Enum"],
      correctAnswerIndex: 3,
      explanation: "An `Enum` (Enumeration) is used to define a set of named integer constants, which makes the code much easier to read and maintain than using 'magic numbers'."
    },
    {
      question: "What is the declaration difference between a fixed-length string of 10 characters and a variable-length string?",
      options: ["Dim s As String(10)", "Dim s As String, Length=10", "Dim s As String * 10", "Dim s(10) As String"],
      correctAnswerIndex: 2,
      explanation: "The syntax `Dim variableName As String * length` is used to declare a fixed-length string, which always occupies a defined amount of memory, useful for file I/O or interacting with APIs. A standard `Dim s As String` declaration is for a variable-length string."
    },
    {
      question: "The undocumented VBA functions `StrPtr`, `ObjPtr`, and `VarPtr` provide what type of information about a variable?",
      options: ["Its data type as a string.", "Its memory address (pointer).", "Its value converted to a string.", "Its creation date."],
      correctAnswerIndex: 1,
      explanation: "These are advanced and unsupported functions that return the memory address (pointer) of a variable's data. They are extremely powerful but must be used with great caution, typically for high-performance operations or interfacing with external libraries."
    }
  ]
};

const dictionary: Dictionary = {
  navLinks: {
    home: { label: 'Home' },
    cv: { label: 'CV' },
    projects: { label: 'Projects' },
    templates: { label: 'Templates' },
    quiz: { label: 'Test your level' },
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
    greeting: 'Hello, I\'m',
    name: 'Oussama Berraies',
    role: 'Data Analyst, Excel VBA Developer, and Trainer.',
    intro: 'I automate processes, design custom applications, and transform data into interactive dashboards for fast and effective decision-making.',
    myProjectsButton: 'My Projects',
    contactMeButton: 'Contact Me',
    aboutMeTitle: 'About Me',
    aboutMeText: "Data Analyst and Excel VBA Developer with over 14 years of experience in process automation and data analysis. Expert in interactive dashboards, workflow optimization, and complex data extraction. Proficient in VBA, SQL, and Excel to turn data into actionable insights, facilitating quick and effective decisions. Innovative, rigorous, and results-oriented, I create custom solutions to optimize team and company performance.",
    viewCvButton: 'View My CV',
    mySkillsTitle: 'My Skills',
    skillVbaDev: { name: 'VBA Development', description: 'Creating custom scripts and applications for an optimal user experience.' },
    skillDataAnalysis: { name: 'Data Analysis', description: 'Transforming raw data into clear, useful, and actionable information.' },
    skillProjectManagement: { name: 'Project Management', description: 'Planning, executing, and monitoring digital projects.' },
    skillCollaboration: { name: 'Collaboration', description: 'Effective teamwork and transparent communication.' },
    ctaTitle: 'Ready to collaborate?',
    ctaText: "Let's discuss your project and see how we can create something exceptional together.",
    ctaButton: 'Let\'s Talk!',
  },
  pageHeaders: {
    cvTitle: "My Curriculum Vitae",
    cvDescription: "An overview of my professional background, education, and skills.",
    downloadCvButton: "Download My CV (PDF)",
    projectsTitle: "My Projects",
    projectsDescription: "A selection of tools developed to automate processes, ensure data reliability, and provide clear, actionable analyses.",
    templatesTitle: "My Templates",
    templatesDescription: "Explore a selection of reusable templates and components to accelerate your projects. → Under development, check back soon!",
    contactTitle: "Contact Me",
    contactDescription: "Whether you need advice, optimizations, or just want to collaborate, feel free to get in touch.",
    quizTitle: "Test Your Level",
    quizDescription: "Assess your Excel and VBA skills with our interactive quizzes, from beginner to expert level.",
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
    contactInfoAvailability: "Widely mobile - Available quickly",
    contactInfoSocialPrompt: "Book a slot to discuss your needs or projects (Via Calendly) ",
    sendMessageTitle: "Send me a message",
  },
  cvPage: enCVPage,
  projectsPage: enProjectsPage,
  quizPage: enQuizPage,
  excelQuizTopicsPage: enExcelQuizTopicsPage,
  vbaQuizTopicsPage: enVbaQuizTopicsPage,
  quizFormulasPage: enQuizFormulasPage,
  excelFormulasQuiz: enExcelFormulasQuiz,
  excelPivotTablesQuiz: enExcelPivotTablesQuiz,
  excelChartsQuiz: enExcelChartsQuiz,
  excelDataManagementQuiz: enExcelDataManagementQuiz,
  excelPowerPivotQuiz: enExcelPowerPivotQuiz,
  excelPowerQueryQuiz: enExcelPowerQueryQuiz,
  vbaVariablesQuiz: enVbaVariablesQuiz,
  quizEmail: enQuizEmail,
  metadata: {
    title: 'Oussama Berraies - Data Analyst & VBA Developer',
    description: 'Professional portfolio of Oussama Berraies, Data Analyst, Excel VBA Developer, and Trainer. Discover my projects, skills, and customizable templates.',
  },
};

export default dictionary;
