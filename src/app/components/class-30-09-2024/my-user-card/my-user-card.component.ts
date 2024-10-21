import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPerson } from '../../../models/person';

@Component({
  selector: 'app-my-user-card',
  standalone: true,
  imports: [],
  templateUrl: './my-user-card.component.html',
  styleUrl: './my-user-card.component.scss'
})
export class MyUserCardComponent implements OnChanges {
  @Input() person!: IPerson;
  public valueChanged: string = 'empty';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes Gotten: ', changes);
    const { name, age } = changes['person'].currentValue;
    this.valueChanged = name + ' ' + age;
  }

}
