import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title:string = 'certification.upb.web';
  public numberToSum:number = 11;
  public numberOne:number = 12;
  public numberTwo:number = 10;

  constructor(){
    console.log('SUM: ', this.sum(this.numberOne, this.numberTwo));
    console.log('SUBSTRACT: ', this.substract(this.numberOne, this.numberTwo));
  }

  public sum(num1:number, num2: number): number{
    return num1 + num2;
  }

  private substract(num1:number, num2: number): number{
    return num1 - num2;
  }
}
