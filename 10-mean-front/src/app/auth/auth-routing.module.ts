import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { RegisterScreenComponent } from './pages/register-screen/register-screen.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginScreenComponent
  },
  {
    path: "register",
    component: RegisterScreenComponent
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
