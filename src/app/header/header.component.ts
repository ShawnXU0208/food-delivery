import { Component, OnInit } from '@angular/core';

import * as globalImgs from '../../assets/images/image.data';
import { CustomerService } from '../services/customer.service';
import { DriverService } from '../services/driver.service';
import { OwnerService } from '../services/owner.service';
import { CurrentUserService } from '../services/current-user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logInfo: any;
  userObj: any;

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



  ngOnInit() {
  }

  customerLogout(){
    this.customerService.logout();
    window.location.href = "";
  }

  driverLogout(){
    this.driverService.logout();
    window.location.href = "";
  }

  ownerLogout(){
    this.ownerService.logout();
    window.location.href = "";
  }


}