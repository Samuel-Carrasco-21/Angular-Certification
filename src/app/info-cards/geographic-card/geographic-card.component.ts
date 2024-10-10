import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-geographic-card',
  templateUrl: './geographic-card.component.html',
  styleUrl: './geographic-card.component.scss'
})
export class GeographicCardComponent implements OnChanges {
  @Input() user: User | null = null;
  public finalAddress: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      const { zone, street, number } = this.user.address;
      this.finalAddress = zone + ', ' + street + ', ' + number;
    }
  }
}
