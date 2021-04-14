"use strict";

// alert("I swear I wont make you see 'Hello World'");

// alert("I hope the dogs don't get out again :/");

// MINI EXERCISE
// TODO: I demand a haiku! Using alert, write a haiku!
//  -> The entire poem consists of just three lines, with 17 syllables in total.
//  -> The first line is 5 syllables.
//  -> The second line is 7 syllables.
//  -> The third line is 5 syllables.


/*
alert("I love to eat food");
alert("Food is what makes me happy");
alert("A full stomach good");
 */

let userChoice = confirm('Do you like food?');

if(userChoice) {
    console.log("Lets Continue");
} else {
    console.log("Alright, be like that");
}
console.log("The user chose: " + userChoice);

//Using Prompt
let userMovie = prompt('What is your fav movie?').toUpperCase();

if(userMovie === "the room".toUpperCase() ) {
    alert("Oh, hi Mark");
} else {
    alert("You chose: " + userMovie);
}

// Javascript with HTML Exercises

