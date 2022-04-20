const computerPlay = () => {
    let computerChoice = (Math.round(Math.random() * 2));

    switch (computerChoice) {
        case 0:
            computerChoice = 'Rock'
            break;
        case 1:
            computerChoice = 'Paper'
            break;
        case 2:
            computerChoice = 'Scissors'
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

