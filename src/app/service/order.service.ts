import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Order } from '../model/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private apollo: Apollo) { }

  getOrder(): Observable<Order[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        orders{
          order_id,
                user_name,
                user_email,
                user_phone,
                ticket_quantity,
                ticket_title,
                ticket_name,
                ticket_nationality,
                order_payment_method,
                order_promo_code,
                order_price
        }
      }
      `,
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.orders
    ))
  }

  createorder(
    uname:String,
    uemail:String,
    uphone:String,
    tquantity:number,
    ttitle:String,
    tname:String,
    tnationality:String,
    opaymentmethod:String,
    opromocode:String,
    oprice:number
  ): Observable<Order[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation(
        $uname:String,
        $uemail:String,
        $uphone:String,
        $tquantity:Int,
        $ttitle:String,
        $tname:String,
        $tnationality:String,
        $opaymentmethod:String,
        $opromocode:String,
        $oprice:Int
      ){
        createorder(
          user_name:$uname,
          user_email:$uemail,
          user_phone:$uphone,
          ticket_quantity:$tquantity,
          ticket_title:$ttitle,
          ticket_name:$tname,
          ticket_nationality:$tnationality,
          order_payment_method:$opaymentmethod,
          order_promo_code:$opromocode
          order_price:$oprice
        ){
          order_id,
          user_name,
          user_email,
          user_phone,
          ticket_quantity,
          ticket_title,
          ticket_name,
          ticket_nationality,
          order_payment_method,
          order_promo_code,
          order_price
        }
      }
      `,
      variables:{
        "uname":uname,
        "uemail":uemail,
        "uphone":uphone,
        "tquantity":tquantity,
        "ttitle":ttitle,
        "tname":tname,
        "tnationality":tnationality,
        "opaymentmethod":opaymentmethod,
        "opromocode":opromocode,
        "oprice":oprice
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.createorder
    ))
  }




}
