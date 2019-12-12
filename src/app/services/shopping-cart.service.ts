import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { UserService } from './user.service';


class MenuItem{
  menuId: number;
  quantity: number;

  constructor(id: number, quantity: number){
    this.menuId = id;
    this.quantity = quantity;
  }
}

class ShoppingCart{
  userId: number;
  cartItems: MenuItem[];

  constructor(){
    // initial the user id and cart items for the shopping cart object
    this.userId = 0;
    this.cartItems = [];
  }
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  // shoppingCart = {
  //                  userId: number, 
  //                  cartItems:[{
  //                              menuId: number,
  //                              quantity: number
  //                            }]
  //                 }
  //private shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || {};
  private shoppingCart: ShoppingCart = new ShoppingCart();
  private cartItemsSubject = new Subject<any>();
  private totalPrice: number = 0;

  constructor(
    private userService: UserService
  ){
    let loggedUser = this.userService.getLoggedUser();
    if(loggedUser){
      //someone is logged
      this.shoppingCart.userId = loggedUser.id;
      if(localStorage.getItem('shoppingCart')){
        let savedData = JSON.parse(localStorage.getItem('shoppingCart'));
        if(savedData.userId == loggedUser.id){
          for(const item of savedData.cartItems){
            this.shoppingCart.cartItems.push(new MenuItem(item.menuId, item.quantity));
          }
        }else{
          this.shoppingCart.cartItems = [];
        }
      }

    }else{
      //no one is logged
      this.clearShoppingCart();
    }

    this.updateCart();

  }

  addToCart(menuId: number, quantity: number){
    if(quantity > 0){
      let indexFound = this.shoppingCart.cartItems.findIndex(cartItem => cartItem.menuId == menuId);
      if(indexFound >= 0){
        this.shoppingCart.cartItems[indexFound].quantity += quantity;
      }else{
        this.shoppingCart.cartItems.push({menuId: menuId, quantity: quantity});
      }

      this.updateCart();
    }
  }

  remoeFromCart(menuId: number){
    let indexFound = this.shoppingCart.cartItems.findIndex(cartItem => cartItem.menuId == menuId);
    if(indexFound >= 0){
      this.shoppingCart.cartItems.splice(indexFound, 1);
      this.updateCart(); 
    } 
  }

  updateCart(){
    //save updated shopping cart and send updated shopping cart data
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    this.cartItemsSubject.next({cartItems: this.shoppingCart.cartItems});
  }

  clearShoppingCart(){
    // clear both shopping cart items and user's information bind to shopping cart
    this.shoppingCart = new ShoppingCart();
    this.updateCart();
  }

  clearCartItems(){
    //clear shopping cart items only
    this.shoppingCart.cartItems = [];
    this.updateCart();
  }

  getCartItems(): Observable<any>{
    return this.cartItemsSubject.asObservable();
  }

  getSavedCartItems(){
    this.cartItemsSubject.next({cartItems: this.shoppingCart.cartItems});
    return this.shoppingCart.cartItems;
  }

  updateTotalPrice(price: number){
    this.totalPrice = price;
  }

  getTotalPrice(){
    return this.totalPrice;
  }
}



