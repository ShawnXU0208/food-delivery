import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {

  private modeSubject = new Subject<any>();
  private layoutMode: number;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd){
        //console.log(val);
        switch(true){
          case val.url.includes("customer"):
            this.modeSubject.next({layoutMode: 1});
            this.layoutMode = 1;
            break;
          case val.url.includes("driver"):
            this.modeSubject.next({layoutMode: 1});
            this.layoutMode = 1;
            break;
          case val.url.includes("owner"):
            this.modeSubject.next({layoutMode: 3});
            this.layoutMode = 3;
            break;
          case val.url.includes("restaurant-list"):
            this.modeSubject.next({layoutMode: 1});
            this.layoutMode = 1;
            break;
          case val.url.includes("shopping-cart"):
            this.modeSubject.next({layoutMode: 2}); 
            this.layoutMode = 2;
            break;
          case val.url.includes("checkout"):
            this.modeSubject.next({layoutMode: 4}); 
            this.layoutMode = 4;
            break;           
          case val.url.includes("dashboard"):
            this.modeSubject.next({layoutMode: 3}); 
            this.layoutMode = 3;
            break;    
          default:
            this.modeSubject.next({layoutMode: 1});
            this.layoutMode = 1;
            break;
        }
      
      }
      //this.urlSubject.next({currentUrl: url});
    });
  }

  changeLayout(mode: number){
    this.modeSubject.next({layoutMode: mode});
    this.layoutMode = mode;
  }

  getCurrentUrl(): Observable<any>{
    return this.modeSubject.asObservable();
  }

  getLayout(){
    return this.layoutMode;
  }
}
