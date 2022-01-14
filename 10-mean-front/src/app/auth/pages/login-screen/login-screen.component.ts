import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    console.log(this.miFormulario.value);

    this.authService.login(this.miFormulario.value).subscribe((res) => {
      if (res === true) {
        localStorage.setItem('user', JSON.stringify(this.authService.user));
        this.router.navigateByUrl('/task');
      } else {
        Swal.fire({
          title: 'Error...',
          text: res,
          icon: 'error',
        });
      }
    });
  }
}
