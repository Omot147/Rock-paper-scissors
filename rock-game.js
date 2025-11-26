const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = '#fff';
    choiceDisp.style.border = '2px solid #fff';
    choiceDisp.style.backgroundColor = 'blue';
});

const lightMode = document.getElementById('remove');
lightMode.addEventListener('click', () => {
     document.body.style.backgroundColor = '#fff';
    document.body.style.color = 'black';
    choiceDisp.style.border = '2px solid black';
    choiceDisp.style.backgroundColor = 'black';
    choiceDisp.style.color = '#fff';
});

const reset = document.getElementById('refresh');
reset.addEventListener('click', () => {
    location.reload();
});



 
const choiceDisp = document.querySelector('#display');
const score = document.querySelector('#score');
const resultDisp = document.querySelector('#result');
const over = document.querySelector('#end');

const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
 
    output = (playerChoice, computerChoice) => 
        (playerChoice === computerChoice) ? "IT'S A TIE!" 
        : (playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper') ? 'YOU WIN!'
        : 'YOU LOSE!';
        const result = output(playerChoice, computerChoice);
        
       choiceDisp.textContent = `YOU: ${playerChoice}  |  COMPUTER: ${computerChoice}`;
       resultDisp.textContent = result;

       resultDisp.style.backgroundColor = result === "IT'S A TIE!" ? 'blue'
       : result === 'YOU WIN!' ? 'green' : 'red';
       resultDisp.style.border = '2px solid transparent';

       if(result === 'YOU WIN!'){
        playerScore++;
        score.textContent = `YOU: ${playerScore} | COMPUTER: ${computerScore}`;
       }else if(result === 'YOU LOSE!'){
         computerScore++;
        score.textContent = `YOU: ${playerScore} | COMPUTER: ${computerScore}`;
       }else{
        return;
       }

       if(playerScore === 5 && computerScore < 5){
        over.textContent = 'YOU WON! GAME OVER';
       }else if(computerScore === 5 && playerScore < 5){
        over.textContent = 'YOU LOSE! DEFEATED...';
       }else{
        return;
       }


}
