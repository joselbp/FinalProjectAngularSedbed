import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/services/sessionStorage/session-storage.service';
import { LoginService } from 'src/app/shared/services/auth/login.service';
import { DataService } from 'src/app/shared/services/data/data-service.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public serviceLogin: LoginService, public serviceSession: SessionStorageService, public serviceData: DataService) { }

  ngOnInit(): void {
  }

}
