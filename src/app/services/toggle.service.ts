import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CoinModel, listModel } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  listToggle: BehaviorSubject<listModel[]>;
  _listToggle: listModel[] = [];
  more = false;
  SIZE = 2;
  moreThenSize: listModel;
  // ifMore:Observable <boolean>;
  private _myBool: boolean
  constructor() {
    this.listToggle = new BehaviorSubject<listModel[]>(this._listToggle)
    this.boolSubject = new Subject<boolean>();
    this.myBool$ = this.boolSubject.asObservable();
  }

  addId(id: listModel): void {
    if (this.listToggle.value.length < this.SIZE) {
      this._listToggle.push(id);// = [...this._listToggle, id];
      this.update();
      //this.listToggle.next(this._listToggle);
      // this.more = true;
    } else {
      this.moreThenSize = id;
      this.myBool = true;
      console.log(this.moreThenSize);

      // debugger
      // this._listToggle.splice(1,1,id);
      // this._listToggle = [...this._listToggle]
      // this.listToggle.next(this._listToggle);
    }
    // console.log(this.listToggle.value.length);
    // console.log(this.listToggle.value);
  }

  // ifMore():Observable <boolean> {
  //   return this.moreThenSize? true : false;
  // }
  myBool$: Observable<boolean>;

  public boolSubject: Subject<boolean>;

  set myBool(newValue) {
    this._myBool = newValue;    
    this.boolSubject.next(newValue);
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

    // console.log(this.listToggle.value.length);
    // console.log(this.listToggle.value);
  }

  chenchId(): Observable<listModel[]> {
    return this.listToggle;
  }

}
