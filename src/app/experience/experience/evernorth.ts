import { TECHNOLOGIES } from 'src/app/shared/constants/technologies';
import { IExperience } from './experience.interface';

export const EvernorthExp: IExperience = {
  company: 'Evernorth Health Services',
  description: 'I am responsibile for an internal solution helping our customer service teams assist customers in optimizing their healthcare and benefits plans. Within 6 months I have elevated my responsibilities to leading numerous re-architecting efforts while gaining the trust of my team. I am frequently relied upon for critical fixes and ensuring code quality.',
  endDate: 'Present',
  startDate: 'June 2023',
  key: 'evernorth',
  keyResponsibilities: [
    'Implements modular solutions to maximize code reuse',
    'Performs development, testing, and code reviews',
    'Leverages Agile methodologies to plan and execute all deliverables',
    'Re-architects legacy code to improve performance and maintainability',
    'Enhances UI and data structures to maximize efficiency and UX',
  ],
  link: 'https://www.evernorth.com/',
  title: 'Software Engineering Senior Advisor',
  technologies: [
    TECHNOLOGIES.ANGULAR,
    TECHNOLOGIES.AWS,
    TECHNOLOGIES.CSS,
    TECHNOLOGIES.CONFLUENCE,
    TECHNOLOGIES.GIT,
    TECHNOLOGIES.GITHUB,
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.JIRA,
    TECHNOLOGIES.MARKDOWN,
    TECHNOLOGIES.NPM,
    TECHNOLOGIES.NODEJS,
    TECHNOLOGIES.SCSS,
  ],
  type: 'pro',
}