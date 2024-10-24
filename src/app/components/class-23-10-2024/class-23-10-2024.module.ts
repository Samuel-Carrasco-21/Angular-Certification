import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormFormgroupComponent } from './reactive-form-formgroup/reactive-form-formgroup.component';

const components = [ReactiveFormFormgroupComponent];

@NgModule({
  declarations: components,
  imports: [
    FormsModule, CommonModule, ReactiveFormsModule,
  ],
  exports: components
})
export class Class23102024Module { }
