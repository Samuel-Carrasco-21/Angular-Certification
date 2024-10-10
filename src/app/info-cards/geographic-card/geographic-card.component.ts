import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-geographic-card',
  templateUrl: './geographic-card.component.html',
  styleUrl: './geographic-card.component.scss'
})
export class GeographicCardComponent {
  @Input() user: User | null = null;
}
