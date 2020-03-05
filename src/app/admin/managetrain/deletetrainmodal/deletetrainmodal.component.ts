import { Component, OnInit, Inject } from '@angular/core';
import { Train } from 'src/app/model/Train';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UpdatetrainmodalComponent } from '../updatetrainmodal/updatetrainmodal.component';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-deletetrainmodal',
  templateUrl: './deletetrainmodal.component.html',
  styleUrls: ['./deletetrainmodal.component.scss']
})
export class DeletetrainmodalComponent implements OnInit {

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

    deleteData(){
      // if(this.tName == null){
      //   alert("All field must be filled!")
      // }
      this.service.deletetrain(this.tId).subscribe(async result=>{
          await (this.trainData=result)
        })
      alert("Success Delete!")
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
