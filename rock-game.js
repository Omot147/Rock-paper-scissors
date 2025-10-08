 // Javascript code for Rock-paper-scissors game
function getComputerChoice(){
     let randomChoice = (Math.floor(Math.random * 3));
     let computerChoice;
       switch(randomChoice){
        case 1:
        computerChoice = 'rock';
        break;
        case 2:
            computerChoice = 'paper';
            break;
            case 3:
                commputerChoice = 'scissors';
                break;

       }
       console.log('computer output:',  computerChoice);
       return computerChoice;

}
 //code gets user choice
function getHumanChoice(){
    let humanChoice = prompt('Enter rock, paper or scissors to defeat the monster(AI):', '').toLowerCase();
    console.log('human output:', humanChoice);
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
     if(humanChoice !== computerChoice && humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        console.log('You win this round! Rock crushes scissors.');
     }else if(humanChoice !== computerChoice && humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        console.log('You win! paper covers rock.');
     }else if(humanChoice !== computerChoice && humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        console.log('You win! scissors cut paper');
     }else if(humanChoice === computerChoice){
        console.log('This round is a tie!');
     }else if(humanChoice !== computerChoice && computerChoice === 'rock' && humanChoice === 'scissors'){
        computerScore++;
        console.log('You lose! Rock crushes scissors.');
     }else if(humanChoice !== computerChoice && computerChoice === 'paper' && humanChoice === 'rock'){
        computerScore++;
        console.log('You lose! Paper covers Rock.');
     }else if(humanChoice !== computerChoice && computerChoice === 'scissors' && humanChoice === 'paper'){
        computerScore++;
        console.log('You lose! Scissors cuts Paper.');
     }else{
        console.log('Invalid input! , please enter rock,paper or scissors');
     }
}