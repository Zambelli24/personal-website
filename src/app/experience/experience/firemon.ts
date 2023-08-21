import { TECHNOLOGIES } from 'src/app/shared/constants/technologies';
import { IExperience } from './experience.interface';

export const FireMonExp: IExperience = {
  company: 'FireMon',
  description: 'This was my first full-time software development role. I went from zero professional experience to leading all frontend development in under a year. In my time at FireMon, I contributed to enhancing the overall code quality and reducing the amount of legacy code. I helped maintain the dependencies and keep all 7 frontend repositories up to date with the latest releases.',
  endDate: 'June 2023',
  startDate: 'November 2021',
  key: 'firemon',
  keyResponsibilities: [
    'Managed dependencies and Angular upgrades across 7 repositories with minimal escaped defects',
    'Collaborated closely with UX and product teams to drive customer value through software solutions',
    'Built pixel-perfect SaaS demo offering for use as sales aid',
    'Mentored and supported fellow developers in implementing efficient and elegant frontend solutions',
    'Leads critical feature development to enhance product offerings and drive customer value',
    'Implemented optimized webpack compilation process leading to 50% faster application builds',
    'Led the effort in migrating from AngularJS to Angular',
    'Designed and implemented modular, reusable frontend components to enhance architecture',
    'Improved code documentation to accelerate development process',
    'Evaluated and aided in the selection of new employees',
    'Implemented backend solutions to support frontend changes and ensure seamless user experience',
  ],
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