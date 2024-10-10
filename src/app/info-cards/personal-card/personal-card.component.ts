import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrl: './personal-card.component.scss'
})
export class PersonalCardComponent {
  @Input() user: User | null = null;
}
