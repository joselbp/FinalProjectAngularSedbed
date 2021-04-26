import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Models
import { SessionStorageService } from '../../sessionStorage/session-storage.service';
//Services
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL = environment.POST_API_URL;
  suscription = new Subject<any>();
  token = this.storage.getToken()
  constructor(private http: HttpClient, private storage: SessionStorageService) { }

  requestPost(model: any, path: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post<any>(`${this.URL}/${path}`, JSON.stringify(model), httpOptions)
  }
  getSubscription() {
    return this.suscription.asObservable();
  }
}
