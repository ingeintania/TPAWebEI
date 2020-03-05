import { Component, OnInit } from '@angular/core';
import { Promo } from '../model/Promo';
import { PromosService } from '../service/promos.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  promoData : Promo[]
  promoDat :Promo

  getPromoData(){
    this.service.getPromo().subscribe(async result=>{
      this.promoData=result
    })
  }

  constructor(private service:PromosService) { 
    this.getPromoData()
  }

  ngOnInit() {
  }

}
