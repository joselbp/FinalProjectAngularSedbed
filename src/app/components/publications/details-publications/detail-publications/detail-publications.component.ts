import { Component, OnInit } from '@angular/core';
import { PublicationsClass } from 'src/app/shared/models/class/publications.class';



@Component({
  selector: 'app-detail-publications',
  templateUrl: './detail-publications.component.html',
  styleUrls: ['./detail-publications.component.scss']
})
export class DetailPublicationsComponent implements OnInit {

  constructor() { }
  postsList: PublicationsClass[] = [];

  ngOnInit(): void {
    this.consultPosts();
  }
  consultPosts() {

  }
}
