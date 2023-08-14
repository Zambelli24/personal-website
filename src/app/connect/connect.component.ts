import { Component } from "@angular/core";
import { LinkedInComponent } from "../shared/components/linkedin.component";

@Component({
  standalone: true,
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  imports: [
    LinkedInComponent,
  ]
})
export class ConnectComponent {}