import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";

import { Customer } from '../model/customer'; 
import { Driver } from '../model/driver'; 
import { Owner } from '../model/owner'; 
import { CustomerService } from '../services/customer.service';
import { DriverService } from '../services/driver.service';
import { OwnerService } from '../services/owner.service';
import { FormAlertsService } from '../services/form-alerts.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;


  // to store user's role and action
  // used for display different form inputs and execute different commands
  formMode = {
    role: "", //user role. 'customer', 'driver', 'owner'
    action: "" //user action. 'login', 'register'
  };

  submitted = false;



  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private driverService: DriverService,
    private ownerService: OwnerService,
    private router: Router,
    private formAlertService: FormAlertsService
  ){

    switch (true) {

      case this.router.url.includes("customer-login"):
        this.formMode.role = "customer";
        this.formMode.action = "login";
        break;

      case this.router.url.includes("customer-register"):
        this.formMode.role = "customer";
        this.formMode.action = "register";
        break;

      case this.router.url.includes("driver-login"):
        this.formMode.role = "driver";
        this.formMode.action = "login";
        break;

      case this.router.url.includes("driver-register"):
        this.formMode.role = "driver";
        this.formMode.action = "register";
        break;

      case this.router.url.includes("owner-login"):
        this.formMode.role = "owner";
        this.formMode.action = "login";
        break;

      case this.router.url.includes("owner-register"):
        this.formMode.role = "owner";
        this.formMode.action = "register";
        break;
    }
  }

  ngOnInit() {

    switch (true) {

      case this.router.url.includes("login"):
        // when a user(customer, driver or owner) to log in
        this.userForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
        });
        break;

      case this.router.url.includes("customer-register"):
        // when a customer to sign up
        this.userForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          phone: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required]
        });
        break;  

      case this.router.url.includes("driver-register"):
        // when a driver to sign up
        this.userForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          phone: ['', Validators.required],
          email: ['', Validators.required],
          carPlate: ['', Validators.required],
          license: ['', Validators.required],
          password: ['', Validators.required]
        });
        break; 

      case this.router.url.includes("owner-register"):
        // when a restaurant owner to sign up
        this.userForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          phone: ['', Validators.required],
          email: ['', Validators.required],
          company: ['', Validators.required],
          password: ['', Validators.required]
        });
        break; 

    }

  }



  onSubmit(userData){

    this.submitted = true;

    if(this.userForm.invalid){
      return;
    }

    switch (true) {
      //decide form submit function controls depends on user role and action

      case this.router.url.includes("customer-login"):
        // when a customer to log in
        this.customerService.login(userData['email'], userData['password'])
          .pipe(first())
          .subscribe(
            data =>{
              this.formAlertService.successMessage("welcome back " + data.firstName);

              setTimeout(function(){
                window.location.href = "";
              }, 1000);
            },
            error =>{
              this.formAlertService.errorMessage(error.error.message);
            }
          );
        break;

      case this.router.url.includes("customer-register"):
        // when a customer to sign up
        let newCustomer = new Customer(
          userData["firstName"],
          userData['lastName'],
          userData['phone'],
          userData['email'],
          userData['password']
        );

        this.customerService.register(newCustomer)
          .pipe(first())
          .subscribe(
            data => {
              this.formAlertService.successMessage("new customer registration successful");

              setTimeout(function(){
                window.location.href = "";
              }, 1000);
            },
            error =>{
              console.log(error);
              this.formAlertService.errorMessage(error.error.message);
            }
          );
        break; 



      case this.router.url.includes("driver-login"):
        // when a driver to log in
        this.driverService.login(userData['email'], userData['password'])
          .pipe(first())
          .subscribe(
            data =>{
              this.formAlertService.successMessage("welcome back " + data.firstName);

              setTimeout(function(){
                window.location.href = "";
              }, 1000);
            },
            error =>{
              this.formAlertService.errorMessage(error.error.message);
            }
          );
        break;

      case this.router.url.includes("driver-register"):
        // when a driver to sign up
        let newDriver = new Driver(
          userData["firstName"],
          userData['lastName'],
          userData['phone'],
          userData['email'],
          userData['carPlate'],
          userData['license'],
          userData['password']
        );

        this.driverService.register(newDriver)
          .pipe(first())
          .subscribe(
            data => {
              this.formAlertService.successMessage("new driver registration successful");

              setTimeout(function(){
                window.location.href = "";
              }, 1000);
            },
            error =>{
              this.formAlertService.errorMessage(error.error.message);
            }
          );
        break; 


      case this.router.url.includes("owner-login"):
        // when a owner to log in
        this.ownerService.login(userData['email'], userData['password'])
          .pipe(first())
          .subscribe(
            data =>{
              this.formAlertService.successMessage("welcome back " + data.firstName);

              setTimeout(function(){
                window.location.href = "/dashboard(appRight:dashboard/1)";
                //this.router.navigate(['/', { outlets: {primary: ['dashboard'],appRight: ['dashboard'] } }]);
              }, 1000);
            },
            error =>{
              this.formAlertService.errorMessage(error.error.message);
            }
          );
        break;

      case this.router.url.includes("owner-register"):
        // when a driver to sign up
        let newOwner = new Owner(
          userData["firstName"],
          userData['lastName'],
          userData['phone'],
          userData['email'],
          userData['company'],
          userData['password']
        );

        this.ownerService.register(newOwner)
          .pipe(first())
          .subscribe(
            data => {
              this.formAlertService.successMessage("new restaurant owner registration successful");

              setTimeout(function(){
                window.location.href = "/dashboard(appRight:dashboard/1)";
                //this.router.navigate(['/', { outlets: {primary: ['dashboard'],appRight: ['dashboard'] } }]);
              }, 1000);
            },
            error =>{
              this.formAlertService.errorMessage(error.error.message);
            }
          );
        break; 
    }    

  }

}
