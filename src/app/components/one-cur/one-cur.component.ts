import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, ɵMethodFn } from '@angular/core';
import { CoinModel, listModel } from 'src/app/models/list.model';
import { ListCurService } from 'src/app/services/list-cur.service';

@Component({
  selector: 'app-one-cur',
  templateUrl: './one-cur.component.html',
  styleUrls: ['./one-cur.component.css']
})
export class OneCurComponent implements OnInit {
  
  @Input() idCoin:listModel;

  show :boolean;
  coinData:CoinModel;
  coinCache: object;
  timeOut: any;
  // collapsings:number;
 
 constructor(private listCurService:ListCurService) { 
   this.show = false;
  //  this.collapsings = 0;
   
  //  this.coinData = null;   
  }

  ngOnInit(): void {
    // console.log(this.idCoin);
     
  }

  showContain(): void {
      if (this.show === false) {
      // while(this.collapsings<200){
      //   this.collapsings++;
      // }
      this.show = true;
      this.moreInfo(this.idCoin.id);
    } else {
      this.show = false;
      this.cache();
    }
  }

  moreInfo(coin:string): void {
    if (this.coinCache){
      if(this.timeOut){
        this.clear();
      }
    this.put(this.coinCache);
    // this.coinData = {...this.coinCache};
    // console.log(this.coinData);
    console.log("cache " + this.coinData , this.coinCache);
    } else {
      console.log("servise " + this.coinData , this.coinCache);
      this.listCurService.getCoin(coin).subscribe(c=>{
      this.coinCache = c;
      // this.coinData = {...this.coinCache};
      this.put(this.coinCache);
      })
    } 
  }

  clear(): void{
    clearTimeout(this.timeOut);
  }

  put(coin:any):void{

    // debugger;
    this.coinData = {
            id: coin.id, 
          image: {
              large: coin.image.large,
          },
          market_data: {
              current_price:{
                  ils: coin.market_data.current_price.ils,
                  usd: coin.market_data.current_price.usd,
                  eur: coin.market_data.current_price.eur,
                  }
          }
        }
        
       
        
          
  }

  cache(): void{
    console.log(this.coinData.id);
    // this.coinCache = {...this.coinData};
    this.coinData= null;
    this.timeOut = setTimeout(()=> {
      this.coinCache = undefined;
      console.log(this.coinCache);
    }, 5000);
  }

  log():void{
    console.log(this.idCoin.id);
    
  }

  

}
