import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersInterface } from 'src/app/shared/models/interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: UsersInterface[] = [];
  users: UsersInterface[] = [];
  constructor(public afAuth: AngularFireAuth) {}

  getUser(): UsersInterface[] {
    return this.user;
  }

  getUsers(): UsersInterface[] {
    return this.user;
  }
  loginWithEmailAndPassword(user: UsersInterface[]) {
    this.user = user;
    this.users = [...this.users, ...this.user];
  }
  loginWithFacebook(user: UsersInterface[]) {
    this.user = user;
    this.users = [...this.users, ...this.user];
  }
  loginWithGoogle(user: UsersInterface[]) {
    this.user = user;
    this.users = [...this.users, ...this.user];
  }
}
