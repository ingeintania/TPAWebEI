import { Component, OnInit } from '@angular/core';
import { Entertainment } from '../../model/Entertainment';
import {EntertainmentService} from '../../service/Entertainment.service';
import { async } from '@angular/core/testing';
import { Location } from '../../model/Location';

@Component({
  selector: 'app-entertainmentsearch',
  templateUrl: './entertainmentsearch.component.html',
  styleUrls: ['./entertainmentsearch.component.scss']
})
export class EntertainmentsearchComponent implements OnInit {
  entertainmentData : Entertainment[];
  entertainmentDat : Entertainment;
  locationData : Location[]
  locationDat : Location
  searchTerm:String
  category : String;
  price: number;
  start_date:Date;
  end_date:Date;
  entertainmentK : Entertainment[] = []
  from : number = 0

  // entertainmentDat : Entertainment;
  // locationData : Location[]
  // locationDat : Location
  bestoffer : String;
  activity: String;
  attraction:number;
  event:String;

  // getEntertainmentData(){
  //   this.service.getEntertainment().subscribe(async result=>{
  //     this.entertainmentData=result
  //   })
  // }

  reset(){
    this.category=null
    this.price=null
    this.start_date=null
    this.end_date=null
  }

  getSuccessNotification(){
    alert("Success!")
  }

  constructor(private service:EntertainmentService) {
    this.getEntertainmentData()
  }

  ngOnInit() {

  }

  // entertainmentData : Entertainment[];

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

  // getSuccessNotification(){
  //   alert("Success!")
  // }

  // constructor(private service:EntertainmentService, private serviceNotify:ChatService) {
  //   this.getEntertainmentData()
  // }

  // ngOnInit() {
  //   // alert("FIRSTTTTTTTTTTTT")

  //   this.serviceNotify.listen('event').subscribe(m => {
  //     alert(m.toString())
  //   });
  //   // alert("helppppppppp")

  // }

}
