import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form-page',
  templateUrl: './template-form-page.component.html',
  styleUrl: './template-form-page.component.scss'
})
export class TemplateFormPageComponent {
  saveUser(userForm:any){
    console.log(userForm.value);
  }
}
