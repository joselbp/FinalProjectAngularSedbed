import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL = 'http://f346d41123b3.ngrok.io';
  constructor(private http: HttpClient) {}

  consultPublications() {
    return this.http.get(`${this.URL}/posts`);
  }
}
