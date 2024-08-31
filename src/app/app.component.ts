import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FireAuthService } from './services/fireauth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-18-firebase-boilerplate';
  constructor(
    private auth: FireAuthService
  ) {}
}
