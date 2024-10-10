import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-messages-card',
  templateUrl: './messages-card.component.html',
  styleUrl: './messages-card.component.scss'
})
export class MessagesCardComponent {
  @Input() user: User | null = null;
  filteredMessages: string[] = [];

  filterMessages(searchText: string, message: string): boolean {
    return message.toLowerCase().includes(searchText.toLowerCase());
  }

  onFilteredMessages(filtered: string[]) {
    this.filteredMessages = filtered;
  }
}
