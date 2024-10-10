import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListStudentsProfessorsModule } from './list-students-professors/list-students-professors.module';
import { InfoCardsModule } from './info-cards/info-cards.module';
import { User } from './models/user';
import { UserType } from './enums/user-type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListStudentsProfessorsModule, InfoCardsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public user: User = {
    id: '',
    name: '',
    lastName: '',
    type: UserType.STUDENT,
    firstTestScore: 0,
    secondTestScore: 0,
    finalTestScore: 0,
    address: {
      number: '',
      street: '',
      zone: ''
    },
    country: '',
    province: '',
    messages: []
  };
}
