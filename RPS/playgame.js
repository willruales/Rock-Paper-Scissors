console.log('hello helpp');
//computer choice
let result = '';
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

  const playr = function playround(user, computer) {
    //let result = '';
    user = getuserchoice();
    computer = getcomputerchoice()
    if (user === 'paper' && computer === 'rock' || user === 'rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') { result = +1 }
    else if (user === 'rock' && computer === 'paper' || user === 'paper' && computer === 'scissors' || user === 'scissors' && computer === 'rock') { result = -1; }
    else if (user === computer) { return result = +0 }

    else return alert('please try again!');//make return
    return result;
  }

  let play = playr()

  console.log(result);
  return play;

}


let score = function getScore() {
  playgame()
  for (i = 0; i < 2; i++) {
    playgame()

  }

}
score()

