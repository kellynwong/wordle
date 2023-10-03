// Choose a random 5 letter word (from an array of valid English words) when DOM is loaded
arrayOfEnglishWords = [
  "dream",
  "guard",
  "flood",
  "adult",
  "sight",
  "alarm",
  "force",
  "wound",
  "brave",
  "cable",
  "panic",
  "study",
  "faith",
  "equal",
  "grade",
  "award",
  "bully",
  "voice",
  "drive",
  "title",
  "sully",
];
let userInput = [];
let randomWordArray = [];
let randomWordString;
let numOfTries = 0;
selectWordForGame();

function selectWordForGame() {
  randomWordString =
    arrayOfEnglishWords[
      Math.floor(Math.random() * arrayOfEnglishWords.length + 1)
    ]; // Returns a random integer from 0 to 18 (since length is 19), so need to add 1

  randomWordArray = randomWordString.split("");
}

console.log(randomWordArray);

// Generate a row of 6 squares (row) when DOM is loaded
// Validate user's input - that they are alphabets
// Generate button to submit word once user has entered 5 alphabets
// Display winning message if all 5 spots match
// Colour box green if letter guessed is in correct spot
// Colour box orange if letter guessed is in wrong spot
// Colour box grey if letter does not exist in word
// Check if user input matches random word
// Move on to next row for next guess
// Display losing message if all 6 rows have been guessed without success
