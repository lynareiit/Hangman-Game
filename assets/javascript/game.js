// //----> write a function that resets the gameboard and game (reset wins, losses, computerchoice)
// 			// Call the function with document.ready
// 				// inside of document.ready assign keylistener (keyup)
// 				//----> need if/else for wins and losses after keyups

// 		// this will be game start function
// 		document.onkeyup = startGame()
// 			// Output the computer will choose a letter
// 			var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// 				// computer chooses a letter
// 				// Math.floor() is a function that returns the largest integer less than or equal to a given number
// 					// Math.random() is a function that returns a floating-point, pseudo-random number in the range [0, 1] but does not include 1. 
// 			var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]

// 				// key pressed by user
// 		// var userGuess = event.key;

// 				// guess correct/not correct function

// 				var wins = 0;
// 				var losses = 0;
// 				// Guesses left

// 				// User guesses so far
// 				var userText = document.getElementById("user-text");

// 				// function run when user presses key
// 				document.onkeyup = function(event) {
// 					userText.textContent = event.key;

// // loop that resets the code on win or loss (inside the .onkeyup function)
// // document.getElementByID ("myForm") .reset();

// 				}
// 				// capture userguess
// 				var userGuesses
// 				// ADD A FUNCTION HERE TO RECORD ALL PREVIOUS USER GUESSES TO REMAIN ON THE PAGE

// Create an array with the words for user to guess
var wordArray = ["electronic", "remix", "original", "dance", "rock", "alternative", "jazz", "trance", "pop"];
var numGuessesRemain = 10;

// Leave global arrays empty - define specific arrays later
// Word guesses
// Use "" to separate the string
var wordChoice = "";
var answerBlanks = [];

// Letter guesses
var currentLetters = [];
var lettersGuessed = [];

// Win/loss variables defined
var wins = 0;
var losses = 0;

function startGame() {
	// start with an empty array where letters guessed will be placed
	lettersGuessed = [];
	// start with an empty array where answered letters are placed
	answerSpaces = [];
		// start with 10 guesses --> will decrease later
		numGuessesRemain = 10;
		wordChoice = wordArry[Math.floor(Math.random() * wordArray.length)];
		// String prototype to split up the word
		// If .split left empty, it returns with an empty string, not empty array.
		currentLetters = wordChoice.split("");
			console.log(currentLetters);
				// want to move to the next letter choice after previous letter choice is guessed correct
				for (var i = 0; i < currentWord.length; i++) {
					// replace variable i with spaces in letter
					answerSpaces[i] = "_";
				}
				// document answer space on page
				console.log(answerSpaces);
				// jquery the word
				// use .text to get text contents of the element, then join array variables into string so they all connect to form the word
				$("#current-word").text(answerSpaces.join(""));
}
console.log("Test: " + numGuessesRemain);

// Capture keyboard input
document.onkeyup = function(event) {
	// define new variable for guesses. Use keyboardEvent.key for reading properties from the user
	var guess = event.key;
	// use includes() to determine if element is included in array --> if it is false, then document it
	// use boolean to check
	if (lettersGuessed.includes(guess)===false) {
		console.log(guess)
		var xGuess = false;
		// create a for-loop of letter guesses
		for (var j = 0; j < currentLetters.length; j++) {
			// if the letters guessed equal exactly the userGuess variable, then fill the answered space with the guess
			if (currentLetters[j] === guess) {
				xGuess[j] === true;
			}
		}


		if (xGuess === true) {
			for (var j = 0; j < currentLetters.length; j++) {
				if (currentLetters[j] === guess) {
					answerSpaces[j] === guess;
				}
			}
		}
			// otherwise console.log the false guess and add it to the wrong letter guesses
			else {
				console.log("xGuess is false " + xGuess);
					// decrease the remaining guesses
					numGuessesRemain--;
					// push the letter guessed
					lettersGuessed.push(guess);
					console.log(lettersGuessed);
					console.log(answerSpaces + "test the array");
					console.log(numGuessesRemain);
			// Close the else statement
			}

			// jquery the counter
			$("#counter").text(numGuessesRemain);
			$("letter-guessed").text(lettersGuessed);
			$("word-choice").text(answerSpaces.join(""));
			winsDetermine ();
	}
	// if function applies, follow the for-loop. Otherwise alert the letter
	else {
		alert("You already guessed the letter!");
	}
}
// notify guesses remain
console.log(numGuessesRemain);

// create a function to determine wins
function winsDetermined () {
	if (currentLetters.toString() === answerSpaces.toString()) {
		wins++;
		document.getElementById("wins-count").innerHTML = wins;
		alert("You Win!")
		console.log("You Win!")
		console.log(wins);
		// start the game over
		startGame();
	}
	// if there are no more guesses left, alert
	else if  (numGuessesRemain === 0) {
		losses++;
		alert("You Lose! Better Luck Next Time!");
		console.log("You Lose!")
		console.log(losses);
		// start the game over
		startGame();
	}
}

// start the game over. start the function all over
startGame();
newFunction();