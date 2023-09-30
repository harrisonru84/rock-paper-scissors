// Computer chooses rock, paper, or scissors
function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
    }
    return computerChoices[getRandomInt()];
}

// Container elements
const objective = document.querySelector(".objective");
const results = document.querySelector(".results");
const buttons = document.querySelector(".buttons")
const content = document.querySelector(".content");

// Buttons elements
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

// Text Elements
const score = document.querySelector(".score");
const computerScore = document.querySelector(".computer-score")
const playerScore = document.querySelector(".player-score")
const playerResult = document.querySelector(".player-result");
const roundResult = document.querySelector(".round-result");

// Initial scores
let computerWins = parseInt(0);
let playerWins = parseInt(0);

// Button listeners
rockButton.addEventListener('click', playRock);
paperButton.addEventListener('click', playPaper);
scissorsButton.addEventListener('click', playScissors);

// Player chose rock
function playRock() {
    playerResult.textContent = "You chose rock.";
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundResult.textContent = "Computer also chose " + computerSelection + ". This round is a tie.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult.textContent = "Computer chose scissors. You win this round!";
        ++playerWins;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult.textContent = "Computer chose paper. You lose this round.";
        ++computerWins;
    }
    computerScore.textContent = "Computer: " + computerWins;
    playerScore.textContent = "You: " + playerWins;

    if (computerWins === parseInt(5)) {
        computerIsTheWinner();
    }
    else if (playerWins === parseInt(5)) {
        playerIsTheWinner();
    }
}

// Player chose paper
function playPaper() {
    playerResult.textContent = "You chose paper.";
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundResult.textContent = "Computer also chose " + computerSelection + ". This round is a tie.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult.textContent = "Computer chose rock. You win this round!";
        ++playerWins;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult.textContent = "Computer chose scissors. You lose this round.";
        ++computerWins;
    }
    computerScore.textContent = "Computer: " + computerWins;
    playerScore.textContent = "You: " + playerWins;

    if (computerWins === parseInt(5)) {
        computerIsTheWinner();
    }
    else if (playerWins === parseInt(5)) {
        playerIsTheWinner();
    }
}

// Player chose scissors
function playScissors() {
    playerResult.textContent = "You chose scissors.";
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundResult.textContent = "Computer also chose " + computerSelection + ". This round is a tie.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult.textContent = "Computer chose paper. You win this round!";
        ++playerWins;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult.textContent = "Computer chose rock. You lose this round.";
        ++computerWins;
    }
    computerScore.textContent = "Computer: " + computerWins;
    playerScore.textContent = "You: " + playerWins;    
    
    if (computerWins === parseInt(5)) {
        computerIsTheWinner();
    }
    else if (playerWins === parseInt(5)) {
        playerIsTheWinner();
    }
}

// Player is first to 5 points
function playerIsTheWinner() {
    objective.remove();
    buttons.remove();
  
    const winner = document.createElement("h3");
    winner.textContent = "You beat the computer!";
    content.insertBefore(winner, score);

    const resetButton = document.createElement("button");
    resetButton.innerText = "Try Again?";
    content.appendChild(resetButton);

    resetButton.style.marginTop = "30px";
    
    resetButton.addEventListener('click', () => {location.reload()})

    content.style.gap = "20px";
}

// Computer is first to 5 points
function computerIsTheWinner() {
    objective.remove();
    buttons.remove();    
  
    const winner = document.createElement("h3");
    winner.textContent = "The computer beat you...";
    content.insertBefore(winner, score);

    const resetButton = document.createElement("button");
    resetButton.innerText = "Try Again?";
    content.appendChild(resetButton);

    resetButton.style.marginTop = "30px";

    resetButton.addEventListener('click', () => {location.reload()})

    content.style.gap = "20px";
}
