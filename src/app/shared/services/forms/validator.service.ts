import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {

  constructor() { }

  passwordsIguales(password: string, password2: string) {
    return (formGroup: FormGroup) => {
      const group = formGroup.controls.passwords as FormGroup;
      const controlPass1 = group.controls[password];
      const controlPass2 = group.controls[password2];
      if (controlPass1.value === controlPass2.value) {
        controlPass2.setErrors(null);
      } else {
        controlPass2.setErrors({ noCoinciden: true });
      }
    };
  }

  validateEmptyField(posted_text: string, img_url: string) {
    return (formGroup: FormGroup) => {
      const group = formGroup.controls.form as FormGroup;
      const controlPostedText = group.controls[posted_text];
      const controlImageUrl = group.controls[img_url];
      if (Boolean(controlPostedText.value)) {
        controlPostedText.invalid;
        controlImageUrl.invalid;
        return
      }
    };
  }
}
