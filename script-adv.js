function game() {
    let playerScore = 0;
    let computerScore = 0;

    const resultDisplay = document.querySelector('#result')
    const choicesDisplay = document.querySelector('#choices')
    const choices = ['rock', 'paper', 'scissors']
    const scoreBoard = document.querySelector(".scoreboard")
    const playerScoreDisplay = document.querySelector('#player-score')
    const computerScoreDisplay = document.querySelector('#computer-score')
    const gameWinnerDisplay = document.querySelector('#game-winner')

    const handleClick = (e) => {
        const playerChoice = e.target.innerHTML
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]
        playRound(playerChoice, computerChoice)

    }

    choices.forEach(choice => {
        const button = document.createElement('button')
        button.innerHTML = choice
        button.addEventListener('click', handleClick)
        choicesDisplay.appendChild(button)
    })

    function playRound(playerChoice, computerChoice) {
        if (computerChoice === playerChoice) {
            resultDisplay.innerHTML = 'its a draw!'
        }
        if (computerChoice === "rock" && playerChoice === "paper") {
            resultDisplay.innerHTML = 'You win! Paper smothers Rock!'
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
        }
        if (computerChoice === "rock" && playerChoice === "scissors") {
            resultDisplay.innerHTML = 'You lose. Rock blunts Scissors.'
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
        }
        if (computerChoice === "paper" && playerChoice === "scissors") {
            resultDisplay.innerHTML = 'You Win! Scissors cuts Paper!'
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
        }
        if (computerChoice === "paper" && playerChoice === "rock") {
            resultDisplay.innerHTML = 'You lose. Paper smothers Rock.'
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
        }
        if (computerChoice === "scissors" && playerChoice === "rock") {
            resultDisplay.innerHTML = 'You Win! Scissors blunts Rock!'
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
        }
        if (computerChoice === "scissors" && playerChoice === "paper") {
            resultDisplay.innerHTML = 'You lose. Scissors cuts Paper.'
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
        }
        if (playerScore == 5 || computerScore == 5) {
            stopGame();
        }
    }
    function stopGame() {
        if (computerScore > playerScore) {
            gameWinnerDisplay.innerHTML = 'COMPUTER WINS THE GAME.';
        }   else {
            gameWinnerDisplay.innerHTML = 'YOU WIN THE GAME!';
        }
    }      
}
game();