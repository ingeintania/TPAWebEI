import { Component, OnInit } from '@angular/core';

declare var FB: any;

@Component({
  selector: 'app-facebooksignin',
  templateUrl: './facebooksignin.component.html',
  styleUrls: ['./facebooksignin.component.scss']
})
export class FacebooksigninComponent implements OnInit {

  imgPath: string;

  constructor() { }
  ngOnInit() {
    FB.init({
      appId: '860975747695344',
      cookie: false,
      xfbml: true,
      version: 'v5.0'
    });
  }
  facebookLogin() {
    console.log('submit login to facebook');
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        console.log(response.authResponse.userID);
        FB.api(
          '/me',
          'GET',
          {},
          (userData) => {
            console.table(userData);
          }
        );
        FB.api('/me', 'GET', { fields: 'first_name,last_name,name,id,picture.width(150).height(150),email' },
          (res) => {
            this.imgPath = res.picture.data.url;
            console.log(this.imgPath);
            console.log(res);
            
          });
      } else {
        console.log('User login failed');
      }
    }, { scope: 'email' });

  }


}
