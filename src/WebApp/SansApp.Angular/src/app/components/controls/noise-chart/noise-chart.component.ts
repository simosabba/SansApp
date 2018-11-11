import { SoundGraphComponent } from './../../totem/sound-graph/sound-graph.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NoiseService } from '../../../services/noise-service/noise.service';

declare var chartHelper: any;
declare var pushData: any;
declare var $: any;
declare var dbValue: number;

@Component({
  selector: 'app-noise-chart',
  templateUrl: './noise-chart.component.html',
  styleUrls: ['./noise-chart.component.scss']
})
export class NoiseChartComponent implements OnInit, AfterViewInit {

  constructor(private noiseService: NoiseService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let chartInitialized = false;
    setTimeout(() => {
    setInterval(function () {
        if (!chartInitialized && $('#noiseChart')) {
            chartHelper.initChart();
            chartInitialized = true;

            setInterval(function () {
              console.log(dbValue);
              pushData([{ time: ((new Date()).getTime() / 1000), y: dbValue}]);
            }, 1000);
        }
      }, 1000);
    }, 3000);

    this.noiseService.noiseSampleReceived.subscribe((value: number) => {
      console.log('New noise sample: ', value);
      dbValue = value;
    });
  }
}
