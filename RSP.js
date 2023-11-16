const prompt = require("prompt-sync")();
let x,
  i = 0,
  c = 0,
  n = 0;

let name = prompt("Do you know RSP..Enter your name: ");

while (i < 3) {
  let x = parseInt(
    prompt("\nEnter 0 for rock \t Enter 1 for paper \t Enter 2 for scissors: ")
  );

  if (x >= 0 && x <= 2) {
    function random(max) {
      return Math.floor(Math.random() * max);
    }
    let comp = random(3);

    if (x == comp) {
      console.log("It's a draw!\n");
    } else if (
      (x == 0 && comp == 2) ||
      (x == 1 && comp == 0) ||
      (x == 2 && comp == 1)
    ) {
      console.log("This round is win by " + name);
      n++;
    } else {
      console.log("Computer win this round ");
      c++;
    }

    i++;
  } else {
    console.log("Invalid input. Please enter 0, 1, or 2.\n");
  }
}
if (c > n) {
  console.log("Computer wins the game!\n");
} else if (n > c) {
  console.log(" " + name + " wins the game!");
} else {
  console.log("The game is a draw!");
}
