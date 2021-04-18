import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/publications.service';

@Component({
  selector: 'app-details-publications',
  templateUrl: './details-publications.component.html',
  styleUrls: ['./details-publications.component.scss'],
})
export class DetailsPublicationsComponent implements OnInit {
  constructor(private servicePublications$: ApiService) {}

  ngOnInit(): void {}
}
