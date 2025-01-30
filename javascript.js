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

