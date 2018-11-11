import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class NoiseService {

  noiseSampleReceived = new EventEmitter();

  constructor() { }

  addNoiseSample(dbValue: number) {
    this.noiseSampleReceived.emit('newNoiseSampli', dbValue);
  }
}
