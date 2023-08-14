import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/projects/project.interface';

@Component({
  standalone: true,
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
  imports: [
    CommonModule,
  ]
})
export class PortfolioItemComponent {
  @Input() project: IProject;

  constructor() { }
}