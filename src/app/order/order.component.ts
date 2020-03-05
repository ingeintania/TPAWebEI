import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../model/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderData : Order[]

  sorted : String
  tipe : String


  resetData(){
    this.sorted=null
  }

  getOrderData(){
    this.service.getOrder().subscribe(async result=> {
      this.orderData=result
    })
  }

  constructor(private service: OrderService) {
    this.getOrderData()
  }

  ngOnInit() {
  }

}
