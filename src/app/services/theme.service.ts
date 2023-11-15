import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _colorPalette: string;
  private _fontSize: string;
  private _fontStyle: string;
  private _showColorFade = false;
  private _useSharpCorners = false;

  constructor() {
    this._colorPalette = localStorage.getItem('colorPalette') || '';
    if (this._colorPalette) {
      document.body.classList.add(this._colorPalette);
    }

    this._showColorFade = localStorage.getItem('colorFade') === 'true';

    this._useSharpCorners = localStorage.getItem('corners') === 'true';
    if (this._useSharpCorners) {
      document.body.classList.add('corners');
    }

    this._fontSize = localStorage.getItem('fontSize') || '';
    if (this._fontSize) {
      document.body.classList.add(this._fontSize);
    }
  
    this._fontStyle = localStorage.getItem('fontStyle') || '';
    if (this._fontStyle) {
      document.body.classList.add(this._fontStyle);
    }
  }

  public getColorPalette = () => this._colorPalette;  
  public getFontSize = () => this._fontSize;
  public getFontStyle = () => this._fontStyle;
  public getSharpCornersState = () => this._useSharpCorners;
  public getColorFadeState = () => this._showColorFade;

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

  public changeFontSize = (fontSize: string) => {
    this._fontSize && document.body.classList.remove(this._fontSize);
    this._fontSize = fontSize;
    this._fontSize && document.body.classList.add(this._fontSize);
    localStorage.setItem('fontSize', this._fontSize);
  }

  public changeFontStyle = (fontStyle: string) => {
    this._fontStyle && document.body.classList.remove(this._fontStyle);
    this._fontStyle = fontStyle;
    this._fontStyle && document.body.classList.add(this._fontStyle);
    localStorage.setItem('fontStyle', this._fontStyle);
  }

  public changeColorFade = () => {
    this._showColorFade = !this._showColorFade;
    localStorage.setItem('colorFade', (this._showColorFade).toString());
  }
}