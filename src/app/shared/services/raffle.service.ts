import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RAFFLE_URL } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RaffleService {
  constructor(private http: HttpClient) {}

  getRandNumber(end: number, start: number = 0): Observable<any> {
    return this.http.get(
      `${RAFFLE_URL}/get-rand-number-in-range/${end}/${start}`
    );
  }
}
