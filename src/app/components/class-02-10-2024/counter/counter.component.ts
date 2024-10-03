import { afterNextRender, afterRender, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public sum: number = 0;

  constructor() {
    afterRender(() => {
      console.log('afterRender: ', this.sum);
    });

    afterNextRender(() => {
      console.log('afterNextRender: ', this.sum);
    });
  }

  public incrementSum() {
    this.sum++;
  }
}
