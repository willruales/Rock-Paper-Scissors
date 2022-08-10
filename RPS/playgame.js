console.log('hello helpp');

let computer= getcomputerchoice()
let user = getuserchoice()

playgame(user, computer)

function getuserchoice (){let userinput = window.prompt("rock,paper,scissors");
return userinput}

function getcomputerchoice (min,max) {let choice = Math.floor((Math.random)()*3) + 1; 

  if  (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';}


function playgame(user,computer){  //learn syntax for functions and variables//
  

  if (user === 'paper' && computer === 'rock' || user ==='rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') alert ('win')
  if (user === 'rock' && computer === 'paper') alert ('loser');
  if (user === 'paper' && computer === 'scissors')alert ('loser'); 
  if  (user === 'scissors' && computer === 'rock')alert ('loser'); 
  
  else return 'lose'

}