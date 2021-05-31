import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RaffleEntitiesInputFormComponent } from './raffle-entities-input-form.component';

@NgModule({
  declarations: [RaffleEntitiesInputFormComponent],
  exports: [RaffleEntitiesInputFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RaffleEntitiesInputFormModule {}
