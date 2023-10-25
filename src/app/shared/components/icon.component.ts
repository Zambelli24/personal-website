import { Component, Input, OnInit } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

@Component({
  standalone: true,
  selector: 'app-icon',
  styleUrls: ['./icon.component.scss'],
  templateUrl: './icon.component.html',
  imports: [
    FontAwesomeModule,
  ]
})
export class IconComponent implements OnInit  {
  @Input() icon: IconDefinition;
  @Input() inverted = false;
  @Input() tooltip: string;

  style = { 'color': 'var(--text-color)'};

  ngOnInit() {
    if (this.inverted) {
      this.style['color'] = 'var(--secondary-text-color)';
    }
  }
}