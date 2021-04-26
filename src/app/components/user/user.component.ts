import { Component, OnInit } from '@angular/core';
//Models
import { UsersClass } from 'src/app/shared/models/class/users.class';
//Services
import { DataService } from 'src/app/shared/services/data/data-service.service';
import { GetService } from 'src/app/shared/services/request/get/requestGet.service';
import { PostService } from 'src/app/shared/services/request/post/requestPost.service';
import { SessionStorageService } from 'src/app/shared/services/sessionStorage/session-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  usersList: UsersClass[] = [];
  constructor(
    private serviceGet: GetService,
    public serviceData: DataService,
    private servicePost: PostService,
    private serviceStorage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.consultUsers();

  }

  consultUsers() {
    this.serviceGet.requestGet('users').subscribe((users) => {
      this.usersList = [...this.usersList, ...users];
      this.serviceData.listUsers = this.usersList;
    });
  }

  followUser(followedId: number) {
    this.usersList.map((res) => {
      if (res.ID === followedId) {
        const model = {
          user_id: this.serviceStorage.getId(),
          followed_id: followedId,
        };
        this.servicePost
          .requestPost(model, 'users/follow')
          .subscribe((posts) => {
            this.consultUsers();
          });
      }
    });
  }
}
