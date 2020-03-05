import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, from } from 'rxjs';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators'
import { Hotel } from '../model/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private apollo: Apollo) { }

  getHotel(): Observable<Hotel[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        hotels{
          hotel_id
          hotel_name
          hotel_price
          hotel_image_path
          location_id
          hoteltype_id
          hotel_address
          hotel_latitude
          hotel_longitude
          hotel_star
          hotel_rating_count
          hotel_availability
          hotelFacility{
            hotelfacility_name
          }
          hotel_facilities
        }
      }
      `,
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.hotels
    ))
  }

  getHotelByArea(latitude:string, longitude:string): Observable<Hotel[]>{
    return this.apollo.query<any>({
      query: gql`
      query($latitude:String, $longitude:String){
        hotelbyarea
        (hotel_latitude:$latitude, hotel_longitude:$longitude){
          hotel_id
                hotel_name
                hotel_price
                hotel_image_path
                location_id
                hoteltype_id
                hotel_address
                hotel_latitude
                hotel_longitude
                hotel_star
                hotel_rating_count
                hotel_availability
                hotel_facilities
        }
      }
      `,
      variables:{
        "latitude":latitude,
        "longitude":longitude,
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.hotels
    ))
  }

  createhotel(
    name:String,
    price:number,
    image:String,
    location:number,
    type:number,
    address:String,
    latitude:String,
    longitude:String,
    star:number,
    rating:number,
    availability:String,
    facilities:String
  ): Observable<Hotel[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($name:String, $price:Int, $image:String,
        $location:Int, $type:Int, $address:String,
  			$latitude:String, $longitude:String
  			$star:Int,
        $rating:Int,
      $availability:String, $facilities:String){
        createhotel(hotel_name:$name, hotel_price:$price, hotel_image_path:$image,
        location_id:$location, hoteltype_id:$type,
        hotel_address:$address, hotel_latitude:$latitude,
        hotel_longitude:$longitude,
        hotel_star:$star, hotel_rating_count:$rating
          , hotel_availability:$availability, hotel_facilities:$facilities){
          hotel_id,
          hotel_name,
          hotel_price,
          hotel_image_path,
          location_id,
          hoteltype_id,
          hotel_address,
          hotel_latitude,
          hotel_longitude,
          hotel_star,
          hotel_rating_count,
          hotel_availability,
          hotel_facilities
        }
      }
      `,
      variables:{
        "name":name,
        "price":price,
        "image":image,
        "location":location,
        "type":type,
        "address":address,
        "latitude":latitude,
        "longitude":longitude,
        "star":star,
        "rating":rating,
        "availability":availability,
        "facilities":facilities
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.createhotel
    ))
  }

  updatehotel(
    id:number,
    name:String,
    price:number,
    image:String,
    location:number,
    type:number,
    address:String,
    latitude:String,
    longitude:String,
    star:number,
    rating:number,
    availability:String,
    facilities:String
  ): Observable<Hotel[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($id:Int, $name:String, $price:Int, $image:String,
        $location:Int, $type:Int, $address:String,
  			$latitude:String, $longitude:String
  			$star:Int,
        $rating:Int,
      $availability:String, $facilities:String){
        updatehotel(hotel_id:$id, hotel_name:$name, hotel_price:$price, hotel_image_path:$image,
        location_id:$location, hoteltype_id:$type,
        hotel_address:$address, hotel_latitude:$latitude,
        hotel_longitude:$longitude,
        hotel_star:$star, hotel_rating_count:$rating
          , hotel_availability:$availability, hotel_facilities:$facilities){
          hotel_id,
          hotel_name,
          hotel_price,
          hotel_image_path,
          location_id,
          hoteltype_id,
          hotel_address,
          hotel_latitude,
          hotel_longitude,
          hotel_star,
          hotel_rating_count,
          hotel_availability,
          hotel_facilities
        }
      }
      `,
      variables:{
        "id":id,
        "name":name,
        "price":price,
        "image":image,
        "location":location,
        "type":type,
        "address":address,
        "latitude":latitude,
        "longitude":longitude,
        "star":star,
        "rating":rating,
        "availability":availability,
        "facilities":facilities
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.updatehotel
    ))
  }

  deletehotel(
    id:number
  ): Observable<Hotel[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($id:Int){
        deletehotel(hotel_id:$id){
          hotel_id,
          hotel_name,
          hotel_price,
          hotel_image_path,
          location_id,
          hoteltype_id,
          hotel_address,
          hotel_latitude,
          hotel_longitude,
          hotel_star,
          hotel_rating_count,
          hotel_availability,
          hotel_facilities
        }
      }
      `,
      variables:{
        "id":id
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.deletehotel
    ))
  }

}
