import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatURL } from '../helpers/url/url.helper';

@Injectable({
  providedIn: 'root',
})
export class RaffleService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = formatURL(environment.PAPER_RAFFLE_MICROSERVICE_PORT);
  }

  getRandNumber(end: number, start: number = 0): Observable<any> {
    return this.http.get(
      `${this.url}/get-rand-number-in-range/${end}/${start}`
    );
  }
}
