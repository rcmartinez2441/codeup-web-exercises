//JSON what is it?
/*
Javascript Object Notation (JSON)
 */
// //Javascript Object:
// let animal = {
// 	name:"frog",
// 	color:"green",
// 	fave: true
// }
// console.log(animal.color) // green
//

// //JSON Object
// response === {
// 	"name":"frog",
// 	"color":"green",
// 	"favorite": true
// }

//// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can be accepted as values
// {
// 	//String
// 	"hobbyName": "Video Games",
// 	//A Number
// 	"yearsPlayed": 15,
// 	//An Object
// 	"gamesMostPlayedAndHours": {
// 		overwatch: 420,
// 		pokemon: 6969,
// 		skyrim: 100
// 	},
// 	//An Array
// 	"consoles": ['PS4', 'Nintendo Switch', 'PC', 'Gamecube'],
// 	//Boolean
// 	"gamer": true,
// 	//Null
// 	"socialLife": null
// }

// ****************************************************************************************
//** Doing Requests ***
//jQuery .ajax() method

//syntax:
// $.ajax( url, {options} ); //Simple GET Request - to get info
// //url - location to go look for something / to go post something
// //options -
//
// //GET Request
// $.ajax("url.com", {
// 	type:"GET"
// })
// //POST request - adding/sending info to the server adding to it
// $.ajax("url.com", {
// 	type: "POST",
// 	data: {
// 		title: "my trip to Antartica",
// 		article: "loren ipsum"
// 	}
// })
//DELETE request - send info about the thing you want to delete and then go in and actually delete
//PUT request - editing


// // TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// // TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully
// console.log( $.ajax("https://jsonplaceholder.typicode.com/comments") );
//
// console.log( $.ajax("https://jsonplaceholder.typicode.com/posts", {
// 	type:"POST",
// 	data: {
// 		postID: 420,
// 		id: 501,
// 		name: "loren ipsum",
// 		email: "wawa@yaya.com",
// 		body: "salkfjdsljf dsakjlskajd dslakjd;l dsalkjsal"
// 	}
// }))
//
// //// TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/cmments
//
// console.log( $.ajax("https://jsonplaceholder.typicode.com/cmments"));


// ********************************************************************************
// ** RESPONSES ** Try to have a .done(), .failed(), .always() just to prepare if any of

// //Successful -
// $.ajax("https://jsonplaceholder.typicode.com/posts").done(function(data, status){
// 	console.log(status);
// 	console.log(data);
// 	alert('Request Completed Successfully');
// })
// // When you done with the request and it comes back successfully, go ahead and execute whatever is inside .done()

// ******************************************************************************
// // Failed
// $.ajax("https://jsonplaceholder.typicode.com/psts", {
// 	type: "POST",
// 	data: {
// 		title: 'Hello World',
// 		body: 'our planet rocks'
// 	}
// }).fail(function (jqHxr, status, error){
// 	console.log(jqHxr); // Metadata and everything
// 	console.log(status); // coming from statusText: "error"
// 	console.log(error); // Usually provided from server
//
// })

// ******************************************************************************
// // Always - no matter what, success or fail - will always get triggered
// $.ajax("https://jsonplaceholder.typicode.com/posts").always(function (){
// 	alert('Wasssaaaaaaaaaaa');
// })

// //Using Array notation to access specific data
// $.ajax("https://jsonplaceholder.typicode.com/posts").done(function(data) {
// 	console.log(data);
// 	let dataID = data[69].id
// 	console.log(dataID);
// })
//
// $.get("url", {}).done(function () {})
//
// $.post("url", {
// 	title: 'poop',
// 	body: 'no-thank you'
// })