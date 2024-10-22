import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { InfoUserPageComponent } from './info-user-page/info-user-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    InfoUserPageComponent,
    UsersPageComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule,
  ],
  exports: [
    InfoUserPageComponent,
    UsersPageComponent,
  ],
})
export class UserModule { }
