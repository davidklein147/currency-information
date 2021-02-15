import { Component, Input, OnChanges, OnInit, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { listModel } from 'src/app/models/list.model';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit, OnChanges {
  @Input() moreCoin: listModel;
  @Output() ordaly: EventEmitter<boolean> ;
  isCollapsed = true;
  show: boolean;
  listToggles: listModel[];
  SIZE: number;
  moreThenSize: boolean;

  constructor(private toggleservice: ToggleService, private d: NgbModal) {
    this.show = false;
    this.SIZE = this.toggleservice.SIZE;
    this.ordaly = new EventEmitter<boolean>(true);
   
  }

  ngOnChanges(): void {
    // this.moreThenSize = this.toggleservice.ifMore();
    // this.moreToggle()
    this.chengeShow()
    
  }

  ngOnInit(): void {
    this.listToggle();
    this.ordaly.emit(true);
    // this.moreThenSize = this.toggleservice.moreThenSize;
  }
  // open() {
  //   const modalRef = this.d.open(this.d);
  //   modalRef.componentInstance.name = 'World';
  // }

  listToggle(): void {
    this.toggleservice.chenchId().subscribe(res => {
      this.listToggles = res;
      // console.log(this.listToggles);
    })
  }

  // getStatus(): void {
  //   this.toggleservice.boolSubject.subscribe((newBool: boolean) => {
  //     this.moreThenSize = newBool;
  //     console.log('more then 2');

  //     this.chengeShow();
  //   });
  // }
  // moreToggle(): void {
  //   if (this.moreThenSize) {
  //     this.chengeShow();
  //   }
  // }

  chengeShow(id?:listModel): void {
    if(id){
      delete this.moreCoin
      this.show = false;
      this.ordaly.emit(true);
    }
    else if (this.moreCoin) {
      if(!this.show){
      this.show = true;
      this.ordaly.emit(false);
      console.log(this.moreCoin);
      } else{
        this.show = false;
        this.ordaly.emit(true);
      }
      
    }
    // this.show = !this.show ? true : false;
  }

  chengeing(id:listModel):void{
    this.toggleservice.cutId(id);
  }

  done(coin:listModel):void{
    console.log(this.listToggles);
    
    if(this.listToggles.length < this.SIZE){
      this.toggleservice.addId(coin);
      this.chengeShow();
    }
    
  }

}
