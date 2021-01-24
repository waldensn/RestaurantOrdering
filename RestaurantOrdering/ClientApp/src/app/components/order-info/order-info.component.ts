import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  private restaurants: Array<String> = ["McDonald's", "Wendy's", "Taco Bell"];

  constructor() { }

  ngOnInit() {
  }

}
