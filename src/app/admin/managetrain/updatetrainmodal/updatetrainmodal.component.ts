import { Component, OnInit, Inject } from '@angular/core';
import { Train } from 'src/app/model/Train';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-updatetrainmodal',
  templateUrl: './updatetrainmodal.component.html',
  styleUrls: ['./updatetrainmodal.component.scss']
})
export class UpdatetrainmodalComponent implements OnInit {

  trainData : Train[]
  trainDat : Train
  train:any

  tId : number;
  tName: string;
  tClasses: string;
  tType: string;
  tDepart_time: string;
  tDepart_location: string;
  tArrive_time: string;
  tArrive_location:string;
  tDuration:number;
  tDetail_price:number;

  constructor(private matdialogRef : MatDialogRef<UpdatetrainmodalComponent>, private service:TrainService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    updateData(){
      if(this.tName == null || this.tClasses==null || this.tType==null||
        this.tDepart_time==null || this.tDepart_location == null ||
        this.tArrive_time==null || this.tArrive_location==null ||
        this.tDuration==null || this.tDetail_price==null){
        alert("All form must be filled!")
      }else{

        this.service.updatetrain(this.tId, this.tName,
          this.tClasses, this.tType, this.tDepart_time,
          this.tDepart_location, this.tArrive_time,
          this.tArrive_location, this.tDuration,
          this.tDetail_price).subscribe(async result=>{
            await (this.trainData=result)
          })
        alert("Success Update!")
      }
    }

  ngOnInit() {
    this.train = JSON.parse(this.data.train)
    console.log(this.train.name)

    this.tId=this.train.id
    this.tName = this.train.name
    this.tClasses = this.train.classes
    this.tType = this.train.type
    this.tDepart_time = this.train.depart_time
    this.tDepart_location=this.train.depart_location
    this.tArrive_time = this.train.arrive_time
    this.tArrive_location = this.train.arrive_location
    this.tDuration = this.train.duration
    this.tDetail_price = this.train.detail_price
  }

}
