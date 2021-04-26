import { Injectable } from '@angular/core';
import { PublicationsClass } from '../../models/class/publications.class';
import { UsersClass } from '../../models/class/users.class';
import { GetService } from '../request/get/requestGet.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //almacenando lista usuarios
  listUsers: UsersClass[] = [];
  //
  searchUser: UsersClass[] = []
  //almacenando posts por usuario
  postsForUser: PublicationsClass[] = []
  constructor(private serviceGet: GetService) {

  }
  search(bindingSearch: string) {
    if (bindingSearch != "") {
      this.serviceGet.requestGet(`search?text=${bindingSearch}`).subscribe(res => {
        this.searchUser = [this.searchUser, ...res];
        console.log(this.searchUser)
      }
      )
    }
  }
}
