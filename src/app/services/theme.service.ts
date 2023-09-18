import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _fontStyle: string;
  private _isDarkMode = false;
  private _useSharpCorners = false;

  constructor() {
    this._isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (this._isDarkMode) {
      document.body.classList.add('dark');
    }

    this._useSharpCorners = localStorage.getItem('corners') === 'true';
    if (this._useSharpCorners) {
      document.body.classList.add('corners');
    }

    this._fontStyle = localStorage.getItem('fontStyle') || '';
    if (this._fontStyle) {
      document.body.classList.add(this._fontStyle);
    }
  }

  public getDarkModeState = () => this._isDarkMode;  
  public getSharpCornersState = () => this._useSharpCorners;
  public getFontStyle = () => this._fontStyle;

  public changeTheme = () => {
    document.body.classList.toggle('dark');
    this._isDarkMode = !this._isDarkMode;
    localStorage.setItem('darkMode', (this._isDarkMode).toString());
  }

  public changeCorners = () => {
    document.body.classList.toggle('corners');
    this._useSharpCorners = !this._useSharpCorners;
    localStorage.setItem('corners', (this._useSharpCorners).toString());
  }

  public changeFontStyle = (fontStyle: string) => {
    this._fontStyle && document.body.classList.remove(this._fontStyle);
    this._fontStyle = fontStyle;
    this._fontStyle && document.body.classList.add(this._fontStyle);
    localStorage.setItem('fontStyle', this._fontStyle);
  }
}