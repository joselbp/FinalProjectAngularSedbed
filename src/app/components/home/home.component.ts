import { Component, OnInit } from '@angular/core';
import { UsersClass } from 'src/app/shared/models/class/users.class';
import { DataService } from 'src/app/shared/services/data/data-service.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { SessionStorageService } from 'src/app/shared/services/sessionStorage/session-storage.service';
import { CreatePublicationsComponent } from '../publications/create-publications/create-publications.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usersList: UsersClass[] = [];
  componentModal = CreatePublicationsComponent;

  constructor(public serviceStorage: SessionStorageService, public serviceModal: ModalService, public serviceData: DataService) { }

  ngOnInit(): void {



  }
}
