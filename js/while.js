(function () {
	'use strict';
/*
Create a file named while.js in the js directory.

Create a while loop that uses console.log() to create the output shown below:
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
 */

	// let whileLoop = (num) => {
	// 	let number = num;
	// 	while(number <= 65536) {
	// 		console.log(number);
	// 		number*=2;
	// 	}
	// }
	// whileLoop(2);

/*
An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random
number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your
code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers
for this exercise.
 */
// The output should be similar to the following:
//
// 	5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
	let sellingUntilOut = () => {
		// This is how you get a random number between 50 and 100
		let allCones = Math.floor(Math.random() * 50) + 50;
		// This expression will generate a random number between 1 and 5
		let conesSold = 0;
		do {
			console.log(`Total cones remaining for the day is ${allCones}`);
			conesSold = Math.floor(Math.random() * 5) + 1;
			if (conesSold <= allCones) {
				console.log(`We just sold ${conesSold} cones!`)
				allCones -= conesSold;
			} else {
				console.log(`Sorry, I cant sell you ${conesSold} cones, I only have ${allCones}`);
				console.log('We sold them the remainder of the cones we had');
				allCones -= allCones;
			}
		} while (allCones !== 0);
		console.log('All out of cones! time to go home');
	}
	sellingUntilOut();








})();