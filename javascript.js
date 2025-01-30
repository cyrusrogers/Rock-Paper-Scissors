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

let playerMove;
computer = getComputerChoice ();
playerMove = prompt("Enter playerMove(\"Rock\",\"Paper\" or \"Scissors\"):");
if (playerMove == computer) {
    console.log(`playerMove:${playerMove} computerMove:${computer}.It's a Tie!`)

}

else if ((playerMove == "Paper" && computer == "Rock") || (playerMove == "Scissors" && computer == "Paper") || (playerMove == "Rock" && computer == "Scissors")) {
    console.log(`playerMove:${playerMove} computerMove:${computer}.You Win!`)
} else {
    console.log(`playerMove:${playerMove} computerMove:${computer}.You Lose!`)
}

