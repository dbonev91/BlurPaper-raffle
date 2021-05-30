import { RaffleService } from './shared/services/raffle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'paper-raffle';

  constructor(private raffleService: RaffleService) {}

  ngOnInit() {
    this.raffleService.getRandNumber(77).subscribe((randNumber: any) => {
      console.log('RAND NUMBER:');
      console.log(randNumber);
      console.log('');
    });
  }
}
