import { Component, Input } from '@angular/core';
import { IProject, IProjectImage } from 'src/app/projects/project.interface';

@Component({
  selector: 'app-device-frame',
  templateUrl: './device-frame.component.html',
  styleUrls: ['./device-frame.component.scss'],
  standalone: true,
})
export class DeviceFrameComponent {
  @Input() image: IProjectImage;
  @Input() index: number;
  @Input() project: IProject;

  getFrameSource(project: IProject, image: IProjectImage): string {
    if (image.frameType === 'laptop') {
      this._addFrameClass(project, image);
      return 'assets/frames/macbook.png';
    } else if (image.frameType === 'tablet') {
      this._addFrameClass(project, image);
      return 'assets/frames/ipad.png';
    } else {
      this._addFrameClass(project, image);
      return 'assets/frames/iphone.png';
    }
  }

  private _addFrameClass(project: IProject, image: IProjectImage): void {
    document.getElementById(this._getElementKey(project.name, this.index, 'frame'))?.classList.add(image.frameType);
    document.getElementById(this._getElementKey(project.name, this.index, 'content'))?.classList.add(image.frameType);
  }

  private _getElementKey(projectName: string, index: number, type: 'frame' | 'content'): string {
    if (type === 'frame') {
      return `${projectName}-image-frame-${index}`;
    } else {
      return `${projectName}-image-content-${index}`;
    }
  }
}
