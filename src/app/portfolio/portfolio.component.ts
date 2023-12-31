import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { IProject } from '../projects/project.interface';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../shared/components/icon.component';
import { DeviceFrameComponent } from '../shared/components/device-frame.component';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [
    CommonModule,
    DeviceFrameComponent,
    IconComponent,
  ]
})
export class PortfolioComponent {
  projects: IProject[];

  constructor(protected projectsService: ProjectsService) {
    this.projects = this.projectsService.projects;
  }
}