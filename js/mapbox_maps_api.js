(function (){
	'use strict';
	const mapboxToken = 'pk.eyJ1IjoicmNtYXJ0aW5lejI0NDEiLCJhIjoiY2twcG44NmFiMm9xNzMycGVjbXVpbWVxYSJ9.Iqz3jC7dpe5lFyuA6iVjdg'
	mapboxgl.accessToken = mapboxToken;
	let map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/dark-v10', // style URL
		center: [-77.408848, 39.032392], // starting position [lng, lat]
		zoom: 15 // starting zoom
	});
	let marker = setMarker([-77.408848, 39.032392])

	function setMarker(point) {
		return new mapboxgl
			.Marker()
			.setLngLat(point)
			.addTo(map);
	}

	function setPopup(name, address = '') {
		let popup = new mapboxgl.Popup()
			.setHTML(`<div class="border m-2 text-center">
                                    <p class="border p-2">${name}</p>
                                    <p class="p-0">${address}</p>
                             </div>`)
			.addTo(map)
		marker.setPopup(popup); //whenever selPopup is called, it will add the popup to the marker
	}
})()