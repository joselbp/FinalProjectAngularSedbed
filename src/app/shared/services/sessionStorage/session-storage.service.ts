import { Injectable } from '@angular/core';
import { UsersClass } from '../../models/class/users.class';


@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() { }

  saveToken(token: string) {
    window.localStorage.setItem('app-posts-token', token);
  }

  getToken(): string | null {
    return window.localStorage.getItem('app-posts-token');
  }

  saveNombreUsuario(nombre: string) {
    window.localStorage.setItem('app-posts-usuario', nombre);
  }

  getNombreUsuario(): string {
    return window.localStorage.getItem('app-posts-usuario') || '';
  }

  saveUsuario(usuario: UsersClass) {
    window.localStorage.setItem(
      'app-posts-usuario-objeto',
      JSON.stringify(usuario)
    );
  }
  getUsuario(): any {
    const usuarioJson =
      window.localStorage.getItem('app-posts-usuario-objeto') || '';
    if (!Boolean(usuarioJson)) {
      return null || {};
    }
    return JSON.parse(usuarioJson);
  }
  saveAvatar(avatar: any) {
    window.localStorage.setItem('app-posts-avatar', JSON.stringify(avatar));
  }
  getAvatar(): string {
    return JSON.parse(window.localStorage.getItem('app-posts-avatar') || '');
  }
  saveId(id: any) {
    window.localStorage.setItem('app-posts-id', JSON.stringify(id));
  }
  getId() {
    return JSON.parse(window.localStorage.getItem('app-posts-id') || '');
  }
  logOutUser() {
    return window.localStorage.clear();
  }
}
