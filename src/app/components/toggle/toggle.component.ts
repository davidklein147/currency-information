import { Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
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
  @Output() ordaly: EventEmitter<boolean>;
  isCollapsed = true;
  listToggles: listModel[];
  SIZE: number;
  

  constructor(private toggleservice: ToggleService, private d: NgbModal) {
    this.SIZE = this.toggleservice.SIZE;
    this.ordaly = new EventEmitter<boolean>(true);
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.listToggle();
    this.ordaly.emit(true);
  }
  // open() {
  //   const modalRef = this.d.open(this.d);
  //   modalRef.componentInstance.name = 'World';
  // }

  listToggle(): void {
    this.toggleservice.chenchId().subscribe(res => {
      this.listToggles = res;
    })
  }

  chengeShows():void{
    this.toggleservice.ordaly = true;
  }

 

  setting(): boolean {
    return this.toggleservice.setting(this.moreCoin);
    
  }

  chengeing(id: listModel): void {
    this.toggleservice.cutId(id);
  }

  done(): void {
      if (this.listToggles.length < this.SIZE) {
        this.toggleservice.toggle(this.moreCoin);
        this.chengeShows();
      }

  }
   shows():boolean{
     return !this.toggleservice.ordaly;
   }

}
