import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoinModel, listModel } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  listToggle: BehaviorSubject<listModel[]>;

  constructor() { 
    this.listToggle = new BehaviorSubject<listModel[]>([])
  }

  addId(id:listModel):void{
    
    this.listToggle.next(id);

  }
}
