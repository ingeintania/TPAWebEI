import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, from } from 'rxjs';
import gql from 'graphql-tag';
import { User } from '../model/User'
import {map, last} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  getUser(email:string): Observable<User[]>{
    return this.apollo.query<any>({
      query: gql`
      query ($email : String!) {
        userbyemail (user_email: $email){
          user_id
    			user_email
          user_phone
    			user_gender
          user_firstname
          user_lastname
    			user_city
    			user_address
    			user_post_code
          user_password
          user_language
        }
      }
      `,
      variables:{
        "email":email
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.userbyemail
    ))
  }

  getLogin(email:string, password:string): Observable<User[]>{
    return this.apollo.query<any>({
      query: gql`
      query($email:String, $password:String){
        getlogin(user_email:$email, user_password:$password){
          user_id
          user_email
          user_phone
          user_gender
          user_firstname
          user_lastname
          user_city
          user_address
          user_post_code
          user_password
          user_language
        }
      }
      `,
      variables:{
        "email":email,
        "password":password,
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.getlogin
    ))
  }



  createuser(
    email:string,
    phone:string,
    gender:string,
    firstname:string,
    lastname:string,
    city:string,
    address:string,
    post_code:string,
    password:string,
    language:string
  ): Observable<User[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($email:String, $phone:String, $gender:String,
        $firstname:String, $lastname:String, $city:String,
        $address:String, $post_code:String, $password:String, $language:String){
          createuser(
            user_email:$email, user_phone:$phone, user_gender:$gender,
            user_firstname:$firstname, user_lastname:$lastname,
            user_city:$city, user_address:$address,
            user_post_code:$post_code, user_password:$password,
            user_language:$language
          ){
            user_id
                  user_email
                  user_phone
                  user_gender
                  user_firstname
                  user_lastname
                  user_city
                  user_address
                  user_post_code
                  user_password
                  user_language
          }
        }
      `,
      variables:{
        "email":email,
        "phone":phone,
        "gender":gender,
        "firstname":firstname,
        "lastname":lastname,
        "city":city,
        "address":address,
        "post_code":post_code,
        "password":password,
        "language":language
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.createuser
    ))
  }




  updateuser(
    id:number,
    email:string,
    phone:string,
    gender:string,
    firstname:string,
    lastname:string,
    city:string,
    address:string,
    post_code:string,
    password:string,
    language:string
  ): Observable<User[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($id:Int, $email:String, $phone:String, $gender:String,
        $firstname:String, $lastname:String, $city:String,
        $address:String, $post_code:String, $password:String, $language:String){
          updateuser(user_id:$id,
            user_email:$email, user_phone:$phone, user_gender:$gender,
            user_firstname:$firstname, user_lastname:$lastname,
            user_city:$city, user_address:$address,
            user_post_code:$post_code, user_password:$password,
            user_language:$language
          ){
            user_id
                  user_email
                  user_phone
                  user_gender
                  user_firstname
                  user_lastname
                  user_city
                  user_address
                  user_post_code
                  user_password
                  user_language
          }
        }
      `,
      variables:{
        "id":id,
        "email":email,
        "phone":phone,
        "gender":gender,
        "firstname":firstname,
        "lastname":lastname,
        "city":city,
        "address":address,
        "post_code":post_code,
        "password":password,
        "language":language
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.updateuser
    ))
  }
}

