/*
// LOOPS - Piece of code that you'll do over and over until the condition is met
//  */

// //While Loop
// while (/*condition*/){
// 	//body
// }
// let numberOfSteps = 0;
// while (numberOfSteps <= 30) {
// 	console.log(`Keep Walking. Number of Steps: ${numberOfSteps}`);
// 	numberOfSteps+=10;

// TODO: MINI EXERCISES
// TODO: print all even numbers between 0 and 25;
function coutingEvenNumbers () {
	let evenNumbers = 1;
	while (evenNumbers <= 25) {
		if (evenNumbers % 2 === 0) {
			console.log(`current iteration is: ${evenNumbers}`);
		}
		evenNumbers += 1;
		console.log(`------------------------------------------------`);
	}
}
coutingEvenNumbers();
// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
function isPassword() {
	while (true) {
		let passwordInput = prompt('Please Enter Password');
		let savedPassword = 'bonelesspizza';
		if (passwordInput === savedPassword) { //if user input equals 'bonelesspizza' it will alert and exit loop
			alert('This is the password');
			break;
		} else if (passwordInput === null) { //If user presses cancel, it will exit loop too
			break;
		} else { //If above two fail, alert will execute and loop will continue otherwise
			alert('This not the password, try again');
		}
	}
}
isPassword();
// correct password is given.
//hint: start by defining the correct password and don't forget to link your html file


// //Do-While Loops
//
// //For Loops