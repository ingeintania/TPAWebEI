import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AeroplanemodalComponent } from '../aeroplanemodal/aeroplanemodal.component';
import { RentcarmodalComponent } from '../rentcarmodal/rentcarmodal.component';

@Component({
  selector: 'app-hotelmodal',
  templateUrl: './hotelmodal.component.html',
  styleUrls: ['./hotelmodal.component.scss']
})
export class HotelmodalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog1(){
    this.dialog.open(AeroplanemodalComponent)
  }

  openDialog3(){
    this.dialog.open(RentcarmodalComponent)
  }

  ngOnInit() {
  }

}
