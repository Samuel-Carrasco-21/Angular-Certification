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
      earlyRead: () => {
        const currentAppColor = this.appBackground;
        const earlyRead: string = 'earlyRead: ' + currentAppColor;
        console.log(this.aRender + earlyRead);
        return earlyRead;
      },
      mixedReadWrite: (props: string) => {
        if (props.indexOf('red') > -1) {
          this.appBackground = 'green';
        } else {
          this.appBackground = 'red';
        }
        const mixedReadWrite: string = 'mixedReadWrite: ' + this.appBackground;
        console.log(this.aRender + mixedReadWrite);
        return mixedReadWrite;
      },
      write: (props: string) => {
        document.body.style.backgroundColor = this.appBackground;
        const write: string = 'write: ' + this.appBackground;
        console.log(this.aRender + write);
        return write;
      },
      read: (props: string) => {
        const newBackground: string = this.appBackground;
        console.log(this.aRender + 'read: ' + newBackground);
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
