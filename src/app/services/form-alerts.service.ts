import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormAlertsService {

  private subject = new Subject<any>();


  constructor() { }

  public getAlert(): Observable<any>{
    return this.subject.asObservable();
  }

  public successMessage(message: string){
    this.subject.next({type: 'success', text: message});
  }

  public errorMessage(message: string){
    this.subject.next({type: 'error', text: message});
  }

}
