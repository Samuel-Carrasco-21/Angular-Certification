import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'class-16-10-2024',
        loadChildren: () => import('./components/class-16-10-2024/class-16-10-2024.module').then(m =>
          m.Class16102024Module)
      }
    ],
  },
];
