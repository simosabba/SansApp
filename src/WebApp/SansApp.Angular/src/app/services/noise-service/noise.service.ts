import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import { detachEmbeddedView } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class NoiseService {

  private _hubConnection: HubConnection;
  noiseSampleReceived = new EventEmitter<DbSample>();

  constructor() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('/noiseHub')
      .configureLogging(LogLevel.Information)
      .build();
    this._hubConnection.start().catch(err => console.error(err.toString()));
    this._hubConnection.on('ReceiveNewSample', (value: number, avg: number) => {
      this.addNoiseSample(value, avg);
    });
    setInterval(() => {
      this._hubConnection.send('GetValue');
    }, 2000);
  }

  addNoiseSample(dbValue: number, dbAvg: number) {
    this.noiseSampleReceived.emit({
      value: dbValue,
      avg: dbAvg
    });
  }

  setNoiseLevel(dbValue: number) {
    this._hubConnection.send('SetValue', dbValue);
  }
}

export class DbSample {
  value: number;
  avg: number;
}
