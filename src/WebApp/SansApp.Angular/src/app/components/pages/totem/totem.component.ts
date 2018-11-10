import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totem',
  templateUrl: './totem.component.html',
  styleUrls: ['./totem.component.scss']
})
export class TotemComponent implements OnInit {

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
