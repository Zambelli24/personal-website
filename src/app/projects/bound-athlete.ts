import { TECHNOLOGIES } from '../shared/constants/technologies';
import { IProject } from './project.interface';

export const BoundAthleteProject: IProject = {
  description: 'A social networking platform for high school athletes to connect with coaches and other athletes. The goal of the platform is to education student athletes about the recruiting process. The platform serves as their home base for finding the right college to match their desires at the collegiate level.',
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.NODEJS,
    TECHNOLOGIES.AWS,
    TECHNOLOGIES.AWS_S3,
    TECHNOLOGIES.AWS_RDS,
    TECHNOLOGIES.AWS_LAMBDA,
    TECHNOLOGIES.TWILIO,
    TECHNOLOGIES.MYSQL,
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.SCSS,
    TECHNOLOGIES.DOCKER,
    TECHNOLOGIES.NETLIFY,
    TECHNOLOGIES.HEROKU,
    TECHNOLOGIES.NGROK,
    TECHNOLOGIES.JAVASCRIPT,
    TECHNOLOGIES.PYTHON
  ],
  link: 'https://boundathlete.com/',
  logo: 'assets/project-logos/bound-athlete.png',
  key: 'bound-athlete',
  name: 'Bound Athlete',
  responsibilities: [
    'Lead all frontend, backend and API development as well as testing',
    'Manage AWS infrastructure and deployment',
    'Drive business value through technical solutions',
    'Develop scripting and automation to improve development and deployment processes',
    'Enhance and improve the UX to ensure user satisfaction'
  ],
}