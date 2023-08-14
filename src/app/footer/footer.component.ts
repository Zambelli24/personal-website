import { Component } from "@angular/core";
import { MONTHS } from "../shared/constants/months";
import { LinkedInComponent } from "../shared/components/linkedin.component";

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    LinkedInComponent,
  ]
})
export class FooterComponent {
  today: string;

  constructor() {
    const currMonth = new Date().getMonth();
    this.today = MONTHS[currMonth];
  }
}