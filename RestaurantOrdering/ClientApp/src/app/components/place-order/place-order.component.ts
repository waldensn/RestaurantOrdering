import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../services/order-data-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
  providers: [OrderDataService]
})
export class PlaceOrderComponent implements OnInit {

  private orderDataService: OrderDataService;
  private restaurants: Array<String> = ["McDonald's", "Wendy's", "Taco Bell"];

  constructor(orderDataService: OrderDataService) {}

  ngOnInit() {
  }

  public getOrders() {

  }
}
