import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestuarantDetailService } from '../services/restuarant-detail.service';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  id: number;
  restaurantInfo: any = '';
  rates = [false, false, false, false, false];

  constructor(
    private route: ActivatedRoute,
    private restuarantDetailService: RestuarantDetailService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params.id;
        this.restuarantDetailService.getRestuarantInfo(this.id)
          .subscribe((data: any[]) => {
            console.log(data);
            this.restaurantInfo = data;

            //assign rate stars
            for(let i = 0; i < 5; i++){
              if(i < this.restaurantInfo.rate){
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
