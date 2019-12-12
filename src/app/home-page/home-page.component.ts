import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";


import { RestuarantsService } from '../services/restuarants.service';
import { UserService, Customer, Driver, Owner } from '../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  restuarants: any[] = [];
  baseImgUrl = "../../assets/images/";
  buttonClicked;
  loggedUser: any = false;

  layoutExpand: boolean;

  searchBar: FormGroup;

  constructor(
    private restuarantsService: RestuarantsService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ){

    //fetch logged user information
    this.loggedUser = this.userService.getLoggedUser();
    console.log(this.loggedUser);
    //console.log(this.loggedUser.getFirstName());

  }

  ngOnInit() {

    this.restuarantsService.getRestuarants()
      .subscribe((data: any[]) => {
        this.restuarants = data;
      });

    this.searchBar = this.formBuilder.group({
      queryInput: ['', Validators.required]
    });
  }

  clickButton(number){
    this.buttonClicked = number;
  }

  onSubmit(){
    this.router.navigate(['/', { outlets: {primary: ['restaurant-list'],appRight: ['restaurant-info', 1] } }]);
  }


}
