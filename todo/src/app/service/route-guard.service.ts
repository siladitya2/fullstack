import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import{HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardeCodedAuthenticationService:HardcodedAuthenticationService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this.hardeCodedAuthenticationService.isUserLogggedIn()){
    return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  
}
