import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Class22102024RoutingModule } from './class-22-10-2024-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormControlComponent } from './reactive-form-control/reactive-form-control.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    TemplateDrivenFormComponent,
    ReactiveFormControlComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Class22102024RoutingModule,
  ],
})
export class Class22102024Module { }
