import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';

import { GlobalDataService } from './services/global-data.service';
import { pageSlideIn } from './animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [pageSlideIn]
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
