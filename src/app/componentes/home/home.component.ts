import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/publications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private servicioPublicaciones$: ApiService) {}

  ngOnInit(): void {}
}