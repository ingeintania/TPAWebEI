import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { HotelmodalComponent } from '../hotelmodal/hotelmodal.component';
import { RentcarmodalComponent } from '../rentcarmodal/rentcarmodal.component';

@Component({
  selector: 'app-aeroplanemodal',
  templateUrl: './aeroplanemodal.component.html',
  styleUrls: ['./aeroplanemodal.component.scss']
})
export class AeroplanemodalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog2(){
    // alert("HALO")
    this.dialog.open(HotelmodalComponent)
  }

  openDialog3(){
    // alert("HALO")
    this.dialog.open(RentcarmodalComponent)
  }

  ngOnInit() {
  }

}
