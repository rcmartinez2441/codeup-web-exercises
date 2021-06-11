(function () {
	'use strict';

	const mapboxToken = MAPBOX_TOKEN

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

	//Creates Geocode Event for Result
	addGeocoderEvent(geoCoder);


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
			.setHTML(`
				<div class="container text-white bg-warning mt-1">
            		<div class="row p-1">
                		<img class="col-12 mb-1" src="assets/dj-khaled.gif" alt="location-img-1">
                		<div class="col-12 border rounded mb-1 bg-info">${placeInfo.place_name}</div>
                		<div class="col-12 border rounded bg-info">${placeInfo.address}</div>
            		</div>
        		</div>`
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

	function addGeocoderEvent(geocodeEntry) {
		geocodeEntry.on('result', function (data) {
			console.log(data);
			let newMarker = setMyMarker(data.result.geometry.coordinates)
			let placeInfo = {
				coordinates: data.result.geometry.coordinates,
				place_name: data.result.place_name,
				address: ``,
			}
			myFavRestaurants.push(placeInfo);
			console.log(myFavRestaurants);
			setMyPopup(placeInfo, newMarker)
		})
	}

	function addAllLocations(array) {
		map = createMapbox([-96.283496, 37.230328], 3.5)
		array.forEach((objectElement) => {
			let marker2 = setMyMarker(objectElement.coordinates);
			setMyPopup(objectElement, marker2);
		})
	}

	addAllLocations(myFavRestaurants);
})()