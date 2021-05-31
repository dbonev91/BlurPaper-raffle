import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RaffleResultComponent } from './raffle-result.component';

@NgModule({
  declarations: [RaffleResultComponent],
  exports: [RaffleResultComponent],
  imports: [CommonModule],
})
export class RaffleResultModule {}
