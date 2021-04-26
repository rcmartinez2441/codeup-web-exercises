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

		// let myCharacteristics = ['Raul', 'Software Engineer', '26'];
	// 	console.log(`The length of the array is: ${myCharacteristics.length}`)

	//IF I want to get the first element of the array
	// 	console.log(myCharacteristics[0]);
	// second element
	//	console.log(myCharacteristics[1]);

	//putting it all together
	// TODO: Make a new array which holds elements based on your own characteristics
	//  -> In a console.log, output a string which describes yourself based on those elements
	//  -> KEEP IN MIND ZERO-INDEXING!

	// 	console.log(`Hello, my name is ${myCharacteristics[0]}, I am ${myCharacteristics[2]} years old, and I am a ${myCharacteristics[1]}`)
	//
	// 	console.log(myCharacteristics[3]); // Will return 'undefined' since we are trying to access an element that doesnt exist

	//Adding to an array
	// 	myCharacteristics[0] += 'Martinez'; //string are immutable(they dont change, they only replace)
	// 	console.log(myCharacteristics[0]) // Will return my full name

	//Using Loop *-9+
	// iteration with Arrays

		// for (let i = 0; i < myCharacteristics.length; i++){
		// 	//Do something with one array element at a time
		// 	console.log(myCharacteristics[i]); // Will log each index with 'i' and then iterate to next array index
		// }

	//Using a built-in array method 'forEach'
	// 	let myPets = ['Coco', 'Frida', 'Bentley', 'Coda'];
	// 	myPets.forEach(function (pet){ // forEach return type is void
	// 		//For each element in the array, run this function
	// 		console.log(pet);
	// 	});
//-----------------------------------------------------------------------------------------
	//**ARRAYS MANIPULATION**
	// .length
	// .forEach() -
	// For-Loop

	//EXERCISE
	//	let days = ['Monday', 'Tuesday', 'Wednesday'];

	// .push() - will add whatever value at end of array
	// 	days.push('Thursday');
	// 	console.log(days);

	// .indexOf() - returns the index of
	// 	console.log('The max index of days is ' + days.indexOf('Thursday'));

	// .pop() will remove the last element of the array and then returns it.
	// 	let removedElement = days.pop();
	// 	console.log(`The removed element was: ${removedElement}`);
	// 	console.log(days);

//------------------------------------------------------------------------------------------
	// TODO: MINI EXERCISE
	// -> create an array with the remaining days of the week
	// Call .forEach() on that NEW array
	// Inside the inline function you pass into .for each:
		// Add the remainingDay of the week to the old array
	// When the loop completes, log the completed day of the week array

		// let days = ['Monday', 'Tuesday', 'Wednesday'];
		// let remainingDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
		//
		// remainingDays.forEach(function(day){
		// 	days.push(day);
		// });
		// console.log(days);
		// array.forEach(function (){});
//--------------------------------------------------------------------------------------------------------
	// TODO: .unshift(valueToAdd)
	// It will unshift all elements of an index to the right
	// Start array: 0, 1, 2, 3
	//Unshift		 , 0, 1, 2, 3

		// let numArray = [1, 2, 3, 4, 5];
		// console.log(numArray.indexOf(1));
		//
		// numArray.unshift(6);
		// console.log(numArray.indexOf(1));
		//
		// console.log(numArray);
		//
		// //Wanting to sort accordingly
		// console.log(numArray.sort());

	// .shift() / removes 0 index value and shifts all elements to the left by 1

		// let daysInMonth = [...Array(32).keys()]
		//
		// console.log(daysInMonth);
		//
		// let dayRemoved = daysInMonth.shift();
		// console.log(`THis day was removed: ${dayRemoved}`);
		// console.log(daysInMonth);

//---------------------------------------------------------------------------------------
	// TODO - MINI EXERCISE
	//  -> Let's reverse engineer our days of the week array
	//  -> Make sure to console.log in order to see your code's behavior!
	//  -> Write a function which takes in your complete days of the week array
	//      -> It will eventually return your reverse-engineered array
	//  -> Using a FOR LOOP (not .forEach())
	//      -> pop() each item off the days array
	//      -> use the returned value from pop() to unshift the element
	//      -> on to the new array
	//  -> HINT: You may find that the loop doesn't behave as expected
	//      -> console.log EVERY possible thing which could change as your loop runs
	//          -> consider how the methods you are using change state of the array

	//Current Days Array: [Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday]
	// console.log(`Current Days Array: ${days}`);

	//var days = ['Monday',..... , 'Sunday']

	// let reverseEngineer = (daysOfTheWeek) => {
	//
	// 	let newReverseEngineeredArray = [];
	// 	let arrayLength = daysOfTheWeek.length;
	// 	console.log(`Testing What array parameter contains: ${daysOfTheWeek}`);
	//
	// 	for(let i = 0; i < arrayLength ; i++) {
	// 		newReverseEngineeredArray.unshift( daysOfTheWeek.pop() );
	// 		console.log(`Current days of the week ${daysOfTheWeek}`);
	// 	}
	// 	console.log(`This is new Array: ${newReverseEngineeredArray}`);
	// }
	// reverseEngineer(days);
	// console.log(`Days array:${days}`);

// using .sort() and its  limits

	function sortMyNums (num1,num2,num3) {
		let numArray = [num1, num2, num3];
		//console.log(numArray);
		numArray.sort(function(a, b) { // Will compare current (a) and next (b)
			console.log(a);
			console.log(b);
			console.log(a-b)
			return a - b;
		});
		console.log(numArray);
		return numArray;
	}
	sortMyNums(420, 69, 7);

	//Example Missy Eliot;

	function giveMissyJustice(notASuspectString) {

		let musicalGenius = notASuspectString.split('');
		console.log(musicalGenius)

		musicalGenius.reverse();

		let reversedString = musicalGenius.join('');

		console.log(reversedString);
	}
	giveMissyJustice('I put my string down, flip it and reverse it')



})();