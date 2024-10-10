import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { getUsers } from '../../services/users';
import { UserItemAction } from '../../models/user-item-action';
import { UserItemType } from '../../enums/user-item-type';

@Component({
  selector: 'app-list-students-professors',
  templateUrl: './list-students-professors.component.html',
  styleUrl: './list-students-professors.component.scss'
})
export class ListStudentsProfessorsComponent {
  @Output() userSelected = new EventEmitter<User>();
  public users: User[] = [];
  public filteredUsers: User[] = [];

  ngOnInit(): void {
    this.users = getUsers();
    this.filteredUsers = this.users;
  }

  public handleAction(action: UserItemAction): void {
    if (action.type === UserItemType.SHOW) {
      const user = this.users[action.content];
      this.userSelected.emit(user);
      alert(`Showing details for ${user.name} ${user.lastName}`);
    } else if (action.type === UserItemType.DELETE) {
      this.filteredUsers.splice(action.content, 1);
    }
  }

  public filterUsers(searchText: string, item: User): boolean {
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  }

  public addUser(newUser: User): void {
    this.users.push(newUser);
  }
}
