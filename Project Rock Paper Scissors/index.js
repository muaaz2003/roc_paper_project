

//  1. mac a random number and return roc paper srting.
function getComputerChoice() {
    const randomNum = Math.random();
    
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

//  2. ascing for input from user

function getHumanChoice() {

    return prompt("choose roc, paper or scissors");
 
 }
 




// trac for scores

var humanscore = 0;
var computerscore = 0;

function playRound() {

    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()

        if (computerChoice === humanChoice){

            return "draw";


        } else if(computerChoice === "roc" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors"  ){

            humanscore++
            return "you won";

        } else {
            computerscore++
            return "you lose"
        }

}  



// play the game for 5 times

function playGame() {

    for(let i = 0; i < 5; i++) {

        console.log(playRound());
    }

    if (humanscore > computerscore ){

        return "good luc you won";

    } else if (computerscore > humanscore){

        return "bad luc you loose"
    } else{
        return "its a tie"
    }

}

playGame();