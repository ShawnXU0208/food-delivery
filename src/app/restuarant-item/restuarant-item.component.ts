import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restuarant-item',
  templateUrl: './restuarant-item.component.html',
  styleUrls: ['./restuarant-item.component.css']
})
export class RestuarantItemComponent implements OnInit {

  @Input() restuarant: any = {};

  constructor() { }

  ngOnInit() {
  }

}
