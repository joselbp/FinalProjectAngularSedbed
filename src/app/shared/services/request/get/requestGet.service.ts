import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../../sessionStorage/session-storage.service';



@Injectable({
  providedIn: 'root'
})
export class GetService {
  URL = environment.POST_API_URL;

  constructor(
    private http: HttpClient,
    private storage: SessionStorageService
  ) { }

  requestGet(parameter: string) {
    const token = this.storage.getToken()
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      }),
    };
    return this.http.get<any[]>(`${this.URL}/${parameter}`, httpOptions);

  }

}
