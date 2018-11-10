import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  private isAppReady = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isAppReady = true;
    }, 1500);
  }

  isLoading() {
    return !this.isAppReady;
  }
}
