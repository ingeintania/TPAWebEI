import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'
import { HotelmodalComponent } from '../hotelmodal/hotelmodal.component';
import { AeroplanemodalComponent } from '../aeroplanemodal/aeroplanemodal.component';

@Component({
  selector: 'app-rentcarmodal',
  templateUrl: './rentcarmodal.component.html',
  styleUrls: ['./rentcarmodal.component.scss']
})
export class RentcarmodalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog1(){
    this.dialog.open(AeroplanemodalComponent)
  }

  openDialog2(){
    this.dialog.open(HotelmodalComponent)
  }

  ngOnInit() {
  }

}
