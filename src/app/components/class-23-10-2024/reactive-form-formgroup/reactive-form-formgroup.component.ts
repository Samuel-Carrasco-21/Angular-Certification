import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-formgroup',
  templateUrl: './reactive-form-formgroup.component.html',
  styleUrls: ['./reactive-form-formgroup.component.scss']
})
export class ReactiveFormFormgroupComponent {
  public studentForm!: FormGroup;
  public student2Form!: UntypedFormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private untypedFormBuilder: UntypedFormBuilder,
  ) {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: ['']
    });

    this.student2Form = this.untypedFormBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: ['']
    });

    this.studentForm.valueChanges.subscribe((res) => {
      console.log('FORM GROUP OBSERVABLE: ', res);
    });
  }

  public onSendData() {
    console.log('FORM GROUP: ', this.studentForm.value);
  }

  public onSendData2() {
    console.log('FORM GROUP 2: ', this.student2Form.value);
  }

  public print() {
    console.log('FORM NAME: ', this.studentForm.get('name')?.value);
  }

  public onSubmit(data: any) {
    console.log('TEMPLATE DRIVEN FORM: ', data);
  }
}
