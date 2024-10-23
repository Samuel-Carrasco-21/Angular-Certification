import { Class22102024Module } from './components/class-22-10-2024/class-22-10-2024.module';
import { Class22102024RoutingModule } from './components/class-22-10-2024/class-22-10-2024-routing.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'class-16-10-2024',
        loadChildren: () => import('./components/class-16-10-2024/class-16-10-2024.module').then(m =>
          m.Class16102024Module)
      },
      {
        path: 'class-17-10-2024',
        loadChildren: () => import('./components/class-17-10-2024/class-17-10-2024.module').then(m =>
          m.Class17102024Module)
      },
      {
        path: 'class-22-10-2024',
        loadChildren: () => import('./components/class-22-10-2024/class-22-10-2024.module').then(m =>
          m.Class22102024Module)
      }
    ],
  },
];
