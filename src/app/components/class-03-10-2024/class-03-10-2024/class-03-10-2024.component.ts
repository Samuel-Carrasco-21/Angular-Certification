import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { CounterComponent } from '../counter/counter.component';
import { IPerson } from '../../../models/person';
import { Gender } from '../../../enums/gender';

@Component({
  selector: 'app-class-03-10-2024',
  standalone: true,
  imports: [UserCardComponent, CounterComponent],
  templateUrl: './class-03-10-2024.component.html',
  styleUrl: './class-03-10-2024.component.scss'
})
export class Class03102024Component {
  public personsList: IPerson[] = [
    {
      gender: Gender.FEMALE,
      name: 'Vivian Marino',
      age: 21,
    },
    {
      gender: Gender.MALE,
      name: 'Jose Carrasco',
      age: 17,
    },
    {
      gender: Gender.OTHER,
      name: 'Ambar Rojas',
      age: 18,
      hasDiscount: false,
    },
    {
      gender: Gender.MALE,
      name: 'Ander Cayllan',
      age: 17,
      hasDiscount: true,
    },
  ];

  public numVal: number = 0;

  public incrementNumVal() {
    this.numVal++;
  }
}
