import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { TemplateFormPageComponent } from './page/template-form-page/template-form-page.component';
import { ReactiveFormPageComponent } from './page/reactive-form-page/reactive-form-page.component';

const routes: Routes = [
  {
    // when there is '' (default) link is given, then router-outlet change
    // to HomePageComponent in page FormBuilder, this is routing
    path:'', component:HomePageComponent
  },
  {
    path:'template-form', component:TemplateFormPageComponent
  },
  {
    path:'reactive-form', component:ReactiveFormPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
