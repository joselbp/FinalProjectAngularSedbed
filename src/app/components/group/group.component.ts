import { Component, Input, OnInit } from '@angular/core';
import { GroupClass } from 'src/app/shared/models/class/group.class';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { GetService } from 'src/app/shared/services/request/get/requestGet.service';
import { PostService } from 'src/app/shared/services/request/post/requestPost.service';
import { SessionStorageService } from 'src/app/shared/services/sessionStorage/session-storage.service';
import { CreateGroupComponent } from './createGroup/createGroup.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input() groupSelected = 0;
  groupsList: GroupClass[] = [];
  modalComponent = CreateGroupComponent;
  constructor(
    private serviceGet: GetService,
    public serviceModal: ModalService,
    private servicePost: PostService,
    private serviceStorage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.consultGroups();
  }
  consultGroups() {
    this.serviceGet.requestGet('groups').subscribe((res) => {
      this.groupsList = [...this.groupsList, ...res];
    });
  }
  addUserGroup(groupId: number) {
    this.groupsList.map((res) => {
      if (res.ID === groupId) {
        const model = {
          user_id: this.serviceStorage.getId(),
          group_id: groupId,
        };
        this.servicePost
          .requestPost(model, 'groups/append')
          .subscribe((posts) => {
            this.consultGroups();
          });
      }
    });
  }
}
