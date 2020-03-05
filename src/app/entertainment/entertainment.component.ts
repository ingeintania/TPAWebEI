import { Component, OnInit } from '@angular/core';
import { Entertainment } from '../model/Entertainment';
import {EntertainmentService} from '../service/Entertainment.service';
import { async } from '@angular/core/testing';
import { Location } from '../model/Location';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainmentData : Entertainment[];
  entertainmentK : Entertainment[] = []
  from : number = 0

  entertainmentDat : Entertainment;
  locationData : Location[]
  locationDat : Location
  bestoffer : String;
  activity: String;
  attraction:number;
  event:String;

  setData(): void {
    if (this.from >= this.entertainmentData.length) {
      return
    }
    let temp = this.entertainmentData.slice(this.from, this.from + 3)
    console.log(temp)
    this.entertainmentK.push(...temp)
    this.from += 3
  }

  test(){
    document.onscroll = function () {
      if (window.scrollY + window.innerHeight + window.innerHeight * 80 / 100 >= document.body.scrollHeight) {

        this.setData()
      }
    }.bind(this)
  }

  getEntertainmentData(){
    this.service.getEntertainment().subscribe(async result=>{
      this.entertainmentData=result
      this.test()
      this.setData()
    })
  }

  getSuccessNotification(){
    alert("Success!")
  }

  constructor(private service:EntertainmentService, private serviceNotify:ChatService) {
    this.getEntertainmentData()
  }

  ngOnInit() {
    // alert("FIRSTTTTTTTTTTTT")

    this.serviceNotify.listen('event').subscribe(m => {
      alert(m.toString())
    });
    // alert("helppppppppp")

  }




}
