import { Component, OnInit } from '@angular/core';
import { UsersClass } from 'src/app/shared/models/class/users.class';
import { DataService } from 'src/app/shared/services/data/data-service.service';
import { GetService } from 'src/app/shared/services/request/get/requestGet.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public serviceData: DataService,) { }

  ngOnInit(): void {

  }
}
