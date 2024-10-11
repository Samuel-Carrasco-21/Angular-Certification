import { Component } from '@angular/core';
import { Class10102024ColorsDirective } from './class-10-10-2024-colors.directive';
import { CreateHtmlDirective } from './create-html.directive';

@Component({
  selector: 'app-class-10-10-2024',
  standalone: true,
  imports: [Class10102024ColorsDirective, CreateHtmlDirective],
  templateUrl: './class-10-10-2024.component.html',
  styleUrl: './class-10-10-2024.component.scss'
})
export class Class10102024Component {
  userCardCreated: boolean = false;

  public getColor(value: any): void {
    console.log("value: ", value);
  }
}
