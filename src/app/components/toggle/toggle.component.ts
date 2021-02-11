import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  moreList: listModel[] = [];

  constructor(private toggleservice: ToggleService) {
    this.show = false;
  }

  ngOnChanges(changes: SimpleChanges): void {


  }

  ngOnInit(): void {

  }

  moreToggle(): void {
    this.toggleservice.chenchId().subscribe(res => {
      this.moreList = res;
      console.log(this.moreList);
      if (this.moreList.length > 1) {
        this.chengeShow();
      }
    })
  }

  chengeShow(): void {
    this.show = true;
  }

}
