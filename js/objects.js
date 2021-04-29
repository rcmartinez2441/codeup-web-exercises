(function() {
	'use strict';
	console.log(`Testing from objects.js`);
	let lineBreak = () => {
		console.log(`--------------------------------------------------------`);
	}
	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */
	let person = {
		firstName: 'Raul',
		lastName: 'Martinez'
	}
	console.log(person.firstName);
	console.log(person.lastName);
	lineBreak();
//-------------------------------------------------------------------------------
	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */
	person.sayHello = function () {
		return `Hello from ${this.firstName} ${this.lastName}`;
	}
	console.log(person.sayHello());
	lineBreak();
//-------------------------------------------------------------------------------
	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */
	let hebShoppers = [
		{
			name: `Cameron`,
			totalCharge: 180
		},
		{
			name: `Ryan`,
			totalCharge: 250
		},
		{
			name: `George`,
			totalCharge: 320
		}
	]
	//Accidentally did for loop instead of forEach()
	// let getsDiscount = (person) => {
	// 	for (let i = 0; i < person.length, i++) {
	// 		if (person[i].totalCharge > 200) {
	// 			person[i].afterDiscount = (1 - .12) * person[i].totalCharge;
	//
	// 		} else {
	// 			person[i].afterDiscount = `Sorry, amount does not qualify for discount`;
	// 		}
	// 		console.log(person[i]);
	// 	}
	// }

	hebShoppers.forEach(function (person){
		if (person.totalCharge > 200) {
			person.afterDiscount = (1 - .12) * person.totalCharge;
		} else {
			person.afterDiscount = `Sorry, no discount for you`;
		}
	});
	console.log(hebShoppers);
	lineBreak();
//-------------------------------------------------------------------------------
	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */

	let books = [
		{
			bookTitle: `Clifford's First Day of School`,
			author: {
				firstName: 'Red',
				lastName: `Dawgson`
			}
		},
		{
			bookTitle: `Game of Thrones`,
			author: {
				firstName: `George R.R.`,
				lastName: `Martin`
			}
		},
		{
			bookTitle: `Astrophysics for People in A Hurry`,
			author: {
				firstName: 'Neil deGrasse',
				lastName: `Tyson`
			}
		},
		{
			bookTitle: `The Story of that One Guy`,
			author: {
				firstName: 'Big',
				lastName: 'Chungus'
			}
		},
		{
			bookTitle: `Are you a Gamer`,
			author: {
				firstName: `A Real`,
				lastName: `Gamer`
			}
		}

	]
	books.forEach(function (element){
		console.log(`Book: #${books.indexOf(element) +1}\nTitle: ${element.bookTitle}\nAuthor: ${element.author.firstName} ${element.author.lastName}`);
		lineBreak();
	});
	lineBreak();

//-------------------------------------------------------------------------------
	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */
//Did it in Line 141 Lol
	lineBreak();
//-------------------------------------------------------------------------------
	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */
	let booksVer2 = [];
	let createBook = (bookTitle, author) => {
		booksVer2.push({
			book: {
				title: bookTitle,
				author: author,
			}
		})
		return booksVer2;
	}
	console.log( createBook(`Testing Book`, `Testing Author`) );

	createBook('Book2', `Author2`);
	lineBreak();

	let showBookInfo = (array) => {
		array.forEach(function (element, index){
			console.log(`Book #${index +1}`);
			console.log(`Title: ${element.book.title}`);
			console.log(`Author: ${element.author}`);
			lineBreak();

		})
	}
	showBookInfo(booksVer2);






})();