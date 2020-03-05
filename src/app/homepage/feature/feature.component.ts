import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/service/hotel.service';
import { Hotel } from 'src/app/model/Hotel';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  hotelData : Hotel[];
  loaded:Boolean = false

  getHotelData(){
    this.service.getHotel().subscribe(async result=>{
      this.hotelData=result
    })
    setTimeout(() => {
      this.loaded = true
    }, 2000)
  }

  constructor(private service:HotelService) {
    this.getHotelData()
  }

  ngOnInit() {
  }

}
