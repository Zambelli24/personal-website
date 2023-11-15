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
  colorSelector = new FormControl();
  fontSelector = new FormControl();
  fontSizeSelector = new FormControl();

  showColorFade: boolean;
  useSharpCorners: boolean;

  constructor(
    protected themeService: ThemeService
  ) {
    this.fontSelector.setValue(this.themeService.getFontStyle());
    this.fontSelector.valueChanges.subscribe((value) => this.changeFont(value));
    
    this.fontSizeSelector.setValue(this.themeService.getFontSize());
    this.fontSizeSelector.valueChanges.subscribe((value) => this.changeFontSize(value));

    this.colorSelector.setValue(this.themeService.getColorPalette());
    this.colorSelector.valueChanges.subscribe((value) => this.changeTheme(value));
    
    this.showColorFade = this.themeService.getColorFadeState();
    this.useSharpCorners = this.themeService.getSharpCornersState();
  }

  changeFont = (font: string) => {
    this.themeService.changeFontStyle(font);
  }

  changeFontSize = (fontSize: string) => {
    this.themeService.changeFontSize(fontSize);
  }
  
  changeTheme = (colorPalette: string) => {
    this.themeService.changeTheme(colorPalette);
  }

  changeCorners = () => {
    this.themeService.changeCorners();
  }

  changeColorFade = () => {
    this.themeService.changeColorFade();
  }
}