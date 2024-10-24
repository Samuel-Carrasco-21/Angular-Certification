import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form-control',
  templateUrl: './reactive-form-control.component.html',
  styleUrl: './reactive-form-control.component.scss'
})
export class ReactiveFormControlComponent implements OnInit, OnDestroy {
  public scoreControl = new FormControl<string>('default value', [Validators.required])
  private subReactiveForm?: Subscription;

  ngOnInit(): void {
    this.subReactiveForm = this.scoreControl.valueChanges.subscribe((res) => {
      console.log('SCORE VALUE OBSERVABLE: ', res)
    })
  }

  ngOnDestroy(): void {
    this.subReactiveForm?.unsubscribe();
  }

  public onPrintScore() {
    console.log('SCORE: ', this.scoreControl.value)
  }
}
