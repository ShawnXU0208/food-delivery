import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  //@Input() item: any;

  item = {
    id: 1,
    name: "aaa",
    category: "bbb",
    price: 40,
    image: "menu-1.png",
    number: 3
  };

  constructor() { }

  ngOnInit() {
  }

}
