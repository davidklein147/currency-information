import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CoinModel, listModel } from '../models/list.model';


@Injectable({
  providedIn: 'root'
})
export class ListCurService {

  url = "https://api.coingecko.com/api/v3/coins/list";
  url1 = "https://api.coingecko.com/api/v3/coins/";

  keepAllList: listModel[];
  keepList: listModel[];
  a: listModel[];
  searchList: listModel[] // BehaviorSubject<listModel[]> = new BehaviorSubject<listModel[]>([]);

  constructor(private httpClient: HttpClient) {

  }

  getList(searsh?: string): Observable<listModel[]> {
    if (searsh) {
      if (this.keepAllList) {
        const sea = this.filter(searsh);
        return of(sea);
      } else {
        return this.httpClient.get<listModel[]>(this.url).pipe(
          tap(l => this.keepAllList = l),
          map(l => this.filter(searsh))
        )
      }
    }
    else if (this.keepAllList) {
      return of(this.keepAllList);
    }
    else {
      return this.httpClient.get<listModel[]>(this.url)
        .pipe(tap(l => this.keepAllList = l));
    }
  }

  getCoinList(): Observable<listModel[]> {
    return this.httpClient.get<listModel[]>(this.url)
      .pipe(tap(l => this.keepAllList = l));
  }

  filter(searsh: string): listModel[] {
    this.a = this.keepAllList;
    for (let index = 0; index < searsh.length; index++) {
      this.a = this.a.filter(c => c.symbol[index] === searsh[index])
    }
    return this.a;
  }

  getCoin(coin: string): Observable<CoinModel> {
    return this.httpClient.get<CoinModel>(`${this.url1}${coin}`)
  }


}
