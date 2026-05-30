export type NavItem = {
  id: string
  label: string
}

export type SocialLink = {
  label: string
  href: string
  type: 'linkedin' | 'github' | 'email'
}

export type QuickFact = {
  icon: string
  title: string
  subtitle: string
}

export type SkillCategory = {
  title: string
  skills: string[]
}

export type ExperienceProject = {
  title: string
  points: string[]
}

export type ExperienceItem = {
  company: string
  role: string
  dateRange: string
  location: string
  summary: string
  bullets?: string[]
  projects?: ExperienceProject[]
}

export type ProjectDetailSection = {
  heading: string
  points: string[]
}

export type ProjectItem = {
  title: string
  description: string
  tags: string[]
  highlight?: string
  href?: string
  details?: {
    executiveSummary?: string
    sections: ProjectDetailSection[]
  }
}

export type AchievementItem = {
  icon: string
  title: string
  event: string
  description: string
  featured?: boolean
}

export type EducationItem = {
  degree: string
  institution: string
  period: string
  note: string
}

export type ContactMethod = {
  icon: string
  label: string
  value: string
  href: string
}

export const portfolioData = {
  brand: {
    initials: 'HS',
    name: 'Harshitha Srikanth',
    roleLine: 'AI Engineer · Data Scientist · Dubai, UAE',
  },
  navLinks: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ] as NavItem[],
  hero: {
    availability: 'Available for opportunities ✦',
    heading: "Hi, I'm Harshitha Srikanth",
    roleTicker: ['AI Engineer', 'Data Scientist', 'Automation Builder', 'MSc Candidate'],
    subheading: 'I build intelligent automation systems that actually work.',
    bio: 'AI Engineer at Emerson with enterprise experience in multi-agent workflows, generative AI, and scalable Azure solutions. Currently pursuing an MSc in Data Science at Heriot-Watt University.',
    ctaPrimary: { label: 'View My Work', target: 'projects' },
    ctaSecondary: { label: 'Download Resume', href: '/resume.pdf' },
    scrollHint: 'scroll',
    socialLinks: [
      {
        label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/harshithasrikanth/',
        type: 'linkedin',
      },
      { label: 'GitHub', href: 'https://github.com/harshis15', type: 'github' },
      { label: 'Email', href: 'mailto:harshithas2000@gmail.com', type: 'email' },
    ] as SocialLink[],
  },
  about: {
    title: 'About',
    statement:
      "I'm a Dubai-based AI Engineer who thrives at the intersection of machine learning, generative AI, and real-world enterprise automation. From building multi-agent RFQ systems to deploying Power Platform ecosystems used by 300+ people, I care deeply about impact - not just output.",
    quickFacts: [
      {
        icon: '🎓',
        title: 'MSc Data Science - Heriot-Watt University',
        subtitle: '2024–2026, Distinction track',
      },
      { icon: '💼', title: 'Data Scientist - Emerson, Dubai', subtitle: 'Enterprise AI delivery' },
      { icon: '🏆', title: '2× Hackathon Winner', subtitle: 'AGENTVERSE 2025' },
      { icon: '🌍', title: 'Languages: English, Hindi, Kannada', subtitle: 'Multilingual collaboration' },
      { icon: '📍', title: 'Based in Dubai, UAE', subtitle: 'Open to global opportunities' },
      { icon: '⚡', title: '93% faster RFQ processing built', subtitle: 'From 2 days to 20 minutes' },
    ] as QuickFact[],
    bentoStats: [
      { label: 'Based in', value: 'Dubai, UAE' },
      { label: 'Focus', value: 'MSc Data Science', note: 'Distinction' },
      { label: 'Impact', value: '1200+', note: 'hrs saved/month' },
      { label: 'Wins', value: '2×', note: 'Hackathon Winner' },
      { label: 'Languages', value: 'English · Hindi · Kannada' },
    ],
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Technologies I work with daily',
    marqueeRows: [
      [
        'OpenAI API',
        'Python',
        'Azure',
        'React',
        'TypeScript',
        'Multi-agent Workflows',
        'Prompt Engineering',
        'TensorFlow',
        'Scikit-learn',
        'Power Automate',
        'Power BI',
        'SQL',
        'RAG / Semantic Search',
        'XGBoost',
      ],
      [
        'Copilot Studio',
        'Node.js',
        'Swift',
        'NumPy',
        'Pandas',
        'Power Apps',
        'GitHub',
        'VS Code',
        'SMOTE',
        'LLM Integration',
        'SharePoint',
        'MongoDB',
        'Feature Engineering',
      ],
    ],
    categories: [
      {
        title: 'AI & GenAI',
        skills: [
          'OpenAI API',
          'Prompt Engineering',
          'Multi-agent Workflows',
          'RAG / Semantic Search',
          'LLM Integration',
          'Copilot Studio',
        ],
      },
      {
        title: 'Machine Learning',
        skills: [
          'Scikit-learn',
          'TensorFlow',
          'XGBoost',
          'Pandas',
          'NumPy',
          'Feature Engineering',
          'SMOTE',
          'Cross-validation',
        ],
      },
      {
        title: 'Programming',
        skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Swift', 'React.js', 'Node.js', 'HTML', 'CSS'],
      },
      {
        title: 'Cloud & Tools',
        skills: ['Azure', 'Power Apps', 'Power Automate', 'Power BI', 'GitHub', 'VS Code', 'SharePoint', 'Excel'],
      },
    ] as SkillCategory[],
  },
  experience: {
    title: 'Work Experience',
    items: [
      {
        company: 'Emerson',
        role: 'Data Scientist',
        dateRange: 'Sep 2025 – Present',
        location: 'Dubai, UAE',
        summary: 'Building enterprise-grade AI automation and reporting systems.',
        projects: [
          {
            title: 'AI-Driven RFQ Automation',
            points: [
              'Designed a multi-agent RFQ analyzer using OpenAI GPT models',
              'Migrated Excel-based estimators to Azure Functions',
              'Reduced processing time from ~2 days to 20 minutes (93% faster)',
              'Designed structured prompts, reasoning workflows, and guardrails',
            ],
          },
          {
            title: 'POR (Presidents Operating Report) Application',
            points: [
              'Integrated CRM data into a centralized leadership platform',
              'Scaled to 300 of 1800 individuals in the MEA organization',
              'Saves ~900–1200 hours per month across teams',
            ],
          },
          {
            title: 'MRO Configurator',
            points: ['Built unified part search, Trex model customization, and quote generation workflows'],
          },
        ],
      },
      {
        company: 'Emerson',
        role: 'Data and Automation Intern',
        dateRange: 'Aug 2024 – Aug 2025',
        location: 'Dubai, UAE',
        summary: 'Delivered Power Platform automation products with measurable business impact.',
        bullets: [
          'Built Budgetary Automation Tool + Microsoft Teams chatbot using Copilot Studio, Power Apps, Power Automate, and SharePoint',
          'Reduced proposal creation time by 40%, contributing to $3M+ in revenue',
          'Automated daily Esker financial report pipeline (Excel → Power BI)',
          'Contributed to Innovation Portal for employee ideas tracking',
        ],
      },
      {
        company: 'YML (Code and Theory)',
        role: 'Associate Software Engineer',
        dateRange: 'Aug 2022 - Dec 2023',
        location: 'Bengaluru, India',
        summary: 'Contributed to iOS and full-stack product development across banking and internal initiatives.',
        bullets: [
          'Delivered iOS application features for the Credit One Bank project, including UI implementation, debugging, and code quality improvements through reviews',
          'Worked on a 2-month iOS Passkeys proof of concept by researching secure authentication approaches and prototyping passkey flows',
          'Built Beta-Mart as an internal MERN training project with React frontend, Node.js + Express APIs, and MongoDB-backed data integration',
          'Collaborated with cross-functional teams to ship features on time and maintain reliable app performance',
        ],
      },
    ] as ExperienceItem[],
  },
  projects: {
    title: 'Featured Projects',
    items: [
      {
        title: 'Multi-Agent RFQ Analyzer',
        description: '5 specialized AI agents automating end-to-end RFQ processing.',
        tags: ['OpenAI', 'Multi-Agent', 'Azure Functions', 'Python', 'Prompt Engineering'],
        highlight: '🏆 Won 1st Place at AGENTVERSE Hackathon 2025',
        details: {
          executiveSummary:
            'Designed a multi-agent AI system that transforms RFQ handling from manual coordination into a fast, reliable, and structured workflow.',
          sections: [
            {
              heading: 'Problem',
              points: [
                'RFQ processing involved repetitive manual review and coordination.',
                'Teams needed faster technical validation and response generation at scale.',
              ],
            },
            {
              heading: 'Solution',
              points: [
                'Built 5 specialized AI agents for parsing, validation, reasoning, and output formatting.',
                'Engineered prompt workflows with guardrails for consistency and reliability.',
                'Integrated with Azure Functions for scalable backend execution.',
              ],
            },
            {
              heading: 'Impact',
              points: [
                'Improved end-to-end processing speed and reduced manual effort.',
                'Delivered a production-minded architecture recognized with 1st place at AGENTVERSE 2025.',
              ],
            },
          ],
        },
      },
      {
        title: 'Proposal Automation Ecosystem',
        description: 'Full digital proposal platform with chatbot, automation tool, and Power Apps UI.',
        tags: ['Copilot Studio', 'Power Automate', 'SharePoint', 'Power Apps'],
        highlight: 'Contributed to $3M+ revenue',
        details: {
          executiveSummary:
            'Built a connected proposal ecosystem that unifies chatbot guidance, workflow automation, and business-facing interfaces.',
          sections: [
            {
              heading: 'Scope',
              points: [
                'Developed a proposal automation platform combining Copilot Studio, Power Automate, SharePoint, and Power Apps.',
                'Connected people, documents, and workflow steps into one streamlined process.',
              ],
            },
            {
              heading: 'Key Capabilities',
              points: [
                'Chatbot-assisted proposal support for faster user interaction.',
                'Automated routing, approvals, and content flow across teams.',
                'Structured data capture and visibility through app-based interfaces.',
              ],
            },
            {
              heading: 'Business Outcome',
              points: [
                'Reduced proposal cycle friction and improved operational consistency.',
                'Supported measurable business impact, contributing to $3M+ revenue.',
              ],
            },
          ],
        },
      },
      {
        title: 'POR Leadership Dashboard',
        description: 'CRM-integrated real-time reporting platform for MEA executive leadership.',
        tags: ['Power BI', 'Power Apps', 'CRM Integration', 'Azure'],
        details: {
          executiveSummary:
            'The MEA SYSS Online POR transforms fragmented monthly reporting into a centralized, automated, and AI-ready system, recovering significant productivity and enabling teams to focus on high-value sales activities.',
          sections: [
            {
              heading: 'What the Application Does',
              points: [
                'Centralizes monthly sales reporting for the Middle East & Africa region into one digital platform.',
                'Brings together CRM, Oracle, Power BI, finance systems, and SharePoint into a unified reporting flow.',
                'Replaces manual Excel/PowerPoint consolidation with structured P01–P12 reporting at regional and country levels.',
                'Uses a scalable SharePoint/Dataverse-backed foundation to support multiple MEA sales teams.',
              ],
            },
            {
              heading: 'Why It Is Important',
              points: [
                'Eliminates the monthly “Report-a-thon” caused by fragmented tools and repetitive manual work.',
                'Reduces coordination overhead across regions, business units, and management.',
                'Improves data consistency, visibility, and reporting speed for better decision-making.',
                'Frees teams to spend more time on customer engagement and revenue-generating work.',
              ],
            },
            {
              heading: 'Time & Productivity Impact',
              points: [
                'Current manual process cost: 3–4 hours per person per month (~1 week/year).',
                'At 100 users: 300–400 hours/month lost (~100 weeks/year).',
                'At 300 users: 900–1200 hours/month lost (~300 weeks/year, 5+ years collective productivity).',
                'Automation focus: recover hundreds to thousands of hours annually for higher-value sales activities.',
              ],
            },
            {
              heading: 'Cost & Business Value',
              points: [
                'Converts lost reporting hours into productive sales and execution time.',
                'Lowers operational overhead from repetitive reporting cycles.',
                'Supports faster business reviews and potentially stronger revenue outcomes through timely insights.',
              ],
            },
            {
              heading: 'Roadmap',
              points: [
                'Phase 1: Data centralization and efficiency using SharePoint/Dataverse with standardized reporting templates.',
                'Phase 2: AI-assisted reporting with automated analysis, auto-fill updates, and PowerPoint generation.',
                'Long-term goal: shift from manual reporting to intelligent, automated decision support.',
              ],
            },
            {
              heading: 'Strategic Outcome',
              points: [
                'Delivers scalable reporting across MEA with stronger cross-functional alignment.',
                'Improves sales effectiveness through faster, clearer operational visibility.',
                'Creates space for teams to prioritize customer relationships and pipeline growth.',
              ],
            },
          ],
        },
      },
      {
        title: 'Child Mortality Prediction (MSc Dissertation)',
        description: 'End-to-end ML pipeline on NFHS data with robust class balancing and model evaluation.',
        tags: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE', 'TensorFlow'],
        details: {
          executiveSummary:
            'Built a dissertation-grade machine learning pipeline to analyze child mortality risk patterns using NFHS data and robust model evaluation practices.',
          sections: [
            {
              heading: 'Pipeline Design',
              points: [
                'Performed data cleaning, preprocessing, and feature engineering on large public health datasets.',
                'Addressed missing values and distribution issues for stable model training.',
              ],
            },
            {
              heading: 'Modeling',
              points: [
                'Evaluated multiple ML approaches with cross-validation and performance comparison.',
                'Used class balancing strategies such as SMOTE for better minority-class learning.',
              ],
            },
            {
              heading: 'Outcome',
              points: [
                'Produced a reproducible ML workflow suitable for research and practical health-risk prediction analysis.',
              ],
            },
          ],
        },
      },
      {
        title: 'Predicting Myocardial Infarction Using Machine Learning',
        description: 'Built an end-to-end ML pipeline on NFHS health data with data cleaning, feature engineering, missing-value handling, SMOTE-based class balancing (~3.7% minority class), and tuned models (Random Forest, Logistic Regression, XGBoost, KNN) via cross-validation.',
        tags: ['Python', 'Scikit-learn', 'XGBoost', 'Logistic Regression', 'KNN', 'SMOTE'],
        details: {
          executiveSummary:
            'Developed a complete ML workflow to predict myocardial infarction risk using imbalanced population health data and tuned multi-model experimentation.',
          sections: [
            {
              heading: 'Data Engineering',
              points: [
                'Built an end-to-end pipeline on NFHS data including cleaning, feature engineering, and missing-value handling.',
                'Handled severe class imbalance (~3.7% minority class) with SMOTE.',
              ],
            },
            {
              heading: 'Model Development',
              points: [
                'Trained Random Forest, Logistic Regression, XGBoost, and KNN models.',
                'Applied cross-validation and hyperparameter tuning to improve predictive performance.',
              ],
            },
            {
              heading: 'Result',
              points: [
                'Established a robust and comparative ML benchmark for cardiovascular risk prediction.',
              ],
            },
          ],
        },
      },
      {
        title: 'Beta-Mart (MERN Web App)',
        description: 'Internal training project at Code and Theory: developed responsive React UIs, built Node.js/Express APIs, integrated MongoDB, and delivered a full-stack e-commerce workflow with cross-functional collaboration.',
        tags: ['MERN Stack', 'React', 'Node.js', 'Express.js', 'MongoDB'],
        details: {
          executiveSummary:
            'Built a full-stack MERN e-commerce training project to strengthen end-to-end web engineering across frontend, APIs, and database integration.',
          sections: [
            {
              heading: 'Frontend',
              points: [
                'Developed responsive and interactive user interfaces using React.js.',
                'Implemented user-facing flows for browsing, interaction, and core e-commerce journeys.',
              ],
            },
            {
              heading: 'Backend & Data',
              points: [
                'Designed and implemented Node.js + Express.js APIs to power frontend features.',
                'Used MongoDB for structured persistence and smooth frontend-backend data flow.',
              ],
            },
            {
              heading: 'Delivery',
              points: [
                'Collaborated with cross-functional teammates to deliver a complete working web application within project timelines.',
              ],
            },
          ],
        },
      },
      {
        title: 'iOS Passkeys Proof of Concept',
        description: 'Researched and prototyped iOS passkey authentication approaches over 2 months, testing implementation patterns to strengthen mobile security and user sign-in experience.',
        tags: ['iOS', 'Passkeys', 'Security', 'Authentication', 'POC'],
        details: {
          executiveSummary:
            'Explored secure, passwordless authentication patterns by building and validating iOS passkey proof-of-concepts.',
          sections: [
            {
              heading: 'Research',
              points: [
                'Conducted technical research to evaluate passkey implementation options and security trade-offs.',
                'Analyzed how modern credential flows can improve user authentication safety and usability.',
              ],
            },
            {
              heading: 'Prototyping',
              points: [
                'Built and tested passkey-related prototypes across practical app scenarios.',
                'Validated behavior and feasibility to guide product-level adoption decisions.',
              ],
            },
          ],
        },
      },
      {
        title: 'Credit One Bank iOS Development',
        description: 'Implemented and enhanced iOS app features with clean coding practices, debugging, and code reviews, including passkeys-related security functionality for safer user access.',
        tags: ['iOS', 'Swift', 'Mobile Development', 'Code Review', 'App Security'],
        details: {
          executiveSummary:
            'Contributed to enterprise iOS delivery by building features, improving reliability, and strengthening app security practices.',
          sections: [
            {
              heading: 'Engineering Contributions',
              points: [
                'Implemented and enhanced user-facing iOS features in collaboration with the product team.',
                'Wrote clean, maintainable code aligned with team standards and best practices.',
              ],
            },
            {
              heading: 'Quality & Security',
              points: [
                'Troubleshot and debugged issues to improve stability and performance.',
                'Contributed to passkeys-related functionality to improve authentication security.',
                'Participated in code reviews to maintain code quality and consistency.',
              ],
            },
          ],
        },
      },
    ] as ProjectItem[],
  },
  achievements: {
    title: 'Recognition & Awards',
    items: [
      {
        icon: '🥇',
        title: '1st Place - Enterprise Solutions Track',
        event: 'AGENTVERSE Hackathon 2025 by Fetch.ai',
        description: 'Built a multi-agent autonomous RFQ Analyzer using 5 specialized AI agents.',
        featured: true,
      },
      {
        icon: '🥉',
        title: '3rd Place - DeFi Track',
        event: 'AGENTVERSE Hackathon 2025 by Fetch.ai',
        description: 'Intelligent solution leveraging decentralized finance tools using AI.',
      },
      {
        icon: '🏆',
        title: '1st Place - Global Hackathon 3.0, EMEA Regional Round (Warsaw, Poland)',
        event: 'Emerson Global Hackathon',
        description: 'Built an AI-driven proposal automation solution.',
      },
      {
        icon: '🌟',
        title: 'Best Practical Project Award - Global Finals (Madrid, Spain)',
        event: 'Emerson Global Hackathon',
        description: 'Represented the MEA region before Emerson global leadership.',
      },
    ] as AchievementItem[],
  },
  education: {
    title: 'Education & Certifications',
    educationItems: [
      {
        degree: 'MSc in Data Science',
        institution: 'Heriot-Watt University, Dubai',
        period: '2024–2026',
        note: 'Distinction',
      },
      {
        degree: 'B.E. in Information Science',
        institution: 'SJB Institute of Technology, Karnataka, India',
        period: '2018–2022',
        note: '8.9 CGPA',
      },
    ] as EducationItem[],
    certifications: [
      'Complete Python Bootcamp - Zero to Hero in Python',
      'Artificial Intelligence: Machine Learning (LinkedIn Learning)',
      'Data Analysis | SQL, Tableau, Power BI & Excel',
      'MERN Stack Development Bootcamp (2024)',
      'iOS and Swift — Complete iOS App Development Bootcamp (Udemy)',
    ],
  },
  contact: {
    title: "Let's Build Something",
    subtitle: 'Open to AI engineering roles, collaborations, and interesting problems.',
    methods: [
      {
        icon: 'email',
        label: 'Email',
        value: 'harshithas2000@gmail.com',
        href: 'mailto:harshithas2000@gmail.com',
      },
      {
        icon: 'location',
        label: 'Location',
        value: 'Dubai, UAE',
        href: 'https://maps.google.com/?q=Dubai+UAE',
      },
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/harshithasrikanth',
        href: 'https://www.linkedin.com/in/harshithasrikanth/',
      },
      {
        icon: 'github',
        label: 'GitHub',
        value: 'github.com/harshis15',
        href: 'https://github.com/harshis15',
      },
    ] as ContactMethod[],
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Send',
      sendingLabel: 'Sending...',
      success: 'Message sent successfully!',
      fallbackSuccess: 'Your mail client has been opened.',
      error: 'Could not send message. Please try again.',
    },
  },
  footer: {
    left: 'Harshitha Srikanth © 2026',
    center: 'Built with React & TypeScript',
  },
}

export type PortfolioData = typeof portfolioData
