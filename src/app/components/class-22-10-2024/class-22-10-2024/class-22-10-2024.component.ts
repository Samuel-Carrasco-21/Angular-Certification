import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-class-22-10-2024',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './class-22-10-2024.component.html',
  styleUrl: './class-22-10-2024.component.scss'
})
export class Class22102024Component {
  constructor(private router: Router) { }

  public onCalculator() {
    this.router.navigate(['/class-22-10-2024/calculator'], { queryParams: { name: 'John', age: 20 } })
  }

  public goTemplateDrivenForm() {
    this.router.navigate(['/class-22-10-2024/template-driven-form']);
  }
}
