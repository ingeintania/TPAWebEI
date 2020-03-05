import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-hotel',
  templateUrl: './map-hotel.component.html',
  styleUrls: ['./map-hotel.component.scss']
})
export class MapHotelComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
  }

  constructor() { }

  ngAfterViewInit(): void {
  
    this.initMap()
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.map);
  }

}
