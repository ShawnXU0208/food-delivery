import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Owner } from '../model/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient){}

  public login(email: string, password: string){

    return this.http.post<any>(`/owner/login`, {email, password})
      .pipe(map(data => {
        localStorage.setItem("currentUser", JSON.stringify(data));
        localStorage.setItem("currentRole", "owner");

        return data;
      }));
  }

  public register(owner: Owner){
    console.log(owner);
    return this.http.post(`/owner/register`, owner)
      .pipe(map(data => {

        let loggedUser = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone
        };

        localStorage.setItem("currentUser", JSON.stringify(loggedUser));
        localStorage.setItem("currentRole", "owner");

        return data;
      }));
  }

  public logout(){
    localStorage.setItem("currentUser", "");
    localStorage.setItem("currentRole", "");
  }
}
