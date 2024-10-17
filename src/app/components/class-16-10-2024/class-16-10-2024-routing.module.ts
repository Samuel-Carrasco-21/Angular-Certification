import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent
  },
  {
    path: 'page-two',
    component: PageTwoComponent
  },
  {
    path: 'loader',
    loadComponent: () => import('./loader/loader.component').then(c => c.LoaderComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class Class16102024RoutingModule { }
