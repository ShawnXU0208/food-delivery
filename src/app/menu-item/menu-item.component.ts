import { Component, OnInit, Input } from '@angular/core';

import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: any;
  numberToAdd: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

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
    this.shoppingCartService.addItem(
      this.menuItem.id,
      this.menuItem.name,
      this.menuItem.category,
      this.menuItem.price,
      this.menuItem.image,
      this.numberToAdd
    );

    this.numberToAdd = 0;
  }

  removeFromCart(){
    this.shoppingCartService.deleteItem(this.menuItem.id);
  }

}
