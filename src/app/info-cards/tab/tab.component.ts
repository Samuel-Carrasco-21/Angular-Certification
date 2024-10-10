import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  @Output() tabChange = new EventEmitter<string>();

  changeTab(tab: string) {
    this.tabChange.emit(tab);
  }

}
