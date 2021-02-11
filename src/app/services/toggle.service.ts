import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoinModel, listModel } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  listToggle: BehaviorSubject<listModel[]>;
  _listToggle: listModel[] = [];
  more = false;
  SIZE = 2;

  constructor() {
    this.listToggle = new BehaviorSubject<listModel[]>(this._listToggle)
  }

  addId(id: listModel): void {
    if (this.listToggle.value.length < this.SIZE) {
      this._listToggle = [...this._listToggle, id];
      this.listToggle.next(this._listToggle);
      this.more = true;

    } else {
// debugger
      this._listToggle.splice(1,1,id);
      this._listToggle = [...this._listToggle]
      this.listToggle.next(this._listToggle);
    }
    console.log(this.listToggle.value.length);
    console.log(this.listToggle.value);
  }

  chenchId(): Observable<listModel[]> {
    return this.listToggle;
  }
}
