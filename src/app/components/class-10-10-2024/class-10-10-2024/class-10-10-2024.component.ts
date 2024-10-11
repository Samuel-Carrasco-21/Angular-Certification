import { Component } from '@angular/core';
import { Class10102024ColorsDirective } from './class-10-10-2024-colors.directive';

@Component({
  selector: 'app-class-10-10-2024',
  standalone: true,
  imports: [Class10102024ColorsDirective],
  templateUrl: './class-10-10-2024.component.html',
  styleUrl: './class-10-10-2024.component.scss'
})
export class Class10102024Component {
  public getColor(value: string): void {
    console.log("value: ", value);
  }
}
