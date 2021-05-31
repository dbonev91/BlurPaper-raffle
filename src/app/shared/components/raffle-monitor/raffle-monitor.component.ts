import { IRandNumber } from './../../models/rand-number.interface';
import { Component } from '@angular/core';
import { RaffleService } from '../../services/raffle.service';
import { IEntitiesinputData } from '../../models/entities-input-data.interface';

@Component({
  selector: 'app-raffle-monitor',
  templateUrl: './raffle-monitor.component.html',
  styleUrls: ['./raffle-monitor.component.scss'],
})
export class RaffleMonitorComponent {
  isShuffling: boolean = false;
  entitiesData: IEntitiesinputData | null = null;
  randEntityValue: string | null = null;
  textareaValue: string | null = null;

  constructor(private raffleService: RaffleService) {}

  handleEntitiesData(entitiesData: IEntitiesinputData) {
    if (
      !entitiesData ||
      !entitiesData.entitiesArray ||
      !entitiesData.entitiesArray.length
    ) {
      return;
    }

    this.isShuffling = true;
    this.entitiesData = entitiesData;
    const entitiesArray: string[] = this.entitiesData.entitiesArray;
    this.textareaValue = this.entitiesData.textareaValue;

    this.raffleService
      .getRandNumber(this.entitiesData.entitiesArray.length)
      .toPromise()
      .then((value: IRandNumber) => {
        this.isShuffling = false;
        this.randEntityValue = entitiesArray[value.randomInt];
      });
  }

  backToForm() {
    this.randEntityValue = null;
  }
}
