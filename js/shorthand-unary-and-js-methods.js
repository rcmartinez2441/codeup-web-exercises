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
