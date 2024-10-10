import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrl: './personal-card.component.scss'
})
export class PersonalCardComponent implements OnChanges {
  @Input() user: User | null = null;
  public finalScore: number = 0;
  public finalAddress: string = '';

  ngOnChanges(_changes: SimpleChanges): void {
    if (this.user) {
      this.finalScore = (this.user.firstTestScore + this.user.secondTestScore + this.user.finalTestScore) / 3;
      this.finalScore = Math.round(this.finalScore);
    };
  }
}
