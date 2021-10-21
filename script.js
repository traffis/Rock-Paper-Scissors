const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() 
{
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

function updateScore(playerSelection, computerSelection) {
    const playerScoreId = document.querySelector("#player-score");
    const computerScoreId = document.querySelector("#computer-score");

    playerScoreId.textContent = playerScore;
    computerScoreId.textContent = computerScore;
    
}
    
function playRound(playerSelection, computerSelection) {
    const results = document.querySelector("#results");
    if (playerSelection == computerSelection) {
        results.textContent = "Tie game!";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            playerScore++;
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        results.textContent = `You lost! ${playerSelection} loses to ${computerSelection}.`;
    }
    updateScore(playerSelection, computerSelection);
}

function game() {
    const buttons = document.querySelectorAll('button');
    const results = document.querySelector("#results");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(playRound(button.id, computerPlay()));
            
            if (playerScore == 5) {
                playerScore = computerScore = 0;
                alert("Congrats, you win!");
                results.textContent = "Select your hand."
            } else if (computerScore == 5) {
                playerScore = computerScore = 0;
                alert("Sorry, you lost!");
                results.textContent = "Select your hand."
            }
        });
    });
}

game();