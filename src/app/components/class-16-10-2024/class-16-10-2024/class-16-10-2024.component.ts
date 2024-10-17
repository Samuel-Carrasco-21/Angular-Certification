import { Component } from '@angular/core';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-class-16-10-2024',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    PageOneComponent, PageTwoComponent],
  templateUrl: './class-16-10-2024.component.html',
  styleUrl: './class-16-10-2024.component.scss'
})
export class Class16102024Component {

}
