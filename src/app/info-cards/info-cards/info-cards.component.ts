import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { UserType } from '../../enums/user-type';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrl: './info-cards.component.scss'
})
export class InfoCardsComponent {
  @Input() selectedUser: User | null = null;
  activeTab: string = 'personal';
  defaultUser: User = {
    id: '0',
    name: 'Default Name',
    lastName: 'Default LastName',
    type: UserType.STUDENT,
    firstTestScore: 0,
    secondTestScore: 0,
    finalTestScore: 0,
    address: {
      number: '0',
      street: 'Default St',
      zone: 'Default Zone'
    },
    country: 'Unknown',
    province: 'Unknown',
    messages: ['Welcome to the system!', 'Please check your emails.'],
  };

  ngOnInit(): void {
    this.selectedUser = this.selectedUser || this.defaultUser;
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
  }
}
