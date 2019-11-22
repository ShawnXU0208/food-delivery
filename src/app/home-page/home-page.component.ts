import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";


//import { restuarants } from '../../assets/restuarants_sample';
import { RestuarantsService } from '../services/restuarants.service';
import { GlobalDataService } from '../services/global-data.service';
import { CurrentUserService } from '../services/current-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [

    // animation triggers go here
    trigger("clickButton", [
      state("unclicked", style({
        background: 'none',
        color: '#74b9ff',
        border: '2px solid #74b9ff',
      })),
      state("clicked", style({
        backgroundColor: '#74b9ff',
        border: 'none',
        color: 'white',
      })),
      transition("unclicked <=> clicked", [
        animate('0.2s'),
      ])
    ]),
  ]
})
export class HomePageComponent implements OnInit {

  restuarants: any[] = [];
  baseImgUrl = "../../assets/images/";
  buttonClicked;
  logInfo: any;
  userObj: any;

  searchBar: FormGroup;

  constructor(
    private restuarantsService: RestuarantsService,
    private globalDataService: GlobalDataService,
    private currentUserService: CurrentUserService,
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.globalDataService.changeExpandPrimary(false);

    //fetch logged user information
    this.logInfo = this.currentUserService.currentStatus();
    //console.log(this.logInfo.isLogged);
    if(this.logInfo.isLogged){
      this.userObj = JSON.parse(this.logInfo.currentUser);
    }
  }

  ngOnInit() {
    this.restuarantsService.getRestuarants()
      .subscribe((data: any[]) => {
        console.log(data);
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
