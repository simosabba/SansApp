import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import { NoiseService, DbSample } from '../../../services/noise-service/noise.service';

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
  shhLevel = -1;
  dbAvg = 0;

  constructor(private noiseService: NoiseService) { }

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
      this.shhLevel++;
    });

    setInterval(() => {
      let newLevel = this.shhLevel - 10;
      if (newLevel < 0) {
        newLevel = 0;
      }
      this.shhLevel = newLevel;
    }, 6000);

    this.noiseService.noiseSampleReceived.subscribe((sample: DbSample) => {
      this.dbAvg = sample.avg;
    });
  }

  getShhImage() {
    if (this.shhLevel < 1) {
      return '';
    }
    const level = Math.ceil(this.shhLevel / 10);
    return '/app/assets/img/components/shh-' + level.toString() + '.png';
  }

  getDbAvgCypher(cypher: number) {
    const a = Math.ceil(this.dbAvg);
    return a
      .toString()
      .padStart(3, '0')
      .substr(3 - cypher, 1);
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
    return this.message.avatarIcon;
  }
}

export class Message {
  avatarIcon: string;
  user: string;
  sentence: string;
}
