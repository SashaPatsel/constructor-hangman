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

