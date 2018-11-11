import { Component, OnInit } from '@angular/core';
import { NoiseService } from '../../../services/noise-service/noise.service';

@Component({
  selector: 'app-noise-control',
  templateUrl: './noise-control.component.html',
  styleUrls: ['./noise-control.component.scss']
})
export class NoiseControlComponent implements OnInit {

  dbValue = 60;

  constructor(private noiseService: NoiseService) { }

  ngOnInit() {
  }

  updateDbValue() {
    this.noiseService.setNoiseLevel(this.dbValue);
  }

  addVolume() {
    this.dbValue++;
    this.updateDbValue();
  }

  lowerVolume() {
    this.dbValue--;
    this.updateDbValue();
  }

  resetShh() {
    this.noiseService.resetShh();
  }
}
