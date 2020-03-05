import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Train } from '../model/Train';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private apollo: Apollo) { }

  getTrains(): Observable<Train[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        trains{
          train_id
          train_name
          train_class
          train_type
          train_depart_time
          train_depart_location
          train_arrive_time
          train_arrive_location
          train_duration
          train_detail_price
        }
      }
      `,                         
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.trains
    ))
  }

  createtrain(
    name:String,
    classes:String,
    type:String,
    depart_time:String,
    depart_location:String,
    arrive_time:String,
    arrive_location:String,
    duration:number,
    detail_price:number
  ): Observable<Train[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation(
        $name:String,
        $classes:String,
        $type:String,
        $depart_time:String,
        $depart_location:String,
        $arrive_time:String,
        $arrive_location:String,
        $duration:Int,
        $detail_price:Int
      ){
        createtrain(
          train_name:$name,
          train_class:$classes,
          train_type:$type,
          train_depart_time:$depart_time,
          train_depart_location:$depart_location,
          train_arrive_time:$arrive_time,
          train_arrive_location:$arrive_location,
          train_duration:$duration,
          train_detail_price:$detail_price
        ){
          train_id
          train_name
          train_class
          train_type
          train_depart_time
          train_depart_location
          train_arrive_time
          train_arrive_location
          train_duration
          train_detail_price
        }
      }
      `,         
      variables:{
        "name":name,
        "classes":classes,
        "type":type,
        "depart_time":depart_time,
        "depart_location":depart_location,
        "arrive_time":arrive_time,
        "arrive_location":arrive_location,
        "duration":duration,
        "detail_price":detail_price
      },                
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.createtrain
    ))
  }

  updatetrain(
    id:number,
    name:String,
    classes:String,
    type:String,
    depart_time:String,
    depart_location:String,
    arrive_time:String,
    arrive_location:String,
    duration:number,
    detail_price:number
  ): Observable<Train[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation(
  			$id:Int,
        $name:String,
        $classes:String,
        $type:String,
        $depart_time:String,
        $depart_location:String,
        $arrive_time:String,
        $arrive_location:String,
        $duration:Int,
        $detail_price:Int
      ){
        updatetrain(
          train_id:$id,
          train_name:$name,
          train_class:$classes,
          train_type:$type,
          train_depart_time:$depart_time,
          train_depart_location:$depart_location,
          train_arrive_time:$arrive_time,
          train_arrive_location:$arrive_location,
          train_duration:$duration,
          train_detail_price:$detail_price
        ){
          train_id
          train_name
          train_class
          train_type
          train_depart_time
          train_depart_location
          train_arrive_time
          train_arrive_location
          train_duration
          train_detail_price
        }
      }
      `,         
      variables:{
        "id":id,
        "name":name,
        "classes":classes,
        "type":type,
        "depart_time":depart_time,
        "depart_location":depart_location,
        "arrive_time":arrive_time,
        "arrive_location":arrive_location,
        "duration":duration,
        "detail_price":detail_price
      },                
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.updatetrain
    ))
  }

  deletetrain(
    id:number
  ): Observable<Train[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation(
  			$id:Int
      ){
        deletetrain(
          train_id:$id
        ){
          train_id
          train_name
          train_class
          train_type
          train_depart_time
          train_depart_location
          train_arrive_time
          train_arrive_location
          train_duration
          train_detail_price
        }
      }
      `,         
      variables:{
        "id":id
      },                
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.deletetrain
    ))
  }


}
