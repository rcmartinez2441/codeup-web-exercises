(function () {
	'use strict';

	//*** Syntax ***
	//Before
	// let document = {
	// 	getElementById: function (){
	// 		console.log(`FInd the element of ID x`)
	// 	}
	// }

	//After using Jquery
	// $( [selector-goes-here] ).jQuerymethod('usually jQuery will have you pass a function as an argument here');

// **********************************************************************
	//JQuery uses the dollar sign '$' which will call to the jQuery library

	// *** Syntax select by tagName
	// $('h1')      // Has to be in quotation marks

	// *** Syntax using ID ***
	// $('#id-name')

	//*** Syntax using className
	// $('.class-name')
// ************************************************************************************
	//Laura - Mini Exercise
	// TODO: Using jQuery ... 1. hide the paragraph that is in all caps  2.hide all the spans 3. show all the elements that have a ‘show-me’ class. refresh your page between every task.

	// //** #1 **
	// $(`#all-caps`).hide();
	//
	// //** #2 **
	// $('span').hide();
	//
	// //** #3 **
	// $('.show-me').show();
	//
	// //** Selecting Children of a HTML Element
	// $('ul').children(); // Will only give you direct children and not descendents
	//
	// //Adding Attributes through JQuery
	// $('ul').children().addClass('btn btn-primary')

// ************************************************************************************
	//** window.onload **

	//DO something whrn the window is done loading
	//Its going to wait for images

	//THis is using vanilla DOM
	// window.onload = function () {
	// 	console.log(new Date());
	// 	console.log(`Window is done loading`);
	// }
	//
	// //JQuery Method
	// //'document' is the only node that can run with jQuery without quotations
	// $(document).ready(function () {
	// 	console.log(new Date());
	// 	console.log(`JQuery Is done Loading`)
	// });

// ************************************************************************************
	//TODO:
	//	add 3 images to your HTML page.
	//	give the element a pink background using jQuery.
	//	give the element an orange background using jQuery.
	//	Once the window has finished loading, hide the div with a pink background color.
	//	Once the DOM has finished loading hide the div with the orange background color.

	$('#image-container')
		.append( `<img src="assets/pizza.png" alt="business-dog" class="pink" width='690px'>` )
		.append( `<img src="assets/dj-khaled.gif" alt="dj-khaled" class='' width='420px'>` )
		.append( `<img src="img/business-dog3.jpeg" alt="business-dog" class="orange" width='300px'>`);

	$('.pink').css({'border': 'solid 5px pink'})
	$('.orange').css({'border': 'solid 5px orange'})

	function wait (selector, time) {
		setTimeout( function (){
			$(selector).hide();
		}, time)
	}

	console.time('For Window')
	window.onload = function (){
		wait('.pink', 2000);
		console.log('Window loaded');
	}
	console.timeEnd('For Window')


	console.time('For Document');
	$(document).ready( function () {
		wait('.orange', 3000);
		console.log('Document loaded');
	});
	console.timeEnd('For Document')



})();