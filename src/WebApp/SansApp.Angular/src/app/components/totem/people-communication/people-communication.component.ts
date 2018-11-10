import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';

@Component({
  selector: 'app-people-communication',
  templateUrl: './people-communication.component.html',
  styleUrls: ['./people-communication.component.scss']
})
export class PeopleCommunicationComponent implements OnInit {

  private _hubConnection: HubConnection;
  message: Message;

  constructor() { }

  ngOnInit() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('/chatHub')
      .configureLogging(LogLevel.Information)
      .build();
    this._hubConnection.start().catch(err => console.error(err.toString()));
    this._hubConnection.on('ReceiveMessage', (user: string, message: string) => {
      this.message = {
        user: user,
        message: message
      };
      console.log('message received', user, ': ', message);
    });

  }

}

export class Message {
  user: string;
  message: string;
}
