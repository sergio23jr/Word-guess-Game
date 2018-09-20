
// Global Variables

// Variable for what the word need to be guessed is
var actualWord;

//variable for current letter guess
var userGuess;

// variable to display output
var output = [];

//array for the letters in actualWord
var rightLetter = [];

//array for letters not in actual word
var wrongLetter = [];

//variable to keep track of guesses remaining
var lives = 10;

// variable to show amount of wins
var wins = 0;

//array of chices actualWord can be
var wordChoice = ["halloween", "pumpkins", "trick-or-treat", "headless-horseman", "ghosts", "vampires", "werewolves", "candy", "monsters", "jack-o-lanterns", "cobwebs", "broomstick", "witches", "grim-reaper", "coffin", "costume", "grave", "cemetery", "cauldron", "bat", "blood", "howl", "haunted-house", "casket"];

//when user presses key start up the game
// document.onkeypress = function(event){
function startGame(){

    //once game is started randomly chose word to be guessed
    actualWord = wordChoice[Math.floor(Math.random() * (wordChoice.length - 0)) + 0];
    rightLetter = actualWord.split("");
    lives = 10;
    console.log(actualWord);
    output = [];
    

    //print out output equal to amount of letters in actualWord
    for (var i = 0; i < actualWord.length;i++){
        if(actualWord[i] == "-"){
            output.push("-")
            rightLetter[i] = "-"

        }
        else{
            output.push("_");
        }
        

    }; 
    

    document.getElementById("currentWord").innerHTML = output.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("numOfGuesses").innerHTML = lives;
};

function checkAnswer (letter) {

    var letterInWord = false;

    for(var j = 0; j < actualWord.length; j++) {

        if (userGuess == actualWord[j]) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for(var k = 0; k < actualWord.length; k++) {
            if (actualWord[k] == userGuess) {
                console.log("in here userguess is " + userGuess)
                //replace the underscore with userguess
                output[k] = userGuess;
                rightLetter[k] = userGuess;
                
            }         
            
            
        }
    }
    else {
        if (wrongLetter.indexOf(userGuess) < 0){
            wrongLetter.push(userGuess);
            lives--;
            
        };
    }

};
function rounds() {
    document.getElementById("numOfGuesses").innerHTML = lives;
    document.getElementById("lettersGuessed").innerHTML = wrongLetter.join(" ");
    document.getElementById("currentWord").innerHTML = output.join(" ");
    
    if(rightLetter.toString() == output.toString()) {
        wins++
        document.getElementById("wins").innerHTML = wins;
        wrongLetter.length = 0
        victory();
    } else if (lives === 0) {
        document.getElementById("endGame").textContent = "The word was " + actualWord; 
        startGame();
    }
};

function victory() {
    if (rightLetter === output)
    // play audio when user guesses game
    document.getElementsByClassName("audio").play();
    wrongLetter = [];
    startGame();
    

};

document.onkeypress = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkAnswer(userGuess);
    rounds();
    
};
startGame();

