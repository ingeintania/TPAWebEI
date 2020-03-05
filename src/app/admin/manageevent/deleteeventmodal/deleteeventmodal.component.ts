import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Entertainment } from 'src/app/model/Entertainment';
import { EntertainmentService } from 'src/app/service/Entertainment.service';

@Component({
  selector: 'app-deleteeventmodal',
  templateUrl: './deleteeventmodal.component.html',
  styleUrls: ['./deleteeventmodal.component.scss']
})
export class DeleteeventmodalComponent implements OnInit {

  entertainmentData : Entertainment[]
  entertainment : Entertainment
  eId : number
  eName : String
  ePrice : number
  eImagePath1 : String
  rbCategory : number
  eAddress : String
  eLatitude : String
  eLongitude : String
  eType : String
  eStartDate : String
  eEndDate : String
  eDescription : String
  eT_C : String
  

  constructor(private matdialogRef : MatDialogRef<DeleteeventmodalComponent>, private service:EntertainmentService,
    @Inject(MAT_DIALOG_DATA) public data:any) { 


    }

    deleteData(){
      console.log(this.eId)
      console.log(this.eName)
      console.log(this.ePrice)
      console.log(this.eImagePath1)
      console.log(this.rbCategory)
      console.log(this.eAddress)
      console.log(this.eLatitude)
      console.log(this.eLongitude)
      console.log(this.eType)
      console.log(this.eStartDate)
      console.log(this.eEndDate)
      console.log(this.eDescription)
      console.log(this.eT_C)
      this.service.deleteentertainment(this.eId).subscribe(async result=>{
          this.entertainmentData=result
        })
      alert("Success Delete!")
    }
  

  ngOnInit() {

    this.entertainment= JSON.parse(this.data.entertainment)
    console.log(this.entertainment.entertainment_id)
    this.eId = this.entertainment.entertainment_id
    this.eName = this.entertainment.entertainment_name
    this.ePrice = this.entertainment.entertainment_price
    this.eImagePath1 = this.entertainment.entertainment_image_path1
    this.eAddress = this.entertainment.entertainment_address
    this.eLatitude = this.entertainment.entertainment_latitude
    this.eLongitude = this.entertainment.entertainment_longitude
    this.eType = this.entertainment.entertainment_type
    this.eStartDate = this.entertainment.entertainment_start_date
    this.eEndDate = this.entertainment.entertainment_end_date
    this.eDescription = this.entertainment.entertainment_description
    this.eT_C = this.entertainment.entertainment_t_c
  }

}
