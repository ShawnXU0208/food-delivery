import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

import { RestuarantDetailService } from '../services/restuarant-detail.service';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-restuarant-detail',
  templateUrl: './restuarant-detail.component.html',
  styleUrls: ['./restuarant-detail.component.css'],
  animations: [
    trigger("categorySelected", [
      state('selected', style({
        backgroundColor: '#de85bd',
        color: 'white'
      })),
      state('unselected', style({
        background: 'none',
        color: '#de85bd'
      })),
      transition('* => *', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class RestuarantDetailComponent implements OnInit {


  //info_name: string;
  id: number;
  restuarantInfo: any = "";
  menuCategories;
  selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private restuarantDetailService: RestuarantDetailService,
    private globalDataService: GlobalDataService
  ){
    this.id = +this.route.snapshot.paramMap.get('id');
    this.menuCategories = new Set();
    //this.globalDataService.changeExpandPrimary(true);
  }

  ngOnInit() {
    this.globalDataService.changeLayout(2);

    this.restuarantDetailService.getRestuarantInfo(this.id)
      .subscribe((data: any[]) => {
        this.restuarantInfo = data;
      });

    this.restuarantDetailService.getMenu()
      .subscribe((data: any[]) => {
        console.log(data);
        this.selectedCategory = data[0]['category'];
        for(let menu of data){
          this.menuCategories.add(menu['category']);
        }
      });


  }

  changeCategory(category): void{
    this.selectedCategory = category;
  }

}
