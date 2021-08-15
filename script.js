const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() 
{
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}
    
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie game!";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    while (playerScore != 5 && computerScore !=5) {
        let userChoice = prompt("Rock, paper, or scissors?").toLowerCase();

        while (choices.includes(userChoice) == false) {
            userChoice = prompt("Choice not valid. Rock, paper, or scissors?").toLowerCase();
        }

        console.log(playRound(userChoice, computerPlay()));
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
}

game();