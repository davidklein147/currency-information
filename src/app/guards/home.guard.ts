import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardHomeService } from '../services/guard-home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

constructor(private guardHome: GuardHomeService){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.guardHome.permission;
  }
  
}
