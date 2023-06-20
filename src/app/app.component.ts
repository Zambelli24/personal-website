import { Component } from '@angular/core';
import { ColorThemeService } from './services/color-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

  constructor(
    protected colorThemeService: ColorThemeService,
  ) {
    this.colorThemeService.getDarkModeState();
  }
}
