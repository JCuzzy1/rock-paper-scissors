const choices = ["rock", "paper", "scissors"]; // created an array of strings for the computer choices

function game() { //To play the game 5 times I repeated 5 times. I don't yet know how to loop. Will revist.
    playOneRound();
    playOneRound();
    playOneRound();
    playOneRound();
    playOneRound();
}

function playOneRound() { // play one round function. Include varialbes for player and computer selections. And a variable for my if else conditions to determine results.
    const playerSelection = playerChoice();
    console.log(playerSelection); // console.logs for each variable to check in the console.
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const result = checkResults(playerSelection,computerSelection);
    console.log(result);

}

function playerChoice() { 
    let input = prompt("Enter rock, paper or scissors"); //input prompt, case insensitive. Would like to make it so invalid inputs don't crash the code but haven't yet learned how to do that. Will revisit.
    input = input.toLowerCase();
    return input; //return the input so the player choice passes through my condition statements. I didn't do this at first and the game wouldn't work.

}

function getComputerChoice() { // this function gets the computer to randomly choose rock, paper, or scissors
    return choices[Math.floor(Math.random() * choices.length)];
}

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

}


//const playerSelection = playerChoice();
//const computerSelection = getComputerChoice();
//console.log(playOneRound(playerSelection, computerSelection));

game(); //had to run game(); to get results on the browser.
