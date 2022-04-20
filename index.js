const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const resultsWindow = document.querySelector('.results-window')

let playerScore = 0
let computerScore = 0

const computerPlay = () => {
    let computerChoice = (Math.round(Math.random() * 2));

    switch (computerChoice) {
        case 0:
            computerChoice = 'rock'
            break;
        case 1:
            computerChoice = 'paper'
            break;
        case 2:
            computerChoice = 'scissors'
    }

    return computerChoice
}

const playRound = (playerSelection, computerSelection) => {
    if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++
        return `Player Chose: ${playerSelection} and Computer Chose: ${computerSelection}`
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++
        return `Player Chose: ${playerSelection} and Computer Chose: ${computerSelection}`
    } else if (playerSelection === computerSelection) {
        return `Player Chose: ${playerSelection} and Computer Chose: ${computerSelection}`
    } else {
        console.log('somethings wrong')
    }
}


rockButton.addEventListener('click', () => {
    const rockChoice = document.createElement('p');
    rockChoice.textContent = playRound('rock', computerPlay());
    resultsWindow.appendChild(rockChoice);
})
paperButton.addEventListener('click', () => {
    const paperChoice = document.createElement('p');
    paperChoice.textContent = playRound('paper', computerPlay());
    resultsWindow.appendChild(paperChoice);
})
scissorsButton.addEventListener('click', () => {
    const scissorsChoice = document.createElement('p');
    scissorsChoice.textContent = playRound('scissors', computerPlay());
    resultsWindow.appendChild(scissorsChoice);
})