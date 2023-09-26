import { Component, HostBinding } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { Router, RouterModule, EventType } from '@angular/router';

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
export class HeaderComponent {
  @HostBinding('class') boxShadow: string = 'no-shadow'; 
  hideBoxShadow: boolean = false;

  constructor(
    protected router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event.type === EventType.NavigationEnd) {
        const noShadowPages = ['/about', '/'];
        this.hideBoxShadow =  noShadowPages.includes(event.urlAfterRedirects);
        this.boxShadow = this.hideBoxShadow ? 'no-shadow' : '';
      }
    });
  }
}