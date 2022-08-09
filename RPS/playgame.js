console.log('hello helpp');


const game = [ 'rock', 'paper', 'scissors']; 


function playgame( computer, user) {
  if (computer == 'rock' && user == 'paper'){console.log("rock beats paper");}
else if (computer == 'paper' && user == 'paper'){console.log("paper beats rock");}
else {console.log('WORKS!');}}

playgame()

const computerchoice = function getcomputerchoice (min,max) {let choice = Math.floor((Math.random)()*3) + 1; 

    if  (choice == "1") return 'rock';
    else if (choice == "2") return 'paper';
    else return 'scissor';}

let computer = computerchoice(); 

console.log(computer)

const userchoice = function getuserchoice (){let userinput = window.prompt("rock,paper,scissors");
return userinput}

let user = userchoice()
console.log(user);