import { Injectable } from '@angular/core';
import * as experience from '../about/experience';
import { IExperience } from '../about/experience/experience.interface';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private _experience: IExperience[];

  constructor() {
    this._experience = Object.keys(experience).map(key => (experience as any)[key]);
  }

  get experience(): IExperience[] {
    return this._experience;
  }
}