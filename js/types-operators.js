"use strict";
/*
// Boolean
var isTrue = true; //Boolean Value
console.log("The value of isTrue is: " + isTrue);
console.log("The value of isTrue is: " + true); // Boolean literal


 */
//---------------------------------
/*
let iAmHungry = true;

if (iAmHungry) {
    console.log('Well then, eat...')
}

let hoursSinceMeal = 5;
let amHungry = ( hoursSinceMeal > 4 );
if(amHungry){ // Boollan Expression
    console.log("i'm getting a bit hungry");
}
*/

//-----------------------------------
//Numbers Data Types
/*
console.log("the number is: " + 10)

console.log(10 +10);
console.log(69-420);
console.log(4 * 5);
console.log(1/0); // goes to infinity
console.log(-0); // imaginary number
console.log(-0/0); // Will give NaN
console.log( 12 % 2);
 */

// TODD: console.log() five Eqs using each operation (5 total). Each should equate to 4
//Addition
/*
console.log(-1999 + 2003);
console.log(458 - 454);
console.log(.25 * 16);
console.log(1 / .25);
console.log(73 % 69);
 */
//--------------------------------

//UNDEFINE - a var/obj which is = written but never assigned
/*
var name;
console.log(name);
 */

//----------------------------- STRINGS
/*
console.log('Raul'); // String literal - literally passed a string and  not a var

console.log("Raul \n\tis \n\t\tHungry");

let name = "Raul";
let status = "\n\tis \n\t\tHungry";
console.log(name + status);
 */

//------------------- Using 'TypeOf'

console.log(typeof(null));

//------------------------------------- VARIABLE
// A variable is a symbolic rep of a value that can be differ in each run of a program
// The variable is a pointer to a stored place in memory of your running application

let name = 'Raul';
let expectedName = 'Raul';

if (name === expectedName) {
    console.log('You got the right name');
}