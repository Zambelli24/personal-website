import { TECHNOLOGIES } from 'src/app/shared/constants/technologies';
import { IExperience } from './experience.interface';

export const CAIExp: IExperience = {
  key: 'cai',
  company: 'Computer Aid Inc. (CAI)',
  description: 'I gained experience across various functions within the technology industry. I impacted the company by executing sales, marketing, customer support, strategic planning, software development and BI report design. I kept pace with an ever growing workload and pushed forward numerous new initiatives to drive growth for the company.',
  endDate: 'November 2021',
  startDate: 'May 2019',
  title: 'Technical Support Analyst',
  keyResponsibilities: [
    'Developed customer onboarding process for new clients and cultivated the relationship with the first 10 to ensure satisfaction',
    'Aided customers in the implementation of TrueProject and provided training to ensure proper use',
    'Created trail version of TrueProject to allow customers to test the product before purchasing and help drive sales',
    'Built MicroStrategy reports and dashboards and designed the integration with the TrueProject',
    'Supported custom requests from customers in developing their own best practice assessments for project status',
    'Enhanced dashboards within the TrueProject application using Angular',
    'Led the strategic planning and expansion of a new initiative to build a consortium of technology companies',
    'Co-Founded an employee resource group for young professionals to help guide them in their early career',
    'Designed requirements and helped build a python script for automating a tedious manual process',
  ],
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