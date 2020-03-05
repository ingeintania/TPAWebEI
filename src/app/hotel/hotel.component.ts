import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/Hotel';
import {HotelService} from '../service/hotel.service';
import {HoteldetailService} from '../service/hoteldetail.service';
import { async } from '@angular/core/testing';
import { Hoteldetail } from '../model/Hoteldetail';
import { Hotelfacility } from '../model/Hotelfacility';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  hotelData : Hotel[];
  hotelK : Hotel[] = [];
  from : number = 0

  hotelfacility : Hotelfacility[]
  hotelfacilityDat : Hotelfacility
  searchTerm : String;
  rating: number;
  area:String;
  price:number;
  facility:String;

  getHotelData(){
    this.service.getHotel().subscribe(async result=>{
      this.hotelData=result
    })
  }

  searchHotel(){
    var fil = document.getElementById("filter-search");
    fil.style.display = "inline";
  }

  rmSearch() {
    var dots = document.getElementById("dotsRating");
    var moreText = document.getElementById("rm-rating");
    var btnText = document.getElementById("lblRating");

    if (dots.style.display === "none") {
      dots.style.display = "inline";

      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
  }

  rmRating() {
    var dots = document.getElementById("dotsRating");
    var moreText = document.getElementById("rm-rating");
    var btnText = document.getElementById("lblRating");

    if (dots.style.display === "none") {
      dots.style.display = "inline";

      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
  }

  rmFacility() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("rm-facility");
    var btnText = document.getElementById("lblFacility");

    if (dots.style.display === "none") {
      dots.style.display = "inline";

      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
  }

  rmArea() {
    var dots = document.getElementById("dotsArea");
    var moreText = document.getElementById("rm-area");
    var btnText = document.getElementById("lblArea");

    if (dots.style.display === "none") {
      dots.style.display = "inline";

      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
  }

  reset(){
    this.searchTerm=null
    this.rating=null
    this.area=null
    this.price=null
    this.facility=null
  }

  constructor(private service:HotelService, private serviceNotify:ChatService) {
    console.log(this.hotelfacility)
    this.getHotelData()
  }

  ngOnInit() {
    this.serviceNotify.listen('hotel').subscribe(m => {
      alert(m.toString())
    });
    // alert("helppppppppp")

  }




}
