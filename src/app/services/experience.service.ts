import { Injectable } from '@angular/core';
import * as experience from '../about/experience';
import { IExperience } from '../about/experience/experience.interface';
import { MONTHS } from '../shared/constants/months';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private _experience: IExperience[];

  constructor() {
    this._experience = this._sortExp(Object.keys(experience).map(key => (experience as any)[key]));
  }

  get experience(): IExperience[] {
    return this._experience;
  }

  private _sortExp = (expList: IExperience[]): IExperience[] => {
    return expList.sort((a, b) => {
      if (a.endDate === 'Present') {
        return -1;
      }

      if (b.endDate === 'Present') {
        return 1;
      }

      const [aMonth, aYear] = a.endDate.split(' ');
      const [bMonth, bYear] = b.endDate.split(' ');
      if (aYear !== bYear) {
        return +bYear - +aYear;
      }

      const aMonthIndex = MONTHS.findIndex(month => month === aMonth);
      const bMonthIndex = MONTHS.findIndex(month => month === bMonth);
      return bMonthIndex - aMonthIndex;
    });
  }
}