import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

class User{
  protected id: number;
  protected firstName: string;
  protected lastName: string;
  protected phone: string;
  protected email: string;
  protected password: string;
  protected userRole: string;

  constructor(newFirstName: string, newLastName: string, newPhone: string, newEmail: string, newPassword: string){
    this.firstName = newFirstName;
    this.lastName = newLastName;
    this.phone = newPhone;
    this.email = newEmail;
    this.password = newPassword;
    this.id = 0; //initial id for every new user, will be updated afterwards
  }

  public getId(){
    return this.id;
  }

  public setId(newId){
    this.id = newId;
  }

  public getFirstName(){
    return this.firstName;
  }

  public getLastName(){
    return this.lastName;
  }

  public getPhone(){
    return this.phone;
  }

  public getEmail(){
    return this.email;
  }
}

export class Customer extends User{
  constructor(newFirstName: string, newLastName: string, newPhone: string, newEmail: string, newPassword: string){
      super(newFirstName, newLastName, newPhone, newEmail, newPassword);
      this.userRole = 'customer';
  }
}

export class Driver extends User{
  private carPlate: string;
  private license: string;

  constructor(newFirstName: string, newLastName: string, newPhone: string, newEmail: string, newPassword: string, newCarPlate: string, newLicense: string){
      super(newFirstName, newLastName, newPhone, newEmail, newPassword);
      this.carPlate = newCarPlate;
      this.license = newLicense;
      this.userRole = 'driver';
  }

  public getCarPlate(){
    return this.carPlate;
  }

  public getLicense(){
    return this.license;
  }
}

export class Owner extends User{
  private company: string;

  constructor(newFirstName: string, newLastName: string, newPhone: string, newEmail: string, newPassword: string, newCompany: string){
      super(newFirstName, newLastName, newPhone, newEmail, newPassword);
      this.company = newCompany;
      this.userRole = 'owner';
  }

  public getCompany(){
    return this.company;
  }
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: any = [];
  private nextId = 1;
  private loggedUser: any;


  constructor(
    private http: HttpClient
  ){

    this.getUsers().subscribe((data) => {
      this.users = data;
      for(const user of this.users){
        //find the next available id number for new registered user
        if(user.id >= this.nextId){
          this.nextId = user.id + 1;
        }
      }
      console.log(this.users);
    });
  }

  public getLoggedUser(){
    // return user object
    return JSON.parse(localStorage.getItem("loggedUser")) || false;
  }

  public updateLoggedUser(){
    localStorage.setItem("loggedUser", this.loggedUser);
  }

  public getUsers(){
    return this.http.get("/api/users");
  }

  public updateCurrentUser(userData){
   // localStorage.setItem('currentUser', );
  }

  public userLogin(email: string, password: string, userRole: string){
    return this.http.post<any>("/api/user/login", {email, password, userRole})
      .pipe(map(data => {

        let userObj;
        
        switch (userRole){
          case 'customer':
            userObj = new Customer(data.firstName, data.lastName, data.phone, data.email, data.password);
            userObj.setId(data.id);
            break;
          case 'driver':
            userObj = new Driver(data.firstName, data.lastName, data.phone, data.email, data.password, data.carPlate, data.license);
            userObj.setId(data.id);
            break;
          case 'owner':
            userObj = new Owner(data.firstname, data.lastName, data.phone, data.email, data.password, data.company);
            userObj.setId(data.id);
            break;
        }

        this.loggedUser = JSON.stringify(userObj);
        this.updateLoggedUser();

        return data;
      }));
  }

  public register(user: any, userRole: string){
    user.setId(this.nextId);
    this.nextId += 1;
    return this.http.post<any>("/api/user/register", {user, userRole})
      .pipe(map(data => {
        this.loggedUser = JSON.stringify(data);
        this.updateLoggedUser();
        return data;
      }));    
  }

  public userLogout(){
    this.loggedUser = false;
    this.updateLoggedUser();
  }
}








