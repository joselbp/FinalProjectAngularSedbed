import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AnswerLogin } from '../../models/interfaces/answerLogin.interface';
import { SessionStorageService } from '../sessionStorage/session-storage.service';
import { Router } from '@angular/router';
import { LoginInterface } from '../../models/interfaces/login.interface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string = '';
  URL: string = environment.POST_API_URL;

  constructor(
    public afAuth: AngularFireAuth,
    private http: HttpClient,
    private storage: SessionStorageService,
    private router: Router
  ) { }

  login(login: LoginInterface): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise((resolve, reject) => {
      this.http
        .post<AnswerLogin>(`${this.URL}/auth`, JSON.stringify(login), {
          headers,
        })
        .subscribe(
          (respuesta) => {
            this.storage.saveToken(respuesta.token);
            this.storage.saveNombreUsuario(respuesta.user.name);
            this.storage.saveUsuario(respuesta.user);
            this.token = respuesta.token;
            this.storage.saveAvatar(respuesta.user.avatar)
            this.storage.saveId(respuesta.user.ID)
            console.log(respuesta.user.avatar);
            Swal.fire(
              'Success',
              "Sesión iniciada",
              'success'
            );
            resolve(respuesta.user);

            this.router.navigate(['/home']);

          },
          (error) => {
            console.log(error);
            Swal.fire(
              'Error',
              "Ocurrió un error iniciando sesión",
              'error'
            );
          }
        );
    });
  }

}
