import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { GlobalDataService } from '../services/global-data.service';
import { RestuarantsService } from '../services/restuarants.service';

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
    private globalDataService: GlobalDataService,
    private restuarantService: RestuarantsService
  ) {
    this.globalDataService.changeLayout(2);
  }

  ngOnInit() {
    const menuItems = this.shoppingCartService.getSavedCartItems();
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
      })
    }
    //this.totalPrice = this.shoppingCartService.getTotalPrice();
  }

  reset(){
    //this.shoppingCartService.clear();
  }

}
