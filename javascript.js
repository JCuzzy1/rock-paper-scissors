const choices = ["rock", "paper", "scissors"]; // created an array of strings for the computer choices
let result;
let playerScore = 0
let computerScore = 0
let playerSelection;
const btnBox = document.querySelector(".selections");
const buttons = document.querySelectorAll("button");
const roundsBox = document.querySelector(".rounds");
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#compScore");

/* For now, remove logic that plays 5 rounds 
function game() { //To play the game 5 times I repeated 5 times. I don't yet know how to loop. Will revist.
    playOneRound();
    playOneRound();
    playOneRound();
    playOneRound();
    playOneRound();
} */

buttons.forEach((button) => {

    button.addEventListner('click', () => {
        playerSelection = button.textContent;
        playOneRound(computerSelection());
        game();
    });
});

const computerSelection = function () { // this function gets the computer to randomly choose rock, paper, or scissors
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(computerSelection) { // play round function. Include varialbes for player and computer selections. And a variable for my if else conditions to determine results.
    const h1 = document.createElement("h1");
    const oneRound = document.createElement("div");
    oneRound.classList.add("oneRound");
    if (playerSelection === computerSelection) {
        h1.textContent = "It's a Tie";
    }
        else if (playerSelection === "rock" && computerSelection == "paper") {
        h1.textContent = "You Lose! Paper beats Rock";
        computerScore += 1;
    }
        else if (playerSelection === "rock" && computerSelection == "scissors") {
        h1.textContent = "You Win! Rock beats Scissors";
        playerScore += 1;
    }
        else if (playerSelection === "scissors" && computerSelection == "rock") {
        h1.textContent = "You Lose! Rock beats Scissors";
        computerScore += 1;
    }
        else if (playerSelection === "scissors" && computerSelection == "paper") {
        h1.textContent = "You Win! Scissors beats Paper";
        playerScore += 1;
    }
        else if (playerSelection === "paper" && computerSelection == "scissors") {
        h1.textContent = "You Lose! Scissors beats Paper";
        computerScore += 1;
    }
        else{ playerSelection === "paper" && computerSelection == "rock" ;
        h1.textContent = "You Win! Paper beats Rock";
        playerScore += 1;
    }
    oneRound.appendChild(h1);
    roundsBox.prepend(oneRound);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;


    /*const playerSelection = playerChoice();
    console.log(playerSelection); // console.logs for each variable to check in the console.
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const result = checkResults(playerSelection,computerSelection);
    console.log(result); */

}

/* function playerChoice() { 
    let input = prompt("Enter rock, paper or scissors"); //input prompt, case insensitive. Would like to make it so invalid inputs don't crash the code but haven't yet learned how to do that. Will revisit.
    input = input.toLowerCase();
    return input; //return the input so the player choice passes through my condition statements. I didn't do this at first and the game wouldn't work.

} */

/*
function checkResults(choiceP, choiceC) { // function with if else conditions, considering all of the possible outcomes and returning a message.
    if (choiceP === choiceC) {
        return ("It's a Tie");
    }
    else if (choiceP === "rock" && choiceC == "paper") {
        return ("You Lose! Paper beats Rock");
    }
    else if (choiceP === "rock" && choiceC == "scissors") {
        return ("You Win! Rock beats Scissors");
    }
    else if (choiceP === "scissors" && choiceC == "rock") {
        return ("You Lose! Rock beats Scissors");
    }
    else if (choiceP === "scissors" && choiceC == "paper") {
        return ("You Win! Scissors beats Paper");
    }
    else if (choiceP === "paper" && choiceC == "scissors") {
        return ("You Lose! Scissors beats Paper");
    }
    else{ choiceP === "paper" && choiceC == "rock" ;
        return ("You Win! Paper beats Rock");
    }

} */


//const playerSelection = playerChoice();
//const computerSelection = getComputerChoice();
//console.log(playOneRound(playerSelection, computerSelection));

function game() {
    const finalResult = document.createElement("div");
    finalResult.classList.add("rounds");
    if (playerScore != 5 && computerScore != 5) {
        return
    }   else if (playerScore == 5) {
        finalResult.textContent = "You win the game! :)";

    }   else if (computerScore ==5) {
        finalResult.textContent = "You lose the game :(";
    }
    roundsBox.prepend(finalResult);
    btnBox.replacewith(finalResult);
};
