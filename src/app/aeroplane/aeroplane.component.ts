import { Component, OnInit } from '@angular/core';
import { Aeroplane } from '../model/Aeroplane';
import { AeroplaneService } from '../service/aeroplane.service';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-aeroplane',
  templateUrl: './aeroplane.component.html',
  styleUrls: ['./aeroplane.component.scss']
})
export class AeroplaneComponent implements OnInit {

  aeroplaneData : Aeroplane[]
  aeroplaneK : Aeroplane[] = []
  from : number =0

  dari:String
  ke:String
  transit:String
    transitDuration:number
    duration: number
    depart: String
    arrive:String
    company:String
    facility:String
    sorted:String

  setData(): void {
    if (this.from >= this.aeroplaneData.length) {
      return
    }
    let temp = this.aeroplaneData.slice(this.from, this.from + 3)
    console.log(temp)
    this.aeroplaneK.push(...temp)
    this.from += 3
  }

  getSearchData(){
    var fil = document.getElementById("filter-search");
    fil.style.display = "inline";
  }

  test(){
    document.onscroll = function () {
      if (window.scrollY + window.innerHeight + window.innerHeight * 80 / 100 >= document.body.scrollHeight) {

        this.setData()
      }
    }.bind(this)
  }

  getaeroplaneData(){
    this.service.getAeroplane().subscribe(async result=>{
      this.aeroplaneData=result
      this.test()
      this.setData()
    })
  }

  success(){
    alert("Success add aeroplane!")
  }

  reset(){
    this.transit=null
    this.transitDuration=null
    this.duration=null
    this.depart=null
    this.arrive=null
    this.company=null
    this.facility=null
    this.sorted=null
  }


  constructor(private service:AeroplaneService, private serviceNotify:ChatService) {
    this.getaeroplaneData()
  }

  ngOnInit() {
    this.serviceNotify.listen('aeroplane').subscribe(m => {
      alert(m.toString())
    });
    // alert("helppppppppp")
  }

}
