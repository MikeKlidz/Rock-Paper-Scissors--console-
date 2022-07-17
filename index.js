const gameOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    const randomNumber = Math.round(Math.random() * 2);
    const compChoice = gameOptions[randomNumber];
    return compChoice;
}

console.log(getComputerChoice());