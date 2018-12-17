import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  nombre?: string;
  direccion?:string;
  telefono?: number;
}

interface Otro {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  nombre?: string;
  direccion?:string;
  telefono?: number;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  marker?: Marker;
  otro?: Otro;
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  circleRadius:number = 5000; // km
  geocoder:any;
  public location:Location = {
    lat: -39,
    lng: -69.5,
    marker: {
      nombre: 'Hospital Provincial Neuquen',
      lat: -38.9498015,
      lng: -68.0590612,
      draggable: false,
    },
    otro: {
      nombre: 'Hospital Heller',
      lat: -38,
      lng: -68,
      draggable: false,
    },
    zoom: 8
  };

  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }


  ngOnInit() {
      this.location.marker.draggable = true;
  }

}
