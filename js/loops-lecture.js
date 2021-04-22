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
// function coutingEvenNumbers () {
// 	let evenNumbers = 1;
// 	while (evenNumbers <= 25) {
// 		if (evenNumbers % 2 === 0) {
// 			console.log(`current iteration is: ${evenNumbers}`);
// 		}
// 		evenNumbers += 1;
// 		console.log(`------------------------------------------------`);
// 	}
// }
// coutingEvenNumbers();

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// function isPassword() {
// 	while (true) {
// 		let passwordInput = prompt('Please Enter Password');
// 		let savedPassword = 'bonelesspizza';
// 		if (passwordInput === savedPassword) { //if user input equals 'bonelesspizza' it will alert and exit loop
// 			alert('This is the password');
// 			break;
// 		} else if (passwordInput === null) { //If user presses cancel, it will exit loop too
// 			break;
// 		} else { //If above two fail, alert will execute and loop will continue otherwise
// 			alert('This not the password, try again');
// 		}
// 	}
// }
// isPassword();
// correct password is given.
//hint: start by defining the correct password and don't forget to link your html file

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

// //Do-While Loops
// Will always execute the code at least once before the condition is checked
//SYNTAX
/*
	do {
		[code to execute];
	} while( condition );
 */

// print 'we have 'x' amount of desks left'
// 1. variable that holds the amount of student --. starting point
// 2. Define amount of desks avail --> place as condition inside the while ( )
// 2. start the 'do' loop
// 3.

// let numOfStudents = 0;
// do {
// 	var desksAvailable = 20 - numOfStudents;
// 	console.log(`We have ${desksAvailable} amount of desks left`);
// 	numOfStudents++;
//
// } while( numOfStudents <= 20);
//
// console.log('Sorry Class is Full!')


//Sing happy bday to someone every year on their birthday and when they reach 16 say, 'I got you a car'
//variable = age starting point

// let age = 0;
// do {
// 	age++
// 	console.log(`Happy Birthday to you! you are now ${age} years old!`)
// } while (age < 15);
//
// console.log('too old for b-day here is a car');
// to old now, here's a job application and car to
//

// TODO EXERCISE
// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements

// let numberOfParking = () => {
// 	let totalParkingSpace = 30;
// 	let carsParked = 0;
// 	do {
// 		console.log(`There are currently ${totalParkingSpace - carsParked} parking spaces available`)
// 		carsParked += 2;
// 		console.log(`Some cars are about to park`)
// 		console.log(`-------------------------------------------`)
// 	} while (totalParkingSpace >= 0);
// 	console.log(`There are no more spaces available. Total cars parked are: ${carsParked}`);
// }
// numberOfParking();




//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

// //For Loops