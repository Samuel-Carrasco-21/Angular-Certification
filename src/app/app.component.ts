import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface IPerson{
  name: string;
  lastName: string;
  age: number;
}

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
  public animals:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  public person: IPerson = {
    name: 'Jose',
    lastName: 'Carrasco',
    age: 21
  };

  constructor(){
    console.log('SUM: ', this.sum(this.numberOne, this.numberTwo));
    console.log('SUBSTRACT: ', this.substract(this.numberOne, this.numberTwo));

    console.log('MAP: ', this.animals.map((animal) => animal+'new'));
    console.log('FOREACH: ', this.animals.forEach((animal) => animal+'new'));
    console.log('FIND: ', this.animals.find((animal) => animal === 'f'));
    console.log('FILTER: ', this.animals.filter((animal) => animal === 'c'));
    console.log('INDEXOF: ', this.animals.indexOf('d'));
    console.log('FINDINDEX: ', this.animals.findIndex((animal) => animal === 'c'));
    console.log('REDUCE: ', this.animals.reduce((accumulatedValue, arrayValue) => accumulatedValue + arrayValue, ''));
  }

  public sum(num1:number, num2: number): number{
    return num1 + num2;
  }

  private substract(num1:number, num2: number): number{
    return num1 - num2;
  }

  public getArray(): void{
    const persons: number[] = [1, 2, 3, 4, 5].filter(person => person % 2 === 0);
    for (let person of persons) {
      console.log('person = ', person);
    }
  }
}
