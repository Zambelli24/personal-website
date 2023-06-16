import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'color-theme-toggle',
  templateUrl: './color-theme-toggle.component.html',
  styleUrls: ['./color-theme-toggle.component.scss'],
})
export class ColorThemeToggleComponent {
  isDarkMode: boolean = false;

  changeTheme = () => {
    document.body.classList.toggle('dark');
  }
}