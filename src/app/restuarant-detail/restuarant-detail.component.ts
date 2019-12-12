import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

//import { RestuarantDetailService } from '../services/restuarant-detail.service';
import { RestuarantsService } from '../services/restuarants.service';
import { GlobalDataService } from '../services/global-data.service';
import { UserService } from '../services/user.service';

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
  customerLogged: boolean;

  constructor(
    private route: ActivatedRoute,
    private restuarantService: RestuarantsService,
    private globalDataService: GlobalDataService,
    private userService: UserService
  ){
    this.id = +this.route.snapshot.paramMap.get('id');
    this.menuCategories = new Set();

    let loggedUser = this.userService.getLoggedUser();
    if(loggedUser && loggedUser['userRole'] == "customer"){
      this.customerLogged = true;
    }else{
      this.customerLogged = false;
    }
    //this.globalDataService.changeExpandPrimary(true);
  }

  ngOnInit() {
    this.globalDataService.changeLayout(2);

    this.restuarantService.getRestuarantById(this.id)
      .subscribe((data: any[]) => {
        this.restuarantInfo = data;
      });

    this.restuarantService.getRestuarantMenu(this.id)
      .subscribe((data: any[]) => {
        if(data.length > 0){
          this.selectedCategory = data[0]['category'];
        }
        for(let menu of data){
          this.menuCategories.add(menu['category']);
        }
      });


  }

  changeCategory(category): void{
    this.selectedCategory = category;
  }

}
