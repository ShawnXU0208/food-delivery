import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import * as globalImgs from '../../assets/images/image.data';
import { CustomerService } from '../services/customer.service';
import { DriverService } from '../services/driver.service';
import { OwnerService } from '../services/owner.service';
import { CurrentUserService } from '../services/current-user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger("headerActive", [
      state('inactive', style({
        width: "100px",
        height: "100px"
      })),
      state('active', style({
        width: "350px",
        height: "350px"
      })),
      transition("* => *", [
        animate("0.3s ease-in-out")
      ])
    ]),

    trigger("flip", [
      state("inactive", style({
        transform: 'rotate(0deg)',
        opacity: '1',
      })),
      state("inactive", style({
        transform: 'rotate(360deg)',
        opacity: '1',
      })),
      transition("* => *", [
        animate("0.2s ease-in-out")
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  logInfo: any;
  userObj: any;
  active = false;

  public logoImgSrc: string = globalImgs.logoImg;


  constructor(
    private customerService: CustomerService,
    private driverService: DriverService,
    private ownerService: OwnerService,
    private currentUserService: CurrentUserService
  ){
    this.logInfo = this.currentUserService.currentStatus();
    //console.log(this.logInfo.isLogged);
    if(this.logInfo.isLogged){
      this.userObj = JSON.parse(this.logInfo.currentUser);
    }
  }


  onOver(){
    this.active = !this.active;
  }

  ngOnInit() {
  }

  logout(){
    switch (this.logInfo.userRole) {
      case "customer":
        this.customerService.logout();
        window.location.href = "";
      case "driver":
        this.driverService.logout();
        window.location.href = "";
      case "owner":
        this.ownerService.logout();
        window.location.href = "";  
    }

  }


}