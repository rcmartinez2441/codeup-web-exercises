// DOM

// let school = {
// 	teacher: 'Casey',
// 	students: 30,
	//objects can also hold functions
	//AKA Methods
// 	getNumStudents: function () {
// 		console.log(`num of students is ${this.students}`);
// 	}
// }

//print teachers names. Examples using Objects in JS
// console.log(school.teacher);
// console.log(school.students);
// console.log(school.getNumStudents());

//Same concept will apply for Document Object Manipulation
// getting Node by Element ID
// let lightgreenElement = document.getElementById("light-green");
// console.log(lightgreenElement);

//what's being returned?
// The entire HTML line(element) AKA a *NODE ELEMENT* will be  logged like this:
// <p id="light-green"> THis is a P tag</p>

// By Class
// let redElement = document.getElementsByClassName(`red`);
// console.log(redElement);

//Will return an Array
//*******************
// dom-manipulation-lecture.js:29
// HTMLCollection(2) [p.red, p.red]
// 0: p.red
// 1: p.red
// length: 2
// __proto__: HTMLCollection
//******************

//If you want to select a specific Node with the class red, since they are considered arrays now, you can select the second p-tag with red class liek this:
// console.log(redElement[1]);

//How to select by element regardless of Class or ID

// let getElements = document.getElementsByTagName('p');
// console.log(getElements);

//Will log the array with all p tags
//****************************************************************

// // TODO: build a simple 2 x 3 grid using bootstrap and give each
//  item a unique border color. Give any three of those of those divs a
//  blue background-color. Place a paragraph tag inside of all 6 divs
//  (use lorem). Four of the six paragraphs should have dark-green font
//  color
//COMPLETED HTML STRUCTURE

// TODO: print the following items to the console: 1) A node that
//  represents a div/item with a red border. 2) an array of elements
//  whose text is dark-green. 3) an array of all paragraph elements

// let redBorderNode = document.getElementById(`bd-red`);
// let darkGreenElements = document.getElementsByClassName(`font-dark-green`);
// let paragraphElements = document.getElementsByTagName(`p`);
// console.log(`This is red border node:`);
// console.log(redBorderNode);
//
// console.log(`This is all elements with dark-green font:`);
// console.log(darkGreenElements);
//
// console.log(`This is all p-tags in html:`);
// console.log(paragraphElements);

//*************************************************
// WORKING WITH FORMS IN THE DOM

//if you want to select a particular section in the form, it would be written like this
// let sectionOfFrom = document.forms.pizz[0].value
//

//with DOM you can remove attributes (ids, classes), get attributes and set attributes
//1. SELECT the element 2. REMOVE the existing attribute 3. SET brand new attribute
//1. document.getElementById()
//2. document.getElementById().removeAttribute()
//3. document.getElementById().setAttribute([attribute], [values])
//*********************************************************************

//*************** STYLING ELEMENTS ************* uncomment the row/divs section

// let orangeDiv = document.getElementById(`bd-orange`);
// console.log(orangeDiv)

//will change border style to this other color

// orangeDiv.style.border = "6px dotted orange"

//changing  inner contents of a node

// let changePText = document.getElementById('change-text');
// console.log(changePText.innerText) //will log the p tag text

//this changes the p#change-text to whatever ytou set it
// changePText.innerText = 'this is the new text inside this p#change-text';

//**********************************************************************
// 05/20/21 Lecture Notes
// Creating elements
// .createElement();

// // 1. Creating an Element
// let newEl = document.createElement('p');
// console.log(newEl);
//
// // 2. changing the guts of an element using InnerText
// newEl.innerText = 'This is going into the new P tag created';
// console.log(newEl);
//
// //Using innerHTML - Working with form named "pizza"
// let pizzaForm = document.getElementsByClassName("pizza");
// console.log(pizzaForm);
// pizzaForm[0].innerHTML = '';
// console.log(pizzaForm[0]);
//
// //**** MINI EXERCISE ***
// // 1. Create Element
// let newElement = document.createElement('div')
// // 2. create UL with a few li's
// let newUL = document.createElement('ul');
// console.log(newUL);
// // 3. change the innertext of element created
// newElement.innerText = 'this is a brand new div';
// // 4.change innerHTML of elements created
// newUL.innerHTML = `
// 	<li>test 1</li>
// 	<li>tes 2</li>`;
//
// console.log(newUL);

//************************************************************************
//USING APPEND

let newContainer = document.createElement('div');
newContainer.setAttribute('class', 'container')
console.log(newContainer);

let newPars = document.createElement('p');
newPars.innerText= 'Wassaaa';

//Appending Child
newContainer.appendChild(newPars);

let existingDivs = document.getElementsByClassName('toBeFilled');
existingDivs[0].appendChild(newContainer);
console.log(existingDivs[0]);

//** USING QUERY SELECTOR
// Format goes:
let querySelectorExamples = document.querySelector('.toBeFilled');
// Query Selector will look at HTML from top to bottom and return the first instance that it receives. It will start from <HTML> element node
//querySelectorAll is more dynamic. to select  some very precise
// Adding to the end of the body of an HTML
// document.querySelector('body').appendChild(variable);

//***************************** **************************************
//Removing Children
// 1. Select our element
let petUl = document.querySelector('#pets');
petUl.removeChild(document.querySelector('#cats'));




