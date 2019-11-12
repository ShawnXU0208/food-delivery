import { Component, OnInit, Input } from '@angular/core';

import { RestuarantDetailService } from '../services/restuarant-detail.service';

@Component({
  selector: 'app-menu-of-category',
  templateUrl: './menu-of-category.component.html',
  styleUrls: ['./menu-of-category.component.css']
})
export class MenuOfCategoryComponent implements OnInit {

  @Input() categoryName: string;

  menuItems: any[] = [];

  constructor(private restuarantDetailService: RestuarantDetailService){
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['categoryName'].firstChange == false){
      this.getMenu();
    }
  }

  getMenu(){
    //clear menu list
    this.menuItems = [];

    this.restuarantDetailService.getMenu()
      .subscribe((data: any[]) => {
        console.log(data);
        for(let menu of data){
          //this.menuCategories.add(menu['category']);
          if(this.categoryName == menu['category']){
            this.menuItems.push(menu);
          }
        }
      });    
  }

}
