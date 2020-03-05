import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/Hotel';
import { HotelService } from 'src/app/service/hotel.service';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-createhotelmodal',
  templateUrl: './createhotelmodal.component.html',
  styleUrls: ['./createhotelmodal.component.scss']
})
export class CreatehotelmodalComponent implements OnInit {

  hotelData : Hotel[];
  hotelDat : Hotel;

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


  constructor(private service : HotelService, private serviceNotify : ChatService) { }

  ngOnInit() {

  }

  insertData(){
    // console.log(this.bId)
    console.log(this.hName)
    if(this.hName == null|| this.hPrice == null || this.hImagePath1 == null || this.rbLocation == null ||
      this.rbType == null|| this.hAddress== null || this.hLatitude == null|| this.hLongitude == null|| this.hStar == null||
      this.hRating == null|| this.hAvailability == null|| this.hFacilities == null){
      alert("All form must be filled!")
    }
    else{
      this.service.createhotel(this.hName, this.hPrice, this.hImagePath1,
        this.rbLocation, this.rbType, this.hAddress,
        this.hLatitude, this.hLongitude, this.hStar,
        this.hRating, this.hAvailability, this.hFacilities).subscribe(async result=>{
          this.hotelData=result
        this.serviceNotify.emit('hotel', 'New Hotel has been added!')
        })
      alert("Success Insert!")
    }
  }
}
