import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from '@coreui/angular';
import { EducationService } from '../services/education.service';
import { IEducation } from './education/education.interface';
import { faCircleArrowLeft, faCircleArrowRight, faGaugeHigh, faMinus, faMobileScreen, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../shared/components/icon.component';
import { faBuromobelexperte } from '@fortawesome/free-brands-svg-icons';
import { IEndorsement } from './endorsements/endorsement.interface';
import { endorsements } from './endorsements/endorsements';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    CarouselModule,
    CommonModule,
    IconComponent,
  ]
})
export class AboutComponent {
  currEndorsement = endorsements[0];
  education: IEducation[];
  endorsements: IEndorsement[] = endorsements;

  pillarOneIcon = faGaugeHigh;
  pillarTwoIcon = faMobileScreen;
  pillarThreeIcon = faBuromobelexperte;
  pillarFourIcon = faUserCheck;

  nextIcon = faCircleArrowRight;
  previousIcon = faCircleArrowLeft;
  selectIcon = faMinus;

  constructor(private eduService: EducationService) {
    this.education = this.eduService.education;
  }

  changeEndorsement = (action: 'previous' | 'next' | 'select', endorsement?: IEndorsement) => {
    if (action === 'select') {
      this.currEndorsement = endorsement as IEndorsement;
    } else if (action === 'previous') {
      const ind = this.endorsements.findIndex((endorsement) => endorsement.comment === this.currEndorsement.comment);
      if (ind === 0) {
        this.currEndorsement = this.endorsements[this.endorsements.length - 1];
      } else {
        this.currEndorsement = this.endorsements[ind - 1];
      }
    } else if (action === 'next') {
      const ind = this.endorsements.findIndex((endorsement) => endorsement.comment === this.currEndorsement.comment);
      if (ind === this.endorsements.length - 1) {
        this.currEndorsement = this.endorsements[0];
      } else {
        this.currEndorsement = this.endorsements[ind + 1];
      }
    }
  }
}
