import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  constructor(private dialog: MatDialog) { }

  openDialog(){
    // alert("HALO")
    this.dialog.open(LoginmodalComponent)
  }
  
  ngOnInit() {
  }

}
