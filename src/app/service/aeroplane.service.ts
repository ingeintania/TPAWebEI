import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Aeroplane } from '../model/Aeroplane';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AeroplaneService {

  constructor(private apollo: Apollo) { }

  getAeroplane(): Observable<Aeroplane[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        aeroplanes{
          aeroplane_id
          aeroplane_name
          aeroplane_company
          aeroplane_type
          aeroplane_image_path
          aeroplane_depart_date
          aeroplane_depart_time
          aeroplane_arrive_date
          aeroplane_arrive_time
          aeroplane_duration
          aeroplane_price
          aeroplane_price_raw
          aeroplane_price_tax
          aeroplane_transit
          aeroplane_transit_duration
          aeroplane_facilities
          aeroplane_depart_location
          aeroplane_arrive_location
        }
      }
      `,                         
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.aeroplanes
    ))
  }

  createaeroplane(
    name:String,
    company:String,
    type:String,
    image:String,
    depart_date:String,
    depart_time:String,
    depart_location:String,
    arrive_date:String,
    arrive_time:String,
    arrive_location:String,
    duration:number,
    price:number,
    price_raw:number,
    price_tax:number,
    transit:String,
    transit_duration:number,
    facilities:String
    
  ): Observable<Aeroplane[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation(
        $name:String,
        $company:String,
        $type:String,
        $image:String,
        $depart_date:String,
        $depart_time:String,
        $arrive_date:String,
        $arrive_time:String,
        $duration:Int,
        $price:Int,
        $price_raw:Int,
        $price_tax:Int,
        $transit:String,
        $transit_duration:Int,
        $facilities:String,
        $depart_location:String,
        $arrive_location:String
      ){
        createaeroplane(
          aeroplane_name:$name,
          aeroplane_company:$company,
          aeroplane_type:$type,
          aeroplane_image_path:$image,
          aeroplane_depart_date:$depart_date,
          aeroplane_depart_time:$depart_time,
          aeroplane_arrive_date:$arrive_date,
          aeroplane_arrive_time:$arrive_time,
          aeroplane_duration:$duration,
          aeroplane_price:$price,
          aeroplane_price_raw:$price_raw,
          aeroplane_price_tax:$price_tax,
          aeroplane_transit:$transit,
          aeroplane_transit_duration:$transit_duration,
          aeroplane_facilities:$facilities,
          aeroplane_depart_location:$depart_location,
          aeroplane_arrive_location:$arrive_location
        ){
          aeroplane_id
          aeroplane_name
          aeroplane_company
          aeroplane_type
          aeroplane_image_path
          aeroplane_depart_date
          aeroplane_depart_time
          aeroplane_arrive_date
          aeroplane_arrive_time
          aeroplane_duration
          aeroplane_price
          aeroplane_price_raw
          aeroplane_price_tax
          aeroplane_transit
          aeroplane_transit_duration
          aeroplane_facilities
          aeroplane_depart_location
          aeroplane_arrive_location
        }
      }
      `,         
      variables:{
        "name":name,
        "company":company,
        "type":type,
        "image":image,
        "depart_date":depart_date,
        "depart_time":depart_time,
        "arrive_date":arrive_date,
        "arrive_time":arrive_time,
        "depart_location":depart_location,
        "arrive_location":arrive_location,
        "duration":duration,
        "price":price,
        "price_raw":price_raw,
        "price_tax":price_tax,
        "transit":transit,
        "transit_duration":transit_duration,
        "facilities":facilities,
        
      },                
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.createaeroplane
    ))
  }

  updateaeroplane(
    id:number,
    name:String,
    company:String,
    type:String,
    image:String,
    depart_date:String,
    depart_time:String,
    depart_location:String,
    arrive_date:String,
    arrive_time:String,
    arrive_location:String,
    duration:number,
    price:number,
    price_raw:number,
    price_tax:number,
    transit:String,
    transit_duration:number,
    facilities:String
  ): Observable<Aeroplane[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation(
        $id:Int,
        $name:String,
        $company:String,
        $type:String,
        $image:String,
        $depart_date:String,
        $depart_time:String,
        $arrive_date:String,
        $arrive_time:String,
        $duration:Int,
        $price:Int,
        $price_raw:Int,
        $price_tax:Int,
        $transit:String,
        $transit_duration:Int,
        $facilities:String,
        $depart_location:String,
        $arrive_location:String
      ){
        updateaeroplane(
          aeroplane_id:$id,
          aeroplane_name:$name,
          aeroplane_company:$company,
          aeroplane_type:$type,
          aeroplane_image_path:$image,
          aeroplane_depart_date:$depart_date,
          aeroplane_depart_time:$depart_time,
          aeroplane_arrive_date:$arrive_date,
          aeroplane_arrive_time:$arrive_time,
          aeroplane_duration:$duration,
          aeroplane_price:$price,
          aeroplane_price_raw:$price_raw,
          aeroplane_price_tax:$price_tax,
          aeroplane_transit:$transit,
          aeroplane_transit_duration:$transit_duration,
          aeroplane_facilities:$facilities,
          aeroplane_depart_location:$depart_location,
          aeroplane_arrive_location:$arrive_location
        ){
          aeroplane_id
          aeroplane_name
          aeroplane_company
          aeroplane_type
          aeroplane_image_path
          aeroplane_depart_date
          aeroplane_depart_time
          aeroplane_arrive_date
          aeroplane_arrive_time
          aeroplane_duration
          aeroplane_price
          aeroplane_price_raw
          aeroplane_price_tax
          aeroplane_transit
          aeroplane_transit_duration
          aeroplane_facilities
          aeroplane_depart_location
          aeroplane_arrive_location
        }
      }
      `,         
      variables:{
        "id":id,
        "name":name,
        "company":company,
        "type":type,
        "image":image,
        "depart_date":depart_date,
        "depart_time":depart_time,
        "arrive_date":arrive_date,
        "arrive_time":arrive_time,
        "duration":duration,
        "price":price,
        "price_raw":price_raw,
        "price_tax":price_tax,
        "transit":transit,
        "transit_duration":transit_duration,
        "facilities":facilities,
        "depart_location":depart_location,
        "arrive_location":arrive_location
      },                
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.updateaeroplane
    ))
  }

  deleteaeroplane(
    id:number
  ): Observable<Aeroplane[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation(
        $id:Int
      ){
        deleteaeroplane(
          aeroplane_id:$id
        ){
          aeroplane_id
          aeroplane_name
          aeroplane_company
          aeroplane_type
          aeroplane_image_path
          aeroplane_depart_date
          aeroplane_depart_time
          aeroplane_arrive_date
          aeroplane_arrive_time
          aeroplane_duration
          aeroplane_price
          aeroplane_price_raw
          aeroplane_price_tax
          aeroplane_transit
          aeroplane_transit_duration
          aeroplane_facilities
          aeroplane_depart_location
          aeroplane_arrive_location
        }
      }
      `,         
      variables:{
        "id":id
      },                
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.deleteaeroplane
    ))
  }



}
