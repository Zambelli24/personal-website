import { Component, HostBinding, OnDestroy } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { Router, RouterModule, EventType } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    NavigationMenuComponent,
    RouterModule,
  ]
})
export class HeaderComponent implements OnDestroy {
  @HostBinding('class') boxShadow = 'no-shadow';

  private _hideBoxShadow = false;
  private _routerSub: Subscription;

  constructor(
    protected router: Router,
  ) {
    this._routerSub = this.router.events.subscribe((event) => {
      if (event.type === EventType.NavigationEnd) {
        const noShadowPages = ['/about', '/'];
        this._hideBoxShadow =  noShadowPages.includes(event.urlAfterRedirects);
        this.boxShadow = this._hideBoxShadow ? 'no-shadow' : '';
      }
    });
  }

  ngOnDestroy() {
    this._routerSub.unsubscribe();
  }
}