import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { RegisterScreenComponent } from './pages/register-screen/register-screen.component';


@NgModule({
  declarations: [
    LoginScreenComponent,
    RegisterScreenComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
