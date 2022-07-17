const gameOptions = ["Rock", "Paper", "Scissors"];

// Function to get computer choice

function getComputerChoice(){
    const randomNumber = Math.round(Math.random() * 2);
    const compChoice = gameOptions[randomNumber];
    return compChoice;
}

// Function for one-round play

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

// Function to play 5-round game

function game(){
    
    let wins = [];
    let losses = [];
    for(let i = 0; i < 5; i++){
        let round = playRound();
        if(round === "You win!"){
            wins.push("You win");
        }
        if(round === "You lose!"){
            losses.push("You lose");
        }

        console.log(round);
    }
// Function to sum up the game
    function summary(){
        console.log(wins, losses);
        if(wins.length === losses.length){
            return "You drew the game!";
        }
        else if(wins.length > losses.length) {
            return "You have won the game!";
        }
        else {
            return "You have lost the game!"
        }
        
    }
    

console.log(summary());
}

game();
