import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { INormalUser } from '../../../models/normal-user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit, OnDestroy {
  public normalUser: INormalUser = {
    name: '',
    age: 0
  };
  public subActivatedRoute?: Subscription;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subActivatedRoute = this._activatedRoute.queryParams.subscribe((params: Params) => {
      console.log('query params: ', params);
      this.normalUser = { ...(params as INormalUser) };
    })
    console.log('query params snapshot: ', this._activatedRoute.snapshot.queryParams)
  }

  ngOnDestroy(): void {
    this.subActivatedRoute?.unsubscribe();
  }
}
