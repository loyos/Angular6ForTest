import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, CallbackComponent],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
