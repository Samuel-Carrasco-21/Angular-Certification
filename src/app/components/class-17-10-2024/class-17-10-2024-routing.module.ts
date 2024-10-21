import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { AverageComponent } from './average/average.component';
import { ClassmateComponent } from './classmate/classmate.component';
import { NormalComponent } from './normal/normal.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  {
    path: '',
    component: ScoreComponent,
    children: [
      {
        path: 'average',
        component: AverageComponent,
      }
    ],
  },
  {
    path: 'classmate',
    component: ClassmateComponent,
  },
  {
    path: 'normal',
    component: NormalComponent,
  },
  {
    path: 'users/:id',
    component: UserCardComponent,
    title: 'my user card test tilte',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class Class17102024RoutingModule { }
