import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RaffleEntitiesInputFormModule } from '../raffle-entities-input-form/raffle-entities-input-form.module';
import { RaffleResultModule } from '../raffle-result/raffle-result.module';
import { RaffleMonitorComponent } from './raffle-monitor.component';

@NgModule({
  declarations: [RaffleMonitorComponent],
  exports: [RaffleMonitorComponent],
  imports: [CommonModule, RaffleEntitiesInputFormModule, RaffleResultModule],
})
export class RaffleMonitorModule {}
