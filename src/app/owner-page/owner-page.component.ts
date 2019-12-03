import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { RestuarantDetailService } from '../services/restuarant-detail.service';
import { GlobalDataService } from '../services/global-data.service';


@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrls: ['./owner-page.component.css'],
  animations: [
    trigger("selectRestaurant", [
      state("selected", style({
        backgroundColor: '#474ce2',
      })),
       state("unselected", style({
        backgroundColor: '#303752',
      })),  
      transition("* => *", [
        animate('0.2s'),
      ])   
    ])
  ]
})
export class OwnerPageComponent implements OnInit {

  restaurantsOwned = [1,2,3];
  restaruantsInfo = [];
  selected: number;
  layoutExpand: boolean;

  selectedMenu: string = 'home';

  constructor(
    private restaurantDetailService: RestuarantDetailService,
    private route: ActivatedRoute,
    private router: Router,
    private globalDataService: GlobalDataService
  ) {
    //this.selected = +this.route.snapshot.paramMap.get('id');
    this.selected = +this.router.url.charAt(this.router.url.length - 2);
    //alert(this.selected);
    if(this.globalDataService.getCurrentLayout() == 1){
      this.layoutExpand = false;
      this.globalDataService.changeLayout(1);
    }else{
      this.layoutExpand = true;
      this.globalDataService.changeLayout(3);
    }

  }

  ngOnInit() {
    //this.selected = +this.route.snapshot.paramMap.get('id');
    for(let i = 0; i < this.restaurantsOwned.length; i++){
      this.restaurantDetailService.getRestuarantInfo(this.restaurantsOwned[i])
        .subscribe((data: any[]) => {
          this.restaruantsInfo.push(data);
        })
    }

  }

  select(id){
    this.selected = id;
  }

  changeMenu(menu){
    this.selectedMenu = menu;
  }

}
