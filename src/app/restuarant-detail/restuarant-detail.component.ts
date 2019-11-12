import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestuarantDetailService } from '../services/restuarant-detail.service';

@Component({
  selector: 'app-restuarant-detail',
  templateUrl: './restuarant-detail.component.html',
  styleUrls: ['./restuarant-detail.component.css']
})
export class RestuarantDetailComponent implements OnInit {

  //info_name: string;
  id: number;
  restuarantInfo: any = "";
  menuCategories;
  selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private restuarantDetailService: RestuarantDetailService
  ){
    this.id = +this.route.snapshot.paramMap.get('id');
    this.menuCategories = new Set();
  }

  ngOnInit() {
    this.restuarantDetailService.getRestuarantInfo(this.id)
      .subscribe((data: any[]) => {
        console.log(data);
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
