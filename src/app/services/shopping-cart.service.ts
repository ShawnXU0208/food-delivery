import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartItems: any[] = [];
  cartItemsID: number[] = [];
  cartHTML: string = "";
  totalPrice: number = 6.99;
  //cartHTML: Subject<any>();
  private subject = new Subject<any>();

  generateHTML(){
    this.cartHTML = "";


    for(let item of this.cartItems){
      this.cartHTML += `
        <div class = "cart-item container-fluid" style = "height: 70px; margin: 15px 0px; position: relative;">
          <div class = "row" style = "height: 100%;">
            <div class = "col-3">
              <img src = "../../assets/images/${item.image}" style = "width: 70px; height: 70px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%; background-color: #eeeff0;">
            </div>
            <div class = "col-6 cart-item-text" style = "padding-top: 15px; padding-bottom: 15px;">
              <div class = "name" style = "font-size: 15px; font-weight: 600;">${item.name}</div>
              <div class = "category" style = "font-size: 10px; font-weight: 300; color: grey;">${item.category}</div>
            </div>
            <div class = "col-3 cart-item-text" style = "padding-top: 15px; padding-bottom: 15px;">
              <div class = "item-price" style = "font-size: 12px; font-weight: 300; color: grey;">\$${item.price}</div>
              <div class = "item-number" style = "font-size: 10px; font-weight: 300; color: grey;">x${item.number}</div>
            </div>
          </div>
        </div>
      `;
    }
    

  }

  calculatePrice(){
    this.totalPrice = 6.99;
    for(let item of this.cartItems){
      this.totalPrice += item.price * item.number;
    }
    this.totalPrice = this.totalPrice.toFixed(2);
  }


  addItem(id: number, name: string, category: string, price: number, image: string, added_number: number): void{
    if(added_number > 0){
      if(this.cartItemsID.indexOf(id) > -1){
        for(let i = 0; i < this.cartItems.length; i++){
          if(id == this.cartItems[i].id){
            this.cartItems[i].number += added_number;
            break;
          }
        }
      }else{
        let newItem = {
          "id": id,
          "name": name,
          "category": category,
          "price": price,
          "image": image,
          "number": added_number
        };
        this.cartItems.push(newItem);
        this.cartItemsID.push(id);
      }
      //this.cartHTML += `<app-cart-item [item] = ${newItem}></app-cart-item>`;
      //this.cartHTML += `<div>${newItem.id}</div>`;
      this.generateHTML();
      this.calculatePrice();
      this.subject.next({html: this.cartHTML, total_price: this.totalPrice});
    }
  }

  deleteItem(id: number){
    if(this.cartItemsID.indexOf(id) > -1){
      //delete this.cartItemsID[this.cartItemsID.indexOf(id)];
      this.cartItemsID.splice(this.cartItemsID.indexOf(id), 1);
      for(let i = 0; i < this.cartItems.length; i++){
        if(id == this.cartItems[i].id){
          //delete this.cartItems[i];
          this.cartItems.splice(i, 1);
          break;
        }
      }  

      this.generateHTML();
      this.calculatePrice();
      this.subject.next({html: this.cartHTML, total_price: this.totalPrice});        
    }
  }

  clear(){
  
    this.cartHTML = "";
    this.cartItems = [];
    this.cartItemsID = [];
    this.totalPrice = 6.99;  

    this.generateHTML();
    this.calculatePrice();
    this.subject.next({html: this.cartHTML, total_price: this.totalPrice});  
  }

  getCartItems(): any[]{
    return this.cartItems;
  }

  getTotalPrice(): number{
    return this.totalPrice;
  }

  getHTML(): Observable<any>{
    return this.subject.asObservable();
  }

  getInitHTML(){
    this.subject.next({html: this.cartHTML, total_price: this.totalPrice});
  }

}
