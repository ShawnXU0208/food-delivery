import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { RestuarantsService } from '../services/restuarants.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: any[] = [];
  total: number = 0;
  //totalPrice: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private restuarantService: RestuarantsService,
    private userService: UserService,
    private router: Router
  ) {

    const menuItems = this.shoppingCartService.getSavedCartItems();
    const userLogged = this.userService.getLoggedUser();

    if(menuItems.length > 0 && userLogged){
      for(const menuItem of menuItems){
        let menuId = menuItem.menuId;
        let quantity = menuItem.quantity;
        this.restuarantService.getMenuById(menuId).subscribe(menuData => {
          this.cartItems.push({
            name: menuData['name'],
            price: menuData['price'],
            image: menuData['image'],
            quantity: quantity
          });
          this.total += menuData['price'] * quantity;
        })
      }
    }else{
      this.router.navigateByUrl("/(appRight:customer-login)");
    }
  }

  ngOnInit() {

    //this.totalPrice = this.shoppingCartService.getTotalPrice();
  }

  reset(){
    //this.shoppingCartService.clear();
  }

}
