import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-class-03-10-2024',
  standalone: true,
  imports: [UserCardComponent, CounterComponent],
  templateUrl: './class-03-10-2024.component.html',
  styleUrl: './class-03-10-2024.component.scss'
})
export class Class03102024Component {
  public numVal: number = 0;

  public incrementNumVal() {
    this.numVal++;
  }
}
