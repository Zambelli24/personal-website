import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _fontStyle: string;
  private _colorPalette: string;
  private _useSharpCorners = false;

  constructor() {
    this._colorPalette = localStorage.getItem('colorPalette') || '';
    if (this._colorPalette) {
      document.body.classList.add(this._colorPalette);
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

  public getColorPalette = () => this._colorPalette;  
  public getSharpCornersState = () => this._useSharpCorners;
  public getFontStyle = () => this._fontStyle;

  public changeTheme = (colorPalette: string) => {
    this._colorPalette && document.body.classList.remove(this._colorPalette);
    this._colorPalette = colorPalette;
    this._colorPalette && document.body.classList.add(this._colorPalette);
    localStorage.setItem('colorPalette', this._colorPalette);
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