  // Javascript code for Rock-paper-scissors game
 alert('WELCOME TO THE ROCK,PAPER SCISSORS GAME! Defeat the monster in 5 rounds(press the Fn + F12 key to open the console');
 console.log('PAGE LOADED... Let the game begin!');
 //function to get computer choice
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
        

        //function for entire game logic
  function playGame(){
    for(i = 1; i <= 5; i++){

//code gets user choice
  let humanChoice = prompt('Enter rock, paper or scissors to defeat the monster(AI):');
function getHumanChoice(humanChoice){
}
 if(humanChoice === 'rock' || 'paper' || 'scissors'){
  console.log('You:', humanChoice);
 }else{
  console.log('Invalid input! , please enter rock,paper or scissors');
 }
 console.log('computer output:', computerChoice);
       let humanScore = 0;
       let computerScore = 0;
      
      
       const humanSelection = getHumanChoice(humanChoice);
       const computerSelection = getComputerChoice();
 
       //function to play single round
       function playRound(humanSelection, computerSelection){
         if(humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'rock' && computerChoice === 'scissors'){
          console.log('You beat monster!');
          humanScore++;
         }else if(humanChoice === computerChoice){
          console.log('It is a tie!');
         }else{ 
          console.log('The monster defeated you!');
          computerScore++
         }
          console.log(`Round: ${i}`);
     console.log(`USER SCORE: ${humanScore}; COMPUTER SCORE: ${computerScore}`);
    
        }
         playRound(humanSelection, computerSelection);
           if (i === 5) { 
      if (humanChoice > computerChoice) {
        console.log(`GAME's OVER!, YOU WIN...`);
      } else{
        console.log(`GAME OVER!, The monster has defeated you...`);
      } 
     }  
   }
  }
   playGame();

