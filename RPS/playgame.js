console.log('hello helpp');


const userchoice = function getuserchoice (){let userinput = window.prompt("rock,paper,scissors");
return userinput}




const play =function playgame(computer,user){  //learn syntax for functions and variables//
  user = userchoice()
  if (user === 'rock') return 'win'
  if (user === 'paper' && computer === computer) return 'win1'
  else return 'lose'

}
let p = play()
console.log(p)

const computerchoice = function getcomputerchoice (min,max) {let choice = Math.floor((Math.random)()*3) + 1; 

    if  (choice == "1") return 'rock';
    else if (choice == "2") return 'paper';
    else return 'scissors';}

let computer= computerchoice()