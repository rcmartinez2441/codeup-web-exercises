(function () {
	'use strict';
	console.log('testing from iterting.js');
	let lineBreak = () => {
		console.log(`------------------------------------------`)
	}
//---------------------------------------------------------------------------------------------------------
		/**
		 * TODO:
		 * Create an array of 4 people's names and store it in a variable called
		 * 'names'.
		 */
		let names = ['Raul', 'Corey', 'Sean', 'Moses'];
//---------------------------------------------------------------------------------------------------------
		/**
		 * TODO:
		 * Create a log statement that will log the number of elements in the names
		 * array.
		 */
		console.log(`Total number of array elements is: ${names.length}`);

//---------------------------------------------------------------------------------------------------------
		/**
		 * TODO:
		 * Create log statements that will print each of the names individually by
		 * accessing each element's index.
		 */
		/**
		 * TODO:
		 * Write some code that uses a for loop to log every item in the names
		 * array.
		 */
		lineBreak();
		let cyclingThruArray = (people) => {
			for (let i = 0; i < people.length; i++){
				console.log(people[i]);
			}
		}
		cyclingThruArray(peopleNames);

//---------------------------------------------------------------------------------------------------------
		/**
		 * TODO:
		 * Refactor your above code to use a `forEach` loop
		 */
		lineBreak();
		console.log(`This is using forEach method`);
		names.forEach(function (name){
			console.log(`This is coming from forEach Method: ${name}`);
		});
//---------------------------------------------------------------------------------------------------------
lineBreak();
		/**
		 * TODO:
		 * Create the following three functions, each will accept an array and
		 * return an an element from it
		 * - first: returns the first item in the array
		 * - second: returns the second item in the array
		 * - last: returns the last item in the array
		 *
		 * Example:
		 *  > first([1, 2, 3, 4, 5]) // returns 1
		 *  > second([1, 2, 3, 4, 5]) // returns 2
		 *  > last([1, 2, 3, 4, 5]) // return 5
		 */
		let arrayNumbers = [1, 2, 3, 4, 5];

		let first = (input) => {
			return input[0];
		}
		let second = (input) => {
			return	input[1];
		}
		let last = (input) => {
			return input[input.length -1];
		}
	console.log(first(arrayNumbers));
	console.log(second(arrayNumbers));
	console.log(last(arrayNumbers));


})();