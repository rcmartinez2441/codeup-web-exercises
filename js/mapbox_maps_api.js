(function () {
	'use strict';

	const mapboxToken = 'pk.eyJ1IjoicmNtYXJ0aW5lejI0NDEiLCJhIjoiY2twcG44NmFiMm9xNzMycGVjbXVpbWVxYSJ9.Iqz3jC7dpe5lFyuA6iVjdg'

	mapboxgl.accessToken = mapboxToken;

	let customZoom = 16;
	let customCenter = [-77.408848, 39.032392];
	let map = createMapbox(customCenter, customZoom);
	let myFavRestaurants = [
		{
			coordinates: [-77.408848, 39.032392],
			place_name: 'Sweetwater Tavern',
			address: '45980 Waterview Plaza, Sterling, VA 20166'
		},
		{
			coordinates: [-106.301070, 31.727260],
			place_name: 'Crave Kitchen & Bar',
			address: '11990 Rojas Dr, El Paso, TX 79936'
		},
		{
			coordinates: [-98.584846, 29.539989],
			place_name: 'The Magnolia Pancake Haus',
			address: '10333 Huebner Rd, San Antonio, TX 78240'
		},
	]

	let marker = setMyMarker(myFavRestaurants[0].coordinates);

	setMyPopup(myFavRestaurants[0], marker);

	//create Geocoder
	let geoCoder = setGeocoder();
	//add Geocode to map
	//*** WONT SHOW UP UNLESS YOU HAVE SCRIPT AND LINK TAGS FOR GEOCODE ***
	addGeocoderToMap(geoCoder);


	function createMapbox(center, zoom) {
		return new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mapbox/dark-v10', // style URL
			center: center, // starting position [lng, lat]
			zoom: zoom // starting zoom
		});
	}

	// sets initial marker when
	function setMyMarker(point) {
		return new mapboxgl.Marker()
			.setLngLat(point)
			.addTo(map)
	}

	function setMyPopup(placeInfo, specificMarker) {
		let popup = new mapboxgl.Popup()
			.setHTML(`<p>${placeInfo.place_name}</p>
					<p>${placeInfo.address}</p>`
			)
		specificMarker.setPopup(popup);
	}

	function setGeocoder() {
		return new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl,
			marker: false // dont use default marker, use mine
		})
	}

	function addGeocoderToMap(theGeoCodeVar) {
		map.addControl(theGeoCodeVar);
	}

	function addAllLocations (array) {
		map = createMapbox(customCenter, 3)
		array.forEach((objectElement) => {
			let marker2 = setMyMarker(objectElement.coordinates);
			setMyPopup(objectElement, marker2);
		})
	}
	addAllLocations(myFavRestaurants);
})()