import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  fontStyle: string;

  constructor() {
    this.fontStyle = localStorage.getItem('fontStyle') || '';
    if (this.fontStyle) {
      document.body.classList.add(this.fontStyle);
    }
  }

  public getFontFamily = () => this.fontStyle;

  public changeFontFamily = (fontStyle: string) => {
    this.fontStyle && document.body.classList.remove(this.fontStyle);
    this.fontStyle = fontStyle;
    this.fontStyle && document.body.classList.add(this.fontStyle);
    localStorage.setItem('fontStyle', this.fontStyle);
  }
}