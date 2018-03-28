import Marker from './marker';

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
}

