import Marker from './marker';

import { places } from '../data/places_data';

export default class Map {
  constructor(center, zoom) {
    this.center = center;
    const myStyles = [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "transit.station.bus",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    this._map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: zoom,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      styles: myStyles
    });
  }

  addMarker(marker) {
    marker.setMap(this._map);
  }

  filterMarkers() {
    places.places.forEach(p => {
      p.marker.setMap(null);
    });
    places.filteredPlaces.forEach(p => {
      this.addMarker(p.marker);
    });
  }

  panToPosition(position) {
    this._map.setZoom(16);
    this._map.panTo(position);
  }

  panToPlaces() {
    let bounds = new google.maps.LatLngBounds();
    let count = 0;
    places.filteredPlaces.forEach(p => {
      bounds.extend(p.getCoord());
      count++;
    });
    if(count > 1) {
      this._map.fitBounds(bounds);
    } else if(count === 1) {
      this.panToPosition(places.filteredPlaces[0].getCoord());
    }
  }
}

