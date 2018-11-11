import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var chartHelper: any;

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
    //chartHelper.initChart();
  }
}
