import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-indicator',
  standalone: true,
  imports: [],
  templateUrl: './info-indicator.component.html',
  styleUrl: './info-indicator.component.scss'
})
export class InfoIndicatorComponent {
  @Input() text!: string;
  @Input() numValue!: number;
}
