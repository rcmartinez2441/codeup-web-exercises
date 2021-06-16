function fetchLastCommit() {
	let username = $('#github-username').val()
	console.log(username);
	fetch(`https://api.github.com/users/${username}/events/public`, {
		headers: {
			'Authorization': GITHUB_ACCESS_TOKEN
		}
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			let commitTime = data[0].created_at;
			let commitContainer = $('#last-commit-container')
			commitContainer.html('')
			commitContainer.html(`Your Last Commit was on: ${commitTime}`)
		})
		.catch(error => {
			console.log(error)
			console.log(`you idiot`)
		})
}

let submitButton = $('#submit-button')

submitButton.click(fetchLastCommit)
