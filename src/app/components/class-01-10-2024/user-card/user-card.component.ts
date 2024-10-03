import { AfterContentInit, AfterViewInit, Component, DoCheck, Input, ViewChild, ElementRef, afterNextRender, afterRender, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit {
  @Input() textName: string = '';
  @ViewChild('myButtonUserCard') buttonTest!: ElementRef;
  @ViewChild('buttonTesting', { static: false }) buttonTesting!: ElementRef
  @ViewChild('buttonShowing', { static: true }) buttonShowing!: ElementRef

  private previousTextName: string = '';
  private numValue: number = 0;

  public showButton:boolean = true;

  public testingNumValue:number = 0;

  ngOnInit(): void {
    this.buttonShowing.nativeElement.textContent = 'ngOnInit: button Showing in OnInit'
  }

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

    if(this.buttonTesting){
      this.buttonTesting.nativeElement.textContent = 'button Test in ngAfterViewInit'
    }
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
