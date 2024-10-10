import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserType } from '../../enums/user-type';
import { UserItemAction } from '../../models/user-item-action';
import { UserItemType } from '../../enums/user-item-type';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent implements OnInit {
  @Input() index!: number;
  @Input() name!: string;
  @Input() lastName!: string;
  @Input() type!: UserType;
  public backGroundItem: string = 'white';

  @Output() private sendData = new EventEmitter<UserItemAction>();

  ngOnInit(): void {
    this.backGroundItem = this.type === UserType.PROFESSOR ? 'orange' : 'blue';
  }

  public show() {
    const action: UserItemAction = {
      content: this.index,
      type: UserItemType.SHOW,
    };
    this.sendData.emit(action);
  }

  public delete() {
    const action: UserItemAction = {
      content: this.index,
      type: UserItemType.DELETE,
    };
    this.sendData.emit(action);
  }
}
