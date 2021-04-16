'use strict';

//Shorthand Assignment Operators

// += and -=
// The same as 'x = x +1' or 'x = x - 1'

// Example
let name = 'Raul';
name = name + " " + "Edwards";
console.log(name);
//OR

name += ' ' + 'Edwards';
console.log(name);

// Decrement works the same but priamrily with numbers
//console.log(name -= 'Edwards')  will log 'NaN';
// console.log(4-=); will give 3

// TODO: Refactor the mini exercise we did earlier on arithmetic operators to use variables and their related shorthand assignment operators, then log out the result
//  ie:
//     var result = 5;
//     console.log(result += 1);

let additionShorthand = 3;
additionShorthand += 1;
console.log(additionShorthand);

let subtractionShorthand = 5;
subtractionShorthand -= 1;
console.log(subtractionShorthand);

let multiplyShorthand = 4;
multiplyShorthand *= 1;
console.log(multiplyShorthand);

let divisionShorthand = 8;
divisionShorthand /= 2;
console.log(divisionShorthand);

let modularShorthand = 9;
modularShorthand %= 5;
console.log(modularShorthand);

console.log('----------------------------');
// Increment and Decrement
//post-increment - (x++)

// JS Built-In Methods (aka functions);
//console.log();
//window.alert();
//toString();

let num = 5 * 5;
console.log(num.toString());

console.log('----------------------------');

let pi = 3.1415926535;
console.log(pi.toFixed(2));

console.log('----------------------------');
//Number();
let pseudoNumber = '420';
console.log(Number(pseudoNumber));

console.log('----------------------------');
//isNaN(); - Checks to see if the value is Not a number
let nanTest = 'name'
console.log(isNaN(pseudoNumber)); // Should come out false
console.log(isNaN(nanTest)); // should be true

console.log('----------------------------');
//parseInt();
let testParseInt = '1234 testing';
console.log(parseInt(testParseInt)); // Should change number part in string to number data type
testParseInt = 'testing 1234';
console.log(parseInt(testParseInt)); // Will get NaN because initial value of string are not numbers


console.log('----------------------------');
//.lenth - it is NOT a function but a property of an object
