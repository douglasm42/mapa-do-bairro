import Place from '../data/place';
import { places } from '../data/places_data';

import Marker from './marker'

export default class Search {
  constructor(map) {
    this.map = map;
    this.service = new google.maps.places.PlacesService(this.map._map);

    this.onSearchResult = this.onSearchResult.bind(this);
  }

  fireRequest() {
    var request = {
      location: this.map._map.getCenter(),
      radius: '1000',
      types: ['store']
    };

    this.service.nearbySearch(request, this.onSearchResult);
  }

  onSearchResult(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      this.createMarkers(results);
    }
  }

  createMarkers(placesData) {
    var bounds = new google.maps.LatLngBounds();
    //var placesList = document.getElementById('places');

    for (var i = 0, place; place = placesData[i]; i++) {
      let marker = new Marker(place.name, place.geometry.location);
      this.map.addMarker(marker);

      //placesList.innerHTML += '<li>' + place.name + '</li>';
      places.add(new Place(place.name, place.geometry.location.lat, place.geometry.location.lng));

      bounds.extend(place.geometry.location, place.geometry.location.lat, place.geometry.location.lng);
    }
    this.map._map.fitBounds(bounds);
  }
}
