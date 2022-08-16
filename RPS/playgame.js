console.log('hello helpp');


function getcomputerchoice (min,max) {let choice = Math.floor((Math.random)()*3) + 1; 

  if  (choice == "1") return 'r';
  else if (choice == "2") return 'p';
  else return 's';}

// playround
 
function playgame(){
  
  function getuserchoice (){  let userinput = window.prompt("rock,paper,scissors");
  return userinput}
  for (let i = 0; i < 2; i++) {
  getuserchoice();

  }

const playr = function playround(user,computer){ 
    let result = 0;

    user = getuserchoice()

    computer = getcomputerchoice()
    if (user === 'p' && computer === 'r' || user ==='r' && computer === 's' || user === 's' && computer === 'p') {return result =+1}
    else if (user === 'r' && computer === 'p' ||user === 'p' && computer === 's' || user === 's' && computer === 'rock') { return result =-1;}
  else if (user === computer){ return result =+0}
    
    else return alert ('please try again!');
    }

let play = playr()


console.log(play)}
playgame()