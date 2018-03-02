import _ from 'lodash';
import $ from 'jquery';

import '../css/main.scss'

console.log("Hello World!");

function initMap() {
	// Create a map object and specify the DOM element for display.
	var veracruz = { lat: ***REMOVED***, lng: ***REMOVED*** };

	var map = new google.maps.Map(document.getElementById('map'), {
		center: veracruz,
		zoom: 14
	});

	var service = new google.maps.places.PlacesService(map);
	var request = {
		location: veracruz,
		radius: '500',
		types: ['store']
	};

	function createMarkers(places) {
		var bounds = new google.maps.LatLngBounds();
		var placesList = document.getElementById('places');

		for (var i = 0, place; place = places[i]; i++) {
			var image = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25)
			};

			var marker = new google.maps.Marker({
				map: map,
				//icon: image,
				title: place.name,
				position: place.geometry.location
			});

			placesList.innerHTML += '<li>' + place.name + '</li>';

			bounds.extend(place.geometry.location);
		}
		map.fitBounds(bounds);
	}

	function searchCallback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			createMarkers(results);
		}
	}

	service.nearbySearch(request, searchCallback);
}

window.initMap = initMap;
