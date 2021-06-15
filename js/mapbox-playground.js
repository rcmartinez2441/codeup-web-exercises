'use strict';

const mapboxToken = 'pk.eyJ1IjoicmNtYXJ0aW5lejI0NDEiLCJhIjoiY2twcG44NmFiMm9xNzMycGVjbXVpbWVxYSJ9.Iqz3jC7dpe5lFyuA6iVjdg'

mapboxgl.accessToken = mapboxToken;

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [135.7460400, 35.4957600], //Obama, Japan
	zoom: 10
})

let marker = setMarker([135.7460400, 35.4957600]);
setPopup('Obama');

addMapClickEvent(marker);

let geoCoder = setGeocoder();
addGeocoderToMap(geoCoder);
addGeocoderEvent(geoCoder);

function setGeocoder() {
	return new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl,
		marker: false // dont use default marker, use mine
	})
}

function addGeocoderToMap(geocoder) {
	map.addControl(geocoder);
}
//Adds even listener to geocoder when you select an option when you search
function addGeocoderEvent(geocoder) {
	geocoder.on('result', function (event) {
		marker.setLngLat(event.result.geometry.coordinates);
		console.log(event.result);
		setPopup(event.result.place_name);
	})
}

function setMarker(point){
	return new mapboxgl.Marker()
		.setLngLat(point)
		.addTo(map);
}

function addMapClickEvent(markerParam) {
	map.on('click', function (e) {
		markerParam.setLngLat(e.lngLat)
			.addTo(map);
	})
}

//Creating PopUps
function setPopup(textDetails) {
	let popup = new mapboxgl.Popup()
		.setHTML(`<p>${textDetails}</p>`)
		.addTo(map)
	marker.setPopup(popup); //whenever selPopup is called, it will add the popup to the marker
}
function getReverseGeocode (point) {
	$.ajax({
			url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point[0]},${point[1]}.json?access_token=${mapboxgl.accessToken}`,
			success: function (data) {
				marker.setPopup(getPopup(data.features[0].place_name)); // This will only execute once the success callback is invoked
				// It guarantees that the response is returned AND successful before trying to do anything with the expected data
			}
		}
	);
}

