import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { RegistermodalComponent } from './registermodal/registermodal.component';
import { UserService } from '../service/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData : User[];

  id : number
  email : string
  phone : string
  gender : string
  firstname : string
  lastname : string
  city : string
  address : string
  post_code : string
  password : string

  @Input() profileName: string;

  constructor(private dialog: MatDialog) { }

  openDialogLogin(){
    this.dialog.open(LoginmodalComponent)
  }

  openDialogRegister(){
    this.dialog.open(RegistermodalComponent)
  }

  ngOnInit() {
  }

}
