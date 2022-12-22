let buttonArray = document.querySelectorAll('#buttons');
let result = document.querySelector('#winner');
let resetButton = document.querySelector('#reset');
let playerScore = document.querySelector('#playerscore');
// let userScore = document.querySelector('#score');
let computerScore = document.querySelector('#computerscore');
// let resetButton = document.q


const scoreboard = {
  player: 0,
  computer: 0
};

function play(e) {
  const userChoice = e.target.id;
  const computerChoice = getcomputerchoice();
  const winner = getWinner(userChoice, computerChoice);
  //console.log(userChoice, computerChoice, winner);
  showWinner(winner)

}

function getcomputerchoice(min, max) {
  let choice = Math.floor((Math.random)() * 3) + 1;

  if (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';
}

function getWinner(u, c) {

  if (u === 'paper' && c === 'rock' || u === 'rock' && c === 'scissors' || u === 'scissors' && c === 'paper') { scoreboard.player++, playerScore.innerHTML = `${scoreboard.player}` }
  else if (u === 'rock' && c === 'paper' || u === 'paper' && c === 'scissors' || u === 'scissors' && c === 'rock') { scoreboard.computer++, computerScore.innerHTML = `${scoreboard.computer}` }
  // else scoreboard.player++, scoreboard.computer++
  else console.log('draw')


}
function showWinner() {
  console.log(scoreboard.player, scoreboard.computer)
  if (scoreboard.player === 5) {
    console.log("you win")
    result.innerHTML = 'you win! play again?'
    buttonArray.forEach((buttonArray) => { buttonArray.removeEventListener('click', play) })
  }
  else if (scoreboard.computer === 5) {
    console.log('you lose!, play again?')
    result.innerHTML = 'you lose'
    buttonArray.forEach((buttonArray) => { buttonArray.removeEventListener('click', play) })
  }


}

function resetscore() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  playerScore.innerHTML = `${scoreboard.player}`
  computerScore.innerHTML = `${scoreboard.computer}`
  result.innerHTML = " "

  buttonArray.forEach((buttonArray) => { buttonArray.addEventListener('click', play) })
}



buttonArray.forEach((buttonArray) => { buttonArray.addEventListener('click', play) })
resetButton.addEventListener('click', resetscore)


