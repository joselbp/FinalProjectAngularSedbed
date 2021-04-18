import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersInterface } from 'src/app/shared/models/interfaces/users.interface';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: UsersInterface[] = [];

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

  validateForm(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(
        (controls) => controls.markAsTouched
      );
    }
  }

  clickLogin(event: any) {
    let e = event.target.value;
    switch (e) {
      case 1:
        this.loginService.loginWithEmailAndPassword(this.user);
        break;
      case 2:
        this.loginService.loginWithGoogle(this.user);
        break;
      case 3:
        this.loginService.loginWithFacebook(this.user);
        break;
    }
  }
}
