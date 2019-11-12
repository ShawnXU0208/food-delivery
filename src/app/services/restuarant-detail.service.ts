import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestuarantDetailService {

  private apiMenuURL = "http://localhost:4200/api/menu";
  private apiRestuarantURL = "http://localhost:4200/api/restuarants";

  constructor(private http: HttpClient){ }

  public getMenu(){
    return this.http.get(this.apiMenuURL);
  }


  public getRestuarantInfo(restuarantId){
    return this.http.get(`${this.apiRestuarantURL}/${restuarantId}`);
  }
}
