import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardHomeService {

  permission = false;

  constructor() { }
}
