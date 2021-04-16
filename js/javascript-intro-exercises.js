'use strict';

let linebreak = '-----------------------------';
//Exercises
//For each of the following code blocks, read the code and predict what the result of evaluating it would be, then execute the statement(s) in the Chrome console.
var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a);
console.log(b);
console.log(c);

console.log(linebreak);

var d = "hello";
var e = false;

d++;
// Evaluates to NaN
console.log(d);
e++;
//Evaluates to 1;
console.log(e);

console.log(linebreak);

var perplexed; // perplexed is undefined (no value is assigned)
//Evaluates to NaN
console.log(perplexed + 2);

console.log(linebreak);

var price = 2.7;
//Evaluates to 2.70
console.log(price.toFixed(2));

console.log(linebreak);

let stringPrice = "2.7";
// Wont Evaluates because it recognizes
//let testingPrice = stringPrice.toFixed(2);
//console.log(testing+Price);


console.log( isNaN(0) );

console.log( isNaN(1) );

/*
isNaN("")

isNaN("string")

isNaN("0")

isNaN("1")

isNaN("3.145")

isNaN(Number.MAX_VALUE)

isNaN(Infinity)

isNaN("true")

isNaN(true)

isNaN("false")

isNaN(false)

// to illustrate why the isNaN() function is needed:
NaN == NaN

!true

!false

!!true

!!false

!!0

!!-0

!!1

!!-1

!!0.1

!!"hello"

!!""

!!''

!!"false"

!!"0"

 */

//  Exercise #2
/*
Execute the following statement in the Chrome JavaScript console and then follow the directions below.

Use .length to find the number of characters in the string.
Try to make the sample string all upper or all lower case.
Update the variable sample via concatenation so that it contains "Hello Codeup Students".
Replace "Students" with "Class".
Find the index of "c" using .indexOf(). What do you observe?
Find the index of "C" using .indexOf().
Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
 */
var sample = "Hello Codeup";

console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());

sample += " Students";
console.log(sample);

sample = sample.replace('Students', 'Class');
console.log(sample);
// sample is now "Hello Codeup Students"
let whatIsIndex = `The index of 'C' is: ${sample.indexOf('C')}`;
console.log(whatIsIndex);

whatIsIndex = `The index of 'c' is: ${sample.indexOf('c')}`;
console.log(whatIsIndex);

let subStringCodeup = sample.substring(sample.indexOf('C'), sample.indexOf('C') + 'Codeup'.length);
console.log(subStringCodeup);