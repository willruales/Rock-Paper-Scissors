let result = []
function getcomputerchoice(min, max) {
  let choice = Math.floor((Math.random)() * 3) + 1;

  if (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';
}

function playgame() {


  let buttonArray = document.querySelectorAll('Button');

  function getuserchoice(e) {
    console.log(e.target.id);
  }
  buttonArray.forEach((buttonArray) => { buttonArray.addEventListener('click', getuserchoice) })


  const playr = function playround(user, computer) {
    //let result = '';
    user = getuserchoice();
    computer = getcomputerchoice()
    if (user === 'paper' && computer === 'rock' || user === 'rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') { result.push(1) }
    else if (user === 'rock' && computer === 'paper' || user === 'paper' && computer === 'scissors' || user === 'scissors' && computer === 'rock') { result.push(-1) }
    else if (user === computer) { result.push(0) }

    else return alert('please try again!');//make return
    return result;
  }

  let play = playr()


  return play;

}


let score = function getScore() {
  let sum = 0;
  playgame()
  for (i = 0; i < 4; i++) {
    playgame()
    sum += result[i];
  }
  console.log(sum);
}
score()

