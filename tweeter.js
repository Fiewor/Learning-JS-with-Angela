var tweet = prompt("Type in your tweet");
var wordLength = tweet.length;
var timeLeft = 140 - wordLength;
alert("You have written "
            + wordLength + "characters, you have"
            + timeLeft + " left.");