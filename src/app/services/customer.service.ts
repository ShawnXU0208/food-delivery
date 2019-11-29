import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Customer } from '../model/customer';




@Injectable()
export class CustomerService {

  constructor(private http: HttpClient){}

  public login(email: string, password: string){

    return this.http.post<any>(`/customers/login`, {email, password})
      .pipe(map(data => {
        localStorage.setItem("currentUser", JSON.stringify(data));
        localStorage.setItem("currentRole", "customer");

        return data;
      }));
  }

  public register(customer: Customer){
    console.log(customer);
    return this.http.post(`/customers/register`, customer)
      .pipe(map(data => {

        let loggedUser = {
          firstName: data['firstName'],
          lastName: data['lastName'],
          email: data['email'],
          phone: data['phone']
        };

        localStorage.setItem("currentUser", JSON.stringify(loggedUser));
        localStorage.setItem("currentRole", "customer");

        return data;
      }));
  }

  public logout(){
    localStorage.setItem("currentUser", "");
    localStorage.setItem("currentRole", "");
  }




}