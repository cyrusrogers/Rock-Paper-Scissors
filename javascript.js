function getComputerChoice () {
  let computer;
   computer=Math.random();
   if (computer <= 0.333) {
       return "rock"
   } else if (computer > 0.33 && computer <=0.66) {
       return "paper"
   } else {
      return "scissors"
   }    
}


function getHumanChoice () {
    playerMove = prompt("Enter playerMove(\"Rock\",\"Paper\" or \"Scissors\"):").toLowerCase ();
    return playerMove;
}


let computerScore = 0;
let humanScore = 0;
let tie = 0;
let humanChoice;
let computerChoice;
/*function getHumanChoice () {
    playerMove = prompt("Enter playerMove(\"Rock\",\"Paper\" or \"Scissors\"):");
    return playerMove; 
} */
humanChoice = getHumanChoice ();
computerChoice = getComputerChoice ();

function playRound (humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`humanChoice:${humanChoice} computerChoice ${computerChoice}.It's a Tie!`);
        tie++;
    } else if ((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "rock" && computerChoice == "scissors")) {
        console.log(`humanChoice:${humanChoice} computerChoice ${computerChoice}.You Win!!`);
        humanScore++;
    } else if ((humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "paper")) {
       console.log(`humanChoice:${humanChoice} computerChoice ${computerChoice}.You Lose!!`);
        computerScore++;
    } else {
        console.log("Invalid Input.")
    }
}
playRound (humanChoice,computerChoice)