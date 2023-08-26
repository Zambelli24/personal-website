import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConnectComponent } from '../connect/connect.component';
import { EducationService } from '../services/education.service';
import { IEducation } from './education/education.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    CommonModule,
    ConnectComponent,
    MatIconModule,
  ]
})
export class AboutComponent {
  education: IEducation[];

  constructor(private eduService: EducationService) {
    this.education = this.eduService.education;
  }
}
