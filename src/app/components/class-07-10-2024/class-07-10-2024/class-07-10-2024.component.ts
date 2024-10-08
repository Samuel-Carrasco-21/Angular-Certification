import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { IUser } from '../../../models/user';

@Component({
  selector: 'app-class-07-10-2024',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './class-07-10-2024.component.html',
  styleUrl: './class-07-10-2024.component.scss'
})
export class Class07102024Component {
  public usersList: IUser[] = [
    {
      name: 'Jose',
      password: '123',
      email: 'jose@gmail.com'
    },
    {
      name: 'Samuel',
      password: 'red',
      email: 'samuel@gmail.com'
    },
    {
      name: 'Ander',
      password: 'yellow',
      email: 'ander@gmail.com'
    },
  ];
}
