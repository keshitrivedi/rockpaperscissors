let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

updateScore();

/*
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}
    */

function playGame (playerMove) {
    let result = '';
    const computer = computerMove();

    if (playerMove === 'Scissors') {
        if (computer === `rock`) {
            result = `You Lose.`;
        }
        else if (computer === `paper`) {
            result = `You Win.`;
        }
        else {
            result = `Tie.`;
        }
    }

    if (playerMove === 'Paper') {
        if (computer === `rock`) {
        result = `You Win.`;
        }
        else if (computer === `paper`) {
            result = `Tie.`;
        }
        else {
            result = `You Lose.`;
        }
    }

    if (playerMove === 'Rock') {
        if (computer === `rock`) {
        result = `Tie.`;
        }
        else if (computer === `paper`) {
            result = `You Lose.`;
        }
        else {
            result = `You Win.`;
        }
    }

    if (result === 'You Win.') {
        score.wins ++;
    }
    else if (result === 'You Lose.') {
        score.losses ++;
    }
    else if (result === 'Tie.') {
        score.ties ++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-moves').innerHTML = `You picked ${playerMove}. Computer picked ${computer}.`

    document.querySelector('.js-result').innerHTML = result;

}

function updateScore () {
    document.querySelector('.js-score').innerHTML = `Wins: <span class = "score-number">${score.wins}</span> Losses: <span class = "score-number">${score.losses}</span> Ties: <span class = "score-number">${score.ties}</span>`;
}

function computerMove () {
    const Random = Math.random()
    let computer = ``;
    
    if(Random>=0 && Random<1/3) {
        computer = `rock`;
    }
    else if(Random>=1/3 && Random<2/3) {
        computer = `paper`;
    }
    else {
        computer = `scissor`;
    }

    return computer;
}