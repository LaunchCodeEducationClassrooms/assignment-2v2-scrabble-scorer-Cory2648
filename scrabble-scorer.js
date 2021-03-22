// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!" + "\n");
   let word = input.question("Enter a word to score: ")
   console.log(oldScrabbleScorer(word));
};

let simpleScore = function (word) {
  let score = 0
  for (let i = 0; i < word.length; i ++){
    score += 1
  }
  return score
};

let vowelBonusScore = function(word){
  word = word.toUpperCase();
  let score = 0
  for (let i = 0; i < word.length; i ++){
    if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U" ){
      score += 3
    } else {
      score += 1
    }
  }
  return score
};

let simple = {name: "Simple Score", description: "Each letter is worth 1 point.", scoreFunction: simpleScore };
let bonus = {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scoreFunction: vowelBonusScore };
let scrabble = {name: "Scrabble", description: "The traditional scoring algorithm.", scoreFunction: oldScrabbleScorer };

let scrabbleScore;

const scoringAlgorithms = [simple, bonus, scrabble];

function scorerPrompt() {
   console.log("Let's play some scrabble!" + "\n");
   let algorithm = input.question("Choose a scoring algorithm: ")
   let word = input.question("Enter a word to score: ")
   console.log("algorithm name: ", scoringAlgorithms[algorithm].name);
   console.log("scorerFunction result: ", scoringAlgorithms[algorithm].scorerFunction(word));
};
function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

