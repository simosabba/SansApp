import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var MediaRecorder: any;

@Component({
  selector: 'app-sound-graph',
  templateUrl: './sound-graph.component.html',
  styleUrls: ['./sound-graph.component.scss']
})
export class SoundGraphComponent implements OnInit, AfterViewInit {

  private mediaStream: MediaStream;
  private mediaRecorder: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //     navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
    //       this.mediaStream = stream;
    //         // this.video.nativeElement.src = window.URL.createObjectURL(stream);
    //         // this.video.nativeElement.play();
    //         this.mediaRecorder = new MediaRecorder(this.mediaStream);
    //     });

    //     setInterval(() => {
    //       this.sampleAudio();
    //     }, 1000);
    // }
  }

  // private sampleAudio() {
  //   this.mediaRecorder.start();

  //   setTimeout(() => {
  //     this.mediaRecorder.stop();
  //   }, 500);
  // }
}
