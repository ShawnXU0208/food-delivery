import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: any[] = [];
  //totalPrice: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private globalDataService: GlobalDataService
  ) {
    this.globalDataService.changeExpandPrimary(true);
  }

  ngOnInit() {
    this.cartItems = this.shoppingCartService.getCartItems();
    //this.totalPrice = this.shoppingCartService.getTotalPrice();
  }

  reset(){
    this.shoppingCartService.clear();
  }

}
