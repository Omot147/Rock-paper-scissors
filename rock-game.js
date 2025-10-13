
 //code gets user choice
function getHumanChoice(){
    let humanChoice = prompt('Enter rock, paper or scissors to defeat the monster(AI):', '');
    return humanChoice;
}
console.log('human input:', getHumanChoice());

  // Javascript code for Rock-paper-scissors game
function getComputerChoice(){
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  if (randomChoice === 1){
     return 'rock';
  }else if(randomChoice === 2){
   return 'paper';
  }else{
   return 'scissors';
  }

}
         let computerChoice = getComputerChoice();
        console.log('computer output:', computerChoice);
      

   function playgame(){
       let humanScore = 0;
       let computerScore = 0;
       
       function playRound(humanChoice , computerChoice){
     if(humanChoice !== computerChoice && humanChoice === 'rock' && computerChoice === 'scissors'){
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
     console.log(`USER SCORE: ${humanScore}; COMPUTER SCORE: ${computerScore}`);
}
      playRound(getHumanChoice(), getComputerChoice());

     for(i = 1; i <= 5; i++){
         const humanSelection = getHumanChoice();
         const computerSelection = getComputerChoice();
         playRound(humanSelection, computerSelection);
       
           if (i === 5) {
      if (humanScore === computerScore) {
        console.log(`Game's over! TIE`);
      } else if (humanScore > computerScore) {
        console.log(`Game's over! VICTORY`);
      } else {
        console.log(`Game's over! DEFEAT`);
      }
      console.log('Your total:',humanScore);
      console.log('computer total:', computerScore);
     }  
   }
}
   playgame();

