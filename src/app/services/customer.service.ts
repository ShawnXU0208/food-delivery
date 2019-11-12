import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Customer } from '../../model/customer';




@Injectable()
export class CustomerService {
  //private baseURL: string = "http://localhost:8888/foodDelivery/api/user/create.php";
  private isLogged;
  private apiURL = "http://localhost:4200/api/customers";

  constructor(private http: HttpClient) {
    this.isLogged = true;
  }

/*
  createNewCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(
      this.baseURL,
      customer,
      httpOptions
    );
  }
*/
  getLoggedStatus(){
    return this.isLogged;
  }

  logout(){
    this.isLogged = false;
  }

  login(){
    this.isLogged = true;
  }

}