import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private boolChek = false;

  constructor(private authService:AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean
    {
      this.authService.boolConfirm.subscribe(bool=>{
        this.boolChek = bool;
      })
      if(!this.boolChek){
        this.router.navigate(["home"])
        return false;
      }
      return this.boolChek
    }


}
