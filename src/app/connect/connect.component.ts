import { Component, HostListener } from '@angular/core';
import { faGithub, faGoogle, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconComponent } from '../shared/components/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  imports: [
    CommonModule,
    IconComponent,
  ]
})
export class ConnectComponent {
  faGithub = faGithub;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faXTwitter = faXTwitter;

  isWideScreen = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const target = event?.target as Window;
    if (target) {
      this.isWideScreen = target.innerWidth > 750;
    }
  }
}