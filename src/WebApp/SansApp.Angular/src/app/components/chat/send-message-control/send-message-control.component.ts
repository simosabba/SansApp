import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-send-message-control',
  templateUrl: './send-message-control.component.html',
  styleUrls: ['./send-message-control.component.scss']
})
export class SendMessageControlComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            // this.video.nativeElement.src = window.URL.createObjectURL(stream);
            // this.video.nativeElement.play();
        });
    }
  }
}
