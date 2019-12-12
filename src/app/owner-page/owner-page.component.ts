import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { RestuarantsService } from '../services/restuarants.service';
import { PageLayoutService } from '../services/page-layout.service';


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
    private restuarantService: RestuarantsService,
    private route: ActivatedRoute,
    private router: Router,
    private pageLayoutService: PageLayoutService
  ) {
    //this.selected = +this.route.snapshot.paramMap.get('id');
    this.selected = +this.router.url.charAt(this.router.url.length - 2);
    //alert(this.selected);
    
    if(this.pageLayoutService.getLayout() == 1){
      this.layoutExpand = false;
    }else{
      this.layoutExpand = true;
    }
    
    
  }

  ngOnInit() {
    //this.selected = +this.route.snapshot.paramMap.get('id');
    for(let i = 0; i < this.restaurantsOwned.length; i++){
      this.restuarantService.getRestuarantById(this.restaurantsOwned[i])
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
