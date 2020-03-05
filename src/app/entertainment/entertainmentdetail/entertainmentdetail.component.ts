import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Entertainment } from 'src/app/model/Entertainment';
import { ActivatedRoute, Router } from '@angular/router';
import { EntertainmentService } from 'src/app/service/Entertainment.service';

@Component({
  selector: 'app-entertainmentdetail',
  templateUrl: './entertainmentdetail.component.html',
  styleUrls: ['./entertainmentdetail.component.scss']
})
export class EntertainmentdetailComponent implements OnInit {

  entertainment : Entertainment
  entertainment_id;
  sub;
  entertainmentWe:Entertainment[]
  entertainmentS:Entertainment[]
  entertainmentW:any

  entertainmentData : Entertainment[]

  private map;
  marker:any


  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router, private service:EntertainmentService) { }

    getentertainmentData(){
      this.service.getEntertainment().subscribe(async result=>{
        this.entertainmentData=result
        // this.test()
        // this.setData()
      })
    }

  ngOnInit() {
    this.getentertainmentData()
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
       this.entertainment_id = params.get('entertainment_id')
       console.log(this.entertainment_id)
       console.log("geeeeeeeeeeee")
   });

  this.service.getEntertainment().subscribe(async result=>{
      this.entertainment=result.find(p => p.entertainment_id==this.entertainment_id);
      console.log(this.entertainment)
      // this.entertainmentWe=this.entertainmentWe.filter(entertainment =>this.entertainment.entertainment_id == this.entertainment_id)
      console.log(this.entertainment)
    })
    console.log(this.entertainment_id)


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
     this._router.navigate(['entertainment']);
  }






  private initMap(): void {


    this.map = L.map('map', {
      center: [-9, 117],
      zoom: 10

    });


    this.service.getEntertainment().subscribe(async result=>{
      this.entertainmentData=result

        console.log('haloooooooooo')
        console.log(this.entertainmentData.length)
        console.log(this.entertainmentData[this.entertainment_id].entertainment_latitude)
        console.log(this.entertainmentData[this.entertainment_id].entertainment_longitude)
        L.marker([ this.entertainmentData[this.entertainment_id].entertainment_latitude, this.entertainmentData[this.entertainment_id].entertainment_longitude], {icon: L.icon({
          iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
          // shadowUrl: 'https://pngimg.com/uploads/spongebob/spongebob_PNG13.png',

          iconSize:     [40, 70], // size of the icon
          shadowSize:   [50, 64], // size of the shadow
          iconAnchor:   [50, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        })}).addTo(this.map).bindPopup(this.entertainment.entertainment_name+"<br>"+'Rp'+this.entertainment.entertainment_price+',-', {autoClose:false}).openPopup()
      // }

      this.entertainmentData.forEach( (element) => {
        console.log(element.entertainment_latitude)
    });
    console.log('haloooooooooo')

    })

  }


  ngAfterViewInit(): void {

    this.initMap()
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });


  console.log(this.map)

  tiles.addTo(this.map);

  }

}
