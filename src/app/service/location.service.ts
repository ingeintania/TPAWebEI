import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, from } from 'rxjs';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators'
import { Location } from '../model/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private apollo: Apollo) { }

  getLocation(): Observable<Location[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        locations{
          location_id
          location_name
        }
      }
      `,                         
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.locations
    ))
  }
}
