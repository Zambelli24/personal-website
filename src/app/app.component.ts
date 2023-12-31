import { Component, OnDestroy } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { EventType, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'personal-website';

  routerSub: Subscription;

  constructor(
    protected router: Router,
    protected themeService: ThemeService
  ) {
    this.themeService.getColorPalette();
    this.themeService.getSharpCornersState();
    this.themeService.getFontStyle();

    this._enforceScrollTop();
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  private _enforceScrollTop = () => {
    this.routerSub = this.router.events.subscribe((event) => {
        if (event.type === EventType.NavigationEnd) {
          window.scrollTo(0, 0);
        }
    });

    window.onunload = () => {
      window.scrollTo(0, 0);
      return;
    }
  }
}
