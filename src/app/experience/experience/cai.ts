import { TECHNOLOGIES } from 'src/app/shared/constants/technologies';
import { IExperience } from './experience.interface';

export const CAIExp: IExperience = {
  key: 'cai',
  company: 'Computer Aid Inc. (CAI)',
  description: 'I gained experience across various functions within the technology industry. I impacted the company by executing sales, marketing, customer support, strategic planning, software development and BI report design. I kept pace with an ever growing workload and pushed forward numerous new initiatives to drive growth for the company. I worked closely with the CEO as well as a Senior Vice President collaborating with them on a daily basis. I gained experience working the employees of all levels including the C-suite. I learned how to effectively communicate with anyone in a company in order to get the job done.',
  endDate: 'November 2021',
  startDate: 'May 2019',
  title: 'Technical Support Analyst',
  keyResponsibilities: [
    'Designed customer onboarding process for new clients',
    'Cultivated the first 10 client relationships to ensure satisfaction',
    'Guided client implementations of TrueProject providing training along the way',
    'Created TrueProject trial to help drive sales',
    'Built MicroStrategy dashboards and integrated them with the TrueProject',
    'Supported clients in developing custom best practice assessments for project status',
    'Enhanced dashboards within the TrueProject application using Angular',
    'Led the strategic planning and expansion of a new initiative to build a consortium of technology companies',
    'Co-Founded an employee resource group to help guide young professionals',
    'Designed requirements and helped build a python script for automating a tedious manual process',
  ],
  link: 'https://www.cai.io/',
  technologies: [
    TECHNOLOGIES.ANGULAR,
    TECHNOLOGIES.MICROSTRATEGY,
    TECHNOLOGIES.PYTHON,
    TECHNOLOGIES.POWERPOINT,
    TECHNOLOGIES.EXCEL,
    TECHNOLOGIES.WORD,
  ],
  type: 'pro',
};