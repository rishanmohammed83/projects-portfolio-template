/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://rishanmohammed83.github.io/portfolio',
  meta: {
    title: 'Mohammed Rishan | Cybersecurity Analyst | SOC Analyst | Security+',
    description:
      'Portfolio example: shipping reliable web products with clear architecture, tests, and delivery practices.',
  },
  hero: {
    name: 'Mohammed Rishan',
    role: 'Cybersecurity Analyst | SOC Analyst | Security+',
    tagline: 'Transitioning from 5+ years of software engineering into cybersecurity through hands-on labs, security monitoring, vulnerability assessment, and incident response.',
    contact: 'Open to collaborations on Cybersecurity roles.',
    avatarSrc: '/avatar.png',
    avatarAlt: 'Mohammed Rishan',
  },
  about: {
    paragraphs: [
      'I am a cybersecurity enthusiast with over five years of experience in software engineering. After earning my CompTIA Security+ certification, I began building practical cybersecurity skills through hands-on labs involving SIEM, vulnerability management, Active Directory, Windows Server, Linux, and network security.',
      'I am seeking an entry-level SOC Analyst or Cybersecurity Analyst opportunity in the UAE.',
      {
        heading: 'Example focus areas',
        bullets: [
          'Designing APIs and client boundaries with typed contracts',
          'Performance budgets, caching, and pragmatic observability',
          'Shipping incrementally with feature flags and rollback-friendly deploys',
        ],
      },
      {
        heading: 'Sample stack',
        techItems: ['Windows', 'Linux', 'MacOS', 'SIEM', 'Swift', 'JavaScript', 'Bash', 'Java', 'TCP/IP', 'VPN', 'MySQL', 'MongoDB', 'Vulnerability Assessment', 'Incident Response'],
      },
    ],
  },
  experiences: [
    {
      period: '2023 - 2025',
      title: 'App Development Analyst',
      company: 'Accenture Malaysia',
      summary:
        'Developed and implemented comprehensive security features for the UOB TMRW SG iOS app, effectively safeguarding sensitive user data across four countries and ensuring rigorous compliance with regional cybersecurity regulations and industry standards.',
      highlights: [
        'Played an active role in the development process from concept to production, with a strong focus on security during the testing phases (staging, UAT), ensuring robust protection.',
        'Conducted periodic security audits of the iOS app, identifying potential vulnerabilities and implementing necessary safeguards. Collaborated with external security firms to perform penetration testing and ensure compliance with industry security standards.',
        'Managed team tasks based on story points, prioritizing the resolution of security-related blockers. Ensured the app’s stability during updates, addressing and resolving issues through hotfixes as needed.',
      ],
      tech: ['Swift', 'MySQL', 'Splunk', 'Jira', 'Xcode'],
    },
    {
      period: '2020 - 2023',
      title: 'Junior Software Engineer',
      company: 'Alignminds Technologies Pvt Ltd',
      summary:
        'Minder is an award-winning technology consulting company that specializes in product engineering in web and mobile apps.',
      highlights: [
        'Maintained 70% code coverage throughout development of new features by writing comprehensive unit test code for newly created view models.',
        'Daily scrum standup to coordinate team’s resources to clear blockers. Also independently handled requirements from start to finish with the business and UI team.',
      ],
      tech: ['Swift', 'Dart', 'MySQL', 'Java', 'Xcode'],
    },
  ],
  featuredProjects: [
    {
      title: 'UOB TMRW iOS App',
      period: '2025',
      summary: 'UOB TMRW is the flagship all-in-one digital banking and finance app developed by United Overseas Bank (UOB). It provides users with personalized money insights, digital banking tools, wealth management, cardless ATM cash withdrawals, and reward redemption programs',
      solution: 'The UOB TMRW app solves fragmented financial tracking by consolidating daily banking, automated budgeting, localized rewards, and global wealth management into a single mobile platform.',
      impact:  [
        'Users get an automated, clear breakdown of where their money goes, helping them cut unnecessary expenses without manual spreadsheet tracking. ',
        'The app optimizes spending by automatically surfacing relevant merchant discounts, tracking expiring reward points, and offering competitive FX rates via Mighty FX.',
        ],
      image: 'TMRW-UOB.png',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Swift', 'Splunk', 'UIKit', 'Responsive Design'],
        },
        {
          category: 'Performance',
          items: ['Code Optimization', 'Unit Test', 'UI Test', 'Secure Coding Practices'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'UOB TMRW iOS', role: 'Frontend', techStack: 'Swift, UIKit, Jira, SQL, Splunk' },
    { date: '2022', project: 'Minder iOS', role: 'Frontend', techStack: 'Swift, Jira, SQL' },
    { date: '2022', project: 'Plam Hotel Flutter', role: 'Frontend', techStack: 'Dart, MySQL, Jira' },
    { date: '2021', project: 'Jeet iOS', role: 'Frontend', techStack: 'Swift, UIKit' },
  ],
  contact: {
    email: 'mrishan.dev@gmail.com',
    github: 'https://github.com/rishanmohammed83',
    linkedin: 'https://www.linkedin.com/in/mohammedrishantt',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
