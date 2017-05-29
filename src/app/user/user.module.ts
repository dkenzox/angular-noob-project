import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserListComponent } from './list/list.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    RegistrationFormComponent,
    UserListComponent
  ],
  exports: [
    RegistrationFormComponent,
    UserListComponent
  ],
  imports: [
      FormsModule,
      CommonModule
  ]
})
export class UserModule {}
