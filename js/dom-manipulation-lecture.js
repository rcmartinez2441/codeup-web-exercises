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


