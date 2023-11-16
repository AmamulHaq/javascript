const prompt = require("prompt-sync")();

let myNum = parseInt(prompt("Enter any two different Numbers: "));
let herNum = parseInt(prompt(""));

let myFloatNum = parseFloat(prompt("Enter any two different Decimal Numbers: "));
let herFloatNum = parseFloat(prompt(""));

let myLetter = prompt("Enter any two different Alphabets: ")[0];
let herLetter = prompt("")[0];

let myName = prompt("Enter any two different Names of friends: ");
let herName = prompt("");

console.log("my number is " + myNum + " and your number is " + herNum);
console.log("my float number is " +myFloatNum +" and your float number is " +herFloatNum);
console.log("my alphabet is " + myLetter + " and your alphabet is " + herLetter);
console.log("my name is " + myName + " and your name is " + herName);
