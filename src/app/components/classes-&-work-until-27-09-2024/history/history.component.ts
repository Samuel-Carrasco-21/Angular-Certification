import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface IResultCalculator{
  operation: string;
  result: number;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  @Input() history: IResultCalculator[] = [];
}
