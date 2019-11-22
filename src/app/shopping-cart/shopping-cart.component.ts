import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnDestroy, OnInit{

  //cartItemsHTML = new Observable<any>();
  cartItemInfo: any;
  subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService){
    this.subscription = this.shoppingCartService.getHTML().subscribe(data => {
      this.cartItemInfo = data;
    });
  }

  ngOnInit(){
    this.shoppingCartService.getInitHTML();
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  clearCart(){
    this.shoppingCartService.clear();
  }



}
