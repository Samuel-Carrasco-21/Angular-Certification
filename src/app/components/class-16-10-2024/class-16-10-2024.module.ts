import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { Class16102024RoutingModule } from './class-16-10-2024-routing.module';



@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
    Class16102024RoutingModule,
  ]
})
export class Class16102024Module { }
