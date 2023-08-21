import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConnectComponent } from '../connect/connect.component';
import { EducationService } from '../services/education.service';
import { IEducation } from './education/education.interface';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    CommonModule,
    ConnectComponent,
  ]
})
export class AboutComponent {
  education: IEducation[];

  constructor(private eduService: EducationService) {
    this.education = this.eduService.education;
  }
}
