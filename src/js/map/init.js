import Map from './map';

import Place from '../data/place';
import { places } from '../data/places_data';

import Search from './search';

function initMap() {
  // Create a map object and specify the DOM element for display.
  var goiania = { lat: -16.680650, lng: -49.256318 };

  var map = new Map(goiania, 14);

  var search = new Search(map);
  search.fireRequest();
}

window.initMap = initMap;

const APIKey = 'AIzaSyA7oz8Q4iD0yb1Qkokep8DAz78j27XjpfQ';

export function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  const url = 'https://maps.googleapis.com/maps/api/js'
  script.src = `${url}?key=${APIKey}&callback=initMap&libraries=places`;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}
