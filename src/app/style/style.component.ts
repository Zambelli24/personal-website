import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ThemeService } from '../services/theme.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class StyleComponent {
  fontSelector = new FormControl();
  fontStyle: string;
  isDarkMode: boolean;
  useSharpCorners: boolean;

  constructor(
    protected themeService: ThemeService
  ) {
    this.fontSelector.setValue(this.themeService.getFontStyle());
    this.isDarkMode = this.themeService.getDarkModeState();
    this.useSharpCorners = this.themeService.getSharpCornersState();
    this.fontSelector.valueChanges.subscribe((value) => this.changeFont(value));
  }

  changeFont = (font: string) => {
    this.themeService.changeFontStyle(font);
  }
  
  changeTheme = () => {
    this.themeService.changeTheme();
  }

  changeCorners = () => {
    this.themeService.changeCorners();
  }
}