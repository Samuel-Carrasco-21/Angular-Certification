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
  public appBackground: string = 'red';
  private aRender: string = 'afterRender::';

  constructor() {
    const spec = {
      write: () => {
        console.log('afterRender::write')
        document.body.style.backgroundColor = this.appBackground

        const currentColor = this.appBackground
        if (currentColor === 'red') {
          this.appBackground = 'blue'
        } else {
          this.appBackground = 'red'
        }

        return 'afterRender::write: ' + this.appBackground
      },
      read: (props: string) => {
        console.log('afterRender::read: ', props)
        const newBackground = this.appBackground
        console.log('afterRender::read: ', newBackground)
      },
    };

    afterRender(spec);

    afterNextRender(() => {
      console.log('afterNextRender: ', this.sum);
    });
  }

  public incrementSum() {
    this.sum++;
  }
}
