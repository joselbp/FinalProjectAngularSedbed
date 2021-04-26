import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//models
import { PublicationsClass } from 'src/app/shared/models/class/publications.class';
import { DataService } from 'src/app/shared/services/data/data-service.service';
//Services
import { GetService } from 'src/app/shared/services/request/get/requestGet.service';
import { PostService } from 'src/app/shared/services/request/post/requestPost.service';
import { SessionStorageService } from 'src/app/shared/services/sessionStorage/session-storage.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  postIdSeleccionado: number = 0;
  postsList: PublicationsClass[] = [];
  comment: any;
  constructor(
    private serviceGet: GetService,
    public serviceStorage: SessionStorageService,
    public servicePost: PostService,
    public serviceData: DataService,
    private activeRoute: ActivatedRoute
  ) { }
  //
  ngOnInit(): void {
    this.consultPosts();
    this.servicePost.getSubscription().subscribe(data => {
      this.postsList.forEach(res => {
        if (data.event === "new::reaction") {

          if (res.ID === data.reaction.post_id) {
            if (res.reactions) {
              res.reactions.push(data.reaction)
            } else {
              data.reaction = [res.reactions]
            }
          }
          return
        }
        if (data.event === "remove::reaction") {
          if (!res.reactions) {
            return
          }
          const reac = res.reactions.find(r => {
            return r.user_id === this.serviceStorage.getId()
          })
          if (reac) {
            res.reactions.splice(res.reactions.indexOf(reac, 1))
          }
        }
      }
      )
    });
  }
  //
  consultPosts() {
    if (!this.activeRoute.snapshot.queryParamMap.get('id')) {
      this.serviceGet.requestGet('posts').subscribe((posts) => {
        this.postsList = [...this.postsList, ...posts];
      });
    } else {
      this.postsList = this.serviceData.postsForUser;
    }
  }
  //
  updateListPostReaction(event: number) {
    this.postIdSeleccionado = event;
    this.postsList.map((res) => {
      if (res.ID === this.postIdSeleccionado) {
        const interfaceReaction = {
          post_id: this.postIdSeleccionado,
          user_id: this.serviceStorage.getId(),
        };
        this.servicePost
          .requestPost(interfaceReaction, 'reactions')
          .subscribe((res) => this.consultPosts());
      }
    });
  }
  createComment(comment: any, postId: number) {
    const body = {
      comment: comment.target.value,
      post_id: postId,
      user_id: this.serviceStorage.getId()
    }
    console.log(comment);

    this.servicePost.requestPost(body, 'comments').subscribe()
  }
}
