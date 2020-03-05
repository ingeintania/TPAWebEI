import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { AeroplaneService } from '../service/aeroplane.service';
import { Aeroplane } from '../model/Aeroplane';
import { Order } from '../model/Order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  userData : User[];
  aeroplaneData : Aeroplane[]

  orderData : Order[]

  id : number
  name : string
  email : string
  phone : string
  qty : number
  title : string
  name2 : string
  nationality : string
  paymentMethod : string
  promoCode : string
  price : number

  insertOrder(){
    this.serviceOrder.createorder(this.name,
      this.email, this.phone, this.qty,
      this.title, this.name2, this.nationality,
      this.paymentMethod, this.promoCode,
      this.price)
  }

  getUserData(){
    this.service.getUser('iing@iing.iing').subscribe(async result=> {
      this.userData=result
    })
  }

  getAeroplaneData(){
    this.serviceAeroplane.getAeroplane().subscribe(async result=> {
      this.aeroplaneData=result
    })
  }

  countries: string[] = [
    'Afganistan', 'Afrika Selatan', 'Afrika Tengah', 'Albania',
    'Aljazair', 'Amerika Serikat', 'Arab Saudi', 'Argentina',
    'Australia', 'Bangladesh', 'Belanda', 'Belgia',
    'Bhutan', 'Brunei Darussalam', 'Denmark', 'Ekuador', 'Filipina',
    'Ghana', 'Hongaria', 'India', 'Indonesia',
    'Inggris', 'Israel', 'Jepang',
    'Jerman', 'Kanada', 'Korea Selatan', 'Laos'
  ];

  paymentMethods: string[] = [
    'ATM Transfer', 'Gopay', 'OVO', 'Kartu Kredit',
    'Indomaret', 'Alfamart'
  ];

  constructor(private service:UserService, private serviceAeroplane:AeroplaneService,
    private serviceOrder:OrderService) {
    this.getUserData()
    this.getAeroplaneData()
  }

  ngOnInit() {
  }

}
