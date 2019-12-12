import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";


//import { restuarants } from '../../assets/restuarants_sample';
import { RestuarantsService } from '../services/restuarants.service';
import { GlobalDataService } from '../services/global-data.service';
import { UserService, Customer, Driver, Owner } from '../services/user.service';
//import { CurrentUserService } from '../services/current-user.service';

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
    private globalDataService: GlobalDataService,
    //private currentUserService: CurrentUserService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ){

    if(this.globalDataService.getCurrentLayout() != 1){
      this.layoutExpand = true;
    }else{
      this.layoutExpand = false;
    }
    //fetch logged user information
    this.loggedUser = this.userService.getLoggedUser();
    console.log(this.loggedUser);
    //console.log(this.loggedUser.getFirstName());

  }

  ngOnInit() {
    //this.globalDataService.changeLayout(1);

    this.restuarantsService.getRestuarants()
      .subscribe((data: any[]) => {
        this.restuarants = data;
        //console.log(this.restuarants);
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
