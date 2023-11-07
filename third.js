const ps = require("prompt-sync")
const prompt = ps();
let name=prompt("Enter your name..");
let age = parseInt(prompt("Enter your age.."));
console.log("your name is " +name+" and your age is " +age);