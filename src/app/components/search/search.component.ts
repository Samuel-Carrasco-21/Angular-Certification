import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() items: any[] = [];
  @Input() filterFunction: (searchText: string, item: any) => boolean = () => true;
  @Output() filteredItems = new EventEmitter<any[]>();

  public searchText: string = '';

  public onSearchChange() {
    const filtered = this.items.filter(item => this.filterFunction(this.searchText, item));
    console.log(filtered);
    this.filteredItems.emit(filtered);
  }
}
