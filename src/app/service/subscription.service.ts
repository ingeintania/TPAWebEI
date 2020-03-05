import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, from } from 'rxjs';
import gql from 'graphql-tag';
import { User } from '../model/User'
import {map, last} from 'rxjs/operators'
import { Subscription } from '../model/Subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private apollo: Apollo) { }

  insertsubscription(email:string): Observable<Subscription[]>{
    return this.apollo.query<any>({
      query: gql`
      mutation($email:String!){
        insertsubscription(email:$email){
          id
          email
        }
      }
      `,
      variables:{
        "email":email,
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.insertsubscription
    ))
  }
}
