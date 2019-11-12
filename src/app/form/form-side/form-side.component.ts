import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-side',
  templateUrl: './form-side.component.html',
  styleUrls: ['./form-side.component.css']
})
export class FormSideComponent implements OnInit {

  sideImg = "../../../assets/images/form-side-1-2.png";

  sideText = "Discover the delicious food in your city And delivery to your place";

  constructor() { }

  ngOnInit() {
  }

}