var Letter = require("./letter.js");

function Word(word) {
    this.word = word
    this.letterObj = [];
    this.wordReturn = function() {
        for (var i = 0; i < this.word.length; i++) {
             var newLetter = new Letter(this.word[i])
             newLetter.guessCheck()
            this.letterObj.push(newLetter)

            // "".concat(this.letterObj)

            // return this.word[i]
            
        }
        
    }
    this.letterCheck = function(char) {

        for (var i = 0; i < this.letterObj.length; i++) {
                newLetter.goodGuess(letterObj[i])
            
        }
    };

}
var farley = new Word("chicken")
farley.wordReturn()
console.log(farley.letterObj[0].guessCheck())
// farley.letterObj.splice(",")

// var boaty = "".concat(farley.letterObj)
// boaty.replace(",", " ")
// console.log(boaty)


module.exports = {
    Word: Word,
}

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



