import { TECHNOLOGIES } from "../shared/constants/technologies";

export interface IProject {
  description: string;
  link: string;
  logo: string;
  key: string;
  name: string;
  responsibilities: string[];
  technologies: any[];
}