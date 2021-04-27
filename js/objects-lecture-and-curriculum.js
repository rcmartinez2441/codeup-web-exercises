(function () {
	'use strict';
//**OBJECTS**
	//Objects can be declared 2 ways:

	// let object1 = new Object();
	// let object2 = {};
	//
	// console.log(typeof object1);
	// console.log(typeof object2);


// 04/27/20
//**OBJECTS LECTURE**
// Objects are containers and they have properties and methods (functions)

//Example - Laptop Object
// 	let laptop = {
// 		color: 'green',
// 		make: 'mac',
// 		size: 15,
// 		turnsOn: function() {
// 			return 'turn on PC';
// 		}
// 	}

//Creating a new Object Instance
// 	let losSpurs = new Object();
// 	console.log(typeof losSpurs);
//
// 	let losSpurs2 = {};
// 	console.log(typeof losSpurs2);
// 	//logging LosSpurs will get outcome -> {}


//TODO: create an empty 'aboutMe' object using the 'new' keyword and the Object constructor
	//let aboutMe = new Object();

//TODO: create an empty 'thisIsMe' object using object literal syntax -> {}
// 	let thisIsMe = {
// 		//Adding properties describing youself
// 		name: 'Raul Martinez',
// 		age: 26,
// 		status: 'Depressed',
//
// 	};


//Syntax: Properties and Values
	//Example
	// let theSpurs = {
	// 	city: 'San Antonio', // city of Property and 'San Antonio' is value
	// 	coach: "Gregg",
	// 	wins: 5,
	// };

// Built-In vs Custom Objects
	//Any object we create, it will be considered custom objects compared to built-in objects

//Using dot notation for Object Instances
// 	let spurs = new Object();
// 	console.log(spurs);
// 	//nameofObject.nameofProperty = value
// 	spurs.coach = 'Gregg';
// 	spurs.mascot = 'coyote';
// 	console.log(spurs);

//Using bracket notation instead of dot notation
// 	let daMavs = {};
// 	daMavs['coach'] = 'i dont know'; //IMPORTANT: Use quotes when declaring properties using Array(Bracket) notation
// 	console.log(daMavs);

//Can assign, variables as Array notation property names
// 	let team = "team";
// 	daMavs[team] = 'yes';
// 	console.log(daMavs); Will add property 'team' with value 'yes' into daMavs object

//Example
// 	let aboutMe = new Object();
// 	aboutMe.name = 'Raul Martinez';
// 	aboutMe.age = 25;
// 	aboutMe.gender = 'male';
// 	aboutMe['status'] = 'alive';
// 	aboutMe['car'] = 'Nissan';
// 	console.log(aboutMe);

//Example #2
// 	let bracketObject = {
// 		cat: 'meow',
// 		dog: 'woof',
// 		test: 'test1'
// 	}
// 	let dog = 'cat';
// 	let sound = bracketObject[dog]; // referencing dog VARIABLE and not dog property. Dog variable has 'cat' which
	//inside brackets will have 'cat'
	//Can  also be written:
	// let sound = bracketObject['cat'];

	// 		console.log(sound)

//Editing values in already defined properties in an Object
//Will use bracketObject
// 	console.log(bracketObject)
// 	bracketObject.test ='new test string';
// 	console.log(bracketObject)

//Slack Exercises #1
// TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
	// TODO: write a function that returns the sport and numOfPlayers from your 'team' object

	// let yourFaveSportsTeam = new Object();
	// yourFaveSportsTeam.city = 'Houston';
	// yourFaveSportsTeam.coach = 'Some gamer' ;
	// yourFaveSportsTeam.sport = 'Houston Outlaws';
	//
	// //Adding using bracket notation
	// yourFaveSportsTeam['numOfPlayers'] = 12;
	// yourFaveSportsTeam['numOfChampsWon'] = 0;
	// yourFaveSportsTeam['isBestTeam'] = true;
	// console.log(yourFaveSportsTeam);
	//
	// let sportsFunction = () => {
	// 	return [yourFaveSportsTeam.sport, yourFaveSportsTeam.numOfPlayers];
	// }
	// console.log(sportsFunction());

//**NESTED OBJECTS/VALUES**
//Examples
// 	let theSpurs = {
// 		city: 'SA',
// 		coach: 'Greggy Boi',
// 		wins: 69,
// 		players: ['John Johnson', 'Steve Stevenson', 'Manu G'],
// 		playerInfo: [
// 			{
// 				name: "Tim",
// 				age: 40,
// 				mvp: true
// 			},
// 			{
// 				name: 'Steve',
// 				age: 69,
// 				mvp: true
// 			}
// 		]
//
// 	}
// 	console.log(theSpurs);

//Assigning Functionality to Objects - they are stored inside of properties
	//FUNCTIONS IN PROPERTIES ARE CALLED METHODS
	// theSpurs.function = function () {
	// 	return `This is a function inside a property of theSpurs`;
	// }
	// console.log(theSpurs.function()); //Will log the return statement

// Using the 'THIS' keyword
//
// 	let laptop = {
// 		color: 'gray',
// 		make: 'mac',
// 		size: 15,
// 		whatSize: function (){
// 			return `A laptop is ${this.size} inches wide`;
// 		},
// 		keyboard: {
// 			size: 10,
//
// 		}
// 	}
// 	console.log(laptop.whatSize());

// Class Example
// 		var theSpurs = {
// 			city: "SA",
// 			coach: 'gregg',
// 			wins: 5,
// 			players: ["one", "two", "tim duncan", "manu", "david robinson"],
// 			playerInfo: [
// 				{
// 					name: "Tim",
// 					age: 40,
// 					mvp: 3
// 				},
// 				{
// 					name: "manu",
// 					age: 38,
// 					mvp: 6
// 				}
// 			],
// 			otherNBATeams: {
// 				Jazz: {
// 					city: "Salt Lake City",
// 					mascot: "Jazz Bear",
// 					champsWon: 0
// 				},
// 				Mavs: {
// 					city: "Dallas",
// 					mascot: "MavsMan & Champ",
// 					champsWon: 1
// 				},
// 				Pistons: {
// 					city: "Detroit",
// 					mascot: "Hooper the Horse",
// 					champsWon: 3
// 				}
// 			}
// 		}
// 		console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.

// 		console.log(theSpurs.otherNBATeams.Mavs.mascot);
// 		console.log(theSpurs.otherNBATeams.Pistons.mascot);
// 		console.log(theSpurs.otherNBATeams.Jazz.mascot);
//
// 		theSpurs.playerInfo[1].name = "Ginobli";
// 		console.log(theSpurs);
//
// 		console.log(theSpurs.players[2]);
//
// 		theSpurs.otherNBATeams.Bulls = {
// 			city: 'Chicago',
// 			mascot: 'Bull guy',
// 			champsWon: 'A lot'
//
// 		}
// 		console.log(theSpurs.otherNBATeams);

	/** Mini Exercises */
	/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
		  isOpen, ranking, yearOpened), as
		  well as, information about at least 5 different animals (think nested objects). For each
		  Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
		   livingPlace). Each animal must also contain a method that returns the sound of that
			animal using the THIS keyword.
		   hint: Each animal should have at least 5 properties (one of them being animalSound);
	*/

	// let zoo = {
	// 	name: 'Zooland',
	// 	city: 'right here',
	// 	isOpen: '24/7',
	// 	ranking: 99,
	// 	yearOpened: '1969',
	// 	animals: {
	// 		elephant: {
	// 			hasFur: false,
	// 			isMammal: true,
	// 			animalSound: `Yo wassup I'm an Elephant`,
	// 			animalSoundFunction: function (){
	// 				return this.animalSound;
	// 			},
	// 			canFly: 'If have big ears and in a disney movie',
	// 			livingPlace: 'Somewhere where elephants live',
	// 		},
	// 		tiger: {
	// 			hasFur: true,
	// 			isMammal: true,
	// 			animalSound: `Yo wassup I'm a Tiger`,
	// 			animalSoundFunction: function (){
	// 				return this.animalSound;
	// 			},
	// 			canFly: 'sometimes but they are shy',
	// 			livingPlace: 'Crosswalks and other places with stripes',
	// 		},
	// 		ostrich: {
	// 			hasFur: false,
	// 			isMammal: true,
	// 			animalSound: `Yo wassup I'm an Ostrich`,
	// 			animalSoundFunction: function (){
	// 				return this.animalSound;
	// 			},
	// 			canFly: "Yes and No",
	// 			livingPlace: 'Wherever the road takes them',
	// 		},
	// 		capybara: {
	// 			hasFur: true,
	// 			isMammal: true,
	// 			animalSound: `Yo wassup I'm a Capybara`,
	// 			animalSoundFunction: function (){
	// 				return this.animalSound;
	// 			},
	// 			canFly: false,
	// 			livingPlace: 'My Backyard',
	// 		},
	// 		monke: {
	// 			hasFur: true,
	// 			isMammal: true,
	// 			animalSound: `Yes I am a web developer`,
	// 			animalSoundFunction: function (){
	// 				return this.animalSound;
	// 			},
	// 			canFly: false,
	// 			livingPlace: 'In my house',
	// 		},
	// 	}
	// }

//** LEARNING MATH METHODS **
// Math.random();
// .toFixed()

//Example
// let random = Math.random(); // takes in a random number between 0 - 1
// 	console.log(random);
//
// let fixed = random.toFixed(2); // Will only go max 2 decimal places
// 	console.log(fixed);
//
// //getting a whole number between 20 - 40
// let inBetween = Math.floor(Math.random()*20) + 20;
// 	console.log(inBetween);
//
// //Using Math.round() - returns the value of a number rounded to the nearest integer.
// 	console.log(Math.round(5.2)); // will log 5
// 	console.log(Math.round(5.5)); // will log 6
//
// //Math.floor() - returns the largest integer less than or equal to a given number.
//
//
// //Math.ceil() -
// 	console.log(Math.ceil(8.00001)); //Will log 9
// 	console.log(Math.ceil(7.89));
//
// //Math.pow() -
// 	console.log(Math.pow(6,9)); // x is base, y is exponent
//
// //Math.sqrt() - return square root of value
//
// //MATH CONSTANTS - predefined number that is fixed by an unambiguous value
// 	//PI
// 	console.log(Math.PI);











})();