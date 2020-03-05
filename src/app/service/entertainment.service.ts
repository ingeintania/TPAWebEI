import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, from } from 'rxjs';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators'
import { Entertainment } from '../model/Entertainment';

@Injectable({
  providedIn: 'root'
})
export class EntertainmentService {

  constructor(private apollo: Apollo) { }

  getEntertainment(): Observable<Entertainment[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        entertainments{
          entertainment_id
          entertainment_name
          entertainment_price
          entertainment_image_path1
          entertainment_image_path2
          entertainment_image_path3
          entertainment_image_path4
          entertainment_image_path5
          location{
            location_id
            location_name
          }
          entertainment_address
          entertainment_latitude
          entertainment_longitude
          entertainment_type
          entertainment_start_date
          entertainment_end_date
    			entertainment_description
    			entertainment_t_c
        }
      }
      `,                         
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.entertainments
    ))
  }

  createentertainment(
    name:String,
        price:number, i1: String, 
        i2: String, i3: String,
        i4: String, i5: String,
        loc:number, address:String,
        latitude:String, 
        longitude:String,
        type:String, 
        start_date:String,
        end_date:String,
        description:String,
        t_c:String
  ): Observable<Entertainment[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation createentertainment($name:String!,
        $price:Int, $i1: String!, 
        $i2: String!, $i3: String!,
        $i4: String!, $i5: String!,
        $loc:Int, $address:String!,
        $latitude:String!, 
        $longitude:String!,
        $type:String!, 
        $start_date:String!,
        $end_date:String!,
        $description:String!,
        $t_c:String!){
          createentertainment(entertainment_name:$name,
          entertainment_price:$price, entertainment_image_path1:$i1,
          entertainment_image_path2:$i2,entertainment_image_path3:$i3, 
          entertainment_image_path4:$i4,entertainment_image_path5:$i5, 
          location_id:$loc, entertainment_address:$address,
          entertainment_latitude:$latitude, entertainment_longitude:$longitude,
          entertainment_type:$type, entertainment_start_date:$start_date,
            entertainment_end_date:$end_date, entertainment_description:$description,
            entertainment_t_c:$t_c
          ){
                  entertainment_id
                  entertainment_name
                  entertainment_price
                  entertainment_image_path1
                  entertainment_image_path2
                  entertainment_image_path3
                  entertainment_image_path4
                  entertainment_image_path5
                  location{
                    location_id
                    location_name
                  }
                  entertainment_address
                  entertainment_latitude
                  entertainment_longitude
                  entertainment_type
                  entertainment_start_date
                  entertainment_end_date
                  entertainment_description
                  entertainment_t_c
          }
        }
        
      `,         
      variables:{
        "name": name,
        "price": price,
        "i1": i1,
        "i2": i2,
        "i3": i3,
        "i4": i4,
        "i5": i5,
        "loc": loc,
        "address": address,
        "latitude": latitude,
        "longitude": longitude,
        "type": type,
        "start_date": start_date,
        "end_date": end_date,
        "description": description,
        "t_c": t_c
      },                
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.createentertainment
    ))
  }

  updateentertainment(
    id:number,
    name:String,
    price:number, i1: String, 
    i2: String, i3: String,
    i4: String, i5: String,
    loc:number, address:String,
    latitude:String, 
    longitude:String,
    type:String, 
    start_date:String,
    end_date:String,
    description:String,
    t_c:String
  ): Observable<Entertainment[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation(
        $id:Int,$name:String,$price:Int,$i1:String,$i2:String,$i3:String,$i4:String,$i5:String,
        $loc:Int,$address:String,$latitude:String,$longitude:String,$type:String,
        $start_date:String,$end_date:String,$description:String,$t_c:String
      ){
        updateentertainment(
          entertainment_id:$id,entertainment_name:$name,entertainment_price:$price,
          entertainment_image_path1:$i1,entertainment_image_path2:$i2,
          entertainment_image_path3:$i3,entertainment_image_path4:$i4,
          entertainment_image_path5:$i5,
          location_id:$loc,entertainment_address:$address,
          entertainment_latitude:$latitude,entertainment_longitude:$longitude,
          entertainment_type:$type,
          entertainment_start_date:$start_date,entertainment_end_date:$end_date,
          entertainment_description:$description,entertainment_t_c:$t_c
        ){
          entertainment_id
          entertainment_name
          entertainment_price
          entertainment_image_path1
          entertainment_image_path2
          entertainment_image_path3
          entertainment_image_path4
          entertainment_image_path5
          location{
                  location_id
                  location_name
                }
          entertainment_address
          entertainment_latitude
          entertainment_longitude
          entertainment_type
          entertainment_start_date
          entertainment_end_date
          entertainment_description
          entertainment_t_c
        }
      }
      `,    
      variables:{
        "id":id,
        "name": name,
        "price": price,
        "i1": i1,
        "i2": i2,
        "i3": i3,
        "i4": i4,
        "i5": i5,
        "loc": loc,
        "address": address,
        "latitude": latitude,
        "longitude": longitude,
        "type": type,
        "start_date": start_date,
        "end_date": end_date,
        "description": description,
        "t_c": t_c
      },                             
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.updateentertainment
    ))
  }
  
  deleteentertainment(
    id:number,
  ): Observable<Entertainment[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($id:Int){
        deleteentertainment(entertainment_id:$id){
          entertainment_id
          entertainment_name
          entertainment_price
          entertainment_image_path1
          entertainment_image_path2
          entertainment_image_path3
          entertainment_image_path4
          entertainment_image_path5
          location{
                  location_id
                  location_name
                }
          entertainment_address
          entertainment_latitude
          entertainment_longitude
          entertainment_type
          entertainment_start_date
          entertainment_end_date
          entertainment_description
          entertainment_t_c
        }
      }
      `,    
      variables:{
        "id":id
      },                             
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.deleteentertainment
    ))
  }


}
