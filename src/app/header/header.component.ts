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
  isAboutPage: boolean = false;

  constructor(
    protected router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event.type === EventType.NavigationEnd) {
        this.isAboutPage = event.url === '/about';
        this.boxShadow = this.isAboutPage ? 'no-shadow' : '';
      }
    });
  }
}