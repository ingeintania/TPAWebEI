import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Hotel } from 'src/app/model/Hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel-map',
  templateUrl: './hotel-map.component.html',
  styleUrls: ['./hotel-map.component.scss']
})
export class HotelMapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;

  hotelData : Hotel[] = [];
  hotelDat : Hotel;
  searchTerm : String;
  rating: number;
  area:String;
  price:number;
  facility:String;
  sorted:String

  private map;
  marker:any

  hotelArea : Hotel[] = [];

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


  getHotelData(){
    this.service.getHotel().subscribe(async result=>{
      this.hotelData=result
    })
  }


  ngOnInit() {
    // this.renderMap();
    this.getHotelData()
  }

  reset(){
    this.searchTerm=null
    this.rating=null
    this.area=null
    this.price=null
    this.facility=null
  }

  //   customIcon : any = L.icon({
  //     iconUrl: 'https://pngimg.com/uploads/spongebob/spongebob_PNG13.png',
  //     shadowUrl: 'https://pngimg.com/uploads/spongebob/spongebob_PNG13.png',

  //     iconSize:     [38, 95], // size of the icon
  //     shadowSize:   [50, 64], // size of the shadow
  //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //     shadowAnchor: [4, 62],  // the same for the shadow
  //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  // });
  // }



  private initMap(): void {


    this.map = L.map('map', {
      center: [-9, 117],
      zoom: 10

    });


    this.service.getHotel().subscribe(async result=>{
      this.hotelData=result


      for( let i = 0; i < this.hotelData.length; i++){

        console.log('haloooooooooo')
        console.log(this.hotelData.length)
        console.log(this.hotelData[i].hotel_latitude)
        console.log(this.hotelData[i].hotel_longitude)
        L.marker([ this.hotelData[i].hotel_latitude, this.hotelData[i].hotel_longitude], {icon: L.icon({
          iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
          // shadowUrl: 'https://pngimg.com/uploads/spongebob/spongebob_PNG13.png',

          iconSize:     [40, 60], // size of the icon
          // shadowSize:   [50, 64], // size of the shadow
          // iconAnchor:   [50, 94], // point of the icon which will correspond to marker's location
          // shadowAnchor: [4, 62],  // the same for the shadow
          // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        })}).addTo(this.map).bindPopup(this.hotelData[i].hotel_name+"<br>"+'Rp'+this.hotelData[i].hotel_price+',-', {autoClose:false}).openPopup()
      }

      this.hotelData.forEach( (element) => {
        console.log(element.hotel_latitude)
    });
    console.log('haloooooooooo')

    this.map.on('moveend', function(){

      let latitude = parseFloat(this.map.getCenter().lat)
      let longitude = parseFloat( this.map.getCenter().lng)

      console.log("Latitude "+latitude)
      console.log("Longitude "+longitude)

      this.service.getHotelByArea(latitude, longitude).subscribe(async result=>{
        this.hotelArea=result
      })

    }.bind(this))

    })



  }

  constructor(private service:HotelService) { }

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
