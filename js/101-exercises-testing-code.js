(function () {
	'use strict';
	//#51
	// let second = (input) => {
	// 	if(typeof input === 'string') {
	// 		let array = input.split('');
	// 		return array[1];
	// 	}
	// 		console.log(array[1]);
	// 		return array[1];
	// 	}
	// second('ubuntu');
//==============================================================

// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.

	// let maxMinusMin = (array) => {
	// 	let sorted = array.sort();
	// 	console.log(sorted);
	// 	let lastMinusFirst = sorted[sorted.length -1] - sorted[0];
	// 	console.log(lastMinusFirst);
	// 	return lastMinusFirst;
	// }
	// //assert(maxMinusMin([1, 2, 2, 8, 3, 4]), 7, "Exercise 63");
	// maxMinusMin([1, 2, 2, 8, 3, 4]);

//Exercise #66
// 	let getSmallestNumber = (array) => {
// 		array.sort();
// 		console.log(array);
// 		return array[0];
// 	}
// 	getSmallestNumber([1,3,9,2,6,9]);

//Exercise #67
// 	let onlyOddNumbers = (array) => {
// 		for (let i = 0; i < array.length; i++){
// 			if (array[i] % 2 === 0) {
// 				array.splice(i,1);
// 			} else {
// 				continue;
// 			}
// 		}
// 		console.log(array);
// 		return array;
// 	}
// 	onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);

	// let onlyEvenNumbers = (array) => {
	// 	for (let i = 0; i < array.length; i++){
	// 		if (array[i] % 2 === 0) {
	// 			continue;
	// 		} else {
	// 			array.splice(i,1);
	// 			i = 0;
	// 		}
	// 	}
	// 	return array;
	// }
	//
	// onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);

//Exercise #69
// 	let onlyPositiveNumbers = (array) => {
// 		for (let i = 0; i < array.length; i++) {
// 			if (array[i] > 0){
// 				continue;
// 			} else {
// 				array.splice(i,1);
// 				i = -1;
// 			}
// 		}
// 		return array;
// 	}
//
// onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);

//	Exercise 94
// 	const books = [
// 		{
// 			"title": "Genetic Algorithms and Machine Learning for Programmers",
// 			"price": 36.99,
// 			"author": "Frances Buontempo"
// 		},
// 		{
// 			"title": "The Visual Display of Quantitative Information",
// 			"price": 38.00,
// 			"author": "Edward Tufte"
// 		},
// 		{
// 			"title": "Practical Object-Oriented Design",
// 			"author": "Sandi Metz",
// 			"price": 30.47
// 		},
// 		{
// 			"title": "Weapons of Math Destruction",
// 			"author": "Cathy O'Neil",
// 			"price": 17.44
// 		}
// 	]
// 	let highestPriceBook = (array) => {
// 		let newArray = array.sort( (a,b) => {
// 			return a.price - b.price;
// 		});
// 		return newArray[newArray.length-1];
// 	}
// 	console.log(highestPriceBook(books));
//
// 	highestPriceBook(books);

//====================================================================
	//Exercise 97
	const shoppingCart = {
		"tax": .08,
		"items": [
			{
				"title": "orange juice",
				"price": 3.99,
				"quantity": 1
			},
			{
				"title": "rice",
				"price": 1.99,
				"quantity": 3
			},
			{
				"title": "beans",
				"price": 0.99,
				"quantity": 3
			},
			{
				"title": "chili sauce",
				"price": 2.99,
				"quantity": 1
			},
			{
				"title": "chocolate",
				"price": 0.75,
				"quantity": 9
			}
		]
	}
	const numberOfItemTypes = (object) => {
		let arrayCounter = [];
		object.items.forEach( (itemsArray) => {
			if(!arrayCounter.includes(itemsArray)){
				arrayCounter.push(itemsArray);
			}
		});
		return arrayCounter.length;
	}
	console.log(numberOfItemTypes(shoppingCart));

	const totalNumberOfItems = (array) => {
		let total = 0;
		array.items.forEach( (element) => {
			total += element.quantity;
		});
		return total;
	}

	const getAverageItemPrice = (object) => {
		console.log(object.items.length);
		return totalNumberOfItems(object) / object.items.length;
	}
	console.log(getAverageItemPrice(shoppingCart));

	//Exercise 100
	const getAverageSpentPerItem = (object) => {
		let total = 0;
		object.items.forEach (element => {
			total += (element.price * element.quantity);
		});
		return total / totalNumberOfItems(object);
	}
	console.log(getAverageSpentPerItem(shoppingCart));

	// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"

	const mostSpentOnItem = (object) => {
		let totalPriceArray = [];
		object.items.forEach (element => {
			totalPrice.
		});
	}

	console.log(mostSpentOnItem(shoppingCart));
})();