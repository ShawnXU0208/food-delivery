import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Driver } from '../model/driver'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient){}

  public login(email: string, password: string){

    return this.http.post<any>(`/driver/login`, {email, password})
      .pipe(map(data => {
        localStorage.setItem("currentUser", JSON.stringify(data));
        localStorage.setItem("currentRole", "driver");

        return data;
      }));
  }

  public register(driver: Driver){
    console.log(driver);
    return this.http.post(`/driver/register`, driver)
      .pipe(map(data => {

        let loggedUser = {
          firstName: data['firstName'],
          lastName: data['lastName'],
          email: data['email'],
          phone: data['phone']
        };

        localStorage.setItem("currentUser", JSON.stringify(loggedUser));
        localStorage.setItem("currentRole", "driver");

        return data;
      }));
  }

  public logout(){
    localStorage.setItem("currentUser", "");
    localStorage.setItem("currentRole", "");
  }
}
