import { ITechnology } from "../shared/interfaces/technology.interface";

export interface IProject {
  description: string;
  images: IProjectImage[];
  link: string;
  logo: string;
  key: string;
  name: string;
  responsibilities: string[];
  technologies: ITechnology[];
}

export interface IProjectImage {
  frameType: 'mobile' | 'tablet' | 'laptop';
  source: string;
}