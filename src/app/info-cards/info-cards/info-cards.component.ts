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

  ngOnInit(): void {
    this.selectedUser = this.selectedUser;
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
  }
}
