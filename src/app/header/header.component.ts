import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';

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
export class HeaderComponent {}