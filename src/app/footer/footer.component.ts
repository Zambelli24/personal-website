import { Component, HostBinding } from '@angular/core';
import { ConnectComponent } from '../connect/connect.component';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { IconComponent } from '../shared/components/icon.component';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    ConnectComponent,
    IconComponent,
  ]
})
export class FooterComponent {
  @HostBinding('class') transparent = '';

  audioControlIcon = faPlayCircle;
  copyRightText: string;
  faAngular = faAngular;

  private _lastScrollTop = 0;
  private _year = new Date().getFullYear().toString();

  constructor() {
    this._setFooterText(document.documentElement.clientWidth);

    window.addEventListener('scroll', () => {
      const currScrollTop = document.documentElement.scrollTop;
      const isScrollingDown = currScrollTop < this._lastScrollTop;
      const isBottom = (window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight;

      if (isScrollingDown || isBottom) {
        this.transparent = '';
      } else {
        this.transparent = 'transparent';
      }

      this._lastScrollTop = currScrollTop;
    });

    window.addEventListener('resize', () => {
      this._setFooterText(document.documentElement.clientWidth);
    });
  }

  toggleAudio(audioPlayer: HTMLAudioElement) {
    if (audioPlayer.paused) {
      audioPlayer.play();
      this.audioControlIcon = faPauseCircle;
    } else {
      audioPlayer.pause();
      this.audioControlIcon = faPlayCircle;
    }

    audioPlayer.onended = () => {
      this.audioControlIcon = faPlayCircle;
    }
  }

  private _setFooterText(currWidth: number) {
    if (currWidth <= 600) {
      this.copyRightText = `${this._year} NVZ`;
    } else {
      this.copyRightText = `${this._year} Nick Zambelli`;
    }
  }
}