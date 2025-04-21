import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeartFillSvgComponent } from './shared/svgs';
import { MainNavigationComponent } from './components';

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeartFillSvgComponent, MainNavigationComponent, RouterOutlet, HeartFillSvgComponent],
})
export class AppComponent {
  title = 'marekchec.com';
}
