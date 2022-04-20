const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');



let playerScore = 0
let computerScore = 0
let playerChoice
let computerChoice



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

const playerPrompt = () => {
    let playerChoice = prompt('Rock, Paper Scissors?').toLowerCase();

    switch (playerChoice) {
        case 'rock':
            return playerChoice
        case 'paper':
            return playerChoice
        case 'scissors':
            return playerChoice
        default:
            return 'Please enter a valid choice'
    }
}

const playRound = (playerSelection, computerSelection) => {
    if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`Player: ${playerSelection} vs Computer: ${computerSelection}`)
        console.log('Player wins')
        playerScore++
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`Player: ${playerSelection} vs Computer: ${computerSelection}`)
        console.log('Computer wins')
        computerScore++
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
    } else if (playerSelection === computerSelection) {
        console.log(`Player: ${playerSelection} vs Computer: ${computerSelection}`)
        console.log('Draw')
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
    } else {
        console.log('somethings wrong')

    }
}


// const game = () => {
//     playRound(playerPrompt(), computerPlay())

//     if (playerScore > computerScore) {
//         console.log('Player wins the match')
//     } else if (playerScore < computerScore) {
//         console.log('Computer wins the match')
//     } else if (playerScore === computerScore) {
//         console.log('Nobody wins')
//     }
// }


rockButton.addEventListener('click', () => {
    playRound('rock', computerPlay())
})
paperButton.addEventListener('click', () => {
    playRound('paper', computerPlay())
})
scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerPlay())
})