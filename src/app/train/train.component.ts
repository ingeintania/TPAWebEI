import { Component, OnInit } from '@angular/core';
import { TrainService } from '../service/train.service';
import { Train } from '../model/Train';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {
  // panelOpenState = false;
  trainData : Train[]

  dari:String
  ke:String
  classes: String
  depart: String
  arrive:String
  types:String
  sorted:String
  penumpang:String
  pergi:String
  btn:String


  getTrainData(){
    this.service.getTrains().subscribe(async result=>{
      this.trainData=result
    })
  }

  success(){
    alert("Success add Train!")
  }

  reset(){
    this.dari=null
    this.ke=null
    this.classes=null
    this.depart=null
    this.arrive=null
    this.types=null
    this.sorted=null
  }

  constructor(private service:TrainService, private serviceNotify:ChatService) {
    this.getTrainData()



  }

  ngOnInit() {
    // alert("halooo")
    this.serviceNotify.listen('train').subscribe(m => {
      alert(m.toString())
    });
    // alert("halooo")
  }

}
