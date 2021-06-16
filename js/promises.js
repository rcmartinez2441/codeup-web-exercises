function fetchLastCommit() {
	let username = $('#github-username').val()
	console.log(username);
	fetch(`https://api.github.com/users/${username}/events/public`, {
		headers: {
			'Authorization': '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'
		}
	})
		.then(response => {
			console.log(response.json())
		})
		.catch(error => {
			console.log(error)
			console.log(`you idiot`)
		})
}

let submitButton = $('#submit-button')

submitButton.click(fetchLastCommit)
