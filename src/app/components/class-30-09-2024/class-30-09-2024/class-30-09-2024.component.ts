import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgComponentForTestComponent } from '../ng-component-for-test/ng-component-for-test.component';

@Component({
  selector: 'app-class-30-09-2024',
  standalone: true,
  imports: [NgComponentForTestComponent],
  templateUrl: './class-30-09-2024.component.html',
  styleUrl: './class-30-09-2024.component.scss'
})
export class Class30092024Component {
  public appearComponent: boolean = true;

  public changeVisibility(){
    this.appearComponent = !this.appearComponent;
  }
}
