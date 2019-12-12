import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  //private subjectExpandPrimay = new Subject<any>();
  private subjectLayout = new Subject<any>();
  private currentLayoutMode: number = 1;
  constructor() { }

/*
  public changeExpandPrimary(expand: boolean){
   this.subjectExpandPrimay.next({expand: expand});
  }

  public getExpandPrimary(): Observable<any>{
   return this.subjectExpandPrimay.asObservable();
  }
 */
  public changeLayout(mode: number){
   this.subjectLayout.next({mode: mode});
   this.currentLayoutMode = mode;
  }

  public getLayout(): Observable<any>{
   return this.subjectLayout.asObservable();
  }

  public getCurrentLayout(){
    return this.currentLayoutMode;
  }
}
