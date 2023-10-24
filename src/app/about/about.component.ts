import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EducationService } from '../services/education.service';
import { IEducation } from './education/education.interface';
import { faGaugeHigh, faMobileScreen, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../shared/components/icon.component';
import { faBuromobelexperte } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    CommonModule,
    IconComponent,
  ]
})
export class AboutComponent {
  education: IEducation[];
  pillarOneIcon = faGaugeHigh;
  pillarTwoIcon = faMobileScreen;
  pillarThreeIcon = faBuromobelexperte;
  pillarFourIcon = faUserCheck;

  constructor(private eduService: EducationService) {
    this.education = this.eduService.education;
  }
}
