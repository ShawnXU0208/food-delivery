import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../services/shopping-cart.service';
//import { RestuarantsService } from '../services/restuarants.service';

@Component({
  selector: 'app-checkout-side',
  templateUrl: './checkout-side.component.html',
  styleUrls: ['./checkout-side.component.css']
})
export class CheckoutSideComponent implements OnInit {

  total = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    //private restuarantService: RestuarantsService
  ) { }

  ngOnInit() {
    //this.total = this.shoppingCartService.getTotalPrice();
    this.total = this.shoppingCartService.getTotalPrice();
  }

}
