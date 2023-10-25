import { ITechnology } from "../shared/interfaces/technology.interface";

export interface IProject {
  description: string;
  images: string[];
  link: string;
  logo: string;
  key: string;
  name: string;
  responsibilities: string[];
  technologies: ITechnology[];
}