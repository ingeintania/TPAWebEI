import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Car } from '../model/Cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private apollo: Apollo) { }

  getCars(): Observable<Car[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        cars{
          car_id
          car_image_path
          car_model
          car_price
          car_passenger
          car_luggage
          car_vendor
          car_location
        }
      }
      `,
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.cars
    ))
  }
}
