(function () {
'use strict';
//April 26, 2021

	// numbers = 69, 420
	//string = 'this is a string
	//boolean = true/false
	// null - absence of
	// undefined - date should exist but doesnt
	//object -->

	//What does an array look like? --> []

	// let arrayName = [ value1, value2, ...]
	// value1, value2, ... are elements. Each coma-delimited value is called an "element"


	//Arrays are considered objects
	// 	let array1 = []
	// 	console.log(typeof array1) // will return 'object'

	// Method Array.isArray(array1) --> will return 'true' if array1 is an array

	//Example Array

	let myCharacteristics = ['Raul', 'Software Engineer', '26'];
	// 	console.log(`The length of the array is: ${myCharacteristics.length}`)

	//IF I want to get the first element of the array
	console.log(myCharacteristics[0]);
	// second element
	console.log(myCharacteristics[1]);

	//putting it all together
	// TODO: Make a new array which holds elements based on your own characteristics
	//  -> In a console.log, output a string which describes yourself based on those elements
	//  -> KEEP IN MIND ZERO-INDEXING!
	console.log(`Hello, my name is ${myCharacteristics[0]}, I am ${myCharacteristics[2]} years old, and I am a ${myCharacteristics[1]}`)

	console.log(myCharacteristics[3]); // Will return 'undefined' since we are trying to access an element that doesnt exist

	//Adding to an array
	myCharacteristics[0] += 'Martinez'; //string are immutable(they dont change, they only replace)
	console.log(myCharacteristics[0]) // Will return my full name

	//Using Loop *-9+
	// iteration with Arrays

	for (let i = 0; i < myCharacteristics.length; i++){
		//Do something with one array element at a time
		console.log(myCharacteristics[i]); // Will log each index with 'i' and then iterate to next array index
	}
	console.log(`-------------------------------------------------------------------------------------`);
	//Using a built-in array method 'forEach'
	let myPets = ['Coco', 'Frida', 'Bentley', 'Coda'];
	myPets.forEach(function (pet){ // forEach return type is void
		//For each element in the array, run this function
		console.log(pet);
	});







})();