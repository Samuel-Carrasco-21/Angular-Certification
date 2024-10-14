import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-messages-card',
  templateUrl: './messages-card.component.html',
  styleUrl: './messages-card.component.scss'
})
export class MessagesCardComponent implements OnChanges, AfterViewInit {
  @Input() user: User | null = null;
  @ViewChild('contentContainerMessagesCard', { read: ElementRef }) contentContainer!: ElementRef;
  public hasProjectedContent: boolean = false;
  public filteredMessages: string[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user?.messages) {
      this.filteredMessages = [...this.user?.messages];
    }
  }

  ngAfterViewInit(): void {
    this.hasProjectedContent = this.contentContainer.nativeElement.hasChildNodes();
    this.cdr.detectChanges();
  }

  filterMessages(searchText: string, message: string): boolean {
    return message.toLowerCase().includes(searchText.toLowerCase());
  }

  onFilteredMessages(filtered: string[]) {
    this.filteredMessages = filtered;
  }
}
