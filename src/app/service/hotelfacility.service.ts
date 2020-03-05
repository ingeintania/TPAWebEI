import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, from } from 'rxjs';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators'
import { Hotelfacility } from '../model/Hotelfacility';

@Injectable({
  providedIn: 'root'
})
export class HotelfacilityService {

  constructor(private apollo: Apollo) { }

  getHotel(): Observable<Hotelfacility[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        hotelfacilities{
          hotelfacility_id
          hotelfacility_name
          hotelid
        }
      }
      `,                         
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.hotelfacilities
    ))
  }
}
