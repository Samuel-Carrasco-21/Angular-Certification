import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsProfessorsComponent } from './list-students-professors/list-students-professors.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ComponentsModule } from '../components/components.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListStudentsProfessorsComponent,
    UserItemComponent,
    UserFormComponent,
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ListStudentsProfessorsComponent,
    UserItemComponent,
    UserFormComponent,
  ],
})
export class ListStudentsProfessorsModule { }
