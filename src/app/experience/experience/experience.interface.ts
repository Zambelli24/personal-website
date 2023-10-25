import { ITechnology } from "src/app/shared/interfaces/technology.interface";

export interface IExperience {
  company: string;
  description: string;
  endDate: string;
  startDate: string;
  key: string;
  keyResponsibilities: string[];
  link: string;
  title: string;
  technologies: ITechnology[];
  type: 'pro' | 'intern';
}