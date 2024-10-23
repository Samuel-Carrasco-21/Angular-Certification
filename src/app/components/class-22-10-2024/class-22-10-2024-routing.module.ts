import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class Class22102024RoutingModule { }
