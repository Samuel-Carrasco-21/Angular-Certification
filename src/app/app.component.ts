import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homework30092024Component } from './components/work-for-30-09-2024/homework-30-09-2024/homework-30-09-2024.component';
import { ClassesAndWorksUntil27092024Component } from './components/classes-&-work-until-27-09-2024/classes-and-works-until-27-09-2024/classes-and-works-until-27-09-2024.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClassesAndWorksUntil27092024Component, Homework30092024Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}
