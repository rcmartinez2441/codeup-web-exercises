(function () {
	'use strict';

	$(document).ready(function () {
		alert(`This webpage has loaded`);
	});

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

})();