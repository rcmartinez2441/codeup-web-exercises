(function () {
	'use strict';

//Adding more Form Inputs including name and badges for file tags
//Adding Div for Full Name
	function addingFullNameUserInputSection() {
		//Finds
		let blogInputFormElement = document.getElementById('blog-form');

		let nameDivFormGroup = document.createElement('div');
		nameDivFormGroup.setAttribute('class', 'form-group my-1');

		let nameInputElement = document.createElement('input');
		nameInputElement.setAttribute('id', 'fullName');
		nameInputElement.setAttribute('type', 'text');
		nameInputElement.setAttribute('placeholder', 'Full Name');

		nameDivFormGroup.appendChild(nameInputElement);
		formContainer[1].prepend(nameDivFormGroup);
	}
	addingFullNameUserInputSection();

//Adding Div for Tag Buttons
	function addingManualTags () {
		//Find the right parent container
		let formContainer = document.getElementById('form');

		// Create Div to hold form-group
		let tagFormGroup = document.createElement('div');
		tagFormGroup.setAttribute('class', 'form-group my-1');

		let textareaTagsElement = document.createElement('textarea');
		textareaTagsElement.setAttribute('id', 'addTags');
		textareaTagsElement.setAttribute('class', 'form-control');
		textareaTagsElement.setAttribute('placeholder', 'Enter Hashtags with Sapces in Between');

		tagFormGroup.appendChild(textareaTagsElement);
		formContainer[1].appendChild(tagFormGroup);
		//Create input element maybe text area that will allow user to add hashtags

		//will eventuallly make a function that will take input value for this  tag input and spread each hastage into an array seperate by spaces. Then make each array their won button at the bottom
	}
	addingManualTags();

	addButtonEvent();

	function addButtonEvent() {
		document.getElementById("submitBtn")
			.addEventListener("click", addPost)
	}

//Function should add certain
	function addPost() {
		getBlogContainer();
		// let blogContainer = document.getElementById('blog-container');

		let rowDiv = document.createElement('div');
		rowDiv.setAttribute('class', 'row m-1 border')

		let textArea = document.getElementById('user-input');
		let fullName = document.getElementById('fullName');

		let printFullName = document.createElement('div')
		printFullName.setAttribute('id', 'name-div');
		printFullName.setAttribute('class', 'col-12 border');
		printFullName.textContent = `Name: ${fullName.value}`;

		getBlogContainer().appendChild(printFullName);
	}

//Function returns container and can be used inside addPost()
	function getBlogContainer() {
		return document.getElementById('blog-container');
	}
// function ideas to use: getBlogText() , getBlogTags(), getUsername(), getDateAndTime();
	//THen you can append them to the the div that will contain the results

})();