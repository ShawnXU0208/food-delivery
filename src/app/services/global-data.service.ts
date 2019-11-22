import { Injectable } from '@angular/core';
import { Subject, Observable }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private subjectExpandPrimay = new Subject<any>();
  constructor() { }

   public changeExpandPrimary(expand: boolean){
     this.subjectExpandPrimay.next({expand: expand});
   }

   public getExpandPrimary(): Observable<any>{
     return this.subjectExpandPrimay.asObservable();
   }
}
