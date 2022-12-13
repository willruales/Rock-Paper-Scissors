let buttonArray = document.querySelectorAll('Button');


let arr = []

function play(e) {
  const userChoice = e.target.id;
  const computerChoice = getcomputerchoice();
  const winner = getWinner(userChoice, computerChoice);
  console.log(userChoice, computerChoice, winner)

}

function getcomputerchoice(min, max) {
  let choice = Math.floor((Math.random)() * 3) + 1;

  if (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';
}

function getWinner(user, computer) {

  if (user === 'paper' && computer === 'rock' || user === 'rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') { return 'win' }
  else if (user === 'rock' && computer === 'paper' || user === 'paper' && computer === 'scissors' || user === 'scissors' && computer === 'rock') { return 'lose' }
  else if (user === computer) { return 'draw' }

  else return alert('please try again!');//make return

}


buttonArray.forEach((buttonArray) => { buttonArray.addEventListener('click', play) })
