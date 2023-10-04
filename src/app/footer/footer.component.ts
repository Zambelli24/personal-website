import { Component, HostBinding } from '@angular/core';
import { ConnectComponent } from '../connect/connect.component';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    ConnectComponent,
  ]
})
export class FooterComponent {
  @HostBinding('class') transparent: string = ''; 

  private _lastScrollTop = 0;

  constructor() {
    window.addEventListener('scroll', (event) => {
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
  }
}