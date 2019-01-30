import { Component, OnInit } from '@angular/core';
import { NoiseService, DbSample } from 'src/app/services/noise-service/noise.service';

@Component({
  selector: 'app-totem',
  templateUrl: './totem.component.html',
  styleUrls: ['./totem.component.scss']
})
export class TotemComponent implements OnInit {

  totemBackground = '';
  private isAppReady = false;

  constructor(private noiseService: NoiseService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isAppReady = true;
    }, 1500);

    this.noiseService.noiseSampleReceived.subscribe((sample: DbSample) => {
      this.setBackgroundClass(sample.avg);
    });
  }

  isLoading() {
    return !this.isAppReady;
  }

  private setBackgroundClass(avg: number) {
    if (avg < 55) {
      this.totemBackground = 'positive-b';
    } else if (avg < 65) {
      this.totemBackground = 'positive';
    } else {
      this.totemBackground = 'negative';
    }
  }
}
