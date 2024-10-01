import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgComponentForTestComponent } from '../ng-component-for-test/ng-component-for-test.component';
import { IPerson } from '../../../models/person';
import { Gender } from '../../../enums/gender';
import { MyUserCardComponent } from "../my-user-card/my-user-card.component";

@Component({
  selector: 'app-class-30-09-2024',
  standalone: true,
  imports: [NgComponentForTestComponent, MyUserCardComponent],
  templateUrl: './class-30-09-2024.component.html',
  styleUrl: './class-30-09-2024.component.scss'
})
export class Class30092024Component {
  public users:IPerson[] = [
    {
      gender: Gender.MALE,
      name: 'Jose',
      age: 21,
    },
    {
      gender: Gender.MALE,
      name: 'Ander Cayllan',
      age: 20,
    },
    {
      gender: Gender.FEMALE,
      name: 'Ambar Rojar',
      age: 19,
    },
  ];

  public selectedUser:IPerson = this.users[0];

  public appearComponent: boolean = true;

  public changeVisibility(){
    this.appearComponent = !this.appearComponent;
  }
}
