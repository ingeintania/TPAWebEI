import { Component, OnInit } from '@angular/core';
import { AeroplaneService } from 'src/app/service/aeroplane.service';
import { Aeroplane } from 'src/app/model/Aeroplane';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-createaeroplanemodal',
  templateUrl: './createaeroplanemodal.component.html',
  styleUrls: ['./createaeroplanemodal.component.scss']
})
export class CreateaeroplanemodalComponent implements OnInit {

  aeroplaneData : Aeroplane[]
  aeroplaneDat : Aeroplane

  aId:number
  aName:string
  aCompany:string
  aType:string
  aImage_path:string
  aDepart_date:string
  aDepart_time:string
  aDepart_location:string
  aArrive_date:string
  aArrive_time:string
  aArrive_location:string
  aDuration:number
  aPrice:number
  aPrice_raw:number
  aPrice_tax:number
  aTransit:string
  aTransit_duration:number
  aFacilities:string


  constructor(private service: AeroplaneService, private serviceNotify : ChatService) { }

  ngOnInit() {
  }

  insertData(){
    // console.log(this.bId)
    console.log(this.aName)
    if(this.aName == null){
      alert("All form must be filled!")
    }
    this.service.createaeroplane(this.aName,
      this.aCompany, this.aType, this.aImage_path,
      this.aDepart_date, this.aDepart_time, this.aDepart_location,
      this.aArrive_date, this.aArrive_time, this.aArrive_location,
      this.aDuration, this.aPrice, this.aPrice_raw,
      this.aPrice_tax, this.aTransit, this.aTransit_duration,
      this.aFacilities).subscribe(async result=>{
        this.aeroplaneData=result
        this.serviceNotify.emit('aeroplane', 'New Aeroplane has been added!')
      })
    alert("Success Insert!")
  }

}
