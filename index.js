//Steps:
//1. display _ string √

var Word = require("./word.js");
var inquirer = require("inquirer");


//Global vars:
var guessesRemaining = 8;
var correctWords = 0;
var wbIndex = 0;



var wordBank = ["boxer", "hound", "poodle", "labrador", "terrier", "spaniel", "daschund"]

function playGame() {

    var gameWord = new Word(wordBank[wbIndex])

    console.log(gameWord.wordReturn())
}
playGame()




// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses