import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CoinModel } from 'src/app/models/list.model';

@Component({
  selector: 'app-more-data',
  templateUrl: './more-data.component.html',
  styleUrls: ['./more-data.component.css']
})
export class MoreDataComponent implements OnInit, OnChanges, OnDestroy {

  @Input() coinData: CoinModel;

  aryKay: string[] = [];
  aryValues:string[]= [];
  curencyKay =  {
    ils: 0,
    usd: 0,
    eur: 0
  }

  
  constructor( ) { }

  ngOnDestroy(): void {
    this.coinData =null;
    
  }

 

  ngOnChanges(): void {
    if(this.coinData){
    this.displaying(this.coinData);
    }
  }
 

  ngOnInit(): void {
   
  }

  displaying(coin: CoinModel): void { 
    var i  = 0;
    for (const key in this.curencyKay) {
      
      this.aryKay[i] = key.toUpperCase();
      this.aryValues[i] = coin.market_data.current_price[key];
      i++
      }      
      console.log(this.aryKay);
    
    
    // while (this.aryValues.length < 3) {
    //   for (const[key, value] of Object.entries(this.coinData.market_data.current_price)) {
    //   //  var a = this.currencyPipe.transform(value,key)
    //     var a = (`${key} ${value}`);
    //     this.aryValues.push(a)
    //   } 
    // }
    
    console.log(this.aryValues);
  }

  
  
  
  log(): void {
    console.log(this.coinData);
    
  }

}
