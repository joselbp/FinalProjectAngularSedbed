import { Injectable } from '@angular/core';
import { GetService } from '../request/get/requestGet.service';
import { PostService } from '../request/post/requestPost.service';

@Injectable({
  providedIn: 'root',
})
export class SocketsService {
  socket: WebSocket;
  constructor(private servicePost: PostService) {
    this.socket = new WebSocket('ws://18.189.21.84:5050/ws');

    this.socket.onopen = (evt) => {
      console.log('Abierto...');
    };

    this.socket.onclose = (evt) => {
      console.log('Cerrado...');
    };

    this.socket.onmessage = (evt) => {
      console.log(JSON.parse(evt.data));
      const data = JSON.parse(evt.data);
      this.servicePost.suscription.next(data)
    };
  }
}
