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
fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => {
		return response.json()
	})
	.then(data => {

		console.log(data.message)
		addImageToElement(data.message);
	})
	.catch(error => {
		console.log(`An error occurred`);
	})

function addImageToElement(dog) {
	$('#random-dog-image')
		.attr({
			src: dog
		})
}

// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts', {
	type: "GET"
}) // make a request - GET
	.then(response => response.json())
	.then(data => {
		console.log(data); //
		console.log(data[10].id);
		let dataID = data[10].id;
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${dataID}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
			})
		displayBlogPost(data[10].body)
	}) // we have the data in json format, now we can manipulate it
	.catch(error => {
		console.log(error);
		console.error(error);
	});

function displayBlogPost(data) {
	let blogContainer = $('#blog-post')
	blogContainer.html(data)
}


//*** DELETING PROMISES ***
fetch('URL', {
	method: `DELETE`
})
	.then(response => response.json())
	.catch()

//**PUT REQUESTS ***
//Its going to edit information on a specific item, need to specify which item you want to change in URL Query string and also specify wwha you want to change it too

fetch ('url', {
	method: 'PUT',
	headers:{},
	body: {
		title: 'poop',
		body: 'loren ipsum'
	}
})

//TODO: for today
//Setup Remix Glitch
//DONE - URL
// Create and Org for Project and Repo
// Make sure Main and not master
// Create a README and copy from Glitch
// Create a kanban board for Repo
//---------------------------------------
// ONE HOUR PER PARTNER - ENFORCED
// COMMIT OFTEN
// Respond to Slack with org and glitch remix URL

//** CANDRA **
//Only use jobs after colleges
// 3-4 Solid Bullet points - using accomplishments on what you did there
// Google title and try to find resume templates for that specific company
//Key Points for bullet points:  Training, Leadership, Teamwork, Customer Service, Conflict Resolution, Development, Analytics, If You managed anything
// Development Projects (4-5 MAX): Main 2 Projects: Capstone and Ad Lister (DONE LATER), Can add previous projects from Codeup or personal projects
//DO NOT TOUCH THE TECHNICAL SKILLS SECTIONS
// You can add "Exposure To" - something that your working on but not fluent
// *** SUMMARY ***
// 'Emerging Software Developer with 3+ years in
//Who you are and what were you doing before Codeup?
// What attracted you to software development?
// What do you want to accomplish as a software developer?
/*
“Emerging Software Developer with 14+years of creative experience as a published photographer
and 5+ years in IT. The desire to create on a new level and increase my skills in Object Oriented
Programming inspired the decision to become a full-time programmer. Excited for the opportunity
to merge my creative abilities with my current and new technical knowledge to create imaginative
and innovative applications for future clients.”p
 */
