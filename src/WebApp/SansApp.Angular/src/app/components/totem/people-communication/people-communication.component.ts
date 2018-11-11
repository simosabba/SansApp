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
  messageId: string;

  msgTime: Date;
  shhCount = 0;

  constructor() { }

  ngOnInit() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('/chatHub')
      .configureLogging(LogLevel.Information)
      .build();
    this._hubConnection.start().catch(err => console.error(err.toString()));
    this._hubConnection.on('ReceiveMessage', (message: Message, id: string) => {
      this.message = message;
      this.messageId = id;
      setTimeout(() => {
        if (this.messageId === id) {
          this.message = undefined;
        }
      }, 10000);
      // console.log('message received', user, ': ', message);
    });

    this._hubConnection.on('ReceiveShh', (shhCount: number) => {
      this.shhCount = shhCount;
    });
  }

  getShhCypher(cypher: number) {
    return this.shhCount
      .toString()
      .padStart(4, '0')
      .substr(4 - cypher, 1);
  }

  getAvatar() {
    if (!this.message) {
      return '';
    }

    if (!this.message.avatarIcon) {
      return '/app/assets/img/accounts/avatar_2x.png';
    }

    return this.message.avatarIcon;
  }
}

export class Message {
  avatarIcon: string;
  user: string;
  sentence: string;
}
