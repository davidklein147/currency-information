import { Component, OnInit } from '@angular/core';
import { listModel } from 'src/app/models/list.model';
import { ListCurService } from 'src/app/services/list-cur.service';

@Component({
  selector: 'app-all-cur',
  templateUrl: './all-cur.component.html',
  styleUrls: ['./all-cur.component.css']
})
export class AllCurComponent implements OnInit {

  curList:listModel[];
  arySize:listModel[];

  constructor(private listCurService:ListCurService) { 
    this.curList = [];
  }

  ngOnInit(): void {
      this.getLists();
  }

  getLists(): void {
    this.listCurService.getList().subscribe(a=>{
      this.curList = a; 
      this.arySize = this.curList.splice(767, 50);
      console.log(this.curList); 
    })
  }

}
