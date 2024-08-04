const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choice');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = e.target.textContent;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            computerChoice = 'rock';
            computerChoiceDisplay.innerHTML = '✊';
            break;
        case 1:
            computerChoice = 'paper';
            computerChoiceDisplay.innerHTML = '✋';
            break;
        case 2:
            computerChoice = 'scissors';
            computerChoiceDisplay.innerHTML = '✌️';
            break;
    }
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    } else if (
        (computerChoice === 'rock' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'rock')
    ) {
        result = 'You lost!';
    } else {
        result = 'You win!';
    }
    resultDisplay.innerHTML = result;
}
