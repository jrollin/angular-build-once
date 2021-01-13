import { Component } from '@angular/core';
import { EnvService } from './env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Continuous Delivery with environnements';
  // env values
  apiUrl: string
  envName: string

  constructor(private env: EnvService) {
    this.apiUrl = env.apiUrl
    this.envName = env.envName
  }
}
