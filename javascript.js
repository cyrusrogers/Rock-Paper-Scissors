function getComputerChoice () {
  let computer;
   computer=Math.random();
   if (computer <= 0.333) {
       return "Rock"
   } else if (computer > 0.33 && computer <=0.66) {
       return "Paper"
   } else {
      return "Scissors"
   }    
}


function getHumanChoice () {
    playerMove = prompt("Enter playerMove(\"Rock\",\"Paper\" or \"Scissors\"):");
    return playerMove;
}


let computerScore = 0;
let humanScore = 0;
let tie = 0;
let humanChoice;
let computerChoice;
function getHumanChoice () {
    playerMove = prompt("Enter playerMove(\"Rock\",\"Paper\" or \"Scissors\"):");
    return playerMove;
}
humanChoice = getHumanChoice ()
computerChoice = getComputerChoice ()

function playRound (humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`humanChoice:${humanChoice} computerChoice ${computerChoice}.It's a Tie!`);
        tie++;
    } else if ((humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper") || (humanChoice == "Rock" && computerChoice == "Scissors")) {
        console.log(`humanChoice:${humanChoice} computerChoice ${computerChoice}.You Win!!`);
        humanScore++;
    } else if ((humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock") || (humanChoice == "Rock" && computerChoice == "Paper")) {
       console.log(`humanChoice:${humanChoice} computerChoice ${computerChoice}.You Lose!!`);
        computerScore++;
    } else {
        console.log("Invalid Input.")
    }
}
playRound (humanChoice,computerChoice)