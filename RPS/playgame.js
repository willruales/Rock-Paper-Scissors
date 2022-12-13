let result = []
let buttonArray = document.querySelectorAll('Button');

function getcomputerchoice(min, max) {
  let choice = Math.floor((Math.random)() * 3) + 1;

  if (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';
}

function getuserchoice(e) {
  console.log(e.target.id);
}




const playround = function playround(e, user, computer) {
  user = e.target.id;
  computer = getcomputerchoice()
  if (user === 'paper' && computer === 'rock' || user === 'rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') { result.push(1) }
  else if (user === 'rock' && computer === 'paper' || user === 'paper' && computer === 'scissors' || user === 'scissors' && computer === 'rock') { result.push(-1) }
  else if (user === computer) { result.push(0) }

  else return alert('please try again!');//make return
  return result;
  //console.log(result)
}




let score = function getScore() {
  let sum = 1;
  buttonArray.forEach((buttonArray) => { buttonArray.addEventListener('click', playround) })
  for (i = 0; i < 4; i++) {

    sum += result[i];
  }
  console.log(sum);
  //console.log(result)
}
score()

