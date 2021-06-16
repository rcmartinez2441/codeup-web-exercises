fetch('https://api.github.com/users/rcmartinez2441/events/public')
	.then(response => {
		console.log(response.json())
	})
	.catch(error => {
		console.log(error)
		console.log(`you idiot`)
	})