import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ColorThemeService } from '../services/color-theme.service';
import { FontService } from '../services/font.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class SettingsComponent {
  fontSelector = new FormControl();
  fontStyle: string;
  isDarkMode: boolean;

  constructor(
    protected colorThemeService: ColorThemeService,
    protected fontService: FontService,
  ) {
    this.fontSelector.setValue(this.fontService.getFontFamily());
    this.isDarkMode = this.colorThemeService.getDarkModeState();
    this.fontSelector.valueChanges.subscribe((value) => this.changeFont(value))
  }

  changeFont = (font: string) => {
    this.fontService.changeFontFamily(font);
  }
  
  changeTheme = () => {
    this.colorThemeService.changeTheme();
  }
}