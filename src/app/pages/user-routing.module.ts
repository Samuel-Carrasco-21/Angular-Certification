import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoUserPageComponent } from './info-user-page/info-user-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'info-user/:user_id',
        component: InfoUserPageComponent,
      },
      {
        path: 'users',
        component: UsersPageComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class UserRoutingModule { }
