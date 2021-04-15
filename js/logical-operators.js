"use strict";

// I want aroutine which will determine if a dog is in fact my dog
// dog must have fur, whiskers, and a name

let fur = true;
let whiskers = true;
let name = "Frida";

var isMyDog;

// Logical And = '&&'
if(fur && whiskers && name) {
    isMyDog = true;
    console.log('must be my dawg');
}

// Logical OR - '||'

let creditScore = 750;
let cashOnHand = 3000;

if(creditScore > 690 || cashOnHand > 3000) {
    console.log("Congrats, credit is a scam to make ");
}

let hasRequiredScoreOrCash = (creditScore > 690) || (cashOnHand > 3000);
let lengthOfEmployment = 6;
let purchasedCar;
let hasAdequateLengthOfEmployment = ( lengthOfEmployment >= 6 );
if (hasRequiredScoreOrCash && hasAdequateLengthOfEmployment) {
    console.log('Congrats, the bank decides your fate');
    purchasedCar = true;
}

//-------------------------------------------------- Logical NOT '!"
console.log("The inverted value is: " + !true);

console.log('THis is the weird stuff I was telling about: !0 is ' + !0);
console.log('THis is the weird stuff I was telling about: !NaN is ' + !NaN);


