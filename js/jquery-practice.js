//TODO: refactor the below snippet from your starter js code to use jQuery instead of Vanilla JS DOM
//make sure the DOM is loaded first

// document.addEventListener("DOMContentLoaded", function() {
// 	addListeners();
// });
// $(document).ready(beginHoverEvent);

// // parent method for adding all listeners
// function addListeners(){
// 	//get the elements to add listener and change image
// 	//Vanilla JS and DOM
// 	let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
// 	addEvents(cardContainers, 'assets/dj-khaled.gif', 'mouseover');
// 	addEvents(cardContainers, 'assets/question.png', 'mouseout');
//
// 	//Using JQuery
//
// }
// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
// 	//Vanilla JS and DOM
// 	cardContainers.forEach((cc) => {
// 		let card = cc;
// 		//create listener which will call function change the image
// 		let listener = function (event) {
// 			let cardImg = card.querySelector(".card .card-img-top");
// 			changeImage(cardImg, imgPath);
// 		};
// 		cc.addEventListener(listenerType, listener);
// 	});
//
//
// }
// //actual function to swap images
// function changeImage(card, imgPath){
// 	card.setAttribute('src', imgPath);
// }

// Declare a function to select all Card containers
// Make a hover event so that it will have to handlers for Before and After
// Before handler (not-Hovered) - will have question
// After handler (hovered) - will have dj-khaled
// Can add attributes to elements using attr( {property:"value"}) attribute quotes is optional!

//Selects all card with this class '.col-md-3'
let cardContainers = $('.col-md-3')

// function isHovered() {
// 	//'this' is the card that is being hovered then it is searching inside the 'this' to find all instances of '.card-img-top' and applying this new attribute
// 	//Narrowing down the scope for .card-image-top
// 	$('.card-img-top', this).attr({
// 		src: 'assets/dj-khaled.gif'
// 	});
// }
//
// function notHovered() {
// 	//'this' is the card that is being hovered then it is searching inside the 'this' to find all instances of '.card-img-top' and applying this new attribute
// 	$('.card-img-top', this).attr({
// 		src: 'assets/question.png'
// 	});
// }
//
// //If you hover over any of the card container, begin the hover event
// function beginHoverEvent() {
// 	cardContainers.hover(isHovered, notHovered)
// }

// // TODO: When the user clicks the button with the id of 'submitBtn,' the background color of #override-bootstrap changes to 'red'
//
// $('#submitBtn').click(
// 	function () {
// 		$('#override-bootstrap').css({
// 			backgroundColor: 'red'
// 		})
// 	});

// TODO: When the user clicks a .card-text element, change its background color to 'red'
$('.card-text').click(
	function () {
		$(this).css({
			backgroundColor: 'red'
		})
	})


//TODO: Add a new button to the html, directly below the first button. Give it an id of 'resetBtn'.
// -> When the user clicks that button, the page should reload. (HINT: BOM has a super easy method for reloading the page. You'll still need a click event)

$('#resetBtn').click(
	function () {
		location.reload()
	})

//TODO: When the user clicks the element with the id #main-title, its text font size doubles

$('#main-title').click(function () {
	$(this)
		.removeClass('display-5')
		.addClass('display-3')
})

// TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside card title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")

// cardContainers.hover(
// 	function () {
// 		$(this)
// 			.find('.card-title')
// 			.text($(this)
// 				.attr('data-attribute'));
// 	},
// 	function () {
// 		$(this)
// 			.find('.card-title')
// 			.text('Card');
// 	}
// )

// // TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
// //  -> ALSO, change the background of the li to a new color
// //  -> When the li is clicked again, reset the li background color to its original color
// //      -> Don't worry about changing the text back
//
// let listGroupItems = $('.list-group-item');
// console.log(listGroupItems);
//
// function doTheThing() {
// 	if ($(this).css('background-color') === 'rgb(245, 71, 72)') {
// 		$(this)
// 			.css({
// 				backgroundColor: ''
// 			})
// 	} else {
// 		$(this)
// 			.addClass('text-uppercase')
// 			.css({
// 				backgroundColor: '#f54748'
// 			})
// 	}
// }
//
// listGroupItems.click(doTheThing);
//
// // TODO: Change up the submit button event
// //  -> Add a new input with an id of #redirect-url
// //  -> Remove the old click events from #submitBtn
// //  -> When the user clicks #submitBtn, redirect the page to the value of #redirect-url
// //  -> HINT: You can either add a new input or change the id of an existing input element to #redirect-url to save time
//
// let submitButton = $('#submitBtn');
//
// function goToURL() {
// 	let url = $('#redirect-url').val()
// 	if (!url.includes('https://'))
// 		url = 'https://' + url
// 	location.assign(url);
// }
//
// submitButton.click(goToURL)
//
//
// // TODO: After a 2 second delay (BOM), when the user loads the page, change #main-title to a value of your choosing (change text, background color, what have you)!
//
// $(document).ready(
// 	setTimeout(function () {
// 		$('#main-title')
// 			.css({
// 				backgroundColor: '#f9dfdc',
// 				fontSize: '4em',
// 				fontWeight: 'bold'
// 			})
// 	}, 2000))

// TODO: When the user clicks #submitBtn, log to the console the values of #first, #last, and #handleField
//  -> If any of the fields are empty, alert the user to fill the empty control (be sure to tell them which control was empty)

let submitBtn = $('#submitBtn')

function checkAndLogForm() {
	let inputObject = {
		firstName: $('#first').val(),
		lastName: $('#last').val(),
		handleField: $('#handleField').val(),
	}
	let answerValues = Object.values(inputObject);
	let answerKeys = Object.keys(inputObject);
	let allFieldsAnswered = true;
	
	answerValues.forEach((element, index) => {
		if (element === '') {
			alert(`Need to fill out the missing section, ${answerKeys[index]}`);
			allFieldsAnswered = false;
		}
		if (allFieldsAnswered) {
			console.log(`${answerKeys[index]}: ${answerValues[index]}`);
		}
	})
}

submitBtn.click(checkAndLogForm);
