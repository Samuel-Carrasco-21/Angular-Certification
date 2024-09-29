import { Component, Input } from '@angular/core';
import { IPerson } from '../../../models/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss'
})
export class PersonCardComponent {
  @Input() person!: IPerson;

  public showGender():string{
    return this.person.gender.toLowerCase();
  }
}
