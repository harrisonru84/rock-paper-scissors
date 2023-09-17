// Pseudocode
//
// Create getComputerChoice variable randomly selects between 'rock,' 'paper,' and 'scissors'
function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    function getRandomInt() {
        let selection = Math.floor(Math.random() * 3);
        return selection;
    }
    return computerChoices[getRandomInt()];
}
// Store the output from getComputerChoice in computerSelection
let computerSelection = getComputerChoice();
// Ask player to input either 'rock,' 'paper,' or 'scissors' and store their response in playerSelection
// Convert player's answer to all lowercase (if necessary)
// If playerSelection is empty, display "You haven't chosen anything."
// If playerSelection = rock & computerSelection = rock, display "Computer also chose rock. It's a tie."
// If playerSelection = rock & computerSelection = scissors, display "Computer chose scissors. You win!"
// If playerSelection = rock & computerSelection = paper, display "Computer chose paper. You lose."
// If playerSelection = paper & computerSelection = rock, display "Computer chose rock. You win!"
// If playerSelection = paper & computerSelection = paper, display "Computer also chose paper. It's a tie."
// If playerSelection = paper & computerSelection = scissors, display "Computer chose scissors. You lose."
// If playerSelection = scissors & computerSelection = rock, display "Computer chose rock. You lose."
// If playerSelection = scissors & computerSelection = paper, display "Computer chose paper. You win."
// If playerSelection = scissors & computerSelection = scissors, display "Computer also chose scissors. It's a tie."
// Reset the game upon each player's selection.