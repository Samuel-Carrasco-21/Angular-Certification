import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-class-17-10-2024',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './class-17-10-2024.component.html',
  styleUrl: './class-17-10-2024.component.scss'
})
export class Class17102024Component {
  constructor(private router: Router) { }

  public accessMyUser() {
    this.router.navigate(['/class-17-10-2024/users', 1]);
  }
}
