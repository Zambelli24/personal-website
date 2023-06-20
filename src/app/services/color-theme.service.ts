import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ColorThemeService {
  isDarkMode: boolean;

  constructor() {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    }
  }

  public getDarkModeState = () => this.isDarkMode;

  public changeTheme = () => {
    document.body.classList.toggle('dark');
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', (this.isDarkMode).toString());
  }
}