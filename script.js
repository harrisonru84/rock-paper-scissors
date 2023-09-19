// Pseudocode

// Breaks so that the console is visible underneath the Chrome prompt window
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("ROCK PAPER SCISSORS by HARRISON RUSSELL");
console.log("\n");

// Play through the game
game();

// Create a game function that contains the entirety of the gameplay so it can be easily repeated
function game() {
    
    // Create getComputerChoice function randomly selects between 'rock,' 'paper,' and 'scissors'
    function getComputerChoice() {
        // Array that stores choices
        let computerChoices = ["rock", "paper", "scissors"];
        // Random number generator that will select one of the choices
        function getRandomInt() {
            return Math.floor(Math.random() * 3);
        }
        return computerChoices[getRandomInt()];
    }

    // Create two variables that score computer's and player's win count through each round
    let computerWins = parseInt(0);
    let playerWins = parseInt(0);

    // Repeat the game five times
    console.log("ROUND ONE")
    playRound();
    
    console.log("ROUND TWO")
    playRound();

    console.log("ROUND THREE")
    playRound();

    console.log("ROUND FOUR")
    playRound();

    console.log("FINAL ROUND")
    playRound();

    // Create a function containing the gameplay for one full round, so it can be repeated 
    function playRound() {
        // Store the output from getComputerChoice in computerSelection
        let computerSelection = getComputerChoice();

        // Ask player to input either 'rock,' 'paper,' or 'scissors' and store their response in playerSelection
        let playerSelection = prompt("Rock, paper, or scissors?");

        // If playerSelection is empty, display "You haven't chosen anything."
        if (playerSelection==="" || playerSelection===null || playerSelection.toLowerCase()!=="rock" && 
            playerSelection.toLowerCase()!=="paper" && playerSelection.toLowerCase()!=="scissors") {
            alert("You didn't enter anything, so you've foreited this round.");
            break
        }

        else if (playerSelection===null) {
            alert("You hit cancel, so you've forfeited this round. Computer wins by default.");
            ++computerWins;
            console.log("You forfeited, so the computer wins by default.");
            console.log("Computer: " + computerWins + "\n" + "You: " + playerWins);
            console.log("\n");
        }

        else if (playerSelection.toLowerCase()!=="rock" && playerSelection.toLowerCase()!=="paper" && playerSelection.toLowerCase()!=="scissors") {
            alert("That wasn't one of the options. You've forfeited this round. Computer wins by default.")
            ++computerWins;
            console.log("You forfeited, so the computer wins by default.");
            console.log("Computer: " + computerWins + "\n" + "You: " + playerWins);
            console.log("\n");
        }

        else {
            // Convert player's answer to all lowercase (if necessary)
            playerSelection = playerSelection.toLowerCase();

            // Display player's selection
            console.log("You chose " + playerSelection + ".");

            // If playerSelection = rock & computerSelection = scissors, display "Computer chose scissors. You win!"
            if (playerSelection === "rock" && computerSelection === "scissors") {
                // Player won, so increment player's win count by one
                ++playerWins;
                console.log("Computer chose scissors. You win!");
            }
            // If playerSelection = rock & computerSelection = paper, display "Computer chose paper. You lose."
            else if (playerSelection === "rock" && computerSelection === "paper") {
                // Player lost, so increment computer's win count by one
                ++computerWins;
                console.log("Computer chose paper. You lose.");
            }
            // If playerSelection = paper & computerSelection = rock, display "Computer chose rock. You win!"
            else if (playerSelection === "paper" && computerSelection === "rock") {
                ++playerWins;    
                console.log("Computer chose rock. You win!");
            }

            // If playerSelection = paper & computerSelection = scissors, display "Computer chose scissors. You lose."
            else if (playerSelection === "paper" && computerSelection === "scissors") {
                ++computerWins;
                console.log("Computer chose scissors. You lose.");
            }
            // If playerSelection = scissors & computerSelection = rock, display "Computer chose rock. You lose."
            else if (playerSelection === "scissors" && computerSelection === "rock") {
                ++computerWins;
                console.log("Computer chose rock. You lose.");
            }
            // If playerSelection = scissors & computerSelection = paper, display "Computer chose paper. You win."
            else if (playerSelection === "scissors" && computerSelection === "paper") {
                ++playerWins;
                console.log("Computer chose paper. You win.");
            }
            // If playerSelection = computerSelection "Computer also chose __________. It's a tie."
            else if (playerSelection === computerSelection) {
                console.log("Computer also chose " + computerSelection + ". It's a tie.");
            }

            console.log("Computer: " + computerWins + "\n" + "You: " + playerWins);
            console.log("\n");

        }
    }

    let result;

    // Display the final score and tell the player whether or not they won
    if (computerWins > playerWins) {
        result = ("The computer won. Maybe you'll beat it next time.");
    }
    else if (playerWins > computerWins) {
        result = ("You won! You're smarter than a computer.");
    }
    else if (playerWins ==="0" && computerWins ==="0") {
        result = ("Neither you nor the computer scored. Maybe next time.")
    }
    else {
        result = ("It was a tie. You're essentially as smart as a computer.");
    }

    // Display a game over message
    console.log("Game over. \n \n" + result);

    console.log("\n");

    // Reset the game upon each player's selection.
    console.log("Reload the page to try again.");

}   



