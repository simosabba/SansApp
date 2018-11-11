import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NoiseService } from '../../../services/noise-service/noise.service';

declare var chartHelper: any;
declare var $: any;

@Component({
  selector: 'app-noise-chart',
  templateUrl: './noise-chart.component.html',
  styleUrls: ['./noise-chart.component.scss']
})
export class NoiseChartComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let chartInitialized = false;
    setTimeout(() => {
    setInterval(function () {
        if (!chartInitialized && $('#noiseChart')) {
            chartHelper.initChart();
            chartInitialized = true;
        }
      }, 1000);
    }, 3000);
  }
}
