import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { AverageComponent } from './average/average.component';
import { ClassmateComponent } from './classmate/classmate.component';
import { NormalComponent } from './normal/normal.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class Class17102024RoutingModule { }
