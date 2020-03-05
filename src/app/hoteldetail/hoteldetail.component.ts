import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Hotel } from '../model/Hotel';
import {HotelService} from '../service/hotel.service';
import {HoteldetailService} from '../service/hoteldetail.service';
import { async } from '@angular/core/testing';
import { Hoteldetail } from '../model/Hoteldetail';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SlidermodalComponent } from './slidermodal/slidermodal.component';

@Component({
  selector: 'app-hoteldetail',
  templateUrl: './hoteldetail.component.html',
  styleUrls: ['./hoteldetail.component.scss']
})
export class HoteldetailComponent implements OnInit {
  hotel : Hotel
  hotel_id;
  sub;
  hotelWe:Hotel[]
  hotelS:Hotel[]
  hotelW:any

  hotelData : Hotel[]

  private map;
  marker:any


  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router, private service:HotelService, private dialog: MatDialog) { }

    gethotelData(){
      this.service.getHotel().subscribe(async result=>{
        this.hotelData=result

      })
    }

  openSlider(){
    this.dialog.open(SlidermodalComponent)
  }

  ngOnInit() {
    this.gethotelData()
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
       this.hotel_id = params.get('hotel_id')
       console.log(this.hotel_id)

   });

    this.service.getHotel().subscribe(async result=>{
      this.hotel=result.find(p => p.hotel_id==this.hotel_id);
    })


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
     this._router.navigate(['hotel']);
  }

  private initMap(): void {


    this.map = L.map('map', {
      center: [-9, 117],
      zoom: 10

    });


    this.service.getHotel().subscribe(async result=>{
      this.hotelData=result

        console.log('haloooooooooo')
        console.log(this.hotelData.length)
        console.log(this.hotelData[this.hotel_id].hotel_latitude)
        console.log(this.hotelData[this.hotel_id].hotel_longitude)
        L.marker([ this.hotelData[this.hotel_id].hotel_latitude, this.hotelData[this.hotel_id].hotel_longitude], {icon: L.icon({
          iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
          // shadowUrl: 'https://pngimg.com/uploads/spongebob/spongebob_PNG13.png',

          iconSize:     [40, 70], // size of the icon
          shadowSize:   [50, 64], // size of the shadow
          iconAnchor:   [50, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        })}).addTo(this.map).bindPopup(this.hotel.hotel_name+"<br>"+'Rp'+this.hotel.hotel_price+',-', {autoClose:false}).openPopup()
      // }

      this.hotelData.forEach( (element) => {
        console.log(element.hotel_latitude)
    });
    console.log('haloooooooooo')

    })

  }


  ngAfterViewInit(): void {

    this.initMap()
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });


  console.log(this.map)

  tiles.addTo(this.map);

  }

}
