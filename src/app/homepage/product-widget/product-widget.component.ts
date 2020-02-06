import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AeroplanemodalComponent } from './aeroplanemodal/aeroplanemodal.component';
import { HotelmodalComponent } from './hotelmodal/hotelmodal.component';
import { RentcarmodalComponent } from './rentcarmodal/rentcarmodal.component';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog1(){
    this.dialog.open(AeroplanemodalComponent)
  }

  openDialog2(){
    this.dialog.open(HotelmodalComponent)
  }

  openDialog3(){
    this.dialog.open(RentcarmodalComponent)
  }

  ngOnInit() {
  }

}
