const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#playerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll("#choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

}));

function computerTurn(){
    const ranNum = Math.floor(Math.random()*3) +1;

    switch(ranNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SICSSORS";
            break;    
    }
};

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You WIN! " : "You Lose!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You WIN! " : "You Lose!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You WIN! " : "You Lose!"
    }
};