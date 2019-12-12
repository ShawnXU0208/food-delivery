import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { RestuarantsService } from '../services/restuarants.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnDestroy, OnInit{

  //cartItemsHTML = new Observable<any>();
  cartItems: any[] = [];
  cartItemsSubscription: Subscription;
  totalPrice: number = 0;
  deliverFee: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private restuarantService: RestuarantsService,
    private router: Router
  ){
    //get delivery fee of the restuarnat
    let restuarantId = +this.router.url.split("(appRight:shopping-cart)")[0].split("/")[2];
    this.restuarantService.getRestuarantById(restuarantId).subscribe(data => {
      this.deliverFee = data['deliverFee'];
      this.totalPrice += this.deliverFee;
    });

    //this.shoppingCartService.getInitHTML();
    this.cartItemsSubscription = this.shoppingCartService.getCartItems().subscribe(cartData => {

      //update items in cart
      if(this.cartItems.length < cartData.cartItems.length){
        // add new item
        for(const item of cartData.cartItems){
          let id = item.menuId;
          let quantity = item.quantity;
          let existedIndex = this.cartItems.findIndex(cartItem => cartItem.menuId == id); 
          if(existedIndex < 0){
            //add new item to the cart item list
            this.restuarantService.getMenuById(id).subscribe(menuData => {
              this.cartItems.push({
                menuId: id,
                quantity: quantity,
                name: menuData['name'],
                category: menuData['category'],
                price: menuData['price'],
                image: menuData['image'],
                totalPrice: quantity * menuData['price']
              });
              this.totalPrice += quantity * menuData['price'];
              this.shoppingCartService.updateTotalPrice(this.totalPrice);
            });       
          }         
        }
      }else if(this.cartItems.length > cartData.cartItems.length){
        // delete a item
        for(const item of this.cartItems){
          let id = item.menuId;
          let existedItem = cartData.cartItems.find(cartItem => cartItem.menuId == id);
          if(!existedItem){
            let index = this.cartItems.findIndex(cartItem => cartItem.menuId == id);
            this.totalPrice -= this.cartItems[index].totalPrice;
            this.shoppingCartService.updateTotalPrice(this.totalPrice);
            this.cartItems.splice(index, 1);
          }
        }
      }else{
        // quantity changes
        for(const item of cartData.cartItems){
          let id = item.menuId;
          let quantity = item.quantity;
          let existedIndex = this.cartItems.findIndex(cartItem => cartItem.menuId == id);

          this.totalPrice -= this.cartItems[existedIndex].totalPrice;
          this.cartItems[existedIndex].quantity = quantity;
          this.cartItems[existedIndex].totalPrice = this.cartItems[existedIndex].price * quantity;
          this.totalPrice += this.cartItems[existedIndex].totalPrice;

          this.shoppingCartService.updateTotalPrice(this.totalPrice);

        }
      }


    });

    this.shoppingCartService.getSavedCartItems();
  }

  ngOnInit(){

  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.cartItemsSubscription.unsubscribe();
  }

  clearCart(){
    this.shoppingCartService.clearCartItems();
  }


}
