console.log('hello helpp');
//computer choice
let result = []
function getcomputerchoice(min, max) {
  let choice = Math.floor((Math.random)() * 3) + 1;

  if (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';
}



function playgame() {

  function getuserchoice() {
    let userinput = window.prompt("rock,paper,scissors");
    return userinput
  }

  const playround = function playround(user, computer) {
    //let result = '';
    user = getuserchoice();
    computer = getcomputerchoice()
    if (user === 'paper' && computer === 'rock' || user === 'rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') { result.push(1) }
    else if (user === 'rock' && computer === 'paper' || user === 'paper' && computer === 'scissors' || user === 'scissors' && computer === 'rock') { result.push(-1) }
    else if (user === computer) { result.push(0) }

    else return alert('please try again!');//make return
    return result;
  }

  let play = playround()


  return play;

}


let score = function getScore() {
  let sum = 0;
  playgame()
  for (i = 0; i < 4; i++) {
    playgame()
    sum += result[i];
  }
  if (sum <= 0) { return console.log('lose', sum) }
  { return console.log('win', sum) }

}
score()

