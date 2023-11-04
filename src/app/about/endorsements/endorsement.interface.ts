export interface IEndorsement {
  comment: string;
  connection: string;
  location: string;
  name: string;
  relationship: 'Colleague' | 'Client';
  type: 'project' | 'work';
}