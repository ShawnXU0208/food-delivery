import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

import { RestuarantsService } from '../services/restuarants.service';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  animations: [
    trigger('imageDarkness', [
      state('mouseOut', style({
        filter: 'brightness(50%)',
      })),
       state('mouseOver', style({
        filter: 'brightness(100%)',
      })),  
      transition('mouseOver => mouseOut', [
        animate('0.2s ease-in')
      ]),
      transition('mouseOut => mouseOver', [
        animate('0.5s ease-in')
      ]) 
    ]),

    trigger('nameDisappear', [
      state('mouseOut', style({
        opacity: '1',
      })),
       state('mouseOver', style({
        opacity: '0',
      })),  
      transition('mouseOver => mouseOut', [
        animate('0.2s ease-in')
      ]),
      transition('mouseOut => mouseOver', [
        animate('0.5s ease-in')
      ]) 
    ])

  ]
})
export class RestaurantListComponent implements OnInit {

  restaurantId: number = 1;
  restaurants: any[] = [];

  constructor(
    private restaurantsService: RestuarantsService,
    private globalDataService: GlobalDataService
  ) {
    //this.globalDataService.changeExpandPrimary(false);
  }

  ngOnInit() {
    this.globalDataService.changeLayout(1);
    this.restaurantsService.getRestuarants()
      .subscribe((data: any[]) => {
        //console.log(data);
        this.restaurants = data;
      });
  }

  onVisit(number){
    this.restaurantId = number;
  }


}
