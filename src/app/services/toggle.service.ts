import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CoinModel, listModel } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  listToggle: BehaviorSubject<listModel[]>;
  _listToggle: listModel[] = [];
  find: listModel = {
    id: "",
    symbol: "",
    name: ""
  }
  SIZE = 2;
  moreThenSize: listModel;
  ordaly = true;


  constructor() {
    this.listToggle = new BehaviorSubject<listModel[]>(this._listToggle)

  }

  setting(idCoin: listModel):  boolean {
    if (!this._listToggle) {
      return false
    } else {
      const t = this._listToggle.findIndex(tog => tog === idCoin)
      return t > -1 ? true : undefined;
    }
  }

  toggle(idCoin: listModel): void {
    debugger;
    this.find = this._listToggle.find(find => find === idCoin)
    console.log(this.find);
    if (this.find!== idCoin) {
      if (this._listToggle.length < this.SIZE) {
        this.addId(idCoin);
        this.ordaly = true;
      } else {
        this.ordaly = false;
      }
    } else {
      this.cutId(idCoin);
    }
    
  }

  addId(id: listModel): void {
    this._listToggle.push(id);
    this.update();
  }

  cutId(id: listModel): void {
    const index = this._listToggle.findIndex(find => find === id);
    if (index > -1) {
      this._listToggle.splice(index, 1);
      this.update();
    }
  }

  update(): void {
    this._listToggle = [...this._listToggle]
    this.listToggle.next(this._listToggle);

    console.log(this.listToggle.value.length);
    console.log(this.listToggle.value);
  }

  chenchId(): Observable<listModel[]> {
    return this.listToggle;
  }

}
