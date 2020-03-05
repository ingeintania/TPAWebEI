import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Entertainment } from 'src/app/model/Entertainment';
import { EntertainmentService } from 'src/app/service/Entertainment.service';

@Component({
  selector: 'app-updateeventmodal',
  templateUrl: './updateeventmodal.component.html',
  styleUrls: ['./updateeventmodal.component.scss']
})
export class UpdateeventmodalComponent implements OnInit {
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


  constructor(private matdialogRef : MatDialogRef<UpdateeventmodalComponent>, private service:EntertainmentService,
    @Inject(MAT_DIALOG_DATA) public data:any) {


    }

    updateData(){
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
      if(this.eName == null||this.eImagePath1==null||this.rbCategory==null||this.eAddress==null||
        this.eLatitude==null||this.eLongitude==null||this.eType==null||this.eStartDate==null||
        this.eEndDate==null||this.eDescription==null||this.eT_C){
          alert("All form must be filled!")
      }else{

        this.service.updateentertainment(this.eId, this.eName, this.ePrice,
          this.eImagePath1, this.eImagePath1, this.eImagePath1,
          this.eImagePath1, this.eImagePath1, this.rbCategory,
          this.eAddress, this.eLatitude, this.eLongitude,
          this.eType, this.eStartDate, this.eEndDate,
          this.eDescription, this.eT_C).subscribe(async result=>{
            await (this.entertainmentData=result)
          })
        alert("Success Update!")
      }
    }

    onClick(cmd : any){
      // let cmd = btn.dataset['command'];
      if(cmd === 'createlink') {
        let url = prompt("Enter the link here: ", "http:\/\/");
        document.execCommand(cmd, false, url);
      } else {
        document.execCommand(cmd, false, null);
      }
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
