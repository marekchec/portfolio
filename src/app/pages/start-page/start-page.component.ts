import { Component, inject, signal, WritableSignal } from '@angular/core';
import {
  DiscordLogoSvgComponent,
  GithubLogoSvgComponent,
  InstagramLogoSvgComponent,
  LinkedInLogoSvgComponent,
  MarekChecLogoSvgComponent,
  TiktokLogoSvgComponent,
  XingLogoSvgComponent,
} from '../../shared/svgs';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
  imports: [
    DiscordLogoSvgComponent,
    GithubLogoSvgComponent,
    InstagramLogoSvgComponent,
    TiktokLogoSvgComponent,
    XingLogoSvgComponent,
    LinkedInLogoSvgComponent,
    DiscordLogoSvgComponent,
  ],
})
export class StartPageComponent {
  public isLoading: WritableSignal<boolean> = signal<boolean>(false);

  // -------------------------------------------------------
  // Public methods
  // -------------------------------------------------------
}
