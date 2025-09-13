import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-live-ticker-4y',
  templateUrl: './live-ticker-4y.component.html',
  styleUrls: ['./live-ticker-4y.component.css']
})
export class LiveTicker4yComponent implements OnInit, OnDestroy {
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
    // Correct implementation with UTC timezone (this is the target pattern)
    this.localTime = new Date().toLocaleTimeString('en-GB', {
      timeZone: 'UTC',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }
}