import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/service/train.service';
import { Train } from 'src/app/model/Train';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-createtrainmodal',
  templateUrl: './createtrainmodal.component.html',
  styleUrls: ['./createtrainmodal.component.scss']
})
export class CreatetrainmodalComponent implements OnInit {

  trainData : Train[]
  trainDat : Train

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

  constructor(private service : TrainService, private serviceNotify : ChatService) { }

  ngOnInit() {
  }

  insertData(){
    // console.log(this.bId)
    console.log(this.tName)
    if(this.tName == null || this.tClasses==null || this.tType==null||
      this.tDepart_time==null || this.tDepart_location == null ||
      this.tArrive_time==null || this.tArrive_location==null ||
      this.tDuration==null || this.tDetail_price==null){
      alert("All form must be filled!")
    }else{

      this.service.createtrain(this.tName, this.tClasses, this.tType,
        this.tDepart_time, this.tDepart_location, this.tArrive_time,
        this.tArrive_location, this.tDuration, this.tDetail_price).subscribe(async result=>{
          this.trainData=result
          this.serviceNotify.emit('train', 'New Train has been added!')

        })
      alert("Success Insert!")
    }
  }

}
