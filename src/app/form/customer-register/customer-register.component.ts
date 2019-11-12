import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Customer } from '../../../model/customer'; 
import { CustomerService } from '../../services/customer.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  customerRegisterForm;
  newCustomer = new Customer();

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ){ }

  ngOnInit() {
    this.customerRegisterForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: ''
    });
  }



  onSubmit(customerData){
    console.warn(customerData['firstName']);

    // assign values to Customer Instance from form inputs
    this.newCustomer.setFirstName(customerData['firstName']);
    this.newCustomer.setLastName(customerData['lastName']);
    this.newCustomer.setEmail(customerData['email']);
    this.newCustomer.setPhone(customerData['phoneNumber']);
    this.newCustomer.setPassword(customerData['password']);
    this.newCustomer.setUserRole(1);

    // try to create the new user
    //this.customerService.createNewCustomer(this.newCustomer);
    this.customerService.login();
    sessionStorage.setItem("firstName", customerData['firstName']);
    sessionStorage.setItem("lastName", customerData['lastName']);

    // navigate to home
    //this.router.navigateByUrl("").then(window.location.reload());
    window.location.href = "";

  }

}