import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SharedModuleModule } from '../shared/shared.module';
import { IUser } from '../../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, SharedModuleModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
  @Input() user!: IUser;
  public name: string = '';
  public password: string = '';
  public email: string = '';

  ngOnInit(): void {
    this.name = this.user.name;
    this.password = this.user.password;
    this.email = this.user.email;
  }
}
