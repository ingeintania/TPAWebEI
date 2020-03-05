import { Component, OnInit, Inject } from '@angular/core';
import { Hotel } from 'src/app/model/Hotel';
import { HotelService } from 'src/app/service/hotel.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-updatehotelmodal',
  templateUrl: './updatehotelmodal.component.html',
  styleUrls: ['./updatehotelmodal.component.scss']
})
export class UpdatehotelmodalComponent implements OnInit {
  hotelData : Hotel[];
  hotelDat : Hotel;
  hotel : any

  hId : number
  hName : String
  hPrice : number
  hImagePath1 : String
  rbLocation : number
  rbType : number
  hAddress : String
  hLatitude : String
  hLongitude : String
  hStar : number
  hRating : number
  hAvailability : String
  hFacilities : String



  constructor(private matdialogRef : MatDialogRef<UpdatehotelmodalComponent>, private service:HotelService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  updateData(){
      console.log(this.hId)
      console.log(this.hName)
      console.log(this.hPrice)
      console.log(this.hImagePath1)
      console.log(this.rbLocation)
      console.log(this.rbType)
      console.log(this.hAddress)
      console.log(this.hLatitude)
      console.log(this.hLongitude)
      console.log(this.hStar)
      console.log(this.hRating)
      console.log(this.hAvailability)
      console.log(this.hFacilities)
      if(this.hName == null|| this.hPrice == null || this.hImagePath1 == null || this.rbLocation == null ||
        this.rbType == null|| this.hAddress== null || this.hLatitude == null|| this.hLongitude == null|| this.hStar == null||
        this.hRating == null|| this.hAvailability == null|| this.hFacilities == null){
        alert("All form must be filled!")
      }else{
        this.service.updatehotel(this.hId, this.hName, this.hPrice,
          this.hImagePath1, this.rbLocation, this.rbType,
          this.hAddress, this.hLatitude, this.hLongitude,
          this.hStar, this.hRating, this.hAvailability, this.hFacilities).subscribe(async result=>{
            await (this.hotelData=result)
          })
        alert("Success Update!")
      }
    }

  ngOnInit() {
    // console.table(this.data.hotel)
    this.hotel = JSON.parse(this.data.hotel)
    console.log(this.hotel.name)

    this.hId = this.hotel.id
    this.hName = this.hotel.name
    this.hPrice = this.hotel.price
    this.hImagePath1 = this.hotel.image
    this.rbLocation = this.hotel.location
    this.rbType = this.hotel.hoteltype
    this.hAddress = this.hotel.address
    this.hStar = this.hotel.star
    this.hRating = this.hotel.rating_count
    this.hAvailability = this.hotel.availability
    this.hFacilities = this.hotel.facilities
    this.hLatitude = this.hotel.latitude
    this.hLongitude = this.hotel.longitude
    this.hAvailability = this.hotel.availability
  }

}
