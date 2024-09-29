import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IResult{
  operation: string;
  result: number;
}

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {
  @Output() sendData: EventEmitter<IResult> = new EventEmitter();

  public number1: number = 0;
  public number2: number = 0;
  private result: number = 0;

  public sum() {
    this.result = Number(this.number1) + Number(this.number2);
    this.sendResult('sum');
  }

  public multiply() {
    this.result = Number(this.number1) * Number(this.number2);
    this.sendResult('multiply');
  }

  public reset() {
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
    this.sendResult('reset');
  }

  public sendResult(operation: string) {
    const newResult:IResult = {
      operation: operation,
      result: this.result,
    };

    this.sendData.emit(newResult);
  }
}
