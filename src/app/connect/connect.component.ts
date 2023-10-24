import { Component } from '@angular/core';
import { faGoogle, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconComponent } from '../shared/components/icon.component';

@Component({
  standalone: true,
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  imports: [
    IconComponent,
  ]
})
export class ConnectComponent {
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faXTwitter = faXTwitter;
}