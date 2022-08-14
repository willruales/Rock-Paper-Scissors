console.log('hello helpp');



function getuserchoice (){  let userinput = window.prompt("rock,paper,scissors");
return userinput}



//computer choice

function getcomputerchoice (min,max) {let choice = Math.floor((Math.random)()*3) + 1; 

  if  (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';}



// playround 

 
function playgame(){


const playr = function playround(user,computer){ 
    let result = 0
    user = getuserchoice()
    computer = getcomputerchoice()
    if (user === 'paper' && computer === 'rock' || user ==='rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') {return result +2}
    else if (user === 'rock' && computer === 'paper' ||user === 'paper' && computer === 'scissors' || user === 'scissors' && computer === 'rock') { return result +5;}
  else if (user === computer){ return result +66}
    
    else return alert ('please try again!');
    }

let play = playr()


console.log(play)}
playgame()