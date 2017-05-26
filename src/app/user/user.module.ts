import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    RegistrationFormComponent
  ],
  exports: [
    RegistrationFormComponent
  ],
  imports: [
      FormsModule
  ]
})
export class UserModule {}
