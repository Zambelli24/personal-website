import { Injectable } from '@angular/core';
import * as education from '../about/education';
import { IEducation } from '../about/education/education.interface';
import { MONTHS } from '../shared/constants/months';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private _education: IEducation[];

  constructor() {
    this._education = this._sortExp(Object.keys(education).map(key => (education as any)[key]));
  }

  get education(): IEducation[] {
    return this._education;
  }

  private _sortExp = (expList: IEducation[]): IEducation[] => {
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