import { Chapter, Project, Stat } from './types';

export const STORY_CHAPTERS: Chapter[] = [
  {
    id: 'ch1',
    title: 'Chapter 1: The Foundation',
    subtitle: 'Bachelor of Engineering @ York University',
    period: 'Sept. 2020 – Apr 2024',
    location: 'Toronto, ON',
    description: 'In hindsight, this chapter was one of the most rewarding periods of my life. I fast-tracked my degree and graduated a full year early with First Class Standing, earning multiple honours distinctions along the way, all while completing two co-ops. York was where I learned to think like an engineer. Not just how to code, but how to break down complexity, structure systems, and design solutions that scale. It laid the groundwork for everything I build today.',
    achievements: [
      'Specialized Honors in Software Engineering',
      'Focus on System Design & Architecture',
      'Leadership in academic projects'
    ],
    techStack: ['Java', 'C++', 'System Design', 'Algorithms', 'Software Architecture'],
    image: 'assets/york-pic.jpg',
    alignment: 'left'
  },
  {
    id: 'ch2',
    title: 'Chapter 2: First Deployments',
    subtitle: 'Software Engineer Intern @ TD Bank',
    period: 'May 2022 – Aug. 2022',
    location: 'Toronto, ON',
    description: 'TD was where I shipped my first real impact. I helped modernize the ETL testing workflow by building an automated SQL-generation platform from the ground up. The React frontend and Node.js API I developed cut testing time by 85%, letting the team move faster and validate data more reliably.',
    achievements: [
      'Reduced ETL testing time via automation tool',
      'Designed and developed frontend for dynamic SQL generation',
      'Created API services for business logic'
    ],
    techStack: ['React.js', 'Node.js', 'SQL', 'Python', 'ETL'],
    image: 'assets/td-1.jpg',
    alignment: 'right'
  },
  {
    id: 'ch3',
    title: 'Chapter 3: TD Return Term (Legacy Modernization)',
    subtitle: 'Software Engineer Intern @ TD Bank',
    period: 'May 2023 – Aug. 2023',
    location: 'Toronto, ON',
    description: 'Coming back to TD meant working on something larger: modernizing the Interest Allocation System, a core service used across more than 70 business units. My work focused on strengthening the platform’s security posture, upgrading frameworks, and improving long-term maintainability.This chapter taught me the real engineering reasons behind upgrades. Keeping systems secure, reliable, and ready for future scale and not just “rewriting code.” I learned how critical it is to modernize before risks accumulate, not after.',
    achievements: [
      'Migrated Interest Allocation System to Java 17 & Spring Boot 3.0',
      'Conducted system hardening and dependency upgrades for long-term support',
      'Ensured compatibility and zero-defect releases'
    ],
    techStack: ['Java 17', 'Spring Boot', 'Maven', 'Security'],
    image: 'assets/td-2.jpg',
    alignment: 'left'
  },
  {
    id: 'ch4',
    title: 'Chapter 4: Architecting Solutions',
    subtitle: 'Software Engineer @ ABB',
    period: 'May 2024 – Present',
    location: 'Brampton, ON',
    description: 'At ABB, I’ve grown into a fully end-to-end engineer. I design systems, gather requirements from users and stakeholders, architect features, write the code, manage CI/CD, maintain infrastructure, handle releases, and support production. Full ownership from idea to deployment. My work ranges from building cost-calculation engines that automate complex sales processes to migrating applications onto Kubernetes clusters, introducing modern authentication standards like OAuth2/OpenID Connect, and creating web APIs that power real industrial operations.',
    achievements: [
      'Designed and built RESTful APIs using C# and .NET',
      'Migrated applications to Kubernetes and Docker',
      'Introduced OAuth2/OpenID Connect for secure access',
      'Owned full lifecycle: requirements → architecture → development → testing → releases → on-call'
    ],
    techStack: ['C#', '.NET', 'Docker', 'Kubernetes', 'SQL', 'Azure', 'OAuth2'],
    image: 'assets/abb-1.jpg',
    alignment: 'right'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Ridgeway Plaza Directory',
    link: 'https://www.ridgewayplazaeats.com/',
    tech: ['React.js', 'Bootstrap', 'SEO', 'Analytics'],
    description: 'A digital gateway for North America’s largest halal plaza. What started as a simple directory now attracts over 10,000 monthly users and ranks #1 on search, becoming the go-to resource for navigating a busy, restaurant-packed plaza that previously had no guide or directory at all.',
    image: '/assets/ridgeway-thumbnail.jpg',
    stats: [
      { label: 'Monthly Users', value: '10k+' },
      { label: 'SEO Ranking', value: '#1' },
      { label: 'Impressions', value: '60k/mo' }
    ]
  },
  {
    id: 'p2`',
    title: 'AI Teacher Transition Assistant',
    link: 'https://github.com/Choudhry-Shaharyar',
    tech: [
      'React',
      'TypeScript',
      'OpenAI Realtime API',
      'Public Speaking',
    ],
    description: 'An AI-driven system that automates classroom handovers when a homeroom teacher goes on leave. By having a short conversation with an AI chatbot, teachers can generate a complete, professional PDF transition report in under 5 minutes ensuring continuity, safety, and a smooth experience for students and supply teachers.',
    image: '/assets/koru-group.jpg',
    stats: [
      { label: 'Finalist', value: 'Top 3' },
      { label: 'Prize Won', value: '$2.5k' },
      { label: 'Presentation', value: 'Koro Spotlight' }
    ]
  },
  {
    id: 'p3',
    title: 'Online Auction System',
    link: 'https://github.com/Choudhry-Shaharyar/Online-Auction-System',
    tech: ['Spring Boot', 'Microservices', 'Docker', 'Azure'],
    description: 'A 3-tier microservices auction platform supporting both Forward and Dutch auction models. Built with Spring Boot, React, and Docker, and deployed as a six-service architecture on Azure showcasing distributed systems design, API development, and cloud containerization.',
    image: '/assets/bidsphere-thumbnail.jpg'
  },
  {
    id: 'p4',
    title: 'App Review Sentiment Analysis',
    link: 'https://github.com/Choudhry-Shaharyar/App-Review-Insights',
    tech: ['Python', 'NLP', 'Machine Learning', 'Jupyter'],
    description: 'An NLP pipeline that leverages LLMs, traditional sentiment models, and topic modeling to analyze thousands of banking app reviews. The system cleans, preprocesses, and scores sentiment using tools like TextBlob, VADER, and GPT, transforming raw feedback into actionable insights and feature recommendations for product teams.',
    image: 'assets/appreview-thumbnail.jpg'
  }
  // {
  //   id: 'p4',
  //   title: 'York Financial Wise',
  //   link: 'https://github.com/Choudhry-Shaharyar',
  //   tech: ['React.js', 'Node.js', 'i18next'],
  //   description: 'Financial literacy for everyone. Created in partnership with RBC to help international students navigate Canadian finance, supporting 7 languages for inclusivity.',
  //   image: 'https://picsum.photos/600/403?grayscale'
  // }
];

export const HERO_STATS: Stat[] = [
  { label: 'Experience', value: '2+', description: 'Years building software' },
  { label: 'Stack', value: 'Full', description: 'Backend heavy, Frontend capable' },
  { label: 'Focus', value: 'Scale', description: 'Enterprise grade solutions' }
];
