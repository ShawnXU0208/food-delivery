import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { Customer } from '../../../model/customer'; 
import { CustomerService } from '../../services/customer.service';
import { Router } from "@angular/router";

@Component({
	selector: 'app-customer-login',
	templateUrl: './customer-login.component.html',
	styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

	customerLoginForm;
	newCustomer = new Customer();

	constructor(
	    private formBuilder: FormBuilder,
	    private customerService: CustomerService,
	    private router: Router
	) { }

  	ngOnInit() {
	    this.customerLoginForm = this.formBuilder.group({
	      firstName: '',
	      email: '',
	      password: ''
	    });
  	}

	onSubmit(customerData){
	console.warn(customerData['firstName']);

	// assign values to Customer Instance from form inputs
	// TODO: get data from database and assign to the object
	this.newCustomer.setFirstName(customerData['firstName']);
	this.newCustomer.setEmail(customerData['email']);
	this.newCustomer.setPassword(customerData['password']);

	// try to create the new user
	//this.customerService.createNewCustomer(this.newCustomer);
	this.customerService.login();
	sessionStorage.setItem("firstName", customerData['firstName']);

	// navigate to home
	//this.router.navigateByUrl("").then(window.location.reload());
	window.location.href = "";

	}

}