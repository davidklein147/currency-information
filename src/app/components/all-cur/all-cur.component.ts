import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { listModel } from 'src/app/models/list.model';
import { ListCurService } from 'src/app/services/list-cur.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-all-cur',
  templateUrl: './all-cur.component.html',
  styleUrls: ['./all-cur.component.css']
})
export class AllCurComponent implements OnInit {


  curList: listModel[];
  arySize: listModel[];
  moreCoin: listModel;
  statusOrdaly: boolean;
  time = 0;


  constructor(private listCurService: ListCurService,
    private activatedRoute: ActivatedRoute,
    private toggleService: ToggleService,
    config: NgbProgressbarConfig) {
    this.curList = [];

    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'primary';
    config.height = '50px';
    this.setTime();
  }

  ngOnInit(): void {

    // debugger;
    this.activatedRoute.paramMap.subscribe(co => {
      const coins = co.get('name');
      // debugger;
      if (coins) {
        this.listCurService.getList(coins).subscribe(a => {
          this.curList = a;

          this.arySize = [...this.curList]//.splice(767, 50);
          console.log(this.curList);
        })
      } else {
        this.getLists();
      }
    })
    // this.getLists();  
  }

  setTime(): number {
    setInterval(() => {
      if (this.time < 1000) {
        this.time = this.time + 1
      }
      
    }, 7)
    return this.time;
  }

  getLists(): void {
    // debugger
    this.listCurService.getList().subscribe(a => {
      this.curList = a;
      // this.setTime();
      this.arySize = [...this.curList].splice(767, 50);
      console.log(this.curList);
    })
  }

  updateToggle(coin: listModel): void {
    this.moreCoin = { ...coin };
  }

  updateOrdaly(statusOrdaly: boolean): void {
    this.statusOrdaly = statusOrdaly;
  }

}
