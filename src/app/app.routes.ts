import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'class-17-10-2024',
        loadChildren: () => import('./pages/user-routing.module').then(m =>
          m.UserRoutingModule)
      }
    ],
  },
];
