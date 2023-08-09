import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { IExperience } from './experience/experience.interface';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    CommonModule,
  ]
})
export class AboutComponent {
  experience: IExperience[];

  constructor(private expService: ExperienceService) {
    this.experience = this.expService.experience;
  }
}
