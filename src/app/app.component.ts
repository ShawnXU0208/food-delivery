import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { GlobalDataService } from './services/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  subscription: Subscription;
  title = "food-delivery";
  expand: boolean = false;

  constructor(private globlaDataService: GlobalDataService){
    this.subscription = this.globlaDataService.getExpandPrimary().subscribe(
      data =>{
        this.expand = data.expand;
      }
    );
  }

}
