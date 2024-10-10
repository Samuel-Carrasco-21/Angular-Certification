import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserType } from '../../enums/user-type';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  @Output() userAdded = new EventEmitter<User>();

  public name: string = '';
  public lastName: string = '';
  public userType: UserType = UserType.STUDENT;
  public UserType = UserType;

  public addUser() {
    const [name, lastName] = this.name.split(' ');
    const newUser: User = {
      id: this.generateId(),
      name,
      lastName,
      type: this.userType,
      firstTestScore: 0,
      secondTestScore: 0,
      finalTestScore: 0,
      address: {
        number: '0',
        street: 'Unknown',
        zone: 'Unknown'
      },
      country: 'Unknown',
      province: 'Unknown',
      messages: [],
    };

    this.userAdded.emit(newUser);
    this.clearForm();
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  private clearForm() {
    this.name = '';
    this.lastName = '';
  }
}
