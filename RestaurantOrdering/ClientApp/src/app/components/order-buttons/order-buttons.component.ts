import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantOrder } from '../../models/RestaurantOrder';
import { OrderDataService } from '../../services/order-data-service.service';

@Component({
  selector: 'app-order-buttons',
  templateUrl: './order-buttons.component.html',
  styleUrls: ['./order-buttons.component.css']
})
export class OrderButtonsComponent implements OnInit {

  private orderDataService: OrderDataService;
  private result: String;

  constructor(dataService: OrderDataService) {
    this.orderDataService = dataService;
  }

  ngOnInit() {
  }

  public placeOrder() {
    this.orderDataService.submitOrder().subscribe(result => this.result = result);
  }

  public clearOrder() {
   
  }
}
