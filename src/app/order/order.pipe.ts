import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../model/Order';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(
    orderData : Order[],

    tipe:String,
    sorted:String
    ): Order[]{


    if(tipe){
        console.log(tipe)
        return orderData.filter(Order => Order.order_payment_method.toLowerCase().includes(tipe.toString()))
    }

    if(sorted == "name"){
      return orderData.sort((a,b) => a.ticket_name < b.ticket_name ? -1 : 1)
    }
    if(sorted == "price"){
      return orderData.sort((a,b) => a.order_price - b.order_price)



    }
    return orderData;
  }

}
