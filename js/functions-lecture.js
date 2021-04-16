'use strict';

let lineBreak = () => {
    console.log(`--------------------------------------------------`);
}

let num = 5;

num += 5;

console.log(num);
//function to return the addition of two numbers (num1 and num2)
let add = (num1, num2, num3) => { //parameters are these dudes in the function
    return  num1 + num2 +num3;
}

console.log(`The result of add() is: ${add(-5, 10, 10)}`); // argument are what we use when we call the function

let myNum = 12;
let myNum2 = 21;

// argument are what we use when we call the function
console.log(`The result of add() is: ${add(myNum, myNum, myNum2)}`);

//Function to subtract the difference of num1 minus num2
let subtract = (num1, num2) => {
    return num1 - num2;
}
console.log(`The result of subtract() is: ${subtract(10,2)}`);

//MINI EXERCISE
//  TODO: Create functions which will return the product of two numbers and the dividend of two numbers respectively

let exerciseNumber1 = 420;
let exerciseNumber2 = 69;

//Will receive two numbers,  which will multiply by each other and return the product value
let multiplyNums = (num1, num2) => {
    return num1 * num2;
}
console.log(`Mutliplying ${exerciseNumber1} and ${exerciseNumber2} will give you: ${multiplyNums(exerciseNumber1, exerciseNumber2)}`);

// Will take in two numbers and divide the first number by the second one and return the dividend
let divideNums = (num1, num2) => {
    return num1 / num2;
}

console.log(`Dividing ${exerciseNumber1} and ${exerciseNumber2} will give you: ${divideNums(exerciseNumber1, exerciseNumber2)}`);

//How to have function to have defaults if there is no input
let defaultFunction = (num1 = 0, num2 = 0) => {
    return num1 + num2;
}
console.log(defaultFunction());

// It is best practice to name your default paraments AFTER non-default parameters
// ex let poop = (num1, num2, num = 0) => {}
lineBreak();

// 'let' variable can only be accessed by scopes and their decendents
// 'var' lets you be able to access  from any scope aside from functions
