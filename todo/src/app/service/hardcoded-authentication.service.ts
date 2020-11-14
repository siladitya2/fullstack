import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(userName:string,password:string): boolean{
    if(userName==="mamai" && password==="test"){
      sessionStorage.setItem("authenticatedUser",userName);
      return true;
    }
    return false;
  }

  isUserLogggedIn():boolean{
    let user=sessionStorage.getItem("authenticatedUser");
    if(!(user===null)){
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem("authenticatedUser");
  }
}
