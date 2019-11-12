import { Component, OnInit } from '@angular/core';

//import { restuarants } from '../../assets/restuarants_sample';
import { RestuarantsService } from '../services/restuarants.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  restuarants: any[] = [];
  baseImgUrl = "../../assets/images/";

  constructor(private restuarantsService: RestuarantsService){ }

  ngOnInit() {
    this.restuarantsService.getRestuarants()
      .subscribe((data: any[]) => {
        console.log(data);
        this.restuarants = data;
      });
  }

}
