import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
