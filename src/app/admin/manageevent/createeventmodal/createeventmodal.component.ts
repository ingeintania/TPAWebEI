import { Component, OnInit } from '@angular/core';
import { Entertainment } from 'src/app/model/Entertainment';
import { EntertainmentService } from 'src/app/service/Entertainment.service';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-createeventmodal',
  templateUrl: './createeventmodal.component.html',
  styleUrls: ['./createeventmodal.component.scss']
})
export class CreateeventmodalComponent implements OnInit {
  entertainmentData : Entertainment[];
  entertainmentDat : Entertainment;
  eName : String
  ePrice : number
  eImagePath1 : String
  eImagePath2 : String
  eImagePath3 : String
  eImagePath4 : String
  eImagePath5 : String
  rbCategory : number
  eAddress : String
  eLatitude : String
  eLongitude : String
  eType : String
  eStartDate : String
  eEndDate : String
  eDescription : String
  eT_C : String

  constructor(private service:EntertainmentService, private serviceNotify:ChatService) { }

  ngOnInit() {
  }

  insertData(){
    console.log(this.eName)
    console.log(this.ePrice)
    if(this.eName == null||this.eImagePath1==null||this.rbCategory==null||this.eAddress==null||
      this.eLatitude==null||this.eLongitude==null||this.eType==null||this.eStartDate==null||
      this.eEndDate==null||this.eDescription==null||this.eT_C){
        alert("All form must be filled!")
    }else{

      this.service.createentertainment(this.eName, this.ePrice,
        this.eImagePath1, this.eImagePath1, this.eImagePath1,
        this.eImagePath1, this.eImagePath1, this.rbCategory,
        this.eAddress, this.eLatitude, this.eLongitude,
        this.eType, this.eStartDate, this.eEndDate,
        this.eDescription, this.eT_C).subscribe(async result=>{
          this.entertainmentData=result
          this.serviceNotify.emit('event', 'New Event has been added!')
        })
      alert("Success Insert!")
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

}
