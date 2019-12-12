import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


import * as globalImgs from '../../assets/images/image.data';
import { UserService } from '../services/user.service';
import { ShoppingCartService } from '../services/shopping-cart.service';


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

  loggedUser: any;
  userObj: any;
  active = false;

  dashboardPage: boolean = false;

  public logoImgSrc: string = globalImgs.logoImg;


  constructor(
    //private customerService: CustomerService,
    //private driverService: DriverService,
    //private ownerService: OwnerService,
    //private currentUserService: CurrentUserService,
    private usersService: UserService,
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ){
/*
    this.loggedUser = this.usersService.getLoggedUser();
    //console.log(this.logInfo.isLogged);
    if(this.loggedUser){
      this.userObj = JSON.parse(this.logInfo.currentUser);
    }
*/
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        //console.log(event.url);
        if(event.url.includes('dashboard')){
          this.dashboardPage = true;
        }
      });
  }


  onOver(){
    this.active = !this.active;
  }

  ngOnInit() {
  }

  logout(){
   this.usersService.userLogout();
   this.shoppingCartService.clearShoppingCart();
   window.location.href = "";
  }


}