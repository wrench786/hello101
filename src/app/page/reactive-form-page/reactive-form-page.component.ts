import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-page',
  templateUrl: './reactive-form-page.component.html',
  styleUrl: './reactive-form-page.component.scss'
})
export class ReactiveFormPageComponent {
  //user data is a variable which is type FormGroup
  userDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userDataForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
      ]],
    });
  }

  saveUser(){
    console.log(this.userDataForm.value);

    this.userDataForm.reset();
  }
}
