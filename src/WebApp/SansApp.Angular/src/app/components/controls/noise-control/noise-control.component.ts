import { Component, OnInit } from '@angular/core';
import { NoiseService } from '../../../services/noise-service/noise.service';

@Component({
  selector: 'app-noise-control',
  templateUrl: './noise-control.component.html',
  styleUrls: ['./noise-control.component.scss']
})
export class NoiseControlComponent implements OnInit {

  dbValue = 50;

  constructor(private noiseService: NoiseService) { }

  ngOnInit() {
  }

  updateDbValue() {
    this.noiseService.setNoiseLevel(this.dbValue);
  }

}
