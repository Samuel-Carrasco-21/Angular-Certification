import { Routes } from '@angular/router';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';

export const class16102024routes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent,
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
  },
  {
    path: 'loader-nav',
    loadComponent: () => import('../loader/loader.component').then(c => c.LoaderComponent)
  },
];
