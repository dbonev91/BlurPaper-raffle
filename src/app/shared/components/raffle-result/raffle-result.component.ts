import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-raffle-result',
  templateUrl: './raffle-result.component.html',
  styleUrls: ['./raffle-result.component.scss'],
})
export class RaffleResultComponent {
  @Input() set resultEntity(resultEntity: string) {
    this.resultEntityValue = resultEntity;
  }

  resultEntityValue: string = '';
}
