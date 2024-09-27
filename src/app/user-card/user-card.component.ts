import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() name:string = '';
  @Input() email:string = '';

  @Output() sendData: EventEmitter<string> = new EventEmitter();

  public onSendData(): void{
    console.log('Emmiting data from child user-card');
    this.sendData.emit(`hello ${this.name} from the child component!`);
  }
}
