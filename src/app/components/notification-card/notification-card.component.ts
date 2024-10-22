import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.scss'
})
export class NotificationCardComponent {
  @Input() message: string = '';
  @Input() color: string = '';
}
