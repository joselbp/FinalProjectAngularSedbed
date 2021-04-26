import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PublicationsClass } from 'src/app/shared/models/class/publications.class';
import { UsersClass } from 'src/app/shared/models/class/users.class';
import { Reactioninterface } from 'src/app/shared/models/interfaces/reaction.interface';
import { DataService } from 'src/app/shared/services/data/data-service.service';
import { SessionStorageService } from 'src/app/shared/services/sessionStorage/session-storage.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {
  @Input() post: PublicationsClass = new PublicationsClass(0, undefined, undefined, undefined)
  @Output() emitPostId = new EventEmitter<number>()


  constructor(private serviceStorage: SessionStorageService) { }

  ngOnInit(): void {

  }
  reaction() {
    this.emitPostId.emit(this.post.ID);
  }
  saveReaction() {
    return this.post.reactions?.some(res => {
      return res.user_id === this.serviceStorage.getId()
    })
  }
}
