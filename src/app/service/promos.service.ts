import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Promo } from '../model/Promo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PromosService {

  constructor(private apollo: Apollo) { }

  getPromo(): Observable<Promo[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        promos{
          promo_id
          promo_title
          promo_content
          promo_category
          promo_image_path
          promo_periode
        }
      }
      `,                         
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.promos
    ))
  }
}
