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
        return ('Player wins')
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`Player: ${playerSelection} vs Computer: ${computerSelection}`)
        return ('Computer wins')
    } else if (playerSelection === computerSelection) {
        console.log(`Player: ${playerSelection} vs Computer: ${computerSelection}`)
        return 'Draw'
    } else {
        console.log('somethings wrong')

    }
}

console.log(playRound(playerPrompt(), computerPlay()))