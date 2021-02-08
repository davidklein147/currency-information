import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoinModel, listModel } from '../models/list.model';


@Injectable({
  providedIn: 'root'
})
export class ListCurService {

  url= "https://api.coingecko.com/api/v3/coins/list";
  url1="https://api.coingecko.com/api/v3/coins/";

  keepList : listModel[] ;
  a :listModel[];
  searchList: listModel[] // BehaviorSubject<listModel[]> = new BehaviorSubject<listModel[]>([]);

  constructor(private httpClient:HttpClient) { 
    
  }

  getList(coin?:string): Observable <listModel[]>{
    // debugger;
    // const a = undefined;
    if(coin){
      if(this.keepList){
        debugger;
        for (let index = 0; index < coin.length; index++) {
          const b =  this.keepList.filter(c => c.symbol[index] === coin[index])
          this.a = [...b];
          }
          return of(this.a)
      
       // && c.symbol[1] === coin[1] 
        // && c.symbol[2] === coin[2])
      // this.searchList.next(a)
     
    } }
    else if(this.keepList){
      return of (this.keepList);
    
    } else {
    return this.httpClient.get<listModel[]>(this.url)
      .pipe(tap(l => this.keepList = l));
    }
  }

  getCoin(coin:string): Observable <CoinModel>{
    return this.httpClient.get<CoinModel>(`${this.url1}${coin}`)
  }
}
