import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsClass } from 'src/app/shared/models/class/publications.class';
import { DataService } from 'src/app/shared/services/data/data-service.service';
import { GetService } from 'src/app/shared/services/request/get/requestGet.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  id: number = 9;
  listPostUserId: PublicationsClass[] = []
  constructor(private serviceGet: GetService, private activeRoute: ActivatedRoute, private serviceData: DataService) { }

  ngOnInit(): void {
    this.id = Number(this.activeRoute.snapshot.queryParamMap.get('id'));

    this.postUserId(this.id)
    console.log(this.id)
  }

  postUserId(id: number) {
    this.serviceGet.requestGet(`posts/user/${id}`).subscribe((res) => {
      this.listPostUserId = [...this.listPostUserId, ...res]
      this.serviceData.postsForUser = this.listPostUserId;
    })
  }
}
