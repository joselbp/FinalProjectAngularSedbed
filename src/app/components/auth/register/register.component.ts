import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterInterface } from 'src/app/shared/models/interfaces/register.interface';
import { ValidatorService } from 'src/app/shared/services/forms/validator.service';
import { RegisterService } from 'src/app/shared/services/auth/registerUser.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  enviado = false;
  registerInterface: RegisterInterface = { name: '', email: '', password: '' };
  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private serviceRegister: RegisterService
  ) {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        email: [
          '',
          [Validators.required, Validators.pattern(environment.regexEmail)],
        ],
        passwords: this.formBuilder.group({
          password: [
            '',
            [
              Validators.required,
              Validators.pattern(environment.regexPassword),
            ],
          ],
          password2: ['', Validators.required],
        }),
      },
      {
        Validators: this.validatorService.passwordsIguales(
          'password',
          'password2'
        ),
      }
    );
  }
  ngOnInit(): void { }

  get pass2NoValido() {
    const group = this.form.controls.passwords as FormGroup;
    return group.controls.password2?.hasError('noCoinciden');
  }

  get pass1NoValido() {
    return (
      this.form.get('passwords.password')?.dirty &&
      this.form.get('passwords.password')?.hasError('pattern')
    );
  }

  datosInvalidos(datos: string) {
    return (
      (this.form.get(datos)?.dirty &&
        this.form.get(datos)?.hasError('pattern')) ||
      this.form.get(datos)?.hasError('required')
    );
  }
  guardar() {
    this.enviado = true;
    console.log(this.form);
  }
  register() {
    this.registerInterface = {
      name: `${this.form.get('name')?.value}`,
      email: `${this.form.get('email')?.value}`,
      password: `${this.form.get('passwords.password')?.value}`,
    };
    this.serviceRegister
      .register(this.registerInterface)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
