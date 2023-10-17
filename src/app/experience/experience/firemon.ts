import { TECHNOLOGIES } from 'src/app/shared/constants/technologies';
import { IExperience } from './experience.interface';

export const FireMonExp: IExperience = {
  company: 'FireMon',
  description: 'This was my first full-time software development role. I went from zero professional experience to leading all frontend development in under a year. In my time at FireMon, I contributed to enhancing the overall code quality and reducing the amount of legacy code. I led the effort to refactor all AngularJS code to modern Angular which involved re-writing numerous shared components. I maintained dependencies across 7 frontend repositories keeping them up to date with the latest enhancements. My role quickly expanded as helped improve and manage the deployment pipeline.',
  endDate: 'June 2023',
  startDate: 'November 2021',
  key: 'firemon',
  keyResponsibilities: [
    'Managed dependencies and Angular upgrades across 7 repositories',
    'Collaborated with UX to drive customer value through new features',
    'Built pixel-perfect SaaS demo offering for use as sales aid',
    'Mentored and supported fellow developers in implementing efficient and elegant frontend solutions',
    'Optimized webpack compilation process leading to 50% faster builds',
    'Led the effort to migrate from AngularJS to Angular',
    'Designed and implemented modular UI components',
    'Assisted in the selection of new employees',
    'Implemented backend solutions to support frontend changes',
  ],
  link: 'https://www.firemon.com/',
  title: 'Software Engineer',
  technologies: [
    TECHNOLOGIES.ANGULAR,
    TECHNOLOGIES.ANGULARJS,
    TECHNOLOGIES.JAVA,
    TECHNOLOGIES.JENKINS,
    TECHNOLOGIES.SCSS,
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.JAVASCRIPT,
    TECHNOLOGIES.WEBPACK,
    TECHNOLOGIES.AUTH0,
  ],
  type: 'pro',
}