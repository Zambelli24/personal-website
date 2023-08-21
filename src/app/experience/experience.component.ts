import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IExperience } from './experience/experience.interface';
import { ExperienceService } from '../services/experience.service';
import { ConnectComponent } from '../connect/connect.component';

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [
    CommonModule,
    ConnectComponent,
  ]
})
export class ExperienceComponent {
  experience: IExperience[];

  constructor(private expService: ExperienceService) {
    this.experience = this.expService.experience;
  }
}
