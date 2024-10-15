import { Component } from '@angular/core';
import { ImpurePipe } from '../impure.pipe';
import { PurePipe } from '../pure.pipe';

@Component({
  selector: 'app-class-11-10-2024',
  standalone: true,
  imports: [
    PurePipe,
    ImpurePipe],
  templateUrl: './class-11-10-2024.component.html',
  styleUrl: './class-11-10-2024.component.scss'
})
export class Class11102024Component {
  public users = [
    { name: "abc", email: "abc@gmail.com" },
    { name: "dfg", email: "dfg@gmail.com" },
  ];

  public students: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  public sumPure(a: number, b: number): number {
    return a + b;
  }
  public sumImpure(a: number, b: number): number {
    return a + b + Math.random();
  }
}
