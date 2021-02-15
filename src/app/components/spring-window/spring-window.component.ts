import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-spring-window',
  templateUrl: './spring-window.component.html',
  styleUrls: ['./spring-window.component.css']
})
export class SpringWindowComponent implements OnInit {
   @Input() name: string;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
