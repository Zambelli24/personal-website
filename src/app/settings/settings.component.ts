import { Component } from "@angular/core";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColorThemeService } from "../services/color-theme.service";

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [
    MatSlideToggleModule,
  ],
})
export class SettingsComponent {
  isDarkMode: boolean;

  constructor(
    protected colorThemeService: ColorThemeService,
  ) {
    this.isDarkMode = this.colorThemeService.getDarkModeState();
  }

  changeTheme = () => {
    this.colorThemeService.changeTheme();
  }
}