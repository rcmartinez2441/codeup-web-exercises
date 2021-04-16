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
console.log(linebreak);
//-------------------------------------------------------------
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

console.log(linebreak);
//--------------------------------------------------
/*
Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world
conditions can be represented with code.
 */
//--------------------------------------------------
/*
#1) You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will
you have to pay?
 */
let movie1 = 3;
let movie2 = 5;
let movie3 = 1;
let moviePrice = 3;
let totalPrice = moviePrice * (movie1 + movie2 + movie3);
console.log(`The minimum price that you woud have to pay would be: $${totalPrice}`)

console.log(linebreak);
//----------------------------------------------------
/*
#2) Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate
per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You
worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */
let googleTotalPay =  400 * 6;
let amazonTotalPay = 380 * 4;
let facebookTotalPay = 350 * 10;
let totalPay = googleTotalPay + amazonTotalPay + facebookTotalPay;
console.log(`Total pay this week is: $${totalPay}`);

console.log(linebreak);
//-------------------------------------------------------
/*
#3) A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her
current schedule.
 */
let isClassFull = false;
let isScheduleConflict = false;
let canEnroll;
if (isClassFull && isScheduleConflict){
 console.log(`I can't take this class`);
} else {
 console.log(`I am able to enroll in this class`);
}
console.log(linebreak);
//--------------------------------------------------------
/*
#4) A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium
members do not need to buy a specific amount of products.
 */
let numberOfItems = 3;
let isPremiumMember = false;
let isCouponExpired = true
if (isPremiumMember || (numberOfItems > 2 && isCouponExpired !== true)) {
 console.log(`You can use this coupon buddy`)
} else {
 console.log(`Sorry bud, you can't use this coupon`);
}

console.log(linebreak);
//-----------------------------------------------------------
console.log(linebreak);
//-----------------------------------------------------------
// Exercise #4
/*
Use the following code to follow the instructions below:

var username = 'codeup';
var password = 'notastrongpassword';
Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace
 */
var username = 'codeup';
username = username.toLowerCase();
username = username.trim();
var password = 'notastrongpassword';
password = password.toLowerCase();
password = password.trim();
let passwordLengthOkay = password.length > 5;
let passwordIncludeUsername = ( password === password.includes(username) );
let usernameLengthOkay = username.length < 21;
let trimmingUAndP = username.trim();

