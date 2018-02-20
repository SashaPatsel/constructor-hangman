var Letter = require("./letter.js");

function Word(word) {
    this.word = word
    //Storage for letter objects
    this.letterObj = [];
    //For dispay purposes
    this.currentWord = [];
    this.scoreBoard = 0
    //resests in order to measure accurate values
    this.houseKeeping = function() {
        this.currentWord = [];
        this.scoreBoard = 0
    }
    this.wordReturn = function() {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i])
            newLetter.guessCheck()
            this.letterObj.push(newLetter)

            var wordParts = this.letterObj[i].guessCheck()
            this.currentWord.push(wordParts)

            var wholeWord = this.currentWord.join("")
            if (this.letterObj[i].guess === true) {
                this.scoreBoard++;
            }
        }
        return wholeWord;
    }
    this.letterCheck = function(ltr) {
        for (var i = 0; i < this.letterObj.length; i++) {
            this.letterObj[i].goodGuess(ltr)
        }
    };
}






module.exports = Word

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)