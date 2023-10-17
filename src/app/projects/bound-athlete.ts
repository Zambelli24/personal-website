import { TECHNOLOGIES } from '../shared/constants/technologies';
import { IProject } from './project.interface';

export const BoundAthleteProject: IProject = {
  description: 'My first software development project. I began by assisting one other developer and within a few months I took ownership of all aspects of the development lifecycle. Bound Athlete is a social networking platform for high school athletes to connect with coaches and other athletes. The goal of the platform is to education student athletes about the recruiting process. The platform serves as their home base for finding the right college to match their desires at the collegiate level.',
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
  images: [
    'assets/projects/bound/bound-1.png',
    'assets/projects/bound/bound-2.png',
    'assets/projects/bound/bound-3.png',
    'assets/projects/bound/bound-4.png',
    'assets/projects/bound/bound-5.png',
  ],
  link: 'https://boundathlete.com/',
  logo: 'assets/projects/bound/bound-athlete.png',
  key: 'bound-athlete',
  name: 'Bound Athlete',
  responsibilities: [
    'Leads all software development and testing',
    'Manages AWS infrastructure and deployment',
    'Drives business value through technical solutions',
    'Leverages automation and scripting to improve process efficiency',
    'Enhances UX continuously to ensure user satisfaction'
  ],
}