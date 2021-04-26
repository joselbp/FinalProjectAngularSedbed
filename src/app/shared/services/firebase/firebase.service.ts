import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  url: Observable<any> = of('');
  constructor(private storage: AngularFireStorage) { }

  chargeImgFirebase(evt: any, path: any) {
    const img = evt.target.files[0];
    const partes = img.name.split('.');
    const extension = partes[partes.length - 1];
    const nombre = `${Date.now()}.${extension}`;
    const ruta = `${path}/${nombre}`;
    const ref = this.storage.ref(ruta);
    const tarea = this.storage.upload(ruta, img);
    tarea
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.url = ref.getDownloadURL();
        })
      )
      .subscribe();
  }
  getUrl() {
    return this.url;
  }
}
