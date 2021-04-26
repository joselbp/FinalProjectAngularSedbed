import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AnswerLogin } from '../../models/interfaces/answerLogin.interface';
import { RegisterInterface } from '../../models/interfaces/register.interface';


@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  token = '';
  URL = environment.POST_API_URL;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(register: RegisterInterface): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise((resolve, reject) => {
      this.http
        .post<RegisterInterface>(`${this.URL}/users`, JSON.stringify(register), {
          headers,
        })
        .subscribe(
          (respuesta) => {
            console.log(respuesta.name)
            this.router.navigate(['/login']);
          },
          (error) => {
            console.log(error);
            Swal.fire(
              'Error',
              "Ocurrió un error al registrarse",
              'error'
            );
          }
        );
    });
  }
}
