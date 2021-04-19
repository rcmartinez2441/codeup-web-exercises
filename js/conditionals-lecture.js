(function (){
	'use strict';
	// let hasCar;
	// if (hasCar) {
	// 	console.log('Get in B*tch, we\'re going shopping');
	// } else {
	// 	console.log('Dang, unless we have money for uber, we might have to take the bus');
	//
	let getToDestination = ( hasCar ) => {
		if ( hasCar ) {
			alert('Get in friend, we\'re going shopping');
		} else if ( !hasCar ) {
			canGetRideShare();
			if (canGetRideShare()) {
				alert('We can get an Uber');
			}
		} else {
			alert('I think we\'re walking');
		}
	}
	let canGetRideShare = () => {
		alert('Looks like we\'ll need a ride');
		let driversNearby = confirm('Are there any drivers in the area?');
		let doYouHaveMoney = confirm('Do you have money for an uber? (Minimum price for Rideshare is $25)');

		if (driversNearby && doYouHaveMoney) {
			return true;
		} else {
			return false;
		}
	}
	let canUseCar = () => {
		alert('We Need to go somewhere!');
		let whatIsAge = prompt('What is your age?');
		let hasLicense = confirm('Do you have a dirver\'s licesne?');
		let hasInsurance = confirm('Do you have car insurance?');
		let isLegalDriver = (whatIsAge >= 16) && hasLicense && hasInsurance;
		alert(`Your age: ${whatIsAge}, Has a license: ${hasLicense}, Has Insurance: ${hasInsurance}`);

		if (isLegalDriver){
			return true;
		} else {
			return false;
		}
	}
	getToDestination( canUseCar() );

	// TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
	//  -> Let's augment our getToDestination() function
	//  -> Create a function called canGetRideshare() which will *RETURN* a boolean
	//      -> It will determine if there are drivers nearby and the person has enough money for the ride
	//  -> Now, when you call getToDestination(), your canGetRideshare parameter will be an argument that is
	//  -> fulfilled by a call to canGetRideshare() (yes, I know, the whole parameter name vs argument name thing)
	//  -> Be sure to log to the user if they can or cannot get a rideshare
	// TODO: BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
	//  -> Consider this: What if mileage determined:
	//      -> If the rider has enough funds?
	//      -> If there is a driver close enough to service the rider?

	//LEARNING TERNARY CONDITIONALS
	function showFatType () {
		let fatType = 'butter';
		let isButter = fatType.toLowerCase() === 'butter';

		let loggingStatement = isButter ? 'It is BUtter' : 'I can\'t believe its not butter';


	}
})();