# constructor-hangman

Welcome to Node Hangman! 

This is a special edition of Hangman that you can play through your terminal or git bash. Guess all the right dog breeds to win. 

Every wrong guess will dock your remaining guesses. When you get to 0, you lose :(. But the good news is, if you guess a word correctly your remaining guesses reset!

Using node.js, this game was built with constructor functions on three separate files. A constructor was built to process each letter in a given word, determining whether to display it as a letter or underscore. Another constructor processed each word as a whole, with help from the lette constructor. Finally, the game logic was carried out in a thrid file, enlisting functionality from the other two constructors.