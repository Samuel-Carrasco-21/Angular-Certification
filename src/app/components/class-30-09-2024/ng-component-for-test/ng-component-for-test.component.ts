import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-component-for-test',
  standalone: true,
  imports: [],
  templateUrl: './ng-component-for-test.component.html',
  styleUrl: './ng-component-for-test.component.scss'
})
export class NgComponentForTestComponent implements OnInit, OnDestroy {
  constructor(){
    console.log('constructor for NgComponentForTestComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit for NgComponentForTestComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy for NgComponentForTestComponent');
  }
}
