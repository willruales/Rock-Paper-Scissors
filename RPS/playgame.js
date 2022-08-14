console.log('hello helpp');



let user = getuserchoice()
function getuserchoice(){let userinput = window.prompt("rock,paper,scissors");
return userinput}


function playgame(){      
let playr=playround()




function getcomputerchoice(min,max) {let choice = Math.floor((Math.random)()*3) + 1; 

  if  (choice == "1") return 'rock';
  else if (choice == "2") return 'paper';
  else return 'scissors';}




function playround(user,computer){ 
  let computer= getcomputerchoice()
    let result = ''
    if (user === 'paper' && computer === 'rock' || user ==='rock' && computer === 'scissors' || user === 'scissors' && computer === 'paper') {return result +1}
    else if (user === 'rock' && computer === 'paper' ||user === 'paper' && computer === 'scissors' || user === 'scissors' && computer === 'rock') { return result +2;}
  else if (user === computer){ return result +3 }
    
    else return alert ('please try again!');
    }

return console.log(playr)

}

//console.log(playround(user,computer))

playgame()