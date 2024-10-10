import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-messages-card',
  templateUrl: './messages-card.component.html',
  styleUrl: './messages-card.component.scss'
})
export class MessagesCardComponent implements OnChanges {
  @Input() user: User | null = null;
  filteredMessages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user?.messages) {
      this.filteredMessages = [...this.user?.messages];
    }
  }

  filterMessages(searchText: string, message: string): boolean {
    return message.toLowerCase().includes(searchText.toLowerCase());
  }

  onFilteredMessages(filtered: string[]) {
    this.filteredMessages = filtered;
  }
}
