import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestuarantsService {

  private apiURL = "http://localhost:4200/api/restuarants";

  constructor(private http: HttpClient){ }

  public getRestuarants(){
    return this.http.get(this.apiURL);
  }
}
