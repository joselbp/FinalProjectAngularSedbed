import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
//Interface
import { CreatePublication } from 'src/app/shared/models/interfaces/createPublication.interface';
//Services
import { ValidatorService } from 'src/app/shared/services/forms/validator.service';
import { SessionStorageService } from 'src/app/shared/services/sessionStorage/session-storage.service';
import { PostService } from 'src/app/shared/services/request/post/requestPost.service';
//External
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.scss'],
})
export class CreatePublicationsComponent implements OnInit {
  urlFirebase: string = '';
  form: FormGroup;
  interfaceCreate: CreatePublication = {
    posted_text: 'string',
    image_url: 'string',
    user_id: this.serviceStorage.getUsuario(),
    user: this.serviceStorage.getUsuario(),
  };
  constructor(
    private servicePost: PostService,
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    public serviceStorage: SessionStorageService,
    private modal: NgbActiveModal,
    private serviceFirebase: FirebaseService
  ) {
    this.form = this.formBuilder.group(
      {
        posted_text: ['', []],
        image_url: ['', []],
      },
      {
        Validators: this.validatorService.validateEmptyField(
          'posted_text',
          'image_url'
        ),
      }
    );
  }
  ngOnInit(): void { }

  chargeImgFirebase(event: any) {
    this.serviceFirebase.chargeImgFirebase(event, 'uploads/publications');
    this.serviceFirebase.getUrl().subscribe((res) => this.urlFirebase = res);
  }
  submit() {
    if (this.form.invalid) {
      Swal.fire('Error!', 'Formulario incompleto', 'error');
      return;
    }
    const values = this.form.value;
    const post = values as CreatePublication;
    this.createPublications(post);
    this.modal.dismiss();
  }
  createPublications(post: CreatePublication) {
    this.interfaceCreate = {
      posted_text: post.posted_text,
      image_url: this.urlFirebase,
      user_id: this.serviceStorage.getId(),
      user: this.serviceStorage.getUsuario(),
    }
    this.servicePost
      .requestPost(this.interfaceCreate, 'posts')
      .subscribe((res: CreatePublication) => {
        Swal.fire(
          'Succes',
          res.user?.name + ' tu post fue creado correctamente',
          'success'
        );
      });
  }
  closeModal() {
    this.modal.dismiss();
  }
}
