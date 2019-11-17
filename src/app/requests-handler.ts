import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { Customer } from './model/customer';
import { Driver } from './model/driver';
import { Owner } from './model/owner';

 

let customers = JSON.parse(localStorage.getItem("customers")) || [];
let drivers = JSON.parse(localStorage.getItem("drivers")) || [];
let owners = JSON.parse(localStorage.getItem("owners")) || [];

@Injectable()
export class RequestsHandler implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const { url, method, headers, body } = request;
    //const {email, password} = body;

    return of(null)  
        .pipe(mergeMap(handleRoute))
        .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(delay(500))
        .pipe(dematerialize());

    function handleRoute(){
      switch (true) {
        case url.endsWith("/customers/login") && method === "POST":
          return loginAuthenticate('customer');

        case url.endsWith("/customers/register") && method === "POST":
          return register('customer');

        case url.endsWith("/driver/login") && method === "POST":
          return loginAuthenticate('driver');

        case url.endsWith("/driver/register") && method === "POST":
          return register('driver');

        case url.endsWith("/owner/login") && method === "POST":
          return loginAuthenticate('owner');

        case url.endsWith("/owner/register") && method === "POST":
          return register('owner');

        default:
            // pass through any requests not handled above
            return next.handle(request);
      }
    }

    function loginAuthenticate(role: string){

      const emailInput = body.email;
      const passwordInput = body.password;

      let userFound;

      switch (role) {
        case "customer":
          userFound = customers.find(registered => registered.email === emailInput);
          break;
        case "driver":
          userFound = drivers.find(registered => registered.email === emailInput);
          break;
        case "owner":
          userFound = owners.find(registered => registered.email === emailInput);
          break;
        
      }


      if(!userFound){
        return error("email address is incorrect!");
      }

      if(userFound.password !== passwordInput){
        return error("password is incorrect!");
      }
  
      return ok({
        firstName: userFound.firstName,
        lastName: userFound.lastName,
        email: userFound.email,
        phone: userFound.phone
      });
    }

    function register(role: string){
      const newUser = body;

      switch (role) {

        case "customer":
          if(customers.find(registered => registered.email === newUser.getEmail())){
            return error('email address is already taken');
          }

          if(customers.find(registered => registered.phone === newUser.getPhone())){
            return error('phone number is already taken');
          }

          customers.push(newUser);
          localStorage.setItem('customers', JSON.stringify(customers));
          break;
        
        case "driver":
          if(drivers.find(registered => registered.email === newUser.getEmail())){
            return error('email address is already taken');
          }

          if(drivers.find(registered => registered.phone === newUser.getPhone())){
            return error('phone number is already taken');
          }

          drivers.push(newUser);
          localStorage.setItem('drivers', JSON.stringify(drivers));
          break;

        case "owner":
          if(owners.find(registered => registered.email === newUser.getEmail())){
            return error('email address is already taken');
          }

          if(owners.find(registered => registered.phone === newUser.getPhone())){
            return error('phone number is already taken');
          }

          owners.push(newUser);
          localStorage.setItem('owners', JSON.stringify(owners));
          break;
      }


      return ok({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone
      });


    }

    function ok(body?) {
        return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
        return throwError({ error: { message } });
    }

  }
}
