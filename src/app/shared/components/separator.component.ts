import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    standalone: true,
    selector: 'app-separator',
    template: `<div *ngIf="showSeparators" class="separator" [ngClass]="{'inverted': inverted }"></div>`,
    styleUrls: ['./separator.component.scss'],
    imports: [
      CommonModule
    ]
})
export class SeparatorComponent {
    @Input() inverted = false;

    showSeparators = true;

    constructor(private _themeService: ThemeService) {
      this.showSeparators = this._themeService.getColorFadeState();
    }
}