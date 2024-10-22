import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { UserModule } from './pages/user.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ComponentsModule, UserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/home/users']);
  }
}
