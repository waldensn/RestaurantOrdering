import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantOrder } from '../models/RestaurantOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  private http: HttpClient;
  private baseUrl: String;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  //returning blank?
  public getOrders(): Observable<RestaurantOrder[]> {
    return this.http.get<RestaurantOrder[]>(this.baseUrl + 'restaurantorder');
  }

  //this doesn't actually send a post?
  public submitOrder(): Observable<String> {
    var order: RestaurantOrder = { firstName: "John", lastName: "Smith", phone: "480-231-4428", restaurant: "McDonald's" }
    return this.http.post<String>(this.baseUrl + 'restaurantorder', order);
  }


}
