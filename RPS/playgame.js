console.log('hello helpp');

let computer= getcomputerchoice


const user1 = function getuserchoice (){  let userinput = window.prompt("rock,paper,scissors");
return userinput}
let user = user1()
console.log(user)

//computer choice

function getcomputerchoice (min,max) {let choice = Math.floor((Math.random)()*3) + 1; 

  if  (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';}



// playround 

function playgame(){      
let playr=playround()



function playround(user,computer){ 
    let result = ''
    if (user === 'paper' && computer === 'rock' || user ==='rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') {return result +2}
    else if (user === 'rock' && computer === 'paper' ||user === 'paper' && computer === 'scissors' || user === 'scissors' && computer === 'rock') { return result +5;}
  else if (user === computer){ return result +1 }
    
    else return alert ('please try again!');
    }

return console.log(playr)

}

//console.log(playround(user,computer))

playgame()