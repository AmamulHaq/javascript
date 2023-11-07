const prompt = require("prompt-sync")();
let p = parseInt(prompt("Enter principle amount: "));
let t = parseInt(prompt("Enter time period for : "));
let r = parseInt(prompt("Enter rate of interest: "));


let a = p * (1 + r / 100) ^ (t);
let c = a-p;

console.log("The compound interest is  ",c);
console.log("The total amount is  ",a);
