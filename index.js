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

// console.log(playRound(playerPrompt(), computerPlay()))

const game = () => {
    for (let i = 0; i < 5; i++) {
        playRound(playerPrompt(), computerPlay())
    }

    if (playerScore > computerScore) {
        console.log('Player wins the match')
    } else if (playerScore < computerScore) {
        console.log('Computer wins the match')
    } else if (playerScore === computerScore) {
        console.log('Nobody wins')
    }
}

game()