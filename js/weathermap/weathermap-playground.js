
// $.ajax({
// 	url: 'http://api.openweathermap.org/data/2.5/weather',
// 	type:'GET',
// 	data: {
// 		APPID: WEATHERMAP_TOKEN,
// 		lat: 31.650740,
// 		lon: -106.273340,
// 	},
// 	success: function (data) {
// 		console.log(data);
// 	}
// })

$.ajax({
	url: `http://api.openweathermap.org/data/2.5/forecast`,
	type: 'GET',
	data: {
		APPID: WEATHERMAP_TOKEN,
		lat: 31.650740,
		lon: -106.273340,
	},
	success: function (data) {
		console.log(data)
	}
})

//For Weather Project
//Create a Mapbox-utils.JS - will handle all Mapbox
//Make a Weatherbox-utils.JS - will handle all Mapbox
//
