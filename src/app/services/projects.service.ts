import { Injectable } from "@angular/core";
import { IProject } from "../projects/project.interface";
import * as projects from '../projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _projects: IProject[];

  constructor() {
    this._projects = Object.keys(projects).map(key => (projects as any)[key]);
  }

  get projects(): IProject[] {
    return this._projects;
  }
}