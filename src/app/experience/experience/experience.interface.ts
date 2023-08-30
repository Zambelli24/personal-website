export interface IExperience {
  company: string;
  description: string;
  endDate: string;
  startDate: string;
  key: string;
  keyResponsibilities: string[];
  link: string;
  title: string;
  technologies: any[];
  type: 'pro' | 'intern';
}