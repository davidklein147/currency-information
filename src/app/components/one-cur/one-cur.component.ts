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
  // disable: boolean = this.toggleService.ordaly;
  a: any;


  constructor(private listCurService: ListCurService, private toggleService: ToggleService) {
    this.show = false;
    this.a = document.getElementById(`customSwitch${this.idIndex}`);

  }

  ngAfterViewInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.disabled();

    this.setting();

  }

  ngOnInit(): void {
    this.setting();
    this.settingList();
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
      //  this.coinData = this.coinCache;
      this.put(this.coinCache);
      // console.log("cache " + this.coinData, this.coinCache);
    } else {
      // console.log("servise " + this.coinData, this.coinCache);
      this.listCurService.getCoin(coin).subscribe((c: CoinModel) => {
        this.coinCache = c;
        this.coinData = this.coinCache;
        //this.put(this.coinCache);
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
    }, 2 * 60 * 1000);
  }

  toggle(): void {
    this.toggleService.toggle(this.idCoin);
    this.moreCoin.emit(this.idCoin);
  }

  settingList(): void {
    this.toggleService.chenchId().subscribe(res => {
      this.toggleList = res;
    })
  }

  setting(): boolean {
    return this.toggleService.setting(this.idCoin);

  }

  disable(): boolean {
    return !this.toggleService.ordaly;
  }




}
