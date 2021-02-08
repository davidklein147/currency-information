import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a: number;
  constructor() {
    this.a=0;
   }

  ngOnInit(): void {
   
  }

  lod(){
    // debugger;
    while(this.a<400){
      this.a++;
    }
  }

}
