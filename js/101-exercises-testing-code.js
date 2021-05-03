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
	let onlyPositiveNumbers = (array) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i] > 0){
				continue;
			} else {
				array.splice(i,1);
				i = -1;
			}
		}
		return array;
	}

onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);

})();