import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-class-01-10-2024',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './class-01-10-2024.component.html',
  styleUrl: './class-01-10-2024.component.scss'
})
export class Class01102024Component {
  public textName:string = 'HolaMundo';
}
