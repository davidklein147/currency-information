import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { listModel } from 'src/app/models/list.model';
import { ListCurService } from 'src/app/services/list-cur.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  search: string;
  searchList: listModel[];
  

  constructor(private listCurServise:ListCurService) { 
    this.searchList = [];
    this.search = "";

  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
  }

  log(coin:string): void{
    console.log(this.search);
    // debugger;
    this.listCurServise.getList(coin).subscribe(a=>{
      this.searchList = a;
      console.log(this.searchList);
    });
      
      
    
  }   
  
  

}
