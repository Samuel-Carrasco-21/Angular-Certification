import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  onSubmit(data: any) {
    console.log('TEMPLATE DRIVEN FORM: ', data.form.value);
  }
}
