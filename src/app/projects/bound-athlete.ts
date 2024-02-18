import { TECHNOLOGIES } from '../shared/constants/technologies';
import { IProject } from './project.interface';

export const BoundAthleteProject: IProject = {
  description: 'Bound Athlete is a social networking platform for high school athletes to connect with coaches and other athletes. The goal of the platform is to education student athletes about the recruiting process. The platform serves as their home base for finding the right college to match their desires at the collegiate level.',
  technologies: [
    TECHNOLOGIES.AWS,
    TECHNOLOGIES.CSS,
    TECHNOLOGIES.DOCKER,
    TECHNOLOGIES.GIT,
    TECHNOLOGIES.GITHUB,
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.JAVASCRIPT,
    TECHNOLOGIES.NODEJS,
    TECHNOLOGIES.NPM,
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.PYTHON,
    TECHNOLOGIES.SCSS,
    TECHNOLOGIES.SLACK,
  ],
  images: [
    { source: 'assets/projects/bound/bound-3.png', frameType: 'tablet' },
    { source: 'assets/projects/bound/bound-1.png', frameType: 'mobile' },
    { source: 'assets/projects/bound/bound-2.png', frameType: 'mobile' },
    { source: 'assets/projects/bound/bound-4.png', frameType: 'tablet' },
    { source: 'assets/projects/bound/bound-5.png', frameType: 'laptop' },
  ],
  link: 'https://boundathlete.com/',
  logo: 'assets/projects/bound/bound-athlete.png',
  key: 'bound-athlete',
  name: 'Bound Athlete',
  responsibilities: [
    'Led all software development and testing',
    'Managed AWS infrastructure and deployment',
    'Drove business value through technical solutions',
    'Leveraged automation and scripting to improve process efficiency',
    'Enhanced UX continuously to ensure user satisfaction'
  ],
}