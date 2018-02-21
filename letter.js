 function Letter(ltr) {
     this.ltr = ltr
     this.guess = false
     this.guessCheck = function() {
         if (this.guess) {
            return this.ltr
         } else {
          return " _ "
         }
     }
     this.goodGuess = function(userGuess) {
         if (userGuess == this.ltr) {
             this.guess = true;
         }
     }

 }


 module.exports = Letter

