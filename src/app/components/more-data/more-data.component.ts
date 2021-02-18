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

  aryValues: string[]= [];

  constructor() { }

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
    while (this.aryValues.length < 3) {
      for (const[key, value] of Object.entries(coin.market_data.current_price)) {
        var b = new CurrencyPipe("ILS")
        var c = b.transform(value)
        var a = (`${c} ${value}`);
        this.aryValues.push(a)
      } 
    }
    
    console.log(this.aryValues);
  }

  
  
  
  log(): void {
    console.log(this.coinData);
    
  }

}
