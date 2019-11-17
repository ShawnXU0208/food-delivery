import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {


  constructor() {
  }

  public currentStatus(): any{
    let currentUser = localStorage.getItem("currentUser");
    let currentRole = localStorage.getItem("currentRole");
    let isLogged = false;
    if(currentUser){
      isLogged = true;
    }

    return {
      isLogged: isLogged,
      currentUser: currentUser,
      userRole: currentRole
    };
  }
}
