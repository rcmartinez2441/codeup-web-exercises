const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let usersWithLanguages = users.filter(function (user) {
	return user.languages.length >= 3;
})
console.log(usersWithLanguages)

// Use .map to create an array of strings where each element is a user's email address

let emailArray = users.map(function (user) {
	return user.email
})
console.log(emailArray);

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let avgYearsOfExp = users.reduce((accum, currentVal, currentIndex) => {
	return accum + currentVal.yearsOfExperience;
}, 0) / users.length;

console.log(avgYearsOfExp);

//Use .reduce to get the longest email from the list of users.

let longestEmail = emailArray.reduce((accumulator, currentValue) => {
	//TERNARY NOTATION
	// return accumulator.length > currentValue.length
	// ? accumulator //'?' shorthand for 'if' true then accumulator
	// : currentValue; // ':' 'else' return current value

	if (accumulator.length > currentValue.length) {
		return accumulator;
	}
	return currentValue;
}, '')

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let stringOfUserNames = users.reduce((accumulator, currentValue, currentIndex) => {
	console.log(accumulator);
	if (currentIndex === users.length - 1) {
		return `${accumulator + currentValue.name}.`
	}
	return `${accumulator + currentValue.name}, `;
}, `Your Instructors Are: `);
console.log(stringOfUserNames);

//BONUS: Use .reduce to get the unique list of languages from the list of users.
console.log(`=================================`);
let uniqueLanguages = users.reduce((accumulator, currentUser) => {
	console.log(accumulator);
	let uniqueLang = currentUser.languages.filter(language => {
		console.log(language)
		return !accumulator.includes(language);
	});

	accumulator.push(...uniqueLang)
	return accumulator;

}, [])

console.log(uniqueLanguages)
