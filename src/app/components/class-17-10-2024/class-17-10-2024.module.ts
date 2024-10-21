import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score/score.component';
import { AverageComponent } from './average/average.component';
import { Class17102024RoutingModule } from './class-17-10-2024-routing.module';
import { RouterModule } from '@angular/router';
import { NormalComponent } from './normal/normal.component';
import { ClassmateComponent } from './classmate/classmate.component';



@NgModule({
  declarations: [
    ScoreComponent,
    AverageComponent,
    ClassmateComponent,
    NormalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    Class17102024RoutingModule,
  ],
})
export class Class17102024Module { }
