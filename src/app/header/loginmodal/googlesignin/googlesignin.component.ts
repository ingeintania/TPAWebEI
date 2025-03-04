import {Component, ElementRef,OnInit} from '@angular/core';
declare const gapi: any;
import {MatDialog} from '@angular/material';
import { HeaderComponent } from '../../header.component';

@Component({
  selector: 'app-googlesignin',
  templateUrl: './googlesignin.component.html',
  styleUrls: ['./googlesignin.component.scss']
})
export class GooglesigninComponent implements OnInit {

  private clientId:string = '452123500757-nr83g1hc4ck15jgle8mpu4erctd9p50a.apps.googleusercontent.com';

  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope
      });
      that.attachSignin(that.element.nativeElement.firstChild);
    });
  }
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE

        

      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }
  
  constructor(private element: ElementRef, private dialog: MatDialog) {
    console.log('ElementRef: ', this.element);
  }

  ngOnInit() {
  }

}
