import { Component } from '@angular/core';
import { LinkedInComponent } from '../shared/components/linkedin.component';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    LinkedInComponent,
  ]
})
export class FooterComponent {}