import {Component, ElementRef,OnInit} from '@angular/core';
declare const gapi: any;
import {MatDialog} from '@angular/material';
import { RegistermodalComponent } from '../registermodal/registermodal.component';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.scss']
})
export class LoginmodalComponent implements OnInit {
  userData : User[]

  email:string
  password:string

  constructor(private dialog: MatDialog, private service: UserService, public router: Router) {

  }

  login(){
    if(this.email==null){
      alert("All Data Must be filled!")
    }
    if(!this.email.includes('@')){
      alert("Email must contains '@'!")
    }
    if(this.password==null){
      alert("All Data Must be filled!")
    }
    if(this.password.length < 5){
      alert("Password must contains at least 5 characters!")
    }

    console.log(this.email)
    console.log(this.password)
    this.service.getLogin(this.email, this.password).subscribe(async result=>{
      this.userData=result
      console.log(this.userData)
      if(this.userData== null){
        alert("User hasn't been registred!")
      }
      else if(this.userData!= null){
        alert("Success Login!")
        if(this.userData[0].user_email.includes('admin')){
          this.router.navigate(['/admin'])
        }
      }
    })
    this.dialog.closeAll()
  }

  openDialog(){
    this.dialog.open(RegistermodalComponent)
  }

  emptyError(){
    alert("Name must be filled!")
  }

  ngOnInit() {
  }

}


// @Component({
//   selector: 'my-app',
//   template: `{{title}}
//     <google-signin></google-signin>
//     <footer>Angular version: {{angularVersion}}</footer>`
// })
// export class AppComponent {
//   title     = "Google SignIn button";
//   angularVersion = 'latest stable';
//   constructor() { console.clear(); }
// }
