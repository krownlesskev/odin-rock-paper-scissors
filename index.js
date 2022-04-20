const computerPlay = () => {
    let computerChoice = (Math.round(Math.random() * 2))

    switch(computerChoice) {
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

