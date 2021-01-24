import { Component, OnInit, Inject } from '@angular/core';
import { RestaurantOrder } from '../../models/RestaurantOrder';
import { OrderDataService } from '../../services/order-data-service.service';

@Component({
  selector: 'app-fetch-orders',
  templateUrl: './fetch-orders.component.html',
  styleUrls: ['./fetch-orders.component.css']
})
export class FetchOrdersComponent implements OnInit {

  private orderDataService: OrderDataService;
  public orders: RestaurantOrder[];
  public tableClass: String;
  public tableBordered: boolean;
  public tableStyle: {};
  public tableLarge: boolean;
  public showText: boolean;
  public textToShow: String;

  constructor(dataService: OrderDataService) {
    this.orderDataService = dataService;
    this.tableClass = 'table table-bordered';
    this.tableBordered = false;
    this.tableStyle = { 'font-size': '12px' };
    this.tableLarge = false;
    this.textToShow = "Hello";
    this.showText = false;
  }

  ngOnInit() {
  }

  public fetchOrders() {
    this.orderDataService.getOrders().subscribe(orders => this.orders = orders);
  }


  //toggle between table striped and table bordered
  public changeTableClass() {
    if (this.tableClass === 'table table-striped') {
      this.tableClass = 'table table-bordered';
    }
    else {
      this.tableClass = 'table table-striped';
    }
  }

  //change font size
  public changeTableStyle() {
    if ( this.tableLarge ) {
      this.tableStyle = { 'font-size': '12px' }
      this.tableLarge = false;
    }
    else {
      this.tableStyle = { 'font-size': '24px' }
      this.tableLarge = true;
    }
  }

  public showHideText() {
    this.showText = !this.showText;
  }

  //changes some text
  public changeTextToShow() {
    if (this.textToShow === 'Goodbye') {
      this.textToShow = "Hello";
    }
    else {
      this.textToShow = "Goodbye";
    }
  }
}
