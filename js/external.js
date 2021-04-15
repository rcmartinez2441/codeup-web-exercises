"use strict";

// TODO: Create an html file on the project root called external_js.html
//    -> Done
// TODO: Create a JavaScript file inside of js/ called external.js
//  -> Done
// TODO: Link external.js to external_js.html by using <script src="external.js"></script>
//  -> Be sure the script tag is inside the body tag of the html
//  ->DONE
// TODO: Use the alert() function to show a message that says "Welcome to my Website!"
alert('welcome to our website'.toUpperCase());
// TODO: Use prompt() to ask for the user's favorite color.
let favColor = prompt("What is your fav color?").toUpperCase();

//  -> Assign the result to a variable and use its value to alert a message that shows the user's favorite color
//  -> ie: "blue" -> "Your favorite color is: blue"
// TODO: Use an if statement to see if that color is also your favorite color
//  -> if it is your favorite as well, then show a special message for the user
//  -> otherwise, show the normal message
if (favColor === "green".toUpperCase()){
    alert(favColor + " is my fav color too! what are the odds! its almost as if we are the same person");
} else {
    alert("Your favorite color is: " + favColor.toUpperCase());
}
