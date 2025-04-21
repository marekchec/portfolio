import { Component } from '@angular/core';
import { ShopSvgComponent } from '../../shared/svgs';

@Component({
  selector: 'mc-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.scss',
  imports: [ShopSvgComponent],
})
export class MainNavigationComponent {}
