import { Component } from "@angular/core";
import { ColorThemeToggleComponent } from "../color-theme-toggle/color-theme-toggle.component";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    ColorThemeToggleComponent,
  ]
})
export class HeaderComponent {}