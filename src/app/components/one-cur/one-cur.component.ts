import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, ɵMethodFn } from '@angular/core';

import { CoinModel, listModel } from 'src/app/models/list.model';
import { ListCurService } from 'src/app/services/list-cur.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-one-cur',
  templateUrl: './one-cur.component.html',
  styleUrls: ['./one-cur.component.css']
})
export class OneCurComponent implements OnInit, OnChanges {

  @Input() idCoin: listModel;
  @Input() idIndex: Number;
  @Input() statusOrdaly: boolean;
  @Output() moreCoin: EventEmitter<listModel> = new EventEmitter<listModel>();

  show: boolean;
  coinData: CoinModel;
  coinCache: CoinModel;
  timeOut: any;
  toggleList: listModel[];
  checked = false;
  SIZE: number;
  disable: boolean = false;


  constructor(private listCurService: ListCurService, private toggleService: ToggleService) {
    this.show = false;
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.disabled();
    // this.setting();
    // this.a = document.getElementById(`customSwitch${this.idIndex}`)
  }

  ngOnInit(): void {
    this.setting();
    this.SIZE = this.toggleService.SIZE;
  }

  showContain(): void {
    if (this.show === false) {
      this.show = true;
      this.moreInfo(this.idCoin.id);
    } else {
      this.show = false;
      this.cache();
    }
  }

  moreInfo(coin: string): void {
    if (this.coinCache) {
      if (this.timeOut) {
        this.clear();
      }
      this.put(this.coinCache);
      // this.coinData = {...this.coinCache};
      // console.log(this.coinData);
      console.log("cache " + this.coinData, this.coinCache);
    } else {
      console.log("servise " + this.coinData, this.coinCache);
      this.listCurService.getCoin(coin).subscribe(c => {
        this.coinCache = c;
        // this.coinData = {...this.coinCache};
        this.put(this.coinCache);
      })
    }
  }

  clear(): void {
    clearTimeout(this.timeOut);
  }

  put(coin: any): void {
    // debugger;
    this.coinData = {
      id: coin.id,
      image: {
        large: coin.image.large,
      },
      market_data: {
        current_price: {
          ils: coin.market_data.current_price.ils,
          usd: coin.market_data.current_price.usd,
          eur: coin.market_data.current_price.eur,
        }
      }
    }
  }

  cache(): void {
    console.log(this.coinData.id);
    // this.coinCache = {...this.coinData};
    this.coinData = null;
    this.timeOut = setTimeout(() => {
      this.coinCache = undefined;
      console.log(this.coinCache);
    }, 5000);
  }

  toggle(): void {
    if (this.checked === false) {
      if (this.toggleList.length < this.SIZE) {
        this.checked = true;
        this.add(this.idCoin);
      } else {
        if (this.statusOrdaly) {
          this.checked = false;
          this.moreCoin.emit(this.idCoin);
        }
      }
    } else {
      this.checked = false;
      this.cut(this.idCoin);
    }
    // console.log(this.checked);
  }

  disabled(): void{
    this.disable = !this.statusOrdaly;
    // this.setting();
  }

  add(idcoin: listModel): void {
    this.toggleService.addId(idcoin)
  }

  cut(idCoin: listModel) {
    this.toggleService.cutId(idCoin);
  }

  setting(): void {
    this.toggleService.chenchId().subscribe(res => {
      this.toggleList = res;
      if (this.toggleList.find(tog => tog === this.idCoin)) {
        this.checked = true;
      }
    })
  }






}
