import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

//import { Customer } from './model/customer';
//import { Driver } from './model/driver';
//import { Owner } from './model/owner';

 

//let customers = JSON.parse(localStorage.getItem("customers")) || [];
//let drivers = JSON.parse(localStorage.getItem("drivers")) || [];
//let owners = JSON.parse(localStorage.getItem("owners")) || [];

let users = JSON.parse(localStorage.getItem("users")) || [];
let restuarants = JSON.parse(localStorage.getItem("restuarants")) || [];
let menus = JSON.parse(localStorage.getItem("menu")) || [];

@Injectable()
export class RequestsHandler implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const { url, method, headers, body, params } = request;
    //const {email, password} = body;

    return of(null)  
        .pipe(mergeMap(handleRoute))
        .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(delay(500))
        .pipe(dematerialize());

    function handleRoute(){
      switch (true) {

        case url.endsWith("/api/users") && method === "GET":
          return usersList();

        case url.endsWith("/api/user/login") && method === "POST":
          return loginAuthenticate();

        case url.endsWith("/api/user/register") && method === "POST":
          return register();

        case url.endsWith("/api/restuarants") && method === "GET":
          if(params.get('id')){
            //console.log(params.get('id'));
            return restuarantById(+params.get('id'));
          }else{
            return restuarantsList();
          }

        case url.endsWith("/api/restuarants/add") && method === "POST":
          return addRestuarant();

        case url.endsWith("/api/menus") && method === "GET":
          if(params.get('rid')){
            return menuOfRestuarant(+params.get('rid'));
          }else if(params.get('mid')){
            //return menuList();
            return menuById(+params.get('mid'));
          }else{
            return menuList();
          }

        case url.endsWith("/api/menus/add") && method === "POST":
          return addMenuItem();


        default:
            // pass through any requests not handled above
            return next.handle(request);
      }
    }

    function usersList(){
      return ok(users);
    }

    function restuarantsList(){
      return ok(restuarants);
    }

    function restuarantById(id: number){
      let restuarantFound = restuarants.find(restuarant => restuarant.id == id);
      return ok(restuarantFound);
    }

    function addRestuarant(){
      const newRestuarant = body.newRestuarant;
      restuarants.push(newRestuarant);
      localStorage.setItem("restuarants", JSON.stringify(restuarants));
      return ok(newRestuarant);
    }

    function menuList(){
      return ok(menus);
    }

    function addMenuItem(){
      const newMenuItem = body.newMenuItem;
      menus.push(newMenuItem);
      localStorage.setItem("menu", JSON.stringify(menus));
      console.log(newMenuItem);
      return ok(newMenuItem);
    }

    function menuOfRestuarant(id: number){
      //let memuList = [];
      let menuFound = menus.filter(menu => menu.restuarantId == id);
      return ok(menuFound);
    }

    function menuById(id: number){
      let menuFound = menus.find(menu => menu.id == id);
      return ok(menuFound);
    }

    function loginAuthenticate(){

      const emailInput = body.email;
      const passwordInput = body.password;
      const userRole = body.userRole;

      let userFound = users.find(user => user.email === emailInput);


      if(!userFound){
        return error("email address is incorrect!");
      }

      if(userFound.password !== passwordInput){
        return error("password is incorrect!");
      }

      switch (userRole){
        case 'customer':
          return ok({
            id: userFound.id,
            firstName: userFound.firstName,
            lastName: userFound.lastName,
            email: userFound.email,
            phone: userFound.phone,
            userRole: userFound.userRole
          });  

          break;    

        case 'driver':
          return ok({
            id: userFound.id,
            firstName: userFound.firstName,
            lastName: userFound.lastName,
            email: userFound.email,
            phone: userFound.phone,
            userRole: userFound.userRole,
            carPlate: userFound.carPlate,
            license: userFound.license
          }); 

          break;  

        case 'owner':
          return ok({
            id: userFound.id,
            firstName: userFound.firstName,
            lastName: userFound.lastName,
            email: userFound.email,
            phone: userFound.phone,
            userRole: userFound.userRole,
            company: userFound.company
          });    

          break;      
      }
 
    }

    function register(){
      const newUser = body.user;
      const userRole = body.userRole;

      if(users.find(user => user.email === newUser.getEmail() && user.userRole === userRole)){
        return error('email address is already taken');
      }

      if(users.find(user => user.phone === newUser.getPhone() && user.userRole === userRole)){
        return error('phone number is already taken');
      }

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      return ok(newUser);


    }

    function ok(body?) {
        return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
        return throwError({ error: { message } });
    }

  }
}
