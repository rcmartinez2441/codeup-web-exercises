//**** JS PROMISES ****

// Async vs Sync
/// Async - everything happens at once
// Sync - code runs sequentially

//****Three States of a Promise ****
/*
	1. Pending
	2. Resolved (Successful)
	3. Rejected (Failed)
 */

//Promises Syntax
// fetch('URL')
// 	.then('If Succeed, put code here')
// 	.catch('If failed, put code here')

// //**EXAMPLE**
// //**BREAKING DOWN .then() ***
// fetch('https://jsonplaceholder.typicode.com/posts/1') // (1.) Make a request
// 	.then(response => { //(2.) Once request succeeds then do this method;
// 		console.log(response.json());
//
// 		//WIll return an  abject like Ajax
// 	})
// 	// data is coming previous .then() method
// 	.then(data => { // (2.) ONLY IF PREVIOUS THEN COMES BACK SUCCESSULLY, then this .then() is executed
// 		console.log(data)
// 	})
// 	//** USING .catch()
// 	.catch(error => { //If nothing succeeds then this catch executes, otherwise it will not
// 		console.log(error)
// 	});
//
//
// //****USING POST WOTH FETCH ****
// fetch('https://jsonplaceholder.typicode.com/posts', {
// 	method: 'POST',
// 	headers: {},
// 	body: {
// 		title: 'blah',
// 		body: 'poopman mcgee'
// 	}
// })
// 	.then(response => {
// 		console.log(response.json())
// 		return response.json();
// 	})
// 	.catch(error => {
// 		console.log('Error')
// 		console.log(error)
// 		return error;
// 	});

// TODO: using fetch(), make a simple GET request to this api: “https://dog.ceo/api/breeds/image/random” and append this image to the image element with an id of “random-dog-image”
fetch ('https://dog.ceo/api/breeds/image/random')
	.then(response => {
		return response.json()
	})
	.then (data => {

		console.log(data.message)
		addImageToElement(data.message);
	})
	.catch(error => {
		console.log(`An error occurred`);
	})

function addImageToElement (dog){
	$('#random-dog-image')
		.attr({
			src: dog
		})
}