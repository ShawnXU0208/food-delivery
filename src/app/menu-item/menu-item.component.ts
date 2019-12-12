import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: any;
  @Input() customerLogged: boolean;
  numberToAdd: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  plus(){
    this.numberToAdd += 1;
  }

  minus(){
    if(this.numberToAdd > 0){
      this.numberToAdd -= 1;
    }
  }

  addToCart(){
    if(!this.customerLogged){
      this.router.navigateByUrl("/(appRight:customer-login)");
    }else{
      this.shoppingCartService.addToCart(this.menuItem.id, this.numberToAdd);
      this.numberToAdd = 0;
    }
  }

  removeFromCart(){
    if(!this.customerLogged){
      this.router.navigateByUrl("/(appRight:customer-login)");
    }else{
      this.shoppingCartService.remoeFromCart(this.menuItem.id);
    }
  }

}
