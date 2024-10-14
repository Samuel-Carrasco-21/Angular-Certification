import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-empty-card',
  templateUrl: './empty-card.component.html',
  styleUrl: './empty-card.component.scss'
})
export class EmptyCardComponent {
  @Input() selectedUser!: User | null;
}
