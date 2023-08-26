import { Component } from '@angular/core';
import { ColorThemeService } from './services/color-theme.service';
import { FontService } from './services/font.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

  constructor(
    protected colorThemeService: ColorThemeService,
    protected fontService: FontService,
  ) {
    this.colorThemeService.getDarkModeState();
    this.fontService.getFontFamily();
  }
}
