import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(username: string, password: string){
    if(username=='lp'&& password=='Sarah'){
      sessionStorage.setItem("authUser", username)
      return true;
    }
    else {
     return false;
    }
  }

  isUserLoggedIn(){
    if((sessionStorage.getItem("authUser")!=null))
      return true;
    else
      return false;
  }

  logOut(){
    sessionStorage.removeItem("authUser");
  }
}
