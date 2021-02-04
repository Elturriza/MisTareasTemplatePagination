import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public restAp:RestApiService, public router:Router) { }

  canActivate():boolean{
    if(this.restAp.loggedIn()){
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

}
