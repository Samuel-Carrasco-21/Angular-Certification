import { AfterContentInit, AfterViewInit, Component, DoCheck, Input, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements DoCheck, AfterContentInit, AfterViewInit {
  @Input() textName: string = '';
  @ViewChild('myButtonUserCard') buttonTest!: ElementRef;
  private previousTextName: string = '';
  private numValue:number = 0;

  ngDoCheck(): void {
    if (this.textName !== this.previousTextName && this.textName.length <= 15) {
      console.log('DO CHECK in user card component: textName changed to', this.textName);
      this.previousTextName = this.textName;
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: components from parent was loades');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit::Button-Text:', this.buttonTest.nativeElement.textContent);
    console.log('ngAfterViewInit: All Html elements have loaded at first time');
    this.buttonTest.nativeElement.textContent = 'Default Value: 0';
    console.log('ngAfterViewInit::Button-Text:', this.buttonTest.nativeElement.textContent);
  }

  public clickButtonAction() {
    this.numValue++;
    this.buttonTest.nativeElement.textContent = `Number Value: ${this.numValue}`;
  }
}
