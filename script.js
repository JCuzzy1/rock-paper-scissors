const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === playerChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === "rock" && playerChoice === "paper") {
        result = 'You win! Paper smothers Rock!'
    }
    if (computerChoice === "rock" && playerChoice === "scissors") {
        result = 'You lose. Rock blunts Scissors.'
    }
    if (computerChoice === "paper" && playerChoice === "scissors") {
        result = 'You Win! Scissors cuts Paper!'
    }
    if (computerChoice === "paper" && playerChoice === "rock") {
        result = 'You lose. Paper smothers Rock.'
    }
    if (computerChoice === "scissors" && playerChoice === "rock") {
        result = 'You Win! Scissors blunts Rock!'
    }
    if (computerChoice === "scissors" && playerChoice === "paper") {
        result = 'You lose. Scissors cuts Paper.'
    }
    resultDisplay.innerHTML = result
}
