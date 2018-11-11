import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import { detachEmbeddedView } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class NoiseService {

  private _hubConnection: HubConnection;
  noiseSampleReceived = new EventEmitter<number>();

  constructor() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('/noiseHub')
      .configureLogging(LogLevel.Information)
      .build();
    this._hubConnection.start().catch(err => console.error(err.toString()));
    this._hubConnection.on('ReceiveNewSample', (value: number) => {
      this.addNoiseSample(value);
    });
  }

  addNoiseSample(dbValue: number) {
    this.noiseSampleReceived.emit(dbValue);
  }
}
