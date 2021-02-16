import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private listCurService: ListCurService,
    private activatedRoute: ActivatedRoute,
    private toggleService: ToggleService) {
    this.curList = [];
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

  getLists(): void {
    // debugger
    this.listCurService.getList().subscribe(a => {
      this.curList = a;
      this.arySize = [...this.curList]//.splice(767, 50);
      console.log(this.curList);
    })
  }

  updateToggle(coin: listModel): void {
    this.moreCoin = {...coin};
  }

  updateOrdaly(statusOrdaly: boolean): void {
    this.statusOrdaly = statusOrdaly;
  }

}
