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

export type ProjectItem = {
  title: string
  description: string
  tags: string[]
  highlight?: string
  href?: string
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
      { label: 'Focus', value: 'MSc Data Science', note: 'On track for Distinction' },
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
        summary: 'Contributed to mobile and full-stack product development.',
        bullets: [
          'Implemented and enhanced features for an iOS mobile application',
          'Analyzed iOS Passkeys for secure authentication solutions',
          'Developed Beta-Mart: an e-commerce app using React, Node.js, MongoDB',
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
      },
      {
        title: 'Proposal Automation Ecosystem',
        description: 'Full digital proposal platform with chatbot, automation tool, and Power Apps UI.',
        tags: ['Copilot Studio', 'Power Automate', 'SharePoint', 'Power Apps'],
        highlight: 'Contributed to $3M+ revenue',
      },
      {
        title: 'POR Leadership Dashboard',
        description: 'CRM-integrated real-time reporting platform for MEA executive leadership.',
        tags: ['Power BI', 'Power Apps', 'CRM Integration', 'Azure'],
      },
      {
        title: 'Child Mortality Prediction (MSc Dissertation)',
        description: 'End-to-end ML pipeline on NFHS data with robust class balancing and model evaluation.',
        tags: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE', 'TensorFlow'],
      },
      {
        title: 'Beta-Mart (E-Commerce App)',
        description: 'Full-stack e-commerce application built during internship.',
        tags: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
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
        degree: 'MSc in Data Science (Part-time)',
        institution: 'Heriot-Watt University, Dubai',
        period: '2024–2026',
        note: 'On track for Distinction',
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
