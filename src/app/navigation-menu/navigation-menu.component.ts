import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule,
  ]
})
export class NavigationMenuComponent {
  public showNavOptions: boolean = true;

  private _isLargeScreen: boolean = true;

  constructor(protected router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // hide the menu button and remove the showing class from the menu items
    if (!this.showNavOptions && event.target.innerWidth > 750) {
      this._isLargeScreen = true;
      this.showNavOptions = true;
    }

    if (this.showNavOptions && event.target.innerWidth < 750) {
      this._isLargeScreen = false;
      this.showNavOptions = false;
    }
  }

  public toggleMenuOptions = () => {
    this.showNavOptions = !this.showNavOptions;
  }

  public selectMenuOption = (url: string) => {
    if (!this._isLargeScreen) {
      this.toggleMenuOptions();
    }

    this.router.navigate([url]);
  }
}