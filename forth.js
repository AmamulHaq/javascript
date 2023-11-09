const prompt = require("prompt-sync")();
/*
console.log("Enter intervals in between a , b ");
let a = parseInt(prompt("Enter minimum number a: "));
let b = parseInt(prompt("Enter maximum number b: "));
let range = Math.abs(b - a);
console.log("There are " + range + " numbers between a and b ");
console.log("the scored percentage is ", ((range + 1 - n) / range) * 100);
*/
let i = 0;
let n;
do {
  n = parseInt(prompt("Enter your number:"));
  if (n !== 4) {
    i = i + 1;
  }
} while (n !== 4);
console.log(i);

