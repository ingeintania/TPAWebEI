import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, from } from 'rxjs';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import { Hoteldetail } from '../model/Hoteldetail';

@Injectable({
  providedIn: 'root'
})
export class HoteldetailService {

  constructor(private apollo: Apollo) { }

  getHoteldetail(): Observable<Hoteldetail[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        hotelfacilitybyhotel{
          hotel{
            hotel_id
            hotel_name
            hotel_price
            hotel_image_path
            location_id     
            hoteltype_id
            hotel_address
            hotel_star
            hotel_rating_count
            hotel_availability
          }
          hotelfacility{
            hotelfacility_id
            hotelfacility_name
          }
        }
      }
      `,
      // variables:{
      //   "hotel_id":hotel_id
      // },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.hotelfacilitybyhotel
    ))
  }
}
