import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestuarantsService {

  private apiURL = "http://localhost:4200/api/restuarants";

  constructor(private http: HttpClient){ }

  public getRestuarants(){
    return this.http.get(this.apiURL);
  }


  public createRestaurant(restaurant: Restaurant){
    console.log(restaurant);
    return this.http.post(`/restaurant/create`, restaurant)
      .pipe(map(data => {

        localStorage.setItem("currentUser", JSON.stringify(loggedUser));
        localStorage.setItem("currentRole", "customer");

        return data;
      }));   
  }


}
