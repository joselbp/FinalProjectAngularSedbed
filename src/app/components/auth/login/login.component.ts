import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
//Interfaces
import { LoginInterface } from 'src/app/shared/models/interfaces/login.interface';
//Services
import { LoginService } from 'src/app/shared/services/auth/login.service';
import { environment } from 'src/environments/environment';
//Extern


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: LoginInterface = { email: '', password: '' };

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.pattern(environment.regexEmail)],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(environment.regexPassword)],
      ],
    });
  }

  ngOnInit(): void { }

  login() {
    this.user = this.form.value;
    this.loginService
      .login(this.user).then()
      .catch((error) => {
        console.log(error);
      });
  }


}
