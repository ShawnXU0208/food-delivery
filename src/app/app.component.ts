import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

import { GlobalDataService } from './services/global-data.service';
import { pageSlideIn } from './animations';
import { PageLayoutService } from './services/page-layout.service';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  //animations: [pageSlideIn]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked{
  subscription: Subscription;
  urlSubscription: Subscription;
  title = "food-delivery";
  //expand: boolean = false;
  layoutMode: number;

  constructor(
    private globlaDataService: GlobalDataService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private users: UserService,
    private pageLayoutService: PageLayoutService
  ){
    /*
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        //console.log(event.url);
        console.log(event.url);
        switch (true) {
          case event.url.includes('restaurant-menu'):
            this.layoutMode = 2;
            break;
          
          default:
            this.layoutMode = 1;
            break;
        }
      });
     */
  }

  ngOnInit(){

    this.subscription = this.globlaDataService.getLayout().subscribe(
      data =>{
        this.layoutMode = data.mode;
        //console.log(this.layoutMode);
      }
    );

    this.urlSubscription = this.pageLayoutService.getCurrentUrl().subscribe(data => {
      console.log(data.currentUrl);
    });
  }

  ngAfterViewChecked(){
    //console.log(this.router.url);
    this.ref.detectChanges();
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }


}
