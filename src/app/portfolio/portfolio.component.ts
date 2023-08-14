import { Component } from "@angular/core";
import { ProjectsService } from "../services/projects.service";
import { IProject } from "../projects/project.interface";
import { CommonModule } from "@angular/common";
import { PortfolioItemComponent } from "./portfolio-item/portfolio-item.component";
import { ConnectComponent } from "../connect/connect.component";

@Component({
  standalone: true,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [
    CommonModule,
    ConnectComponent,
    PortfolioItemComponent,
  ]
})
export class PortfolioComponent {
  projects: IProject[];

  constructor(protected projectsService: ProjectsService) {
    this.projects = this.projectsService.projects;
  }
}