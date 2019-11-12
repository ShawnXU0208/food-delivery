import { Component, OnInit } from '@angular/core';

import * as globalImgs from '../../assets/images/image.data';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logoImgSrc: string = globalImgs.logoImg;

  public isLogged;
  public firstName;
  public lastName;

  constructor(private customerService: CustomerService){
  	this.isLogged = this.customerService.getLoggedStatus();
  }

  ngOnInit() {
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName = sessionStorage.getItem("lastName");
  }

}