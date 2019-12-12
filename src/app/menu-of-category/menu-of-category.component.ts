import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { RestuarantsService } from '../services/restuarants.service';

@Component({
  selector: 'app-menu-of-category',
  templateUrl: './menu-of-category.component.html',
  styleUrls: ['./menu-of-category.component.css']
})
export class MenuOfCategoryComponent implements OnInit {

  @Input() categoryName: string;
  @Input() restuarantId: number;
  @Input() customerLogged: boolean;

  menuItems: any[] = [];

  constructor(private restuarantService: RestuarantsService){
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
    this.restuarantService.getRestuarantMenu(this.restuarantId)
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
