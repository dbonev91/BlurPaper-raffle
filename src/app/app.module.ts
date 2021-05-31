import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaffleMonitorModule } from './shared/components/raffle-monitor/raffle-monitor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RaffleMonitorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
