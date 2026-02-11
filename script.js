// Favorite color radio handling
const favColorForm = document.querySelector('#fav_color');
const radioOutput = document.querySelector('#radio-output');

if (favColorForm && radioOutput) {
	favColorForm.addEventListener('change', (e) => {
		const value = e.target.value;
		let message = '';

		if (value === 'blue') {
			message = 'You picked blue 💙';
		} else if (value === 'green') {
			message = 'You picked green 💚';
		} else if (value === 'pink') {
			message = 'You picked pink 💕';
		} else if (value === 'black') {
			message = 'You picked black 🖤';
		}

		radioOutput.innerHTML = message;
	});
}

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.