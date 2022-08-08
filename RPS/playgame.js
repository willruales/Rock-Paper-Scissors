console.log('hello helpp');


const game = [ 'rock', 'paper', 'scissors']; 



function getcomputerchoice (min,max) {let choice = Math.floor((Math.random)()*3) + 1; 

    if  (choice == ("1")) {console.log('rock');}
    else if (choice == "2") {console.log('paper');}
    else {console.log('scissor');}}
    
getcomputerchoice();

function getuserchoice (){let userinput = window.prompt("rock,paper,scissors");
return userinput}

console.log(getuserchoice());

/*function playgame( getcomputerchoice, getuserchoice) {
  if (getcomputerchoice == 'rock' && getuserchoice == 'paper'){console.log("rock beats paper");}
else if (getcomputerchoice == 'paper' && getuserchoice == 'paper'){console.log("paper beats rock");}
else {console.log('WORKS!');} */

function playgame(getcomputerchoice, getuserchoice) {
    let outcome = getcomputerchoice() + getuserchoice()
    return outcome};

console.log(playgame());
qqqqqq