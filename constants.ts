import { Chapter, Project, Stat } from './types';

export const STORY_CHAPTERS: Chapter[] = [
  {
    id: 'ch1',
    title: 'Chapter 1: The Foundation',
    subtitle: 'Bachelor of Engineering @ York University',
    period: 'Sept. 2020 – Apr 2024',
    location: 'Toronto, ON',
    description: 'Every great structure needs a solid foundation. My journey began in the halls of York University, specializing in Software Engineering. Here, I didn\'t just learn syntax; I learned how to think like an engineer—deconstructing complex problems and rebuilding them into scalable solutions.',
    achievements: [
      'Specialized Honors in Software Engineering',
      'Focus on System Design & Architecture',
      'Leadership in academic projects'
    ],
    techStack: ['Java', 'C++', 'System Design', 'Algorithms', 'Software Architecture'],
    image: 'https://picsum.photos/800/600?grayscale&blur=2',
    alignment: 'left'
  },
  {
    id: 'ch2',
    title: 'Chapter 2: First Deployments',
    subtitle: 'Software Engineer Intern @ TD Bank',
    period: 'May 2022 – Aug. 2022',
    location: 'Toronto, ON',
    description: 'Stepping into the corporate arena, I tackled my first major challenge: inefficiency in ETL testing. I realized that manual processes were the enemy of innovation. By automating SQL query generation, I didn\'t just save time; I liberated the team to focus on higher-value problems.',
    achievements: [
      'Reduced ETL testing time by 85% via automation',
      'Built React frontend for dynamic SQL generation',
      'Implemented Node.js API endpoints for business logic'
    ],
    techStack: ['React.js', 'Node.js', 'SQL', 'Python', 'ETL'],
    image: 'https://picsum.photos/800/601?grayscale',
    alignment: 'right'
  },
  {
    id: 'ch3',
    title: 'Chapter 3: The Backend Dive',
    subtitle: 'Software Engineer Intern @ TD Bank',
    period: 'May 2023 – Aug. 2023',
    location: 'Toronto, ON',
    description: 'Returning to TD, the stakes were higher. I was tasked with modernizing legacy systems. Migrating the Interest Allocation System wasn\'t just about code translation; it was about ensuring security and scalability for over 70 enterprises. This was where I learned the weight of "zero defects".',
    achievements: [
      'Migrated Interest Allocation System to Java 17 & Spring Boot 3.0',
      'Enhanced transaction processing capacity',
      'Secured system with 0 defects via Veracode SAST'
    ],
    techStack: ['Java 17', 'Spring Boot', 'Maven', 'Security', 'Microservices'],
    image: 'https://picsum.photos/800/602?grayscale',
    alignment: 'left'
  },
  {
    id: 'ch4',
    title: 'Chapter 4: Architecting Solutions',
    subtitle: 'Software Engineer @ ABB',
    period: 'May 2024 – Present',
    location: 'Brampton, ON',
    description: 'Now, as a full-fledged Engineer at ABB, I bridge the gap between industrial needs and modern software. From designing cost-calculation engines that automate sales quotes to managing CI/CD pipelines, I build systems that drive real-world efficiency. I am no longer just writing code; I am engineering business value.',
    achievements: [
      'Developed RESTful Web API with C# & .NET',
      'Automated CI/CD with Docker & Kubernetes',
      'Reduced sales inquiry time by 95% via automation',
      'Optimized data transfer speeds by 5%'
    ],
    techStack: ['C#', '.NET', 'Docker', 'Kubernetes', 'SQL', 'CI/CD'],
    image: 'https://picsum.photos/800/603?grayscale',
    alignment: 'right'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Ridgeway Plaza Directory',
    tech: ['React.js', 'Bootstrap', 'SEO', 'Analytics'],
    description: 'A digital gateway for North America’s largest halal plaza. What started as a directory became a community hub, driving massive organic traffic and helping local businesses thrive.',
    image: 'https://picsum.photos/600/400?grayscale',
    stats: [
      { label: 'Monthly Users', value: '10k+' },
      { label: 'SEO Ranking', value: '#1' },
      { label: 'Impressions', value: '60k/mo' }
    ]
  },
  {
    id: 'p2',
    title: 'Online Auction System',
    tech: ['Spring Boot', 'Microservices', 'Docker', 'Azure'],
    description: 'A complex 3-tier microservices platform supporting Dutch and Forward auction models. A deep dive into distributed systems, containerization, and cloud deployment.',
    image: 'https://picsum.photos/600/401?grayscale'
  },
  {
    id: 'p3',
    title: 'App Review Sentiment Analysis',
    tech: ['Python', 'NLP', 'Machine Learning', 'Jupyter'],
    description: 'Leveraging LLMs to decode user feedback. This pipeline extracts, cleans, and scores sentiment from banking app reviews to derive actionable product insights.',
    image: 'https://picsum.photos/600/402?grayscale'
  },
  {
    id: 'p4',
    title: 'York Financial Wise',
    tech: ['React.js', 'Node.js', 'i18next'],
    description: 'Financial literacy for everyone. Created in partnership with RBC to help international students navigate Canadian finance, supporting 7 languages for inclusivity.',
    image: 'https://picsum.photos/600/403?grayscale'
  }
];

export const HERO_STATS: Stat[] = [
  { label: 'Experience', value: '3+', description: 'Years building software' },
  { label: 'Stack', value: 'Full', description: 'Backend heavy, Frontend capable' },
  { label: 'Focus', value: 'Scale', description: 'Enterprise grade solutions' }
];
