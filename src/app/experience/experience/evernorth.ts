import { TECHNOLOGIES } from 'src/app/shared/constants/technologies';
import { IExperience } from './experience.interface';

export const EvernorthExp: IExperience = {
  company: 'Evernorth Health Services',
  description: 'I am currently a Senior Full Stack Engineer contracted through Solomon Page. I am responsibile for an internal solution helping our custom service teams assit customers in optimizing their healthcare and benefits plans.',
  endDate: 'Present',
  startDate: 'June 2023',
  key: 'evernorth',
  keyResponsibilities: [
    'Implements modular solutions to complex problems allowing for rapid development and deployment',
    'Performs all development, testing, and review responsibilies',
    'Leverages Agile methodologies to plan and execute all deliverables'
  ],
  link: 'https://www.evernorth.com/',
  title: 'Senior Full Stack Engineer',
  technologies: [
    TECHNOLOGIES.ANGULAR,
    TECHNOLOGIES.AWS,
    TECHNOLOGIES.NODEJS,
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.SCSS,
  ],
  type: 'pro',
}