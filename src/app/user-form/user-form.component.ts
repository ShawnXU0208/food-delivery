import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";

import { UserService, Customer, Driver, Owner } from '../services/user.service';
import { FormAlertsService } from '../services/form-alerts.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  driverType: string = "part-time";

  passport: File = null;
  passportUrl: any = "../../assets/images/image-upload.png";
  passportValid: boolean = false;

  visa: File = null;
  visaUrl: any = "../../assets/images/image-upload.png";
  visaValid: boolean = false;

  licenseFront: File = null;
  licenseFrontUrl: any = "../../assets/images/image-upload.png";
  licenseFrontValid: boolean = false;

  licenseBack: File = null;
  licenseBackUrl: any = "../../assets/images/image-upload.png";
  licenseBackValid: boolean = false;

  resume: File = null;
  resumeUrl: string = "../../assets/images/file-upload.png";
  resumeName: string = "";
  resumeValid: boolean = false;

  ownerRegister: string = "owner-info";

  logo: File = null;
  logoUrl: any = "../../assets/images/image-upload.png";
  logoValid: boolean = false;

  // to store user's role and action
  // used for display different form inputs and execute different commands
  formMode = {
    role: "", //user role. 'customer', 'driver', 'owner'
    action: "" //user action. 'login', 'register'
  };

  submitted = false;



  constructor(
    private formBuilder: FormBuilder,
    private usersService: UserService,
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
        if(this.driverType == 'part-time'){
          this.userForm = this.formBuilder.group({
            email: ['', Validators.required],
            carPlate: ['', Validators.required],
            carInsurance: [''],
            bankAccount: ['', Validators.required],
            passportUpload: ['', Validators.required],
            visaUpload: ['', Validators.required],
            licenseFrontUpload: ['', Validators.required],
            licenseBackUpload: ['', Validators.required]
          });
        }

        break; 

      case this.router.url.includes("owner-register"):
        // when a restaurant owner to sign up
        this.userForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          mobile: ['', Validators.required],
          email: ['', Validators.required],
          deduction: ['', Validators.required],
          logoUpload: ['', Validators.required],
          tradingName: [''],
          address: ['', Validators.required],
          suburb: ['', Validators.required],
          city: ['', Validators.required],
          postcode: ['', Validators.required],
          contactNumber: ['', Validators.required],
          bankAccountName: ['', Validators.required],
          bankAccountNumber: ['', Validators.required],
          gst: ['', Validators.required],
          operationHour: ['', Validators.required]
        });

        break; 

    }

  }

  clearFileUpload(){
    this.passport = null;
    this.passportUrl = "../../assets/images/image-upload.png";
    this.passportValid = false;

    this.visa = null;
    this.visaUrl = "../../assets/images/image-upload.png";
    this.visaValid = false;

    this.licenseFront = null;
    this.licenseFrontUrl = "../../assets/images/image-upload.png";
    this.licenseFrontValid = false;

    this.licenseBack = null;
    this.licenseBackUrl = "../../assets/images/image-upload.png";
    this.licenseBackValid = false;

    this.resume = null;
    this.resumeUrl = "../../assets/images/file-upload.png";
    this.resumeName = "";
    this.resumeValid = false;    
  }

  driverTypeChange(){
    if(this.driverType == "part-time"){
      this.driverType = "full-time";
      //change form build
      this.userForm = this.formBuilder.group({
        email: ['', Validators.required],
        bankAccount: ['', Validators.required],
        ird: ['', Validators.required],
        resumeUpload: ['', Validators.required],
        passportUpload: ['', Validators.required],
        visaUpload: ['', Validators.required],
        licenseFrontUpload: ['', Validators.required],
        licenseBackUpload: ['', Validators.required]
      });

      this.clearFileUpload();

    }else{
      this.driverType = "part-time";
      //change form build
      this.userForm = this.formBuilder.group({
        email: ['', Validators.required],
        carPlate: ['', Validators.required],
        carInsurance: [''],
        bankAccount: ['', Validators.required],
        passportUpload: ['', Validators.required],
        visaUpload: ['', Validators.required],
        licenseFrontUpload: ['', Validators.required],
        licenseBackUpload: ['', Validators.required]
      });

      this.clearFileUpload();
    }
  }

  fileProgress(fileInput: any, fileField: string){
    switch(fileField){
      case 'passport':
        this.passport = <File>fileInput.target.files[0];
        //show preivew
        if(this.passport.type.match(/image\/*/) == null){
          this.passportValid = false;
          this.passportUrl = "../../assets/images/image-upload.png";
          return;
        }else{
          let reader = new FileReader();
          reader.readAsDataURL(this.passport);
          reader.onload = (_event) => { 
            this.passportUrl = reader.result; 
          }
          this.passportValid = true;
        }

        break;

      case 'visa':
        this.visa = <File>fileInput.target.files[0];
        //show preview
        if(this.visa.type.match(/image\/*/) == null){
          this.visaValid = false;
          this.visaUrl = "../../assets/images/image-upload.png";
          return;
        }else{
          let reader = new FileReader();
          reader.readAsDataURL(this.visa);
          reader.onload = (_event) => {
            this.visaUrl = reader.result;
          }
          this.visaValid = true;
        }

        break;

      case 'licenseFront':
        this.licenseFront = <File>fileInput.target.files[0];
        //show preview
        if(this.licenseFront.type.match(/image\/*/) == null){
          this.licenseFrontValid = false;
          this.licenseFrontUrl = "../../assets/images/image-upload.png";
          return
        }else{
          let reader = new FileReader();
          reader.readAsDataURL(this.licenseFront);
          reader.onload = (_event) => {
            this.licenseFrontUrl = reader.result;
          }
          this.licenseFrontValid = true;
        }

        break

      case 'licenseBack':
        this.licenseBack = <File>fileInput.target.files[0];
        //show preview
        if(this.licenseBack.type.match(/image\/*/) == null){
          this.licenseBackValid = false;
          this.licenseBackUrl = "../../assets/images/image-upload.png";
          return
        }else{
          let reader = new FileReader();
          reader.readAsDataURL(this.licenseBack);
          reader.onload = (_event) => {
            this.licenseBackUrl = reader.result;
          }
          this.licenseBackValid = true;
        }

        break

      case 'resume':
        let validTypes = ['doc', 'pdf', 'txt', 'odf'];
        this.resume = <File>fileInput.target.files[0];

        //show file name
        let nameArray = this.resume.name.split('.');
        if(validTypes.includes(nameArray[nameArray.length - 1].toLowerCase())){
          this.resumeValid = true;
          this.resumeName = this.resume.name;
          this.resumeUrl = "../../assets/images/file.png";
        }else{
          this.resumeValid = false;
          this.resumeUrl = "../../assets/images/file-upload.png";
        }

        break;

      case 'logo':
        this.logo = <File>fileInput.target.files[0];
        let validLogoTypes = ['jpg', 'pdf', 'png'];
        let logoNameArray = this.logo.name.split('.');

        //show preview
        if(this.logo.type.match(/image\/*/) == null || !validLogoTypes.includes(logoNameArray[logoNameArray.length - 1].toLowerCase())){
          this.logoValid = false;
          this.licenseBackUrl = "../../assets/images/image-upload.png";
          return
        }else{
          let reader = new FileReader();
          reader.readAsDataURL(this.logo);
          reader.onload = (_event) => {
            this.logoUrl = reader.result;
          }
          this.logoValid = true;
        }

        break

    }
  }

  ownerRegisterPageChange(){
    if(this.ownerRegister == 'owner-info'){
      this.ownerRegister = 'company-info';
    }else{
      this.ownerRegister = 'owner-info';
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
        this.usersService.userLogin(userData['email'], userData['password'], 'customer')
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

        this.usersService.register(newCustomer, 'customer')
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
        this.usersService.userLogin(userData['email'], userData['password'], 'driver')
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
          userData['password'],
          userData['carPlate'],
          userData['license']
        );

        this.usersService.register(newDriver, 'driver')
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
        this.usersService.userLogin(userData['email'], userData['password'], 'owner')
          .pipe(first())
          .subscribe(
            data =>{
              this.formAlertService.successMessage("welcome back " + data.firstName);

              setTimeout(function(){
                window.location.href = "";
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
          userData['password'],
          userData['company']
        );

        this.usersService.register(newOwner, 'owner')
          .pipe(first())
          .subscribe(
            data => {
              this.formAlertService.successMessage("new restaurant owner registration successful");

              setTimeout(function(){
                window.location.href = "";
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
