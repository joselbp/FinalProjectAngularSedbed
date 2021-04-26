import { Component, Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CreatePublicationsComponent } from 'src/app/components/publications/create-publications/create-publications.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: NgbModal) { }
  createModal(component: any) {
    this.modal.open(component,
      { backdrop: 'static', size: 'lg' });
  }

}
