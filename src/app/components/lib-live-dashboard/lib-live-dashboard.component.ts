import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lib-live-dashboard',
  templateUrl: './lib-live-dashboard.component.html',
  styleUrls: ['./lib-live-dashboard.component.css']
})
export class LibLiveDashboardComponent implements OnInit, OnDestroy {
  localTime: string = '';
  private timeInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.updateTime();
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateTime(): void {
    // Current implementation with Berlin timezone (this is what needs to be fixed)
    this.localTime = new Date().toLocaleTimeString('en-GB', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }
}