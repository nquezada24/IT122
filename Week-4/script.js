const computerPickDisplay = document.getElementById('computerPick');
const playerPickDisplay = document.getElementById('playerPick');
const resultDisplay = document.getElementById('result');
const possiblePicks = document.querySelectorAll('button');

let playerPick
let computerPick
let result

possiblePicks.forEach(possiblePick => possiblePick.addEventListener('click', (e) => {
  playerPick = e.target.id
  playerPickDisplay.innerHTML = playerPick
  generateComputerPick()
  getResult()
}));

function generateComputerPick() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  //console.log(randomNumber)
  
  if (randomNumber === 1) {
    computerPick = 'rock'
  }
  if (randomNumber === 2) {
    computerPick = 'scissors'
  }
  if (randomNumber === 3) {
    computerPick = 'paper'
  }
  computerPickDisplay.innerHTML = computerPick
};

function getResult(){
    if (computerPick === playerPick) {
      result = 'its a draw!'
    }
    if (computerPick === 'rock' && playerPick === "paper") {
      result = 'you win!'
    }
    if (computerPick === 'rock' && playerPick === "scissors") {
      result = 'you lost!'
    }
    if (computerPick === 'paper' && playerPick === "scissors") {
      result = 'you win!'
    }
    if (computerPick === 'paper' && playerPick === "rock") {
      result = 'you lose!'
    }
    if (computerPick === 'scissors' && playerPick === "rock") {
      result = 'you win!'
    }
    if (computerPick === 'scissors' && playerPick === "paper") {
      result = 'you lose!'
    }
    resultDisplay.innerHTML = result
  };