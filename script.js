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
generateRow();
function generateRow() {
  numOfTries += 1;
  let title = document.createElement("h1");
  document.body.appendChild(title);
  let row = document.createElement("tr");
  document.body.appendChild(row);
  for (let y = 0; y < 5; y++) {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("maxlength", "1");
    input.setAttribute("id", numOfTries.toString() + y.toString());
    input.setAttribute("class", numOfTries);
    input.setAttribute("style", "text-transform: uppercase");
    input.addEventListener("keydown", validateUserInput);
    row.appendChild(input);
  }
}

// Validate user's input - that they are alphabets

// https://forum.freecodecamp.org/t/pass-the-event-to-the-callback-within-the-event-listener-that-triggered-it/258259/8
let alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "tab",
];

function validateUserInput(e) {
  console.log(e);
  if (e.key === "Backspace" || e.key === "Delete") {
    userInput.pop();
  } else if (alphabets.includes(e.key.toLowerCase()) === false) {
    alert("This is not an alphabet!");
  } else if (e.key != "Tab") {
    userInput.push(e.key.toLowerCase());
    console.log(userInput);
  }
  if (userInput.length === 5) {
    generateButton();
  }
}

// Generate button to submit word once user has entered 5 alphabets
function generateButton() {
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "submit-done");
  button.innerText = "SUBMIT";
  document.body.append(button);
  button.addEventListener("click", checkWord);
}

// Check if user input matches random word; useful guide: https://www.javascripttutorial.net/es6/javascript-array-findindex/
// Display winning message if all 5 spots match
// Colour box green if letter guessed is in correct spot
// Colour box orange if letter guessed is in wrong spot
// Colour box grey if letter does not exist in word

function checkWord() {
  console.log(userInput);
  console.log(randomWordArray);
  if (userInput.join() === randomWordArray.join()) {
    let winMessage = document.createElement("div");
    winMessage.setAttribute("id", "winning-message");
    winMessage.innerHTML = "You have won";
    document.body.append(winMessage);
  }

  let index = [];
  for (let a = 0; a < randomWordArray.length; a++) {
    if (randomWordArray[a] === userInput[a]) {
      document
        .getElementById(numOfTries.toString() + a.toString())
        .setAttribute("class", "green");
      randomWordArray[a] = "9";
      userInput[a] = "9";
      index.push(a);
    }
  }
  console.log(index);
  console.log(randomWordArray);
  console.log(userInput);

  for (let a = 0; a < userInput.length; a++) {
    if (randomWordArray.includes(userInput[a]) && !index.includes(a)) {
      document
        .getElementById(numOfTries.toString() + a.toString())
        .setAttribute("class", "orange");
      let num = randomWordArray.findIndex((letter) => letter === userInput[a]);
      randomWordArray[num] = "9";
      userInput[a] = "9";
      index.push(a);
    } else if (randomWordArray[a] != userInput[a])
      document
        .getElementById(numOfTries.toString() + a.toString())
        .setAttribute("class", "grey");
  }
  moveToNextRow();
}

// Move on to next row for next guess
function moveToNextRow() {
  console.log("hi");
  let button = document.getElementById("submit-done");
  button.remove();
  userInput = [];
  generateRow();
  randomWordArray = randomWordString.split("");
}

// Display losing message if all 6 rows have been guessed without success

// Solve backspace and keypress problem
