import { Component, OnInit } from '@angular/core';
import { Car } from '../model/Cars';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrls: ['./rentcar.component.scss']
})
export class RentcarComponent implements OnInit {

  carData : Car[]
  carK : Car[] = []
  from : number = 0

  capacity: number
    price: number
    model:String

    brand:String
    sorted:String

    searchData(){
      var fil = document.getElementById("filter-search");
      fil.style.display = "inline";
    }

  setData(): void {
    if (this.from >= this.carData.length) {
      return
    }
    let temp = this.carData.slice(this.from, this.from + 3)
    console.log(temp)
    this.carK.push(...temp)
    this.from += 3
  }

  test(){
    document.onscroll = function () {
      if (window.scrollY + window.innerHeight + window.innerHeight * 80 / 100 >= document.body.scrollHeight) {

        this.setData()
      }
    }.bind(this)
  }

  rmCapacity() {
    var dots = document.getElementById("dotsCapacity");
    var moreText = document.getElementById("rm-capacity");
    var btnText = document.getElementById("lblCapacity");

    if (dots.style.display === "none") {
      dots.style.display = "inline";

      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
  }

  rmModel() {
    var dots = document.getElementById("dotsModel");
    var moreText = document.getElementById("rm-model");
    var btnText = document.getElementById("lblModel");

    if (dots.style.display === "none") {
      dots.style.display = "inline";

      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
  }

  rmBrand() {
    var dots = document.getElementById("dotsBrand");
    var moreText = document.getElementById("rm-brand");
    var btnText = document.getElementById("lblBrand");

    if (dots.style.display === "none") {
      dots.style.display = "inline";

      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
  }


  getCarData(){
    this.service.getCars().subscribe(async result=>{
      this.carData=result
      this.test()
      this.setData()
    })
  }

  success(){
    alert("Success add Car!")
  }

  reset(){
    this.capacity=null
    this.price=null
    this.model=null

    this.brand=null
    this.sorted=null
  }


  constructor(private service:CarService) {
    this.getCarData()
  }

  ngOnInit() {
  }

}
