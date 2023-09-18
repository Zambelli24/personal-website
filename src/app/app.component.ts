import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

  constructor(
    protected themeService: ThemeService
  ) {
    this.themeService.getDarkModeState();
    this.themeService.getSharpCornersState();
    this.themeService.getFontStyle();
  }
}
