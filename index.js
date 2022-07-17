const gameOptions = ["Rock", "Paper", "Scissors"];


function getComputerChoice(){
    const randomNumber = Math.round(Math.random() * 2);
    const compChoice = gameOptions[randomNumber];
    return compChoice;
}

function playRound(playerChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors'..."), compChoice = getComputerChoice()) {
    let firstLetter = playerChoice.slice(0, 1).toUpperCase();
    let restOfWord =  playerChoice.slice(1, playerChoice.length).toLowerCase();
    const playerSelection = firstLetter.concat(restOfWord);
    
    if(playerSelection !== gameOptions[0] && playerSelection !== gameOptions[1] && playerSelection !== gameOptions[2]) return "Enter a valid word!";
    
    if(playerSelection === compChoice) return "You draw!";
    
    if(playerSelection === "Rock" && compChoice === "Scissors") 
    return "You win!";
    
    if(playerSelection === "Paper" && compChoice === "Rock") 
    
    return "You win!"
    
    if(playerSelection === "Scissors" && compChoice === "Paper") 
    return "You win!";
    
    else {
        return "You lose!";
    }
}
console.log(playRound());