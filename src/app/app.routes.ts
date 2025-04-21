import { Routes } from '@angular/router';
import { AppRoute } from './shared/enums';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: AppRoute.Start,
      },
      {
        path: AppRoute.Start,
        loadComponent: () => import('./pages/start-page/start-page.component').then((c) => c.StartPageComponent),
      },
];
