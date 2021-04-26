import { Component } from '@angular/core';
import { SocketsService } from './shared/services/sockects/sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppPublicaciones';
  constructor(private serviceSocket: SocketsService) { }
}
