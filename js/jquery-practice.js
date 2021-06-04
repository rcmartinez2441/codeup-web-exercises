//TODO: refactor the below snippet from your starter js code to use jQuery instead of Vanilla JS DOM
//make sure the DOM is loaded first

// document.addEventListener("DOMContentLoaded", function() {
// 	addListeners();
// });
$(document).ready(beginHoverEvent);

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

function isHovered() {
	//'this' is the card that is being hovered then it is searching inside the 'this' to find all instances of '.card-img-top' and applying this new attribute
	//Narrowing down the scope for .card-image-top
	$('.card-img-top', this).attr({
		src: 'assets/dj-khaled.gif'
	});
}

function notHovered() {
	//'this' is the card that is being hovered then it is searching inside the 'this' to find all instances of '.card-img-top' and applying this new attribute
	$('.card-img-top', this).attr({
		src: 'assets/question.png'
	});
}

//If you hover over any of the card container, begin the hover event
function beginHoverEvent() {
	cardContainers.hover(isHovered, notHovered)
}

// TODO: When the user clicks the button with the id of 'submitBtn,' the background color of #override-bootstrap changes to 'red'

$('#submitBtn').click(
	function () {
		$('#override-bootstrap').css({
			backgroundColor: 'red'
		})
	});

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
