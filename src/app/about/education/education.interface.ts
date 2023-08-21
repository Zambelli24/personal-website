export interface IEducation {
  achievements: string[];
  athletics: ISport[];
  extraCirriculars: IExtraCirricular[];
  key: string;
  location: string;
  logo: string;
  link: string;
  name: string;
  startDate: string;
  endDate: string;
}

export interface ISport {
  achievements: string[];
  name: string;
  positions: string[];
  years: string;
}

export interface IExtraCirricular {
  description: string;
  details: string[];
}