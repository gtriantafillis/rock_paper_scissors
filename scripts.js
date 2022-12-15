// random computer choise
function getComputerChoice() {
    let choise = Math.floor(Math.random() * 3);
    switch (choise) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }   
}

// a round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It is a tie!';
    }
    if ((playerSelection == 'rock' && computerSelection == 'paper') || 
         playerSelection == 'paper' && computerSelection == 'scissors' ||
         playerSelection == 'scissors' && computerSelection == 'rock') {
            computerWins++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
         }
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
         playerSelection == 'paper' && computerSelection == 'rock' ||
         playerSelection == 'scissors' && computerSelection == 'paper') {
            playerWins++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

// game function
function game() {
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt('Choose one: Rock, Paper, Scissors!');
        console.log(playRound(playerSelection.toLowerCase(),getComputerChoice()));
    }
    if (playerWins > computerWins) {
        alert('Player beats Computer!');
    } else if (computerWins > playerWins) {
        alert('Computer beats Player!')
    } else {
        alert('It is a tie!');
    }
}

let playerWins = 0;
let computerWins = 0;
game();