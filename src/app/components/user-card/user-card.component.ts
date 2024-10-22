import { Component, Input } from '@angular/core';
import { User } from '../../enums-interfaces/user.interface';
import { SubscriptionType, UserStatus } from '../../enums-interfaces/user-status.enum';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User;

  get isPremium() {
    return this.user.subscriptionType === SubscriptionType.PREMIUM;
  }

  get statusClass() {
    return this.user.status === UserStatus.ACTIVE ? 'bg-green-500' : 'bg-red-500';
  }
}
