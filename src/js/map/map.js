import Marker from './marker';

import { places } from '../data/places_data';

export default class Map {
  constructor(center, zoom) {
    const myStyles = [
      {
        featureType: "poi",
        elementType: "labels",
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

  panToPlaces() {
    var bounds = new google.maps.LatLngBounds();
    places.filteredPlaces.forEach(p => {
      bounds.extend(p.getCoord());
    });
    this._map.fitBounds(bounds);
  }
}

