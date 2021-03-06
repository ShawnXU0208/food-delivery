import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestuarantsService, Restuarant } from '../services/restuarants.service';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  id: number;
  restuarant: any = {
    name: '',
    open: [0,0,0,0,0,0,0],
    close: [0,0,0,0,0,0,0],
    description: '',
    tags: [],
    address: '',
    email: '',
    phone: '',
    deliveryTime: ''
  };
  rates = [false, false, false, false, false];
  day: number;

  constructor(
    private route: ActivatedRoute,
    private restuarantService: RestuarantsService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');

    const date = new Date();
    this.day = date.getDay();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = +params.id;

        this.restuarantService.getRestuarantById(this.id)
          .subscribe((data: any) => {
            console.log(data);
            this.restuarant = data;
            console.log(this.restuarant);

            //assign rate stars
            for(let i = 0; i < 5; i++){
              if(i < this.restuarant.rate){
                this.rates[i] = true;
              }else{
                this.rates[i] = false;
              }
            }
          });
        //this.initialiseState(); // reset and set based on new parameter this time
    });
  }

}
