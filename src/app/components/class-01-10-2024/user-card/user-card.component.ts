import { AfterContentInit, Component, DoCheck, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements DoCheck, AfterContentInit{
  @Input() textName:string = '';
  private previousTextName: string = '';

  ngDoCheck(): void {
    if (this.textName !== this.previousTextName && this.textName.length <= 15) {
      console.log('DO CHECK in user card component: textName changed to', this.textName);
      this.previousTextName = this.textName;
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: components from parent was loades');
  }

}
