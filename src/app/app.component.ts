import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListStudentsProfessorsModule } from './list-students-professors/list-students-professors.module';
import { InfoCardsModule } from './info-cards/info-cards.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListStudentsProfessorsModule, InfoCardsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'certification.upb.web';
}
