// Choose a random 5 letter word (from an array of valid English words) when DOM is loaded
let arrayOfEnglishWords = [
  "about",
  "abuse",
  "above",
  "actor",
  "acute",
  "admit",
  "adopt",
  "adult",
  "after",
  "again",
  "agent",
  "agree",
  "ahead",
  "alarm",
  "album",
  "alert",
  "alike",
  "alive",
  "allow",
  "alone",
  "along",
  "alter",
  "among",
  "anger",
  "Angle",
  "angry",
  "apart",
  "apple",
  "apply",
  "arena",
  "argue",
  "arise",
  "array",
  "aside",
  "asset",
  "audio",
  "audit",
  "avoid",
  "award",
  "aware",
  "badly",
  "baker",
  "bases",
  "basic",
  "basis",
  "beach",
  "began",
  "begin",
  "begun",
  "being",
  "below",
  "bench",
  "billy",
  "birth",
  "black",
  "blame",
  "blind",
  "block",
  "blood",
  "board",
  "boost",
  "booth",
  "bound",
  "brain",
  "brand",
  "bread",
  "break",
  "breed",
  "brief",
  "bring",
  "broad",
  "broke",
  "brown",
  "build",
  "built",
  "buyer",
  "cable",
  "calif",
  "carry",
  "catch",
  "cause",
  "chain",
  "chair",
  "chart",
  "chase",
  "cheap",
  "check",
  "chest",
  "chief",
  "child",
  "china",
  "chose",
  "civil",
  "claim",
  "class",
  "clean",
  "clear",
  "click",
  "clock",
  "close",
  "coach",
  "coast",
  "could",
  "count",
  "court",
  "cover",
  "craft",
  "crash",
  "cream",
  "crime",
  "cross",
  "crowd",
  "crown",
  "curve",
  "cycle",
  "daily",
  "dance",
  "dated",
  "dealt",
  "death",
  "debut",
  "delay",
  "depth",
  "doing",
  "doubt",
  "dozen",
  "draft",
  "drama",
  "drawn",
  "dream",
  "dress",
  "drill",
  "drink",
  "drive",
  "drove",
  "dying",
  "eager",
  "early",
  "earth",
  "eight",
  "elite",
  "empty",
  "enemy",
  "enjoy",
  "enter",
  "entry",
  "equal",
  "error",
  "event",
  "every",
  "exact",
  "exist",
  "extra",
  "faith",
  "false",
  "fault",
  "fiber",
  "field",
  "fifth",
  "fifty",
  "fight",
  "final",
  "first",
  "fixed",
  "flash",
  "fleet",
  "floor",
  "fluid",
  "focus",
  "force",
  "forth",
  "forty",
  "forum",
  "found",
  "frame",
  "frank",
  "fraud",
  "fresh",
  "front",
  "fruit",
  "fully",
  "funny",
  "giant",
  "given",
  "glass",
  "globe",
  "going",
  "grace",
  "grade",
  "grand",
  "grant",
  "grass",
  "great",
  "green",
  "gross",
  "group",
  "grown",
  "guard",
  "guess",
  "guest",
  "guide",
  "happy",
  "harry",
  "heart",
  "heavy",
  "hence",
  "henry",
  "horse",
  "hotel",
  "house",
  "human",
  "ideal",
  "image",
  "index",
  "inner",
  "input",
  "issue",
  "japan",
  "jimmy",
  "joint",
  "jones",
  "judge",
  "known",
  "label",
  "large",
  "laser",
  "later",
  "laugh",
  "layer",
  "learn",
  "lease",
  "least",
  "leave",
  "legal",
  "level",
  "lewis",
  "light",
  "limit",
  "links",
  "lives",
  "local",
  "logic",
  "loose",
  "lower",
  "lucky",
  "lunch",
  "lying",
  "magic",
  "major",
  "maker",
  "march",
  "maria",
  "match",
  "maybe",
  "mayor",
  "meant",
  "media",
  "metal",
  "might",
  "minor",
  "minus",
  "mixed",
  "model",
  "money",
  "month",
  "moral",
  "motor",
  "mount",
  "mouse",
  "mouth",
  "movie",
  "music",
  "needs",
  "never",
  "newly",
  "night",
  "noise",
  "north",
  "noted",
  "novel",
  "nurse",
  "occur",
  "ocean",
  "offer",
  "often",
  "order",
  "other",
  "ought",
  "paint",
  "panel",
  "paper",
  "party",
  "peace",
  "peter",
  "phase",
  "phone",
  "photo",
  "piece",
  "pilot",
  "pitch",
  "place",
  "plain",
  "plane",
  "plant",
  "plate",
  "point",
  "pound",
  "power",
  "press",
  "price",
  "pride",
  "prime",
  "print",
  "prior",
  "prize",
  "proof",
  "proud",
  "prove",
  "queen",
  "quick",
  "quiet",
  "quite",
  "radio",
  "raise",
  "range",
  "rapid",
  "ratio",
  "reach",
  "ready",
  "refer",
  "right",
  "rival",
  "river",
  "robin",
  "roger",
  "roman",
  "rough",
  "round",
  "route",
  "royal",
  "rural",
  "scale",
  "scene",
  "scope",
  "score",
  "sense",
  "serve",
  "seven",
  "shall",
  "shape",
  "share",
  "sharp",
  "sheet",
  "shelf",
  "shell",
  "shift",
  "shirt",
  "shock",
  "shoot",
  "short",
  "shown",
  "sight",
  "since",
  "sixth",
  "sixty",
  "sized",
  "skill",
  "sleep",
  "slide",
  "small",
  "smart",
  "smile",
  "smith",
  "smoke",
  "solid",
  "solve",
  "sorry",
  "sound",
  "south",
  "space",
  "spare",
  "speak",
  "speed",
  "spend",
  "spent",
  "split",
  "spoke",
  "sport",
  "staff",
  "stage",
  "stake",
  "stand",
  "start",
  "state",
  "steam",
  "steel",
  "stick",
  "still",
  "stock",
  "stone",
  "stood",
  "store",
  "storm",
  "story",
  "strip",
  "stuck",
  "study",
  "stuff",
  "style",
  "sugar",
  "suite",
  "super",
  "sweet",
  "table",
  "taken",
  "taste",
  "taxes",
  "teach",
  "teeth",
  "terry",
  "texas",
  "thank",
  "theft",
  "their",
  "theme",
  "there",
  "these",
  "thick",
  "thing",
  "think",
  "third",
  "those",
  "three",
  "threw",
  "throw",
  "tight",
  "times",
  "tired",
  "title",
  "today",
  "topic",
  "total",
  "touch",
  "tough",
  "tower",
  "track",
  "trade",
  "train",
  "treat",
  "trend",
  "trial",
  "tried",
  "tries",
  "truck",
  "truly",
  "trust",
  "truth",
  "twice",
  "under",
  "undue",
  "union",
  "unity",
  "until",
  "upper",
  "upset",
  "urban",
  "usage",
  "usual",
  "valid",
  "value",
  "video",
  "virus",
  "visit",
  "vital",
  "voice",
  "waste",
  "watch",
  "water",
  "wheel",
  "where",
  "which",
  "while",
  "white",
  "whole",
  "whose",
  "woman",
  "women",
  "world",
  "worry",
  "worse",
  "worst",
  "worth",
  "would",
  "wound",
  "write",
  "wrong",
];

let userInput = [];
let randomWordArray = [];
let randomWordString;
let numOfTries = 0;

function selectWordForGame() {
  randomWordString =
    arrayOfEnglishWords[
      Math.floor(Math.random() * arrayOfEnglishWords.length + 1)
    ]; // Returns a random integer from 0 to 18 (since length is 19), so need to add 1
  randomWordArray = randomWordString.split("");
}

// Create start button and upon clicking, will generate a row, a random word for playing and start timer
let title = document.createElement("h1");
title.innerHTML = "Welcome to Game of Wordle";
document.body.appendChild(title);

let startButton = document.createElement("button");
startButton.setAttribute("id", "start-button");
startButton.setAttribute("class", "not-started");
startButton.innerHTML = "Click Here to Start";
startButton.addEventListener("click", generateRow);
document.body.appendChild(startButton);

// Create timer button
let timer = document.createElement("button");
timer.setAttribute("id", "timer");
timer.innerHTML = count;
document.body.appendChild(timer);
let count = 0;
let interval;

// Set timer to start when start button is clicked
function startTimer() {
  clearInterval(interval);
  interval = setInterval(function increaseNum() {
    count += 1;
    timer.innerHTML = count;
  }, 1000);
}

// Generate a row of 6 squares (row) when DOM is loaded + all other functions to be called
function generateRow() {
  selectWordForGame();
  startTimer();
  document.getElementById("start-button").innerHTML = "Good Luck";
  document.getElementById("start-button").setAttribute("class", "started");
  console.log(randomWordArray);
  numOfTries += 1;
  if (numOfTries <= 6) {
    let form = document.createElement("form");
    form.setAttribute("id", "form");
    document.body.appendChild(form);
    let div = document.createElement("div");
    form.appendChild(div);
    for (let y = 0; y < 5; y++) {
      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("maxlength", "1");
      input.setAttribute("id", "a" + numOfTries.toString() + y.toString());
      input.setAttribute("class", numOfTries);
      input.setAttribute("style", "text-transform: uppercase");
      input.addEventListener("keypress", validateUserInput);
      input.addEventListener("keyup", moveFocus);
      div.appendChild(input);
      document.getElementById("a" + numOfTries.toString() + "0").focus();
    }
  } else {
    displayLoseMessage();
  }
}

// Focus on next input element after user's input
function moveFocus(e) {
  if (e.target.nextSibling && e.key !== "Enter" && e.key !== "Backspace") {
    document.getElementById(e.target.nextSibling.id).focus();
  }
}

// Validate user's input
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
];

function validateUserInput(e) {
  // Check that what user has input is an alphabet, otherwise, display "Not an Alphabet" alert
  if (alphabets.includes(e.key) === false && e.key !== "Enter") {
    e.preventDefault();
  }
  // Check that upon user pressing 'Enter' on keyboard, there are enough 5 letters, otherwise, display "Not Enough Letters" alert
  if (e.key === "Enter") {
    for (num = 0; num <= 4; num++) {
      if (document.getElementById("a" + numOfTries + num).value === "") {
        alert("Not Enough Letters");
        userInput = [];
        return;
      } else {
        userInput.push(document.getElementById("a" + numOfTries + num).value);
      }
    }
    // Check that if there are enough 5 letters to make up a word, check that the word is a valid english word, otherwise, display "Not in Word List" alert
    if (arrayOfEnglishWords.includes(userInput.join("")) === false) {
      alert("Not in Word List");
      userInput = [];
      return;
    }
    checkWord();
  }
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
    let winMessage = document.createElement("button");
    winMessage.setAttribute("type", "submit");
    winMessage.setAttribute("id", "winning-message");
    winMessage.innerHTML = "You Have Won";
    document.body.append(winMessage);

    for (let b = 0; b <= 4; b++) {
      document
        .getElementById("a" + numOfTries.toString() + b.toString())
        .setAttribute("class", "green");
      // document
      //   .getElementById("winning-message")
      //   .addEventListener("click", selectWordForGame);
    }

    return;
  }

  let index = [];
  for (let a = 0; a < randomWordArray.length; a++) {
    if (randomWordArray[a] === userInput[a]) {
      document
        .getElementById("a" + numOfTries.toString() + a.toString())
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
        .getElementById("a" + numOfTries.toString() + a.toString())
        .setAttribute("class", "orange");
      let num = randomWordArray.findIndex((letter) => letter === userInput[a]);
      randomWordArray[num] = "9";
      userInput[a] = "9";
      index.push(a);
    } else if (randomWordArray[a] != userInput[a])
      document
        .getElementById("a" + numOfTries.toString() + a.toString())
        .setAttribute("class", "grey");
  }
  moveToNextRow();
}

// Move on to next row for next guess
function moveToNextRow() {
  userInput = [];
  count = 0;
  generateRow();
  randomWordArray = randomWordString.split("");
}

// Display losing message if all 6 rows have been guessed without success
function displayLoseMessage() {
  let loseMessage = document.createElement("div");
  loseMessage.setAttribute("id", "losing-message");
  loseMessage.innerHTML =
    "You have tried 6 times unsuccessfully, you have lost!";
  document.body.append(loseMessage);
  return;
}
