import { Component, Input, ViewChild, ElementRef, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements AfterContentChecked, AfterViewChecked {
  @Input() textName: string = '';
  @ViewChild('myButtonUserCard') buttonTest!: ElementRef;
  @ViewChild('buttonTesting', { static: false }) buttonTesting!: ElementRef
  @ViewChild('buttonShowing', { static: true }) buttonShowing!: ElementRef

  private previousTextName: string = '';
  private numValue: number = 0;

  public showButton:boolean = true;

  public testingNumValue:number = 0;

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: method was called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: method was called');
  }

  public clickButtonAction() {
    this.numValue++;
    this.buttonTest.nativeElement.textContent = `Number Value: ${this.numValue}`;
  }

  public incrementTestingNumValue(){
    this.testingNumValue++;
    this.testingNumValue
  }
}
