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

  private person: IPerson = {
    name: 'Jose',
    lastName: 'Carrasco',
    age: 21
  };

  private students:number[] = [1, 2, 3, 4, 5, 6];
  private parents:number[] = [7, 8, 9, 10];

  constructor(){
    const { name, age } = this.person;
    console.log('Destructuring object: { name:', name, ', age:', age, '}');

    const students_and_parents:number[] = [...this.students, ...this.parents];
    console.log('Spreed Operator: ', students_and_parents);

    console.log('Sum of many numbers (Rest Operator): ', this.sumManyNumbers(10, ...students_and_parents));

    // console.log('--- Array Operators ---');
    // console.log('SUM: ', this.sum(this.numberOne, this.numberTwo));
    // console.log('SUBSTRACT: ', this.substract(this.numberOne, this.numberTwo));
    // console.log('MAP: ', this.animals.map((animal) => animal+'new'));
    // console.log('FOREACH: ', this.animals.forEach((animal) => animal+'new'));
    // console.log('FIND: ', this.animals.find((animal) => animal === 'f'));
    // console.log('FILTER: ', this.animals.filter((animal) => animal === 'c'));
    // console.log('INDEXOF: ', this.animals.indexOf('d'));
    // console.log('FINDINDEX: ', this.animals.findIndex((animal) => animal === 'c'));
    // console.log('REDUCE: ', this.animals.reduce((accumulatedValue, arrayValue) => accumulatedValue + arrayValue, ''));
  }

  public sumManyNumbers(initialValue: number, ...nums:number[]): number{
    return nums.reduce((a, b) => a + b, initialValue);
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
