import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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

  @ViewChild('navOptions') navOptions: ElementRef;
  @ViewChild('portfolio') portfolio: ElementRef;
  @ViewChild('connect') connect: ElementRef;
  @ViewChild('settings') settings: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // hide the menu button and remove the showing class from the menu items
    if (!this.showNavOptions && event.target.innerWidth > 750) {
      this.showNavOptions = true;
    }
  }

  public toggleMenuOptions = () => {
    this.showNavOptions = !this.showNavOptions;
  }
}