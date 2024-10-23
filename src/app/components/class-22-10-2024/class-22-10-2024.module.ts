import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Class22102024RoutingModule } from './class-22-10-2024-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Class22102024RoutingModule,
  ],
})
export class Class22102024Module { }
