import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  private _hubConnection: HubConnection;
  message = '';
  user = '';

  constructor() { }

  ngOnInit() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('/chatHub')
      .configureLogging(LogLevel.Information)
      .build();
    this._hubConnection.start().catch(err => console.error(err.toString()));
  }

  sendMessage() {
    if (this.user && this.message) {
      this._hubConnection.send('SendMessage', this.user, this.message);
    }
  }

}
