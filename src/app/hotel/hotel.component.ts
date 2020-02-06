import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;
  constructor() { }

  ngOnInit() {
    this.renderMap();
  }

  loadMap = () => {
    var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: {lat: -6.21462, lng: 106.84513},
      zoom: 8
    });
  
    var marker = new window['google'].maps.Marker({
      position: {lat: -6.21462, lng: 106.84513},
      map: map,
      title: 'Hello World!',
      draggable: true,
      animation: window['google'].maps.Animation.DROP,
    });
  
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="thirdHeading" class="thirdHeading">W3path.com</h3>'+
    '<div id="bodyContent">'+
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
    '</div>'+
    '</div>';
  
    var infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });
  
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
  
  }
  renderMap() {
      
    window['initMap'] = () => {
      this.loadMap();      
    }
    if(!window.document.getElementById('google-map-script')) {
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDPQtzTesRhf6zhxyh7sESqaiqgbHDmItc&callback=initMap";
        
      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }

}
