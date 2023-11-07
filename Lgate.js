
const prompt = require("prompt-sync")();
console.log("Know condition for AND gate..");
console.log("Enter 1 for true and 0 for false");

let validInputs = false;
do {
  console.log("Enter any two inputs...");
  let a = parseInt(prompt());
  let b = parseInt(prompt());
  console.log("AND gate for (" + a, b + "),");

  if ((a === 1 || a === 0) && (b === 1 || b === 0)) {
    if (a === 1 && b === 1) {
      console.log("Output is 1");
    } else {
      console.log("Output is 0");
    }
    validInputs = true;
  } else {
    console.log("Invalid input values.. Please try again.");
  }
} while (!validInputs);
