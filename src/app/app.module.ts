import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibLiveDashboardComponent } from './components/lib-live-dashboard/lib-live-dashboard.component';
import { LiveTicker4yComponent } from './components/live-ticker-4y/live-ticker-4y.component';
import { A15andD15PuntualityComponent } from './components/a15-and-d15-puntuality/a15-and-d15-puntuality.component';
import { MultiLiveTickerComponent } from './components/multi-live-ticker/multi-live-ticker.component';

@NgModule({
  declarations: [
    LibLiveDashboardComponent,
    LiveTicker4yComponent,
    A15andD15PuntualityComponent,
    MultiLiveTickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    LibLiveDashboardComponent,
    LiveTicker4yComponent,
    A15andD15PuntualityComponent,
    MultiLiveTickerComponent
  ]
})
export class AppModule { }