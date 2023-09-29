// Create getComputerChoice function randomly selects between 'rock,' 'paper,' and 'scissors'
function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
    }
    return computerChoices[getRandomInt()];
}

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

const roundResult = document.querySelector(".round-result");
const playerResult = document.querySelector(".player-result");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

let computerWins = parseInt(0);
let playerWins = parseInt(0);

const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', function() {location.reload()})

game();

function game() {

rockButton.addEventListener('click', playRock);
paperButton.addEventListener('click', playPaper);
scissorsButton.addEventListener('click', playScissors);

function playRock() {
    playerResult.textContent = "You chose rock.";
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundResult.textContent = "Computer also chose " + computerSelection + ". This round is a tie.";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult.textContent = "Computer chose scissors. You win this round!";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
        ++playerWins;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult.textContent = "Computer chose paper. You lose this round.";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
        ++computerWins;
    }
    score.textContent = "Computer: " + computerWins + " / You: " + playerWins;
    if (computerWins === parseInt(5) && playerWins !== parseInt(5)) {
        winner.textContent = "Computer wins. Try again next time."
        winner.style.color = "darkblue";
    }
    else if (playerWins === parseInt(5) && computerWins !== parseInt(5)) {
        winner.textContent = "You win. You're smarter than a computer!"
        winner.style.color = "darkblue";
    }
}

function playPaper() {
    playerResult.textContent = "You chose paper.";
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundResult.textContent = "Computer also chose " + computerSelection + ". This round is a tie.";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult.textContent = "Computer chose rock. You win this round!";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
        ++playerWins;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult.textContent = "Computer chose scissors. You lose this round.";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
        ++computerWins;
    }
    score.textContent = "Computer: " + computerWins + " / You: " + playerWins;
    if (computerWins === parseInt(5) && playerWins !== parseInt(5)) {
        winner.textContent = "Computer wins. Try again next time."
        winner.style.color = "darkblue";
    }
    else if (playerWins === parseInt(5) && computerWins !== parseInt(5)) {
        winner.textContent = "You win. You're smarter than a computer!"
        winner.style.color = "darkblue";
    }
}

function playScissors() {
    playerResult.textContent = "You chose scissors.";
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundResult.textContent = "Computer also chose " + computerSelection + ". This round is a tie.";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult.textContent = "Computer chose paper. You win this round!";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
        ++playerWins;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult.textContent = "Computer chose rock. You lose this round.";
        roundResult.style.color = "white";
        playerResult.style.color = "white";
        ++computerWins;
    }
    score.textContent = "Computer: " + computerWins + " / You: " + playerWins;
    if (computerWins === parseInt(5) && playerWins !== parseInt(5)) {
        winner.textContent = "Computer wins. Try again next time."
        winner.style.color = "darkblue";
    }
    else if (playerWins === parseInt(5) && computerWins !== parseInt(5)) {
        winner.textContent = "You win. You're smarter than a computer!"
        winner.style.color = "darkblue";
    }
}

}
