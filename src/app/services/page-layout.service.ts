import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {

  private urlSubject = new Subject<any>();

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd){
        console.log(val);
      }
      //this.urlSubject.next({currentUrl: url});
    });
  }

  getCurrentUrl(): Observable<any>{
    return this.urlSubject.asObservable();
  }
}
