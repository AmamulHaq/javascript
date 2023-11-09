const prompt = require("prompt-sync")();
let i = 0;
let num;
console.log("Enter intervals to guess numbers in between");
let min = parseInt(prompt("Enter minimum number: "));
let max = parseInt(prompt("Enter maximum number: "));

let range = Math.abs(max - min);
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let x = random(min, max);
console.log("There are " + range + " numbers in interval ");

do {
  let num = parseInt(prompt("Enter your guess number:"));

  if (num === x) {
    console.log(" " + num + " is equal to the actual number " + x);
    console.log("The game is over..");
    break;
  }
  if (num !== x) {
    switch (true) {
      case num > x:
        console.log(" " + num + " is greater than actual number ");
        break;
      case num < x:
        console.log(" " + num + " is less than actual number ");
        break;
    }
    i = i + 1;
  }
} while (num !== x);
console.log("Your score is " + ((range - i) * 100) / range);
