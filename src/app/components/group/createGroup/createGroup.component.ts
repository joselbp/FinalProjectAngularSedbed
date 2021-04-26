import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/services/sessionStorage/session-storage.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/shared/services/request/post/requestPost.service';
import { CreateGroupInterface } from 'src/app/shared/models/interfaces/createGroup.interface';
@Component({
  selector: 'app-modal',
  templateUrl: './createGroup.component.html',
  styleUrls: ['./createGroup.component.scss']
})
export class CreateGroupComponent implements OnInit {
  form: FormGroup;
  interfaceCreateGroup: CreateGroupInterface = {
    name: "",
    description: "",
    creator_id: 0
  }
  constructor(
    private servicePost: PostService,
    private formBuilder: FormBuilder,
    public serviceStorage: SessionStorageService,
    private modal: NgbActiveModal,

  ) {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
      }
    );
  }
  ngOnInit(): void { }

  submit() {
    if (this.form.invalid) {
      Swal.fire('Error!', 'Formulario incompleto', 'error');
      return;
    }
    const values = this.form.value;
    const post = values as CreateGroupInterface;
    this.createGroup(post);
    this.modal.dismiss();
  }
  createGroup(post: CreateGroupInterface) {
    this.interfaceCreateGroup = {
      name: post.name,
      description: post.description,
      creator_id: this.serviceStorage.getId(),
    }
    this.servicePost
      .requestPost(this.interfaceCreateGroup, 'groups')
      .subscribe((res: CreateGroupInterface) => {
        Swal.fire(
          'Succes',
          this.serviceStorage.getNombreUsuario() + ` tu grupo ${res?.name} fue creado correctamente`,
          'success'
        );
      });
  }
  closeModal() {
    this.modal.dismiss();

  }
}
