import { Component, OnInit, Inject } from '@angular/core';
import { Aeroplane } from 'src/app/model/Aeroplane';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UpdateaeroplanemodalComponent } from '../updateaeroplanemodal/updateaeroplanemodal.component';
import { AeroplaneService } from 'src/app/service/aeroplane.service';

@Component({
  selector: 'app-deleteaeroplanemodal',
  templateUrl: './deleteaeroplanemodal.component.html',
  styleUrls: ['./deleteaeroplanemodal.component.scss']
})
export class DeleteaeroplanemodalComponent implements OnInit {
  aeroplaneData: Aeroplane[]
  aeroplaneDat: Aeroplane
  aeroplane: any

  aId: number
  aName: string
  aCompany: string
  aType: string
  aImage_path: string
  aDepart_date: string
  aDepart_time: string
  aDepart_location: string
  aArrive_date: string
  aArrive_time: string
  aArrive_location: string
  aDuration: number
  aPrice: number
  aPrice_raw: number
  aPrice_tax: number
  aTransit: string
  aTransit_duration: number
  aFacilities: string

  constructor(private matdialogRef:
    MatDialogRef<UpdateaeroplanemodalComponent>,
    private service: AeroplaneService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  deleteData() {
    this.service.deleteaeroplane(
      this.aId
    ).subscribe(async result => {
      await (this.aeroplaneData = result)
    })
    alert("Success Delete!")
  }

  ngOnInit() {
    this.aeroplane = JSON.parse(this.data.aeroplane)
    console.log(this.aeroplane.name)

    this.aId = this.aeroplane.id
    this.aName = this.aeroplane.name
    this.aCompany = this.aeroplane.company
    this.aType = this.aeroplane.type
    this.aImage_path = this.aeroplane.image_path
    this.aDepart_date = this.aeroplane.depart_date
    this.aDepart_time = this.aeroplane.depart_time
    this.aDepart_location = this.aeroplane.depart_location
    this.aArrive_date = this.aeroplane.arrive_date
    this.aArrive_time = this.aeroplane.arrive_time
    this.aArrive_location = this.aeroplane.arrive_location
    this.aDuration = this.aeroplane.duration
    this.aPrice = this.aeroplane.price
    this.aPrice_raw = this.aeroplane.price_raw
    this.aPrice_tax = this.aeroplane.price_tax
    this.aTransit = this.aeroplane.transit
    this.aTransit_duration = this.aeroplane.transit_duration
    this.aFacilities = this.aeroplane.facilities
  }

}
