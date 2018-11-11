import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent implements OnInit {

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
