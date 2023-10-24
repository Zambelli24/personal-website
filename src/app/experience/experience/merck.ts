import { TECHNOLOGIES } from 'src/app/shared/constants/technologies';
import { IExperience } from './experience.interface';

export const Merk2018Exp: IExperience = {
  company: 'Merck',
  description: 'I was an intern on the Cloud Services team for the entire summer of 2018. Our team was responsible for the deployment and management of the cloud environment supporting the entire technology organization at Merck. I worked closely with serveral senior members of the team and was responsible for improving their security and remediation practices.',
  startDate: 'May 2018',
  endDate: 'August 2018',
  key: 'merck2018',
  keyResponsibilities: [
    'Worked on an auto-remediation script using AWS Lambda triggered automatically upon alert from 3rd party security software',
    'Incremented the functionality of the access control system used in the AWS environment',
    'Created various other tool scripts for collecting data about services running through AWS',
  ],
  link: 'https://www.merck.com/',
  title: 'Cloud Services Summer Intern',
  technologies: [
    TECHNOLOGIES.AWS,
    TECHNOLOGIES.JAVA,
    TECHNOLOGIES.PYTHON,
  ],
  type: 'intern',
}

export const Merck2017Exp: IExperience = {
  company: 'Merck/Moravian College',
  description: 'I worked with a small group of students from Moravian College carefully selected to participate in a summer internship sponsored by Merck. We were responsible for exploring new initiatives and completeing requested work while interfacing frequently with employees at Merck. The internship lasted the entire summer and allowed us to gain professional experience in the software engineering field.',
  startDate: 'May 2017',
  endDate: 'August 2017',
  key: 'merck2017',
  keyResponsibilities: [
    'Collaborated on a health IoT project for raspberry pi that takes advantage of Alexa and Google Home',
    'Worked with Flask to redefine the API for a preexisting system',
    'Leveraged Docker in order to turn a system with parts running on multiple machines into one where everything runs on the same machine',
  ],
  link: 'https://www.merck.com/',
  title: 'Developer Intern',
  technologies: [
    TECHNOLOGIES.DOCKER,
    TECHNOLOGIES.GIT,
    TECHNOLOGIES.GITHUB,
    TECHNOLOGIES.JIRA,
    TECHNOLOGIES.MONGODB,
    TECHNOLOGIES.PYTHON,
    TECHNOLOGIES.RASPBERRY_PI,
  ],
  type: 'intern',
}

export const Merck2016Exp: IExperience = {
  company: 'Merck/Moravian College',
  description: 'I worked with a small group of students from Moravian College carefully selected to participate in a summer internship sponsored by Merck. We were responsible for exploring new initiatives and completeing requested work while interfacing frequently with employees at Merck. The internship lasted the entire summer and allowed us to gain professional experience in the software engineering field.',
  startDate: 'May 2016',
  endDate: 'August 2016',
  key: 'merck2016',
  keyResponsibilities: [
    'Collaborated with employees of Merck on a weekly basis.',
    'Assisted in the creation of a project proposal to Merck.',
    'Worked with other students to improve a web application called Home Healthkit. The Home Healthkit is a system that allows doctors to store all of a patient\'s vitals in one place. The system leveraged the capabilities of a Raspberry Pi 3, making it very portable.',
  ],
  link: 'https://www.merck.com/',
  title: 'Developer Intern',
  technologies: [
    TECHNOLOGIES.GIT,
    TECHNOLOGIES.GITHUB,
    TECHNOLOGIES.JIRA,
    TECHNOLOGIES.PYTHON,
    TECHNOLOGIES.RASPBERRY_PI,
  ],
  type: 'intern',
}