//Steps:
//1. display _ string √

var Word = require("./word.js");
var inquirer = require("inquirer");


//Global vars:
var guessesRemaining = 10;
var correctWords = 0;
var wbIndex = 0;
var correctLetters = 0;



var wordBank = ["boxer", "hound", "poodle", "labrador", "terrier", "spaniel", "daschund"]
var gameWord = new Word(wordBank[wbIndex]);

function playGame() {

    // var initWord = gameWord.wordReturn()
    //beginning of game
    if (wbIndex <= 0 && guessesRemaining === 10) {
        console.log("\nWelcome to Dog Hangman!\n\nYou will have 8 tries to guess the type of dog correctly.\n\nIf you get it right, on to the next one.\n\nIf not... all the dogs run away.\n")
    }

    //game loop:
    if (guessesRemaining > 0) {
        // console.log("Word: ", initWord, "\n")
        inquirer.prompt([{
            name: "letter",
            message: "Guess a letter:"
        }]).then(function(answers) {
            gameWord.houseKeeping();
            gameWord.letterCheck(answers.letter)
            console.log(gameWord.wordReturn())
            if (!gameWord.word.includes(answers.letter)) {
              guessesRemaining--
            }
            console.log(guessesRemaining)
            if (gameWord.scoreBoard === gameWord.word.length) {
                wbIndex++
                correctWords++
                guessesRemaining = 10;
                gameWord = new Word(wordBank[wbIndex]);
            } else if (answers.letter.length > 1) {
              guessesRemaining ++;
              console.log("Whoops, try guessing only one letter")
            }
            playGame()
        });

    }else if (correctWords === wordBank.length){
      console.log("Congrats, you know all the dogs")
    }
     else {
        console.log("Game Over")
    }
}


playGame()

