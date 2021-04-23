(function() {
	//console.log('Testing from for_loops.js');

	/* -----------------------------------------------------------------------------------
	***FOR LOOPS***
	2. Create a function named showMultiplicationTable that accepts a number and console	.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

	For example, showMultiplicationTable(7) should output
	7 x 1 = 7
	7 x 2 = 14
	7 x 3 = 21
	7 x 4 = 28
	7 x 5 = 35
	7 x 6 = 42
	7 x 7 = 49
	7 x 8 = 56
	7 x 9 = 63
	7 x 10 = 70
	 */

	// let showMultiplicationTable = (numby = 1) => {
	// 	for (let i = 1; i <= 10; i++){
	// 		console.log(`${numby} x ${i} = ${parseFloat(numby) * i}`);
	// 	}
	// }
	// showMultiplicationTable(69);

//----------------------------------------------------------------------------------------------
	/*
	3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
	123 is odd
	80 is even
	24 is even
	199 is odd
	...
	 */

	// let isOddOrEven = (number = 0) => {
	// 	if (number % 2 === 0){
	// 		console.log(`${number} is Even`);
	// 	} else {
	// 		console.log(`${number} is Odd`);
	// 	}
	// }
	// let tenRandomNumbers = () => {
	// 	for (let i = 1; i <= 10; i++){
	// 		let random = Math.floor( (Math.random()*180) + 20 );
	// 		isOddOrEven(random);
	// 	}
	// }
	// tenRandomNumbers();

//----------------------------------------------------------------------------------------------
	/*
	4. Create a for loop that uses console.log to create the output shown below.
	1
	22
	333
	4444
	55555
	666666
	7777777
	88888888
	999999999
	 */

	//  let pyramidNumLog = () => {
	// 	let number = '';
	// 	for (let i = 1; i <= 9; i++){
	// 		let numToString = '';
	// 		for (let x = 1; x <= i; x++){
	// 			numToString += String(i);
	// 			//''+'1' = 1
	// 			//'' +'2'+ '2' = '22'
	// 			//'' +'3' +'3' +'3' = '333'
	// 			//....
	// 			//i++;
	// 			//i = i + 1;
	// 		}
	// 		console.log(numToString);
	// 	}
	// }
	// pyramidNumLog();

	//An easier approach to this using built-in function
	// let pyramidNumLog = () => {
	// 	let x;
	// 	for (let i = 1; i <= 9; i++){
	// 		x = String(i);
	// 		x = x.repeat(i);
	// 		console.log(x);
	// 	}
	// }
	// pyramidNumLog();
	
//----------------------------------------------------------------------------------------------
	/*
	5. Create a for loop that uses console.log to create the output shown below.
	From 100 down to 5 in increments of five
	 */

	// let decrementsOfFive = () => {
	// 	for (let i = 100; i >= 5; i -= 5 ) {
	// 		console.log(i);
	// 	}
	// }
	// decrementsOfFive();

})();