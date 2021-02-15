import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { listModel } from 'src/app/models/list.model';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit, OnChanges {
  isCollapsed = true;
  show: boolean;
  moreList: listModel[];
  SIZE:number;
  moreThenSize : boolean;

  constructor(private toggleservice: ToggleService, private d: NgbModal) {
    this.show = false;
    this.SIZE = this.toggleservice.SIZE;
    


  }

  ngOnChanges(): void {
    // this.moreThenSize = this.toggleservice.ifMore();
    this.moreToggle()

  }

  ngOnInit(): void {
    this.listToggle();
    // this.moreThenSize = this.toggleservice.moreThenSize;
  }
  open() {
    const modalRef = this.d.open(this.d);
    modalRef.componentInstance.name = 'World';
  }

  listToggle(): void {
    this.toggleservice.chenchId().subscribe(res => {
      this.moreList = res;
      console.log(this.moreList);
    })
  }

  getStatus(): void {
    this.toggleservice.boolSubject.subscribe((newBool: boolean) => { this.moreThenSize = newBool; 
      console.log('more then 2');
      
      this.chengeShow();
    });
  }
  moreToggle(): void {
    if (this.moreThenSize) {
      this.chengeShow();
    }
  }

  chengeShow(): void {
    this.show = !this.show? true : false;   
  }

}
