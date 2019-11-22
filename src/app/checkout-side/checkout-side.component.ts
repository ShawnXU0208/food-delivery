import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-checkout-side',
  templateUrl: './checkout-side.component.html',
  styleUrls: ['./checkout-side.component.css']
})
export class CheckoutSideComponent implements OnInit {

  total;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.total = this.shoppingCartService.getTotalPrice();
  }

}
